import { UnitNote } from "@/types";

// Detailed, in-app notes for Financial Accounting (BBA103) — AKTU BBA Sem 1.
export const bbaFinancialAccountingUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Fundamentals of Financial Accounting",
    hours: 9,
    headings: [
      {
        id: "intro-accounting",
        title: "1. Introduction, Conventions and Principles",
        icon: "BookOpen",
        blocks: [
          {
            kind: "paragraph",
            text: "Financial Accounting is the process of recording, classifying, summarising, and interpreting financial transactions to present a true and fair view of a business's performance and position to its stakeholders.",
          },
          {
            kind: "paragraph",
            text: "Purpose, scope and limitations: accounting helps track performance and meet legal/tax obligations, but is limited by its reliance on historical cost, its inability to capture non-monetary factors (like employee morale), and the scope for subjective judgement (e.g., in estimating depreciation).",
          },
          {
            kind: "paragraph",
            text: "Users of accounting information: internal (management) and external (investors, banks/lenders, government, creditors, employees) — each uses financial statements for different decisions.",
          },
          {
            kind: "paragraph",
            text: "GAAP (Generally Accepted Accounting Principles) and Accounting Standards (AS) are the common rules ensuring financial statements are prepared consistently and can be compared across companies and time periods.",
          },
        ],
      },
      {
        id: "accounting-equation",
        title: "2. The Accounting Equation",
        icon: "Equal",
        blocks: [
          {
            kind: "paragraph",
            text: "The Accounting Equation is the fundamental relationship underlying every recorded transaction — the basis for double-entry bookkeeping (Unit 2):",
          },
          { kind: "diagram", diagramId: "accounting-equation", caption: "Fig 1.1 — The Accounting Equation" },
          {
            kind: "table",
            headers: ["Element", "Meaning"],
            rows: [
              ["Assets", "Resources owned/controlled by the business with future economic value"],
              ["Liabilities", "Obligations the business owes to outsiders"],
              ["Revenues", "Income earned from normal business operations"],
              ["Expenses", "Costs incurred to earn revenue"],
            ],
          },
        ],
      },
      {
        id: "expenditure-receipts",
        title: "3. Capital vs. Revenue Expenditure and Rules of Debit/Credit",
        icon: "Scale",
        blocks: [
          {
            kind: "table",
            headers: ["Concept", "Meaning", "Example"],
            rows: [
              ["Capital Expenditure", "Spending that creates a long-term asset/benefit", "Buying new machinery"],
              ["Revenue Expenditure", "Spending for day-to-day operations, benefit used up within the year", "Paying monthly electricity bills"],
              ["Deferred Revenue Expenditure", "A large revenue expense whose benefit spreads over several years, so it's written off gradually", "A large one-time advertising campaign launching a new product"],
              ["Capital Receipts", "Money received that is NOT from normal operations (e.g., a bank loan, sale of a fixed asset)", "—"],
              ["Revenue Receipts", "Money received from normal business operations", "Cash sales"],
            ],
          },
          {
            kind: "paragraph",
            text: "Nature of accounts and rules of debit and credit: every account is one of three types — Personal (persons/entities), Real (assets), or Nominal (expenses/incomes) — with distinct debit/credit rules for each, but the modern approach (used for computerised accounting) applies uniform rules directly via the accounting equation: assets and expenses increase with a debit; liabilities, capital, and income increase with a credit.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "GAAP", definition: "Generally Accepted Accounting Principles — the common rules for preparing financial statements." },
      { term: "Capital Expenditure", definition: "Spending that creates a long-term asset or benefit for the business." },
      { term: "Deferred Revenue Expenditure", definition: "A large revenue expense whose benefit is written off gradually over several years." },
    ],
    examQuestions: [
      "Discuss the purpose, scope, and limitations of accounting. (Medium)",
      "Explain the accounting equation with an example. (Medium)",
      "Differentiate between capital expenditure and revenue expenditure with examples. (Long)",
      "Differentiate between capital receipts and revenue receipts. (Short)",
      "Explain the nature of accounts and the rules of debit and credit. (Medium)",
    ],
  },
  {
    unitNumber: 2,
    title: "Basic Accounting Processes",
    hours: 8,
    headings: [
      {
        id: "double-entry",
        title: "1. Double Entry System and Its Advantages",
        icon: "Repeat",
        blocks: [
          {
            kind: "paragraph",
            text: "The Double Entry System records every transaction in at least two accounts — a debit in one and a corresponding credit in another — keeping the accounting equation always in balance. Its advantages: complete record of transactions, arithmetic accuracy check (via trial balance), and the ability to prepare accurate financial statements.",
          },
          { kind: "diagram", diagramId: "accounting-cycle", caption: "Fig 2.1 — The accounting cycle" },
        ],
      },
      {
        id: "journal-gst",
        title: "2. Journal, Journalizing and GST Accounting",
        icon: "FileText",
        blocks: [
          {
            kind: "paragraph",
            text: "The Journal is the \"book of original entry\" — every transaction is first recorded here in chronological order, showing which account is debited and which is credited, along with a brief narration.",
          },
          {
            kind: "paragraph",
            text: "Goods and Services Tax (GST) and accounting: when a business sells goods/services, it collects GST from the customer (Output GST, a liability), and when it purchases goods/services, it pays GST (Input GST, which can usually be claimed as a credit against Output GST). Accounting entries must separately record the base transaction value and the GST component.",
          },
        ],
      },
      {
        id: "ledger-trial-balance",
        title: "3. Ledger and Trial Balance",
        icon: "BookMarked",
        blocks: [
          {
            kind: "paragraph",
            text: "The Ledger is where journal entries are \"posted\" (transferred) to individual accounts, one account per section, so the total effect on each account (like Cash, or a specific customer) can be seen together.",
          },
          {
            kind: "paragraph",
            text: "Opening entries record balances brought forward from a previous period; Closing entries transfer the balances of temporary accounts (revenue, expenses) to the Profit & Loss Account at the end of a period.",
          },
          {
            kind: "paragraph",
            text: "The Trial Balance is a statement listing all ledger account balances, to check that total debits equal total credits — a basic arithmetic check before preparing final accounts (though it doesn't catch every kind of error, like a transaction omitted entirely from both sides).",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Journal", definition: "The book of original entry where transactions are first recorded chronologically." },
      { term: "Output GST", definition: "GST collected by a business from customers on its sales, treated as a liability." },
      { term: "Trial Balance", definition: "A statement listing all ledger balances to check that total debits equal total credits." },
    ],
    examQuestions: [
      "Explain the double entry system and its advantages. (Medium)",
      "Explain the process of journalizing with an example. (Medium)",
      "How is GST accounted for in a business's books? (Medium)",
      "Explain the process of ledger posting from journal entries. (Long)",
      "What is a trial balance? What are its limitations? (Medium)",
    ],
  },
  {
    unitNumber: 3,
    title: "Accounting for Inventory and Partnership",
    hours: 7,
    headings: [
      {
        id: "depreciation",
        title: "1. Depreciation: Significance and Methods",
        icon: "TrendingDown",
        blocks: [
          {
            kind: "paragraph",
            text: "Depreciation is the systematic allocation of a fixed asset's cost over its useful life, reflecting wear and tear/obsolescence — its significance lies in matching the cost of using an asset against the revenue it helps generate each period (the Matching Concept).",
          },
          {
            kind: "table",
            headers: ["Method", "How it works"],
            rows: [
              ["Straight Line Method (SLM)", "Equal depreciation charged every year over the asset's useful life"],
              ["Written Down Value (WDV) Method", "A fixed percentage of the reducing book value is charged each year, so depreciation is higher in early years"],
            ],
          },
        ],
      },
      {
        id: "inventory-reserves",
        title: "2. Inventory Valuation and Reserves",
        icon: "Boxes",
        blocks: [
          {
            kind: "table",
            headers: ["Inventory Valuation Method", "Basis"],
            rows: [
              ["FIFO (First-In-First-Out)", "Assumes the oldest stock is sold first — closing stock is valued at the most recent purchase prices"],
              ["LIFO (Last-In-First-Out)", "Assumes the newest stock is sold first (rarely permitted under current Indian accounting standards, but conceptually important)"],
              ["Weighted Average Method", "Uses the average cost of all units available for sale during the period"],
            ],
          },
          {
            kind: "paragraph",
            text: "Reserves are amounts set aside from profits to strengthen the financial position or meet a future need — types include General Reserve (for general strengthening) and Specific Reserve (for a defined purpose, like a Dividend Equalisation Reserve).",
          },
        ],
      },
      {
        id: "partnership-accounting",
        title: "3. Partnership Accounting and Dissolution",
        icon: "Handshake",
        blocks: [
          {
            kind: "paragraph",
            text: "A Partnership Firm is a business owned by two or more partners, governed by a partnership deed specifying profit-sharing ratios, capital contributions, and interest on capital/drawings.",
          },
          {
            kind: "paragraph",
            text: "Dissolution of a Partnership Firm means the firm ceases to exist entirely (different from a mere change in partners, which is a \"reconstitution\") — its accounts are settled by realising all assets, paying off all liabilities, and distributing any remaining balance among partners according to their profit-sharing ratio.",
          },
          {
            kind: "paragraph",
            text: "Provision for Bad Debts is an estimated amount set aside for debtors who may not pay, following the conservatism principle. Accrued income (earned but not yet received), Prepaid expenses (paid in advance for a future period), Outstanding expenses (incurred but not yet paid), and Unearned income (received in advance for a future period) are all year-end adjustments needed to accurately match income and expenses to the correct accounting period.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "WDV Method", definition: "A depreciation method charging a fixed percentage of the reducing book value each year." },
      { term: "Dissolution of Partnership", definition: "The complete closure of a partnership firm, with assets realised and liabilities settled." },
      { term: "Accrued Income", definition: "Income that has been earned but not yet received." },
    ],
    examQuestions: [
      "Explain the straight line and written down value methods of depreciation with an example. (Numerical, Long)",
      "Explain the methods of inventory valuation. (Medium)",
      "Differentiate between general reserve and specific reserve. (Short)",
      "Explain the accounting treatment on dissolution of a partnership firm. (Long)",
      "Explain accrued, prepaid, outstanding, and unearned income/expenditure with examples. (Medium)",
    ],
  },
  {
    unitNumber: 4,
    title: "Recording, Classification and Financial Statements",
    hours: 10,
    headings: [
      {
        id: "final-accounts",
        title: "1. Preparation of Final Accounts for a Sole Proprietor",
        icon: "FileSpreadsheet",
        blocks: [
          {
            kind: "paragraph",
            text: "Final accounts are prepared at the end of an accounting period to show a business's profitability and financial position:",
          },
          {
            kind: "bullets",
            items: [
              "Trading Account: shows Gross Profit = Sales − Cost of Goods Sold.",
              "Profit & Loss Account: shows Net Profit = Gross Profit − operating expenses + other income, prepared both without and with year-end adjustments (like the ones covered in Unit 3).",
              "Balance Sheet: shows the financial position — assets, liabilities, and capital — at a specific point in time.",
            ],
          },
        ],
      },
      {
        id: "company-financial-statements",
        title: "2. Financial Statements of a Joint Stock Company",
        icon: "Building2",
        blocks: [
          {
            kind: "paragraph",
            text: "Under the Companies Act, 2013, a company's Balance Sheet must be presented in a prescribed vertical format under Schedule III, with assets and liabilities grouped as current and non-current — a structured, standardised format very different from the simple horizontal format used for a sole proprietor.",
          },
        ],
      },
      {
        id: "cash-flow-statement",
        title: "3. Cash Flow Statement",
        icon: "Waves",
        blocks: [
          {
            kind: "paragraph",
            text: "A Cash Flow Statement shows actual cash inflows and outflows during a period, split into three activities:",
          },
          {
            kind: "bullets",
            items: [
              "Operating Activities: cash from core business operations.",
              "Investing Activities: cash used for/generated from buying or selling long-term assets.",
              "Financing Activities: cash from/to raising or repaying capital (loans, share issues, dividend payments).",
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Why it matters",
            text: "A business can show a healthy profit on paper while actually running low on cash — because profit includes non-cash items (like depreciation) and doesn't reflect the timing of cash receipts/payments. The Cash Flow Statement catches this \"profitable but cash-poor\" situation.",
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
      "Prepare a Trading and Profit & Loss Account from given data. (Numerical, Long)",
      "Explain the preparation of a Balance Sheet for a sole proprietor. (Long)",
      "Explain the vertical format of a company's Balance Sheet under Schedule III. (Medium)",
      "Explain the Cash Flow Statement and its three categories of activities. (Long)",
      "Why can a profitable company still face a cash shortage? (Short)",
    ],
  },
  {
    unitNumber: 5,
    title: "Accounting Standards and IFRS",
    hours: 6,
    headings: [
      {
        id: "ifrs-need",
        title: "1. Introduction to IFRS: Need and Significance",
        icon: "Globe",
        blocks: [
          {
            kind: "paragraph",
            text: "International Financial Reporting Standards (IFRS), issued by the IASB, are the global accounting standards used by most countries — their significance lies in making financial statements comparable across borders, which is essential for global investors and multinational companies.",
          },
          {
            kind: "paragraph",
            text: "Ethical issues in accounting: accountants face pressure to manipulate figures (e.g., overstating revenue, understating expenses) to meet targets — professional accounting bodies enforce codes of ethics emphasising integrity, objectivity, and professional competence to guard against this (recall the Satyam scam, discussed in Strategic Management, as an extreme example of accounting ethics failure).",
          },
        ],
      },
      {
        id: "ind-as-convergence",
        title: "2. Convergence of Indian Accounting Standards with IFRS",
        icon: "GitMerge",
        blocks: [
          {
            kind: "paragraph",
            text: "India has adopted a converged version of IFRS called Ind AS (Indian Accounting Standards) — largely aligned with IFRS but with certain India-specific modifications (\"carve-outs\") to suit local regulatory and economic conditions.",
          },
          {
            kind: "paragraph",
            text: "Benefits of achieving convergence with IFRS: for the economy (attracts foreign investment by improving comparability and transparency), for investors (easier cross-border comparison of companies), for industry (lower cost of raising capital internationally), and for accounting professionals (globally portable skills and qualifications).",
          },
        ],
      },
      {
        id: "specific-ind-as",
        title: "3. Introduction to Specific Ind AS Standards",
        icon: "FileCheck",
        blocks: [
          {
            kind: "table",
            headers: ["Standard", "Covers"],
            rows: [
              ["Ind AS 7", "Statement of Cash Flows — rules for preparing and presenting cash flow statements"],
              ["Ind AS 16", "Property, Plant and Equipment — recognition, measurement, and depreciation of fixed assets"],
              ["Ind AS 18", "Revenue Recognition — principles for when and how much revenue to recognise from a transaction"],
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "IFRS", definition: "International Financial Reporting Standards — global accounting standards issued by the IASB." },
      { term: "Ind AS", definition: "India's converged accounting standards, broadly aligned with IFRS with some local modifications." },
      { term: "Carve-out", definition: "An India-specific modification to an IFRS-aligned Ind AS standard." },
    ],
    examQuestions: [
      "Explain the need and significance of IFRS. (Medium)",
      "Discuss the ethical issues in accounting with an example. (Medium)",
      "Explain the concept of convergence of Ind AS with IFRS and its benefits. (Long)",
      "Write short notes on Ind AS 7, Ind AS 16, and Ind AS 18. (Medium)",
    ],
  },
];
