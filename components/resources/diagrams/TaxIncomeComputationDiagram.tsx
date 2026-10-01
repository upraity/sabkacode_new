import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function TaxIncomeComputationDiagram() {
  return (
    <Frame w={540} h={250} className="mx-auto w-full max-w-xl">
      <Box x=20 y={80} w=105 h={48} lines={["Income Heads"]} tone="dark" bold />
      <Arrow points={[[125,104],[143,104]]} />
      <Box x=143 y={80} w=105 h={48} lines={["Gross Total Income"]} tone="light" bold />
      <Arrow points={[[248,104],[266,104]]} />
      <Box x=266 y={80} w=105 h={48} lines={["Deductions"]} tone="light" bold />
      <Arrow points={[[371,104],[389,104]]} />
      <Box x=389 y={80} w=105 h={48} lines={["Taxable Income"]} tone="mid" bold />
      <Note x={270} y={190} lines={["The exact computation follows the applicable statutory provisions."]} size={10} />
    </Frame>
  );
}
