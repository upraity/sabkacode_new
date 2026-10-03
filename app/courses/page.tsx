import { notFound } from "next/navigation";
import { BookOpenCheck, FileCheck2, ListChecks, Building2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EmptyState } from "@/components/ui/EmptyState";
import { StatsStrip } from "@/components/ui/StatsStrip";
import { UniversityCard } from "@/components/university/UniversityCard";
import { getCourseBySlug, getCourses, getUniversitiesForCourse, getCourseStats } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: { course: string };
}

const whatYoullFind = [
  { icon: BookOpenCheck, label: "Unit-wise syllabus for every subject" },
  { icon: FileCheck2, label: "Previous year question papers" },
  { icon: ListChecks, label: "Full written notes where available" },
  { icon: Building2, label: "Organised separately per university" },
];

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((c) => ({ course: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const course = await getCourseBySlug(params.course);
  if (!course) return pageMetadata({ title: "Course not found" });
  return pageMetadata({
    title: course.name,
    description: `Select a university to view ${course.name} resources.`,
    path: `/courses/${course.slug}`,
  });
}

export default async function CourseUniversitiesPage({ params }: Props) {
  const course = await getCourseBySlug(params.course);
  if (!course) notFound();

  const [universities, stats] = await Promise.all([
    getUniversitiesForCourse(course.slug),
    getCourseStats(course.slug),
  ]);

  return (
    <Section title={`${course.name} — Select University`} description={course.description}>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Courses", href: "/courses" }, { label: course.name }]}
      />

      {course.longDescription && (
        <div className="mb-6 max-w-2xl space-y-3 text-ink-600">
          {course.longDescription.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      )}

      <div className="mb-8">
        <StatsStrip
          stats={[
            { value: stats.totalUniversities, label: "Universities" },
            { value: course.totalSemesters, label: "Semesters" },
            { value: stats.totalSubjects, label: "Subjects" },
            { value: stats.totalResources, label: "Notes & PYQs" },
          ]}
        />
      </div>

      <div className="mb-10">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-500">
          What You&apos;ll Find Here
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {whatYoullFind.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2.5 rounded-card border border-ink-100 bg-white p-3 text-sm text-ink-700 shadow-card"
            >
              <item.icon className="h-4 w-4 shrink-0 text-brand-600" />
              {item.label}
            </div>
          ))}
        </div>
      </div>

      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-500">Select University</h2>
      {universities.length === 0 ? (
        <EmptyState
          title="No universities are available for this course yet."
          description="More universities are being added regularly."
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {universities.map((u) => (
            <UniversityCard
              key={u.id}
              university={u}
              href={`/courses/${course.slug}/${u.slug}`}
            />
          ))}
        </div>
      )}
    </Section>
  );
}
