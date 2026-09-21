import { Arrow, Box, Frame, Note } from "./DiagramKit";

const tiers = [
  { title: "Tier 1 - Presentation", body: ["Web browser", "(client)"], tech: "HTML, CSS, JavaScript", tone: "mid" as const },
  { title: "Tier 2 - Application", body: ["Web server +", "scripts (logic)"], tech: "Apache/IIS, PHP, ASP, JSP, CGI", tone: "dark" as const },
  { title: "Tier 3 - Data", body: ["Database", "server"], tech: "MySQL, Oracle, SQL Server", tone: "outline" as const },
];

export function WebArchitectureDiagram() {
  return (
    <Frame w={540} h={180} className="mx-auto w-full max-w-lg">
      {tiers.map((t, i) => {
        const x = 10 + i * 185;
        return (
          <g key={t.title}>
            <Note x={x + 75} y={14} lines={[t.title]} size={11} bold />
            <Box x={x} y={30} w={150} h={70} lines={t.body} tone={t.tone} bold />
            <Note x={x + 75} y={120} lines={[t.tech]} size={10} />
            {i < 2 && <Arrow points={[[x + 150, 65], [x + 185, 65]]} both />}
          </g>
        );
      })}
      <Note x={270} y={160} lines={["Request goes right ->, response comes back <-"]} size={10} />
    </Frame>
  );
}
