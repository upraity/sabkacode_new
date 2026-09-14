import Link from "next/link";
import * as Icons from "lucide-react";
import { Tool } from "@/types";

export function ToolCard({ tool }: { tool: Tool }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[tool.icon] ?? Icons.Wrench;

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="flex items-start gap-3 rounded-card border border-ink-100 bg-white p-4 shadow-card transition-colors hover:border-brand-300"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h3 className="font-medium text-ink-900">{tool.name}</h3>
        <p className="mt-0.5 text-sm text-ink-500">{tool.description}</p>
      </div>
    </Link>
  );
}
