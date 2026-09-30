"use client";

import { useState } from "react";

/** Simple interactive: pick a diagnostic score, see the target and the plan. */
export function ScoreEstimator() {
  const [score, setScore] = useState(1240);
  const target = score >= 1450 ? Math.min(1580, score + 90) : score >= 1350 ? 1520 : 1500;
  const gain = target - score;
  const weeks = score >= 1450 ? "8 weeks" : score >= 1350 ? "12 weeks" : "12–16 weeks";
  const focus =
    score >= 1450
      ? "Timing, the hardest Reading & Writing items, and eliminating careless errors in Math."
      : score >= 1350
        ? "Grammar rules, Algebra 2 fluency, and test-day pacing under real timing."
        : "Foundations first: the grammar and algebra IB and American-curriculum schools rarely teach explicitly, then pacing.";

  return (
    <div className="pg-est">
      <label className="pg-est-label">
        <span>Diagnostic score</span>
        <strong>{score}</strong>
      </label>
      <input
        type="range"
        min={1000}
        max={1550}
        step={10}
        value={score}
        onChange={(e) => setScore(Number(e.target.value))}
        aria-label="Diagnostic SAT score"
      />
      <div className="pg-est-scale" aria-hidden="true">
        <span>1000</span>
        <span>1550</span>
      </div>
      <div className="pg-est-out">
        <div>
          <p className="pg-est-k">Realistic target</p>
          <p className="pg-est-v">
            {target}
            <small>+{gain}</small>
          </p>
        </div>
        <div>
          <p className="pg-est-k">Plan length</p>
          <p className="pg-est-v">{weeks}</p>
        </div>
      </div>
      <p className="pg-est-focus">
        <b>Where we&apos;d start:</b> {focus}
      </p>
      <p className="pg-est-note">
        Based on typical Himmah Prep trajectories. Your diagnostic on the first session sets the
        real plan.
      </p>
    </div>
  );
}
