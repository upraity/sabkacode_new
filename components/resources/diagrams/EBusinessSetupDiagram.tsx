import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function EBusinessSetupDiagram() {
  return (
    <Frame w={620} h={310} className="mx-auto w-full max-w-2xl">
      <Note x={310} y={22} lines={["EBusinessSetup"]} size={11} bold />
      <Box x={55} y={82} w={120} h={52} lines={["Business idea"]} tone="dark" bold />
      <Arrow points={[[175,108],[250,108]]} />
      <Box x={250} y={82} w={120} h={52} lines={["Platform"]} tone="light" bold />
      <Arrow points={[[370,108],[445,108]]} />
      <Box x={445} y={82} w={120} h={52} lines={["Website"]} tone="light" bold />
      <Box x={150} y={205} w={120} h={52} lines={["Customer", "acquisition"]} tone="light" bold />
      <Box x={350} y={205} w={120} h={52} lines={["CRM"]} tone="mid" bold />
      <Arrow points={[[115,134],[210,205]]} />
      <Arrow points={[[505,134],[410,205]]} />
      <Note x={310} y={286} lines={["MBA IV Semester | mba-e-business-e-business-setup"]} size={10} />
    </Frame>
  );
}
