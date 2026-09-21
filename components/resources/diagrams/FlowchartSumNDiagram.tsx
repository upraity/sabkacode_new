import { Arrow, Decision, IO, Note, Process, Terminator, Frame } from "./DiagramKit";

export function FlowchartSumNDiagram() {
  return (
    <Frame w={340} h={490} className="mx-auto w-full max-w-xs">
      <Terminator cx={150} cy={20} text="Start" />
      <Arrow points={[[150, 34], [150, 56]]} />
      <IO cx={150} cy={70} w={110} lines={["Read N"]} />
      <Arrow points={[[150, 85], [150, 108]]} />
      <Process cx={150} cy={123} w={140} lines={["SUM = 0 , I = 1"]} />
      <Arrow points={[[150, 138], [150, 166]]} />
      <Decision cx={150} cy={198} w={150} h={64} lines={["I <= N ?"]} />

      {/* Yes: down into the loop body */}
      <Arrow points={[[150, 230], [150, 268]]} />
      <Note x={168} y={248} lines={["Yes"]} size={11} bold />
      <Process cx={150} cy={284} w={140} lines={["SUM = SUM + I"]} />
      <Arrow points={[[150, 299], [150, 322]]} />
      <Process cx={150} cy={337} w={140} lines={["I = I + 1"]} />
      {/* loop back to the decision */}
      <Arrow points={[[220, 337], [300, 337], [300, 198], [225, 198]]} />

      {/* No: leave the loop on the left */}
      <Arrow points={[[75, 198], [36, 198], [36, 418], [90, 418]]} />
      <Note x={52} y={190} lines={["No"]} size={11} bold />
      <IO cx={150} cy={418} w={120} lines={["Print SUM"]} />
      <Arrow points={[[150, 433], [150, 456]]} />
      <Terminator cx={150} cy={470} text="Stop" />
    </Frame>
  );
}
