import { Box, Frame, Note } from "./DiagramKit";

const chars = ["H", "E", "L", "L", "O", "\\0"];

export function StringMemoryDiagram() {
  return (
    <Frame w={460} h={190} className="mx-auto w-full max-w-md">
      <Note x={230} y={14} lines={["char s[] = \"HELLO\";"]} size={11} bold />
      {chars.map((c, i) => (
        <g key={i}>
          <Note x={55 + i * 60} y={48} lines={[String(1000 + i)]} size={10} />
          <Box x={25 + i * 60} y={58} w={60} h={42} lines={[c === "\\0" ? "'\\0'" : `'${c}'`]} tone={i === 5 ? "dark" : "light"} size={12} rx={0} />
          <Note x={55 + i * 60} y={116} lines={[`s[${i}]`]} size={11} bold />
        </g>
      ))}
      <Note x={230} y={148} lines={["5 characters + 1 null character '\\0' = 6 bytes (1 byte per character)"]} size={10} />
      <Note x={230} y={168} lines={["The null character marks the end of the string"]} size={10} />
    </Frame>
  );
}
