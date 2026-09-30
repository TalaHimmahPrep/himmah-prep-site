"use client";

import { useEffect } from "react";

/**
 * Adds `.is-in` to every `[data-reveal]` element once its top edge has
 * come within the viewport (or has already passed it, e.g. after a jump
 * to an anchor). CSS handles the transition; nothing moves if the user
 * has asked for reduced motion.
 */
export function Reveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!els.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    let pending = els;
    let raf = 0;
    const check = () => {
      raf = 0;
      const limit = window.innerHeight * 0.92;
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top <= limit) {
          el.classList.add("is-in");
          return false;
        }
        return true;
      });
      if (!pending.length) stop();
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    const stop = () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    check();
    return () => {
      if (raf) cancelAnimationFrame(raf);
      stop();
    };
  }, []);
  return null;
}
