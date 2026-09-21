import { HubSpokeDiagram } from "./HubSpokeDiagram";

export function AccessObjectsDiagram() {
  return (
    <HubSpokeDiagram
      centerLines={["MS-Access", "Database"]}
      spokes={[["Tables", "(store data)"], ["Queries", "(ask questions)"], ["Forms", "(enter data)"], ["Reports", "(print data)"]]}
    />
  );
}
