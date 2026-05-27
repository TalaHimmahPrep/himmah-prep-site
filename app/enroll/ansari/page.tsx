import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ansari Family — US Admissions Program | Himmah Prep",
  description:
    "Select your admissions plan for the Ansari family. May 2026 – March 2028.",
  robots: { index: false, follow: false },
};

const plans = [
  {
    name: "Regular",
    sessions: "One",
    sessionDetail: "private 1:1 counseling session per month",
    essaySubmissions: "Monthly Writing Team essay submissions",
    ceoReview: null,
    priceUSD: "$10,000",
    priceSAR: "37,500 SAR",
    badge: null,
    checkoutUrl: "#",
  },
  {
    name: "Extensive",
    sessions: "Two",
    sessionDetail: "private 1:1 counseling sessions per month",
    essaySubmissions: "Bi-weekly Writing Team essay submissions",
    ceoReview: "1x CEO and COO review of all submission materials",
    priceUSD: "$17,500",
    priceSAR: "65,625 SAR",
    badge: "Best Results",
    checkoutUrl: "#",
  },
];

const sharedFeatures = [
  "May 2026 through March 2028",
  "20 hours of SAT preparation included",
  "Hand-paired with our most senior counselor",
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

      <section className="enroll-plans enroll-plans--two">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`enroll-card${plan.badge ? " enroll-card--accent" : ""}`}
          >
            {plan.badge && <div className="enroll-badge">{plan.badge}</div>}

            <div className="enroll-card-body">
              <h2 className="enroll-plan-name serif">
                {plan.name} <em>Package</em>
              </h2>
              <p className="enroll-plan-type eyebrow">Strategic Counseling</p>

              <div className="enroll-pricing">
                <div className="enroll-price-current">
                  <span className="enroll-price-amount">{plan.priceUSD}</span>
                  <span className="enroll-price-sar">{plan.priceSAR}</span>
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
                Select {plan.name} Package
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
