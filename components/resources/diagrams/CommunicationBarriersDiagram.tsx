import { HubSpokeDiagram } from "./HubSpokeDiagram";

export function CommunicationBarriersDiagram() {
  return (
    <HubSpokeDiagram
      centerLines={["Barriers to", "Communication"]}
      spokes={[["Physical", "Barriers"], ["Semantic", "Barriers"], ["Psychological", "Barriers"], ["Organizational", "Barriers"]]}
    />
  );
}
