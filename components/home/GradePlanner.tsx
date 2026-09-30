"use client";

import { useState } from "react";

type Plan = {
  grade: string;
  runway: string;
  headline: string;
  steps: string[];
};

const PLANS: Plan[] = [
  {
    grade: "Grade 9",
    runway: "3+ years",
    headline: "The longest runway. We build the foundation slowly and deliberately.",
    steps: [
      "Course selection that keeps every door open",
      "Explore interests widely before narrowing",
      "Start one activity the student can lead by Grade 11",
      "No test prep yet; reading and writing habits instead",
    ],
  },
  {
    grade: "Grade 10",
    runway: "2 years",
    headline: "The ideal start. Enough history for a real diagnostic, and two full years to act on it.",
    steps: [
      "Diagnostic SAT/ACT and a testing calendar",
      "Shape two or three activities into a clear spike",
      "Apply to selective summer programs for the summer after Grade 10",
      "First draft of the school list by spring",
    ],
  },
  {
    grade: "Grade 11",
    runway: "12–18 months",
    headline: "The decisive year. Testing, the signature project, and the essays all start here.",
    steps: [
      "Sit the SAT or ACT by spring, with a second sitting if needed",
      "Launch or finish the capstone project",
      "Brainstorm the personal statement over the summer",
      "Final school list, with early-round strategy",
    ],
  },
  {
    grade: "Grade 12",
    runway: "6–9 months",
    headline: "The application year. Focused, fast, and organised so nothing is missed.",
    steps: [
      "Personal statement and every supplement, draft by draft",
      "Early Action and Early Decision applications by November",
      "Interview preparation for each school that offers one",
      "Regular Decision, scholarships, and final choices through spring",
    ],
  },
];

export function GradePlanner() {
  const [i, setI] = useState(1);
  const plan = PLANS[i];

  return (
    <div className="hp4-planner">
      <div className="hp4-planner-head">
        <p className="hp4-planner-q">The student is in</p>
        <div className="hp4-planner-tabs" role="tablist" aria-label="Student grade">
          {PLANS.map((p, idx) => (
            <button
              key={p.grade}
              type="button"
              role="tab"
              aria-selected={idx === i}
              className={idx === i ? "is-active" : undefined}
              onClick={() => setI(idx)}
            >
              <span className="hp4-grade-long">{p.grade}</span>
              <span className="hp4-grade-short" aria-hidden="true">
                {p.grade.replace("Grade ", "Gr ")}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="hp4-planner-body" key={i}>
        <p className="hp4-planner-runway">
          <span>{plan.runway}</span> until applications
        </p>
        <h3>{plan.headline}</h3>
        <ol>
          {plan.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
        <p className="hp4-planner-foot">
          <a href="#consult">Get a plan for this student →</a>
        </p>
      </div>
    </div>
  );
}
