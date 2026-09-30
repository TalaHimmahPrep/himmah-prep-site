// Shared copy for the homepage design variants. Wording matches the
// live homepage; the variants only change layout and styling.

export const FAQS = [
  {
    q: "Where does Himmah Prep work with students?",
    a: "Across the Gulf — Riyadh, Jeddah, Dammam and Khobar in Saudi Arabia; Dubai and Abu Dhabi in the UAE; Doha, Kuwait City, Manama, and Muscat. Everything runs online, so the experience is identical wherever the student lives.",
  },
  {
    q: "What does the program include?",
    a: "College advising and application strategy, 1-on-1 SAT/ACT (and IELTS/TOEFL) prep, essay coaching on every draft, leadership workshops, and summer program planning — in one package, with a Himmah Prep team of counselors and tutors working from a single plan.",
  },
  {
    q: "Who are the advisors?",
    a: "Every Himmah Prep advisor holds a degree from an Ivy League university. The company was founded in 2020 by Harvard and University of Pennsylvania graduates.",
  },
  {
    q: "Which universities have your students been admitted to?",
    a: "Every Ivy League institution and every top-20 US university — including Harvard, Stanford, MIT, Yale, Princeton, Cornell, Duke, UC Berkeley, and UCLA — plus Oxford, Cambridge, and other top UK schools.",
  },
  {
    q: "When should a student start?",
    a: "10th grade is ideal: enough academic history for a real diagnostic, and two full years to raise test scores, build extracurriculars, and plan summers. 9th and 11th grade both work, with different timelines.",
  },
  {
    q: "Is there an option for every budget?",
    a: "Yes. Families can start with the free consultation, the self-guided Application Guide, a one-off essay or activities review, or the self-paced Digital SAT bootcamp, and move to live one-on-one test prep or the full programme when it makes sense. The full programme comes in three plans (Foundation, Signature, and Elite), scaled to what the family needs, which we go through on the consultation call.",
  },
  {
    q: "How do we start?",
    a: "Book a free 30-minute consultation. You will leave with a candid read on the student's profile, a realistic school list, and a clear next step — whether or not you work with us.",
  },
];

export type Service = { title: string; body: string; points: string[] };

export const SERVICES: Service[] = [
  {
    title: "US and UK admissions strategy",
    body: "One-on-one guidance from advisors who went to the Ivy League themselves and know what selective universities look for. A school list across both systems, Common App and UCAS applications, essays and the UCAS personal statement, admissions tests, and interviews, all coordinated by your Himmah Prep counselor.",
    points: ["School list across the US and UK", "Common App and UCAS", "Oxbridge tests and interviews", "Essay coaching on every draft"],
  },
  {
    title: "Standardized test prep",
    body: "Customized SAT, ACT, IELTS, and TOEFL coaching aimed at the 90th percentile and above, on the first or second sitting.",
    points: ["Diagnostic and study plan", "15+ full-length practice tests", "9,000+ practice questions"],
  },
  {
    title: "Leadership coaching",
    body: "Workshops on self-discovery, communication, team building, and public speaking. The skills admissions officers look for in an application, and ones students keep.",
    points: ["Group cohort format", "Public speaking labs", "Project incubator"],
  },
  {
    title: "Summer activity planning",
    body: "Identifying the most competitive summer programs, research placements, and internships, and building strong applications to them.",
    points: ["RSI, YYGS, SSP and more", "Research placement help", "Internship strategy"],
  },
];

export type Quote = { quote: string; name: string; school: string; kind: "student" | "parent" };

export const QUOTES: Quote[] = [
  {
    kind: "student",
    quote:
      "Himmah didn't just get me into Berkeley — they reframed how I thought about myself as a student. The leadership coaching changed me before college did.",
    name: "Mariam A.",
    school: "UC Berkeley · Class of '28",
  },
  {
    kind: "parent",
    quote:
      "My son went from a 1280 SAT to a 1530 in four months, then wrote the best essay of his life. He's at Cornell. We're still in disbelief.",
    name: "Parent of Yousef H.",
    school: "Cornell · Class of '28",
  },
  {
    kind: "student",
    quote:
      "Every other consultant in Riyadh sells templates. Himmah actually got to know me, then built a strategy nobody else would have thought of.",
    name: "Lina R.",
    school: "Stanford · Class of '28",
  },
  {
    kind: "parent",
    quote:
      "My daughter's Common App essay was rewritten seven times. Each draft made it more her. The day Harvard's letter came, we cried — then we read the essay again.",
    name: "Parent of Noor A.",
    school: "Harvard · Class of '27",
  },
  {
    kind: "student",
    quote:
      "Other consultants told me my profile was 'fine.' Himmah told me which two extracurriculars to drop and which one to double down on. That's the call that changed everything.",
    name: "Hala K.",
    school: "Yale · Class of '27",
  },
  {
    kind: "parent",
    quote:
      "From Riyadh to Princeton in 18 months — and not by accident. Every deadline, every essay, every interview was rehearsed.",
    name: "Parent of Tariq B.",
    school: "Princeton · Class of '28",
  },
];

