import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function ProjectSchedulingDiagram() {
  return (
    <Frame w={620} h={310} className="mx-auto w-full max-w-2xl">
      <Note x={310} y={22} lines={["ProjectScheduling"]} size={11} bold />
      <Box x={55} y={82} w={120} h={52} lines={["Activities"]} tone="dark" bold />
      <Arrow points={[[175,108],[250,108]]} />
      <Box x={250} y={82} w={120} h={52} lines={["Dependencies"]} tone="light" bold />
      <Arrow points={[[370,108],[445,108]]} />
      <Box x={445} y={82} w={120} h={52} lines={["Network"]} tone="light" bold />
      <Box x={150} y={205} w={120} h={52} lines={["Critical path"]} tone="light" bold />
      <Box x={350} y={205} w={120} h={52} lines={["Control"]} tone="mid" bold />
      <Arrow points={[[115,134],[210,205]]} />
      <Arrow points={[[505,134],[410,205]]} />
      <Note x={310} y={286} lines={["MBA IV Semester | mba-project-and-sourcing-management-project-scheduling"]} size={10} />
    </Frame>
  );
}
