import { Arrow, Box, Frame, Lines } from "./DiagramKit";

const src = ["Family", "Religion and spirituality", "Education", "Culture and society", "Peers and media", "Personal experience"];

export function ValuesSourcesDiagram() {
  const cx = 250;
  const cy = 150;
  const pos = src.map((_, i) => {
    const a = ((-90 + (i * 360) / src.length) * Math.PI) / 180;
    return [cx + 180 * Math.cos(a), cy + 108 * Math.sin(a)] as [number, number];
  });
  return (
    <Frame w={500} h={300} className="mx-auto w-full max-w-lg">
      {pos.map(([x, y], i) => (
        <Arrow key={"l" + i} points={[[x, y], [cx, cy]]} head />
      ))}
      {pos.map(([x, y], i) => (
        <Box key={src[i]} x={x - 72} y={y - 16} w={144} h={32} lines={[src[i]]} tone={i % 2 ? "outline" : "mid"} size={10} bold />
      ))}
      <circle cx={cx} cy={cy} r={38} className="fill-brand-800 stroke-brand-800" />
      <Lines x={cx} y={cy} lines={["Our", "Values"]} size={12} bold fill="fill-white" />
    </Frame>
  );
}
