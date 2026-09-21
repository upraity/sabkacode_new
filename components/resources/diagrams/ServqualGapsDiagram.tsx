import { HubSpokeDiagram } from "./HubSpokeDiagram";

export function ServqualGapsDiagram() {
  return (
    <HubSpokeDiagram
      centerLines={["SERVQUAL", "Gaps"]}
      spokes={[
        ["Gap 1: Knowledge", "(mgmt vs. customer)"],
        ["Gap 2: Standards", "(mgmt vs. specs)"],
        ["Gap 3: Delivery", "(specs vs. service)"],
        ["Gap 4: Communication", "(service vs. promises)"],
        ["Gap 5: Customer", "(expectation vs. perception)"],
      ]}
    />
  );
}
