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
// import { PerformanceManagementCycleDiagram } from "./PerformanceManagementCycleDiagram";
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

import { SupplyChainFlowDiagram } from "./SupplyChainFlowDiagram";
import { LogisticsFunctionsDiagram } from "./LogisticsFunctionsDiagram";
import { CrossDockingDiagram } from "./CrossDockingDiagram";
import { BullwhipEffectDiagram } from "./BullwhipEffectDiagram";
import { WarehouseNetworkDiagram } from "./WarehouseNetworkDiagram";
import { ReverseLogisticsDiagram } from "./ReverseLogisticsDiagram";
import { CRMLinkageDiagram } from "./CRMLinkageDiagram";
import { BPRProcessRedesignDiagram } from "./BPRProcessRedesignDiagram";
import { ProcessMappingDiagram } from "./ProcessMappingDiagram";
import { HammerChampyDiagram } from "./HammerChampyDiagram";
import { ChangeManagementDiagram } from "./ChangeManagementDiagram";
import { DigitalBPRDiagram } from "./DigitalBPRDiagram";
import { QualityEvolutionDiagram } from "./QualityEvolutionDiagram";
import { TQMFrameworkDiagram } from "./TQMFrameworkDiagram";
import { SevenQCToolsDiagram } from "./SevenQCToolsDiagram";
import { QFDFlowDiagram } from "./QFDFlowDiagram";
import { DmaicDiagram } from "./DmaicDiagram";
import { AuditCycleDiagram } from "./AuditCycleDiagram";
import TradeTheoryComparisonDiagram from "./TradeTheoryComparisonDiagram";
import TradePolicyInstrumentsDiagram from "./TradePolicyInstrumentsDiagram";
import PESTELInternationalMarketDiagram from "./PESTELInternationalMarketDiagram";
import InternationalMarketingMixDiagram from "./InternationalMarketingMixDiagram";
import EPRGFrameworkDiagram from "./EPRGFrameworkDiagram";
import InternationalEntryModesDiagram from "./InternationalEntryModesDiagram";
import ExportImportFrameworkDiagram from "./ExportImportFrameworkDiagram";
import ExportDocumentationFlowDiagram from "./ExportDocumentationFlowDiagram";
import ShippingLogisticsChainDiagram from "./ShippingLogisticsChainDiagram";
import InternationalPaymentMethodsDiagram from "./InternationalPaymentMethodsDiagram";
import CustomsDigitalTradeDiagram from "./CustomsDigitalTradeDiagram";
import GeopoliticalTradeOrderDiagram from "./GeopoliticalTradeOrderDiagram";
import TradeDisruptionRiskDiagram from "./TradeDisruptionRiskDiagram";
import EnergySecurityDiagram from "./EnergySecurityDiagram";
import RegionalIntegrationLadderDiagram from "./RegionalIntegrationLadderDiagram";
import FutureTradeRiskDiagram from "./FutureTradeRiskDiagram";
import It01InformationSystemLevelsDiagram from "./It01InformationSystemLevelsDiagram";
import It01AnalysisModelsDiagram from "./It01AnalysisModelsDiagram";
import It01ApplicationArchitectureDiagram from "./It01ApplicationArchitectureDiagram";
import It01EcommerceArchitectureDiagram from "./It01EcommerceArchitectureDiagram";
import It01ImplementationCycleDiagram from "./It01ImplementationCycleDiagram";
import It01SecurityContinuityDiagram from "./It01SecurityContinuityDiagram";
import It02Industry40Diagram from "./It02Industry40Diagram";
import It02DataValueChainDiagram from "./It02DataValueChainDiagram";
import It02IotArchitectureDiagram from "./It02IotArchitectureDiagram";
import It02BlockchainFlowDiagram from "./It02BlockchainFlowDiagram";
import It023DPrintingDiagram from "./It023DPrintingDiagram";
import It02VirtualTryOnDiagram from "./It02VirtualTryOnDiagram";
import It03DatabaseArchitectureDiagram from "./It03DatabaseArchitectureDiagram";
import It03ErModelDiagram from "./It03ErModelDiagram";
import It03SqlQueryFlowDiagram from "./It03SqlQueryFlowDiagram";
import It03IndexingDiagram from "./It03IndexingDiagram";
import It03BackupRecoveryDiagram from "./It03BackupRecoveryDiagram";
import It03DataWarehouseDiagram from "./It03DataWarehouseDiagram";
import Cm01CooperativePrinciplesDiagram from "./Cm01CooperativePrinciplesDiagram";
import Cm01ManagementGovernanceDiagram from "./Cm01ManagementGovernanceDiagram";
import Cm01AdministrationStructureDiagram from "./Cm01AdministrationStructureDiagram";
import Cm01ApexInstitutionsDiagram from "./Cm01ApexInstitutionsDiagram";
import Cm01ForeignModelsDiagram from "./Cm01ForeignModelsDiagram";
import Cm02LegalTimelineDiagram from "./Cm02LegalTimelineDiagram";
import Cm02AuditInspectionDiagram from "./Cm02AuditInspectionDiagram";
import Cm02LiquidationCycleDiagram from "./Cm02LiquidationCycleDiagram";
import Cm03CreditStructureDiagram from "./Cm03CreditStructureDiagram";
import Cm03DevelopmentCycleDiagram from "./Cm03DevelopmentCycleDiagram";
import Cm03DccbScbDiagram from "./Cm03DccbScbDiagram";
import Cm03LtStructureDiagram from "./Cm03LtStructureDiagram";
import Cm03NonAgriMapDiagram from "./Cm03NonAgriMapDiagram";

