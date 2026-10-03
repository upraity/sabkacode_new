import { Arrow, Box, Frame, Lines } from "./DiagramKit";
export default function C504ProblemRepresentationDiagram() {
  return <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
    <Lines x={310} y={20} lines={["State-Space Problem Representation"]} size={12} bold />
    <Box x={25} y={75} w={120} h={50} lines={["Initial State"]} tone="dark" bold />
    <Arrow points={[[145,100],[205,100]]} />
    <Box x={205} y={70} w={135} h={60} lines={["Actions /", "Operators"]} tone="mid" />
    <Arrow points={[[340,100],[405,100]]} />
    <Box x={405} y={75} w={120} h={50} lines={["Goal State"]} tone="light" />
    <Lines x={310} y={190} lines={["Transition model describes how an action changes one state into another."]} size={10} />
  </Frame>;
}
