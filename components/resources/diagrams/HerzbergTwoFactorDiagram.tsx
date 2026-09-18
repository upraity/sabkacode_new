const hygiene = ["Salary", "Company Policy", "Working Conditions", "Supervision", "Job Security"];
const motivators = ["Achievement", "Recognition", "Responsibility", "Growth", "Work Itself"];

export function HerzbergTwoFactorDiagram() {
  const colW = 220;
  const gap = 30;
  const startY = 70;
  const rowH = 28;

  return (
    <svg
      viewBox="0 0 490 300"
      className="mx-auto w-full max-w-md"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <rect x={10} y={10} width={colW} height={40} rx={8} className="fill-ink-700" />
      <text x={10 + colW / 2} y={35} textAnchor="middle" className="fill-white text-[12.5px] font-semibold">
        Hygiene Factors (Dissatisfiers)
      </text>

      <rect x={10 + colW + gap} y={10} width={colW} height={40} rx={8} className="fill-brand-700" />
      <text x={10 + colW + gap + colW / 2} y={35} textAnchor="middle" className="fill-white text-[12.5px] font-semibold">
        Motivators (Satisfiers)
      </text>

      {hygiene.map((item, i) => (
        <g key={item}>
          <rect x={10} y={startY + i * rowH} width={colW} height={rowH - 6} rx={6} className="fill-ink-100" />
          <text x={10 + colW / 2} y={startY + i * rowH + (rowH - 6) / 2 + 4} textAnchor="middle" className="fill-ink-700 text-[11.5px]">
            {item}
          </text>
        </g>
      ))}

      {motivators.map((item, i) => (
        <g key={item}>
          <rect x={10 + colW + gap} y={startY + i * rowH} width={colW} height={rowH - 6} rx={6} className="fill-brand-50" />
          <text
            x={10 + colW + gap + colW / 2}
            y={startY + i * rowH + (rowH - 6) / 2 + 4}
            textAnchor="middle"
            className="fill-brand-800 text-[11.5px]"
          >
            {item}
          </text>
        </g>
      ))}
    </svg>
  );
}
