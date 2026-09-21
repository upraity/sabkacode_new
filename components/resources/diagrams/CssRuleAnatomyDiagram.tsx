import { Arrow, Frame, Note } from "./DiagramKit";

export function CssRuleAnatomyDiagram() {
  const mono = "fill-white font-mono text-[14px]";
  return (
    <Frame w={570} h={190} className="mx-auto w-full max-w-lg">
      <rect x={10} y={10} width={230} height={120} rx={6} className="fill-ink-800" />
      <text x={26} y={40} className={mono}>h1 {"{"}</text>
      <text x={46} y={68} className={mono}>color: blue;</text>
      <text x={46} y={96} className={mono}>font-size: 24px;</text>
      <text x={26} y={122} className={mono}>{"}"}</text>

      <Arrow points={[[290, 36], [58, 36]]} />
      <Note x={296} y={36} lines={["Selector - which element to style"]} size={11} anchor="start" bold />
      <Arrow points={[[290, 64], [136, 64]]} />
      <Note x={296} y={64} lines={["Declaration = property : value ;"]} size={11} anchor="start" bold />
      <Arrow points={[[290, 92], [160, 92]]} />
      <Note x={296} y={92} lines={["Property (what) and value (how)"]} size={11} anchor="start" />
      <Arrow points={[[290, 120], [40, 120]]} />
      <Note x={296} y={120} lines={["Braces { } enclose the declaration block"]} size={11} anchor="start" />
      <Note x={130} y={160} lines={["A rule = selector + declaration block"]} size={11} bold />
    </Frame>
  );
}
