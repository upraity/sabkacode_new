import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function HRDataPlanningDiagram() {
  return (
    <Frame w={620} h={310} className="mx-auto w-full max-w-2xl">
      <Note x={310} y={22} lines={["HRDataPlanning"]} size={11} bold />
      <Box x={55} y={82} w={120} h={52} lines={["Business question"]} tone="dark" bold />
      <Arrow points={[[175,108],[250,108]]} />
      <Box x={250} y={82} w={120} h={52} lines={["Data sources"]} tone="light" bold />
      <Arrow points={[[370,108],[445,108]]} />
      <Box x={445} y={82} w={120} h={52} lines={["Data quality"]} tone="light" bold />
      <Box x={150} y={205} w={120} h={52} lines={["Analysis"]} tone="light" bold />
      <Box x={350} y={205} w={120} h={52} lines={["Decision"]} tone="mid" bold />
      <Arrow points={[[115,134],[210,205]]} />
      <Arrow points={[[505,134],[410,205]]} />
      <Note x={310} y={286} lines={["MBA IV Semester | mba-hr-analytics-hr-data-planning"]} size={10} />
    </Frame>
  );
}
