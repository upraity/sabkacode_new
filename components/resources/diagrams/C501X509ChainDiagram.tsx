import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C501X509ChainDiagram() {
  return (
    <Frame w={620} h={310} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["X.509 Trust Chain"]} size={12} bold />
      <Box x={40} y={70} w={150} h={55} lines={["Root CA", "trusted anchor"]} tone="dark" bold />
      <Arrow points={[[190,98],[235,98]]} />
      <Box x={235} y={70} w={150} h={55} lines={["Intermediate CA"]} tone="mid" bold />
      <Arrow points={[[385,98],[430,98]]} />
      <Box x={430} y={70} w={150} h={55} lines={["End-entity", "certificate"]} tone="light" bold />
      <Lines x={310} y={170} lines={["Validation checks include issuer signature, validity period, subject/identity and trust-chain rules."]} size={10} />
      <Lines x={310} y={205} lines={["Certificate binds the subject to a public key."]} size={10} />
    </Frame>
  );
}
