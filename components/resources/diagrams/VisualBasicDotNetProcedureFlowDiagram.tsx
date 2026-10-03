export default function VisualBasicDotNetProcedureFlowDiagram() {
  return <svg viewBox="0 0 760 220" className="w-full h-auto" role="img" aria-label="VB.NET procedure flow">
    <rect x="30" y="65" width="140" height="55" rx="8" fill="none" stroke="currentColor"/><text x="100" y="98" textAnchor="middle">Procedure Call</text>
    <path d="M170 92 H245" stroke="currentColor"/><rect x="245" y="65" width="155" height="55" rx="8" fill="none" stroke="currentColor"/><text x="322" y="98" textAnchor="middle">Parameters</text>
    <path d="M400 92 H475" stroke="currentColor"/><rect x="475" y="65" width="150" height="55" rx="8" fill="none" stroke="currentColor"/><text x="550" y="98" textAnchor="middle">Code Executes</text>
    <path d="M625 92 H700" stroke="currentColor"/><text x="715" y="98" textAnchor="start">Return</text>
  </svg>;
}