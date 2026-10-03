import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CourseCard } from "@/components/courses/CourseCard";
import { getCourses, getUniversitiesForCourse } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Courses",
  description: "Browse courses like B.Tech, BCA, MCA and B.Pharm across supported universities.",
  path: "/courses",
});

export default async function CoursesPage() {
  const courses = await getCourses();
  const counts = await Promise.all(
    courses.map(async (c) => ({ slug: c.slug, count: (await getUniversitiesForCourse(c.slug)).length }))
  );
  const countBySlug = Object.fromEntries(counts.map((c) => [c.slug, c.count]));

  return (
    <Section title="Courses" description="Pick a course to see which universities and resources are available.">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Courses" }]} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} universityCount={countBySlug[course.slug]} />
        ))}
      </div>
    </Section>
  );
}
