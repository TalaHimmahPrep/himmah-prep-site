import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions — Himmah Prep",
  description: "Terms and conditions for Himmah Prep services and digital products.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero page-hero-tight">
          <div className="page-hero-inner">
            <p className="eyebrow">Legal</p>
            <h1 className="display">Terms and Conditions</h1>
            <p className="lead muted-sm" style={{ textTransform: "none", letterSpacing: 0 }}>
              Last updated: please update before launch.
            </p>
          </div>
        </section>

        <section className="prose-section prose-narrow">
          <div className="prose">
            <p className="muted">
              <strong>Note:</strong> This page mirrors the structure of the existing Squarespace
              T&amp;C. The <em>Governing Law</em> and <em>Venue</em> clauses (§9) still contain
              live <code>[Insert State/Country]</code> placeholders that must be filled in by
              counsel before launch.
            </p>

            <h2>1. Definitions</h2>
            <p>
              [Definitions section copy from existing Squarespace T&amp;C. Migrate verbatim
              before launch.]
            </p>

            <h2>2. College Preparation Program</h2>
            <h3>2.1 Scope of Services</h3>
            <p>
              [Scope of services for the integrated college prep program — advising, test prep,
              leadership coaching, summer planning. Migrate from existing T&amp;C.]
            </p>
            <h3>2.2 No Guarantees</h3>
            <p>
              Himmah Prep makes no guarantee of admission to any specific institution.
              Outcomes depend on factors outside the program's control, including but not
              limited to admissions decisions made by individual universities.
            </p>
            <h3>2.3 Fees, Payment, and No-Refund Policy</h3>
            <p>
              [Fees and payment terms. The existing T&amp;C states a no-refund policy; migrate
              the exact language used today.]
            </p>
            <h3>2.4 Scheduling and Attendance</h3>
            <p>[Scheduling and attendance policy. Migrate from existing T&amp;C.]</p>
            <h3>2.5 Program Modifications</h3>
            <p>[Program modification rights. Migrate from existing T&amp;C.]</p>

            <h2>3. Standalone SAT Preparation</h2>
            <h3>3.1 Scope of Services</h3>
            <p>[SAT-only program scope. Migrate from existing T&amp;C.]</p>
            <h3>3.2 No Score or Outcome Guarantees</h3>
            <p>
              While we target 90th-percentile-and-above scores, no specific score is guaranteed.
            </p>
            <h3>3.3 Fees, No Refunds, and Forfeiture</h3>
            <p>[Fees and forfeiture conditions. Migrate from existing T&amp;C.]</p>
            <h3>3.4 Expiration of Services</h3>
            <p>[Service expiration timeline. Migrate from existing T&amp;C.]</p>

            <h2>4. User Conduct, Academic Integrity, and Content</h2>
            <h3>4.1 Academic Integrity and Plagiarism</h3>
            <p>
              All work submitted to Himmah Prep advisors and tutors must be the student's own.
              Plagiarism, in essays or otherwise, is grounds for immediate termination of
              services.
            </p>
            <h3>4.2 Website and Account Use</h3>
            <p>[Acceptable use policy for website and student portal. Migrate from existing T&amp;C.]</p>

            <h2>5. Intellectual Property</h2>
            <p>
              All curriculum, materials, the U.S. Application Guide, and the contents of the
              student portal are the intellectual property of Himmah Prep and may not be
              reproduced or shared without written permission.
            </p>

            <h2>6. Disclaimers, Limitation of Liability, and Indemnification</h2>
            <h3>6.1 General Disclaimers</h3>
            <p>[General disclaimers. Migrate from existing T&amp;C.]</p>
            <h3>6.2 Limitation of Liability</h3>
            <p>[Limitation of liability. Migrate from existing T&amp;C.]</p>
            <h3>6.3 Assumption of Risk</h3>
            <p>[Assumption of risk. Migrate from existing T&amp;C.]</p>
            <h3>6.4 Indemnification</h3>
            <p>[Indemnification clause. Migrate from existing T&amp;C.]</p>

            <h2>7. Force Majeure</h2>
            <p>[Force majeure clause. Migrate from existing T&amp;C.]</p>

            <h2>8. Privacy and Data</h2>
            <p>
              We collect and process information about students and parents only as needed to
              deliver the services described above. We do not sell personal data. [Expand from
              existing T&amp;C / link to a Privacy Policy if desired.]
            </p>

            <h2>9. Governing Law, Dispute Resolution, and Miscellaneous</h2>
            <h3>9.1 Governing Law</h3>
            <p>
              These Terms shall be governed by the laws of <strong>[Insert State/Country]</strong>,
              without regard to its conflict of law principles.
            </p>
            <h3>9.2 Dispute Resolution; Venue</h3>
            <p>
              Any dispute arising under these Terms shall be resolved in the courts located in{" "}
              <strong>[Insert City, State/Country]</strong>.
            </p>
            <h3>9.3 No Professional, Legal, or Financial Advice</h3>
            <p>
              Nothing in our services constitutes professional, legal, financial, or
              psychological advice.
            </p>
            <h3>9.4 Changes to These Terms</h3>
            <p>
              We may update these Terms from time to time. Changes will be reflected on this
              page with an updated revision date.
            </p>
            <h3>9.5 Entire Agreement; Severability; Assignment</h3>
            <p>[Standard miscellaneous clause. Migrate from existing T&amp;C.]</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
