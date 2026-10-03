import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C402CriticalSectionDiagram() {
  return (
    <Frame w={620} h={280} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Structure of a Process"]} size={12} bold />
      <Box x={25} y={80} w={125} h={50} lines={["Remainder", "section"]} tone="light" />
      <Box x={185} y={80} w={125} h={50} lines={["Entry", "section"]} tone="outline" />
      <Box x={345} y={80} w={125} h={50} lines={["Critical", "section"]} tone="dark" bold />
      <Box x={505} y={80} w={90} h={50} lines={["Exit"]} tone="mid" bold />
      <Arrow points={[[150,105],[185,105]]} />
      <Arrow points={[[310,105],[345,105]]} />
      <Arrow points={[[470,105],[505,105]]} />
      <Arrow points={[[550,130],[550,185],[90,185],[90,130]]} dashed={true} />
      <Lines x={310} y={235} lines={["Mutual exclusion • Progress • Bounded waiting"]} size={11} bold />
    </Frame>
  );
}
