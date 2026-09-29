import Image from "next/image";
import Link from "next/link";
import { Newsreader } from "next/font/google";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import { GuideCover } from "@/components/GuideCover";
import { JsonLd } from "@/components/JsonLd";
import { ServiceTabs, type Service } from "@/components/home/ServiceTabs";
import "./home.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

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

const SERVICES: Service[] = [
  {
    title: "College advising and strategy",
    body: "One-on-one guidance from advisors who went to the Ivy League themselves and know what these schools look for. School lists, essays, applications, and interviews, handled by one advisor.",
    points: ["Personalized school list", "Essay coaching on every draft", "Interview preparation"],
  },
  {
    title: "Standardized test prep",
    body: "Customized SAT, ACT, IELTS, and TOEFL coaching aimed at the 90th percentile and above, on the first or second sitting.",
    points: ["Diagnostic and study plan", "15+ full-length practice tests", "9,000+ practice questions"],
  },
  {
    title: "Leadership coaching",
    body: "Workshops on self-discovery, communication, team building, and public speaking. The skills admissions officers look for in an application, and ones students keep.",
    points: ["Group cohort format", "Public speaking labs", "Project incubator"],
  },
  {
    title: "Summer activity planning",
    body: "Identifying the most competitive summer programs, research placements, and internships, and building strong applications to them.",
    points: ["RSI, YYGS, SSP and more", "Research placement help", "Internship strategy"],
  },
];

type Quote = { quote: string; name: string; school: string };

const STUDENT_QUOTES: Quote[] = [
  {
    quote:
      "Himmah didn't just get me into Berkeley — they reframed how I thought about myself as a student. The leadership coaching changed me before college did.",
    name: "Mariam A.",
    school: "UC Berkeley · Class of '28",
  },
  {
    quote:
      "Every other consultant in Riyadh sells templates. Himmah actually got to know me, then built a strategy nobody else would have thought of.",
    name: "Lina R.",
    school: "Stanford · Class of '28",
  },
  {
    quote:
      "Other consultants told me my profile was 'fine.' Himmah told me which two extracurriculars to drop and which one to double down on. That's the call that changed everything.",
    name: "Hala K.",
    school: "Yale · Class of '27",
  },
];

const PARENT_QUOTES: Quote[] = [
  {
    quote:
      "My son went from a 1280 SAT to a 1530 in four months, then wrote the best essay of his life. He's at Cornell. We're still in disbelief.",
    name: "Parent of Yousef H.",
    school: "Cornell · Class of '28",
  },
  {
    quote:
      "My daughter's Common App essay was rewritten seven times. Each draft made it more her. The day Harvard's letter came, we cried — then we read the essay again.",
    name: "Parent of Noor A.",
    school: "Harvard · Class of '27",
  },
  {
    quote:
      "From Riyadh to Princeton in 18 months — and not by accident. Every deadline, every essay, every interview was rehearsed.",
    name: "Parent of Tariq B.",
    school: "Princeton · Class of '28",
  },
];

const UNIVERSITIES = [
  "Harvard",
  "Stanford",
  "Yale",
  "Princeton",
  "MIT",
  "Cornell",
  "Duke",
  "UC Berkeley",
  "UCLA",
  "Oxford",
  "Cambridge",
];

