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
import { DemandSupplyCurveDiagram } from "./DemandSupplyCurveDiagram";
import { CostCurvesDiagram } from "./CostCurvesDiagram";
import { ProductLifeCycleDiagram } from "./ProductLifeCycleDiagram";
import { NormalDistributionDiagram } from "./NormalDistributionDiagram";
import { CircularFlowDiagram } from "./CircularFlowDiagram";
import { AccountingEquationDiagram } from "./AccountingEquationDiagram";
import { BusinessCycleDiagram } from "./BusinessCycleDiagram";
import { AccountingCycleDiagram } from "./AccountingCycleDiagram";
import { StpProcessDiagram } from "./StpProcessDiagram";
import { AidaModelDiagram } from "./AidaModelDiagram";
import { ConsumerBuyingProcessDiagram } from "./ConsumerBuyingProcessDiagram";
import { DistributionChannelDiagram } from "./DistributionChannelDiagram";
import { CommunicationProcessDiagram } from "./CommunicationProcessDiagram";
import { WritingProcessDiagram } from "./WritingProcessDiagram";
import { EntrepreneurialProcessDiagram } from "./EntrepreneurialProcessDiagram";
import { HypothesisTestingProcessDiagram } from "./HypothesisTestingProcessDiagram";
import { MarketingMixDiagram } from "./MarketingMixDiagram";
import { CommunicationBarriersDiagram } from "./CommunicationBarriersDiagram";
import { InnovationTypesDiagram } from "./InnovationTypesDiagram";
import { RatioCategoriesDiagram } from "./RatioCategoriesDiagram";
import { HardwareCategoriesDiagram } from "./HardwareCategoriesDiagram";
import { DecisionTreeDiagram } from "./DecisionTreeDiagram";
import { LppGraphDiagram } from "./LppGraphDiagram";
import { NetworkDiagramCpm } from "./NetworkDiagramCpm";
import { GanttChartDiagram } from "./GanttChartDiagram";
import { EoqCurveDiagram } from "./EoqCurveDiagram";
import { BreakEvenChartDiagram } from "./BreakEvenChartDiagram";
import { WorkingCapitalCycleDiagram } from "./WorkingCapitalCycleDiagram";
import { EbitEpsChartDiagram } from "./EbitEpsChartDiagram";
import { MisPyramidDiagram } from "./MisPyramidDiagram";
import { ServqualGapsDiagram } from "./ServqualGapsDiagram";
import { HrPlanningProcessDiagram } from "./HrPlanningProcessDiagram";
import { CompensationStructureDiagram } from "./CompensationStructureDiagram";
import { LpgModelDiagram } from "./LpgModelDiagram";
import { PdcaCycleDiagram } from "./PdcaCycleDiagram";
import { ResearchProcessDiagram } from "./ResearchProcessDiagram";
import { CompanyFormationDiagram } from "./CompanyFormationDiagram";
import { VarianceAnalysisDiagram } from "./VarianceAnalysisDiagram";

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
  "demand-supply-curve": DemandSupplyCurveDiagram,
  "cost-curves": CostCurvesDiagram,
  "product-life-cycle": ProductLifeCycleDiagram,
  "normal-distribution": NormalDistributionDiagram,
  "circular-flow": CircularFlowDiagram,
  "accounting-equation": AccountingEquationDiagram,
  "business-cycle": BusinessCycleDiagram,
  "accounting-cycle": AccountingCycleDiagram,
  "stp-process": StpProcessDiagram,
  "aida-model": AidaModelDiagram,
  "consumer-buying-process": ConsumerBuyingProcessDiagram,
  "distribution-channel": DistributionChannelDiagram,
  "communication-process": CommunicationProcessDiagram,
  "writing-process": WritingProcessDiagram,
  "entrepreneurial-process": EntrepreneurialProcessDiagram,
  "hypothesis-testing-process": HypothesisTestingProcessDiagram,
  "marketing-mix": MarketingMixDiagram,
  "communication-barriers": CommunicationBarriersDiagram,
  "innovation-types": InnovationTypesDiagram,
  "ratio-categories": RatioCategoriesDiagram,
  "hardware-categories": HardwareCategoriesDiagram,
  "decision-tree": DecisionTreeDiagram,
  "lpp-graph": LppGraphDiagram,
  "network-diagram-cpm": NetworkDiagramCpm,
  "gantt-chart": GanttChartDiagram,
  "eoq-curve": EoqCurveDiagram,
  "break-even-chart": BreakEvenChartDiagram,
  "working-capital-cycle": WorkingCapitalCycleDiagram,
  "ebit-eps-chart": EbitEpsChartDiagram,
  "mis-pyramid": MisPyramidDiagram,
  "servqual-gaps": ServqualGapsDiagram,
  "hr-planning-process": HrPlanningProcessDiagram,
  "compensation-structure": CompensationStructureDiagram,
  "lpg-model": LpgModelDiagram,
  "pdca-cycle": PdcaCycleDiagram,
  "research-process": ResearchProcessDiagram,
  "company-formation": CompanyFormationDiagram,
  "variance-analysis": VarianceAnalysisDiagram,
};
