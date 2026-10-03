import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function BcaSem3DeMasterSlaveDiagram() {
  return (
    <Frame w={760} h={270} className="mx-auto w-full max-w-2xl">
      <Box x={45} y={80} w={170} h={80} lines={["Input", "Master", "captures"]} tone="dark" bold />
      <Arrow points={[[215,120],[300,120]]} />
      <Box x={300} y={80} w={170} h={80} lines={["Slave", "transfers", "stored state"]} tone="mid" bold />
      <Arrow points={[[470,120],[555,120]]} />
      <Box x={555} y={80} w={160} h={80} lines={["Output Q", "controlled", "by clock phase"]} tone="light" bold />
      <Lines x={380} y={205} lines={["Master and slave respond in opposite clock phases, controlling when the output updates."]} size={10} />
      <Lines x={380} y={240} lines={["Clock → master active → slave isolated → phase changes → slave updates"]} size={10} />
    </Frame>
  );
}
