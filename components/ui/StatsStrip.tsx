interface Stat {
  value: number | string;
  label: string;
}

// Tailwind needs static, literal class names at build time — a template
// string like `sm:grid-cols-${n}` would never be picked up by the compiler,
// so the column count is looked up from a fixed map instead.
const SM_COLS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
  5: "sm:grid-cols-5",
  6: "sm:grid-cols-6",
};

export function StatsStrip({ stats, className = "" }: { stats: Stat[]; className?: string }) {
  const smCols = SM_COLS[Math.min(stats.length, 6)] ?? "sm:grid-cols-4";
  return (
    <div className={`grid grid-cols-2 gap-3 ${smCols} ${className}`}>
      {stats.map((s) => (
        <div key={s.label} className="rounded-card border border-ink-100 bg-white p-4 text-center shadow-card">
          <p className="text-xl font-bold text-brand-600">{s.value}</p>
          <p className="mt-1 text-xs text-ink-500">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
