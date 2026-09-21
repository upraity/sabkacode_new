import { Arrow, Box, Frame, Note } from "./DiagramKit";

const rows = [
  { src: ["Assembly language", "program"], tr: ["Assembler"], out: ["Machine code", "(binary 0s and 1s)"] },
  { src: ["High-level program", "(C, C++, Java)"], tr: ["Compiler"], out: ["Machine code (.exe)", "whole program at once"] },
  { src: ["High-level program", "(Python, BASIC)"], tr: ["Interpreter"], out: ["Executed", "line by line"] },
];

export function LanguageTranslatorsDiagram() {
  return (
    <Frame w={500} h={250} className="mx-auto w-full max-w-lg">
      <Note x={85} y={12} lines={["Source program"]} size={10} bold />
      <Note x={250} y={12} lines={["Translator"]} size={10} bold />
      <Note x={415} y={12} lines={["Result"]} size={10} bold />
      {rows.map((r, i) => {
        const y = 28 + i * 74;
        return (
          <g key={r.tr[0]}>
            <Box x={10} y={y} w={150} h={50} lines={r.src} tone="light" />
            <Box x={190} y={y} w={120} h={50} lines={r.tr} tone="dark" bold />
            <Box x={340} y={y} w={150} h={50} lines={r.out} tone="outline" />
            <Arrow points={[[160, y + 25], [190, y + 25]]} />
            <Arrow points={[[310, y + 25], [340, y + 25]]} />
          </g>
        );
      })}
    </Frame>
  );
}
