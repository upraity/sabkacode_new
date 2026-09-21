import { Arrow, Box, Frame, Note } from "./DiagramKit";

type N = { name: string; x: number; y: number; dir?: boolean };
const W = 96;
const H = 30;
const nodes: Record<string, N> = {
  root: { name: "C:\\ (root)", x: 8, y: 105, dir: true },
  dos: { name: "DOS", x: 132, y: 20, dir: true },
  college: { name: "COLLEGE", x: 132, y: 105, dir: true },
  games: { name: "GAMES", x: 132, y: 190, dir: true },
  format: { name: "FORMAT.EXE", x: 256, y: 20 },
  bca: { name: "BCA", x: 256, y: 75, dir: true },
  mca: { name: "MCA", x: 256, y: 135, dir: true },
  chess: { name: "CHESS.EXE", x: 256, y: 190 },
  notes: { name: "NOTES.TXT", x: 380, y: 50 },
  result: { name: "RESULT.DOC", x: 380, y: 100 },
};
const edges: [string, string][] = [
  ["root", "dos"], ["root", "college"], ["root", "games"],
  ["dos", "format"], ["college", "bca"], ["college", "mca"], ["games", "chess"],
  ["bca", "notes"], ["bca", "result"],
];

export function DosDirectoryTreeDiagram() {
  return (
    <Frame w={490} h={262} className="mx-auto w-full max-w-lg">
      {edges.map(([a, b]) => {
        const p = nodes[a];
        const c = nodes[b];
        const x1 = p.x + W;
        const y1 = p.y + H / 2;
        const x2 = c.x;
        const y2 = c.y + H / 2;
        const mx = x1 + (x2 - x1) / 2;
        return <Arrow key={a + b} points={[[x1, y1], [mx, y1], [mx, y2], [x2, y2]]} head={false} />;
      })}
      {Object.values(nodes).map((n) => (
        <Box key={n.name} x={n.x} y={n.y} w={W} h={H} lines={[n.name]} tone={n.dir ? "dark" : "light"} rx={4} />
      ))}
      <Note x={245} y={248} lines={["Dark box = directory (folder)   |   Light box = file   |   Path: C:\\COLLEGE\\BCA\\NOTES.TXT"]} size={10} />
    </Frame>
  );
}
