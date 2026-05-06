import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GuideCover } from "@/components/GuideCover";

export const metadata: Metadata = {
  title: "The U.S. Application Guide — 55-page Admissions Roadmap — Himmah Prep",
  description:
    "A 55-page step-by-step roadmap to top US college admissions. Essay frameworks, school selection, extracurricular strategy, financial aid, test prep, and real examples from Stanford and Harvard admits. $19.",
  openGraph: {
    title: "The U.S. Application Guide — Himmah Prep",
    description:
      "A 55-page step-by-step roadmap to top US college admissions. Written by Harvard and UPenn graduates.",
    url: "https://himmahprep.com/shop/p/guide",
    type: "website",
  },
  alternates: { canonical: "https://himmahprep.com/shop/p/guide" },
};

const BUY_URL = "#"; // TODO: replace with Stripe Payment Link or Lemon Squeezy URL

type ChapterRef = { n: string; title: string };
type Part = { part: string; chapters: ChapterRef[] };

const TOC: Part[] = [
  {
    part: "Part I — The Foundation",
    chapters: [
      { n: "01", title: "How US admissions actually work" },
      { n: "02", title: "Building a coherent application profile" },
      { n: "03", title: "The three pillars top universities look for" },
    ],
  },
  {
    part: "Part II — Academics & Testing",
    chapters: [
      { n: "04", title: "Course selection by intended major" },
      { n: "05", title: "SAT / ACT strategy and timing" },
      { n: "06", title: "Predicted grades & IB-specific advice" },
      { n: "07", title: "TOEFL / IELTS — when you need it, when you don't" },
    ],
  },
  {
    part: "Part III — Beyond Grades",
    chapters: [
      { n: "08", title: "Extracurriculars that work (and the ones that don't)" },
      { n: "09", title: "Summer programs worth your time" },
      { n: "10", title: "The capstone project" },
    ],
  },
  {
    part: "Part IV — School List & Strategy",
    chapters: [
      { n: "11", title: "Building a real reach / match / safety list" },
      { n: "12", title: "Early Decision vs. Early Action — the real math" },
      { n: "13", title: "International quotas and the Gulf lens" },
    ],
  },
  {
    part: "Part V — Essays",
    chapters: [
      { n: "14", title: "Common App personal statement frameworks" },
      { n: "15", title: "The “Why X” supplement, done well" },
      { n: "16", title: "The activity essay" },
      { n: "17", title: "Real examples — Stanford, Harvard, Princeton" },
    ],
  },
  {
    part: "Part VI — Recommendations & Interviews",
    chapters: [
      { n: "18", title: "Choosing your recommenders" },
      { n: "19", title: "The interview — prep, pitfalls, what they're really asking" },
    ],
  },
  {
    part: "Part VII — Money",
    chapters: [
      { n: "20", title: "Financial aid for international students" },
      { n: "21", title: "Merit scholarships you should actually apply to" },
    ],
  },
  {
    part: "Part VIII — Submission & Beyond",
    chapters: [
      { n: "22", title: "The final checklist" },
      { n: "23", title: "After decisions drop — what to do next" },
    ],
  },
];

export default function GuidePage() {
  return (
    <>
      <Header />
      <main>
        <section className="product-hero">
          <div className="product-hero-grid">
            <div>
              <p className="eyebrow">Digital · 55 pages · Instant download</p>
              <h1 className="display">
                The U.S. Application <em>Guide.</em>
              </h1>
              <p className="lead">
                A complete roadmap to navigating the US college admissions process — without
                confusion, guesswork, or overwhelm. Written by Harvard and UPenn graduates.
                Real essay examples from students admitted to Stanford, Harvard, and Princeton.
              </p>
              <div className="product-buy">
                <p className="product-price product-price-lg">
                  <s>$49</s> <strong>$19</strong>
                </p>
                <a href={BUY_URL} className="btn btn-primary">
                  Buy the Guide — $19
                </a>
              </div>
              <ul className="bullets two-col" style={{ marginTop: "32px" }}>
                <li>Essay frameworks &amp; archetypes</li>
                <li>School selection by profile</li>
                <li>Extracurricular strategy</li>
                <li>Financial aid &amp; scholarships</li>
                <li>Standardized test playbooks</li>
                <li>Interview &amp; recommendation prep</li>
              </ul>
            </div>
            <aside className="product-cover-large" aria-hidden="true">
              <GuideCover />
            </aside>
          </div>
        </section>

        <section className="prose-section prose-narrow">
          <div className="prose">
            <h2 className="display-2">
              What you <em>actually</em> get.
            </h2>
            <p>
              The Guide is the same playbook our 1-on-1 advisors use with families paying
              thousands a month — distilled into 55 pages you can read in an afternoon and
              reference for two years. No filler, no recycled blog posts, no “top 10 essay
              tips.” Just the strategic thinking, sequenced from 9th grade through submission.
            </p>
            <p>
              Written for students applying to top-20 US universities. Especially useful for IB
              and American-curriculum students from the Gulf — but the strategy is universal.
            </p>
          </div>
        </section>

        <section className="page-section page-section-tinted">
          <div className="section-head">
            <p className="eyebrow">Inside the Guide</p>
            <h2 className="display-2">
              Table of <em>contents.</em>
            </h2>
            <p className="lead-2">
              23 chapters across 55 pages, in 8 parts. Buy the Guide to read each chapter in
              full.
            </p>
          </div>
          <ol className="toc">
            {TOC.map((part) => (
              <li key={part.part} className="toc-part">
                <p className="toc-part-title serif">{part.part}</p>
                <ul className="toc-chapters">
                  {part.chapters.map((ch) => (
                    <li key={ch.n} className="toc-ch">
                      <span className="toc-ch-num serif">{ch.n}</span>
                      <span className="toc-ch-title">{ch.title}</span>
                      <span className="toc-ch-lock" aria-label="Locked — purchase to read">
                        ●
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="cta-strip">
          <div className="cta-strip-inner">
            <h2 className="display-2">
              Ready when <em>you are.</em>
            </h2>
            <p className="lead-2">
              Instant download. Read tonight. Reference for two years. Currently $19 — back to
              $49 soon.
            </p>
            <a href={BUY_URL} className="btn btn-primary">
              Buy the Guide — $19
            </a>
            <p className="muted-sm" style={{ marginTop: "20px", textTransform: "none", letterSpacing: 0 }}>
              Refunds &amp; usage governed by the{" "}
              <Link href="/terms-and-conditions">Terms and Conditions</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
