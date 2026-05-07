import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers | Join Our Team — Grow Your Career — Himmah Prep",
  description:
    "Career opportunities at Himmah Prep — join an Ivy-credentialed team building a leading college admissions prep program for Gulf students. Open roles for college advisors, test tutors, and leadership coaches.",
  openGraph: {
    title: "Careers | Join Our Team — Grow Your Career — Himmah Prep",
    description:
      "Career opportunities at Himmah Prep — join an Ivy-credentialed team. Open roles for college advisors, test tutors, and leadership coaches.",
    url: "https://himmahprep.com/advisor-career",
  },
};

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="page-hero-inner">
            <p className="eyebrow">Careers</p>
            <h1 className="display">
              Work with <em>us.</em>
            </h1>
            <p className="lead">
              We're a small, selective team — Ivy-credentialed advisors, expert tutors,
              workshop facilitators — building what we wish had existed when we were applying
              to college. If that sounds like you, we'd like to hear from you.
            </p>
          </div>
        </section>

        <section className="services">
          <div className="section-head">
            <p className="eyebrow">Open roles</p>
            <h2 className="display-2">
              Three ways to <em>join.</em>
            </h2>
          </div>
          <div className="grid-3">
            <article className="card">
              <span className="card-num">01</span>
              <h3>College Advisor</h3>
              <p>
                Lead 8–12 students through their full admissions cycle: school list, essays,
                applications, interviews. Ivy/T20 graduate, prior counseling experience
                preferred but not required.
              </p>
              <ul className="bullets">
                <li>Remote, flexible hours</li>
                <li>Competitive per-student compensation</li>
                <li>Senior advisors mentor junior</li>
              </ul>
            </article>
            <article className="card">
              <span className="card-num">02</span>
              <h3>Test Prep Tutor</h3>
              <p>
                1-on-1 SAT, ACT, TOEFL, or IELTS coaching. We expect 99th-percentile scores in
                whatever you teach — and the patience to teach it well to a student who
                doesn't have those scores yet.
              </p>
              <ul className="bullets">
                <li>Per-hour, remote</li>
                <li>We provide curriculum &amp; mocks</li>
                <li>Minimum 5 hrs/week commitment</li>
              </ul>
            </article>
            <article className="card">
              <span className="card-num">03</span>
              <h3>Leadership Coach</h3>
              <p>
                Run small-cohort workshops on public speaking, communication, decision-making,
                and project leadership. Industry experience required; teaching experience a plus.
              </p>
              <ul className="bullets">
                <li>Workshop-based, paid per cohort</li>
                <li>Quarterly cohorts</li>
                <li>Curriculum collaboratively built</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="cta-strip">
          <div className="cta-strip-inner">
            <h2 className="display-2">
              Interested? <em>Tell us more.</em>
            </h2>
            <p className="lead-2">
              Send a CV and a short note about what role you're interested in to{" "}
              <strong>careers@himmahprep.com</strong>. We read everything that comes in.
            </p>
            <a href="mailto:careers@himmahprep.com" className="btn btn-primary">
              Email us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
