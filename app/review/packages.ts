export type PackageId = "personal" | "activities" | "full";

export type ReviewPackage = {
  id: PackageId;
  name: string;
  nameAccent: string;
  priceSAR: string;
  priceUSD: string;
  turnaround: string;
  scope: string;
  includes: string[];
  sections: string;
  /** Squarespace pay link. Leave empty until the link exists — the button shows "Coming soon". */
  checkoutUrl: string;
  badge?: string;
  featured?: boolean;
};

export const PACKAGES: ReviewPackage[] = [
  {
    id: "personal",
    name: "Personal Statement",
    nameAccent: "Review",
    priceSAR: "450 SAR",
    priceUSD: "$120",
    turnaround: "48 hours",
    scope: "One Common App personal statement, up to 650 words.",
    includes: [
      "Paragraph-by-paragraph comments in a shared document",
      "One-page summary: what works, the three things to fix",
      "A read on whether the essay answers the prompt you chose",
    ],
    sections: "Sections 1, 2, 3, 7, 8",
    checkoutUrl: "https://www.himmahprep.com/pay-link/91b3f225-a67a-49da-8475-b9d49310882d",
    badge: "Most popular",
    featured: true,
  },
  {
    id: "activities",
    name: "Activities List",
    nameAccent: "Audit",
    priceSAR: "350 SAR",
    priceUSD: "$95",
    turnaround: "48 hours",
    scope: "Your ten Common App activities and five honors, line by line.",
    includes: [
      "Rewritten-order recommendation: what leads, what drops",
      "Each 150-character description marked for verbs, numbers, and outcomes",
      "Honors checked for level, wording, and duplicates",
    ],
    sections: "Sections 1, 2, 5, 6, 7, 8",
    checkoutUrl: "",
  },
  {
    id: "full",
    name: "Full Review",
    nameAccent: "+ Supplementals",
    priceSAR: "1,875 SAR",
    priceUSD: "$500",
    turnaround: "7 days",
    scope:
      "Personal statement, activities, honors, school list, and every supplemental essay for three schools.",
    includes: [
      "Everything in the two reviews above",
      "All supplemental essays for up to three schools, with fit notes per school",
      "School list check: rounds, reach, and gaps",
    ],
    sections: "All sections",
    checkoutUrl: "",
  },
];

export const PACKAGE_BY_ID = Object.fromEntries(
  PACKAGES.map((p) => [p.id, p]),
) as Record<PackageId, ReviewPackage>;

export const FULL_REVIEW_SCHOOLS = 3;

export const COMMON_APP_PROMPTS: string[] = [
  "Some students have a background, identity, interest, or talent that is so meaningful they believe their application would be incomplete without it. If this sounds like you, then please share your story.",
  "The lessons we take from obstacles we encounter can be fundamental to later success. Recount a time when you faced a challenge, setback, or failure. How did it affect you, and what did you learn from the experience?",
  "Reflect on a time when you questioned or challenged a belief or idea. What prompted your thinking? What was the outcome?",
  "Reflect on something that someone has done for you that has made you happy or thankful in a surprising way. How has this gratitude affected or motivated you?",
  "Discuss an accomplishment, event, or realization that sparked a period of personal growth and a new understanding of yourself or others.",
  "Describe a topic, idea, or concept you find so engaging that it makes you lose all track of time. Why does it captivate you? What or who do you turn to when you want to learn more?",
  "Share an essay on any topic of your choice. It can be one you've already written, one that responds to a different prompt, or one of your own design.",
];
