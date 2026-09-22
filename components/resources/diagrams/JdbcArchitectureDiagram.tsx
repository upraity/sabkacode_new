import { StepperDiagram } from "./StepperDiagram";

export function JdbcArchitectureDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Java", "application"],
        ["JDBC API", "DriverManager"],
        ["JDBC", "driver"],
        ["Network", "protocol"],
        ["Database", "server"],
      ]}
    />
  );
}
