import { Arrow, Decision, Dot, Frame, IO, Lines, Note, Process, Terminator } from "./DiagramKit";

function Label({ x, y, name, use }: { x: number; y: number; name: string; use: string }) {
  return (
    <g>
      <Lines x={x} y={y - 8} lines={[name]} size={11} bold anchor="start" />
      <Note x={x} y={y + 8} lines={[use]} size={10} anchor="start" />
    </g>
  );
}

export function FlowchartSymbolsDiagram() {
  const ys = [38, 108, 178, 248];
  return (
    <Frame w={500} h={290} className="mx-auto w-full max-w-lg">
      {/* left column */}
      <Terminator cx={62} cy={ys[0]} w={86} h={28} text="Start" />
      <Label x={122} y={ys[0]} name="Terminator" use="Start / Stop" />
      <IO cx={62} cy={ys[1]} w={90} h={30} lines={["Input"]} />
      <Label x={122} y={ys[1]} name="Input / Output" use="READ, PRINT" />
      <Process cx={62} cy={ys[2]} w={86} h={30} lines={["Process"]} />
      <Label x={122} y={ys[2]} name="Process" use="calculation, assignment" />
      <Decision cx={62} cy={ys[3]} w={86} h={48} lines={["?"]} />
      <Label x={122} y={ys[3]} name="Decision" use="Yes / No branch" />

      {/* right column */}
      <Dot cx={295} cy={ys[0]} r={12} text="A" />
      <Label x={348} y={ys[0]} name="Connector" use="joins parts of a chart" />

      <polygon points="260,95 330,95 330,111 295,125 260,111" className="fill-ink-100 stroke-ink-300" strokeWidth={1.5} />
      <Lines x={295} y={107} lines={["Page"]} size={10} />
      <Label x={348} y={ys[1]} name="Off-page connector" use="continues on next page" />

      <rect x={255} y={ys[2] - 15} width={80} height={30} rx={3} className="fill-ink-100 stroke-ink-300" strokeWidth={1.5} />
      <line x1={265} y1={ys[2] - 15} x2={265} y2={ys[2] + 15} className="stroke-ink-300" strokeWidth={1.5} />
      <line x1={325} y1={ys[2] - 15} x2={325} y2={ys[2] + 15} className="stroke-ink-300" strokeWidth={1.5} />
      <Lines x={295} y={ys[2]} lines={["Function"]} size={10} />
      <Label x={348} y={ys[2]} name="Predefined process" use="sub-program / function" />

      <Arrow points={[[255, ys[3]], [335, ys[3]]]} />
      <Label x={348} y={ys[3]} name="Flow line" use="direction of flow" />
    </Frame>
  );
}
