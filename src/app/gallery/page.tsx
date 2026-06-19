import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { FinalCTA } from "@/components/sections/final-cta";
import { siteConfig } from "@/lib/site-config";
import { GalleryClient } from "@/components/sections/gallery-client";

export const metadata: Metadata = {
  title: "Gallery | Workshop, Repairs & Before-After | Malik Tractor Hub",
  description:
    "Inside our workshop: engine rebuilds, hydraulic repairs, parts inventory, before-and-after jobs and more.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | Malik Tractor Hub",
    description: "Workshop gallery, repairs, before-and-after rebuilds.",
    url: `${siteConfig.url}/gallery`,
  },
};

type GalleryItem = {
  id: number;
  type: "image" | "video";
  tag: string;
  title: string;
  category: "Workshop" | "Engine" | "Hydraulic" | "Parts" | "Before-After";
};

const allItems: GalleryItem[] = [
  { id: 1, type: "image", tag: "IMG", title: "Workshop overview", category: "Workshop" },
  { id: 2, type: "image", tag: "IMG", title: "Engine block machining", category: "Engine" },
  { id: 3, type: "image", tag: "IMG", title: "Crankshaft grinding", category: "Engine" },
  { id: 4, type: "image", tag: "IMG", title: "Hydraulic pump rebuild", category: "Hydraulic" },
  { id: 5, type: "image", tag: "IMG", title: "Parts inventory", category: "Parts" },
  { id: 6, type: "image", tag: "IMG", title: "Clutch replacement", category: "Engine" },
  { id: 7, type: "video", tag: "VID", title: "Engine rebuild walkthrough", category: "Engine" },
  { id: 8, type: "image", tag: "IMG", title: "Hydraulic cylinder service", category: "Hydraulic" },
  { id: 9, type: "image", tag: "IMG", title: "Workshop team", category: "Workshop" },
  { id: 10, type: "image", tag: "B/A", title: "Mahindra 575 — before", category: "Before-After" },
  { id: 11, type: "image", tag: "B/A", title: "Mahindra 575 — after", category: "Before-After" },
  { id: 12, type: "image", tag: "IMG", title: "Electrical diagnostics", category: "Engine" },
  { id: 13, type: "image", tag: "IMG", title: "Welding & fabrication", category: "Workshop" },
  { id: 14, type: "image", tag: "IMG", title: "Spare parts shelves", category: "Parts" },
  { id: 15, type: "video", tag: "VID", title: "Hydraulic testing", category: "Hydraulic" },
  { id: 16, type: "image", tag: "IMG", title: "Final inspection", category: "Workshop" },
];

const categories = [
  "All",
  "Workshop",
  "Engine",
  "Hydraulic",
  "Parts",
  "Before-After",
] as const;

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Workshop, Repairs & Before-After"
        description="A look inside our facility, the work we do and the results we deliver. Tap any item to open the lightbox."
      />
      <Breadcrumbs items={[{ label: "Gallery" }]} />

      <GalleryClient items={allItems} categories={[...categories]} />

      <FinalCTA />
    </>
  );
}
