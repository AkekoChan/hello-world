export const baseUrl = "http://localhost:3000";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
