import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C501KerberosDiagram() {
  return (
    <Frame w={620} h={350} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Simplified Kerberos Authentication"]} size={12} bold />
      <Box x={30} y={70} w={125} h={50} lines={["Client"]} tone="dark" bold />
      <Box x={205} y={70} w={135} h={50} lines={["AS"]} tone="mid" bold />
      <Box x={390} y={70} w={135} h={50} lines={["TGS"]} tone="light" bold />
      <Box x={205} y={185} w={135} h={50} lines={["Application", "Server"]} tone="outline" bold />
      <Arrow points={[[155,95],[205,95]]} />
      <Arrow points={[[340,95],[390,95]]} />
      <Arrow points={[[525,110],[340,205]]} />
      <Arrow points={[[205,210],[155,120]]} dashed={true} />
      <Lines x={310} y={270} lines={["Tickets and authenticators support time-limited access without sending the user's password to every service."]} size={10} />
    </Frame>
  );
}
