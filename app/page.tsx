import Image from "next/image";
import Link from "next/link";
import { Source_Serif_4 } from "next/font/google";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import { GuideCover } from "@/components/GuideCover";
import { JsonLd } from "@/components/JsonLd";
import { ServiceTabs } from "@/components/home/ServiceTabs";
import { StickyNav } from "@/components/home/StickyNav";
import { Reveal } from "@/components/home/Reveal";
import {
  CITIES,
  COUNTRIES,
  FAQS,
  QUOTES,
  SERVICES,
  STAGES,
  STATS,
  UNIVERSITIES,
} from "@/lib/home-content";
import "./home.css";

const serif = Source_Serif_4({
  subsets: ["latin"],
  axes: ["opsz"],
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

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

const HOME_FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const CAMPUSES = [
  { name: "Harvard", place: "Cambridge, Massachusetts", src: "/campus/widener.jpg" },
  { name: "Princeton", place: "Princeton, New Jersey", src: "/campus/nassau.jpg" },
  { name: "Stanford", place: "Stanford, California", src: "/campus/stanford_arches.jpg" },
  { name: "Yale", place: "New Haven, Connecticut", src: "/campus/yale_portal.jpg" },
];

function Label({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <p className="hp3-label">
      <span>{num}</span>
      {children}
    </p>
  );
}

export default function HomePage() {
  const students = QUOTES.filter((q) => q.kind === "student");
  const parents = QUOTES.filter((q) => q.kind === "parent");

  return (
    <div className={`hp3 ${serif.variable}`}>
      <JsonLd data={WEBSITE_LD} />
      <JsonLd data={HOME_FAQ_LD} />
      <Reveal />
      <StickyNav />

      <main>
        {/* ---- Hero ---- */}
        <section className="hp3-hero">
          <div className="hp3-wrap hp3-hero-grid">
            <div className="hp3-hero-copy" data-reveal>
              <p className="hp3-kicker">College counseling · Saudi Arabia &amp; the Gulf</p>
              <h1>
                Ivy League college counseling for Gulf students.
              </h1>
              <p className="hp3-hero-lead">
                Admissions strategy, SAT and ACT prep, essays, and leadership for students in
                Saudi Arabia, the UAE, Qatar, Kuwait, Bahrain, and Oman, from advisors who went
                to the Ivy League themselves. One senior advisor is responsible for each
                student, from the first meeting to the final decision.
              </p>
              <div className="hp3-hero-ctas">
                <a href="#consult" className="hp3-btn hp3-btn-gold">
                  Book a free consultation
                  <span aria-hidden="true">→</span>
                </a>
                <a href="#work" className="hp3-btn hp3-btn-ghost">
                  What we do
                </a>
              </div>
            </div>
            <div className="hp3-hero-media" data-reveal>
              <div className="hp3-hero-photo">
                <Image
                  src="/campus/yale_portal.jpg"
                  alt="Sterling Memorial Library, Yale University"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 520px"
                />
              </div>
              <p className="hp3-hero-caption">Sterling Memorial Library, Yale</p>
            </div>
          </div>

          <div className="hp3-wrap">
            <dl className="hp3-stats" data-reveal>
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt>{s.value}</dt>
                  <dd>{s.label}</dd>
                </div>
              ))}
              <div className="hp3-stats-note">
                <dt>2020</dt>
                <dd>Founded by Harvard and UPenn graduates</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* ---- University band ---- */}
        <section className="hp3-band" aria-label="Universities our students have been admitted to">
          <p className="hp3-band-label">Our students have been admitted to</p>
          <div className="hp3-marquee">
            <div className="hp3-marquee-track">
              {[...UNIVERSITIES, ...UNIVERSITIES].map((u, i) => (
                <span key={`${u}-${i}`} aria-hidden={i >= UNIVERSITIES.length}>
                  {u}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ---- 01 Approach ---- */}
        <section className="hp3-section">
          <div className="hp3-wrap hp3-approach">
            <div data-reveal>
              <Label num="01">Our approach</Label>
              <h2>One strategy, not a patchwork of tutors.</h2>
              <p className="hp3-body">
                Most families put together test prep from one place, essay help from another,
                and advice from whoever they know. Nobody owns the whole plan. At Himmah Prep,
                one advisor is responsible for the student&apos;s school list, testing,
                activities, summers, and applications, so every decision supports the same
                goal.
              </p>
              <p className="hp3-body">
                All of it lives in <a href="https://portal.himmahprep.com">the Himmah portal</a>,
                where the student, the family, and the advisor see the same plan, the same
                drafts, and the same deadlines.
              </p>
            </div>
            <div className="hp3-timeline" data-reveal>
              <p className="hp3-timeline-h">We plan in years, not months.</p>
              <ol>
                {["Grade 9", "Grade 10", "Grade 11", "Grade 12"].map((g, i) => (
                  <li key={g} className={i === 1 ? "is-key" : undefined}>
                    <span className="hp3-node" />
                    <span>{g}</span>
                    {i === 1 && <em>Ideal start</em>}
                  </li>
                ))}
              </ol>
              <p>
                Tenth grade gives us enough academic history for a real diagnostic and two
                full years to raise scores, build activities, and plan summers. Ninth and
                eleventh both work, with different timelines.
              </p>
            </div>
          </div>
        </section>

        {/* ---- 02 Services ---- */}
        <section id="work" className="hp3-section hp3-sand">
          <div className="hp3-wrap">
            <div data-reveal>
              <Label num="02">What we do</Label>
              <h2>Four services. One advisor.</h2>
            </div>
            <div data-reveal>
              <ServiceTabs services={SERVICES} />
            </div>
          </div>
        </section>

        {/* ---- Campuses ---- */}
        <section className="hp3-section hp3-campuses">
          <div className="hp3-wrap" data-reveal>
            <Label num="03">Where our students go</Label>
            <h2>Every Ivy League school, and every top-20 US university.</h2>
          </div>
          <div className="hp3-campus-row" data-reveal>
            {CAMPUSES.map((c) => (
              <figure key={c.name} className="hp3-campus">
                <Image src={c.src} alt={`${c.name} campus`} fill sizes="(max-width: 900px) 80vw, 30vw" />
                <figcaption>
                  <strong>{c.name}</strong>
                  <span>{c.place}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ---- 04 Results ---- */}
        <section id="results" className="hp3-section hp3-dark">
          <div className="hp3-wrap">
            <div data-reveal>
              <Label num="04">Results</Label>
              <h2>What students and parents say.</h2>
            </div>
            <div className="hp3-quotes">
              {[
                { label: "From students", items: students },
                { label: "From parents", items: parents },
              ].map((col) => (
                <div key={col.label} className="hp3-quote-col" data-reveal>
                  <p className="hp3-col-label">{col.label}</p>
                  {col.items.map((q) => (
                    <figure key={q.name} className="hp3-quote">
                      <blockquote>{q.quote}</blockquote>
                      <figcaption>
                        <strong>{q.name}</strong>
                        <span>{q.school}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
            <p className="hp3-more" data-reveal>
              <Link href="/results" className="hp3-btn hp3-btn-ghost hp3-btn-light">
                See more results
              </Link>
            </p>
          </div>
        </section>

        {/* ---- 05 How it works ---- */}
        <section id="how" className="hp3-section">
          <div className="hp3-wrap hp3-how">
            <div data-reveal>
              <Label num="05">How it works</Label>
              <h2>Three stages, one plan.</h2>
              <p className="hp3-body">
                It starts with a free consultation, and it doesn&apos;t end until the last
                decision comes in.
              </p>
            </div>
            <ol className="hp3-stages">
              {STAGES.map((s, i) => (
                <li key={s.title} className="hp3-stage" data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                  <span className="hp3-stage-num">{String(i + 1).padStart(2, "0")}</span>
                  <p className="hp3-stage-tag">{s.tag}</p>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---- 06 Guide ---- */}
        <section className="hp3-section hp3-sand">
          <div className="hp3-wrap hp3-guide">
            <div className="hp3-guide-cover" data-reveal aria-hidden="true">
              <GuideCover />
            </div>
            <div data-reveal>
              <Label num="06">The application guide</Label>
              <h2>The U.S. Application Guide.</h2>
              <p className="hp3-body">
                Fifty-eight pages on what our advisors wish every Gulf student knew before
                junior year: SAT/ACT strategy, school research, essay frameworks, the
                activities list, and four full essays from students admitted to Stanford,
                Harvard, Emory, and UIUC.
              </p>
              <div className="hp3-hero-ctas">
                <Link href="/shop/p/guide" className="hp3-btn hp3-btn-dark">
                  Get the guide · <s>$49</s> $19
                </Link>
                <Link href="/shop/p/guide" className="hp3-textlink">
                  Table of contents
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ---- 07 Where + FAQ ---- */}
        <section className="hp3-section">
          <div className="hp3-wrap hp3-two">
            <div data-reveal>
              <Label num="07">Where we work</Label>
              <h2>Across the Gulf, and online.</h2>
              <p className="hp3-body">
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
              <Label num="08">Questions</Label>
              <div className="hp3-faq">
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
        <section id="consult" className="hp3-cta">
          <div className="hp3-wrap hp3-cta-grid">
            <div data-reveal>
              <Label num="09">Free consultation</Label>
              <h2>Tell us where the student is today.</h2>
              <p className="hp3-body">
                A thirty-minute call with a senior advisor. You&apos;ll get a candid read on the
                student&apos;s profile, a realistic school list, and a clear next step, whether
                or not you work with us.
              </p>
            </div>
            <div className="hp3-form" data-reveal>
              <LeadForm />
            </div>
          </div>
        </section>

        <p className="hp3-credits">
          Campus photographs via Wikimedia Commons: Yale by Christian David (CC BY-SA 4.0),
          Harvard by Kenneth C. Zirkel (CC BY 4.0), Princeton by Smallbones (CC0), Stanford
          by Jawed (CC BY-SA 4.0).
        </p>
      </main>

      <Footer />
    </div>
  );
}
