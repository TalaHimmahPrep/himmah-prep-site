"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { COMMON_APP_PROMPTS, FULL_REVIEW_SCHOOLS, PACKAGES, type PackageId } from "../packages";

/* ────────────────────────────── types ────────────────────────────── */

type School = { name: string; round: string; deadline: string; why: string };
type Supplement = { school: string; prompt: string; limit: string; essay: string };
type Activity = {
  type: string;
  position: string;
  description: string;
  grades: string;
  hours: string;
  weeks: string;
};
type Honor = { title: string; level: string; grade: string };

export type Intake = {
  packageId: PackageId | "";
  student: {
    name: string;
    email: string;
    whatsapp: string;
    parentName: string;
    parentEmail: string;
    school: string;
    curriculum: string;
    gradYear: string;
    citizenship: string;
    major: string;
    earliestDeadline: string;
    feedbackBy: string;
  };
  schools: School[];
  personal: { prompt: number; draft: string; intent: string; essay: string };
  supplements: Supplement[];
  activities: Activity[];
  honors: Honor[];
  context: string;
  questions: string[];
  agree: boolean;
};

const STORAGE_KEY = "himmah_review_intake_v2";
const VALID_PACKAGES: ReadonlySet<string> = new Set(PACKAGES.map((p) => p.id));

const blankSchool = (): School => ({ name: "", round: "", deadline: "", why: "" });
const blankSupplement = (): Supplement => ({ school: "", prompt: "", limit: "", essay: "" });
const blankActivity = (): Activity => ({
  type: "",
  position: "",
  description: "",
  grades: "",
  hours: "",
  weeks: "",
});
const blankHonor = (): Honor => ({ title: "", level: "", grade: "" });

const EMPTY: Intake = {
  packageId: "",
  student: {
    name: "",
    email: "",
    whatsapp: "",
    parentName: "",
    parentEmail: "",
    school: "",
    curriculum: "",
    gradYear: "",
    citizenship: "",
    major: "",
    earliestDeadline: "",
    feedbackBy: "",
  },
  schools: [blankSchool(), blankSchool(), blankSchool()],
  personal: { prompt: 0, draft: "", intent: "", essay: "" },
  supplements: [blankSupplement()],
  activities: [blankActivity(), blankActivity(), blankActivity()],
  honors: [blankHonor()],
  context: "",
  questions: ["", "", ""],
  agree: false,
};

const LIMITS = {
  schools: 10,
  supplementEssays: FULL_REVIEW_SCHOOLS * 4,
  supplementSchools: FULL_REVIEW_SCHOOLS,
  activities: 10,
  honors: 5,
  personalWords: 650,
  activityChars: 150,
};

const ROUNDS = ["EA", "ED", "ED2", "REA", "SCEA", "RD", "Rolling", "Other"];
const CURRICULA = ["American", "IB", "British (IGCSE / A-Level)", "Saudi national", "Other"];
const LEVELS = ["School", "Regional", "State / National", "International"];
const ACTIVITY_TYPES = [
  "Academic",
  "Art",
  "Athletics: Club",
  "Athletics: JV/Varsity",
  "Career Oriented",
  "Community Service (Volunteer)",
  "Computer/Technology",
  "Cultural",
  "Dance",
  "Debate/Speech",
  "Environmental",
  "Family Responsibilities",
  "Foreign Exchange",
  "Internship",
  "Journalism/Publication",
  "Junior R.O.T.C.",
  "LGBT",
  "Music: Instrumental",
  "Music: Vocal",
  "Religious",
  "Research",
  "Robotics",
  "School Spirit",
  "Science/Math",
  "Social Justice",
  "Student Govt./Politics",
  "Theater/Drama",
  "Work (Paid)",
  "Other Club/Activity",
];

function words(s: string): number {
  const t = s.trim();
  return t ? t.split(/\s+/).length : 0;
}

/* ─────────────────────── section visibility ──────────────────────── */

type SectionKey =
  | "package"
  | "student"
  | "schools"
  | "personal"
  | "supplements"
  | "activities"
  | "honors"
  | "context"
  | "questions";

