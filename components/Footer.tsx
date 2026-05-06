import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand">
            <Image
              src="/logo.webp"
              alt="Himmah Prep"
              width={216}
              height={54}
              className="brand-logo brand-logo-light"
            />
          </span>
          <p className="muted-sm">
            Premium college admissions consulting for Gulf students. Riyadh · Dubai · Online.
          </p>
        </div>
        <div className="footer-cols">
          <div>
            <p className="footer-h">Program</p>
            <Link href="/about">About</Link>
            <Link href="/results">Results</Link>
            <Link href="/standardized-test-tutors">Test Prep</Link>
            <Link href="/apply">Apply</Link>
          </div>
          <div>
            <p className="footer-h">For families in</p>
            <Link href="/saudi-arabia">Saudi Arabia</Link>
            <Link href="/uae">UAE</Link>
            <Link href="/qatar">Qatar</Link>
            <Link href="/kuwait">Kuwait</Link>
            <Link href="/bahrain">Bahrain</Link>
            <Link href="/oman">Oman</Link>
          </div>
          <div>
            <p className="footer-h">Account</p>
            <Link href="/shop">Application Guide</Link>
            <Link href="/advisor-career">Careers</Link>
            <a href="https://portal.himmahprep.com">Student Portal</a>
            <Link href="/terms-and-conditions">Terms</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Himmah Prep. All rights reserved.</span>
        <span>
          Built for students with <em className="serif">himmah.</em>
        </span>
      </div>
    </footer>
  );
}
