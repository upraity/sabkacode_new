import { Arrow, Box, Frame, Lines } from "./DiagramKit";
export default function C504MlOverviewDiagram() {
  return <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
    <Lines x={310} y={20} lines={["Machine Learning Workflow"]} size={12} bold />
    <Box x={25} y={75} w={115} h={50} lines={["Data"]} tone="light" />
    <Arrow points={[[140,100],[205,100]]}/>
    <Box x={205} y={70} w={115} h={60} lines={["Training /", "Learning"]} tone="mid" />
    <Arrow points={[[320,100],[385,100]]}/>
    <Box x={385} y={70} w={115} h={60} lines={["Model"]} tone="dark" bold />
    <Arrow points={[[500,100],[565,100]]}/>
    <Box x={565} y={75} w={45} h={50} lines={["ŷ"]} tone="light" />
    <Lines x={310} y={205} lines={["A learned model is applied to new inputs to produce predictions or decisions."]} size={9} />
  </Frame>;
}
