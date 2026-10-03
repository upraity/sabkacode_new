import { Frame, Lines, Box } from "./DiagramKit";
export default function C504AStarDiagram() {
  return <Frame w={620} h={310} className="mx-auto w-full max-w-xl">
    <Lines x={310} y={20} lines={["A* Evaluation"]} size={12} bold />
    <Box x={55} y={90} w={120} h={55} lines={["Start", "g(n)=0"]} tone="light" />
    <Box x={250} y={90} w={120} h={55} lines={["Node n", "g(n)+h(n)"]} tone="mid" />
    <Box x={445} y={90} w={120} h={55} lines={["Goal", "h≈0"]} tone="dark" bold />
    <line x1="175" y1="118" x2="250" y2="118" stroke="currentColor" strokeWidth="2"/>
    <line x1="370" y1="118" x2="445" y2="118" stroke="currentColor" strokeWidth="2"/>
    <Lines x={310} y={210} lines={["g(n) = cost from start to n", "h(n) = estimated cost from n to goal", "f(n) = g(n) + h(n)"]} size={10} />
  </Frame>;
}
