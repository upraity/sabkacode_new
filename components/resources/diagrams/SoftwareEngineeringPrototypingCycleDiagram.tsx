import { Arrow, Box, Frame } from "./DiagramKit";

export default function SoftwareEngineeringPrototypingCycleDiagram() {
  return (
    <Frame w={700} h={230} className="mx-auto w-full max-w-2xl">
      <Box x={20} y={80} w={120} h={50} lines={["Initial", "requirements"]} tone="dark" />
      <Arrow points={[[140, 105], [185, 105]]} />
      <Box x={185} y={80} w={120} h={50} lines={["Prototype"]} tone="mid" />
      <Arrow points={[[305, 105], [350, 105]]} />
      <Box x={350} y={80} w={120} h={50} lines={["User", "evaluation"]} tone="light" />
      <Arrow points={[[470, 105], [515, 105]]} />
      <Box x={515} y={80} w={120} h={50} lines={["Refinement"]} tone="mid" />
      <Arrow points={[[575, 80], [575, 35], [245, 35], [245, 80]]} />
    </Frame>
  );
}
