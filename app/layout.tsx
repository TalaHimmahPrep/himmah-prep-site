import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import { Cursor } from "@/components/Cursor";
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
  title: "Himmah Prep — Guaranteed to help students stand out",
  description:
    "Premium college admissions, test prep, leadership coaching, and summer planning from advisors who actually went to the Ivy League. 100% college acceptance track record.",
  metadataBase: new URL("https://himmahprep.com"),
  openGraph: {
    title: "Himmah Prep — Guaranteed to help students stand out",
    description:
      "Premium college admissions, test prep, and leadership coaching for Gulf students.",
    url: "https://himmahprep.com",
    siteName: "Himmah Prep",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.webp",
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
        <Cursor />
        {children}
      </body>
    </html>
  );
}
