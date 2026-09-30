import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function TreeTerminologyDiagram() {
  return (
    <Frame w={480} h={230} className="mx-auto w-full max-w-lg">
      <Box x={210} y={10} w={60} h={30} lines={["A"]} tone="dark" bold />
      <Note x={280} y={25} lines={["root"]} size={10} anchor="start" />
      <Arrow points={[[240,40],[130,80]]} />
      <Arrow points={[[240,40],[350,80]]} />
      <Box x={100} y={82} w={60} h={30} lines={["B"]} tone="mid" bold />
      <Box x={320} y={82} w={60} h={30} lines={["C"]} tone="mid" bold />
      <Note x={230} y={97} lines={["siblings"]} size={10} />
      <Arrow points={[[130,112],[70,154]]} />
      <Arrow points={[[130,112],[190,154]]} />
      <Box x={40} y={156} w={60} h={30} lines={["D"]} tone="light" />
      <Box x={160} y={156} w={60} h={30} lines={["E"]} tone="light" />
      <Note x={40} y={200} lines={["D, E, C = leaf nodes"]} size={10} anchor="start" bold />
      <Note x={260} y={200} lines={["B = internal node, degree 2"]} size={10} anchor="start" />
    </Frame>
  );
}
