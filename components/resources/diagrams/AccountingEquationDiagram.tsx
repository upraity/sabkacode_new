export function AccountingEquationDiagram() {
  const items = [
    { label: "Assets", tone: "fill-brand-800" },
    { label: "=", tone: "" },
    { label: "Liabilities", tone: "fill-brand-600" },
    { label: "+", tone: "" },
    { label: "Owner's Equity", tone: "fill-brand-400" },
  ];
  let x = 20;
  const boxW = 110;
  const symW = 30;
  const gap = 14;

  return (
    <svg viewBox="0 0 460 110" className="mx-auto w-full max-w-lg" xmlns="http://www.w3.org/2000/svg" role="img">
      {items.map((item, i) => {
        const isSymbol = item.label === "=" || item.label === "+";
        const w = isSymbol ? symW : boxW;
        const el = !isSymbol ? (
          <g key={i}>
            <rect x={x} y={20} width={w} height={60} rx={10} className={item.tone} />
            <text x={x + w / 2} y={55} textAnchor="middle" className="fill-white text-[12px] font-semibold">
              {item.label}
            </text>
          </g>
        ) : (
          <text key={i} x={x + w / 2} y={57} textAnchor="middle" className="fill-ink-700 text-[20px] font-bold">
            {item.label}
          </text>
        );
        x += w + gap;
        return el;
      })}
    </svg>
  );
}
