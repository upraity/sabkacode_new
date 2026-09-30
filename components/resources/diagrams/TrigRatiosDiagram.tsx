import { Frame, Lines, Note } from "./DiagramKit";

export function TrigRatiosDiagram() {
  return (
    <Frame w={380} h={230} className="mx-auto w-full max-w-sm">
      <polygon points="30,190 270,190 270,40" className="fill-white stroke-brand-600" strokeWidth={1.5} />
      <polyline points="252,190 252,172 270,172" className="fill-none stroke-ink-500" strokeWidth={1.2} />
      <Lines x={150} y={210} lines={["Base (B)"]} size={11} bold />
      <Note x={40} y={110} lines={["Hypotenuse", "(H)"]} size={11} anchor="start" bold />
      <Note x={280} y={115} lines={["Perpendicular", "(P)"]} size={11} anchor="start" bold />
      <Note x={48} y={178} lines={["θ"]} size={13} bold />
      <Note x={150} y={20} lines={["sin θ = P/H", "cos θ = B/H", "tan θ = P/B"]} size={11} bold />
    </Frame>
  );
}
