export default function WebTechnologyPhpRequestResponseDiagram() {
  return <svg viewBox="0 0 720 180" className="w-full h-auto" role="img" aria-label="PHP request response flow">
    <rect x="25" y="60" width="150" height="55" rx="8" fill="none" stroke="currentColor"/><text x="100" y="93" textAnchor="middle">Browser</text>
    <path d="M175 87 H270" stroke="currentColor" markerEnd="url(#a)"/><rect x="270" y="60" width="180" height="55" rx="8" fill="none" stroke="currentColor"/><text x="360" y="85" textAnchor="middle">Web Server</text><text x="360" y="103" textAnchor="middle">PHP processing</text>
    <path d="M450 87 H545" stroke="currentColor"/><rect x="545" y="60" width="150" height="55" rx="8" fill="none" stroke="currentColor"/><text x="620" y="93" textAnchor="middle">HTML Response</text>
  </svg>;
}