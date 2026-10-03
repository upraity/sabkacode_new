import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C501FirewallDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Firewall Architecture"]} size={12} bold />
      <Box x={35} y={75} w={145} h={55} lines={["Untrusted", "Network"]} tone="light" />
      <Arrow points={[[180,102],[235,102]]} />
      <Box x={235} y={65} w={150} h={75} lines={["Firewall", "Policy + Rules"]} tone="dark" bold />
      <Arrow points={[[385,102],[440,102]]} />
      <Box x={440} y={75} w={145} h={55} lines={["Protected", "Network"]} tone="mid" bold />
      <Lines x={310} y={195} lines={["Traffic is allowed, denied or inspected according to the security policy."]} size={10} />
      <Lines x={310} y={230} lines={["Useful firewall designs also support logging and monitoring."]} size={10} />
    </Frame>
  );
}
