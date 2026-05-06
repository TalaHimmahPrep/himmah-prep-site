"use client";

import { useEffect } from "react";

/**
 * Two-element custom cursor matched 1:1 to portal.himmahprep.com:
 * a 5px maroon dot follows the mouse exactly, a 30px gold ring
 * trails behind with smoothing and grows on interactive elements.
 */
export function Cursor() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = document.querySelector<HTMLDivElement>(".cursor-dot");
    const ring = document.querySelector<HTMLDivElement>(".cursor-ring");
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };
    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const frame = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      raf = requestAnimationFrame(frame);
    };

    const hoverable = "a, button, input, select, textarea, label, [data-cursor='hover']";
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(hoverable)) ring.classList.add("hover");
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest(hoverable)) ring.classList.remove("hover");
    };
    const onDown = () => {
      ring.style.transform = "translate(-50%, -50%) scale(0.85)";
    };
    const onUp = () => {
      ring.style.transform = "translate(-50%, -50%) scale(1)";
    };

    dot.style.opacity = "0";
    ring.style.opacity = "0";

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    raf = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
    </>
  );
}
