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

import { PerformanceManagementCycleDiagram } from "./PerformanceManagementCycleDiagram";
import { PerformanceSystemProcessDiagram } from "./PerformanceSystemProcessDiagram";
import { KraKsaKpiFrameworkDiagram } from "./KraKsaKpiFrameworkDiagram";
import { ThreeSixtyAppraisalDiagram } from "./ThreeSixtyAppraisalDiagram";
import { MboCycleDiagram } from "./MboCycleDiagram";
import { CompetencyMappingCareerLinkDiagram } from "./CompetencyMappingCareerLinkDiagram";
import { BalancedScorecardPerspectivesDiagram } from "./BalancedScorecardPerspectivesDiagram";
import { RewardSystemFrameworkDiagram } from "./RewardSystemFrameworkDiagram";
import { JobEvaluationMethodsDiagram } from "./JobEvaluationMethodsDiagram";
import { PayStructureBreakdownDiagram } from "./PayStructureBreakdownDiagram";
import { IncentivePaymentMethodsDiagram } from "./IncentivePaymentMethodsDiagram";
import { ProfitSharingFrameworkDiagram } from "./ProfitSharingFrameworkDiagram";


// BCA Semester 1 — C-101 (Computer Fundamentals & MS-Office) and C-102 (Programming using C)
import { ComputerBlockDiagram } from "./ComputerBlockDiagram";
import { ComputerTypesDiagram } from "./ComputerTypesDiagram";
import { LanguageTranslatorsDiagram } from "./LanguageTranslatorsDiagram";
import { DataHierarchyDiagram } from "./DataHierarchyDiagram";
import { MemoryHierarchyDiagram } from "./MemoryHierarchyDiagram";
import { FlowchartSymbolsDiagram } from "./FlowchartSymbolsDiagram";
import { FlowchartEvenOddDiagram } from "./FlowchartEvenOddDiagram";
import { FlowchartSumNDiagram } from "./FlowchartSumNDiagram";
import { OsLayersDiagram } from "./OsLayersDiagram";
import { DosBootProcessDiagram } from "./DosBootProcessDiagram";
import { DosDirectoryTreeDiagram } from "./DosDirectoryTreeDiagram";
import { WindowsDesktopDiagram } from "./WindowsDesktopDiagram";
import { WindowAnatomyDiagram } from "./WindowAnatomyDiagram";
import { OfficeSuiteDiagram } from "./OfficeSuiteDiagram";
import { MsWordWindowDiagram } from "./MsWordWindowDiagram";
import { MsExcelWindowDiagram } from "./MsExcelWindowDiagram";
import { DtpProcessDiagram } from "./DtpProcessDiagram";
import { AccessObjectsDiagram } from "./AccessObjectsDiagram";
import { CProgramStructureDiagram } from "./CProgramStructureDiagram";
import { CCompilationProcessDiagram } from "./CCompilationProcessDiagram";
import { IfElseFlowDiagram } from "./IfElseFlowDiagram";
import { LoopsFlowDiagram } from "./LoopsFlowDiagram";
import { ArrayMemory1dDiagram } from "./ArrayMemory1dDiagram";
import { ArrayMemory2dDiagram } from "./ArrayMemory2dDiagram";
import { FunctionCallFlowDiagram } from "./FunctionCallFlowDiagram";
import { CallByValueReferenceDiagram } from "./CallByValueReferenceDiagram";
import { StringMemoryDiagram } from "./StringMemoryDiagram";
import { PointerDiagram } from "./PointerDiagram";
import { MemorySegmentsDiagram } from "./MemorySegmentsDiagram";
import { StructVsUnionDiagram } from "./StructVsUnionDiagram";
import { FileHandlingFlowDiagram } from "./FileHandlingFlowDiagram";

