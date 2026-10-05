import Link from "next/link";
import { FileStack, ArrowRight, Layers, BookOpenCheck, FileCheck2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StatsStrip } from "@/components/ui/StatsStrip";
import { CourseCard } from "@/components/courses/CourseCard";
import { getCourses, getUniversitiesForCourse, getContentStats } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

const howOrganized = [
  { icon: Layers, label: "Course → University → Semester → Subject" },
  { icon: BookOpenCheck, label: "Each subject has its official syllabus" },
  { icon: FileCheck2, label: "Notes and PYQs attached per subject" },
];

export const metadata = pageMetadata({
  title: "Notes",
  description: "Find notes, PYQs, question banks, practicals and viva questions by course and university.",
  path: "/notes",
});

export default async function NotesPage() {
  const [courses, stats] = await Promise.all([getCourses(), getContentStats()]);
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

      <p className="mb-5 max-w-2xl text-ink-600">
        Notes on SabkaCode follow your actual university structure — not a generic list. Pick your
        course below, then your university, semester and subject, to reach exactly the syllabus,
        notes and papers relevant to you.
      </p>

      <div className="mb-6">
        <StatsStrip
          stats={[
            { value: stats.totalSubjects, label: "Subjects Covered" },
            { value: stats.totalNotes, label: "Notes" },
            { value: stats.totalPyqs, label: "Previous Papers" },
            { value: stats.totalDetailedNotes, label: "Full Unit-Wise Notes" },
          ]}
        />
      </div>

      <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {howOrganized.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2.5 rounded-card border border-ink-100 bg-white p-3 text-sm text-ink-700 shadow-card"
          >
            <item.icon className="h-4 w-4 shrink-0 text-brand-600" />
            {item.label}
          </div>
        ))}
      </div>

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
