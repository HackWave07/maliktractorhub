import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FinalCTA } from "@/components/sections/final-cta";
import { siteConfig } from "@/lib/site-config";
import { faqSchema, breadcrumbSchema } from "@/lib/structured-data";
import FAQClient from "@/components/sections/faq-client";

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions | Malik Tractor Hub",
  description:
    "Answers to common questions about tractor repair, engine rebuilding, maintenance, spare parts and hydraulic services.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | Malik Tractor Hub",
    description:
      "Common questions about tractor repair, engine rebuilding, maintenance and spare parts.",
    url: `${siteConfig.url}/faq`,
  },
};

const faqs = [
  {
    category: "Tractor Engine Repair",
    items: [
      {
        q: "What are the early signs that my tractor engine needs rebuilding?",
        a: "Blue or white exhaust smoke, excessive oil consumption, knocking noises, poor compression, coolant in the oil, or metal in the oil filter are key indicators. A compression test and leak-down test confirm the diagnosis before committing to a full rebuild.",
      },
      {
        q: "How long does an engine rebuild typically take?",
        a: "Most engine rebuilds take 4–7 working days depending on parts availability and the extent of damage. We provide a timeline in the written estimate.",
      },
      {
        q: "Do you use genuine parts or aftermarket parts?",
        a: "We use OEM-grade and genuine parts for safety-critical assemblies (engine internals, hydraulics, brakes). For consumables (filters, belts, hoses), we use quality aftermarket brands from trusted suppliers.",
      },
      {
        q: "Can I watch my tractor being repaired?",
        a: "Yes, we welcome owners to visit and see their tractor's work in progress. Call or WhatsApp to schedule a workshop visit.",
      },
    ],
  },
  {
    category: "Tractor Overhaul",
    items: [
      {
        q: "What is the difference between a top-end and full engine rebuild?",
        a: "A top-end rebuild covers the cylinder head, valves and gaskets. A full rebuild disassembles the entire engine including the block, crankshaft, pistons and bearings.",
      },
      {
        q: "How often should a tractor engine be overhauled?",
        a: "Heavy-use tractors (ploughing, harvesting) should be overhauled every 5,000–7,000 hours. Light-use tractors can go 7,000–10,000 hours. Regular oil changes extend overhaul intervals.",
      },
      {
        q: "What does an engine overhaul guarantee include?",
        a: "We guarantee 12 months or the next service period against manufacturing defects in the rebuilt engine. Oil-related wear items (rings, bearings) are covered under normal operation.",
      },
    ],
  },
  {
    category: "Tractor Maintenance",
    items: [
      {
        q: "What is the recommended maintenance schedule for my tractor?",
        a: "Consult your operator's manual for the OEM schedule. Common intervals: engine oil every 250 hours, hydraulic oil every 500–600 hours, fuel filters annually, air filters every 250 hours.",
      },
      {
        q: "Can maintenance prevent expensive repairs?",
        a: "Absolutely. Regular oil changes, filter replacements, fluid checks and seasonal inspections catch problems early and can extend engine life by 30–50%.",
      },
      {
        q: "Do you offer pre-season inspection packages?",
        a: "Yes. We run a complete 30-point pre-season checklist covering fluids, filters, belts, hoses, brakes, steering, hydraulics and electrical systems.",
      },
    ],
  },
  {
    category: "Tractor Spare Parts",
    items: [
      {
        q: "Do you have the parts I need in stock?",
        a: "We maintain ready stock for fast-moving parts across engine, hydraulic, filter and transmission categories. Special or rare parts can usually be sourced within 48 hours.",
      },
      {
        q: "What is the warranty on spare parts?",
        a: "Genuine OEM parts carry the manufacturer's warranty. Quality aftermarket parts carry our 12-month defect warranty when used in our repairs.",
      },
      {
        q: "Can I buy spare parts without getting a repair service?",
        a: "Yes, we sell spare parts retail. Call or WhatsApp with your tractor brand, model and part requirements. We provide quotes and arrange delivery.",
      },
      {
        q: "Do you ship parts outside Noida/Ghaziabad?",
        a: "Yes. We ship parts across India via courier. Call to arrange shipping and payment terms.",
      },
    ],
  },
  {
    category: "Emergency Tractor Service",
    items: [
      {
        q: "Can you do on-site repairs if my tractor breaks down in the field?",
        a: "Yes, for critical breakdowns we offer mobile assistance within 50 km of Noida. Call immediately and we'll dispatch a mechanic.",
      },
      {
        q: "Do you operate on weekends or holidays?",
        a: "Yes, we're open 7 days a week, 9 AM – 9 PM. Emergency calls are always welcome.",
      },
      {
        q: "How much do emergency repair services cost?",
        a: "On-site emergency calls have a call-out fee plus labor and parts costs. Exact pricing depends on the issue. Call for a quote.",
      },
    ],
  },
  {
    category: "Hydraulic Repair",
    items: [
      {
        q: "How do I know if my hydraulic system needs repair?",
        a: "Slow lift, jerky controls, leaking cylinders, noisy pump, or weak draft control indicate hydraulic problems. We diagnose with a pressure test.",
      },
      {
        q: "What is a hydraulic flush and why is it important?",
        a: "A hydraulic flush removes contaminated oil and debris from the system. It prevents premature wear and should be done every 600 hours or annually.",
      },
      {
        q: "Can you rebuild hydraulic cylinders?",
        a: "Yes, we rebuild lift cylinders, remote cylinders and control valve actuators. Rebuilds are typically faster and cheaper than replacement.",
      },
    ],
  },
];

export default function FAQPage() {
  const faqData = faqs.flatMap((cat) =>
    cat.items.map((item) => ({
      question: item.q,
      answer: item.a,
    }))
  );

  const faqld = faqSchema(faqData);
  const bc = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "FAQ", url: "/faq" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqld) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Common Questions Answered"
        description="Everything you need to know about tractor repair, maintenance, spare parts and our services."
      />
      <Breadcrumbs items={[{ label: "FAQ" }]} />

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Your Questions"
            title="Frequently Asked Questions"
          />

          <div className="mt-12 space-y-8">
            {faqs.map((category) => (
              <div key={category.category}>
                <h2 className="h-heading mb-6 text-2xl text-white">
                  {category.category}
                </h2>
                <FAQClient items={category.items} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
