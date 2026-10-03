import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function BcaSem3DeSequenceDesignDiagram() {
  return (
    <Frame w={780} h={300} className="mx-auto w-full max-w-2xl">
      <Box x={20} y={100} w={130} h={60} lines={["Specification"]} tone="dark" bold />
      <Arrow points={[[150,130],[195,130]]} />
      <Box x={195} y={100} w={130} h={60} lines={["State", "diagram/table"]} tone="light" />
      <Arrow points={[[325,130],[370,130]]} />
      <Box x={370} y={100} w={130} h={60} lines={["Select", "flip-flop"]} tone="light" />
      <Arrow points={[[500,130],[545,130]]} />
      <Box x={545} y={100} w={130} h={60} lines={["Excitation", "equations"]} tone="light" />
      <Arrow points={[[675,130],[720,130]]} />
      <Box x={720} y={100} w={50} h={60} lines={["Verify"]} tone="mid" bold size={10} />
      <Lines x={390} y={220} lines={["Use Boolean algebra or K-maps to simplify the required next-state logic before implementation."]} size={10} />
    </Frame>
  );
}
