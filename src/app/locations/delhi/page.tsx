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
  title: "Tractor Repair & Service in Delhi NCR | Malik Tractor Hub",
  description:
    "Tractor engine rebuilding, repair and spare parts service serving Delhi and surrounding NCR areas. Expert mechanics, genuine parts, fast turnaround.",
  alternates: { canonical: "/locations/delhi" },
  openGraph: {
    title: "Tractor Repair & Service in Delhi NCR | Malik Tractor Hub",
    description:
      "Professional tractor repair, engine rebuilding and spare parts for Delhi NCR.",
    url: `${siteConfig.url}/locations/delhi`,
  },
};

export default function DelhiPage() {
  const bc = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations" },
    { name: "Delhi NCR", url: "/locations/delhi" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}
      />
      <PageHero
        eyebrow="Delhi NCR Service"
        title="Tractor Repair & Engine Rebuilding in Delhi NCR"
        description="Professional tractor service for Delhi and NCR farmers. Complete engine rebuilding, hydraulic repair, maintenance and genuine spare parts."
      />
      <Breadcrumbs
        items={[{ href: "/", label: "Home" }, { label: "Delhi NCR" }]}
      />

      <section className="section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="Delhi NCR Service"
                title="Expert Tractor Service for Delhi Region"
              />

              <div className="mt-8 space-y-6 text-white/75">
                <p>
                  Malik Tractor Hub serves Delhi, Noida, Ghaziabad and the entire NCR region with world-class tractor repair, maintenance and spare parts services. For 30+ years, we've been the trusted choice for Delhi's farming community.
                </p>

                <h3 className="h-heading mt-8 text-2xl text-white">
                  Our Commitment to Delhi Farmers
                </h3>

                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>
                      <strong>Accessible Location:</strong> Easy to reach from across Delhi NCR
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>
                      <strong>Expert Team:</strong> Certified mechanics trained on all major brands
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>
                      <strong>Quality Parts:</strong> Genuine OEM parts with warranty
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>
                      <strong>Fast Service:</strong> Most jobs completed in 4–7 working days
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>
                      <strong>Emergency Support:</strong> 24/7 availability, open 7 days a week
                    </span>
                  </li>
                </ul>

                <h3 className="h-heading mt-8 text-2xl text-white">
                  Services We Offer
                </h3>

                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Complete engine rebuilding with full machining facility</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Hydraulic system overhaul and repair</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Tractor repair for all mechanical issues</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Clutch and transmission overhaul</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Electrical diagnostics and CRDi system repair</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Welding and custom fabrication</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Genuine spare parts supply and sourcing</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>Scheduled maintenance and pre-season inspection</span>
                  </li>
                </ul>

                <h3 className="h-heading mt-8 text-2xl text-white">
                  All Major Tractor Brands Supported
                </h3>

                <p>
                  Mahindra, Swaraj, Sonalika, John Deere, New Holland, Massey Ferguson, Escorts, Eicher, TAFE, Preet, Captain and HMT. Not listed? Call us anyway — we likely work on your brand.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="industrial-card p-6">
                <h3 className="h-heading mb-4 text-xl text-white">
                  Location
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Workshop
                      </p>
                      <p className="text-sm text-white/70">
                        Khora Colony, Sector 62A, Noida
                      </p>
                      <p className="text-xs text-white/50 mt-1">
                        Central to Delhi NCR
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="industrial-card p-6">
                <h3 className="h-heading mb-4 text-xl text-white">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <div>
                      <p className="text-sm font-semibold text-white">Hours</p>
                      <p className="text-sm text-white/70">9:00 AM – 9:00 PM</p>
                      <p className="text-xs text-white/50">7 Days a Week</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Phone
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
                <a href={whatsappLink("Hi Malik Tractor Hub, I need tractor repair service in Delhi NCR.")}>
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
