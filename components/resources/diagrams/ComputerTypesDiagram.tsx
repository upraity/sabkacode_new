import { Box, Frame, Note } from "./DiagramKit";

const rows = [
  { w: 150, lines: ["Super Computer", "weather, space, research"], tone: "dark" as const },
  { w: 230, lines: ["Mainframe Computer", "banks, airlines, railways"], tone: "dark" as const },
  { w: 310, lines: ["Mini Computer", "small business, labs"], tone: "mid" as const },
  { w: 390, lines: ["Micro Computer", "home, office, school (PC, laptop)"], tone: "light" as const },
];

export function ComputerTypesDiagram() {
  return (
    <Frame w={440} h={272} className="mx-auto w-full max-w-md">
      {rows.map((r, i) => (
        <Box key={r.lines[0]} x={220 - r.w / 2} y={12 + i * 56} w={r.w} h={48} lines={r.lines} tone={r.tone} bold={false} />
      ))}
      <Note x={220} y={245} lines={["Going up: speed, size and cost increase", "Going down: number of machines and users increase"]} size={10} />
    </Frame>
  );
}
