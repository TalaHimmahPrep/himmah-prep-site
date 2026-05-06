export type UniversitySlug =
  | "harvard"
  | "yale"
  | "princeton"
  | "columbia"
  | "penn"
  | "brown"
  | "dartmouth"
  | "cornell"
  | "mit"
  | "stanford"
  | "duke"
  | "johns-hopkins"
  | "northwestern"
  | "chicago"
  | "vanderbilt"
  | "rice"
  | "notre-dame"
  | "georgetown"
  | "berkeley"
  | "ucla"
  | "michigan"
  | "carnegie-mellon";

export type UniversityRef = {
  slug: UniversitySlug;
  label: string;
};

export const UNIVERSITIES: UniversityRef[] = [
  { slug: "harvard", label: "Harvard" },
  { slug: "yale", label: "Yale" },
  { slug: "princeton", label: "Princeton" },
  { slug: "columbia", label: "Columbia" },
  { slug: "penn", label: "Penn" },
  { slug: "brown", label: "Brown" },
  { slug: "dartmouth", label: "Dartmouth" },
  { slug: "cornell", label: "Cornell" },
  { slug: "mit", label: "MIT" },
  { slug: "stanford", label: "Stanford" },
  { slug: "duke", label: "Duke" },
  { slug: "johns-hopkins", label: "Johns Hopkins" },
  { slug: "northwestern", label: "Northwestern" },
  { slug: "chicago", label: "U. Chicago" },
  { slug: "vanderbilt", label: "Vanderbilt" },
  { slug: "rice", label: "Rice" },
  { slug: "notre-dame", label: "Notre Dame" },
  { slug: "georgetown", label: "Georgetown" },
  { slug: "berkeley", label: "UC Berkeley" },
  { slug: "ucla", label: "UCLA" },
  { slug: "michigan", label: "U. Michigan" },
  { slug: "carnegie-mellon", label: "Carnegie Mellon" },
];

export function UniversityLogo({
  slug,
  label,
  className = "uni-mark",
}: {
  slug: UniversitySlug;
  label: string;
  className?: string;
}) {
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={`/logos/universities/${slug}.svg`}
      alt={label}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}
