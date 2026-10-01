import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Tax Planning & Management (BMB FM 02)
// — AKTU, MBA Semester III, 40 hours, syllabus supplied by the user.
export const TaxPlanningManagementUnitNotes: UnitNote[] = [
  {
    unitNumber: 1, title: "Fundamental Concepts", hours: 6,
    headings: [
      { id: "intro", title: "1. Taxation and Canons", icon: "Landmark", blocks: [
        { kind: "paragraph", text: "Taxation is a compulsory levy imposed under law to raise public revenue. The syllabus begins with definition, canons of taxation and the basic structure of income-tax administration." },
        { kind: "table", headers: ["Canon", "Explanation"], rows: [["Equity", "Tax burden should follow a defensible principle of fairness."], ["Certainty", "Liability, timing and payment requirements should be clear."], ["Convenience", "Collection should be reasonably convenient."], ["Economy", "Collection cost should be proportionate to revenue."]] }
      ] },
      { id: "terminology", title: "2. Basic Income-Tax Terminology", icon: "FileText", blocks: [
        { kind: "table", headers: ["Term", "Study meaning"], rows: [["Person", "Tax-law category covering individuals and specified entities."], ["Assessee", "Person dealt with under the income-tax framework."], ["Previous Year", "Income-earning year relevant to assessment."], ["Assessment Year", "Year in which the relevant income is assessed."], ["Income", "Taxable receipts/gains within statutory heads and definitions."]] },
        { kind: "diagram", diagramId: "tax-assessment-cycle", caption: "Relationship between previous year and assessment year." }
      ] },
      { id: "dates-forms", title: "3. Important Dates and Forms", icon: "CalendarClock", blocks: [
        { kind: "paragraph", text: "Tax compliance involves prescribed due dates, returns and forms. The exact date and form depend on the taxpayer, transaction and applicable year. Exam answers should distinguish a general compliance principle from a year-specific due date." },
        { kind: "callout", tone: "info", title: "Exam caution", text: "Do not memorize a date without identifying the assessment year and taxpayer category to which it applies." }
      ] },
      { id: "residential-status", title: "4. Residential Status and Tax Incidence", icon: "Globe", blocks: [
        { kind: "paragraph", text: "Residential status is important because it affects the statutory scope of income taxable in India. The classification must be determined from the residence tests prescribed by the applicable tax law and the facts of the taxpayer." },
        { kind: "table", headers: ["Factor", "Why it matters"], rows: [["Stay/residence facts", "Used in determining residential classification."], ["Income source", "Helps identify the tax connection of a receipt."], ["Foreign income", "Tax treatment depends on residential status and applicable rules."]] }
      ] },
      { id: "exempt-income", title: "5. Exempt Income", icon: "Scale", blocks: [
        { kind: "paragraph", text: "Certain incomes are exempt or excluded from tax under specified provisions. Exemption is different from a deduction: an exempt receipt is not included in taxable income under the relevant provision, whereas a deduction generally reduces income after it has entered the applicable computation." },
        { kind: "callout", tone: "case", title: "Case framework", text: "Identify the receipt, classify its nature, locate the relevant exemption provision and verify the conditions before excluding it from taxable income." }
      ] }
    ],
    keyTerms: [
      { term: "Taxation", definition: "Compulsory levy imposed under law." },
      { term: "Assessment Year", definition: "Year in which income is assessed." },
      { term: "Previous Year", definition: "Income-earning year relevant to assessment." },
      { term: "Assessee", definition: "Person dealt with under tax law." },
      { term: "Residential status", definition: "Tax classification affecting scope of taxable income." },
      { term: "Tax incidence", definition: "Extent and manner in which income becomes subject to tax." },
      { term: "Exemption", definition: "Statutory exclusion of specified income from tax subject to conditions." }
    ],
    examQuestions: [
      "Define taxation and explain its objectives. (Medium)",
      "Explain the canons of taxation. (Long)",
      "Distinguish previous year and assessment year. (Medium)",
      "Explain important income-tax terminology. (Long)",
      "Explain residential status and tax incidence. (Long)",
      "Distinguish exemption and deduction. (Medium)"
    ]
  },
  {
    unitNumber: 2, title: "Heads of Income and Provisions", hours: 10,
    headings: [
      { id: "salary", title: "1. Income from Salary", icon: "IndianRupee", blocks: [
        { kind: "paragraph", text: "Salary income arises from an employer\u2013employee relationship and may include basic salary, allowances, perquisites and specified retirement-related receipts. The taxability of each component depends on the applicable provision and conditions." },
        { kind: "table", headers: ["Component", "Study point"], rows: [["Basic salary", "Core salary component."], ["Allowance", "Additional payment whose tax treatment depends on the allowance and conditions."], ["Perquisite", "Employer-provided benefit or amenity with prescribed tax treatment."], ["Retirement receipt", "Tax treatment depends on the nature and applicable exemption/conditions."]] }
      ] },
      { id: "house-property", title: "2. Income from House Property", icon: "LayoutTemplate", blocks: [
        { kind: "paragraph", text: "Income from house property is computed under a separate tax head using the statutory annual-value framework and permitted deductions. The answer should identify the property, determine the relevant annual value and apply the allowed deductions." },
        { kind: "table", headers: ["Step", "Purpose"], rows: [["Identify property", "Determine applicability of the house-property head."], ["Annual value", "Compute the statutory property-income measure."], ["Deductions", "Apply permitted statutory deductions."], ["Taxable income", "Arrive at income under the head."]] }
      ] },
      { id: "business", title: "3. Business or Profession", icon: "Package", blocks: [
        { kind: "paragraph", text: "Business/professional income is determined after considering taxable receipts and allowable expenditure. A central analytical distinction is between revenue and capital items and between allowable and specifically disallowed expenditure." },
        { kind: "table", headers: ["Question", "Credit/tax relevance"], rows: [["Business nexus", "Is the receipt or expenditure connected with business?"], ["Capital/revenue", "Does the item have capital or revenue character?"], ["Allowability", "Is the expenditure permitted by the tax framework?"]] }
      ] },
      { id: "capital-other", title: "4. Capital Gains and Other Sources", icon: "TrendingUp", blocks: [
        { kind: "paragraph", text: "Capital gains arise from transfer of capital assets subject to statutory conditions. Income from other sources is a residual head for taxable income that does not appropriately fall under the other specified heads." },
        { kind: "table", headers: ["Concept", "Meaning"], rows: [["Capital asset", "Asset within the statutory capital-asset definition."], ["Transfer", "Transaction meeting the statutory meaning."], ["Capital gain", "Gain computed under applicable transfer and cost rules."], ["Other sources", "Residual taxable income head subject to the law."]] }
      ] },
      { id: "clubbing-losses", title: "5. Clubbing, Deductions and Losses", icon: "Sigma", blocks: [
        { kind: "paragraph", text: "Clubbing provisions prevent specified income-shifting arrangements from producing unintended tax outcomes. The syllabus also covers taxable-income computation, surcharge, marginal relief, deductions, rebate, relief, set-off and carry-forward of losses." },
        { kind: "diagram", diagramId: "tax-income-computation", caption: "Conceptual sequence from income heads to taxable income." },
        { kind: "table", headers: ["Concept", "Meaning"], rows: [["Gross Total Income", "Aggregate after computing income under applicable heads before Chapter VI-A deductions."], ["Deduction", "Specified amount permitted to reduce taxable income subject to conditions."], ["Set-off", "Adjustment of eligible loss against eligible income."], ["Carry-forward", "Future use of specified losses subject to conditions and time limits."], ["Marginal relief", "Specified relief mechanism in surcharge-related situations."]] }
      ] }
    ],
    keyTerms: [
      { term: "Salary income", definition: "Income taxable under the salary head." },
      { term: "Perquisite", definition: "Employer-provided benefit or amenity." },
      { term: "House property income", definition: "Income computed under the house-property head." },
      { term: "Business income", definition: "Profits and gains from business or profession." },
      { term: "Capital gain", definition: "Gain from transfer of a capital asset." },
      { term: "Clubbing", definition: "Attribution of specified income under anti-shifting rules." },
      { term: "Set-off", definition: "Adjustment of eligible loss against eligible income." },
      { term: "Carry-forward", definition: "Future adjustment of specified losses." },
      { term: "Marginal relief", definition: "Relief in specified surcharge-related circumstances." }
    ],
    examQuestions: [
      "Explain salary income and its components. (Long)",
      "Explain computation of house-property income. (Long)",
      "Discuss business/professional income. (Long)",
      "Explain capital gains. (Long)",
      "What is income from other sources? (Short)",
      "Explain clubbing of income. (Medium)",
      "Explain deductions and rebates. (Long)",
      "Distinguish set-off and carry-forward. (Medium)",
      "Explain surcharge and marginal relief. (Medium)"
    ]
  },
  {
    unitNumber: 3, title: "Tax Planning & Management", hours: 8,
    headings: [
      { id: "planning", title: "1. Tax Planning, Avoidance and Evasion", icon: "Scale", blocks: [
        { kind: "paragraph", text: "Tax planning is lawful arrangement of financial affairs to manage tax within the legal framework. Tax avoidance generally refers to reducing tax through arrangements that may exploit legal structure or gaps, while tax evasion involves illegal concealment, false reporting or non-payment." },
        { kind: "diagram", diagramId: "tax-planning-spectrum", caption: "Conceptual distinction among tax planning, avoidance and evasion." }
      ] },
      { id: "authorities", title: "2. Income-Tax Authorities", icon: "Landmark", blocks: [
        { kind: "paragraph", text: "Tax administration uses authorities with powers and jurisdiction allocated by law. The syllabus includes appointment, jurisdiction, powers and functions, collection and recovery, refunds, offences, penalties, prosecutions, appeals and revisions." },
        { kind: "table", headers: ["Issue", "Study focus"], rows: [["Jurisdiction", "Authority competent to act in a matter."], ["Collection/recovery", "Processes for collecting tax due."], ["Refund", "Return of excess tax where statutory conditions are met."], ["Appeal", "Statutory route for challenging specified orders."], ["Revision", "Supervisory mechanism available under the tax framework."]] }
      ] },
      { id: "advance-tds-tcs", title: "3. Advance Tax, TDS and TCS", icon: "CalendarClock", blocks: [
        { kind: "paragraph", text: "Advance tax requires tax payment during the income year when statutory conditions apply. TDS requires specified payers to deduct tax from specified payments; TCS requires specified collectors to collect tax on specified transactions." },
        { kind: "diagram", diagramId: "tax-compliance", caption: "Relationship among advance tax, TDS and TCS." }
      ] },
      { id: "offences", title: "4. Offences, Penalties and Prosecution", icon: "AlertTriangle", blocks: [
        { kind: "paragraph", text: "Tax compliance mechanisms include consequences for specified defaults. Penalties and prosecution should be distinguished conceptually: penalties are statutory consequences for specified defaults, while prosecution concerns offences dealt with through the criminal-law mechanism provided by the tax law." },
        { kind: "callout", tone: "info", title: "Compliance principle", text: "Tax planning should never be confused with concealment, false reporting or unlawful non-payment." }
      ] },
      { id: "double-tax", title: "5. Advance Rulings and Double Taxation Agreements", icon: "Globe", blocks: [
        { kind: "paragraph", text: "Advance rulings can provide certainty on specified tax questions where the statutory mechanism applies. Double taxation can arise when the same income is taxed in more than one jurisdiction; tax treaties and domestic relief mechanisms can allocate taxing rights or provide relief subject to applicable conditions." },
        { kind: "table", headers: ["Concept", "Meaning"], rows: [["Double taxation", "Same income taxed through overlapping jurisdictional claims."], ["Tax treaty", "Agreement coordinating specified taxation matters between jurisdictions."], ["Relief", "Mechanism reducing the burden of double taxation under applicable rules."]] }
      ] }
    ],
    keyTerms: [
      { term: "Tax planning", definition: "Lawful arrangement of financial affairs to manage tax." },
      { term: "Tax avoidance", definition: "Tax reduction through arrangements that may exploit legal structure/gaps." },
      { term: "Tax evasion", definition: "Illegal concealment or non-compliance." },
      { term: "TDS", definition: "Tax deducted at source by specified payers." },
      { term: "TCS", definition: "Tax collected at source by specified collectors." },
      { term: "Advance tax", definition: "Tax paid during the year under applicable provisions." },
      { term: "Tax treaty", definition: "Agreement coordinating specified taxation matters." },
      { term: "Advance ruling", definition: "Statutory mechanism providing specified tax certainty." }
    ],
    examQuestions: [
      "Define tax planning. (Long)",
      "Distinguish tax planning, avoidance and evasion. (Long)",
      "Explain income-tax authorities and their powers. (Long)",
      "Discuss appeals and revisions. (Medium)",
      "Explain advance tax. (Medium)",
      "Distinguish TDS and TCS. (Medium)",
      "Explain offences and penalties. (Long)",
      "Discuss double taxation and tax treaties. (Long)"
    ]
  },
  {
    unitNumber: 4, title: "Corporate Tax", hours: 6,
    headings: [
      { id: "computation", title: "1. Computation of Corporate Taxable Income", icon: "Sigma", blocks: [
        { kind: "paragraph", text: "Corporate tax computation begins with income and statutory adjustments, followed by treatment of eligible deductions and losses. The exact tax rate and regime depend on the applicable law and year." },
        { kind: "diagram", diagramId: "corporate-tax", caption: "Conceptual corporate-tax computation and MAT check." }
      ] },
      { id: "losses-mat", title: "2. Losses, MAT and MAT Credit", icon: "Scale", blocks: [
        { kind: "paragraph", text: "The syllabus includes carry-forward and set-off of company losses, Minimum Alternate Tax and MAT credit. Normal tax and MAT are conceptually separate computations; MAT credit is subject to statutory conditions for future set-off." },
        { kind: "table", headers: ["Concept", "Study focus"], rows: [["Carry-forward", "Future use of eligible company losses subject to law."], ["MAT", "Special minimum-tax mechanism under specified conditions."], ["MAT credit", "Eligible credit from MAT payment subject to statutory conditions."]] }
      ] },
      { id: "restructuring", title: "3. Amalgamation, Merger and Demerger", icon: "GitCompare", blocks: [
        { kind: "paragraph", text: "Corporate restructuring can affect assets, liabilities, ownership, losses and tax attributes. Tax planning examines whether statutory conditions for special treatment are satisfied rather than assuming every restructuring is tax neutral." },
        { kind: "table", headers: ["Transaction", "Tax-planning focus"], rows: [["Amalgamation", "Conditions, transfer of assets/liabilities and eligible tax attributes."], ["Merger", "Tax consequences of combining entities/businesses."], ["Demerger", "Separation of an undertaking and allocation of assets and liabilities."]] }
      ] },
      { id: "venture-capital", title: "4. Venture Capital Funds and Tax Planning", icon: "Rocket", blocks: [
        { kind: "paragraph", text: "Tax planning for venture-capital funds requires attention to the fund structure, investor-level consequences, eligible investment conditions and the tax provisions applicable in the relevant period. The supplied syllabus does not specify a particular fund regime, so section-level rules are not invented here." },
        { kind: "callout", tone: "info", title: "Source-aligned note", text: "Use the current faculty-prescribed provisions for exact eligibility, rate and exemption details." }
      ] },
      { id: "corporate-case", title: "5. Corporate Tax Planning Case", icon: "FileText", blocks: [
        { kind: "callout", tone: "case", title: "Case framework", text: "Identify the company and transaction, compute taxable income under the applicable provisions, test loss/MAT implications, evaluate restructuring alternatives and document the commercial and tax assumptions separately." }
      ] }
    ],
    keyTerms: [
      { term: "Corporate tax", definition: "Income tax imposed on companies." },
      { term: "MAT", definition: "Minimum Alternate Tax mechanism under specified conditions." },
      { term: "MAT credit", definition: "Eligible credit relating to MAT payment subject to statutory conditions." },
      { term: "Amalgamation", definition: "Corporate combination recognized under legal and tax provisions." },
      { term: "Merger", definition: "Combination of entities/businesses under applicable law." },
      { term: "Demerger", definition: "Separation of an undertaking under applicable conditions." },
      { term: "Corporate tax planning", definition: "Lawful planning of corporate decisions considering tax consequences." }
    ],
    examQuestions: [
      "Explain corporate taxable-income computation. (Long)",
      "Discuss carry-forward and set-off of company losses. (Long)",
      "Explain MAT. (Long)",
      "Explain MAT credit. (Medium)",
      "Discuss tax planning for amalgamation. (Long)",
      "Explain tax issues in merger and demerger. (Long)",
      "Discuss tax planning for venture-capital funds. (Medium)"
    ]
  },
  {
    unitNumber: 5, title: "GST", hours: 10,
    headings: [
      { id: "gst-intro", title: "1. GST Concepts, Advantages and Limitations", icon: "Layers", blocks: [
        { kind: "paragraph", text: "GST is a comprehensive indirect-tax framework on supplies of goods and services. The syllabus covers GST concepts, advantages and limitations, VAT versus GST, GST as the preferred tax structure, model, need for reforms and the impact of GST." },
        { kind: "table", headers: ["Concept", "Study focus"], rows: [["Supply", "Central taxable event under GST."], ["Input Tax Credit", "Eligible credit of tax paid on inputs/input services subject to conditions."], ["Destination principle", "Tax design associated with place of consumption/supply rules."], ["GSTN", "Technology network supporting GST administration and compliance."]] }
      ] },
      { id: "dual", title: "2. Single GST, Dual GST and Components", icon: "Scale", blocks: [
        { kind: "paragraph", text: "India uses a dual GST structure with central and state/UT components. The applicable component depends on the nature and location of the supply under the GST framework." },
        { kind: "diagram", diagramId: "gst-components", caption: "Relationship among CGST, SGST, IGST and UTGST." },
        { kind: "table", headers: ["Component", "Role"], rows: [["CGST", "Central component for relevant intra-State supplies."], ["SGST", "State component for relevant intra-State supplies."], ["IGST", "Integrated mechanism for relevant inter-State supplies."], ["UTGST", "Union Territory component for applicable UT transactions."]] }
      ] },
      { id: "gst-reforms", title: "3. Need for Tax Reforms and Impact of GST", icon: "RefreshCw", blocks: [
        { kind: "paragraph", text: "The GST reform sought to integrate multiple indirect taxes into a more coordinated framework and create an input-credit chain. Its impact can be studied through tax administration, compliance, business processes, inter-State trade and documentation." },
        { kind: "callout", tone: "info", title: "Exam point", text: "Discuss both intended benefits and implementation limitations; do not present GST as eliminating every indirect-tax compliance challenge." }
      ] },
      { id: "registration-filing", title: "4. Registration, Filing and Rates", icon: "FileCheck", blocks: [
        { kind: "paragraph", text: "GST compliance involves determining whether registration is required, identifying the nature and place of supply, applying the relevant rate/classification, maintaining invoices and records, claiming eligible input tax credit and filing prescribed returns." },
        { kind: "table", headers: ["Question", "What to determine"], rows: [["Registration", "Whether the person is required to register under applicable rules."], ["Classification/rate", "Which rate applies to the supply."], ["Place of supply", "Which GST component is relevant."], ["Input credit", "Whether credit is eligible and documented."], ["Filing", "Which return/reporting requirement applies."]] }
      ] },
      { id: "gst-case", title: "5. GST Case Study", icon: "FileText", blocks: [
        { kind: "callout", tone: "case", title: "Case framework", text: "Identify supplier and recipient, classify the supply, determine place of supply, decide CGST+SGST/UTGST or IGST, identify the applicable rate and assess input-tax-credit and documentation requirements." }
      ] }
    ],
    keyTerms: [
      { term: "GST", definition: "Goods and Services Tax framework." },
      { term: "Supply", definition: "Central taxable event under GST." },
      { term: "Input Tax Credit", definition: "Eligible credit of GST paid on inputs/input services subject to conditions." },
      { term: "CGST", definition: "Central GST component for relevant intra-State supplies." },
      { term: "SGST", definition: "State GST component for relevant intra-State supplies." },
      { term: "IGST", definition: "Integrated GST mechanism for relevant inter-State supplies." },
      { term: "UTGST", definition: "Union Territory GST component for applicable transactions." },
      { term: "GSTN", definition: "Technology network supporting GST administration." }
    ],
    examQuestions: [
      "Explain GST and its major concepts. (Long)",
      "Discuss advantages and limitations of GST. (Long)",
      "Compare VAT and GST. (Long)",
      "Explain the need for GST reforms. (Long)",
      "Distinguish single and dual GST. (Medium)",
      "Explain CGST, SGST, IGST and UTGST. (Long)",
      "Discuss input tax credit. (Long)",
      "Explain GST registration and filing conceptually. (Long)"
    ]
  }
];
