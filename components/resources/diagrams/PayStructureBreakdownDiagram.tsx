import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export function PayStructureBreakdownDiagram() {
  return (
    <Frame w={560} h={290} className="mx-auto w-full max-w-xl">
      <Box x={190} y={18} w={180} h={42} lines={["Pay Structure"]} tone="dark" bold />
      <Arrow points={[[280,60],[280,88]]} />
      <Box x={35} y={88} w={110} h={42} lines={["Basic Pay"]} tone="light" />
      <Box x={155} y={88} w={110} h={42} lines={["Allowances"]} tone="light" />
      <Box x={275} y={88} w={110} h={42} lines={["Incentives"]} tone="light" />
      <Box x={395} y={88} w={130} h={42} lines={["Benefits"]} tone="light" />
      <Arrow points={[[280,88],[90,88]]} />
      <Arrow points={[[280,88],[210,88]]} />
      <Arrow points={[[280,88],[330,88]]} />
      <Arrow points={[[280,88],[460,88]]} />
      <Arrow points={[[90,130],[90,190],[280,190]]} />
      <Arrow points={[[210,130],[210,190],[280,190]]} />
      <Arrow points={[[330,130],[330,190],[280,190]]} />
      <Arrow points={[[460,130],[460,190],[280,190]]} />
      <Box x={185} y={190} w={190} h={42} lines={["Gross Pay"]} tone="mid" bold />
      <Arrow points={[[280,232],[280,260]]} />
      <Lines x={280} y={278} lines={["Less applicable deductions → Take-home Pay"]} size={10} fill="fill-ink-600" />
    </Frame>
  );
}
