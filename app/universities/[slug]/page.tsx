import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EmptyState } from "@/components/ui/EmptyState";
import { Badge } from "@/components/ui/Badge";
import { getCourses, getUniversities, getUniversityBySlug, getUniversitiesForCourse } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const universities = await getUniversities();
  return universities.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: Props) {
  const university = await getUniversityBySlug(params.slug);
  if (!university) return pageMetadata({ title: "Not found" });
  return pageMetadata({
    title: university.shortName,
    description: university.description,
    path: `/universities/${university.slug}`,
  });
}

export default async function UniversityDetailPage({ params }: Props) {
  const university = await getUniversityBySlug(params.slug);
  if (!university) notFound();

  const allCourses = await getCourses();
  const offeredChecks = await Promise.all(
    allCourses.map(async (c) => ({
      course: c,
      offered: (await getUniversitiesForCourse(c.slug)).some((u) => u.slug === university.slug),
    }))
  );
  const offeredCourses = offeredChecks.filter((c) => c.offered).map((c) => c.course);

  return (
    <Section title={university.shortName} description={university.name}>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Universities", href: "/universities" },
          { label: university.shortName },
        ]}
      />

      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="muted">{university.location}</Badge>
        {university.status === "coming-soon" && <Badge tone="muted">Coming soon</Badge>}
      </div>

      <p className="mt-4 max-w-2xl text-ink-600">{university.description}</p>

      {university.websiteUrl && (
        <a href={university.websiteUrl} className="mt-2 inline-block text-sm font-medium text-brand-600">
          Official website ↗
        </a>
      )}

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-ink-900">Available Courses</h2>
        {offeredCourses.length === 0 ? (
          <div className="mt-3">
            <EmptyState
              title="No courses added for this university yet."
              description="This university is on the platform, but course data hasn't been added yet."
            />
          </div>
        ) : (
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {offeredCourses.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.slug}/${university.slug}`}
                className="rounded-card border border-ink-100 bg-white py-4 text-center font-medium text-ink-800 shadow-card hover:border-brand-300"
              >
                {course.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
