import { Lines, Frame, Note } from "./DiagramKit";

const cx = 230;
const hw = (y: number) => 22 + (y - 10) * 0.6;
const tiers = [
  { y1: 10, y2: 56, lines: ["Self-", "actualisation"], cls: "fill-brand-800" },
  { y1: 56, y2: 102, lines: ["Esteem needs"], cls: "fill-brand-700" },
  { y1: 102, y2: 148, lines: ["Social (belonging) needs"], cls: "fill-brand-600" },
  { y1: 148, y2: 194, lines: ["Safety and security needs"], cls: "fill-brand-500" },
  { y1: 194, y2: 240, lines: ["Physiological needs"], cls: "fill-ink-100" },
];
export function MaslowHierarchyMgmtDiagram() {
  return (
    <Frame w={460} h={264} className="mx-auto w-full max-w-md">
      {tiers.map((t) => {
        const pts = `${cx - hw(t.y1)},${t.y1} ${cx + hw(t.y1)},${t.y1} ${cx + hw(t.y2)},${t.y2} ${cx - hw(t.y2)},${t.y2}`;
        return (
          <g key={t.lines[0]}>
            <polygon points={pts} className={t.cls + " stroke-brand-800"} strokeWidth={1.5} />
            <Lines x={cx} y={(t.y1 + t.y2) / 2} lines={t.lines} size={11} bold fill={t.cls === "fill-ink-100" ? "fill-ink-800" : "fill-white"} />
          </g>
        );
      })}
      <Note x={cx} y={254} lines={["Lower needs must be satisfied before higher needs motivate"]} size={10} />
    </Frame>
  );
}
