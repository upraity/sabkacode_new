import { Box, Frame, Note } from "./DiagramKit";

export function HtmlStructureDiagram() {
  return (
    <Frame w={430} h={322} className="mx-auto w-full max-w-md">
      <Box x={10} y={8} w={410} h={24} lines={["<!DOCTYPE html>   (tells the browser: this is HTML5)"]} tone="muted" size={10} rx={3} />
      <rect x={10} y={40} width={410} height={274} rx={6} className="fill-ink-100 stroke-ink-400" strokeWidth={1.5} />
      <Note x={22} y={54} lines={["<html lang=\"en\">"]} size={11} anchor="start" bold />

      <rect x={24} y={66} width={382} height={82} rx={5} className="fill-white stroke-brand-500" strokeWidth={1.5} />
      <Note x={34} y={80} lines={["<head>   information about the page (not shown)"]} size={10} anchor="start" bold />
      <Box x={34} y={94} w={110} h={40} lines={["<title>", "My Page"]} tone="light" size={10} rx={3} />
      <Box x={154} y={94} w={120} h={40} lines={["<meta charset>", "UTF-8"]} tone="light" size={10} rx={3} />
      <Box x={284} y={94} w={112} h={40} lines={["<style>", "<link> <script>"]} tone="light" size={10} rx={3} />

      <rect x={24} y={158} width={382} height={130} rx={5} className="fill-white stroke-brand-500" strokeWidth={1.5} />
      <Note x={34} y={172} lines={["<body>   everything visible on the page"]} size={10} anchor="start" bold />
      <Box x={34} y={186} w={110} h={30} lines={["<h1> ... <h6>"]} tone="mid" size={10} rx={3} />
      <Box x={154} y={186} w={120} h={30} lines={["<p>  <br>  <hr>"]} tone="mid" size={10} rx={3} />
      <Box x={284} y={186} w={112} h={30} lines={["<a>  <img>"]} tone="mid" size={10} rx={3} />
      <Box x={34} y={226} w={110} h={30} lines={["<ul> <ol> <li>"]} tone="mid" size={10} rx={3} />
      <Box x={154} y={226} w={120} h={30} lines={["<table> <tr> <td>"]} tone="mid" size={10} rx={3} />
      <Box x={284} y={226} w={112} h={30} lines={["<form> <input>"]} tone="mid" size={10} rx={3} />
      <Note x={34} y={276} lines={["</body>"]} size={10} anchor="start" bold />
      <Note x={22} y={303} lines={["</html>"]} size={11} anchor="start" bold />
    </Frame>
  );
}
