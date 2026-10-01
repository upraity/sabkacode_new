import { Arrow, Box, Frame, Note } from "./DiagramKit";

export default function ExportDocumentationFlowDiagram() {
  return (
    <Frame w={660} h={300} className="mx-auto w-full max-w-2xl">
      <Box x={18} y={55} w={105} h={58} lines={["Sales", "Contract"]} tone="dark" bold />
      <Box x={140} y={55} w={105} h={58} lines={["Invoice", "+ Packing"]} tone="light" size={10} />
      <Box x={262} y={55} w={105} h={58} lines={["Origin /", "Certificates"]} tone="light" size={10} />
      <Box x={384} y={55} w={105} h={58} lines={["Customs", "Declaration"]} tone="light" size={10} />
      <Box x={506} y={55} w={135} h={58} lines={["Transport", "Document"]} tone="mid" size={10} />
      <Arrow points={[[123, 84], [140, 84]]} />
      <Arrow points={[[245, 84], [262, 84]]} />
      <Arrow points={[[367, 84], [384, 84]]} />
      <Arrow points={[[489, 84], [506, 84]]} />
      <Box x={175} y={165} w={310} h={55} lines={["Bank / Buyer", "document and payment flow"]} tone="outline" />
      <Arrow points={[[574, 113], [574, 142], [485, 165]]} />
      <Arrow points={[[262, 113], [262, 165]]} />
      <Note x={330} y={257} lines={["Verify names, quantities, values, dates and references before submission."]} size={11} />
    </Frame>
  );
}
