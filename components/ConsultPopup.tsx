"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "himmah_consult_popup";
const TRIGGER_PERCENT = 50;

// Pages where the popup is suppressed (apply has the form already; legal pages
// are not lead-funnel pages).
const EXCLUDED_PATHS = new Set(["/apply", "/terms-and-conditions"]);

type Status = "idle" | "submitting" | "ok" | "error";

export function ConsultPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  // Watch scroll, open at threshold, respect prior dismissal
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (EXCLUDED_PATHS.has(pathname)) return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let triggered = false;
    const onScroll = () => {
      if (triggered) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const pct = (window.scrollY / max) * 100;
      if (pct >= TRIGGER_PERCENT) {
        triggered = true;
        setOpen(true);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Lock body scroll while open + listen for Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      studentName: String(data.get("studentName") ?? ""),
      parentEmail: String(data.get("parentEmail") ?? ""),
      website: String(data.get("website") ?? ""),
      source: "scroll-popup",
    };

    try {
      const res = await fetch("/api/lead", {
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
        setError(json.error ?? "Something went wrong. Please email us instead.");
        return;
      }
      setStatus("ok");
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      setStatus("error");
      setError("Couldn't reach the server. Please try again.");
    }
  }

  if (!open) return null;

  return (
    <div
      className="popup-overlay"
      onClick={dismiss}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-heading"
    >
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="popup-close"
          onClick={dismiss}
          aria-label="Close"
        >
          ×
        </button>

        {status === "ok" ? (
          <div className="popup-success">
            <p className="eyebrow">You&apos;re on the list</p>
            <h3 id="popup-heading" className="serif">
              We&apos;ll be in <em>touch.</em>
            </h3>
            <p className="muted">
              A senior advisor will reach out within one business day to schedule your call.
            </p>
          </div>
        ) : (
          <>
            <p className="eyebrow">Free consultation</p>
            <h3 id="popup-heading" className="serif">
              Tell us about <em>the student.</em>
            </h3>
            <p className="popup-sub muted">
              A 30-minute call with one of our senior advisors — no obligation, just an honest
              read on what&apos;s possible.
            </p>
            <form className="popup-form" onSubmit={onSubmit} noValidate>
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
                <span>Parent email</span>
                <input
                  type="email"
                  name="parentEmail"
                  required
                  placeholder="parent@example.com"
                  autoComplete="email"
                />
              </label>
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
                className="btn btn-primary"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending…" : "Request consultation"}
              </button>
              {error && <p className="cta-error">{error}</p>}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
