"use client";

import { useMemo, useState } from "react";

export function AttendanceCalculator() {
  const [attended, setAttended] = useState("");
  const [total, setTotal] = useState("");
  const [required, setRequired] = useState("75");

  const result = useMemo(() => {
    const a = parseFloat(attended);
    const t = parseFloat(total);
    const r = parseFloat(required);
    if (isNaN(a) || isNaN(t) || isNaN(r) || t <= 0) return null;

    const currentPct = (a / t) * 100;

    if (currentPct >= r) {
      // How many classes can be missed and stay at/above required %.
      // (a) / (t + x) >= r/100  =>  x <= a*100/r - t
      const maxMissable = Math.floor((a * 100) / r - t);
      return { currentPct, type: "can-miss" as const, value: Math.max(maxMissable, 0) };
    } else {
      // How many more classes must be attended in a row to reach required %.
      // (a + x) / (t + x) >= r/100
      const needed = Math.ceil((r * t - 100 * a) / (100 - r));
      return { currentPct, type: "must-attend" as const, value: Math.max(needed, 0) };
    }
  }, [attended, total, required]);

  return (
    <div className="rounded-card border border-ink-100 bg-white p-5">
      <div className="space-y-3">
        <input
          type="number"
          inputMode="numeric"
          min={0}
          placeholder="Classes attended"
          value={attended}
          onChange={(e) => setAttended(e.target.value)}
          className="w-full rounded-md border border-ink-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
        />
        <input
          type="number"
          inputMode="numeric"
          min={0}
          placeholder="Total classes held"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          className="w-full rounded-md border border-ink-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
        />
        <label className="block text-xs font-medium text-ink-500">Required attendance %</label>
        <input
          type="number"
          inputMode="numeric"
          min={0}
          max={100}
          value={required}
          onChange={(e) => setRequired(e.target.value)}
          className="w-full rounded-md border border-ink-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
        />
      </div>

      <div className="mt-6 rounded-card bg-ink-50 p-4 text-center">
        {result === null ? (
          <p className="text-3xl font-semibold text-ink-900">—</p>
        ) : (
          <>
            <p className="text-sm text-ink-500">Current attendance: {result.currentPct.toFixed(1)}%</p>
            <p className="mt-2 text-lg font-semibold text-ink-900">
              {result.type === "can-miss"
                ? `You can miss up to ${result.value} more ${result.value === 1 ? "class" : "classes"}`
                : `You need to attend ${result.value} more ${result.value === 1 ? "class" : "classes"} in a row`}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
