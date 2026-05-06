# himmahprep.com

Marketing site for Himmah Prep. Built with Next.js 16 + TypeScript. Design tokens, fonts, and the custom cursor are matched 1:1 to [portal.himmahprep.com](https://portal.himmahprep.com) so the marketing site and portal feel like one product.

## Local development

```bash
cp .env.example .env.local       # paste your Formspree URL into FORMSPREE_ENDPOINT
npm install
npm run dev                       # http://localhost:3001
```

## Form → email + Google Sheet (Formspree)

The free-consultation form posts to `/api/lead`, which forwards each submission to [Formspree](https://formspree.io). Formspree emails the lead to you and (with the Google Sheets plugin enabled) appends it to your "Himmah Prep — Leads" sheet automatically. No Apps Script, no maintenance.

### One-time setup

1. Sign up at https://formspree.io with the email you want consultation requests delivered to.
2. **+ New Form** → name it `Himmah Prep — Consultations`.
3. Copy the form's endpoint URL — it looks like `https://formspree.io/f/abcdwxyz`.
4. (Optional but recommended) Form **Settings → Plugins → Google Sheets** → connect your Google account → pick "Himmah Prep — Leads". Submissions now land as both an email and a sheet row.
5. Set `FORMSPREE_ENDPOINT` in `.env.local` for local dev and in **Vercel → Project → Settings → Environment Variables** for production.

### Test

Submit the consultation form on http://localhost:3001/#consult. You should receive an email within a few seconds and (if enabled) see a new row in your sheet. If not, check the Next.js dev console for `[lead]` errors.

## University logos

The carousel renders SVGs from `public/logos/universities/{slug}.svg` for: `harvard`, `stanford`, `yale`, `princeton`, `berkeley`, `cornell`, `duke`, `ucla`. **Placeholders ship in this repo** — burgundy italic-serif wordmarks that match the design language but aren't the schools' official assets.

Before public launch, replace each with the licensed wordmark from the school's brand portal (most universities make their primary wordmark available for download; some require permission for commercial use). Keep the same filename and the carousel will pick them up automatically.

## Deployment (Vercel)

1. Push this repo to GitHub.
2. In Vercel: **Add New Project → Import** the repo. Framework preset: Next.js (auto-detected).
3. Add the env vars from the form section above.
4. Deploy. You'll get a `*.vercel.app` preview URL.
5. When ready: **Project → Domains → Add `himmahprep.com`** and `www.himmahprep.com`. Vercel will show you the DNS records to set at your registrar (an `A` record for the apex and a `CNAME` for `www`). Squarespace's DNS panel can hold these records even if the site itself is gone — or move DNS to Cloudflare if you want flexibility.
6. Once DNS propagates (usually <1 hour), Vercel auto-issues an SSL cert.

## Project structure

```
app/
  layout.tsx        Root layout — fonts, cursor, metadata
  page.tsx          Landing page (Hero, Services, Approach, Carousel, Guide, CTA, Footer)
  globals.css       Design tokens + all section styles
  api/lead/route.ts Form handler that forwards to Google Apps Script
components/
  Cursor.tsx        Two-element custom cursor (dot + ring), client component
  Carousel.tsx      Testimonial carousel with arrows + dots, client component
  UniversityLogo.tsx SVG wordmark loader
  LeadForm.tsx      Free-consultation form, posts to /api/lead
public/
  logo.webp                     Himmah Prep wordmark (used in nav + footer)
  logos/universities/*.svg      One per testimonial; replace with licensed assets
```

## Design tokens

Defined as CSS custom properties at the top of `app/globals.css`. Mirrored from the portal so any token change there can be applied here in one place:

```
--color-bg          #fbf7ec   (slightly lighter & less yellow than the portal's #f7f1e1)
--color-primary     #8b1f2d   (burgundy)
--color-accent      #c8a55a   (gold)
--color-ink         #1a1414
--font-sans         Instrument Sans (next/font/google)
--font-serif        Instrument Serif (next/font/google) — italic for emphasis
```
