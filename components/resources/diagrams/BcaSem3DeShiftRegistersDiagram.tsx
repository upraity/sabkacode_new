import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function BcaSem3DeShiftRegistersDiagram() {
  return (
    <Frame w={780} h={320} className="mx-auto w-full max-w-2xl">
      <Lines x={390} y={25} lines={["Four common register configurations"]} size={12} bold />
      <Box x={25} y={55} w={160} h={70} lines={["SISO", "Serial → Serial"]} tone="dark" bold />
      <Box x={205} y={55} w={160} h={70} lines={["SIPO", "Serial → Parallel"]} tone="light" bold />
      <Box x={385} y={55} w={160} h={70} lines={["PISO", "Parallel → Serial"]} tone="light" bold />
      <Box x={565} y={55} w={160} h={70} lines={["PIPO", "Parallel → Parallel"]} tone="mid" bold />
      <Arrow points={[[105,125],[105,185]]} />
      <Arrow points={[[285,125],[285,185]]} />
      <Arrow points={[[465,125],[465,185]]} />
      <Arrow points={[[645,125],[645,185]]} />
      <Box x={45} y={185} w={120} h={60} lines={["Delay", "serial transfer"]} tone="muted" />
      <Box x={225} y={185} w={120} h={60} lines={["Serial-to", "parallel"]} tone="muted" />
      <Box x={405} y={185} w={120} h={60} lines={["Parallel-to", "serial"]} tone="muted" />
      <Box x={585} y={185} w={120} h={60} lines={["Word", "storage"]} tone="muted" />
      <Lines x={390} y={285} lines={["A clock event shifts the stored word by one stage in the selected direction."]} size={10} />
    </Frame>
  );
}
