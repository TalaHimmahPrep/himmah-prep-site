import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import { GuideCover } from "@/components/GuideCover";
import { UniversityLogo, type UniversitySlug } from "@/components/UniversityLogo";
import { JsonLd } from "@/components/JsonLd";
import { ServiceTabs } from "@/components/home/ServiceTabs";
import { StickyNav } from "@/components/home/StickyNav";
import { Reveal } from "@/components/home/Reveal";
import { GradePlanner } from "@/components/home/GradePlanner";
import { StatCounter } from "@/components/home/StatCounter";
import { QuoteCarousel } from "@/components/home/QuoteCarousel";
import { TiltCard } from "@/components/home/TiltCard";
import { CampusRow, type Campus } from "@/components/home/CampusRow";
import { CITIES, COUNTRIES, FAQS, PHOTO_CREDITS, QUOTES, SERVICES, STAGES, UK_US } from "@/lib/home-content";
import "./home.css";

const WEBSITE_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.himmahprep.com/#website",
  url: "https://www.himmahprep.com",
  name: "Himmah Prep",
  alternateName: ["himmahPREP", "Himmah"],
  publisher: { "@id": "https://www.himmahprep.com/#organization" },
  inLanguage: "en-US",
};

const SERVICE_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "College counseling and SAT prep for Gulf students",
  serviceType: ["College admissions counseling", "UK university admissions counseling", "SAT preparation", "ACT preparation"],
  provider: { "@id": "https://www.himmahprep.com/#organization" },
  areaServed: ["Saudi Arabia", "United Arab Emirates", "Qatar", "Kuwait", "Bahrain", "Oman"],
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://www.himmahprep.com/apply",
    availableLanguage: ["English", "Arabic"],
  },
};

const HOME_FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const CAMPUSES: Campus[] = [
  { name: "Harvard", place: "Massachusetts", src: "/campus/widener.jpg", note: "Widener Library, Harvard Yard." },
  { name: "Princeton", place: "New Jersey", src: "/campus/nassau.jpg", note: "Nassau Hall, the oldest building on campus." },
  { name: "Stanford", place: "California", src: "/campus/stanford_arches.jpg", note: "The arcades of the Main Quad." },
  { name: "Yale", place: "Connecticut", src: "/campus/yale_portal.jpg", note: "Sterling Memorial Library." },
  { name: "Oxford", place: "England", src: "/campus/oxford.jpg", note: "The Radcliffe Camera, Radcliffe Square." },
  { name: "Cambridge", place: "England", src: "/campus/cambridge.jpg", note: "King's College Chapel." },
];

const BAND_LOGOS: { slug: UniversitySlug | null; label: string }[] = [
  { slug: "harvard", label: "Harvard" },
  { slug: "stanford", label: "Stanford" },
  { slug: "yale", label: "Yale" },
  { slug: "princeton", label: "Princeton" },
  { slug: "mit", label: "MIT" },
  { slug: "columbia", label: "Columbia" },
  { slug: "penn", label: "Penn" },
  { slug: "cornell", label: "Cornell" },
  { slug: "duke", label: "Duke" },
  { slug: "berkeley", label: "UC Berkeley" },
  { slug: "ucla", label: "UCLA" },
  { slug: "oxford", label: "Oxford" },
  { slug: "cambridge", label: "Cambridge" },
];