// BCA Semester 1 — C-103 (Business Communication & Ethical Values) and C-104 (HTML, CSS-XML)
import { SevenCsDiagram } from "./SevenCsDiagram";
import { CommunicationFlowDiagram } from "./CommunicationFlowDiagram";
import { BusinessLetterLayoutDiagram } from "./BusinessLetterLayoutDiagram";
import { ReportStructureDiagram } from "./ReportStructureDiagram";
import { SmartGoalsDiagram } from "./SmartGoalsDiagram";
import { TeamStagesDiagram } from "./TeamStagesDiagram";
import { ValuesSourcesDiagram } from "./ValuesSourcesDiagram";
import { UrlAnatomyDiagram } from "./UrlAnatomyDiagram";
import { ClientServerModelDiagram } from "./ClientServerModelDiagram";
import { WebArchitectureDiagram } from "./WebArchitectureDiagram";
import { DhtmlComponentsDiagram } from "./DhtmlComponentsDiagram";
import { DomTreeDiagram } from "./DomTreeDiagram";
import { HtmlStructureDiagram } from "./HtmlStructureDiagram";
import { PageLayoutDiagram } from "./PageLayoutDiagram";
import { CssRuleAnatomyDiagram } from "./CssRuleAnatomyDiagram";
import { CssBoxModelDiagram } from "./CssBoxModelDiagram";
import { XmlTreeDiagram } from "./XmlTreeDiagram";
import { XsltFlowDiagram } from "./XsltFlowDiagram";


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
import { VennDiagramSets } from "./VennDiagramSets";
import { EcologicalPyramidDiagram } from "./EcologicalPyramidDiagram";
import { FoodChainDiagram } from "./FoodChainDiagram";
import { TripleBottomLineDiagram } from "./TripleBottomLineDiagram";
import { LanguageSkillsDiagram } from "./LanguageSkillsDiagram";
import { DecisionTreeDiagram } from "./DecisionTreeDiagram";

import { CapitalMarketStructureDiagram } from "./CapitalMarketStructureDiagram";
import { SecurityAnalysisApproachesDiagram } from "./SecurityAnalysisApproachesDiagram";
import { PortfolioRiskDiagram } from "./PortfolioRiskDiagram";
import { PortfolioModelsDiagram } from "./PortfolioModelsDiagram";
import { DerivativeParticipantsDiagram } from "./DerivativeParticipantsDiagram";
import { PerformanceMeasuresDiagram } from "./PerformanceMeasuresDiagram";
import { PortfolioRevisionDiagram } from "./PortfolioRevisionDiagram";

import { DsClassificationDiagram } from "./DsClassificationDiagram";
import { SparseMatrixDiagram } from "./SparseMatrixDiagram";
import { StackOperationsDiagram } from "./StackOperationsDiagram";
import { RecursionStackDiagram } from "./RecursionStackDiagram";
import { QueueOperationsDiagram } from "./QueueOperationsDiagram";
import { LinkedListNodeDiagram } from "./LinkedListNodeDiagram";
import { LinkedListTypesDiagram } from "./LinkedListTypesDiagram";
import { TreeTerminologyDiagram } from "./TreeTerminologyDiagram";
import { BinaryTreeTypesDiagram } from "./BinaryTreeTypesDiagram";
import { TreeTraversalOrdersDiagram } from "./TreeTraversalOrdersDiagram";
import { BstInsertionDiagram } from "./BstInsertionDiagram";
import { SortingComplexityDiagram } from "./SortingComplexityDiagram";
import { GraphTypesDiagram } from "./GraphTypesDiagram";
import { DijkstraGraphDiagram } from "./DijkstraGraphDiagram";
import { ManagementFunctionsDiagram } from "./ManagementFunctionsDiagram";
import { EvolutionOfManagementDiagram } from "./EvolutionOfManagementDiagram";
// import { DecisionMakingProcessDiagram } from "./DecisionMakingProcessDiagram";
import { OrganizationStructuresDiagram } from "./OrganizationStructuresDiagram";
import { MaslowHierarchyMgmtDiagram } from "./MaslowHierarchyMgmtDiagram";
import { ControllingProcessDiagram } from "./ControllingProcessDiagram";
import { TrigRatiosDiagram } from "./TrigRatiosDiagram";
import { MvtGeometryDiagram } from "./MvtGeometryDiagram";

