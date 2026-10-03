import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C402ProcessStatesDiagram() {
  return (
    <Frame w={620} h={320} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Basic Process States"]} size={12} bold />
      <Box x={35} y={70} w={115} h={42} lines={["New"]} tone="dark" bold />
      <Box x={250} y={70} w={120} h={42} lines={["Ready"]} tone="light" />
      <Box x={470} y={70} w={115} h={42} lines={["Running"]} tone="mid" bold />
      <Box x={250} y={190} w={120} h={42} lines={["Waiting"]} tone="light" />
      <Box x={470} y={190} w={115} h={42} lines={["Terminated"]} tone="outline" />
      <Arrow points={[[150,91],[250,91]]} />
      <Arrow points={[[370,91],[470,91]]} />
      <Arrow points={[[527,112],[527,190]]} />
      <Arrow points={[[470,211],[370,211]]} />
      <Arrow points={[[250,211],[150,211],[150,91]]} dashed={true} />
      <Arrow points={[[470,112],[370,190]]} dashed={true} />
    </Frame>
  );
}
