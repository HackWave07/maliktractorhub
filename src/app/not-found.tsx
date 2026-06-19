import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section">
      <Container className="text-center">
        <p className="h-heading text-[10rem] leading-none text-brand-yellow sm:text-[14rem]">
          404
        </p>
        <h1 className="h-heading mt-4 text-4xl text-white sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/60">
          The page you're looking for doesn't exist or has been moved. Try
          going back to the home page or browse our services.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-md">
            <Link href="/">
              <ArrowRight className="h-4 w-4" /> Back to home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-md">
            <Link href="/services">
              <Search className="h-4 w-4" /> Browse services
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
