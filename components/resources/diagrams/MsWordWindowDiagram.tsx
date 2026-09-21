import { Arrow, Frame, Lines, Note } from "./DiagramKit";

const labels = [
  { y: 21, lines: ["Title bar +", "Quick Access"] },
  { y: 43, lines: ["Ribbon tabs"] },
  { y: 78, lines: ["Ribbon groups"] },
  { y: 108, lines: ["Ruler"] },
  { y: 195, lines: ["Document", "(editing) area"] },
  { y: 291, lines: ["Status bar", "+ Zoom"] },
];

const groups = ["Clipboard", "Font", "Paragraph", "Styles"];

export function MsWordWindowDiagram() {
  return (
    <Frame w={575} h={318} className="mx-auto w-full max-w-lg">
      <rect x={10} y={10} width={410} height={298} rx={5} className="fill-white stroke-ink-500" strokeWidth={1.5} />
      {/* title bar */}
      <rect x={10} y={10} width={410} height={22} rx={5} className="fill-brand-700" />
      <Lines x={20} y={21} lines={["Save   Undo   Redo"]} size={10} fill="fill-white" anchor="start" pre />
      <Lines x={215} y={21} lines={["Document1 - Word"]} size={10} fill="fill-white" />
      {/* tabs */}
      <rect x={10} y={32} width={410} height={22} className="fill-ink-100" />
      <Lines x={20} y={43} lines={["File    Home    Insert    Layout    References    Review    View"]} size={10} fill="fill-ink-800" anchor="start" pre />
      {/* ribbon */}
      <rect x={10} y={54} width={410} height={50} className="fill-white stroke-ink-300" />
      {groups.map((g, i) => (
        <g key={g}>
          {i > 0 && <line x1={10 + i * 102.5} y1={58} x2={10 + i * 102.5} y2={100} className="stroke-ink-300" />}
          <rect x={20 + i * 102.5} y={60} width={16} height={16} rx={2} className="fill-brand-500" />
          <rect x={42 + i * 102.5} y={60} width={16} height={16} rx={2} className="fill-ink-300" />
          <rect x={64 + i * 102.5} y={60} width={16} height={16} rx={2} className="fill-ink-300" />
          <Note x={10 + i * 102.5 + 51} y={92} lines={[g]} size={10} />
        </g>
      ))}
      {/* ruler */}
      <rect x={10} y={104} width={410} height={12} className="fill-ink-100 stroke-ink-300" />
      {Array.from({ length: 16 }).map((_, i) => (
        <line key={i} x1={110 + i * 12} y1={107} x2={110 + i * 12} y2={113} className="stroke-ink-400" />
      ))}
      {/* document area */}
      <rect x={10} y={116} width={410} height={172} className="fill-ink-100" />
      <rect x={100} y={122} width={230} height={160} className="fill-white stroke-ink-300" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={i} x1={116} y1={142 + i * 20} x2={314 - (i % 3) * 30} y2={142 + i * 20} className="stroke-ink-300" strokeWidth={2} />
      ))}
      <line x1={116} y1={134} x2={116} y2={148} className="stroke-brand-600" strokeWidth={2} />
      {/* status bar */}
      <rect x={10} y={288} width={410} height={20} className="fill-ink-100 stroke-ink-300" />
      <Lines x={20} y={298} lines={["Page 1 of 1      120 words      English"]} size={10} fill="fill-ink-700" anchor="start" pre />
      <Lines x={410} y={298} lines={["–  ——●——  +   100%"]} size={10} fill="fill-ink-700" anchor="end" pre />

      {labels.map((l) => (
        <g key={l.lines[0]}>
          <Arrow points={[[448, l.y], [424, l.y]]} />
          <Note x={454} y={l.y} lines={l.lines} size={11} anchor="start" />
        </g>
      ))}
    </Frame>
  );
}
