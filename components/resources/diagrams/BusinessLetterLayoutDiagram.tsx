import { Arrow, Frame, Lines, Note } from "./DiagramKit";

const labels = [
  { n: 1, y: 40, t: "Letterhead" },
  { n: 2, y: 74, t: "Reference no. and date" },
  { n: 3, y: 112, t: "Inside address" },
  { n: 4, y: 150, t: "Salutation" },
  { n: 5, y: 172, t: "Subject line" },
  { n: 6, y: 232, t: "Body (opening, middle, closing)" },
  { n: 7, y: 306, t: "Complimentary close" },
  { n: 8, y: 340, t: "Signature block" },
  { n: 9, y: 388, t: "Enclosure / copy notation" },
];

export function BusinessLetterLayoutDiagram() {
  return (
    <Frame w={560} h={420} className="mx-auto w-full max-w-lg">
      <rect x={10} y={10} width={300} height={400} rx={3} className="fill-white stroke-ink-400" strokeWidth={1.5} />
      <rect x={20} y={20} width={280} height={40} rx={3} className="fill-brand-600" />
      <Lines x={160} y={40} lines={["ABC COMPUTERS  -  address, phone, e-mail"]} size={10} bold fill="fill-white" />
      <Lines x={28} y={74} lines={["Ref. No. ABC/26/031"]} size={10} anchor="start" />
      <Lines x={292} y={74} lines={["20 September 2026"]} size={10} anchor="end" />
      <Lines x={28} y={100} lines={["The Sales Manager"]} size={10} anchor="start" />
      <Lines x={28} y={114} lines={["Techno World Pvt. Ltd."]} size={10} anchor="start" />
      <Lines x={28} y={128} lines={["New Delhi - 110019"]} size={10} anchor="start" />
      <Lines x={28} y={150} lines={["Dear Sir,"]} size={10} anchor="start" />
      <Lines x={28} y={172} lines={["Subject: Enquiry about laptops"]} size={10} bold anchor="start" />
      {[196, 210, 224, 238, 252, 266].map((y, i) => (
        <line key={y} x1={28} y1={y} x2={i === 2 || i === 5 ? 200 : 292} y2={y} className="stroke-ink-300" strokeWidth={3} />
      ))}
      <Lines x={28} y={306} lines={["Yours faithfully,"]} size={10} anchor="start" />
      <Lines x={28} y={332} lines={["(signature)"]} size={10} anchor="start" />
      <Lines x={28} y={346} lines={["Rakesh Gupta, Proprietor"]} size={10} anchor="start" />
      <Lines x={28} y={388} lines={["Encl.: Catalogue      c.c.: File"]} size={10} anchor="start" pre />

      {labels.map((l) => (
        <g key={l.n}>
          <Arrow points={[[336, l.y], [314, l.y]]} />
          <Note x={342} y={l.y} lines={[`${l.n}  ${l.t}`]} size={11} anchor="start" pre />
        </g>
      ))}
    </Frame>
  );
}
