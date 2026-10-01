import { StepperDiagram } from "./StepperDiagram";

export function CollectiveBargainingProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Prepare", "Facts and demands"],
        ["Open", "Agenda and issues"],
        ["Negotiate", "Proposals and alternatives"],
        ["Settle", "Agreement"],
        ["Implement", "Apply and review"],
      ]}
    />
  );
}
