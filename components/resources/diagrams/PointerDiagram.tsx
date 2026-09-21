import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function PointerDiagram() {
  return (
    <Frame w={470} h={200} className="mx-auto w-full max-w-md">
      <Note x={235} y={14} lines={["int a = 10;      int *p = &a;"]} size={11} bold />

      <Note x={90} y={44} lines={["variable  a"]} size={10} bold />
      <Box x={30} y={54} w={120} h={46} lines={["10"]} tone="dark" size={12} />
      <Note x={90} y={116} lines={["address 1000"]} size={10} />

      <Note x={380} y={44} lines={["pointer  p"]} size={10} bold />
      <Box x={320} y={54} w={120} h={46} lines={["1000"]} tone="mid" size={12} />
      <Note x={380} y={116} lines={["address 2000"]} size={10} />

      <Arrow points={[[320, 77], [152, 77]]} />
      <Note x={236} y={68} lines={["points to"]} size={10} />

      <Note x={235} y={150} lines={["p holds the address of a  →  p = 1000"]} size={10} />
      <Note x={235} y={170} lines={["*p means the value at that address  →  *p = 10"]} size={10} />
    </Frame>
  );
}
