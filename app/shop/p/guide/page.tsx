import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GuideCover } from "@/components/GuideCover";
import { JsonLd } from "@/components/JsonLd";

const PRODUCT_LD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "The U.S. Application Guide — 2026 Edition",
  description:
    "A 58-page step-by-step roadmap to top US college admissions. SAT/ACT strategy, school research, Common App walkthrough, activities list (with examples), essay frameworks for Common App, supplementals, and UC, recommendation letters, and four full accepted essays from students admitted to Stanford, Harvard, Emory, and UIUC.",
  brand: {
    "@type": "Brand",
    name: "Himmah Prep",
  },
  category: "Educational Materials",
  url: "https://himmahprep.com/shop/p/guide",
  offers: {
    "@type": "Offer",
    price: "19.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://himmahprep.com/shop/p/guide",
  },
};

export const metadata: Metadata = {
  title: "The U.S. Application Guide — 58-page Admissions Roadmap — Himmah Prep",
  description:
    "A 58-page step-by-step roadmap to top US college admissions. SAT/ACT strategy, school research, Common App walkthrough, essay frameworks, recommendations, and four full accepted essays — Stanford, Harvard, Emory, UIUC. $19.",
  openGraph: {
    title: "The U.S. Application Guide — Himmah Prep",
    description:
      "A 58-page step-by-step roadmap to top US college admissions, with four full accepted essays. Written by Harvard and UPenn graduates.",
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
    part: "Part I — Applying with Himmah Prep",
    chapters: [
      { n: "01", title: "An overview of US admissions" },
      { n: "02", title: "What factors go into the admission process" },
      { n: "03", title: "What Himmah Prep does" },
      { n: "04", title: "How to use this guide" },
    ],
  },
  {
    part: "Part II — Taking the SAT/ACT",
    chapters: [
      { n: "01", title: "How and when to sign up" },
      { n: "02", title: "How the exams are scored — and how scores affect admissions" },
      { n: "03", title: "Test-optional policies — when to submit, when not to" },
      { n: "04", title: "SAT vs ACT — choosing the right one for you" },
      { n: "05", title: "How many times to take the exams" },
      { n: "06", title: "Registration walkthrough" },
    ],
  },
  {
    part: "Part III — Researching Schools",
    chapters: [
      { n: "01", title: "How to choose where to apply" },
      { n: "02", title: "Looking beyond the rankings" },
      { n: "03", title: "Academics, school background, campus experience" },
      { n: "04", title: "Building a balanced college list" },
    ],
  },
  {
    part: "Part IV — Filling Out the Common App",
    chapters: [
      { n: "01", title: "Key tips for filling in the Common App" },
    ],
  },
  {
    part: "Part V — The Activities List",
    chapters: [
      { n: "01", title: "How to write your activities list — with real examples" },
    ],
  },
  {
    part: "Part VI — Writing the Essays",
    chapters: [
      { n: "01", title: "The Common App personal statement" },
      { n: "02", title: "Supplemental essays" },
      { n: "03", title: "University of California essays" },
    ],
  },
  {
    part: "Part VII — Recommendation Letters",
    chapters: [
      { n: "01", title: "Why recommendations matter" },
      { n: "02", title: "Choosing your recommenders" },
      { n: "03", title: "What makes a good letter" },
      { n: "04", title: "How and when to ask" },
      { n: "05", title: "An example recommendation letter" },
    ],
  },
  {
    part: "Part VIII — Our Successful Applications",
    chapters: [
      { n: "01", title: "Accepted: Chemical Engineering at Stanford" },
      { n: "02", title: "Accepted: Neuroscience at Emory" },
      { n: "03", title: "Accepted: History at Harvard" },
      { n: "04", title: "Accepted: Aerospace Engineering at UIUC" },
    ],
  },
];

export default function GuidePage() {
  return (
    <>
      <JsonLd data={PRODUCT_LD} />
      <Header />
      <main>
        <section className="product-hero">
          <div className="product-hero-grid">
            <div>
              <p className="eyebrow">Digital · 58 pages · 2026 edition · Instant download</p>
              <h1 className="display">
                The U.S. Application <em>Guide.</em>
              </h1>
              <p className="lead">
                A complete roadmap to navigating the US college admissions process — without
                confusion, guesswork, or overwhelm. Written by Harvard and UPenn graduates.
                Includes four full accepted essays from students admitted to Stanford, Harvard,
                Emory, and UIUC.
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
                <li>SAT/ACT strategy &amp; scoring</li>
                <li>School research &amp; list-building</li>
                <li>Common App walkthrough</li>
                <li>Activities list with real examples</li>
                <li>Essay frameworks: Common App, supplementals, UC</li>
                <li>4 accepted essays — Stanford, Harvard, Emory, UIUC</li>
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
              thousands a month — distilled into 58 pages you can read in a weekend and
              reference through the whole application year. No filler, no recycled blog posts,
              no “top 10 essay tips.” Just the strategic thinking, the mechanics — and, most
              usefully, four <em>full</em> essays from students who got in.
            </p>
            <p>
              Written for students applying to top US universities. Especially useful for IB and
              American-curriculum students from the Gulf — but the strategy is universal.
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
              Eight parts across 58 pages — including four full accepted essays. Buy the Guide
              to read each section in full.
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
