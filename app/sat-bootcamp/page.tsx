import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const CHECKOUT_URL =
  "https://pay.himmahprep.com/checkout/buy/0be4eca8-bfb5-46ed-8d9b-9623ca856957";

export const metadata: Metadata = {
  title: "SAT Bootcamp — 8-Week Summer 2026 Cohort — Himmah Prep",
  description:
    "An 8-week SAT bootcamp for Gulf students. Live group sessions Fri & Sat at 6pm KSA, capped at 15. Diagnostic, mocks, test-day prep, and recordings. Lock-in by June 22, 2026.",
  openGraph: {
    title: "SAT Bootcamp — 8-Week Summer 2026 Cohort — Himmah Prep",
    description:
      "An 8-week SAT bootcamp for Gulf students. Diagnostic, full curriculum, mocks, and test-day prep. Cohort capped at 15.",
    url: "https://himmahprep.com/sat-bootcamp",
  },
};

export default function SatBootcampPage() {
  return (
    <>
      <Header />
      <main className="sat-bootcamp">

        <section className="page-hero">
          <div className="page-hero-inner">
            <p className="eyebrow">Summer 2026 cohort &middot; 15 seats</p>
            <h1 className="display">
              Ace the SAT <em>this summer.</em>
            </h1>
            <p className="lead">
              A focused 8-week cohort for serious students. Two live sessions a week, taught
              by Ivy League graduates, capped at 15. Every session is recorded.
              Lock-in closes <strong>June 22, 2026.</strong>
            </p>
            <ul className="trust-row">
              <li>15-student cohort cap</li>
              <li>Fri &amp; Sat &middot; 90 min &middot; 6pm KSA</li>
              <li>All sessions recorded</li>
            </ul>
            <div className="hero-ctas">
              <a href={CHECKOUT_URL} className="btn btn-primary lemonsqueezy-button">
                Reserve a seat
              </a>
            </div>
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
                Full-length diagnostic on day one. The class then focuses on the gaps it
                reveals.
              </p>
              <ul className="bullets">
                <li>Math: algebra core</li>
                <li>English: passage strategy</li>
                <li>Homework: diagnostic follow-up</li>
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
                <li>Homework: timed practice sets</li>
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
                <li>Homework: targeted drill sets</li>
              </ul>
            </article>
            <article className="card">
              <span className="card-num">04</span>
              <h3>Weeks 7&ndash;8 &middot; Test-day</h3>
              <p>
                Pacing strategy, mock debriefs, and the test-day routine students will run
                on the morning.
              </p>
              <ul className="bullets">
                <li>Pacing &amp; strategy</li>
                <li>Mock debriefs in session</li>
                <li>Homework: full-length mocks</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="prose-section">
          <div className="prose">
            <h2 className="display-2">
              One cohort. <em>Fifteen seats.</em>
            </h2>
            <p>
              We cap every bootcamp at <strong>15 students</strong>. Small enough that
              every question gets answered in the room and the session feels personal;
              big enough to feel like a class, not a tutor on a screen.
            </p>
            <p>
              Cohort begins <strong>Friday, June 26, 2026 at 6pm KSA</strong>. Sessions run
              live every <strong>Friday and Saturday at 6pm KSA</strong> from there, and the
              final week shifts to <strong>Thursday and Friday</strong> so the cohort goes
              into test day fresh. Every session is recorded and the recordings stay with the
              group.
            </p>
            <p>
              Lock-in closes on <strong>June 22, 2026</strong>. After that, we hold the
              waitlist for the autumn cohort &mdash; but the seats for this summer are gone.
            </p>
          </div>
        </section>

        <section className="services">
          <div className="section-head">
            <p className="eyebrow">Pricing</p>
            <h2 className="display-2">
              Summer cohort, <em>all-in.</em>
            </h2>
          </div>
          <div className="pricing-card">
            <p className="muted-sm">Full 8-week SAT bootcamp</p>
            <p className="pricing-amount serif">$800<span className="pricing-cur">USD</span></p>
            <ul className="pricing-list">
              <li>Diagnostic + full 8-week curriculum</li>
              <li>Two 90-minute live sessions a week, Fri &amp; Sat 6pm KSA</li>
              <li>Weekly homework, reviewed in session</li>
              <li>Recordings of every session</li>
            </ul>
            <p className="pricing-note muted-sm">
              Cohort cap: 15 students &middot; Lock-in by June 22, 2026
              <br />
              Seats are non-refundable, before or after the cohort begins.{" "}
              <Link href="/terms-and-conditions">See terms</Link>.
            </p>
            <a href={CHECKOUT_URL} className="btn btn-primary lemonsqueezy-button">
              Reserve a seat
            </a>
          </div>
        </section>

        <section className="cta-strip">
          <div className="cta-strip-inner">
            <p className="eyebrow">Seats close June 22</p>
            <h2 className="display-2">
              Pick the seat <em>before someone else does.</em>
            </h2>
            <p className="lead-2">
              Reserve your place in the summer cohort. We&apos;ll confirm the spot within one
              business day and send next steps.
            </p>
            <a href={CHECKOUT_URL} className="btn btn-primary lemonsqueezy-button">
              Reserve a seat
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <Script src="https://assets.lemonsqueezy.com/lemon.js" strategy="afterInteractive" />
    </>
  );
}
