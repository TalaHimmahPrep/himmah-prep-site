import Image from "next/image";
import Link from "next/link";
import { Source_Serif_4 } from "next/font/google";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { CITIES, COUNTRIES, FAQS, QUOTES } from "@/lib/home-content";
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

const QUOTE_PICKS = [QUOTES[1], QUOTES[4], QUOTES[0]];

export default function HomePage() {
  return (
    <div className={`hm ${serif.variable}`}>
      <JsonLd data={WEBSITE_LD} />
      <JsonLd data={HOME_FAQ_LD} />

      <header className="hm-header">
        <Link href="/" aria-label="Himmah Prep home" className="hm-logo">
          <Image src="/logo-wordmark.png" alt="Himmah Prep" width={1393} height={203} priority />
        </Link>
        <nav aria-label="Primary">
          <a href="#work">Programme</a>
          <Link href="/results">Results</Link>
          <a href="https://portal.himmahprep.com">Portal</a>
          <a href="#consult">Consultation</a>
        </nav>
      </header>

      <main>
        <section className="hm-open">
          <p className="hm-himmah">
            <span lang="ar" dir="rtl">
              همّة
            </span>
            <span>
              <i>himmah</i> — ambition, resolve
            </span>
          </p>
          <h1>The application is the last step.</h1>
          <p className="hm-open-text">
            Himmah Prep works with a small number of families in Saudi Arabia and the Gulf on
            everything that comes before it: the school list, the testing plan, the summers,
            the activities, and the essays. One senior advisor is responsible for each
            student from the first meeting to the final decision.
          </p>
          <p className="hm-open-cta">
            <a href="#consult">Book a free consultation</a>
          </p>
        </section>

        <figure className="hm-photo">
          <div>
            <Image
              src="/campus/yale_portal.jpg"
              alt="The entrance of Sterling Memorial Library at Yale University"
              fill
              sizes="(max-width: 800px) 100vw, 60vw"
              priority
            />
          </div>
          <figcaption>Sterling Memorial Library, Yale.</figcaption>
        </figure>

        <section id="work" className="hm-row">
          <h2>The work</h2>
          <div className="hm-prose">
            <p>
              <b>Strategy.</b> A school list built around the student rather than a
              ranking, a roadmap that says when to test and when to launch the projects that
              matter, and a single story that holds the application together. The advisors
              went to the Ivy League themselves and know what these schools look for.
            </p>
            <p>
              <b>Testing.</b> One-on-one SAT, ACT, IELTS, and TOEFL preparation with a
              diagnostic first, then a plan aimed at the 90th percentile and above on the
              first or second sitting. Fifteen full-length practice tests and more than
              nine thousand questions.
            </p>
            <p>
              <b>Essays.</b> Brainstorming and feedback on the personal statement and every
              supplement, draft after draft. Students write their own essays; we make sure
              each one sounds like them and says something.
            </p>
            <p>
              <b>Leadership and summers.</b> Workshops in communication and public
              speaking, help starting a project worth writing about, and guidance on the
              summer programmes, research placements, and internships that are genuinely
              selective.
            </p>
            <p className="hm-portal">
              All of it lives in one place: <a href="https://portal.himmahprep.com">the
              Himmah portal</a>, where the student, the family, and the advisor see the same
              plan, the same drafts, and the same deadlines.
            </p>
          </div>
        </section>

        <section className="hm-statement">
          <p>
            Since 2020, our students have been admitted to Harvard, Stanford, Yale,
            Princeton, MIT, Cornell, Duke, UC Berkeley, UCLA, Oxford, and Cambridge.
          </p>
        </section>

        <section id="results" className="hm-row">
          <h2>In their words</h2>
          <div className="hm-quotes">
            {QUOTE_PICKS.map((q) => (
              <figure key={q.name}>
                <blockquote>{q.quote}</blockquote>
                <figcaption>
                  {q.name}, {q.school}
                </figcaption>
              </figure>
            ))}
            <p className="hm-more">
              <Link href="/results">More results</Link>
            </p>
          </div>
        </section>

        <section className="hm-row">
          <h2>How it works</h2>
          <ol className="hm-steps">
            <li>
              <b>A free consultation.</b>{" "}Thirty minutes with a senior advisor. You leave
              with a candid read on the student&apos;s profile, a realistic first school
              list, and a clear next step, whether or not you work with us.
            </li>
            <li>
              <b>A plan.</b>{" "}Twelve to twenty-four months, sequenced so testing, summers,
              leadership work, and essays don&apos;t collide. Tenth grade is the ideal
              start; ninth and eleventh both work, with different timelines.
            </li>
            <li>
              <b>The applications.</b>{" "}Every essay, form, and supplement reviewed before it
              is submitted, through to the final decision.
            </li>
          </ol>
        </section>

        <section className="hm-row">
          <h2>Where</h2>
          <div className="hm-prose">
            <p>
              Families in{" "}
              {COUNTRIES.map(([n, h], i) => (
                <span key={h}>
                  <Link href={h}>{n}</Link>
                  {i < COUNTRIES.length - 2 ? ", " : i === COUNTRIES.length - 2 ? ", and " : ""}
                </span>
              ))}
              . Most of our students attend IB or American-curriculum schools and apply to
              selective universities in the United States and the United Kingdom.
            </p>
            <p>
              Test preparation is live and one-on-one in{" "}
              {CITIES.map(([n, h], i) => (
                <span key={h}>
                  <Link href={h}>{n}</Link>
                  {i < CITIES.length - 2 ? ", " : i === CITIES.length - 2 ? ", and " : ""}
                </span>
              ))}
              , and online everywhere else. There is also a self-paced{" "}
              <Link href="/sat-bootcamp">eight-week Digital SAT bootcamp</Link> and a
              58-page <Link href="/shop/p/guide">U.S. Application Guide</Link>.
            </p>
          </div>
        </section>

        <section className="hm-row">
          <h2>Questions</h2>
          <dl className="hm-faq">
            {FAQS.map((f) => (
              <div key={f.q}>
                <dt>{f.q}</dt>
                <dd>{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="consult" className="hm-row hm-consult">
          <h2>Consultation</h2>
          <div>
            <p className="hm-consult-text">
              Tell us where the student is today, and we&apos;ll be in touch to set up a
              thirty-minute call.
            </p>
            <LeadForm />
          </div>
        </section>
      </main>

      <footer className="hm-footer">
        <p>
          Himmah Prep Company · Jeddah, Saudi Arabia ·{" "}
          <a href="mailto:connect@himmahprep.com">connect@himmahprep.com</a> ·{" "}
          <Link href="/terms-and-conditions">Terms</Link> · © {new Date().getFullYear()}
        </p>
        <p className="hm-credit">
          Photograph by Christian David, Wikimedia Commons, CC BY-SA 4.0.
        </p>
      </footer>
    </div>
  );
}
