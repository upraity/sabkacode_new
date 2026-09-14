"use client";

import { useMemo, useState } from "react";

export function AgeCalculator() {
  const [dob, setDob] = useState("");

  const result = useMemo(() => {
    if (!dob) return null;
    const birth = new Date(dob);
    const now = new Date();
    if (isNaN(birth.getTime()) || birth > now) return null;

    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return { years, months, days };
  }, [dob]);

  return (
    <div className="rounded-card border border-ink-100 bg-white p-5">
      <label className="block text-xs font-medium text-ink-500">Date of birth</label>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        max={new Date().toISOString().split("T")[0]}
        className="mt-1 w-full rounded-md border border-ink-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
      />

      <div className="mt-6 rounded-card bg-ink-50 p-4 text-center">
        <p className="text-sm text-ink-500">Your age</p>
        <p className="mt-1 text-2xl font-semibold text-ink-900">
          {result ? `${result.years}y ${result.months}m ${result.days}d` : "—"}
        </p>
      </div>
    </div>
  );
}
