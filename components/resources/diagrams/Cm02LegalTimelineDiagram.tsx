import { Arrow, Box, Frame } from "./DiagramKit";

export default function Cm02LegalTimelineDiagram() {
  return (
    <Frame w={826} h={220} className="mx-auto w-full max-w-2xl">
      <Box x={18} y={82} w={100} h={56} lines={["1904"]} tone={"dark" if i==0 else "light"} bold size={10} />
      <Arrow points={[[118,110],[133,110]]} />
      <Box x={133} y={82} w={100} h={56} lines={["1912"]} tone={"dark" if i==0 else "light"} bold size={10} />
      <Arrow points={[[233,110],[248,110]]} />
      <Box x={248} y={82} w={100} h={56} lines={["1957"]} tone={"dark" if i==0 else "light"} bold size={10} />
      <Arrow points={[[348,110],[363,110]]} />
      <Box x={363} y={82} w={100} h={56} lines={["1991"]} tone={"dark" if i==0 else "light"} bold size={10} />
      <Arrow points={[[463,110],[478,110]]} />
      <Box x={478} y={82} w={100} h={56} lines={["1999"]} tone={"dark" if i==0 else "light"} bold size={10} />
      <Arrow points={[[578,110],[593,110]]} />
      <Box x={593} y={82} w={100} h={56} lines={["2002"]} tone={"dark" if i==0 else "light"} bold size={10} />
      <Arrow points={[[693,110],[708,110]]} />
      <Box x={708} y={82} w={100} h={56} lines={["2011"]} tone={"dark" if i==0 else "light"} bold size={10} />
    </Frame>
  );
}
