import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/guides/", "/pay-link/", "/checkout", "/enroll/", "/review/", "/ads-preview"],
      },
      // AI search and answer engines. Explicitly allowed so there is no ambiguity:
      // ChatGPT (GPTBot, OAI-SearchBot), Claude (ClaudeBot), Perplexity, Google AI (Google-Extended), Bing/Copilot.
      ...["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Bingbot", "Applebot-Extended"].map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/", "/guides/", "/pay-link/", "/checkout", "/enroll/", "/review/", "/ads-preview"],
      })),
    ],
    sitemap: "https://www.himmahprep.com/sitemap.xml",
    host: "https://www.himmahprep.com",
  };
}
