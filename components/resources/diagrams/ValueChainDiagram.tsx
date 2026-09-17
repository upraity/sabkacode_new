const supportActivities = ["Firm Infrastructure", "Human Resource Management", "Technology Development", "Procurement"];
const primaryActivities = ["Inbound\nLogistics", "Operations", "Outbound\nLogistics", "Marketing\n& Sales", "Service"];

export function ValueChainDiagram() {
  const left = 20;
  const right = 460;
  const width = right - left;
  const bandH = 32;

  return (
    <svg
      viewBox="0 0 540 320"
      className="mx-auto w-full max-w-lg"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <text x={left} y={12} className="fill-ink-400 text-[10px] font-semibold uppercase tracking-wide">
        Support Activities
      </text>
      {supportActivities.map((label, i) => (
        <g key={label}>
          <rect x={left} y={16 + i * bandH} width={width} height={bandH - 3} rx={6} className="fill-brand-800" />
          <text
            x={left + width / 2}
            y={16 + i * bandH + (bandH - 3) / 2 + 4}
            textAnchor="middle"
            className="fill-white text-[11px] font-medium"
          >
            {label}
          </text>
        </g>
      ))}

      <text x={left} y={16 + supportActivities.length * bandH + 14} className="fill-ink-400 text-[10px] font-semibold uppercase tracking-wide">
        Primary Activities
      </text>
      {(() => {
        const rowY = 16 + supportActivities.length * bandH + 20;
        const rowH = 90;
        const boxW = width / primaryActivities.length;
        return primaryActivities.map((label, i) => (
          <g key={label}>
            <polygon
              points={
                i < primaryActivities.length - 1
                  ? `${left + i * boxW},${rowY} ${left + (i + 1) * boxW - 14},${rowY} ${left + (i + 1) * boxW},${rowY + rowH / 2} ${left + (i + 1) * boxW - 14},${rowY + rowH} ${left + i * boxW},${rowY + rowH} ${left + i * boxW + 14},${rowY + rowH / 2}`
                  : `${left + i * boxW},${rowY} ${left + (i + 1) * boxW},${rowY} ${left + (i + 1) * boxW},${rowY + rowH} ${left + i * boxW},${rowY + rowH} ${left + i * boxW + 14},${rowY + rowH / 2}`
              }
              className="fill-brand-600"
            />
            {label.split("\n").map((line, li, arr) => (
              <text
                key={li}
                x={left + i * boxW + boxW / 2 + 4}
                y={rowY + rowH / 2 + 4 + (li - (arr.length - 1) / 2) * 14}
                textAnchor="middle"
                className="fill-white text-[10.5px] font-medium"
              >
                {line}
              </text>
            ))}
          </g>
        ));
      })()}

      {/* Margin arrow */}
      <polygon
        points={`${right + 10},${16 + supportActivities.length * bandH + 20} ${right + 55},${16 + supportActivities.length * bandH + 20 + 45} ${right + 10},${16 + supportActivities.length * bandH + 20 + 90}`}
        className="fill-ink-300"
      />
      <text
        x={right + 25}
        y={16 + supportActivities.length * bandH + 20 + 49}
        className="fill-ink-800 text-[11px] font-semibold"
        transform={`rotate(90 ${right + 25} ${16 + supportActivities.length * bandH + 20 + 49})`}
      >
        Margin
      </text>
    </svg>
  );
}
