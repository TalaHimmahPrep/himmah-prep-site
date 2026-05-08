import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { POSTS, POSTS_BY_SLUG } from "../posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS_BY_SLUG[slug];
  if (!post) return {};
  const url = `https://himmahprep.com/blog/${post.slug}`;
  const title = post.seoTitle ?? post.title;
  const description = post.seoDescription ?? post.excerpt;
  return {
    title: `${title} — Himmah Prep`,
    description,
    keywords: post.keywords,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: post.date,
      siteName: "Himmah Prep",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: { canonical: url },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS_BY_SLUG[slug];
  if (!post) notFound();

  const url = `https://himmahprep.com/blog/${post.slug}`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en-US",
    articleSection: post.category,
    wordCount: post.readMinutes * 250,
    keywords: post.keywords,
    author: { "@type": "Organization", name: "Himmah Prep", url: "https://himmahprep.com" },
    publisher: {
      "@type": "Organization",
      name: "Himmah Prep",
      logo: {
        "@type": "ImageObject",
        url: "https://himmahprep.com/logo.webp",
      },
    },
    mainEntityOfPage: url,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Himmah Prep", item: "https://himmahprep.com" },
      { "@type": "ListItem", position: 2, name: "Resources", item: "https://himmahprep.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const related = POSTS.filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      const aSame = a.category === post.category ? 0 : 1;
      const bSame = b.category === post.category ? 0 : 1;
      if (aSame !== bSame) return aSame - bSame;
      return a.date < b.date ? 1 : -1;
    })
    .slice(0, 3);

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={breadcrumbLd} />
      <Header />
      <main>
        <article>
          <header className="post-header">
            <div className="post-header-inner">
              <p className="post-back">
                <Link href="/blog">&larr; All resources</Link>
              </p>
              <p className="eyebrow">{post.category}</p>
              <h1 className="display post-title">{post.title}</h1>
              <p className="post-meta">
                <time dateTime={post.date}>{post.dateLabel}</time>
                <span className="blog-dot" aria-hidden="true">
                  ·
                </span>
                <span>{post.readMinutes} min read</span>
              </p>
            </div>
          </header>

          <section className="prose-section prose-narrow">
            <div className="prose post-body">{post.body}</div>
          </section>

          <section className="cta-strip">
            <div className="cta-strip-inner">
              <h2 className="display-2">
                Want to talk about <em>your student?</em>
              </h2>
              <p className="lead-2">
                A 30-minute consultation with one of our advisors. We&apos;ll review the
                student&apos;s profile and outline exactly what it will take to get them into a
                top US university.
              </p>
              <Link href="/apply" className="btn btn-primary">
                Apply for a free consultation
              </Link>
            </div>
          </section>
        </article>

        {related.length > 0 && (
          <section className="page-section page-section-tinted">
            <div className="section-head">
              <p className="eyebrow">Keep reading</p>
              <h2 className="display-2">
                More on <em>college admissions.</em>
              </h2>
            </div>
            <ul className="blog-grid blog-grid-related">
              {related.map((p) => (
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
        )}
      </main>
      <Footer />
    </>
  );
}
