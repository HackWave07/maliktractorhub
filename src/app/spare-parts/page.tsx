import type { Metadata } from "next";
import { Search, MessageCircle, Phone, ArrowRight, LucideIcon, Cog, Droplets, Filter, Disc3, CircleDot, Zap, Box } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { FinalCTA } from "@/components/sections/final-cta";
import { partsCategories, siteConfig } from "@/lib/site-config";
import { phoneLink, whatsappLink } from "@/lib/contact-links";

export const metadata: Metadata = {
  title: "Tractor Spare Parts | Genuine & OEM-Equivalent | Malik Tractor Hub",
  description:
    "Genuine and OEM-equivalent spare parts for all major tractor brands — engine, hydraulic, filters, bearings, clutch, electrical and more. WhatsApp inquiry system. Noida, Ghaziabad, Delhi NCR.",
  alternates: { canonical: "/spare-parts" },
  openGraph: {
    title: "Tractor Spare Parts | Malik Tractor Hub",
    description:
      "Genuine spare parts for Mahindra, Swaraj, Sonalika, John Deere, New Holland, Massey Ferguson, Escorts and more.",
    url: `${siteConfig.url}/spare-parts`,
  },
};

const iconMap: Record<string, LucideIcon> = {
  Cog,
  Droplets,
  Filter,
  Disc3,
  CircleDot,
  Zap,
  Cogs: Cog,
  Box,
};

export default function SparePartsPage() {
  return (
    <>
      <PageHero
        eyebrow="Spare Parts"
        title="Genuine Parts. Ready Stock. Multi-Brand."
        description="Browse by category or send a WhatsApp message with the part you need — we'll confirm availability, brand and price in minutes. E-commerce checkout coming soon."
      />
      <Breadcrumbs items={[{ label: "Spare Parts" }]} />

      {/* Search */}
      <section className="border-b border-white/5 bg-brand-charcoal-soft py-10">
        <Container>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                <input
                  type="search"
                  placeholder="Search part name, SKU or tractor model…"
                  className="h-12 w-full rounded-md border border-white/10 bg-brand-charcoal pl-10 pr-3 text-sm text-white placeholder:text-white/35 focus:border-brand-yellow/50 focus:outline-none"
                />
              </div>
              <select
                className="h-12 rounded-md border border-white/10 bg-brand-charcoal px-3 text-sm text-white focus:border-brand-yellow/50 focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  All brands
                </option>
                <option>Mahindra</option>
                <option>Swaraj</option>
                <option>Sonalika</option>
                <option>John Deere</option>
                <option>New Holland</option>
                <option>Massey Ferguson</option>
                <option>Escorts</option>
              </select>
              <Button size="lg" className="rounded-md">
                Search
              </Button>
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-wider text-white/40">
              Online catalog &amp; checkout launching soon. Use WhatsApp for
              orders today.
            </p>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Categories"
            title="Browse by Part Category"
            description="Eight core categories covering the full spectrum of tractor maintenance."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partsCategories.map((c, i) => {
              const Icon = iconMap[c.icon] ?? Cog;
              return (
                <div
                  key={c.slug}
                  id={c.slug}
                  className="industrial-card group scroll-mt-28"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-md border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow transition group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="h-heading mt-5 text-2xl text-white">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-white/60">
                    {c.description}
                  </p>
                  <a
                    href={whatsappLink(
                      `Hi, I need parts from the ${c.title} category. Please share availability.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-yellow"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    Inquire
                  </a>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Sample products */}
      <section className="section bg-brand-charcoal-soft">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Featured Inventory"
              title="Sample Catalog (Placeholder)"
              description="A small selection to demonstrate the future e-commerce grid. All items are inquiry-based today; full online ordering launches soon."
            />
            <div className="text-xs text-white/50">
              <span className="font-semibold text-white">Future-ready:</span>{" "}
              Cart, checkout, payments &amp; order tracking
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Hydraulic Pump",
                sku: "HYD-007",
                price: "₹ On inquiry",
                category: "Hydraulic Parts",
              },
              {
                name: "Clutch Plate",
                sku: "CLU-022",
                price: "₹ On inquiry",
                category: "Clutch Parts",
              },
              {
                name: "Starter Motor",
                sku: "ELE-031",
                price: "₹ On inquiry",
                category: "Electrical Parts",
              },
              {
                name: "Cylinder Head Gasket",
                sku: "ENG-018",
                price: "₹ On inquiry",
                category: "Engine Parts",
              },
            ].map((p, i) => (
              <div
                key={p.sku}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent transition hover:border-brand-yellow/40"
              >
                <div className="relative flex aspect-square items-center justify-center bg-gradient-to-br from-brand-charcoal-light to-brand-charcoal-soft">
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="text-center">
                    <p className="h-heading text-2xl text-white/30">IMG</p>
                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/30">
                      Placeholder
                    </p>
                  </div>
                  <span className="absolute left-3 top-3 rounded-md border border-white/10 bg-brand-charcoal-soft/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                    SKU: {p.sku}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-white">
                    {p.name}
                  </h3>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm font-semibold text-brand-yellow">
                      {p.price}
                    </span>
                    <a
                      href={whatsappLink(
                        `Hi, I'm interested in ${p.name} (${p.sku}). Please share details.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-brand-yellow"
                    >
                      Inquire <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* E-commerce roadmap */}
      <section className="section">
        <Container>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-brand-yellow/10 via-white/[0.02] to-transparent p-8 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-yellow">
                  Phase 2
                </p>
                <h3 className="h-heading mt-2 text-3xl text-white sm:text-4xl">
                  Full E-Commerce Coming Soon
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Real-time stock, online checkout, payment gateway and
                  order tracking — designed specifically for the way farmers
                  and fleet owners buy parts.
                </p>
                <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                  <Button asChild variant="whatsapp" size="md" className="rounded-md">
                    <a
                      href={whatsappLink("Hi, I'd like to order tractor parts.")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Order via WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="call" size="md" className="rounded-md">
                    <a href={phoneLink()}>
                      <Phone className="h-4 w-4" />
                      Call {siteConfig.phones.primary}
                    </a>
                  </Button>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Live stock & SKU-level search",
                  "Multi-brand compatibility filter",
                  "Online payments (UPI, cards, net banking)",
                  "Order tracking & invoicing",
                  "Saved part lists for fleet owners",
                  "WhatsApp + SMS notifications",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.02] px-3 py-3 text-sm text-white/80"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-yellow/20 text-brand-yellow">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
