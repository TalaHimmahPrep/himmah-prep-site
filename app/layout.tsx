import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Cursor } from "@/components/Cursor";
import { ConsultPopup } from "@/components/ConsultPopup";
import { JsonLd, ORG_LD } from "@/components/JsonLd";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Himmah Prep — Ivy League College Counseling & Admissions Prep",
    template: "%s",
  },
  description:
    "All-inclusive college prep with 100% Ivy League advisors. Expert SAT/ACT prep, application strategy, and leadership coaching for Gulf students. 100% college acceptance track record. Free consultation available.",
  metadataBase: new URL("https://himmahprep.com"),
  applicationName: "Himmah Prep",
  authors: [{ name: "Himmah Prep" }],
  keywords: [
    "Ivy League college counseling",
    "college admissions consulting",
    "college admissions prep",
    "Gulf college admissions",
    "Saudi Arabia college counseling",
    "UAE college counseling",
    "SAT prep Gulf",
    "ACT prep Gulf",
    "Harvard admissions",
    "international student college applications",
  ],
  openGraph: {
    title: "Himmah Prep — Ivy League College Counseling & Admissions Prep",
    description:
      "All-inclusive college prep with 100% Ivy League advisors. SAT/ACT prep, application strategy, and leadership coaching for Gulf students. Free consultation available.",
    url: "https://himmahprep.com",
    siteName: "Himmah Prep",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himmah Prep — Ivy League College Counseling & Admissions Prep",
    description:
      "All-inclusive college prep with 100% Ivy League advisors. SAT/ACT prep, application strategy, and leadership coaching for Gulf students.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <JsonLd data={ORG_LD} />
        <Cursor />
        {children}
        <ConsultPopup />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
