import { Frame, Lines } from "./DiagramKit";
export default function C504KmeansDiagram() {
  return <Frame w={620} h={320} className="mx-auto w-full max-w-xl">
    <Lines x={310} y={20} lines={["K-Means: Assign → Update → Repeat"]} size={12} bold />
    <circle cx="155" cy="135" r="65" fill="none" stroke="currentColor" strokeWidth="1"/>
    <circle cx="135" cy="120" r="4" fill="currentColor"/><circle cx="170" cy="145" r="4" fill="currentColor"/><circle cx="150" cy="165" r="4" fill="currentColor"/>
    <circle cx="155" cy="140" r="7" fill="none" stroke="currentColor" strokeWidth="2"/>
    <text x="155" y="225" textAnchor="middle" fontSize="10">Cluster + centroid</text>
    <line x1="250" y1="140" x2="370" y2="140" stroke="currentColor" strokeWidth="2"/>
    <polygon points="370,140 358,133 358,147" fill="currentColor"/>
    <circle cx="465" cy="110" r="65" fill="none" stroke="currentColor" strokeWidth="1"/>
    <circle cx="440" cy="100" r="4" fill="currentColor"/><circle cx="480" cy="130" r="4" fill="currentColor"/><circle cx="470" cy="155" r="4" fill="currentColor"/>
    <circle cx="464" cy="128" r="7" fill="none" stroke="currentColor" strokeWidth="2"/>
    <text x="465" y="225" textAnchor="middle" fontSize="10">Recomputed centroid</text>
    <Lines x={310} y={275} lines={["Repeat assignment and centroid update until a stopping condition is met."]} size={9} />
  </Frame>;
}
