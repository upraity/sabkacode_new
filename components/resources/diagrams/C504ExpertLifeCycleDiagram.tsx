import { Frame, Lines } from "./DiagramKit";
export default function C504ExpertLifeCycleDiagram() {
  return <Frame w={620} h={310} className="mx-auto w-full max-w-xl">
    <Lines x={310} y={20} lines={["Expert System Life Cycle"]} size={12} bold />
    {[
      ["Knowledge",150,80],["Representation",315,80],["Implementation",465,145],
      ["Testing",315,215],["Maintenance",150,215]
    ].map(([t,x,y],i)=><g key={i}><rect x={Number(x)-55} y={Number(y)-22} width="110" height="44" fill="none" stroke="currentColor" strokeWidth="2"/><text x={x} y={Number(y)+5} textAnchor="middle" fontSize="10">{t}</text></g>)}
    <path d="M205 80 L260 80 M370 100 L425 130 M410 190 L370 215 M260 215 L205 215 M150 193 L150 102" fill="none" stroke="currentColor" strokeWidth="2" />
    <Lines x={310} y={275} lines={["Knowledge is refined through testing, deployment and maintenance."]} size={10} />
  </Frame>;
}
