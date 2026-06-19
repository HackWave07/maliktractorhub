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
  title: "Tractor Repair & Service in Ghaziabad | Malik Tractor Hub",
  description:
    "Professional tractor repair, engine rebuilding and spare parts service in Ghaziabad. Serving Ghaziabad, Meerut and surrounding areas. 24/7 emergency support.",
  alternates: { canonical: "/locations/ghaziabad" },
  openGraph: {
    title: "Tractor Repair & Service in Ghaziabad | Malik Tractor Hub",
    description:
      "Engine rebuilding, hydraulic repair and spare parts for all tractor brands in Ghaziabad.",
    url: `${siteConfig.url}/locations/ghaziabad`,
  },
};

export default function GhaziabadPage() {
  const bc = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations" },
    { name: "Ghaziabad", url: "/locations/ghaziabad" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}
      />
      <PageHero
        eyebrow="Ghaziabad Service Area"
        title="Tractor Repair & Maintenance in Ghaziabad"
        description="Serving Ghaziabad, Meerut and surrounding districts with expert engine rebuilding, hydraulic repair, and genuine spare parts."
      />
      <Breadcrumbs
        items={[{ href: "/", label: "Home" }, { label: "Ghaziabad" }]}
      />

      <section className="section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="Ghaziabad Service Area"
                title="Trusted Tractor Service for Ghaziabad & Meerut"
              />

              <div className="mt-8 space-y-6 text-white/75">
                <p>
                  Malik Tractor Hub serves Ghaziabad, Meerut, Bulandshahr and surrounding agricultural areas with comprehensive tractor repair and maintenance services. Many farmers and contractors across these districts rely on us for their most critical repairs.
                </p>

                <h3 className="h-heading mt-8 text-2xl text-white">
                  Services Available in Ghaziabad
                </h3>

                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Complete engine rebuilding with guarantee</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Hydraulic pump and cylinder overhaul</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Scheduled maintenance and pre-season checks</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Genuine spare parts with availability</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Mobile assistance for field breakdowns (within 50 km)</span>
                  </li>
                </ul>

                <h3 className="h-heading mt-8 text-2xl text-white">
                  All Major Tractor Brands
                </h3>

                <p>
                  We service Mahindra, Swaraj, Sonalika, John Deere, New Holland, Massey Ferguson, Escorts, Eicher, TAFE, Preet, Captain and HMT tractors. If your brand isn't listed, call us — we likely work on it.
                </p>

                <h3 className="h-heading mt-8 text-2xl text-white">
                  Why Choose Malik Tractor Hub for Ghaziabad
                </h3>

                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>
                      <strong>Close to You:</strong> Easy to reach from Ghaziabad and Meerut
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>
                      <strong>Experience:</strong> 30+ years specializing in tractor repairs
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>
                      <strong>Quick Turnaround:</strong> Most jobs done within 4–7 days
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>
                      <strong>Transparent Estimates:</strong> Written quotes before any work
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>
                      <strong>Emergency Support:</strong> Available 7 days, 9 AM – 9 PM
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="industrial-card p-6">
                <h3 className="h-heading mb-4 text-xl text-white">
                  Workshop Location
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
                        Serves Ghaziabad & surrounding areas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="industrial-card p-6">
                <h3 className="h-heading mb-4 text-xl text-white">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <div>
                      <p className="text-sm font-semibold text-white">Hours</p>
                      <p className="text-sm text-white/70">9:00 AM – 9:00 PM</p>
                      <p className="text-xs text-white/50">All 7 Days</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <div>
                      <p className="text-sm font-semibold text-white">Call</p>
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
                <a href={whatsappLink("Hi, I'm from Ghaziabad and need tractor repair service.")}>
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full rounded-md"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
