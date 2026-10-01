import type { MetadataRoute } from "next";
import { ALL_POSTS as POSTS } from "./blog/posts";

const BASE = "https://www.himmahprep.com";

const STATIC_PATHS = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/sat-bootcamp", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/sat-prep", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/review", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/apply", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/results", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/standardized-test-tutors", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/advisor-career", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/shop", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/shop/p/guide", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
];

const COUNTRY_SLUGS = ["saudi-arabia", "uae", "qatar", "kuwait", "bahrain", "oman"];
const CITY_SLUGS = [
  "jeddah",
  "riyadh",
  "dammam",
  "dubai",
  "abu-dhabi",
  "doha",
  "kuwait-city",
  "manama",
  "muscat",
];

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
    ...CITY_SLUGS.map((slug) => ({
      url: `${BASE}/sat-prep/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...POSTS.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: new Date(p.updated ?? p.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
