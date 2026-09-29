"use client";

import { useState } from "react";

export type Service = {
  title: string;
  body: string;
  points: string[];
};

export function ServiceTabs({ services }: { services: Service[] }) {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <div className="hp2-tabs">
      <ol className="hp2-tab-list" role="tablist" aria-label="Services">
        {services.map((item, i) => (
          <li key={item.title}>
            <button
              type="button"
              role="tab"
              aria-selected={i === active}
              className={i === active ? "is-active" : undefined}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
            >
              <span className="hp2-tab-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="hp2-tab-title">{item.title}</span>
            </button>
          </li>
        ))}
      </ol>

      <div className="hp2-tab-panel" role="tabpanel">
        <span className="hp2-tab-ghost" aria-hidden="true">
          {String(active + 1).padStart(2, "0")}
        </span>
        <p className="hp2-tab-count">
          {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
        </p>
        <h3>{s.title}</h3>
        <p className="hp2-tab-body">{s.body}</p>
        <ul>
          {s.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
