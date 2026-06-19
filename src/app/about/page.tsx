import type { Metadata } from "next";
import Link from "next/link";
import { Target, Eye, Hammer, Award, Wrench, Users } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCTA } from "@/components/sections/final-cta";
import { siteConfig } from "@/lib/site-config";
import { phoneLink, whatsappLink } from "@/lib/contact-links";
import { Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Malik Tractor Hub | 28+ Years of Tractor Service Excellence",
  description:
    "Founded in 1996 by Mohd Noordeen Malik, Malik Tractor Hub is Noida and Ghaziabad's most trusted tractor engine rebuilding, repair and spare parts workshop.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Malik Tractor Hub | Since 1996",
    description:
      "28+ years of industrial tractor service. Founded by Mohd Noordeen Malik in Noida, serving Delhi NCR.",
    url: `${siteConfig.url}/about`,
  },
};

const milestones = [
  { year: "1996", title: "Founded in Khora, Noida", desc: "Started as a one-bay tractor repair workshop by Mohd Noordeen Malik." },
  { year: "2003", title: "Engine Rebuilding Added", desc: "In-house line boring, crank grinding and cylinder head reconditioning setup." },
  { year: "2011", title: "Spare Parts Warehouse", desc: "Dedicated parts inventory opened to support same-day replacements." },
  { year: "2018", title: "Multi-Brand Workshop", desc: "Service capability expanded to all major Indian and global tractor brands." },
  { year: "2024", title: "Modern Diagnostics", desc: "Invested in electronic diagnostic tools for modern CRDi tractors." },
];

const values = [
  {
    icon: Hammer,
    title: "Honest Workmanship",
    desc: "We do the work we say we'll do — no hidden charges, no shortcuts, no surprises.",
  },
  {
    icon: Award,
    title: "Genuine Parts Always",
    desc: "OEM-grade spares on every job. The replaced parts are returned to the owner.",
  },
  {
    icon: Users,
    title: "Customer-First",
    desc: "Clear estimates, regular updates and post-service follow-up on every tractor.",
  },
  {
    icon: Wrench,
    title: "Continuous Learning",
    desc: "Our mechanics train every quarter on new tractor systems and technologies.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Workshop Built on Trust, One Tractor at a Time."
        description="For nearly three decades, Malik Tractor Hub has been the silent partner behind thousands of working tractors across Delhi NCR. Here's who we are, how we work and what we stand for."
      />
      <Breadcrumbs items={[{ label: "About" }]} />

      {/* Story */}
      <section className="section">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Our Story"
                title="Founded in 1996, by a Mechanic Who Believed in Doing It Right."
              />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-white/70">
                <p>
                  In 1996, Mohd Noordeen Malik opened a small tractor repair
                  bay in Khora Colony, Noida. He had one rule from day one:{" "}
                  <span className="text-white">use the right part, do the job
                  properly and charge fairly</span>. Almost 30 years later,
                  that same rule still runs through every nut and bolt we
                  touch.
                </p>
                <p>
                  Over the years, the workshop grew from a single bay to a
                  full-fledged multi-brand tractor service centre with
                  in-house engine rebuilding, a stocked parts warehouse and
                  modern diagnostic tools. But the spirit hasn't changed —
                  we still treat every tractor like it belongs to family.
                </p>
                <p>
                  Today, farmers, contractors, fleet operators and
                  equipment owners across Noida, Ghaziabad, Greater Noida
                  and Delhi NCR trust us with everything from a clutch
                  adjustment to a full engine rebuild.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="whatsapp" size="md" className="rounded-md">
                  <a
                    href={whatsappLink("Hi, I'd like to know more about your workshop.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat with us
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

            <div className="lg:col-span-5">
              <div className="industrial-card">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-yellow">
                  Founder
                </p>
                <h3 className="h-heading mt-2 text-3xl text-white">
                  Mohd Noordeen Malik
                </h3>
                <p className="mt-1 text-sm text-white/55">
                  Founder & Head Mechanic
                </p>
                <div className="mt-5 h-px bg-white/10" />
                <p className="mt-5 text-sm leading-relaxed text-white/70">
                  Three decades of hands-on experience with every major
                  tractor brand on Indian soil. Trained in engine rebuilding
                  and modern electronic diagnostics. Personally supervises
                  complex rebuilds and quality control.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {[
                    { v: "28+", l: "Years" },
                    { v: "1000+", l: "Repairs" },
                    { v: "12+", l: "Brands" },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="rounded-md border border-white/10 bg-white/[0.02] p-3"
                    >
                      <p className="h-heading text-2xl text-brand-yellow">
                        {s.v}
                      </p>
                      <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/55">
                        {s.l}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Stats />

      {/* Mission / Vision */}
      <section className="section">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To be the most trusted tractor service partner in Delhi NCR — combining deep mechanical expertise, transparent pricing and genuine parts to keep every customer's machine productive, season after season.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                text: "To evolve Malik Tractor Hub into a digital-first tractor service and parts platform — where farmers and fleet owners can book service, source parts and track jobs online, while we keep doing what we do best on the workshop floor.",
              },
            ].map((c, i) => (
              <div key={c.title} className="industrial-card p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-md border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="h-heading mt-5 text-3xl text-white">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section bg-brand-charcoal-soft">
        <Container>
          <SectionHeading
            eyebrow="What We Stand For"
            title="Four Values That Run the Workshop"
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.title} className="industrial-card text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="h-heading mt-4 text-xl text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-white/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Our Journey"
            title="From One Bay to a Multi-Brand Workshop"
            align="center"
          />

          <div className="relative mt-12">
            <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand-yellow/60 via-white/10 to-transparent md:left-1/2" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 md:gap-10 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 top-2 z-10 -ml-[7px] md:left-1/2 md:-ml-[7px]">
                    <span className="block h-3.5 w-3.5 rounded-full border-2 border-brand-yellow bg-brand-charcoal-soft" />
                  </div>
                  <div className="pl-12 md:w-1/2 md:pl-0 md:pr-10 md:text-right">
                    <p className="h-heading text-3xl text-brand-yellow">
                      {m.year}
                    </p>
                    <h3 className="h-heading mt-1 text-2xl text-white">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/60">{m.desc}</p>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Testimonials />
      <FinalCTA />
    </>
  );
}
