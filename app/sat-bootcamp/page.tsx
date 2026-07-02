import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

const CHECKOUT_URL =
  "https://pay.himmahprep.com/checkout/buy/0be4eca8-bfb5-46ed-8d9b-9623ca856957";

export const metadata: Metadata = {
  title:
    "Digital SAT Prep Bootcamp for Gulf Students | 8-Week PDF Curriculum — Himmah Prep",
  description:
    "Himmah Prep's 8-week Digital SAT bootcamp for students across the Gulf — Saudi Arabia, the UAE, Qatar, Kuwait, Bahrain & Oman. A complete, self-paced PDF curriculum: diagnostic, weekly lessons and practice, full-length mocks, and test-day strategy. Aim for 1500+. Instant access, start anytime.",
  keywords: [
    "SAT prep",
    "SAT bootcamp",
    "SAT prep PDF",
    "self-paced SAT course",
    "SAT study guide",
    "digital SAT prep",
    "SAT prep Gulf",
    "SAT prep Saudi Arabia",
    "SAT prep Riyadh",
    "SAT prep UAE",
    "SAT prep Dubai",
    "SAT prep Qatar",
    "SAT prep Doha",
    "SAT prep Kuwait",
    "SAT prep Bahrain",
    "SAT prep Oman",
    "SAT 1500 prep",
  ],
  alternates: { canonical: "https://himmahprep.com/sat-bootcamp" },
  openGraph: {
    title: "Digital SAT Prep Bootcamp for Gulf Students — Himmah Prep",
    description:
      "8-week self-paced Digital SAT curriculum for Gulf students, delivered as PDF lessons. Diagnostic, practice, mocks, test-day strategy. Aim for 1500+. Instant access.",
    url: "https://himmahprep.com/sat-bootcamp",
    siteName: "Himmah Prep",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-sat-bootcamp.png",
        width: 1080,
        height: 1080,
        alt: "Himmah Prep 8-week SAT bootcamp — average admitted SAT 1500–1580 at top US universities.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital SAT Prep Bootcamp for Gulf Students — Himmah Prep",
    description:
      "8-week self-paced Digital SAT PDF curriculum for Gulf students. Aim for 1500+. Instant access, start anytime.",
    images: ["/og-sat-bootcamp.png"],
  },
};

const FAQS = [
  {
    q: "Who is the SAT bootcamp for?",
    a: "Serious students across the Gulf — Saudi Arabia, the UAE, Qatar, Kuwait, Bahrain, and Oman — in grades 9–12 who want to reach a 1500+ and apply to competitive US universities. It works for IB and American-curriculum students alike.",
  },
  {
    q: "How is the bootcamp delivered? Can I use it from anywhere in the GCC?",
    a: "The entire bootcamp is a self-paced PDF curriculum you download and keep. There are no live classes to attend — students in Riyadh, Jeddah, Dubai, Abu Dhabi, Doha, Kuwait City, Manama, or Muscat get exactly the same materials and work through them anywhere, on any device, at any time.",
  },
  {
    q: "Does it prepare me for the Digital SAT?",
    a: "Completely. The curriculum is built for the current Digital SAT — the adaptive Reading & Writing and Math format the College Board administers worldwide — including the on-screen tools, timing, and question styles.",
  },
  {
    q: "What SAT score does the bootcamp aim for?",
    a: "We build toward 1500+, the range top US universities typically admit (the average admitted SAT at schools like MIT, Harvard, Yale, Stanford, and Princeton is roughly 1500–1580). Your day-one diagnostic sets a realistic target and the plan to reach it.",
  },
  {
    q: "How much does the SAT bootcamp cost?",
    a: "$800 USD, all-in, for the complete 8-week curriculum — the diagnostic, eight weeks of lessons and practice sets, full-length mocks with answer keys, and a test-day strategy guide. It's yours to keep.",
  },
  {
    q: "How is this different from a private SAT tutor?",
    a: "You get a complete, structured 8-week curriculum you can work through at your own pace and revisit as often as you like — at a fraction of what one-on-one SAT tutoring in the Gulf usually costs.",
  },
  {
    q: "Do I have to keep up with a fixed schedule?",
    a: "No. The curriculum is fully self-paced. The 8-week plan is a recommended structure, not a deadline — move faster if you're ready, slow down on the topics that need it, and revisit any lesson as many times as you like right up to test day.",
  },
  {
    q: "When can I start?",
    a: "As soon as you enrol. Access is instant and there's no cohort or fixed start date — begin your diagnostic the same day and work at your own pace toward test day.",
  },
];

