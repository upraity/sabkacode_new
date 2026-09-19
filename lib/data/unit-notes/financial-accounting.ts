import { UnitNote } from "@/types";

// Detailed, in-app notes for Financial Accounting and Analysis (BMB103) —
// AKTU MBA Sem 1.
export const financialAccountingUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Meaning and Scope of Accounting",
    hours: 4,
    headings: [
      {
        id: "evolution-users",
        title: "1. Evolution and Users of Accounting",
        icon: "History",
        blocks: [
          {
            kind: "paragraph",
            text: "Accounting has evolved from simple record-keeping (bookkeeping) in ancient trade to today's structured financial reporting system, driven by the growth of joint-stock companies and the need for external stakeholders to trust a company's reported numbers.",
          },
          {
            kind: "paragraph",
            text: "Users of accounting information are grouped as internal (management, employees) and external (investors, lenders/banks, government/tax authorities, creditors, suppliers, customers, the general public) — each uses financial statements for different decisions (management for planning, banks for lending decisions, government for tax assessment).",
          },
        ],
      },
      {
        id: "terminologies",
        title: "2. Basic Accounting Terminologies",
        icon: "BookMarked",
        blocks: [
          {
            kind: "table",
            headers: ["Term", "Meaning"],
            rows: [
              ["Asset", "A resource owned/controlled by the business that has future economic value (e.g., cash, machinery)"],
              ["Liability", "An obligation the business owes to outsiders (e.g., loans, creditors)"],
              ["Capital/Equity", "The owner's claim on the business — Assets minus Liabilities"],
              ["Revenue", "Income earned from the normal operations of the business"],
              ["Expense", "Cost incurred to earn revenue"],
              ["Drawings", "Cash/goods withdrawn by the owner for personal use"],
            ],
          },
        ],
      },
      {
        id: "principles-concepts",
        title: "3. Principles of Accounting, Concepts & Conventions",
        icon: "Scale",
        blocks: [
          {
            kind: "paragraph",
            text: "Accounting concepts are the basic assumptions underlying financial statements, and conventions are the customs/traditions followed in preparing them:",
          },
          {
            kind: "table",
            headers: ["Concept/Convention", "Meaning"],
            rows: [
              ["Business Entity Concept", "The business is treated as separate from its owner(s) for accounting purposes"],
              ["Going Concern Concept", "The business is assumed to continue operating indefinitely, not about to shut down"],
              ["Money Measurement Concept", "Only transactions expressible in money are recorded"],
              ["Accrual Concept", "Revenue/expenses are recorded when earned/incurred, not necessarily when cash changes hands"],
              ["Matching Concept", "Expenses are matched against the revenue they helped generate in the same period"],
              ["Consistency Convention", "The same accounting methods should be used period after period, for comparability"],
              ["Conservatism (Prudence) Convention", "Anticipate no profits, but provide for all possible losses"],
              ["Full Disclosure Convention", "All material information must be disclosed in financial statements"],
            ],
          },
        ],
      },
      {
        id: "accounting-equation",
        title: "4. Accounting Equation",
        icon: "Equal",
        blocks: [
          {
            kind: "paragraph",
            text: "The accounting equation is the fundamental relationship underlying every recorded transaction — the basis for double-entry bookkeeping (Unit 2):",
          },
          { kind: "diagram", diagramId: "accounting-equation", caption: "Fig 1.1 — The Accounting Equation" },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "If a business borrows ₹1,00,000 from a bank, both sides of the equation increase together: Assets (Cash) increase by ₹1,00,000, and Liabilities (Bank Loan) also increase by ₹1,00,000 — the equation always stays balanced.",
          },
        ],
      },
      {
        id: "depreciation-gaap",
        title: "5. Depreciation Accounting & GAAP",
        icon: "TrendingDown",
        blocks: [
          {
            kind: "paragraph",
            text: "Depreciation is the systematic allocation of the cost of a fixed asset over its useful life, reflecting wear and tear/obsolescence. Two common methods: Straight Line Method (SLM — equal depreciation each year) and Written Down Value Method (WDV — a fixed percentage of the reducing book value each year, so depreciation is higher in early years).",
          },
          {
            kind: "paragraph",
            text: "GAAP (Generally Accepted Accounting Principles) is the common set of accounting rules, standards, and procedures that companies use to prepare and present financial statements consistently, so they can be understood and compared by outside users.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Going Concern Concept", definition: "The assumption that a business will continue to operate indefinitely." },
      { term: "Matching Concept", definition: "Expenses are matched against the revenue they helped generate, in the same period." },
      { term: "GAAP", definition: "Generally Accepted Accounting Principles — the common rules for preparing financial statements." },
      { term: "Depreciation", definition: "The systematic allocation of a fixed asset's cost over its useful life." },
    ],
    examQuestions: [
      "Discuss the evolution and users of accounting information. (Medium)",
      "Explain the basic accounting concepts and conventions. (Long)",
      "Explain the accounting equation with an example. (Medium)",
      "What is depreciation? Explain the straight line and written down value methods. (Medium)",
      "What is GAAP? Why is it important? (Short)",
    ],
  },
  {
    unitNumber: 2,
    title: "Mechanics of Accounting",
    hours: 10,
    headings: [
      {
        id: "standards-ifrs",
        title: "1. Accounting Standards and IFRS",
        icon: "FileCheck",
        blocks: [
          {
            kind: "paragraph",
            text: "Accounting Standards (AS) are formal rules issued (in India, by the ICAI/National Financial Reporting Authority) to standardise how specific accounting items are treated, ensuring uniformity and comparability across companies.",
          },
          {
            kind: "paragraph",
            text: "IFRS (International Financial Reporting Standards), issued by the IASB, are the global accounting standards used by most countries. India has adopted a converged version called Ind AS (Indian Accounting Standards) — largely aligned with IFRS but with some India-specific modifications (carve-outs) to suit local regulatory and economic conditions.",
          },
        ],
      },
      {
        id: "double-entry",
        title: "2. Double Entry System of Accounting",
        icon: "Repeat",
        blocks: [
          {
            kind: "paragraph",
            text: "The double-entry system records every transaction in at least two accounts — a debit in one and a corresponding credit in another — keeping the accounting equation always in balance.",
          },
          {
            kind: "table",
            headers: ["Account Type", "Debit means", "Credit means"],
            rows: [
              ["Asset", "Increase", "Decrease"],
              ["Liability", "Decrease", "Increase"],
              ["Capital", "Decrease", "Increase"],
              ["Expense", "Increase", "Decrease"],
              ["Revenue/Income", "Decrease", "Increase"],
            ],
          },
        ],
      },
      {
        id: "journal-ledger-tb",
        title: "3. Journalizing, Ledger Posting & Trial Balance",
        icon: "BookOpen",
        blocks: [
          { kind: "diagram", diagramId: "accounting-cycle", caption: "Fig 2.1 — The accounting cycle" },
          {
            kind: "bullets",
            ordered: true,
            items: [
              "Journal: the \"book of original entry\" — every transaction is first recorded here in chronological order, showing which account is debited and which is credited.",
              "Ledger: journal entries are then \"posted\" (transferred) to individual ledger accounts, one account per page/section, so the total effect on each account can be seen.",
              "Trial Balance: a statement listing all ledger account balances, to check that total debits equal total credits — a basic arithmetic check before preparing final accounts (though it doesn't catch every kind of error).",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "IFRS", definition: "International Financial Reporting Standards — global accounting standards issued by the IASB." },
      { term: "Ind AS", definition: "India's converged accounting standards, broadly aligned with IFRS." },
      { term: "Trial Balance", definition: "A statement listing all ledger balances to check that total debits equal total credits." },
    ],
    examQuestions: [
      "Explain the meaning and importance of Accounting Standards. (Medium)",
      "How is Ind AS related to IFRS? (Short)",
      "Explain the rules of debit and credit under the double-entry system. (Medium)",
      "Explain the accounting cycle from journal to trial balance. (Long)",
      "What is a trial balance? What are its limitations? (Medium)",
    ],
  },
  {
    unitNumber: 3,
    title: "Presentation of Financial Statements",
    hours: 12,
    headings: [
      {
        id: "final-accounts",
        title: "1. Preparation of Final Accounts",
        icon: "FileSpreadsheet",
        blocks: [
          {
            kind: "paragraph",
            text: "Final accounts are prepared at the end of an accounting period to show a business's profitability and financial position:",
          },
          {
            kind: "bullets",
            items: [
              "Trading and Profit & Loss Account: shows gross profit (Sales − Cost of Goods Sold) and net profit (Gross Profit − operating expenses + other income) for the period.",
              "Balance Sheet: shows the financial position — assets, liabilities, and equity — at a specific point in time. Since Companies Act 2013, Indian companies must present the balance sheet in a prescribed vertical format under Schedule III, with assets and liabilities grouped as current and non-current.",
            ],
          },
        ],
      },
      {
        id: "cash-flow",
        title: "2. Cash Flow Statement",
        icon: "Waves",
        blocks: [
          {
            kind: "paragraph",
            text: "A Cash Flow Statement shows actual cash inflows and outflows during a period, split into three activities — helping analyse whether reported profit is actually backed by real cash:",
          },
          {
            kind: "bullets",
            items: [
              "Operating Activities: cash from the core business operations (receipts from customers, payments to suppliers/employees).",
              "Investing Activities: cash used for/generated from buying or selling long-term assets (machinery, investments).",
              "Financing Activities: cash from/to raising or repaying capital (loans, share issues, dividend payments).",
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Why it matters",
            text: "A company can show a healthy profit on paper (Profit & Loss Account) while actually running low on cash — because profit includes non-cash items (like depreciation) and doesn't show timing differences (like unpaid customer invoices). The Cash Flow Statement catches this \"profitable but cash-poor\" situation.",
          },
        ],
      },
      {
        id: "case-studies",
        title: "3. Case Studies and Workshops",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Common classroom exercise",
            text: "A typical case study/workshop in this unit involves taking a trial balance with adjustments (closing stock, outstanding expenses, prepaid income, depreciation) and preparing the Trading A/c, P&L A/c, and Balance Sheet in the Schedule III vertical format — usually also practiced using Excel for automatic calculation and formatting.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Gross Profit", definition: "Sales minus Cost of Goods Sold, before deducting operating expenses." },
      { term: "Schedule III", definition: "The Companies Act, 2013 format prescribing the vertical presentation of the balance sheet." },
      { term: "Cash Flow Statement", definition: "A statement showing cash inflows/outflows across operating, investing, and financing activities." },
    ],
    examQuestions: [
      "Explain the preparation of Trading and Profit & Loss Account with an example. (Long)",
      "Explain the vertical format of the Balance Sheet as per Companies Act, 2013. (Long)",
      "What is a Cash Flow Statement? Explain its three categories of activities. (Long)",
      "Why can a profitable company still face a cash shortage? Explain with reference to the cash flow statement. (Medium)",
    ],
  },
  {
    unitNumber: 4,
    title: "Analysis of Financial Statements",
    hours: 8,
    headings: [
      {
        id: "ratio-analysis",
        title: "1. Ratio Analysis",
        icon: "Percent",
        blocks: [
          {
            kind: "paragraph",
            text: "Ratio analysis expresses the relationship between two figures from the financial statements, helping assess a company's performance and financial health at a glance.",
          },
          { kind: "diagram", diagramId: "ratio-categories", caption: "Fig 4.1 — Major categories of financial ratios" },
          {
            kind: "table",
            headers: ["Category", "What it measures", "Example Ratio"],
            rows: [
              ["Liquidity Ratios", "Ability to meet short-term obligations", "Current Ratio = Current Assets ÷ Current Liabilities"],
              ["Solvency Ratios", "Ability to meet long-term obligations", "Debt-Equity Ratio = Total Debt ÷ Shareholders' Equity"],
              ["Profitability Ratios", "How efficiently the firm generates profit", "Net Profit Margin = Net Profit ÷ Sales"],
              ["Activity (Turnover) Ratios", "How efficiently assets are used", "Inventory Turnover Ratio = COGS ÷ Average Inventory"],
              ["Market Capitalization Ratios", "How the market values the company", "P/E Ratio = Market Price per Share ÷ Earnings per Share"],
              ["Leverage Ratio", "Extent of debt used to finance assets", "Debt Ratio = Total Debt ÷ Total Assets"],
            ],
          },
        ],
      },
      {
        id: "detailed-analysis",
        title: "2. Detailed Analysis Using Excel",
        icon: "Table",
        blocks: [
          {
            kind: "paragraph",
            text: "In practice, ratio analysis is done in Excel by linking ratio formulas directly to the cells of the uploaded balance sheet/P&L, so ratios automatically update when the underlying figures change — a key practical skill this unit builds toward.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Current Ratio", definition: "Current Assets ÷ Current Liabilities — a measure of short-term liquidity." },
      { term: "Debt-Equity Ratio", definition: "Total Debt ÷ Shareholders' Equity — a measure of long-term solvency/leverage." },
      { term: "P/E Ratio", definition: "Market Price per Share ÷ Earnings per Share — a market valuation ratio." },
    ],
    examQuestions: [
      "Explain the different categories of ratios used in financial statement analysis. (Long)",
      "Explain liquidity ratios and solvency ratios with formulas and examples. (Medium)",
      "What are activity/turnover ratios? Explain with an example. (Medium)",
      "Explain market capitalization ratios and leverage ratio. (Medium)",
    ],
  },
  {
    unitNumber: 5,
    title: "Financial Statement Analysis and Recent Types of Accounting",
    hours: 6,
    headings: [
      {
        id: "common-size-comparative",
        title: "1. Common Size Statement, Comparative & Trend Analysis",
        icon: "GitCompare",
        blocks: [
          {
            kind: "table",
            headers: ["Technique", "Meaning"],
            rows: [
              ["Common Size Statement", "Expresses every item in a financial statement as a percentage of a common base (e.g., total assets, or net sales) — makes it easy to compare companies of different sizes."],
              ["Comparative Balance Sheet", "Shows balance sheet figures for two or more periods side by side, along with the absolute and percentage change — highlighting how the financial position has changed."],
              ["Trend Analysis", "Shows the trend of key figures (sales, profit) over several years, usually indexed against a base year, to spot growth patterns."],
            ],
          },
          {
            kind: "paragraph",
            text: "These techniques are commonly applied in workshops analysing manufacturing, service, and banking company balance sheets, since each sector's balance sheet structure differs meaningfully (e.g., banks hold very different asset types than manufacturers).",
          },
        ],
      },
      {
        id: "modern-accounting",
        title: "2. Recent Types of Accounting",
        icon: "Sparkles",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Human Resource Accounting (HRA): an attempt to identify, measure, and report the value of human resources (employees) as an asset of the organisation — since traditional accounting doesn't capture the value of a skilled workforce.",
              "Forensic Accounting: the use of accounting, auditing, and investigative skills to examine financial records for evidence of fraud, embezzlement, or financial crime — often used in legal disputes and fraud investigations (recall the Satyam scam from Strategic Management as a case that heavily relied on forensic accounting to uncover).",
              "Accounting for Corporate Social Responsibility (CSR): recording and reporting a company's CSR spending (mandatory under Section 135 of the Companies Act, 2013) separately in the financial statements/annual report, so stakeholders can see the company's social contribution.",
            ],
          },
        ],
      },
      {
        id: "case-studies",
        title: "3. Case Study",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Forensic accounting in the Satyam scam",
            text: "The unravelling of the Satyam Computers fraud (2009) was ultimately achieved through forensic accounting — investigators traced fabricated bank statements, inflated debtor accounts, and fictitious invoices that had inflated the company's reported profits for years.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Common Size Statement", definition: "A financial statement with every item expressed as a percentage of a common base figure." },
      { term: "Forensic Accounting", definition: "Using accounting and investigative skills to examine records for evidence of fraud." },
      { term: "Human Resource Accounting", definition: "Measuring and reporting the value of an organisation's employees as an asset." },
    ],
    examQuestions: [
      "Explain common size statements with an example. (Medium)",
      "Explain comparative balance sheet and trend analysis. (Medium)",
      "What is forensic accounting? Discuss its relevance with an example. (Medium)",
      "Explain Human Resource Accounting and its significance. (Short)",
      "Discuss accounting for corporate social responsibility. (Short)",
    ],
  },
];
