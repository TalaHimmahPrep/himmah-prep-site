import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { POSTS } from "./posts";

export const metadata: Metadata = {
  title: "Blog — College Admissions Resources — Himmah Prep",
  description:
    "Frameworks, playbooks, and strategy for getting into top US universities — written by Himmah Prep's Ivy League advisors. Roadmaps, essay strategy, test prep, and country-specific guidance for Gulf families.",
  openGraph: {
    title: "Blog — Himmah Prep",
    description:
      "College admissions frameworks and playbooks from Himmah Prep's Ivy League advisors.",
    url: "https://himmahprep.com/blog",
  },
  alternates: { canonical: "https://himmahprep.com/blog" },
};

const sortedPosts = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

export default function BlogIndexPage() {
  const [featured, ...rest] = sortedPosts;
  return (
    <>
      <Header />
      <main>
        <section className="page-hero page-hero-tight">
          <div className="page-hero-inner">
            <p className="eyebrow">Resources</p>
            <h1 className="display">
              Frameworks &amp; <em>playbooks.</em>
            </h1>
            <p className="lead">
              Strategy, frameworks, and honest guidance from Ivy League advisors who&apos;ve walked
              hundreds of Gulf families through the US application process — and out the other
              side.
            </p>
          </div>
        </section>

        <section className="blog-list">
          <article className="blog-feature">
            <Link href={`/blog/${featured.slug}`} className="blog-feature-link">
              <div className="blog-feature-meta">
                <span className="blog-cat">{featured.category}</span>
                <span className="blog-dot" aria-hidden="true">
                  ·
                </span>
                <time dateTime={featured.date}>{featured.dateLabel}</time>
                <span className="blog-dot" aria-hidden="true">
                  ·
                </span>
                <span>{featured.readMinutes} min read</span>
              </div>
              <h2 className="blog-feature-title">{featured.title}</h2>
              <p className="blog-feature-excerpt">{featured.excerpt}</p>
              <span className="blog-readmore">
                Read article <span aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          </article>

          <ul className="blog-grid">
            {rest.map((p) => (
              <li key={p.slug} className="blog-card">
                <Link href={`/blog/${p.slug}`} className="blog-card-link">
                  <div className="blog-card-meta">
                    <span className="blog-cat">{p.category}</span>
                    <span className="blog-dot" aria-hidden="true">
                      ·
                    </span>
                    <time dateTime={p.date}>{p.dateLabel}</time>
                  </div>
                  <h3 className="blog-card-title">{p.title}</h3>
                  <p className="blog-card-excerpt">{p.excerpt}</p>
                  <span className="blog-readmore">
                    Read article <span aria-hidden="true">&rarr;</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="cta-strip">
          <div className="cta-strip-inner">
            <h2 className="display-2">
              Ready for a real <em>strategy?</em>
            </h2>
            <p className="lead-2">
              Reading these helps. Working with one of our advisors helps more. Book a 30-minute
              consultation — we&apos;ll review the student&apos;s profile and outline exactly what
              it will take.
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
