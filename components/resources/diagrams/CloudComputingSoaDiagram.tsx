export default function CloudComputingSoaDiagram() {
  return <svg viewBox="0 0 760 210" className="w-full h-auto" role="img" aria-label="Service oriented architecture">
    <rect x="20" y="70" width="150" height="55" rx="8" fill="none" stroke="currentColor"/><text x="95" y="103" textAnchor="middle">Consumer</text>
    <path d="M170 97 H230" stroke="currentColor"/><rect x="230" y="25" width="160" height="45" rx="8" fill="none" stroke="currentColor"/><text x="310" y="53" textAnchor="middle">Service A</text>
    <rect x="230" y="82" width="160" height="45" rx="8" fill="none" stroke="currentColor"/><text x="310" y="110" textAnchor="middle">Service B</text>
    <rect x="230" y="139" width="160" height="45" rx="8" fill="none" stroke="currentColor"/><text x="310" y="167" textAnchor="middle">Service C</text>
    <path d="M390 47 H520" stroke="currentColor"/><path d="M390 104 H520" stroke="currentColor"/><path d="M390 161 H520" stroke="currentColor"/><rect x="520" y="70" width="210" height="55" rx="8" fill="none" stroke="currentColor"/><text x="625" y="103" textAnchor="middle">Application Process</text>
  </svg>;
}