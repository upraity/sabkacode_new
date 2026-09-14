import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Course } from "@/types";

export function CourseCard({ course, universityCount }: { course: Course; universityCount?: number }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group flex flex-col rounded-card border border-ink-100 bg-white p-5 shadow-card transition-colors hover:border-brand-300"
    >
      <h3 className="text-base font-semibold text-ink-900">{course.name}</h3>
      <p className="mt-1 text-sm text-ink-500">{course.fullName}</p>
      <p className="mt-3 text-sm text-ink-600 line-clamp-2">{course.description}</p>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-ink-400">
          {typeof universityCount === "number"
            ? `${universityCount} ${universityCount === 1 ? "university" : "universities"}`
            : ""}
        </span>
        <span className="flex items-center gap-1 font-medium text-brand-600 group-hover:gap-1.5 transition-all">
          Explore <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
