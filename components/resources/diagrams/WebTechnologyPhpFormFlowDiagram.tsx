export default function WebTechnologyPhpFormFlowDiagram() {
  return <svg viewBox="0 0 760 190" className="w-full h-auto" role="img" aria-label="PHP form processing flow">
    <rect x="25" y="60" width="160" height="55" rx="8" fill="none" stroke="currentColor"/><text x="105" y="93" textAnchor="middle">HTML Form</text>
    <path d="M185 87 H300" stroke="currentColor"/><rect x="300" y="60" width="160" height="55" rx="8" fill="none" stroke="currentColor"/><text x="380" y="93" textAnchor="middle">HTTP GET / POST</text>
    <path d="M460 87 H575" stroke="currentColor"/><rect x="575" y="60" width="160" height="55" rx="8" fill="none" stroke="currentColor"/><text x="655" y="93" textAnchor="middle">PHP Processing</text>
  </svg>;
}