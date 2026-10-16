
import type { ReactNode } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Building2,
  Link2,
  RefreshCcw,
} from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Disclaimer",
  description:
    "Read the SabkaCode disclaimer covering educational content, university affiliations, external links, content accuracy, copyright concerns, and website usage.",
  path: "/disclaimer",
});

const keyPoints = [
  {
    icon: GraduationCap,
    title: "Educational Purposes Only",
    body: "Our study materials and project resources are intended for general educational and informational use.",
  },
  {
    icon: Building2,
    title: "No Official Affiliation",
    body: "SabkaCode is an independent educational website and does not represent any university or institution.",
  },
  {
    icon: Link2,
    title: "External Websites",
    body: "Third-party websites have their own content, availability, terms, and privacy practices.",
  },
  {
    icon: RefreshCcw,
    title: "Information May Change",
    body: "Website content and this disclaimer may be updated as necessary.",
  },
];

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-lg font-semibold text-ink-900">
      {children}
    </h2>
  );
}

function P({ children }: { children: ReactNode }) {
  return (
    <p className="leading-7 text-ink-600">
      {children}
    </p>
  );
}

export default function DisclaimerPage() {
  return (
    <Section>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Disclaimer" },
        ]}
      />

      <h1 className="text-2xl font-bold text-ink-900 sm:text-3xl">
        Disclaimer
      </h1>

      <p className="mt-2 text-ink-500">
        Please read this disclaimer carefully to understand the purpose,
        limitations, and intended use of the information available on
        SabkaCode.
      </p>

      <p className="mt-1 text-sm text-ink-400">
        Last Updated: October 2026
      </p>

      <div className="mt-6 rounded-card border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
        The information published on SabkaCode is provided in good faith
        for general educational and informational purposes. Although we
        aim to keep our content useful and accurate, we do not guarantee
        that all information is complete, current, or free from errors.
        Please independently verify important information before relying
        on it.
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {keyPoints.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex gap-3 rounded-card border border-ink-100 bg-white p-4 shadow-card"
            >
              <Icon
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-brand-600"
              />

              <div>
                <p className="font-medium text-ink-900">
                  {item.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-ink-500">
                  {item.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 max-w-3xl space-y-8">
        <section className="space-y-3">
          <H2>1. Educational Purpose</H2>

          <P>
            SabkaCode provides educational resources such as subject-wise
            notes, syllabus information, study materials, previous-year
            question papers, project ideas, coding resources, and student
            tools. These resources are intended to support learning,
            revision, and academic preparation.
          </P>

          <P>
            Our content is not a substitute for official academic
            instructions, professional advice, or information published
            by your educational institution. Course requirements,
            examination patterns, syllabi, and academic policies may
            change. Always confirm important details with your university,
            college, instructors, or other appropriate official sources.
          </P>
        </section>

        <section className="space-y-3">
          <H2>2. No Official University or Institutional Affiliation</H2>

          <P>
            SabkaCode is an independent educational website. Unless
            explicitly stated otherwise, it is not officially affiliated
            with, endorsed by, sponsored by, or operated by any university,
            college, examination board, or educational institution.
          </P>

          <P>
            University names, abbreviations, course names, and other
            institutional references, including AKTU, CSJMU, DBRAU, and
            CCSU, may be used for identification and educational reference.
            Their use does not imply an official partnership, endorsement,
            or authorization.
          </P>

          <P>
            For official examination schedules, results, notifications,
            circulars, admission information, and policy updates, consult
            the relevant institution&apos;s official website.
          </P>
        </section>

        <section className="space-y-3">
          <H2>3. External Links and Third-Party Resources</H2>

          <P>
            SabkaCode may contain links to external websites and
            third-party resources, including file-hosting platforms,
            repositories, educational websites, and other online services.
            These links may be provided for convenience or to help users
            access additional information.
          </P>

          <P>
            We do not control third-party websites and cannot guarantee
            the accuracy, availability, security, or reliability of their
            content. Their privacy practices, terms of use, and data
            collection policies may differ from ours.
          </P>

          <P>
            Accessing an external website is your choice and responsibility.
            Review the relevant website&apos;s terms and privacy policy
            before sharing personal information, downloading files, or
            using its services.
          </P>
        </section>

        <section className="space-y-3">
          <H2>4. Content Accuracy and Updates</H2>

          <P>
            We make reasonable efforts to maintain useful and accurate
            information on SabkaCode. However, educational materials,
            syllabus details, question papers, project documentation, and
            other resources may contain errors, omissions, outdated
            information, or differences from official requirements.
          </P>

          <P>
            We do not guarantee that every resource is complete, current,
            suitable for a particular examination, or applicable to every
            course or institution. Users should verify important details
            against authoritative sources.
          </P>

          <P>
            If you identify incorrect, broken, or outdated information,
            please report it to us at{" "}
            <a
              href="mailto:sabkacode@gmail.com"
              className="font-medium text-brand-600 hover:underline"
            >
              sabkacode@gmail.com
            </a>
            . Include the relevant page URL and a brief explanation so
            that we can review the issue.
          </P>
        </section>

        <section className="space-y-3">
          <H2>5. Copyright and Intellectual Property</H2>

          <P>
            Content available on SabkaCode may include original material,
            user-contributed resources, publicly available references,
            and materials owned or licensed by third parties. Copyright
            and other intellectual property rights remain with their
            respective owners.
          </P>

          <P>
            The availability of educational material on this website does
            not automatically mean that it is free from copyright
            restrictions or may be reproduced, redistributed, or used
            commercially without permission. Users are responsible for
            respecting applicable copyright laws, licenses, and attribution
            requirements.
          </P>

          <P>
            If you believe that content published on SabkaCode infringes
            your copyright or other legal rights, please contact us at{" "}
            <a
              href="mailto:sabkacode@gmail.com?subject=Copyright%20%2F%20Content%20Removal"
              className="font-medium text-brand-600 hover:underline"
            >
              sabkacode@gmail.com
            </a>{" "}
            with the subject line &ldquo;Copyright / Content Removal.&rdquo;
            Include the relevant URL, identify the material in question,
            explain your concern, and provide sufficient information for
            us to review your request.
          </P>

          <P>
            We will review properly submitted requests and take appropriate
            action where warranted. Any response or removal timeframe
            depends on the nature and completeness of the request and
            applicable requirements; a specific response time is not
            guaranteed.
          </P>
        </section>

        <section className="space-y-3">
          <H2>6. Project Resources and Student Use</H2>

          <P>
            Project examples, source code, documentation, reports,
            presentations, and other academic resources are provided
            where available to support learning and technical understanding.
            The resources available may vary from one project to another.
          </P>

          <P>
            Before using any resource, review its license, source,
            requirements, and suitability for your intended purpose.
            You should understand the implementation, test any code you
            use, and adapt it to your own needs. Follow your institution&apos;s
            academic integrity rules and disclose external assistance or
            source material when required.
          </P>

          <P>
            We do not guarantee that every project will run in every
            environment, meet a particular assignment requirement, or
            produce a specific result without modification.
          </P>
        </section>

        <section className="space-y-3">
          <H2>7. Website Tools and Calculations</H2>

          <P>
            SabkaCode may provide online tools, calculators, coding
            utilities, or other interactive features. Their results
            depend on the information entered, the underlying method,
            and the implementation of each tool.
          </P>

          <P>
            Although we aim to make these tools useful, we do not guarantee
            that every result will be error-free or suitable for every
            purpose. Check important calculations and outputs independently
            before using them for academic, financial, professional, or
            other consequential decisions.
          </P>
        </section>

        <section className="space-y-3">
          <H2>8. Advertising and Affiliate Links</H2>

          <P>
            If advertising or affiliate links are present on SabkaCode,
            some links may lead to third-party products or services. We
            may receive compensation when users interact with certain
            links or make qualifying purchases, where applicable.
          </P>

          <P>
            Third-party products, services, prices, availability, terms,
            and claims are controlled by their respective providers.
            Review the provider&apos;s information before making a purchase
            or using a service. The presence of a link does not, by itself,
            guarantee or imply an endorsement.
          </P>
        </section>

        <section className="space-y-3">
          <H2>9. Limitation of Liability</H2>

          <P>
            To the extent permitted by applicable law, SabkaCode is
            provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
            basis without a general guarantee that the website or its
            resources will always be uninterrupted, error-free, complete,
            or suitable for a particular purpose.
          </P>

          <P>
            To the extent permitted by law, SabkaCode is not responsible
            for losses arising from reliance on inaccurate or outdated
            information, interruptions in website availability, or the
            use of third-party websites and services. This section does
            not exclude or limit any liability or legal rights that
            cannot lawfully be excluded or limited.
          </P>
        </section>

        <section className="space-y-3">
          <H2>10. Consent and Changes to This Disclaimer</H2>

          <P>
            By using SabkaCode, you acknowledge that you have had the
            opportunity to read this disclaimer. If you do not agree
            with the terms described here, you should discontinue using
            the website.
          </P>

          <P>
            We may revise this disclaimer to reflect changes in our
            website, services, content, or applicable requirements.
            Updates will be published on this page, and the
            &ldquo;Last Updated&rdquo; date may be revised accordingly.
            Please review this page periodically.
          </P>
        </section>

        <section className="space-y-3">
          <H2>11. Contact Us</H2>

          <P>
            If you have questions about this disclaimer, wish to report
            inaccurate information, or need to raise a copyright concern,
            please email{" "}
            <a
              href="mailto:sabkacode@gmail.com"
              className="font-medium text-brand-600 hover:underline"
            >
              sabkacode@gmail.com
            </a>
            .
          </P>

          <P>
            You can also visit our{" "}
            <Link
              href="/contact"
              className="font-medium text-brand-600 hover:underline"
            >
              Contact page
            </Link>{" "}
            to find available ways to get in touch.
          </P>
        </section>
      </div>
    </Section>
  );
}

// import { GraduationCap, Building2, Link2, RefreshCcw } from "lucide-react";
// import { Section } from "@/components/ui/Section";
// import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
// import { pageMetadata } from "@/lib/seo";

// export const metadata = pageMetadata({
//   title: "Disclaimer",
//   description: "Important notice about the educational content on SabkaCode.",
//   path: "/disclaimer",
// });

// const keyPoints = [
//   { icon: GraduationCap, title: "Educational Only", body: "All content is strictly for educational and academic purposes." },
//   { icon: Building2, title: "No Affiliation", body: "Not officially affiliated with any university or institution." },
//   { icon: Link2, title: "External Links", body: "We do not control or take responsibility for external websites." },
//   { icon: RefreshCcw, title: "May Change", body: "This disclaimer may be updated at any time without prior notice." },
// ];

// export default function DisclaimerPage() {
//   return (
//     <Section>
//       <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]} />
//       <h1 className="text-2xl sm:text-3xl font-bold text-ink-900">Disclaimer</h1>
//       <p className="mt-2 text-ink-500">
//         Please read this important notice carefully before using SabkaCode.
//       </p>
//       <p className="mt-1 text-sm text-ink-400">Last Updated: January 2025</p>

//       <div className="mt-6 rounded-card border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
//         All information provided on SabkaCode is published in good faith and for general
//         educational purposes only. We do not make any warranties about the completeness,
//         reliability, or accuracy of this information.
//       </div>

//       <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
//         {keyPoints.map((k) => (
//           <div key={k.title} className="flex gap-3 rounded-card border border-ink-100 bg-white p-4 shadow-card">
//             <k.icon className="h-5 w-5 shrink-0 text-brand-600" />
//             <div>
//               <p className="font-medium text-ink-900">{k.title}</p>
//               <p className="mt-0.5 text-sm text-ink-500">{k.body}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-10 max-w-2xl space-y-8">
//         <div className="space-y-2">
//           <h2 className="text-lg font-semibold text-ink-900">Educational Purpose</h2>
//           <p className="text-ink-600">
//             This website provides notes, syllabus details, study materials, and previous year
//             question papers for educational use only. All content is intended to support students
//             in their academic preparation.
//           </p>
//           <p className="text-ink-600">
//             SabkaCode&apos;s goal is to provide free, quality resources to students. While we aim
//             to make learning easier, the information on this site should not be treated as
//             professional or official academic advice. Always verify important information with
//             your university&apos;s official sources and academic instructors.
//           </p>
//         </div>

//         <div className="space-y-2">
//           <h2 className="text-lg font-semibold text-ink-900">No Official Affiliation</h2>
//           <p className="text-ink-600">
//             SabkaCode is not officially affiliated with any university or educational institution.
//             Names such as AKTU, CSJMU, DBRAU, and CCSU are used for reference purposes only to help
//             students identify relevant study materials.
//           </p>
//           <p className="text-ink-600">
//             We do not represent any university in any official capacity. For official
//             notifications, results, circulars, or examination schedules, always refer to your
//             university&apos;s official website.
//           </p>
//         </div>

//         <div className="space-y-2">
//           <h2 className="text-lg font-semibold text-ink-900">External Links Disclaimer</h2>
//           <p className="text-ink-600">
//             Our website may contain links to external websites such as Google Drive or other
//             third-party resources. We do not have control over the content, availability, or
//             privacy practices of those sites. Clicking on external links will take you to a
//             different website. We strongly recommend reviewing the privacy policies of any external
//             sites you visit.
//           </p>
//         </div>

//         <div className="space-y-2">
//           <h2 className="text-lg font-semibold text-ink-900">Content Accuracy</h2>
//           <p className="text-ink-600">
//             We make every effort to keep the information on SabkaCode updated and accurate.
//             However, we cannot guarantee that all content is completely correct or up to date at
//             all times. If you notice any errors or outdated information in our notes or papers,
//             please let us know so we can correct it promptly.
//           </p>
//           <p className="text-ink-600">
//             Found an error? Please report it to us at{" "}
//             <a href="mailto:sabkacode@gmail.com" className="font-medium text-brand-600">
//               sabkacode@gmail.com
//             </a>
//             .
//           </p>
//         </div>

//         <div className="space-y-2">
//           <h2 className="text-lg font-semibold text-ink-900">Copyright Notice</h2>
//           <p className="text-ink-600">
//             All study materials, notes, and papers available on SabkaCode are shared for
//             educational and reference purposes only. If any content on this website belongs to you
//             and you wish to have it removed, please contact us and we will take appropriate action.
//           </p>
//           <p className="text-ink-600">
//             When submitting a copyright removal request, please mention &ldquo;Copyright / Content
//             Removal&rdquo; in the email subject line. We will review and respond within 24–48
//             hours.
//           </p>
//         </div>

//         <div className="space-y-2">
//           <h2 className="text-lg font-semibold text-ink-900">Consent</h2>
//           <p className="text-ink-600">
//             By continuing to use the SabkaCode website, you acknowledge that you have read and
//             understood this disclaimer and agree to be bound by its terms and conditions. If you do
//             not agree with any part of this disclaimer, please discontinue your use of this
//             website.
//           </p>
//         </div>
//       </div>
//     </Section>
//   );
// }
