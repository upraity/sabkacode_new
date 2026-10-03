export default function WebTechnologyPhpSessionCookieFlowDiagram() {
  return <svg viewBox="0 0 760 210" className="w-full h-auto" role="img" aria-label="PHP session and cookie flow">
    <rect x="25" y="65" width="150" height="55" rx="8" fill="none" stroke="currentColor"/><text x="100" y="98" textAnchor="middle">Browser</text>
    <path d="M175 80 H285" stroke="currentColor"/><text x="230" y="70" textAnchor="middle">Request</text>
    <rect x="285" y="65" width="180" height="55" rx="8" fill="none" stroke="currentColor"/><text x="375" y="98" textAnchor="middle">PHP Server</text>
    <path d="M465 80 H575" stroke="currentColor"/><text x="520" y="70" textAnchor="middle">Response + cookie</text>
    <rect x="575" y="65" width="160" height="55" rx="8" fill="none" stroke="currentColor"/><text x="655" y="98" textAnchor="middle">Cookie</text>
    <rect x="285" y="145" width="180" height="45" rx="8" fill="none" stroke="currentColor"/><text x="375" y="173" textAnchor="middle">Server session data</text>
  </svg>;
}