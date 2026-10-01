import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function PortfolioRevisionDiagram() {
  return (
    <Frame w={540} h={250} className="mx-auto w-full max-w-xl">
      <Box x={20} y={80} w={105} h={48} lines={["Monitor"]} tone="dark" bold />
      <Arrow points={[[125,104],[143,104]]} />
      <Box x={143} y={80} w={105} h={48} lines={["Evaluate"]} tone="light" bold />
      <Arrow points={[[248,104],[266,104]]} />
      <Box x={266} y={80} w={105} h={48} lines={["Revise"]} tone="light" bold />
      <Arrow points={[[371,104],[389,104]]} />
      <Box x={389} y={80} w={105} h={48} lines={["Rebalance"]} tone="mid" bold />
      <Note x={270} y={190} lines={["Revision keeps portfolio composition aligned with objectives and constraints."]} size={10} />
    </Frame>
  );
}
