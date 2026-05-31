import { ImageResponse } from "next/og";

export const runtime = "edge";

const SIZES = {
  square: { w: 1080, h: 1080 },
  portrait: { w: 1080, h: 1350 },
  story: { w: 1080, h: 1920 },
} as const;

type SizeKey = keyof typeof SIZES;

const COLORS = {
  bg: "#fbf7ec",
  ink: "#1a1414",
  muted: "#6f5e54",
  primary: "#8b1f2d",
  primaryDeep: "#6e1722",
  accent: "#c8a55a",
  line: "#e5dbc7",
  cream: "#f7f1e1",
};

const fontCache = new Map<string, ArrayBuffer>();
async function loadFont(
  family: string,
  weight: 400 | 500 | 600 | 700,
  style: "normal" | "italic" = "normal",
): Promise<ArrayBuffer> {
  const key = `${family}-${weight}-${style}`;
  const cached = fontCache.get(key);
  if (cached) return cached;
  const wq = style === "italic" ? `ital,wght@1,${weight}` : `wght@${weight}`;
  const cssUrl = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:${wq}&display=swap`;
  const css = await fetch(cssUrl, {
    headers: { "user-agent": "Mozilla/5.0" },
  }).then((r) => r.text());
  const match = css.match(/src:\s*url\((https:\/\/[^)]+\.(?:woff2|woff|ttf))\)/);
  if (!match) throw new Error(`No font URL for ${family} ${weight} ${style}`);
  const data = await fetch(match[1]).then((r) => r.arrayBuffer());
  fontCache.set(key, data);
  return data;
}

const assetCache = new Map<string, string>();
async function loadAssetDataUrl(
  url: string,
  mime: string,
): Promise<string> {
  const cached = assetCache.get(url);
  if (cached) return cached;
  const buf = await fetch(url).then((r) => r.arrayBuffer());
  const bytes = new Uint8Array(buf);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
  const data = `data:${mime};base64,${btoa(binary)}`;
  assetCache.set(url, data);
  return data;
}

async function loadHimmahFonts() {
  const [serifReg, serifItalic, sansReg, sansMed, sansSemi] = await Promise.all([
    loadFont("Instrument Serif", 400),
    loadFont("Instrument Serif", 400, "italic"),
    loadFont("Instrument Sans", 400),
    loadFont("Instrument Sans", 500),
    loadFont("Instrument Sans", 600),
  ]);
  return [
    { name: "Instrument Serif", data: serifReg, weight: 400, style: "normal" } as const,
    { name: "Instrument Serif", data: serifItalic, weight: 400, style: "italic" } as const,
    { name: "Instrument Sans", data: sansReg, weight: 400, style: "normal" } as const,
    { name: "Instrument Sans", data: sansMed, weight: 500, style: "normal" } as const,
    { name: "Instrument Sans", data: sansSemi, weight: 600, style: "normal" } as const,
  ];
}

function Wordmark({ scale = 1, light = false }: { scale?: number; light?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: 36 * scale,
        fontWeight: 700,
        letterSpacing: "-0.01em",
        fontFamily: "Georgia, serif",
      }}
    >
      <span style={{ color: light ? COLORS.accent : COLORS.primary }}>himmah</span>
      <span style={{ color: light ? COLORS.cream : COLORS.ink, marginLeft: 4 }}>PREP</span>
    </div>
  );
}

function Eyebrow({ children, light = false, size = 1 }: { children: React.ReactNode; light?: boolean; size?: number }) {
  return (
    <div
      style={{
        display: "flex",
        textTransform: "uppercase",
        letterSpacing: "3px",
        fontSize: 18 * size,
        color: light ? "rgba(247,241,225,0.65)" : COLORS.muted,
        fontWeight: 500,
      }}
    >
      {children}
    </div>
  );
}

/* ------------------------ CONCEPT 1: OUTCOMES (proof) ------------------------ */
function Outcomes({ w, h }: { w: number; h: number }) {
  const isStory = h > 1500;
  const isPortrait = h > w && !isStory;
  const titleSize = isStory ? 110 : isPortrait ? 96 : 84;
  const lineSize = isStory ? 86 : isPortrait ? 76 : 64;

  const rows = [
    { from: "Riyadh", to: "Stanford" },
    { from: "Dubai", to: "Wharton" },
    { from: "Doha", to: "MIT" },
  ];

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: isStory ? "120px 90px" : "80px 80px",
        background:
          "radial-gradient(ellipse 60% 50% at 100% 0%, rgba(200,165,90,0.28), transparent 60%), radial-gradient(ellipse 60% 50% at 0% 100%, rgba(139,31,45,0.16), transparent 60%), #fbf7ec",
        color: COLORS.ink,
        fontFamily: "Georgia, serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Wordmark scale={isStory ? 1.6 : 1.3} />
        <Eyebrow size={isStory ? 1.4 : 1.1}>Class of 2025 acceptances</Eyebrow>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: isStory ? 28 : 20 }}>
        {rows.map((r) => (
          <div
            key={r.to}
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 28,
              fontSize: lineSize,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: COLORS.muted, fontStyle: "italic" }}>{r.from}</span>
            <span style={{ color: COLORS.accent, fontWeight: 400 }}>→</span>
            <span style={{ color: COLORS.primary, fontWeight: 700 }}>{r.to}</span>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 22,
          borderTop: `1px solid ${COLORS.line}`,
          paddingTop: 32,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: isStory ? 56 : isPortrait ? 44 : 38,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            color: COLORS.ink,
          }}
        >
          <span>Free 30-min consultation</span>
        </div>
        <div style={{ display: "flex", fontSize: isStory ? 32 : 26, color: COLORS.muted }}>
          <span>himmahprep.com · serving GCC families</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------ CONCEPT 2: INSIDER (curiosity) ------------------------ */
function Insider({ w, h }: { w: number; h: number }) {
  const isStory = h > 1500;
  const isPortrait = h > w && !isStory;
  const headSize = isStory ? 98 : isPortrait ? 88 : 76;

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: isStory ? "120px 90px" : "80px 80px",
        background: COLORS.bg,
        color: COLORS.ink,
        fontFamily: "Georgia, serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <Wordmark scale={isStory ? 1.6 : 1.3} />
        <Eyebrow size={isStory ? 1.4 : 1.1}>An honest read</Eyebrow>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
        <div
          style={{
            display: "flex",
            fontSize: isStory ? 240 : 160,
            lineHeight: 0.6,
            color: COLORS.accent,
            fontStyle: "italic",
            marginBottom: -20,
          }}
        >
          “
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: headSize,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: COLORS.ink,
            gap: "0 16px",
          }}
        >
          <span>The 3 things US admissions readers</span>
          <span style={{ color: COLORS.primary, fontStyle: "italic" }}>quietly count against</span>
          <span>Gulf applicants.</span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          borderTop: `1px solid ${COLORS.line}`,
          paddingTop: 32,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: isStory ? 36 : 28,
            color: COLORS.muted,
            lineHeight: 1.4,
          }}
        >
          <span>We've sat across from them. We tell our students the honest version.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            padding: isStory ? "22px 36px" : "18px 28px",
            background: COLORS.primary,
            color: "#fff",
            borderRadius: 999,
            alignSelf: "flex-start",
            fontSize: isStory ? 36 : 28,
            fontWeight: 700,
            letterSpacing: "0.01em",
          }}
        >
          Book free consultation →
        </div>
      </div>
    </div>
  );
}

/* ------------------------ CONCEPT 3: PARENTS (urgency) ------------------------ */
function Parents({ w, h }: { w: number; h: number }) {
  const isStory = h > 1500;
  const isPortrait = h > w && !isStory;
  const headSize = isStory ? 104 : isPortrait ? 90 : 78;

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: isStory ? "120px 90px" : "80px 80px",
        background:
          "radial-gradient(ellipse 80% 60% at 0% 0%, rgba(200,165,90,0.18), transparent 55%), radial-gradient(ellipse 80% 60% at 100% 100%, rgba(255,255,255,0.04), transparent 55%), linear-gradient(155deg, #8b1f2d 0%, #6e1722 100%)",
        color: COLORS.cream,
        fontFamily: "Georgia, serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <Wordmark scale={isStory ? 1.6 : 1.3} light />
        <Eyebrow size={isStory ? 1.4 : 1.1} light>For Gulf parents</Eyebrow>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          fontSize: headSize,
          lineHeight: 1.04,
          letterSpacing: "-0.02em",
          color: COLORS.cream,
          gap: "0 18px",
        }}
      >
        <span>By the time most Gulf parents start asking about US college,</span>
        <span style={{ color: COLORS.accent, fontStyle: "italic" }}>it's already two years too late.</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
          borderTop: "1px solid rgba(247,241,225,0.18)",
          paddingTop: 32,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: isStory ? 36 : 28,
            color: "rgba(247,241,225,0.85)",
            lineHeight: 1.4,
          }}
        >
          <span>Grades 9–11. Limited spots. Calls fill by July.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 14,
            padding: isStory ? "22px 36px" : "18px 28px",
            background: COLORS.accent,
            color: COLORS.primaryDeep,
            borderRadius: 999,
            alignSelf: "flex-start",
            fontSize: isStory ? 36 : 28,
            fontWeight: 700,
            letterSpacing: "0.01em",
          }}
        >
          Book free consultation →
        </div>
      </div>
    </div>
  );
}

/* ====================== SAT BOOTCAMP ADS ====================== */
/* Shared bits used across SAT concepts                            */

function LogoMark({ logoUrl, scale = 1, invert = false }: { logoUrl: string; scale?: number; invert?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoUrl}
        alt="himmah PREP"
        width={Math.round(280 * scale)}
        height={Math.round(120 * scale)}
        style={{
          display: "flex",
          objectFit: "contain",
          ...(invert ? { filter: "invert(1) brightness(2.1)" } : {}),
        }}
      />
    </div>
  );
}

function Pill({ children, dark = false, size = 1 }: { children: React.ReactNode; dark?: boolean; size?: number }) {
  return (
    <div
      style={{
        display: "flex",
        padding: `${Math.round(20 * size)}px ${Math.round(38 * size)}px`,
        background: dark ? COLORS.accent : COLORS.primary,
        color: dark ? COLORS.primaryDeep : "#fff",
        borderRadius: 999,
        fontSize: Math.round(28 * size),
        fontWeight: 600,
        letterSpacing: "0.01em",
        fontFamily: "Instrument Sans",
      }}
    >
      {children}
    </div>
  );
}

function EyebrowTag({ children, size = 1, light = false }: { children: React.ReactNode; size?: number; light?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        textTransform: "uppercase",
        letterSpacing: "3px",
        fontSize: Math.round(22 * size),
        color: light ? "rgba(247,241,225,0.7)" : COLORS.muted,
        fontWeight: 500,
        fontFamily: "Instrument Sans",
      }}
    >
      {children}
    </div>
  );
}

const SAT_BG_LIGHT =
  "radial-gradient(ellipse 50% 60% at 100% 0%, rgba(200,165,90,0.22), transparent 60%), radial-gradient(ellipse 60% 50% at 0% 100%, rgba(139,31,45,0.10), transparent 60%), #fbf7ec";

const SAT_BG_CRIMSON =
  "radial-gradient(ellipse 80% 60% at 0% 0%, rgba(200,165,90,0.18), transparent 55%), radial-gradient(ellipse 80% 60% at 100% 100%, rgba(255,255,255,0.04), transparent 55%), linear-gradient(155deg, #8b1f2d 0%, #6e1722 100%)";

const SAT_FOOTER_LINE = "SUMMER 2026 · 15-SEAT COHORT · LOCK-IN JUNE 22";

/* ---------- SHARED FRAME — fixed header/footer position across all SAT ads --- */
function SatFrame({
  logoUrl,
  dark = false,
  children,
  footerLine = SAT_FOOTER_LINE,
  ctaText = "Reserve a seat",
}: {
  logoUrl: string;
  dark?: boolean;
  children: React.ReactNode;
  footerLine?: string;
  ctaText?: string;
}) {
  const lineColor = dark ? "rgba(247,241,225,0.22)" : COLORS.line;
  const footerColor = dark ? "rgba(247,241,225,0.78)" : COLORS.muted;
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "56px 80px 64px",
        background: dark ? SAT_BG_CRIMSON : SAT_BG_LIGHT,
        color: dark ? COLORS.cream : COLORS.ink,
        fontFamily: "Instrument Sans",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", height: 72 }}>
        <LogoMark logoUrl={logoUrl} scale={0.72} invert={dark} />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 22,
          paddingTop: 26,
          borderTop: `1px solid ${lineColor}`,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: footerColor,
            letterSpacing: "0.04em",
            fontFamily: "Instrument Sans",
          }}
        >
          <span>{footerLine}</span>
        </div>
        <Pill dark={dark}>{ctaText} →</Pill>
      </div>
    </div>
  );
}

/* ---------- CONCEPT: HERO ECHO (matches landing-page hero) ---------- */
function SatHero({
  logoUrl,
  eyebrow,
  head1,
  head2,
  lead,
  displaySize = 130,
}: {
  logoUrl: string;
  eyebrow: string;
  head1: string;
  head2: string;
  lead?: string;
  displaySize?: number;
}) {
  return (
    <SatFrame logoUrl={logoUrl}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 22 }}>
        <EyebrowTag>{eyebrow}</EyebrowTag>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Instrument Serif",
            fontWeight: 400,
            fontSize: displaySize,
            lineHeight: 0.98,
            letterSpacing: "-0.025em",
            color: COLORS.ink,
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>{head1}</div>
          <div style={{ display: "flex", justifyContent: "center", fontStyle: "italic", color: COLORS.primary }}>
            {head2}
          </div>
        </div>
        {lead && (
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: COLORS.muted,
              lineHeight: 1.4,
              maxWidth: 720,
              marginTop: 10,
            }}
          >
            <span>{lead}</span>
          </div>
        )}
      </div>
    </SatFrame>
  );
}

/* ---------- CONCEPT: SCORE JUMP (1300 → 1500 hero) ---------- */
function SatScore({ logoUrl }: { logoUrl: string }) {
  return (
    <SatFrame logoUrl={logoUrl}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 30 }}>
        <EyebrowTag>SAT bootcamp · 8 weeks</EyebrowTag>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 36,
            fontFamily: "Instrument Serif",
            fontSize: 200,
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          <span style={{ display: "flex", color: COLORS.muted, fontStyle: "italic" }}>1300</span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 160,
              color: COLORS.accent,
              lineHeight: 1,
              marginTop: -8,
            }}
          >
            →
          </span>
          <span style={{ display: "flex", color: COLORS.primary }}>1500</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: COLORS.muted,
            fontFamily: "Instrument Serif",
            fontStyle: "italic",
            textAlign: "center",
            maxWidth: 760,
            lineHeight: 1.4,
          }}
        >
          <span>Average score lift our students aim for in one focused summer.</span>
        </div>
      </div>
    </SatFrame>
  );
}

/* ---------- CONCEPT: ALUMNI (real university logos) ---------- */
// Per-logo aspect (width/height of trimmed PNG) and a `scale` so visually-tiny
// marks (like the Stanford tree) get boosted to match the optical weight of
// wide wordmark logos in the row.
const ALUMNI_LOGOS: Array<{ slug: string; aspect: number; scale: number }> = [
  { slug: "harvard", aspect: 1432 / 360, scale: 1.0 },
  { slug: "stanford", aspect: 234 / 360, scale: 1.55 },
  { slug: "mit", aspect: 620 / 360, scale: 1.05 },
  { slug: "yale", aspect: 833 / 360, scale: 1.0 },
  { slug: "princeton", aspect: 1256 / 360, scale: 1.0 },
];

function SatAlumni({ logoUrl, universityLogos }: { logoUrl: string; universityLogos: string[] }) {
  const baseH = 56;
  const maxH = Math.max(...ALUMNI_LOGOS.map((l) => baseH * l.scale));
  return (
    <SatFrame logoUrl={logoUrl}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 30 }}>
        <EyebrowTag>SAT bootcamp · Where our students go</EyebrowTag>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 30,
            height: maxH,
          }}
        >
          {universityLogos.map((src, i) => {
            const h = Math.round(baseH * ALUMNI_LOGOS[i].scale);
            const w = Math.round(h * ALUMNI_LOGOS[i].aspect);
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={ALUMNI_LOGOS[i].slug}
                src={src}
                alt=""
                width={w}
                height={h}
                style={{
                  display: "flex",
                  objectFit: "contain",
                }}
              />
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Instrument Serif",
            fontWeight: 400,
            fontSize: 110,
            lineHeight: 0.98,
            letterSpacing: "-0.025em",
            color: COLORS.ink,
            marginTop: 14,
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>Score the SAT</div>
          <div style={{ display: "flex", justifyContent: "center", fontStyle: "italic", color: COLORS.primary }}>to match.</div>
        </div>
      </div>
    </SatFrame>
  );
}

/* ---------- CONCEPT: STOP SELF-STUDYING (full-bleed crimson) ---------- */
function SatStop({ logoUrl }: { logoUrl: string }) {
  return (
    <SatFrame logoUrl={logoUrl} dark footerLine="15 SEATS · FRI & SAT 6 PM KSA · LOCK-IN JUNE 22">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 28 }}>
        <EyebrowTag light>SAT bootcamp · Summer 2026</EyebrowTag>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Instrument Serif",
            fontWeight: 400,
            fontSize: 116,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: COLORS.cream,
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>Stop self-studying.</div>
          <div style={{ display: "flex", justifyContent: "center", fontStyle: "italic", color: COLORS.accent }}>Start scoring.</div>
        </div>
      </div>
    </SatFrame>
  );
}

/* ---------- CONCEPT: 8-WEEK PLAN (curriculum 2x2 grid) ---------- */
const PLAN_CARDS = [
  { num: "01", weeks: "Weeks 1–2", title: "Foundations", note: "Diagnostic. Algebra core. Passage strategy." },
  { num: "02", weeks: "Weeks 3–4", title: "Problem solving", note: "Inference, advanced math, timed sets." },
  { num: "03", weeks: "Weeks 5–6", title: "Mechanics", note: "Geometry shortcuts. Grammar rules." },
  { num: "04", weeks: "Weeks 7–8", title: "Test-day", note: "Pacing, mock debriefs, morning routine." },
];

function PlanRow({
  num,
  weeks,
  title,
  note,
  showDivider,
}: {
  num: string;
  weeks: string;
  title: string;
  note: string;
  showDivider: boolean;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: "20px 0",
          gap: 36,
        }}
      >
        {/* Big crimson serif number on the left */}
        <div
          style={{
            display: "flex",
            fontFamily: "Instrument Serif",
            fontSize: 84,
            color: COLORS.primary,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            width: 100,
            justifyContent: "flex-start",
          }}
        >
          <span>{num}</span>
        </div>

        {/* Right-side stacked content */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: 6 }}>
          <div
            style={{
              display: "flex",
              fontSize: 14,
              color: COLORS.muted,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontFamily: "Instrument Sans",
              fontWeight: 500,
            }}
          >
            <span>{weeks}</span>
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Instrument Serif",
              fontSize: 44,
              color: COLORS.ink,
              lineHeight: 1.0,
              letterSpacing: "-0.015em",
              marginTop: 2,
            }}
          >
            <span>{title}</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              color: COLORS.muted,
              lineHeight: 1.4,
              marginTop: 6,
            }}
          >
            <span>{note}</span>
          </div>
        </div>
      </div>
      {showDivider && (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: 1,
            background: COLORS.line,
          }}
        />
      )}
    </div>
  );
}

function SatPlan({ logoUrl }: { logoUrl: string }) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "56px 60px 64px",
        background: SAT_BG_LIGHT,
        color: COLORS.ink,
        fontFamily: "Instrument Sans",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", height: 64 }}>
        <LogoMark logoUrl={logoUrl} scale={0.62} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, marginTop: 10 }}>
        <EyebrowTag>SAT bootcamp · 8-week plan</EyebrowTag>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 16,
            fontFamily: "Instrument Serif",
            fontSize: 64,
            lineHeight: 1,
            letterSpacing: "-0.015em",
            color: COLORS.ink,
          }}
        >
          <span>From diagnostic,</span>
          <span style={{ fontStyle: "italic", color: COLORS.primary }}>to test day.</span>
        </div>
        {/* Gold accent line under headline */}
        <div
          style={{
            display: "flex",
            width: 80,
            height: 2,
            background: COLORS.accent,
            marginTop: 4,
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", marginTop: 20, paddingLeft: 30, paddingRight: 30 }}>
        {PLAN_CARDS.map((c, i) => (
          <PlanRow
            key={c.num}
            num={c.num}
            weeks={c.weeks}
            title={c.title}
            note={c.note}
            showDivider={i < PLAN_CARDS.length - 1}
          />
        ))}
      </div>

      <div style={{ flex: 1 }} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 18,
          paddingTop: 22,
          borderTop: `1px solid ${COLORS.line}`,
        }}
      >
        <div style={{ display: "flex", fontSize: 22, color: COLORS.muted, letterSpacing: "0.04em" }}>
          <span>{SAT_FOOTER_LINE}</span>
        </div>
        <Pill>Reserve a seat →</Pill>
      </div>
    </div>
  );
}

/* ---------- CONCEPT: BIG 15 (typographic minimal) ---------- */
function SatFifteen({ logoUrl }: { logoUrl: string }) {
  return (
    <SatFrame logoUrl={logoUrl}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
        <EyebrowTag>Summer 2026 SAT bootcamp</EyebrowTag>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Instrument Serif",
              fontStyle: "italic",
              fontSize: 58,
              color: COLORS.muted,
              lineHeight: 1,
              marginBottom: -12,
            }}
          >
            <span>only</span>
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Instrument Serif",
              fontSize: 440,
              lineHeight: 1,
              letterSpacing: "-0.06em",
              color: COLORS.primary,
            }}
          >
            <span>15</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 16,
              marginTop: -6,
            }}
          >
            <span
              style={{
                fontFamily: "Instrument Serif",
                fontSize: 54,
                color: COLORS.ink,
                letterSpacing: "-0.015em",
              }}
            >
              seats.
            </span>
            <span
              style={{
                fontFamily: "Instrument Serif",
                fontStyle: "italic",
                fontSize: 38,
                color: COLORS.muted,
              }}
            >
              one cohort.
            </span>
          </div>
        </div>
      </div>
    </SatFrame>
  );
}

/* ---------- CONCEPT: PRICE ($800, $50/session) ---------- */
function SatPrice({ logoUrl }: { logoUrl: string }) {
  return (
    <SatFrame logoUrl={logoUrl}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <EyebrowTag>Summer 2026 SAT bootcamp · all-in</EyebrowTag>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontFamily: "Instrument Serif",
            fontSize: 240,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            marginTop: 6,
          }}
        >
          <span style={{ display: "flex", color: COLORS.muted }}>$</span>
          <span style={{ display: "flex", color: COLORS.primary }}>800</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 10,
            fontFamily: "Instrument Serif",
            fontSize: 40,
            color: COLORS.muted,
            marginTop: 8,
          }}
        >
          <span>=</span>
          <span style={{ color: COLORS.primary, fontStyle: "italic" }}>$50</span>
          <span style={{ fontStyle: "italic" }}>per session</span>
        </div>

        {/* Gold accent line */}
        <div
          style={{
            display: "flex",
            width: 80,
            height: 2,
            background: COLORS.accent,
            marginTop: 24,
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 22,
            fontFamily: "Instrument Sans",
            color: COLORS.muted,
            letterSpacing: "0.04em",
            marginTop: 16,
            textAlign: "center",
          }}
        >
          <span>16 LIVE SESSIONS  ·  90 MIN EACH  ·  FRI &amp; SAT 6 PM KSA</span>
        </div>
      </div>
    </SatFrame>
  );
}

const SAT_HERO_VARIANTS: Record<
  string,
  { eyebrow: string; head1: string; head2: string; lead?: string; displaySize?: number }
> = {
  "sat-hero": {
    eyebrow: "Summer 2026 SAT bootcamp",
    head1: "Ace the SAT",
    head2: "this summer.",
    lead: "An 8-week cohort. Live, recorded, capped at 15.",
  },
  "sat-pick": {
    eyebrow: "SAT bootcamp · Seats close June 22",
    head1: "Pick the seat",
    head2: "before someone else does.",
    displaySize: 96,
  },
};

/* ====================== INITIAL CONSULTATION ADS ====================== */
/* Premium frame for the consultation lead ads — same logo + font system  */
/* as SAT ads, but lighter footer line and a softer CTA palette.          */

const CONSULT_FOOTER_LIGHT = "FREE 30-MIN CONSULTATION · SENIOR ADVISOR · NO OBLIGATION";

function ConsultFrame({
  logoUrl,
  dark = false,
  children,
  ctaText = "Book free consultation",
}: {
  logoUrl: string;
  dark?: boolean;
  children: React.ReactNode;
  ctaText?: string;
}) {
  const lineColor = dark ? "rgba(247,241,225,0.22)" : COLORS.line;
  const footerColor = dark ? "rgba(247,241,225,0.78)" : COLORS.muted;
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "56px 80px 64px",
        background: dark ? SAT_BG_CRIMSON : SAT_BG_LIGHT,
        color: dark ? COLORS.cream : COLORS.ink,
        fontFamily: "Instrument Sans",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoUrl}
          alt="himmah PREP"
          width={220}
          height={94}
          style={{
            objectFit: "contain",
            ...(dark ? { filter: "invert(1) brightness(2.1)" } : {}),
          }}
        />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 22,
          paddingTop: 26,
          borderTop: `1px solid ${lineColor}`,
          marginTop: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: footerColor,
            letterSpacing: "0.04em",
            fontFamily: "Instrument Sans",
          }}
        >
          <span>{CONSULT_FOOTER_LIGHT}</span>
        </div>
        <Pill dark={dark}>{ctaText} →</Pill>
      </div>
    </div>
  );
}

/* ---------- CONCEPT: ROADMAP (value-add) ---------- */
function ConsultRoadmap({ logoUrl }: { logoUrl: string }) {
  return (
    <ConsultFrame logoUrl={logoUrl}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 22 }}>
        <EyebrowTag>A personalized roadmap</EyebrowTag>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Instrument Serif",
            fontWeight: 400,
            fontSize: 120,
            lineHeight: 0.98,
            letterSpacing: "-0.025em",
            color: COLORS.ink,
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>Know exactly</div>
          <div style={{ display: "flex", justifyContent: "center", fontStyle: "italic", color: COLORS.primary }}>
            what comes next.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: COLORS.muted,
            lineHeight: 1.45,
            maxWidth: 800,
            marginTop: 8,
            fontFamily: "Instrument Sans",
            textAlign: "center",
          }}
        >
          <span>
            A senior advisor reads your child&apos;s story, finds the gaps, and maps the next 12 months.
          </span>
        </div>
      </div>
    </ConsultFrame>
  );
}

/* ---------- CONCEPT: WHERE (question hook) ---------- */
function ConsultWhere({ logoUrl }: { logoUrl: string }) {
  return (
    <ConsultFrame logoUrl={logoUrl} ctaText="Let's talk">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 22 }}>
        <EyebrowTag>For Gulf families · Grades 9–12</EyebrowTag>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Instrument Serif",
            fontWeight: 400,
            fontSize: 132,
            lineHeight: 0.96,
            letterSpacing: "-0.03em",
            color: COLORS.ink,
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>Where will</div>
          <div style={{ display: "flex", justifyContent: "center" }}>your child</div>
          <div style={{ display: "flex", justifyContent: "center", fontStyle: "italic", color: COLORS.primary, marginTop: 8 }}>
            apply?
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: COLORS.muted,
            lineHeight: 1.45,
            maxWidth: 760,
            marginTop: 6,
            fontFamily: "Instrument Serif",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          <span>30 minutes with one of our senior advisors. Just an honest read.</span>
        </div>
      </div>
    </ConsultFrame>
  );
}

/* ---------- CONCEPT: HONEST (trust-led crimson) ---------- */
function ConsultHonest({ logoUrl }: { logoUrl: string }) {
  return (
    <ConsultFrame logoUrl={logoUrl} dark>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 22 }}>
        <EyebrowTag light>An honest read</EyebrowTag>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Instrument Serif",
            fontWeight: 400,
            fontSize: 116,
            lineHeight: 0.98,
            letterSpacing: "-0.025em",
            color: COLORS.cream,
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>Where your child</div>
          <div style={{ display: "flex", justifyContent: "center", fontStyle: "italic", color: COLORS.accent, marginTop: 8 }}>
            actually stands.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "rgba(247,241,225,0.85)",
            lineHeight: 1.45,
            maxWidth: 820,
            marginTop: 8,
            fontFamily: "Instrument Sans",
            textAlign: "center",
          }}
        >
          <span>
            We&apos;ll tell you what the strongest applicants are doing — and what it takes to compete.
          </span>
        </div>
      </div>
    </ConsultFrame>
  );
}

/* ---------- CONCEPT: NOW (timing urgency) ---------- */
function ConsultNow({ logoUrl }: { logoUrl: string }) {
  return (
    <ConsultFrame logoUrl={logoUrl}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 22 }}>
        <EyebrowTag>Don&apos;t wait until senior year</EyebrowTag>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Instrument Serif",
            fontWeight: 400,
            fontSize: 132,
            lineHeight: 0.96,
            letterSpacing: "-0.03em",
            color: COLORS.ink,
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>The earlier we</div>
          <div style={{ display: "flex", justifyContent: "center", fontStyle: "italic", color: COLORS.primary, marginTop: 6 }}>
            start, the more
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 6 }}>we can do.</div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: COLORS.muted,
            lineHeight: 1.45,
            maxWidth: 800,
            marginTop: 6,
            fontFamily: "Instrument Sans",
            textAlign: "center",
          }}
        >
          <span>Most Gulf families wait two years too long. A 30-min call changes that.</span>
        </div>
      </div>
    </ConsultFrame>
  );
}

/* ---------- CONCEPT: RESULTS (proof-led, premium) ---------- */
function ConsultResults({ logoUrl }: { logoUrl: string }) {
  return (
    <ConsultFrame logoUrl={logoUrl}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 28 }}>
        <EyebrowTag>Class of 2025 · 100% acceptance rate</EyebrowTag>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Instrument Serif",
            fontWeight: 400,
            fontSize: 118,
            lineHeight: 0.98,
            letterSpacing: "-0.025em",
            color: COLORS.ink,
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>Stanford. MIT.</div>
          <div style={{ display: "flex", justifyContent: "center", fontStyle: "italic", color: COLORS.primary, marginTop: 8 }}>
            Your child next.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: COLORS.muted,
            lineHeight: 1.45,
            maxWidth: 800,
            marginTop: 4,
            fontFamily: "Instrument Sans",
            textAlign: "center",
          }}
        >
          <span>
            The same advisors who got 20+ students into Top-20 universities will read your case for free.
          </span>
        </div>
      </div>
    </ConsultFrame>
  );
}

/* ---------- CONCEPT: ALUMNI (university logo wall) ---------- */
const CONSULT_ALUMNI_LOGOS: Array<{ slug: string; aspect: number; scale: number }> = [
  { slug: "harvard", aspect: 1432 / 360, scale: 1.0 },
  { slug: "stanford", aspect: 234 / 360, scale: 1.55 },
  { slug: "mit", aspect: 620 / 360, scale: 1.05 },
  { slug: "yale", aspect: 833 / 360, scale: 1.0 },
  { slug: "princeton", aspect: 1256 / 360, scale: 1.0 },
];

function ConsultAlumni({ logoUrl, universityLogos }: { logoUrl: string; universityLogos: string[] }) {
  const baseH = 64;
  const maxH = Math.max(...CONSULT_ALUMNI_LOGOS.map((l) => baseH * l.scale));
  return (
    <ConsultFrame logoUrl={logoUrl}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
        <EyebrowTag>Where our students are headed</EyebrowTag>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 36,
            height: maxH,
          }}
        >
          {universityLogos.map((src, i) => {
            const h = Math.round(baseH * CONSULT_ALUMNI_LOGOS[i].scale);
            const w = Math.round(h * CONSULT_ALUMNI_LOGOS[i].aspect);
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={CONSULT_ALUMNI_LOGOS[i].slug}
                src={src}
                alt=""
                width={w}
                height={h}
                style={{ display: "flex", objectFit: "contain" }}
              />
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Instrument Serif",
            fontWeight: 400,
            fontSize: 100,
            lineHeight: 0.98,
            letterSpacing: "-0.025em",
            color: COLORS.ink,
            marginTop: 14,
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>Could your child be</div>
          <div style={{ display: "flex", justifyContent: "center", fontStyle: "italic", color: COLORS.primary }}>
            next?
          </div>
        </div>
      </div>
    </ConsultFrame>
  );
}

/* ---------- CONCEPT: LETTER (acceptance letter mockup) ---------- */
function ConsultLetter({ logoUrl }: { logoUrl: string }) {
  return (
    <ConsultFrame logoUrl={logoUrl}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}>
        {/* The Letter */}
        <div
          style={{
            display: "flex",
            position: "relative",
            background: "#ffffff",
            border: `1px solid ${COLORS.line}`,
            borderRadius: 6,
            padding: "44px 48px 56px",
            width: 600,
            boxShadow: "0 24px 48px rgba(110,23,34,0.10)",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 14,
              letterSpacing: "3px",
              color: COLORS.muted,
              fontFamily: "Instrument Sans",
              fontWeight: 600,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            <span>Office of Undergraduate Admissions</span>
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Instrument Serif",
              fontSize: 48,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: COLORS.primary,
              fontStyle: "italic",
              marginBottom: 18,
            }}
          >
            <span>Congratulations.</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            <div style={{ display: "flex", height: 9, width: "100%", background: COLORS.line, borderRadius: 4 }} />
            <div style={{ display: "flex", height: 9, width: "92%", background: COLORS.line, borderRadius: 4 }} />
            <div style={{ display: "flex", height: 9, width: "96%", background: COLORS.line, borderRadius: 4 }} />
            <div style={{ display: "flex", height: 9, width: "78%", background: COLORS.line, borderRadius: 4 }} />
          </div>
          {/* Red stamp */}
          <div
            style={{
              position: "absolute",
              top: -28,
              right: -28,
              width: 140,
              height: 140,
              borderRadius: 9999,
              background: COLORS.primary,
              color: COLORS.cream,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Instrument Sans",
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: "2px",
              textTransform: "uppercase",
              textAlign: "center",
              boxShadow: "0 12px 28px rgba(139,31,45,0.35)",
              transform: "rotate(8deg)",
            }}
          >
            <span style={{ display: "flex" }}>Admitted</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Instrument Serif",
            fontWeight: 400,
            fontSize: 88,
            lineHeight: 0.98,
            letterSpacing: "-0.025em",
            color: COLORS.ink,
            marginTop: 4,
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>This letter, for</div>
          <div style={{ display: "flex", justifyContent: "center", fontStyle: "italic", color: COLORS.primary }}>
            your child.
          </div>
        </div>
      </div>
    </ConsultFrame>
  );
}

/* ---------- CONCEPT: TIMELINE (year-by-year roadmap) ---------- */
function ConsultTimeline({ logoUrl }: { logoUrl: string }) {
  const years = ["9th", "10th", "11th", "12th"];
  return (
    <ConsultFrame logoUrl={logoUrl}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}>
        <EyebrowTag>The earlier, the stronger</EyebrowTag>

        {/* Timeline graphic */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            width: 820,
            height: 90,
          }}
        >
          {/* Connector line */}
          <div
            style={{
              position: "absolute",
              top: 38,
              left: 36,
              right: 36,
              height: 3,
              background: COLORS.line,
            }}
          />
          {/* Year dots */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "flex-start",
            }}
          >
            {years.map((y) => (
              <div
                key={y}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                  width: 110,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: 22,
                    height: 22,
                    borderRadius: 9999,
                    background: COLORS.bg,
                    border: `3px solid ${COLORS.muted}`,
                    marginTop: 27,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    fontFamily: "Instrument Sans",
                    fontSize: 22,
                    color: COLORS.muted,
                    fontWeight: 500,
                  }}
                >
                  {y}
                </div>
              </div>
            ))}
            {/* Final dot: Top 20 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                width: 130,
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 42,
                  height: 42,
                  borderRadius: 9999,
                  background: COLORS.primary,
                  marginTop: 17,
                  boxShadow: "0 8px 20px rgba(139,31,45,0.35)",
                }}
              />
              <div
                style={{
                  display: "flex",
                  fontFamily: "Instrument Sans",
                  fontSize: 22,
                  color: COLORS.primary,
                  fontWeight: 700,
                }}
              >
                Top 20
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Instrument Serif",
            fontWeight: 400,
            fontSize: 96,
            lineHeight: 0.98,
            letterSpacing: "-0.025em",
            color: COLORS.ink,
            marginTop: 18,
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>Every year</div>
          <div style={{ display: "flex", justifyContent: "center", fontStyle: "italic", color: COLORS.primary }}>
            matters.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: COLORS.muted,
            lineHeight: 1.45,
            maxWidth: 760,
            fontFamily: "Instrument Sans",
            textAlign: "center",
          }}
        >
          <span>Build the academic and extracurricular profile that gets into a Top 20.</span>
        </div>
      </div>
    </ConsultFrame>
  );
}

/* ---------- CONCEPT: BOOK (calendar card with highlighted slot) ---------- */
function ConsultBook({ logoUrl }: { logoUrl: string }) {
  return (
    <ConsultFrame logoUrl={logoUrl} ctaText="Book a call now">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}>
        {/* Calendar card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#ffffff",
            border: `1px solid ${COLORS.line}`,
            borderRadius: 18,
            padding: "32px 40px 36px",
            width: 460,
            boxShadow: "0 24px 48px rgba(110,23,34,0.10)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                display: "flex",
                fontSize: 13,
                letterSpacing: "2.6px",
                color: COLORS.muted,
                fontFamily: "Instrument Sans",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              This week
            </span>
            <span
              style={{
                display: "flex",
                fontSize: 13,
                letterSpacing: "2.6px",
                color: COLORS.accent,
                fontFamily: "Instrument Sans",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              30 min · free
            </span>
          </div>

          {/* Time slots */}
          {[
            { time: "10:00", taken: true },
            { time: "11:30", taken: false, highlight: true },
            { time: "14:00", taken: true },
            { time: "16:00", taken: false },
          ].map((s) => (
            <div
              key={s.time}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 20px",
                marginBottom: 8,
                borderRadius: 10,
                background: s.highlight ? COLORS.primary : s.taken ? "#f3ece0" : "#fbf7ec",
                border: s.highlight
                  ? `1px solid ${COLORS.primary}`
                  : `1px solid ${COLORS.line}`,
              }}
            >
              <span
                style={{
                  display: "flex",
                  fontSize: 22,
                  fontFamily: "Instrument Sans",
                  fontWeight: 600,
                  color: s.highlight ? "#fff" : s.taken ? "#9c8c82" : COLORS.ink,
                  textDecoration: s.taken ? "line-through" : "none",
                }}
              >
                {s.time}
              </span>
              <span
                style={{
                  display: "flex",
                  fontSize: 13,
                  fontFamily: "Instrument Sans",
                  fontWeight: 700,
                  letterSpacing: "1.4px",
                  textTransform: "uppercase",
                  color: s.highlight ? "#fff" : s.taken ? "#9c8c82" : COLORS.primary,
                }}
              >
                {s.taken ? "Booked" : s.highlight ? "Yours" : "Open"}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Instrument Serif",
            fontWeight: 400,
            fontSize: 84,
            lineHeight: 0.98,
            letterSpacing: "-0.025em",
            color: COLORS.ink,
            marginTop: 4,
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>Find a time</div>
          <div style={{ display: "flex", justifyContent: "center", fontStyle: "italic", color: COLORS.primary }}>
            this week.
          </div>
        </div>
      </div>
    </ConsultFrame>
  );
}

/* ---------- CONCEPT: SLOTS (scarcity: only X spots left) ---------- */
function ConsultSlots({ logoUrl }: { logoUrl: string }) {
  return (
    <ConsultFrame logoUrl={logoUrl} ctaText="Book your spot">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
        <EyebrowTag>This week&apos;s consultations</EyebrowTag>
        {/* Big number */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 24,
            fontFamily: "Instrument Serif",
            color: COLORS.primary,
          }}
        >
          <span style={{ display: "flex", fontSize: 280, lineHeight: 0.85, letterSpacing: "-0.04em" }}>3</span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 48,
              fontStyle: "italic",
              color: COLORS.ink,
              lineHeight: 1,
            }}
          >
            <span>spots</span>
            <span>left.</span>
          </span>
        </div>

        {/* Slot pills */}
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center", maxWidth: 760 }}>
          {[
            { label: "Mon · 10:00", taken: true },
            { label: "Mon · 14:00", taken: false },
            { label: "Tue · 11:00", taken: true },
            { label: "Wed · 16:00", taken: false },
            { label: "Thu · 09:30", taken: true },
            { label: "Fri · 15:00", taken: false },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                padding: "14px 22px",
                borderRadius: 999,
                background: s.taken ? "transparent" : COLORS.primary,
                border: `1.5px solid ${s.taken ? COLORS.muted : COLORS.primary}`,
                color: s.taken ? COLORS.muted : "#fff",
                fontFamily: "Instrument Sans",
                fontSize: 22,
                fontWeight: 600,
                textDecoration: s.taken ? "line-through" : "none",
                opacity: s.taken ? 0.55 : 1,
              }}
            >
              <span>{s.label}</span>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: COLORS.muted,
            lineHeight: 1.45,
            maxWidth: 720,
            marginTop: 6,
            fontFamily: "Instrument Sans",
            textAlign: "center",
          }}
        >
          <span>Free 30-min strategy call with a senior advisor. Once they&apos;re gone, they&apos;re gone.</span>
        </div>
      </div>
    </ConsultFrame>
  );
}

/* ---------- CONCEPT: TODAY (urgent direct CTA) ---------- */
function ConsultToday({ logoUrl }: { logoUrl: string }) {
  return (
    <ConsultFrame logoUrl={logoUrl} dark ctaText="Book a call now">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 26 }}>
        <EyebrowTag light>30 minutes · senior advisor · free</EyebrowTag>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Instrument Serif",
            fontWeight: 400,
            fontSize: 156,
            lineHeight: 0.94,
            letterSpacing: "-0.03em",
            color: COLORS.cream,
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>Book a call</div>
          <div style={{ display: "flex", justifyContent: "center", fontStyle: "italic", color: COLORS.accent, marginTop: 8 }}>
            today.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "rgba(247,241,225,0.85)",
            lineHeight: 1.45,
            maxWidth: 760,
            marginTop: 6,
            fontFamily: "Instrument Sans",
            textAlign: "center",
          }}
        >
          <span>The conversation that changes the next four years. It starts with one call.</span>
        </div>
      </div>
    </ConsultFrame>
  );
}

const RENDERERS = {
  outcomes: Outcomes,
  insider: Insider,
  parents: Parents,
} as const;

const CONSULT_RENDERERS = {
  "consult-roadmap": ConsultRoadmap,
  "consult-where": ConsultWhere,
  "consult-honest": ConsultHonest,
  "consult-now": ConsultNow,
  "consult-results": ConsultResults,
  "consult-letter": ConsultLetter,
  "consult-timeline": ConsultTimeline,
  "consult-book": ConsultBook,
  "consult-slots": ConsultSlots,
  "consult-today": ConsultToday,
} as const;

const CONSULT_ALUMNI_KEY = "consult-alumni";

type ConceptKey = keyof typeof RENDERERS;

const SAT_CONCEPT_KEYS = [
  "sat-hero",
  "sat-pick",
  "sat-score",
  "sat-alumni",
  "sat-stop",
  "sat-plan",
  "sat-fifteen",
  "sat-price",
] as const;

export async function GET(
  req: Request,
  { params }: { params: Promise<{ concept: string; size: string }> },
) {
  const { concept, size } = await params;
  const dim = SIZES[size as SizeKey];
  if (!dim) {
    return new Response(
      `bad size. size ∈ {${Object.keys(SIZES).join(", ")}}`,
      { status: 400 },
    );
  }

  const isSat = (SAT_CONCEPT_KEYS as readonly string[]).includes(concept);

  if (isSat) {
    const origin = new URL(req.url).origin;
    const [fonts, logoUrl] = await Promise.all([
      loadHimmahFonts(),
      loadAssetDataUrl(`${origin}/logo.png`, "image/png"),
    ]);

    let element: React.ReactElement;
    const heroVariant = SAT_HERO_VARIANTS[concept];
    if (heroVariant) {
      element = <SatHero logoUrl={logoUrl} {...heroVariant} />;
    } else if (concept === "sat-score") {
      element = <SatScore logoUrl={logoUrl} />;
    } else if (concept === "sat-stop") {
      element = <SatStop logoUrl={logoUrl} />;
    } else if (concept === "sat-plan") {
      element = <SatPlan logoUrl={logoUrl} />;
    } else if (concept === "sat-fifteen") {
      element = <SatFifteen logoUrl={logoUrl} />;
    } else if (concept === "sat-price") {
      element = <SatPrice logoUrl={logoUrl} />;
    } else if (concept === "sat-alumni") {
      const universityLogos = await Promise.all(
        ALUMNI_LOGOS.map(({ slug }) =>
          loadAssetDataUrl(`${origin}/logos/universities-png/${slug}.png`, "image/png"),
        ),
      );
      element = <SatAlumni logoUrl={logoUrl} universityLogos={universityLogos} />;
    } else {
      return new Response(`unknown SAT concept: ${concept}`, { status: 400 });
    }

    return new ImageResponse(element, {
      width: dim.w,
      height: dim.h,
      fonts: [...fonts],
    });
  }

  const ConsultRender = CONSULT_RENDERERS[concept as keyof typeof CONSULT_RENDERERS];
  if (ConsultRender) {
    const origin = new URL(req.url).origin;
    const [fonts, logoUrl] = await Promise.all([
      loadHimmahFonts(),
      loadAssetDataUrl(`${origin}/logo.png`, "image/png"),
    ]);
    return new ImageResponse(<ConsultRender logoUrl={logoUrl} />, {
      width: dim.w,
      height: dim.h,
      fonts: [...fonts],
    });
  }

  if (concept === CONSULT_ALUMNI_KEY) {
    const origin = new URL(req.url).origin;
    const [fonts, logoUrl, universityLogos] = await Promise.all([
      loadHimmahFonts(),
      loadAssetDataUrl(`${origin}/logo.png`, "image/png"),
      Promise.all(
        CONSULT_ALUMNI_LOGOS.map(({ slug }) =>
          loadAssetDataUrl(`${origin}/logos/universities-png/${slug}.png`, "image/png"),
        ),
      ),
    ]);
    return new ImageResponse(
      <ConsultAlumni logoUrl={logoUrl} universityLogos={universityLogos} />,
      { width: dim.w, height: dim.h, fonts: [...fonts] },
    );
  }

  const Render = RENDERERS[concept as ConceptKey];
  if (!Render) {
    return new Response(
      `bad concept. concept ∈ {${[...Object.keys(RENDERERS), ...Object.keys(CONSULT_RENDERERS), ...SAT_CONCEPT_KEYS].join(", ")}}, size ∈ {${Object.keys(SIZES).join(", ")}}`,
      { status: 400 },
    );
  }
  return new ImageResponse(<Render w={dim.w} h={dim.h} />, { width: dim.w, height: dim.h });
}
