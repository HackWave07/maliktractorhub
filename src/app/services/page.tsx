import type { Metadata } from "next";
import {
  Check,
  Phone,
  MessageCircle,
  LucideIcon,
  Cog,
  Wrench,
  ClipboardCheck,
  Settings2,
  Zap,
  Package,
  Flame,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { RepairProcess } from "@/components/sections/repair-process";
import { FinalCTA } from "@/components/sections/final-cta";
import { services, siteConfig } from "@/lib/site-config";
import { phoneLink, whatsappLink } from "@/lib/contact-links";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Tractor Services | Engine Rebuild, Hydraulic, Clutch & More",
  description:
    "Complete tractor services: engine rebuilding, repair, maintenance, hydraulic, electrical, clutch & transmission, welding and spare parts. Multi-brand support in Noida, Ghaziabad, Delhi NCR.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Industrial Tractor Services | Malik Tractor Hub",
    description:
      "Engine rebuilds, hydraulic repairs, clutch overhauls, electrical diagnostics and more — for all major tractor brands.",
    url: `${siteConfig.url}/services`,
  },
};

const iconMap: Record<string, LucideIcon> = {
  Cog,
  Wrench,
  ClipboardCheck,
  Settings2,
  Zap,
  Package,
  Flame,
  Cogs: Cog,
};

export default function ServicesPage() {
  const bc = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  const serviceSchemas = services.map((s) =>
    serviceSchema({
      title: s.title,
      description: s.description,
    })
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}
      />
      {serviceSchemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PageHero
        eyebrow="Our Services"
        title="Eight Specialized Services. One Trusted Workshop."
        description="From precision engine rebuilding to welding, electrical diagnostics and hydraulic overhauls — Malik Tractor Hub is equipped for every job your tractor needs."
      />
      <Breadcrumbs items={[{ label: "Services" }]} />

      <section className="section">
        <Container>
          <div className="space-y-10">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] ?? Cog;
              const reverse = i % 2 === 1;
              return (
                <div
                  key={s.slug}
                  id={s.slug}
                  className="industrial-card scroll-mt-28 p-6 md:p-10"
                >
                  <div
                    className={`grid items-start gap-8 md:grid-cols-12 ${
                      reverse ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="md:col-span-4">
                      <span className="flex h-14 w-14 items-center justify-center rounded-md border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow">
                        <Icon className="h-6 w-6" />
                      </span>
                      <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-yellow/80">
                        Service 0{i + 1}
                      </p>
                      <h2 className="h-heading mt-2 text-3xl text-white sm:text-4xl">
                        {s.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-white/65">
                        {s.description}
                      </p>

                      <div className="mt-5 flex flex-col gap-2 sm:flex-row md:flex-col">
                        <Button
                          asChild
                          variant="whatsapp"
                          size="md"
                          className="w-full rounded-md"
                        >
                          <a
                            href={whatsappLink(
                              `Hi, I'd like a quote for ${s.title}.`,
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MessageCircle className="h-4 w-4" />
                            Get a quote
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="md"
                          className="w-full rounded-md"
                        >
                          <a href={phoneLink()}>
                            <Phone className="h-4 w-4" />
                            Call now
                          </a>
                        </Button>
                      </div>
                    </div>

                    <div className="md:col-span-8">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40">
                        What's included
                      </p>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {s.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-3 rounded-md border border-white/5 bg-white/[0.02] p-3 text-sm text-white/80"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-yellow/15 text-brand-yellow">
                              <Check className="h-3 w-3" />
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 rounded-md border border-dashed border-white/10 bg-white/[0.02] p-4 text-xs text-white/55">
                        <span className="font-semibold uppercase tracking-wider text-white/70">
                          Note:{" "}
                        </span>
                        Every {s.title.toLowerCase()} job comes with a
                        written estimate, replaced-parts return and a
                        workmanship guarantee.
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <RepairProcess />
      <FinalCTA />
    </>
  );
}
