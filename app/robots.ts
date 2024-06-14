export const baseUrl = "https://hello-world.martintheo.fr";
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
