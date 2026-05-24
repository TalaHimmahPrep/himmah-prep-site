import Link from "next/link";

export function SatBanner() {
  return (
    <Link href="/sat-bootcamp" className="sat-banner">
      <span className="sat-banner-text">
        <strong>SAT Summer Bootcamp</strong> — 15 seats only. Starts June 26.
      </span>
      <span className="sat-banner-cta">Reserve your spot &rarr;</span>
    </Link>
  );
}
