import { ReactNode } from "react";

export function Badge({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "brand" | "muted";
}) {
  const tones: Record<string, string> = {
    default: "bg-ink-100 text-ink-700",
    brand: "bg-brand-50 text-brand-700",
    muted: "bg-ink-50 text-ink-500",
  };
  return (
    <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}
