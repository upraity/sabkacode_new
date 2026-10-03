import { Arrow, Box, Frame, Lines } from "./DiagramKit";
export default function C504NlpPipelineDiagram() {
  return <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
    <Lines x={310} y={20} lines={["Simplified NLP Pipeline"]} size={12} bold />
    <Box x={25} y={75} w={110} h={50} lines={["Text / Speech"]} tone="light" />
    <Arrow points={[[135,100],[190,100]]}/>
    <Box x={190} y={70} w={115} h={60} lines={["Preprocess /", "Recognize"]} tone="mid" />
    <Arrow points={[[305,100],[360,100]]}/>
    <Box x={360} y={70} w={110} h={60} lines={["Language", "Analysis"]} tone="dark" bold />
    <Arrow points={[[470,100],[525,100]]}/>
    <Box x={525} y={75} w={75} h={50} lines={["Output"]} tone="light" />
    <Lines x={310} y={205} lines={["Actual pipelines vary by NLP task and may contain additional linguistic or ML stages."]} size={9} />
  </Frame>;
}
