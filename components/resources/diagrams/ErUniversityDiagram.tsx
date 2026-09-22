import { Frame, Lines, Note } from "./DiagramKit";

const st = "fill-white stroke-brand-600";

function Attr({ x, y, t, pk: k, cx, cy }: { x: number; y: number; t: string; pk?: boolean; cx: number; cy: number }) {
  return (
    <g>
      <line x1={x} y1={y} x2={cx} y2={cy} className="stroke-ink-500" strokeWidth={1.2} />
      <ellipse cx={x} cy={y} rx={36} ry={14} className={st} strokeWidth={1.5} />
      <Lines x={x} y={y} lines={[t]} size={10} fill="fill-ink-800" />
      {k && <line x1={x - 20} y1={y + 6} x2={x + 20} y2={y + 6} className="stroke-ink-800" strokeWidth={1} />}
    </g>
  );
}

export function ErUniversityDiagram() {
  return (
    <Frame w={690} h={330} className="mx-auto w-full max-w-2xl">
      {/* relationship lines */}
      <line x1={130} y1={167} x2={158} y2={167} className="stroke-ink-700" strokeWidth={1.5} />
      <line x1={242} y1={164} x2={270} y2={164} className="stroke-ink-700" strokeWidth={1.5} />
      <line x1={242} y1={170} x2={270} y2={170} className="stroke-ink-700" strokeWidth={1.5} />
      <line x1={380} y1={167} x2={428} y2={167} className="stroke-ink-700" strokeWidth={1.5} />
      <line x1={512} y1={167} x2={560} y2={167} className="stroke-ink-700" strokeWidth={1.5} />
      <Note x={142} y={156} lines={["1"]} size={11} bold />
      <Note x={256} y={154} lines={["N"]} size={11} bold />
      <Note x={410} y={156} lines={["M"]} size={11} bold />
      <Note x={538} y={156} lines={["N"]} size={11} bold />

      {/* entities */}
      <rect x={20} y={150} width={110} height={34} className="fill-brand-700 stroke-brand-800" strokeWidth={1.5} />
      <Lines x={75} y={167} lines={["DEPARTMENT"]} size={11} bold fill="fill-white" />
      <rect x={270} y={150} width={110} height={34} className="fill-brand-700 stroke-brand-800" strokeWidth={1.5} />
      <Lines x={325} y={167} lines={["STUDENT"]} size={11} bold fill="fill-white" />
      <rect x={560} y={150} width={110} height={34} className="fill-brand-700 stroke-brand-800" strokeWidth={1.5} />
      <Lines x={615} y={167} lines={["COURSE"]} size={11} bold fill="fill-white" />

      {/* relationships */}
      <polygon points="200,142 242,167 200,192 158,167" className={st} strokeWidth={1.5} />
      <Lines x={200} y={167} lines={["has"]} size={11} bold />
      <polygon points="470,142 512,167 470,192 428,167" className={st} strokeWidth={1.5} />
      <Lines x={470} y={167} lines={["enrols in"]} size={10} bold />

      {/* attributes */}
      <Attr x={45} y={86} t="dept_id" pk cx={75} cy={150} />
      <Attr x={45} y={250} t="dept_name" cx={75} cy={184} />
      <Attr x={125} y={250} t="hod" cx={90} cy={184} />
      <Attr x={280} y={86} t="roll" pk cx={310} cy={150} />
      <Attr x={362} y={86} t="name" cx={340} cy={150} />
      <Attr x={280} y={250} t="city" cx={310} cy={184} />
      <Attr x={362} y={250} t="marks" cx={340} cy={184} />
      <Attr x={565} y={86} t="course_id" pk cx={595} cy={150} />
      <Attr x={650} y={86} t="title" cx={635} cy={150} />
      <Attr x={615} y={250} t="credits" cx={615} cy={184} />
      <Attr x={470} y={250} t="grade" cx={470} cy={192} />
      <Note x={345} y={312} lines={["'has' is 1:N (total participation of STUDENT);  'enrols in' is M:N and carries the attribute grade"]} size={10} />
    </Frame>
  );
}
