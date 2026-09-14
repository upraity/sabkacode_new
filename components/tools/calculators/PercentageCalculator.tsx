"use client";

import { useMemo, useState } from "react";

export function PercentageCalculator() {
  const [mode, setMode] = useState<"marks" | "cgpa">("marks");
  const [obtained, setObtained] = useState("");
  const [total, setTotal] = useState("");
  const [cgpa, setCgpa] = useState("");

  const marksResult = useMemo(() => {
    const o = parseFloat(obtained);
    const t = parseFloat(total);
    if (!isNaN(o) && !isNaN(t) && t > 0) return (o / t) * 100;
    return null;
  }, [obtained, total]);

  const cgpaResult = useMemo(() => {
    const c = parseFloat(cgpa);
    if (!isNaN(c) && c >= 0 && c <= 10) return c * 9.5;
    return null;
  }, [cgpa]);

  return (
    <div className="rounded-card border border-ink-100 bg-white p-5">
      <div className="flex gap-1 rounded-md bg-ink-50 p-1 text-sm">
        <button
          onClick={() => setMode("marks")}
          className={`flex-1 rounded px-3 py-1.5 font-medium ${
            mode === "marks" ? "bg-white shadow-card text-ink-900" : "text-ink-500"
          }`}
        >
          From marks
        </button>
        <button
          onClick={() => setMode("cgpa")}
          className={`flex-1 rounded px-3 py-1.5 font-medium ${
            mode === "cgpa" ? "bg-white shadow-card text-ink-900" : "text-ink-500"
          }`}
        >
          From CGPA
        </button>
      </div>

      {mode === "marks" ? (
        <div className="mt-4 space-y-3">
          <input
            type="number"
            inputMode="decimal"
            placeholder="Marks obtained"
            value={obtained}
            onChange={(e) => setObtained(e.target.value)}
            className="w-full rounded-md border border-ink-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
          />
          <input
            type="number"
            inputMode="decimal"
            placeholder="Total marks"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            className="w-full rounded-md border border-ink-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
          />
          <div className="rounded-card bg-ink-50 p-4 text-center">
            <p className="text-sm text-ink-500">Percentage</p>
            <p className="mt-1 text-3xl font-semibold text-ink-900">
              {marksResult !== null ? `${marksResult.toFixed(2)}%` : "—"}
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-4 space-y-3">
          <input
            type="number"
            inputMode="decimal"
            step="0.01"
            min={0}
            max={10}
            placeholder="CGPA (out of 10)"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            className="w-full rounded-md border border-ink-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
          />
          <div className="rounded-card bg-ink-50 p-4 text-center">
            <p className="text-sm text-ink-500">Approximate Percentage</p>
            <p className="mt-1 text-3xl font-semibold text-ink-900">
              {cgpaResult !== null ? `${cgpaResult.toFixed(2)}%` : "—"}
            </p>
          </div>
          <p className="text-xs text-ink-400">
            Uses the common CGPA × 9.5 formula. Your university's official formula may differ slightly.
          </p>
        </div>
      )}
    </div>
  );
}
