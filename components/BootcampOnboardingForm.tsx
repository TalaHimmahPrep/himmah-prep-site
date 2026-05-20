"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "done" | "error";

export function BootcampOnboardingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const parentCode = String(data.get("parentPhoneCode") ?? "");
    const parentNumber = String(data.get("parentPhoneNumber") ?? "").trim();
    const studentCode = String(data.get("studentPhoneCode") ?? "");
    const studentNumber = String(data.get("studentPhoneNumber") ?? "").trim();
    const satEnglish = String(data.get("currentSatEnglish") ?? "").trim();
    const satMath = String(data.get("currentSatMath") ?? "").trim();
    const satParts: string[] = [];
    if (satEnglish) satParts.push(`English ${satEnglish}`);
    if (satMath) satParts.push(`Math ${satMath}`);
    const payload = {
      studentName: String(data.get("studentName") ?? ""),
      gradeLevel: String(data.get("gradeLevel") ?? ""),
      studentEmail: String(data.get("studentEmail") ?? ""),
      studentPhone: studentNumber ? `${studentCode} ${studentNumber}` : "",
      school: String(data.get("school") ?? ""),
      currentSatScore: satParts.join(" / "),
      parentEmail: String(data.get("parentEmail") ?? ""),
      parentPhone: parentNumber ? `${parentCode} ${parentNumber}` : "",
      source: "sat-bootcamp-onboarding",
      website: String(data.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(json.error ?? "Something went wrong. Please email us instead.");
        return;
      }
      setStatus("done");
    } catch {
      setStatus("error");
      setError("Couldn't reach the server. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <div className="bootcamp-onboarding-done">
        <p className="eyebrow">Got it</p>
        <h3 className="serif">We have everything <em>we need.</em></h3>
        <p className="muted">
          A senior advisor will be in touch within one business day with the cohort
          welcome pack: schedule, joining link, diagnostic instructions, and the WhatsApp
          group invite.
        </p>
      </div>
    );
  }

  return (
    <form className="cta-form" onSubmit={onSubmit} noValidate>
      <label>
        <span>Student&apos;s name</span>
        <input
          type="text"
          name="studentName"
          required
          placeholder="e.g. Layla Al-Hassan"
          autoComplete="name"
        />
      </label>
      <label>
        <span>Grade level</span>
        <select name="gradeLevel" required defaultValue="">
          <option value="" disabled>
            Select…
          </option>
          <option>Grade 9</option>
          <option>Grade 10</option>
          <option>Grade 11</option>
          <option>Grade 12</option>
          <option>Gap year</option>
        </select>
      </label>
      <label>
        <span>Student email</span>
        <input
          type="email"
          name="studentEmail"
          required
          placeholder="student@example.com"
        />
      </label>
      <label>
        <span>Student phone</span>
        <div className="phone-input">
          <select name="studentPhoneCode" defaultValue="+966" className="phone-code" aria-label="Country code">
            <option value="+966">🇸🇦 +966</option>
            <option value="+971">🇦🇪 +971</option>
            <option value="+974">🇶🇦 +974</option>
            <option value="+965">🇰🇼 +965</option>
            <option value="+973">🇧🇭 +973</option>
            <option value="+968">🇴🇲 +968</option>
            <option value="+962">🇯🇴 +962</option>
            <option value="+961">🇱🇧 +961</option>
            <option value="+20">🇪🇬 +20</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
          </select>
          <input
            type="tel"
            name="studentPhoneNumber"
            required
            placeholder="5X XXX XXXX"
            autoComplete="tel-national"
          />
        </div>
      </label>
      <label>
        <span>
          School <span className="muted-sm">(optional)</span>
        </span>
        <input
          type="text"
          name="school"
          placeholder="e.g. King Faisal School"
          autoComplete="organization"
        />
      </label>
      <label>
        <span>
          Current SAT score <span className="muted-sm">(optional)</span>
        </span>
        <div className="sat-input">
          <input
            type="text"
            inputMode="numeric"
            name="currentSatEnglish"
            placeholder="English"
            autoComplete="off"
            aria-label="Current SAT English score"
          />
          <input
            type="text"
            inputMode="numeric"
            name="currentSatMath"
            placeholder="Math"
            autoComplete="off"
            aria-label="Current SAT Math score"
          />
        </div>
      </label>
      <label>
        <span>Parent email</span>
        <input
          type="email"
          name="parentEmail"
          required
          placeholder="parent@example.com"
          autoComplete="email"
        />
      </label>
      <label>
        <span>
          Parent phone <span className="muted-sm">(optional)</span>
        </span>
        <div className="phone-input">
          <select name="parentPhoneCode" defaultValue="+966" className="phone-code" aria-label="Country code">
            <option value="+966">🇸🇦 +966</option>
            <option value="+971">🇦🇪 +971</option>
            <option value="+974">🇶🇦 +974</option>
            <option value="+965">🇰🇼 +965</option>
            <option value="+973">🇧🇭 +973</option>
            <option value="+968">🇴🇲 +968</option>
            <option value="+962">🇯🇴 +962</option>
            <option value="+961">🇱🇧 +961</option>
            <option value="+20">🇪🇬 +20</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
          </select>
          <input
            type="tel"
            name="parentPhoneNumber"
            placeholder="5X XXX XXXX"
            autoComplete="tel-national"
          />
        </div>
      </label>

      {/* Honeypot — visually hidden, ignored by humans, filled by bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="honeypot"
      />

      <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Submit details"}
      </button>

      {error && <p className="cta-error">{error}</p>}
    </form>
  );
}
