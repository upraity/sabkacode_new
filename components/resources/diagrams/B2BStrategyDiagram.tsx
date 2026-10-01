import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function B2BStrategyDiagram() {
  return (
    <Frame w={620} h={310} className="mx-auto w-full max-w-2xl">
      <Note x={310} y={22} lines={["B2BStrategy"]} size={11} bold />
      <Box x={55} y={82} w={120} h={52} lines={["Market analysis"]} tone="dark" bold />
      <Arrow points={[[175,108],[250,108]]} />
      <Box x={250} y={82} w={120} h={52} lines={["Segmentation"]} tone="light" bold />
      <Arrow points={[[370,108],[445,108]]} />
      <Box x={445} y={82} w={120} h={52} lines={["Targeting"]} tone="light" bold />
      <Box x={150} y={205} w={120} h={52} lines={["Positioning"]} tone="light" bold />
      <Box x={350} y={205} w={120} h={52} lines={["Marketing mix"]} tone="mid" bold />
      <Arrow points={[[115,134],[210,205]]} />
      <Arrow points={[[505,134],[410,205]]} />
      <Note x={310} y={286} lines={["MBA IV Semester | mba-b2b-marketing-b2b-strategy"]} size={10} />
    </Frame>
  );
}
