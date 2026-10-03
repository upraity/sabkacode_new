import { Arrow, Box, Frame, Lines, Note } from "./DiagramKit";

export default function C402OsLayeredViewDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Operating System Layered View"]} size={12} bold />
      <Box x={195} y={45} w={230} h={42} lines={["Users"]} tone="dark" bold />
      <Arrow points={[[310,87],[310,112]]} />
      <Box x={145} y={112} w={330} h={48} lines={["Application Programs"]} tone="light" />
      <Arrow points={[[310,160],[310,185]]} />
      <Box x={95} y={185} w={430} h={48} lines={["Operating System", "resource management + services"]} tone="mid" bold />
      <Arrow points={[[310,233],[310,258]]} />
      <Box x={145} y={258} w={330} h={30} lines={["Hardware"]} tone="outline" bold />
    </Frame>
  );
}
