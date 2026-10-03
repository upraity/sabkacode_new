import { Arrow, Box, Frame } from "./DiagramKit";

export default function SoftwareEngineeringDesignNotationDiagram() {
  return (
    <Frame w={680} h={220} className="mx-auto w-full max-w-2xl">
      <Box x={30} y={75} w={170} h={55} lines={["Component A"]} tone="dark" />
      <Arrow points={[[200, 102], [255, 102]]} />
      <Box x={255} y={75} w={170} h={55} lines={["Interface / API"]} tone="mid" />
      <Arrow points={[[425, 102], [480, 102]]} />
      <Box x={480} y={75} w={170} h={55} lines={["Component B"]} tone="light" />
    </Frame>
  );
}
