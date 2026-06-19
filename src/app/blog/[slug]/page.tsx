import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { FinalCTA } from "@/components/sections/final-cta";
import { phoneLink, whatsappLink } from "@/lib/contact-links";
import { siteConfig } from "@/lib/site-config";
import { articleSchema, breadcrumbSchema } from "@/lib/structured-data";

const posts: Record<
  string,
  {
    title: string;
    description: string;
    category: string;
    date: string;
    read: string;
    author: string;
    content: { heading: string; body: string }[];
  }
> = {
  "signs-tractor-engine-needs-rebuild": {
    title: "7 Warning Signs Your Tractor Engine Needs a Rebuild",
    description:
      "Blue smoke, oil consumption, knocking — the early signals that your tractor engine is due for a full rebuild.",
    category: "Engine",
    date: "2026-04-18",
    read: "6 min read",
    author: "Mohd Noordeen Malik",
    content: [
      {
        heading: "1. Blue or White Exhaust Smoke",
        body: "Persistent blue smoke almost always means oil is burning inside the combustion chamber — usually worn piston rings, valve guides or both. White smoke that doesn't clear after warm-up points to coolant leakage into the cylinder, often a head gasket failure.",
      },
      {
        heading: "2. Excessive Oil Consumption",
        body: "If you're topping up engine oil more than once between services, the rings and/or valves are worn. Do a compression test and a cylinder leak-down test to confirm before committing to a full rebuild.",
      },
      {
        heading: "3. Knocking or Rod Noise",
        body: "A deep, rhythmic knock that rises with RPM typically means worn crank bearings or a damaged rod. Continued running risks a catastrophic failure.",
      },
      {
        heading: "4. Loss of Power & Poor Compression",
        body: "Uneven compression across cylinders, hard starting and loss of power under load are classic signs the engine has run out of life for a top-end repair.",
      },
      {
        heading: "5. Coolant in Oil / Oil in Coolant",
        body: "A milky residue on the oil cap or visible oil sheen in the coolant reservoir signals head gasket failure or a cracked block — both call for a complete rebuild.",
      },
      {
        heading: "6. Metal in the Oil Filter",
        body: "When you cut open an oil filter and find brass or steel particles, internal wear is accelerating fast. Don't run the engine further.",
      },
      {
        heading: "7. High Hours with Past Top-End Repairs",
        body: "If your tractor has had multiple head gasket or liner jobs and hours are still climbing, a planned rebuild is cheaper than the next roadside failure.",
      },
      {
        heading: "What to Do Next",
        body: "Bring the tractor in for a free compression test. We give written estimates and a clear parts list before any work begins. Most rebuilds take 4–7 working days depending on parts availability.",
      },
    ],
  },
  "tractor-hydraulic-system-maintenance": {
    title: "Hydraulic System Maintenance: A Pre-Season Checklist",
    description: "Slow lift, jerky controls, leaks? A pre-season checklist to keep hydraulics flawless through harvest.",
    category: "Hydraulic",
    date: "2026-04-02",
    read: "5 min read",
    author: "Workshop Team",
    content: [
      { heading: "Start with the Fluid", body: "Drain and replace hydraulic oil every 600 hours or annually. Use the grade specified in your operator's manual — wrong viscosity is the #1 cause of hydraulic complaints." },
      { heading: "Replace Filters", body: "Return line filters should be replaced with every oil change. Suction strainers should be inspected and cleaned." },
      { heading: "Inspect Hoses and Fittings", body: "Look for cracks, bulges, chafing and oil weep at fittings. Replace any hose older than 5 years preventively." },
      { heading: "Test the System Under Load", body: "With an implement attached, cycle the system 8–10 times. Listen for cavitation, watch for slow lift, and check for leaks at every cylinder seal." },
      { heading: "Check Linkage & Pins", body: "Worn linkage pins cause drift and jerky operation. Replace pins, bushings and any visibly worn components." },
      { heading: "Book a Service", body: "If you notice any of the above, send us a WhatsApp and we'll get your tractor scheduled for a hydraulic check." },
    ],
  },
  "genuine-vs-aftermarket-tractor-parts": {
    title: "Genuine vs Aftermarket Tractor Parts: What Actually Matters",
    description: "The price gap is tempting, but the wrong part can cost you a season. Our honest breakdown.",
    category: "Parts",
    date: "2026-03-20",
    read: "7 min read",
    author: "Mohd Noordeen Malik",
    content: [
      { heading: "The Short Answer", body: "Use genuine parts for safety-critical and high-precision assemblies (engine internals, hydraulics, brakes, electronics). For consumables (filters, belts, hoses) quality aftermarket is fine if it's from a known brand." },
      { heading: "What 'Genuine' Really Means", body: "OEM parts are made or spec'd by the tractor manufacturer. They cost more because of tighter tolerances, better metallurgy and traceability." },
      { heading: "When Aftermarket Costs More", body: "A cheap filter that lets debris into your engine costs a full engine rebuild. A cheap bearing that seizes costs downtime during peak season." },
      { heading: "Our Rule of Thumb", body: "Engine, transmission, hydraulic pump, brakes, electronics: genuine. Filters, belts, hoses, lights, general hardware: quality aftermarket is acceptable." },
    ],
  },
  "tractor-clutch-slipping-causes": {
    title: "Why Your Tractor Clutch Is Slipping — And How to Fix It",
    description: "Clutch slip can be an adjustment issue, a worn plate or contaminated friction. Diagnose it right.",
    category: "Clutch",
    date: "2026-03-05",
    read: "4 min read",
    author: "Workshop Team",
    content: [
      { heading: "Free-Play Check First", body: "Most clutch slips on older tractors are simply an adjustment issue. Check pedal free-play and adjust the linkage before assuming the worst." },
      { heading: "Contamination", body: "A failed rear main seal or oil leak onto the flywheel will glaze a new clutch in hours. Always fix the source of contamination first." },
      { heading: "Worn Friction Disc", body: "If adjustment and contamination are ruled out, the friction disc is worn. Replace as a complete kit — plate, pressure plate, release bearing and pilot bearing." },
    ],
  },
  "tractor-electrical-faults-diagnostics": {
    title: "Modern Tractor Electrical Faults: A Diagnostic Approach",
    description: "Today's tractors are computers on wheels. Here's our systematic approach to finding faults fast.",
    category: "Electrical",
    date: "2026-02-22",
    read: "8 min read",
    author: "Mohd Noordeen Malik",
    content: [
      { heading: "Battery First", body: "Half of all 'electrical problems' are bad batteries or corroded grounds. Test the battery, clean every ground strap, and check voltage drop across the main cables." },
      { heading: "Charging System", body: "Alternator output should be 13.8–14.4 V at the battery with the engine running. Less = undercharging. More = voltage regulator failure." },
      { heading: "Parasitic Draw", body: "If the battery dies between uses, measure parasitic draw with an ammeter. Anything over 50 mA on a tractor is suspect." },
      { heading: "Sensor & CAN-Bus Issues", body: "Modern CRDi tractors rely on sensor feedback. A single failed sensor can put the tractor into limp mode. Scan for codes before chasing wiring." },
    ],
  },
  "tractor-pre-season-checklist": {
    title: "The Complete Pre-Season Tractor Checklist",
    description: "A 30-point pre-season checklist to get your tractor ready for the busy season.",
    category: "Maintenance",
    date: "2026-02-08",
    read: "5 min read",
    author: "Workshop Team",
    content: [
      { heading: "Fluids & Filters", body: "Engine oil & filter, hydraulic oil & filter, fuel filters, coolant, gearbox oil, front axle oil. Replace by hours-since-last-service." },
      { heading: "Engine Bay", body: "Belts, hoses, radiator cap, air filter element, battery terminals, fan clutch operation." },
      { heading: "Under the Tractor", body: "Leaks at engine, transmission, hydraulics, axle, final drives. Check for loose bolts, cracked panels, damaged linkages." },
      { heading: "Tyres, Brakes, Steering", body: "Tyre pressure, wheel nuts, brake pedal travel, steering free-play, power steering fluid level." },
      { heading: "Implement Check", body: "PTO, 3-point linkage, drawbar, trailer connections, lights, SMV sign." },
      { heading: "Book a Service", body: "If you'd rather have us run through the list, send a WhatsApp and we'll book a pre-season inspection slot." },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const ld = articleSchema({
    title: post.title,
    description: post.description,
    slug,
    publishedAt: post.date,
    author: post.author,
  });
  const bc = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}
      />
      <Breadcrumbs
        items={[
          { href: "/blog", label: "Blog" },
          { label: post.category },
        ]}
      />

      <article className="section">
        <Container className="max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-yellow"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to blog
          </Link>

          <span className="mt-6 inline-flex rounded-md border border-brand-yellow/30 bg-brand-yellow/5 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-yellow">
            {post.category}
          </span>
          <h1 className="h-heading mt-4 text-4xl leading-[0.95] text-white sm:text-5xl">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-white/55">
            <span className="inline-flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" /> {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {post.read}
            </span>
          </div>

          <div className="prose prose-invert mt-10 max-w-none">
            {post.content.map((b) => (
              <div key={b.heading} className="mb-7">
                <h2 className="h-heading text-2xl text-brand-yellow">
                  {b.heading}
                </h2>
                <p className="mt-2 text-base leading-relaxed text-white/75">
                  {b.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-brand-yellow/30 bg-gradient-to-br from-brand-yellow/10 to-transparent p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-yellow">
              Need Help With Your Tractor?
            </p>
            <h3 className="h-heading mt-2 text-2xl text-white">
              Send a WhatsApp or Call Us
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Share your tractor model, hours and the issue you're facing.
              We'll respond with a clear next step.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <Button asChild variant="whatsapp" size="md" className="rounded-md">
                <a
                  href={whatsappLink(`Hi, I read "${post.title}" and need help with my tractor.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </Button>
              <Button asChild variant="call" size="md" className="rounded-md">
                <a href={phoneLink()}>
                  <Phone className="h-4 w-4" /> Call {siteConfig.phones.primary}
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </article>

      <FinalCTA />
    </>
  );
}
