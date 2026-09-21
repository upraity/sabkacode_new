import { Frame, Lines } from "./DiagramKit";

export function CssBoxModelDiagram() {
  return (
    <Frame w={440} h={300} className="mx-auto w-full max-w-md">
      <rect x={10} y={10} width={420} height={280} rx={4} className="fill-ink-100 stroke-ink-400" strokeWidth={1.5} strokeDasharray="5 3" />
      <Lines x={220} y={26} lines={["MARGIN  (transparent space outside the border)"]} size={11} bold fill="fill-ink-700" />
      <rect x={50} y={46} width={340} height={210} className="fill-brand-700 stroke-brand-800" strokeWidth={1.5} />
      <Lines x={220} y={62} lines={["BORDER"]} size={11} bold fill="fill-white" />
      <rect x={76} y={76} width={288} height={156} className="fill-white stroke-brand-500" strokeWidth={1.5} />
      <Lines x={220} y={92} lines={["PADDING  (space around the content)"]} size={11} bold fill="fill-ink-800" />
      <rect x={116} y={108} width={208} height={100} className="fill-brand-500 stroke-brand-700" strokeWidth={1.5} />
      <Lines x={220} y={158} lines={["CONTENT", "text or image", "width x height"]} size={11} bold fill="fill-white" />
    </Frame>
  );
}
