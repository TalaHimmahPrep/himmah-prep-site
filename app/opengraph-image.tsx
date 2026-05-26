import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Himmah Prep — College Admissions Consulting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoData = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse 70% 50% at 80% 20%, rgba(200,165,90,0.22), transparent 60%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(139,31,45,0.12), transparent 60%), #fbf7ec",
          fontFamily: "Georgia, serif",
          gap: 32,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" height={80} />

        <div
          style={{
            display: "flex",
            width: 80,
            height: 2,
            background: "#c8a55a",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#6f5e54",
            letterSpacing: "2.5px",
            textTransform: "uppercase",
          }}
        >
          College Admissions Consulting
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 20,
            color: "#9c8c82",
            marginTop: 8,
          }}
        >
          himmahprep.com
        </div>
      </div>
    ),
    { ...size },
  );
}
