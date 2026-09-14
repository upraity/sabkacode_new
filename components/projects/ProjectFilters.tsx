"use client";

import { useRouter, useSearchParams } from "next/navigation";

const categories: { value: string; label: string }[] = [
  { value: "", label: "All categories" },
  { value: "web-development", label: "Web Development" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "ai-ml", label: "AI / ML" },
  { value: "android", label: "Android" },
  { value: "cyber-security", label: "Cyber Security" },
  { value: "iot", label: "IoT" },
  { value: "final-year", label: "Final Year" },
];

const difficulties = [
  { value: "", label: "All levels" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

export function ProjectFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(`/projects?${params.toString()}`);
  }

  return (
    <div className="flex flex-wrap gap-3">
      <select
        value={searchParams.get("category") ?? ""}
        onChange={(e) => updateParam("category", e.target.value)}
        className="rounded-md border border-ink-200 bg-white px-3 py-2 text-sm text-ink-700 focus:border-brand-500 focus:outline-none"
        aria-label="Filter by category"
      >
        {categories.map((c) => (
          <option key={c.value} value={c.value}>
            {c.label}
          </option>
        ))}
      </select>

      <select
        value={searchParams.get("difficulty") ?? ""}
        onChange={(e) => updateParam("difficulty", e.target.value)}
        className="rounded-md border border-ink-200 bg-white px-3 py-2 text-sm text-ink-700 focus:border-brand-500 focus:outline-none"
        aria-label="Filter by difficulty"
      >
        {difficulties.map((d) => (
          <option key={d.value} value={d.value}>
            {d.label}
          </option>
        ))}
      </select>
    </div>
  );
}
