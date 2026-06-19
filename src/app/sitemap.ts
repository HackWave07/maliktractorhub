import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/about",
    "/services",
    "/spare-parts",
    "/brands",
    "/gallery",
    "/faq",
    "/blog",
    "/contact",
    "/locations",
    "/locations/noida",
    "/locations/ghaziabad",
    "/locations/greater-noida",
    "/locations/delhi",
  ];
  return routes.map((r) => ({
    url: `${siteConfig.url}${r}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: r === "" ? 1 : r.startsWith("/blog") ? 0.7 : 0.8,
  }));
}
