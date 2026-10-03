import { Box, Frame } from "./DiagramKit";

export default function SoftwareEngineeringEstimationFactorsDiagram() {
  return (
    <Frame w={620} h={260} className="mx-auto w-full max-w-xl">
      <Box x={210} y={20} w={200} h={55} lines={["Cost estimate"]} tone="dark" bold />
      <Box x={30} y={115} w={160} h={55} lines={["Size", "Complexity"]} tone="mid" />
      <Box x={230} y={115} w={160} h={55} lines={["Team", "Technology"]} tone="light" />
      <Box x={430} y={115} w={160} h={55} lines={["Quality", "Schedule"]} tone="mid" />
      <Box x={130} y={195} w={160} h={45} lines={["Reuse / tools"]} tone="light" />
      <Box x={330} y={195} w={160} h={45} lines={["Testing / integration"]} tone="light" />
    </Frame>
  );
}
