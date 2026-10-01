import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function PortfolioModelsDiagram() {
  return (
    <Frame w={540} h={250} className="mx-auto w-full max-w-xl">
      <Box x=20 y={80} w=105 h={48} lines={["Markowitz"]} tone="dark" bold />
      <Arrow points={[[125,104],[143,104]]} />
      <Box x=143 y={80} w=105 h={48} lines={["Efficient frontier"]} tone="light" bold />
      <Arrow points={[[248,104],[266,104]]} />
      <Box x=266 y={80} w=105 h={48} lines={["Single Index Model"]} tone="light" bold />
      <Arrow points={[[371,104],[389,104]]} />
      <Box x=389 y={80} w=105 h={48} lines={["Portfolio choice"]} tone="mid" bold />
      <Note x={270} y={190} lines={["Models provide structured ways to select portfolios under risk-return constraints."]} size={10} />
    </Frame>
  );
}
