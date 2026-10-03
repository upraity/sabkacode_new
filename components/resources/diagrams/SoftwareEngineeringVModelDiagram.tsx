import { Arrow, Box, Frame } from "./DiagramKit";

export default function SoftwareEngineeringVModelDiagram() {
  return (
    <Frame w={720} h={360} className="mx-auto w-full max-w-2xl">
      <Box x={25} y={25} w={150} h={44} lines={["Requirements"]} tone="dark" />
      <Arrow points={[[100, 69], [100, 105]]} />
      <Box x={25} y={105} w={150} h={44} lines={["System design"]} tone="mid" />
      <Arrow points={[[100, 149], [100, 185]]} />
      <Box x={25} y={185} w={150} h={44} lines={["Detailed design"]} tone="light" />
      <Arrow points={[[175, 207], [260, 300]]} />
      <Box x={265} y={280} w={150} h={44} lines={["Unit testing"]} tone="light" />
      <Arrow points={[[175, 127], [360, 300]]} />
      <Box x={285} y={120} w={150} h={44} lines={["Architecture"]} tone="mid" />
      <Arrow points={[[435, 142], [505, 205]]} />
      <Box x={500} y={185} w={150} h={44} lines={["Integration testing"]} tone="mid" />
      <Arrow points={[[435, 42], [570, 185]]} />
      <Box x={500} y={25} w={150} h={44} lines={["Acceptance testing"]} tone="dark" />
      <Box x={500} y={265} w={150} h={44} lines={["System testing"]} tone="dark" />
    </Frame>
  );
}
