import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StatsStrip } from "@/components/ui/StatsStrip";
import { UniversityCard } from "@/components/university/UniversityCard";
import { getUniversities, getContentStats } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Universities",
  description: "All universities currently supported on SabkaCode.",
  path: "/universities",
});

export default async function UniversitiesPage() {
  const [universities, stats] = await Promise.all([getUniversities(), getContentStats()]);
  const activeCount = universities.filter((u) => u.status === "active").length;

  return (
    <Section title="Universities" description="SabkaCode is built to support many universities, not just one.">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Universities" }]} />

      <p className="mb-5 max-w-2xl text-ink-600">
        Content on SabkaCode is organised separately for each university, since syllabi and subject
        codes often differ even for the same course name. {activeCount} universit
        {activeCount === 1 ? "y currently has" : "ies currently have"} active content, with more
        being added.
      </p>

      <div className="mb-8">
        <StatsStrip
          stats={[
            { value: activeCount, label: "Active Universities" },
            { value: stats.totalCourses, label: "Courses" },
            { value: stats.totalSubjects, label: "Subjects" },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {universities.map((u) => (
          <UniversityCard key={u.id} university={u} href={`/universities/${u.slug}`} />
        ))}
      </div>
    </Section>
  );
}
