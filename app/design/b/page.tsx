import Image from "next/image";
import Link from "next/link";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { LeadForm } from "@/components/LeadForm";
import {
  CITIES,
  COUNTRIES,
  FAQS,
  PHOTO_CREDITS,
  QUOTES,
  SERVICES,
  STAGES,
  STATS,
  UNIVERSITIES,
} from "@/lib/home-content";
import "./b.css";

export const metadata = { title: "Design B · Grid — Himmah Prep", robots: { index: false } };

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-b-sans",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-b-mono",
  display: "swap",
});

const pad = (n: number) => String(n).padStart(2, "0");

export default function DesignB() {
  return (
    <div className={`vb ${archivo.variable} ${mono.variable}`}>
      <header className="vb-nav">
        <Link href="/design" className="vb-brand">
          HIMMAH PREP
        </Link>
        <span className="vb-mono vb-nav-note">College counseling · Gulf</span>
        <nav>
          <Link href="/about">About</Link>
          <Link href="/results">Results</Link>
          <Link href="/standardized-test-tutors">Test prep</Link>
          <Link href="/blog">Blog</Link>
          <a href="https://portal.himmahprep.com">Portal</a>
        </nav>
        <a href="#consult" className="vb-navcta">
          Free consultation ↗
        </a>
      </header>

      <section className="vb-hero">
        <h1>
          Ivy League college counseling for <span>Gulf students.</span>
        </h1>
        <div className="vb-hero-grid">
          <div className="vb-cell">
            <p className="vb-mono">01 — Who</p>
            <p>
              Students in Saudi Arabia, the UAE, Qatar, Kuwait, Bahrain, and Oman applying to
              selective universities in the US and UK.
            </p>
          </div>
          <div className="vb-cell">
            <p className="vb-mono">02 — What</p>
            <p>
              Admissions strategy, SAT and ACT prep, essays, and leadership. One senior advisor
              responsible for each student, and a private portal for the whole plan.
            </p>
          </div>
          <div className="vb-cell vb-cell-cta">
            <p className="vb-mono">03 — Start</p>
            <a href="#consult" className="vb-btn">
              Book a free consultation
            </a>
            <Link href="#services" className="vb-link">
              See what we do ↓
            </Link>
          </div>
        </div>
        <dl className="vb-stats">
          {STATS.map((s, i) => (
            <div key={s.label}>
              <dd className="vb-mono">{pad(i + 1)}</dd>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="vb-photo">
        <Image src="/campus/stanford_arches.jpg" alt="" fill sizes="100vw" />
        <p className="vb-mono">Stanford University · Main Quad</p>
      </section>

      <section className="vb-section">
        <div className="vb-head">
          <span className="vb-mono">Admissions</span>
          <h2>Where our students have been admitted</h2>
        </div>
        <ul className="vb-table">
          {UNIVERSITIES.map((u, i) => (
            <li key={u}>
              <span className="vb-mono">{pad(i + 1)}</span>
              <span>{u}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="services" className="vb-section">
        <div className="vb-head">
          <span className="vb-mono">Services</span>
          <h2>Four services, one advisor</h2>
        </div>
        <div className="vb-grid4">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="vb-cell">
              <p className="vb-mono">{pad(i + 1)}</p>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul>
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="vb-section vb-maroon">
        <div className="vb-head">
          <span className="vb-mono">Results</span>
          <h2>What students and parents say</h2>
        </div>
        <div className="vb-quotes">
          {QUOTES.map((q, i) => (
            <figure key={q.name} className="vb-cell">
              <span className="vb-mono">
                {pad(i + 1)} · {q.kind}
              </span>
              <blockquote>{q.quote}</blockquote>
              <figcaption>
                <strong>{q.name}</strong> {q.school}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="vb-section">
        <div className="vb-head">
          <span className="vb-mono">Process</span>
          <h2>Three stages, one plan</h2>
        </div>
        <ol className="vb-stages">
          {STAGES.map((s, i) => (
            <li key={s.title} className="vb-cell">
              <span className="vb-num">{pad(i + 1)}</span>
              <p className="vb-mono">{s.tag}</p>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
        <p className="vb-note">
          Every student works inside{" "}
          <a href="https://portal.himmahprep.com">portal.himmahprep.com</a>: a board for every
          school, essay drafts with advisor comments, and every deadline in one place.
        </p>
      </section>

      <section className="vb-section vb-split">
        <div>
          <div className="vb-head">
            <span className="vb-mono">Questions</span>
            <h2>Common questions</h2>
          </div>
          <div className="vb-faq">
            {FAQS.map((f) => (
              <details key={f.q}>
                <summary>
                  {f.q} <span className="vb-mono">+</span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
        <div>
          <div className="vb-head">
            <span className="vb-mono">Places</span>
            <h2>Across the Gulf</h2>
          </div>
          <div className="vb-places">
            <div>
              <p className="vb-mono">Countries</p>
              {COUNTRIES.map(([n, h]) => (
                <Link key={h} href={h}>
                  {n}
                </Link>
              ))}
            </div>
            <div>
              <p className="vb-mono">SAT prep by city</p>
              {CITIES.map(([n, h]) => (
                <Link key={h} href={h}>
                  {n}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/shop/p/guide" className="vb-guide">
            <span className="vb-mono">Guide</span>
            <span>The U.S. Application Guide · 58 pages · $19 ↗</span>
          </Link>
        </div>
      </section>

      <section id="consult" className="vb-section vb-consult">
        <div>
          <span className="vb-mono">Free consultation</span>
          <h2>Tell us where the student is today.</h2>
          <p>
            A 30-minute call with a senior advisor. You&apos;ll get a candid read on the
            student&apos;s profile, a realistic school list, and a clear next step, whether or
            not you work with us.
          </p>
        </div>
        <div className="vb-form">
          <LeadForm />
        </div>
      </section>

      <footer className="vb-footer vb-mono">
        <span>© {new Date().getFullYear()} Himmah Prep</span>
        <span>{PHOTO_CREDITS}</span>
        <Link href="/terms-and-conditions">Terms</Link>
      </footer>
    </div>
  );
}
