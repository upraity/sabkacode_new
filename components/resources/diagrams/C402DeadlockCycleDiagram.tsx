import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C402DeadlockCycleDiagram() {
  return (
    <Frame w={620} h={320} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Circular Wait and Deadlock"]} size={12} bold />
      <Box x={65} y={75} w={120} h={42} lines={["P1"]} tone="dark" bold />
      <Box x={435} y={75} w={120} h={42} lines={["P2"]} tone="dark" bold />
      <Box x={65} y={205} w={120} h={42} lines={["R1"]} tone="outline" />
      <Box x={435} y={205} w={120} h={42} lines={["R2"]} tone="outline" />
      <Arrow points={[[185,96],[435,96]]} />
      <Arrow points={[[495,117],[495,205]]} />
      <Arrow points={[[435,226],[185,226]]} />
      <Arrow points={[[125,205],[125,117]]} />
      <Lines x={310} y={275} lines={["Each process waits for a resource held by another process."]} size={10} />
    </Frame>
  );
}
