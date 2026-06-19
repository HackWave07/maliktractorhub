"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error("Global error caught:", error);
    }
  }, [error]);

  return (
    <html>
      <body className="min-h-screen bg-brand-charcoal-soft text-white">
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="text-center">
            <h1 className="h-heading text-5xl text-white mb-4">Critical Error</h1>
            <p className="text-white/70 mb-8">
              We're sorry, but something went seriously wrong. Our team has been notified.
            </p>
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-md bg-brand-yellow px-6 py-3 font-semibold text-brand-charcoal-soft transition hover:bg-brand-yellow/90"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
