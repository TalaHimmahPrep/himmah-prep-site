import { NextResponse } from "next/server";

export const runtime = "nodejs";

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const studentName = str(body.studentName);
  const parentEmail = str(body.parentEmail);

  if (!studentName || !parentEmail) {
    return NextResponse.json(
      { ok: false, error: "Missing required field" },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(parentEmail)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email" },
      { status: 400 },
    );
  }

  const endpoint = process.env.FORMSPREE_ENDPOINT;
  if (!endpoint) {
    console.error("[intake] FORMSPREE_ENDPOINT not configured");
    return NextResponse.json(
      { ok: false, error: "Server not configured" },
      { status: 500 },
    );
  }

  const grade = str(body.grade);
  const school = str(body.school);
  const gpa = str(body.gpa);
  const satScore = str(body.satScore);
  const actScore = str(body.actScore);
  const dreamSchools = str(body.dreamSchools);
  const intendedMajor = str(body.intendedMajor);
  const extracurriculars = str(body.extracurriculars);
  const parentName = str(body.parentName);
  const parentPhone = str(body.parentPhone);
  const anythingElse = str(body.anythingElse);
  const familyId = str(body.familyId);

  const payload = {
    _subject: `Enrollment intake — ${studentName} (${grade || "Grade N/A"}) [${familyId}]`,
    _replyto: parentEmail,
    familyId,
    studentName,
    grade,
    school,
    gpa,
    ...(satScore && { satScore }),
    ...(actScore && { actScore }),
    dreamSchools,
    intendedMajor,
    extracurriculars,
    parentName,
    parentEmail,
    ...(parentPhone && { parentPhone }),
    ...(anythingElse && { anythingElse }),
    source: "enrollment-intake",
    submittedAt: new Date().toISOString(),
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
      console.error("[intake] formspree responded with", res.status, await res.text());
      return NextResponse.json(
        { ok: false, error: "Upstream rejected" },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[intake] formspree fetch failed", err);
    return NextResponse.json(
      { ok: false, error: "Upstream unreachable" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
