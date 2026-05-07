import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TestimonialCarousel, type Testimonial } from "@/components/Carousel";
import { UniversityLogo } from "@/components/UniversityLogo";

type CountryConfig = {
  slug: string;
  country: string;
  demonym: string;
  adjective: string;
  metaTitle: string;
  metaDescription: string;
};

const COUNTRIES: Record<string, CountryConfig> = {
  "saudi-arabia": {
    slug: "saudi-arabia",
    country: "Saudi Arabia",
    demonym: "Saudi Arabian",
    adjective: "Saudi",
    metaTitle: "College Counseling for Saudi Arabian Students — Himmah Prep",
    metaDescription:
      "Premium US college admissions consulting for Saudi Arabian students. Founded by Harvard & UPenn graduates. 100% acceptance to every Ivy League institution.",
  },
  uae: {
    slug: "uae",
    country: "the UAE",
    demonym: "UAE",
    adjective: "UAE",
    metaTitle: "College Counseling for UAE Students — Himmah Prep",
    metaDescription:
      "Premium US college admissions consulting for UAE students. Founded by Harvard & UPenn graduates. 100% acceptance to every Ivy League institution.",
  },
  qatar: {
    slug: "qatar",
    country: "Qatar",
    demonym: "Qatari",
    adjective: "Qatari",
    metaTitle: "College Counseling for Qatari Students — Himmah Prep",
    metaDescription:
      "Premium US college admissions consulting for Qatari students. Founded by Harvard & UPenn graduates. 100% acceptance to every Ivy League institution.",
  },
  kuwait: {
    slug: "kuwait",
    country: "Kuwait",
    demonym: "Kuwaiti",
    adjective: "Kuwaiti",
    metaTitle: "College Counseling for Kuwaiti Students — Himmah Prep",
    metaDescription:
      "Premium US college admissions consulting for Kuwaiti students. Founded by Harvard & UPenn graduates. 100% acceptance to every Ivy League institution.",
  },
  bahrain: {
    slug: "bahrain",
    country: "Bahrain",
    demonym: "Bahraini",
    adjective: "Bahraini",
    metaTitle: "College Counseling for Bahraini Students — Himmah Prep",
    metaDescription:
      "Premium US college admissions consulting for Bahraini students. Founded by Harvard & UPenn graduates. 100% acceptance to every Ivy League institution.",
  },
  oman: {
    slug: "oman",
    country: "Oman",
    demonym: "Omani",
    adjective: "Omani",
    metaTitle: "College Counseling for Omani Students — Himmah Prep",
    metaDescription:
      "Premium US college admissions consulting for Omani students. Founded by Harvard & UPenn graduates. 100% acceptance to every Ivy League institution.",
  },
};

const HOME_LOGOS: { slug: string; label: string }[] = [
  { slug: "harvard", label: "Harvard" },
  { slug: "stanford", label: "Stanford" },
  { slug: "yale", label: "Yale" },
  { slug: "princeton", label: "Princeton" },
  { slug: "berkeley", label: "UC Berkeley" },
  { slug: "cornell", label: "Cornell" },
  { slug: "duke", label: "Duke" },
];

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
    university: "harvard",
    universityLabel: "Harvard",
    quote: (
      <>
        &ldquo;My daughter&apos;s Common App essay was rewritten seven times. Each draft made
        it more <em>her</em>. The day Harvard&apos;s letter came, we cried — then we read the
        essay again.&rdquo;
      </>
    ),
    attribution: "Parent of Noor A.",
    classYear: "'27",
  },
];

