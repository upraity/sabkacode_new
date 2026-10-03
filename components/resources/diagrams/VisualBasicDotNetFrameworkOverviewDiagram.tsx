export default function VisualBasicDotNetFrameworkOverviewDiagram() {
  return <svg viewBox="0 0 760 250" className="w-full h-auto" role="img" aria-label="VB.NET and .NET Framework overview">
    <rect x="35" y="35" width="160" height="55" rx="8" fill="none" stroke="currentColor"/><text x="115" y="68" textAnchor="middle">VB.NET Code</text>
    <path d="M195 62 H290" stroke="currentColor"/><rect x="290" y="35" width="180" height="55" rx="8" fill="none" stroke="currentColor"/><text x="380" y="68" textAnchor="middle">.NET Compilation</text>
    <path d="M470 62 H565" stroke="currentColor"/><rect x="565" y="35" width="160" height="55" rx="8" fill="none" stroke="currentColor"/><text x="645" y="68" textAnchor="middle">CLR</text>
    <rect x="150" y="145" width="460" height="65" rx="10" fill="none" stroke="currentColor"/><text x="380" y="175" textAnchor="middle">Framework Class Library + Runtime Services</text><text x="380" y="197" textAnchor="middle">Reusable classes, memory management, exceptions, etc.</text>
    <path d="M645 90 V145" stroke="currentColor"/>
  </svg>;
}