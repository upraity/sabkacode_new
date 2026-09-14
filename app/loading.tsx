import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <Container className="py-16">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-32 animate-pulse rounded-card bg-ink-100" />
        ))}
      </div>
    </Container>
  );
}
