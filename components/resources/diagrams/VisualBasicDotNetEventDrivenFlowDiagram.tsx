export default function VisualBasicDotNetEventDrivenFlowDiagram() {
  return <svg viewBox="0 0 760 210" className="w-full h-auto" role="img" aria-label="Event driven programming flow">
    <rect x="25" y="65" width="155" height="55" rx="8" fill="none" stroke="currentColor"/><text x="102" y="98" textAnchor="middle">User Action</text>
    <path d="M180 92 H260" stroke="currentColor"/><rect x="260" y="65" width="155" height="55" rx="8" fill="none" stroke="currentColor"/><text x="337" y="98" textAnchor="middle">Event Raised</text>
    <path d="M415 92 H495" stroke="currentColor"/><rect x="495" y="65" width="155" height="55" rx="8" fill="none" stroke="currentColor"/><text x="572" y="98" textAnchor="middle">Event Handler</text>
    <path d="M650 92 H730" stroke="currentColor"/><text x="735" y="98">Logic</text>
  </svg>;
}