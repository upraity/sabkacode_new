import { HubSpokeDiagram } from "./HubSpokeDiagram";

export function OfficeSuiteDiagram() {
  return (
    <HubSpokeDiagram
      centerLines={["MS-Office", "Suite"]}
      spokes={[["MS-Word", "(Documents)"], ["MS-Excel", "(Spreadsheets)"], ["MS-Access", "(Database)"], ["MS-PowerPoint", "(Presentations)"]]}
    />
  );
}
