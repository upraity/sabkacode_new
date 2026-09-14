import Link from "next/link";
import { Building2 } from "lucide-react";
import { University } from "@/types";
import { Badge } from "@/components/ui/Badge";

export function UniversityCard({ university, href }: { university: University; href: string }) {
  const isComingSoon = university.status === "coming-soon";

  const content = (
    <div
      className={`flex items-start gap-3 rounded-card border p-4 shadow-card ${
        isComingSoon
          ? "border-ink-100 bg-ink-50/40 opacity-80"
          : "border-ink-100 bg-white hover:border-brand-300"
      }`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
        <Building2 className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="truncate font-semibold text-ink-900">{university.shortName}</h3>
          {isComingSoon && <Badge tone="muted">Coming soon</Badge>}
        </div>
        <p className="truncate text-sm text-ink-500">{university.location}</p>
      </div>
    </div>
  );

  if (isComingSoon) return content;

  return (
    <Link href={href} className="block transition-colors">
      {content}
    </Link>
  );
}
