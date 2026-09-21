import { Lines, Note } from "./DiagramKit";
import { Frame } from "./DiagramKit";

const cx = 230;
const hw = (y: number) => 22 + (y - 10) * 0.72;
const tiers = [
  { y1: 10, y2: 72, lines: ["Registers", "inside CPU"], cls: "fill-brand-800 stroke-brand-800", text: "fill-white" },
  { y1: 72, y2: 134, lines: ["Cache Memory", "SRAM"], cls: "fill-brand-700 stroke-brand-800", text: "fill-white" },
  { y1: 134, y2: 196, lines: ["Main Memory", "RAM, ROM"], cls: "fill-brand-600 stroke-brand-700", text: "fill-white" },
  { y1: 196, y2: 258, lines: ["Secondary Storage", "hard disk, CD/DVD, pen drive"], cls: "fill-ink-100 stroke-ink-300", text: "fill-ink-800" },
];

export function MemoryHierarchyDiagram() {
  return (
    <Frame w={460} h={286} className="mx-auto w-full max-w-md">
      {tiers.map((t) => {
        const pts = `${cx - hw(t.y1)},${t.y1} ${cx + hw(t.y1)},${t.y1} ${cx + hw(t.y2)},${t.y2} ${cx - hw(t.y2)},${t.y2}`;
        return (
          <g key={t.lines[0]}>
            <polygon points={pts} className={t.cls} strokeWidth={1.5} />
            <Lines x={cx} y={(t.y1 + t.y2) / 2} lines={t.lines} fill={t.text} />
          </g>
        );
      })}
      <Note x={cx} y={274} lines={["Going down: capacity increases, cost per byte and speed decrease"]} size={10} />
    </Frame>
  );
}
