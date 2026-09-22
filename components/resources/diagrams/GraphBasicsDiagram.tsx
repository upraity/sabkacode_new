import { Arrow, Frame, Lines, Note } from "./DiagramKit";

const v: Record<string, [number, number]> = { A: [50, 50], B: [50, 150], C: [140, 100], D: [230, 100], E: [310, 100] };
const edges: [string, string][] = [["A", "B"], ["A", "C"], ["B", "C"], ["C", "D"], ["D", "E"]];
const deg: Record<string, number> = { A: 2, B: 2, C: 3, D: 2, E: 1 };
const names = ["A", "B", "C", "D", "E"];
const M = [
  [0, 1, 1, 0, 0],
  [1, 0, 1, 0, 0],
  [1, 1, 0, 1, 0],
  [0, 0, 1, 0, 1],
  [0, 0, 0, 1, 0],
];

export function GraphBasicsDiagram() {
  return (
    <Frame w={580} h={214} className="mx-auto w-full max-w-lg">
      {edges.map(([a, b]) => (
        <Arrow key={a + b} points={[v[a], v[b]]} head={false} />
      ))}
      {names.map((n) => (
        <g key={n}>
          <circle cx={v[n][0]} cy={v[n][1]} r={17} className="fill-brand-600 stroke-brand-800" strokeWidth={1.5} />
          <Lines x={v[n][0]} y={v[n][1]} lines={[n]} size={12} bold fill="fill-white" />
          <Note x={v[n][0]} y={v[n][1] + 30} lines={[`deg ${deg[n]}`]} size={10} />
        </g>
      ))}
      <Note x={180} y={204} lines={["Graph: V = {A, B, C, D, E}, E = {AB, AC, BC, CD, DE}"]} size={10} />
      {/* adjacency matrix */}
      <Note x={455} y={14} lines={["Adjacency matrix"]} size={11} bold />
      {names.map((n, j) => (
        <Note key={"h" + n} x={402 + j * 30} y={34} lines={[n]} size={10} bold />
      ))}
      {M.map((row, i) => (
        <g key={i}>
          <Note x={368} y={54 + i * 26} lines={[names[i]]} size={10} bold />
          {row.map((c, j) => (
            <g key={j}>
              <rect x={388 + j * 30} y={42 + i * 26} width={28} height={24} className={c ? "fill-brand-500 stroke-brand-700" : "fill-white stroke-ink-300"} strokeWidth={1} />
              <Lines x={402 + j * 30} y={54 + i * 26} lines={[String(c)]} size={11} fill={c ? "fill-white" : "fill-ink-700"} />
            </g>
          ))}
        </g>
      ))}
    </Frame>
  );
}
