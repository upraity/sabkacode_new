import { Arrow, Frame, Lines, Note } from "./DiagramKit";

const labels = [
  { y: 23, lines: ["Title bar with", "Min / Max / Close"] },
  { y: 47, lines: ["Menu bar"] },
  { y: 70, lines: ["Toolbar"] },
  { y: 150, lines: ["Work area"] },
  { y: 200, lines: ["Scroll bar"] },
  { y: 266, lines: ["Status bar"] },
];

export function WindowAnatomyDiagram() {
  return (
    <Frame w={575} h={292} className="mx-auto w-full max-w-lg">
      <rect x={10} y={10} width={410} height={272} rx={5} className="fill-white stroke-ink-500" strokeWidth={1.5} />
      {/* title bar */}
      <rect x={10} y={10} width={410} height={26} rx={5} className="fill-brand-700" />
      <Lines x={22} y={23} lines={["Untitled - Notepad"]} size={11} fill="fill-white" anchor="start" />
      <Lines x={382} y={23} lines={["–    □    ×"]} size={11} fill="fill-white" pre />
      {/* menu bar */}
      <rect x={10} y={36} width={410} height={22} className="fill-ink-100" />
      <Lines x={22} y={47} lines={["File     Edit     Format     View     Help"]} size={10} fill="fill-ink-700" anchor="start" pre />
      {/* toolbar */}
      <rect x={10} y={58} width={410} height={24} className="fill-white stroke-ink-100" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={20 + i * 30} y={63} width={20} height={14} rx={2} className="fill-ink-100 stroke-ink-300" />
      ))}
      {/* work area */}
      <line x1={26} y1={104} x2={330} y2={104} className="stroke-ink-300" strokeWidth={2} />
      <line x1={26} y1={124} x2={280} y2={124} className="stroke-ink-300" strokeWidth={2} />
      <line x1={26} y1={144} x2={310} y2={144} className="stroke-ink-300" strokeWidth={2} />
      <line x1={26} y1={164} x2={240} y2={164} className="stroke-ink-300" strokeWidth={2} />
      <line x1={244} y1={158} x2={244} y2={170} className="stroke-brand-600" strokeWidth={2} />
      {/* vertical scroll bar */}
      <rect x={396} y={82} width={24} height={172} className="fill-ink-100 stroke-ink-300" />
      <rect x={399} y={90} width={18} height={60} rx={3} className="fill-ink-400" />
      {/* status bar */}
      <rect x={10} y={254} width={410} height={28} className="fill-ink-100 stroke-ink-300" />
      <Lines x={22} y={268} lines={["Ln 4, Col 12          100%          Windows (CRLF)"]} size={10} fill="fill-ink-700" anchor="start" pre />

      {labels.map((l) => (
        <g key={l.lines[0]}>
          <Arrow points={[[448, l.y], [424, l.y]]} />
          <Note x={454} y={l.y} lines={l.lines} size={11} anchor="start" />
        </g>
      ))}
    </Frame>
  );
}
