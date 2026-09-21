import { Arrow, Box, Frame, Note } from "./DiagramKit";

const data = [
  [1, 2, 3],
  [4, 5, 6],
];

export function ArrayMemory2dDiagram() {
  return (
    <Frame w={480} h={250} className="mx-auto w-full max-w-lg">
      <Note x={240} y={12} lines={["int m[2][3] = { {1, 2, 3}, {4, 5, 6} };"]} size={11} bold />
      {/* logical view */}
      {[0, 1, 2].map((j) => (
        <Note key={j} x={158 + j * 56 + 28} y={34} lines={[`col ${j}`]} size={10} />
      ))}
      {data.map((row, i) => (
        <g key={i}>
          <Note x={130} y={62 + i * 38} lines={[`row ${i}`]} size={10} anchor="end" />
          {row.map((v, j) => (
            <Box key={j} x={158 + j * 56} y={46 + i * 38} w={56} h={34} lines={[String(v)]} tone={i === 0 ? "dark" : "outline"} size={12} rx={0} />
          ))}
        </g>
      ))}
      <Arrow points={[[240, 126], [240, 146]]} />
      <Note x={250} y={138} lines={["stored row by row (row-major order)"]} size={10} anchor="start" />
      {/* linear memory */}
      {[1, 2, 3, 4, 5, 6].map((v, k) => {
        const i = Math.floor(k / 3);
        const j = k % 3;
        return (
          <g key={k}>
            <Box x={60 + k * 60} y={152} w={60} h={34} lines={[String(v)]} tone={i === 0 ? "dark" : "outline"} size={12} rx={0} />
            <Note x={90 + k * 60} y={198} lines={[`m[${i}][${j}]`]} size={10} />
            <Note x={90 + k * 60} y={214} lines={[String(2000 + k * 4)]} size={10} />
          </g>
        );
      })}
      <Note x={30} y={214} lines={["Address"]} size={10} anchor="middle" />
      <Note x={240} y={240} lines={["Address of m[i][j] = Base + (i × columns + j) × size"]} size={10} />
    </Frame>
  );
}
