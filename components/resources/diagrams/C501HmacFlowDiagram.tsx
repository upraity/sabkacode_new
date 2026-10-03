import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C501HmacFlowDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["HMAC — Conceptual Flow"]} size={12} bold />
      <Box x={35} y={70} w={120} h={48} lines={["Secret Key K"]} tone="dark" bold />
      <Box x={35} y={145} w={120} h={48} lines={["Message M"]} tone="light" />
      <Arrow points={[[155,94],[225,115]]} />
      <Arrow points={[[155,169],[225,145]]} />
      <Box x={225} y={85} w={170} h={75} lines={["Keyed hash", "inner + outer processing"]} tone="mid" bold />
      <Arrow points={[[395,122],[465,122]]} />
      <Box x={465} y={95} w={120} h={55} lines={["HMAC tag"]} tone="outline" bold />
      <Lines x={310} y={225} lines={["Receiver recomputes the HMAC with the shared secret key and compares the result."]} size={10} />
    </Frame>
  );
}
