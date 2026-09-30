import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Cursor } from "@/components/Cursor";
import { ConsultPopup } from "@/components/ConsultPopup";
import { JsonLd, ORG_LD } from "@/components/JsonLd";
import { MetaPixel } from "@/components/MetaPixel";
import { LookSwitcher } from "@/components/LookSwitcher";
import "./globals.css";
import "./theme.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  axes: ["opsz"],
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
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
    default: "Himmah Prep | College Counseling & SAT Prep for Gulf Students",
    template: "%s",
  },
  description:
    "Ivy League college counseling and 1-on-1 SAT prep for students in Saudi Arabia, the UAE, Qatar, Kuwait, Bahrain and Oman. Riyadh, Jeddah, Dubai, Doha and online. 100% acceptance track record. Free consultation.",
  metadataBase: new URL("https://www.himmahprep.com"),
  alternates: { canonical: "./" },
  applicationName: "Himmah Prep",
  authors: [{ name: "Himmah Prep" }],
  keywords: [
    "Himmah Prep",
    "college counseling Saudi Arabia",
    "college admissions consultant Riyadh",
    "college admissions consultant Jeddah",
    "SAT prep Saudi Arabia",
    "SAT prep Jeddah",
    "SAT prep Riyadh",
    "SAT tutor Dubai",
    "Ivy League college counseling Gulf",
    "US university admissions GCC students",
  ],
  openGraph: {
    title: "Himmah Prep | College Counseling & SAT Prep for Gulf Students",
    description:
      "Ivy League college counseling and 1-on-1 SAT prep for students in Saudi Arabia and across the Gulf. 100% acceptance track record. Free consultation.",
    url: "https://www.himmahprep.com",
    siteName: "Himmah Prep",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himmah Prep | College Counseling & SAT Prep for Gulf Students",
    description:
      "Ivy League college counseling and 1-on-1 SAT prep for students in Saudi Arabia and across the Gulf. 100% acceptance track record.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${sourceSerif.variable}`}
    >
      <body>
        <JsonLd data={ORG_LD} />
        <Cursor />
        {children}
        <ConsultPopup />
        <Analytics />
        <SpeedInsights />
        <MetaPixel />
        {process.env.NODE_ENV === "development" && <LookSwitcher />}
      </body>
    </html>
  );
}
