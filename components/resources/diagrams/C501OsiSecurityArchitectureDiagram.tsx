import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C501OsiSecurityArchitectureDiagram() {
  return (
    <Frame w={620} h={310} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["OSI Security Architecture"]} size={12} bold />
      <Box x={35} y={70} w={150} h={55} lines={["Security", "Attacks"]} tone="dark" bold />
      <Box x={235} y={70} w={150} h={55} lines={["Security", "Services"]} tone="mid" bold />
      <Box x={435} y={70} w={150} h={55} lines={["Security", "Mechanisms"]} tone="light" bold />
      <Arrow points={[[185,98],[235,98]]} />
      <Arrow points={[[385,98],[435,98]]} />
      <Lines x={310} y={165} lines={["Attacks threaten security; services specify protection goals; mechanisms implement protection."]} size={10} />
      <Lines x={310} y={205} lines={["Examples: confidentiality, integrity, authentication, access control and non-repudiation."]} size={10} />
    </Frame>
  );
}
