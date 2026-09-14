import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EmptyState } from "@/components/ui/EmptyState";
import { SubjectCard } from "@/components/resources/SubjectCard";
import { getBranchBySlug, getCourseBySlug, getSubjects, getUniversityBySlug } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: { course: string; university: string; branch: string; semester: string };
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
  return pageMetadata({
    title: `Semester ${params.semester} Subjects — ${university.shortName}`,
    path: `/courses/${course.slug}/${university.slug}/${params.branch}/${params.semester}`,
  });
}

export default async function SubjectsPage({ params }: Props) {
  const course = await getCourseBySlug(params.course);
  const university = await getUniversityBySlug(params.university);
  if (!course || !university) notFound();

  const semester = parseInt(params.semester, 10);
  if (isNaN(semester) || semester < 1 || semester > course.totalSemesters) notFound();

  const branchLabel = await resolveBranchLabel(params.course, params.university, params.branch, course.hasBranches);
  if (!branchLabel) notFound();

  const subjects = await getSubjects({
    courseSlug: course.slug,
    universitySlug: university.slug,
    branchSlug: params.branch,
    semester,
  });

  return (
    <Section title={`Semester ${semester} — Subjects`} description={`${branchLabel} · ${university.shortName}`}>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: course.name, href: `/courses/${course.slug}` },
          { label: university.shortName, href: `/courses/${course.slug}/${university.slug}` },
          { label: branchLabel, href: `/courses/${course.slug}/${university.slug}/${params.branch}` },
          { label: `Semester ${semester}` },
        ]}
      />
      {subjects.length === 0 ? (
        <EmptyState
          title="No subjects are available for this semester yet."
          description="Subject data for this semester hasn't been added yet."
        />
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              href={`/courses/${course.slug}/${university.slug}/${params.branch}/${semester}/${subject.slug}`}
            />
          ))}
        </div>
      )}
    </Section>
  );
}
