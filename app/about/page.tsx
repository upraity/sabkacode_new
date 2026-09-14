import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description: "About SabkaCode — a student and coding platform built for multiple universities.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Section title="About SabkaCode">
      <div className="max-w-2xl space-y-4 text-ink-600">
        <p>
          SabkaCode is a student-focused education and coding platform. It brings together notes,
          previous year questions, projects and useful tools in one place — designed from the
          ground up to support students across multiple universities, not just one.
        </p>
        <p>
          The platform started with AKTU, but the architecture is built so more universities,
          courses and resources can be added over time without rebuilding the site.
        </p>
      </div>
    </Section>
  );
}
