import { Arrow, Frame, Note } from "./DiagramKit";

type Panel = { title: string; x: string[]; y: string[]; map: [number, number][] };
const panels: Panel[] = [
  { title: "One-one and into", x: ["1", "2", "3"], y: ["a", "b", "c", "d"], map: [[0, 0], [1, 1], [2, 2]] },
  { title: "Many-one and onto", x: ["1", "2", "3"], y: ["a", "b"], map: [[0, 0], [1, 0], [2, 1]] },
  { title: "One-one and onto (bijective)", x: ["1", "2", "3"], y: ["a", "b", "c"], map: [[0, 1], [1, 2], [2, 0]] },
  { title: "Many-one and into", x: ["1", "2", "3"], y: ["a", "b", "c"], map: [[0, 0], [1, 0], [2, 1]] },
];

function yPos(i: number, n: number, top: number, h: number) {
  return top + (h / (n + 1)) * (i + 1);
}

export function FunctionTypesDiagram() {
  return (
    <Frame w={540} h={300} className="mx-auto w-full max-w-lg">
      {panels.map((p, k) => {
        const x0 = 10 + (k % 2) * 270;
        const y0 = 8 + Math.floor(k / 2) * 150;
        return (
          <g key={p.title}>
            <ellipse cx={x0 + 50} cy={y0 + 55} rx={32} ry={52} className="fill-ink-100 stroke-ink-400" strokeWidth={1.5} />
            <ellipse cx={x0 + 190} cy={y0 + 55} rx={32} ry={52} className="fill-ink-100 stroke-ink-400" strokeWidth={1.5} />
            <Note x={x0 + 50} y={y0 - 2} lines={["X"]} size={11} bold />
            <Note x={x0 + 190} y={y0 - 2} lines={["Y"]} size={11} bold />
            {p.map.map(([a, b]) => (
              <Arrow key={a + "-" + b} points={[[x0 + 60, yPos(a, p.x.length, y0 + 5, 100)], [x0 + 169, yPos(b, p.y.length, y0 + 5, 100)]]} />
            ))}
            {p.x.map((v, i) => (
              <Note key={"x" + v} x={x0 + 46} y={yPos(i, p.x.length, y0 + 5, 100)} lines={[v]} size={11} bold />
            ))}
            {p.y.map((v, i) => (
              <Note key={"y" + v} x={x0 + 194} y={yPos(i, p.y.length, y0 + 5, 100)} lines={[v]} size={11} bold />
            ))}
            <Note x={x0 + 120} y={y0 + 128} lines={[p.title]} size={11} bold />
          </g>
        );
      })}
    </Frame>
  );
}
