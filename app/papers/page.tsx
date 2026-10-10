
import { Suspense } from "react";
import { FileDown, FileCheck2 } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EmptyState } from "@/components/ui/EmptyState";
import { StatsStrip } from "@/components/ui/StatsStrip";
import { PYQFilters } from "@/components/papers/PYQFilters";

import {
  getUniversities,
  getCourses,
  getSubjectsForUniversity,
  getPYQRows,
  getContentStats,
} from "@/lib/data";

import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Previous Year Papers",
  description:
    "Browse previous year question papers by university, course, semester and subject, with solutions where available.",
  path: "/papers",
});

interface Props {
  searchParams: Promise<{
    university?: string;
    course?: string;
    semester?: string;
    subject?: string;
  }>;
}

export default async function PapersPage({ searchParams }: Props) {
  const params = await searchParams;

  const [universities, allCourses, stats] = await Promise.all([
    getUniversities(),
    getCourses(),
    getContentStats(),
  ]);

  const activeUniversities = universities.filter(
    (university) => university.status === "active"
  );

  const currentUniversity =
    params.university &&
    activeUniversities.some(
      (university) => university.slug === params.university
    )
      ? params.university
      : activeUniversities[0]?.slug;

  const subjectsForUniversity = currentUniversity
    ? await getSubjectsForUniversity(currentUniversity)
    : [];

  const courseSlugsAvailable = Array.from(
    new Set(subjectsForUniversity.map((subject) => subject.courseSlug))
  );

  const coursesAvailable = allCourses.filter((course) =>
    courseSlugsAvailable.includes(course.slug)
  );

  const currentCourse =
    params.course && courseSlugsAvailable.includes(params.course)
      ? params.course
      : undefined;

  // Filter subjects by the selected course first.
  const subjectsForCourse = currentCourse
    ? subjectsForUniversity.filter(
        (subject) => subject.courseSlug === currentCourse
      )
    : subjectsForUniversity;

  // Generate semester options from the actual subject data.
  const availableSemesters = Array.from(
    new Set(subjectsForCourse.map((subject) => subject.semester))
  ).sort((a, b) => a - b);

  const currentSemester =
    params.semester &&
    availableSemesters.some(
      (semester) => String(semester) === params.semester
    )
      ? params.semester
      : undefined;

  // Filter the subject dropdown by the selected semester.
  const subjectsForDropdown = subjectsForCourse.filter(
    (subject) =>
      !currentSemester ||
      String(subject.semester) === currentSemester
  );

  const currentSubjectId =
    params.subject &&
    subjectsForDropdown.some((subject) => subject.id === params.subject)
      ? params.subject
      : undefined;

  // Fetch papers for the selected university, course and subject.
  const allRows = currentUniversity
    ? await getPYQRows({
        universitySlug: currentUniversity,
        courseSlug: currentCourse,
        subjectId: currentSubjectId,
      })
    : [];

  // Apply semester filtering to the paper rows as well.
  const rows = allRows.filter(
    ({ subject }) =>
      !currentSemester ||
      String(subject.semester) === currentSemester
  );

  return (
    <Section
      title="Previous Year Papers"
      description="Pick a university, course and semester to find relevant question papers."
    >
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Previous Papers" },
        ]}
      />

      <p className="mb-5 max-w-2xl text-ink-600">
        Past exam papers help you understand the actual question pattern and
        difficulty level before an exam. Filter by university, course,
        semester and subject to find the papers you need.
      </p>

      <div className="mb-6">
        <Suspense fallback={null}>
          <PYQFilters
            universities={activeUniversities.map((university) => ({
              value: university.slug,
              label: university.shortName,
            }))}
            currentUniversity={currentUniversity}
            courses={coursesAvailable.map((course) => ({
              value: course.slug,
              label: course.name,
            }))}
            currentCourse={currentCourse}
            semesters={availableSemesters.map((semester) => ({
              value: String(semester),
              label: `Semester ${semester}`,
            }))}
            currentSemester={currentSemester}
            subjects={subjectsForDropdown.map((subject) => ({
              value: subject.id,
              label: subject.name,
            }))}
            currentSubjectId={currentSubjectId}
          />
        </Suspense>
      </div>

      <div className="mb-6">
        <StatsStrip
          stats={[
            {
              value: stats.totalPyqs,
              label: "Papers Across Platform",
            },
            {
              value: rows.length,
              label: "Matching This Filter",
            },
          ]}
        />
      </div>

      {rows.length === 0 ? (
        <EmptyState
          title="No previous papers available for this selection yet."
          description="Try a different semester, university, course or subject."
        />
      ) : (
        <div className="overflow-x-auto rounded-card border border-ink-100">
          <table className="w-full text-left text-sm">
            <thead className="bg-ink-50 text-xs uppercase tracking-wide text-ink-500">
              <tr>
                <th className="px-4 py-3 font-medium">Subject</th>
                <th className="px-4 py-3 font-medium">Course</th>
                <th className="px-4 py-3 font-medium">Semester</th>
                <th className="px-4 py-3 font-medium">Year</th>
                <th className="px-4 py-3 font-medium">Exam Type</th>
                <th className="px-4 py-3 font-medium">Paper</th>
                <th className="px-4 py-3 font-medium">Solution</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-ink-100 bg-white">
              {rows.map(({ subject, resource }) => (
                <tr key={resource.id}>
                  <td className="px-4 py-3 font-medium text-ink-900">
                    {subject.name}
                  </td>

                  <td className="px-4 py-3 uppercase text-ink-500">
                    {subject.courseSlug}
                  </td>

                  <td className="px-4 py-3 text-ink-600">
                    {subject.semester}
                  </td>

                  <td className="px-4 py-3 text-ink-600">
                    {resource.year ?? "—"}
                  </td>

                  <td className="px-4 py-3 text-ink-600">
                    {resource.examType ?? "—"}
                  </td>

                  <td className="px-4 py-3">
                    {resource.fileUrl ? (
                      <a
                        href={resource.fileUrl}
                        className="inline-flex items-center gap-1 font-medium text-brand-600 hover:text-brand-700"
                      >
                        <FileDown className="h-3.5 w-3.5" />
                        Download
                      </a>
                    ) : (
                      <span className="text-xs text-ink-400">
                        Coming soon
                      </span>
                    )}
                  </td>

                  <td className="px-4 py-3">
                    {resource.solutionUrl ? (
                      <a
                        href={resource.solutionUrl}
                        className="inline-flex items-center gap-1 font-medium text-brand-600 hover:text-brand-700"
                      >
                        <FileCheck2 className="h-3.5 w-3.5" />
                        View Solution
                      </a>
                    ) : (
                      <span className="text-xs text-ink-400">
                        Not available
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Section>
  );
}
