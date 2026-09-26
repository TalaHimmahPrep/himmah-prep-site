import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/guides/", "/pay-link/", "/checkout", "/enroll/", "/review/", "/ads-preview"],
      },
    ],
    sitemap: "https://www.himmahprep.com/sitemap.xml",
    host: "https://www.himmahprep.com",
  };
}