export function generateStaticParams() {
  return Object.keys(COUNTRIES).map((slug) => ({ country: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country } = await params;
  const cfg = COUNTRIES[country];
  if (!cfg) return {};
  return {
    title: cfg.metaTitle,
    description: cfg.metaDescription,
    openGraph: {
      title: cfg.metaTitle,
      description: cfg.metaDescription,
      url: `https://himmahprep.com/${cfg.slug}`,
    },
    alternates: { canonical: `https://himmahprep.com/${cfg.slug}` },
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const cfg = COUNTRIES[country];
  if (!cfg) notFound();

  return (
    <>
      <Header />
      <main>
        {/* HERO — same 2-col layout as home, with the portal mockup */}
        <section className="hero">
          <div className="hero-inner">
            <p className="eyebrow">For families in {cfg.country}</p>
            <h1 className="display">
              Guaranteed to help
              <br />
              students <em>stand&nbsp;out.</em>
            </h1>
            <p className="lead">
              Himmah Prep works with {cfg.adjective} students applying to the most selective US
              universities. Ivy-credentialed advisors, a 100% acceptance track record, and a
              strategy built around what your school list <em>actually</em> rewards.
            </p>
            <div className="hero-ctas">
              <Link href="/apply" className="btn btn-primary">
                Apply for a free consultation
              </Link>
              <Link href="/results" className="btn btn-ghost">
                See where our students go <span aria-hidden="true">&rarr;</span>
              </Link>
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

        {/* LOGO BAR — same as home, anchors the trust before the country pivot */}
        <section className="logo-bar" aria-label="Universities our students attend">
          <p className="logo-bar-label">Where our students go</p>
          <ul className="logo-list logo-list-images">
            {HOME_LOGOS.map((u) => (
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

        {/* COUNTRY PIVOT — first prose block, the "we know your kid" moment */}
        <section className="prose-section">
          <div className="prose">
            <h2 className="display-2">
              We know the <em>{cfg.adjective} student profile.</em>
            </h2>
            <p>
              Most {cfg.adjective} students we work with arrive in similar shape: strong GPA in
              an IB or American-curriculum school, an SAT score in the 1200s, a thin set of
              extracurriculars, and a school list shaped by parents and family friends rather
              than admissions data. The story almost writes itself — and the outcome is
              predictably mid-tier.
            </p>
            <p>
              Our job is to rewrite that story. Diagnostic-driven test prep that gets students
              to <strong>1500+</strong>. An honest school list that includes real reaches,
              matches, and safeties. Extracurriculars that show <em>depth and initiative</em>{" "}
              instead of breadth. Essays that sound like the student, not their consultant. And
              a senior advisor in the room every step of the way.
            </p>
          </div>
        </section>

        {/* PILLARS — identical content + bullets to home, so the page reads as a sibling */}
        <section className="services">
          <div className="section-head">
            <p className="eyebrow">All-in-one college prep</p>
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
                One-on-one guidance from advisors who actually went to the Ivy League — they know
                what these schools want because they got in themselves. School lists, essays,
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

        {/* PORTAL ADVANTAGE — same as home, ties the pillars together */}
        <section id="approach" className="approach">
          <div className="approach-card">
            <p className="eyebrow">The portal advantage</p>
            <h2 className="display-2">
              A workspace built for the <em>GCC-to-Ivy</em> journey.
            </h2>
            <p className="lead-2">
              Every Himmah student gets access to{" "}
              <span className="hl">portal.himmahprep.com</span> — a private workspace with a
              board for every school, essay drafts with advisor comments, a curated college
              search, and the deadlines that matter, in one place.
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
                  A 12–24 month roadmap inside the portal. Tests, summer programs, leadership
                  work, essays — sequenced so nothing collides.
                </p>
              </div>
              <div>
                <p className="approach-num serif">
                  <em>03</em>
                </p>
                <h4>Submit</h4>
                <p className="muted">
                  Every essay, every form, every supplement reviewed before it ships. We
                  don&apos;t ghost in November.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COUNTRY DEEP DIVE — the page's actual reason to exist */}
        <section className="prose-section">
          <div className="prose">
            <h2 className="display-2">
              What <em>actually</em> gets {cfg.adjective} students into top US universities.
            </h2>
            <p>
              At Harvard&apos;s and Princeton&apos;s sub-4% acceptance rates, no single ingredient
              is enough. Top universities want to see three things in combination:{" "}
              <strong>academic depth, real initiative, and demonstrated impact</strong>. We help
              students plan and execute against all three — not as a checklist, but as a coherent
              story.
            </p>
            <p>
              That looks different per student, but it usually involves at least one of:
              ISEF-track research, AMC/AIME, IBO, USACO, IPhO — competitive arenas where merit
              is unambiguous and admissions officers can read the result without a translator.
              Or a self-built project (a nonprofit, a publication, a startup) that
              demonstrably solved a problem and grew over time. Or a summer at a real lab.
            </p>
            <h2 className="display-2 prose-h2-next">
              The mistake most {cfg.adjective} families make.
            </h2>
            <p>
              The all-or-nothing list. Eight reaches and zero matches, because nobody wants to
              admit they aren&apos;t a Harvard family — or eight safeties, because the family is
              terrified of zero offers. Both fail. The right list has{" "}
              <strong>real reaches, real matches, real safeties</strong>, plus an Early Decision
              choice that&apos;s actually strategic — not the most prestigious name, the right
              prestigious name for this student.
            </p>
            <h2 className="display-2 prose-h2-next">
              Standardized testing for {cfg.adjective} students.
            </h2>
            <p>
              Two specific weak points show up consistently in {cfg.adjective} students:{" "}
              <strong>English grammar mechanics</strong> (the Reading &amp; Writing section
              tests rules nobody explicitly taught) and <strong>Algebra 2 fluency</strong> (IB
              Math AA/AI and the SAT have different priorities). The diagnostic identifies these
              fast, and the 12-week plan targets them directly.
            </p>
            <p>
              Plan three SAT sittings across 10th and 11th grade. The first is a baseline. The
              second is post-prep. The third — usually the one schools see — is where most of
              our students land at <strong>1500+</strong>. For students at IB or American
              schools, TOEFL/IELTS is often waived; we&apos;ll tell you when it isn&apos;t.
            </p>
          </div>
        </section>

        {/* COUNTRY FAQ */}
        <section className="page-section page-section-tinted">
          <div className="section-head">
            <p className="eyebrow">FAQ</p>
            <h2 className="display-2">
              What {cfg.adjective} families <em>ask us most.</em>
            </h2>
          </div>
          <div className="faq-grid">
            <details className="faq-item">
              <summary>Do you work with students applying to UK universities as well?</summary>
              <p>
                Yes. Our advisors prepare students for Oxford, Cambridge, Imperial, UCL, and the
                rest of the top UK schools alongside US applications. The strategies overlap
                more than people think — strong test scores, real intellectual depth, and a
                personal statement that says something.
              </p>
            </details>
            <details className="faq-item">
              <summary>When should we start?</summary>
              <p>
                10th grade is the ideal entry point. The student has enough academic history for
                a real diagnostic, but two full years to address gaps, build extracurriculars,
                prep for tests, and plan summers. 9th grade is fine for habit-building. 11th
                grade we can still do good work — but the timeline is tighter.
              </p>
            </details>
            <details className="faq-item">
              <summary>
                Are your advisors familiar with the {cfg.adjective} curriculum?
              </summary>
              <p>
                Yes — we work primarily with IB and American-curriculum students. We know which
                IB Higher Levels matter for which majors, where the curriculum gaps versus US
                expectations actually live, and how admissions officers read predicted grades.
              </p>
            </details>
            <details className="faq-item">
              <summary>How does this work given the distance?</summary>
              <p>
                Entirely online. The portal, the advising sessions, the workshops, the mocks —
                all built for remote families from day one. Students in {cfg.country} have
                exactly the same experience as students in New York.
              </p>
            </details>
          </div>
        </section>

        {/* TESTIMONIALS — same as home */}
        <section className="results">
          <div className="section-head">
            <p className="eyebrow">In their words</p>
            <h2 className="display-2">
              Hear from <em>our students.</em>
            </h2>
          </div>
          <TestimonialCarousel items={testimonials} />
        </section>

        {/* CTA — country-flavored close */}
        <section className="cta-strip">
          <div className="cta-strip-inner">
            <h2 className="display-2">
              Ready to build a strategy that <em>actually works?</em>
            </h2>
            <p className="lead-2">
              We work with a select number of students from {cfg.country} each year. If your
              student is in 9th, 10th, or 11th grade and serious about a top US university, the
              time to start is now.
            </p>
            <Link href="/apply" className="btn btn-primary">
              Apply for a free consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
