import { Frame, Lines, Note } from "./DiagramKit";

const panels = [
  { id: 0, title: "A ∪ B" },
  { id: 1, title: "A ∩ B" },
  { id: 2, title: "A − B" },
  { id: 3, title: "A′ (complement)" },
];

export function VennOperationsDiagram() {
  const shade = "fill-brand-500 stroke-brand-700";
  const plain = "fill-white stroke-ink-500";
  return (
    <Frame w={560} h={150} className="mx-auto w-full max-w-lg">
      {panels.map((p) => {
        const x0 = 8 + p.id * 138;
        return (
          <g key={p.id} transform={`translate(${x0} 0)`}>
            <defs>
              <clipPath id={`venn-a-${p.id}`}>
                <circle cx={48} cy={58} r={32} />
              </clipPath>
            </defs>
            <rect x={0} y={4} width={130} height={104} rx={4} className={p.id === 3 ? shade : "fill-white stroke-ink-400"} strokeWidth={1.5} />
            {p.id === 0 && (
              <>
                <circle cx={48} cy={58} r={32} className={shade} strokeWidth={1.5} />
                <circle cx={82} cy={58} r={32} className={shade} strokeWidth={1.5} />
              </>
            )}
            {p.id === 1 && (
              <>
                <circle cx={48} cy={58} r={32} className={plain} strokeWidth={1.5} />
                <circle cx={82} cy={58} r={32} className={plain} strokeWidth={1.5} />
                <circle cx={82} cy={58} r={32} className={shade} clipPath={`url(#venn-a-${p.id})`} strokeWidth={1.5} />
              </>
            )}
            {p.id === 2 && (
              <>
                <circle cx={48} cy={58} r={32} className={shade} strokeWidth={1.5} />
                <circle cx={82} cy={58} r={32} className={plain} strokeWidth={1.5} />
              </>
            )}
            {p.id === 3 && (
              <>
                <circle cx={48} cy={58} r={32} className={plain} strokeWidth={1.5} />
                <circle cx={82} cy={58} r={32} className={shade} strokeWidth={0} />
              </>
            )}
            {p.id === 3 && <circle cx={48} cy={58} r={32} className={plain} strokeWidth={1.5} />}
            <Lines x={36} y={58} lines={["A"]} size={12} bold fill={p.id === 3 || p.id === 2 ? "fill-ink-800" : "fill-ink-800"} />
            {p.id !== 3 && <Lines x={94} y={58} lines={["B"]} size={12} bold />}
            <Note x={10} y={16} lines={["U"]} size={10} anchor="start" bold />
            <Note x={65} y={128} lines={[p.title]} size={12} bold />
          </g>
        );
      })}
    </Frame>
  );
}
