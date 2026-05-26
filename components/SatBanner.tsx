"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HIDDEN_PATHS = new Set(["/enroll/alsubaie", "/enroll/alsubaie/welcome"]);

export function SatBanner() {
  const pathname = usePathname();
  if (HIDDEN_PATHS.has(pathname)) return null;

  return (
    <Link href="/sat-bootcamp" className="sat-banner">
      <span className="sat-banner-text">
        <strong>SAT Summer Bootcamp</strong> — 15 seats only. Starts June 26.
      </span>
      <span className="sat-banner-cta">Reserve your spot &rarr;</span>
    </Link>
  );
}
