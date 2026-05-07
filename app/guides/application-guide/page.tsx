import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PDF_URL = "/guides/himmah-prep-application-guide.pdf";
const PDF_PASSWORD = "Tiger!482#Galaxy";

export const metadata: Metadata = {
  title: "Your U.S. Application Guide — Himmah Prep",
  robots: { index: false, follow: false },
};

export default function GuideDownloadPage() {
  return (
    <>
      <Header />
      <main>
        <section className="product-hero">
          <div className="prose-narrow">
            <p className="eyebrow">Order confirmed · Instant download</p>
            <h1 className="display">
              Your <em>Guide</em> is ready.
            </h1>
            <p className="lead">
              Thank you for ordering The U.S. Application Guide. Click the button
              below to download the PDF, then enter the password to open it.
            </p>

            <div className="product-buy" style={{ marginTop: "32px" }}>
              <a
                href={PDF_URL}
                download
                className="btn btn-primary"
              >
                Download the Guide
              </a>
            </div>

            <div
              style={{
                marginTop: "32px",
                padding: "20px 24px",
                border: "1px solid #e8e6e0",
                borderRadius: "8px",
                background: "#faf9f6",
              }}
            >
              <p
                className="eyebrow"
                style={{ margin: "0 0 8px 0" }}
              >
                Password
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily:
                    "'SF Mono', Menlo, Consolas, monospace",
                  fontSize: "18px",
                  letterSpacing: "0.5px",
                }}
              >
                {PDF_PASSWORD}
              </p>
            </div>

            <ol
              style={{
                marginTop: "32px",
                paddingLeft: "20px",
                fontSize: "16px",
                lineHeight: 1.7,
              }}
            >
              <li style={{ marginBottom: "8px" }}>
                Click <strong>Download the Guide</strong> above to save the PDF.
              </li>
              <li style={{ marginBottom: "8px" }}>
                Open the file — when prompted for a password, paste{" "}
                <strong>{PDF_PASSWORD}</strong>.
              </li>
              <li>
                Save the file somewhere you'll find it — you'll reference it
                through the whole application year.
              </li>
            </ol>

            <p
              style={{
                marginTop: "40px",
                fontSize: "14px",
                color: "#7a7a7a",
              }}
            >
              Trouble opening the file or entering the password?{" "}
              <a href="mailto:connect@himmahprep.com">
                Email us at connect@himmahprep.com
              </a>{" "}
              and we'll help right away.
            </p>
          </div>
        </section>

        <section className="prose-section prose-narrow">
          <div className="prose">
            <h2 className="display-2">
              Need help <em>applying?</em>
            </h2>
            <p>
              The Guide is the same playbook our 1-on-1 advisors use with
              families. If you'd like an Ivy League advisor walking you through
              your applications personally, book a free consultation.
            </p>
            <p>
              <Link href="/apply" className="btn btn-primary">
                Book a free consultation
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
