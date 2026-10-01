import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function CapitalMarketStructureDiagram() {
  return (
    <Frame w={540} h={250} className="mx-auto w-full max-w-xl">
      <Box x=20 y={80} w=105 h={48} lines={["Capital Market"]} tone="dark" bold />
      <Arrow points={[[125,104],[143,104]]} />
      <Box x=143 y={80} w=105 h={48} lines={["Primary / New Issue"]} tone="light" bold />
      <Arrow points={[[248,104],[266,104]]} />
      <Box x=266 y={80} w=105 h={48} lines={["Secondary / Trading"]} tone="light" bold />
      <Arrow points={[[371,104],[389,104]]} />
      <Box x=389 y={80} w=105 h={48} lines={["Investment & Liquidity"]} tone="mid" bold />
      <Note x={270} y={190} lines={["Primary market raises fresh capital; secondary market provides trading and liquidity."]} size={10} />
    </Frame>
  );
}
