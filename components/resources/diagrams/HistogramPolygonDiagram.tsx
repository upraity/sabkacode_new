import { Frame, Note } from "./DiagramKit";

const f = [5, 8, 15, 16, 6];
const X0 = 60;
const CW = 70;
const BASE = 230;
const U = 12;

export function HistogramPolygonDiagram() {
  const pts = [[X0 - CW / 2, BASE], ...f.map((v, i) => [X0 + CW / 2 + i * CW, BASE - v * U]), [X0 + f.length * CW + CW / 2, BASE]];
  const d = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ");
  return (
    <Frame w={470} h={300} className="mx-auto w-full max-w-lg">
      {/* axes */}
      <line x1={X0} y1={BASE} x2={X0 + f.length * CW + 30} y2={BASE} className="stroke-ink-700" strokeWidth={1.5} />
      <line x1={X0} y1={BASE} x2={X0} y2={26} className="stroke-ink-700" strokeWidth={1.5} />
      {[0, 4, 8, 12, 16].map((t) => (
        <g key={t}>
          <line x1={X0 - 4} y1={BASE - t * U} x2={X0} y2={BASE - t * U} className="stroke-ink-700" />
          <Note x={X0 - 8} y={BASE - t * U} lines={[String(t)]} size={10} anchor="end" />
        </g>
      ))}
      {/* bars */}
      {f.map((v, i) => (
        <rect key={i} x={X0 + i * CW} y={BASE - v * U} width={CW} height={v * U} className="fill-ink-100 stroke-brand-600" strokeWidth={1.5} />
      ))}
      {/* polygon */}
      <path d={d} fill="none" className="stroke-brand-800" strokeWidth={2} />
      {pts.slice(1, -1).map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={3.5} className="fill-brand-800" />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <Note key={i} x={X0 + i * CW} y={BASE + 14} lines={[String(i * 10)]} size={10} />
      ))}
      {f.map((v, i) => (
        <Note key={"v" + i} x={X0 + i * CW + CW / 2} y={BASE - v * U - 9} lines={[String(v)]} size={10} bold />
      ))}
      <Note x={X0 + (f.length * CW) / 2} y={BASE + 34} lines={["Marks (class intervals)"]} size={11} bold />
      <Note x={10} y={16} lines={["Frequency"]} size={11} anchor="start" bold />
      <Note x={X0 + (f.length * CW) / 2} y={288} lines={["Bars = histogram   |   Line joining the mid-points = frequency polygon"]} size={10} />
    </Frame>
  );
}
