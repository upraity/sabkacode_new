import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C402AddressTranslationDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Logical-to-Physical Address Translation"]} size={12} bold />
      <Box x={25} y={70} w={150} h={50} lines={["CPU", "logical address"]} tone="dark" bold />
      <Arrow points={[[175,95],[235,95]]} />
      <Box x={235} y={70} w={150} h={50} lines={["MMU", "translation"]} tone="mid" bold />
      <Arrow points={[[385,95],[445,95]]} />
      <Box x={445} y={70} w={150} h={50} lines={["Main Memory", "physical address"]} tone="outline" />
      <Box x={225} y={170} w={170} h={45} lines={["Page/segment", "table"]} tone="light" />
      <Arrow points={[[310,120],[310,170]]} dashed={true} />
      <Lines x={310} y={255} lines={["Logical address ≠ physical address; the MMU performs the mapping."]} size={10} />
    </Frame>
  );
}
