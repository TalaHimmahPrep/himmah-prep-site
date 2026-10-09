"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  ["/about", "About"],
  ["/results", "Results"],
  ["/standardized-test-tutors", "Test Prep"],
  ["/blog", "Blog"],
  ["/shop", "Store"],
] as const;

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the sheet is open; close on Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
    <header className={`hp4-nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="hp4-nav-inner">
        <Link href="/" aria-label="Himmah Prep home" className="hp4-brand" onClick={() => setOpen(false)}>
          <Image src="/logo-wordmark.png" alt="Himmah Prep" width={1393} height={203} priority />
        </Link>
        <nav aria-label="Primary" className="hp4-nav-links">
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
          <a href="https://portal.himmahprep.com">Student Portal</a>
        </nav>
        <div className="hp4-nav-actions">
          <Link href="/apply" className="hp4-btn hp4-btn-sm">
            Free consultation
          </Link>
          <button
            type="button"
            className="hp4-menu-btn"
            aria-expanded={open}
            aria-controls="hp4-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>

      {/* Rendered outside <header>: its backdrop-filter would otherwise trap this
          fixed sheet inside the 62px bar and clip it. */}
      <div id="hp4-menu" className="hp4-menu" hidden={!open}>
        <nav aria-label="Mobile">
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <a href="https://portal.himmahprep.com">Student Portal</a>
        </nav>
        <Link href="/apply" className="hp4-btn hp4-btn-primary hp4-menu-cta" onClick={() => setOpen(false)}>
          Book a free consultation
        </Link>
        <p className="hp4-menu-foot">
          <a href="mailto:connect@himmahprep.com">connect@himmahprep.com</a>
        </p>
      </div>
    </>
  );
}
