import { ComponentType } from "react";
import { LevelsOfStrategyDiagram } from "./LevelsOfStrategyDiagram";
import { StrategyCycleDiagram } from "./StrategyCycleDiagram";
import { BoardCompositionDiagram } from "./BoardCompositionDiagram";
import { PestelDiagram } from "./PestelDiagram";
import { PorterFiveForcesDiagram } from "./PorterFiveForcesDiagram";
import { ValueChainDiagram } from "./ValueChainDiagram";
import { SwotMatrixDiagram } from "./SwotMatrixDiagram";
import { GenericStrategiesMatrixDiagram } from "./GenericStrategiesMatrixDiagram";
import { BcgMatrixDiagram } from "./BcgMatrixDiagram";
import { AnsoffMatrixDiagram } from "./AnsoffMatrixDiagram";
import { McKinsey7SDiagram } from "./McKinsey7SDiagram";
import { GeNineCellDiagram } from "./GeNineCellDiagram";
import { MatrixStructureDiagram } from "./MatrixStructureDiagram";
import { BalancedScorecardDiagram } from "./BalancedScorecardDiagram";
import { ManagementLevelsPyramidDiagram } from "./ManagementLevelsPyramidDiagram";
import { MaslowHierarchyDiagram } from "./MaslowHierarchyDiagram";
import { JohariWindowDiagram } from "./JohariWindowDiagram";
import { LeadershipSituationalDiagram } from "./LeadershipSituationalDiagram";
import { TuckmanModelDiagram } from "./TuckmanModelDiagram";
import { KurtLewinChangeDiagram } from "./KurtLewinChangeDiagram";
import { PlanningProcessDiagram } from "./PlanningProcessDiagram";
import { DecisionMakingProcessDiagram } from "./DecisionMakingProcessDiagram";
import { MboProcessDiagram } from "./MboProcessDiagram";
import { RecruitmentSelectionProcessDiagram } from "./RecruitmentSelectionProcessDiagram";
import { ControlProcessDiagram } from "./ControlProcessDiagram";
import { ObModelDiagram } from "./ObModelDiagram";
import { PerceptionProcessDiagram } from "./PerceptionProcessDiagram";
import { ExpectancyTheoryDiagram } from "./ExpectancyTheoryDiagram";
import { HerzbergTwoFactorDiagram } from "./HerzbergTwoFactorDiagram";
import { TransactionalAnalysisDiagram } from "./TransactionalAnalysisDiagram";

// HR-02 — Employee Relations and Labor Laws
import { IndustrialRelationsSystemDiagram } from "./IndustrialRelationsSystemDiagram";
import { TradeUnionFunctionsDiagram } from "./TradeUnionFunctionsDiagram";
import { CollectiveBargainingProcessDiagram } from "./CollectiveBargainingProcessDiagram";
import { DisciplinaryEnquiryDiagram } from "./DisciplinaryEnquiryDiagram";
import { WorkplaceSafetyCycleDiagram } from "./WorkplaceSafetyCycleDiagram";
import { GratuityProcessDiagram } from "./GratuityProcessDiagram";
import { HrLabourComplianceCycleDiagram } from "./HrLabourComplianceCycleDiagram";

// Add a new diagram anywhere on the platform by:
//   1. Building a presentational component in this folder (no required props).
//   2. Registering it here under a stable, kebab-case id.
//   3. Referencing that id from a { kind: "diagram", diagramId: "..." }
//      block in any subject's `unitNotes` data.
export const diagramRegistry: Record<string, ComponentType> = {
  "levels-of-strategy": LevelsOfStrategyDiagram,
  "strategy-cycle": StrategyCycleDiagram,
  "board-composition": BoardCompositionDiagram,
  pestel: PestelDiagram,
  "porter-five-forces": PorterFiveForcesDiagram,
  "value-chain": ValueChainDiagram,
  "swot-matrix": SwotMatrixDiagram,
  "generic-strategies-matrix": GenericStrategiesMatrixDiagram,
  "bcg-matrix": BcgMatrixDiagram,
  "ansoff-matrix": AnsoffMatrixDiagram,
  "mckinsey-7s": McKinsey7SDiagram,
  "ge-nine-cell": GeNineCellDiagram,
  "matrix-structure": MatrixStructureDiagram,
  "balanced-scorecard": BalancedScorecardDiagram,

  // MCOB — Management Concept & Organisational Behaviour
  "management-levels-pyramid": ManagementLevelsPyramidDiagram,
  "maslow-hierarchy": MaslowHierarchyDiagram,
  "johari-window": JohariWindowDiagram,
  "leadership-situational": LeadershipSituationalDiagram,
  "tuckman-model": TuckmanModelDiagram,
  "kurt-lewin-change": KurtLewinChangeDiagram,
  "planning-process": PlanningProcessDiagram,
  "decision-making-process": DecisionMakingProcessDiagram,
  "mbo-process": MboProcessDiagram,
  "recruitment-selection-process": RecruitmentSelectionProcessDiagram,
  "control-process": ControlProcessDiagram,
  "ob-model": ObModelDiagram,
  "perception-process": PerceptionProcessDiagram,
  "expectancy-theory": ExpectancyTheoryDiagram,
  "herzberg-two-factor": HerzbergTwoFactorDiagram,
  "transactional-analysis": TransactionalAnalysisDiagram,

  // HR-02 — Employee Relations and Labor Laws
  "industrial-relations-system": IndustrialRelationsSystemDiagram,
  "trade-union-functions": TradeUnionFunctionsDiagram,
  "collective-bargaining-process": CollectiveBargainingProcessDiagram,
  "disciplinary-enquiry": DisciplinaryEnquiryDiagram,
  "workplace-safety-cycle": WorkplaceSafetyCycleDiagram,
  "gratuity-process": GratuityProcessDiagram,
  "hr-labour-compliance-cycle": HrLabourComplianceCycleDiagram,
};
