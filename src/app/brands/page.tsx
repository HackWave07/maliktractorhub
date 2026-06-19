import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FinalCTA } from "@/components/sections/final-cta";
import { brands, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Brands We Support | Mahindra, Swaraj, Sonalika, John Deere & More",
  description:
    "Multi-brand tractor support — Mahindra, Swaraj, Sonalika, John Deere, New Holland, Massey Ferguson, Escorts, Eicher, TAFE, Preet, Captain, HMT.",
  alternates: { canonical: "/brands" },
  openGraph: {
    title: "Brands We Support | Malik Tractor Hub",
    description: "Multi-brand tractor repair, engine rebuilding and parts supply across Delhi NCR.",
    url: `${siteConfig.url}/brands`,
  },
};

const brandDetails: Record<string, { tag: string; popular: string[] }> = {
  Mahindra: { tag: "Most serviced in India", popular: ["575", "265", "595", "Arjun Novo"] },
  Swaraj: { tag: "Indian workhorse", popular: ["744", "735", "960"] },
  Sonalika: { tag: "Heavy-duty specialist", popular: ["DI 745", "Worldtrac 60", "Sikander"] },
  "John Deere": { tag: "Modern electronics", popular: ["5310", "5050D", "5405"] },
  "New Holland": { tag: "Hydraulic experts", popular: ["3630", "3230", "4710"] },
  "Massey Ferguson": { tag: "Legacy support", popular: ["241", "1035", "245"] },
  Escorts: { tag: "Power steering", popular: ["Powertrac 439", "Farmtrac 45"] },
  Eicher: { tag: "Vintage to modern", popular: ["242", "380", "485"] },
  TAFE: { tag: "Reliable platform", popular: ["45 DI", "30 DI"] },
  Preet: { tag: "Punjab favourite", popular: ["6049", "3549"] },
  Captain: { tag: "Compact tractors", popular: ["200 DI", "280 DI"] },
  HMT: { tag: "Vintage support", popular: ["5911", "2522"] },
};

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brands We Support"
        title="One Workshop, Every Major Tractor Brand"
        description="Whether you run a fleet of Mahindras or a single vintage Massey, we have the parts, the tooling and the know-how."
      />
      <Breadcrumbs items={[{ label: "Brands" }]} />

      <section className="section">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand, i) => {
              const meta = brandDetails[brand];
              return (
                <div
                  key={brand}
                  className="industrial-card group"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="h-heading text-3xl text-white transition group-hover:text-brand-yellow">
                      {brand}
                    </h3>
                    <span className="rounded-md border border-brand-yellow/30 bg-brand-yellow/5 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-yellow">
                      Supported
                    </span>
                  </div>
                  {meta && (
                    <>
                      <p className="mt-2 text-xs uppercase tracking-wider text-white/40">
                        {meta.tag}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {meta.popular.map((m) => (
                          <span
                            key={m}
                            className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 text-[11px] text-white/65"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section bg-brand-charcoal-soft">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Don't See Your Brand?"
                title="We Probably Service It Anyway."
                description="We constantly invest in training and tooling for new tractor platforms. If your brand isn't listed, just call us — chances are we've worked on it."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="industrial-card">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-yellow">
                  All Brands Get
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {[
                    "Written estimate before any work",
                    "OEM-grade genuine or equivalent parts",
                    "Workmanship guarantee",
                    "Pickup & drop support for breakdowns",
                    "Modern diagnostic equipment",
                    "Trained mechanics on every brand",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-white/75"
                    >
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-yellow/20 text-brand-yellow">
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