const COURSE_LD = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "SAT Prep Bootcamp — 8-Week Digital SAT Curriculum",
  description:
    "A self-paced, 8-week Digital SAT bootcamp for students across the Gulf, delivered as PDF lessons. Diagnostic, full curriculum, weekly practice, full-length mocks, and test-day strategy.",
  url: "https://himmahprep.com/sat-bootcamp",
  provider: {
    "@type": "EducationalOrganization",
    name: "Himmah Prep",
    url: "https://himmahprep.com",
  },
  educationalLevel: "High school",
  inLanguage: "en",
  teaches: [
    "Digital SAT Reading and Writing",
    "Digital SAT Math",
    "Test-taking strategy and pacing",
  ],
  audience: { "@type": "EducationalAudience", educationalRole: "student" },
  offers: {
    "@type": "Offer",
    price: "800",
    priceCurrency: "USD",
    category: "Paid",
    url: CHECKOUT_URL,
    availability: "https://schema.org/InStock",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "PT24H",
    location: {
      "@type": "VirtualLocation",
      url: "https://himmahprep.com/sat-bootcamp",
    },
    offers: {
      "@type": "Offer",
      price: "800",
      priceCurrency: "USD",
      url: CHECKOUT_URL,
      availability: "https://schema.org/InStock",
    },
  },
};

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const BREADCRUMB_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Himmah Prep",
      item: "https://himmahprep.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "SAT Bootcamp",
      item: "https://himmahprep.com/sat-bootcamp",
    },
  ],
};

