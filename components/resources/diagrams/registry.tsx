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


// HR-02 — Employee Relations and Labor Laws
import { IndustrialRelationsSystemDiagram } from "./IndustrialRelationsSystemDiagram";
import { TradeUnionFunctionsDiagram } from "./TradeUnionFunctionsDiagram";
import { CollectiveBargainingProcessDiagram } from "./CollectiveBargainingProcessDiagram";
import { DisciplinaryEnquiryDiagram } from "./DisciplinaryEnquiryDiagram";
import { WorkplaceSafetyCycleDiagram } from "./WorkplaceSafetyCycleDiagram";
import { GratuityProcessDiagram } from "./GratuityProcessDiagram";
import { HrLabourComplianceCycleDiagram } from "./HrLabourComplianceCycleDiagram";

// MBA Semester 3 — Marketing Specialization diagrams
import { CBDecisionJourneyDiagram } from "./CBDecisionJourneyDiagram";
import { ConsumerDecisionProcessDiagram } from "./ConsumerDecisionProcessDiagram";
import { ConsumerPerceptionProcessDiagram } from "./ConsumerPerceptionProcessDiagram";
import { DigitalConsumerJourneyDiagram } from "./DigitalConsumerJourneyDiagram";
import { NeuromarketingFrameworkDiagram } from "./NeuromarketingFrameworkDiagram";
import { ConsumerInsightLoopDiagram } from "./ConsumerInsightLoopDiagram";
import { MarketingAnalyticsFrameworkDiagram } from "./MarketingAnalyticsFrameworkDiagram";
import { ProductFunnelDiagram } from "./ProductFunnelDiagram";
import { RegressionModelDiagram } from "./RegressionModelDiagram";
import { WebAnalyticsCycleDiagram } from "./WebAnalyticsCycleDiagram";
import { PersonalSellingProcessDiagram } from "./PersonalSellingProcessDiagram";
import { SalesForceRecruitmentDiagram } from "./SalesForceRecruitmentDiagram";
import { SalesPlanningControlDiagram } from "./SalesPlanningControlDiagram";
import { DistributionChannelLevelsDiagram } from "./DistributionChannelLevelsDiagram";
import { LogisticsFlowDiagram } from "./LogisticsFlowDiagram";

import { TalentManagementCycleDiagram } from "./TalentManagementCycleDiagram";
import { TalentCompetitiveAdvantageDiagram } from "./TalentCompetitiveAdvantageDiagram";
import { TalentAcquisitionLifecycleDiagram } from "./TalentAcquisitionLifecycleDiagram";
import { TalentDevelopmentCycleDiagram } from "./TalentDevelopmentCycleDiagram";
import { SuccessionPlanningDiagram } from "./SuccessionPlanningDiagram";
import { PerformanceManagementCycleDiagram } from "./PerformanceManagementCycleDiagram";
import { StrategicWorkforcePlanningDiagram } from "./StrategicWorkforcePlanningDiagram";
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

  // HR-02 — Employee Relations and Labor Laws
  "industrial-relations-system": IndustrialRelationsSystemDiagram,
  "trade-union-functions": TradeUnionFunctionsDiagram,
  "collective-bargaining-process": CollectiveBargainingProcessDiagram,
  "disciplinary-enquiry": DisciplinaryEnquiryDiagram,
  "workplace-safety-cycle": WorkplaceSafetyCycleDiagram,
  "gratuity-process": GratuityProcessDiagram,
  "hr-labour-compliance-cycle": HrLabourComplianceCycleDiagram,

  // MBA MK 01 — Consumer Behaviour & Neuro Marketing
  "cb-decision-journey": CBDecisionJourneyDiagram,
  "consumer-decision-process": ConsumerDecisionProcessDiagram,
  "consumer-perception-process": ConsumerPerceptionProcessDiagram,
  "digital-consumer-journey": DigitalConsumerJourneyDiagram,
  "neuromarketing-framework": NeuromarketingFrameworkDiagram,
  "consumer-insight-loop": ConsumerInsightLoopDiagram,

  // MBA MK 02 — Marketing & Web Analytics
  "marketing-analytics-framework": MarketingAnalyticsFrameworkDiagram,
  "product-funnel": ProductFunnelDiagram,
  "regression-model": RegressionModelDiagram,
  "web-analytics-cycle": WebAnalyticsCycleDiagram,

  // MBA MK 03 — Sales & Distribution Management
  "personal-selling-process": PersonalSellingProcessDiagram,
  "sales-force-recruitment": SalesForceRecruitmentDiagram,
  "sales-planning-control": SalesPlanningControlDiagram,
  "distribution-channel-levels": DistributionChannelLevelsDiagram,
  "logistics-flow": LogisticsFlowDiagram,

  // HR-01 — Talent Acquisition Management
    "talent-management-cycle": TalentManagementCycleDiagram,
  "talent-competitive-advantage": TalentCompetitiveAdvantageDiagram,
  "talent-acquisition-lifecycle": TalentAcquisitionLifecycleDiagram,
  "talent-development-cycle": TalentDevelopmentCycleDiagram,
  "succession-planning": SuccessionPlanningDiagram,
  "performance-management-cycle": PerformanceManagementCycleDiagram,
  "strategic-workforce-planning": StrategicWorkforcePlanningDiagram,
};
