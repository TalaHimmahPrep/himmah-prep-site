import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Apply for a Free Consultation — Himmah Prep",
  description:
    "A 30-minute strategy call with a Himmah Prep senior advisor. Founded by Harvard & UPenn graduates. 100% acceptance track record.",
  openGraph: {
    title: "Apply for a Free Consultation — Himmah Prep",
    description:
      "A 30-minute strategy call with a Himmah Prep senior advisor. Confidential. No obligation.",
    url: "https://himmahprep.com/apply",
  },
};

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="page-hero-inner">
            <p className="eyebrow">Free consultation</p>
            <h1 className="display">
              Tell us about <em>the&nbsp;student.</em>
            </h1>
            <p className="lead">
              A 30-minute strategy call with one of our senior advisors. You'll leave with a
              candid read on the path forward — and the honest version of how we'd help.
            </p>
            <ul className="trust-row">
              <li>Founded by Harvard &amp; UPenn graduates</li>
              <li>100% college acceptance track record</li>
              <li>Students admitted to every top-20 US university</li>
            </ul>
          </div>
        </section>

        <section className="apply-grid">
          <div className="apply-form-card">
            <LeadForm />
          </div>
          <aside className="apply-side">
            <p className="eyebrow">What happens next</p>
            <ol className="steps">
              <li>
                <span className="step-num serif">01</span>
                <div>
                  <h4>Complete the 2-minute form</h4>
                  <p className="muted">
                    Just enough for us to understand the student and their goals.
                  </p>
                </div>
              </li>
              <li>
                <span className="step-num serif">02</span>
                <div>
                  <h4>Hear back within 48 hours</h4>
                  <p className="muted">
                    We'll review your information and reach out to schedule the call.
                  </p>
                </div>
              </li>
              <li>
                <span className="step-num serif">03</span>
                <div>
                  <h4>30-minute strategy session</h4>
                  <p className="muted">
                    Discuss objectives, current standing, and concrete next steps. No pressure.
                  </p>
                </div>
              </li>
            </ol>
            <p className="apply-note muted-sm">
              All enquiries are confidential. All consultations are with an Ivy League graduate.
            </p>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
