import { Arrow, Box, Frame, Note } from "./DiagramKit";

const parts = [
  { t: "https", w: 60, tone: "dark" as const, label: ["Protocol"] },
  { t: "://", w: 34, tone: "muted" as const, label: [] as string[] },
  { t: "www.example.com", w: 130, tone: "mid" as const, label: ["Domain name", "(host)"] },
  { t: ":443", w: 46, tone: "outline" as const, label: ["Port"] },
  { t: "/courses/bca.html", w: 116, tone: "dark" as const, label: ["Path to the", "file"] },
  { t: "?sem=1", w: 56, tone: "mid" as const, label: ["Query", "string"] },
  { t: "#syllabus", w: 70, tone: "outline" as const, label: ["Fragment", "(section)"] },
];

export function UrlAnatomyDiagram() {
  let x = 10;
  return (
    <Frame w={540} h={130} className="mx-auto w-full max-w-lg">
      {parts.map((p) => {
        const x0 = x;
        x += p.w;
        return (
          <g key={p.t}>
            <Box x={x0} y={20} w={p.w} h={34} lines={[p.t]} tone={p.tone} size={10} rx={3} />
            {p.label.length > 0 && (
              <>
                <Arrow points={[[x0 + p.w / 2, 82], [x0 + p.w / 2, 56]]} />
                <Note x={x0 + p.w / 2} y={100} lines={p.label} size={10} />
              </>
            )}
          </g>
        );
      })}
    </Frame>
  );
}
