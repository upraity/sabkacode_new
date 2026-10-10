
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
  semesters: Option[];
  currentSemester?: string;
  subjects: Option[];
  currentSubjectId?: string;
}

export function PYQFilters({
  universities,
  currentUniversity,
  courses,
  currentCourse,
  semesters,
  currentSemester,
  subjects,
  currentSubjectId,
}: PYQFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function update(next: Record<string, string | undefined>) {
    const params = new URLSearchParams(searchParams.toString());

    for (const [key, value] of Object.entries(next)) {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    }

    const query = params.toString();
    router.push(query ? `/papers?${query}` : "/papers");
  }

  return (
    <div className="flex flex-wrap gap-3">
      {/* University */}
      <div>
        <label className="mb-1 block text-xs font-medium text-ink-500">
          University
        </label>

        <select
          value={currentUniversity ?? ""}
          onChange={(e) =>
            update({
              university: e.target.value,
              course: undefined,
              semester: undefined,
              subject: undefined,
            })
          }
          className="rounded-md border border-ink-200 bg-white px-3 py-2 text-sm text-ink-700 focus:border-brand-500 focus:outline-none"
        >
          {universities.map((u) => (
            <option key={u.value} value={u.value}>
              {u.label}
            </option>
          ))}
        </select>
      </div>

      {/* Course */}
      <div>
        <label className="mb-1 block text-xs font-medium text-ink-500">
          Course
        </label>

        <select
          value={currentCourse ?? ""}
          onChange={(e) =>
            update({
              course: e.target.value || undefined,
              semester: undefined,
              subject: undefined,
            })
          }
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

      {/* Semester */}
      <div>
        <label className="mb-1 block text-xs font-medium text-ink-500">
          Semester
        </label>

        <select
          value={currentSemester ?? ""}
          onChange={(e) =>
            update({
              semester: e.target.value || undefined,
              subject: undefined,
            })
          }
          className="rounded-md border border-ink-200 bg-white px-3 py-2 text-sm text-ink-700 focus:border-brand-500 focus:outline-none"
        >
          <option value="">All Semesters</option>

          {semesters.map((semester) => (
            <option key={semester.value} value={semester.value}>
              {semester.label}
            </option>
          ))}
        </select>
      </div>

      {/* Subject */}
      <div>
        <label className="mb-1 block text-xs font-medium text-ink-500">
          Subject
        </label>

        <select
          value={currentSubjectId ?? ""}
          onChange={(e) =>
            update({
              subject: e.target.value || undefined,
            })
          }
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
