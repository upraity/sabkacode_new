import { Box, Frame } from "./DiagramKit";

export function PageLayoutDiagram() {
  return (
    <Frame w={410} h={296} className="mx-auto w-full max-w-md">
      <Box x={10} y={10} w={390} h={42} lines={["<header>", "logo, site title"]} tone="dark" />
      <Box x={10} y={58} w={390} h={28} lines={["<nav>  Home | Courses | Contact"]} tone="mid" />
      <rect x={10} y={92} width={264} height={148} rx={4} className="fill-white stroke-ink-400" strokeWidth={1.5} strokeDasharray="4 3" />
      <Box x={18} y={98} w={248} h={22} lines={["<main>"]} tone="muted" size={10} rx={3} bold />
      <Box x={18} y={126} w={248} h={50} lines={["<section>", "heading and text"]} tone="light" size={10} />
      <Box x={18} y={184} w={248} h={50} lines={["<article>", "independent content"]} tone="light" size={10} />
      <Box x={282} y={92} w={118} h={148} lines={["<aside>", "side content", "links, ads"]} tone="outline" />
      <Box x={10} y={246} w={390} h={40} lines={["<footer>", "copyright, contact"]} tone="dark" />
    </Frame>
  );
}
