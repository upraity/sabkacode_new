export default function VisualBasicDotNetExceptionFlowDiagram() {
  return <svg viewBox="0 0 760 250" className="w-full h-auto" role="img" aria-label="Try Catch Finally flow">
    <rect x="55" y="70" width="170" height="65" rx="8" fill="none" stroke="currentColor"/><text x="140" y="108" textAnchor="middle">Try</text>
    <path d="M225 102 H300" stroke="currentColor"/><rect x="300" y="70" width="170" height="65" rx="8" fill="none" stroke="currentColor"/><text x="385" y="108" textAnchor="middle">Normal execution</text>
    <path d="M225 110 C255 165 270 190 300 190" fill="none" stroke="currentColor"/><rect x="300" y="165" width="170" height="50" rx="8" fill="none" stroke="currentColor"/><text x="385" y="196" textAnchor="middle">Catch</text>
    <path d="M470 102 H565" stroke="currentColor"/><path d="M470 190 H565" stroke="currentColor"/><rect x="565" y="125" width="150" height="60" rx="8" fill="none" stroke="currentColor"/><text x="640" y="160" textAnchor="middle">Finally</text>
  </svg>;
}