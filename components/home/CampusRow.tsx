"use client";

import Image from "next/image";
import { useRef } from "react";

export type Campus = { name: string; place: string; src: string; note: string };

export function CampusRow({ campuses }: { campuses: Campus[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".hp4-campus");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 320) + 18), behavior: "smooth" });
  };

  return (
    <div className="hp4-campus-wrap">
      <div className="hp4-campus-row" ref={ref}>
        {campuses.map((c) => (
          <figure key={c.name} className="hp4-campus" tabIndex={0}>
            <Image src={c.src} alt={`${c.name} campus`} fill sizes="(max-width: 900px) 78vw, 30vw" />
            <figcaption>
              <strong>{c.name}</strong>
              <span>{c.place}</span>
              <p>{c.note}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="hp4-campus-arrows">
        <button type="button" aria-label="Scroll left" onClick={() => scrollBy(-1)}>
          ←
        </button>
        <button type="button" aria-label="Scroll right" onClick={() => scrollBy(1)}>
          →
        </button>
      </div>
    </div>
  );
}
