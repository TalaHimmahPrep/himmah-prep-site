import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BootcampOnboardingForm } from "@/components/BootcampOnboardingForm";

export const metadata: Metadata = {
  title: "You're in — SAT Bootcamp — Himmah Prep",
  description:
    "Payment confirmed. A few details so we can enroll the student in the cohort.",
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
              You&apos;re in. <em>Welcome to the cohort.</em>
            </h1>
            <p className="lead">
              A receipt is on its way to the email you used at checkout. To finish enrolling
              the student, fill in the details below — it takes under a minute.
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
                  <h4>Welcome pack within 1 business day</h4>
                  <p className="muted">
                    Cohort schedule, joining link for live sessions, and the diagnostic test
                    you&apos;ll take in Week 1.
                  </p>
                </div>
              </li>
              <li>
                <span className="step-num serif">02</span>
                <div>
                  <h4>WhatsApp cohort group</h4>
                  <p className="muted">
                    You&apos;ll be added to the cohort&apos;s WhatsApp group for reminders,
                    homework, and recordings.
                  </p>
                </div>
              </li>
              <li>
                <span className="step-num serif">03</span>
                <div>
                  <h4>First live session</h4>
                  <p className="muted">
                    Friday, June 26 at 6pm KSA. The diagnostic happens in this session — be
                    on a laptop with a stable connection.
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
