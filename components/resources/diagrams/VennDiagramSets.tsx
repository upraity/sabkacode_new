export function VennDiagramSets() {
  return (
    <svg viewBox="0 0 400 260" className="mx-auto w-full max-w-sm" xmlns="http://www.w3.org/2000/svg" role="img">
      <circle cx="160" cy="130" r="90" className="fill-brand-500" opacity="0.55" />
      <circle cx="250" cy="130" r="90" className="fill-brand-800" opacity="0.55" />
      <text x="110" y="130" textAnchor="middle" className="fill-ink-900 text-[13px] font-semibold">A</text>
      <text x="300" y="130" textAnchor="middle" className="fill-ink-900 text-[13px] font-semibold">B</text>
      <text x="205" y="134" textAnchor="middle" className="fill-white text-[11px] font-semibold">A ∩ B</text>
      <rect x="20" y="20" width="360" height="220" className="fill-none stroke-ink-300" strokeWidth={1.5} />
      <text x="30" y="35" className="fill-ink-500 text-[10px] font-medium">U (Universal Set)</text>
    </svg>
  );
}
