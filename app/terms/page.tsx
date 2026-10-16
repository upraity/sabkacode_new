
import type { ReactNode } from "react";
import Link from "next/link";

import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "Read the Terms and Conditions governing your use of SabkaCode, including website content, intellectual property, user comments, external links, and disclaimers.",
  path: "/terms",
});

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-lg font-semibold text-ink-900">
      {children}
    </h2>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="text-ink-600 leading-7">{children}</p>;
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-ink-600">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function TermsPage() {
  return (
    <Section>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions" },
        ]}
      />

      <h1 className="text-2xl font-bold text-ink-900 sm:text-3xl">
        Terms & Conditions
      </h1>

      <p className="mt-2 text-ink-500">
        Please read these Terms and Conditions carefully before using
        SabkaCode. They explain the terms governing your use of our website.
      </p>

      <p className="mt-1 text-sm text-ink-400">
        Last Updated: October 2026
      </p>

      <div className="mt-8 max-w-3xl space-y-8">
        <section className="space-y-3">
          <H2>1. Welcome to SabkaCode</H2>

          <P>
            Welcome to SabkaCode. These Terms and Conditions govern your
            access to and use of the SabkaCode website, available at
            sabkacode.vercel.app, including its educational content,
            study materials, project resources, tools, and other features.
          </P>

          <P>
            By accessing or using this website, you agree to these Terms
            and Conditions. If you do not agree with any part of these
            terms, please discontinue using the website.
          </P>

          <P>
            In these terms, &ldquo;you&rdquo; and &ldquo;your&rdquo; refer
            to the person accessing or using the website. &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; and &ldquo;our&rdquo; refer to SabkaCode.
          </P>
        </section>

        <section className="space-y-3">
          <H2>2. Cookies</H2>

          <P>
            SabkaCode may use cookies and similar technologies to support
            website functionality, understand usage, and improve the user
            experience. By using the website, you acknowledge that cookies
            may be used as described in our Privacy Policy and subject to
            applicable requirements.
          </P>

          <P>
            Third-party services, including analytics, advertising, or
            affiliate partners where present, may also use cookies or
            similar technologies under their own policies. Please review
            our Privacy Policy for further information.
          </P>
        </section>

        <section className="space-y-3">
          <H2>3. License and Intellectual Property</H2>

          <P>
            Unless otherwise stated, intellectual property rights in
            original content published by SabkaCode belong to SabkaCode
            or its applicable licensors. You may access and use website
            content for personal, educational, and non-commercial purposes,
            subject to these terms and any additional license or attribution
            requirements that apply to specific materials.
          </P>

          <p className="font-medium text-ink-800">
            Unless expressly permitted by us or applicable law, you must not:
          </p>

          <List
            items={[
              "Republish SabkaCode content as your own or on another platform without permission.",
              "Sell, rent, sublicense, or commercially exploit website content without authorization.",
              "Reproduce, duplicate, or copy protected content beyond what is permitted by law or an applicable license.",
              "Redistribute website materials in a way that violates intellectual property rights or applicable license terms.",
              "Remove copyright notices, attribution, or other ownership information where these must be retained.",
            ]}
          />

          <P>
            Some resources may belong to third parties or be distributed
            under separate licenses. Their respective ownership and usage
            conditions continue to apply.
          </P>
        </section>

        <section className="space-y-3">
          <H2>4. User Comments and Submissions</H2>

          <P>
            If the website allows users to post comments, feedback, or
            other content, you are responsible for what you submit.
            User-submitted opinions belong to their respective authors
            and do not necessarily represent the views of SabkaCode.
          </P>

          <P>
            Where permitted by applicable law, we may review, restrict,
            or remove content that we reasonably consider unlawful,
            abusive, misleading, offensive, spam-related, or otherwise
            inconsistent with these terms. We do not guarantee that all
            user submissions will be reviewed before publication.
          </P>

          <p className="font-medium text-ink-800">
            By submitting content, you confirm that:
          </p>

          <List
            items={[
              "You have the rights and permissions necessary to submit the content.",
              "Your submission does not unlawfully infringe another person's intellectual property, privacy, or other rights.",
              "Your submission is not defamatory, fraudulent, threatening, or otherwise unlawful.",
              "Your submission does not contain unauthorized advertising, spam, or misleading promotional material.",
              "The information you provide is not intentionally deceptive or presented in a way that could mislead other users.",
            ]}
          />
        </section>

        <section className="space-y-3">
          <H2>5. Linking to Our Content</H2>

          <P>
            Organizations and websites may link to SabkaCode where the
            link is lawful, accurate, and does not misleadingly imply
            sponsorship, endorsement, or affiliation.
          </P>

          <p className="font-medium text-ink-800">
            Examples of organizations that may link to our website,
            subject to these conditions, include:
          </p>

          <List
            items={[
              "Government agencies.",
              "Search engines.",
              "News organizations.",
              "Online directory providers linking in the ordinary course of their activities.",
              "Educational institutions, professional organizations, and other legitimate websites.",
            ]}
          />

          <P>
            Links must not misrepresent our content, damage our reputation,
            or imply a relationship that does not exist. If you wish to
            establish a link that does not meet these conditions, please
            contact us with the relevant details. We may consider requests
            individually and are not obligated to approve every request.
          </P>
        </section>

        <section className="space-y-3">
          <H2>6. iFrames and Website Presentation</H2>

          <P>
            You must not create frames around our webpages or otherwise
            alter the visual presentation or appearance of our website in
            a way that misrepresents SabkaCode, suggests an unauthorized
            association, or violates applicable rights, unless you have
            obtained our prior written permission or are otherwise legally
            permitted to do so.
          </P>
        </section>

        <section className="space-y-3">
          <H2>7. Content and Third-Party Website Liability</H2>

          <P>
            If you operate a website that links to SabkaCode, you are
            responsible for the content and activities of your own website.
            You must not place links to our website in contexts that
            promote unlawful activity, infringe third-party rights, or
            contain defamatory or otherwise unlawful material.
          </P>

          <P>
            To the extent permitted by applicable law, you agree to be
            responsible for claims arising from your own website and
            your misuse of our content or links. Nothing in these terms
            excludes or limits any rights or liabilities that cannot
            lawfully be excluded or limited.
          </P>
        </section>

        <section className="space-y-3">
          <H2>8. Reservation of Rights</H2>

          <P>
            We reserve the right to request the removal of links to our
            website where we reasonably believe that a link violates
            these terms, misrepresents our website, or creates a legal
            or reputational concern.
          </P>

          <P>
            We may update these Terms and Conditions from time to time.
            Updated terms will be published on this page with a revised
            update date where appropriate. Your continued use of the
            website after changes take effect may be subject to the
            revised terms, to the extent permitted by applicable law.
          </P>
        </section>

        <section className="space-y-3">
          <H2>9. Requests to Remove Links</H2>

          <P>
            If you believe that a link on our website is inappropriate
            or that our content raises a legitimate concern, please
            contact us with the URL and an explanation of the issue.
            We may review your request and take action where appropriate,
            but we do not guarantee removal or an individual response
            in every case.
          </P>

          <P>
            We aim to keep website information useful and accurate.
            However, we do not guarantee that all information is always
            complete, current, or free from errors. Please verify
            important information independently before relying on it.
          </P>
        </section>

        <section className="space-y-3">
          <H2>10. Disclaimer and Limitation of Liability</H2>

          <P>
            SabkaCode is provided on an &ldquo;as is&rdquo; and
            &ldquo;as available&rdquo; basis to the extent permitted by
            applicable law. We make no general guarantee that the website
            will always be available, uninterrupted, error-free, or
            suitable for every particular purpose.
          </P>

          <P>
            Educational notes, project examples, tools, and other
            resources are provided for general informational and
            educational purposes. You are responsible for assessing
            their suitability for your own needs and verifying important
            information before relying on it.
          </P>

          <p className="font-medium text-ink-800">
            Nothing in these terms is intended to:
          </p>

          <List
            items={[
              "Exclude or limit liability for death or personal injury where such liability cannot lawfully be excluded.",
              "Exclude or limit liability for fraud or fraudulent misrepresentation where such exclusion is unlawful.",
              "Exclude or limit any liability or consumer right that applicable law does not allow us to exclude or limit.",
            ]}
          />

          <P>
            To the extent permitted by applicable law, SabkaCode will
            not be liable for indirect or consequential losses arising
            from your use of, or inability to use, the website. Nothing
            in this section removes any liability that cannot legally
            be excluded.
          </P>
        </section>

        <section className="space-y-3">
          <H2>11. Contact Us</H2>

          <P>
            If you have questions about these Terms and Conditions or
            wish to report a concern, please{" "}
            <Link
              href="/contact"
              className="font-medium text-brand-600 hover:underline"
            >
              contact us
            </Link>
            .
          </P>
        </section>
      </div>
    </Section>
  );
}
// import { Section } from "@/components/ui/Section";
// import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
// import { pageMetadata } from "@/lib/seo";

