import { Metadata } from "next";

export const siteConfig = {
  name: "SabkaCode",
  tagline: "Study smarter. Build better.",
  description:
    "Notes, previous year papers, projects and useful tools for students — across multiple universities.",
  url: "https://sabkacode.com",
};

interface PageMetaParams {
  title: string;
  description?: string;
  path?: string;
}

export function pageMetadata({ title, description, path = "" }: PageMetaParams): Metadata {
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  const desc = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description: desc,
    },
  };
}
