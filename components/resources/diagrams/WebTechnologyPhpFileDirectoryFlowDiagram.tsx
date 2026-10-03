export default function WebTechnologyPhpFileDirectoryFlowDiagram() {
  return <svg viewBox="0 0 760 200" className="w-full h-auto" role="img" aria-label="PHP file and directory operations">
    <rect x="25" y="70" width="150" height="55" rx="8" fill="none" stroke="currentColor"/><text x="100" y="103" textAnchor="middle">Path / Resource</text>
    <path d="M175 97 H235" stroke="currentColor"/><rect x="235" y="35" width="150" height="50" rx="8" fill="none" stroke="currentColor"/><text x="310" y="65" textAnchor="middle">Open / Create</text>
    <rect x="235" y="110" width="150" height="50" rx="8" fill="none" stroke="currentColor"/><text x="310" y="140" textAnchor="middle">Read / Write</text>
    <path d="M385 60 H450" stroke="currentColor"/><path d="M385 135 H450" stroke="currentColor"/><rect x="450" y="70" width="180" height="55" rx="8" fill="none" stroke="currentColor"/><text x="540" y="103" textAnchor="middle">Close / Manage</text>
    <rect x="630" y="70" width="105" height="55" rx="8" fill="none" stroke="currentColor"/><text x="682" y="103" textAnchor="middle">Result</text>
  </svg>;
}