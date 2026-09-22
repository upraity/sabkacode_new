import { Frame, Lines, Note } from "./DiagramKit";

export function JdkJreJvmDiagram() {
  return (
    <Frame w={460} h={280} className="mx-auto w-full max-w-md">
      <rect x={20} y={20} width={420} height={220} rx={8} className="fill-white stroke-brand-600" strokeWidth={1.5} />
      <Lines x={230} y={40} lines={["JDK  (Java Development Kit)"]} size={12} bold />
      <Note x={230} y={56} lines={["javac, java, javadoc, jar, jdb"]} size={10} />

      <rect x={45} y={68} width={370} height={150} rx={8} className="fill-white stroke-brand-500" strokeWidth={1.5} />
      <Lines x={230} y={86} lines={["JRE  (Java Runtime Environment)"]} size={12} bold />
      <Note x={230} y={100} lines={["standard class libraries (java.lang, java.util ...)"]} size={10} />

      <rect x={70} y={112} width={320} height={110} rx={8} className="fill-brand-700 stroke-brand-800" strokeWidth={1.5} />
      <Lines x={230} y={140} lines={["JVM  (Java Virtual Machine)"]} size={13} bold fill="fill-white" />
      <text x={230} y={160} textAnchor="middle" className="fill-white text-[10px]">class loader, bytecode verifier,</text>
      <text x={230} y={174} textAnchor="middle" className="fill-white text-[10px]">interpreter / JIT compiler</text>
      <text x={230} y={192} textAnchor="middle" className="fill-white text-[10px]">runs .class bytecode</text>
    </Frame>
  );
}
