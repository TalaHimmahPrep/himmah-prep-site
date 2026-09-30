import Link from "next/link";

export const metadata = { title: "Homepage designs — Himmah Prep", robots: { index: false } };

const DESIGNS = [
  {
    href: "/design/current",
    name: "Current live site",
    note: "What himmahprep.com looks like today, for comparison.",
  },
  {
    href: "/design/editorial",
    name: "Editorial",
    note: "In the direction of apexadmissions.org: numbered sections, color bands, arch photo, serif headlines.",
  },
  {
    href: "/design/quiet",
    name: "Quiet",
    note: "Single typeface, reading layout, one photo, hairlines only.",
  },
  {
    href: "/design/a",
    name: "A · Viewbook",
    note: "Dark and photographic, like an admissions brochure. Full-screen hero photo, roman-numeral chapters, ivory and black.",
  },
  {
    href: "/design/b",
    name: "B · Grid",
    note: "Swiss-style layout. Huge bold sans headline, visible rules, tables instead of cards, white with a maroon block.",
  },
  {
    href: "/design/c",
    name: "C · Collegiate",
    note: "Traditional university-department look. Centered masthead, double rules, serif body text, sidebar of facts.",
  },
];

export default function DesignIndex() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px", fontFamily: "system-ui, sans-serif", cursor: "auto" }}>
      <h1 style={{ fontSize: 28, margin: "0 0 8px" }}>Homepage designs</h1>
      <p style={{ color: "#666", margin: "0 0 32px" }}>
        Local preview only. Same wording on every version; only the layout and styling change.
      </p>
      <ol style={{ display: "grid", gap: 16, padding: 0, listStyle: "none", margin: 0 }}>
        {DESIGNS.map((d) => (
          <li key={d.href} style={{ border: "1px solid #ddd", borderRadius: 10, padding: "18px 20px" }}>
            <Link href={d.href} style={{ fontSize: 18, fontWeight: 600, color: "#8b1f2d", textDecoration: "none" }}>
              {d.name} →
            </Link>
            <p style={{ margin: "6px 0 0", color: "#555", fontSize: 14 }}>{d.note}</p>
          </li>
        ))}
      </ol>
    </main>
  );
}
