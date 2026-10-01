import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function CreditCycleDiagram() {
  return (
    <Frame w={540} h={250} className="mx-auto w-full max-w-xl">
      <Box x={20} y={80} w={105} h={48} lines={["Application"]} tone="dark" bold />
      <Arrow points={[[125,104],[143,104]]} />
      <Box x={143} y={80} w={105} h={48} lines={["Appraisal"]} tone="light" bold />
      <Arrow points={[[248,104],[266,104]]} />
      <Box x={266} y={80} w={105} h={48} lines={["Sanction"]} tone="light" bold />
      <Arrow points={[[371,104],[389,104]]} />
      <Box x={389} y={80} w={105} h={48} lines={["Monitoring"]} tone="light" bold />
      <Arrow points={[[494,104],[512,104]]} />
      <Box x={512} y={80} w={105} h={48} lines={["Repayment"]} tone="mid" bold />
      <Note x={270} y={190} lines={["Credit risk management continues after sanction through monitoring."]} size={10} />
    </Frame>
  );
}
