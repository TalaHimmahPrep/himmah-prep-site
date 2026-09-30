import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Libre_Franklin } from "next/font/google";
import { LeadForm } from "@/components/LeadForm";
import {
  CITIES,
  COUNTRIES,
  FAQS,
  HERO,
  PHOTO_CREDITS,
  QUOTES,
  SERVICES,
  STAGES,
  STATS,
  UNIVERSITIES,
} from "@/lib/home-content";
import "./a.css";

export const metadata = { title: "Design A · Viewbook — Himmah Prep", robots: { index: false } };

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-a-display",
  display: "swap",
});
const text = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-a-text",
  display: "swap",
});

const ROMAN = ["I", "II", "III", "IV"];

export default function DesignA() {
  return (
    <div className={`va ${display.variable} ${text.variable}`}>
      <header className="va-nav">
        <Link href="/design" className="va-brand">
          Himmah <span>Prep</span>
        </Link>
        <nav>
          <Link href="/about">About</Link>
          <Link href="/results">Results</Link>
          <Link href="/standardized-test-tutors">Test prep</Link>
          <Link href="/blog">Journal</Link>
          <a href="https://portal.himmahprep.com">Portal</a>
        </nav>
        <a href="#consult" className="va-navcta">
          Consultation
        </a>
      </header>

      <section className="va-hero">
        <Image
          src="/campus/yale_portal.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="va-hero-img"
        />
        <div className="va-hero-copy">
          <p className="va-caps">{HERO.kicker}</p>
          <h1>{HERO.headline}</h1>
          <p className="va-hero-lead">
            Admissions strategy, test prep, essays, and leadership for students across the
            Gulf, led by advisors who went to the Ivy League themselves.
          </p>
          <a href="#consult" className="va-btn">
            Book a free consultation
          </a>
        </div>
        <div className="va-hero-foot">
          <span>Est. 2020</span>
          <span>Riyadh · Jeddah · Dubai · Doha · Online</span>
          <span>Scroll</span>
        </div>
      </section>

      <section className="va-chapter">
        <div className="va-chapter-head">
          <span className="va-roman">I</span>
          <p className="va-caps">The programme</p>
        </div>
        <div className="va-two">
          <p className="va-dropcap">{HERO.lead}</p>
          <dl className="va-stats">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <ol className="va-services">
          {SERVICES.map((s, i) => (
            <li key={s.title}>
              <span className="va-roman-sm">{ROMAN[i]}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <p className="va-points">{s.points.join("  ·  ")}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="va-index">
        <p className="va-caps">Where our students have been admitted</p>
        <ul>
          {UNIVERSITIES.map((u) => (
            <li key={u}>{u}</li>
          ))}
        </ul>
      </section>

      <section className="va-chapter va-dark">
        <div className="va-chapter-head">
          <span className="va-roman">II</span>
          <p className="va-caps">In their words</p>
        </div>
        <blockquote className="va-pull">
          <p>“{QUOTES[1].quote}”</p>
          <cite>
            {QUOTES[1].name} · {QUOTES[1].school}
          </cite>
        </blockquote>
        <div className="va-quotes">
          {QUOTES.filter((_, i) => i !== 1).map((q) => (
            <figure key={q.name}>
              <blockquote>“{q.quote}”</blockquote>
              <figcaption>
                {q.name} · {q.school}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="va-photo-band">
        <Image src="/campus/stanford_arches.jpg" alt="" fill sizes="100vw" />
        <p>Stanford University, Main Quad</p>
      </section>

      <section className="va-chapter">
        <div className="va-chapter-head">
          <span className="va-roman">III</span>
          <p className="va-caps">How it works</p>
        </div>
        <div className="va-stages">
          {STAGES.map((s, i) => (
            <div key={s.title}>
              <span className="va-roman-sm">{ROMAN[i]}</span>
              <p className="va-caps va-caps-dim">{s.tag}</p>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
        <p className="va-portal">
          Every student works inside <a href="https://portal.himmahprep.com">portal.himmahprep.com</a>,
          a private workspace with a board for every school, essay drafts with advisor
          comments, and every deadline in one place.
        </p>
      </section>

      <section className="va-chapter va-sand">
        <div className="va-chapter-head">
          <span className="va-roman">IV</span>
          <p className="va-caps">Questions &amp; places</p>
        </div>
        <div className="va-two va-two-wide">
          <div className="va-faq">
            {FAQS.map((f) => (
              <div key={f.q}>
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
          <div className="va-places">
            <p className="va-caps">Countries</p>
            <p>
              {COUNTRIES.map(([n, h], i) => (
                <span key={h}>
                  <Link href={h}>{n}</Link>
                  {i < COUNTRIES.length - 1 && " · "}
                </span>
              ))}
            </p>
            <p className="va-caps">SAT prep by city</p>
            <p>
              {CITIES.map(([n, h], i) => (
                <span key={h}>
                  <Link href={h}>{n}</Link>
                  {i < CITIES.length - 1 && " · "}
                </span>
              ))}
            </p>
            <p className="va-caps">The guide</p>
            <p>
              <Link href="/shop/p/guide">The U.S. Application Guide</Link>, 58 pages, $19.
            </p>
          </div>
        </div>
      </section>

      <section id="consult" className="va-consult">
        <div>
          <p className="va-caps">Free consultation</p>
          <h2>Tell us where the student is today.</h2>
          <p>
            A 30-minute call with a senior advisor. You&apos;ll get a candid read on the
            student&apos;s profile, a realistic school list, and a clear next step, whether or
            not you work with us.
          </p>
        </div>
        <div className="va-form">
          <LeadForm />
        </div>
      </section>

      <footer className="va-footer">
        <span>© {new Date().getFullYear()} Himmah Prep</span>
        <span className="va-credit">{PHOTO_CREDITS}</span>
        <Link href="/terms-and-conditions">Terms</Link>
      </footer>
    </div>
  );
}
