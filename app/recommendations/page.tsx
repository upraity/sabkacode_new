import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AffiliateProduct } from "@/components/affiliate/AffiliateProduct";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Recommended Products",
  description: "Laptops, accessories and books recommended for students.",
  path: "/recommendations",
});

export default function RecommendationsPage() {
  return (
    <Section
      title="Recommended for Students"
      description="A few things that help with coding and studying. These are affiliate links — see the note below."
    >
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Recommended Products" }]} />

      {/*
        Usage: each card below is placed with nothing but a product code —
        no name, image, or affiliate link is written on this page.

          <AffiliateProduct code="LAPTOP001" />
          <AffiliateProduct code="MOUSE001" />
          <AffiliateProduct code="BOOK001" />

        Editing lib/data/products.json.ts and redeploying updates every
        page that references these codes, including this one.
      */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <AffiliateProduct code="LAPTOP001" />
        <AffiliateProduct code="MOUSE001" />
        <AffiliateProduct code="BOOK001" />
      </div>

      <p className="mt-8 max-w-2xl text-xs text-ink-400">
        Disclosure: SabkaCode may earn a small commission from qualifying purchases made through
        the Amazon links above, at no extra cost to you. This helps keep the notes, papers and
        tools on this site free.
      </p>
    </Section>
  );
}