export default function SatBootcampPage() {
  return (
    <>
      <JsonLd data={COURSE_LD} />
      <JsonLd data={FAQ_LD} />
      <JsonLd data={BREADCRUMB_LD} />
      <Header />
      <main className="sat-bootcamp">

        <section className="page-hero">
          <div className="page-hero-inner">
            <p className="eyebrow">8-week Digital SAT curriculum</p>
            <h1 className="display">
              Ace the SAT, <em>on your schedule.</em>
            </h1>
            <p className="lead">
              A complete 8-week Digital SAT curriculum for serious students, delivered as
              clear, self-paced PDF lessons and built by Ivy League graduates. Diagnostic,
              weekly practice, and full-length mocks. <strong>Start the moment you enrol.</strong>
            </p>
            <ul className="trust-row">
              <li>Full 8-week curriculum</li>
              <li>Self-paced PDF lessons</li>
              <li>Instant access</li>
            </ul>
            <div className="hero-ctas">
              <a href={CHECKOUT_URL} className="btn btn-primary lemonsqueezy-button">
                Get instant access
              </a>
            </div>
          </div>
        </section>

        <section className="prose-section">
          <div className="prose">
            <h2 className="display-2">
              Digital SAT prep, built for <em>the Gulf.</em>
            </h2>
            <p>
              Himmah Prep&apos;s SAT bootcamp is a complete, self-paced curriculum for students
              across the GCC — Saudi Arabia, the UAE, Qatar, Kuwait, Bahrain, and Oman. Whether
              you&apos;re in Riyadh, Jeddah, Dubai, Abu Dhabi, Doha, Kuwait City, Manama, or Muscat,
              you download the same PDF lessons and work through them on your own time, built by
              Ivy League graduates.
            </p>
            <p>
              It&apos;s built entirely for the <strong>Digital SAT</strong>, and designed around
              the two areas Gulf students most often need to close: grammar mechanics on the
              Reading &amp; Writing section, and the algebra fluency the Math section rewards. The
              goal is simple — a <strong>1500+</strong>, the range top US universities admit.
            </p>
          </div>
        </section>

        <section className="services">
          <div className="section-head">
            <p className="eyebrow">The 8-week plan</p>
            <h2 className="display-2">
              From diagnostic <em>to test day.</em>
            </h2>
          </div>
          <div className="grid-4">
            <article className="card">
              <span className="card-num">01</span>
              <h3>Weeks 1&ndash;2 &middot; Foundations</h3>
              <p>
                A full-length diagnostic on day one. The curriculum then targets the gaps it
                reveals.
              </p>
              <ul className="bullets">
                <li>Math: algebra core</li>
                <li>English: passage strategy</li>
                <li>Practice: diagnostic follow-up</li>
              </ul>
            </article>
            <article className="card">
              <span className="card-num">02</span>
              <h3>Weeks 3&ndash;4 &middot; Problem solving</h3>
              <p>
                Heavier math content and the inference work that separates 1400 readers from
                1500+ readers.
              </p>
              <ul className="bullets">
                <li>Math: problem solving &amp; advanced</li>
                <li>English: evidence and inference</li>
                <li>Practice: timed practice sets</li>
              </ul>
            </article>
            <article className="card">
              <span className="card-num">03</span>
              <h3>Weeks 5&ndash;6 &middot; Mechanics</h3>
              <p>
                The grammar rules and geometry shortcuts most students were never explicitly
                taught.
              </p>
              <ul className="bullets">
                <li>Math: geometry &amp; trig</li>
                <li>English: expression of ideas, grammar mechanics</li>
                <li>Practice: targeted drill sets</li>
              </ul>
            </article>
            <article className="card">
              <span className="card-num">04</span>
              <h3>Weeks 7&ndash;8 &middot; Test-day</h3>
              <p>
                Pacing strategy, mock walkthroughs, and the test-day routine students will run
                on the morning.
              </p>
              <ul className="bullets">
                <li>Pacing &amp; strategy</li>
                <li>Mock walkthroughs &amp; answer keys</li>
                <li>Practice: full-length mocks</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="prose-section">
          <div className="prose">
            <h2 className="display-2">
              Study on <em>your own schedule.</em>
            </h2>
            <p>
              The entire bootcamp is delivered as clear, well-designed <strong>PDF lessons</strong>{" "}
              you download and keep. No fixed class times, no scramble to catch a live session —
              work through the material whenever it suits you, from anywhere in the Gulf.
            </p>
            <p>
              The 8-week structure is a proven plan, not a deadline. Move faster if you&apos;re
              ready, slow down on the topics that need it, and revisit any lesson as many times
              as you like right up to test day.
            </p>
            <p>
              Access is <strong>instant</strong>. Enrol today and start your diagnostic the
              same day.
            </p>
          </div>
        </section>

        <section className="services">
          <div className="section-head">
            <p className="eyebrow">Pricing</p>
            <h2 className="display-2">
              Full curriculum, <em>all-in.</em>
            </h2>
          </div>
          <div className="pricing-card">
            <p className="muted-sm">Complete 8-week SAT bootcamp</p>
            <p className="pricing-amount serif">$800<span className="pricing-cur">USD</span></p>
            <ul className="pricing-list">
              <li>Diagnostic + full 8-week PDF curriculum</li>
              <li>Weekly lessons and practice sets, with answer keys</li>
              <li>Full-length Digital SAT mock tests</li>
              <li>Test-day strategy guide &mdash; yours to keep</li>
            </ul>
            <p className="pricing-note muted-sm">
              Instant access on purchase &middot; Self-paced &middot; Yours to keep
              <br />
              Purchases are non-refundable.{" "}
              <Link href="/terms-and-conditions">See terms</Link>.
            </p>
            <a href={CHECKOUT_URL} className="btn btn-primary lemonsqueezy-button">
              Get instant access
            </a>
          </div>
        </section>

        <section className="page-section page-section-tinted">
          <div className="section-head">
            <p className="eyebrow">FAQ</p>
            <h2 className="display-2">
              Questions, <em>answered.</em>
            </h2>
          </div>
          <div className="faq-grid">
            {FAQS.map((f) => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="cta-strip">
          <div className="cta-strip-inner">
            <p className="eyebrow">Instant access</p>
            <h2 className="display-2">
              Start prepping <em>today.</em>
            </h2>
            <p className="lead-2">
              Enrol now and get instant access to the complete 8-week curriculum. Download your
              lessons and start the diagnostic right away.
            </p>
            <a href={CHECKOUT_URL} className="btn btn-primary lemonsqueezy-button">
              Get instant access
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <Script src="https://assets.lemonsqueezy.com/lemon.js" strategy="afterInteractive" />
    </>
  );
}
