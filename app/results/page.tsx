import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/home/Reveal";
import { StatCounter } from "@/components/home/StatCounter";
import { ChartReveal } from "@/components/home/ChartReveal";
import { UNIVERSITIES, UniversityLogo } from "@/components/UniversityLogo";
import { QUOTES } from "@/lib/home-content";
import "../pages.css";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.himmahprep.com/results" },
  title: "Student Results & University Acceptances — Himmah Prep",
  description:
    "Himmah Prep students have been admitted to every Ivy League institution and the top 20 universities in the United States. Real outcomes, real students.",
  openGraph: {
    title: "Student Results & University Acceptances — Himmah Prep",
    description:
      "Acceptances to every Ivy, MIT, Stanford, and the UC system. 100% college acceptance track record.",
    url: "https://www.himmahprep.com/results",
  },
};

const OUTCOMES = [
  {
    slug: "cornell" as const,
    from: "1280 SAT",
    to: "1530",
    title: "Four months of testing, then the essay of his life.",
    body: "Arrived in Grade 11 with a 1280 and a college list built from rankings. Left with a 1530, an Early Decision strategy, and an essay about his grandfather's shop in Jeddah.",
    meta: "Cornell · Early Decision · Class of '28",
  },
  {
    slug: "yale" as const,
    from: "6 activities",
    to: "1 spike",
    title: "Dropped two activities. Doubled down on one.",
    body: "A 'fine' profile with six scattered activities. We cut two, built one into a regional debate initiative, and the application finally had a story.",
    meta: "Yale · Restrictive Early Action · Class of '27",
  },
  {
    slug: "princeton" as const,
    from: "Riyadh",
    to: "Princeton",
    title: "Eighteen months, every step rehearsed.",
    body: "Started in Grade 10 with a clear diagnostic. Two summers of research placements, three SAT sittings, and every interview practised before it happened.",
    meta: "Princeton · Regular Decision · Class of '28",
  },
  {
    slug: "berkeley" as const,
    from: "Tutor",
    to: "Strategy",
    title: "Came in for a tutor. Left with a plan.",
    body: "Expected SAT help. Got a two-year roadmap, two competitive summer programs, and a leadership cohort she still talks to weekly.",
    meta: "UC Berkeley · Class of '28",
  },
  {
    slug: "harvard" as const,
    from: "Draft 1",
    to: "Draft 7",
    title: "Seven drafts, each one more her.",
    body: "The Common App essay was rewritten seven times. Not to polish it, but to find the version only she could have written.",
    meta: "Harvard · Class of '27",
  },
  {
    slug: "duke" as const,
    from: "Not ready",
    to: "Logical step",
    title: "Honest about the gap, then closed it.",
    body: "Told plainly what the profile was missing in Grade 10. By senior year, Duke was a logical next step rather than a leap.",
    meta: "Duke · Class of '27",
  },
];

const IVIES = ["harvard", "yale", "princeton", "columbia", "penn", "brown", "dartmouth", "cornell"];

function Label({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <p className="pg-label">
      <span>{num}</span>
      {children}
    </p>
  );
}

