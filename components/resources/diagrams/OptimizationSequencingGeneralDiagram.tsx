export default function OptimizationSequencingGeneralDiagram() {
  return <svg viewBox="0 0 760 230" className="w-full h-auto" role="img" aria-label="General sequencing flow shop">
    <rect x="30" y="30" width="150" height="55" rx="8" fill="none" stroke="currentColor"/><text x="105" y="63" textAnchor="middle">Jobs</text>
    <path d="M180 57 H235" stroke="currentColor"/><rect x="235" y="30" width="150" height="55" rx="8" fill="none" stroke="currentColor"/><text x="310" y="63" textAnchor="middle">Machine 1</text>
    <path d="M385 57 H440" stroke="currentColor"/><rect x="440" y="30" width="150" height="55" rx="8" fill="none" stroke="currentColor"/><text x="515" y="63" textAnchor="middle">Machine 2</text>
    <path d="M590 57 H645" stroke="currentColor"/><rect x="645" y="30" width="90" height="55" rx="8" fill="none" stroke="currentColor"/><text x="690" y="63" textAnchor="middle">…</text>
    <text x="380" y="135" textAnchor="middle">Same job order follows the specified machine route</text>
  </svg>;
}