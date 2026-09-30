import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { CITIES, CITY_BY_SLUG, type City } from "../cities";

const BASE = "https://www.himmahprep.com";

function listPhrase(items: string[]): string {
  if (items.length <= 1) return items[0] ?? "";
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function faqsFor(c: City) {
  return [
    {
      q: `Is the SAT prep in ${c.name} in person or online?`,
      a: `Online, live, and 1-on-1. Sessions are scheduled around ${c.name} school hours and the student's own exam calendar. Because it is one tutor and one student, the experience is the same as sitting in the same room — without the commute.`,
    },
    {
      q: `When is the Digital SAT offered for students in ${c.name}?`,
      a: `The Digital SAT is offered internationally on the March, May, June, August, October, November, and December dates, at approved test centers — usually international schools — in and around ${c.name}. Register on the College Board site as early as possible; centers in the Gulf fill up. We plan the prep timeline backwards from the sitting you choose.`,
    },
    {
      q: "How long does the program take?",
      a: "The core plan is 12 weeks: a full-length diagnostic in week one, targeted 1-on-1 coaching, weekly reviewed homework, and 15+ full-length timed mocks. Most students sit the real test at the end of the plan and again one sitting later.",
    },
    {
      q: `Which ${c.country.replace(/^the\s+/, "")} universities accept the SAT?`,
      a: `${listPhrase(c.localUnis)} all consider SAT scores for admission or placement, alongside the US and UK universities most of our students target. One prep plan covers all of them.`,
    },
    {
      q: "What score should we aim for?",
      a: "It depends on the school list, and we will tell you honestly after the diagnostic. For top-20 US universities the admitted range is roughly 1500–1580, and that is where most of our students finish. Students starting in the 1200s typically gain 200–300 points.",
    },
    {
      q: "Do you also help with the college application itself?",
      a: `Yes. Test prep can be taken on its own, but most ${c.name} families pair it with college counseling — school list, essays, activities, and interviews — under one senior advisor. See our ${c.country.replace(/^the\s+/, "")} college counseling page or book a free consultation.`,
    },
  ];
}

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const c = CITY_BY_SLUG[city];
  if (!c) return {};
  const url = `${BASE}/sat-prep/${c.slug}`;
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    keywords: [
      `SAT prep ${c.name}`,
      `SAT tutor ${c.name}`,
      `SAT tutoring ${c.name}`,
      `SAT classes ${c.name}`,
      `Digital SAT ${c.name}`,
      `SAT prep ${c.country.replace(/^the\s+/, "")}`,
      `SAT course ${c.name}`,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url,
      type: "website",
      siteName: "Himmah Prep",
      locale: "en_US",
    },
    twitter: { card: "summary_large_image", title: c.metaTitle, description: c.metaDescription },
  };
}

const HERO_PHOTOS = [
  { name: "stanford", src: "/campus/hoover.jpg", alt: "Hoover Tower, Stanford University", caption: "Hoover Tower, Stanford" },
  { name: "harvard", src: "/campus/widener.jpg", alt: "Widener Library, Harvard University", caption: "Widener Library, Harvard" },
  { name: "princeton", src: "/campus/nassau.jpg", alt: "Nassau Hall, Princeton University", caption: "Nassau Hall, Princeton" },
  { name: "yale", src: "/campus/yale_portal.jpg", alt: "Sterling Memorial Library, Yale University", caption: "Sterling Memorial Library, Yale" },
  { name: "oxford", src: "/campus/oxford.jpg", alt: "The Radcliffe Camera, University of Oxford", caption: "Radcliffe Camera, Oxford" },
];

