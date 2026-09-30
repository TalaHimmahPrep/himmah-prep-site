import Link from "next/link";
import "./portal.css";

export const metadata = { title: "Portal mock-up — Himmah Prep", robots: { index: false } };

const NAV = [
  ["Dashboard", true],
  ["Applications", false],
  ["Essays", false],
  ["Activities", false],
  ["Academics", false],
  ["College Search", false],
  ["Calendar", false],
  ["Notes", false],
  ["Inbox", false],
] as const;

const APPS = [
  { school: "Stanford", type: "REA", due: "Nov 1", status: "Essays in review" },
  { school: "Cornell", type: "ED", due: "Nov 1", status: "Supplement drafted" },
  { school: "UC Berkeley", type: "RD", due: "Nov 30", status: "Not started" },
  { school: "Oxford", type: "UCAS", due: "Oct 15", status: "Personal statement final" },
];

const NEXT = [
  { when: "Tomorrow", what: "SAT mock, Saturday 9am", kind: "Test" },
  { when: "3 days", what: "Common App essay — draft 4 due", kind: "Essay" },
  { when: "12 days", what: "Oxford UCAS deadline", kind: "Deadline" },
  { when: "Nov 1", what: "Stanford REA submission", kind: "Deadline" },
];

export default function PortalMock() {
  return (
    <div className="pm">
      <aside className="pm-side">
        <div className="pm-brand">
          <span className="pm-mark">hp</span>
          <span>Himmah Portal</span>
        </div>
        <p className="pm-side-h">Workspace</p>
        <nav>
          {NAV.map(([label, active]) => (
            <a key={label} href="#" className={active ? "is-active" : undefined}>
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
        <header className="pm-top">
          <div>
            <p className="pm-eyebrow">Wednesday, 30 September</p>
            <h1>
              Good morning, <em>Layla</em>.
            </h1>
          </div>
          <a href="#" className="pm-btn">
            Book a session <span aria-hidden="true">→</span>
          </a>
        </header>

        <section className="pm-stats">
          {[
            ["3.9", "GPA", "Unweighted"],
            ["1480", "SAT", "Mock, Sept 20"],
            ["4", "Applications", "2 in progress"],
            ["0", "Acceptances", "Decisions from Dec"],
          ].map(([v, l, s]) => (
            <div key={l} className="pm-stat">
              <p className="pm-stat-l">{l}</p>
              <p className="pm-stat-v">{v}</p>
              <p className="pm-stat-s">{s}</p>
            </div>
          ))}
        </section>

        <div className="pm-grid">
          <section className="pm-card pm-apps">
            <div className="pm-card-h">
              <h2>Applications</h2>
              <a href="#">View board →</a>
            </div>
            <table>
              <thead>
                <tr>
                  <th>School</th>
                  <th>Round</th>
                  <th>Deadline</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {APPS.map((a) => (
                  <tr key={a.school}>
                    <td className="pm-school">{a.school}</td>
                    <td>
                      <span className="pm-chip">{a.type}</span>
                    </td>
                    <td>{a.due}</td>
                    <td>{a.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="pm-card pm-sessions">
            <div className="pm-card-h">
              <h2>Your sessions</h2>
            </div>
            <div className="pm-session">
              <p className="pm-session-l">College counseling</p>
              <p className="pm-session-v">
                <strong>14</strong> / 24 used
              </p>
              <div className="pm-bar">
                <span style={{ width: "58%" }} />
              </div>
              <p className="pm-session-s">10 sessions left · Tala Banaja</p>
            </div>
            <div className="pm-session">
              <p className="pm-session-l">SAT tutoring</p>
              <p className="pm-session-v">
                <strong>11</strong> / 15 hours
              </p>
              <div className="pm-bar is-warm">
                <span style={{ width: "73%" }} />
              </div>
              <p className="pm-session-s">4 hours left · next: Saturday 9am</p>
            </div>
          </section>

          <section className="pm-card pm-next">
            <div className="pm-card-h">
              <h2>What&apos;s next</h2>
              <a href="#">Calendar →</a>
            </div>
            <ul>
              {NEXT.map((n) => (
                <li key={n.what}>
                  <span className={`pm-dot pm-dot-${n.kind.toLowerCase()}`} aria-hidden="true" />
                  <span className="pm-next-w">{n.what}</span>
                  <span className="pm-next-t">{n.when}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="pm-card pm-note">
            <div className="pm-card-h">
              <h2>From your counselor</h2>
              <a href="#">All notes →</a>
            </div>
            <p className="pm-note-date">Mon 28 Sept · Tala Banaja</p>
            <h3>Strategy session — college list review</h3>
            <p>
              We settled the list at eight schools and moved Oxford to the top of the UK
              side. Before Saturday: finish draft 4 of the Common App essay and send me the
              two supplement ideas we discussed.
            </p>
            <p className="pm-note-steps">
              <span>Next steps</span> Draft 4 by Friday · Two supplement ideas · Book SAT mock
            </p>
          </section>
        </div>

        <p className="pm-foot">
          Mock-up of the student dashboard in the new design. Data shown is sample data.{" "}
          <Link href="/design">Back to designs</Link>
        </p>
      </main>
    </div>
  );
}
