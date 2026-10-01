import { Arrow, Box, Frame, Note } from "./DiagramKit";

export default function TradeDisruptionRiskDiagram() {
  return (
    <Frame w={660} h={350} className="mx-auto w-full max-w-2xl">
      <Box x={20} y={45} w={125} h={55} lines={["Geopolitical", "event"]} tone="dark" bold />
      <Box x={165} y={45} w={125} h={55} lines={["Restriction /", "route disruption"]} tone="light" size={10} />
      <Box x={310} y={45} w={125} h={55} lines={["Trade / supply", "shock"]} tone="light" size={10} />
      <Box x={455} y={45} w={185} h={55} lines={["Cost / lead-time /", "availability impact"]} tone="mid" size={10} />
      <Arrow points={[[145, 72], [165, 72]]} />
      <Arrow points={[[290, 72], [310, 72]]} />
      <Arrow points={[[435, 72], [455, 72]]} />
      <Box x={80} y={175} w={150} h={60} lines={["Map", "dependencies"]} tone="outline" />
      <Box x={255} y={175} w={150} h={60} lines={["Build", "scenarios"]} tone="outline" />
      <Box x={430} y={175} w={150} h={60} lines={["Activate", "contingency"]} tone="outline" />
      <Arrow points={[[120, 100], [155, 175]]} dashed />
      <Arrow points={[[235, 100], [300, 175]]} dashed />
      <Arrow points={[[365, 100], [475, 175]]} dashed />
      <Note x={330} y={285} lines={["Response tools: diversification, alternate routes, inventory buffers, contracts, insurance and monitoring."]} size={10} />
    </Frame>
  );
}
