import { Arrow, Decision, Frame, Process, Terminator, Note } from "./DiagramKit";

export default function PythonControlFlowDiagram() {
  return (
    <Frame w={520} h={330} className="mx-auto w-full max-w-lg">
      <Terminator cx={260} cy={28} text="Start" w={90} />
      <Arrow points={[[260, 42], [260, 78]]} />
      <Decision cx={260} cy={112} lines={["condition?"]} w={150} h={58} />
      <Arrow points={[[185, 112], [105, 112], [105, 164]]} />
      <Note x={125} y={102} lines={["False"]} size={10} />
      <Process cx={105} cy={195} lines={["else block"]} w={120} />
      <Arrow points={[[335, 112], [415, 112], [415, 164]]} />
      <Note x={395} y={102} lines={["True"]} size={10} />
      <Process cx={415} cy={195} lines={["if block"]} w={120} />
      <Arrow points={[[105, 210], [105, 250], [260, 250]]} />
      <Arrow points={[[415, 210], [415, 250], [260, 250]]} />
      <Arrow points={[[260, 250], [260, 282]]} />
      <Terminator cx={260} cy={304} text="End" w={90} />
    </Frame>
  );
}
