import { Arrow, Box, Frame } from "./DiagramKit";

export function ProfitSharingFrameworkDiagram() {
  return (
    <Frame w={560} h={280} className="mx-auto w-full max-w-xl">
      <Box x={195} y={18} w={170} h={42} lines={["Organizational Profit"]} tone="dark" bold size={10} />
      <Arrow points={[[280,60],[280,88]]} />
      <Box x={30} y={88} w={145} h={44} lines={["Eligibility"]} tone="light" />
      <Box x={208} y={88} w={145} h={44} lines={["Profit Measure"]} tone="light" />
      <Box x={385} y={88} w={145} h={44} lines={["Sharing Formula"]} tone="light" size={10} />
      <Arrow points={[[280,88],[102,88]]} />
      <Arrow points={[[280,88],[280,88]]} head={false} />
      <Arrow points={[[280,88],[458,88]]} />
      <Arrow points={[[102,132],[102,190],[280,190]]} />
      <Arrow points={[[280,132],[280,190]]} />
      <Arrow points={[[458,132],[458,190],[280,190]]} />
      <Box x={170} y={190} w={220} h={42} lines={["Allocation and payment"]} tone="mid" bold />
      <Arrow points={[[280,232],[280,260]]} />
    </Frame>
  );
}
