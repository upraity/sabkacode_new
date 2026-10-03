import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C402DiskSchedulingDiagram() {
  return (
    <Frame w={620} h={320} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Disk Scheduling: Conceptual Patterns"]} size={12} bold />
      <Box x={25} y={60} w={170} h={42} lines={["FCFS", "arrival order"]} tone="dark" bold />
      <Box x={225} y={60} w={170} h={42} lines={["SSTF", "nearest request"]} tone="mid" bold />
      <Box x={425} y={60} w={170} h={42} lines={["SCAN", "sweep + reverse"]} tone="outline" bold />
      <Arrow points={[[55,150],[160,210],[80,260],[180,275]]} head={true} />
      <Arrow points={[[250,260],[330,190],[290,155],[365,130]]} head={true} />
      <Arrow points={[[455,260],[555,260],[555,145],[455,145]]} head={true} />
      <Lines x={310} y={295} lines={["Actual numerical answers depend on the given queue, head position and SCAN direction."]} size={10} />
    </Frame>
  );
}
