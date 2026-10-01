import { Arrow, Box, Frame, Note } from "./DiagramKit";

export default function EnergySecurityDiagram() {
  return (
    <Frame w={650} h={350} className="mx-auto w-full max-w-2xl">
      <Box x={25} y={45} w={110} h={55} lines={["Resources"]} tone="dark" bold />
      <Box x={155} y={45} w={110} h={55} lines={["Production"]} tone="light" />
      <Box x={285} y={45} w={110} h={55} lines={["Processing"]} tone="light" />
      <Box x={415} y={45} w={110} h={55} lines={["Transport"]} tone="light" />
      <Box x={545} y={45} w={80} h={55} lines={["Market"]} tone="mid" />
      <Arrow points={[[135, 72], [155, 72]]} />
      <Arrow points={[[265, 72], [285, 72]]} />
      <Arrow points={[[395, 72], [415, 72]]} />
      <Arrow points={[[525, 72], [545, 72]]} />
      <Box x={85} y={170} w={135} h={58} lines={["Supplier", "concentration"]} tone="outline" size={10} />
      <Box x={255} y={170} w={135} h={58} lines={["Infrastructure", "bottleneck"]} tone="outline" size={10} />
      <Box x={425} y={170} w={135} h={58} lines={["Political /", "route risk"]} tone="outline" size={10} />
      <Arrow points={[[80, 100], [145, 170]]} dashed />
      <Arrow points={[[340, 100], [322, 170]]} dashed />
      <Arrow points={[[470, 100], [492, 170]]} dashed />
      <Box x={160} y={265} w={330} h={45} lines={["Energy security = reliability + affordability + resilience"]} tone="mid" size={10} bold />
      <Arrow points={[[155, 228], [235, 265]]} />
      <Arrow points={[[492, 228], [415, 265]]} />
      <Note x={325} y={333} lines={["Diversification and strategic reserves can reduce exposure to selected disruptions."]} size={10} />
    </Frame>
  );
}
