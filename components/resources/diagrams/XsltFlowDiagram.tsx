import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function XsltFlowDiagram() {
  return (
    <Frame w={540} h={182} className="mx-auto w-full max-w-lg">
      <Box x={10} y={20} w={130} h={48} lines={["XML document", "books.xml (data)"]} tone="light" />
      <Box x={10} y={100} w={130} h={48} lines={["XSLT style sheet", "books.xsl (rules)"]} tone="light" />
      <Arrow points={[[140, 44], [200, 80]]} />
      <Arrow points={[[140, 124], [200, 92]]} />
      <Box x={200} y={50} w={130} h={70} lines={["XSLT", "processor"]} tone="dark" bold />
      <Arrow points={[[330, 85], [390, 85]]} />
      <Box x={390} y={50} w={140} h={70} lines={["Result", "HTML / XML / text"]} tone="outline" bold />
      <Note x={265} y={168} lines={["The processor applies the template rules to the XML data"]} size={10} />
    </Frame>
  );
}
