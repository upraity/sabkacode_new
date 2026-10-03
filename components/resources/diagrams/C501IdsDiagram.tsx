import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C501IdsDiagram() {
  return (
    <Frame w={620} h={320} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Intrusion Detection"]} size={12} bold />
      <Box x={30} y={70} w={135} h={55} lines={["Network / Host", "Events"]} tone="dark" bold />
      <Arrow points={[[165,98],[225,98]]} />
      <Box x={225} y={65} w={170} h={70} lines={["IDS Engine", "signatures / anomaly"]} tone="mid" bold />
      <Arrow points={[[395,98],[455,98]]} />
      <Box x={455} y={70} w={130} h={55} lines={["Alert / Log"]} tone="light" bold />
      <Lines x={310} y={180} lines={["NIDS monitors network traffic; HIDS monitors activity on an individual host."]} size={10} />
      <Lines x={310} y={215} lines={["Detection may be signature-based or anomaly-based."]} size={10} />
    </Frame>
  );
}
