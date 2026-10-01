import { Arrow, Box, Frame } from "./DiagramKit";

export function LabourLawComplianceCycleDiagram() {
  return (
    <Frame w={560} h={270} className="mx-auto w-full max-w-xl">
      <Box x={25} y={100} w={95} h={42} lines={["Identify"]} tone="dark" bold />
      <Box x={135} y={100} w={95} h={42} lines={["Implement"]} tone="light" />
      <Box x={245} y={100} w={95} h={42} lines={["Document"]} tone="light" />
      <Box x={355} y={100} w={95} h={42} lines={["Review"]} tone="light" />
      <Box x={465} y={100} w={70} h={42} lines={["Correct"]} tone="mid" bold />
      <Arrow points={[[120, 121], [135, 121]]} />
      <Arrow points={[[230, 121], [245, 121]]} />
      <Arrow points={[[340, 121], [355, 121]]} />
      <Arrow points={[[450, 121], [465, 121]]} />
      <Arrow points={[[500, 142], [500, 205], [75, 205], [75, 142]]} />
    </Frame>
  );
}
