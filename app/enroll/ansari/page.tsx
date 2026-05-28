import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ansari Family — US Admissions Program | Himmah Prep",
  description:
    "Select your admissions plan for the Ansari family. May 2026 – March 2028.",
  robots: { index: false, follow: false },
};

const plans = [
  {
    name: "Foundation",
    sessions: "One",
    sessionDetail: "private 1:1 counseling session per month",
    essaySubmissions: "Monthly Writing Team essay submissions",
    ceoReview: null,
    seniorAdvisor: false,
    fullPriceUSD: "$15,000",
    fullPriceSAR: "56,250 SAR",
    discountPriceUSD: "$10,000",
    discountPriceSAR: "37,500 SAR",
    badge: null,
    checkoutUrl: "https://www.himmahprep.com/pay-link/e9026790-0ad4-4761-a500-3f49ed293c01",
  },
  {
    name: "Elite",
    sessions: "Two",
    sessionDetail: "private 1:1 counseling sessions per month",
    essaySubmissions: "Bi-weekly Writing Team essay submissions",
    ceoReview: "2x CEO and COO reviews per submission cycle",
    seniorAdvisor: true,
    fullPriceUSD: "$26,250",
    fullPriceSAR: "98,438 SAR",
    discountPriceUSD: "$17,500",
    discountPriceSAR: "65,625 SAR",
    badge: "Best Results",
    checkoutUrl: "https://www.himmahprep.com/pay-link/2368f46b-dec7-406b-8899-d35806080f92",
  },
];

const sharedFeatures = [
  "May 2026 through March 2028",
  "Unlimited application support across 3 countries",
  "20 hours of SAT preparation included",
  "Direct messaging access between sessions",
  "Full Himmah Prep Portal access",
];

export default function AnsariEnrollPage() {
  return (
    <main className="enroll-page">
      <header className="enroll-header">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.webp" alt="Himmah Prep" className="enroll-logo" />
        <p className="eyebrow">US Admissions Program</p>
        <h1 className="enroll-title serif">
          Ansari <em>Family</em>
        </h1>
        <p className="enroll-subtitle">
          Choose the plan that best fits your family. Both plans include 20
          hours of SAT preparation and run from May 2026 through March 2028.
        </p>
      </header>

      <div className="enroll-discount-banner">
        <p className="enroll-discount-title">7-Day Discount — Limited Time</p>
        <p className="enroll-discount-sub">
          Enroll within 7 days to lock in the discounted rate shown below.
        </p>
      </div>

      <section className="enroll-plans enroll-plans--two">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`enroll-card${plan.badge ? " enroll-card--accent" : ""}`}
          >
            {plan.badge && <div className="enroll-badge">{plan.badge}</div>}

            <div className="enroll-card-body">
              <h2 className="enroll-plan-name serif">
                {plan.name} <em>Plan</em>
              </h2>
              <p className="enroll-plan-type eyebrow">Strategic Counseling</p>

              <div className="enroll-pricing">
                <div className="enroll-price-old">
                  <span>{plan.fullPriceUSD}</span>
                  <span className="enroll-price-sar">{plan.fullPriceSAR}</span>
                </div>
                <div className="enroll-price-current">
                  <span className="enroll-price-amount">{plan.discountPriceUSD}</span>
                  <span className="enroll-price-sar">{plan.discountPriceSAR}</span>
                </div>
                <p className="enroll-price-note">
                  One-time payment via credit card
                </p>
              </div>

              <hr className="enroll-divider" />

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
                {plan.seniorAdvisor && (
                  <li>
                    <span className="enroll-check">&#10003;</span>
                    <span>Hand-paired with our most senior counselor</span>
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
