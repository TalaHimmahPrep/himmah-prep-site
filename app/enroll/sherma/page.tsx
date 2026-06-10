import type { Metadata } from "next";

const PROGRAM_DATES = "June 20, 2026 – February 20, 2029";

export const metadata: Metadata = {
  title: "Sherma Family — College Counseling Program | Himmah Prep",
  description:
    "Select your college counseling plan for the Sherma family.",
  robots: { index: false, follow: false },
};

const plans = [
  {
    name: "Foundation",
    satHours: "15 hours of 1:1 SAT prep",
    sessions: "One",
    sessionDetail: "private 1:1 session per month with a senior counselor",
    essaySubmissions: "Monthly Writing Team essay submissions",
    ceoReview: null,
    fullPriceUSD: "$20,500",
    discountPriceUSD: "$13,875",
    badge: null,
    checkoutUrl: "https://www.himmahprep.com/pay-link/71da1e03-a042-4729-9a35-45175443d81d",
  },
  {
    name: "Signature",
    satHours: "25 hours of 1:1 SAT prep",
    sessions: "One",
    sessionDetail: "private 1:1 session per month with a senior counselor",
    essaySubmissions: "Bi-weekly Writing Team essay submissions",
    ceoReview: "1x CEO and COO review of all submission materials",
    fullPriceUSD: "$22,500",
    discountPriceUSD: "$15,125",
    badge: null,
    checkoutUrl: "https://www.himmahprep.com/pay-link/b239766a-2785-4416-99f7-0fa59421e032",
  },
  {
    name: "Elite",
    satHours: "25 hours of 1:1 SAT prep",
    sessions: "Two",
    sessionDetail: "private 1:1 sessions per month with a senior counselor",
    essaySubmissions: "Unlimited Writing Team essay submissions",
    ceoReview: "2x CEO and COO reviews per submission cycle",
    fullPriceUSD: "$40,500",
    discountPriceUSD: "$27,125",
    badge: "Best Results",
    checkoutUrl: "https://www.himmahprep.com/pay-link/c9913ef9-b2cc-46f0-82c9-6ceed00cb66e",
  },
];

const sharedFeatures = [
  PROGRAM_DATES,
  "Hand-paired with our most senior counselor",
  "Direct messaging access between sessions",
  "Full Himmah Prep Portal access",
];

export default function ShermaEnrollPage() {
  return (
    <main className="enroll-page">
      {/* Header */}
      <header className="enroll-header">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.webp" alt="Himmah Prep" className="enroll-logo" />
        <p className="eyebrow">College Counseling Program</p>
        <h1 className="enroll-title serif">
          Sherma <em>Family</em>
        </h1>
        <p className="enroll-subtitle">
          Choose the plan that best fits your family. All plans include senior
          counselor pairing and run from {PROGRAM_DATES}.
        </p>
      </header>

      {/* 7-Day Discount Banner */}
      <div className="enroll-discount-banner">
        <p className="enroll-discount-title">7-Day Discount — Limited Time</p>
        <p className="enroll-discount-sub">
          Enroll within 7 days to lock in the discounted rate shown below.
        </p>
      </div>

      {/* Plan Cards */}
      <section className="enroll-plans">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`enroll-card${plan.badge ? " enroll-card--accent" : ""}`}
          >
            {plan.badge && (
              <div className="enroll-badge">{plan.badge}</div>
            )}

            <div className="enroll-card-body">
              <h2 className="enroll-plan-name serif">
                {plan.name} <em>Plan</em>
              </h2>
              <p className="enroll-plan-type eyebrow">Strategic Counseling</p>

              {/* Pricing */}
              <div className="enroll-pricing">
                <div className="enroll-price-old">
                  <span>{plan.fullPriceUSD}</span>
                </div>
                <div className="enroll-price-current">
                  <span className="enroll-price-amount">
                    {plan.discountPriceUSD}
                  </span>
                </div>
                <p className="enroll-price-note">
                  One-time payment via credit card
                </p>
              </div>

              <hr className="enroll-divider" />

              {/* Features */}
              <ul className="enroll-features">
                <li>
                  <span className="enroll-check">&#10003;</span>
                  <span>
                    <strong>{plan.satHours}</strong>
                  </span>
                </li>
                <li>
                  <span className="enroll-check">&#10003;</span>
                  <span>
                    <strong>{plan.sessions}</strong> {plan.sessionDetail}
                  </span>
                </li>
                <li>
                  <span className="enroll-check">&#10003;</span>
                  <span>{plan.essaySubmissions}</span>
                </li>
                {plan.ceoReview && (
                  <li>
                    <span className="enroll-check">&#10003;</span>
                    <span>{plan.ceoReview}</span>
                  </li>
                )}
                {sharedFeatures.map((feature) => (
                  <li key={feature} className="enroll-feature-shared">
                    <span className="enroll-check">&#10003;</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.checkoutUrl}
                className={`enroll-cta${plan.badge ? " enroll-cta--primary" : ""}`}
              >
                Select {plan.name} Plan
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* Footer */}
      <footer className="enroll-footer">
        <p>
          Questions? Reach out to us at{" "}
          <a href="mailto:connect@himmahprep.com">
            connect@himmahprep.com
          </a>
        </p>
        <p className="enroll-copyright">
          &copy; {new Date().getFullYear()} Himmah Prep. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
