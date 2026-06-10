import type { Metadata } from "next";

const PROGRAM_DATES = "June 20, 2026 – February 20, 2029";

export const metadata: Metadata = {
  title: "Sharma Family — SAT Prep Program | Himmah Prep",
  description:
    "Select your SAT prep plan for the Sharma family.",
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
    // TODO: Add Sharma Foundation Squarespace pay link
    checkoutUrl: "#FOUNDATION_PAY_LINK",
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
    // TODO: Add Sharma Signature Squarespace pay link
    checkoutUrl: "#SIGNATURE_PAY_LINK",
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
    // TODO: Add Sharma Elite Squarespace pay link
    checkoutUrl: "#ELITE_PAY_LINK",
  },
];

const sharedFeatures = [
  PROGRAM_DATES,
  "Hand-paired with our most senior counselor",
  "Direct messaging access between sessions",
  "Full Himmah Prep Portal access",
];

export default function SharmaEnrollPage() {
  return (
    <main className="enroll-page">
      {/* Header */}
      <header className="enroll-header">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.webp" alt="Himmah Prep" className="enroll-logo" />
        <p className="eyebrow">SAT Prep Program</p>
        <h1 className="enroll-title serif">
          Sharma <em>Family</em>
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
              <p className="enroll-plan-type eyebrow">SAT Prep & Counseling</p>

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
