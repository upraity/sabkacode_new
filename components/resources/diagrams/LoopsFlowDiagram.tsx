import { Arrow, Decision, Dot, Frame, Note, Process } from "./DiagramKit";

export function LoopsFlowDiagram() {
  return (
    <Frame w={480} h={262} className="mx-auto w-full max-w-lg">
      {/* while / for : entry controlled */}
      <Process cx={100} cy={20} w={110} h={26} lines={["Initialise"]} size={10} />
      <Arrow points={[[100, 33], [100, 62]]} />
      <Decision cx={100} cy={88} w={110} h={52} lines={["Condition ?"]} size={10} />
      <Arrow points={[[100, 114], [100, 142]]} />
      <Note x={108} y={128} lines={["True"]} size={10} anchor="start" bold />
      <Process cx={100} cy={158} w={110} h={28} lines={["Body + update"]} size={10} />
      <Arrow points={[[45, 158], [16, 158], [16, 88], [45, 88]]} />
      <Arrow points={[[155, 88], [190, 88], [190, 212], [110, 212]]} />
      <Note x={158} y={79} lines={["False"]} size={10} anchor="start" bold />
      <Dot cx={100} cy={212} r={9} />
      <Note x={100} y={240} lines={["(a) while / for", "entry controlled"]} size={11} bold />

      {/* do-while : exit controlled */}
      <Process cx={350} cy={20} w={110} h={26} lines={["Initialise"]} size={10} />
      <Arrow points={[[350, 33], [350, 52]]} />
      <Process cx={350} cy={68} w={110} h={28} lines={["Body + update"]} size={10} />
      <Arrow points={[[350, 82], [350, 116]]} />
      <Decision cx={350} cy={142} w={110} h={52} lines={["Condition ?"]} size={10} />
      <Arrow points={[[295, 142], [262, 142], [262, 68], [295, 68]]} />
      <Note x={266} y={132} lines={["True"]} size={10} anchor="start" bold />
      <Arrow points={[[350, 168], [350, 202]]} />
      <Note x={358} y={186} lines={["False"]} size={10} anchor="start" bold />
      <Dot cx={350} cy={212} r={9} />
      <Note x={350} y={240} lines={["(b) do - while", "exit controlled"]} size={11} bold />
    </Frame>
  );
}
