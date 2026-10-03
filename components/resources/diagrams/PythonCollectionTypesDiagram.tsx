import { Arrow, Box, Frame, Note } from "./DiagramKit";

export default function PythonCollectionTypesDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Box x={210} y={20} w={200} h={42} lines={["Python collections"]} tone="dark" bold />
      <Arrow points={[[310, 62], [310, 92]]} />
      <Box x={25} y={112} w={130} h={52} lines={["List", "mutable • ordered"]} tone="light" size={10} />
      <Box x={175} y={112} w={130} h={52} lines={["Tuple", "immutable • ordered"]} tone="light" size={10} />
      <Box x={325} y={112} w={130} h={52} lines={["Set", "unique elements"]} tone="light" size={10} />
      <Box x={475} y={112} w={120} h={52} lines={["Dict", "key → value"]} tone="outline" size={10} />
      <Arrow points={[[310, 92], [90, 112]]} />
      <Arrow points={[[310, 92], [240, 112]]} />
      <Arrow points={[[310, 92], [390, 112]]} />
      <Arrow points={[[310, 92], [535, 112]]} />
      <Note x={310} y={220} lines={["Sequences support indexing/slicing; dictionaries are mappings.", "Mutability differs between lists, tuples, sets and dictionaries."]} size={10} />
      <Box x={185} y={245} w={250} h={34} lines={["Choose the collection by the data requirement"]} tone="muted" size={10} />
    </Frame>
  );
}
