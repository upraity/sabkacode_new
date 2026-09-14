"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Search, BookOpen, GraduationCap, FolderGit2, Wrench, Building2 } from "lucide-react";
import { SearchableItem } from "@/types";
import { searchItems } from "@/lib/search";
import { Container } from "@/components/ui/Container";

const typeMeta: Record<SearchableItem["type"], { label: string; icon: JSX.Element }> = {
  course: { label: "Course", icon: <GraduationCap className="h-4 w-4" /> },
  university: { label: "University", icon: <Building2 className="h-4 w-4" /> },
  subject: { label: "Subject", icon: <BookOpen className="h-4 w-4" /> },
  project: { label: "Project", icon: <FolderGit2 className="h-4 w-4" /> },
  tool: { label: "Tool", icon: <Wrench className="h-4 w-4" /> },
};

export function SearchBar({ index }: { index: SearchableItem[] }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLFormElement>(null);

  const results = useMemo(() => searchItems(index, query, 7), [index, query]);
  const showDropdown = open && query.trim().length > 0;

  // Close the dropdown on a click/tap anywhere outside the search box.
  // This replaces an input-onBlur approach, which on touch devices closes
  // the dropdown before a tap on a result can register — that was the bug
  // where a result had to be tapped twice (or Enter used instead).
  useEffect(() => {
    if (!showDropdown) return;

    function handlePointerDown(e: MouseEvent | TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [showDropdown]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      inputRef.current?.blur();
      setOpen(false);
    }
  }

  return (
    <div className="border-b border-ink-100 bg-white py-3">
      <Container>
        <form ref={containerRef} onSubmit={handleSubmit} className="relative mx-auto max-w-2xl">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setOpen(true)}
            placeholder="Search courses, subjects, notes, projects..."
            className="w-full rounded-md border border-ink-200 bg-ink-50/60 py-2.5 pl-10 pr-4 text-sm text-ink-800 placeholder:text-ink-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-500"
            aria-label="Search SabkaCode"
          />

          {showDropdown && (
            <div className="absolute inset-x-0 top-full z-40 mt-2 max-h-96 overflow-auto rounded-card border border-ink-100 bg-white shadow-card">
              {results.length === 0 ? (
                <p className="px-4 py-6 text-center text-sm text-ink-500">
                  No results for &ldquo;{query}&rdquo;
                </p>
              ) : (
                <ul className="divide-y divide-ink-50">
                  {results.map((item, i) => (
                    <li key={`${item.type}-${item.href}-${i}`}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-ink-50 active:bg-ink-100"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                          {typeMeta[item.type].icon}
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-medium text-ink-900">
                            {item.title}
                          </span>
                          {item.subtitle && (
                            <span className="block truncate text-xs text-ink-500">{item.subtitle}</span>
                          )}
                        </span>
                        <span className="ml-auto shrink-0 text-[11px] uppercase tracking-wide text-ink-400">
                          {typeMeta[item.type].label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </form>
      </Container>
    </div>
  );
}
