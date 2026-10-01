import { Arrow, Box, Frame, Note } from "./DiagramKit";

export default function ShippingLogisticsChainDiagram() {
  return (
    <Frame w={650} h={330} className="mx-auto w-full max-w-2xl">
      <Box x={20} y={55} w={105} h={56} lines={["Factory"]} tone="dark" bold />
      <Box x={145} y={55} w={105} h={56} lines={["ICD / CFS"]} tone="light" />
      <Box x={270} y={55} w={105} h={56} lines={["Port", "Terminal"]} tone="light" />
      <Box x={395} y={55} w={105} h={56} lines={["Vessel / Air", "Carrier"]} tone="light" size={10} />
      <Box x={520} y={55} w={105} h={56} lines={["Overseas", "Destination"]} tone="mid" size={10} />
      <Arrow points={[[125, 83], [145, 83]]} />
      <Arrow points={[[250, 83], [270, 83]]} />
      <Arrow points={[[375, 83], [395, 83]]} />
      <Arrow points={[[500, 83], [520, 83]]} />
      <Box x={85} y={175} w={145} h={58} lines={["FCL", "Dedicated container"]} tone="outline" size={10} />
      <Box x={255} y={175} w={145} h={58} lines={["LCL", "Consolidated cargo"]} tone="outline" size={10} />
      <Box x={425} y={175} w={145} h={58} lines={["Marine cargo", "insurance"]} tone="outline" size={10} />
      <Arrow points={[[198, 111], [155, 175]]} dashed />
      <Arrow points={[[323, 111], [327, 175]]} dashed />
      <Arrow points={[[448, 111], [498, 175]]} dashed />
      <Note x={325} y={280} lines={["Route choice affects time, cost, handling, documentation and transit risk."]} size={11} />
    </Frame>
  );
}
