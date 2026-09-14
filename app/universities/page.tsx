import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { UniversityCard } from "@/components/university/UniversityCard";
import { getUniversities } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Universities",
  description: "All universities currently supported on SabkaCode.",
  path: "/universities",
});

export default async function UniversitiesPage() {
  const universities = await getUniversities();

  return (
    <Section title="Universities" description="SabkaCode is built to support many universities, not just one.">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Universities" }]} />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {universities.map((u) => (
          <UniversityCard key={u.id} university={u} href={`/universities/${u.slug}`} />
        ))}
      </div>
    </Section>
  );
}
