"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Quote } from "@/lib/home-content";

export function QuoteCarousel({ quotes }: { quotes: Quote[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);
  const n = quotes.length;

  const go = useCallback((d: number) => setI((v) => (v + d + n) % n), [n]);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setInterval(() => go(1), 6000);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [paused, go]);

  return (
    <div
      className="hp4-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Every quote is rendered in the same grid cell so the box is sized
          by the longest one and never changes height; only the active one
          is visible. */}
      <div className="hp4-carousel-stack">
        {quotes.map((x, idx) => (
          <figure
            key={x.name}
            className={`hp4-carousel-quote${idx === i ? " is-active" : ""}`}
            aria-hidden={idx !== i}
          >
            <blockquote>{x.quote}</blockquote>
            <figcaption>
              <strong>{x.name}</strong>
              <span>{x.school}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="hp4-carousel-controls">
        <div className="hp4-carousel-dots" role="tablist" aria-label="Testimonials">
          {quotes.map((x, idx) => (
            <button
              key={x.name}
              type="button"
              role="tab"
              aria-selected={idx === i}
              aria-label={`Testimonial ${idx + 1}`}
              className={idx === i ? "is-active" : undefined}
              onClick={() => setI(idx)}
            />
          ))}
        </div>
        <div className="hp4-carousel-arrows">
          <button type="button" aria-label="Previous" onClick={() => go(-1)}>
            ←
          </button>
          <button type="button" aria-label="Next" onClick={() => go(1)}>
            →
          </button>
        </div>
      </div>
    </div>
  );
}
