import { Arrow, Box, Frame, Lines } from "./DiagramKit";

const cs = ["Completeness", "Conciseness", "Consideration", "Concreteness", "Clarity", "Courtesy", "Correctness"];

export function SevenCsDiagram() {
  const cx = 240;
  const cy = 165;
  return (
    <Frame w={480} h={330} className="mx-auto w-full max-w-md">
      {cs.map((c, i) => {
        const a = ((-90 + (i * 360) / cs.length) * Math.PI) / 180;
        const x = cx + 178 * Math.cos(a);
        const y = cy + 118 * Math.sin(a);
        return <Arrow key={c} points={[[cx, cy], [x, y]]} head={false} />;
      })}
      {cs.map((c, i) => {
        const a = ((-90 + (i * 360) / cs.length) * Math.PI) / 180;
        const x = cx + 178 * Math.cos(a);
        const y = cy + 118 * Math.sin(a);
        return <Box key={c} x={x - 56} y={y - 15} w={112} h={30} lines={[c]} tone={i % 2 ? "outline" : "mid"} bold />;
      })}
      <circle cx={cx} cy={cy} r={46} className="fill-brand-800 stroke-brand-800" />
      <Lines x={cx} y={cy} lines={["Effective", "communication"]} size={10} bold fill="fill-white" />
    </Frame>
  );
}
