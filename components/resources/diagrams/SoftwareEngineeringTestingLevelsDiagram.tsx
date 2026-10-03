import { Arrow, Box, Frame } from "./DiagramKit";

export default function SoftwareEngineeringTestingLevelsDiagram() {
  return (
    <Frame w={720} h={190} className="mx-auto w-full max-w-2xl">
      <Box x={20} y={60} w={150} h={50} lines={["Unit testing"]} tone="dark" />
      <Arrow points={[[170, 85], [205, 85]]} />
      <Box x={205} y={60} w={150} h={50} lines={["Integration"]} tone="mid" />
      <Arrow points={[[355, 85], [390, 85]]} />
      <Box x={390} y={60} w={150} h={50} lines={["System testing"]} tone="light" />
      <Arrow points={[[540, 85], [575, 85]]} />
      <Box x={575} y={60} w={120} h={50} lines={["Acceptance"]} tone="dark" />
    </Frame>
  );
}
