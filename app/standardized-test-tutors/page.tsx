import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Standardized Test Prep — SAT, ACT, IELTS, TOEFL — Himmah Prep",
  description:
    "1-on-1 SAT, ACT, IELTS, and TOEFL preparation for Gulf students. Diagnostic + 12-week study plan, 15+ full-length practice tests, and a 90th-percentile score target.",
  openGraph: {
    title: "Standardized Test Prep — Himmah Prep",
    description:
      "1-on-1 SAT, ACT, IELTS, and TOEFL preparation. Diagnostic, study plan, 15+ full-length practice tests, 90th-percentile target.",
    url: "https://himmahprep.com/standardized-test-tutors",
  },
};

export default function TestPrepPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="page-hero-inner">
            <p className="eyebrow">Standardized test preparation</p>
            <h1 className="display">
              From <em>1200s</em> to <em>1500+</em>.
            </h1>
            <p className="lead">
              Most of our students arrive scoring in the 1200s. They leave with a 1500+. Our
              SAT, ACT, IELTS, and TOEFL programs are built around one principle: diagnose
              first, then build the plan around <em>this</em> student.
            </p>
            <div className="hero-ctas">
              <Link href="/apply" className="btn btn-primary">
                Apply for a free consultation
              </Link>
            </div>
          </div>
        </section>

        <section className="services">
          <div className="section-head">
            <p className="eyebrow">How we run test prep</p>
            <h2 className="display-2">
              Diagnostic. Plan. <em>Mocks.</em>
            </h2>
          </div>
          <div className="grid-3">
            <article className="card">
              <span className="card-num">01</span>
              <h3>Full-length diagnostic</h3>
              <p>
                Every student starts with a full-length SAT or ACT diagnostic. We grade it
                ourselves and report back not just the score, but the question types you
                missed, where you ran out of time, and what's actually going to move the
                needle.
              </p>
              <ul className="bullets">
                <li>Section-level analysis</li>
                <li>Time-pressure breakdown</li>
                <li>Honest target score</li>
              </ul>
            </article>
            <article className="card">
              <span className="card-num">02</span>
              <h3>Customized 12-week plan</h3>
              <p>
                Most Gulf students hit two specific weak points: English grammar and Algebra 2
                rules they were never explicitly taught. We sequence the plan around{" "}
                <em>your</em> gaps, not a generic curriculum.
              </p>
              <ul className="bullets">
                <li>1-on-1 coaching, not group classes</li>
                <li>Drills + concept teaching</li>
                <li>Weekly homework, reviewed</li>
              </ul>
            </article>
            <article className="card">
              <span className="card-num">03</span>
              <h3>15+ full-length practice tests</h3>
              <p>
                Test-day stamina is its own skill. Students get access to a library of 15+
                full-length practice tests — same conditions, same timing — and we debrief each
                one in session before moving on.
              </p>
              <ul className="bullets">
                <li>Full-length, timed</li>
                <li>Per-question debrief</li>
                <li>Score trajectory tracked</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="prose-section">
          <div className="prose">
            <h2 className="display-2">
              Three sittings, <em>strategically used.</em>
            </h2>
            <p>
              We aim for three SAT attempts spread across 10th and 11th grade. The first sets a
              real baseline. The second comes after the diagnostic-driven plan. The third —
              usually the one schools see — is where most of our students land at <strong>1500+</strong>.
            </p>
            <p>
              Already at 1400+? We push for 1550. Not there yet? We get you there. Either way,
              you'll know exactly where you stand after the first session, not after a month of
              guessing.
            </p>
            <h3 className="prose-h3-major">
              <em>TOEFL &amp; IELTS</em>
            </h3>
            <p>
              For students at IB or American-curriculum schools, English-proficiency tests are
              often waived — but not always. We help you figure out which schools require them,
              and prep cleanly for whichever the family chooses. TOEFL prep tends to be 4–6
              weeks; IELTS slightly less.
            </p>
          </div>
        </section>

        <section className="cta-strip">
          <div className="cta-strip-inner">
            <h2 className="display-2">
              Ready for a real <em>diagnostic?</em>
            </h2>
            <p className="lead-2">
              Book a 30-minute consultation. We'll talk through current scores, target schools,
              and what a realistic path to 1500+ looks like for the student.
            </p>
            <Link href="/apply" className="btn btn-primary">
              Apply for a free consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
