import { notFound } from "next/navigation";
import { Calculator } from "lucide-react";
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

  const CalculatorWidget = calculatorMap[tool.slug];

  return (
    <Section title={tool.name} description={tool.description}>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: tool.name }]}
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <div className="max-w-md">{CalculatorWidget ? <CalculatorWidget /> : null}</div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          {tool.howItWorks && (
            <div>
              <h2 className="flex items-center gap-2 text-lg font-semibold text-ink-900">
                <Calculator className="h-5 w-5 text-brand-600" /> How It&apos;s Calculated
              </h2>
              <div className="mt-2 space-y-3 text-ink-600">
                {tool.howItWorks.split("\n\n").map((para, i) => (
                  <p key={i} className="whitespace-pre-line">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}

          {tool.faqs && tool.faqs.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-ink-900">Frequently Asked Questions</h2>
              <div className="mt-3 space-y-3">
                {tool.faqs.map((f) => (
                  <details key={f.q} className="rounded-card border border-ink-100 bg-white p-4 shadow-card">
                    <summary className="cursor-pointer list-none font-medium text-ink-900">{f.q}</summary>
                    <p className="mt-2 text-sm text-ink-600">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
