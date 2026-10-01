import { Arrow, Box, Frame, Note } from "./DiagramKit";

export default function CustomsDigitalTradeDiagram() {
  return (
    <Frame w={650} h={340} className="mx-auto w-full max-w-2xl">
      <Box x={235} y={18} w={180} h={50} lines={["Electronic", "Customs Workflow"]} tone="dark" bold />
      <Box x={30} y={100} w={125} h={58} lines={["Declaration", "data"]} tone="light" />
      <Box x={175} y={100} w={125} h={58} lines={["ICEGATE", "interface"]} tone="light" />
      <Box x={320} y={100} w={125} h={58} lines={["e-Sanchit", "documents"]} tone="light" />
      <Box x={465} y={100} w={125} h={58} lines={["Risk /", "assessment"]} tone="light" size={10} />
      <Arrow points={[[325, 68], [92, 100]]} />
      <Arrow points={[[325, 68], [237, 100]]} />
      <Arrow points={[[325, 68], [382, 100]]} />
      <Arrow points={[[325, 68], [527, 100]]} />
      <Box x={160} y={205} w={330} h={58} lines={["Verification / examination", "where applicable → clearance"]} tone="mid" size={10} />
      <Arrow points={[[237, 158], [245, 205]]} />
      <Arrow points={[[382, 158], [405, 205]]} />
      <Arrow points={[[527, 158], [450, 205]]} />
      <Note x={325} y={310} lines={["Digital filing improves traceability; it does not remove the duty to provide accurate data."]} size={11} />
    </Frame>
  );
}
