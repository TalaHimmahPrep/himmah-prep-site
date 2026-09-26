import Link from "next/link";
import { TestimonialCarousel, type Testimonial } from "@/components/Carousel";
import { LeadForm } from "@/components/LeadForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GuideCover } from "@/components/GuideCover";
import { UniversityLogo } from "@/components/UniversityLogo";
import { JsonLd } from "@/components/JsonLd";

const HOME_FAQS = [
  {
    q: "Where does Himmah Prep work with students?",
    a: "Across the Gulf — Riyadh, Jeddah, Dammam and Khobar in Saudi Arabia; Dubai and Abu Dhabi in the UAE; Doha, Kuwait City, Manama, and Muscat. Everything runs online, so the experience is identical wherever the student lives.",
  },
  {
    q: "What does the program include?",
    a: "College advising and application strategy, 1-on-1 SAT/ACT (and IELTS/TOEFL) prep, essay coaching on every draft, leadership workshops, and summer program planning — in one package, with one senior advisor responsible for the student.",
  },
  {
    q: "Who are the advisors?",
    a: "Every Himmah Prep advisor holds a degree from an Ivy League university. The company was founded in 2020 by Harvard and University of Pennsylvania graduates.",
  },
  {
    q: "Which universities have your students been admitted to?",
    a: "Every Ivy League institution and every top-20 US university — including Harvard, Stanford, MIT, Yale, Princeton, Cornell, Duke, UC Berkeley, and UCLA — plus Oxford, Cambridge, and other top UK schools.",
  },
  {
    q: "When should a student start?",
    a: "10th grade is ideal: enough academic history for a real diagnostic, and two full years to raise test scores, build extracurriculars, and plan summers. 9th and 11th grade both work, with different timelines.",
  },
  {
    q: "How do we start?",
    a: "Book a free 30-minute consultation. You will leave with a candid read on the student's profile, a realistic school list, and a clear next step — whether or not you work with us.",
  },
];

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
  mainEntity: HOME_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const SERVICE_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "College counseling and SAT prep for Gulf students",
  serviceType: ["College admissions counseling", "SAT preparation", "ACT preparation"],
  provider: { "@id": "https://www.himmahprep.com/#organization" },
  areaServed: ["Saudi Arabia", "United Arab Emirates", "Qatar", "Kuwait", "Bahrain", "Oman"],
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://www.himmahprep.com/apply",
    availableLanguage: ["English", "Arabic"],
  },
};

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
      <JsonLd data={WEBSITE_LD} />
      <JsonLd data={SERVICE_LD} />
      <JsonLd data={HOME_FAQ_LD} />
      <Header />

      <main>
        <section className="hero">
          <div className="hero-inner">
            <p className="eyebrow">Guaranteed to help students stand out</p>
            <h1 className="display">
              Ivy League college counseling
              <br />
              for <em>Gulf students.</em>
            </h1>
            <p className="lead">
              College admissions strategy, 1-on-1 SAT and ACT prep, essay coaching, and
              leadership training for students in Saudi Arabia, the UAE, Qatar, Kuwait,
              Bahrain, and Oman — from advisors who went to the Ivy League themselves. A 100%
              acceptance track record, and a portal that turns the chaos of applications into
              one clear plan.
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
              A workspace built for the <em>GCC-to-Ivy</em> journey.
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

        <section className="prose-section">
          <div className="prose">
            <h2 className="display-2">
              College counseling and SAT prep <em>across the Gulf.</em>
            </h2>
            <p>
              Himmah Prep works with families in{" "}
              <Link href="/saudi-arabia">Saudi Arabia</Link>, <Link href="/uae">the UAE</Link>,{" "}
              <Link href="/qatar">Qatar</Link>, <Link href="/kuwait">Kuwait</Link>,{" "}
              <Link href="/bahrain">Bahrain</Link>, and <Link href="/oman">Oman</Link>. Most of
              our students attend IB or American-curriculum schools and are applying to the
              most selective universities in the United States and the United Kingdom.
            </p>
            <p>
              Test prep is live and 1-on-1, wherever the student is. See how SAT prep works
              in <Link href="/sat-prep/jeddah">Jeddah</Link>,{" "}
              <Link href="/sat-prep/riyadh">Riyadh</Link>,{" "}
              <Link href="/sat-prep/dammam">Dammam &amp; Khobar</Link>,{" "}
              <Link href="/sat-prep/dubai">Dubai</Link>,{" "}
              <Link href="/sat-prep/abu-dhabi">Abu Dhabi</Link>,{" "}
              <Link href="/sat-prep/doha">Doha</Link>,{" "}
              <Link href="/sat-prep/kuwait-city">Kuwait City</Link>,{" "}
              <Link href="/sat-prep/manama">Manama</Link>, and{" "}
              <Link href="/sat-prep/muscat">Muscat</Link> — or start with the self-paced{" "}
              <Link href="/sat-bootcamp">8-week Digital SAT bootcamp</Link>.
            </p>
          </div>
        </section>

        <section className="page-section page-section-tinted">
          <div className="section-head">
            <p className="eyebrow">FAQ</p>
            <h2 className="display-2">
              What families <em>ask us first.</em>
            </h2>
          </div>
          <div className="faq-grid">
            {HOME_FAQS.map((f) => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
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
