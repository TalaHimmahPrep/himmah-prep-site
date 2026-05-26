import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alsubaie Family — US Admissions Program | Himmah Prep",
  description:
    "Select your admissions plan for the Alsubaie family. May 2026 – February 2027.",
  robots: { index: false, follow: false },
};

const plans = [
  {
    name: "Foundation",
    sessions: "One",
    sessionDetail: "private 1:1 session per month",
    essaySubmissions: "Monthly Writing Team essay submissions",
    ceoReview: null,
    fullPriceUSD: "$5,625",
    fullPriceSAR: "21,094 SAR",
    discountPriceUSD: "$3,750",
    discountPriceSAR: "14,063 SAR",
    badge: null,
    checkoutUrl: "https://www.himmahprep.com/pay-link/5d22a990-aa1b-4ee5-82cd-32d05ca1ee4c",
  },
  {
    name: "Signature",
    sessions: "Two",
    sessionDetail: "private 1:1 sessions per month",
    essaySubmissions: "Bi-weekly Writing Team essay submissions",
    ceoReview: "1x CEO and COO review of all submission materials",
    fullPriceUSD: "$11,250",
    fullPriceSAR: "42,188 SAR",
    discountPriceUSD: "$7,500",
    discountPriceSAR: "28,125 SAR",
    badge: null,
    checkoutUrl: "https://www.himmahprep.com/pay-link/33e71787-cbcc-4c5f-9ca7-e979b3dbbdbb",
  },
  {
    name: "Elite",
    sessions: "Four",
    sessionDetail: "private 1:1 sessions per month (weekly)",
    essaySubmissions: "Unlimited Writing Team essay submissions",
    ceoReview: "2x CEO and COO reviews per submission cycle",
    fullPriceUSD: "$22,500",
    fullPriceSAR: "84,375 SAR",
    discountPriceUSD: "$15,000",
    discountPriceSAR: "56,250 SAR",
    badge: "Best Results",
    checkoutUrl: "https://www.himmahprep.com/pay-link/afdcb5bc-7d59-48b9-bede-2cc3296e4a11",
  },
];

const sharedFeatures = [
  "May 2026 through February 2027",
  "Hand-paired with our most senior counselor",
  "Direct messaging access between sessions",
  "Full Himmah Prep Portal access",
];

export default function AlsubaieEnrollPage() {
  return (
    <main className="enroll-page">
      {/* Header */}
      <header className="enroll-header">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.webp" alt="Himmah Prep" className="enroll-logo" />
        <p className="eyebrow">US Admissions Program</p>
        <h1 className="enroll-title serif">
          Alsubaie <em>Family</em>
        </h1>
        <p className="enroll-subtitle">
          Choose the plan that best fits your family. All plans include senior
          advisor pairing and run from May 2026 through February 2027.
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
                  <span className="enroll-price-sar">{plan.fullPriceSAR}</span>
                </div>
                <div className="enroll-price-current">
                  <span className="enroll-price-amount">
                    {plan.discountPriceUSD}
                  </span>
                  <span className="enroll-price-sar">
                    {plan.discountPriceSAR}
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
