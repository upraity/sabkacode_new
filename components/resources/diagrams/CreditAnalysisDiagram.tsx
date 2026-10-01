import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function CreditAnalysisDiagram() {
  return (
    <Frame w={540} h={250} className="mx-auto w-full max-w-xl">
      <Box x=20 y={80} w=105 h={48} lines={["Business"]} tone="dark" bold />
      <Arrow points={[[125,104],[143,104]]} />
      <Box x=143 y={80} w=105 h={48} lines={["Financial"]} tone="light" bold />
      <Arrow points={[[248,104],[266,104]]} />
      <Box x=266 y={80} w=105 h={48} lines={["Risk"]} tone="light" bold />
      <Arrow points={[[371,104],[389,104]]} />
      <Box x=389 y={80} w=105 h={48} lines={["Structure"]} tone="light" bold />
      <Arrow points={[[494,104],[512,104]]} />
      <Box x=512 y={80} w=105 h={48} lines={["Monitor"]} tone="mid" bold />
      <Note x={270} y={190} lines={["Credit analysis connects business fundamentals with repayment capacity and facility structure."]} size={10} />
    </Frame>
  );
}
