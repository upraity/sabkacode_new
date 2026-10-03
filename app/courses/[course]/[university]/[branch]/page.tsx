import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StatsStrip } from "@/components/ui/StatsStrip";
import { getBranchBySlug, getCourseBySlug, getUniversityBySlug, getScopeStats } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: { course: string; university: string; branch: string };
}

async function resolveBranchLabel(courseSlug: string, universitySlug: string, branchSlug: string, hasBranches: boolean) {
  if (!hasBranches && branchSlug === "general") return "General";
  const branch = await getBranchBySlug(courseSlug, universitySlug, branchSlug);
  return branch?.name;
}

export async function generateMetadata({ params }: Props) {
  const course = await getCourseBySlug(params.course);
  const university = await getUniversityBySlug(params.university);
  if (!course || !university) return pageMetadata({ title: "Not found" });
  const label = await resolveBranchLabel(params.course, params.university, params.branch, course.hasBranches);
  return pageMetadata({
    title: `${course.name} ${label ? `— ${label}` : ""} at ${university.shortName}`,
    path: `/courses/${course.slug}/${university.slug}/${params.branch}`,
  });
}

export default async function SemesterListPage({ params }: Props) {
  const course = await getCourseBySlug(params.course);
  const university = await getUniversityBySlug(params.university);
  if (!course || !university) notFound();

  const branchLabel = await resolveBranchLabel(params.course, params.university, params.branch, course.hasBranches);
  if (!branchLabel) notFound();

  const stats = await getScopeStats({
    courseSlug: course.slug,
    universitySlug: university.slug,
    branchSlug: params.branch,
  });

  const semesters = Array.from({ length: course.totalSemesters }, (_, i) => i + 1);

  return (
    <Section
      title={`${branchLabel} — Select Semester`}
      description={`${course.name} at ${university.shortName}`}
    >
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: course.name, href: `/courses/${course.slug}` },
          { label: university.shortName, href: `/courses/${course.slug}/${university.slug}` },
          { label: branchLabel },
        ]}
      />

      <p className="mb-6 max-w-2xl text-ink-600">
        {course.name} at {university.shortName} runs across {course.totalSemesters} semesters.
        {stats.totalSubjects > 0
          ? ` ${stats.totalSubjects} subject${stats.totalSubjects === 1 ? "" : "s"} currently have notes, syllabus or previous year papers available — pick a semester below to see what's there.`
          : " Subject content for this combination is being added — pick a semester below to check."}
      </p>

      <div className="mb-8">
        <StatsStrip
          stats={[
            { value: course.totalSemesters, label: "Semesters" },
            { value: stats.totalSubjects, label: "Subjects Covered" },
            { value: stats.totalResources, label: "Notes & PYQs" },
            { value: stats.totalDetailedNotes, label: "Full Unit-Wise Notes" },
          ]}
        />
      </div>

      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-500">Select Semester</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {semesters.map((sem) => (
          <Link
            key={sem}
            href={`/courses/${course.slug}/${university.slug}/${params.branch}/${sem}`}
            className="rounded-card border border-ink-100 bg-white py-6 text-center font-medium text-ink-800 shadow-card hover:border-brand-300"
          >
            Semester {sem}
          </Link>
        ))}
      </div>
    </Section>
  );
}
