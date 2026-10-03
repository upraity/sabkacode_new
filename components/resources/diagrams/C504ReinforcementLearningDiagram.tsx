import { Arrow, Box, Frame, Lines } from "./DiagramKit";
export default function C504ReinforcementLearningDiagram() {
  return <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
    <Lines x={310} y={20} lines={["Reinforcement Learning"]} size={12} bold />
    <Box x={240} y={80} w={140} h={60} lines={["Agent"]} tone="dark" bold />
    <Box x={240} y={190} w={140} h={60} lines={["Environment"]} tone="light" />
    <Arrow points={[[310,140],[310,190]]} />
    <Arrow points={[[380,220],[460,220],[460,110],[380,110]]} />
    <Lines x={435} y={205} lines={["State / reward"]} size={9} />
    <Lines x={310} y={270} lines={["Agent chooses actions; environment returns observations and reward feedback."]} size={9} />
  </Frame>;
}
