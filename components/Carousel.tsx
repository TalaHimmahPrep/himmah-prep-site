"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { UniversityLogo, type UniversitySlug } from "./UniversityLogo";

export type Testimonial = {
  university: UniversitySlug;
  universityLabel: string;
  quote: React.ReactNode;
  attribution: string;
  classYear: string;
  feature?: boolean;
};

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const step = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const slides = track.children;
    if (slides.length < 2) {
      return slides[0]?.getBoundingClientRect().width ?? 400;
    }
    return (
      (slides[1] as HTMLElement).getBoundingClientRect().left -
      (slides[0] as HTMLElement).getBoundingClientRect().left
    );
  }, []);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const s = step();
    if (s > 0) setActive(Math.round(track.scrollLeft / s));
    setAtStart(track.scrollLeft <= 4);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4);
  }, [step]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => requestAnimationFrame(update);
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const prev = () => trackRef.current?.scrollBy({ left: -step(), behavior: "smooth" });
  const next = () => trackRef.current?.scrollBy({ left: step(), behavior: "smooth" });
  const goTo = (i: number) =>
    trackRef.current?.scrollTo({ left: i * step(), behavior: "smooth" });

  return (
    <div className="carousel">
      <button
        className="carousel-arrow carousel-prev"
        aria-label="Previous testimonial"
        onClick={prev}
        disabled={atStart}
      >
        ←
      </button>
      <button
        className="carousel-arrow carousel-next"
        aria-label="Next testimonial"
        onClick={next}
        disabled={atEnd}
      >
        →
      </button>

      <div className="carousel-track" ref={trackRef}>
        {items.map((t, i) => (
          <figure key={i} className={`quote ${t.feature ? "quote-feature" : ""}`}>
            <span className="uni-logo">
              <UniversityLogo slug={t.university} label={t.universityLabel} />
            </span>
            <blockquote>{t.quote}</blockquote>
            <figcaption>
              <strong>{t.attribution}</strong>
              <span>
                {t.universityLabel} · Class of {t.classYear}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="carousel-dots" aria-hidden="true">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to testimonial ${i + 1}`}
            aria-current={i === active ? "true" : undefined}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
