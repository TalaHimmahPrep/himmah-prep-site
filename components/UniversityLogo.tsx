import Image from "next/image";

export type UniversitySlug =
  | "harvard"
  | "stanford"
  | "yale"
  | "princeton"
  | "berkeley"
  | "cornell"
  | "duke"
  | "ucla";

/**
 * Renders the school's official wordmark from /public/logos/universities/{slug}.svg.
 *
 * NOTE: Drop the licensed SVG / approved wordmark into that folder before
 * production launch. A neutral typographic fallback ships in this repo so
 * the carousel still looks polished in the meantime.
 */
export function UniversityLogo({
  slug,
  label,
  height = 28,
}: {
  slug: UniversitySlug;
  label: string;
  height?: number;
}) {
  return (
    <Image
      src={`/logos/universities/${slug}.svg`}
      alt={label}
      width={height * 4}
      height={height}
      style={{ height, width: "auto" }}
      priority={false}
    />
  );
}
