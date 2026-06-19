import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FinalCTA } from "@/components/sections/final-cta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Tractor Blog | Maintenance Tips, Repair Guides & Industry Insights",
  description:
    "Tractor maintenance tips, engine care guides, spare parts advice and industry updates from the Malik Tractor Hub team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Malik Tractor Hub",
    description: "Maintenance tips, repair guides and industry insights from the workshop floor.",
    url: `${siteConfig.url}/blog`,
  },
};

const posts = [
  {
    slug: "signs-tractor-engine-needs-rebuild",
    title: "7 Warning Signs Your Tractor Engine Needs a Rebuild",
    excerpt:
      "Blue smoke, oil consumption, knocking — these are the early signals that your tractor's engine is due for a full rebuild. Here's what to look for and how to act fast.",
    category: "Engine",
    date: "2026-04-18",
    read: "6 min read",
    author: "Mohd Noordeen Malik",
  },
  {
    slug: "tractor-hydraulic-system-maintenance",
    title: "Hydraulic System Maintenance: A Pre-Season Checklist",
    excerpt:
      "Slow lift, jerky controls, leaks? Walk through this pre-season checklist to keep your tractor's hydraulic system working flawlessly through the harvest.",
    category: "Hydraulic",
    date: "2026-04-02",
    read: "5 min read",
    author: "Workshop Team",
  },
  {
    slug: "genuine-vs-aftermarket-tractor-parts",
    title: "Genuine vs Aftermarket Tractor Parts: What Actually Matters",
    excerpt:
      "The price gap is tempting, but the wrong part can cost you a season. Here's our honest breakdown of when genuine parts pay for themselves.",
    category: "Parts",
    date: "2026-03-20",
    read: "7 min read",
    author: "Mohd Noordeen Malik",
  },
  {
    slug: "tractor-clutch-slipping-causes",
    title: "Why Your Tractor Clutch Is Slipping — And How to Fix It",
    excerpt:
      "Clutch slip can be an adjustment issue, a worn plate, or a contaminated friction surface. Diagnose it right with this step-by-step guide.",
    category: "Clutch",
    date: "2026-03-05",
    read: "4 min read",
    author: "Workshop Team",
  },
  {
    slug: "tractor-electrical-faults-diagnostics",
    title: "Modern Tractor Electrical Faults: A Diagnostic Approach",
    excerpt:
      "Today's tractors are computers on wheels. Here's our systematic approach to tracking down electrical gremlins fast.",
    category: "Electrical",
    date: "2026-02-22",
    read: "8 min read",
    author: "Mohd Noordeen Malik",
  },
  {
    slug: "tractor-pre-season-checklist",
    title: "The Complete Pre-Season Tractor Checklist",
    excerpt:
      "A printable 30-point checklist for getting your tractor ready for the busy season — covers fluids, filters, belts, hydraulics, electrical and more.",
    category: "Maintenance",
    date: "2026-02-08",
    read: "5 min read",
    author: "Workshop Team",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Field-Tested Tractor Knowledge"
        description="Maintenance tips, repair guides and industry insights — written by mechanics who work on tractors every day."
      />
      <Breadcrumbs items={[{ label: "Blog" }]} />

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Latest Articles"
            title="From the Workshop Floor"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="industrial-card group flex h-full flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-white/10 bg-gradient-to-br from-brand-charcoal-light to-brand-charcoal-soft">
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <p className="h-heading text-3xl text-white/15">IMG</p>
                      <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/30">
                        Article cover
                      </p>
                    </div>
                  </div>
                  <span className="absolute left-3 top-3 rounded-md border border-brand-yellow/30 bg-brand-charcoal-soft/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-yellow backdrop-blur">
                    {p.category}
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-3 text-[11px] text-white/50">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(p.date).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {p.read}
                  </span>
                </div>

                <h3 className="h-heading mt-3 text-2xl text-white transition group-hover:text-brand-yellow">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-white/60">{p.excerpt}</p>

                <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="inline-flex items-center gap-2 text-xs text-white/55">
                    <User className="h-3.5 w-3.5" />
                    {p.author}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-brand-yellow">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
