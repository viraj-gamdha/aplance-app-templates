import { MetadataRoute } from "next";
import { unstable_noStore } from "next/cache";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Prevent caching of this route
  unstable_noStore();

  const baseUrl = process.env.NEXT_PUBLIC_CLIENT_LIVE_URL;
  const currentDate = new Date().toISOString();

  // Static pages - these are manually defined
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
    },
  ];

  // Or can dynamically map...

  return staticPages;
}
