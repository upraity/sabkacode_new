import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Privacy Policy", path: "/privacy" });

export default function PrivacyPage() {
  return (
    <Section title="Privacy Policy">
      <div className="max-w-2xl space-y-4 text-ink-600">
        <p>
          This page will describe how SabkaCode collects, uses and protects information. Since the
          platform doesn't currently have accounts, logins, or data collection, there is no personal
          data being stored yet. This page will be updated with full details as those features are
          added.
        </p>
      </div>
    </Section>
  );
}
