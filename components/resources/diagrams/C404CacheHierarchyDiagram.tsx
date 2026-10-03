import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C404CacheHierarchyDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Cache and Locality"]} size={12} bold />
      <Box x={30} y={70} w={140} h={50} lines={["CPU"]} tone="dark" bold />
      <Arrow points={[[170,95],[230,95]]} />
      <Box x={230} y={65} w={150} h={60} lines={["Cache", "fast + small"]} tone="mid" bold />
      <Arrow points={[[380,95],[450,95]]} />
      <Box x={450} y={70} w={140} h={50} lines={["Main Memory"]} tone="light" />
      <Lines x={310} y={175} lines={["Temporal locality: recently used data may be reused."]} size={10} />
      <Lines x={310} y={205} lines={["Spatial locality: nearby addresses may be accessed soon."]} size={10} />
      <Lines x={310} y={240} lines={["Hit → serve from cache; Miss → fetch from lower level."]} size={10} bold />
    </Frame>
  );
}
