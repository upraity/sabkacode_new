import { Box, Frame, Lines, Note } from "./DiagramKit";

const parts = [
  { title: "1. Documentation section", eg: "/* Program to find area */" },
  { title: "2. Link section", eg: "#include <stdio.h>" },
  { title: "3. Definition section", eg: "#define PI 3.14159" },
  { title: "4. Global declaration section", eg: "int total;  float area(float r);" },
];

export function CProgramStructureDiagram() {
  return (
    <Frame w={470} h={330} className="mx-auto w-full max-w-md">
      {parts.map((p, i) => (
        <g key={p.title}>
          <Box x={10} y={10 + i * 46} w={230} h={38} lines={[p.title]} tone="light" />
          <Note x={254} y={29 + i * 46} lines={[p.eg]} size={10} anchor="start" />
        </g>
      ))}
      <Box x={10} y={194} w={230} h={78} tone="dark" />
      <Lines x={125} y={210} lines={["5. main() function"]} size={12} bold fill="fill-white" />
      <Box x={24} y={224} w={202} h={20} lines={["Declaration part"]} tone="light" size={10} rx={3} />
      <Box x={24} y={248} w={202} h={20} lines={["Executable part"]} tone="light" size={10} rx={3} />
      <Note x={254} y={225} lines={["int main(void)", "{  ...  return 0;  }"]} size={10} anchor="start" />
      <Box x={10} y={282} w={230} h={38} lines={["6. Sub-program (user-defined functions)"]} tone="light" />
      <Note x={254} y={301} lines={["float area(float r) { ... }"]} size={10} anchor="start" />
    </Frame>
  );
}
