import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions — Himmah Prep",
  description: "Terms and conditions for Himmah Prep services and digital products.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero page-hero-tight">
          <div className="page-hero-inner">
            <p className="eyebrow">Legal</p>
            <h1 className="display">Terms and Conditions</h1>
            <p className="lead muted-sm" style={{ textTransform: "none", letterSpacing: 0 }}>
              Last updated: May 7, 2026.
            </p>
          </div>
        </section>

        <section className="prose-section prose-narrow">
          <div className="prose">
            <p>
              By accessing this website, creating an account, submitting any information, or
              purchasing or participating in any services offered by Himmah Prep LLC
              (&ldquo;Himmah Prep,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;),
              you (&ldquo;you,&rdquo; &ldquo;Parent/Guardian,&rdquo; and/or &ldquo;Student&rdquo;)
              agree to be bound by these Terms and Conditions (the &ldquo;Terms&rdquo;). If you do
              not agree, you must not access or use this website or purchase any services. All
              sales are final and subject to these Terms.
            </p>

            <h2>1. Definitions</h2>
            <p>For purposes of these Terms:</p>
            <ul>
              <li>
                <strong>&ldquo;Services&rdquo;</strong> means any college preparation, SAT
                preparation, consulting, advising, tutoring, mentoring, online content, or related
                offerings provided by Himmah Prep.
              </li>
              <li>
                <strong>&ldquo;Student&rdquo;</strong> means the individual receiving the Services.
              </li>
              <li>
                <strong>&ldquo;Parent/Guardian&rdquo;</strong> means the person financially
                responsible for the Student&apos;s enrollment (if the Student is a minor).
              </li>
              <li>
                <strong>&ldquo;Programs&rdquo;</strong> means any College Preparation Program,
                Standalone SAT Preparation, or other package or product offered by Himmah Prep.
              </li>
            </ul>

            <h2 className="prose-h2-next">2. College Preparation Program</h2>
            <h3>2.1 Scope of Services</h3>
            <p>
              Himmah Prep&apos;s College Preparation Program provides educational and advisory
              services, which may include academic planning, extracurricular and leadership
              guidance, college list strategy, application timelines, essay and personal statement
              feedback, interview preparation, mentorship, and informational resources delivered
              via online or in-person formats as described at the time of purchase. All
              recommendations, strategies, and feedback are advisory only and implementation
              decisions remain solely your responsibility.
            </p>
            <p>
              Himmah Prep does not make admissions decisions and has no control over any college,
              university, scholarship committee, governmental body, testing organization, or other
              third-party institution, and is not affiliated with, endorsed by, or acting on behalf
              of any such institution.
            </p>

            <h3>2.2 No Guarantees</h3>
            <p>
              Results will vary by individual, and outcomes depend on factors outside Himmah
              Prep&apos;s control, including but not limited to academic history, test performance,
              personal effort, extracurricular record, institutional priorities, and overall
              applicant pool strength.
            </p>
            <p>
              Accordingly, Himmah Prep does not guarantee and expressly disclaims any warranty or
              promise regarding:
            </p>
            <ul>
              <li>Admission to any specific college, university, or educational institution.</li>
              <li>Acceptance into any specific program, major, or track.</li>
              <li>Award or amount of scholarships, financial aid, grants, or other funding.</li>
              <li>Achievement of any particular academic, professional, or personal outcome.</li>
            </ul>
            <p>
              Any testimonials, case studies, or references to past student results are
              illustrative of individual experiences only and do not constitute a guarantee or
              prediction of future performance or similar outcomes.
            </p>

            <h3>2.3 Fees, Payment, and No-Refund Policy</h3>
            <p>
              Unless expressly stated otherwise in a written agreement signed by Himmah Prep, all
              fees for the College Preparation Program are:
            </p>
            <ul>
              <li>Due as stated at checkout or in your enrollment document.</li>
              <li>
                Non-refundable and non-transferable under any circumstances, including but not
                limited to:
                <ul>
                  <li>Dissatisfaction with the Services or subjective expectations not being met.</li>
                  <li>Failure by the Student to schedule, attend, or participate in sessions.</li>
                  <li>Changes in personal, academic, medical, family, or financial circumstances.</li>
                  <li>Changes in educational goals, college list, or country of study.</li>
                  <li>Admissions outcomes, financial aid results, or scholarship decisions.</li>
                </ul>
              </li>
            </ul>
            <p>
              Once enrollment is confirmed, you are responsible for the full program fee regardless
              of the Student&apos;s level of participation, continued engagement, or use of the
              Services. If Himmah Prep offers any payment plans or installments, you remain
              obligated to pay all outstanding amounts in full even if you stop using the Services.
            </p>

            <h3>2.4 Scheduling and Attendance</h3>
            <p>
              You are responsible for scheduling sessions within the time frame communicated by
              Himmah Prep. Missed, canceled, or rescheduled sessions are subject to the
              cancellation/rescheduling rules communicated at the time of booking or in your
              enrollment agreement. Sessions not used within the applicable program term may expire
              and be forfeited at Himmah Prep&apos;s sole discretion without refund or credit.
            </p>

            <h3>2.5 Program Modifications</h3>
            <p>
              Himmah Prep reserves the right, at any time and without liability, to modify,
              substitute, or discontinue any aspect of the College Preparation Program, including
              but not limited to:
            </p>
            <ul>
              <li>Program content, curriculum, or materials.</li>
              <li>Delivery methods (e.g., shifting from in-person to virtual, or vice versa).</li>
              <li>Session length, schedule, or calendar.</li>
              <li>Assigned advisors, mentors, or staff.</li>
            </ul>
            <p>
              Such modifications will not entitle you to any refund, credit, price reduction, or
              other compensation, provided the overall nature of the Services remains substantially
              consistent with the description at the time of purchase.
            </p>

            <h2 className="prose-h2-next">3. Standalone SAT Preparation</h2>
            <h3>3.1 Scope of Services</h3>
            <p>
              Standalone SAT Preparation Services may include one-on-one or group tutoring,
              workshops, strategy sessions, practice tests, digital content, and other
              instructional resources focused on standardized test preparation for the SAT (and
              related exams if described at purchase). These Services are educational and
              instructional in nature and are not endorsed by, affiliated with, or approved by the
              College Board or any testing agency.
            </p>

            <h3>3.2 No Score or Outcome Guarantees</h3>
            <p>Himmah Prep does not guarantee:</p>
            <ul>
              <li>Any specific SAT score or subscore.</li>
              <li>Any minimum score improvement or percentage increase.</li>
              <li>Eligibility for or admission to any educational institution based on scores.</li>
            </ul>
            <p>
              Performance on standardized tests depends on factors such as prior knowledge,
              test-day conditions, mental and physical health, consistency of practice, and Student
              effort, all of which are beyond Himmah Prep&apos;s control.
            </p>

            <h3>3.3 Fees, No Refunds, and Forfeiture</h3>
            <p>
              All Standalone SAT Preparation purchases are <strong>final, non-refundable, and
              non-transferable</strong>. Without limiting the foregoing, no refunds or credits will
              be issued due to:
            </p>
            <ul>
              <li>Missed, canceled, or unused sessions.</li>
              <li>Scheduling conflicts or failure to coordinate with available time slots.</li>
              <li>Student withdrawal, disengagement, or decreased participation.</li>
              <li>
                Perceived lack of progress, dissatisfaction with teaching style, or mismatch of
                expectations.
              </li>
            </ul>
            <p>
              Any sessions or hours not used within the applicable program period or expiration
              date communicated at purchase are automatically forfeited, without refund, credit, or
              extension, unless Himmah Prep agrees otherwise in a written instrument signed by an
              authorized representative.
            </p>

            <h3>3.4 Expiration of Services</h3>
            <p>
              SAT Preparation Services must be utilized within the time period stated at the time
              of purchase, in your enrollment document, or on your account dashboard. Sessions or
              services that are not scheduled and completed by the stated expiration date will
              expire and may not be rescheduled, extended, transferred, or refunded.
            </p>

            <h2 className="prose-h2-next">4. User Conduct, Academic Integrity, and Content</h2>
            <h3>4.1 Academic Integrity and Plagiarism</h3>
            <p>
              Himmah Prep&apos;s role is to guide and advise; Students are responsible for
              producing their own original work. You agree that:
            </p>
            <ul>
              <li>
                You will not request, and Himmah Prep will not provide, ghostwriting or completion
                of academic assignments, assessments, exams, or application materials on your
                behalf.
              </li>
              <li>
                Essay and application support is limited to brainstorming, feedback, and coaching;
                final decisions and content remain the Student&apos;s responsibility.
              </li>
              <li>
                You will comply with all academic integrity policies of your school, college,
                university, and testing agencies.
              </li>
            </ul>
            <p>
              Himmah Prep may terminate or suspend Services immediately, without refund, if it
              reasonably believes you seek or use the Services in a way that violates academic
              honesty rules, application policies, or applicable law.
            </p>

            <h3>4.2 Website and Account Use</h3>
            <p>
              You agree to use the website and Services only for lawful purposes and in accordance
              with these Terms. You agree not to:
            </p>
            <ul>
              <li>Access or attempt to access another user&apos;s account.</li>
              <li>Share login credentials, access links, or paid content with any other person.</li>
              <li>
                Copy, download, record, publish, or distribute any content, materials, or sessions
                without prior written consent from Himmah Prep.
              </li>
            </ul>
            <p>
              Himmah Prep may suspend or terminate your access to the website and/or Services,
              without refund, for any misuse, abuse, or violation of these Terms or applicable law.
            </p>

            <h2 className="prose-h2-next">5. Intellectual Property</h2>
            <p>
              All content, curricula, templates, tools, checklists, strategies, videos, audio,
              graphics, logos, trademarks, trade names, branding, and documentation made available
              by Himmah Prep (online or offline) are and shall remain the exclusive intellectual
              property of Himmah Prep or its licensors.
            </p>
            <p>
              Subject to timely payment of applicable fees, Himmah Prep grants you a limited,
              personal, non-exclusive, non-transferable, revocable license to access and use such
              materials solely for your individual, non-commercial educational use during the term
              of your Program. You may not reproduce, modify, distribute, sell, sublicense,
              publicly display, or create derivative works based on Himmah Prep materials without
              prior written consent.
            </p>
            <p>
              Any unauthorized use, copying, or distribution may result in immediate termination of
              your access to the Services, without refund, and may subject you to civil and/or
              criminal liability.
            </p>

            <h2 className="prose-h2-next">
              6. Disclaimers, Limitation of Liability, and Indemnification
            </h2>
            <h3>6.1 General Disclaimers</h3>
            <p>
              To the maximum extent permitted by applicable law, the website and Services are
              provided on an &ldquo;<strong>as is</strong>&rdquo; and &ldquo;<strong>as
              available</strong>&rdquo; basis, without any express or implied warranties of any
              kind, including but not limited to warranties of accuracy, completeness, reliability,
              fitness for a particular purpose, or noninfringement.
            </p>
            <p>Himmah Prep does not warrant that:</p>
            <ul>
              <li>The Services or website will meet your requirements or expectations.</li>
              <li>The Services will be available on an uninterrupted, secure, or error-free basis.</li>
              <li>Any defects will be corrected on a particular timeline.</li>
            </ul>
            <p>
              You are solely responsible for verifying information with relevant institutions and
              making final decisions regarding applications, enrollments, and educational or career
              paths.
            </p>

            <h3>6.2 Limitation of Liability</h3>
            <p>
              To the fullest extent permitted by applicable law, in no event shall Himmah Prep, its
              owners, officers, employees, contractors, or agents be liable for any:
            </p>
            <ul>
              <li>Indirect, incidental, consequential, special, exemplary, or punitive damages.</li>
              <li>Loss of opportunity, loss of scholarships, loss of goodwill, or reputational harm.</li>
              <li>Loss of data or interruption of business.</li>
            </ul>
            <p>
              arising out of or in connection with your use of the website or Services, even if
              advised of the possibility of such damages.
            </p>
            <p>
              To the extent any liability is found despite the foregoing, Himmah Prep&apos;s total
              aggregate liability for any and all claims arising out of or related to the Services
              or these Terms shall not exceed the total amount of fees actually paid by you to
              Himmah Prep for the specific Program giving rise to the claim in the twelve (12)
              months preceding the claim. Nothing in these Terms is intended to exclude or limit
              liability that cannot be excluded or limited under applicable law.
            </p>

            <h3>6.3 Assumption of Risk</h3>
            <p>
              You understand and agree that educational, admissions, and testing outcomes are
              inherently uncertain and influenced by numerous factors beyond Himmah Prep&apos;s
              control. By enrolling in any Himmah Prep Program or using the Services, you
              voluntarily assume all risks associated with such uncertainty and with your decisions
              based on the information and advice provided.
            </p>

            <h3>6.4 Indemnification</h3>
            <p>
              You agree to indemnify, defend, and hold harmless Himmah Prep and its owners,
              officers, employees, contractors, and agents from and against any and all claims,
              demands, damages, losses, liabilities, judgments, costs, and expenses (including
              reasonable attorneys&apos; fees) arising out of or related to:
            </p>
            <ul>
              <li>Your use or misuse of the website or Services.</li>
              <li>Your breach of these Terms or any other agreement with Himmah Prep.</li>
              <li>Your violation of any applicable law or third-party rights.</li>
              <li>
                Any claim arising from your applications, submissions, communications, or
                representations to educational institutions, scholarship providers, or testing
                agencies.
              </li>
            </ul>

            <h2 className="prose-h2-next">7. Force Majeure</h2>
            <p>
              Himmah Prep shall not be liable for any delay, interruption, or failure to perform
              any obligation under these Terms due to events beyond its reasonable control,
              including but not limited to acts of God, natural disasters, war, terrorism, civil
              unrest, government actions, epidemics or pandemics, labor disputes, failures of
              telecommunications or internet service providers, or other similar events.
            </p>
            <p>
              In such circumstances, Himmah Prep may modify the method, schedule, or format of
              delivery (including transitioning to virtual-only services or asynchronous content)
              without obligation to provide any refund, credit, or price adjustment, provided that
              reasonably comparable Services continue to be offered.
            </p>

            <h2 className="prose-h2-next">8. Privacy and Data</h2>
            <p>
              Himmah Prep may collect and process personal information about Students and
              Parents/Guardians as described in its separate Privacy Policy, which is incorporated
              by reference into these Terms. By using the website or Services, you consent to such
              collection, use, and processing in accordance with the Privacy Policy and applicable
              laws.
            </p>
            <p>
              You are responsible for ensuring that the Student and any Parent/Guardian have
              consented to the collection and use of their personal data in connection with the
              Services.
            </p>

            <h2 className="prose-h2-next">
              9. Governing Law, Dispute Resolution, and Miscellaneous
            </h2>
            <h3>9.1 Governing Law</h3>
            <p>
              These Terms, and any dispute arising out of or relating to them, the website, or the
              Services, shall be governed by and construed in accordance with the laws of the{" "}
              <strong>Kingdom of Saudi Arabia</strong>, without regard to conflict-of-laws
              principles.
            </p>

            <h3>9.2 Dispute Resolution; Venue</h3>
            <p>
              You agree that any dispute, claim, or controversy arising out of or relating to these
              Terms or the Services that cannot be resolved informally shall be brought exclusively
              in the competent courts located in{" "}
              <strong>Riyadh, Kingdom of Saudi Arabia</strong>, and you hereby consent to the
              personal jurisdiction of such courts and waive any objection based on forum non
              conveniens.
            </p>

            <h3>9.3 No Professional, Legal, or Financial Advice</h3>
            <p>
              The Services do not constitute legal, tax, financial, medical, or mental health
              advice. You should consult qualified professionals regarding such matters. Himmah
              Prep&apos;s guidance is limited to educational and admissions-related coaching and
              advising.
            </p>

            <h3>9.4 Changes to These Terms</h3>
            <p>
              Himmah Prep may update or modify these Terms at any time by posting a revised version
              on this website with an updated Effective Date. Your continued use of the website or
              Services after any such changes constitutes your acceptance of the revised Terms.
            </p>

            <h3>9.5 Entire Agreement; Severability; Assignment</h3>
            <p>
              These Terms, together with any enrollment agreement, order form, and the Privacy
              Policy, constitute the entire agreement between you and Himmah Prep concerning the
              subject matter hereof and supersede all prior or contemporaneous understandings.
            </p>
            <p>
              If any provision of these Terms is held to be invalid, illegal, or unenforceable, the
              remaining provisions shall remain in full force and effect. You may not assign or
              transfer your rights or obligations under these Terms without Himmah Prep&apos;s
              prior written consent; Himmah Prep may assign these Terms in its discretion in
              connection with a reorganization, sale, or transfer of its business.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
