import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, Clock, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { FinalCTA } from "@/components/sections/final-cta";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/structured-data";
import { phoneLink, whatsappLink } from "@/lib/contact-links";

export const metadata: Metadata = {
  title: "Tractor Repair & Service in Greater Noida | Malik Tractor Hub",
  description:
    "Tractor engine rebuilding, hydraulic repair and spare parts service in Greater Noida. Serving Greater Noida, Yamuna Expressway and Western UP.",
  alternates: { canonical: "/locations/greater-noida" },
  openGraph: {
    title: "Tractor Repair & Service in Greater Noida | Malik Tractor Hub",
    description:
      "Professional tractor repair and spare parts for all brands in Greater Noida.",
    url: `${siteConfig.url}/locations/greater-noida`,
  },
};

export default function GreaterNoidaPage() {
  const bc = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations" },
    { name: "Greater Noida", url: "/locations/greater-noida" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}
      />
      <PageHero
        eyebrow="Greater Noida Service"
        title="Tractor Repair & Engine Rebuilding in Greater Noida"
        description="Serving Greater Noida, Yamuna Expressway and Western UP with expert tractor repair, maintenance and genuine parts."
      />
      <Breadcrumbs
        items={[{ href: "/", label: "Home" }, { label: "Greater Noida" }]}
      />

      <section className="section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="Service Area"
                title="Comprehensive Tractor Service for Greater Noida"
              />

              <div className="mt-8 space-y-6 text-white/75">
                <p>
                  Malik Tractor Hub serves Greater Noida, Yamuna Expressway, Dadri and surrounding agricultural regions with complete tractor repair and maintenance solutions. We're the preferred workshop for farmers across Western UP.
                </p>

                <h3 className="h-heading mt-8 text-2xl text-white">
                  Why Choose Us for Greater Noida
                </h3>

                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>
                      <strong>Located Centrally:</strong> Easy access from Greater Noida and Yamuna Expressway
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>
                      <strong>Advanced Diagnostics:</strong> Electronic scanning for modern tractors
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>
                      <strong>Full-Scale Workshop:</strong> Engine rebuilding to welding and fabrication
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>
                      <strong>Rapid Turnaround:</strong> Most repairs completed in 4–7 days
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>
                      <strong>Mobile Service:</strong> Field breakdown assistance available
                    </span>
                  </li>
                </ul>

                <h3 className="h-heading mt-8 text-2xl text-white">
                  Complete Service Menu
                </h3>

                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Engine rebuilding with full disassembly and machining</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Hydraulic system overhaul and repair</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Clutch and transmission service</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Electrical and CRDi diagnostics</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Scheduled maintenance and pre-season inspection</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Genuine spare parts from major manufacturers</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="industrial-card p-6">
                <h3 className="h-heading mb-4 text-xl text-white">
                  Workshop Address
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Main Workshop
                      </p>
                      <p className="text-sm text-white/70">
                        Khora Colony, Sector 62A, Noida
                      </p>
                      <p className="text-xs text-white/50 mt-1">
                        Convenient to Greater Noida
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="industrial-card p-6">
                <h3 className="h-heading mb-4 text-xl text-white">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Operating Hours
                      </p>
                      <p className="text-sm text-white/70">9:00 AM – 9:00 PM</p>
                      <p className="text-xs text-white/50">Open Every Day</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Call Now
                      </p>
                      <a
                        href={phoneLink()}
                        className="text-sm text-brand-yellow hover:text-brand-yellow/80"
                      >
                        +91 99992 47461
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                asChild
                variant="whatsapp"
                size="lg"
                className="w-full rounded-md"
              >
                <a href={whatsappLink("Hi, I'm from Greater Noida. Need tractor repair service.")}>
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full rounded-md"
              >
                <Link href="/contact">Get Directions</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
