"use client";

import { useMemo, useState } from "react";
import { Plus, Trash2 } from "lucide-react";

interface Row {
  id: number;
  credits: string;
  gradePoint: string;
}

let nextId = 4;

export function SGPACalculator() {
  const [rows, setRows] = useState<Row[]>([
    { id: 1, credits: "", gradePoint: "" },
    { id: 2, credits: "", gradePoint: "" },
    { id: 3, credits: "", gradePoint: "" },
  ]);

  const sgpa = useMemo(() => {
    let totalPoints = 0;
    let totalCredits = 0;
    for (const row of rows) {
      const credits = parseFloat(row.credits);
      const gp = parseFloat(row.gradePoint);
      if (!isNaN(credits) && !isNaN(gp) && credits > 0) {
        totalPoints += credits * gp;
        totalCredits += credits;
      }
    }
    return totalCredits > 0 ? totalPoints / totalCredits : null;
  }, [rows]);

  function updateRow(id: number, key: keyof Row, value: string) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [key]: value } : r)));
  }

  function addRow() {
    setRows((prev) => [...prev, { id: nextId++, credits: "", gradePoint: "" }]);
  }

  function removeRow(id: number) {
    setRows((prev) => prev.filter((r) => r.id !== id));
  }

  return (
    <div className="rounded-card border border-ink-100 bg-white p-5">
      <p className="text-sm text-ink-500">
        Enter the credits and grade point (0–10) for each subject in the semester.
      </p>

      <div className="mt-4 space-y-2">
        <div className="grid grid-cols-[1fr_1fr_auto] gap-2 text-xs font-medium text-ink-500">
          <span>Credits</span>
          <span>Grade Point</span>
          <span />
        </div>
        {rows.map((row, i) => (
          <div key={row.id} className="grid grid-cols-[1fr_1fr_auto] items-center gap-2">
            <input
              type="number"
              inputMode="decimal"
              min={0}
              placeholder={`Subject ${i + 1} credits`}
              value={row.credits}
              onChange={(e) => updateRow(row.id, "credits", e.target.value)}
              className="rounded-md border border-ink-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
            />
            <input
              type="number"
              inputMode="decimal"
              step="0.1"
              min={0}
              max={10}
              placeholder="Grade point"
              value={row.gradePoint}
              onChange={(e) => updateRow(row.id, "gradePoint", e.target.value)}
              className="rounded-md border border-ink-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => removeRow(row.id)}
              disabled={rows.length <= 1}
              aria-label="Remove subject"
              className="rounded-md p-2 text-ink-400 hover:bg-ink-50 hover:text-red-500 disabled:opacity-30"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addRow}
        className="mt-3 flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700"
      >
        <Plus className="h-4 w-4" /> Add subject
      </button>

      <div className="mt-6 rounded-card bg-ink-50 p-4 text-center">
        <p className="text-sm text-ink-500">Your SGPA</p>
        <p className="mt-1 text-3xl font-semibold text-ink-900">
          {sgpa !== null ? sgpa.toFixed(2) : "—"}
        </p>
      </div>
    </div>
  );
}
