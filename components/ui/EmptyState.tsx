import { InboxIcon } from "lucide-react";
import { ReactNode } from "react";

export function EmptyState({
  title,
  description,
  icon,
}: {
  title: string;
  description?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-card border border-dashed border-ink-200 bg-ink-50/50 px-6 py-12 text-center">
      <div className="mb-3 text-ink-400">{icon ?? <InboxIcon className="h-8 w-8" />}</div>
      <p className="font-medium text-ink-700">{title}</p>
      {description && <p className="mt-1 max-w-sm text-sm text-ink-500">{description}</p>}
    </div>
  );
}