function Label({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <p className="hp4-label">
      <span>{num}</span>
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <div className="hp4">
      <JsonLd data={WEBSITE_LD} />
      <JsonLd data={SERVICE_LD} />
      <JsonLd data={HOME_FAQ_LD} />
      <Reveal />
      <StickyNav />

      <main>
        {/* ---- Hero ---- */}
        <section className="hp4-hero">
          <div className="hp4-wrap hp4-hero-grid">
            <div className="hp4-hero-copy" data-reveal>
              <p className="hp4-kicker">College counseling · Saudi Arabia &amp; the Gulf</p>
              <h1>Ivy League and Oxbridge college counseling for Gulf students.</h1>
              <p className="hp4-hero-lead">
                Admissions strategy for the United States and the United Kingdom, SAT and ACT
                prep, essays, and leadership for students in Saudi Arabia, the UAE, Qatar,
                Kuwait, Bahrain, and Oman, from advisors who went to the Ivy League themselves.
                Every piece is handled in-house by our own counselors and tutors, working from
                one plan, from the first meeting to the final decision.
              </p>
              <div className="hp4-hero-ctas">
                <a href="#consult" className="hp4-btn hp4-btn-primary">
                  Book a free consultation
                  <span aria-hidden="true">→</span>
                </a>
                <a href="#plan" className="hp4-btn hp4-btn-ghost">
                  See the plan by grade
                </a>
              </div>
            </div>
            <div className="hp4-hero-media" data-reveal>
              <TiltCard className="hp4-hero-photo">
                <Image
                  src="/campus/widener.jpg"
                  alt="Widener Library, Harvard University"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 520px"
                />
                <p className="hp4-hero-tag">
                  <span className="hp4-dot" aria-hidden="true" />
                  One team, one plan, first meeting to final decision
                </p>
              </TiltCard>
            </div>
          </div>

          <div className="hp4-wrap">
            <dl className="hp4-stats" data-reveal>
              <div>
                <dt>
                  <StatCounter value={100} suffix="%" />
                </dt>
                <dd>College acceptance track record</dd>
              </div>
              <div>
                <dt>
                  <StatCounter value={100} suffix="%" />
                </dt>
                <dd>Ivy League–credentialed advisors</dd>
              </div>
              <div>
                <dt>
                  <StatCounter value={90} suffix="th+" />
                </dt>
                <dd>Median SAT/ACT percentile attained</dd>
              </div>
              <div>
                <dt>2020</dt>
                <dd>Founded by Harvard and UPenn graduates</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* ---- University band ---- */}
        <section className="hp4-band" aria-label="Universities our students have been admitted to">
          <p className="hp4-band-label">Our students have been admitted to</p>
          <div className="hp4-marquee">
            <div className="hp4-marquee-track">
              {[...BAND_LOGOS, ...BAND_LOGOS].map((u, i) => (
                <span key={`${u.slug}-${i}`} aria-hidden={i >= BAND_LOGOS.length}>
                  {u.slug ? (
                    <UniversityLogo slug={u.slug} label={u.label} className="hp4-band-logo" />
                  ) : (
                    <span className="hp4-band-word">{u.label}</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ---- 01 Plan by grade ---- */}
        <section id="plan" className="hp4-section">
          <div className="hp4-wrap hp4-approach">
            <div data-reveal>
              <Label num="01">Our approach</Label>
              <h2>One strategy, not a patchwork of tutors.</h2>
              <p className="hp4-body">
                Most families put together test prep from one place, essay help from another,
                and advice from whoever they know. Nobody owns the whole plan. At Himmah Prep,
                everything stays in-house: your counselor sets the strategy, and our own
                specialist tutors handle testing, essays, activities, and summers, so every
                decision supports the same goal.
              </p>
              <p className="hp4-body">
                Pick the student&apos;s grade to see what the plan looks like from there.
              </p>
            </div>
            <div data-reveal>
              <GradePlanner />
            </div>
          </div>
        </section>

        {/* ---- 02 Services ---- */}
        <section id="work" className="hp4-section hp4-sand">
          <div className="hp4-wrap">
            <div data-reveal>
              <Label num="02">What we do</Label>
              <h2>Four services. One team.</h2>
            </div>
            <div data-reveal>
              <ServiceTabs services={SERVICES} />
            </div>
          </div>
        </section>

        {/* ---- 03 Campuses ---- */}
        <section className="hp4-section">
          <div className="hp4-wrap" data-reveal>
            <Label num="03">Where our students go</Label>
            <h2>Every Ivy League school, every top-20 US university, Oxford, and Cambridge.</h2>
          </div>
          <div data-reveal>
            <CampusRow campuses={CAMPUSES} />
          </div>
        </section>

        {/* ---- US and UK ---- */}
        <section className="hp4-section hp4-sand">
          <div className="hp4-wrap">
            <div data-reveal>
              <Label num="04">Two systems</Label>
              <h2>The US and the UK ask for different things. We prepare for both.</h2>
              <p className="hp4-body">
                Most Gulf students apply to both, and the two systems reward different
                strengths. Your counselor plans one timeline so the October UCAS deadline, the
                November early rounds in the US, admissions tests, and interviews all fit
                together.
              </p>
            </div>
            <div className="hp4-systems">
              {[UK_US.us, UK_US.uk].map((sys, i) => (
                <div key={sys.title} className="hp4-system" data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                  <p className="hp4-system-tag">{sys.system}</p>
                  <h3>{sys.title}</h3>
                  <ul>
                    {sys.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- 05 Results ---- */}
        <section id="results" className="hp4-section hp4-maroon">
          <div className="hp4-wrap hp4-results">
            <div data-reveal>
              <Label num="05">Results</Label>
              <h2>What students and parents say.</h2>
              <p className="hp4-body">
                Six of the families we&apos;ve worked with, in their own words.
              </p>
              <p className="hp4-more">
                <Link href="/results" className="hp4-btn hp4-btn-light">
                  See more results
                </Link>
              </p>
            </div>
            <div data-reveal>
              <QuoteCarousel quotes={QUOTES} />
            </div>
          </div>
        </section>

        {/* ---- 05 How it works ---- */}
        <section id="how" className="hp4-section">
          <div className="hp4-wrap hp4-how">
            <div data-reveal>
              <Label num="06">How it works</Label>
              <h2>Three stages, one plan.</h2>
              <p className="hp4-body">
                It starts with a free consultation, and it doesn&apos;t end until the last
                decision comes in. Everything lives in{" "}
                <a href="https://portal.himmahprep.com">the Himmah portal</a>, where the student,
                the family, and the advisor see the same plan, drafts, and deadlines.
              </p>
            </div>
            <ol className="hp4-stages">
              {STAGES.map((s, i) => (
                <li key={s.title} className="hp4-stage" data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                  <span className="hp4-stage-num">{String(i + 1).padStart(2, "0")}</span>
                  <p className="hp4-stage-tag">{s.tag}</p>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---- 06 Guide ---- */}
        <section className="hp4-section hp4-sand">
          <div className="hp4-wrap hp4-guide">
            <div className="hp4-guide-cover" data-reveal aria-hidden="true">
              <GuideCover />
            </div>
            <div data-reveal>
              <Label num="07">The application guide</Label>
              <h2>The U.S. Application Guide.</h2>
              <p className="hp4-body">
                Fifty-eight pages on what our advisors wish every Gulf student knew before
                junior year: SAT/ACT strategy, school research, essay frameworks, the
                activities list, and four full essays from students admitted to Stanford,
                Harvard, Emory, and UIUC.
              </p>
              <div className="hp4-hero-ctas">
                <Link href="/shop/p/guide" className="hp4-btn hp4-btn-primary">
                  Get the guide · <s>$49</s> $19
                </Link>
                <Link href="/shop/p/guide" className="hp4-textlink">
                  Table of contents
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ---- 07 Where + FAQ ---- */}
        <section className="hp4-section">
          <div className="hp4-wrap hp4-two">
            <div data-reveal>
              <Label num="08">Where we work</Label>
              <h2>Across the Gulf, and online.</h2>
              <p className="hp4-body">
                Families in{" "}
                {COUNTRIES.map(([n, h], i) => (
                  <span key={h}>
                    <Link href={h}>{n}</Link>
                    {i < COUNTRIES.length - 2 ? ", " : i === COUNTRIES.length - 2 ? ", and " : ""}
                  </span>
                ))}
                . Test prep is live and one-on-one in{" "}
                {CITIES.map(([n, h], i) => (
                  <span key={h}>
                    <Link href={h}>{n}</Link>
                    {i < CITIES.length - 2 ? ", " : i === CITIES.length - 2 ? ", and " : ""}
                  </span>
                ))}
                , or self-paced through the{" "}
                <Link href="/sat-bootcamp">eight-week Digital SAT bootcamp</Link>.
              </p>
            </div>
            <div data-reveal>
              <Label num="09">Questions</Label>
              <div className="hp4-faq">
                {FAQS.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---- Consultation ---- */}
        <section id="consult" className="hp4-cta">
          <div className="hp4-wrap hp4-cta-grid">
            <div data-reveal>
              <Label num="10">Free consultation</Label>
              <h2>Tell us where the student is today.</h2>
              <p className="hp4-body">
                A thirty-minute call with a senior advisor. You&apos;ll get a candid read on the
                student&apos;s profile, a realistic school list, and a clear next step, whether
                or not you work with us.
              </p>
            </div>
            <div className="hp4-form" data-reveal>
              <LeadForm />
            </div>
          </div>
        </section>

        <p className="hp4-credits">{PHOTO_CREDITS}</p>
      </main>

      <Footer />
    </div>
  );
}
