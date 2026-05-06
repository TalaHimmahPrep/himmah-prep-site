"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "ok" | "error";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      studentName: String(data.get("studentName") ?? ""),
      gradeLevel: String(data.get("gradeLevel") ?? ""),
      parentEmail: String(data.get("parentEmail") ?? ""),
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
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setError("Couldn't reach the server. Please try again.");
    }
  }

  if (status === "ok") {
    return (
      <div className="cta-success">
        <p className="eyebrow">You&apos;re on the list</p>
        <h3 className="serif">
          We&apos;ll be in <em>touch.</em>
        </h3>
        <p className="muted">
          A senior advisor will reach out within one business day to schedule your call.
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
      <label className="full">
        <span>Parent email</span>
        <input
          type="email"
          name="parentEmail"
          required
          placeholder="parent@example.com"
          autoComplete="email"
        />
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
        {status === "submitting" ? "Sending…" : "Request consultation"}
      </button>

      {error && <p className="cta-error">{error}</p>}
    </form>
  );
}
