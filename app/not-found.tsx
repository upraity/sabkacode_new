import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-semibold text-brand-600">404</p>
      <h1 className="mt-2 text-2xl font-bold text-ink-900">Page not found</h1>
      <p className="mt-2 max-w-sm text-ink-500">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <div className="mt-6 flex gap-3">
        <LinkButton href="/">Go home</LinkButton>
        <Link
          href="/courses"
          className="inline-flex items-center justify-center rounded-md border border-ink-200 px-4 py-2 text-sm font-medium text-ink-800 hover:bg-ink-50"
        >
          Browse Courses
        </Link>
      </div>
    </Container>
  );
}
