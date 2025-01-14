import type { MetadataRoute } from "next";
import C from "@/config/constants";

export const revalidate = 60;
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const { navigation } = C.data;
  return [
    {
      url: `${process.env.NEXT_PUBLIC_URL}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },

    ...navigation.map((service) => ({
      url: `${process.env.NEXT_PUBLIC_URL}${service.href}/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
