import { Box, Frame, Note } from "./DiagramKit";

const U = 22; // pixels per byte

export function StructVsUnionDiagram() {
  return (
    <Frame w={530} h={210} className="mx-auto w-full max-w-lg">
      <Note x={10} y={16} lines={["struct { int i; float f; char c; }"]} size={11} anchor="start" bold />
      <Box x={100} y={30} w={4 * U} h={40} lines={["i", "4 bytes"]} tone="dark" size={11} rx={0} />
      <Box x={100 + 4 * U} y={30} w={4 * U} h={40} lines={["f", "4 bytes"]} tone="mid" size={11} rx={0} />
      <Box x={100 + 8 * U} y={30} w={U} h={40} lines={["c"]} tone="outline" size={11} rx={0} />
      <Box x={100 + 9 * U} y={30} w={3 * U} h={40} lines={["pad"]} tone="muted" size={10} dashed rx={0} />
      <Note x={10} y={50} lines={["Structure"]} size={11} anchor="start" />
      <Note x={100} y={86} lines={["Each member has its own memory. Size = 4 + 4 + 1 (+ 3 padding) = 12 bytes"]} size={10} anchor="start" />

      <Note x={10} y={118} lines={["union { int i; float f; char c; }"]} size={11} anchor="start" bold />
      <Box x={100} y={132} w={4 * U} h={40} lines={["i / f / c", "share 4 bytes"]} tone="dark" size={11} rx={0} />
      <Note x={10} y={152} lines={["Union"]} size={11} anchor="start" />
      <Note x={100} y={188} lines={["All members share the same memory. Size = largest member = 4 bytes"]} size={10} anchor="start" />
    </Frame>
  );
}
