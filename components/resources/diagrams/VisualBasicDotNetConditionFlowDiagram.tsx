export default function VisualBasicDotNetConditionFlowDiagram() {
  return <svg viewBox="0 0 760 260" className="w-full h-auto" role="img" aria-label="VB.NET conditional flow">
    <rect x="300" y="20" width="160" height="45" rx="8" fill="none" stroke="currentColor"/><text x="380" y="48" textAnchor="middle">Condition</text>
    <path d="M300 65 L205 125" stroke="currentColor"/><text x="245" y="92">True</text>
    <path d="M460 65 L555 125" stroke="currentColor"/><text x="515" y="92">False</text>
    <rect x="115" y="125" width="180" height="50" rx="8" fill="none" stroke="currentColor"/><text x="205" y="155" textAnchor="middle">Then block</text>
    <rect x="465" y="125" width="180" height="50" rx="8" fill="none" stroke="currentColor"/><text x="555" y="155" textAnchor="middle">Else block</text>
    <path d="M205 175 V215 H380" stroke="currentColor"/><path d="M555 175 V215 H380" stroke="currentColor"/><text x="380" y="242" textAnchor="middle">Continue program</text>
  </svg>;
}