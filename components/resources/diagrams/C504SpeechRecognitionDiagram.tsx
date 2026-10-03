import { Arrow, Box, Frame, Lines } from "./DiagramKit";
export default function C504SpeechRecognitionDiagram() {
  return <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
    <Lines x={310} y={20} lines={["Speech Recognition"]} size={12} bold />
    <Box x={25} y={75} w={115} h={50} lines={["Speech Signal"]} tone="light" />
    <Arrow points={[[140,100],[205,100]]}/>
    <Box x={205} y={70} w={125} h={60} lines={["Feature", "Extraction"]} tone="mid" />
    <Arrow points={[[330,100],[395,100]]}/>
    <Box x={395} y={70} w={125} h={60} lines={["Models +", "Decoding"]} tone="dark" bold />
    <Arrow points={[[520,100],[585,100]]}/>
    <Lines x={585} y={105} lines={["Text"]} size={10} bold />
    <Lines x={310} y={205} lines={["Speaker, accent, noise and pronunciation variation affect recognition."]} size={9} />
  </Frame>;
}
