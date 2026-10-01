import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function TaxAssessmentCycleDiagram() {
  return (
    <Frame w={540} h={250} className="mx-auto w-full max-w-xl">
      <Box x={20} y={80} w={105} h={48} lines={["Previous Year"]} tone="dark" bold />
      <Arrow points={[[125,104],[143,104]]} />
      <Box x={143} y={80} w={105} h={48} lines={["Income"]} tone="light" bold />
      <Arrow points={[[248,104],[266,104]]} />
      <Box x={266} y={80} w={105} h={48} lines={["Assessment Year"]} tone="light" bold />
      <Arrow points={[[371,104],[389,104]]} />
      <Box x={389} y={80} w={105} h={48} lines={["Tax Assessment"]} tone="mid" bold />
      <Note x={270} y={190} lines={["The relevant income period precedes the corresponding assessment."]} size={10} />
    </Frame>
  );
}
