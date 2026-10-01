import { Arrow, Box, Frame } from "./DiagramKit";

export function ThreeSixtyAppraisalDiagram() {
  return (
    <Frame w={520} h={280} className="mx-auto w-full max-w-xl">
      <Box x={195} y={105} w={130} h={50} lines={["Employee"]} tone="dark" bold />
      <Box x={195} y={20} w={130} h={38} lines={["Manager"]} tone="light" />
      <Box x={35} y={110} w={115} h={38} lines={["Peers"]} tone="light" />
      <Box x={370} y={110} w={115} h={38} lines={["Customers"]} tone="light" />
      <Box x={195} y={205} w={130} h={38} lines={["Self"]} tone="light" />
      <Arrow points={[[260,58],[260,105]]} />
      <Arrow points={[[150,129],[195,129]]} />
      <Arrow points={[[370,129],[325,129]]} />
      <Arrow points={[[260,205],[260,155]]} />
      <Box x={165} y={250} w={190} h={26} lines={["Multi-source feedback"]} tone="mid" bold size={10} />
    </Frame>
  );
}
