import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Himmah Prep — Built on himmah",
  description:
    "Founded in 2020 by Harvard and UPenn graduates. Three pillars — academic excellence, character building, future readiness — built around the Arabic concept of himmah.",
  openGraph: {
    title: "About Himmah Prep — Built on himmah",
    description:
      "Founded in 2020 by Harvard and UPenn graduates. A college prep program built around the Arabic concept of himmah — ambition, resolve, determination.",
    url: "https://himmahprep.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="page-hero-inner">
            <p className="eyebrow">About</p>
            <h1 className="display">
              Built on <em>himmah.</em>
            </h1>
            <p className="lead">
              Himmah Prep is built on the foundation of <em>himmah</em>{" "}
              <span className="muted">(Arabic: همة)</span> — ambition, resolve, and
              determination. The inner drive that distinguishes exceptional students from
              everyone else.
            </p>
          </div>
        </section>

        <section className="prose-section">
          <div className="prose">
            <h2 className="display-2">
              Founded in 2020 by Harvard and UPenn <em>graduates.</em>
            </h2>
            <p>
              We started Himmah because too many talented students were being prepared the wrong
              way: narrow emphasis on test scores, applications treated as checklists, advisors
              who never sat in the rooms they claimed to know. We wanted a program that
              reflected what top universities actually look for — academic depth, real
              character, strategic clarity, and leadership that sticks.
            </p>
            <p>
              So we built one. Three pillars, end-to-end: <strong>Academic Excellence</strong>,{" "}
              <strong>Character Building</strong>, and <strong>Future Readiness</strong>. Every
              student gets all three, sequenced into a 12–24 month plan inside our private
              portal — no patchwork of tutors, no chaos in November.
            </p>
            <p>
              Five years in, our students have been admitted to every Ivy League university,
              MIT, Stanford, and the UC system — Berkeley and UCLA included. The track record
              is real. The program is selective on purpose. We work with a small number of
              families each year so every student gets the attention they deserve.
            </p>
          </div>
        </section>

        <section className="page-section page-section-tinted">
          <div className="section-head">
            <p className="eyebrow">Where our students go</p>
            <h2 className="display-2">
              Acceptances to <em>every</em> Ivy.
            </h2>
            <p className="lead-2">
              A partial list of universities Himmah Prep students have been admitted to since
              2020.
            </p>
          </div>
          <ul className="uni-grid">
            <li>Harvard</li>
            <li>Yale</li>
            <li>Princeton</li>
            <li>Columbia</li>
            <li>Penn</li>
            <li>Brown</li>
            <li>Dartmouth</li>
            <li>Cornell</li>
            <li>MIT</li>
            <li>Stanford</li>
            <li>Duke</li>
            <li>Johns Hopkins</li>
            <li>Northwestern</li>
            <li>U. Chicago</li>
            <li>Vanderbilt</li>
            <li>Rice</li>
            <li>Notre Dame</li>
            <li>Georgetown</li>
            <li>UC Berkeley</li>
            <li>UCLA</li>
            <li>U. Michigan</li>
            <li>Carnegie Mellon</li>
          </ul>
        </section>

        <section className="cta-strip">
          <div className="cta-strip-inner">
            <h2 className="display-2">
              Ready to build a strategy that <em>actually works?</em>
            </h2>
            <p className="lead-2">
              A 30-minute consultation with a senior advisor — no obligation, just a candid
              read on what's possible.
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
