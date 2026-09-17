import { HubSpokeDiagram } from "./HubSpokeDiagram";

export function McKinsey7SDiagram() {
  return (
    <HubSpokeDiagram
      centerLines={["Shared", "Values"]}
      spokes={[
        ["Strategy"],
        ["Structure"],
        ["Systems"],
        ["Style"],
        ["Staff"],
        ["Skills"],
      ]}
    />
  );
}
