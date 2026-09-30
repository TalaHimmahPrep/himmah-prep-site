import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/home/Reveal";
import { StatCounter } from "@/components/home/StatCounter";
import { UNIVERSITIES, UniversityLogo } from "@/components/UniversityLogo";
import "../pages.css";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.himmahprep.com/about" },
  title: "About Himmah Prep — Ivy League Founders, Top 20 University Results",
  description:
    "Founded by Harvard and UPenn graduates. Our students have been admitted to every top 20 US university — including Harvard, Stanford, MIT, Yale, and all Ivy League schools. Built around himmah, the Arabic concept of ambition and resolve.",
  openGraph: {
    title: "About Himmah Prep — Ivy League Founders, Top 20 University Results",
    description:
      "Founded by Harvard and UPenn graduates. Students admitted to every top 20 US university including Harvard, Stanford, MIT, Yale, and all Ivy League schools.",
    url: "https://www.himmahprep.com/about",
  },
};

const PILLARS = [
  {
    ar: "تفوّق",
    title: "Academic excellence",
    body: "Course selection that keeps doors open, test scores in the top percentiles, and the academic depth selective universities look for before anything else.",
  },
  {
    ar: "شخصية",
    title: "Character building",
    body: "Leadership workshops, public speaking, and a project the student actually leads. The things admissions officers notice, and the things students keep.",
  },
  {
    ar: "استعداد",
    title: "Future readiness",
    body: "A school list across the US and the UK, summers that matter, and applications that tell one clear story, sequenced so nothing collides.",
  },
];

const TIMELINE = [
  { year: "2020", title: "Founded in Jeddah", body: "Started by Harvard and UPenn graduates who had sat in the rooms most consultants only describe, for Gulf students being prepared the wrong way." },
  { year: "2022", title: "First Ivy League admits", body: "The first cohort placed at Cornell, Penn, and Berkeley. The programme grew from test prep into a full admissions strategy." },
  { year: "2024", title: "The Himmah portal", body: "A private workspace for every family: one board for every school, essay drafts with counselor comments, and every deadline in one place." },
  { year: "2025", title: "Every Ivy, and Oxbridge", body: "Admits at all eight Ivy League schools, MIT, Stanford, the UC system, Oxford, and Cambridge. Registered as Himmah Prep Company in Saudi Arabia." },
  { year: "2026", title: "US and UK, one plan", body: "UCAS, Oxbridge admissions tests, and interviews added alongside the US programme, so students applying to both work from a single timeline." },
];

