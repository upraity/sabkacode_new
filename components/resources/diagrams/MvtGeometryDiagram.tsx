import { Arrow, Frame, Note } from "./DiagramKit";

export function MvtGeometryDiagram() {
  return (
    <Frame w={380} h={220} className="mx-auto w-full max-w-sm">
      <path d="M 30 180 Q 120 20 200 90 T 340 40" fill="none" className="stroke-brand-700" strokeWidth={2.5} />
      <circle cx={30} cy={180} r={5} className="fill-ink-800" />
      <circle cx={340} cy={40} r={5} className="fill-ink-800" />
      <circle cx={190} cy={83} r={5} className="fill-brand-700" />
      <line x1={30} y1={180} x2={340} y2={40} className="stroke-ink-500" strokeWidth={1.5} strokeDasharray="5 3" />
      <line x1={140} y1={110} x2={240} y2={55} className="stroke-brand-800" strokeWidth={2} />
      <Note x={20} y={196} lines={["A (a, f(a))"]} size={10} anchor="start" />
      <Note x={300} y={26} lines={["B (b, f(b))"]} size={10} anchor="start" />
      <Note x={195} y={70} lines={["C (c, f(c))"]} size={10} />
      <Note x={190} y={205} lines={["Tangent at C is parallel to chord AB"]} size={11} bold />
    </Frame>
  );
}
