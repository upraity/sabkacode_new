import { Arrow, Decision, Dot, Frame, Note, Process } from "./DiagramKit";

const END_Y = 205;

export function IfElseFlowDiagram() {
  const a = 0;
  const b = 190;
  const c = 380;
  return (
    <Frame w={570} h={250} className="mx-auto w-full max-w-2xl">
      {/* (a) simple if */}
      <Decision cx={a + 90} cy={45} w={90} h={44} lines={["Condition"]} size={10} />
      <Arrow points={[[a + 90, 67], [a + 90, 98]]} />
      <Note x={a + 104} y={82} lines={["True"]} size={10} anchor="start" bold />
      <Process cx={a + 90} cy={112} w={84} h={28} lines={["Statements"]} size={10} />
      <Arrow points={[[a + 90, 126], [a + 90, END_Y - 10]]} />
      <Arrow points={[[a + 135, 45], [a + 165, 45], [a + 165, END_Y], [a + 100, END_Y]]} />
      <Note x={a + 140} y={36} lines={["False"]} size={10} anchor="start" bold />
      <Dot cx={a + 90} cy={END_Y} r={9} />
      <Note x={a + 90} y={238} lines={["(a) if"]} size={11} bold />

      {/* (b) if - else */}
      <Decision cx={b + 90} cy={45} w={90} h={44} lines={["Condition"]} size={10} />
      <Arrow points={[[b + 45, 45], [b + 32, 45], [b + 32, 96]]} />
      <Note x={b + 4} y={36} lines={["True"]} size={10} anchor="start" bold />
      <Arrow points={[[b + 135, 45], [b + 148, 45], [b + 148, 96]]} />
      <Note x={b + 138} y={36} lines={["False"]} size={10} anchor="start" bold />
      <Process cx={b + 32} cy={110} w={60} h={28} lines={["Block 1"]} size={10} />
      <Process cx={b + 148} cy={110} w={60} h={28} lines={["Block 2"]} size={10} />
      <Arrow points={[[b + 32, 124], [b + 32, 160], [b + 90, 160]]} head={false} />
      <Arrow points={[[b + 148, 124], [b + 148, 160], [b + 90, 160]]} head={false} />
      <Arrow points={[[b + 90, 160], [b + 90, END_Y - 10]]} />
      <Dot cx={b + 90} cy={END_Y} r={9} />
      <Note x={b + 90} y={238} lines={["(b) if - else"]} size={11} bold />

      {/* (c) else-if ladder */}
      <Decision cx={c + 60} cy={40} w={76} h={40} lines={["Cond 1"]} size={10} />
      <Decision cx={c + 60} cy={105} w={76} h={40} lines={["Cond 2"]} size={10} />
      <Arrow points={[[c + 98, 40], [c + 113, 40]]} />
      <Note x={c + 104} y={30} lines={["T"]} size={10} bold />
      <Process cx={c + 142} cy={40} w={58} h={26} lines={["Stmt 1"]} size={10} />
      <Arrow points={[[c + 60, 60], [c + 60, 85]]} />
      <Note x={c + 64} y={73} lines={["F"]} size={10} anchor="start" bold />
      <Arrow points={[[c + 98, 105], [c + 113, 105]]} />
      <Note x={c + 104} y={95} lines={["T"]} size={10} bold />
      <Process cx={c + 142} cy={105} w={58} h={26} lines={["Stmt 2"]} size={10} />
      <Arrow points={[[c + 60, 125], [c + 60, 158], [c + 113, 158]]} />
      <Note x={c + 64} y={140} lines={["F"]} size={10} anchor="start" bold />
      <Process cx={c + 142} cy={158} w={58} h={26} lines={["else"]} size={10} />
      {/* bus on the right */}
      <Arrow points={[[c + 171, 40], [c + 178, 40], [c + 178, END_Y], [c + 99, END_Y]]} />
      <Arrow points={[[c + 171, 105], [c + 178, 105]]} head={false} />
      <Arrow points={[[c + 171, 158], [c + 178, 158]]} head={false} />
      <Dot cx={c + 90} cy={END_Y} r={9} />
      <Note x={c + 90} y={238} lines={["(c) else-if ladder"]} size={11} bold />
    </Frame>
  );
}
