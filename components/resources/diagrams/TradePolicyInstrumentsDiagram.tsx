import { Arrow, Box, Frame, Note } from "./DiagramKit";

export default function TradePolicyInstrumentsDiagram() {
  return (
    <Frame w={640} h={350} className="mx-auto w-full max-w-2xl">
      <Box x={235} y={18} w={170} h={50} lines={["Trade Policy"]} tone="dark" bold />
      <Box x={25} y={105} w={125} h={58} lines={["Tariff", "price measure"]} tone="light" size={10} />
      <Box x={175} y={105} w={125} h={58} lines={["Quota", "quantity limit"]} tone="light" size={10} />
      <Box x={325} y={105} w={125} h={58} lines={["Subsidy", "producer support"]} tone="light" size={10} />
      <Box x={475} y={105} w={140} h={58} lines={["Non-tariff", "measure"]} tone="light" size={10} />
      <Arrow points={[[320, 68], [87, 105]]} />
      <Arrow points={[[320, 68], [237, 105]]} />
      <Arrow points={[[320, 68], [387, 105]]} />
      <Arrow points={[[320, 68], [545, 105]]} />
      <Box x={100} y={210} w={180} h={58} lines={["Market access", "and landed cost"]} tone="outline" size={10} />
      <Box x={360} y={210} w={180} h={58} lines={["Domestic", "competitive conditions"]} tone="outline" size={10} />
      <Arrow points={[[87, 163], [160, 210]]} />
      <Arrow points={[[237, 163], [215, 210]]} />
      <Arrow points={[[387, 163], [425, 210]]} />
      <Arrow points={[[545, 163], [465, 210]]} />
      <Note x={320} y={320} lines={["Policy instruments redistribute costs, incentives and access across stakeholders."]} size={11} />
    </Frame>
  );
}
