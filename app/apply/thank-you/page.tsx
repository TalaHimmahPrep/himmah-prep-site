import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GuideCover } from "@/components/GuideCover";

export const metadata: Metadata = {
  title: "Thank you — Himmah Prep",
  description:
    "Thanks for requesting a consultation. A senior advisor will be in touch within one business day.",
  robots: { index: false, follow: false },
};

export default function ApplyThankYouPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero page-hero-tight">
          <div className="page-hero-inner">
            <p className="eyebrow">You&apos;re on the list</p>
            <h1 className="display">
              We&apos;ll be in <em>touch.</em>
            </h1>
            <p className="lead">
              A senior advisor will reach out within one business day to schedule your call.
            </p>
          </div>
        </section>

        <section className="shop-grid">
          <Link href="/shop/p/guide" className="product-card">
            <div className="product-cover">
              <GuideCover />
            </div>
            <div className="product-meta">
              <p className="eyebrow">In the meantime — students often start here</p>
              <h2 className="serif product-title">
                The U.S. Application <em>Guide.</em>
              </h2>
              <p className="muted">
                Everything our advisors wish every Gulf student knew before junior year — written
                down in 58 pages. Includes four full accepted essays from students admitted to
                Stanford, Harvard, Emory, and UIUC.
              </p>
              <div className="product-price-row">
                <p className="product-price">
                  <s>$49</s> <strong>$19</strong>
                </p>
                <span className="btn btn-primary">Get the guide &rarr;</span>
              </div>
            </div>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
