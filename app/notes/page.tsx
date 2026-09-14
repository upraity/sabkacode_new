import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CourseCard } from "@/components/courses/CourseCard";
import { getCourses, getUniversitiesForCourse } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Notes",
  description: "Find notes, PYQs, question banks, practicals and viva questions by course and university.",
  path: "/notes",
});

export default async function NotesPage() {
  const courses = await getCourses();
  const counts = await Promise.all(
    courses.map(async (c) => ({ slug: c.slug, count: (await getUniversitiesForCourse(c.slug)).length }))
  );
  const countBySlug = Object.fromEntries(counts.map((c) => [c.slug, c.count]));

  return (
    <Section
      title="Notes"
      description="Select your course to find notes, previous year papers, question banks, practicals and viva questions."
    >
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Notes" }]} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} universityCount={countBySlug[course.slug]} />
        ))}
      </div>
    </Section>
  );
}
