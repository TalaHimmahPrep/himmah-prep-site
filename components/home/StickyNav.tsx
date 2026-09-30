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
    <header className={`hp4-nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="hp4-nav-inner">
        <Link href="/" aria-label="Himmah Prep home" className="hp4-brand">
          <Image src="/logo-wordmark.png" alt="Himmah Prep" width={1393} height={203} priority />
        </Link>
        <nav aria-label="Primary">
          <Link href="/about">About</Link>
          <Link href="/results">Results</Link>
          <Link href="/standardized-test-tutors">Test Prep</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/shop">Store</Link>
          <a href="https://portal.himmahprep.com">Student Portal</a>
        </nav>
        <a href="#consult" className="hp4-btn hp4-btn-sm">
          Free consultation
        </a>
      </div>
    </header>
  );
}
