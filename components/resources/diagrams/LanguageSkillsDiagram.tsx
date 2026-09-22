import { HubSpokeDiagram } from "./HubSpokeDiagram";

export function LanguageSkillsDiagram() {
  return (
    <HubSpokeDiagram
      centerLines={["Language", "Skills (LSRW)"]}
      spokes={[["Listening"], ["Speaking"], ["Reading"], ["Writing"]]}
    />
  );
}
