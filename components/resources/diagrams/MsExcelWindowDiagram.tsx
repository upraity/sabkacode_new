import { Arrow, Frame, Lines, Note } from "./DiagramKit";

const cols = ["A", "B", "C", "D", "E"];
const cells: Record<string, string> = {
  A1: "Name", B1: "Marks", A2: "Amit", B2: "78", A3: "Neha", B3: "45", A4: "Total", B4: "123",
};
const X0 = 34; // grid left (after row headers)
const Y0 = 96; // first data row top (after column headers)
const CW = 70;
const RH = 24;

const labels = [
  { y: 21, lines: ["Title bar"] },
  { y: 42, lines: ["Ribbon"] },
  { y: 76, lines: ["Name Box and", "Formula Bar"] },
  { y: 87, lines: [] as string[] },
  { y: 122, lines: ["Column headers", "(A, B, C ...)"] },
  { y: 170, lines: ["Row headers", "(1, 2, 3 ...)"] },
  { y: 218, lines: ["Active cell +", "fill handle"] },
  { y: 268, lines: ["Sheet tabs"] },
].filter((l) => l.lines.length);

export function MsExcelWindowDiagram() {
  return (
    <Frame w={575} h={318} className="mx-auto w-full max-w-lg">
      <rect x={10} y={10} width={410} height={298} rx={5} className="fill-white stroke-ink-500" strokeWidth={1.5} />
      <rect x={10} y={10} width={410} height={22} rx={5} className="fill-brand-700" />
      <Lines x={215} y={21} lines={["Book1 - Excel"]} size={10} fill="fill-white" />
      {/* ribbon */}
      <rect x={10} y={32} width={410} height={30} className="fill-ink-100 stroke-ink-300" />
      <Lines x={20} y={47} lines={["File   Home   Insert   Page Layout   Formulas   Data   View"]} size={10} fill="fill-ink-800" anchor="start" pre />
      {/* name box + formula bar */}
      <rect x={14} y={66} width={50} height={20} className="fill-white stroke-ink-400" />
      <Lines x={39} y={76} lines={["B4"]} size={10} bold />
      <Lines x={76} y={76} lines={["fx"]} size={10} fill="fill-ink-600" />
      <rect x={90} y={66} width={326} height={20} className="fill-white stroke-ink-400" />
      <Lines x={98} y={76} lines={["=SUM(B2:B3)"]} size={10} anchor="start" />

      {/* column headers */}
      <rect x={10} y={88} width={24} height={20} className="fill-ink-100 stroke-ink-300" />
      {cols.map((c, i) => (
        <g key={c}>
          <rect x={X0 + i * CW} y={88} width={CW} height={20} className={c === "B" ? "fill-ink-300 stroke-ink-400" : "fill-ink-100 stroke-ink-300"} />
          <Lines x={X0 + i * CW + CW / 2} y={98} lines={[c]} size={10} bold />
        </g>
      ))}
      {/* rows */}
      {[1, 2, 3, 4, 5, 6].map((r, ri) => {
        const y = 108 + ri * RH;
        return (
          <g key={r}>
            <rect x={10} y={y} width={24} height={RH} className={r === 4 ? "fill-ink-300 stroke-ink-400" : "fill-ink-100 stroke-ink-300"} />
            <Lines x={22} y={y + RH / 2} lines={[String(r)]} size={10} bold />
            {cols.map((c, ci) => (
              <g key={c}>
                <rect x={X0 + ci * CW} y={y} width={CW} height={RH} className="fill-white stroke-ink-300" />
                {cells[c + r] && <Lines x={X0 + ci * CW + 6} y={y + RH / 2} lines={[cells[c + r]]} size={10} anchor="start" />}
              </g>
            ))}
          </g>
        );
      })}
      {/* active cell B4 */}
      <rect x={X0 + CW} y={108 + 3 * RH} width={CW} height={RH} fill="none" className="stroke-brand-600" strokeWidth={2.5} />
      <rect x={X0 + 2 * CW - 4} y={108 + 4 * RH - 4} width={7} height={7} className="fill-brand-600 stroke-white" />
      {/* sheet tabs + status */}
      <rect x={10} y={260} width={410} height={22} className="fill-ink-100 stroke-ink-300" />
      <rect x={16} y={262} width={56} height={18} className="fill-white stroke-brand-500" />
      <Lines x={44} y={271} lines={["Sheet1"]} size={10} bold />
      <Lines x={112} y={271} lines={["Sheet2      +"]} size={10} fill="fill-ink-600" anchor="middle" pre />
      <rect x={10} y={282} width={410} height={26} className="fill-white stroke-ink-300" />
      <Lines x={410} y={295} lines={["Sum: 123"]} size={10} fill="fill-ink-700" anchor="end" />
      <Lines x={20} y={295} lines={["Ready"]} size={10} fill="fill-ink-700" anchor="start" />

      {labels.map((l) => (
        <g key={l.lines[0]}>
          <Arrow points={[[448, l.y], [424, l.y]]} />
          <Note x={454} y={l.y} lines={l.lines} size={11} anchor="start" />
        </g>
      ))}
    </Frame>
  );
}
