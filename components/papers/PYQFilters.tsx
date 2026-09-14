"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface Option {
  value: string;
  label: string;
}

interface PYQFiltersProps {
  universities: Option[];
  currentUniversity?: string;
  courses: Option[];
  currentCourse?: string;
  subjects: Option[];
  currentSubjectId?: string;
}

// A pure "controlled by the URL" filter bar: the server page computes which
// courses/subjects are valid for the current university+course (see
// app/papers/page.tsx) and passes them in as props. This component only
// renders selects and updates the URL — it never filters data itself.
export function PYQFilters({
  universities,
  currentUniversity,
  courses,
  currentCourse,
  subjects,
  currentSubjectId,
}: PYQFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function update(next: Record<string, string | undefined>) {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(next)) {
      if (value) params.set(key, value);
      else params.delete(key);
    }
    router.push(`/papers?${params.toString()}`);
  }

  return (
    <div className="flex flex-wrap gap-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-ink-500">University</label>
        <select
          value={currentUniversity ?? ""}
          onChange={(e) => update({ university: e.target.value, course: undefined, subject: undefined })}
          className="rounded-md border border-ink-200 bg-white px-3 py-2 text-sm text-ink-700 focus:border-brand-500 focus:outline-none"
        >
          {universities.map((u) => (
            <option key={u.value} value={u.value}>
              {u.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-ink-500">Course</label>
        <select
          value={currentCourse ?? ""}
          onChange={(e) => update({ course: e.target.value || undefined, subject: undefined })}
          className="rounded-md border border-ink-200 bg-white px-3 py-2 text-sm text-ink-700 focus:border-brand-500 focus:outline-none"
        >
          <option value="">All Courses</option>
          {courses.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-ink-500">Subject</label>
        <select
          value={currentSubjectId ?? ""}
          onChange={(e) => update({ subject: e.target.value || undefined })}
          className="rounded-md border border-ink-200 bg-white px-3 py-2 text-sm text-ink-700 focus:border-brand-500 focus:outline-none"
        >
          <option value="">All Subjects</option>
          {subjects.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
