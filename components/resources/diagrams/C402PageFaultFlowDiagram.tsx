import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C402PageFaultFlowDiagram() {
  return (
    <Frame w={620} h={320} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Demand Paging: Page-Fault Flow"]} size={12} bold />
      <Box x={30} y={65} w={145} h={45} lines={["Page reference"]} tone="dark" bold />
      <Arrow points={[[175,87],[235,87]]} />
      <Box x={235} y={65} w={150} h={45} lines={["Page present?"]} tone="outline" bold />
      <Arrow points={[[385,87],[445,87]]} />
      <Box x={445} y={65} w={145} h={45} lines={["Yes → continue"]} tone="light" />
      <Arrow points={[[310,110],[310,155]]} />
      <Box x={235} y={155} w={150} h={45} lines={["No → page fault"]} tone="mid" bold />
      <Arrow points={[[310,200],[310,245]]} />
      <Box x={200} y={245} w={220} h={45} lines={["Load page, update table, restart"]} tone="light" />
    </Frame>
  );
}
