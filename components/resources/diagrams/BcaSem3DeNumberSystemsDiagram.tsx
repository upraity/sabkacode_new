import { Arrow, Box, Frame, Lines, Note } from "./DiagramKit";

export default function BcaSem3DeNumberSystemsDiagram() {
  return (
    <Frame w={720} h={300} className="mx-auto w-full max-w-2xl">
      <Box x={40} y={40} w={140} h={58} lines={["Binary", "Base 2", "0, 1"]} tone="dark" bold />
      <Box x={290} y={40} w={140} h={58} lines={["Octal", "Base 8", "0–7"]} tone="light" />
      <Box x={540} y={40} w={140} h={58} lines={["Hex", "Base 16", "0–9, A–F"]} tone="mid" />
      <Arrow points={[[180,69],[290,69]]} />
      <Arrow points={[[430,69],[540,69]]} />
      <Lines x={360} y={145} lines={["Same quantity", "different representations"]} size={12} bold fill="fill-ink-800" />
      <Box x={120} y={195} w={190} h={55} lines={["Decimal", "Base 10", "0–9"]} tone="outline" />
      <Arrow points={[[360,175],[215,195]]} />
      <Arrow points={[[360,175],[465,195]]} />
      <Box x={370} y={195} w={190} h={55} lines={["Positional weights", "r⁰, r¹, r² …"]} tone="muted" />
      <Note x={360} y={280} lines={["Digital circuits primarily use binary; octal and hexadecimal compactly group binary digits."]} size={10} />
    </Frame>
  );
}
