import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function DomesticEnquiryFlowDiagram() {
  return (
    <Frame w={540} h={270} className="mx-auto w-full max-w-xl">
      <Box x={20} y={25} w={115} h={40} lines={["Alleged", "misconduct"]} tone="light" />
      <Arrow points={[[135, 45], [160, 45]]} />
      <Box x={160} y={25} w={115} h={40} lines={["Notice /", "charge"]} tone="light" />
      <Arrow points={[[275, 45], [300, 45]]} />
      <Box x={300} y={25} w={115} h={40} lines={["Employee", "response"]} tone="light" />
      <Arrow points={[[415, 45], [440, 45]]} />
      <Box x={440} y={25} w={80} h={40} lines={["Enquiry"]} tone="mid" bold />
      <Arrow points={[[480, 65], [480, 120], [360, 120]]} />
      <Box x={300} y={100} w={120} h={40} lines={["Findings"]} tone="light" />
      <Arrow points={[[300, 120], [180, 120]]} />
      <Box x={60} y={100} w={120} h={40} lines={["Decision"]} tone="light" />
      <Arrow points={[[120, 140], [120, 195], [270, 195]]} />
      <Box x={180} y={175} w={180} h={42} lines={["Appropriate disciplinary", "action / closure"]} tone="dark" bold />
      <Note x={270} y={245} lines={["Fair procedure requires clear rules and an opportunity to respond."]} size={10} />
    </Frame>
  );
}
