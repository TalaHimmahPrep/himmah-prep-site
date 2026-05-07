import { NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadPayload = {
  studentName: string;
  gradeLevel?: string;
  parentEmail: string;
  source?: string;
  /** Hidden honeypot field — bots fill it, humans don't. */
  website?: string;
};

function isString(v: unknown): v is string {
  return typeof v === "string";
}

export async function POST(req: Request) {
  let body: Partial<LeadPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — drop silently so bots don't learn anything.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const studentName = isString(body.studentName) ? body.studentName.trim() : "";
  const gradeLevel = isString(body.gradeLevel) ? body.gradeLevel.trim() : "";
  const parentEmail = isString(body.parentEmail) ? body.parentEmail.trim() : "";
  const source = isString(body.source) ? body.source.trim() : "main-form";

  if (!studentName || !parentEmail) {
    return NextResponse.json(
      { ok: false, error: "Missing required field" },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(parentEmail)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email" },
      { status: 400 }
    );
  }

  const endpoint = process.env.FORMSPREE_ENDPOINT;
  if (!endpoint) {
    console.error("[lead] FORMSPREE_ENDPOINT not configured");
    return NextResponse.json(
      { ok: false, error: "Server not configured" },
      { status: 500 }
    );
  }

  const gradeLabel = gradeLevel || "Not specified";

  const payload = {
    studentName,
    gradeLevel: gradeLabel,
    parentEmail,
    source,
    _subject: `Consultation request — ${studentName} (${gradeLabel}) [${source}]`,
    _replyto: parentEmail,
    userAgent: req.headers.get("user-agent") ?? "",
    referer: req.headers.get("referer") ?? "",
  };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error("[lead] formspree responded with", res.status, await res.text());
      return NextResponse.json(
        { ok: false, error: "Upstream rejected" },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("[lead] formspree fetch failed", err);
    return NextResponse.json(
      { ok: false, error: "Upstream unreachable" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
