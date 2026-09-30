import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/home/Reveal";
import { StatCounter } from "@/components/home/StatCounter";
import { ScoreEstimator } from "@/components/home/ScoreEstimator";
import { CITIES } from "@/lib/home-content";
import "../pages.css";

export const metadata: Metadata = {
  title: "SAT, ACT, IELTS & TOEFL Prep in Saudi Arabia & the Gulf — Himmah Prep",
  description:
    "1-on-1 SAT, ACT, IELTS, and TOEFL preparation for students in Saudi Arabia, the UAE, Qatar and across the Gulf. Diagnostic + 12-week study plan, 15+ full-length practice tests, 1500+ target.",
  alternates: { canonical: "https://www.himmahprep.com/standardized-test-tutors" },
  openGraph: {
    title: "Standardized Test Prep — Himmah Prep",
    description:
      "1-on-1 SAT, ACT, IELTS, and TOEFL preparation. Diagnostic, study plan, 15+ full-length practice tests, 90th-percentile target.",
    url: "https://www.himmahprep.com/standardized-test-tutors",
  },
};

const STEPS = [
  {
    tag: "Session one",
    title: "Full-length diagnostic",
    body: "Every student starts with a full SAT or ACT under real timing. We grade it ourselves and report back not just the score but the question types missed, where time ran out, and what will actually move the needle.",
    points: ["Section-level analysis", "Time-pressure breakdown", "Honest target score"],
  },
  {
    tag: "Weeks 1–12",
    title: "A plan built around this student",
    body: "Most Gulf students hit two specific weak points: English grammar rules and Algebra 2 fluency, neither of which IB or American-curriculum schools teach explicitly. We sequence the plan around the gaps, not a generic curriculum.",
    points: ["1-on-1 coaching, not group classes", "Drills plus concept teaching", "Weekly homework, reviewed"],
  },
  {
    tag: "Throughout",
    title: "Fifteen full-length mocks",
    body: "Test-day stamina is its own skill. Students get a library of 15+ full-length practice tests under the same conditions and timing, and we debrief every one before moving on.",
    points: ["Full-length, timed", "Per-question debrief", "Score trajectory tracked"],
  },
];

const TESTS = [
  { name: "SAT", sub: "Digital SAT, 1600 scale", rows: [["Typical plan", "12 weeks"], ["Sittings", "Up to 3"], ["Target", "1500+"], ["Best for", "US applications"]] },
  { name: "ACT", sub: "36 scale", rows: [["Typical plan", "12 weeks"], ["Sittings", "Up to 3"], ["Target", "33+"], ["Best for", "Strong science readers"]] },
  { name: "IELTS", sub: "Academic, 9.0 band", rows: [["Typical plan", "4 weeks"], ["Sittings", "1–2"], ["Target", "7.5+"], ["Best for", "UK universities"]] },
  { name: "TOEFL", sub: "iBT, 120 scale", rows: [["Typical plan", "4–6 weeks"], ["Sittings", "1–2"], ["Target", "105+"], ["Best for", "US universities"]] },
];

const FAQS = [
  ["Is test prep online or in person?", "Live and one-on-one, online, wherever the student is. Every session is with the same tutor, on the same plan. In-person sessions can be arranged in Jeddah and Riyadh."],
  ["How many sittings should a student plan for?", "Three, spread across Grade 10 and Grade 11. The first sets a baseline, the second comes after the plan, and the third is usually the score schools see."],
  ["Already at 1400+?", "Then the target is 1550. At that level the work is timing, the hardest Reading & Writing items, and removing careless errors in Math."],
  ["Do universities still require the SAT?", "Policies vary by school and change yearly. We track them and advise whether to submit a score for each university on the list. A strong score still helps almost everywhere."],
  ["Do you also help with the rest of the application?", "Yes. Test prep is one piece of the full programme, which covers strategy, essays, activities, summers, and applications for the US and the UK."],
];

function Label({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <p className="pg-label">
      <span>{num}</span>
      {children}
    </p>
  );
}

