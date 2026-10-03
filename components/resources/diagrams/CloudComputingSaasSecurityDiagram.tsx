export default function CloudComputingSaasSecurityDiagram() {
  return <svg viewBox="0 0 760 220" className="w-full h-auto" role="img" aria-label="SaaS security responsibilities">
    <rect x="25" y="55" width="220" height="110" rx="10" fill="none" stroke="currentColor"/><text x="135" y="88" textAnchor="middle">Consumer Controls</text><text x="135" y="115" textAnchor="middle">Identity • Access</text><text x="135" y="140" textAnchor="middle">Data • Configuration</text>
    <rect x="270" y="40" width="220" height="140" rx="10" fill="none" stroke="currentColor"/><text x="380" y="73" textAnchor="middle">SaaS Application</text><text x="380" y="105" textAnchor="middle">Shared responsibility</text><text x="380" y="132" textAnchor="middle">Provider + Consumer</text>
    <rect x="515" y="55" width="220" height="110" rx="10" fill="none" stroke="currentColor"/><text x="625" y="88" textAnchor="middle">Provider Controls</text><text x="625" y="115" textAnchor="middle">Application / Platform</text><text x="625" y="140" textAnchor="middle">Infrastructure</text>
  </svg>;
}