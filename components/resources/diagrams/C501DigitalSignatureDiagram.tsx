import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C501DigitalSignatureDiagram() {
  return (
    <Frame w={620} h={330} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Digital Signature"]} size={12} bold />
      <Box x={35} y={65} w={120} h={48} lines={["Message"]} tone="dark" bold />
      <Arrow points={[[155,89],[215,89]]} />
      <Box x={215} y={60} w={120} h={55} lines={["Hash"]} tone="mid" bold />
      <Arrow points={[[335,89],[395,89]]} />
      <Box x={395} y={60} w={170} h={55} lines={["Sign with private key"]} tone="light" bold />
      <Box x={215} y={165} w={120} h={48} lines={["Digest"]} tone="outline" />
      <Box x={395} y={165} w={170} h={48} lines={["Signature"]} tone="outline" />
      <Arrow points={[[275,165],[275,115]]} dashed={true} />
      <Arrow points={[[480,165],[480,115]]} dashed={true} />
      <Lines x={310} y={240} lines={["Verifier uses the public key and message/hash rules to validate the signature."]} size={10} />
    </Frame>
  );
}
