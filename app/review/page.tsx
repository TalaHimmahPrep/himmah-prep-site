import type { Metadata } from "next";
import Link from "next/link";
import { PACKAGES } from "./packages";

export const metadata: Metadata = {
  title: "Application Review — Himmah Prep",
  description:
    "Asynchronous college application review by a Himmah Prep consultant. Personal statement review, activities list audit, and a full review with supplementals.",
  alternates: { canonical: "https://www.himmahprep.com/review" },
};

const STEPS = [
  {
    title: "Choose a package",
    body: "Pay once through the secure link. No calls, no scheduling.",
  },
  {
    title: "Fill in the intake",
    body: "Paste your essays and details into the online form. It saves as you go, so you can come back.",
  },
  {
    title: "Receive your review",
    body: "Comments land in a shared document within the turnaround window, plus a one-page summary you can act on.",
  },
];

export default function ReviewPage() {
  return (
    <main className="enroll-page">
      <header className="enroll-header">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.webp" alt="Himmah Prep" className="enroll-logo" />
        <p className="eyebrow">Application Review</p>
        <h1 className="enroll-title serif">
          Your essays, read the way an <em>admissions officer</em> reads them.
        </h1>
        <p className="enroll-subtitle">
          Written feedback from a Himmah Prep consultant. Our students have earned
          admission to Harvard, Stanford, MIT, and every Ivy. Fully asynchronous:
          pick a package, fill in the intake, and get comments back on a fixed
          timeline.
        </p>
      </header>

      <section className="review-steps">
        {STEPS.map((s, i) => (
          <div key={s.title} className="review-step">
            <span className="review-step-num serif">{i + 1}</span>
            <div>
              <h3 className="review-step-title">{s.title}</h3>
              <p className="review-step-body">{s.body}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="enroll-plans" id="packages">
        {PACKAGES.map((p) => (
          <article
            key={p.id}
            className={`enroll-card${p.featured ? " enroll-card--accent" : ""}`}
          >
            {p.badge && <div className="enroll-badge">{p.badge}</div>}
            <div className="enroll-card-body">
              <h2 className="enroll-plan-name serif">
                {p.name} <em>{p.nameAccent}</em>
              </h2>
              <p className="enroll-plan-type eyebrow">{p.turnaround} turnaround</p>

              <div className="enroll-pricing">
                <div className="enroll-price-current">
                  <span className="enroll-price-amount">{p.priceSAR}</span>
                  <span className="enroll-price-sar">{p.priceUSD}</span>
                </div>
                <p className="enroll-price-note">One-time payment via credit card</p>
              </div>

              <hr className="enroll-divider" />

              <p className="review-scope">{p.scope}</p>

              <ul className="enroll-features">
                {p.includes.map((f) => (
                  <li key={f}>
                    <span className="enroll-check">&#10003;</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {p.checkoutUrl ? (
                <a
                  href={p.checkoutUrl}
                  className={`enroll-cta${p.featured ? " enroll-cta--primary" : ""}`}
                >
                  Choose {p.name} {p.nameAccent}
                </a>
              ) : (
                <span className="enroll-cta review-cta--soon" aria-disabled="true">
                  Payment link coming soon
                </span>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="review-after">
        <p className="eyebrow">Already paid?</p>
        <h2 className="review-after-title serif">
          Start your <em>intake.</em>
        </h2>
        <p className="enroll-subtitle">
          The form takes about 20 minutes with your essays ready to paste. It
          saves in your browser as you type.
        </p>
        <Link href="/review/intake" className="enroll-cta enroll-cta--primary review-after-cta">
          Open the intake form
        </Link>
      </section>

      <section className="review-notes">
        <h2 className="review-notes-title serif">
          How the review <em>works.</em>
        </h2>
        <ul className="review-notes-list">
          <li>
            <strong>Your consultant comments, they do not write.</strong>{" "}
            Every note explains what to change and why. The student makes the change, so
            the work stays the student&apos;s own.
          </li>
          <li>
            <strong>Turnaround starts when the intake is complete.</strong> Not at
            payment. Missing essays or details pause the clock.
          </li>
          <li>
            <strong>Word caps are firm.</strong> Over the cap moves you to the next
            package. Rush delivery, at half the turnaround, is available for 50
            percent more. Email to arrange it.
          </li>
          <li>
            <strong>One review per purchase.</strong> Revisions are not included. If
            you want a second read after you revise, purchase the same package again.
          </li>
          <li>
            <strong>Refunds.</strong> Full refund any time before the review begins.
            None after delivery.
          </li>
        </ul>
      </section>

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
