import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function FunctionCallFlowDiagram() {
  return (
    <Frame w={470} h={250} className="mx-auto w-full max-w-md">
      {/* main() */}
      <rect x={10} y={14} width={190} height={196} rx={6} className="fill-white stroke-ink-400" strokeWidth={1.5} strokeDasharray="5 3" />
      <Note x={20} y={28} lines={["main()"]} size={12} anchor="start" bold />
      <Box x={24} y={42} w={162} h={24} lines={["int a = 5, b = 7, s;"]} tone="light" size={10} rx={3} />
      <Box x={24} y={80} w={162} h={28} lines={["s = add(a, b);"]} tone="dark" size={11} bold rx={3} />
      <Box x={24} y={122} w={162} h={24} lines={["printf(\"%d\", s);"]} tone="light" size={10} rx={3} />
      <Box x={24} y={160} w={162} h={24} lines={["return 0;"]} tone="light" size={10} rx={3} />
      <Arrow points={[[105, 66], [105, 80]]} />
      <Arrow points={[[105, 108], [105, 122]]} />
      <Arrow points={[[105, 146], [105, 160]]} />

      {/* add() */}
      <rect x={280} y={54} width={180} height={110} rx={6} className="fill-white stroke-ink-400" strokeWidth={1.5} strokeDasharray="5 3" />
      <Note x={290} y={68} lines={["add()"]} size={12} anchor="start" bold />
      <Box x={294} y={80} w={152} h={30} lines={["int add(int x, int y)"]} tone="light" size={10} rx={3} />
      <Box x={294} y={120} w={152} h={30} lines={["return x + y;"]} tone="mid" size={11} bold rx={3} />
      <Arrow points={[[370, 110], [370, 120]]} />

      {/* call and return */}
      <Arrow points={[[186, 94], [280, 94]]} />
      <Note x={233} y={72} lines={["1. call with", "arguments a, b"]} size={10} />
      <Arrow points={[[280, 140], [232, 140], [232, 102], [190, 102]]} />
      <Note x={240} y={164} lines={["2. return", "value 12"]} size={10} />
      <Note x={235} y={232} lines={["Actual arguments (a, b) are copied to formal arguments (x, y)"]} size={10} />
    </Frame>
  );
}
