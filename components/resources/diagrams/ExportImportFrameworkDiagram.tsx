import { Arrow, Box, Frame, Note } from "./DiagramKit";

export default function ExportImportFrameworkDiagram() {
  return (
    <Frame w={640} h={350} className="mx-auto w-full max-w-2xl">
      <Box x={230} y={18} w={180} h={50} lines={["Export / Import", "Transaction"]} tone="dark" bold />
      <Box x={35} y={105} w={145} h={55} lines={["DGFT /", "Trade Policy"]} tone="light" />
      <Box x={245} y={105} w={145} h={55} lines={["Customs", "Clearance"]} tone="light" />
      <Box x={455} y={105} w={145} h={55} lines={["Banking /", "FX"]} tone="light" />
      <Arrow points={[[320, 68], [107, 105]]} />
      <Arrow points={[[320, 68], [317, 105]]} />
      <Arrow points={[[320, 68], [527, 105]]} />
      <Box x={85} y={215} w={145} h={55} lines={["Documents", "Invoice + origin"]} tone="outline" size={10} />
      <Box x={247} y={215} w={145} h={55} lines={["Logistics", "Port + transport"]} tone="outline" size={10} />
      <Box x={410} y={215} w={145} h={55} lines={["Buyer / Seller", "Contract terms"]} tone="outline" size={10} />
      <Arrow points={[[107, 160], [150, 215]]} />
      <Arrow points={[[317, 160], [317, 215]]} />
      <Arrow points={[[527, 160], [482, 215]]} />
      <Note x={320} y={315} lines={["Successful EXIM execution requires these systems and documents to agree with one another."]} size={11} />
    </Frame>
  );
}