// export const metadata = pageMetadata({ title: "Terms & Conditions", path: "/terms" });

// function H2({ children }: { children: React.ReactNode }) {
//   return <h2 className="text-lg font-semibold text-ink-900">{children}</h2>;
// }
// function P({ children }: { children: React.ReactNode }) {
//   return <p className="text-ink-600">{children}</p>;
// }
// function List({ items }: { items: string[] }) {
//   return (
//     <ul className="list-disc space-y-1 pl-5 text-ink-600">
//       {items.map((i) => (
//         <li key={i}>{i}</li>
//       ))}
//     </ul>
//   );
// }

// export default function TermsPage() {
//   return (
//     <Section>
//       <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]} />
//       <h1 className="text-2xl sm:text-3xl font-bold text-ink-900">Terms & Conditions</h1>
//       <p className="mt-2 text-ink-500">
//         SabkaCode use karne se pehle ye terms padh lo — yahi hamara agreement hai!
//       </p>
//       <p className="mt-1 text-sm text-ink-400">Last Updated: January 2025</p>

//       <div className="mt-8 max-w-2xl space-y-8">
//         <div className="space-y-2">
//           <H2>1. Welcome to SabkaCode</H2>
//           <P>
//             Welcome to SabkaCode! Ye terms and conditions SabkaCode ki website
//             (sabkacode.vercel.app) ke use ke niyam batate hain. Is website ko access karke aap in
//             terms ko accept karte ho. Agar aap agree nahi karte, to please site use mat karo.
//           </P>
//           <P>
//             &ldquo;Client&rdquo;, &ldquo;You&rdquo;, &ldquo;Your&rdquo; = aap (user) |
//             &ldquo;We&rdquo;, &ldquo;Us&rdquo;, &ldquo;Our&rdquo; = SabkaCode team.
//           </P>
//         </div>

