import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C501RsaKeyFlowDiagram() {
  return (
    <Frame w={620} h={330} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["RSA — High-Level Flow"]} size={12} bold />
      <Box x={30} y={65} w={155} h={55} lines={["Choose p, q", "compute n, φ(n)"]} tone="dark" bold />
      <Arrow points={[[185,92],[230,92]]} />
      <Box x={230} y={65} w={160} h={55} lines={["Choose e", "find d = e⁻¹ mod φ(n)"]} tone="mid" bold />
      <Arrow points={[[390,92],[435,92]]} />
      <Box x={435} y={65} w={150} h={55} lines={["Public: (e,n)", "Private: (d,n)"]} tone="light" bold />
      <Box x={110} y={175} w={155} h={50} lines={["Encrypt: c = mᵉ mod n"]} tone="outline" />
      <Box x={355} y={175} w={155} h={50} lines={["Decrypt: m = cᵈ mod n"]} tone="outline" />
      <Arrow points={[[265,200],[355,200]]} />
      <Lines x={310} y={270} lines={["Real RSA requires large secure parameters and appropriate padding; textbook small values are only for learning."]} size={10} />
    </Frame>
  );
}
