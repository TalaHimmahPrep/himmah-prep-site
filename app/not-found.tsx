import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="page-hero-inner">
            <p className="eyebrow">Page not found</p>
            <h1 className="display">
              That page <em>isn&apos;t here.</em>
            </h1>
            <p className="lead">
              The link may be old, or the address may have a typo. The pages below are the
              most useful places to start.
            </p>
            <div className="hero-ctas">
              <Link href="/" className="btn btn-primary">
                Back to the homepage
              </Link>
              <Link href="/apply" className="btn btn-ghost">
                Book a free consultation
              </Link>
            </div>
          </div>
        </section>
        <section className="page-section">
          <ul className="bullets two-col">
            <li><Link href="/about">About Himmah Prep</Link></li>
            <li><Link href="/results">Results</Link></li>
            <li><Link href="/standardized-test-tutors">Test prep</Link></li>
            <li><Link href="/sat-prep">SAT prep by city</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/shop">Store</Link></li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
