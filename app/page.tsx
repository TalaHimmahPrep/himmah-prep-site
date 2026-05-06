import Link from "next/link";
import { TestimonialCarousel, type Testimonial } from "@/components/Carousel";
import { LeadForm } from "@/components/LeadForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GuideCover } from "@/components/GuideCover";
import { UniversityLogo } from "@/components/UniversityLogo";

const testimonials: Testimonial[] = [
  {
    university: "berkeley",
    universityLabel: "UC Berkeley",
    quote:
      "“Himmah didn't just get me into Berkeley — they reframed how I thought about myself as a student. The leadership coaching changed me before college did.”",
    attribution: "Mariam A.",
    classYear: "'28",
  },
  {
    university: "cornell",
    universityLabel: "Cornell",
    feature: true,
    quote:
      "“My son went from a 1280 SAT to a 1530 in four months, then wrote the best essay of his life. He's at Cornell. We're still in disbelief.”",
    attribution: "Parent of Yousef H.",
    classYear: "'28",
  },
  {
    university: "stanford",
    universityLabel: "Stanford",
    quote:
      "“Every other consultant in Riyadh sells templates. Himmah actually got to know me, then built a strategy nobody else would have thought of.”",
    attribution: "Lina R.",
    classYear: "'28",
  },
  {
    university: "duke",
    universityLabel: "Duke",
    quote:
      "“They were honest with me about what I wasn't ready for, and then made sure I got there. By senior year, Duke felt like a logical step — not a leap.”",
    attribution: "Faisal M.",
    classYear: "'27",
  },
  {
    university: "harvard",
    universityLabel: "Harvard",
    quote: (
      <>
        &ldquo;My daughter&apos;s Common App essay was rewritten seven times. Each draft made it
        more <em>her</em>. The day Harvard&apos;s letter came, we cried — then we read the essay
        again.&rdquo;
      </>
    ),
    attribution: "Parent of Noor A.",
    classYear: "'27",
  },
  {
    university: "ucla",
    universityLabel: "UCLA",
    quote:
      "“I came in expecting a tutor. I left with a strategy, a portfolio, two summer programs, and friends from the leadership cohort I still talk to weekly.”",
    attribution: "Omar S.",
    classYear: "'28",
  },
  {
    university: "yale",
    universityLabel: "Yale",
    quote:
      "“Other consultants told me my profile was 'fine.' Himmah told me which two extracurriculars to drop and which one to double down on. That's the call that changed everything.”",
    attribution: "Hala K.",
    classYear: "'27",
  },
  {
    university: "princeton",
    universityLabel: "Princeton",
    quote:
      "“From Riyadh to Princeton in 18 months — and not by accident. Every deadline, every essay, every interview was rehearsed. We did the work. They built the runway.”",
    attribution: "Parent of Tariq B.",
    classYear: "'28",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <div className="hero-inner">
            <p className="eyebrow">College Admissions, Reimagined</p>
            <h1 className="display">
              Guaranteed to help
              <br />
              students <em>stand&nbsp;out.</em>
            </h1>
            <p className="lead">
              We don&apos;t just prepare students for college admission — we build them for
              leadership, for impact, and for a life that matters. Ivy League–credentialed
              advisors, a 100% acceptance track record, and a portal that turns the chaos of
              applications into one clear plan.
            </p>
            <div className="hero-ctas">
              <a href="#consult" className="btn btn-primary">
                Apply for a free consultation
              </a>
              <a href="#approach" className="btn btn-ghost">
                See how it works <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <div className="hero-trust">
              <div className="trust-stat">
                <div className="trust-num">
                  100<span>%</span>
                </div>
                <div className="trust-label">
                  College acceptance
                  <br />
                  track record
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
                  credentialed advisors
                </div>
              </div>
              <div className="trust-divider" aria-hidden="true" />
              <div className="trust-stat">
                <div className="trust-num">
                  90<span>th+</span>
                </div>
                <div className="trust-label">
                  Median SAT/ACT
                  <br />
                  percentile attained
                </div>
              </div>
            </div>
          </div>

          <div className="hero-card" aria-hidden="true">
            <div className="hero-card-head">
              <span className="dot dot-red" />
              <span className="dot dot-amber" />
              <span className="dot dot-green" />
              <span className="hero-card-label">portal.himmahprep.com</span>
            </div>
            <div className="hero-card-body">
              <p className="muted-sm">Your roadmap</p>
              <h3 className="serif">
                Welcome <em>back</em>, Layla
              </h3>
              <ul className="kanban">
                <li>
                  <span className="chip chip-amber">Essay</span> Common App — Why Stanford
                </li>
                <li>
                  <span className="chip chip-red">Test Prep</span> SAT mock, Saturday 9am
                </li>
                <li>
                  <span className="chip chip-green">Leadership</span> Public speaking workshop
                </li>
                <li>
                  <span className="chip chip-line">Summer</span> RSI application — review draft
                </li>
              </ul>
              <div className="kanban-foot">
                <div className="progress">
                  <span style={{ width: "72%" }} />
                </div>
                <span className="muted-sm">72% to submission</span>
              </div>
            </div>
          </div>
        </section>

        <section className="logo-bar" aria-label="Universities our students attend">
          <p className="logo-bar-label">Where our students go</p>
          <ul className="logo-list logo-list-images">
            {[
              { slug: "harvard", label: "Harvard" },
              { slug: "stanford", label: "Stanford" },
              { slug: "yale", label: "Yale" },
              { slug: "princeton", label: "Princeton" },
              { slug: "berkeley", label: "UC Berkeley" },
              { slug: "cornell", label: "Cornell" },
              { slug: "duke", label: "Duke" },
            ].map((u) => (
              <li key={u.slug} title={u.label}>
                <UniversityLogo
                  slug={u.slug as never}
                  label={u.label}
                  className="uni-mark logo-bar-mark"
                />
              </li>
            ))}
          </ul>
        </section>

        <section id="services" className="services">
          <div className="section-head">
            <p className="eyebrow">What we do</p>
            <h2 className="display-2">
              Four pillars. <em>One outcome.</em>
            </h2>
            <p className="lead-2">
              Every Himmah Prep student gets a complete admissions strategy — not a patchwork of
              tutors. We work end-to-end so nothing falls through the cracks.
            </p>
          </div>
          <div className="grid-4">
            <article className="card">
              <span className="card-num">01</span>
              <h3>College Advising &amp; Strategy</h3>
              <p>
                One-on-one guidance from advisors who actually went to the Ivy League — they
                know what these schools want because they got in themselves. School lists, essays,
                applications, interviews — all of it.
              </p>
              <ul className="bullets">
                <li>Personalized school list</li>
                <li>Essay coaching, every draft</li>
                <li>Interview preparation</li>
              </ul>
            </article>
            <article className="card">
              <span className="card-num">02</span>
              <h3>Standardized Test Prep</h3>
              <p>
                Customized SAT, ACT, IELTS, and TOEFL coaching designed to land scores in the 90th
                percentile and above — on the first or second sitting.
              </p>
              <ul className="bullets">
                <li>Diagnostic + study plan</li>
                <li>15+ full-length practice tests</li>
                <li>9,000+ practice questions</li>
              </ul>
            </article>
            <article className="card">
              <span className="card-num">03</span>
              <h3>Leadership Coaching</h3>
              <p>
                Workshops on self-discovery, communication, team building, and public speaking. The
                skills admissions officers see in your application — and you carry for life.
              </p>
              <ul className="bullets">
                <li>Group cohort format</li>
                <li>Public speaking labs</li>
                <li>Project incubator</li>
              </ul>
            </article>
            <article className="card">
              <span className="card-num">04</span>
              <h3>Summer Activity Planning</h3>
              <p>
                We help you identify the most competitive summer programs in the world, the kind
                that turn an application from strong to undeniable.
              </p>
              <ul className="bullets">
                <li>RSI, YYGS, SSP &amp; more</li>
                <li>Research placement help</li>
                <li>Internship strategy</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="approach" className="approach">
          <div className="approach-card">
            <p className="eyebrow">The portal advantage</p>
            <h2 className="display-2">
              A workspace built for the <em>Gulf-to-Ivy</em> journey.
            </h2>
            <p className="lead-2">
              Every Himmah student gets access to{" "}
              <span className="hl">portal.himmahprep.com</span> — a private workspace with a board
              for every school, essay drafts with advisor comments, a curated college search, and
              the deadlines that matter, in one place.
            </p>
            <div className="approach-grid">
              <div>
                <p className="approach-num serif">
                  <em>01</em>
                </p>
                <h4>Diagnose</h4>
                <p className="muted">
                  A one-hour conversation during your free consultation — academic profile,
                  ambitions, constraints, and the school list nobody is talking about yet.
                </p>
              </div>
              <div>
                <p className="approach-num serif">
                  <em>02</em>
                </p>
                <h4>Build</h4>
                <p className="muted">
                  A 12–24 month roadmap inside the portal. Tests, summer programs, leadership work,
                  essays — sequenced so nothing collides.
                </p>
              </div>
              <div>
                <p className="approach-num serif">
                  <em>03</em>
                </p>
                <h4>Submit</h4>
                <p className="muted">
                  Every essay, every form, every supplement reviewed before it ships. We don&apos;t
                  ghost in November.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="results" className="results">
          <div className="section-head">
            <p className="eyebrow">In their words</p>
            <h2 className="display-2">
              Students. Parents. <em>Real outcomes.</em>
            </h2>
          </div>
          <TestimonialCarousel items={testimonials} />
        </section>

        <section id="guide" className="guide">
          <div className="guide-grid">
            <div>
              <p className="eyebrow">A 58-page head start</p>
              <h2 className="display-2">
                The U.S. Application <em>Guide.</em>
              </h2>
              <p className="lead-2">
                Everything our advisors wish every Gulf student knew before junior year: SAT/ACT
                strategy, school research, essay frameworks, the activities list — and four full
                essays from students who got into Stanford, Harvard, Emory, and UIUC.
              </p>
              <div className="guide-ctas">
                <Link href="/shop/p/guide" className="btn btn-primary">
                  Get the guide — <s>$49</s>&nbsp; $19
                </Link>
                <Link href="/shop/p/guide" className="btn btn-ghost">
                  See the table of contents <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
              <ul className="bullets two-col">
                <li>SAT/ACT strategy &amp; scoring</li>
                <li>School research &amp; list-building</li>
                <li>Common App walkthrough</li>
                <li>Activities list with real examples</li>
                <li>Essay frameworks: Common App, supplementals, UC</li>
                <li>4 accepted essays — Stanford, Harvard, Emory, UIUC</li>
              </ul>
            </div>
            <aside className="guide-cover" aria-hidden="true">
              <GuideCover />
            </aside>
          </div>
        </section>

        <section id="consult" className="cta">
          <div className="cta-inner">
            <p className="eyebrow">Book a free consultation</p>
            <h2 className="display-2">
              Tell us about <em>the student.</em>
            </h2>
            <p className="lead-2">
              A 30-minute call with one of our senior advisors. You&apos;ll leave with a candid
              read on the path forward — and the honest version of how we&apos;d help.
            </p>
            <LeadForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
