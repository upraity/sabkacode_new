import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ResourceTabs } from "@/components/resources/ResourceTabs";
import { SyllabusSection } from "@/components/resources/SyllabusSection";
import {
  getBranchBySlug,
  getCourseBySlug,
  getResourcesForSubject,
  getSubjectBySlug,
  getUniversityBySlug,
} from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: { course: string; university: string; branch: string; semester: string; subject: string };
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
  const semester = parseInt(params.semester, 10);
  const subject = await getSubjectBySlug({
    courseSlug: course.slug,
    universitySlug: university.slug,
    branchSlug: params.branch,
    semester,
    subjectSlug: params.subject,
  });
  if (!subject) return pageMetadata({ title: "Not found" });
  return pageMetadata({
    title: `${subject.name} — Notes, PYQs & More`,
    description: subject.description,
    path: `/courses/${course.slug}/${university.slug}/${params.branch}/${semester}/${subject.slug}`,
  });
}

export default async function SubjectDetailPage({ params }: Props) {
  const course = await getCourseBySlug(params.course);
  const university = await getUniversityBySlug(params.university);
  if (!course || !university) notFound();

  const semester = parseInt(params.semester, 10);
  const branchLabel = await resolveBranchLabel(params.course, params.university, params.branch, course.hasBranches);
  if (!branchLabel) notFound();

  const subject = await getSubjectBySlug({
    courseSlug: course.slug,
    universitySlug: university.slug,
    branchSlug: params.branch,
    semester,
    subjectSlug: params.subject,
  });
  if (!subject) notFound();

  const resources = await getResourcesForSubject(subject.id);

  return (
    <Section title={subject.name} description={subject.description}>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: course.name, href: `/courses/${course.slug}` },
          { label: university.shortName, href: `/courses/${course.slug}/${university.slug}` },
          { label: branchLabel, href: `/courses/${course.slug}/${university.slug}/${params.branch}` },
          {
            label: `Semester ${semester}`,
            href: `/courses/${course.slug}/${university.slug}/${params.branch}/${semester}`,
          },
          { label: subject.name },
        ]}
      />
      <SyllabusSection syllabus={subject.syllabus} />
      <ResourceTabs resources={resources} />
    </Section>
  );
}
