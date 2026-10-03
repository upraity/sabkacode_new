import { Box, Frame, Lines } from "./DiagramKit";

export default function C404RiscCiscComparisonDiagram() {
  return (
    <Frame w={620} h={320} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["RISC versus CISC — Typical Design Tendencies"]} size={12} bold />
      <Box x={35} y={60} w={250} h={45} lines={["RISC", "simple + regular instructions"]} tone="dark" bold />
      <Box x={335} y={60} w={250} h={45} lines={["CISC", "rich + varied instructions"]} tone="mid" bold />
      <Box x={35} y={125} w={250} h={45} lines={["Load/store", "many register operands"]} tone="light" />
      <Box x={335} y={125} w={250} h={45} lines={["More addressing modes", "memory operands possible"]} tone="light" />
      <Box x={35} y={190} w={250} h={45} lines={["Regular formats", "pipeline-friendly"]} tone="outline" />
      <Box x={335} y={190} w={250} h={45} lines={["Variable formats", "complex decoding/control"]} tone="outline" />
      <Lines x={310} y={270} lines={["These are typical tendencies, not universal rules for every modern processor."]} size={10} bold />
    </Frame>
  );
}
