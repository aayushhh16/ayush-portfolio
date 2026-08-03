import type { MetadataRoute } from "next";

import { siteContent } from "@/content/site-content";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteContent.meta.url;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: baseUrl ? `${baseUrl}/sitemap.xml` : undefined,
  };
}
