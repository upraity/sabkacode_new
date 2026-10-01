import { Arrow, Box, Frame, Note } from "./DiagramKit";

export default function FutureTradeRiskDiagram() {
  return (
    <Frame w={650} h={370} className="mx-auto w-full max-w-2xl">
      <Box x={235} y={18} w={180} h={50} lines={["Future Trade", "Environment"]} tone="dark" bold />
      <Box x={25} y={105} w={130} h={58} lines={["Technology", "cyber / controls"]} tone="light" size={10} />
      <Box x={170} y={105} w={130} h={58} lines={["Climate", "physical / transition"]} tone="light" size={10} />
      <Box x={315} y={105} w={130} h={58} lines={["Fragmentation", "rules / standards"]} tone="light" size={10} />
      <Box x={460} y={105} w={165} h={58} lines={["Supply-chain", "reconfiguration"]} tone="light" size={10} />
      <Arrow points={[[325, 68], [90, 105]]} />
      <Arrow points={[[325, 68], [235, 105]]} />
      <Arrow points={[[325, 68], [380, 105]]} />
      <Arrow points={[[325, 68], [542, 105]]} />
      <Box x={105} y={215} w={180} h={58} lines={["Scenario", "planning"]} tone="outline" />
      <Box x={365} y={215} w={180} h={58} lines={["Resilience", "and diversification"]} tone="outline" size={10} />
      <Arrow points={[[90, 163], [180, 215]]} />
      <Arrow points={[[235, 163], [230, 215]]} />
      <Arrow points={[[380, 163], [455, 215]]} />
      <Arrow points={[[542, 163], [500, 215]]} />
      <Box x={190} y={305} w={270} h={42} lines={["Continuity under plausible disruption"]} tone="mid" size={10} bold />
      <Arrow points={[[195, 273], [255, 305]]} />
      <Arrow points={[[455, 273], [395, 305]]} />
    </Frame>
  );
}
