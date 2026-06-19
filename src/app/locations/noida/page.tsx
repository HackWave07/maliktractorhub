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
import { breadcrumbSchema, localBusinessSchema } from "@/lib/structured-data";
import { phoneLink, whatsappLink } from "@/lib/contact-links";

export const metadata: Metadata = {
  title: "Tractor Repair & Service in Noida | Malik Tractor Hub",
  description:
    "Expert tractor engine rebuilding, repair, maintenance and genuine spare parts in Noida. Engine overhauls, hydraulic repair, clutch service — all major brands. Established 1996.",
  alternates: { canonical: "/locations/noida" },
  openGraph: {
    title: "Tractor Repair & Service in Noida | Malik Tractor Hub",
    description:
      "Engine rebuilding, hydraulic repair, clutch service and spare parts for all tractor brands in Noida.",
    url: `${siteConfig.url}/locations/noida`,
  },
};

export default function NoidaPage() {
  const bc = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations" },
    { name: "Noida", url: "/locations/noida" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}
      />
      <PageHero
        eyebrow="Noida Workshop"
        title="Tractor Repair & Engine Rebuilding in Noida"
        description="30+ years of trusted tractor service in Noida's Khora Colony. Engine rebuilds, hydraulic repair, maintenance and genuine spare parts for all brands."
      />
      <Breadcrumbs
        items={[{ href: "/", label: "Home" }, { label: "Noida Workshop" }]}
      />

      <section className="section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="Noida Workshop"
                title="Established in Noida Since 1996"
              />

              <div className="mt-8 space-y-6 text-white/75">
                <p>
                  Malik Tractor Hub started in 1996 in Khora Colony, Noida, as a one-bay repair workshop. Three decades later, we've grown into Noida's most trusted tractor workshop — serving farmers, contractors and fleet operators across the city.
                </p>

                <p>
                  Located in Sector 62A near Ujjwal Deep Public School, our Noida workshop handles everything from routine maintenance to complex engine rebuilds. Our facility includes:
                </p>

                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Full engine rebuilding with in-house line boring and crank grinding</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Hydraulic pump overhaul and lift cylinder rebuild</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Genuine spare parts warehouse with ready stock</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Electronic diagnostics for modern CRDi tractors</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Welding and custom fabrication workshop</span>
                  </li>
                </ul>

                <h3 className="h-heading mt-8 text-2xl text-white">
                  Why Choose Malik Tractor Hub in Noida?
                </h3>

                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>
                      <strong>Local, Reliable:</strong> 30+ years serving Noida farmers and contractors
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>
                      <strong>Expert Mechanics:</strong> Trained on all major tractor brands
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>
                      <strong>Genuine Parts Always:</strong> OEM-grade replacements with warranty
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>
                      <strong>Transparent Pricing:</strong> Written estimates, no hidden charges
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>
                      <strong>Open 7 Days:</strong> 9 AM – 9 PM, always available
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="industrial-card p-6">
                <h3 className="h-heading mb-4 text-xl text-white">
                  Noida Workshop Details
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Location
                      </p>
                      <p className="text-sm text-white/70">
                        Subhash Park, Indra Vihar, Khora Colony, Sector 62A, Noida
                      </p>
                      <p className="text-xs text-white/50 mt-1">
                        Near Ujjwal Deep Public School
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="industrial-card p-6">
                <h3 className="h-heading mb-4 text-xl text-white">
                  Hours & Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <div>
                      <p className="text-sm font-semibold text-white">Hours</p>
                      <p className="text-sm text-white/70">9:00 AM – 9:00 PM</p>
                      <p className="text-xs text-white/50">Open 7 Days</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <div>
                      <p className="text-sm font-semibold text-white">Phone</p>
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
                <a href={whatsappLink()}>
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Inquiry
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
