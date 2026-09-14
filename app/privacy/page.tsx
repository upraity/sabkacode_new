import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How SabkaCode collects, uses and protects information.",
  path: "/privacy",
});

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-ink-600">{children}</p>;
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-5 text-ink-600">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-semibold text-ink-900">{children}</h2>;
}

export default function PrivacyPage() {
  return (
    <Section>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <h1 className="text-2xl sm:text-3xl font-bold text-ink-900">Privacy Policy</h1>
      <p className="mt-2 text-ink-500">
        Your privacy matters to us. Learn what data we collect, how we use it, and how we keep it
        safe.
      </p>
      <p className="mt-1 text-sm text-ink-400">
        Last Updated: May 2026 · sabkacode.vercel.app · sabkacode@gmail.com
      </p>

      <div className="mt-8 max-w-2xl space-y-8">
        <div className="space-y-2">
          <H2>1. Information We Collect</H2>
          <P>
            SabkaCode is a free educational platform. We collect minimal data — only what is
            necessary to operate and improve the website.
          </P>
          <p className="font-medium text-ink-800">Information we collect automatically:</p>
          <List
            items={[
              "Browser type and version",
              "Pages visited and time spent on each page",
              "Referring website (where you came from)",
              "Approximate location (country/city level only)",
              "Device type (mobile or desktop)",
            ]}
          />
          <p className="font-medium text-ink-800">Information we never collect:</p>
          <List
            items={[
              "Your name or email address (unless you contact us directly)",
              "Passwords or login credentials (we have no account system)",
              "Payment or financial information",
              "Sensitive personal data of any kind",
            ]}
          />
        </div>

        <div className="space-y-2">
          <H2>2. How We Use Information</H2>
          <P>Any data we collect is used solely for the following purposes:</P>
          <List
            items={[
              "Site Analytics — Understanding which pages are most popular and useful",
              "Performance Improvement — Improving site speed and overall user experience",
              "Ad Serving — Displaying relevant advertisements via Google AdSense",
              "Error Fixing — Identifying and fixing broken links or technical issues",
            ]}
          />
          <p className="font-medium text-ink-800">
            We do not sell your data to any third party — under any circumstances, ever.
          </p>
        </div>

        <div className="space-y-2">
          <H2>3. Cookies & Tracking</H2>
          <P>
            SabkaCode uses cookies — small text files stored in your browser that help improve your
            experience on the site.
          </P>
          <List
            items={[
              "Analytics Cookies: Google Analytics — to track page views and understand traffic patterns",
              "Advertising Cookies: Google AdSense — to display relevant advertisements",
              "Preference Cookies: To remember your browser settings and preferences",
            ]}
          />
          <P>
            You can disable cookies at any time through your browser settings. However, some
            features of the site may not function correctly if cookies are disabled.
          </P>
        </div>

        <div className="space-y-2">
          <H2>4. Google AdSense & Advertisements</H2>
          <P>
            SabkaCode uses Google AdSense to display advertisements. Google is a third-party vendor
            that serves ads on this site.
          </P>
          <List
            items={[
              "Google may show personalized ads based on your previous visits to this and other websites",
              "Google uses the DoubleClick cookie to serve ads across the web",
              "You can opt out of personalized ads by visiting Google Ads Settings",
              "You can also opt out of third-party vendor cookies via www.aboutads.info",
            ]}
          />
        </div>

        <div className="space-y-2">
          <H2>5. Third-Party Links</H2>
          <P>
            SabkaCode contains links to external websites such as Google Drive (for downloading
            papers), WhatsApp, Telegram, and others.
          </P>
          <List
            items={[
              "Each external website has its own Privacy Policy",
              "SabkaCode is not responsible for the content or privacy practices of any third-party sites",
              "We recommend reviewing the privacy policy of any external site before sharing personal information",
            ]}
          />
        </div>

        <div className="space-y-2">
          <H2>6. Data Safety & Security</H2>
          <P>
            Keeping your data safe is our priority. We follow industry-standard security practices
            including:
          </P>
          <List
            items={[
              "The site is secured with HTTPS (SSL encryption)",
              "Hosted on Vercel's secure and reliable servers",
              "No sensitive personal data is stored on our end",
              "Regular security updates and maintenance are carried out",
            ]}
          />
          <P>
            No method of transmission over the internet is 100% secure. We make every effort to
            protect your data, but cannot guarantee absolute security.
          </P>
        </div>

        <div className="space-y-2">
          <H2>7. Children&apos;s Privacy</H2>
          <P>
            SabkaCode is an educational platform designed for students, including school and
            college students of all ages.
          </P>
          <List
            items={[
              "We do not knowingly collect personal data from children under the age of 13",
              "The site does not require any registration or account creation",
              "If you believe a child has submitted personal data through our site, please contact us immediately",
            ]}
          />
        </div>

        <div className="space-y-2">
          <H2>8. Your Rights</H2>
          <List
            items={[
              "Access: The right to know what data we hold about you",
              "Deletion: The right to request deletion of your data",
              "Opt-out: The right to opt out of personalized advertisements",
              "Content Removal: The right to request removal of your content from our site",
            ]}
          />
          <P>
            To exercise any of these rights, email us at sabkacode@gmail.com with the subject line
            &ldquo;Privacy Request&rdquo;.
          </P>
        </div>

        <div className="space-y-2">
          <H2>9. Changes to This Policy</H2>
          <P>
            SabkaCode may update this Privacy Policy at any time. Any changes will be reflected on
            this page. Significant updates will be announced on our WhatsApp and Telegram channels.
          </P>
        </div>

        <div className="space-y-2">
          <H2>10. Contact Us</H2>
          <P>
            If you have any questions about this Privacy Policy, or if you believe your privacy has
            been violated in any way, please contact us at{" "}
            <a href="mailto:sabkacode@gmail.com" className="font-medium text-brand-600">
              sabkacode@gmail.com
            </a>
            .
          </P>
        </div>
      </div>
    </Section>
  );
}
