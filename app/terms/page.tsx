import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Terms", path: "/terms" });

export default function TermsPage() {
  return (
    <Section title="Terms of Use">
      <div className="max-w-2xl space-y-4 text-ink-600">
        <p>
          By using SabkaCode you agree to use the content available here for personal, educational
          purposes. Full terms will be published here as paid content, accounts and other features
          are introduced.
        </p>
      </div>
    </Section>
  );
}
