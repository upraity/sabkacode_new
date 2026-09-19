import { StepperDiagram } from "./StepperDiagram";

export function AccountingCycleDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Journalizing", "(Journal Entries)"],
        ["Ledger", "Posting"],
        ["Trial", "Balance"],
        ["Final", "Accounts"],
      ]}
    />
  );
}
