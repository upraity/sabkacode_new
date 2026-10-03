export default function VisualBasicDotNetClrExecutionFlowDiagram() {
  return <svg viewBox="0 0 760 210" className="w-full h-auto" role="img" aria-label="CLR execution flow">
    <rect x="20" y="65" width="135" height="55" rx="8" fill="none" stroke="currentColor"/><text x="87" y="98" textAnchor="middle">VB.NET Source</text>
    <path d="M155 92 H215" stroke="currentColor"/><rect x="215" y="65" width="150" height="55" rx="8" fill="none" stroke="currentColor"/><text x="290" y="98" textAnchor="middle">Compiler</text>
    <path d="M365 92 H425" stroke="currentColor"/><rect x="425" y="65" width="150" height="55" rx="8" fill="none" stroke="currentColor"/><text x="500" y="98" textAnchor="middle">Managed Code</text>
    <path d="M575 92 H635" stroke="currentColor"/><rect x="635" y="65" width="105" height="55" rx="8" fill="none" stroke="currentColor"/><text x="687" y="98" textAnchor="middle">CLR</text>
    <text x="380" y="165" textAnchor="middle">Runtime services: execution • memory management • exceptions • type safety</text>
  </svg>;
}