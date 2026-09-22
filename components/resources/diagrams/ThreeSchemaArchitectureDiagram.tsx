import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function ThreeSchemaArchitectureDiagram() {
  return (
    <Frame w={580} h={340} className="mx-auto w-full max-w-lg">
      <Note x={260} y={10} lines={["End users and application programs"]} size={11} bold />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <Arrow points={[[110 + i * 150, 20], [110 + i * 150, 42]]} />
          <Box x={60 + i * 150} y={44} w={100} h={30} lines={[i === 2 ? "View n" : `View ${i + 1}`]} tone="mid" bold />
          <Arrow points={[[110 + i * 150, 74], [110 + i * 150, 110]]} both />
        </g>
      ))}
      <Note x={570} y={59} lines={["External", "level"]} size={10} anchor="end" bold />
      <Note x={260} y={94} lines={["external / conceptual mapping"]} size={10} />

      <Box x={60} y={112} w={400} h={42} lines={["Conceptual schema", "entities, attributes, relationships, constraints (whole database)"]} tone="dark" bold />
      <Note x={570} y={133} lines={["Conceptual", "level"]} size={10} anchor="end" bold />
      <Arrow points={[[260, 154], [260, 194]]} both />
      <Note x={272} y={176} lines={["conceptual / internal mapping"]} size={10} anchor="start" />

      <Box x={60} y={196} w={400} h={42} lines={["Internal schema", "files, record formats, indexes, access paths"]} tone="mid" bold />
      <Note x={570} y={217} lines={["Internal", "level"]} size={10} anchor="end" bold />
      <Arrow points={[[260, 238], [260, 272]]} both />
      <Box x={150} y={274} w={220} h={44} lines={["Stored database", "(data on disk)"]} tone="outline" bold />
    </Frame>
  );
}
