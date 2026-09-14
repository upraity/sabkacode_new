import { GraduationCap, Building2, Link2, RefreshCcw } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Disclaimer",
  description: "Important notice about the educational content on SabkaCode.",
  path: "/disclaimer",
});

const keyPoints = [
  { icon: GraduationCap, title: "Educational Only", body: "All content is strictly for educational and academic purposes." },
  { icon: Building2, title: "No Affiliation", body: "Not officially affiliated with any university or institution." },
  { icon: Link2, title: "External Links", body: "We do not control or take responsibility for external websites." },
  { icon: RefreshCcw, title: "May Change", body: "This disclaimer may be updated at any time without prior notice." },
];

export default function DisclaimerPage() {
  return (
    <Section>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]} />
      <h1 className="text-2xl sm:text-3xl font-bold text-ink-900">Disclaimer</h1>
      <p className="mt-2 text-ink-500">
        Please read this important notice carefully before using SabkaCode.
      </p>
      <p className="mt-1 text-sm text-ink-400">Last Updated: January 2025</p>

      <div className="mt-6 rounded-card border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        All information provided on SabkaCode is published in good faith and for general
        educational purposes only. We do not make any warranties about the completeness,
        reliability, or accuracy of this information.
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {keyPoints.map((k) => (
          <div key={k.title} className="flex gap-3 rounded-card border border-ink-100 bg-white p-4 shadow-card">
            <k.icon className="h-5 w-5 shrink-0 text-brand-600" />
            <div>
              <p className="font-medium text-ink-900">{k.title}</p>
              <p className="mt-0.5 text-sm text-ink-500">{k.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 max-w-2xl space-y-8">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-ink-900">Educational Purpose</h2>
          <p className="text-ink-600">
            This website provides notes, syllabus details, study materials, and previous year
            question papers for educational use only. All content is intended to support students
            in their academic preparation.
          </p>
          <p className="text-ink-600">
            SabkaCode&apos;s goal is to provide free, quality resources to students. While we aim
            to make learning easier, the information on this site should not be treated as
            professional or official academic advice. Always verify important information with
            your university&apos;s official sources and academic instructors.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-ink-900">No Official Affiliation</h2>
          <p className="text-ink-600">
            SabkaCode is not officially affiliated with any university or educational institution.
            Names such as AKTU, CSJMU, DBRAU, and CCSU are used for reference purposes only to help
            students identify relevant study materials.
          </p>
          <p className="text-ink-600">
            We do not represent any university in any official capacity. For official
            notifications, results, circulars, or examination schedules, always refer to your
            university&apos;s official website.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-ink-900">External Links Disclaimer</h2>
          <p className="text-ink-600">
            Our website may contain links to external websites such as Google Drive or other
            third-party resources. We do not have control over the content, availability, or
            privacy practices of those sites. Clicking on external links will take you to a
            different website. We strongly recommend reviewing the privacy policies of any external
            sites you visit.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-ink-900">Content Accuracy</h2>
          <p className="text-ink-600">
            We make every effort to keep the information on SabkaCode updated and accurate.
            However, we cannot guarantee that all content is completely correct or up to date at
            all times. If you notice any errors or outdated information in our notes or papers,
            please let us know so we can correct it promptly.
          </p>
          <p className="text-ink-600">
            Found an error? Please report it to us at{" "}
            <a href="mailto:sabkacode@gmail.com" className="font-medium text-brand-600">
              sabkacode@gmail.com
            </a>
            .
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-ink-900">Copyright Notice</h2>
          <p className="text-ink-600">
            All study materials, notes, and papers available on SabkaCode are shared for
            educational and reference purposes only. If any content on this website belongs to you
            and you wish to have it removed, please contact us and we will take appropriate action.
          </p>
          <p className="text-ink-600">
            When submitting a copyright removal request, please mention &ldquo;Copyright / Content
            Removal&rdquo; in the email subject line. We will review and respond within 24–48
            hours.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-ink-900">Consent</h2>
          <p className="text-ink-600">
            By continuing to use the SabkaCode website, you acknowledge that you have read and
            understood this disclaimer and agree to be bound by its terms and conditions. If you do
            not agree with any part of this disclaimer, please discontinue your use of this
            website.
          </p>
        </div>
      </div>
    </Section>
  );
}