//mba 3rd sem HR
import { EmployeeRelationsFrameworkDiagram } from "./EmployeeRelationsFrameworkDiagram";
import { TradeUnionParticipativeManagementDiagram } from "./TradeUnionParticipativeManagementDiagram";
// import { CollectiveBargainingProcessDiagram } from "./CollectiveBargainingProcessDiagram";
import { DomesticEnquiryFlowDiagram } from "./DomesticEnquiryFlowDiagram";
import { WagePaymentFrameworkDiagram } from "./WagePaymentFrameworkDiagram";
import { IndustrialDisputeSettlementDiagram } from "./IndustrialDisputeSettlementDiagram";
import { MinimumWageFrameworkDiagram } from "./MinimumWageFrameworkDiagram";
import { EsiBenefitFrameworkDiagram } from "./EsiBenefitFrameworkDiagram";
import { LabourLawComplianceCycleDiagram } from "./LabourLawComplianceCycleDiagram";
// import { GratuityProcessDiagram } from "./GratuityProcessDiagram";
import { EmployeeSocialSecurityBenefitsDiagram } from "./EmployeeSocialSecurityBenefitsDiagram";
import { TaxAssessmentCycleDiagram } from "./TaxAssessmentCycleDiagram";
import { TaxIncomeComputationDiagram } from "./TaxIncomeComputationDiagram";
import { TaxPlanningSpectrumDiagram } from "./TaxPlanningSpectrumDiagram";
import { TaxComplianceDiagram } from "./TaxComplianceDiagram";
import { CorporateTaxDiagram } from "./CorporateTaxDiagram";
import { GSTComponentsDiagram } from "./GSTComponentsDiagram";
import { CreditCycleDiagram } from "./CreditCycleDiagram";
import { CreditRiskMatrixDiagram } from "./CreditRiskMatrixDiagram";
import { LetterOfCreditDiagram } from "./LetterOfCreditDiagram";
import { LoanCommitmentDiagram } from "./LoanCommitmentDiagram";
import { OperationalRiskDiagram } from "./OperationalRiskDiagram";
import { IncidentManagementDiagram } from "./IncidentManagementDiagram";
import { CreditAnalysisDiagram } from "./CreditAnalysisDiagram";
import { RatingProcessDiagram } from "./RatingProcessDiagram";

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

  // BCA Sem 1 — DBRAU
  "computer-block-diagram": ComputerBlockDiagram,
  "computer-types": ComputerTypesDiagram,
  "language-translators": LanguageTranslatorsDiagram,
  "data-hierarchy": DataHierarchyDiagram,
  "memory-hierarchy": MemoryHierarchyDiagram,
  "flowchart-symbols": FlowchartSymbolsDiagram,
  "flowchart-even-odd": FlowchartEvenOddDiagram,
  "flowchart-sum-n": FlowchartSumNDiagram,
  "os-layers": OsLayersDiagram,
  "dos-boot-process": DosBootProcessDiagram,
  "dos-directory-tree": DosDirectoryTreeDiagram,
  "windows-desktop": WindowsDesktopDiagram,
  "window-anatomy": WindowAnatomyDiagram,
  "office-suite": OfficeSuiteDiagram,
  "ms-word-window": MsWordWindowDiagram,
  "ms-excel-window": MsExcelWindowDiagram,
  "dtp-process": DtpProcessDiagram,
  "access-objects": AccessObjectsDiagram,
  "c-program-structure": CProgramStructureDiagram,
  "c-compilation-process": CCompilationProcessDiagram,
  "if-else-flow": IfElseFlowDiagram,
  "loops-flow": LoopsFlowDiagram,
  "array-memory-1d": ArrayMemory1dDiagram,
  "array-memory-2d": ArrayMemory2dDiagram,
  "function-call-flow": FunctionCallFlowDiagram,
  "call-by-value-reference": CallByValueReferenceDiagram,
  "string-memory": StringMemoryDiagram,
  "pointer-diagram": PointerDiagram,
  "memory-segments": MemorySegmentsDiagram,
  "struct-vs-union": StructVsUnionDiagram,
  "file-handling-flow": FileHandlingFlowDiagram,

  // BCA Sem 1 — C-103 / C-104
  "seven-cs": SevenCsDiagram,
  "communication-flow": CommunicationFlowDiagram,
  "business-letter-layout": BusinessLetterLayoutDiagram,
  "report-structure": ReportStructureDiagram,
  "smart-goals": SmartGoalsDiagram,
  "team-stages": TeamStagesDiagram,
  "values-sources": ValuesSourcesDiagram,
  "url-anatomy": UrlAnatomyDiagram,
  "client-server-model": ClientServerModelDiagram,
  "web-architecture": WebArchitectureDiagram,
  "dhtml-components": DhtmlComponentsDiagram,
  "dom-tree": DomTreeDiagram,
  "html-structure": HtmlStructureDiagram,
  "page-layout": PageLayoutDiagram,
  "css-rule-anatomy": CssRuleAnatomyDiagram,
  "css-box-model": CssBoxModelDiagram,
  "xml-tree": XmlTreeDiagram,
  "xslt-flow": XsltFlowDiagram,

    // BBA (AKTU) Sem 1
  "venn-diagram-sets": VennDiagramSets,
  "ecological-pyramid": EcologicalPyramidDiagram,
  "food-chain": FoodChainDiagram,
  "triple-bottom-line": TripleBottomLineDiagram,
  "language-skills": LanguageSkillsDiagram,
  "decision-tree": DecisionTreeDiagram,

    "ds-classification": DsClassificationDiagram,
  "sparse-matrix": SparseMatrixDiagram,
  "stack-operations": StackOperationsDiagram,
  "recursion-stack": RecursionStackDiagram,
  "queue-operations": QueueOperationsDiagram,
  "linked-list-node": LinkedListNodeDiagram,
  "linked-list-types": LinkedListTypesDiagram,
  "tree-terminology": TreeTerminologyDiagram,
  "binary-tree-types": BinaryTreeTypesDiagram,
  "tree-traversal-orders": TreeTraversalOrdersDiagram,
  "bst-insertion": BstInsertionDiagram,
  "sorting-complexity": SortingComplexityDiagram,
  "graph-types": GraphTypesDiagram,
  "dijkstra-graph": DijkstraGraphDiagram,
  "management-functions": ManagementFunctionsDiagram,
  "evolution-of-management": EvolutionOfManagementDiagram,
  // "decision-making-process": DecisionMakingProcessDiagram,
  "organization-structures": OrganizationStructuresDiagram,
  "maslow-hierarchy-mgmt": MaslowHierarchyMgmtDiagram,
  "controlling-process": ControllingProcessDiagram,
  "trig-ratios": TrigRatiosDiagram,
  "mvt-geometry": MvtGeometryDiagram,

   "employee-relations-framework": EmployeeRelationsFrameworkDiagram,
  "trade-union-participative-management": TradeUnionParticipativeManagementDiagram,
  "collective-bargaining-process": CollectiveBargainingProcessDiagram,
  "domestic-enquiry-flow": DomesticEnquiryFlowDiagram,
  "wage-payment-framework": WagePaymentFrameworkDiagram,
  "industrial-dispute-settlement": IndustrialDisputeSettlementDiagram,
  "minimum-wage-framework": MinimumWageFrameworkDiagram,
  "esi-benefit-framework": EsiBenefitFrameworkDiagram,
  "labour-law-compliance-cycle": LabourLawComplianceCycleDiagram,
  "gratuity-process": GratuityProcessDiagram,
  "employee-social-security-benefits": EmployeeSocialSecurityBenefitsDiagram,

    "performance-management-cycle": PerformanceManagementCycleDiagram,
  "performance-system-process": PerformanceSystemProcessDiagram,
  "kra-ksa-kpi-framework": KraKsaKpiFrameworkDiagram,
  "three-sixty-appraisal": ThreeSixtyAppraisalDiagram,
  "mbo-cycle": MboCycleDiagram,
  "competency-mapping-career-link": CompetencyMappingCareerLinkDiagram,
  "balanced-scorecard-perspectives": BalancedScorecardPerspectivesDiagram,
  "reward-system-framework": RewardSystemFrameworkDiagram,
  "job-evaluation-methods": JobEvaluationMethodsDiagram,
  "pay-structure-breakdown": PayStructureBreakdownDiagram,
  "incentive-payment-methods": IncentivePaymentMethodsDiagram,
  "profit-sharing-framework": ProfitSharingFrameworkDiagram,

    "fm-capital-market-structure": CapitalMarketStructureDiagram,
  "fm-security-analysis-approaches": SecurityAnalysisApproachesDiagram,
  "fm-portfolio-risk": PortfolioRiskDiagram,
  "fm-portfolio-models": PortfolioModelsDiagram,
  "fm-derivative-participants": DerivativeParticipantsDiagram,
  "fm-performance-measures": PerformanceMeasuresDiagram,
  "fm-portfolio-revision": PortfolioRevisionDiagram,

    "rc-credit-cycle": CreditCycleDiagram,
  "rc-credit-risk-matrix": CreditRiskMatrixDiagram,
  "rc-letter-of-credit": LetterOfCreditDiagram,
  "rc-loan-commitment": LoanCommitmentDiagram,
  "rc-operational-risk": OperationalRiskDiagram,
  "rc-incident-management": IncidentManagementDiagram,
  "rc-credit-analysis": CreditAnalysisDiagram,
  "rc-rating-process": RatingProcessDiagram,

    "tax-assessment-cycle": TaxAssessmentCycleDiagram,
  "tax-income-computation": TaxIncomeComputationDiagram,
  "tax-planning-spectrum": TaxPlanningSpectrumDiagram,
  "tax-compliance": TaxComplianceDiagram,
  "corporate-tax": CorporateTaxDiagram,
  "gst-components": GSTComponentsDiagram

};
