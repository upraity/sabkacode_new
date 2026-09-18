// Generic pyramid layout: N horizontal levels, narrow at the top and wide
// at the bottom. Reused for management levels (3), Maslow's hierarchy of
// needs (5), or any other "levels" framework in any subject.
export function PyramidDiagram({ levels }: { levels: string[][] }) {
  const width = 560;
  const top = 20;
  const bottom = 300;
  const n = levels.length;
  const levelH = (bottom - top) / n;
  const maxHalfWidth = 230;
  const minHalfWidth = 60;
  const cx = width / 2;

  const toneClasses = ["fill-brand-900", "fill-brand-800", "fill-brand-700", "fill-brand-600", "fill-brand-500", "fill-brand-400"];

  const rows = levels.map((lines, i) => {
    const topY = top + i * levelH;
    const bottomY = topY + levelH;
    const topHalf = minHalfWidth + ((maxHalfWidth - minHalfWidth) * i) / n;
    const bottomHalf = minHalfWidth + ((maxHalfWidth - minHalfWidth) * (i + 1)) / n;
    return { lines, topY, bottomY, topHalf, bottomHalf, tone: toneClasses[i % toneClasses.length] };
  });

  return (
    <svg
      viewBox={`0 0 ${width} ${bottom + 20}`}
      className="mx-auto w-full max-w-sm"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      {rows.map((r, i) => (
        <g key={i}>
          <polygon
            points={`${cx - r.topHalf},${r.topY} ${cx + r.topHalf},${r.topY} ${cx + r.bottomHalf},${r.bottomY} ${cx - r.bottomHalf},${r.bottomY}`}
            className={r.tone}
            stroke="white"
            strokeWidth={1.5}
          />
          <text
            x={cx}
            y={(r.topY + r.bottomY) / 2 + 4 - (r.lines.length - 1) * 7}
            textAnchor="middle"
            className="fill-white text-[12px] font-medium"
          >
            {r.lines.map((line, li) => (
              <tspan key={li} x={cx} dy={li === 0 ? 0 : 14}>
                {line}
              </tspan>
            ))}
          </text>
        </g>
      ))}
    </svg>
  );
}
