import type { ReactNode } from "react";

// Small shared SVG helpers used by the new BCA diagrams.
// Only Tailwind tokens already used by the existing diagrams are referenced
// (ink-100…800, brand-400…800, white) so no tailwind config change is needed.

export type Tone = "dark" | "mid" | "light" | "outline" | "muted";
export type Size = 10 | 11 | 12;

const toneClass: Record<Tone, { shape: string; text: string }> = {
  dark: { shape: "fill-brand-700 stroke-brand-800", text: "fill-white" },
  mid: { shape: "fill-brand-600 stroke-brand-700", text: "fill-white" },
  light: { shape: "fill-ink-100 stroke-ink-300", text: "fill-ink-800" },
  outline: { shape: "fill-white stroke-brand-500", text: "fill-ink-800" },
  muted: { shape: "fill-white stroke-ink-300", text: "fill-ink-700" },
};

const sizeClass: Record<Size, string> = {
  10: "text-[10px]",
  11: "text-[11px]",
  12: "text-[12px]",
};

export function Frame({
  w,
  h,
  className = "mx-auto w-full max-w-md",
  children,
}: {
  w: number;
  h: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={className} xmlns="http://www.w3.org/2000/svg" role="img">
      <defs>
        <marker id="dk-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" className="fill-ink-500" />
        </marker>
      </defs>
      {children}
    </svg>
  );
}

/** Centred (or anchored) multi-line text. `y` is the vertical CENTRE of the block. */
export function Lines({
  x,
  y,
  lines,
  size = 11,
  bold = false,
  fill = "fill-ink-800",
  anchor = "middle",
  gap,
  pre = false,
}: {
  x: number;
  y: number;
  lines: string[];
  size?: Size;
  bold?: boolean;
  fill?: string;
  anchor?: "start" | "middle" | "end";
  gap?: number;
  /** keep runs of spaces (SVG text collapses them by default) */
  pre?: boolean;
}) {
  const g = gap ?? size + 3;
  const top = y - ((lines.length - 1) * g) / 2 + size * 0.35;
  return (
    <text
      textAnchor={anchor}
      xmlSpace={pre ? "preserve" : undefined}
      className={`${fill} ${sizeClass[size]} ${bold ? "font-semibold" : "font-medium"} ${pre ? "whitespace-pre" : ""}`}
    >
      {lines.map((l, i) => (
        <tspan key={i} x={x} y={top + i * g}>
          {l}
        </tspan>
      ))}
    </text>
  );
}

export function Box({
  x,
  y,
  w,
  h,
  lines,
  tone = "light",
  size = 11,
  bold = false,
  rx = 6,
  dashed = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  lines?: string[];
  tone?: Tone;
  size?: Size;
  bold?: boolean;
  rx?: number;
  dashed?: boolean;
}) {
  const t = toneClass[tone];
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={rx} className={t.shape} strokeWidth={1.5} strokeDasharray={dashed ? "4 3" : undefined} />
      {lines && <Lines x={x + w / 2} y={y + h / 2} lines={lines} size={size} bold={bold} fill={t.text} />}
    </g>
  );
}

export function Note({
  x,
  y,
  lines,
  size = 10,
  anchor = "middle",
  bold = false,
  pre = false,
}: {
  x: number;
  y: number;
  lines: string[];
  size?: Size;
  anchor?: "start" | "middle" | "end";
  bold?: boolean;
  pre?: boolean;
}) {
  return <Lines x={x} y={y} lines={lines} size={size} anchor={anchor} bold={bold} fill="fill-ink-600" pre={pre} />;
}

/** Polyline arrow. `points` = [[x,y],…]; arrow head at the last point unless head=false. */
export function Arrow({
  points,
  head = true,
  both = false,
  dashed = false,
}: {
  points: [number, number][];
  head?: boolean;
  both?: boolean;
  dashed?: boolean;
}) {
  const d = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ");
  return (
    <path
      d={d}
      fill="none"
      className="stroke-ink-500"
      strokeWidth={1.5}
      strokeDasharray={dashed ? "4 3" : undefined}
      markerEnd={head ? "url(#dk-arrow)" : undefined}
      markerStart={both ? "url(#dk-arrow)" : undefined}
    />
  );
}

/* ---------- flowchart shapes (all centred on cx, cy) ---------- */

export function Terminator({ cx, cy, w = 90, h = 28, text }: { cx: number; cy: number; w?: number; h?: number; text: string }) {
  return <Box x={cx - w / 2} y={cy - h / 2} w={w} h={h} lines={[text]} tone="dark" rx={h / 2} bold />;
}

export function Process({ cx, cy, w = 120, h = 30, lines, size = 11 }: { cx: number; cy: number; w?: number; h?: number; lines: string[]; size?: Size }) {
  return <Box x={cx - w / 2} y={cy - h / 2} w={w} h={h} lines={lines} tone="light" rx={3} size={size} />;
}

export function IO({ cx, cy, w = 120, h = 30, lines, size = 11 }: { cx: number; cy: number; w?: number; h?: number; lines: string[]; size?: Size }) {
  const s = 12;
  const pts = `${cx - w / 2 + s},${cy - h / 2} ${cx + w / 2},${cy - h / 2} ${cx + w / 2 - s},${cy + h / 2} ${cx - w / 2},${cy + h / 2}`;
  return (
    <g>
      <polygon points={pts} className="fill-ink-100 stroke-ink-300" strokeWidth={1.5} />
      <Lines x={cx} y={cy} lines={lines} size={size} fill="fill-ink-800" />
    </g>
  );
}

export function Decision({ cx, cy, w = 130, h = 56, lines, size = 11 }: { cx: number; cy: number; w?: number; h?: number; lines: string[]; size?: Size }) {
  const pts = `${cx},${cy - h / 2} ${cx + w / 2},${cy} ${cx},${cy + h / 2} ${cx - w / 2},${cy}`;
  return (
    <g>
      <polygon points={pts} className="fill-white stroke-brand-500" strokeWidth={1.5} />
      <Lines x={cx} y={cy} lines={lines} size={size} fill="fill-ink-800" />
    </g>
  );
}

export function Dot({ cx, cy, r = 10, text }: { cx: number; cy: number; r?: number; text?: string }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} className="fill-white stroke-ink-400" strokeWidth={1.5} />
      {text && <Lines x={cx} y={cy} lines={[text]} size={10} bold fill="fill-ink-700" />}
    </g>
  );
}
