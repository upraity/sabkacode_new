import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EmptyState } from "@/components/ui/EmptyState";
import { UniversityCard } from "@/components/university/UniversityCard";
import { getCourseBySlug, getCourses, getUniversitiesForCourse } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: { course: string };
}

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

  const universities = await getUniversitiesForCourse(course.slug);

  return (
    <Section title={`${course.name} — Select University`} description={course.description}>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Courses", href: "/courses" }, { label: course.name }]}
      />
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
