import { Frame, Lines } from "./DiagramKit";

export default function C503OctreeDiagram() {
  return (
    <Frame w={620} h={330} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Octree Representation"]} size={12} bold />
      <rect x="210" y="65" width="200" height="180" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="310" y1="65" x2="310" y2="245" stroke="currentColor" />
      <line x1="210" y1="155" x2="410" y2="155" stroke="currentColor" />
      <line x1="250" y1="65" x2="250" y2="155" stroke="currentColor" />
      <line x1="370" y1="155" x2="370" y2="245" stroke="currentColor" />
      <Lines x={310} y={280} lines={["A 3D region can be recursively subdivided into eight octants where more detail is needed."]} size={10} />
    </Frame>
  );
}
