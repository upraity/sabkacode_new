import { HubSpokeDiagram } from "./HubSpokeDiagram";

export function RatioCategoriesDiagram() {
  return (
    <HubSpokeDiagram
      centerLines={["Ratio", "Analysis"]}
      spokes={[["Liquidity", "Ratios"], ["Solvency", "Ratios"], ["Profitability", "Ratios"], ["Activity", "Ratios"]]}
    />
  );
}
