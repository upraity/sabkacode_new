export function LppGraphDiagram() {
  return (
    <svg viewBox="0 0 400 340" className="mx-auto w-full max-w-sm" xmlns="http://www.w3.org/2000/svg" role="img">
      <line x1="40" y1="20" x2="40" y2="290" className="stroke-ink-400" strokeWidth={2} />
      <line x1="40" y1="290" x2="370" y2="290" className="stroke-ink-400" strokeWidth={2} />
      <text x="10" y="30" className="fill-ink-600 text-[10px] font-medium">x2</text>
      <text x="355" y="308" className="fill-ink-600 text-[10px] font-medium">x1</text>

      {/* constraint 1 line: e.g. x1 + 2x2 = 100 */}
      <line x1="40" y1="60" x2="330" y2="290" className="stroke-brand-600" strokeWidth={2} />
      <text x="255" y="185" className="fill-brand-700 text-[9.5px] font-medium">3x1 + 4x2 ≤ 240</text>

      {/* constraint 2 line: e.g. 2x1 + x2 = 100 */}
      <line x1="120" y1="20" x2="290" y2="290" className="stroke-ink-800" strokeWidth={2} />
      <text x="150" y="110" className="fill-ink-800 text-[9.5px] font-medium">x1 + 2x2 ≤ 160</text>

      {/* feasible region shading */}
      <polygon points="40,290 40,60 175,150 245,290" className="fill-brand-200" opacity="0.55" />

      {/* corner points */}
      <circle cx="40" cy="60" r="4" className="fill-ink-900" />
      <circle cx="175" cy="150" r="4" className="fill-ink-900" />
      <circle cx="245" cy="290" r="4" className="fill-ink-900" />
      <circle cx="40" cy="290" r="4" className="fill-ink-900" />
      <text x="180" y="140" className="fill-ink-900 text-[9.5px] font-semibold">Optimal (60, 20)</text>

      <text x="90" y="315" className="fill-ink-500 text-[9.5px] italic">Shaded region = feasible solutions</text>
    </svg>
  );
}