//mba sem 4 
import { ValueEducationDiagram } from "./ValueEducationDiagram";
import { SelfBodyHarmonyDiagram } from "./SelfBodyHarmonyDiagram";
import { HumanRelationshipsDiagram } from "./HumanRelationshipsDiagram";
import { FourOrdersNatureDiagram } from "./FourOrdersNatureDiagram";
import { ProfessionalEthicsDiagram } from "./ProfessionalEthicsDiagram";
import { ServiceMarketingMixDiagram } from "./ServiceMarketingMixDiagram";
import { ServiceConsumerBehaviorDiagram } from "./ServiceConsumerBehaviorDiagram";
import { ServiceDeliveryQualityDiagram } from "./ServiceDeliveryQualityDiagram";
import { RetailFormatsDiagram } from "./RetailFormatsDiagram";
import { MerchandiseSupplyChainDiagram } from "./MerchandiseSupplyChainDiagram";
import { B2BEnvironmentDiagram } from "./B2BEnvironmentDiagram";
import { OrganizationalBuyingDiagram } from "./OrganizationalBuyingDiagram";
import { B2BStrategyDiagram } from "./B2BStrategyDiagram";
import { B2BSTPDiagram } from "./B2BSTPDiagram";
import { B2BChannelsCommunicationDiagram } from "./B2BChannelsCommunicationDiagram";
import { HRAnalyticsEvolutionDiagram } from "./HRAnalyticsEvolutionDiagram";
import { HRDataPlanningDiagram } from "./HRDataPlanningDiagram";
import { RecruitmentAnalyticsDiagram } from "./RecruitmentAnalyticsDiagram";
import { PerformanceCompensationAnalyticsDiagram } from "./PerformanceCompensationAnalyticsDiagram";
import { HRDashboardDiagram } from "./HRDashboardDiagram";
import { ODEvolutionDiagram } from "./ODEvolutionDiagram";
import { ODActionResearchDiagram } from "./ODActionResearchDiagram";
import { ODImplementationDiagram } from "./ODImplementationDiagram";
import { ODStressInterventionsDiagram } from "./ODStressInterventionsDiagram";
import { ODDiversityInclusionDiagram } from "./ODDiversityInclusionDiagram";
import { BehaviouralFinanceFoundationsDiagram } from "./BehaviouralFinanceFoundationsDiagram";
import { RationalVsBehaviouralDiagram } from "./RationalVsBehaviouralDiagram";
import { HeuristicsBiasesDiagram } from "./HeuristicsBiasesDiagram";
import { ProspectMentalAccountingDiagram } from "./ProspectMentalAccountingDiagram";
import { InvestorBehaviourPortfolioDiagram } from "./InvestorBehaviourPortfolioDiagram";
import { SFMFrameworkDiagram } from "./SFMFrameworkDiagram";
import { CapitalStructureDiagram } from "./CapitalStructureDiagram";
import { DividendPolicyDiagram } from "./DividendPolicyDiagram";
import { TermFinanceVentureDiagram } from "./TermFinanceVentureDiagram";
import { ProjectAnalysisDiagram } from "./ProjectAnalysisDiagram";
import { ServiceOperationsNatureDiagram } from "./ServiceOperationsNatureDiagram";
import { ServiceProcessCapacityDiagram } from "./ServiceProcessCapacityDiagram";
import { SERVQUALDiagram } from "./SERVQUALDiagram";
import { ServiceTechnologyDiagram } from "./ServiceTechnologyDiagram";
import { ServiceStrategyDiagram } from "./ServiceStrategyDiagram";
import { SourcingProcessDiagram } from "./SourcingProcessDiagram";
import { SupplierEvaluationDiagram } from "./SupplierEvaluationDiagram";
import { PriceNegotiationDiagram } from "./PriceNegotiationDiagram";
import { ProjectLifecycleDiagram } from "./ProjectLifecycleDiagram";
import { ProjectSchedulingDiagram } from "./ProjectSchedulingDiagram";
import { GlobalSCComponentsDiagram } from "./GlobalSCComponentsDiagram";
import { SCNetworkDesignDiagram } from "./SCNetworkDesignDiagram";
import { SCCoordinationDiagram } from "./SCCoordinationDiagram";
import { SCRiskSustainabilityDiagram } from "./SCRiskSustainabilityDiagram";
import { SCTechnologyDiagram } from "./SCTechnologyDiagram";
import { InternationalFinanceScopeDiagram } from "./InternationalFinanceScopeDiagram";
import { InternationalFinancialInstitutionsDiagram } from "./InternationalFinancialInstitutionsDiagram";
import { ForexMarketDiagram } from "./ForexMarketDiagram";
import { FXExposureHedgingDiagram } from "./FXExposureHedgingDiagram";
import { InternationalInvestmentRiskDiagram } from "./InternationalInvestmentRiskDiagram";
import { DigitalEconomyModelsDiagram } from "./DigitalEconomyModelsDiagram";
import { EBusinessSetupDiagram } from "./EBusinessSetupDiagram";
import { PaymentSecurityLegalDiagram } from "./PaymentSecurityLegalDiagram";
import { ITESMobilePervasiveDiagram } from "./ITESMobilePervasiveDiagram";
import { EGovernanceModelsDiagram } from "./EGovernanceModelsDiagram";
import { DWArchitectureKDDDiagram } from "./DWArchitectureKDDDiagram";
import { DimensionalOLAPETLDiagram } from "./DimensionalOLAPETLDiagram";
import { DataPreprocessingDiagram } from "./DataPreprocessingDiagram";
import { DataMiningMethodsDiagram } from "./DataMiningMethodsDiagram";
import { AdvancedMiningEthicsDiagram } from "./AdvancedMiningEthicsDiagram";
import { PACSAccountingDiagram } from "./PACSAccountingDiagram";
import { ZSCCBAccountingDiagram } from "./ZSCCBAccountingDiagram";
import { CoopAuditTypesDiagram } from "./CoopAuditTypesDiagram";
import { AuditCertificateDiagram } from "./AuditCertificateDiagram";
import { AuditProgrammeDiagram } from "./AuditProgrammeDiagram";
// Digital Electronics (C-301) — DBRAU B.C.A. Third Semester diagrams.
import BcaSem3DeNumberSystemsDiagram from "./BcaSem3DeNumberSystemsDiagram";
import BcaSem3DeBooleanGatesDiagram from "./BcaSem3DeBooleanGatesDiagram";
import BcaSem3DeKmapDiagram from "./BcaSem3DeKmapDiagram";
import BcaSem3DeAddersDiagram from "./BcaSem3DeAddersDiagram";
import BcaSem3DeMuxDemuxDiagram from "./BcaSem3DeMuxDemuxDiagram";
import BcaSem3DeFlipFlopsDiagram from "./BcaSem3DeFlipFlopsDiagram";
import BcaSem3DeMasterSlaveDiagram from "./BcaSem3DeMasterSlaveDiagram";
import BcaSem3DeSequenceDesignDiagram from "./BcaSem3DeSequenceDesignDiagram";
import BcaSem3DeParallelLoadRegisterDiagram from "./BcaSem3DeParallelLoadRegisterDiagram";
import BcaSem3DeShiftRegistersDiagram from "./BcaSem3DeShiftRegistersDiagram";
import BcaSem3DeUniversalRegisterDiagram from "./BcaSem3DeUniversalRegisterDiagram";
import BcaSem3DeRippleCounterDiagram from "./BcaSem3DeRippleCounterDiagram";
import BcaSem3DeSynchronousCounterDiagram from "./BcaSem3DeSynchronousCounterDiagram";
import BcaSem3DeBcdParallelLoadDiagram from "./BcaSem3DeBcdParallelLoadDiagram";
import BcaSem3DeRingJohnsonDiagram from "./BcaSem3DeRingJohnsonDiagram";
import PythonExecutionFlowDiagram from "./PythonExecutionFlowDiagram";
import PythonOperatorPrecedenceDiagram from "./PythonOperatorPrecedenceDiagram";
import PythonControlFlowDiagram from "./PythonControlFlowDiagram";
import PythonStringIndexingDiagram from "./PythonStringIndexingDiagram";
import PythonCollectionTypesDiagram from "./PythonCollectionTypesDiagram";
import PythonFileHandlingFlowDiagram from "./PythonFileHandlingFlowDiagram";

import SoftwareEngineeringProcessDiagram from "./SoftwareEngineeringProcessDiagram";
import SoftwareDevelopmentLifeCycleDiagram from "./SoftwareDevelopmentLifeCycleDiagram";
import SoftwareEngineeringVModelDiagram from "./SoftwareEngineeringVModelDiagram";
import SoftwareEngineeringPrototypingCycleDiagram from "./SoftwareEngineeringPrototypingCycleDiagram";
import SoftwareEngineeringArchitectureLayersDiagram from "./SoftwareEngineeringArchitectureLayersDiagram";
import SoftwareEngineeringModularityDiagram from "./SoftwareEngineeringModularityDiagram";
import SoftwareEngineeringDesignNotationDiagram from "./SoftwareEngineeringDesignNotationDiagram";
import SoftwareEngineeringTestingLevelsDiagram from "./SoftwareEngineeringTestingLevelsDiagram";
import SoftwareEngineeringEstimationFactorsDiagram from "./SoftwareEngineeringEstimationFactorsDiagram";
import SoftwareEngineeringMaintenanceTypesDiagram from "./SoftwareEngineeringMaintenanceTypesDiagram";

