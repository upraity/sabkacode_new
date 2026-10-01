import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Financial Credit and Risk Analysis (BMB FM 03)
// — AKTU, MBA Semester III, 40 hours, syllabus supplied by the user.
export const FinancialCreditAndRiskAnalysisUnitNotes: UnitNote[] = [
  {
    unitNumber: 1, title: "Introduction", hours: 6,
    headings: [
      { id: "credit", title: "1. Financial Credit, Objectives and Credit Risk", icon: "IndianRupee", blocks: [
        { kind: "paragraph", text: "Credit is the provision of funds or purchasing power with an obligation to repay according to agreed terms. Credit management balances business growth with protection against default. The syllabus includes meaning and objectives, credit risk, credit analysis, the Seven Cs, credit-analysis process and credit procurement." },
        { kind: "diagram", diagramId: "rc-credit-cycle", caption: "Credit lifecycle from application through repayment and monitoring." }
      ] },
      { id: "seven-cs", title: "2. Seven Cs and Credit Analysis", icon: "Users", blocks: [
        { kind: "paragraph", text: "The syllabus explicitly mentions Seven Cs. Because the supplied page does not enumerate them, these notes retain the syllabus terminology rather than inventing a specific seven-item institutional list. In examination answers, use the exact Seven Cs list prescribed by your faculty or course text." },
        { kind: "callout", tone: "info", title: "Source-aligned caution", text: "The uploaded syllabus names \u201cSeven C\u2019s\u201d but does not list the seven components. Exact component names should be taken from the prescribed class material." }
      ] },
      { id: "facilities", title: "3. Types of Credit Facilities", icon: "Wallet", blocks: [
        { kind: "paragraph", text: "Credit facilities can be funded or non-funded and can be structured according to the borrower\u2019s purpose and cash cycle. The syllabus lists cash credit, demand loan, bill finance, drawee bill scheme, bill discounting, cash delivery, types of facilities and modes of delivery." },
        { kind: "table", headers: ["Facility", "Broad purpose"], rows: [["Cash credit", "Working-capital finance with drawing subject to sanctioned limits and controls."], ["Demand loan", "Loan repayable according to agreed demand/repayment terms."], ["Bill finance", "Finance against eligible bills/receivables under the applicable arrangement."], ["Bill discounting", "Bank provides funds against eligible bills before maturity subject to terms."]] }
      ] },
      { id: "pricing", title: "4. Loan Pricing and Profitability", icon: "LineChart", blocks: [
        { kind: "paragraph", text: "Loan pricing should compensate the lender for funding cost, operating cost, expected credit loss and other risks while remaining commercially viable. Profitability analysis considers income from the facility against costs and risk." },
        { kind: "table", headers: ["Factor", "Pricing relevance"], rows: [["Funding cost", "Cost of obtaining funds."], ["Operating cost", "Cost of originating and servicing the facility."], ["Credit risk", "Expected loss and risk premium considerations."], ["Capital/risk costs", "Resources required to support the exposure."], ["Return", "Income expected from the facility."]] }
      ] },
      { id: "regulation", title: "5. Credit Regulations and Delivery", icon: "Scale", blocks: [
        { kind: "paragraph", text: "Credit operations are subject to regulatory and internal restrictions. Delivery mechanisms determine how sanctioned credit is made available and controlled. The answer should connect regulation, documentation, utilization and monitoring rather than treating sanction as the end of credit management." },
        { kind: "callout", tone: "case", title: "Case framework", text: "Identify borrower need, facility type, repayment source, pricing, applicable regulatory restrictions, documentation, mode of delivery and post-sanction monitoring." }
      ] }
    ],
    keyTerms: [
      { term: "Credit", definition: "Financial accommodation with repayment obligation." },
      { term: "Credit risk", definition: "Risk of failure to meet credit obligations." },
      { term: "Credit analysis", definition: "Evaluation of borrower and facility information." },
      { term: "Credit appraisal", definition: "Structured assessment before sanction." },
      { term: "Credit procurement", definition: "Process of obtaining required credit facilities." },
      { term: "Loan pricing", definition: "Determination of price/rate for a credit facility." },
      { term: "Cash credit", definition: "Working-capital facility with sanctioned drawing limit." },
      { term: "Demand loan", definition: "Loan repayable according to agreed demand/repayment terms." }
    ],
    examQuestions: [
      "Define credit and explain its objectives. (Long)",
      "Explain credit risk. (Long)",
      "Discuss the Seven Cs of credit as prescribed in the course. (Long)",
      "Explain the credit-analysis process. (Long)",
      "Discuss cash credit and demand loans. (Medium)",
      "Explain bill finance and bill discounting. (Long)",
      "Discuss loan pricing and profitability. (Long)",
      "Explain modes of credit delivery. (Medium)"
    ]
  },
  {
    unitNumber: 2, title: "Trade Credit Risk", hours: 8,
    headings: [
      { id: "banking", title: "1. Sole/Single, Multiple Banking, Consortium and Syndication", icon: "Landmark", blocks: [
        { kind: "paragraph", text: "Trade credit arrangements can involve one bank, multiple banks, a consortium or syndicated lending. The structure affects exposure sharing, coordination and monitoring." },
        { kind: "table", headers: ["Arrangement", "Basic idea"], rows: [["Single banking", "Borrower primarily uses one banking relationship."], ["Multiple banking", "Borrower has facilities with multiple banks."], ["Consortium lending", "Multiple lenders participate in an organized joint arrangement."], ["Syndication", "A lead arranger structures a facility funded by multiple lenders."]] }
      ] },
      { id: "priorities", title: "2. Credit Thrust, Priorities and Acquisitions", icon: "Target", blocks: [
        { kind: "paragraph", text: "Credit priorities influence where financial institutions direct lending resources. Credit acquisition involves identifying need, assessing eligibility, structuring facilities and completing documentation." },
        { kind: "table", headers: ["Stage", "Activity"], rows: [["Need", "Purpose, amount and tenor."], ["Assessment", "Borrower, business and repayment capacity."], ["Structuring", "Facility, security and repayment terms."], ["Documentation", "Agreements and compliance records."], ["Monitoring", "Utilization and risk changes."]] }
      ] },
      { id: "appraisal", title: "3. Credit Appraisal and Proposal Structuring", icon: "FileCheck", blocks: [
        { kind: "paragraph", text: "Credit appraisal examines borrower quality, business prospects, financial strength, facility purpose, repayment source, security and risk. A proposal should be internally consistent: the amount and tenor should match the underlying business cash cycle." },
        { kind: "diagram", diagramId: "rc-credit-risk-matrix", caption: "Credit-risk matrix using likelihood, impact and mitigants." }
      ] },
      { id: "rating", title: "4. Credit Risk Rating and Matrix", icon: "Award", blocks: [
        { kind: "paragraph", text: "Credit-risk rating assigns a risk category using defined factors. A risk matrix can prioritize exposures by likelihood and impact. The rating should support, not replace, detailed credit analysis." },
        { kind: "callout", tone: "info", title: "Exam point", text: "Explain both rating methodology and its limitations. A rating is an analytical assessment, not a guarantee against default." }
      ] },
      { id: "cash-flow", title: "5. Cash Flow and Credit Risk Management", icon: "LineChart", blocks: [
        { kind: "paragraph", text: "Cash flow is central to repayment. Credit risk management therefore tracks operating cash generation, working-capital movements, debt service, utilization and early-warning indicators. Portfolio-level risk also depends on concentration across borrowers and sectors." },
        { kind: "callout", tone: "case", title: "Case framework", text: "For a multiple-banking borrower, map total exposure, repayment sources, cash flow, security, facility terms, concentration and early-warning indicators before deciding monitoring or restructuring actions." }
      ] }
    ],
    keyTerms: [
      { term: "Single banking", definition: "Borrower primarily uses one banking relationship." },
      { term: "Multiple banking", definition: "Borrower obtains facilities from more than one bank." },
      { term: "Consortium lending", definition: "Multiple lenders jointly participate in a facility." },
      { term: "Syndication", definition: "Lead-arranged lending funded by multiple lenders." },
      { term: "Credit proposal", definition: "Structured presentation of borrower and facility information." },
      { term: "Credit risk rating", definition: "Risk classification using a defined methodology." },
      { term: "Credit risk matrix", definition: "Framework combining dimensions such as likelihood and impact." },
      { term: "Cash flow", definition: "Movement of cash used to assess liquidity and repayment capacity." }
    ],
    examQuestions: [
      "Explain single and multiple banking arrangements. (Long)",
      "Discuss consortium lending. (Medium)",
      "Explain syndication. (Medium)",
      "Describe credit acquisition stages. (Long)",
      "Explain credit proposal structure. (Long)",
      "Discuss credit-risk rating and matrix. (Long)",
      "Explain dimensions of credit appraisal. (Long)",
      "Discuss cash flow in credit-risk management. (Long)"
    ]
  },
  {
    unitNumber: 3, title: "Letter of Credit and Loan Commitments", hours: 10,
    headings: [
      { id: "lc", title: "1. Letter of Credit and Parties", icon: "FileText", blocks: [
        { kind: "paragraph", text: "A Letter of Credit is a bank-supported documentary payment mechanism subject to defined terms. Typical parties include applicant, issuing bank, beneficiary and advising/other participating banks depending on the structure." },
        { kind: "diagram", diagramId: "rc-letter-of-credit", caption: "Simplified documentary Letter of Credit flow." }
      ] },
      { id: "nfb", title: "2. Non-Fund Facilities", icon: "Handshake", blocks: [
        { kind: "paragraph", text: "Non-fund facilities primarily create contingent or documentary obligations rather than immediate cash disbursement. Letters of Credit and guarantees are major examples. Risk can crystallize into a funded obligation when the underlying conditions trigger payment." },
        { kind: "table", headers: ["Facility", "Exposure nature"], rows: [["LC", "Documentary payment obligation subject to LC terms."], ["Guarantee", "Undertaking to pay under specified invocation conditions."], ["Loan commitment", "Future financing undertaking subject to agreed conditions."]] }
      ] },
      { id: "guarantees", title: "3. Bank Guarantees", icon: "FileCheck", blocks: [
        { kind: "paragraph", text: "The syllabus covers performance, financial and deferred-payment guarantees and assessment of guarantee limits and claim periods. The bank must assess the applicant and underlying obligation because invocation can create a payment liability." },
        { kind: "table", headers: ["Type", "Purpose"], rows: [["Performance guarantee", "Supports performance of a contractual obligation."], ["Financial guarantee", "Supports a financial obligation."], ["Deferred-payment guarantee", "Supports future payment obligations."]] }
      ] },
      { id: "limits", title: "4. LC Limits, Bill Discounting and Commitments", icon: "Sigma", blocks: [
        { kind: "paragraph", text: "Assessment of LC limits and bill-purchase/discounting facilities requires analysis of transaction volume, underlying trade, tenor, customer strength, documentary terms and repayment source. Loan commitments and unfunded lines can create potential future exposure." },
        { kind: "diagram", diagramId: "rc-loan-commitment", caption: "Potential movement from commitment to funded exposure." }
      ] },
      { id: "case", title: "5. NFB Credit Case Study", icon: "FileText", blocks: [
        { kind: "callout", tone: "case", title: "Case framework", text: "Identify underlying transaction, facility type, amount, validity, applicant strength, margin/security, documentary conditions, potential invocation risk, claim period and monitoring controls." }
      ] }
    ],
    keyTerms: [
      { term: "Letter of Credit", definition: "Bank-supported documentary payment mechanism." },
      { term: "Non-fund facility", definition: "Facility creating contingent or documentary exposure rather than immediate cash disbursement." },
      { term: "Bank guarantee", definition: "Bank undertaking to pay under specified conditions." },
      { term: "Performance guarantee", definition: "Guarantee supporting performance of a contractual obligation." },
      { term: "Financial guarantee", definition: "Guarantee supporting a financial obligation." },
      { term: "Loan commitment", definition: "Undertaking to provide future credit subject to conditions." },
      { term: "Contingent exposure", definition: "Potential exposure that can crystallize on occurrence of a specified event." },
      { term: "Beneficiary", definition: "Party in whose favor an LC or guarantee is issued." }
    ],
    examQuestions: [
      "Define Letter of Credit. (Long)",
      "Explain parties to an LC. (Medium)",
      "Discuss non-fund facilities. (Long)",
      "Explain types of bank guarantees. (Long)",
      "Distinguish financial and performance guarantees. (Medium)",
      "Explain assessment of LC limits. (Long)",
      "Discuss loan commitments and unfunded lines. (Medium)",
      "Explain guarantee limits and claim period. (Long)"
    ]
  },
  {
    unitNumber: 4, title: "Operational Risk Overview", hours: 8,
    headings: [
      { id: "risk", title: "1. Risk, Uncertainty and Financial-Sector Risk", icon: "AlertTriangle", blocks: [
        { kind: "paragraph", text: "Risk refers to uncertainty about outcomes where adverse outcomes can create loss. Financial institutions face credit, market, liquidity, operational and other risks. The unit focuses particularly on operational risk and its management." },
        { kind: "table", headers: ["Risk source", "Example"], rows: [["Credit", "Borrower default."], ["Market", "Adverse movement in prices, rates or other market variables."], ["Liquidity", "Inability to meet obligations when due."], ["Operational", "Failure of people, processes, systems or external events."]] }
      ] },
      { id: "sources", title: "2. Operational Risk Sources", icon: "Layers", blocks: [
        { kind: "paragraph", text: "Operational risk can arise from people, processes, systems and external events. Recruitment and training reduce people-related weaknesses; workflow design and documentation reduce process ambiguity; system controls reduce technology-related failures." },
        { kind: "diagram", diagramId: "rc-operational-risk", caption: "Broad sources of operational risk." }
      ] },
      { id: "workflow", title: "3. Workflow, Delegation and Internal Audit", icon: "GitBranch", blocks: [
        { kind: "paragraph", text: "Workflow design defines the sequence of activities and control points. Delegation of authority defines who can approve or execute actions. Independent internal audit provides assurance over controls and risk-management practices." },
        { kind: "table", headers: ["Control", "Purpose"], rows: [["Workflow documentation", "Standardizes process and provides evidence."], ["Delegation", "Defines decision rights."], ["Segregation of duties", "Separates incompatible activities."], ["Internal audit", "Provides independent assurance and review."]] }
      ] },
      { id: "incident", title: "4. Compliance, Incident Management and System Audit", icon: "FileCheck", blocks: [
        { kind: "paragraph", text: "Independent compliance, incident management and system audit functions help identify regulatory, operational and technology risks. Incident management should include identification, containment, investigation, root-cause analysis and corrective action." },
        { kind: "diagram", diagramId: "rc-incident-management", caption: "Operational incident-management cycle." }
      ] },
      { id: "governance", title: "5. Governance, Whistle Blower Policy and Risk Culture", icon: "FileCheck", blocks: [
        { kind: "paragraph", text: "Corporate governance establishes accountability and oversight. Whistle-blower mechanisms can provide channels for reporting suspected misconduct or control failures. Risk culture describes the shared behaviors and attitudes toward identifying, reporting and managing risk." },
        { kind: "callout", tone: "case", title: "Case framework", text: "For an operational incident, identify the event, process/system cause, control gap, immediate containment, root cause, governance responsibility and long-term corrective action." }
      ] }
    ],
    keyTerms: [
      { term: "Operational risk", definition: "Risk of loss from failed people, processes, systems or external events." },
      { term: "Risk culture", definition: "Shared behaviors and attitudes toward risk management." },
      { term: "Workflow", definition: "Sequence of activities and hand-offs in a process." },
      { term: "Delegation of authority", definition: "Allocation of specified decision powers." },
      { term: "Internal audit", definition: "Independent assurance over controls and risk management." },
      { term: "Incident management", definition: "Process for identifying, containing, investigating and correcting incidents." },
      { term: "Whistle-blower policy", definition: "Mechanism for reporting specified concerns or misconduct." },
      { term: "Corporate governance", definition: "Framework of oversight, accountability and control." }
    ],
    examQuestions: [
      "Define operational risk. (Long)",
      "Explain financial-sector risks. (Long)",
      "Discuss recruitment and training as operational controls. (Medium)",
      "Explain workflow design and documentation. (Long)",
      "Discuss delegation of authority. (Medium)",
      "Explain independent internal audit and system audit. (Long)",
      "Discuss incident management. (Long)",
      "Explain risk culture and whistle-blower policy. (Medium)"
    ]
  },
  {
    unitNumber: 5, title: "Credit Analysis & Rating", hours: 8,
    headings: [
      { id: "analysis", title: "1. Importance and Stages of Credit Analysis", icon: "LineChart", blocks: [
        { kind: "paragraph", text: "Credit analysis determines whether a borrower can and is likely to meet obligations. The process should connect business quality, financial statements, cash flow, risk, facility structure and pricing." },
        { kind: "diagram", diagramId: "rc-credit-analysis", caption: "Structured stages of credit analysis." }
      ] },
      { id: "profitability", title: "2. Profitability Analysis and Credit Pricing", icon: "IndianRupee", blocks: [
        { kind: "paragraph", text: "Profitability analysis examines whether the return from a credit relationship adequately compensates for funding, operating and risk costs. Pricing should consider expected loss, capital/risk requirements and the facility\u2019s risk characteristics." },
        { kind: "table", headers: ["Factor", "Pricing relevance"], rows: [["Funding cost", "Cost of funds used for lending."], ["Operating cost", "Cost of processing and servicing."], ["Credit risk", "Expected loss and risk premium."], ["Capital/risk cost", "Resources required to support exposure."], ["Income", "Interest and fee revenue."]] }
      ] },
      { id: "leverage", title: "3. Debt Ratios and Leverage Risk", icon: "Sigma", blocks: [
        { kind: "paragraph", text: "Leverage increases financial obligations relative to the borrower\u2019s own capital. Debt ratios therefore help the analyst assess financial risk. The ratios must be interpreted alongside cash flow, asset quality, industry conditions and repayment schedule." },
        { kind: "table", headers: ["Indicator", "Credit question"], rows: [["Debt-equity", "How heavily is the business financed by debt?"], ["Interest coverage", "Can operating earnings support interest expense?"], ["Debt service", "Can cash flow meet principal and interest obligations?"]] }
      ] },
      { id: "working-capital", title: "4. Working Capital, Operating and Cash Cycles", icon: "RefreshCw", blocks: [
        { kind: "paragraph", text: "Working-capital risk arises when cash is tied up in inventory and receivables or when supplier terms change. The operating cycle measures the time from acquisition of inputs to collection from customers; the cash cycle adjusts for the period financed by suppliers." },
        { kind: "table", headers: ["Cycle", "Meaning"], rows: [["Operating cycle", "Time from inventory acquisition through sales and collection."], ["Cash cycle", "Operating cycle less relevant supplier-credit period."], ["Working-capital risk", "Risk that liquidity needs exceed available internal and external funding."]] }
      ] },
      { id: "rating", title: "5. Credit Rating and Methodology", icon: "Award", blocks: [
        { kind: "paragraph", text: "Credit rating involves measurement of risk, stated objectives, internal and external ratings, model ratings and methodology. A rating methodology may combine financial, business, management, external and facility-specific factors." },
        { kind: "diagram", diagramId: "rc-rating-process", caption: "Conceptual credit-rating process." },
        { kind: "callout", tone: "info", title: "Limitation", text: "A rating is an assessment under a defined methodology and is not a guarantee against default. Its scale, scope and assumptions must be understood." }
      ] }
    ],
    keyTerms: [
      { term: "Credit analysis", definition: "Structured evaluation of borrower and facility risk." },
      { term: "Profitability analysis", definition: "Assessment of earnings and return generated by a credit relationship or business." },
      { term: "Leverage", definition: "Use of debt relative to capital/equity." },
      { term: "Working capital", definition: "Current operating resources and financing requirement." },
      { term: "Operating cycle", definition: "Time from acquisition of inputs through sales and collection." },
      { term: "Cash cycle", definition: "Operating cycle adjusted for supplier financing." },
      { term: "Credit rating", definition: "Assessment of creditworthiness under a defined methodology." },
      { term: "Internal rating", definition: "Rating produced by a lender\u2019s internal methodology." },
      { term: "External rating", definition: "Rating provided by an external rating agency." },
      { term: "Model rating", definition: "Rating produced using a defined quantitative/rule-based model." }
    ],
    examQuestions: [
      "Explain stages of credit analysis. (Long)",
      "Discuss profitability analysis and pricing of credit. (Long)",
      "Explain debt ratios and leverage risk. (Long)",
      "Discuss working-capital risk. (Long)",
      "Explain operating and cash cycles. (Medium)",
      "Discuss credit-rating objectives and methodology. (Long)",
      "Compare internal and external ratings. (Long)",
      "Explain model credit rating. (Medium)"
    ]
  }
];
