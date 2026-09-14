import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ToolCard } from "@/components/tools/ToolCard";
import { getTools } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Tools",
  description: "CGPA, SGPA, percentage, attendance, age and unit conversion calculators for students.",
  path: "/tools",
});

export default async function ToolsPage() {
  const tools = await getTools();

  return (
    <Section title="Tools" description="Simple calculators and utilities students actually need.">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tools" }]} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </Section>
  );
}
