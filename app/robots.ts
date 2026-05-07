import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/guides/", "/pay-link/"],
      },
    ],
    sitemap: "https://himmahprep.com/sitemap.xml",
    host: "https://himmahprep.com",
  };
}
