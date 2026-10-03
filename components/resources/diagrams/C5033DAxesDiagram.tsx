import { Frame, Lines } from "./DiagramKit";

export default function C5033DAxesDiagram() {
  return (
    <Frame w={620} h={320} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["3D Coordinates and Homogeneous Point"]} size={12} bold />
      <line x1="150" y1="235" x2="470" y2="235" stroke="currentColor" strokeWidth="2" />
      <line x1="150" y1="235" x2="150" y2="70" stroke="currentColor" strokeWidth="2" />
      <line x1="150" y1="235" x2="300" y2="135" stroke="currentColor" strokeWidth="2" />
      <circle cx="300" cy="165" r="5" fill="currentColor" />
      <Lines x={475} y={235} lines={["X"]} size={11} bold />
      <Lines x={150} y={60} lines={["Y"]} size={11} bold />
      <Lines x={305} y={130} lines={["Z"]} size={11} bold />
      <Lines x={310} y={285} lines={["P = (x, y, z, 1) in homogeneous coordinates"]} size={10} />
    </Frame>
  );
}
