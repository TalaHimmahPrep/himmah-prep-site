import type { ReactNode } from "react";

export type PostCategory = "All Students" | "GCC Students";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  date: string;
  dateLabel: string;
  readMinutes: number;
  body: ReactNode;
};

export const POSTS: Post[] = [
  {
    slug: "college-admissions-roadmap-9th-12th-grade",
    title: "The Complete College Admissions Roadmap: 9th to 12th Grade",
    excerpt:
      "If your child is aiming for a top US university, the process starts much earlier than most families realize. This year-by-year roadmap covers exactly what to focus on from 9th through 12th grade — so you're never scrambling at the last minute.",
    category: "All Students",
    date: "2026-04-13",
    dateLabel: "April 13, 2026",
    readMinutes: 7,
    body: (
      <>
        <h2>9th Grade: laying the foundation</h2>
        <p>
          9th grade is about building strong habits and a solid academic base. Colleges will see
          these grades, and they matter more than most families expect.
        </p>
        <p>
          <strong>What to focus on:</strong>
        </p>
        <ul>
          <li>Choose a course load that is challenging but manageable. Burning out in 9th grade helps no one.</li>
          <li>Establish consistent study routines, sleep schedules, and time management habits early.</li>
          <li>Encourage involvement in 1–2 activities your child genuinely enjoys — a club, sport, hobby, or volunteer role.</li>
          <li>Help them explore interests through reading, podcasts, or short online courses so future strengths can emerge naturally.</li>
        </ul>
        <p>
          You don&apos;t need to talk about college every week. But send a clear message: the
          choices you make now <em>open doors later</em>.
        </p>

        <h2 className="prose-h2-next">10th Grade: exploration and depth</h2>
        <p>
          In 10th grade, the goal is to deepen what was started rather than constantly switching
          directions. Admissions officers value continuity and impact far more than a long list of
          unrelated activities.
        </p>
        <p>
          <strong>Key priorities:</strong>
        </p>
        <ul>
          <li>Continue taking increasingly rigorous courses, especially in core subjects like math, science, and English.</li>
          <li>Stick with at least one or two activities from 9th grade and look for ways to deepen involvement — take on a leadership role, organize an event, or mentor younger students.</li>
          <li>Begin light standardized test exposure (PSAT, practice SAT/ACT) if relevant for your region.</li>
          <li>Start a simple document tracking achievements, awards, and meaningful projects — this becomes invaluable later.</li>
        </ul>
        <p>
          This is also a great year for small leadership steps: organizing a community project,
          launching a simple initiative, or contributing something tangible to a club or team.
        </p>

        <h2 className="prose-h2-next">11th Grade: the most important academic year</h2>
        <p>
          For selective college admissions, 11th grade is often the single most critical year. It
          is when academic records are most scrutinized and when application strategy should begin
          taking shape.
        </p>
        <p>
          <strong>Priorities for 11th grade:</strong>
        </p>
        <ul>
          <li>Take the most rigorous course load you can sustain without compromising mental health or grades.</li>
          <li>Aim for sustained excellence — this is not the year to check out academically.</li>
          <li>Sit for the SAT or ACT and leave time for at least one retake if needed.</li>
          <li>Pursue deeper leadership and impact in a key activity or passion project.</li>
          <li>Begin serious college research: build a draft college list and attend virtual information sessions where possible.</li>
          <li>Build strong relationships with 1–2 core teachers who will write your letters of recommendation.</li>
        </ul>
        <p>
          By late 11th grade or early summer, most students benefit from a clear written
          application plan: target schools, deadlines, intended major, and overall narrative.
        </p>

        <h2 className="prose-h2-next">12th Grade: execution and storytelling</h2>
        <p>
          12th grade is where years of preparation turn into a real application. The biggest
          mistake families make is waiting until school starts to think about essays and strategy.
        </p>
        <p>
          <strong>From the summer before 12th grade through submission:</strong>
        </p>
        <ul>
          <li>Finalize a balanced college list with reach, match, and safety schools.</li>
          <li>Draft and revise the personal statement and supplemental essays over the summer — before senior year stress kicks in.</li>
          <li>Request letters of recommendation early and give teachers a summary of your key accomplishments.</li>
          <li>Keep grades strong through the fall semester — colleges do see first-semester 12th grade performance.</li>
          <li>Submit applications strategically based on Early Decision, Early Action, and Regular Decision timelines.</li>
          <li>Prepare for interviews and, later, for comparing financial aid packages.</li>
        </ul>
        <p>
          Students who follow this roadmap are able to present a coherent, confident story — not a
          last-minute scramble. The difference is almost always visible in the final application.
        </p>
      </>
    ),
  },
  {
    slug: "how-admissions-officers-read-college-applications",
    title: "How Admissions Officers Actually Read College Applications",
    excerpt:
      "Most families imagine a single reader carefully weighing every word of every essay. The reality is more structured — and once you understand it, it changes how you approach the entire application.",
    category: "All Students",
    date: "2026-04-13",
    dateLabel: "April 13, 2026",
    readMinutes: 6,
    body: (
      <>
        <h2>The first glance: academics and context</h2>
        <p>
          In most selective admissions offices, readers begin with the high school profile and the
          transcript. Before evaluating a student, they want to understand the context: what
          courses were available at this school, how rigorous is the curriculum, and where does
          this student sit within their environment?
        </p>
        <p>At this stage, readers look at:</p>
        <ul>
          <li>
            <strong>Course rigor over time</strong> — did the student challenge themselves
            appropriately given what was available?
          </li>
          <li>
            <strong>Overall GPA and grade trends</strong> — especially in core subjects like
            English, math, science, and history.
          </li>
          <li>
            <strong>Any major drops or spikes</strong> — and whether they are explained elsewhere
            in the application.
          </li>
          <li>
            <strong>Standardized test scores</strong>, if submitted, considered alongside the
            transcript and school context — never in isolation.
          </li>
        </ul>
        <p>
          A student from a school with limited AP offerings is evaluated differently than a
          student from a school with 30 AP courses. <em>Context always matters.</em>
        </p>

        <h2 className="prose-h2-next">The story pass: activities, essays, recommendations</h2>
        <p>
          Once academics clear a basic threshold for the institution, attention shifts to the
          story: who is this student beyond their numbers?
        </p>
        <ul>
          <li>
            <strong>Activities</strong> — depth, continuity, leadership, and impact matter far
            more than quantity. A list of 10 clubs with no leadership is far weaker than 3
            activities with meaningful involvement.
          </li>
          <li>
            <strong>Essays</strong> — voice, reflection, values, and self-awareness. Admissions
            officers are not looking for a summary of your résumé. They want to understand how you
            think.
          </li>
          <li>
            <strong>Recommendations</strong> — what teachers and counselors reveal about
            character, intellectual curiosity, and classroom presence. A genuinely enthusiastic
            recommendation stands out immediately.
          </li>
        </ul>
        <p>
          The central question at this stage:{" "}
          <em>Can we picture this student in our community, and do they bring something distinctive?</em>
        </p>

        <h2 className="prose-h2-next">The holistic decision: building a class</h2>
        <p>
          This is the part most families misunderstand. Holistic admissions is <em>not</em> a
          euphemism for ignoring grades. It is about building a diverse, cohesive class that can
          learn from and challenge one another — not simply selecting the highest GPAs.
        </p>
        <ul>
          <li>A student might be admitted partly because of how their background, talent, or perspective complements others in a given year&apos;s class.</li>
          <li>Soft factors — essays, recommendations, demonstrated interest — can tip decisions between otherwise similar applicants.</li>
          <li>Institutional priorities such as geographic diversity, specific program needs, or first-generation representation play a real role in every admissions cycle.</li>
        </ul>

        <h2 className="prose-h2-next">What this means for your child&apos;s application</h2>
        <p>
          Understanding this process points to a clear strategy: build a record that clears the
          academic threshold comfortably, then invest serious time and energy into the story —
          activities with depth, essays with genuine voice, and recommendations from teachers who
          know your child well.
        </p>
        <p>Control what you can. Acknowledge what you cannot. Then let the application speak for itself.</p>
      </>
    ),
  },
  {
    slug: "reach-match-safety-schools-college-list",
    title: "Reach, Match, and Safety Schools — How to Build the Right College List",
    excerpt:
      "A clear, realistic college list is one of the most powerful tools a family can have. Here's exactly what reach, match, and safety schools mean — and how to build a balanced list that gives your child real options.",
    category: "All Students",
    date: "2026-04-13",
    dateLabel: "April 13, 2026",
    readMinutes: 5,
    body: (
      <>
        <p>
          A well-structured college list reduces anxiety, distributes risk, and ensures that
          wherever a student ends up, they have <em>real options</em> they are genuinely excited
          about. Here&apos;s the framework we use with every Himmah Prep family.
        </p>

        <h2 className="prose-h2-next">What is a reach school?</h2>
        <p>
          A reach school is one where a student&apos;s academic profile falls at the lower end of
          or below the typical admitted range — or where acceptance rates are so low that outcomes
          become unpredictable even for highly qualified applicants.
        </p>
        <p>
          Schools like Harvard, Yale, Princeton, and MIT function as reaches for nearly all
          students. With acceptance rates under 5%, statistical unpredictability applies regardless
          of profile strength. A healthy list typically includes <strong>2–4 reach schools</strong>,
          pursued for possibility rather than as a list foundation.
        </p>

        <h2 className="prose-h2-next">What is a match school?</h2>
        <p>
          Match schools align with a student&apos;s grades, course rigor, and test scores at or
          slightly above the median of the admitted class, with reasonable acceptance rates.
        </p>
        <p>
          Key indicators: an academic profile around the median of the previous year&apos;s
          admitted class, and moderate admit rates (often 25–50%, varying by institution). Match
          schools are where students frequently thrive most — academically, socially, and
          financially. A healthy list typically includes <strong>4–6 match schools</strong>.
        </p>

        <h2 className="prose-h2-next">What is a safety school?</h2>
        <p>
          A safety school requires <em>both</em> strong likelihood of admission and genuine
          willingness to attend. True criteria: an academic profile clearly stronger than typical
          admitted students, high admit rates (often 60% or above), and financial/logistical
          feasibility. A healthy list includes <strong>at least 2–3 true safety schools</strong>.
        </p>

        <h2 className="prose-h2-next">A balanced list, in numbers</h2>
        <ul>
          <li>
            <strong>2–4 reach schools</strong> — dream schools and highly selective options.
          </li>
          <li>
            <strong>4–6 match schools</strong> — where the student is genuinely competitive.
          </li>
          <li>
            <strong>2–3 safety schools</strong> — where admission is highly likely.
          </li>
        </ul>

        <h2 className="prose-h2-next">The most common mistake</h2>
        <p>
          Loading lists with too many reaches while neglecting true matches and safeties. This
          creates a high-risk strategy that leaves students with limited options if reach decisions
          are unsuccessful — exactly the outcome a balanced list is designed to prevent.
        </p>
      </>
    ),
  },
  {
    slug: "how-much-do-grades-matter-college-admissions",
    title: "How Much Do Grades Really Matter for Top US College Admissions?",
    excerpt:
      "Families hear conflicting advice on this constantly. The truth is more nuanced — and more useful than either extreme. Here's what admissions officers actually look at when they see your child's GPA.",
    category: "All Students",
    date: "2026-04-11",
    dateLabel: "April 11, 2026",
    readMinutes: 6,
    body: (
      <>
        <h2>How admissions officers actually view GPA</h2>
        <p>
          Colleges do not look at GPA in isolation. They place your child&apos;s record in the
          context of their school, curriculum, and available opportunities.
        </p>
        <p>What they consider:</p>
        <ul>
          <li>
            <strong>Overall GPA across four years</strong> — not just one strong semester or one
            weak one.
          </li>
          <li>
            <strong>Grade trends</strong> — an upward trajectory from 9th to 11th grade is often
            more compelling than a flat but mediocre record.
          </li>
          <li>
            <strong>Subject-level performance</strong> — especially in areas relevant to the
            student&apos;s intended major or stated interests.
          </li>
          <li>
            <strong>The school&apos;s grading context</strong> — a 3.8 at a highly competitive
            school with grade deflation may be viewed more favorably than a 4.0 at a school where
            A&apos;s are given freely.
          </li>
        </ul>
        <p>
          The GPA number matters less than what it reveals about consistency, resilience,
          intellectual engagement, and readiness for college-level work.
        </p>

        <h2 className="prose-h2-next">Why course rigor matters as much as GPA</h2>
        <p>
          Rigor answers a question that raw GPA cannot: did this student take advantage of the
          opportunities available to them?
        </p>
        <ul>
          <li>Students who chose challenging courses — AP, IB, A-levels, honors, or advanced national curriculum — when those options were available.</li>
          <li>Evidence the student sought depth and challenge in core subjects, not just easy electives to protect their average.</li>
          <li>A balance between ambition and sustainability — overwhelming a student with too many advanced courses can backfire if grades suffer significantly as a result.</li>
        </ul>
        <p>
          In many cases, a slightly lower grade in a rigorous course is more impressive than a
          perfect mark in an easier track, provided the overall academic record is strong and
          consistent.
        </p>

        <h2 className="prose-h2-next">What about class rank?</h2>
        <p>
          Not all schools provide class rank, and colleges understand that. When rank is
          available, it offers a quick snapshot — but it is always interpreted carefully and in
          context. What matters more than rank:
        </p>
        <ul>
          <li>How a student&apos;s course load compares to what top students at their school typically take.</li>
          <li>Whether their performance is consistent with their level of academic challenge.</li>
          <li>How counselors describe the student&apos;s standing and growth in recommendation letters.</li>
        </ul>

        <h2 className="prose-h2-next">The GPA floors that actually matter</h2>
        <p>
          Context always applies, but here is an honest reality check for selective admissions:
        </p>
        <ul>
          <li>
            <strong>Top 10 schools</strong> — most admitted students have GPAs of 3.9 or above in
            a rigorous curriculum.
          </li>
          <li>
            <strong>Top 20 schools</strong> — competitive applicants typically have GPAs of 3.7 or
            above.
          </li>
          <li>
            <strong>Top 50 schools</strong> — a 3.5 or above in a solid curriculum is generally
            competitive.
          </li>
        </ul>
        <p>
          These are not hard cutoffs — holistic review means exceptions exist in both directions.
          But they are useful benchmarks for calibrating expectations.
        </p>

        <h2 className="prose-h2-next">The practical takeaway for families</h2>
        <p>
          Encourage your child to take the most appropriately challenging curriculum they can
          sustain — not the hardest possible schedule at any cost. Then support them in building
          consistent, long-term academic habits rather than cramming for short-term results.
        </p>
        <p>
          A student who earns a 3.85 across four years in a rigorous course load, with an upward
          trend, is a far more compelling candidate than a student who earns a 4.0 in easier
          courses or shows a downward trajectory in 11th grade.
        </p>
        <p>
          <em>Grades matter. Context matters more.</em>
        </p>
      </>
    ),
  },
  {
    slug: "how-to-get-into-us-university-saudi-arabia",
    title: "How to Get Into a Top US University from Saudi Arabia",
    excerpt:
      "Saudi students have everything it takes to get into the world's best universities. But the path from Riyadh or Jeddah to Harvard or MIT requires a different strategy than most families realize. Here's exactly what works.",
    category: "GCC Students",
    date: "2024-09-01",
    dateLabel: "September 1, 2024",
    readMinutes: 9,
    body: (
      <>
        <h2>The Saudi student profile — what you&apos;re working with</h2>
        <p>
          Most Saudi students applying to US universities come from one of two curricula: the
          International Baccalaureate (IB) or the American curriculum. Both are solid foundations.
          Both are understood by US admissions officers. Neither fully prepares students for the
          demands of a competitive US application.
        </p>
        <p>The typical Saudi student we work with arrives with:</p>
        <ul>
          <li>A strong academic record — but one that looks similar to thousands of other international applicants.</li>
          <li>Extracurricular activities that feel impressive locally but don&apos;t differentiate on a global stage.</li>
          <li>SAT scores in the 1200s — significantly below the 1500+ target for top 20 universities.</li>
          <li>A belief that grades and test scores are the primary deciding factors.</li>
        </ul>
        <p>That last point is where most Saudi families need the biggest mindset shift.</p>

        <h2 className="prose-h2-next">What US admissions officers actually look for</h2>
        <p>
          Harvard, MIT, Stanford, and every Ivy League school receives tens of thousands of
          applications from students with perfect grades and high test scores.{" "}
          <em>Academic excellence gets your application read. It does not get you admitted.</em>
        </p>
        <p>
          What actually gets Saudi students into elite US universities is a combination of four
          things:
        </p>
        <ol>
          <li>
            <strong>A clear spike</strong> — one area of genuine depth, impact, and demonstrated
            excellence that makes you impossible to forget. Not ten activities. One direction
            pursued with real commitment over years.
          </li>
          <li>
            <strong>Real impact</strong> — the Saudi students we&apos;ve helped gain admission to
            top universities weren&apos;t just participating. They were building startups with real
            revenue, founding non-profits with measurable change, conducting independent
            university research, competing in ISEF, IBO, IPhO.
          </li>
          <li>
            <strong>A compelling personal narrative</strong> — your application should tell a
            coherent story about who you are, what drives you, and what you will contribute to a
            university community. Most Saudi students write essays about moving, academics, or
            their school. The students who get in write about <em>themselves</em>.
          </li>
          <li>
            <strong>Strategic execution</strong> — the right college list, Early Decision where it
            gives you an advantage, and an application that presents your profile in the most
            compelling possible way.
          </li>
        </ol>

        <h2 className="prose-h2-next">The SAT: your most urgent priority</h2>
        <p>
          Most Saudi students we work with are scoring in the 1200s when they first contact us.
          Our target for a competitive top 20 application is <strong>1500 or above</strong>.
        </p>
        <p>That gap is closeable — but it requires starting early and working systematically.</p>
        <p>
          Saudi students most commonly lose points in two areas: English grammar and Algebra-2-level
          mathematics. These are fixable with structured, one-on-one preparation. Most of our
          Saudi students reach their target score across three attempts, typically spanning 10th
          and 11th grade.
        </p>
        <p>
          One important note: most Saudi students whose schooling has been conducted in English are
          exempt from TOEFL and IELTS requirements at US universities. We advise every family on
          the exact exemption policies of their target schools.
        </p>

        <h2 className="prose-h2-next">Building a spike that stands out</h2>
        <p>
          The single biggest mistake Saudi students make is believing their current activities are
          competitive for top US universities. A spike is not a list of clubs. It is not volunteer
          hours. It is a clear, consistent thread of <em>genuine depth and impact</em> in one
          focused area — built over years.
        </p>
        <p>
          <strong>Start in 9th or 10th grade.</strong> A spike cannot be manufactured in 12th
          grade. Admissions officers can tell the difference between four years of genuine
          commitment and a last-minute résumé padding exercise.
        </p>
        <p>
          <strong>Go deep, not broad.</strong> Pick one direction — engineering, entrepreneurship,
          research, community impact — and pursue it with increasing sophistication every year.
        </p>
        <p>
          <strong>Build in three stages:</strong>
        </p>
        <ul>
          <li>
            <strong>Skill</strong> — learn deeply. Take advanced courses, read beyond the
            curriculum, build real competence.
          </li>
          <li>
            <strong>Contribution</strong> — apply your skills. Tutor, compete, volunteer in your
            area of expertise.
          </li>
          <li>
            <strong>Impact</strong> — create something. Launch a startup, publish research, build
            an initiative that outlasts you.
          </li>
        </ul>
        <p>
          The Saudi students who get into MIT are the ones who built something real. Not the ones
          who joined every club.
        </p>

        <h2 className="prose-h2-next">Summer programs that change applications</h2>
        <p>
          For Saudi students, the summer before 11th grade is one of the most strategically
          important windows in the entire application process. Programs that have made the biggest
          difference for our students:
        </p>
        <ul>
          <li>
            <strong>Research Science Institute (RSI)</strong> — one of the most prestigious
            pre-college research programs in the world, held at MIT.
          </li>
          <li>
            <strong>Saudi Research Science Institute (SRSI)</strong> — Saudi version modeled after
            MIT.
          </li>
          <li>
            <strong>Summer@Brown</strong> — academic enrichment at Brown University.
          </li>
          <li>
            <strong>Yale Young Global Scholars (YYGS)</strong> — interdisciplinary program for
            high-achieving international students.
          </li>
        </ul>
        <p>
          Getting into these programs is itself a competitive process — and it signals to US
          admissions officers that you are a serious, globally competitive applicant.
        </p>

        <h2 className="prose-h2-next">The college-list mistake most Saudi families make</h2>
        <p>
          We speak with Saudi families every week who have built their entire college strategy
          around three or four elite schools — Harvard, MIT, Yale, Princeton — with no matches and
          no safeties. This is the &ldquo;all or nothing&rdquo; approach. And it is one of the
          highest-risk strategies in college admissions.
        </p>
        <p>
          Harvard&apos;s acceptance rate is under 4%. Princeton&apos;s is under 4%. Even the
          strongest applications in the world are rejected from schools like these every year. A
          list without strong matches and reliable safeties leaves students with no good options
          if reach decisions don&apos;t go their way.
        </p>
        <p>
          The families whose children consistently succeed build balanced lists — ambitious
          reaches, competitive matches, and reliable safeties — and apply using Early Decision
          where it gives them the strongest advantage.
        </p>

        <h2 className="prose-h2-next">When to start</h2>
        <p>
          10th grade is our ideal entry point for Saudi students. By 10th grade you have enough
          academic history to identify gaps — but still enough time to close them. There are two
          full years to build meaningful activities, prepare for standardized tests thoughtfully,
          and explore competitive summer programs.
        </p>
        <p>
          We do work with 11th and 12th grade students, but the strategy shifts significantly as
          timelines compress. The earlier you start, the more levers we have to pull.
        </p>

        <h2 className="prose-h2-next">How Himmah Prep works with Saudi families</h2>
        <p>
          Himmah Prep was founded by graduates of Harvard and the University of Pennsylvania. Our
          students have been admitted to every top 20 university in the United States — including
          Harvard, Stanford, Yale, MIT, Princeton, Cornell, Duke, and UC Berkeley. We work
          entirely online, on a schedule that works across time zones, and support students
          applying to UK universities simultaneously. We work with a limited number of Saudi
          students each year to ensure every family receives genuinely personalized attention.
        </p>
      </>
    ),
  },
  {
    slug: "college-admissions-spike-how-to-build",
    title: "What Is a “Spike” in College Admissions — And How to Build One",
    excerpt:
      "Families often hear that colleges want well-rounded students. But what top schools actually want is a well-rounded class. Here's what a spike is and how your child can build one.",
    category: "All Students",
    date: "2019-05-28",
    dateLabel: "May 28, 2019",
    readMinutes: 5,
    body: (
      <>
        <p>
          Colleges seek <em>well-rounded classes</em> containing individuals with notable depth in
          specific areas. A &ldquo;spike&rdquo; represents this focused strength that admissions
          officers remember among hundreds of applications.
        </p>

        <h2 className="prose-h2-next">What is a spike?</h2>
        <p>
          A spike is a clear area of strength, interest, or impact that runs consistently through
          a student&apos;s academics, activities, and personal story. It&apos;s not about
          extraordinary achievements — it&apos;s about demonstrating sustained commitment and
          genuine expertise in a focused direction.
        </p>
        <p>Examples include:</p>
        <ul>
          <li>Specific academic fields (applied mathematics, international relations, film scoring).</li>
          <li>Particular work types (community organizing, entrepreneurship, research).</li>
          <li>Technical or creative skills (competitive programming, documentary filmmaking, product design).</li>
        </ul>

        <h2 className="prose-h2-next">Discovering a spike</h2>
        <p>
          Students need not identify their spike early. Instead, observe:
        </p>
        <ul>
          <li>Topics students explore voluntarily beyond requirements.</li>
          <li>Activities pursued without external incentives.</li>
          <li>Community problems they frequently discuss.</li>
        </ul>
        <p>
          Low-stakes experimentation through online courses, clubs, competitions, and
          self-directed projects helps students explore naturally.
        </p>

        <h2 className="prose-h2-next">Building a spike intentionally</h2>
        <p>Growth occurs through three stages:</p>
        <ul>
          <li>
            <strong>Stage 1 — Skill.</strong> Develop genuine competence through classes, tools,
            and deep reading.
          </li>
          <li>
            <strong>Stage 2 — Contribution.</strong> Apply skills meaningfully through tutoring,
            volunteering, competing, or collaboration.
          </li>
          <li>
            <strong>Stage 3 — Impact.</strong> Launch initiatives, publish work, lead teams, or
            create tangible results.
          </li>
        </ul>

        <h2 className="prose-h2-next">The most common mistake</h2>
        <p>
          Parents often manufacture impressive-looking spikes externally — which admissions
          officers easily detect as inauthentic résumé-building rather than genuine passion. The
          spikes that work are the ones the student actually wanted to build.
        </p>
      </>
    ),
  },
];

export const POSTS_BY_SLUG: Record<string, Post> = Object.fromEntries(
  POSTS.map((p) => [p.slug, p])
);
