export default function VisualBasicDotNetStreamReaderWriterDiagram() {
  return <svg viewBox="0 0 760 230" className="w-full h-auto" role="img" aria-label="StreamReader and StreamWriter">
    <rect x="30" y="70" width="180" height="60" rx="8" fill="none" stroke="currentColor"/><text x="120" y="105" textAnchor="middle">Text File</text>
    <path d="M210 85 H330" stroke="currentColor"/><rect x="330" y="45" width="170" height="60" rx="8" fill="none" stroke="currentColor"/><text x="415" y="80" textAnchor="middle">StreamReader</text><text x="415" y="98" textAnchor="middle">Read</text>
    <path d="M500 150 H380" stroke="currentColor"/><rect x="330" y="135" width="170" height="60" rx="8" fill="none" stroke="currentColor"/><text x="415" y="170" textAnchor="middle">StreamWriter</text><text x="415" y="188" textAnchor="middle">Write</text>
    <path d="M330 165 H210" stroke="currentColor"/><text x="120" y="170" textAnchor="middle">Text File</text>
  </svg>;
}