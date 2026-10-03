import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C501HashFunctionDiagram() {
  return (
    <Frame w={620} h={280} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Cryptographic Hash Function"]} size={12} bold />
      <Box x={35} y={75} w={150} h={55} lines={["Message", "arbitrary length"]} tone="dark" bold />
      <Arrow points={[[185,102],[245,102]]} />
      <Box x={245} y={70} w={130} h={65} lines={["Hash", "Function"]} tone="mid" bold />
      <Arrow points={[[375,102],[435,102]]} />
      <Box x={435} y={75} w={150} h={55} lines={["Digest", "fixed length"]} tone="light" bold />
      <Lines x={310} y={190} lines={["Security properties include preimage, second-preimage and collision resistance."]} size={10} />
    </Frame>
  );
}
