"use client";

import Image from "next/image";
import { useState } from "react";
import type { Service } from "@/lib/home-content";

export function ServiceTabs({ services }: { services: Service[] }) {
  const [active, setActive] = useState(0);
  const s = services[active];
  const n = (i: number) => String(i + 1).padStart(2, "0");

  return (
    <div className="hp4-tabs">
      <ol className="hp4-tab-list" role="tablist" aria-label="Services">
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
              <span className="hp4-tab-num">{n(i)}</span>
              <span className="hp4-tab-title">{item.title}</span>
              <span className="hp4-tab-arrow" aria-hidden="true">
                →
              </span>
            </button>
          </li>
        ))}
      </ol>

      <div className="hp4-tab-panel" role="tabpanel" key={active}>
        <Image src="/campus/widener.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 640px" />
        <div className="hp4-tab-content">
          <p className="hp4-tab-count">
            {n(active)} / {n(services.length - 1)}
          </p>
          <h3>{s.title}</h3>
          <p className="hp4-tab-body">{s.body}</p>
          <ul>
            {s.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