import C305RootFindingMethodsDiagram from "./C305RootFindingMethodsDiagram";
import C305NewtonTangentDiagram from "./C305NewtonTangentDiagram";
import C305DifferenceTableDiagram from "./C305DifferenceTableDiagram";
import C305QuadratureRulesDiagram from "./C305QuadratureRulesDiagram";
import C305GaussEliminationDiagram from "./C305GaussEliminationDiagram";
import C305GaussSeidelDiagram from "./C305GaussSeidelDiagram";
import C305OdeMethodsDiagram from "./C305OdeMethodsDiagram";
import C305Rk4FourSlopesDiagram from "./C305Rk4FourSlopesDiagram";

import ComputerNetworkCommunicationModelDiagram from "./ComputerNetworkCommunicationModelDiagram";
import ComputerNetworkTransmissionModesDiagram from "./ComputerNetworkTransmissionModesDiagram";
import ComputerNetworkTransmissionMediaDiagram from "./ComputerNetworkTransmissionMediaDiagram";
import ComputerNetworkNetworkTypesDiagram from "./ComputerNetworkNetworkTypesDiagram";
import ComputerNetworkTopologiesDiagram from "./ComputerNetworkTopologiesDiagram";
import ComputerNetworkOsiLayersDiagram from "./ComputerNetworkOsiLayersDiagram";
import ComputerNetworkMultiplexingDiagram from "./ComputerNetworkMultiplexingDiagram";
import ComputerNetworkFramingDiagram from "./ComputerNetworkFramingDiagram";
import ComputerNetworkAlohaDiagram from "./ComputerNetworkAlohaDiagram";
import ComputerNetworkNetworkLayerDiagram from "./ComputerNetworkNetworkLayerDiagram";
import ComputerNetworkTransportLayerDiagram from "./ComputerNetworkTransportLayerDiagram";
import ComputerNetworkSessionLayerDiagram from "./ComputerNetworkSessionLayerDiagram";
import ComputerNetworkRpcDiagram from "./ComputerNetworkRpcDiagram";
import ComputerNetworkEmailFlowDiagram from "./ComputerNetworkEmailFlowDiagram";
import WebTechnologyPhpRequestResponseDiagram from "./WebTechnologyPhpRequestResponseDiagram";
import WebTechnologyPhpRecursionDiagram from "./WebTechnologyPhpRecursionDiagram";
import WebTechnologyPhpArrayStructureDiagram from "./WebTechnologyPhpArrayStructureDiagram";
import WebTechnologyPhpFormFlowDiagram from "./WebTechnologyPhpFormFlowDiagram";
import WebTechnologyPhpFileDirectoryFlowDiagram from "./WebTechnologyPhpFileDirectoryFlowDiagram";
import WebTechnologyPhpUploadDownloadDiagram from "./WebTechnologyPhpUploadDownloadDiagram";
import WebTechnologyPhpSessionCookieFlowDiagram from "./WebTechnologyPhpSessionCookieFlowDiagram";
import WebTechnologyPhpSessionLifecycleDiagram from "./WebTechnologyPhpSessionLifecycleDiagram";
import WebTechnologyPhpMysqlArchitectureDiagram from "./WebTechnologyPhpMysqlArchitectureDiagram";
import WebTechnologyMysqlJoinsDiagram from "./WebTechnologyMysqlJoinsDiagram";
import WebTechnologyPhpErrorDebugFlowDiagram from "./WebTechnologyPhpErrorDebugFlowDiagram";
import C402OsLayeredViewDiagram from "./C402OsLayeredViewDiagram";
import C402ProcessStatesDiagram from "./C402ProcessStatesDiagram";
import C402CriticalSectionDiagram from "./C402CriticalSectionDiagram";
import C402DeadlockCycleDiagram from "./C402DeadlockCycleDiagram";
import C402AddressTranslationDiagram from "./C402AddressTranslationDiagram";
import C402PagingTranslationDiagram from "./C402PagingTranslationDiagram";
import C402PageFaultFlowDiagram from "./C402PageFaultFlowDiagram";
import C402FileSystemStructureDiagram from "./C402FileSystemStructureDiagram";
import C402FileAllocationDiagram from "./C402FileAllocationDiagram";
import C402DiskSchedulingDiagram from "./C402DiskSchedulingDiagram";
import CloudComputingBasicModelDiagram from "./CloudComputingBasicModelDiagram";
import CloudComputingEvolutionDiagram from "./CloudComputingEvolutionDiagram";
import CloudComputingElasticityDiagram from "./CloudComputingElasticityDiagram";
import CloudComputingSoaDiagram from "./CloudComputingSoaDiagram";
import CloudComputingVirtualizationDiagram from "./CloudComputingVirtualizationDiagram";
import CloudComputingMemoryVirtualizationDiagram from "./CloudComputingMemoryVirtualizationDiagram";
import CloudComputingDisasterRecoveryDiagram from "./CloudComputingDisasterRecoveryDiagram";
import CloudComputingLayeredArchitectureDiagram from "./CloudComputingLayeredArchitectureDiagram";
import CloudComputingDeploymentModelsDiagram from "./CloudComputingDeploymentModelsDiagram";
import CloudComputingServiceModelsDiagram from "./CloudComputingServiceModelsDiagram";
import CloudComputingStorageTypesDiagram from "./CloudComputingStorageTypesDiagram";
import CloudComputingInterCloudResourceManagementDiagram from "./CloudComputingInterCloudResourceManagementDiagram";
import CloudComputingSaasSecurityDiagram from "./CloudComputingSaasSecurityDiagram";
import HadoopOverviewDiagram from "./HadoopOverviewDiagram";
import MapReduceFlowDiagram from "./MapReduceFlowDiagram";
import VirtualBoxConceptDiagram from "./VirtualBoxConceptDiagram";
import GoogleAppEngineDevelopmentFlowDiagram from "./GoogleAppEngineDevelopmentFlowDiagram";
import C404VonNeumannStructureDiagram from "./C404VonNeumannStructureDiagram";
import C404InstructionCycleDiagram from "./C404InstructionCycleDiagram";
import C404SingleBusCpuDiagram from "./C404SingleBusCpuDiagram";
import C404InstructionFormatsDiagram from "./C404InstructionFormatsDiagram";
import C404GeneralRegisterOrganizationDiagram from "./C404GeneralRegisterOrganizationDiagram";
import C404MicroprogrammedControlDiagram from "./C404MicroprogrammedControlDiagram";
import C404MemoryHierarchyDiagram from "./C404MemoryHierarchyDiagram";
import C404MemoryInterleavingDiagram from "./C404MemoryInterleavingDiagram";
import C404CacheHierarchyDiagram from "./C404CacheHierarchyDiagram";
import C404IoModuleDiagram from "./C404IoModuleDiagram";
import C404InterruptCycleDiagram from "./C404InterruptCycleDiagram";
import C404DmaTransferDiagram from "./C404DmaTransferDiagram";
import C404MicroprogrammingPrincipleDiagram from "./C404MicroprogrammingPrincipleDiagram";
import C404RiscCiscComparisonDiagram from "./C404RiscCiscComparisonDiagram";
import OptimizationDecisionModelDiagram from "./OptimizationDecisionModelDiagram";
import OptimizationLPFeasibleRegionDiagram from "./OptimizationLPFeasibleRegionDiagram";
import OptimizationSimplexTableauFlowDiagram from "./OptimizationSimplexTableauFlowDiagram";
import OptimizationTwoPhaseMethodDiagram from "./OptimizationTwoPhaseMethodDiagram";
import OptimizationTransportationModelDiagram from "./OptimizationTransportationModelDiagram";
import OptimizationVogelPenaltyDiagram from "./OptimizationVogelPenaltyDiagram";
import OptimizationAssignmentModelDiagram from "./OptimizationAssignmentModelDiagram";
import OptimizationSequencingGeneralDiagram from "./OptimizationSequencingGeneralDiagram";
import OptimizationJohnsonTwoMachinesDiagram from "./OptimizationJohnsonTwoMachinesDiagram";
import OptimizationSequencingThreeMachinesDiagram from "./OptimizationSequencingThreeMachinesDiagram";
import OptimizationGamePayoffMatrixDiagram from "./OptimizationGamePayoffMatrixDiagram";
import OptimizationGameSaddlePointDiagram from "./OptimizationGameSaddlePointDiagram";
import OptimizationGameGraphicalMethodDiagram from "./OptimizationGameGraphicalMethodDiagram";
import C501OsiSecurityArchitectureDiagram from "./C501OsiSecurityArchitectureDiagram";
import C501DesFeistelDiagram from "./C501DesFeistelDiagram";
import C501RsaKeyFlowDiagram from "./C501RsaKeyFlowDiagram";
import C501HashFunctionDiagram from "./C501HashFunctionDiagram";
import C501HmacFlowDiagram from "./C501HmacFlowDiagram";
import C501DigitalSignatureDiagram from "./C501DigitalSignatureDiagram";
import C501KerberosDiagram from "./C501KerberosDiagram";
import C501X509ChainDiagram from "./C501X509ChainDiagram";
import C501IdsDiagram from "./C501IdsDiagram";
import C501MalwareDefenseDiagram from "./C501MalwareDefenseDiagram";
import C501FirewallDiagram from "./C501FirewallDiagram";
import C503InteractiveGraphicsDiagram from "./C503InteractiveGraphicsDiagram";
import C503GraphicsSystemDiagram from "./C503GraphicsSystemDiagram";
import C503RasterScanDiagram from "./C503RasterScanDiagram";
import C503RandomScanDiagram from "./C503RandomScanDiagram";
import C503CircleSymmetryDiagram from "./C503CircleSymmetryDiagram";
import C503LineClippingDiagram from "./C503LineClippingDiagram";
import C503CohenSutherlandDiagram from "./C503CohenSutherlandDiagram";
import C5032DMatricesDiagram from "./C5032DMatricesDiagram";
import C503WindowViewportDiagram from "./C503WindowViewportDiagram";
import C5033DAxesDiagram from "./C5033DAxesDiagram";
import C503PolygonMeshDiagram from "./C503PolygonMeshDiagram";
import C503SplineControlDiagram from "./C503SplineControlDiagram";
import C503BrepDiagram from "./C503BrepDiagram";
import C503CsgDiagram from "./C503CsgDiagram";
import C503OctreeDiagram from "./C503OctreeDiagram";
import C503AnimationPipelineDiagram from "./C503AnimationPipelineDiagram";
import C503MorphingDiagram from "./C503MorphingDiagram";
import C503KeyframeDiagram from "./C503KeyframeDiagram";
import C503AnimationSequencingDiagram from "./C503AnimationSequencingDiagram";
import VisualBasicDotNetFrameworkOverviewDiagram from "./VisualBasicDotNetFrameworkOverviewDiagram";
import VisualBasicDotNetClrExecutionFlowDiagram from "./VisualBasicDotNetClrExecutionFlowDiagram";
import VisualBasicDotNetVisualStudioIdeComponentsDiagram from "./VisualBasicDotNetVisualStudioIdeComponentsDiagram";
import VisualBasicDotNetWindowsFormControlsDiagram from "./VisualBasicDotNetWindowsFormControlsDiagram";
import VisualBasicDotNetConditionFlowDiagram from "./VisualBasicDotNetConditionFlowDiagram";
import VisualBasicDotNetArrayDiagram from "./VisualBasicDotNetArrayDiagram";
import VisualBasicDotNetProcedureFlowDiagram from "./VisualBasicDotNetProcedureFlowDiagram";
import VisualBasicDotNetDialogsDiagram from "./VisualBasicDotNetDialogsDiagram";
import VisualBasicDotNetEventDrivenFlowDiagram from "./VisualBasicDotNetEventDrivenFlowDiagram";
import VisualBasicDotNetFormEventModelDiagram from "./VisualBasicDotNetFormEventModelDiagram";
import VisualBasicDotNetFormControlsGroupingDiagram from "./VisualBasicDotNetFormControlsGroupingDiagram";
import VisualBasicDotNetOopModelDiagram from "./VisualBasicDotNetOopModelDiagram";
import VisualBasicDotNetExceptionFlowDiagram from "./VisualBasicDotNetExceptionFlowDiagram";
import VisualBasicDotNetStreamReaderWriterDiagram from "./VisualBasicDotNetStreamReaderWriterDiagram";
import VisualBasicDotNetAdoNetArchitectureDiagram from "./VisualBasicDotNetAdoNetArchitectureDiagram";
import VisualBasicDotNetDatabaseApplicationDiagram from "./VisualBasicDotNetDatabaseApplicationDiagram";
import DesignAndAnalysisAlgorithmFlowDiagram from "./DesignAndAnalysisAlgorithmFlowDiagram";
import GrowthFunctionsDiagram from "./GrowthFunctionsDiagram";
import MasterTheoremDiagram from "./MasterTheoremDiagram";
import RecurrenceExpansionDiagram from "./RecurrenceExpansionDiagram";
import DivideConquerDiagram from "./DivideConquerDiagram";
import MergeSortDiagram from "./MergeSortDiagram";
import QuickSortDiagram from "./QuickSortDiagram";
import HeapSortDiagram from "./HeapSortDiagram";
import GreedyMethodDiagram from "./GreedyMethodDiagram";
import HuffmanTreeDiagram from "./HuffmanTreeDiagram";
import MatrixChainDiagram from "./MatrixChainDiagram";
import LcsTableDiagram from "./LcsTableDiagram";
import BacktrackingTreeDiagram from "./BacktrackingTreeDiagram";
import NQueensDiagram from "./NQueensDiagram";
import BasicGraphDiagram from "./BasicGraphDiagram";
import MultistageGraphDiagram from "./MultistageGraphDiagram";
import BfsDiagram from "./BfsDiagram";
import DfsDiagram from "./DfsDiagram";
import SpanningTreeDiagram from "./SpanningTreeDiagram";
import KruskalDiagram from "./KruskalDiagram";
import PrimDiagram from "./PrimDiagram";
import DijkstraDiagram from "./DijkstraDiagram";
import BellmanFordDiagram from "./BellmanFordDiagram";
import ComplexityClassesDiagram from "./ComplexityClassesDiagram";
import PolynomialReductionDiagram from "./PolynomialReductionDiagram";
import PNPRelationshipDiagram from "./PNPRelationshipDiagram";
import C504KnowledgeSystemDiagram from "./C504KnowledgeSystemDiagram";
import C504KnowledgePyramidDiagram from "./C504KnowledgePyramidDiagram";
import C504ProblemRepresentationDiagram from "./C504ProblemRepresentationDiagram";
import C504ExpertSystemArchitectureDiagram from "./C504ExpertSystemArchitectureDiagram";
import C504ForwardBackwardDiagram from "./C504ForwardBackwardDiagram";
import C504ExpertLifeCycleDiagram from "./C504ExpertLifeCycleDiagram";
import C504SearchTreeDiagram from "./C504SearchTreeDiagram";
import C504DfsBfsDiagram from "./C504DfsBfsDiagram";
import C504HillClimbingDiagram from "./C504HillClimbingDiagram";
import C504AStarDiagram from "./C504AStarDiagram";
import C504NlpPipelineDiagram from "./C504NlpPipelineDiagram";
import C504SpeechRecognitionDiagram from "./C504SpeechRecognitionDiagram";
import C504MlOverviewDiagram from "./C504MlOverviewDiagram";
import C504ReinforcementLearningDiagram from "./C504ReinforcementLearningDiagram";
import C504DecisionTreeDiagram from "./C504DecisionTreeDiagram";
import C504SvmMarginDiagram from "./C504SvmMarginDiagram";
import C504KmeansDiagram from "./C504KmeansDiagram";


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

    "scm-flow": SupplyChainFlowDiagram,
  "logistics-functions": LogisticsFunctionsDiagram,
  "cross-docking": CrossDockingDiagram,
  "bullwhip": BullwhipEffectDiagram,
  "warehouse-network": WarehouseNetworkDiagram,
  "reverse-logistics": ReverseLogisticsDiagram,
  "crm-link": CRMLinkageDiagram,
    "rc-credit-cycle": CreditCycleDiagram,
  "rc-credit-risk-matrix": CreditRiskMatrixDiagram,
  "rc-letter-of-credit": LetterOfCreditDiagram,
  "rc-loan-commitment": LoanCommitmentDiagram,
  "rc-operational-risk": OperationalRiskDiagram,
  "rc-incident-management": IncidentManagementDiagram,
  "rc-credit-analysis": CreditAnalysisDiagram,
  "rc-rating-process": RatingProcessDiagram,

  
  "bpr-redesign": BPRProcessRedesignDiagram,
  "process-map": ProcessMappingDiagram,
  "hammer-champy": HammerChampyDiagram,
  "change-management": ChangeManagementDiagram,
  "digital-bpr": DigitalBPRDiagram,
  
    "quality-evolution": QualityEvolutionDiagram,
  "tqm": TQMFrameworkDiagram,
  "seven-qc-tools": SevenQCToolsDiagram,
  "qfd": QFDFlowDiagram,
  "dmaic": DmaicDiagram,
  "audit-cycle": AuditCycleDiagram,

  
  "it01-is-levels": It01InformationSystemLevelsDiagram,
  "it01-analysis-models": It01AnalysisModelsDiagram,
  "it01-application-architecture": It01ApplicationArchitectureDiagram,
  "it01-ecommerce-architecture": It01EcommerceArchitectureDiagram,
  "it01-implementation-cycle": It01ImplementationCycleDiagram,
  "it01-security-continuity": It01SecurityContinuityDiagram,
  "it02-industry40": It02Industry40Diagram,
  "it02-data-value-chain": It02DataValueChainDiagram,
  "it02-iot-architecture": It02IotArchitectureDiagram,
  "it02-blockchain-flow": It02BlockchainFlowDiagram,
  "it02-3d-printing": It023DPrintingDiagram,
  "it02-virtual-tryon": It02VirtualTryOnDiagram,
  "it03-database-architecture": It03DatabaseArchitectureDiagram,
  "it03-er-model": It03ErModelDiagram,
  "it03-sql-query-flow": It03SqlQueryFlowDiagram,
  "it03-indexing": It03IndexingDiagram,
  "it03-backup-recovery": It03BackupRecoveryDiagram,
  "it03-datawarehouse": It03DataWarehouseDiagram,

    "cm01-cooperative-principles": Cm01CooperativePrinciplesDiagram,
  "cm01-management-governance": Cm01ManagementGovernanceDiagram,
  "cm01-administration-structure": Cm01AdministrationStructureDiagram,
  "cm01-apex-institutions": Cm01ApexInstitutionsDiagram,
  "cm01-foreign-models": Cm01ForeignModelsDiagram,
  "cm02-legal-timeline": Cm02LegalTimelineDiagram,
  "cm02-audit-inspection": Cm02AuditInspectionDiagram,
  "cm02-liquidation-cycle": Cm02LiquidationCycleDiagram,
  "cm03-credit-structure": Cm03CreditStructureDiagram,
  "cm03-development-cycle": Cm03DevelopmentCycleDiagram,
  "cm03-dccb-scb": Cm03DccbScbDiagram,
  "cm03-lt-structure": Cm03LtStructureDiagram,
  "cm03-nonagri-map": Cm03NonAgriMapDiagram,  
  "ib01-trade-theories": TradeTheoryComparisonDiagram,
  "ib01-trade-policy-instruments": TradePolicyInstrumentsDiagram,
  "ib01-pestel": PESTELInternationalMarketDiagram,
  "ib01-international-marketing-mix": InternationalMarketingMixDiagram,
  "ib01-eprg-framework": EPRGFrameworkDiagram,
  "ib01-entry-modes": InternationalEntryModesDiagram,
  "ib02-exim-framework": ExportImportFrameworkDiagram,
  "ib02-document-flow": ExportDocumentationFlowDiagram,
  "ib02-shipping-logistics": ShippingLogisticsChainDiagram,
  "ib02-payment-methods": InternationalPaymentMethodsDiagram,
  "ib02-customs-digital": CustomsDigitalTradeDiagram,
  "ib03-geopolitical-order": GeopoliticalTradeOrderDiagram,
  "ib03-conflict-disruption": TradeDisruptionRiskDiagram,
  "ib03-energy-security": EnergySecurityDiagram,
  "ib03-regional-integration": RegionalIntegrationLadderDiagram,
  "ib03-future-trade-risks": FutureTradeRiskDiagram,
    "tax-assessment-cycle": TaxAssessmentCycleDiagram,
  "tax-income-computation": TaxIncomeComputationDiagram,
  "tax-planning-spectrum": TaxPlanningSpectrumDiagram,
  "tax-compliance": TaxComplianceDiagram,
  "corporate-tax": CorporateTaxDiagram,
  "gst-components": GSTComponentsDiagram,

  //mba sem4 
  
  "mba-universal-human-values-and-professional-ethics-foundation": ValueEducationDiagram,
  "mba-universal-human-values-and-professional-ethics-self-body-harmony": SelfBodyHarmonyDiagram,
  "mba-universal-human-values-and-professional-ethics-human-relationships": HumanRelationshipsDiagram,
  "mba-universal-human-values-and-professional-ethics-four-orders-nature": FourOrdersNatureDiagram,
  "mba-universal-human-values-and-professional-ethics-professional-ethics": ProfessionalEthicsDiagram,
  "mba-service-and-retail-marketing-service-marketing-mix": ServiceMarketingMixDiagram,
  "mba-service-and-retail-marketing-service-consumer-behavior": ServiceConsumerBehaviorDiagram,
  "mba-service-and-retail-marketing-service-delivery-quality": ServiceDeliveryQualityDiagram,
  "mba-service-and-retail-marketing-retail-formats": RetailFormatsDiagram,
  "mba-service-and-retail-marketing-merchandise-supply-chain": MerchandiseSupplyChainDiagram,
  "mba-b2b-marketing-b2b-environment": B2BEnvironmentDiagram,
  "mba-b2b-marketing-organizational-buying": OrganizationalBuyingDiagram,
  "mba-b2b-marketing-b2b-strategy": B2BStrategyDiagram,
  "mba-b2b-marketing-b2b-stp": B2BSTPDiagram,
  "mba-b2b-marketing-b2b-channels-communication": B2BChannelsCommunicationDiagram,
  "mba-hr-analytics-hr-analytics-evolution": HRAnalyticsEvolutionDiagram,
  "mba-hr-analytics-hr-data-planning": HRDataPlanningDiagram,
  "mba-hr-analytics-recruitment-analytics": RecruitmentAnalyticsDiagram,
  "mba-hr-analytics-performance-compensation-analytics": PerformanceCompensationAnalyticsDiagram,
  "mba-hr-analytics-hr-dashboard": HRDashboardDiagram,
  "mba-organizational-development-and-change-management-od-evolution": ODEvolutionDiagram,
  "mba-organizational-development-and-change-management-od-action-research": ODActionResearchDiagram,
  "mba-organizational-development-and-change-management-od-implementation": ODImplementationDiagram,
  "mba-organizational-development-and-change-management-od-stress-interventions": ODStressInterventionsDiagram,
  "mba-organizational-development-and-change-management-od-diversity-inclusion": ODDiversityInclusionDiagram,
  "mba-behavioural-finance-behavioural-finance-foundations": BehaviouralFinanceFoundationsDiagram,
  "mba-behavioural-finance-rational-vs-behavioural": RationalVsBehaviouralDiagram,
  "mba-behavioural-finance-heuristics-biases": HeuristicsBiasesDiagram,
  "mba-behavioural-finance-prospect-mental-accounting": ProspectMentalAccountingDiagram,
  "mba-behavioural-finance-investor-behaviour-portfolio": InvestorBehaviourPortfolioDiagram,
  "mba-strategic-financial-management-sfm-framework": SFMFrameworkDiagram,
  "mba-strategic-financial-management-capital-structure": CapitalStructureDiagram,
  "mba-strategic-financial-management-dividend-policy": DividendPolicyDiagram,
  "mba-strategic-financial-management-term-finance-venture": TermFinanceVentureDiagram,
  "mba-strategic-financial-management-project-analysis": ProjectAnalysisDiagram,
  "mba-service-operations-management-service-operations-nature": ServiceOperationsNatureDiagram,
  "mba-service-operations-management-service-process-capacity": ServiceProcessCapacityDiagram,
  "mba-service-operations-management-servqual": SERVQUALDiagram,
  "mba-service-operations-management-service-technology": ServiceTechnologyDiagram,
  "mba-service-operations-management-service-strategy": ServiceStrategyDiagram,
  "mba-project-and-sourcing-management-sourcing-process": SourcingProcessDiagram,
  "mba-project-and-sourcing-management-supplier-evaluation": SupplierEvaluationDiagram,
  "mba-project-and-sourcing-management-price-negotiation": PriceNegotiationDiagram,
  "mba-project-and-sourcing-management-project-lifecycle": ProjectLifecycleDiagram,
  "mba-project-and-sourcing-management-project-scheduling": ProjectSchedulingDiagram,
  "mba-managing-global-supply-chains-global-sc-components": GlobalSCComponentsDiagram,
  "mba-managing-global-supply-chains-sc-network-design": SCNetworkDesignDiagram,
  "mba-managing-global-supply-chains-sc-coordination": SCCoordinationDiagram,
  "mba-managing-global-supply-chains-sc-risk-sustainability": SCRiskSustainabilityDiagram,
  "mba-managing-global-supply-chains-sc-technology": SCTechnologyDiagram,
  "mba-international-finance-international-finance-scope": InternationalFinanceScopeDiagram,
  "mba-international-finance-international-financial-institutions": InternationalFinancialInstitutionsDiagram,
  "mba-international-finance-forex-market": ForexMarketDiagram,
  "mba-international-finance-fx-exposure-hedging": FXExposureHedgingDiagram,
  "mba-international-finance-international-investment-risk": InternationalInvestmentRiskDiagram,
  "mba-e-business-digital-economy-models": DigitalEconomyModelsDiagram,
  "mba-e-business-e-business-setup": EBusinessSetupDiagram,
  "mba-e-business-payment-security-legal": PaymentSecurityLegalDiagram,
  "mba-e-business-ites-mobile-pervasive": ITESMobilePervasiveDiagram,
  "mba-e-business-e-governance-models": EGovernanceModelsDiagram,
  "mba-business-data-warehouse-and-data-mining-dw-architecture-kdd": DWArchitectureKDDDiagram,
  "mba-business-data-warehouse-and-data-mining-dimensional-olap-etl": DimensionalOLAPETLDiagram,
  "mba-business-data-warehouse-and-data-mining-data-preprocessing": DataPreprocessingDiagram,
  "mba-business-data-warehouse-and-data-mining-data-mining-methods": DataMiningMethodsDiagram,
  "mba-business-data-warehouse-and-data-mining-advanced-mining-ethics": AdvancedMiningEthicsDiagram,
  "mba-co-operative-accounting-and-audit-pacs-accounting": PACSAccountingDiagram,
  "mba-co-operative-accounting-and-audit-zsc-cb-accounting": ZSCCBAccountingDiagram,
  "mba-co-operative-accounting-and-audit-coop-audit-types": CoopAuditTypesDiagram,
  "mba-co-operative-accounting-and-audit-audit-certificate": AuditCertificateDiagram,
  "mba-co-operative-accounting-and-audit-audit-programme": AuditProgrammeDiagram,
    "bca-sem3-de-number-systems": BcaSem3DeNumberSystemsDiagram,
  "bca-sem3-de-boolean-gates": BcaSem3DeBooleanGatesDiagram,
  "bca-sem3-de-kmap": BcaSem3DeKmapDiagram,
  "bca-sem3-de-adders": BcaSem3DeAddersDiagram,
  "bca-sem3-de-mux-demux": BcaSem3DeMuxDemuxDiagram,
  "bca-sem3-de-flipflops": BcaSem3DeFlipFlopsDiagram,
  "bca-sem3-de-master-slave": BcaSem3DeMasterSlaveDiagram,
  "bca-sem3-de-sequence-design": BcaSem3DeSequenceDesignDiagram,
  "bca-sem3-de-parallel-load-register": BcaSem3DeParallelLoadRegisterDiagram,
  "bca-sem3-de-shift-registers": BcaSem3DeShiftRegistersDiagram,
  "bca-sem3-de-universal-register": BcaSem3DeUniversalRegisterDiagram,
  "bca-sem3-de-ripple-counter": BcaSem3DeRippleCounterDiagram,
  "bca-sem3-de-synchronous-counter": BcaSem3DeSynchronousCounterDiagram,
  "bca-sem3-de-bcd-parallel-load": BcaSem3DeBcdParallelLoadDiagram,
  "bca-sem3-de-ring-johnson": BcaSem3DeRingJohnsonDiagram,
  "python-execution-flow": PythonExecutionFlowDiagram,
  "python-operator-precedence": PythonOperatorPrecedenceDiagram,
  "python-control-flow": PythonControlFlowDiagram,
  "python-string-indexing": PythonStringIndexingDiagram,
  "python-collection-types": PythonCollectionTypesDiagram,
  "python-file-handling-flow": PythonFileHandlingFlowDiagram,
   "bca-se-software-engineering-process": SoftwareEngineeringProcessDiagram,
  "bca-se-sdlc-overview": SoftwareDevelopmentLifeCycleDiagram,
  "bca-se-v-model": SoftwareEngineeringVModelDiagram,
  "bca-se-prototyping-cycle": SoftwareEngineeringPrototypingCycleDiagram,
  "bca-se-architecture-layers": SoftwareEngineeringArchitectureLayersDiagram,
  "bca-se-modularity": SoftwareEngineeringModularityDiagram,
  "bca-se-design-notation": SoftwareEngineeringDesignNotationDiagram,
  "bca-se-testing-levels": SoftwareEngineeringTestingLevelsDiagram,
  "bca-se-estimation-factors": SoftwareEngineeringEstimationFactorsDiagram,
  "bca-se-maintenance-types": SoftwareEngineeringMaintenanceTypesDiagram,
    "bca-cn-communication-model": ComputerNetworkCommunicationModelDiagram,
  "bca-cn-transmission-modes": ComputerNetworkTransmissionModesDiagram,
  "bca-cn-transmission-media": ComputerNetworkTransmissionMediaDiagram,
  "bca-cn-network-types": ComputerNetworkNetworkTypesDiagram,
  "bca-cn-topologies": ComputerNetworkTopologiesDiagram,
  "bca-cn-osi-layers": ComputerNetworkOsiLayersDiagram,
  "bca-cn-multiplexing": ComputerNetworkMultiplexingDiagram,
  "bca-cn-framing": ComputerNetworkFramingDiagram,
  "bca-cn-aloha": ComputerNetworkAlohaDiagram,
  "bca-cn-network-layer": ComputerNetworkNetworkLayerDiagram,
  "bca-cn-transport-layer": ComputerNetworkTransportLayerDiagram,
  "bca-cn-session-layer": ComputerNetworkSessionLayerDiagram,
  "bca-cn-rpc": ComputerNetworkRpcDiagram,
  "bca-cn-email-flow": ComputerNetworkEmailFlowDiagram,
  "c305-root-finding-methods": C305RootFindingMethodsDiagram,
  "c305-newton-tangent": C305NewtonTangentDiagram,
  "c305-difference-table": C305DifferenceTableDiagram,
  "c305-quadrature-rules": C305QuadratureRulesDiagram,
  "c305-gauss-elimination": C305GaussEliminationDiagram,
  "c305-gauss-seidel": C305GaussSeidelDiagram,
  "c305-ode-methods": C305OdeMethodsDiagram,
  "c305-rk4-four-slopes": C305Rk4FourSlopesDiagram, 

  "c402-os-layered-view": C402OsLayeredViewDiagram,
  "c402-process-states": C402ProcessStatesDiagram,
  "c402-critical-section": C402CriticalSectionDiagram,
  "c402-deadlock-cycle": C402DeadlockCycleDiagram,
  "c402-address-translation": C402AddressTranslationDiagram,
  "c402-paging-translation": C402PagingTranslationDiagram,
  "c402-page-fault-flow": C402PageFaultFlowDiagram,
  "c402-file-system-structure": C402FileSystemStructureDiagram,
  "c402-file-allocation": C402FileAllocationDiagram,
  "c402-disk-scheduling": C402DiskSchedulingDiagram,
    "bca-php-request-response": WebTechnologyPhpRequestResponseDiagram,
  "bca-php-recursion": WebTechnologyPhpRecursionDiagram,
  "bca-php-array-structure": WebTechnologyPhpArrayStructureDiagram,
  "bca-php-form-flow": WebTechnologyPhpFormFlowDiagram,
  "bca-php-file-directory-flow": WebTechnologyPhpFileDirectoryFlowDiagram,
  "bca-php-upload-download": WebTechnologyPhpUploadDownloadDiagram,
  "bca-php-session-cookie-flow": WebTechnologyPhpSessionCookieFlowDiagram,
  "bca-php-session-lifecycle": WebTechnologyPhpSessionLifecycleDiagram,
  "bca-php-mysql-architecture": WebTechnologyPhpMysqlArchitectureDiagram,
  "bca-mysql-joins": WebTechnologyMysqlJoinsDiagram,
  "bca-php-error-debug-flow": WebTechnologyPhpErrorDebugFlowDiagram,

    "c404-von-neumann-structure": C404VonNeumannStructureDiagram,
  "c404-instruction-cycle": C404InstructionCycleDiagram,
  "c404-single-bus-cpu": C404SingleBusCpuDiagram,
  "c404-instruction-formats": C404InstructionFormatsDiagram,
  "c404-general-register-organization": C404GeneralRegisterOrganizationDiagram,
  "c404-microprogrammed-control": C404MicroprogrammedControlDiagram,
  "c404-memory-hierarchy": C404MemoryHierarchyDiagram,
  "c404-memory-interleaving": C404MemoryInterleavingDiagram,
  "c404-cache-hierarchy": C404CacheHierarchyDiagram,
  "c404-io-module": C404IoModuleDiagram,
  "c404-interrupt-cycle": C404InterruptCycleDiagram,
  "c404-dma-transfer": C404DmaTransferDiagram,
  "c404-microprogramming-principle": C404MicroprogrammingPrincipleDiagram,
  "c404-risc-cisc-comparison": C404RiscCiscComparisonDiagram,
   "bca-cloud-basic-model": CloudComputingBasicModelDiagram,
  "bca-cloud-evolution": CloudComputingEvolutionDiagram,
  "bca-cloud-elasticity": CloudComputingElasticityDiagram,
  "bca-cloud-soa": CloudComputingSoaDiagram,
  "bca-cloud-virtualization": CloudComputingVirtualizationDiagram,
  "bca-cloud-memory-virtualization": CloudComputingMemoryVirtualizationDiagram,
  "bca-cloud-disaster-recovery": CloudComputingDisasterRecoveryDiagram,
  "bca-cloud-layered-architecture": CloudComputingLayeredArchitectureDiagram,
  "bca-cloud-deployment-models": CloudComputingDeploymentModelsDiagram,
  "bca-cloud-service-models": CloudComputingServiceModelsDiagram,
  "bca-cloud-storage-types": CloudComputingStorageTypesDiagram,
  "bca-intercloud-resource-management": CloudComputingInterCloudResourceManagementDiagram,
  "bca-saas-security": CloudComputingSaasSecurityDiagram,
  "bca-hadoop-overview": HadoopOverviewDiagram,
  "bca-mapreduce-flow": MapReduceFlowDiagram,
  "bca-virtualbox-concept": VirtualBoxConceptDiagram,
  "bca-app-engine-development-flow": GoogleAppEngineDevelopmentFlowDiagram,

    "c501-osi-security-architecture": C501OsiSecurityArchitectureDiagram,
  "c501-des-feistel": C501DesFeistelDiagram,
  "c501-rsa-key-flow": C501RsaKeyFlowDiagram,
  "c501-hash-function": C501HashFunctionDiagram,
  "c501-hmac-flow": C501HmacFlowDiagram,
  "c501-digital-signature": C501DigitalSignatureDiagram,
  "c501-kerberos": C501KerberosDiagram,
  "c501-x509-chain": C501X509ChainDiagram,
  "c501-ids": C501IdsDiagram,
  "c501-malware-defense": C501MalwareDefenseDiagram,
  "c501-firewall": C501FirewallDiagram,
   "bca-or-decision-model": OptimizationDecisionModelDiagram,
  "bca-lp-feasible-region": OptimizationLPFeasibleRegionDiagram,
  "bca-simplex-tableau-flow": OptimizationSimplexTableauFlowDiagram,
  "bca-two-phase-method": OptimizationTwoPhaseMethodDiagram,
  "bca-transportation-model": OptimizationTransportationModelDiagram,
  "bca-vogel-penalty": OptimizationVogelPenaltyDiagram,
  "bca-assignment-model": OptimizationAssignmentModelDiagram,
  "bca-sequencing-general": OptimizationSequencingGeneralDiagram,
  "bca-johnson-two-machines": OptimizationJohnsonTwoMachinesDiagram,
  "bca-sequencing-three-machines": OptimizationSequencingThreeMachinesDiagram,
  "bca-game-payoff-matrix": OptimizationGamePayoffMatrixDiagram,
  "bca-game-saddle-point": OptimizationGameSaddlePointDiagram,
  "bca-game-graphical-method": OptimizationGameGraphicalMethodDiagram,

   "bca-dotnet-framework-overview": VisualBasicDotNetFrameworkOverviewDiagram,
  "bca-clr-execution-flow": VisualBasicDotNetClrExecutionFlowDiagram,
  "bca-vs-ide-components": VisualBasicDotNetVisualStudioIdeComponentsDiagram,
  "bca-windows-form-controls": VisualBasicDotNetWindowsFormControlsDiagram,
  "bca-vbnet-condition-flow": VisualBasicDotNetConditionFlowDiagram,
  "bca-vbnet-array": VisualBasicDotNetArrayDiagram,
  "bca-vbnet-procedure-flow": VisualBasicDotNetProcedureFlowDiagram,
  "bca-vbnet-dialogs": VisualBasicDotNetDialogsDiagram,
  "bca-vbnet-event-driven-flow": VisualBasicDotNetEventDrivenFlowDiagram,
  "bca-vbnet-form-event-model": VisualBasicDotNetFormEventModelDiagram,
  "bca-vbnet-form-controls-grouping": VisualBasicDotNetFormControlsGroupingDiagram,
  "bca-vbnet-oop-model": VisualBasicDotNetOopModelDiagram,
  "bca-vbnet-exception-flow": VisualBasicDotNetExceptionFlowDiagram,
  "bca-vbnet-stream-reader-writer": VisualBasicDotNetStreamReaderWriterDiagram,
  "bca-ado-net-architecture": VisualBasicDotNetAdoNetArchitectureDiagram,
  "bca-vbnet-database-application": VisualBasicDotNetDatabaseApplicationDiagram,

   "c503-interactive-graphics": C503InteractiveGraphicsDiagram,
  "c503-graphics-system": C503GraphicsSystemDiagram,
  "c503-raster-scan": C503RasterScanDiagram,
  "c503-random-scan": C503RandomScanDiagram,
  "c503-circle-symmetry": C503CircleSymmetryDiagram,
  "c503-line-clipping": C503LineClippingDiagram,
  "c503-cohen-sutherland": C503CohenSutherlandDiagram,
  "c503-2d-matrices": C5032DMatricesDiagram,
  "c503-window-viewport": C503WindowViewportDiagram,
  "c503-3d-axes": C5033DAxesDiagram,
  "c503-polygon-mesh": C503PolygonMeshDiagram,
  "c503-spline-control": C503SplineControlDiagram,
  "c503-brep": C503BrepDiagram,
  "c503-csg": C503CsgDiagram,
  "c503-octree": C503OctreeDiagram,
  "c503-animation-pipeline": C503AnimationPipelineDiagram,
  "c503-morphing": C503MorphingDiagram,
  "c503-keyframe": C503KeyframeDiagram,
  "c503-animation-sequencing": C503AnimationSequencingDiagram,

  
  "c504-knowledge-system": C504KnowledgeSystemDiagram,
  "c504-knowledge-pyramid": C504KnowledgePyramidDiagram,
  "c504-problem-representation": C504ProblemRepresentationDiagram,
  "c504-expert-system-architecture": C504ExpertSystemArchitectureDiagram,
  "c504-forward-backward": C504ForwardBackwardDiagram,
  "c504-expert-life-cycle": C504ExpertLifeCycleDiagram,
  "c504-search-tree": C504SearchTreeDiagram,
  "c504-dfs-bfs": C504DfsBfsDiagram,
  "c504-hill-climbing": C504HillClimbingDiagram,
  "c504-a-star": C504AStarDiagram,
  "c504-nlp-pipeline": C504NlpPipelineDiagram,
  "c504-speech-recognition": C504SpeechRecognitionDiagram,
  "c504-ml-overview": C504MlOverviewDiagram,
  "c504-reinforcement-learning": C504ReinforcementLearningDiagram,
  "c504-decision-tree": C504DecisionTreeDiagram,
  "c504-svm-margin": C504SvmMarginDiagram,
  "c504-kmeans": C504KmeansDiagram,
   "bca-c505-algorithm-flow": DesignAndAnalysisAlgorithmFlowDiagram,
  "bca-c505-growth-functions": GrowthFunctionsDiagram,
  "bca-c505-master-theorem": MasterTheoremDiagram,
  "bca-c505-recurrence-expansion": RecurrenceExpansionDiagram,
  "bca-c505-divide-conquer": DivideConquerDiagram,
  "bca-c505-merge-sort": MergeSortDiagram,
  "bca-c505-quick-sort": QuickSortDiagram,
  "bca-c505-heap-sort": HeapSortDiagram,
  "bca-c505-greedy-method": GreedyMethodDiagram,
  "bca-c505-huffman-tree": HuffmanTreeDiagram,
  "bca-c505-matrix-chain": MatrixChainDiagram,
  "bca-c505-lcs-table": LcsTableDiagram,
  "bca-c505-backtracking-tree": BacktrackingTreeDiagram,
  "bca-c505-nqueens": NQueensDiagram,
  "bca-c505-basic-graph": BasicGraphDiagram,
  "bca-c505-multistage-graph": MultistageGraphDiagram,
  "bca-c505-bfs": BfsDiagram,
  "bca-c505-dfs": DfsDiagram,
  "bca-c505-spanning-tree": SpanningTreeDiagram,
  "bca-c505-kruskal": KruskalDiagram,
  "bca-c505-prim": PrimDiagram,
  "bca-c505-dijkstra": DijkstraDiagram,
  "bca-c505-bellman-ford": BellmanFordDiagram,
  "bca-c505-complexity-classes": ComplexityClassesDiagram,
  "bca-c505-polynomial-reduction": PolynomialReductionDiagram,
  "bca-c505-p-np-relationship": PNPRelationshipDiagram, 
};
