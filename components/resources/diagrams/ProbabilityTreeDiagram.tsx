import { Arrow, Box, Frame, Note } from "./DiagramKit";

const machines = [
  { n: "Machine A", p: "0.5", d: "0.03", g: "0.97", jd: "0.5 × 0.03 = 0.015", jg: "0.5 × 0.97 = 0.485" },
  { n: "Machine B", p: "0.3", d: "0.04", g: "0.96", jd: "0.3 × 0.04 = 0.012", jg: "0.3 × 0.96 = 0.288" },
  { n: "Machine C", p: "0.2", d: "0.05", g: "0.95", jd: "0.2 × 0.05 = 0.010", jg: "0.2 × 0.95 = 0.190" },
];

export function ProbabilityTreeDiagram() {
  return (
    <Frame w={600} h={302} className="mx-auto w-full max-w-xl">
      <circle cx={24} cy={135} r={8} className="fill-ink-700" />
      {machines.map((m, i) => {
        const y = 45 + i * 90;
        return (
          <g key={m.n}>
            <Arrow points={[[32, 135], [130, y]]} head={false} />
            <Note x={78} y={(135 + y) / 2 + (i === 0 ? -12 : i === 2 ? 12 : -8)} lines={[`P = ${m.p}`]} size={10} bold />
            <Box x={130} y={y - 15} w={92} h={30} lines={[m.n]} tone="dark" size={10} bold />
            <Arrow points={[[222, y], [300, y - 25]]} head={false} />
            <Arrow points={[[222, y], [300, y + 25]]} head={false} />
            <Note x={262} y={y - 27} lines={[m.d]} size={10} bold />
            <Note x={262} y={y + 33} lines={[m.g]} size={10} bold />
            <Box x={300} y={y - 40} w={78} h={30} lines={["Defective"]} tone="mid" size={10} />
            <Box x={300} y={y + 10} w={78} h={30} lines={["Good"]} tone="light" size={10} />
            <Note x={388} y={y - 25} lines={[m.jd]} size={10} anchor="start" />
            <Note x={388} y={y + 25} lines={[m.jg]} size={10} anchor="start" />
          </g>
        );
      })}
      <Note x={300} y={290} lines={["P(Defective) = 0.015 + 0.012 + 0.010 = 0.037"]} size={11} bold />
    </Frame>
  );
}
