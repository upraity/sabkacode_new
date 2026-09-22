import { Arrow, Frame, Note } from "./DiagramKit";

const st = "fill-white stroke-brand-600";

function Label({ x, y, name, use }: { x: number; y: number; name: string; use: string }) {
  return (
    <g>
      <Note x={x} y={y - 7} lines={[name]} size={11} anchor="start" bold />
      <Note x={x} y={y + 8} lines={[use]} size={10} anchor="start" />
    </g>
  );
}

export function ErSymbolsDiagram() {
  const rows = [40, 100, 160, 220, 280];
  return (
    <Frame w={540} h={318} className="mx-auto w-full max-w-lg">
      {/* left column */}
      <rect x={20} y={rows[0] - 16} width={80} height={32} className={st} strokeWidth={1.5} />
      <Label x={116} y={rows[0]} name="Entity" use="a thing (STUDENT)" />
      <rect x={20} y={rows[1] - 16} width={80} height={32} className={st} strokeWidth={1.5} />
      <rect x={24} y={rows[1] - 12} width={72} height={24} className={st} strokeWidth={1.5} />
      <Label x={116} y={rows[1]} name="Weak entity" use="depends on an owner" />
      <ellipse cx={60} cy={rows[2]} rx={40} ry={16} className={st} strokeWidth={1.5} />
      <Label x={116} y={rows[2]} name="Attribute" use="property (name)" />
      <ellipse cx={60} cy={rows[3]} rx={40} ry={16} className={st} strokeWidth={1.5} />
      <line x1={38} y1={rows[3] + 6} x2={82} y2={rows[3] + 6} className="stroke-ink-800" strokeWidth={1.5} />
      <Label x={116} y={rows[3]} name="Key attribute" use="underlined (roll)" />
      <ellipse cx={60} cy={rows[4]} rx={40} ry={16} className={st} strokeWidth={1.5} />
      <ellipse cx={60} cy={rows[4]} rx={34} ry={11} className={st} strokeWidth={1.5} />
      <Label x={116} y={rows[4]} name="Multi-valued attribute" use="double ellipse (phone)" />

      {/* right column */}
      <ellipse cx={300} cy={rows[0]} rx={40} ry={16} className={st} strokeWidth={1.5} strokeDasharray="4 3" />
      <Label x={356} y={rows[0]} name="Derived attribute" use="dashed (age)" />
      <polygon points={`300,${rows[1] - 22} 340,${rows[1]} 300,${rows[1] + 22} 260,${rows[1]}`} className={st} strokeWidth={1.5} />
      <Label x={356} y={rows[1]} name="Relationship" use="association (enrols in)" />
      <polygon points={`300,${rows[2] - 22} 340,${rows[2]} 300,${rows[2] + 22} 260,${rows[2]}`} className={st} strokeWidth={1.5} />
      <polygon points={`300,${rows[2] - 15} 328,${rows[2]} 300,${rows[2] + 15} 272,${rows[2]}`} className={st} strokeWidth={1.5} />
      <Label x={356} y={rows[2]} name="Identifying relationship" use="double diamond" />
      <Arrow points={[[262, rows[3]], [338, rows[3]]]} head={false} />
      <Label x={356} y={rows[3]} name="Single line" use="partial participation" />
      <line x1={262} y1={rows[4] - 3} x2={338} y2={rows[4] - 3} className="stroke-ink-500" strokeWidth={1.5} />
      <line x1={262} y1={rows[4] + 3} x2={338} y2={rows[4] + 3} className="stroke-ink-500" strokeWidth={1.5} />
      <Label x={356} y={rows[4]} name="Double line" use="total participation" />
    </Frame>
  );
}
