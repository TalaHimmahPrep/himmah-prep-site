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

  const q = quotes[i];

  return (
    <div
      className="hp4-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <figure className="hp4-carousel-quote" key={i}>
        <blockquote>{q.quote}</blockquote>
        <figcaption>
          <strong>{q.name}</strong>
          <span>{q.school}</span>
        </figcaption>
      </figure>
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
