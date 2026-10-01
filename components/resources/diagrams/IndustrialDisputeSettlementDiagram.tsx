import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function IndustrialDisputeSettlementDiagram() {
  return (
    <Frame w={540} h={300} className="mx-auto w-full max-w-xl">
      <Box x={185} y={18} w={170} h={40} lines={["Industrial", "Dispute"]} tone="dark" bold />
      <Arrow points={[[270, 58], [270, 88]]} />
      <Box x={185} y={88} w={170} h={40} lines={["Internal dialogue /", "negotiation"]} tone="light" />
      <Arrow points={[[185, 108], [95, 108], [95, 165]]} />
      <Arrow points={[[355, 108], [445, 108], [445, 165]]} />
      <Box x={25} y={165} w={140} h={44} lines={["Conciliation", "process"]} tone="mid" bold />
      <Box x={375} y={165} w={140} h={44} lines={["Adjudication", "where applicable"]} tone="light" />
      <Arrow points={[[95, 209], [95, 248], [270, 248]]} />
      <Arrow points={[[445, 209], [445, 248], [270, 248]]} />
      <Box x={180} y={248} w={180} h={38} lines={["Settlement / decision"]} tone="dark" bold />
      <Note x={270} y={300} lines={["The exact statutory route depends on the applicable legal framework."]} size={10} />
    </Frame>
  );
}
