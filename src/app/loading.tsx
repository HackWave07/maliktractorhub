import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <section className="section">
      <Container>
        <div className="space-y-8 animate-pulse">
          <div className="h-12 w-3/4 rounded-lg bg-white/10" />
          <div className="space-y-4">
            <div className="h-4 w-full rounded bg-white/10" />
            <div className="h-4 w-5/6 rounded bg-white/10" />
            <div className="h-4 w-4/5 rounded bg-white/10" />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="aspect-square rounded-lg bg-white/10" />
            <div className="aspect-square rounded-lg bg-white/10" />
            <div className="aspect-square rounded-lg bg-white/10" />
          </div>
        </div>
      </Container>
    </section>
  );
}