function SectionLabel({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <p className="hp2-label">
      <span className="hp2-label-num">{num}</span>
      <span className="hp2-dot" aria-hidden="true" />
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <div className={`hp2 ${newsreader.variable}`}>
      <JsonLd data={WEBSITE_LD} />
      <JsonLd data={SERVICE_LD} />
      <JsonLd data={HOME_FAQ_LD} />

      <header className="hp2-nav">
        <div className="hp2-wrap hp2-nav-inner">
          <Link href="/" aria-label="Himmah Prep home" className="hp2-brand">
            <Image src="/logo-wordmark.png" alt="Himmah Prep" width={1393} height={203} priority />
          </Link>
          <nav className="hp2-nav-links" aria-label="Primary">
            <Link href="/about">About</Link>
            <Link href="/results">Results</Link>
            <Link href="/standardized-test-tutors">Test Prep</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/shop">Store</Link>
          </nav>
          <div className="hp2-nav-actions">
            <a href="https://portal.himmahprep.com" className="hp2-btn hp2-btn-outline">
              Student portal
            </a>
            <a href="#consult" className="hp2-btn hp2-btn-dark">
              Free consultation
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hp2-hero">
          <div className="hp2-wrap hp2-hero-grid">
            <div className="hp2-hero-copy">
              <p className="hp2-kicker">
                <span className="hp2-dot" aria-hidden="true" />
                College counseling · Saudi Arabia &amp; the Gulf
              </p>
              <p className="hp2-hero-pre">
                College admissions strategy and 1-on-1 test prep, from advisors who went to the
                Ivy League themselves.
              </p>
              <h1 className="hp2-h1">Ivy League college counseling for Gulf students.</h1>
              <p className="hp2-hero-lead">
                Himmah Prep works with students in Saudi Arabia, the UAE, Qatar, Kuwait, Bahrain,
                and Oman on admissions strategy, SAT and ACT prep, essays, and leadership. One
                senior advisor is responsible for each student, and every family gets a private
                portal that keeps the whole plan in one place.
              </p>
              <div className="hp2-hero-ctas">
                <a href="#consult" className="hp2-btn hp2-btn-primary hp2-btn-lg">
                  Book a free consultation
                  <span className="hp2-btn-arrow" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
                <a href="#services" className="hp2-textlink">
                  See what we do <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="hp2-hero-media">
              <div className="hp2-arch">
                <Image
                  src="/campus/yale_portal.jpg"
                  alt="Sterling Memorial Library, Yale University"
                  fill
                  priority
                  sizes="(max-width: 900px) 90vw, 420px"
                />
              </div>
              <div className="hp2-float">
                <span className="hp2-dot" aria-hidden="true" />
                One senior advisor, from the first meeting to the final decision.
              </div>
            </div>
          </div>

          <div className="hp2-wrap">
            <dl className="hp2-stats">
              <div>
                <dt>100%</dt>
                <dd>College acceptance track record</dd>
              </div>
              <div>
                <dt>100%</dt>
                <dd>Ivy League–credentialed advisors</dd>
              </div>
              <div>
                <dt>90th+</dt>
                <dd>Median SAT/ACT percentile attained</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* University band */}
        <section className="hp2-band" aria-label="Universities our students attend">
          <p className="hp2-band-label">Where our students have been admitted</p>
          <div className="hp2-marquee">
            <div className="hp2-marquee-track">
              {[...UNIVERSITIES, ...UNIVERSITIES].map((u, i) => (
                <span key={`${u}-${i}`} aria-hidden={i >= UNIVERSITIES.length}>
                  {u}
                  <span className="hp2-marquee-dot" aria-hidden="true" />
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 01 Approach */}
        <section className="hp2-section">
          <div className="hp2-wrap">
            <SectionLabel num="01">Our approach</SectionLabel>
            <h2 className="hp2-outline">One strategy, not a patchwork of tutors.</h2>
            <div className="hp2-split">
              <p className="hp2-body-lg">
                Most families put together test prep from one place, essay help from another,
                and advice from whoever they know. Nobody owns the whole plan. At Himmah Prep,
                one advisor is responsible for the student&apos;s school list, testing,
                activities, summers, and applications, so every decision supports the same
                goal.
              </p>
              <div className="hp2-timeline-card">
                <p className="hp2-card-h">When to start</p>
                <ol className="hp2-grades">
                  <li>
                    <span className="hp2-node" />
                    Grade 9
                  </li>
                  <li className="is-key">
                    <span className="hp2-node" />
                    Grade 10
                  </li>
                  <li>
                    <span className="hp2-node" />
                    Grade 11
                  </li>
                  <li>
                    <span className="hp2-node" />
                    Grade 12
                  </li>
                </ol>
                <p className="hp2-card-note">
                  10th grade is ideal: enough academic history for a real diagnostic, and two
                  full years to raise scores, build activities, and plan summers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 02 Services */}
        <section id="services" className="hp2-section hp2-sand">
          <div className="hp2-wrap">
            <SectionLabel num="02">What we do</SectionLabel>
            <h2 className="hp2-h2">Four services, one advisor.</h2>
            <ServiceTabs services={SERVICES} />
          </div>
        </section>

        {/* 03 Testimonials */}
        <section id="results" className="hp2-section hp2-dark">
          <div className="hp2-wrap">
            <SectionLabel num="03">Results</SectionLabel>
            <h2 className="hp2-h2">What students and parents say.</h2>
            <div className="hp2-quotes">
              {[
                { label: "From students", items: STUDENT_QUOTES },
                { label: "From parents", items: PARENT_QUOTES },
              ].map((col) => (
                <div key={col.label} className="hp2-quote-col">
                  <p className="hp2-col-label">{col.label}</p>
                  {col.items.map((q) => (
                    <figure key={q.name} className="hp2-quote">
                      <span className="hp2-quote-mark" aria-hidden="true">
                        &ldquo;
                      </span>
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
            <p className="hp2-quote-foot">
              <Link href="/results">See more results &rarr;</Link>
            </p>
          </div>
        </section>

        {/* 04 How it works */}
        <section id="approach" className="hp2-section">
          <div className="hp2-wrap hp2-how">
            <div className="hp2-how-head">
              <SectionLabel num="04">How it works</SectionLabel>
              <h2 className="hp2-h2">Three stages, one plan.</h2>
              <p className="hp2-body">
                Every student gets access to{" "}
                <a href="https://portal.himmahprep.com">portal.himmahprep.com</a>, a private
                workspace with a board for every school, essay drafts with advisor comments, a
                college search, and every deadline in one place.
              </p>
              <div className="hp2-how-photo">
                <Image
                  src="/campus/stanford_arches.jpg"
                  alt="The Main Quad arcade at Stanford University"
                  fill
                  sizes="(max-width: 900px) 90vw, 420px"
                />
              </div>
            </div>
            <ol className="hp2-phases">
              {[
                {
                  tag: "Stage one · Free consultation",
                  title: "Diagnose",
                  body: "A one-hour conversation about the student's academic profile, goals, and constraints, and a realistic first school list.",
                },
                {
                  tag: "Stage two · 12–24 months",
                  title: "Build",
                  body: "A roadmap inside the portal covering tests, summer programs, leadership work, and essays, sequenced so nothing collides.",
                },
                {
                  tag: "Stage three · Application year",
                  title: "Submit",
                  body: "Every essay, form, and supplement is reviewed before it is submitted, through to the final decision.",
                },
              ].map((p, i) => (
                <li key={p.title} className="hp2-phase">
                  <span className="hp2-phase-ghost" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="hp2-pill">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 05 Guide */}
        <section id="guide" className="hp2-section hp2-sand">
          <div className="hp2-wrap hp2-guide">
            <div>
              <SectionLabel num="05">The application guide</SectionLabel>
              <h2 className="hp2-h2">The U.S. Application Guide.</h2>
              <p className="hp2-body">
                A 58-page guide to what our advisors wish every Gulf student knew before junior
                year: SAT/ACT strategy, school research, essay frameworks, the activities list,
                and four full essays from students admitted to Stanford, Harvard, Emory, and
                UIUC.
              </p>
              <ul className="hp2-list">
                <li>SAT/ACT strategy and scoring</li>
                <li>School research and list-building</li>
                <li>Common App walkthrough</li>
                <li>Activities list with real examples</li>
                <li>Essay frameworks: Common App, supplementals, UC</li>
                <li>Four accepted essays</li>
              </ul>
              <div className="hp2-hero-ctas">
                <Link href="/shop/p/guide" className="hp2-btn hp2-btn-dark hp2-btn-lg">
                  Get the guide · <s>$49</s> $19
                </Link>
                <Link href="/shop/p/guide" className="hp2-textlink">
                  Table of contents <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="hp2-guide-cover" aria-hidden="true">
              <GuideCover />
            </div>
          </div>
        </section>

        {/* 06 Where we work */}
        <section className="hp2-section">
          <div className="hp2-wrap">
            <SectionLabel num="06">Where we work</SectionLabel>
            <h2 className="hp2-h2">College counseling and SAT prep across the Gulf.</h2>
            <div className="hp2-where">
              <p className="hp2-body">
                Most of our students attend IB or American-curriculum schools and are applying
                to the most selective universities in the United States and the United Kingdom.
                Test prep is live and 1-on-1 wherever the student is, or self-paced through the{" "}
                <Link href="/sat-bootcamp">8-week Digital SAT bootcamp</Link>.
              </p>
              <div className="hp2-where-cols">
                <div>
                  <p className="hp2-col-label">Countries</p>
                  <Link href="/saudi-arabia">Saudi Arabia</Link>
                  <Link href="/uae">UAE</Link>
                  <Link href="/qatar">Qatar</Link>
                  <Link href="/kuwait">Kuwait</Link>
                  <Link href="/bahrain">Bahrain</Link>
                  <Link href="/oman">Oman</Link>
                </div>
                <div>
                  <p className="hp2-col-label">SAT prep by city</p>
                  <Link href="/sat-prep/riyadh">Riyadh</Link>
                  <Link href="/sat-prep/jeddah">Jeddah</Link>
                  <Link href="/sat-prep/dammam">Dammam &amp; Khobar</Link>
                  <Link href="/sat-prep/dubai">Dubai</Link>
                  <Link href="/sat-prep/abu-dhabi">Abu Dhabi</Link>
                  <Link href="/sat-prep/doha">Doha</Link>
                  <Link href="/sat-prep/kuwait-city">Kuwait City</Link>
                  <Link href="/sat-prep/manama">Manama</Link>
                  <Link href="/sat-prep/muscat">Muscat</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 07 FAQ */}
        <section className="hp2-section hp2-sand">
          <div className="hp2-wrap hp2-faq">
            <div>
              <SectionLabel num="07">Questions</SectionLabel>
              <h2 className="hp2-h2">Common questions from families.</h2>
            </div>
            <div className="hp2-faq-list">
              {HOME_FAQS.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 08 Consultation */}
        <section id="consult" className="hp2-section hp2-cta">
          <div className="hp2-wrap hp2-cta-grid">
            <div>
              <SectionLabel num="08">Free consultation</SectionLabel>
              <h2 className="hp2-h2">Tell us where the student is today.</h2>
              <p className="hp2-body">
                A 30-minute call with a senior advisor. You&apos;ll get a candid read on the
                student&apos;s profile, a realistic school list, and a clear next step, whether
                or not you work with us.
              </p>
            </div>
            <div className="hp2-form-card">
              <LeadForm />
            </div>
          </div>
        </section>

        <p className="hp2-credits">
          Campus photographs from Wikimedia Commons: Sterling Memorial Library by Christian
          David (CC BY-SA 4.0); Stanford Main Quad by Jawed (CC BY-SA 4.0).
        </p>
      </main>

      <Footer />
    </div>
  );
}
