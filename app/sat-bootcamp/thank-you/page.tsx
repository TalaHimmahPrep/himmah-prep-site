import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BootcampOnboardingForm } from "@/components/BootcampOnboardingForm";

export const metadata: Metadata = {
  title: "You're in — SAT Bootcamp — Himmah Prep",
  description:
    "Payment confirmed. A few details so we can set the student up with the curriculum.",
  robots: { index: false, follow: false },
};

export default function SatBootcampThankYouPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero page-hero-tight">
          <div className="page-hero-inner">
            <p className="eyebrow">Payment received</p>
            <h1 className="display">
              You&apos;re in. <em>Welcome to the bootcamp.</em>
            </h1>
            <p className="lead">
              A receipt is on its way to the email you used at checkout. To set the student up
              with the curriculum, fill in the details below — it takes under a minute.
            </p>
          </div>
        </section>

        <section className="apply-grid">
          <div className="apply-form-card">
            <BootcampOnboardingForm />
          </div>
          <aside className="apply-side">
            <p className="eyebrow">What happens next</p>
            <ol className="steps">
              <li>
                <span className="step-num serif">01</span>
                <div>
                  <h4>Your curriculum, delivered</h4>
                  <p className="muted">
                    You&apos;ll get the full 8-week PDF curriculum and your Week 1 diagnostic at
                    the email you used at checkout.
                  </p>
                </div>
              </li>
              <li>
                <span className="step-num serif">02</span>
                <div>
                  <h4>Start with the diagnostic</h4>
                  <p className="muted">
                    Take the full-length diagnostic first — it sets your target score and shows
                    which lessons to prioritise.
                  </p>
                </div>
              </li>
              <li>
                <span className="step-num serif">03</span>
                <div>
                  <h4>Work at your own pace</h4>
                  <p className="muted">
                    Follow the 8-week plan on your own schedule, and revisit any lesson as often
                    as you like right up to test day.
                  </p>
                </div>
              </li>
            </ol>
            <p className="apply-note muted-sm">
              Trouble with anything? Email connect@himmahprep.com and we&apos;ll sort it.
            </p>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
