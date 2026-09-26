import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { CITIES } from "./cities";

const BASE = "https://www.himmahprep.com";

export const metadata: Metadata = {
  title: "SAT Prep in Saudi Arabia & the Gulf — 1-on-1 Digital SAT Tutoring | Himmah Prep",
  description:
    "1-on-1 Digital SAT prep for students in Jeddah, Riyadh, Dammam, Dubai, Abu Dhabi, Doha, Kuwait, Bahrain and Oman. Ivy League-credentialed tutors, diagnostic-first 12-week plan, 15+ full mocks. Most students reach 1500+.",
  keywords: [
    "SAT prep Saudi Arabia",
    "SAT prep Gulf",
    "SAT tutoring Saudi Arabia",
    "SAT tutor UAE",
    "SAT prep Qatar",
    "Digital SAT prep GCC",
  ],
  alternates: { canonical: `${BASE}/sat-prep` },
  openGraph: {
    title: "SAT Prep in Saudi Arabia & the Gulf — Himmah Prep",
    description:
      "1-on-1 Digital SAT prep across the Gulf from Ivy League-credentialed tutors. Diagnostic-first plan, 15+ full mocks, 1500+ target.",
    url: `${BASE}/sat-prep`,
    type: "website",
    siteName: "Himmah Prep",
    locale: "en_US",
  },
};

export default function SatPrepHubPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Himmah Prep", item: BASE },
      { "@type": "ListItem", position: 2, name: "SAT Prep", item: `${BASE}/sat-prep` },
    ],
  };
  const listLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SAT prep by city",
    itemListElement: CITIES.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `SAT prep in ${c.name}`,
      url: `${BASE}/sat-prep/${c.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={listLd} />
      <Header />
      <main>
        <section className="page-hero">
          <div className="page-hero-inner">
            <p className="eyebrow">Digital SAT prep · Saudi Arabia &amp; the Gulf</p>
            <h1 className="display">
              SAT prep for students <em>across the Gulf.</em>
            </h1>
            <p className="lead">
              Live, 1-on-1 Digital SAT tutoring from Ivy League–credentialed tutors for students
              in Saudi Arabia, the UAE, Qatar, Kuwait, Bahrain, and Oman. Diagnostic first, a
              12-week plan built around the student, 15+ full-length mocks, and a target of{" "}
              <strong>1500+</strong>.
            </p>
            <div className="hero-ctas">
              <Link href="/apply" className="btn btn-primary">
                Apply for a free consultation
              </Link>
              <Link href="/sat-bootcamp" className="btn btn-ghost">
                Self-paced bootcamp <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="services">
          <div className="section-head">
            <p className="eyebrow">Choose your city</p>
            <h2 className="display-2">
              Same tutors. Same plan. <em>Your time zone.</em>
            </h2>
            <p className="lead-2">
              Every session is online and 1-on-1, scheduled around local school hours. Pick your
              city for test dates, the schools we work with, and what our students there tend to
              need most.
            </p>
          </div>
          <div className="grid-3">
            {CITIES.map((c, i) => (
              <article key={c.slug} className="card">
                <span className="card-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>
                  <Link href={`/sat-prep/${c.slug}`}>SAT prep in {c.name}</Link>
                </h3>
                <p>{c.intro}</p>
                <ul className="bullets">
                  {c.schools.slice(0, 2).map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="prose-section">
          <div className="prose">
            <h2 className="display-2">
              How SAT prep at Himmah Prep <em>works.</em>
            </h2>
            <p>
              Every student begins with a full-length adaptive Digital SAT diagnostic that we
              grade ourselves. From it we build a 12-week 1-on-1 plan targeting the exact
              question types the student misses — usually English grammar mechanics and Algebra
              2 fluency for Gulf students — with weekly reviewed homework and 15+ full-length
              timed mocks. Most students start in the 1200s and finish at 1500 or above.
            </p>
            <p>
              Test prep is one of four pillars in our college counseling program. Families who
              want the full application handled — school list, essays, activities, interviews,
              and summer planning — can read about{" "}
              <Link href="/saudi-arabia">college counseling in Saudi Arabia</Link>,{" "}
              <Link href="/uae">the UAE</Link>, <Link href="/qatar">Qatar</Link>,{" "}
              <Link href="/kuwait">Kuwait</Link>, <Link href="/bahrain">Bahrain</Link>, or{" "}
              <Link href="/oman">Oman</Link>. For ACT, IELTS, and TOEFL, see our{" "}
              <Link href="/standardized-test-tutors">full test prep program</Link>.
            </p>
          </div>
        </section>

        <section className="cta-strip">
          <div className="cta-strip-inner">
            <h2 className="display-2">
              Start with a <em>real diagnostic.</em>
            </h2>
            <p className="lead-2">
              Book a free 30-minute consultation. We&apos;ll talk through current scores, target
              schools, and what a realistic path to 1500+ looks like.
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
