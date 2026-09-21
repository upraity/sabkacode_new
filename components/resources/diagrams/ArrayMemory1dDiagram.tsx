import { Box, Frame, Note } from "./DiagramKit";

const vals = [10, 20, 30, 40, 50];

export function ArrayMemory1dDiagram() {
  return (
    <Frame w={470} h={200} className="mx-auto w-full max-w-md">
      <Note x={235} y={14} lines={["int a[5] = {10, 20, 30, 40, 50};"]} size={11} bold />
      <Note x={34} y={52} lines={["Address"]} size={10} anchor="middle" />
      {vals.map((v, i) => (
        <g key={i}>
          <Note x={105 + i * 70} y={52} lines={[String(1000 + i * 4)]} size={10} />
          <Box x={70 + i * 70} y={64} w={70} h={42} lines={[String(v)]} tone={i === 0 ? "dark" : "light"} size={12} rx={0} />
          <Note x={105 + i * 70} y={122} lines={[`a[${i}]`]} size={11} bold />
        </g>
      ))}
      <Note x={235} y={152} lines={["Elements are stored in adjacent memory locations (int = 4 bytes)"]} size={10} />
      <Note x={235} y={172} lines={["Address of a[i] = Base address + i × size  →  a[3] = 1000 + 3 × 4 = 1012"]} size={10} />
    </Frame>
  );
}
