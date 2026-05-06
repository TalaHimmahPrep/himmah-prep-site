import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TestimonialCarousel, type Testimonial } from "@/components/Carousel";
import { UniversityLogo, UNIVERSITIES } from "@/components/UniversityLogo";

export const metadata: Metadata = {
  title: "Student Results & University Acceptances — Himmah Prep",
  description:
    "Himmah Prep students have been admitted to every Ivy League institution and the top 20 universities in the United States. Real outcomes, real students.",
  openGraph: {
    title: "Student Results & University Acceptances — Himmah Prep",
    description:
      "Acceptances to every Ivy, MIT, Stanford, and the UC system. 100% college acceptance track record.",
    url: "https://himmahprep.com/results",
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
        &ldquo;My daughter&apos;s Common App essay was rewritten seven times. Each draft made
        it more <em>her</em>. The day Harvard&apos;s letter came, we cried — then we read the
        essay again.&rdquo;
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

export default function ResultsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="page-hero-inner">
            <p className="eyebrow">Our students' results</p>
            <h1 className="display">
              Acceptances to <em>every Ivy.</em>
            </h1>
            <p className="lead">
              Himmah Prep students have earned admission to the most selective universities in
              the world — every Ivy League institution and the top 20 universities in the
              United States.
            </p>
          </div>
        </section>

        <section className="page-section page-section-tinted">
          <div className="section-head">
            <p className="eyebrow">University acceptances</p>
            <h2 className="display-2">
              Where our students <em>actually go.</em>
            </h2>
          </div>
          <ul className="uni-grid uni-grid-logos">
            {UNIVERSITIES.map((u) => (
              <li key={u.slug} title={u.label}>
                <UniversityLogo slug={u.slug} label={u.label} />
              </li>
            ))}
          </ul>
        </section>

        <section className="results">
          <div className="section-head">
            <p className="eyebrow">In their words</p>
            <h2 className="display-2">
              Students. Parents. <em>Real outcomes.</em>
            </h2>
          </div>
          <TestimonialCarousel items={testimonials} />
        </section>

        <section className="cta-strip">
          <div className="cta-strip-inner">
            <h2 className="display-2">
              Ready to write your <em>own success story?</em>
            </h2>
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
