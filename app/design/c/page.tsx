import Image from "next/image";
import Link from "next/link";
import { EB_Garamond, Source_Sans_3 } from "next/font/google";
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
import "./c.css";

export const metadata = { title: "Design C · Collegiate — Himmah Prep", robots: { index: false } };

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-c-serif",
  display: "swap",
});
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-c-sans",
  display: "swap",
});

export default function DesignC() {
  return (
    <div className={`vc ${garamond.variable} ${sourceSans.variable}`}>
      <div className="vc-topbar">
        <span>Riyadh · Jeddah · Dubai · Doha · Online</span>
        <span>
          <a href="mailto:connect@himmahprep.com">connect@himmahprep.com</a>
          <a href="https://portal.himmahprep.com">Student portal</a>
        </span>
      </div>

      <header className="vc-masthead">
        <Link href="/design" className="vc-brand">
          <Image src="/logo-wordmark.png" alt="Himmah Prep" width={1393} height={203} priority />
        </Link>
        <p className="vc-tagline">Ivy League college counseling and SAT prep · Founded 2020</p>
        <nav className="vc-nav">
          <Link href="/about">About</Link>
          <Link href="#services">Programme</Link>
          <Link href="/results">Results</Link>
          <Link href="/standardized-test-tutors">Test prep</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/shop">Guide</Link>
          <a href="#consult" className="vc-nav-cta">
            Free consultation
          </a>
        </nav>
      </header>

      <main className="vc-main">
        <section className="vc-hero">
          <p className="vc-sc">{HERO.kicker}</p>
          <h1>{HERO.headline}</h1>
          <p className="vc-hero-lead">{HERO.lead}</p>
          <p className="vc-hero-actions">
            <a href="#consult" className="vc-btn">
              Book a free consultation
            </a>
            <a href="#services" className="vc-textlink">
              Read about the programme
            </a>
          </p>
        </section>

        <figure className="vc-figure">
          <div className="vc-figure-img">
            <Image src="/campus/yale_portal.jpg" alt="" fill sizes="100vw" priority />
          </div>
          <figcaption>Sterling Memorial Library, Yale University</figcaption>
        </figure>

        <div className="vc-columns">
          <aside className="vc-aside">
            <div className="vc-box">
              <p className="vc-sc">At a glance</p>
              <dl>
                {STATS.map((s) => (
                  <div key={s.label}>
                    <dt>{s.value}</dt>
                    <dd>{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="vc-box vc-box-plain">
              <p className="vc-sc">Admissions include</p>
              <p className="vc-unis">{UNIVERSITIES.join(" · ")}</p>
            </div>
            <div className="vc-box vc-box-plain">
              <p className="vc-sc">Where we work</p>
              <p className="vc-links">
                {COUNTRIES.map(([n, h]) => (
                  <Link key={h} href={h}>
                    {n}
                  </Link>
                ))}
              </p>
              <p className="vc-sc">SAT prep by city</p>
              <p className="vc-links">
                {CITIES.map(([n, h]) => (
                  <Link key={h} href={h}>
                    {n}
                  </Link>
                ))}
              </p>
            </div>
            <div className="vc-box vc-box-plain">
              <p className="vc-sc">The guide</p>
              <p>
                <Link href="/shop/p/guide">The U.S. Application Guide</Link>: 58 pages on
                SAT/ACT strategy, school research, essays, and the activities list. $19.
              </p>
            </div>
          </aside>

          <article className="vc-article">
            <section id="services">
              <h2>The programme</h2>
              <p className="vc-intro">
                Every Himmah Prep student gets a complete admissions strategy rather than a
                patchwork of tutors. One advisor is responsible for the school list, testing,
                activities, summers, and applications, so every decision supports the same
                goal.
              </p>
              <dl className="vc-services">
                {SERVICES.map((s) => (
                  <div key={s.title}>
                    <dt>{s.title}</dt>
                    <dd>
                      <p>{s.body}</p>
                      <p className="vc-points">{s.points.join(" · ")}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section>
              <h2>How it works</h2>
              <ol className="vc-stages">
                {STAGES.map((s) => (
                  <li key={s.title}>
                    <p className="vc-sc">{s.tag}</p>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </li>
                ))}
              </ol>
              <p>
                Every student works inside{" "}
                <a href="https://portal.himmahprep.com">portal.himmahprep.com</a>, a private
                workspace with a board for every school, essay drafts with advisor comments, and
                every deadline in one place.
              </p>
            </section>

            <section>
              <h2>Results</h2>
              <blockquote className="vc-pull">
                <p>“{QUOTES[3].quote}”</p>
                <cite>
                  {QUOTES[3].name}, {QUOTES[3].school}
                </cite>
              </blockquote>
              <div className="vc-quotes">
                {QUOTES.filter((_, i) => i !== 3).map((q) => (
                  <figure key={q.name}>
                    <blockquote>“{q.quote}”</blockquote>
                    <figcaption>
                      {q.name}, {q.school}
                    </figcaption>
                  </figure>
                ))}
              </div>
              <p>
                <Link href="/results">More results and admitted schools →</Link>
              </p>
            </section>

            <section>
              <h2>Questions families ask</h2>
              <div className="vc-faq">
                {FAQS.map((f) => (
                  <div key={f.q}>
                    <h3>{f.q}</h3>
                    <p>{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </div>

        <section id="consult" className="vc-consult">
          <div className="vc-consult-inner">
            <div>
              <p className="vc-sc">Free consultation</p>
              <h2>Tell us where the student is today.</h2>
              <p>
                A 30-minute call with a senior advisor. You&apos;ll get a candid read on the
                student&apos;s profile, a realistic school list, and a clear next step, whether
                or not you work with us.
              </p>
            </div>
            <div className="vc-form">
              <LeadForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="vc-footer">
        <p>© {new Date().getFullYear()} Himmah Prep Company · <Link href="/terms-and-conditions">Terms and conditions</Link></p>
        <p className="vc-credit">{PHOTO_CREDITS}</p>
      </footer>
    </div>
  );
}
