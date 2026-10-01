import { Arrow, Box, Frame, Note } from "./DiagramKit";

export default function InternationalPaymentMethodsDiagram() {
  return (
    <Frame w={650} h={340} className="mx-auto w-full max-w-2xl">
      <Box x={245} y={18} w={160} h={50} lines={["Payment", "Terms"]} tone="dark" bold />
      <Box x={25} y={100} w={130} h={58} lines={["Advance", "payment"]} tone="light" />
      <Box x={175} y={100} w={130} h={58} lines={["Documentary", "collection"]} tone="light" size={10} />
      <Box x={325} y={100} w={130} h={58} lines={["Letter of", "credit"]} tone="light" />
      <Box x={475} y={100} w={130} h={58} lines={["Open", "account"]} tone="outline" />
      <Arrow points={[[325, 68], [90, 100]]} />
      <Arrow points={[[325, 68], [240, 100]]} />
      <Arrow points={[[325, 68], [390, 100]]} />
      <Arrow points={[[325, 68], [540, 100]]} />
      <Box x={80} y={205} w={200} h={58} lines={["More exporter", "payment security"]} tone="outline" size={10} />
      <Box x={370} y={205} w={200} h={58} lines={["More exporter", "credit exposure"]} tone="outline" size={10} />
      <Arrow points={[[155, 158], [180, 205]]} />
      <Arrow points={[[240, 158], [230, 205]]} />
      <Arrow points={[[390, 158], [420, 205]]} />
      <Arrow points={[[540, 158], [480, 205]]} />
      <Note x={325} y={310} lines={["Actual risk depends on contract terms, buyer credit, country risk and documentary compliance."]} size={10} />
    </Frame>
  );
}