export default async function CitySatPrepPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const c = CITY_BY_SLUG[city];
  if (!c) notFound();
  const photo = HERO_PHOTOS[Object.keys(CITY_BY_SLUG).indexOf(city) % HERO_PHOTOS.length];

  const url = `${BASE}/sat-prep/${c.slug}`;
  const faqs = faqsFor(c);
  const countryName = c.country.replace(/^the\s+/, "");
  const others = CITIES.filter((x) => x.slug !== c.slug);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `SAT prep in ${c.name}`,
    serviceType: "SAT preparation and tutoring",
    description: c.metaDescription,
    url,
    provider: { "@id": `${BASE}/#organization` },
    areaServed: [
      { "@type": "City", name: c.name.split(" & ")[0] },
      { "@type": "Country", name: countryName },
    ],
    audience: { "@type": "EducationalAudience", educationalRole: "student" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${BASE}/apply`,
      availableLanguage: ["English", "Arabic"],
    },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Himmah Prep", item: BASE },
      { "@type": "ListItem", position: 2, name: "SAT Prep", item: `${BASE}/sat-prep` },
      { "@type": "ListItem", position: 3, name: c.name, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={faqLd} />
      <JsonLd data={breadcrumbLd} />
      <Header />
      <main>
        <section className="page-hero page-hero-split">
          <div className="page-hero-inner">
            <p className="eyebrow">Digital SAT prep · {c.name}</p>
            <h1 className="display">
              SAT prep in <em>{c.name}.</em>
            </h1>
            <p className="lead">
              1-on-1 Digital SAT tutoring for students in {c.name} — most of them at{" "}
              {listPhrase(c.schools.slice(0, 3))} — from Ivy League–credentialed tutors.
              Diagnostic first, a 12-week plan built around the student, 15+ full-length mocks,
              and a target of <strong>1500+</strong>.
            </p>
            <div className="hero-ctas">
              <Link href="/apply" className="btn btn-primary">
                Apply for a free consultation
              </Link>
              <Link href="/sat-bootcamp" className="btn btn-ghost">
                Self-paced bootcamp instead <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className="hero-trust">
              <div className="trust-stat">
                <div className="trust-num">
                  1500<span>+</span>
                </div>
                <div className="trust-label">
                  Where most of our
                  <br />
                  students finish
                </div>
              </div>
              <div className="trust-divider" aria-hidden="true" />
              <div className="trust-stat">
                <div className="trust-num">
                  15<span>+</span>
                </div>
                <div className="trust-label">
                  Full-length
                  <br />
                  timed mocks
                </div>
              </div>
              <div className="trust-divider" aria-hidden="true" />
              <div className="trust-stat">
                <div className="trust-num">
                  100<span>%</span>
                </div>
                <div className="trust-label">
                  Ivy League
                  <br />
                  credentialed tutors
                </div>
              </div>
            </div>
          </div>
          <figure className="page-hero-photo" data-photo={photo.name}>
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 900px) 100vw, 480px" priority />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        </section>

        <section className="prose-section">
          <div className="prose">
            <h2 className="display-2">
              Why {c.demonym} students <em>plateau in the 1200s.</em>
            </h2>
            <p>{c.intro}</p>
            <p>
              Two weak points show up in almost every diagnostic we run in {c.name}:{" "}
              <strong>English grammar mechanics</strong> — the Reading &amp; Writing module
              tests rules that IB and American-curriculum schools rarely teach explicitly — and{" "}
              <strong>Algebra 2 fluency</strong>, because IB Math AA/AI and the SAT prioritise
              different things. Group SAT classes teach the whole test to everyone. We teach the
              parts <em>this</em> student is missing.
            </p>
            <p>
              Our SAT students in {c.name} typically gain 200–300 points across the plan, and
              most finish at 1500 or above — the range that the top-20 US universities actually
              admit from.
            </p>
          </div>
        </section>

        <section className="services">
          <div className="section-head">
            <p className="eyebrow">How we run SAT prep in {c.name}</p>
            <h2 className="display-2">
              Diagnostic. Plan. <em>Mocks.</em>
            </h2>
          </div>
          <div className="grid-3">
            <article className="card">
              <span className="card-num">01</span>
              <h3>Full-length diagnostic</h3>
              <p>
                Every student starts with a full-length adaptive Digital SAT, graded by us. You
                get the score, the question types missed, where time ran out, and an honest
                target — not a sales pitch.
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
                Live 1-on-1 sessions scheduled around {c.name} school hours, sequenced around the
                student&apos;s gaps rather than a generic syllabus. Weekly homework, reviewed
                every week.
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
                Test-day stamina is its own skill. Students take 15+ full-length timed mocks in
                the real adaptive format, and we debrief every one before moving on.
              </p>
              <ul className="bullets">
                <li>Full-length, timed, adaptive</li>
                <li>Per-question debrief</li>
                <li>Score trajectory tracked</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="prose-section">
          <div className="prose">
            <h2 className="display-2">
              SAT test dates and universities <em>for {c.name} students.</em>
            </h2>
            <p>
              The Digital SAT is offered to international students seven times a year — March,
              May, June, August, October, November, and December — at approved test centers in
              and around {c.name}, typically international schools. Registration is through the
              College Board and Gulf centers fill early, so we book the sitting first and plan
              the 12 weeks backwards from it. We aim for three sittings across 10th and 11th
              grade: a baseline, a post-prep score, and the one the universities see.
            </p>
            <p>
              Beyond the US and UK lists our students target, the SAT is also read by{" "}
              {listPhrase(c.localUnis)}. One plan covers all of them.
            </p>
            <h2 className="display-2 prose-h2-next">
              SAT prep and college counseling in {c.name}, <em>together.</em>
            </h2>
            <p>
              Test prep can be taken on its own. Most families in {c.name} pair it with our{" "}
              <Link href={`/${c.countrySlug}`}>college counseling for {countryName}</Link> —
              school list, essays, activities, interviews, and summer planning, with one senior
              advisor responsible for the whole application. Students who prefer to work alone
              can start with the <Link href="/sat-bootcamp">8-week self-paced Digital SAT bootcamp</Link>, the
              same curriculum delivered as PDF lessons. For ACT, IELTS, and TOEFL, see our{" "}
              <Link href="/standardized-test-tutors">full test prep program</Link>.
            </p>
          </div>
        </section>

        <section className="page-section page-section-tinted">
          <div className="section-head">
            <p className="eyebrow">FAQ</p>
            <h2 className="display-2">
              SAT prep in {c.name}: <em>what parents ask.</em>
            </h2>
          </div>
          <div className="faq-grid">
            {faqs.map((f) => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="prose-section">
          <div className="prose">
            <h2 className="display-2">
              SAT prep in <em>other Gulf cities.</em>
            </h2>
            <p>
              {others.map((o, i) => (
                <span key={o.slug}>
                  <Link href={`/sat-prep/${o.slug}`}>{o.name}</Link>
                  {i < others.length - 1 ? " · " : ""}
                </span>
              ))}
            </p>
          </div>
        </section>

        <section className="cta-strip">
          <div className="cta-strip-inner">
            <h2 className="display-2">
              Ready for a real <em>diagnostic?</em>
            </h2>
            <p className="lead-2">
              Book a free 30-minute consultation. We&apos;ll talk through current scores, target
              schools, and what a realistic path to 1500+ looks like for a student in {c.name}.
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
