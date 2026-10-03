import { Frame, Lines } from "./DiagramKit";

export default function C503PolygonMeshDiagram() {
  return (
    <Frame w={620} h={310} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Polygon Mesh"]} size={12} bold />
      <polygon points="170,210 235,80 365,70 455,175 330,245" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="235" y1="80" x2="330" y2="245" stroke="currentColor" />
      <line x1="365" y1="70" x2="170" y2="210" stroke="currentColor" />
      <circle cx="170" cy="210" r="5" fill="currentColor" /><circle cx="235" cy="80" r="5" fill="currentColor" />
      <circle cx="365" cy="70" r="5" fill="currentColor" /><circle cx="455" cy="175" r="5" fill="currentColor" />
      <circle cx="330" cy="245" r="5" fill="currentColor" />
      <Lines x={310} y={280} lines={["Vertices + edges + faces form the basic mesh structure."]} size={10} />
    </Frame>
  );
}