const SECTION_META: { key: SectionKey; label: string }[] = [
  { key: "package", label: "Package" },
  { key: "student", label: "Student" },
  { key: "schools", label: "School list" },
  { key: "personal", label: "Personal statement" },
  { key: "supplements", label: "Supplements" },
  { key: "activities", label: "Activities" },
  { key: "honors", label: "Honors" },
  { key: "context", label: "Context" },
  { key: "questions", label: "Your questions" },
];

function visibleSections(pkg: PackageId | ""): Set<SectionKey> {
  const base: SectionKey[] = ["package", "student", "schools", "context", "questions"];
  if (pkg === "personal") return new Set([...base, "personal"]);
  if (pkg === "activities") return new Set([...base, "activities", "honors"]);
  if (pkg === "full") return new Set([...base, "personal", "supplements", "activities", "honors"]);
  return new Set([...base, "personal", "supplements", "activities", "honors"]);
}

function distinctSchools(list: Supplement[]): number {
  return new Set(list.map((s) => s.school.trim().toLowerCase()).filter(Boolean)).size;
}

/* ────────────────────────────── component ────────────────────────── */

type Status = "idle" | "submitting" | "ok" | "error";

function cleanOrder(v: string | null): string {
  return (v ?? "").replace(/[^A-Za-z0-9-]/g, "").slice(0, 40);
}

