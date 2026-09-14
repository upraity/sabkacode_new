"use client";

import { useMemo, useState } from "react";

type Category = "length" | "weight" | "temperature";

const lengthFactors: Record<string, number> = {
  // relative to metres
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
  inch: 0.0254,
  foot: 0.3048,
  mile: 1609.344,
};

const weightFactors: Record<string, number> = {
  // relative to grams
  mg: 0.001,
  g: 1,
  kg: 1000,
  lb: 453.592,
  oz: 28.3495,
};

const unitLabels: Record<Category, Record<string, string>> = {
  length: { mm: "Millimetres", cm: "Centimetres", m: "Metres", km: "Kilometres", inch: "Inches", foot: "Feet", mile: "Miles" },
  weight: { mg: "Milligrams", g: "Grams", kg: "Kilograms", lb: "Pounds", oz: "Ounces" },
  temperature: { celsius: "Celsius", fahrenheit: "Fahrenheit", kelvin: "Kelvin" },
};

function convertTemperature(value: number, from: string, to: string): number {
  let celsius: number;
  if (from === "celsius") celsius = value;
  else if (from === "fahrenheit") celsius = ((value - 32) * 5) / 9;
  else celsius = value - 273.15;

  if (to === "celsius") return celsius;
  if (to === "fahrenheit") return (celsius * 9) / 5 + 32;
  return celsius + 273.15;
}

export function UnitConverter() {
  const [category, setCategory] = useState<Category>("length");
  const [value, setValue] = useState("1");
  const [from, setFrom] = useState("m");
  const [to, setTo] = useState("km");

  const units = Object.keys(unitLabels[category]);

  function handleCategoryChange(next: Category) {
    setCategory(next);
    const keys = Object.keys(unitLabels[next]);
    setFrom(keys[0]);
    setTo(keys[1] ?? keys[0]);
  }

  const result = useMemo(() => {
    const v = parseFloat(value);
    if (isNaN(v)) return null;

    if (category === "temperature") return convertTemperature(v, from, to);

    const factors = category === "length" ? lengthFactors : weightFactors;
    const base = v * factors[from];
    return base / factors[to];
  }, [value, from, to, category]);

  return (
    <div className="rounded-card border border-ink-100 bg-white p-5">
      <div className="flex gap-1 rounded-md bg-ink-50 p-1 text-sm">
        {(["length", "weight", "temperature"] as Category[]).map((c) => (
          <button
            key={c}
            onClick={() => handleCategoryChange(c)}
            className={`flex-1 rounded px-3 py-1.5 font-medium capitalize ${
              category === c ? "bg-white shadow-card text-ink-900" : "text-ink-500"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-3">
        <input
          type="number"
          inputMode="decimal"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full rounded-md border border-ink-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
        />

        <div className="grid grid-cols-2 gap-3">
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="rounded-md border border-ink-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
          >
            {units.map((u) => (
              <option key={u} value={u}>
                {unitLabels[category][u]}
              </option>
            ))}
          </select>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="rounded-md border border-ink-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
          >
            {units.map((u) => (
              <option key={u} value={u}>
                {unitLabels[category][u]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 rounded-card bg-ink-50 p-4 text-center">
        <p className="text-sm text-ink-500">Result</p>
        <p className="mt-1 text-2xl font-semibold text-ink-900">
          {result !== null ? result.toFixed(4).replace(/\.?0+$/, "") : "—"}
        </p>
      </div>
    </div>
  );
}
