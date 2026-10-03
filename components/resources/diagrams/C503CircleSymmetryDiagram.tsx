import { Frame, Lines } from "./DiagramKit";

export default function C503CircleSymmetryDiagram() {
  return (
    <Frame w={620} h={320} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Eight-Way Circle Symmetry"]} size={12} bold />
      <circle cx="310" cy="155" r="85" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="210" y1="155" x2="410" y2="155" stroke="currentColor" />
      <line x1="310" y1="55" x2="310" y2="255" stroke="currentColor" />
      <line x1="245" y1="90" x2="375" y2="220" stroke="currentColor" />
      <line x1="375" y1="90" x2="245" y2="220" stroke="currentColor" />
      <Lines x={310} y={285} lines={["A computed point can be reflected into symmetric octants."]} size={10} />
    </Frame>
  );
}
