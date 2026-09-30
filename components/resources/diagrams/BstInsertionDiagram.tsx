import { Arrow, Box, Frame } from "./DiagramKit";

export function BstInsertionDiagram() {
  return (
    <Frame w={420} h={220} className="mx-auto w-full max-w-sm">
      <Box x={160} y={10} w={50} h={32} lines={["50"]} tone="dark" bold />
      <Arrow points={[[170,42],[110,80]]} />
      <Arrow points={[[200,42],[260,80]]} />
      <Box x={85} y={82} w={50} h={32} lines={["30"]} tone="mid" bold />
      <Box x={235} y={82} w={50} h={32} lines={["70"]} tone="mid" bold />
      <Arrow points={[[95,114],[45,154]]} />
      <Arrow points={[[125,114],[180,154]]} />
      <Arrow points={[[245,114],[240,154]]} />
      <Arrow points={[[275,114],[315,154]]} />
      <Box x={20} y={156} w={50} h={32} lines={["20"]} tone="light" />
      <Box x={130} y={156} w={50} h={32} lines={["40"]} tone="light" />
      <Box x={210} y={156} w={50} h={32} lines={["60"]} tone="light" />
      <Box x={290} y={156} w={50} h={32} lines={["80"]} tone="light" />
    </Frame>
  );
}
