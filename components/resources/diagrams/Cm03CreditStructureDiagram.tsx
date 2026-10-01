import { Arrow, Box, Frame } from "./DiagramKit";

export default function Cm03CreditStructureDiagram() {
  return (
    <Frame w={590} h={220} className="mx-auto w-full max-w-2xl">
      <Box x={18} y={82} w={100} h={56} lines={["Members"]} tone={"dark" if i==0 else "light"} bold size={10} />
      <Arrow points={[[118,110],[131,110]]} />
      <Box x={131} y={82} w={100} h={56} lines={["PACS"]} tone={"dark" if i==0 else "light"} bold size={10} />
      <Arrow points={[[231,110],[244,110]]} />
      <Box x={244} y={82} w={100} h={56} lines={["DCCB"]} tone={"dark" if i==0 else "light"} bold size={10} />
      <Arrow points={[[344,110],[357,110]]} />
      <Box x={357} y={82} w={100} h={56} lines={["SCB"]} tone={"dark" if i==0 else "light"} bold size={10} />
      <Arrow points={[[457,110],[470,110]]} />
      <Box x={470} y={82} w={100} h={56} lines={["Apex Support"]} tone={"dark" if i==0 else "light"} bold size={10} />
    </Frame>
  );
}
