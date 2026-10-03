export default function VisualBasicDotNetAdoNetArchitectureDiagram() {
  return <svg viewBox="0 0 760 270" className="w-full h-auto" role="img" aria-label="ADO.NET architecture">
    <rect x="30" y="95" width="150" height="60" rx="8" fill="none" stroke="currentColor"/><text x="105" y="130" textAnchor="middle">VB.NET App</text>
    <path d="M180 125 H270" stroke="currentColor"/><rect x="270" y="55" width="190" height="60" rx="8" fill="none" stroke="currentColor"/><text x="365" y="90" textAnchor="middle">Connection / Command</text>
    <rect x="270" y="150" width="190" height="60" rx="8" fill="none" stroke="currentColor"/><text x="365" y="185" textAnchor="middle">DataAdapter / DataSet</text>
    <path d="M460 85 H560" stroke="currentColor"/><path d="M460 180 H560" stroke="currentColor"/><rect x="560" y="95" width="170" height="60" rx="8" fill="none" stroke="currentColor"/><text x="645" y="130" textAnchor="middle">Database</text>
  </svg>;
}