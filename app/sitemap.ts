import type { MetadataRoute } from "next";

const BASE = "https://himmahprep.com";

const STATIC_PATHS = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/apply", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/results", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/standardized-test-tutors", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/advisor-career", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/shop", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/shop/p/guide", priority: 0.8, changeFrequency: "weekly" as const },
];

const COUNTRY_SLUGS = ["saudi-arabia", "uae", "qatar", "kuwait", "bahrain", "oman"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...STATIC_PATHS.map((p) => ({
      url: `${BASE}${p.path}`,
      lastModified,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...COUNTRY_SLUGS.map((slug) => ({
      url: `${BASE}/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
