import { Arrow, Decision, IO, Note, Terminator, Frame } from "./DiagramKit";

export function FlowchartEvenOddDiagram() {
  return (
    <Frame w={360} h={360} className="mx-auto w-full max-w-sm">
      <Terminator cx={180} cy={20} text="Start" />
      <Arrow points={[[180, 34], [180, 62]]} />
      <IO cx={180} cy={76} w={110} lines={["Read N"]} />
      <Arrow points={[[180, 91], [180, 122]]} />
      <Decision cx={180} cy={150} w={150} h={56} lines={["N mod 2 = 0 ?"]} />

      <Arrow points={[[105, 150], [70, 150], [70, 218]]} />
      <Note x={88} y={142} lines={["Yes"]} size={11} bold />
      <Arrow points={[[255, 150], [290, 150], [290, 218]]} />
      <Note x={272} y={142} lines={["No"]} size={11} bold />

      <IO cx={70} cy={233} w={124} lines={["Print", "N is Even"]} />
      <IO cx={290} cy={233} w={124} lines={["Print", "N is Odd"]} />
      <Arrow points={[[70, 255], [70, 292], [180, 292]]} head={false} />
      <Arrow points={[[290, 255], [290, 292], [180, 292]]} head={false} />
      <Arrow points={[[180, 292], [180, 322]]} />
      <Terminator cx={180} cy={336} text="Stop" />
    </Frame>
  );
}
