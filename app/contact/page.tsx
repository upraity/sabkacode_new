import { Mail } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with the SabkaCode team.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section title="Contact">
      <div className="max-w-md">
        <p className="text-ink-600">
          Have a question, found an issue, or want to contribute resources? Reach out and we'll get
          back to you.
        </p>
        <a
          href="mailto:hello@sabkacode.com"
          className="mt-4 flex items-center gap-2 rounded-card border border-ink-100 bg-white p-4 font-medium text-ink-800 shadow-card hover:border-brand-300"
        >
          <Mail className="h-4 w-4 text-brand-600" /> hello@sabkacode.com
        </a>
      </div>
    </Section>
  );
}
