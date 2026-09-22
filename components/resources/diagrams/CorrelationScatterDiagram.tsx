import { Arrow, Frame, Note } from "./DiagramKit";

const data = [
  { t: "Positive correlation", pts: [[10, 15], [20, 28], [30, 25], [40, 45], [50, 48], [60, 62], [70, 66], [80, 85], [90, 88]], line: [[5, 10], [95, 92]] as [number, number][] },
  { t: "Negative correlation", pts: [[10, 88], [20, 80], [30, 72], [40, 60], [50, 55], [60, 40], [70, 35], [80, 22], [90, 12]], line: [[5, 92], [95, 8]] as [number, number][] },
  { t: "Zero correlation", pts: [[15, 50], [25, 80], [35, 20], [45, 65], [55, 35], [65, 75], [75, 25], [85, 55], [30, 45]], line: null },
];

export function CorrelationScatterDiagram() {
  return (
    <Frame w={560} h={190} className="mx-auto w-full max-w-lg">
      {data.map((d, k) => {
        const x0 = 24 + k * 180;
        const sx = (v: number) => x0 + v * 1.4;
        const sy = (v: number) => 138 - v * 1.15;
        return (
          <g key={d.t}>
            <Arrow points={[[x0, 140], [x0 + 145, 140]]} />
            <Arrow points={[[x0, 140], [x0, 14]]} />
            {d.line && <Arrow points={d.line.map(([a, b]) => [sx(a), sy(b)] as [number, number])} head={false} dashed />}
            {d.pts.map(([a, b], i) => (
              <circle key={i} cx={sx(a)} cy={sy(b)} r={3.6} className="fill-brand-700" />
            ))}
            <Note x={x0 + 72} y={162} lines={[d.t]} size={11} bold />
            <Note x={x0 + 148} y={148} lines={["X"]} size={10} />
            <Note x={x0 - 8} y={12} lines={["Y"]} size={10} />
          </g>
        );
      })}
    </Frame>
  );
}
