import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GuideCover } from "@/components/GuideCover";

export const metadata: Metadata = {
  title: "Store — The U.S. Application Guide — Himmah Prep",
  description:
    "The U.S. Application Guide — a 58-page step-by-step roadmap to top US college admissions, with four full accepted essays. Written by Harvard and UPenn graduates. $19 (regularly $49).",
  openGraph: {
    title: "Store — The U.S. Application Guide — Himmah Prep",
    description:
      "A 58-page step-by-step roadmap to top US college admissions, with four full accepted essays. Written by Harvard and UPenn graduates.",
    url: "https://himmahprep.com/shop",
  },
};

export default function ShopPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero page-hero-tight">
          <div className="page-hero-inner">
            <p className="eyebrow">Store</p>
            <h1 className="display">
              How students get into <em>top US universities.</em>
            </h1>
            <p className="lead">
              Everything our advisors wish every Gulf student knew before junior year — written
              down, in 58 pages.
            </p>
          </div>
        </section>

        <section className="shop-grid">
          <Link href="/shop/p/guide" className="product-card">
            <div className="product-cover">
              <GuideCover />
            </div>
            <div className="product-meta">
              <p className="eyebrow">Digital · 58 pages · 2026 edition · Instant download</p>
              <h2 className="serif product-title">
                The U.S. Application <em>Guide.</em>
              </h2>
              <p className="muted">
                A step-by-step roadmap to the US college admissions process — without confusion,
                guesswork, or overwhelm. Includes four full accepted essays from students
                admitted to Stanford, Harvard, Emory, and UIUC.
              </p>
              <div className="product-price-row">
                <p className="product-price">
                  <s>$49</s> <strong>$19</strong>
                </p>
                <span className="btn btn-primary">View details &rarr;</span>
              </div>
            </div>
          </Link>
        </section>

        <section className="shop-trust">
          <p className="muted-sm">
            Students who have read this guide have been admitted to
          </p>
          <ul className="logo-list">
            <li>Harvard</li>
            <li>Stanford</li>
            <li>Yale</li>
            <li>Princeton</li>
            <li>MIT</li>
            <li>Cornell</li>
            <li>UC&nbsp;Berkeley</li>
            <li>Duke</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
