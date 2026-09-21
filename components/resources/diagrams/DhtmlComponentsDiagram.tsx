import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export function DhtmlComponentsDiagram() {
  const items = [
    { x: 10, y: 10, l: ["HTML", "structure and content"] },
    { x: 250, y: 10, l: ["CSS", "style and positioning"] },
    { x: 10, y: 150, l: ["JavaScript", "behaviour and events"] },
    { x: 250, y: 150, l: ["DOM", "access to every element"] },
  ];
  return (
    <Frame w={410} h={220} className="mx-auto w-full max-w-md">
      {items.map((it) => (
        <Arrow key={it.l[0]} points={[[it.x + 75, it.y + 30], [205, 110]]} head={false} />
      ))}
      {items.map((it) => (
        <Box key={it.l[0]} x={it.x} y={it.y} w={150} h={60} lines={it.l} tone="outline" size={10} />
      ))}
      <circle cx={205} cy={110} r={38} className="fill-brand-800 stroke-brand-800" />
      <Lines x={205} y={110} lines={["DHTML"]} size={12} bold fill="fill-white" />
    </Frame>
  );
}