export function IntakeForm() {
  const params = useSearchParams();
  const [orderNumber, setOrderNumber] = useState<string>(() => cleanOrder(params.get("order")));
  const [orderDraft, setOrderDraft] = useState("");
  const pkgParam = params.get("pkg");
  const [data, setData] = useState<Intake>(EMPTY);
  const [hydrated, setHydrated] = useState(false);
  const [savedAt, setSavedAt] = useState<Date | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [problems, setProblems] = useState<string[]>([]);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load from browser storage
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<Intake>;
        const packageId = VALID_PACKAGES.has(parsed.packageId ?? "") ? parsed.packageId! : "";
        setData({ ...EMPTY, ...parsed, packageId, student: { ...EMPTY.student, ...(parsed.student ?? {}) } });
        setSavedAt(new Date());
      }
    } catch {
      /* ignore */
    }
    // A package passed in the email link wins over whatever was saved.
    if (pkgParam && VALID_PACKAGES.has(pkgParam)) {
      setData((d) => ({ ...d, packageId: pkgParam as PackageId }));
    }
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function unlock(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const o = cleanOrder(orderDraft);
    if (o.length < 3) return;
    setOrderNumber(o);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("order", o);
      window.history.replaceState(null, "", url.toString());
    } catch {
      /* ignore */
    }
  }

  // Autosave, debounced
  useEffect(() => {
    if (!hydrated) return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        setSavedAt(new Date());
      } catch {
        /* storage unavailable */
      }
    }, 500);
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, [data, hydrated]);

  const update = useCallback(<K extends keyof Intake>(key: K, value: Intake[K]) => {
    setData((d) => ({ ...d, [key]: value }));
  }, []);

  const updateStudent = useCallback(
    (key: keyof Intake["student"], value: string) => {
      setData((d) => ({ ...d, student: { ...d.student, [key]: value } }));
    },
    [],
  );

  const visible = useMemo(() => visibleSections(data.packageId), [data.packageId]);
  const personalWords = words(data.personal.essay);
  const suppSchools = distinctSchools(data.supplements);

  function clearAll() {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    setData(EMPTY);
    setSavedAt(null);
    setProblems([]);
  }

  function validate(): string[] {
    const p: string[] = [];
    if (!data.packageId) p.push("Choose the package you purchased.");
    if (!data.student.name.trim()) p.push("Student full name is required.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.student.email.trim()))
      p.push("A valid student email is required.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.student.parentEmail.trim()))
      p.push("A valid parent email is required.");
    if (visible.has("personal") && data.packageId && !data.personal.essay.trim())
      p.push("Paste the personal statement.");
    if (visible.has("personal") && personalWords > LIMITS.personalWords)
      p.push(`The personal statement is over ${LIMITS.personalWords} words.`);
    if (visible.has("activities") && data.packageId && !data.activities.some((a) => a.position.trim() || a.description.trim()))
      p.push("Enter at least one activity.");
    if (visible.has("supplements") && suppSchools > LIMITS.supplementSchools)
      p.push(`Supplements cover ${suppSchools} schools. The Full Review includes ${LIMITS.supplementSchools}.`);
    if (!data.agree) p.push("Please confirm the note on how the review works.");
    return p;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    const p = validate();
    setProblems(p);
    if (p.length) {
      document.getElementById("review-problems")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setStatus("submitting");
    setError(null);

    const fd = new FormData(e.currentTarget);
    const payload = {
      ...data,
      orderNumber,
      // trim the arrays to what the package covers
      supplements: visible.has("supplements") ? data.supplements.slice(0, LIMITS.supplementEssays) : [],
      activities: visible.has("activities") ? data.activities : [],
      honors: visible.has("honors") ? data.honors : [],
      personal: visible.has("personal") ? data.personal : EMPTY.personal,
      website: fd.get("website"),
    };

    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(json.error ?? "Something went wrong. Your answers are still saved here. Please try again.");
        return;
      }
      setStatus("ok");
      try {
        window.localStorage.removeItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
    } catch {
      setStatus("error");
      setError("Couldn't reach the server. Your answers are still saved here. Please try again.");
    }
  }

  const selectedPackage = PACKAGES.find((p) => p.id === data.packageId);

  /* ─────────────────────────────── gate ────────────────────────────── */

  if (!orderNumber) {
    return (
      <main className="enroll-page">
        <header className="enroll-header">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.webp" alt="Himmah Prep" className="enroll-logo" />
          <p className="eyebrow">Application Review · Intake</p>
          <h1 className="enroll-title serif">
            This form opens from your <em>email.</em>
          </h1>
          <p className="enroll-subtitle">
            After you purchase a review, Himmah Prep emails you a personal link that
            opens this form with your order number filled in. Use that link, or enter
            the order number from your receipt below.
          </p>
        </header>
        <section className="review-gate">
          <form className="intake-form review-gate-form" onSubmit={unlock}>
            <label className="intake-label">
              <span>Order number</span>
              <input
                type="text"
                inputMode="numeric"
                value={orderDraft}
                onChange={(e) => setOrderDraft(e.target.value)}
                placeholder="From your Squarespace receipt, e.g. 00042"
                autoFocus
              />
            </label>
            <button type="submit" className="intake-submit" disabled={cleanOrder(orderDraft).length < 3}>
              Open the intake form
            </button>
            <p className="intake-hint review-gate-hint">
              Haven&apos;t purchased yet?{" "}
              <Link href="/review#packages" className="review-link">
                See the packages.
              </Link>
            </p>
          </form>
        </section>
        <footer className="enroll-footer">
          <p>
            Can&apos;t find the email? <a href="mailto:admissions@himmahprep.com">admissions@himmahprep.com</a>
          </p>
          <p className="enroll-copyright">&copy; {new Date().getFullYear()} Himmah Prep. All rights reserved.</p>
        </footer>
      </main>
    );
  }

  /* ───────────────────────────── success ───────────────────────────── */

  if (status === "ok") {
    return (
      <main className="enroll-page">
        <header className="enroll-header">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.webp" alt="Himmah Prep" className="enroll-logo" />
          <p className="eyebrow">Received · Order #{orderNumber}</p>
          <h1 className="enroll-title serif">
            Your intake is <em>in.</em>
          </h1>
          <p className="enroll-subtitle">
            Thank you, {data.student.name.split(" ")[0] || "there"}. A Himmah Prep
            consultant will read everything and reply to {data.student.email} and{" "}
            {data.student.parentEmail}
            {selectedPackage ? ` within ${selectedPackage.turnaround}` : ""}. Comments arrive in
            a shared document, with a one-page summary at the top.
          </p>
        </header>
        <section className="review-success">
          <h2 className="review-notes-title serif">
            What happens <em>next.</em>
          </h2>
          <ol className="review-success-list">
            <li>You receive a confirmation email shortly. If it is not there in ten minutes, check spam.</li>
            <li>Reviews are completed in order of deadline. If yours is urgent, reply to the confirmation and say so.</li>
            <li>When the review is ready, you get a link to the document. Read the summary first, then the comments.</li>
            <li>Revisions are not included. If you want a second read after revising, purchase the same package again.</li>
          </ol>
        </section>
        <footer className="enroll-footer">
          <p>
            Questions? <a href="mailto:admissions@himmahprep.com">admissions@himmahprep.com</a>
          </p>
          <p className="enroll-copyright">&copy; {new Date().getFullYear()} Himmah Prep. All rights reserved.</p>
        </footer>
      </main>
    );
  }

  /* ─────────────────────────────── form ────────────────────────────── */

  const nav = SECTION_META.filter((s) => visible.has(s.key));

  return (
    <main className="enroll-page">
      <header className="enroll-header">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.webp" alt="Himmah Prep" className="enroll-logo" />
        <p className="eyebrow">Application Review · Intake</p>
        <h1 className="enroll-title serif">
          Everything your consultant will <em>read.</em>
        </h1>
        <p className="enroll-subtitle">
          Fill in the sections for your package. The form saves in this browser as
          you type, so you can leave and come back. Paste essays as plain text.
        </p>
      </header>

      <div className="review-layout">
        <aside className="review-nav" aria-label="Sections">
          <ol>
            {nav.map((s, i) => (
              <li key={s.key}>
                <a href={`#sec-${s.key}`}>
                  <span className="review-nav-num">{i + 1}</span>
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
          <p className="review-save" aria-live="polite">
            {savedAt ? `Saved ${savedAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : "Not saved yet"}
          </p>
          <button type="button" className="review-clear" onClick={clearAll}>
            Clear form
          </button>
        </aside>

        <form className="intake-form review-form" onSubmit={onSubmit} noValidate>
          {/* ── Package ── */}
          <fieldset className="intake-fieldset" id="sec-package">
            <legend className="intake-legend">Which package did you purchase?</legend>
            <p className="intake-hint">
              Order <strong>#{orderNumber}</strong>. Choose the package on your receipt.
              This decides which sections appear below.
            </p>
            <div className="review-pkgs" role="radiogroup">
              {PACKAGES.map((p) => (
                <label
                  key={p.id}
                  className={`review-pkg${data.packageId === p.id ? " review-pkg--on" : ""}`}
                >
                  <input
                    type="radio"
                    name="packageId"
                    value={p.id}
                    checked={data.packageId === p.id}
                    onChange={() => update("packageId", p.id)}
                  />
                  <span className="review-pkg-name serif">
                    {p.name} <em>{p.nameAccent}</em>
                  </span>
                  <span className="review-pkg-scope">{p.scope}</span>
                  <span className="review-pkg-meta">{p.turnaround}</span>
                </label>
              ))}
            </div>
            {!data.packageId && (
              <p className="intake-hint">
                Not purchased yet?{" "}
                <Link href="/review#packages" className="review-link">
                  See the packages.
                </Link>
              </p>
            )}
          </fieldset>

          {/* ── Student ── */}
          <fieldset className="intake-fieldset" id="sec-student">
            <legend className="intake-legend">Student details</legend>

            <label className="intake-label">
              <span>
                Student full name <span className="intake-req">*</span>
              </span>
              <input
                type="text"
                value={data.student.name}
                onChange={(e) => updateStudent("name", e.target.value)}
                placeholder="As it appears on the application"
                autoComplete="name"
              />
            </label>

            <div className="intake-row">
              <label className="intake-label">
                <span>
                  Student email <span className="intake-req">*</span>
                </span>
                <input
                  type="email"
                  value={data.student.email}
                  onChange={(e) => updateStudent("email", e.target.value)}
                  autoComplete="email"
                />
              </label>
              <label className="intake-label">
                <span>WhatsApp number</span>
                <input
                  type="tel"
                  value={data.student.whatsapp}
                  onChange={(e) => updateStudent("whatsapp", e.target.value)}
                  placeholder="+966 5X XXX XXXX"
                />
              </label>
            </div>

            <div className="intake-row">
              <label className="intake-label">
                <span>Parent or guardian name</span>
                <input
                  type="text"
                  value={data.student.parentName}
                  onChange={(e) => updateStudent("parentName", e.target.value)}
                />
              </label>
              <label className="intake-label">
                <span>
                  Parent email <span className="intake-req">*</span>
                </span>
                <input
                  type="email"
                  value={data.student.parentEmail}
                  onChange={(e) => updateStudent("parentEmail", e.target.value)}
                />
              </label>
            </div>

            <div className="intake-row">
              <label className="intake-label">
                <span>School</span>
                <input
                  type="text"
                  value={data.student.school}
                  onChange={(e) => updateStudent("school", e.target.value)}
                />
              </label>
              <label className="intake-label">
                <span>Curriculum</span>
                <select
                  value={data.student.curriculum}
                  onChange={(e) => updateStudent("curriculum", e.target.value)}
                >
                  <option value="">Select</option>
                  {CURRICULA.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="intake-row">
              <label className="intake-label">
                <span>Graduation year</span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={data.student.gradYear}
                  onChange={(e) => updateStudent("gradYear", e.target.value)}
                  placeholder="e.g. 2027"
                />
              </label>
              <label className="intake-label">
                <span>Citizenship(s)</span>
                <input
                  type="text"
                  value={data.student.citizenship}
                  onChange={(e) => updateStudent("citizenship", e.target.value)}
                />
              </label>
            </div>

            <label className="intake-label">
              <span>Intended major(s)</span>
              <input
                type="text"
                value={data.student.major}
                onChange={(e) => updateStudent("major", e.target.value)}
                placeholder="e.g. Computer Science, Economics, Undecided"
              />
            </label>

            <div className="intake-row">
              <label className="intake-label">
                <span>Earliest application deadline</span>
                <input
                  type="date"
                  value={data.student.earliestDeadline}
                  onChange={(e) => updateStudent("earliestDeadline", e.target.value)}
                />
              </label>
              <label className="intake-label">
                <span>Date you need feedback by</span>
                <input
                  type="date"
                  value={data.student.feedbackBy}
                  onChange={(e) => updateStudent("feedbackBy", e.target.value)}
                />
              </label>
            </div>
          </fieldset>

          {/* ── Schools ── */}
          <fieldset className="intake-fieldset" id="sec-schools">
            <legend className="intake-legend">School list</legend>
            <p className="intake-hint">
              List every school you are applying to, even the ones not covered by this
              review. It helps your consultant judge fit and tone.
            </p>
            {data.schools.map((s, i) => (
              <div className="review-repeat" key={i}>
                <div className="review-repeat-head">
                  <span className="review-repeat-num serif">{i + 1}</span>
                  {data.schools.length > 1 && (
                    <button
                      type="button"
                      className="review-remove"
                      onClick={() => update("schools", data.schools.filter((_, j) => j !== i))}
                      aria-label={`Remove school ${i + 1}`}
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="intake-row review-row-3">
                  <label className="intake-label">
                    <span>School</span>
                    <input
                      type="text"
                      value={s.name}
                      onChange={(e) => {
                        const next = [...data.schools];
                        next[i] = { ...s, name: e.target.value };
                        update("schools", next);
                      }}
                      placeholder={i === 0 ? "e.g. MIT" : ""}
                    />
                  </label>
                  <label className="intake-label">
                    <span>Round</span>
                    <select
                      value={s.round}
                      onChange={(e) => {
                        const next = [...data.schools];
                        next[i] = { ...s, round: e.target.value };
                        update("schools", next);
                      }}
                    >
                      <option value="">Select</option>
                      {ROUNDS.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="intake-label">
                    <span>Deadline</span>
                    <input
                      type="date"
                      value={s.deadline}
                      onChange={(e) => {
                        const next = [...data.schools];
                        next[i] = { ...s, deadline: e.target.value };
                        update("schools", next);
                      }}
                    />
                  </label>
                </div>
                <label className="intake-label">
                  <span>Why this school (one line)</span>
                  <input
                    type="text"
                    value={s.why}
                    onChange={(e) => {
                      const next = [...data.schools];
                      next[i] = { ...s, why: e.target.value };
                      update("schools", next);
                    }}
                    placeholder="The one reason it is on the list"
                  />
                </label>
              </div>
            ))}
            {data.schools.length < LIMITS.schools && (
              <button
                type="button"
                className="review-add"
                onClick={() => update("schools", [...data.schools, blankSchool()])}
              >
                + Add a school
              </button>
            )}
          </fieldset>

          {/* ── Personal statement ── */}
          {visible.has("personal") && (
            <fieldset className="intake-fieldset" id="sec-personal">
              <legend className="intake-legend">Personal statement</legend>
              <p className="intake-hint">
                Choose the Common App prompt, then paste the full essay. The limit is{" "}
                {LIMITS.personalWords} words.
              </p>
              <div className="review-prompts" role="radiogroup">
                {COMMON_APP_PROMPTS.map((p, i) => (
                  <label
                    key={i}
                    className={`review-prompt${data.personal.prompt === i + 1 ? " review-prompt--on" : ""}`}
                  >
                    <input
                      type="radio"
                      name="caPrompt"
                      value={i + 1}
                      checked={data.personal.prompt === i + 1}
                      onChange={() => update("personal", { ...data.personal, prompt: i + 1 })}
                    />
                    <span className="review-prompt-num serif">{i + 1}</span>
                    <span className="review-prompt-text">{p}</span>
                  </label>
                ))}
              </div>

              <div className="intake-row">
                <label className="intake-label">
                  <span>Draft number</span>
                  <input
                    type="text"
                    value={data.personal.draft}
                    onChange={(e) => update("personal", { ...data.personal, draft: e.target.value })}
                    placeholder="e.g. 3rd draft"
                  />
                </label>
                <label className="intake-label">
                  <span>What you want this essay to say about you</span>
                  <input
                    type="text"
                    value={data.personal.intent}
                    onChange={(e) => update("personal", { ...data.personal, intent: e.target.value })}
                    placeholder="One or two sentences"
                  />
                </label>
              </div>

              <label className="intake-label">
                <span className="review-count-row">
                  <span>Essay</span>
                  <span
                    className={`review-count${personalWords > LIMITS.personalWords ? " review-count--over" : ""}`}
                  >
                    {personalWords} / {LIMITS.personalWords} words
                  </span>
                </span>
                <textarea
                  rows={16}
                  value={data.personal.essay}
                  onChange={(e) => update("personal", { ...data.personal, essay: e.target.value })}
                  placeholder="Paste the personal statement here."
                />
              </label>
            </fieldset>
          )}

          {/* ── Supplements ── */}
          {visible.has("supplements") && (
            <fieldset className="intake-fieldset" id="sec-supplements">
              <legend className="intake-legend">Supplemental essays</legend>
              <p className="intake-hint">
                Every supplemental essay for up to {LIMITS.supplementSchools} schools. Add one
                block per essay and paste each prompt exactly as it appears in the
                application.
              </p>
              <p
                className={`review-count review-count--block${suppSchools > LIMITS.supplementSchools ? " review-count--over" : ""}`}
              >
                {suppSchools} / {LIMITS.supplementSchools} schools · {data.supplements.length} essays
              </p>
              {data.supplements.map((s, i) => (
                <div className="review-repeat" key={i}>
                  <div className="review-repeat-head">
                    <span className="review-repeat-num serif">Supplement {i + 1}</span>
                    {data.supplements.length > 1 && (
                      <button
                        type="button"
                        className="review-remove"
                        onClick={() => update("supplements", data.supplements.filter((_, j) => j !== i))}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <div className="intake-row">
                    <label className="intake-label">
                      <span>School</span>
                      <input
                        type="text"
                        value={s.school}
                        onChange={(e) => {
                          const next = [...data.supplements];
                          next[i] = { ...s, school: e.target.value };
                          update("supplements", next);
                        }}
                        placeholder="e.g. Stanford University"
                      />
                    </label>
                    <label className="intake-label">
                      <span>Word limit</span>
                      <input
                        type="text"
                        inputMode="numeric"
                        value={s.limit}
                        onChange={(e) => {
                          const next = [...data.supplements];
                          next[i] = { ...s, limit: e.target.value };
                          update("supplements", next);
                        }}
                        placeholder="e.g. 250"
                      />
                    </label>
                  </div>
                  <label className="intake-label">
                    <span>Prompt (paste in full)</span>
                    <textarea
                      rows={2}
                      value={s.prompt}
                      onChange={(e) => {
                        const next = [...data.supplements];
                        next[i] = { ...s, prompt: e.target.value };
                        update("supplements", next);
                      }}
                    />
                  </label>
                  <label className="intake-label">
                    <span className="review-count-row">
                      <span>Essay</span>
                      <span
                        className={`review-count${
                          s.limit && words(s.essay) > Number(s.limit) ? " review-count--over" : ""
                        }`}
                      >
                        {words(s.essay)}
                        {s.limit ? ` / ${s.limit}` : ""} words
                      </span>
                    </span>
                    <textarea
                      rows={8}
                      value={s.essay}
                      onChange={(e) => {
                        const next = [...data.supplements];
                        next[i] = { ...s, essay: e.target.value };
                        update("supplements", next);
                      }}
                      placeholder="Paste the essay here."
                    />
                  </label>
                </div>
              ))}
              {data.supplements.length < LIMITS.supplementEssays && (
                <button
                  type="button"
                  className="review-add"
                  onClick={() => update("supplements", [...data.supplements, blankSupplement()])}
                >
                  + Add a supplement
                </button>
              )}
            </fieldset>
          )}

          {/* ── Activities ── */}
          {visible.has("activities") && (
            <fieldset className="intake-fieldset" id="sec-activities">
              <legend className="intake-legend">Activities list</legend>
              <p className="intake-hint">
                Enter exactly what you typed into the Common App, in the order you want
                them to appear. Descriptions are capped at {LIMITS.activityChars} characters.
              </p>
              {data.activities.map((a, i) => (
                <div className="review-repeat" key={i}>
                  <div className="review-repeat-head">
                    <span className="review-repeat-num serif">{i + 1}</span>
                    {data.activities.length > 1 && (
                      <button
                        type="button"
                        className="review-remove"
                        onClick={() => update("activities", data.activities.filter((_, j) => j !== i))}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <div className="intake-row">
                    <label className="intake-label">
                      <span>Activity type</span>
                      <select
                        value={a.type}
                        onChange={(e) => {
                          const next = [...data.activities];
                          next[i] = { ...a, type: e.target.value };
                          update("activities", next);
                        }}
                      >
                        <option value="">Select</option>
                        {ACTIVITY_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="intake-label">
                      <span>Position · Organization</span>
                      <input
                        type="text"
                        value={a.position}
                        onChange={(e) => {
                          const next = [...data.activities];
                          next[i] = { ...a, position: e.target.value };
                          update("activities", next);
                        }}
                        placeholder="Founder · Robotics Club"
                      />
                    </label>
                  </div>
                  <label className="intake-label">
                    <span className="review-count-row">
                      <span>Description</span>
                      <span
                        className={`review-count${a.description.length > LIMITS.activityChars ? " review-count--over" : ""}`}
                      >
                        {a.description.length} / {LIMITS.activityChars}
                      </span>
                    </span>
                    <textarea
                      rows={2}
                      value={a.description}
                      onChange={(e) => {
                        const next = [...data.activities];
                        next[i] = { ...a, description: e.target.value };
                        update("activities", next);
                      }}
                      placeholder="What you did and what came of it"
                    />
                  </label>
                  <div className="intake-row review-row-3">
                    <label className="intake-label">
                      <span>Grades</span>
                      <input
                        type="text"
                        value={a.grades}
                        onChange={(e) => {
                          const next = [...data.activities];
                          next[i] = { ...a, grades: e.target.value };
                          update("activities", next);
                        }}
                        placeholder="10, 11, 12"
                      />
                    </label>
                    <label className="intake-label">
                      <span>Hours per week</span>
                      <input
                        type="text"
                        inputMode="numeric"
                        value={a.hours}
                        onChange={(e) => {
                          const next = [...data.activities];
                          next[i] = { ...a, hours: e.target.value };
                          update("activities", next);
                        }}
                      />
                    </label>
                    <label className="intake-label">
                      <span>Weeks per year</span>
                      <input
                        type="text"
                        inputMode="numeric"
                        value={a.weeks}
                        onChange={(e) => {
                          const next = [...data.activities];
                          next[i] = { ...a, weeks: e.target.value };
                          update("activities", next);
                        }}
                      />
                    </label>
                  </div>
                </div>
              ))}
              {data.activities.length < LIMITS.activities && (
                <button
                  type="button"
                  className="review-add"
                  onClick={() => update("activities", [...data.activities, blankActivity()])}
                >
                  + Add an activity
                </button>
              )}
            </fieldset>
          )}

          {/* ── Honors ── */}
          {visible.has("honors") && (
            <fieldset className="intake-fieldset" id="sec-honors">
              <legend className="intake-legend">Honors and awards</legend>
              <p className="intake-hint">Up to five, exactly as entered in the application.</p>
              {data.honors.map((h, i) => (
                <div className="review-repeat review-repeat--tight" key={i}>
                  <div className="intake-row review-row-honor">
                    <label className="intake-label">
                      <span>Honor {i + 1}</span>
                      <input
                        type="text"
                        value={h.title}
                        onChange={(e) => {
                          const next = [...data.honors];
                          next[i] = { ...h, title: e.target.value };
                          update("honors", next);
                        }}
                      />
                    </label>
                    <label className="intake-label">
                      <span>Level</span>
                      <select
                        value={h.level}
                        onChange={(e) => {
                          const next = [...data.honors];
                          next[i] = { ...h, level: e.target.value };
                          update("honors", next);
                        }}
                      >
                        <option value="">Select</option>
                        {LEVELS.map((l) => (
                          <option key={l} value={l}>
                            {l}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="intake-label">
                      <span>Grade</span>
                      <input
                        type="text"
                        value={h.grade}
                        onChange={(e) => {
                          const next = [...data.honors];
                          next[i] = { ...h, grade: e.target.value };
                          update("honors", next);
                        }}
                        placeholder="11"
                      />
                    </label>
                  </div>
                  {data.honors.length > 1 && (
                    <button
                      type="button"
                      className="review-remove review-remove--inline"
                      onClick={() => update("honors", data.honors.filter((_, j) => j !== i))}
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              {data.honors.length < LIMITS.honors && (
                <button
                  type="button"
                  className="review-add"
                  onClick={() => update("honors", [...data.honors, blankHonor()])}
                >
                  + Add an honor
                </button>
              )}
            </fieldset>
          )}

          {/* ── Context ── */}
          <fieldset className="intake-fieldset" id="sec-context">
            <legend className="intake-legend">Context your consultant should know</legend>
            <p className="intake-hint">
              Anything that shapes how the application should read: a gap year, a school
              change, a family circumstance, a grade dip, a story you are unsure whether
              to tell. This is not judged. It helps your consultant read the application
              the way an admissions officer would.
            </p>
            <label className="intake-label">
              <span>Context</span>
              <textarea
                rows={6}
                value={data.context}
                onChange={(e) => update("context", e.target.value)}
              />
            </label>
          </fieldset>

          {/* ── Questions ── */}
          <fieldset className="intake-fieldset" id="sec-questions">
            <legend className="intake-legend">Your questions</legend>
            <p className="intake-hint">
              Up to three specific questions you want answered. &ldquo;Does the ending
              land?&rdquo; gets a better answer than &ldquo;Is it good?&rdquo;
            </p>
            {data.questions.map((q, i) => (
              <label className="intake-label" key={i}>
                <span>Question {i + 1}</span>
                <input
                  type="text"
                  value={q}
                  onChange={(e) => {
                    const next = [...data.questions];
                    next[i] = e.target.value;
                    update("questions", next);
                  }}
                />
              </label>
            ))}
          </fieldset>

          {/* ── Agreement ── */}
          <fieldset className="intake-fieldset">
            <label className="review-agree">
              <input
                type="checkbox"
                checked={data.agree}
                onChange={(e) => update("agree", e.target.checked)}
              />
              <span>
                I understand that my consultant comments and does not write or rewrite,
                that the turnaround clock starts once this intake is complete, and that
                revisions are not included.
              </span>
            </label>
          </fieldset>

          {/* Honeypot */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="honeypot"
          />

          {problems.length > 0 && (
            <div className="review-problems" id="review-problems" role="alert">
              <p>Before you submit:</p>
              <ul>
                {problems.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          )}

          <button type="submit" className="intake-submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : "Submit for review"}
          </button>

          {error && <p className="intake-error">{error}</p>}
        </form>
      </div>

      <footer className="enroll-footer">
        <p>
          Questions? Reach out to us at{" "}
          <a href="mailto:admissions@himmahprep.com">admissions@himmahprep.com</a>
        </p>
        <p className="enroll-copyright">
          &copy; {new Date().getFullYear()} Himmah Prep. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
