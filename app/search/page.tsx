import Link from "next/link";
import { GraduationCap, Building2, BookOpen, FolderGit2, Wrench } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { EmptyState } from "@/components/ui/EmptyState";
import { buildSearchIndex, searchItems } from "@/lib/search";
import { SearchableItem } from "@/types";
import { pageMetadata } from "@/lib/seo";

interface Props {
  searchParams: { q?: string };
}

const typeMeta: Record<SearchableItem["type"], { label: string; icon: JSX.Element }> = {
  course: { label: "Course", icon: <GraduationCap className="h-4 w-4" /> },
  university: { label: "University", icon: <Building2 className="h-4 w-4" /> },
  subject: { label: "Subject", icon: <BookOpen className="h-4 w-4" /> },
  project: { label: "Project", icon: <FolderGit2 className="h-4 w-4" /> },
  tool: { label: "Tool", icon: <Wrench className="h-4 w-4" /> },
};

export function generateMetadata({ searchParams }: Props) {
  return pageMetadata({ title: searchParams.q ? `Search: ${searchParams.q}` : "Search" });
}

export default async function SearchPage({ searchParams }: Props) {
  const query = searchParams.q ?? "";
  const index = await buildSearchIndex();
  const results = query ? searchItems(index, query, 30) : [];

  return (
    <Section
      title={query ? `Search results for "${query}"` : "Search"}
      description={query ? `${results.length} result${results.length === 1 ? "" : "s"} found` : undefined}
    >
      {!query ? (
        <EmptyState title="Type something to search." description="Try a subject, project or university name." />
      ) : results.length === 0 ? (
        <EmptyState
          title={`No results for "${query}"`}
          description="Try a different keyword, or browse Courses, Projects or Tools instead."
        />
      ) : (
        <ul className="divide-y divide-ink-100 rounded-card border border-ink-100 bg-white">
          {results.map((item, i) => (
            <li key={`${item.type}-${item.href}-${i}`}>
              <Link href={item.href} className="flex items-center gap-3 px-4 py-3 hover:bg-ink-50">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                  {typeMeta[item.type].icon}
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-medium text-ink-900">{item.title}</span>
                  {item.subtitle && (
                    <span className="block truncate text-sm text-ink-500">{item.subtitle}</span>
                  )}
                </span>
                <span className="ml-auto shrink-0 text-xs uppercase tracking-wide text-ink-400">
                  {typeMeta[item.type].label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
