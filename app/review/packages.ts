export type PackageId = "personal" | "supplements" | "full";

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
  featured?: boolean;
};

export const PACKAGES: ReviewPackage[] = [
  {
    id: "personal",
    name: "Personal",
    nameAccent: "Statement",
    priceSAR: "750 SAR",
    priceUSD: "$200",
    turnaround: "48 hours",
    scope: "One Common App essay, up to 650 words.",
    includes: [
      "Paragraph-by-paragraph comments in a shared document",
      "One-page summary: what works, the three things to fix",
      "One revision pass within seven days",
    ],
    sections: "Sections 1, 2, 3, 7, 8",
    checkoutUrl: "",
  },
  {
    id: "supplements",
    name: "Supplement",
    nameAccent: "Bundle",
    priceSAR: "1,200 SAR",
    priceUSD: "$320",
    turnaround: "72 hours",
    scope: "Up to five school supplements, 1,500 words total.",
    includes: [
      "Comments on every supplement, with fit notes per school",
      "One-page summary across the set",
      "One revision pass within seven days",
    ],
    sections: "Sections 1, 2, 4, 7, 8",
    checkoutUrl: "",
  },
  {
    id: "full",
    name: "Full",
    nameAccent: "Review",
    priceSAR: "2,500 SAR",
    priceUSD: "$665",
    turnaround: "5 days",
    scope:
      "Personal statement, activities list, honors, up to three supplements, and a school list check.",
    includes: [
      "Everything in both packages above",
      "Activities and honors reviewed line by line",
      "School list check: rounds, reach, and gaps",
      "One revision pass within seven days",
    ],
    sections: "All sections",
    checkoutUrl: "",
    featured: true,
  },
];

export const PACKAGE_BY_ID = Object.fromEntries(
  PACKAGES.map((p) => [p.id, p]),
) as Record<PackageId, ReviewPackage>;

export const COMMON_APP_PROMPTS: string[] = [
  "Some students have a background, identity, interest, or talent that is so meaningful they believe their application would be incomplete without it. If this sounds like you, then please share your story.",
  "The lessons we take from obstacles we encounter can be fundamental to later success. Recount a time when you faced a challenge, setback, or failure. How did it affect you, and what did you learn from the experience?",
  "Reflect on a time when you questioned or challenged a belief or idea. What prompted your thinking? What was the outcome?",
  "Reflect on something that someone has done for you that has made you happy or thankful in a surprising way. How has this gratitude affected or motivated you?",
  "Discuss an accomplishment, event, or realization that sparked a period of personal growth and a new understanding of yourself or others.",
  "Describe a topic, idea, or concept you find so engaging that it makes you lose all track of time. Why does it captivate you? What or who do you turn to when you want to learn more?",
  "Share an essay on any topic of your choice. It can be one you've already written, one that responds to a different prompt, or one of your own design.",
];
