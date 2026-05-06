import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand" aria-label="Himmah Prep home">
          <Image
            src="/logo.webp"
            alt="Himmah Prep"
            width={208}
            height={52}
            priority
            className="brand-logo"
          />
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link href="/about">About</Link>
          <Link href="/results">Results</Link>
          <Link href="/standardized-test-tutors">Test Prep</Link>
          <Link href="/shop">Store</Link>
          <a href="https://portal.himmahprep.com" className="nav-portal">
            Student Portal &rarr;
          </a>
        </nav>
        <Link href="/apply" className="btn btn-primary nav-cta">
          Free Consultation
        </Link>
      </div>
    </header>
  );
}
