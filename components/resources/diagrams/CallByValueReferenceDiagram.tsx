import { Arrow, Box, Frame, Note } from "./DiagramKit";

function Panel({ x0, title, byRef }: { x0: number; title: string; byRef: boolean }) {
  const fn = byRef ? ["a = 1000", "(address of x)"] : ["a = 10", "(copy)"];
  const fn2 = byRef ? ["b = 1004", "(address of y)"] : ["b = 20", "(copy)"];
  return (
    <g>
      <Note x={x0 + 120} y={14} lines={[title]} size={12} bold />
      <rect x={x0} y={26} width={240} height={78} rx={6} className="fill-white stroke-ink-400" strokeWidth={1.5} strokeDasharray="5 3" />
      <Note x={x0 + 232} y={39} lines={["main()"]} size={10} anchor="end" bold />
      <Box x={x0 + 14} y={50} w={100} h={44} lines={["x = 10", "@ 1000"]} tone="dark" size={11} />
      <Box x={x0 + 126} y={50} w={100} h={44} lines={["y = 20", "@ 1004"]} tone="dark" size={11} />

      <rect x={x0} y={150} width={240} height={78} rx={6} className="fill-white stroke-ink-400" strokeWidth={1.5} strokeDasharray="5 3" />
      <Note x={x0 + 232} y={163} lines={[byRef ? "swap(int *a, int *b)" : "swap(int a, int b)"]} size={10} anchor="end" bold />
      <Box x={x0 + 14} y={174} w={100} h={44} lines={fn} tone={byRef ? "mid" : "light"} size={10} />
      <Box x={x0 + 126} y={174} w={100} h={44} lines={fn2} tone={byRef ? "mid" : "light"} size={10} />

      {byRef ? (
        <g>
          <Arrow points={[[x0 + 64, 174], [x0 + 64, 96]]} />
          <Arrow points={[[x0 + 176, 174], [x0 + 176, 96]]} />
          <Note x={x0 + 70} y={136} lines={["points to"]} size={10} anchor="start" />
          <Note x={x0 + 182} y={136} lines={["points to"]} size={10} anchor="start" />
        </g>
      ) : (
        <g>
          <Arrow points={[[x0 + 64, 96], [x0 + 64, 174]]} />
          <Arrow points={[[x0 + 176, 96], [x0 + 176, 174]]} />
          <Note x={x0 + 70} y={136} lines={["copy"]} size={10} anchor="start" />
          <Note x={x0 + 182} y={136} lines={["copy"]} size={10} anchor="start" />
        </g>
      )}
      <Note x={x0 + 120} y={246} lines={byRef ? ["*a and *b change the original x and y"] : ["a and b are changed; x and y stay 10, 20"]} size={10} />
    </g>
  );
}

export function CallByValueReferenceDiagram() {
  return (
    <Frame w={520} h={262} className="mx-auto w-full max-w-xl">
      <Panel x0={8} title="Call by value" byRef={false} />
      <Panel x0={272} title="Call by reference" byRef />
    </Frame>
  );
}
