import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C404InstructionCycleDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Instruction Cycle"]} size={12} bold />
      <Box x={45} y={85} w={120} h={48} lines={["Fetch"]} tone="dark" bold />
      <Box x={190} y={85} w={120} h={48} lines={["Decode"]} tone="light" />
      <Box x={335} y={85} w={120} h={48} lines={["Execute"]} tone="mid" bold />
      <Box x={480} y={85} w={95} h={48} lines={["Store / Next"]} tone="outline" />
      <Arrow points={[[165,109],[190,109]]} />
      <Arrow points={[[310,109],[335,109]]} />
      <Arrow points={[[455,109],[480,109]]} />
      <Arrow points={[[527,133],[527,185],[105,185],[105,133]]} dashed={true} />
      <Lines x={310} y={235} lines={["PC identifies the next instruction; IR holds the fetched instruction."]} size={10} />
    </Frame>
  );
}
