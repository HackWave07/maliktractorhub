"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, Phone } from "lucide-react";
import { phoneLink, whatsappLink } from "@/lib/contact-links";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("Error caught by error.tsx:", error);
    }
  }, [error]);

  return (
    <section className="section">
      <Container className="text-center">
        <div className="flex justify-center">
          <AlertCircle className="h-16 w-16 text-brand-yellow/60" />
        </div>
        <h1 className="h-heading mt-6 text-4xl text-white sm:text-5xl">
          Something Went Wrong
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/60">
          We encountered an unexpected error while loading this page. Our team has been notified. Please try again or contact us directly.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button onClick={reset} size="lg" className="rounded-md">
            Try Again
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-md">
            <Link href="/">
              <Home className="h-4 w-4" /> Home
            </Link>
          </Button>
          <Button
            asChild
            variant="whatsapp"
            size="lg"
            className="rounded-md"
          >
            <a
              href={whatsappLink("Hi, I encountered an error on your website and need help.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="h-4 w-4" /> Contact Us
            </a>
          </Button>
        </div>

        {process.env.NODE_ENV === "development" && error.message && (
          <div className="mt-8 rounded-lg bg-red-500/10 p-4 text-left">
            <p className="text-xs font-mono text-red-400">{error.message}</p>
          </div>
        )}
      </Container>
    </section>
  );
}
