import { Frame, Lines } from "./DiagramKit";

export default function C503SplineControlDiagram() {
  return (
    <Frame w={620} h={320} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Spline and Control Points"]} size={12} bold />
      <polyline points="90,230 170,100 280,210 390,90 520,220" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
      <path d="M90 230 C150 115, 210 110, 280 210 C350 305, 430 90, 520 220" fill="none" stroke="currentColor" strokeWidth="3" />
      {[["90","230"],["170","100"],["280","210"],["390","90"],["520","220"]].map(([cx,cy],i)=><circle key={i} cx={cx} cy={cy} r="5" fill="currentColor" />)}
      <Lines x={310} y={285} lines={["Control points influence the smooth curve; exact behavior depends on the spline representation."]} size={10} />
    </Frame>
  );
}