//         <div className="space-y-2">
//           <H2>2. Cookies</H2>
//           <P>
//             Hum cookies use karte hain. SabkaCode access karke aap humari Privacy Policy ke
//             according cookies use karne se agree karte ho. Cookies se hum user experience better
//             banate hain. Kuch affiliate/advertising partners bhi cookies use kar sakte hain.
//           </P>
//         </div>

//         <div className="space-y-2">
//           <H2>3. License</H2>
//           <P>
//             Jab tak alag se na bola jaye, SabkaCode ya uske licensors ke paas site pe maujood sab
//             intellectual property rights hain. Personal use ke liye access kar sakte ho — neeche
//             diye restrictions ke saath.
//           </P>
//           <p className="font-medium text-ink-800">Aap ye NAHI kar sakte:</p>
//           <List
//             items={[
//               "SabkaCode ka material republish karna",
//               "Material bechna, rent ya sub-license karna",
//               "Content reproduce, duplicate ya copy karna",
//               "Content redistribute karna",
//             ]}
//           />
//         </div>

//         <div className="space-y-2">
//           <H2>4. Comments</H2>
//           <P>
//             Kuch jagah users opinions post kar sakte hain. SabkaCode comments ko pehle filter ya
//             edit nahi karta. Comments sirf us user ki views hain. SabkaCode comments ke liye liable
//             nahi hai. Hum inappropriate ya offensive comments hatane ka right rakhte hain.
//           </P>
//           <p className="font-medium text-ink-800">Comment karte waqt aap warrant karte ho ki:</p>
//           <List
//             items={[
//               "Aapke paas comment post karne ka adhikar hai",
//               "Comment kisi ki intellectual property infringe nahi karta",
//               "Comment defamatory ya unlawful nahi hai",
//               "Comment commercial promotion ke liye nahi hai",
//             ]}
//           />
//         </div>

