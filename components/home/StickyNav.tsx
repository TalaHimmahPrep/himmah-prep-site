"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`hp3-nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="hp3-nav-inner">
        <Link href="/" aria-label="Himmah Prep home" className="hp3-brand">
          <Image src="/logo-wordmark.png" alt="Himmah Prep" width={1393} height={203} priority />
        </Link>
        <nav aria-label="Primary">
          <a href="#work">What we do</a>
          <a href="#results">Results</a>
          <a href="#how">How it works</a>
          <Link href="/blog">Blog</Link>
          <a href="https://portal.himmahprep.com">Portal</a>
        </nav>
        <a href="#consult" className="hp3-btn hp3-btn-sm">
          Free consultation
        </a>
      </div>
    </header>
  );
}
