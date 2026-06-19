import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyChoose } from "@/components/sections/why-choose";
import { PartsCategories } from "@/components/sections/parts-categories";
import { Brands } from "@/components/sections/brands";
import { RepairProcess } from "@/components/sections/repair-process";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCTA } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesOverview />
      <WhyChoose />
      <PartsCategories />
      <Brands />
      <RepairProcess />
      <Gallery />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
