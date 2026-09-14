import { Suspense } from "react";
import { FileDown, FileCheck2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EmptyState } from "@/components/ui/EmptyState";
import { PYQFilters } from "@/components/papers/PYQFilters";
import { getUniversities, getCourses, getSubjectsForUniversity, getPYQRows } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Previous Year Papers",
  description: "Browse previous year question papers by university, course and subject, with solutions where available.",
  path: "/papers",
});

interface Props {
  searchParams: { university?: string; course?: string; subject?: string };
}

export default async function PapersPage({ searchParams }: Props) {
  const [universities, allCourses] = await Promise.all([getUniversities(), getCourses()]);
  const activeUniversities = universities.filter((u) => u.status === "active");

  const currentUniversity =
    searchParams.university && activeUniversities.some((u) => u.slug === searchParams.university)
      ? searchParams.university
      : activeUniversities[0]?.slug;

  const subjectsForUniversity = currentUniversity ? await getSubjectsForUniversity(currentUniversity) : [];

  const courseSlugsAvailable = Array.from(new Set(subjectsForUniversity.map((s) => s.courseSlug)));
  const coursesAvailable = allCourses.filter((c) => courseSlugsAvailable.includes(c.slug));

  const currentCourse =
    searchParams.course && courseSlugsAvailable.includes(searchParams.course) ? searchParams.course : undefined;

  const subjectsForDropdown = currentCourse
    ? subjectsForUniversity.filter((s) => s.courseSlug === currentCourse)
    : subjectsForUniversity;

  const currentSubjectId =
    searchParams.subject && subjectsForDropdown.some((s) => s.id === searchParams.subject)
      ? searchParams.subject
      : undefined;

  const rows = currentUniversity
    ? await getPYQRows({ universitySlug: currentUniversity, courseSlug: currentCourse, subjectId: currentSubjectId })
    : [];

  return (
    <Section
      title="Previous Year Papers"
      description="Pick a university to start — narrow down by course and subject as needed."
    >
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Previous Papers" }]} />

      <div className="mb-6">
        <Suspense fallback={null}>
          <PYQFilters
            universities={activeUniversities.map((u) => ({ value: u.slug, label: u.shortName }))}
            currentUniversity={currentUniversity}
            courses={coursesAvailable.map((c) => ({ value: c.slug, label: c.name }))}
            currentCourse={currentCourse}
            subjects={subjectsForDropdown.map((s) => ({ value: s.id, label: s.name }))}
            currentSubjectId={currentSubjectId}
          />
        </Suspense>
      </div>

      {rows.length === 0 ? (
        <EmptyState
          title="No previous papers available for this selection yet."
          description="Try a different university, course or subject."
        />
      ) : (
        <div className="overflow-x-auto rounded-card border border-ink-100">
          <table className="w-full text-left text-sm">
            <thead className="bg-ink-50 text-xs uppercase tracking-wide text-ink-500">
              <tr>
                <th className="px-4 py-3 font-medium">Subject</th>
                <th className="px-4 py-3 font-medium">Course</th>
                <th className="px-4 py-3 font-medium">Year</th>
                <th className="px-4 py-3 font-medium">Exam Type</th>
                <th className="px-4 py-3 font-medium">Paper</th>
                <th className="px-4 py-3 font-medium">Solution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100 bg-white">
              {rows.map(({ subject, resource }) => (
                <tr key={resource.id}>
                  <td className="px-4 py-3 font-medium text-ink-900">{subject.name}</td>
                  <td className="px-4 py-3 text-ink-500 uppercase">{subject.courseSlug}</td>
                  <td className="px-4 py-3 text-ink-600">{resource.year ?? "—"}</td>
                  <td className="px-4 py-3 text-ink-600">{resource.examType ?? "—"}</td>
                  <td className="px-4 py-3">
                    {resource.fileUrl ? (
                      <a
                        href={resource.fileUrl}
                        className="inline-flex items-center gap-1 font-medium text-brand-600 hover:text-brand-700"
                      >
                        <FileDown className="h-3.5 w-3.5" /> Download
                      </a>
                    ) : (
                      <span className="text-xs text-ink-400">Coming soon</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {resource.solutionUrl ? (
                      <a
                        href={resource.solutionUrl}
                        className="inline-flex items-center gap-1 font-medium text-brand-600 hover:text-brand-700"
                      >
                        <FileCheck2 className="h-3.5 w-3.5" /> View Solution
                      </a>
                    ) : (
                      <span className="text-xs text-ink-400">Not available</span>
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
