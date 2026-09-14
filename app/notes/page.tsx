import Link from "next/link";
import { FileStack, ArrowRight } from "lucide-react";
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

      <Link
        href="/papers"
        className="mb-6 flex items-center justify-between gap-3 rounded-card border border-brand-200 bg-brand-50 p-4 hover:border-brand-300"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white text-brand-600 shadow-card">
            <FileStack className="h-5 w-5" />
          </span>
          <div>
            <p className="font-medium text-ink-900">Looking for previous year papers?</p>
            <p className="text-sm text-ink-500">Browse all papers by university, course and subject in one place.</p>
          </div>
        </div>
        <ArrowRight className="h-4 w-4 shrink-0 text-brand-600" />
      </Link>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} universityCount={countBySlug[course.slug]} />
        ))}
      </div>
    </Section>
  );
}