export const UNIVERSITIES = [
  "Harvard",
  "Stanford",
  "Yale",
  "Princeton",
  "MIT",
  "Cornell",
  "Duke",
  "UC Berkeley",
  "UCLA",
  "Oxford",
  "Cambridge",
];

export const STATS = [
  { value: "100%", label: "College acceptance track record" },
  { value: "100%", label: "Ivy League–credentialed advisors" },
  { value: "90th+", label: "Median SAT/ACT percentile attained" },
];

export const STAGES = [
  {
    tag: "Stage one · Free consultation",
    title: "Diagnose",
    body: "A one-hour conversation about the student's academic profile, goals, and constraints, and a realistic first school list.",
  },
  {
    tag: "Stage two · 12–24 months",
    title: "Build",
    body: "A roadmap inside the portal covering tests, summer programs, leadership work, and essays, sequenced so nothing collides.",
  },
  {
    tag: "Stage three · Application year",
    title: "Submit",
    body: "Every essay, form, and supplement is reviewed before it is submitted, through to the final decision.",
  },
];

export const HERO = {
  kicker: "College counseling · Saudi Arabia & the Gulf",
  headline: "Ivy League college counseling for Gulf students.",
  lead: "Himmah Prep works with students in Saudi Arabia, the UAE, Qatar, Kuwait, Bahrain, and Oman on admissions to selective universities in the United States and the United Kingdom: strategy, SAT and ACT prep, essays, and leadership. Every piece is handled in-house by Himmah Prep counselors and tutors working from one plan, and every family gets a private portal that keeps it all in one place.",
};

export const COUNTRIES = [
  ["Saudi Arabia", "/saudi-arabia"],
  ["UAE", "/uae"],
  ["Qatar", "/qatar"],
  ["Kuwait", "/kuwait"],
  ["Bahrain", "/bahrain"],
  ["Oman", "/oman"],
] as const;

export const CITIES = [
  ["Riyadh", "/sat-prep/riyadh"],
  ["Jeddah", "/sat-prep/jeddah"],
  ["Dammam & Khobar", "/sat-prep/dammam"],
  ["Dubai", "/sat-prep/dubai"],
  ["Abu Dhabi", "/sat-prep/abu-dhabi"],
  ["Doha", "/sat-prep/doha"],
  ["Kuwait City", "/sat-prep/kuwait-city"],
  ["Manama", "/sat-prep/manama"],
  ["Muscat", "/sat-prep/muscat"],
] as const;

export const PHOTO_CREDITS =
  "Campus photographs via Wikimedia Commons: Yale by Christian David (CC BY-SA 4.0), Harvard by Kenneth C. Zirkel (CC BY 4.0), Princeton by Smallbones (CC0), Stanford by Jawed (CC BY-SA 4.0), Hoover Tower by King of Hearts (CC BY-SA 3.0), Oxford by Julian Herzog (CC BY 4.0), Cambridge by Michael Dibb (CC BY-SA 2.0).";

export const UK_US = {
  us: {
    title: "United States",
    system: "Common App",
    points: [
      "Up to 20 universities on one application, each with its own supplements",
      "Personal statement plus school-specific essays",
      "SAT or ACT, with test-optional policies varying by school",
      "Early Action and Early Decision by 1 November; Regular Decision in January",
      "Activities list, recommendations, and interviews for some schools",
    ],
  },
  uk: {
    title: "United Kingdom",
    system: "UCAS",
    points: [
      "Five course choices on one application, judged mainly on academics",
      "One personal statement focused on the subject, not the student's life story",
      "Admissions tests for competitive courses, such as the TSA, LNAT, UCAT, and ESAT",
      "15 October deadline for Oxford, Cambridge, medicine, and dentistry",
      "Interviews at Oxford and Cambridge, and predicted grades that matter",
    ],
  },
};
