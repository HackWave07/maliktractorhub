import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { FinalCTA } from "@/components/sections/final-cta";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Service Areas | Noida, Ghaziabad, Greater Noida, Delhi | Malik Tractor Hub",
  description:
    "Malik Tractor Hub serves Noida, Ghaziabad, Greater Noida and Delhi NCR with expert tractor repair, engine rebuilding and spare parts.",
  alternates: { canonical: "/locations" },
  openGraph: {
    title: "Service Areas | Malik Tractor Hub",
    description: "We serve Noida, Ghaziabad, Greater Noida and Delhi NCR.",
    url: `${siteConfig.url}/locations`,
  },
};

const locations = [
  {
    name: "Noida Workshop",
    slug: "noida",
    description: "Our main workshop in Khora Colony, Sector 62A, Noida — serving Noida and surrounding areas.",
    features: ["30+ years established", "Full service facility", "Engine rebuilding", "Spare parts warehouse"],
  },
  {
    name: "Ghaziabad & Meerut",
    slug: "ghaziabad",
    description: "Professional tractor service for Ghaziabad, Meerut and surrounding agricultural districts.",
    features: ["Expert mechanics", "Hydraulic repair", "Mobile assistance", "Emergency support"],
  },
  {
    name: "Greater Noida",
    slug: "greater-noida",
    description: "Serving Greater Noida, Yamuna Expressway and Western UP with complete tractor solutions.",
    features: ["Advanced diagnostics", "Rapid turnaround", "Welding & fabrication", "Field service"],
  },
  {
    name: "Delhi NCR",
    slug: "delhi",
    description: "Trusted tractor service for Delhi and entire NCR region — 7 days a week availability.",
    features: ["Central location", "Certified mechanics", "Genuine parts", "24/7 support"],
  },
];

export default function LocationsPage() {
  const bc = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}
      />
      <PageHero
        eyebrow="Service Areas"
        title="Our Service Locations"
        description="Malik Tractor Hub serves Noida, Ghaziabad, Greater Noida and Delhi NCR with expert tractor repair and maintenance."
      />
      <Breadcrumbs items={[{ label: "Locations" }]} />

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Service Areas"
            title="Serving Delhi NCR Since 1996"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="industrial-card group p-8 transition hover:border-brand-yellow/50"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="h-heading text-2xl text-white">
                      {loc.name}
                    </h3>
                    <p className="mt-3 text-sm text-white/70">
                      {loc.description}
                    </p>
                  </div>
                  <MapPin className="mt-1 h-6 w-6 text-brand-yellow opacity-60 group-hover:opacity-100 transition" />
                </div>

                <div className="mt-6 space-y-2">
                  {loc.features.map((f) => (
                    <p key={f} className="text-xs text-white/60">
                      • {f}
                    </p>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand-yellow group-hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-lg border border-white/10 bg-white/5 p-8 text-center">
            <h3 className="h-heading text-2xl text-white">
              Didn't find your area?
            </h3>
            <p className="mt-3 text-white/70">
              We serve a wide region across Delhi NCR. If your location isn't listed, call us anyway — we likely cover your area or can arrange service.
            </p>
            <Button asChild variant="outline" size="lg" className="mt-6 rounded-md">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
