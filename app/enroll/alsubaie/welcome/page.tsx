"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "ok" | "error";

export default function AlsubaieWelcomePage() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setError(null);

    const fd = new FormData(e.currentTarget);
    const payload = {
      familyId: "alsubaie",
      studentName: fd.get("studentName"),
      grade: fd.get("grade"),
      school: fd.get("school"),
      gpa: fd.get("gpa"),
      satScore: fd.get("satScore"),
      actScore: fd.get("actScore"),
      dreamSchools: [
        fd.get("dreamSchool1"),
        fd.get("dreamSchool2"),
        fd.get("dreamSchool3"),
        fd.get("dreamSchool4"),
        fd.get("dreamSchool5"),
      ]
        .filter(Boolean)
        .join(", "),
      intendedMajor: fd.get("intendedMajor"),
      extracurriculars: fd.get("extracurriculars"),
      parentName: fd.get("parentName"),
      parentEmail: fd.get("parentEmail"),
      parentPhone: fd.get("parentPhone"),
      anythingElse: fd.get("anythingElse"),
      website: fd.get("website"),
    };

    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(json.error ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("ok");
    } catch {
      setStatus("error");
      setError("Couldn't reach the server. Please try again.");
    }
  }

  return (
    <main className="enroll-page">
      <header className="enroll-header">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.webp" alt="Himmah Prep" className="enroll-logo" />

        {status === "ok" ? (
          <>
            <p className="eyebrow">You&apos;re all set</p>
            <h1 className="enroll-title serif">
              Welcome to <em>Himmah Prep.</em>
            </h1>
            <p className="enroll-subtitle">
              We&apos;ve received your information. A senior advisor will be in
              touch within one business day to schedule your first session.
            </p>
          </>
        ) : (
          <>
            <p className="eyebrow">Welcome, Alsubaie Family</p>
            <h1 className="enroll-title serif">
              Let&apos;s get <em>started.</em>
            </h1>
            <p className="enroll-subtitle">
              Thank you for enrolling. Please fill out the form below so we can
              pair you with the right advisor and hit the ground running.
            </p>
          </>
        )}
      </header>

      {status !== "ok" && (
        <section className="intake-form-wrap">
          <form className="intake-form" onSubmit={onSubmit} noValidate>
            {/* ── Student Information ── */}
            <fieldset className="intake-fieldset">
              <legend className="intake-legend">Student Information</legend>

              <label className="intake-label">
                <span>
                  Student&apos;s full name <span className="intake-req">*</span>
                </span>
                <input
                  type="text"
                  name="studentName"
                  required
                  placeholder="e.g. Ahab Chopra"
                  autoComplete="name"
                />
              </label>

              <div className="intake-row">
                <label className="intake-label">
                  <span>
                    Grade level <span className="intake-req">*</span>
                  </span>
                  <select name="grade" required defaultValue="">
                    <option value="" disabled>
                      Select grade
                    </option>
                    <option value="9th">9th grade</option>
                    <option value="10th">10th grade</option>
                    <option value="11th">11th grade</option>
                    <option value="12th">12th grade</option>
                    <option value="Gap year">Gap year</option>
                  </select>
                </label>

                <label className="intake-label">
                  <span>
                    School name <span className="intake-req">*</span>
                  </span>
                  <input
                    type="text"
                    name="school"
                    required
                    placeholder="e.g. Riyadh International School"
                  />
                </label>
              </div>

              <div className="intake-row">
                <label className="intake-label">
                  <span>
                    GPA <span className="intake-req">*</span>
                  </span>
                  <input
                    type="text"
                    name="gpa"
                    required
                    placeholder="e.g. 3.8 or 95%"
                  />
                </label>

                <label className="intake-label">
                  <span>SAT score (if taken)</span>
                  <input
                    type="text"
                    name="satScore"
                    placeholder="e.g. 1420"
                  />
                </label>

                <label className="intake-label">
                  <span>ACT score (if taken)</span>
                  <input
                    type="text"
                    name="actScore"
                    placeholder="e.g. 32"
                  />
                </label>
              </div>

              <label className="intake-label">
                <span>Intended major or area of interest</span>
                <input
                  type="text"
                  name="intendedMajor"
                  placeholder="e.g. Computer Science, Pre-Med, Undecided"
                />
              </label>

              <label className="intake-label">
                <span>
                  Extracurriculars, awards, and leadership roles
                </span>
                <textarea
                  name="extracurriculars"
                  rows={4}
                  placeholder="List your main activities, clubs, competitions, volunteering, internships, and any awards or leadership positions."
                />
              </label>
            </fieldset>

            {/* ── Dream Schools ── */}
            <fieldset className="intake-fieldset">
              <legend className="intake-legend">Dream Schools (up to 5)</legend>
              <p className="intake-hint">
                List the universities you&apos;re most interested in. It&apos;s
                okay if you&apos;re not sure yet.
              </p>
              {[1, 2, 3, 4, 5].map((n) => (
                <label className="intake-label" key={n}>
                  <span>School {n}{n === 1 && <span className="intake-req"> *</span>}</span>
                  <input
                    type="text"
                    name={`dreamSchool${n}`}
                    required={n === 1}
                    placeholder={
                      n === 1
                        ? "e.g. MIT"
                        : n === 2
                          ? "e.g. Stanford"
                          : n === 3
                            ? "e.g. NYU"
                            : ""
                    }
                  />
                </label>
              ))}
            </fieldset>

            {/* ── Parent / Guardian ── */}
            <fieldset className="intake-fieldset">
              <legend className="intake-legend">
                Parent / Guardian Information
              </legend>

              <label className="intake-label">
                <span>
                  Full name <span className="intake-req">*</span>
                </span>
                <input
                  type="text"
                  name="parentName"
                  required
                  placeholder="e.g. Raj Chopra"
                  autoComplete="name"
                />
              </label>

              <div className="intake-row">
                <label className="intake-label">
                  <span>
                    Email address <span className="intake-req">*</span>
                  </span>
                  <input
                    type="email"
                    name="parentEmail"
                    required
                    placeholder="parent@example.com"
                    autoComplete="email"
                  />
                </label>

                <label className="intake-label">
                  <span>Phone number (with country code)</span>
                  <input
                    type="tel"
                    name="parentPhone"
                    placeholder="e.g. +966 5X XXX XXXX"
                    autoComplete="tel"
                  />
                </label>
              </div>
            </fieldset>

            {/* ── Anything else ── */}
            <fieldset className="intake-fieldset">
              <legend className="intake-legend">Anything Else</legend>
              <label className="intake-label">
                <span>
                  Is there anything else you&apos;d like us to know before your
                  first session?
                </span>
                <textarea
                  name="anythingElse"
                  rows={3}
                  placeholder="Special circumstances, timeline concerns, questions for your advisor, etc."
                />
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

            <button
              type="submit"
              className="intake-submit"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Submitting..." : "Submit"}
            </button>

            {error && <p className="intake-error">{error}</p>}
          </form>
        </section>
      )}

      <footer className="enroll-footer">
        <p>
          Questions? Reach out to us at{" "}
          <a href="mailto:admissions@himmahprep.com">
            admissions@himmahprep.com
          </a>
        </p>
        <p className="enroll-copyright">
          &copy; {new Date().getFullYear()} Himmah Prep. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
