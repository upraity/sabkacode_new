import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getToolBySlug, getTools } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { CGPACalculator } from "@/components/tools/calculators/CGPACalculator";
import { SGPACalculator } from "@/components/tools/calculators/SGPACalculator";
import { PercentageCalculator } from "@/components/tools/calculators/PercentageCalculator";
import { AttendanceCalculator } from "@/components/tools/calculators/AttendanceCalculator";
import { AgeCalculator } from "@/components/tools/calculators/AgeCalculator";
import { UnitConverter } from "@/components/tools/calculators/UnitConverter";

interface Props {
  params: { slug: string };
}

const calculatorMap: Record<string, React.ComponentType> = {
  "cgpa-calculator": CGPACalculator,
  "sgpa-calculator": SGPACalculator,
  "percentage-calculator": PercentageCalculator,
  "attendance-calculator": AttendanceCalculator,
  "age-calculator": AgeCalculator,
  "unit-converter": UnitConverter,
};

export async function generateStaticParams() {
  const tools = await getTools();
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props) {
  const tool = await getToolBySlug(params.slug);
  if (!tool) return pageMetadata({ title: "Tool not found" });
  return pageMetadata({ title: tool.name, description: tool.description, path: `/tools/${tool.slug}` });
}

export default async function ToolDetailPage({ params }: Props) {
  const tool = await getToolBySlug(params.slug);
  if (!tool) notFound();

  const Calculator = calculatorMap[tool.slug];

  return (
    <Section title={tool.name} description={tool.description}>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: tool.name }]}
      />
      <div className="max-w-md">{Calculator ? <Calculator /> : null}</div>
    </Section>
  );
}
