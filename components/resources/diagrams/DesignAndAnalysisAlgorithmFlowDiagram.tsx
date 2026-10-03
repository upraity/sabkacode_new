export default function DesignAndAnalysisAlgorithmFlowDiagram() {
  return <svg viewBox="0 0 760 210" className="w-full h-auto" role="img" aria-label="Algorithm input process output flow">
    <rect x="35" y="70" width="150" height="55" rx="8" fill="none" stroke="currentColor"/><text x="110" y="103" textAnchor="middle">Input</text>
    <path d="M185 97 H300" stroke="currentColor"/>
    <rect x="300" y="70" width="160" height="55" rx="8" fill="none" stroke="currentColor"/><text x="380" y="103" textAnchor="middle">Algorithm Steps</text>
    <path d="M460 97 H575" stroke="currentColor"/>
    <rect x="575" y="70" width="150" height="55" rx="8" fill="none" stroke="currentColor"/><text x="650" y="103" textAnchor="middle">Output</text>
    <text x="380" y="165" textAnchor="middle">Finite • definite • effective • correct</text>
  </svg>;
}