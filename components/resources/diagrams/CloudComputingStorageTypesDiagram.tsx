export default function CloudComputingStorageTypesDiagram() {
  return <svg viewBox="0 0 760 210" className="w-full h-auto" role="img" aria-label="Cloud storage types">
    <rect x="25" y="55" width="210" height="100" rx="10" fill="none" stroke="currentColor"/><text x="130" y="88" textAnchor="middle">Object Storage</text><text x="130" y="115" textAnchor="middle">Objects + metadata</text>
    <rect x="275" y="55" width="210" height="100" rx="10" fill="none" stroke="currentColor"/><text x="380" y="88" textAnchor="middle">Block Storage</text><text x="380" y="115" textAnchor="middle">Block volumes</text>
    <rect x="525" y="55" width="210" height="100" rx="10" fill="none" stroke="currentColor"/><text x="630" y="88" textAnchor="middle">File Storage</text><text x="630" y="115" textAnchor="middle">Files / directories</text>
  </svg>;
}