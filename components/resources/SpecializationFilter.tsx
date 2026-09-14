"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function SpecializationFilter({ options }: { options: string[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function update(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set("specialization", value);
    else params.delete("specialization");
    router.push(`?${params.toString()}`);
  }

  return (
    <select
      value={searchParams.get("specialization") ?? ""}
      onChange={(e) => update(e.target.value)}
      className="mb-4 rounded-md border border-ink-200 bg-white px-3 py-2 text-sm text-ink-700 focus:border-brand-500 focus:outline-none"
      aria-label="Filter by specialization"
    >
      <option value="">All specializations</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}
