import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function BcaSem3DeRingJohnsonDiagram() {
  return (
    <Frame w={780} h={320} className="mx-auto w-full max-w-2xl">
      <Lines x={195} y={25} lines={["Ring counter"]} size={12} bold />
      <Box x={35} y={60} w={100} h={55} lines={["FF0", "1"]} tone="dark" />
      <Box x={150} y={60} w={100} h={55} lines={["FF1", "0"]} tone="light" />
      <Box x={265} y={60} w={100} h={55} lines={["FF2", "0"]} tone="light" />
      <Box x={380} y={60} w={100} h={55} lines={["FF3", "0"]} tone="light" />
      <Arrow points={[[135,87],[150,87]]} />
      <Arrow points={[[250,87],[265,87]]} />
      <Arrow points={[[365,87],[380,87]]} />
      <Arrow points={[[430,115],[430,145],[85,145],[85,115]]} />
      <Lines x={585} y={25} lines={["Johnson counter"]} size={12} bold />
      <Box x={505} y={60} w={100} h={55} lines={["FF0"]} tone="mid" />
      <Box x={620} y={60} w={100} h={55} lines={["FF1"]} tone="light" />
      <Arrow points={[[605,87],[620,87]]} />
      <Box x={505} y={175} w={100} h={55} lines={["FF3", "feedback"]} tone="light" />
      <Box x={620} y={175} w={100} h={55} lines={["FF2"]} tone="light" />
      <Arrow points={[[720,115],[740,115],[740,202],[720,202]]} />
      <Lines x={195} y={215} lines={["n stages → n states (basic one-hot ring)"]} size={10} />
      <Lines x={585} y={270} lines={["n stages → 2n states (standard Johnson sequence)"]} size={10} />
    </Frame>
  );
}
