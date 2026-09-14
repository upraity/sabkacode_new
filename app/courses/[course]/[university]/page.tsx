import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EmptyState } from "@/components/ui/EmptyState";
import { getBranches, getCourseBySlug, getUniversityBySlug } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: { course: string; university: string };
}

export async function generateMetadata({ params }: Props) {
  const [course, university] = await Promise.all([
    getCourseBySlug(params.course),
    getUniversityBySlug(params.university),
  ]);
  if (!course || !university) return pageMetadata({ title: "Not found" });
  return pageMetadata({
    title: `${course.name} at ${university.shortName}`,
    path: `/courses/${course.slug}/${university.slug}`,
  });
}

export default async function UniversityBranchesPage({ params }: Props) {
  const [course, university] = await Promise.all([
    getCourseBySlug(params.course),
    getUniversityBySlug(params.university),
  ]);
  if (!course || !university) notFound();

  if (!course.hasBranches) {
    redirect(`/courses/${course.slug}/${university.slug}/general`);
  }

  const branches = await getBranches(course.slug, university.slug);

  return (
    <Section
      title={`${course.name} at ${university.shortName} — Select Branch`}
      description="Choose your branch to continue."
    >
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: course.name, href: `/courses/${course.slug}` },
          { label: university.shortName },
        ]}
      />
      {branches.length === 0 ? (
        <EmptyState
          title="No branches are available for this university yet."
          description="This university has been added but branch data isn't ready yet."
        />
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => (
            <Link
              key={branch.id}
              href={`/courses/${course.slug}/${university.slug}/${branch.slug}`}
              className="rounded-card border border-ink-100 bg-white p-4 font-medium text-ink-800 shadow-card hover:border-brand-300"
            >
              {branch.name}
            </Link>
          ))}
        </div>
      )}
    </Section>
  );
}
