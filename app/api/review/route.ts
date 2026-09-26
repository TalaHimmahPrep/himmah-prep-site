import { NextResponse } from "next/server";
import { COMMON_APP_PROMPTS, FULL_REVIEW_SCHOOLS, PACKAGE_BY_ID, type PackageId } from "@/app/review/packages";

export const runtime = "nodejs";

const MAX_TEXT = 20_000; // characters per free-text field, server-side cap
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(v: unknown, max = 500): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}
function text(v: unknown): string {
  return str(v, MAX_TEXT);
}
function arr<T>(v: unknown, map: (x: Record<string, unknown>) => T, max: number): T[] {
  if (!Array.isArray(v)) return [];
  return v
    .slice(0, max)
    .filter((x) => x && typeof x === "object")
    .map((x) => map(x as Record<string, unknown>));
}
function words(s: string): number {
  const t = s.trim();
  return t ? t.split(/\s+/).length : 0;
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot
  if (body.website) return NextResponse.json({ ok: true });

  const orderNumber = str(body.orderNumber, 40).replace(/[^A-Za-z0-9-]/g, "");
  if (orderNumber.length < 3) {
    return NextResponse.json({ ok: false, error: "Order number required" }, { status: 400 });
  }

  const packageId = str(body.packageId) as PackageId | "";
  const pkg = packageId ? PACKAGE_BY_ID[packageId] : undefined;
  if (!pkg) {
    return NextResponse.json({ ok: false, error: "Choose a package" }, { status: 400 });
  }

  const s = (body.student ?? {}) as Record<string, unknown>;
  const student = {
    name: str(s.name),
    email: str(s.email),
    whatsapp: str(s.whatsapp),
    parentName: str(s.parentName),
    parentEmail: str(s.parentEmail),
    school: str(s.school),
    curriculum: str(s.curriculum),
    gradYear: str(s.gradYear),
    citizenship: str(s.citizenship),
    major: str(s.major),
    earliestDeadline: str(s.earliestDeadline),
    feedbackBy: str(s.feedbackBy),
  };

  if (!student.name || !EMAIL_RE.test(student.email) || !EMAIL_RE.test(student.parentEmail)) {
    return NextResponse.json({ ok: false, error: "Missing required field" }, { status: 400 });
  }

  const schools = arr(
    body.schools,
    (x) => ({ name: str(x.name), round: str(x.round), deadline: str(x.deadline), why: str(x.why) }),
    10,
  ).filter((x) => x.name);

  const p = (body.personal ?? {}) as Record<string, unknown>;
  const personal =
    packageId === "activities"
      ? { prompt: 0, draft: "", intent: "", essay: "" }
      : {
          prompt: typeof p.prompt === "number" && p.prompt >= 1 && p.prompt <= 7 ? p.prompt : 0,
          draft: str(p.draft),
          intent: str(p.intent),
          essay: text(p.essay),
        };

  const supplements =
    packageId === "full"
      ? arr(
          body.supplements,
          (x) => ({ school: str(x.school), prompt: text(x.prompt), limit: str(x.limit, 10), essay: text(x.essay) }),
          FULL_REVIEW_SCHOOLS * 4,
        ).filter((x) => x.essay || x.prompt || x.school)
      : [];

  const activities = packageId === "personal" ? [] : arr(
    body.activities,
    (x) => ({
      type: str(x.type),
      position: str(x.position),
      description: str(x.description, 400),
      grades: str(x.grades, 40),
      hours: str(x.hours, 10),
      weeks: str(x.weeks, 10),
    }),
    10,
  ).filter((x) => x.position || x.description);

  const honors = packageId === "personal" ? [] : arr(
    body.honors,
    (x) => ({ title: str(x.title), level: str(x.level), grade: str(x.grade, 10) }),
    5,
  ).filter((x) => x.title);

  const context = text(body.context);
  const questions = Array.isArray(body.questions)
    ? body.questions.slice(0, 3).map((q) => str(q)).filter(Boolean)
    : [];

  const endpoint = process.env.FORMSPREE_ENDPOINT;
  if (!endpoint) {
    console.error("[review] FORMSPREE_ENDPOINT not configured");
    return NextResponse.json({ ok: false, error: "Server not configured" }, { status: 500 });
  }

  // A single readable dossier so the email is usable without opening the dashboard.
  const lines: string[] = [];
  const h = (t: string) => lines.push("", `── ${t.toUpperCase()} ──`);
  h("Order");
  lines.push(`Squarespace order #${orderNumber} · ${pkg.name} ${pkg.nameAccent} · ${pkg.priceSAR} · ${pkg.turnaround}`);
  h("Student");
  lines.push(
    `${student.name} · ${student.email}${student.whatsapp ? ` · ${student.whatsapp}` : ""}`,
    `Parent: ${student.parentName || "—"} · ${student.parentEmail}`,
    `School: ${student.school || "—"} · ${student.curriculum || "—"} · Class of ${student.gradYear || "—"}`,
    `Citizenship: ${student.citizenship || "—"} · Major: ${student.major || "—"}`,
    `Earliest deadline: ${student.earliestDeadline || "—"} · Feedback by: ${student.feedbackBy || "—"}`,
  );
  h("School list");
  if (schools.length === 0) lines.push("—");
  schools.forEach((x, i) =>
    lines.push(`${i + 1}. ${x.name}${x.round ? ` (${x.round})` : ""}${x.deadline ? ` · ${x.deadline}` : ""}${x.why ? ` · ${x.why}` : ""}`),
  );
  if (personal.essay) {
    h(`Personal statement · ${words(personal.essay)} words`);
    if (personal.prompt) lines.push(`Prompt ${personal.prompt}: ${COMMON_APP_PROMPTS[personal.prompt - 1]}`);
    if (personal.draft) lines.push(`Draft: ${personal.draft}`);
    if (personal.intent) lines.push(`Intent: ${personal.intent}`);
    lines.push("", personal.essay);
  }
  supplements.forEach((x, i) => {
    h(`Supplement ${i + 1} · ${x.school || "School not given"} · ${words(x.essay)}${x.limit ? `/${x.limit}` : ""} words`);
    if (x.prompt) lines.push(`Prompt: ${x.prompt}`, "");
    lines.push(x.essay || "(no essay pasted)");
  });
  if (activities.length) {
    h("Activities");
    activities.forEach((x, i) =>
      lines.push(
        `${i + 1}. [${x.type || "—"}] ${x.position || "—"}`,
        `   ${x.description || "—"}`,
        `   Grades ${x.grades || "—"} · ${x.hours || "—"} hrs/wk · ${x.weeks || "—"} wks/yr`,
      ),
    );
  }
  if (honors.length) {
    h("Honors");
    honors.forEach((x, i) => lines.push(`${i + 1}. ${x.title}${x.level ? ` · ${x.level}` : ""}${x.grade ? ` · Grade ${x.grade}` : ""}`));
  }
  if (context) {
    h("Context");
    lines.push(context);
  }
  if (questions.length) {
    h("Questions");
    questions.forEach((q, i) => lines.push(`${i + 1}. ${q}`));
  }
  const dossier = lines.join("\n").trim();

  const payload = {
    _subject: `Application review #${orderNumber} — ${student.name} · ${pkg.name} ${pkg.nameAccent}${student.earliestDeadline ? ` · due ${student.earliestDeadline}` : ""}`,
    _replyto: student.parentEmail,
    source: "application-review-intake",
    orderNumber,
    package: `${pkg.name} ${pkg.nameAccent}`,
    studentName: student.name,
    studentEmail: student.email,
    parentEmail: student.parentEmail,
    earliestDeadline: student.earliestDeadline,
    feedbackBy: student.feedbackBy,
    personalWords: personal.essay ? words(personal.essay) : 0,
    supplementCount: supplements.length,
    dossier,
    submittedAt: new Date().toISOString(),
  };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error("[review] formspree responded with", res.status, await res.text());
      return NextResponse.json({ ok: false, error: "Upstream rejected" }, { status: 502 });
    }
  } catch (err) {
    console.error("[review] formspree fetch failed", err);
    return NextResponse.json({ ok: false, error: "Upstream unreachable" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