export default function TestPrepPage() {
  return (
    <>
      <Header />
      <main className="pg">
        <Reveal />

        <section className="pg-hero">
          <div className="pg-wrap pg-hero-grid">
            <div data-reveal>
              <p className="pg-hero-kicker">SAT, ACT, IELTS &amp; TOEFL prep for Gulf students</p>
              <h1>
                From <em>1200s</em> to <em>1500+</em>.
              </h1>
              <p className="pg-hero-lead">
                Most of our students arrive scoring in the 1200s. They leave with a 1500+. Our
                one-on-one SAT, ACT, IELTS, and TOEFL programmes for students in Saudi Arabia,
                the UAE, Qatar, Kuwait, Bahrain, and Oman are built around one principle:
                diagnose first, then build the plan around <em>this</em> student.
              </p>
              <div className="pg-ctas">
                <Link href="/apply" className="pg-btn pg-btn-primary">
                  Book a free diagnostic
                </Link>
                <Link href="/sat-bootcamp" className="pg-btn pg-btn-ghost">
                  Self-paced bootcamp instead
                </Link>
              </div>
            </div>
            <div data-reveal>
              <ScoreEstimator />
            </div>
          </div>
          <div className="pg-wrap">
            <dl className="pg-stats" data-reveal>
              <div>
                <dt>
                  <StatCounter value={1500} suffix="+" />
                </dt>
                <dd>Where most of our SAT students finish</dd>
              </div>
              <div>
                <dt>
                  <StatCounter value={15} suffix="+" />
                </dt>
                <dd>Full-length timed practice tests</dd>
              </div>
              <div>
                <dt>
                  <StatCounter value={9000} suffix="+" />
                </dt>
                <dd>Practice questions in the library</dd>
              </div>
              <div>
                <dt>
                  <StatCounter value={100} suffix="%" />
                </dt>
                <dd>Ivy League–credentialed tutors</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="pg-section pg-sand">
          <div className="pg-wrap">
            <div data-reveal>
              <Label num="01">How we run test prep</Label>
              <h2>Diagnostic. Plan. Mocks.</h2>
            </div>
            <div className="pg-cards" style={{ marginTop: 36 }}>
              {STEPS.map((s, i) => (
                <article key={s.title} className="pg-card" data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="pg-card-num">{String(i + 1).padStart(2, "0")}</span>
                  <p className="pg-card-tag">{s.tag}</p>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <ul>
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pg-section">
          <div className="pg-wrap pg-two">
            <div data-reveal>
              <Label num="02">Three sittings</Label>
              <h2>Three sittings, strategically used.</h2>
              <p className="pg-body">
                We aim for three SAT attempts spread across Grade 10 and Grade 11. The first sets a
                real baseline. The second comes after the diagnostic-driven plan. The third,
                usually the one schools see, is where most of our students land at 1500+.
              </p>
              <p className="pg-body">
                Already at 1400+? We push for 1550. Not there yet? We get you there. Either way,
                you&apos;ll know exactly where you stand after the first session, not after a
                month of guessing.
              </p>
            </div>
            <figure className="pg-hero-photo" data-reveal style={{ aspectRatio: "4 / 3" }}>
              <Image src="/campus/widener.jpg" alt="Widener Library, Harvard University" fill sizes="(max-width: 900px) 100vw, 560px" />
              <figcaption>Widener Library, Harvard</figcaption>
            </figure>
          </div>
        </section>

        <section className="pg-section pg-sand">
          <div className="pg-wrap">
            <div data-reveal>
              <Label num="03">The tests</Label>
              <h2>Four tests, one approach.</h2>
              <p className="pg-body">
                For students at IB or American-curriculum schools, English-proficiency tests are
                often waived, but not always. We help you figure out which schools require them,
                then prep cleanly for whichever the family chooses.
              </p>
            </div>
            <div className="pg-tests" style={{ marginTop: 36 }}>
              {TESTS.map((t, i) => (
                <div key={t.name} className="pg-test" data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                  <h3>{t.name}</h3>
                  <p className="pg-test-sub">{t.sub}</p>
                  <dl>
                    {t.rows.map(([k, v]) => (
                      <div key={k}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pg-section">
          <div className="pg-wrap pg-two">
            <div data-reveal>
              <Label num="04">Where</Label>
              <h2>SAT prep where you are.</h2>
              <p className="pg-body">
                Every session is live and one-on-one, so students anywhere in the Gulf get the
                same tutor and the same plan. See how it works in your city, or start with the{" "}
                <Link href="/sat-bootcamp">8-week Digital SAT bootcamp</Link> on your own
                schedule.
              </p>
            </div>
            <div data-reveal>
              <Label num="">Cities</Label>
              <ul className="pg-cities">
                {CITIES.map(([n, h]) => (
                  <li key={h}>
                    <Link href={h}>{n} →</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="pg-section pg-sand">
          <div className="pg-wrap pg-two">
            <div data-reveal>
              <Label num="05">Questions</Label>
              <h2>What families ask about test prep.</h2>
            </div>
            <div className="hp4-faq" data-reveal>
              {FAQS.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="pg-cta">
          <div className="pg-wrap pg-cta-grid">
            <div data-reveal>
              <Label num="06">Free diagnostic</Label>
              <h2>Start with a real score.</h2>
              <p className="pg-body">
                Book a free consultation and we&apos;ll schedule the diagnostic. You&apos;ll
                know where the student stands, what the target is, and what the plan looks like,
                before you commit to anything.
              </p>
            </div>
            <div className="pg-form" data-reveal>
              <LeadForm />
            </div>
          </div>
        </section>
        <p className="pg-credit">Photograph: Widener Library by Kenneth C. Zirkel, Wikimedia Commons (CC BY 4.0).</p>
      </main>
      <Footer />
    </>
  );
}