function Label({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <p className="pg-label">
      <span>{num}</span>
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pg">
        <Reveal />

        <section className="pg-hero">
          <div className="pg-wrap pg-hero-grid">
            <div data-reveal>
              <p className="pg-hero-kicker">About Himmah Prep</p>
              <h1>
                Built on <em>himmah.</em>
              </h1>
              <p className="pg-hero-lead">
                Himmah Prep is built on the foundation of <em>himmah</em> (Arabic: همّة): ambition,
                resolve, and determination. The inner drive that distinguishes exceptional
                students from everyone else. We work with a small number of families in the Gulf
                each year, and we are selective on purpose.
              </p>
              <div className="pg-ctas">
                <Link href="/apply" className="pg-btn pg-btn-primary">
                  Book a free consultation
                </Link>
                <Link href="/results" className="pg-btn pg-btn-ghost">
                  See our results
                </Link>
              </div>
            </div>
            <figure className="pg-hero-photo" data-reveal>
              <Image src="/campus/oxford.jpg" alt="The Radcliffe Camera, University of Oxford" fill sizes="(max-width: 900px) 100vw, 520px" priority />
              <figcaption>Radcliffe Camera, Oxford</figcaption>
            </figure>
          </div>
          <div className="pg-wrap">
            <dl className="pg-stats" data-reveal>
              <div>
                <dt>2020</dt>
                <dd>Founded by Harvard and UPenn graduates</dd>
              </div>
              <div>
                <dt>
                  <StatCounter value={100} suffix="%" />
                </dt>
                <dd>Ivy League–credentialed counselors</dd>
              </div>
              <div>
                <dt>
                  <StatCounter value={6} />
                </dt>
                <dd>Gulf countries served</dd>
              </div>
              <div>
                <dt>
                  <StatCounter value={100} suffix="%" />
                </dt>
                <dd>College acceptance track record</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="pg-section pg-sand">
          <div className="pg-wrap">
            <div className="pg-word" data-reveal>
              <span className="pg-word-ar" lang="ar" dir="rtl">
                همّة
              </span>
              <dl>
                <dt>
                  himmah <i>/ˈhɪm.ma/</i>
                </dt>
                <dd>
                  Ambition, resolve, high aspiration. In classical Arabic, the strength of purpose
                  that carries a person past what is comfortable toward what is worth doing. It is
                  the quality we look for in a student, and the one we build the programme around.
                </dd>
              </dl>
            </div>
          </div>
        </section>

        <section className="pg-section">
          <div className="pg-wrap pg-two">
            <div data-reveal>
              <Label num="01">Why we started</Label>
              <h2>Too many talented students were being prepared the wrong way.</h2>
            </div>
            <div data-reveal>
              <p className="pg-body">
                A narrow emphasis on test scores. Applications treated as checklists. Advisors who
                never sat in the rooms they claimed to know. We wanted a programme that reflected
                what top universities actually look for: academic depth, real character, strategic
                clarity, and leadership that sticks.
              </p>
              <p className="pg-body">
                So we built one. Three pillars, end to end, sequenced into a 12–24 month plan
                inside our private portal. Everything stays in-house: your counselor sets the
                strategy and our own specialist tutors handle each piece, so there is no
                patchwork of tutors and no chaos in November.
              </p>
              <p className="pg-body">
                Five years in, our students have been admitted to every Ivy League university,
                MIT, Stanford, the UC system, Oxford, and Cambridge. The track record is real, and
                we keep the programme small so every student gets the attention it takes.
              </p>
            </div>
          </div>
        </section>

        <section className="pg-section pg-sand">
          <div className="pg-wrap">
            <div data-reveal>
              <Label num="02">Three pillars</Label>
              <h2>What every student gets.</h2>
            </div>
            <div className="pg-pillars" style={{ marginTop: 36 }}>
              {PILLARS.map((p, i) => (
                <article key={p.title} className="pg-pillar" data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                  <p className="pg-pillar-ar" lang="ar" dir="rtl">
                    {p.ar}
                  </p>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pg-section">
          <div className="pg-wrap pg-two">
            <div data-reveal>
              <Label num="03">The people</Label>
              <h2>Counselors who got in themselves.</h2>
              <p className="pg-body">
                Himmah Prep was founded by graduates of Harvard and the University of
                Pennsylvania. Counselors are Ivy League graduates who set the strategy; tutors
                are top scorers who deliver the test prep. Everyone works from the same plan.
              </p>
            </div>
            <div className="pg-founders" data-reveal>
              <div className="pg-founder">
                <div className="pg-founder-photo">C</div>
                <div>
                  <h3>Counselors</h3>
                  <p className="pg-founder-role">Ivy League graduates</p>
                  <p>
                    Lead strategy for each family: the school list, the timeline, activities,
                    summers, essays, and interviews for the US and the UK. Every counselor holds a
                    degree from an Ivy League university.
                  </p>
                  <span className="pg-founder-uni">
                    <UniversityLogo slug="harvard" label="Harvard University" className="" />
                    Harvard, Penn, and more
                  </span>
                </div>
              </div>
              <div className="pg-founder">
                <div className="pg-founder-photo">T</div>
                <div>
                  <h3>Tutors</h3>
                  <p className="pg-founder-role">Top scorers</p>
                  <p>
                    Specialist tutors for the SAT, ACT, IELTS, and TOEFL, chosen for their own
                    scores in the top percentiles and trained on the counselor&apos;s plan, so the
                    student hears one strategy from everyone.
                  </p>
                  <span className="pg-founder-uni">1500+ SAT · 33+ ACT</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pg-section pg-sand">
          <div className="pg-wrap pg-two">
            <div data-reveal>
              <Label num="04">Since 2020</Label>
              <h2>How we got here.</h2>
            </div>
            <ol className="pg-timeline" data-reveal>
              {TIMELINE.map((t) => (
                <li key={t.year}>
                  <time>{t.year}</time>
                  <div>
                    <h3>{t.title}</h3>
                    <p>{t.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="pg-section">
          <div className="pg-wrap">
            <div data-reveal>
              <Label num="05">Where our students go</Label>
              <h2>Acceptances to every Ivy.</h2>
              <p className="pg-body">
                A partial list of universities Himmah Prep students have been admitted to since
                2020. <Link href="/results">See the full results →</Link>
              </p>
            </div>
            <ul className="pg-wall" style={{ marginTop: 40 }} data-reveal>
              {UNIVERSITIES.map((u) => (
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

        <section className="pg-cta">
          <div className="pg-wrap pg-cta-grid">
            <div data-reveal>
              <Label num="06">Free consultation</Label>
              <h2>Ready to build a strategy that actually works?</h2>
              <p className="pg-body">
                A thirty-minute consultation with a senior counselor. No obligation, just a
                candid read on what&apos;s possible for the student.
              </p>
            </div>
            <div data-reveal>
              <Link href="/apply" className="pg-btn pg-btn-light" style={{ padding: "18px 30px", fontSize: 16 }}>
                Apply for a free consultation →
              </Link>
            </div>
          </div>
        </section>
        <p className="pg-credit">Photograph: Radcliffe Camera by Julian Herzog, Wikimedia Commons (CC BY 4.0).</p>
      </main>
      <Footer />
    </>
  );
}
