export default function CloudComputingDisasterRecoveryDiagram() {
  return <svg viewBox="0 0 760 190" className="w-full h-auto" role="img" aria-label="Virtualization disaster recovery">
    <rect x="25" y="60" width="180" height="55" rx="8" fill="none" stroke="currentColor"/><text x="115" y="93" textAnchor="middle">Primary VM Workload</text>
    <path d="M205 87 H290" stroke="currentColor"/><rect x="290" y="60" width="180" height="55" rx="8" fill="none" stroke="currentColor"/><text x="380" y="93" textAnchor="middle">Backup / Replication</text>
    <path d="M470 87 H555" stroke="currentColor"/><rect x="555" y="60" width="180" height="55" rx="8" fill="none" stroke="currentColor"/><text x="645" y="93" textAnchor="middle">Recovery Host</text>
  </svg>;
}