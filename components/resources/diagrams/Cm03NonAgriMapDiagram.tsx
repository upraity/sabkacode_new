import { Arrow, Box, Frame } from "./DiagramKit";

export default function Cm03NonAgriMapDiagram() {
  return (
    <Frame w={560} h={220} className="mx-auto w-full max-w-2xl">
      <Box x={18} y={82} w={100} h={56} lines={["Urban Banks"]} tone={"dark" if i==0 else "light"} bold size={10} />
      <Arrow points={[[118,110],[159,110]]} />
      <Box x={159} y={82} w={100} h={56} lines={["Employee Credit"]} tone={"dark" if i==0 else "light"} bold size={10} />
      <Arrow points={[[259,110],[300,110]]} />
      <Box x={300} y={82} w={100} h={56} lines={["Housing"]} tone={"dark" if i==0 else "light"} bold size={10} />
      <Arrow points={[[400,110],[441,110]]} />
      <Box x={441} y={82} w={100} h={56} lines={["Industrial Credit"]} tone={"dark" if i==0 else "light"} bold size={10} />
    </Frame>
  );
}
