import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function CapitalStructureDiagram() {
  return (
    <Frame w={620} h={310} className="mx-auto w-full max-w-2xl">
      <Note x={310} y={22} lines={["CapitalStructure"]} size={11} bold />
      <Box x={55} y={82} w={120} h={52} lines={["Business risk"]} tone="dark" bold />
      <Arrow points={[[175,108],[250,108]]} />
      <Box x={250} y={82} w={120} h={52} lines={["Debt"]} tone="light" bold />
      <Arrow points={[[370,108],[445,108]]} />
      <Box x={445} y={82} w={120} h={52} lines={["Equity"]} tone="light" bold />
      <Box x={150} y={205} w={120} h={52} lines={["Cost of capital"]} tone="light" bold />
      <Box x={350} y={205} w={120} h={52} lines={["Capital structure"]} tone="mid" bold />
      <Arrow points={[[115,134],[210,205]]} />
      <Arrow points={[[505,134],[410,205]]} />
      <Note x={310} y={286} lines={["MBA IV Semester | mba-strategic-financial-management-capital-structure"]} size={10} />
    </Frame>
  );
}
