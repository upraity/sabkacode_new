import { Frame, Lines } from "./DiagramKit";

export default function C503RasterScanDiagram() {
  const lines = Array.from({length: 7}, (_, i) => {
    const y = 70 + i * 28;
    return <line key={i} x1={80} y1={y} x2={540} y2={y} stroke="currentColor" strokeWidth="1.5" />;
  });
  return (
    <Frame w={620} h={310} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Raster Scan Pattern"]} size={12} bold />
      <rect x="75" y="55" width="475" height="195" fill="none" stroke="currentColor" strokeWidth="2" />
      {lines}
      <polyline points="80,70 540,70 80,98 540,98 80,126 540,126 80,154 540,154 80,182 540,182 80,210 540,210 80,238 540,238" fill="none" stroke="currentColor" strokeWidth="1" />
      <Lines x={310} y={280} lines={["The display is refreshed line by line across the raster."]} size={10} />
    </Frame>
  );
}
