import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C402PagingTranslationDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Paging Address Translation"]} size={12} bold />
      <Box x={25} y={70} w={145} h={50} lines={["Logical address", "page + offset"]} tone="dark" bold />
      <Arrow points={[[170,95],[235,95]]} />
      <Box x={235} y={65} w={150} h={60} lines={["Page table", "page → frame"]} tone="light" />
      <Arrow points={[[385,95],[450,95]]} />
      <Box x={450} y={70} w={145} h={50} lines={["Physical address", "frame + offset"]} tone="mid" bold />
      <Lines x={310} y={180} lines={["Page number selects the frame; offset is unchanged."]} size={10} />
      <Lines x={310} y={210} lines={["Example: page 2 → frame 7, with offset 452."]} size={10} />
    </Frame>
  );
}
