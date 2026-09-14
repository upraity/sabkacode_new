import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Subject } from "@/types";
import { Badge } from "@/components/ui/Badge";

export function SubjectCard({ subject, href }: { subject: Subject; href: string }) {
  return (
    <Link
      href={href}
      className="flex items-start gap-3 rounded-card border border-ink-100 bg-white p-4 shadow-card transition-colors hover:border-brand-300"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
        <BookOpen className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-1.5">
          <h3 className="font-medium text-ink-900">{subject.name}</h3>
          {subject.specialization && <Badge tone="brand">{subject.specialization}</Badge>}
        </div>
        {subject.code && <p className="text-xs text-ink-400">{subject.code}</p>}
        {subject.description && (
          <p className="mt-1 line-clamp-2 text-sm text-ink-500">{subject.description}</p>
        )}
      </div>
    </Link>
  );
}
