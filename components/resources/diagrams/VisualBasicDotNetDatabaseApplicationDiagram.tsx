export default function VisualBasicDotNetDatabaseApplicationDiagram() {
  return <svg viewBox="0 0 760 250" className="w-full h-auto" role="img" aria-label="Database application layers">
    <rect x="40" y="80" width="170" height="70" rx="10" fill="none" stroke="currentColor"/><text x="125" y="112" textAnchor="middle">Presentation</text><text x="125" y="134" textAnchor="middle">Forms / Web</text>
    <path d="M210 115 H295" stroke="currentColor"/><rect x="295" y="80" width="170" height="70" rx="10" fill="none" stroke="currentColor"/><text x="380" y="112" textAnchor="middle">Application Logic</text><text x="380" y="134" textAnchor="middle">Validation / Rules</text>
    <path d="M465 115 H550" stroke="currentColor"/><rect x="550" y="80" width="170" height="70" rx="10" fill="none" stroke="currentColor"/><text x="635" y="112" textAnchor="middle">Data Access</text><text x="635" y="134" textAnchor="middle">ADO.NET</text>
    <text x="380" y="205" textAnchor="middle">Persistent data → Database</text>
  </svg>;
}