export default function ResultsPage() {
  const ivies = UNIVERSITIES.filter((u) => IVIES.includes(u.slug));
  const others = UNIVERSITIES.filter((u) => !IVIES.includes(u.slug));
  const parents = QUOTES.filter((q) => q.kind === "parent");

  return (
    <>
      <Header />
      <main className="pg">
        <Reveal />

        <section className="pg-hero">
          <div className="pg-wrap pg-hero-grid">
            <div data-reveal>
              <p className="pg-hero-kicker">Our students&apos; results</p>
              <h1>
                Acceptances to <em>every Ivy.</em>
              </h1>
              <p className="pg-hero-lead">
                Himmah Prep students have earned admission to the most selective universities in
                the world: every Ivy League institution, the top 20 universities in the United
                States, and Oxford and Cambridge. Since 2020, every student who completed the
                programme has been admitted to a university on their list.
              </p>
              <div className="pg-ctas">
                <Link href="/apply" className="pg-btn pg-btn-primary">
                  Book a free consultation
                </Link>
                <a href="#stories" className="pg-btn pg-btn-ghost">
                  Read the stories
                </a>
              </div>
            </div>
            <figure className="pg-hero-photo" data-reveal>
              <Image src="/campus/nassau.jpg" alt="Nassau Hall, Princeton University" fill sizes="(max-width: 900px) 100vw, 520px" priority />
              <figcaption>Nassau Hall, Princeton</figcaption>
            </figure>
          </div>
          <div className="pg-wrap">
            <dl className="pg-stats" data-reveal>
              <div>
                <dt>
                  <StatCounter value={100} suffix="%" />
                </dt>
                <dd>College acceptance track record</dd>
              </div>
              <div>
                <dt>
                  <StatCounter value={8} suffix="/8" />
                </dt>
                <dd>Ivy League schools with Himmah admits</dd>
              </div>
              <div>
                <dt>
                  <StatCounter value={20} suffix="/20" />
                </dt>
                <dd>Top-20 US universities with Himmah admits</dd>
              </div>
              <div>
                <dt>
                  <StatCounter value={250} suffix="+" />
                </dt>
                <dd>Average SAT gain, diagnostic to final sitting</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="pg-section pg-sand">
          <div className="pg-wrap">
            <div data-reveal>
              <Label num="01">The Ivy League</Label>
              <h2>All eight.</h2>
              <p className="pg-body">
                Harvard, Yale, Princeton, Columbia, Penn, Brown, Dartmouth, and Cornell. Every one
                of them has admitted a Himmah Prep student.
              </p>
            </div>
            <ul className="pg-wall" style={{ marginTop: 40, gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }} data-reveal>
              {ivies.map((u) => (
                <li key={u.slug} title={u.label}>
                  <UniversityLogo slug={u.slug} label={u.label} className="" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pg-section">
          <div className="pg-wrap">
            <div data-reveal>
              <Label num="02">Beyond the Ivies</Label>
              <h2>And the rest of the top twenty.</h2>
              <p className="pg-body">
                MIT, Stanford, Caltech, Duke, and the strongest public universities in the country.
                Plus Oxford and Cambridge in the UK.
              </p>
            </div>
            <ul className="pg-wall" style={{ marginTop: 40 }} data-reveal>
              {others.map((u) => (
                <li key={u.slug} title={u.label}>
                  <UniversityLogo slug={u.slug} label={u.label} className="" />
                </li>
              ))}
              <li title="Oxford">
                <UniversityLogo slug="oxford" label="University of Oxford" className="" />
              </li>
              <li title="Cambridge">
                <UniversityLogo slug="cambridge" label="University of Cambridge" className="" />
              </li>
            </ul>
          </div>
        </section>

        <section id="stories" className="pg-section pg-sand">
          <div className="pg-wrap">
            <div data-reveal>
              <Label num="03">How it happened</Label>
              <h2>Six students. Six different plans.</h2>
              <p className="pg-body">
                No two roadmaps are the same. These are the turning points that made the
                difference, in the words of the families themselves.
              </p>
            </div>
            <div className="pg-outcomes" style={{ marginTop: 40 }}>
              {OUTCOMES.map((o, i) => (
                <article key={o.title} className="pg-outcome" data-reveal style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                  <div className="pg-outcome-logo">
                    <UniversityLogo slug={o.slug} label={o.meta} className="" />
                  </div>
                  <p className="pg-outcome-arrow">
                    {o.from} <i>→</i> <b>{o.to}</b>
                  </p>
                  <h3>{o.title}</h3>
                  <p>{o.body}</p>
                  <p className="pg-outcome-meta">{o.meta}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pg-section">
          <div className="pg-wrap pg-two">
            <div data-reveal>
              <Label num="04">Test scores</Label>
              <h2>Where our students start, and where they finish.</h2>
              <p className="pg-body">
                Most students arrive scoring in the 1200s on their diagnostic. After a
                twelve-week plan and three sittings, most finish at 1500 or above, which places
                them in the 98th percentile or higher.
              </p>
              <p className="pg-body">
                <Link href="/standardized-test-tutors">How test prep works →</Link>
              </p>
            </div>
            <ChartReveal className="pg-chart">
              <div className="pg-chart-h">
                <p>Typical SAT trajectory</p>
                <strong>+250 to +300</strong>
              </div>
              <div className="pg-bars">
                <div className="pg-bar">
                  <span>Diagnostic</span>
                  <span className="pg-bar-track">
                    <i style={{ "--w": "62%" } as React.CSSProperties} />
                  </span>
                  <b>1240</b>
                </div>
                <div className="pg-bar">
                  <span>First sitting</span>
                  <span className="pg-bar-track">
                    <i style={{ "--w": "72%" } as React.CSSProperties} />
                  </span>
                  <b>1390</b>
                </div>
                <div className="pg-bar">
                  <span>Second sitting</span>
                  <span className="pg-bar-track">
                    <i style={{ "--w": "82%" } as React.CSSProperties} />
                  </span>
                  <b>1470</b>
                </div>
                <div className="pg-bar">
                  <span>Final</span>
                  <span className="pg-bar-track">
                    <i className="is-after" style={{ "--w": "94%" } as React.CSSProperties} />
                  </span>
                  <b>1520</b>
                </div>
              </div>
              <p className="pg-chart-foot">
                Median scores across Himmah Prep students who completed the full SAT programme.
                Individual results vary.
              </p>
            </ChartReveal>
          </div>
        </section>

        <section className="pg-section pg-maroon">
          <div className="pg-wrap">
            <div data-reveal>
              <Label num="05">From parents</Label>
              <h2>In their own words.</h2>
            </div>
            <div className="pg-quotes" style={{ marginTop: 36 }}>
              {parents.map((q, i) => (
                <figure key={q.name} className="pg-quote" data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                  <blockquote>{q.quote}</blockquote>
                  <figcaption>
                    <strong>{q.name}</strong>
                    <span>{q.school}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="pg-cta">
          <div className="pg-wrap pg-cta-grid">
            <div data-reveal>
              <Label num="06">Your student</Label>
              <h2>Tell us where the student is today.</h2>
              <p className="pg-body">
                A thirty-minute call with a senior counselor. You&apos;ll get a candid read on
                the student&apos;s profile, a realistic school list, and a clear next step.
              </p>
            </div>
            <div className="pg-form" data-reveal>
              <LeadForm />
            </div>
          </div>
        </section>
        <p className="pg-credit">Photograph: Nassau Hall by Smallbones, Wikimedia Commons (CC0).</p>
      </main>
      <Footer />
    </>
  );
}