//         <div className="space-y-2">
//           <H2>5. Hyperlinking to Our Content</H2>
//           <p className="font-medium text-ink-800">
//             Ye organizations bina permission ke link kar sakte hain:
//           </p>
//           <List
//             items={[
//               "Government agencies",
//               "Search engines (Google, Bing, etc.)",
//               "News organizations",
//               "Online directory distributors",
//               "Accredited businesses (non-profit nahi)",
//             ]}
//           />
//           <P>
//             Link deceptive nahi hona chahiye aur falsely sponsorship imply nahi karni chahiye. Hum
//             other link requests bhi consider karte hain — email karo.
//           </P>
//         </div>

//         <div className="space-y-2">
//           <H2>6. iFrames</H2>
//           <P>
//             Bina prior written permission ke aap hamari webpages ke around frames nahi bana sakte
//             jo site ki visual presentation alter kare.
//           </P>
//         </div>

//         <div className="space-y-2">
//           <H2>7. Content Liability</H2>
//           <P>
//             Aapki website pe jo content appear ho, uske liye hum responsible nahi hain. Aapko agree
//             karna hoga ki aap hume claims se protect karoge. Koi bhi link jo libelous, obscene ya
//             criminal ho — ya jo third-party rights infringe kare — aapki site pe nahi hona chahiye.
//           </P>
//         </div>

//         <div className="space-y-2">
//           <H2>8. Reservation of Rights</H2>
//           <P>
//             Hum right rakhte hain ki aapko kisi bhi ya sab links hatane ko bol sakein. Request milne
//             pe aapko turant comply karna hoga. Hum in terms aur linking policy ko anytime amend kar
//             sakte hain. Linking jaari rakhne ka matlab hai aap updated terms se bound hain.
//           </P>
//         </div>

//         <div className="space-y-2">
//           <H2>9. Removal of Links</H2>
//           <P>
//             Agar koi link offensive lage, humse contact karo. Hum request consider karenge lekin
//             directly respond karne ke obligated nahi hain. Hum website pe information ki accuracy
//             guarantee nahi dete; completeness ya up-to-date hone ka warrant nahi karte.
//           </P>
//         </div>

//         <div className="space-y-2">
//           <H2>10. Disclaimer</H2>
//           <P>
//             Maximum extent permitted by law — hum sab representations, warranties aur conditions
//             exclude karte hain jo website use se related hain.
//           </P>
//           <p className="font-medium text-ink-800">Is disclaimer mein kuch bhi nahi:</p>
//           <List
//             items={[
//               "Death ya personal injury ke liye liability limit karta ho",
//               "Fraud ya fraudulent misrepresentation ke liye limit karta ho",
//               "Applicable law ke under liabilities limit karta ho",
//             ]}
//           />
//           <P>
//             Jab tak website aur services free hain, hum kisi bhi nature ke loss ya damage ke liye
//             liable nahi honge.
//           </P>
//         </div>

//         <div className="space-y-2">
//           <H2>Koi Sawaal Hai?</H2>
//           <P>
//             Agar in terms ke baare mein koi confusion ho, hume{" "}
//             <a href="/contact" className="font-medium text-brand-600">
//               directly contact karo
//             </a>
//             .
//           </P>
//         </div>
//       </div>
//     </Section>
//   );
// }
