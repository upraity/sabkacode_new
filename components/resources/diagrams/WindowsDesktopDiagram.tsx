import { Box, Dot, Frame, Lines, Note } from "./DiagramKit";

const icons = [
  { y: 24, name: "This PC" },
  { y: 74, name: "Recycle Bin" },
  { y: 124, name: "Folder" },
];

export function WindowsDesktopDiagram() {
  return (
    <Frame w={470} h={330} className="mx-auto w-full max-w-lg">
      {/* screen */}
      <rect x={10} y={10} width={450} height={250} rx={8} className="fill-ink-100 stroke-ink-400" strokeWidth={2} />
      {/* icons */}
      {icons.map((ic) => (
        <g key={ic.name}>
          <rect x={26} y={ic.y} width={26} height={26} rx={4} className="fill-brand-500 stroke-brand-700" strokeWidth={1.5} />
          <Note x={39} y={ic.y + 38} lines={[ic.name]} size={10} />
        </g>
      ))}
      {/* an open window */}
      <rect x={140} y={34} width={230} height={130} rx={4} className="fill-white stroke-ink-500" strokeWidth={1.5} />
      <rect x={140} y={34} width={230} height={20} rx={4} className="fill-brand-700" />
      <Lines x={150} y={44} lines={["Untitled - Notepad"]} size={10} fill="fill-white" anchor="start" />
      <Lines x={340} y={44} lines={["–   □   ×"]} size={10} fill="fill-white" anchor="middle" />
      <line x1={152} y1={78} x2={340} y2={78} className="stroke-ink-300" strokeWidth={2} />
      <line x1={152} y1={94} x2={310} y2={94} className="stroke-ink-300" strokeWidth={2} />
      <line x1={152} y1={110} x2={330} y2={110} className="stroke-ink-300" strokeWidth={2} />

      {/* taskbar */}
      <path d="M 10 228 H 460 V 252 Q 460 260 452 260 H 18 Q 10 260 10 252 Z" className="fill-ink-800" />
      <Box x={16} y={232} w={54} h={24} lines={["Start"]} tone="mid" bold rx={4} />
      <Box x={80} y={232} w={64} h={24} lines={["Notepad"]} tone="light" size={10} rx={3} />
      <Box x={150} y={232} w={64} h={24} lines={["Chrome"]} tone="light" size={10} rx={3} />
      <Lines x={432} y={244} lines={["10:30 AM"]} size={10} fill="fill-white" anchor="end" />

      {/* numbered markers */}
      <Dot cx={62} cy={44} text="1" />
      <Dot cx={100} cy={200} text="2" />
      <Dot cx={388} cy={96} text="3" />
      <Dot cx={30} cy={216} text="4" />
      <Dot cx={262} cy={244} text="5" />
      <Dot cx={392} cy={216} text="6" />
      <Note x={12} y={282} lines={["1  Icons"]} size={11} anchor="start" pre />
      <Note x={170} y={282} lines={["2  Desktop (wallpaper)"]} size={11} anchor="start" pre />
      <Note x={330} y={282} lines={["3  Open window"]} size={11} anchor="start" pre />
      <Note x={12} y={302} lines={["4  Start button"]} size={11} anchor="start" pre />
      <Note x={170} y={302} lines={["5  Taskbar (task buttons)"]} size={11} anchor="start" pre />
      <Note x={330} y={302} lines={["6  Notification area"]} size={11} anchor="start" pre />
    </Frame>
  );
}
