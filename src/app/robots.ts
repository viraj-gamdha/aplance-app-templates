import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_CLIENT_LIVE_URL;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // add routes to disallow
        // e.g. "/products/*?*" to disallow pages with search params
        // e.g. "/cart/*"
        // e.g. "/api/*"
        disallow: [],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
