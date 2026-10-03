import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C503CsgDiagram() {
  return (
    <Frame w={620} h={330} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Constructive Solid Geometry"]} size={12} bold />
      <Box x={245} y={60} w={130} h={45} lines={["Difference (−)"]} tone="dark" bold />
      <Box x={100} y={165} w={120} h={45} lines={["A: Cylinder"]} tone="light" />
      <Box x={400} y={165} w={120} h={45} lines={["B: Cube"]} tone="mid" />
      <Arrow points={[[285,105],[190,165]]} />
      <Arrow points={[[335,105],[460,165]]} />
      <Lines x={310} y={250} lines={["CSG represents a complex solid as Boolean combinations of primitives."]} size={10} />
    </Frame>
  );
}
