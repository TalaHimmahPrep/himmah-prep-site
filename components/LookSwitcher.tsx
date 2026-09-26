"use client";

import { useEffect, useState } from "react";

/**
 * DEV-ONLY look lab. Rendered from app/layout.tsx only when
 * NODE_ENV === "development", so none of this reaches the live site.
 * Each look is a block of overrides scoped to html[data-look="x"].
 */

const LOOKS = [
  { id: "", name: "Current" },
  { id: "a", name: "A · Prospectus" },
  { id: "b", name: "B · Grotesk" },
  { id: "c", name: "C · Maroon" },
] as const;

const FONTS =
  "https://fonts.googleapis.com/css2?" +
  "family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400" +
  "&family=Libre+Franklin:wght@400;500;600;700" +
  "&family=Archivo:wdth,wght@87..100,400..800" +
  "&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;1,6..96,400" +
  "&family=Work+Sans:wght@400;500;600" +
  "&display=swap";

const CSS = `
/* ---------- shared: strip the soft/generated surface from every look ---------- */
html[data-look] .hero,
html[data-look] .page-hero,
html[data-look] .enroll-page { background: none; }
html[data-look] :is(.approach-card,.cta-inner,.quote-feature,.apply-form-card,.product-card,
  .schedule-card-final,.blog-feature,.post-header,.popup-card) { background-image: none; }
html[data-look] :is(.card,.quote,.hero-card,.approach-card,.cta-inner,.carousel-arrow,
  .apply-form-card,.product-card,.blog-feature,.popup-card) { box-shadow: none; }
html[data-look] .card:hover { transform: none; box-shadow: none; }
html[data-look] .hero-card { transform: none; }
@media (min-width: 981px) { html[data-look] .hero { grid-template-columns: minmax(0, 1.35fr) minmax(0, 0.65fr); gap: 48px; } }
html[data-look] .hero-card-head .dot { display: none; }
html[data-look] .hero-card-label { margin-left: 0; }
html[data-look] .progress span { background: var(--color-primary); }
html[data-look] .nav { backdrop-filter: none; -webkit-backdrop-filter: none; }
html[data-look] .book { transform: none; }
/* native cursor back */
html[data-look] .cursor-dot, html[data-look] .cursor-ring { display: none; }
html[data-look] body, html[data-look] body * { cursor: auto !important; }
html[data-look] body :is(a, a *, button, button *, .btn, .btn *, summary, summary *, label, select) { cursor: pointer !important; }
html[data-look] body :is(input, textarea) { cursor: text !important; }

/* =====================================================================
   A · PROSPECTUS — white paper, one color, newspaper serif, square, ruled
   ===================================================================== */
html[data-look="a"] {
  --color-bg: #ffffff;
  --color-surface: #ffffff;
  --color-surface-2: #f5f3ef;
  --color-ink: #141210;
  --color-muted: #55504a;
  --color-muted-2: #8a847c;
  --color-line: #d9d5ce;
  --color-line-2: #e8e5df;
  --color-accent: #8b1f2d;
  --color-accent-2: #8b1f2d;
  --font-serif: "Newsreader", Georgia, serif;
  --font-sans: "Libre Franklin", "Helvetica Neue", Arial, sans-serif;
  --radius-card: 0px;
  --radius-md: 0px;
  --radius-sm: 0px;
}
html[data-look="a"] .nav { background: #fff; border-bottom: 1px solid var(--color-ink); }
html[data-look="a"] .display { font-weight: 500; letter-spacing: -0.025em; line-height: 1.0; font-size: clamp(42px, 8vw, 76px); }
html[data-look="a"] .display-2 { font-weight: 500; letter-spacing: -0.02em; }
html[data-look="a"] :is(.display,.display-2,.hero-card-body h3,.quote blockquote) em { color: inherit; font-style: italic; }
html[data-look="a"] .eyebrow { text-transform: none; letter-spacing: 0; font-size: 14px; font-weight: 600; color: var(--color-primary); margin-bottom: 14px; }
html[data-look="a"] .btn { border-radius: 0; padding: 14px 24px; }
html[data-look="a"] .btn-ghost { border-color: var(--color-ink); }
html[data-look="a"] .hero { padding-top: 72px; }
html[data-look="a"] .hero-trust { border-top: 1px solid var(--color-ink); max-width: none; }
html[data-look="a"] .trust-num { color: var(--color-ink); font-size: 44px; font-weight: 500; }
html[data-look="a"] .trust-num span { color: var(--color-ink); }
html[data-look="a"] .hero-card { border: 1px solid var(--color-ink); }
html[data-look="a"] .hero-card-head { background: var(--color-ink); border: 0; }
html[data-look="a"] .hero-card-label { color: #fff; }
html[data-look="a"] .kanban li { background: #fff; border-width: 0 0 1px; padding: 12px 0; }
html[data-look="a"] .chip { border-radius: 0; background: none !important; border: 0; padding: 0; min-width: 84px; }
html[data-look="a"] .logo-bar { background: #fff; border-color: var(--color-ink); }
html[data-look="a"] .section-head { text-align: left; margin-left: 0; max-width: 820px; }
html[data-look="a"] .section-head :is(.lead,.lead-2) { margin-left: 0; max-width: 620px; }
html[data-look="a"] .results .section-head { max-width: var(--max-w); margin: 0 auto 32px; }
/* services: four cards -> one ruled table-like row */
html[data-look="a"] .grid-4 { gap: 0; border-top: 1px solid var(--color-ink); }
html[data-look="a"] .card { border: 0; border-right: 1px solid var(--color-line); padding: 26px 24px 30px 0; margin-right: 24px; }
html[data-look="a"] .grid-4 .card:last-child { border-right: 0; margin-right: 0; }
html[data-look="a"] .card-num { font-style: normal; font-family: var(--font-sans); font-weight: 600; font-size: 12px; color: var(--color-muted-2); }
html[data-look="a"] .card h3 { font-size: 25px; font-weight: 500; letter-spacing: -0.01em; }
html[data-look="a"] .bullets li { padding-left: 16px; }
html[data-look="a"] .bullets li::before { border-radius: 0; width: 8px; height: 1px; top: 11px; left: 0; background: var(--color-ink); }
html[data-look="a"] .approach-card { border: 0; border-top: 1px solid var(--color-ink); border-radius: 0; padding: 56px 0 0; }
html[data-look="a"] .approach-grid { border-top-color: var(--color-line); }
html[data-look="a"] .approach-num { color: var(--color-muted-2); font-size: 15px; font-family: var(--font-sans); font-weight: 600; }
html[data-look="a"] .approach-num em { font-style: normal; }
html[data-look="a"] .quote { border: 0; border-top: 1px solid var(--color-ink); padding: 22px 8px 24px 0; }
html[data-look="a"] .quote blockquote::before { display: none; }
html[data-look="a"] .quote blockquote { font-size: 21px; }
html[data-look="a"] .carousel-arrow { border-radius: 0; border-color: var(--color-ink); color: var(--color-ink); }
html[data-look="a"] .guide { background: var(--color-surface-2); border-color: var(--color-ink); }
html[data-look="a"] .book-cover { border-radius: 0; background: var(--color-primary); box-shadow: 14px 14px 0 rgba(20,18,16,0.12); }
html[data-look="a"] .cta-inner { border: 1px solid var(--color-ink); border-radius: 0; text-align: left; }
html[data-look="a"] .cta-inner :is(.lead,.lead-2) { margin-left: 0; }
html[data-look="a"] .cta-form button { justify-self: start; }
html[data-look="a"] .cta-form :is(input,select) { background-color: #fff; border-color: var(--color-muted-2); }
html[data-look="a"] .footer { background: #141210; }

/* =====================================================================
   B · GROTESK — no serif at all. Big tight sans, cool grey paper, maroon
   ===================================================================== */
html[data-look="b"] {
  --color-bg: #f2f1ee;
  --color-surface: #ffffff;
  --color-surface-2: #e9e7e2;
  --color-ink: #101010;
  --color-muted: #4d4b48;
  --color-muted-2: #7c7974;
  --color-line: #cfccc5;
  --color-line-2: #dedbd5;
  --color-accent: #8b1f2d;
  --color-accent-2: #8b1f2d;
  --font-serif: "Archivo", "Helvetica Neue", Arial, sans-serif;
  --font-sans: "Archivo", "Helvetica Neue", Arial, sans-serif;
  --radius-card: 10px;
  --radius-md: 8px;
  --radius-sm: 4px;
}
html[data-look="b"] .nav { background: var(--color-bg); border-bottom: 0; }
html[data-look="b"] .display { font-weight: 700; font-stretch: 92%; letter-spacing: -0.035em; line-height: 0.96; font-size: clamp(44px, 8.2vw, 80px); }
html[data-look="b"] .display-2 { font-weight: 720; font-stretch: 94%; letter-spacing: -0.035em; line-height: 1.02; }
html[data-look="b"] :is(.display,.display-2,.hero-card-body h3,.quote blockquote,.approach-num) em { font-style: normal; color: var(--color-primary); }
html[data-look="b"] .eyebrow { letter-spacing: 0.02em; font-size: 12px; font-weight: 700; color: var(--color-ink); }
html[data-look="b"] .eyebrow::before { content: ""; display: inline-block; width: 8px; height: 8px; background: var(--color-primary); margin-right: 8px; }
html[data-look="b"] .lead { color: var(--color-ink); font-size: 19px; }
html[data-look="b"] .btn { border-radius: 8px; font-weight: 700; padding: 15px 24px; }
html[data-look="b"] .btn-primary { background: var(--color-ink); }
html[data-look="b"] .btn-primary:hover { background: var(--color-primary); }
html[data-look="b"] .btn-ghost { border: 1.5px solid var(--color-ink); }
html[data-look="b"] .hero-trust { border-top: 2px solid var(--color-ink); max-width: none; }
html[data-look="b"] .trust-num { font-weight: 750; letter-spacing: -0.04em; font-size: 46px; color: var(--color-ink); }
html[data-look="b"] .trust-num span { color: var(--color-primary); font-size: 26px; }
html[data-look="b"] .trust-divider { display: none; }
html[data-look="b"] .hero-card { border: 1.5px solid var(--color-ink); }
html[data-look="b"] .hero-card-head { background: #fff; border-bottom: 1.5px solid var(--color-ink); }
html[data-look="b"] .hero-card-body h3 { font-weight: 720; letter-spacing: -0.03em; }
html[data-look="b"] .chip { border-radius: 4px; }
html[data-look="b"] .logo-bar { background: #fff; border: 0; }
html[data-look="b"] .section-head { text-align: left; margin-left: 0; max-width: 900px; }
html[data-look="b"] .section-head :is(.lead,.lead-2) { margin-left: 0; max-width: 620px; }
html[data-look="b"] .results .section-head { max-width: var(--max-w); margin: 0 auto 32px; }
html[data-look="b"] .card { border: 0; background: #fff; padding: 26px 24px 28px; }
html[data-look="b"] .grid-4 { gap: 10px; }
html[data-look="b"] .card-num { font-style: normal; font-weight: 750; font-size: 13px; color: var(--color-primary); }
html[data-look="b"] .card h3 { font-weight: 720; letter-spacing: -0.025em; font-size: 21px; }
html[data-look="b"] .bullets li::before { border-radius: 0; background: var(--color-ink); width: 5px; height: 5px; }
html[data-look="b"] .approach-card { background: var(--color-ink); border: 0; border-radius: 14px; color: #fff; }
html[data-look="b"] .approach-card :is(.lead-2,.muted) { color: #b9b6b0; }
html[data-look="b"] .approach-card .eyebrow { color: #fff; }
html[data-look="b"] .approach-card .hl { color: #fff; text-decoration: underline; text-underline-offset: 3px; }
html[data-look="b"] .approach-card .display-2 em { color: #e58b97; }
html[data-look="b"] .approach-grid { border-top-color: #3a3a3a; }
html[data-look="b"] .approach-num { font-size: 15px; font-weight: 750; }
html[data-look="b"] .approach-num em { color: #e58b97; }
html[data-look="b"] .approach-grid h4 { font-weight: 720; letter-spacing: -0.02em; }
html[data-look="b"] .quote { border: 0; }
html[data-look="b"] .quote blockquote { font-size: 18px; font-weight: 500; letter-spacing: -0.01em; line-height: 1.42; }
html[data-look="b"] .quote blockquote::before { display: none; }
html[data-look="b"] .carousel-arrow { border-radius: 8px; border: 1.5px solid var(--color-ink); color: var(--color-ink); }
html[data-look="b"] .guide { background: #fff; border: 0; }
html[data-look="b"] .book-cover { border-radius: 4px; background: var(--color-primary); box-shadow: none; }
html[data-look="b"] .book-title { font-weight: 720; letter-spacing: -0.03em; }
html[data-look="b"] .book-title em { font-style: normal; color: #fff; }
html[data-look="b"] .cta-inner { border: 0; border-radius: 14px; text-align: left; }
html[data-look="b"] .cta-inner :is(.lead,.lead-2) { margin-left: 0; }
html[data-look="b"] .cta-form button { justify-self: start; }
html[data-look="b"] .footer { background: #101010; }

/* =====================================================================
   C · MAROON — the brand color carries the page. High-contrast Bodoni
   ===================================================================== */
html[data-look="c"] {
  --color-bg: #faf8f4;
  --color-surface: #ffffff;
  --color-surface-2: #f1ede6;
  --color-ink: #1d1214;
  --color-muted: #5e5254;
  --color-line: #ddd5cb;
  --color-line-2: #e9e3da;
  --color-primary: #6b1422;
  --color-primary-2: #82202f;
  --color-primary-deep: #4d0d18;
  --color-accent: #b8965a;
  --color-accent-2: #9a7a40;
  --font-serif: "Bodoni Moda", "Didot", Georgia, serif;
  --font-sans: "Work Sans", "Helvetica Neue", Arial, sans-serif;
  --radius-card: 2px;
  --radius-md: 2px;
  --radius-sm: 2px;
}
html[data-look="c"] .nav { background: var(--color-primary); border-bottom: 1px solid rgba(255,255,255,0.14); }
html[data-look="c"] .nav .brand-logo { filter: brightness(0) invert(1); }
html[data-look="c"] .nav-links { color: rgba(255,255,255,0.78); }
html[data-look="c"] .nav-links a:hover, html[data-look="c"] .nav-portal { color: #fff !important; }
html[data-look="c"] .nav .btn-primary { background: #faf8f4; color: var(--color-primary); }
html[data-look="c"] .display { letter-spacing: -0.02em; line-height: 1.04; font-size: clamp(40px, 7.4vw, 70px); }
html[data-look="c"] .display-2 { letter-spacing: -0.015em; }
html[data-look="c"] .eyebrow { letter-spacing: 0.22em; font-size: 10.5px; color: var(--color-accent-2); }
html[data-look="c"] .btn { border-radius: 0; text-transform: uppercase; letter-spacing: 0.12em; font-size: 12px; padding: 16px 26px; }
/* full-bleed maroon hero */
html[data-look="c"] .hero { background: var(--color-primary); box-shadow: 0 0 0 100vmax var(--color-primary); clip-path: inset(0 -100vmax); align-items: center; padding-bottom: 84px; }
html[data-look="c"] .hero .eyebrow { color: var(--color-accent); }
html[data-look="c"] .hero .display { color: #faf8f4; }
html[data-look="c"] .hero .display em { color: var(--color-accent); }
html[data-look="c"] .hero .lead { color: rgba(250,248,244,0.78); }
html[data-look="c"] .hero .btn-primary { background: #faf8f4; color: var(--color-primary); }
html[data-look="c"] .hero .btn-ghost { color: #faf8f4; border-color: rgba(250,248,244,0.4); }
html[data-look="c"] .hero-trust { border-top-color: rgba(250,248,244,0.2); }
html[data-look="c"] .trust-num { color: #faf8f4; font-size: 42px; }
html[data-look="c"] .trust-label { color: rgba(250,248,244,0.7); }
html[data-look="c"] .trust-divider { background: rgba(250,248,244,0.2); }
html[data-look="c"] .hero-card { border: 0; }
html[data-look="c"] .hero-card-head { background: var(--color-surface-2); }
html[data-look="c"] .chip { border-radius: 0; }
html[data-look="c"] .logo-bar { background: #fff; }
html[data-look="c"] .card { border-width: 1px 0 0; border-top: 2px solid var(--color-primary); background: transparent; padding: 24px 4px 28px; }
html[data-look="c"] .grid-4 { gap: 32px; }
html[data-look="c"] .card-num { color: var(--color-accent-2); font-size: 18px; }
html[data-look="c"] .card h3 { font-size: 24px; font-weight: 500; }
html[data-look="c"] .approach-grid h4 { font-weight: 500; }
html[data-look="c"] .quote blockquote { font-family: var(--font-sans); font-size: 16px; line-height: 1.6; }
html[data-look="c"] .bullets li::before { border-radius: 0; transform: rotate(45deg); width: 5px; height: 5px; }
html[data-look="c"] .approach { padding: 0 0 110px; }
html[data-look="c"] .approach-card { max-width: none; border: 0; border-radius: 0; background: var(--color-surface-2); padding: 90px max(28px, calc((100vw - var(--max-w)) / 2 + 28px)); }
html[data-look="c"] .quote { border-color: var(--color-line); }
html[data-look="c"] .quote-feature { background: var(--color-primary); border-color: var(--color-primary); }
html[data-look="c"] .quote-feature blockquote, html[data-look="c"] .quote-feature figcaption strong { color: #faf8f4; }
html[data-look="c"] .quote-feature figcaption span { color: rgba(250,248,244,0.7); }
html[data-look="c"] .quote-feature :is(.uni-logo, figcaption) { border-color: rgba(250,248,244,0.2); }
html[data-look="c"] .carousel-arrow { border-radius: 0; }
html[data-look="c"] .book-cover { border-radius: 2px; background: var(--color-primary); }
html[data-look="c"] .cta { background: var(--color-primary); }
html[data-look="c"] .cta-inner { border: 0; border-radius: 0; }

/* ---------- the switcher itself ---------- */
.look-switch { position: fixed; left: 16px; bottom: 16px; z-index: 10000; display: flex; gap: 2px; padding: 4px;
  background: #111; border-radius: 8px; font: 600 12px/1 -apple-system, "Helvetica Neue", Arial, sans-serif; }
.look-switch button { all: unset; padding: 9px 12px; border-radius: 5px; color: #bbb; cursor: pointer !important; }
.look-switch button[aria-pressed="true"] { background: #fff; color: #111; }
`;

export function LookSwitcher() {
  const [look, setLook] = useState("");

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("look");
    let saved = "";
    try {
      saved = window.localStorage.getItem("hp-look") ?? "";
    } catch {}
    setLook(fromUrl ?? saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (look) root.setAttribute("data-look", look);
    else root.removeAttribute("data-look");
    try {
      window.localStorage.setItem("hp-look", look);
    } catch {}
  }, [look]);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="stylesheet" href={FONTS} />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="look-switch" role="group" aria-label="Look lab">
        {LOOKS.map((l) => (
          <button key={l.id} aria-pressed={look === l.id} onClick={() => setLook(l.id)}>
            {l.name}
          </button>
        ))}
      </div>
    </>
  );
}
