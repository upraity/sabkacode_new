import { Arrow, Box, Frame } from "./DiagramKit";

export function IncentivePaymentMethodsDiagram() {
  return (
    <Frame w={560} h={270} className="mx-auto w-full max-w-xl">
      <Box x={190} y={18} w={180} h={42} lines={["Payment / Incentive"]} tone="dark" bold />
      <Arrow points={[[280,60],[280,88]]} />
      <Box x={30} y={88} w={145} h={44} lines={["Time Rate", "time worked"]} tone="light" size={10} />
      <Box x={207} y={88} w={145} h={44} lines={["Piece Rate", "units produced"]} tone="light" size={10} />
      <Box x={385} y={88} w={145} h={44} lines={["Incentive", "defined performance"]} tone="mid" bold size={10} />
      <Arrow points={[[280,88],[102,88]]} />
      <Arrow points={[[280,88],[280,88]]} head={false} />
      <Arrow points={[[280,88],[458,88]]} />
      <Box x={155} y={180} w={250} h={42} lines={["Choose measures that protect", "quality, safety and compliance"]} tone="light" size={10} />
      <Arrow points={[[102,132],[102,180],[155,180]]} />
      <Arrow points={[[458,132],[458,180],[405,180]]} />
    </Frame>
  );
}
