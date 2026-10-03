export default function WebTechnologyPhpUploadDownloadDiagram() {
  return <svg viewBox="0 0 760 190" className="w-full h-auto" role="img" aria-label="PHP upload and download">
    <rect x="25" y="55" width="160" height="55" rx="8" fill="none" stroke="currentColor"/><text x="105" y="88" textAnchor="middle">Browser</text>
    <path d="M185 72 H300" stroke="currentColor"/><text x="242" y="62" textAnchor="middle">Upload</text>
    <path d="M300 95 H185" stroke="currentColor"/><text x="242" y="125" textAnchor="middle">Download</text>
    <rect x="300" y="55" width="170" height="55" rx="8" fill="none" stroke="currentColor"/><text x="385" y="88" textAnchor="middle">PHP Server</text>
    <path d="M470 72 H585" stroke="currentColor"/><rect x="585" y="55" width="150" height="55" rx="8" fill="none" stroke="currentColor"/><text x="660" y="88" textAnchor="middle">File Storage</text>
  </svg>;
}