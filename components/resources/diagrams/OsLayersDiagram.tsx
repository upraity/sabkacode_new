import { Arrow, Box, Frame } from "./DiagramKit";

const layers = [
  { lines: ["User"], tone: "light" as const },
  { lines: ["Application Programs", "(Word, Browser, Games, Compilers)"], tone: "outline" as const },
  { lines: ["Operating System", "(Kernel + Shell / GUI)"], tone: "dark" as const },
  { lines: ["Computer Hardware", "(CPU, Memory, I/O devices)"], tone: "muted" as const },
];

export function OsLayersDiagram() {
  return (
    <Frame w={420} h={280} className="mx-auto w-full max-w-sm">
      {layers.map((l, i) => (
        <g key={l.lines[0]}>
          <Box x={50} y={10 + i * 72} w={320} h={44} lines={l.lines} tone={l.tone} bold={i === 2} />
          {i < layers.length - 1 && <Arrow points={[[210, 54 + i * 72], [210, 82 + i * 72]]} both />}
        </g>
      ))}
    </Frame>
  );
}
