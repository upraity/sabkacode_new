"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-semibold text-red-500">Something went wrong</p>
      <h1 className="mt-2 text-2xl font-bold text-ink-900">We hit an unexpected error</h1>
      <p className="mt-2 max-w-sm text-ink-500">
        Please try again. If the problem continues, come back a little later.
      </p>
      <Button className="mt-6" onClick={() => reset()}>
        Try again
      </Button>
    </Container>
  );
}
