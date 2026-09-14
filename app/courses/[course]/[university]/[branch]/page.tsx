import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getBranchBySlug, getCourseBySlug, getUniversityBySlug } from "@/lib/data";
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
