import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import { Cursor } from "@/components/Cursor";
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
    default: "Himmah Prep — Guaranteed to help students stand out",
    template: "%s",
  },
  description:
    "Premium college admissions, test prep, leadership coaching, and summer planning from advisors who actually went to the Ivy League. 100% college acceptance track record.",
  metadataBase: new URL("https://himmahprep.com"),
  applicationName: "Himmah Prep",
  authors: [{ name: "Himmah Prep" }],
  keywords: [
    "college admissions consulting",
    "Ivy League consulting",
    "Gulf college admissions",
    "Saudi Arabia college counseling",
    "UAE college counseling",
    "SAT prep Gulf",
    "Harvard admissions",
    "international student college applications",
  ],
  openGraph: {
    title: "Himmah Prep — Guaranteed to help students stand out",
    description:
      "Premium college admissions, test prep, and leadership coaching for Gulf students. Founded by Harvard and UPenn graduates.",
    url: "https://himmahprep.com",
    siteName: "Himmah Prep",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himmah Prep — Guaranteed to help students stand out",
    description:
      "Premium college admissions, test prep, and leadership coaching for Gulf students.",
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
    icon: "/logo.webp",
    apple: "/logo.webp",
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
      </body>
    </html>
  );
}
