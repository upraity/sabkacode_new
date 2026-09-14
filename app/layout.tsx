import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SearchBar } from "@/components/search/SearchBar";
import { Container } from "@/components/ui/Container";
import { AffiliateProduct } from "@/components/affiliate/AffiliateProduct";
import { buildSearchIndex } from "@/lib/search";
import { siteConfig } from "@/lib/seo";
import { siteWideAffiliateSlot } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const searchIndex = await buildSearchIndex();

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white font-sans antialiased">
        <Navbar />
        <SearchBar index={searchIndex} />
        <main className="flex-1">{children}</main>

        {/*
          Sitewide affiliate banner — shown on every page, controlled from
          one place: lib/site-config.ts. Change the product code there to
          change what shows here across the whole site after redeploy.
          Renders nothing if the product is missing/inactive.
        */}
        <div className="border-t border-ink-100 bg-ink-50/40 py-4">
          <Container>
            <p className="mb-2 text-[11px] font-medium uppercase tracking-wide text-ink-400">
              Sponsored
            </p>
            <div className="max-w-md">
              <AffiliateProduct code={siteWideAffiliateSlot} variant="banner" />
            </div>
          </Container>
        </div>

        <Footer />
      </body>
    </html>
  );
}
