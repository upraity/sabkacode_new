import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EmptyState } from "@/components/ui/EmptyState";
import { StatsStrip } from "@/components/ui/StatsStrip";
import { SubjectCard } from "@/components/resources/SubjectCard";
import { SpecializationFilter } from "@/components/resources/SpecializationFilter";
import { getBranchBySlug, getCourseBySlug, getSubjects, getUniversityBySlug } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: { course: string; university: string; branch: string; semester: string };
  searchParams: { specialization?: string };
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

export default async function SubjectsPage({ params, searchParams }: Props) {
  const course = await getCourseBySlug(params.course);
  const university = await getUniversityBySlug(params.university);
  if (!course || !university) notFound();

  const semester = parseInt(params.semester, 10);
  if (isNaN(semester) || semester < 1 || semester > course.totalSemesters) notFound();

  const branchLabel = await resolveBranchLabel(params.course, params.university, params.branch, course.hasBranches);
  if (!branchLabel) notFound();

  const allSubjects = await getSubjects({
    courseSlug: course.slug,
    universitySlug: university.slug,
    branchSlug: params.branch,
    semester,
  });

  // Only show the specialization filter when this semester actually has
  // more than one specialization tag in use — otherwise it's just noise.
  const specializations = Array.from(
    new Set(allSubjects.map((s) => s.specialization).filter((s): s is string => Boolean(s)))
  );
  const activeSpecialization =
    searchParams.specialization && specializations.includes(searchParams.specialization)
      ? searchParams.specialization
      : undefined;

  const subjects = activeSpecialization
    ? allSubjects.filter((s) => s.specialization === activeSpecialization)
    : allSubjects;

  const subjectsWithNotes = allSubjects.filter((s) => s.unitNotes && s.unitNotes.length > 0).length;
  const subjectsWithSyllabus = allSubjects.filter((s) => s.syllabus && s.syllabus.trim().length > 0).length;

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

      {allSubjects.length > 0 && (
        <>
          <p className="mb-5 max-w-2xl text-ink-600">
            Semester {semester} of {course.name} at {university.shortName} has {allSubjects.length} subject
            {allSubjects.length === 1 ? "" : "s"} listed below
            {subjectsWithSyllabus > 0 ? `, ${subjectsWithSyllabus} with a full syllabus breakdown` : ""}
            {subjectsWithNotes > 0 ? ` and ${subjectsWithNotes} with complete unit-wise notes` : ""}. Open a
            subject to see its syllabus, notes and previous year papers.
          </p>

          <div className="mb-6">
            <StatsStrip
              stats={[
                { value: allSubjects.length, label: "Subjects" },
                { value: subjectsWithSyllabus, label: "With Syllabus" },
                { value: subjectsWithNotes, label: "With Full Notes" },
              ]}
            />
          </div>
        </>
      )}

      {specializations.length > 1 && (
        <Suspense fallback={null}>
          <SpecializationFilter options={specializations} />
        </Suspense>
      )}

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
