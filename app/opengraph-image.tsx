import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Himmah Prep — Guaranteed to help students stand out";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          background:
            "radial-gradient(ellipse 60% 50% at 100% 0%, rgba(200,165,90,0.30), transparent 60%), radial-gradient(ellipse 60% 50% at 0% 100%, rgba(139,31,45,0.18), transparent 60%), #fbf7ec",
          color: "#1a1414",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 36,
            color: "#8b1f2d",
            fontWeight: 700,
            letterSpacing: "-0.01em",
          }}
        >
          <span>himmah</span>
          <span style={{ color: "#1a1414", marginLeft: 4 }}>PREP</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              textTransform: "uppercase",
              letterSpacing: "3px",
              color: "#6f5e54",
            }}
          >
            College Admissions, Reimagined
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 92,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
              gap: "0 16px",
            }}
          >
            <span>Guaranteed to help students</span>
            <span style={{ color: "#8b1f2d", fontStyle: "italic" }}>stand out.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 48,
            fontSize: 22,
            color: "#6f5e54",
            borderTop: "1px solid #e5dbc7",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
            <span style={{ fontSize: 40, color: "#8b1f2d" }}>100%</span>
            <span>college acceptance</span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
            <span style={{ fontSize: 40, color: "#8b1f2d" }}>100%</span>
            <span>Ivy League advisors</span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
            <span style={{ fontSize: 40, color: "#8b1f2d" }}>1500+</span>
            <span>SAT target</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
