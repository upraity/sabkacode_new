import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Terms & Conditions", path: "/terms" });

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-semibold text-ink-900">{children}</h2>;
}
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

export default function TermsPage() {
  return (
    <Section>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]} />
      <h1 className="text-2xl sm:text-3xl font-bold text-ink-900">Terms & Conditions</h1>
      <p className="mt-2 text-ink-500">
        SabkaCode use karne se pehle ye terms padh lo — yahi hamara agreement hai!
      </p>
      <p className="mt-1 text-sm text-ink-400">Last Updated: January 2025</p>

      <div className="mt-8 max-w-2xl space-y-8">
        <div className="space-y-2">
          <H2>1. Welcome to SabkaCode</H2>
          <P>
            Welcome to SabkaCode! Ye terms and conditions SabkaCode ki website
            (sabkacode.vercel.app) ke use ke niyam batate hain. Is website ko access karke aap in
            terms ko accept karte ho. Agar aap agree nahi karte, to please site use mat karo.
          </P>
          <P>
            &ldquo;Client&rdquo;, &ldquo;You&rdquo;, &ldquo;Your&rdquo; = aap (user) |
            &ldquo;We&rdquo;, &ldquo;Us&rdquo;, &ldquo;Our&rdquo; = SabkaCode team.
          </P>
        </div>

        <div className="space-y-2">
          <H2>2. Cookies</H2>
          <P>
            Hum cookies use karte hain. SabkaCode access karke aap humari Privacy Policy ke
            according cookies use karne se agree karte ho. Cookies se hum user experience better
            banate hain. Kuch affiliate/advertising partners bhi cookies use kar sakte hain.
          </P>
        </div>

        <div className="space-y-2">
          <H2>3. License</H2>
          <P>
            Jab tak alag se na bola jaye, SabkaCode ya uske licensors ke paas site pe maujood sab
            intellectual property rights hain. Personal use ke liye access kar sakte ho — neeche
            diye restrictions ke saath.
          </P>
          <p className="font-medium text-ink-800">Aap ye NAHI kar sakte:</p>
          <List
            items={[
              "SabkaCode ka material republish karna",
              "Material bechna, rent ya sub-license karna",
              "Content reproduce, duplicate ya copy karna",
              "Content redistribute karna",
            ]}
          />
        </div>

        <div className="space-y-2">
          <H2>4. Comments</H2>
          <P>
            Kuch jagah users opinions post kar sakte hain. SabkaCode comments ko pehle filter ya
            edit nahi karta. Comments sirf us user ki views hain. SabkaCode comments ke liye liable
            nahi hai. Hum inappropriate ya offensive comments hatane ka right rakhte hain.
          </P>
          <p className="font-medium text-ink-800">Comment karte waqt aap warrant karte ho ki:</p>
          <List
            items={[
              "Aapke paas comment post karne ka adhikar hai",
              "Comment kisi ki intellectual property infringe nahi karta",
              "Comment defamatory ya unlawful nahi hai",
              "Comment commercial promotion ke liye nahi hai",
            ]}
          />
        </div>

        <div className="space-y-2">
          <H2>5. Hyperlinking to Our Content</H2>
          <p className="font-medium text-ink-800">
            Ye organizations bina permission ke link kar sakte hain:
          </p>
          <List
            items={[
              "Government agencies",
              "Search engines (Google, Bing, etc.)",
              "News organizations",
              "Online directory distributors",
              "Accredited businesses (non-profit nahi)",
            ]}
          />
          <P>
            Link deceptive nahi hona chahiye aur falsely sponsorship imply nahi karni chahiye. Hum
            other link requests bhi consider karte hain — email karo.
          </P>
        </div>

        <div className="space-y-2">
          <H2>6. iFrames</H2>
          <P>
            Bina prior written permission ke aap hamari webpages ke around frames nahi bana sakte
            jo site ki visual presentation alter kare.
          </P>
        </div>

        <div className="space-y-2">
          <H2>7. Content Liability</H2>
          <P>
            Aapki website pe jo content appear ho, uske liye hum responsible nahi hain. Aapko agree
            karna hoga ki aap hume claims se protect karoge. Koi bhi link jo libelous, obscene ya
            criminal ho — ya jo third-party rights infringe kare — aapki site pe nahi hona chahiye.
          </P>
        </div>

        <div className="space-y-2">
          <H2>8. Reservation of Rights</H2>
          <P>
            Hum right rakhte hain ki aapko kisi bhi ya sab links hatane ko bol sakein. Request milne
            pe aapko turant comply karna hoga. Hum in terms aur linking policy ko anytime amend kar
            sakte hain. Linking jaari rakhne ka matlab hai aap updated terms se bound hain.
          </P>
        </div>

        <div className="space-y-2">
          <H2>9. Removal of Links</H2>
          <P>
            Agar koi link offensive lage, humse contact karo. Hum request consider karenge lekin
            directly respond karne ke obligated nahi hain. Hum website pe information ki accuracy
            guarantee nahi dete; completeness ya up-to-date hone ka warrant nahi karte.
          </P>
        </div>

        <div className="space-y-2">
          <H2>10. Disclaimer</H2>
          <P>
            Maximum extent permitted by law — hum sab representations, warranties aur conditions
            exclude karte hain jo website use se related hain.
          </P>
          <p className="font-medium text-ink-800">Is disclaimer mein kuch bhi nahi:</p>
          <List
            items={[
              "Death ya personal injury ke liye liability limit karta ho",
              "Fraud ya fraudulent misrepresentation ke liye limit karta ho",
              "Applicable law ke under liabilities limit karta ho",
            ]}
          />
          <P>
            Jab tak website aur services free hain, hum kisi bhi nature ke loss ya damage ke liye
            liable nahi honge.
          </P>
        </div>

        <div className="space-y-2">
          <H2>Koi Sawaal Hai?</H2>
          <P>
            Agar in terms ke baare mein koi confusion ho, hume{" "}
            <a href="/contact" className="font-medium text-brand-600">
              directly contact karo
            </a>
            .
          </P>
        </div>
      </div>
    </Section>
  );
}
