import Link from "next/link";
import "./portal.css";

export const metadata = { title: "Portal mock-up — Himmah Prep", robots: { index: false } };

const WORKSPACE = ["Dashboard", "Applications", "Essays", "Activities", "Academics", "College Search", "Calendar", "Notes", "Inbox"];

const NEXT = [
  { what: "SAT mock", sub: "Test", when: "Tomorrow", date: "Oct 1" },
  { what: "Common App essay — draft 4", sub: "Essay", when: "3 days away", date: "Oct 3" },
  { what: "Oxford UCAS deadline", sub: "Application deadline", when: "15 days away", date: "Oct 15" },
];

export default function PortalMock() {
  return (
    <div className="pm">
      <aside className="pm-side">
        <div className="pm-brand">
          <span className="pm-mark">hp</span>
          <span>himmah<b>PREP</b></span>
        </div>

        <p className="pm-side-h">Workspace</p>
        <nav>
          {WORKSPACE.map((label, i) => (
            <a key={label} href="#" className={i === 0 ? "is-active" : undefined}>
              <span className="pm-ico" aria-hidden="true" />
              {label}
            </a>
          ))}
        </nav>
        <p className="pm-side-h">Resources</p>
        <nav>
          <a href="#">
            <span className="pm-ico" aria-hidden="true" />
            Key Links
          </a>
        </nav>

        <div className="pm-user">
          <span className="pm-avatar">LA</span>
          <span>
            <strong>Layla Al-Hassan</strong>
            <small>Junior · Class of 2028</small>
          </span>
        </div>
      </aside>

      <main className="pm-main">
        <div className="pm-top">
          <div>
            <h1>
              Welcome, <em>Layla</em>.
            </h1>
            <p className="pm-sub">Here&apos;s where things stand this week.</p>
          </div>
          <a href="#" className="pm-btn">
            View applications →
          </a>
        </div>

        <div className="pm-stats">
          {[
            ["GPA", "3.9", "Unweighted"],
            ["SAT", "1480", "Mock, Sept 20"],
            ["Apps in progress", "4", "2 submitted"],
            ["Acceptances", "—", "Decisions from Dec"],
          ].map(([l, v, f]) => (
            <div key={l} className="pm-stat">
              <p className="pm-stat-l">{l}</p>
              <p className="pm-stat-v">{v}</p>
              <p className="pm-stat-f">{f}</p>
            </div>
          ))}
        </div>

        <section className="pm-section">
          <div className="pm-section-h">
            <h2>Your sessions</h2>
          </div>
          <div className="pm-sessions">
            <div className="pm-session pm-session-ok">
              <div className="pm-session-top">
                <div>
                  <p className="pm-session-t">College counseling</p>
                  <p className="pm-session-p">Signature plan</p>
                </div>
                <p className="pm-session-frac">
                  14<span>/24</span>
                </p>
              </div>
              <div className="pm-bar">
                <span style={{ width: "58%" }} />
              </div>
              <div className="pm-session-row">
                <span className="pm-who">
                  <span className="pm-avatar pm-avatar-sm">TB</span>Tala Banaja
                </span>
                <span>
                  <b>14</b> used · <b>10</b> left
                </span>
              </div>
              <div className="pm-session-foot">
                <a href="#" className="pm-book">
                  Book session ↗
                </a>
              </div>
            </div>
            <div className="pm-session pm-session-low">
              <div className="pm-session-top">
                <div>
                  <p className="pm-session-t">SAT tutoring</p>
                  <p className="pm-session-p">15-hour package</p>
                </div>
                <p className="pm-session-frac">
                  11<span>/15</span>
                </p>
              </div>
              <div className="pm-bar">
                <span style={{ width: "73%" }} />
              </div>
              <div className="pm-session-row">
                <span className="pm-who">
                  <span className="pm-avatar pm-avatar-sm">JS</span>John Soliman
                </span>
                <span>
                  <b>11</b> used · <b>4</b> left
                </span>
              </div>
              <div className="pm-session-foot">
                <a href="#" className="pm-book">
                  Book session ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="pm-two">
          <div className="pm-card">
            <div className="pm-card-h">
              <h2>
                What&apos;s <em>next</em>
              </h2>
              <a href="#">All →</a>
            </div>
            <ul className="pm-list">
              {NEXT.map((n) => (
                <li key={n.what}>
                  <span className={`pm-dot pm-dot-${n.sub.split(" ")[0].toLowerCase()}`} aria-hidden="true" />
                  <span className="pm-list-main">
                    <span className="pm-list-w">{n.what}</span>
                    <span className="pm-list-s">{n.sub}</span>
                  </span>
                  <span className="pm-list-r">
                    <span className="pm-list-s">{n.when}</span>
                    <span className="pm-list-d">{n.date}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pm-card">
            <div className="pm-card-h">
              <h2>
                From your <em>counselor</em>
              </h2>
              <a href="#">Notes →</a>
            </div>
            <div className="pm-msg">
              <span className="pm-avatar">TB</span>
              <div>
                <p className="pm-msg-h">
                  <strong>Tala Banaja</strong>
                  <span>Mon 28 Sept</span>
                </p>
                <p className="pm-msg-t">
                  We settled the list at eight schools and moved Oxford to the top of the UK
                  side. Before Saturday: finish draft 4 of the Common App essay and send me
                  the two supplement ideas we discussed.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="pm-foot">
          Mock-up of the student dashboard with the design update: same layout as today, new
          typeface and finishes. Sample data.{" "}
          <Link href="/design">Back to designs</Link>
        </p>
      </main>
    </div>
  );
}
