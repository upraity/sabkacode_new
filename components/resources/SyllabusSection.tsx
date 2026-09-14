import { BookOpenCheck } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";

export function SyllabusSection({ syllabus }: { syllabus?: string }) {
  return (
    <div className="mb-8">
      <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-ink-900">
        <BookOpenCheck className="h-5 w-5 text-brand-600" /> Syllabus
      </h2>
      {syllabus && syllabus.trim().length > 0 ? (
        <div className="rounded-card border border-ink-100 bg-white p-5">
          <p className="whitespace-pre-line text-sm leading-relaxed text-ink-600">{syllabus}</p>
        </div>
      ) : (
        <EmptyState
          title="Syllabus not added yet for this subject."
          description="Check back soon — syllabus content is being added regularly."
        />
      )}
    </div>
  );
}
