"use client";

import { useState } from "react";

type Variant = {
  slug: string;
  name: string;
  hook: string;
  why: string;
};

const SAT_VARIANTS: Variant[] = [
  {
    slug: "sat-hero",
    name: "Hero echo",
    hook: "Ace the SAT this summer.",
    why: "Brand-safe. Exact echo of the landing-page hero. Lowest risk.",
  },
  {
    slug: "sat-pick",
    name: "Pick the seat",
    hook: "Pick the seat before someone else does.",
    why: "Decision pressure. Echoes the page's closing CTA strip.",
  },
  {
    slug: "sat-score",
    name: "Score jump",
    hook: "1300 → 1500",
    why: "Outcome-led. Mirrors the existing Outcomes ad pattern. Big numbers are scroll-stoppers.",
  },
  {
    slug: "sat-alumni",
    name: "Alumni marquee",
    hook: "Score the SAT to match.",
    why: "Uses the university logos already in the project. Implicit social proof.",
  },
  {
    slug: "sat-stop",
    name: "Stop self-studying",
    hook: "Stop self-studying. Start scoring.",
    why: "Full-bleed crimson. Mood-driven. Stands out in a cream-toned feed.",
  },
  {
    slug: "sat-plan",
    name: "8-week plan",
    hook: "From diagnostic, to test day.",
    why: "Information-dense. Good for carousel first frame or for a more-considered click.",
  },
  {
    slug: "sat-fifteen",
    name: "Big 15",
    hook: "Only 15 seats.",
    why: "Typographic minimal. One-glance scarcity hook.",
  },
  {
    slug: "sat-price",
    name: "Price",
    hook: "$800 = $50/session",
    why: "Anchors the value: big crimson price, breaks down per-session math, schedule details below.",
  },
];

const BRAND_VARIANTS: Variant[] = [
  {
    slug: "outcomes",
    name: "Outcomes",
    hook: "Riyadh → Stanford…",
    why: "Existing brand ad — class acceptances.",
  },
  {
    slug: "insider",
    name: "Insider",
    hook: "An honest read.",
    why: "Existing brand ad — admissions insider.",
  },
  {
    slug: "parents",
    name: "Parents",
    hook: "Two years too late.",
    why: "Existing brand ad — for Gulf parents.",
  },
];

const CONSULT_VARIANTS: Variant[] = [
  {
    slug: "consult-roadmap",
    name: "Roadmap",
    hook: "Get your child's personalized admissions roadmap.",
    why: "Value-add framing. Promises a concrete deliverable from the call.",
  },
  {
    slug: "consult-where",
    name: "Where will they apply",
    hook: "Where will your child apply?",
    why: "Conversational question hook. Invites curiosity. Soft CTA: 'Let's talk.'",
  },
  {
    slug: "consult-honest",
    name: "Honest read",
    hook: "We'll tell you exactly where your child stands.",
    why: "Full-bleed crimson. Trust-led — promises real strategy, no sales pitch.",
  },
  {
    slug: "consult-now",
    name: "Start now",
    hook: "Start now.",
    why: "Typographic urgency. For parents of 9th–11th graders who think they have time.",
  },
];

function VariantCard({ v, bust }: { v: Variant; bust: number }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        background: "#fff",
        border: "1px solid #e5dbc7",
        borderRadius: 14,
        padding: 16,
      }}
    >
      <a
        href={`/api/ads/${v.slug}/square?t=${bust}`}
        target="_blank"
        rel="noreferrer"
        style={{ display: "block", lineHeight: 0 }}
      >
        <img
          src={`/api/ads/${v.slug}/square?t=${bust}`}
          alt={v.name}
          width={480}
          height={480}
          style={{ width: "100%", height: "auto", borderRadius: 8, display: "block" }}
        />
      </a>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
          <strong style={{ fontSize: 16, color: "#1a1414" }}>{v.name}</strong>
          <code style={{ fontSize: 11, color: "#9c8c82" }}>{v.slug}</code>
        </div>
        <p style={{ fontSize: 14, color: "#1a1414", margin: 0 }}>
          <em>{v.hook}</em>
        </p>
        <p style={{ fontSize: 12.5, color: "#6f5e54", margin: 0, lineHeight: 1.4 }}>{v.why}</p>
        <div style={{ display: "flex", gap: 10, marginTop: 6, fontSize: 11.5 }}>
          <a href={`/api/ads/${v.slug}/square?t=${bust}`} target="_blank" rel="noreferrer" style={{ color: "#8b1f2d" }}>
            square 1080
          </a>
          <a href={`/api/ads/${v.slug}/portrait?t=${bust}`} target="_blank" rel="noreferrer" style={{ color: "#8b1f2d" }}>
            portrait 1080×1350
          </a>
          <a href={`/api/ads/${v.slug}/story?t=${bust}`} target="_blank" rel="noreferrer" style={{ color: "#8b1f2d" }}>
            story 1080×1920
          </a>
        </div>
      </div>
    </div>
  );
}

export default function AdsPreviewPage() {
  const [bust, setBust] = useState(() => Date.now());
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px 32px",
        background: "#fbf7ec",
        color: "#1a1414",
        fontFamily: "var(--font-instrument-sans), system-ui, sans-serif",
      }}
    >
      <header
        style={{
          maxWidth: 1320,
          margin: "0 auto 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div>
          <p style={{ fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase", color: "#6f5e54", margin: 0 }}>
            Internal · localhost preview
          </p>
          <h1 style={{ fontSize: 28, margin: "4px 0 0", fontFamily: "var(--font-instrument-serif), serif" }}>
            Ad creative gallery
          </h1>
          <p style={{ fontSize: 14, color: "#6f5e54", margin: "6px 0 0", maxWidth: 640, lineHeight: 1.5 }}>
            Live previews. Edit copy or layout in
            <code style={{ margin: "0 4px", fontSize: 12.5 }}>app/api/ads/[concept]/[size]/route.tsx</code>
            then hit Refresh to bust the cache.
          </p>
        </div>
        <button
          onClick={() => setBust(Date.now())}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#8b1f2d",
            color: "#fff",
            border: 0,
            borderRadius: 999,
            padding: "12px 22px",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Refresh all renders
        </button>
      </header>

      <section style={{ maxWidth: 1320, margin: "0 auto" }}>
        <h2 style={{ fontSize: 18, margin: "8px 0 14px", fontFamily: "var(--font-instrument-serif), serif" }}>
          SAT bootcamp — 8 creative variants
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 18,
          }}
        >
          {SAT_VARIANTS.map((v) => (
            <VariantCard key={v.slug} v={v} bust={bust} />
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1320, margin: "36px auto 0" }}>
        <h2 style={{ fontSize: 18, margin: "8px 0 14px", fontFamily: "var(--font-instrument-serif), serif" }}>
          Initial consultation — 4 lead-gen variants
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 18,
          }}
        >
          {CONSULT_VARIANTS.map((v) => (
            <VariantCard key={v.slug} v={v} bust={bust} />
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1320, margin: "36px auto 0" }}>
        <h2 style={{ fontSize: 18, margin: "8px 0 14px", fontFamily: "var(--font-instrument-serif), serif" }}>
          Existing brand ads (for reference)
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 18,
          }}
        >
          {BRAND_VARIANTS.map((v) => (
            <VariantCard key={v.slug} v={v} bust={bust} />
          ))}
        </div>
      </section>
    </main>
  );
}
