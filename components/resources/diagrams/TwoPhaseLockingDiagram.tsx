import { Arrow, Frame, Note } from "./DiagramKit";

export function TwoPhaseLockingDiagram() {
  return (
    <Frame w={480} h={276} className="mx-auto w-full max-w-md">
      <Arrow points={[[50, 200], [450, 200]]} />
      <Arrow points={[[50, 200], [50, 20]]} />
      <Note x={455} y={214} lines={["Time"]} size={10} anchor="end" />
      <Note x={56} y={14} lines={["Number of locks held"]} size={10} anchor="start" />
      <rect x={50} y={50} width={160} height={150} className="fill-ink-100" opacity={0.7} />
      <rect x={210} y={50} width={200} height={150} className="fill-white stroke-ink-100" />
      <path d="M 50 200 L 90 165 L 90 135 L 130 105 L 130 80 L 210 50 L 250 50 L 250 80 L 300 105 L 300 140 L 350 170 L 410 200" fill="none" className="stroke-brand-700" strokeWidth={2.5} />
      <line x1={210} y1={50} x2={210} y2={200} className="stroke-ink-500" strokeWidth={1.2} strokeDasharray="4 3" />
      <Note x={130} y={222} lines={["Growing phase", "(only lock requests)"]} size={10} bold />
      <Note x={310} y={222} lines={["Shrinking phase", "(only unlocks)"]} size={10} bold />
      <Note x={210} y={40} lines={["Lock point"]} size={10} bold />
      <path d="M 410 50 L 410 200" fill="none" className="stroke-ink-500" strokeWidth={1.5} strokeDasharray="3 3" />
      <Note x={240} y={266} lines={["Dashed line at the right: strict 2PL releases all its exclusive locks together at commit"]} size={10} />
    </Frame>
  );
}
