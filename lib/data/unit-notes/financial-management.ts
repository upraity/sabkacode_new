import { UnitNote } from "@/types";

// Detailed, in-app notes for Financial Management and Corporate Finance
// (BMB204) — AKTU MBA Sem 2. Numerical-heavy — NPV/IRR, WACC, EBIT-EPS,
// and dividend model calculations all include worked examples.
export const financialManagementUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Introduction to Finance and Corporate Finance",
    hours: 8,
    headings: [
      {
        id: "corporate-finance-scope",
        title: "1. Corporate Finance and Its Scope",
        icon: "Landmark",
        blocks: [
          {
            kind: "paragraph",
            text: "Corporate Finance deals with how a firm raises capital (financing decisions), invests that capital (investment decisions), and manages its day-to-day funds (working capital decisions) — all with the ultimate goal of maximising shareholder wealth.",
          },
          {
            kind: "paragraph",
            text: "Finance and Corporate Strategy: financial decisions must support the overall corporate strategy (recall Strategic Management, Units 1 and 3) — e.g., a growth strategy needs financing for expansion, while a retrenchment strategy needs careful cash and debt management.",
          },
          {
            kind: "paragraph",
            text: "The Agency Problem arises because managers (agents) may not always act in the best interests of shareholders (principals) — e.g., pursuing personal prestige projects (\"empire building\") over shareholder value. Corporate governance mechanisms (recall Strategic Management, Unit 1 — board oversight, independent directors) exist partly to reduce this problem.",
          },
        ],
      },
      {
        id: "finance-functions",
        title: "2. Finance Functions and Financial Markets",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "paragraph",
            text: "The three core finance functions are: the Investment Decision (where to deploy funds — Unit 2), the Financing Decision (how to raise funds — Unit 3), and the Dividend Decision (how much profit to distribute vs. retain — Unit 4).",
          },
          {
            kind: "paragraph",
            text: "Factors affecting financial markets: interest rate movements, inflation, government fiscal/monetary policy, investor sentiment, and global capital flows. The Capital Market specifically deals with medium- and long-term funds (shares, debentures), as opposed to the Money Market, which deals with short-term funds.",
          },
        ],
      },
      {
        id: "time-value-money",
        title: "3. Time Value of Money and Risk & Return",
        icon: "Clock",
        blocks: [
          {
            kind: "paragraph",
            text: "The Time Value of Money (TVM) principle states that a rupee today is worth more than a rupee received in the future, because today's rupee can be invested to earn a return — this is why future cash flows must be discounted to compare them fairly with money available today (directly connecting to the Discounting Principle from Managerial Economics, Unit 1).",
          },
          {
            kind: "table",
            headers: ["Concept", "Formula"],
            rows: [
              ["Future Value (FV)", "FV = PV × (1 + r)ⁿ"],
              ["Present Value (PV)", "PV = FV ÷ (1 + r)ⁿ"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Present Value",
            text: "What is the present value of ₹1,21,000 to be received in 2 years, if the discount rate is 10%? PV = 1,21,000 ÷ (1.10)² = 1,21,000 ÷ 1.21 = ₹1,00,000. This means ₹1,00,000 invested today at 10% would grow to exactly ₹1,21,000 in 2 years — so the two amounts are financially equivalent.",
          },
          {
            kind: "paragraph",
            text: "Risk and Return: return is the gain/loss on an investment; risk is the variability/uncertainty of that return. The fundamental principle of finance is the risk-return trade-off — investors demand a higher expected return to compensate for taking on higher risk.",
          },
          {
            kind: "paragraph",
            text: "Integration of Indian Financial Markets with Global Financial Markets: through channels like Foreign Institutional Investment (FII), Global Depository Receipts (GDRs), and cross-listing — meaning global events (like US interest rate changes) now directly affect Indian stock and currency markets.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Agency Problem", definition: "The conflict of interest between managers (agents) and shareholders (principals)." },
      { term: "Time Value of Money", definition: "The principle that money available today is worth more than the same amount in the future." },
      { term: "Risk-Return Trade-off", definition: "The principle that higher potential returns require accepting higher risk." },
    ],
    examQuestions: [
      "Explain the scope of corporate finance and its three core functions. (Medium)",
      "Explain the agency problem and how corporate governance addresses it. (Medium)",
      "Explain the time value of money with a numerical example. (Numerical, Long)",
      "Explain the risk-return trade-off. (Short)",
      "Discuss the integration of Indian financial markets with global markets. (Medium)",
    ],
  },
  {
    unitNumber: 2,
    title: "Investment and Financing Decision",
    hours: 8,
    headings: [
      {
        id: "capital-budgeting-basics",
        title: "1. Capital Budgeting: Nature and Risk of Investment Decisions",
        icon: "Building2",
        blocks: [
          {
            kind: "paragraph",
            text: "Capital Budgeting is the process of evaluating and selecting long-term investment projects (e.g., a new factory, a new product line) whose returns will be realised over several future years.",
          },
          {
            kind: "paragraph",
            text: "Nature of investment decisions: irreversible or costly to reverse (recall Strategic Management, Unit 1 — strategic decisions are difficult to reverse), involve large sums of money, and their returns are spread over a long, uncertain future — making Risk Analysis in investment decisions essential (using techniques like sensitivity analysis and scenario analysis, recall Strategic Management, Unit 4).",
          },
          {
            kind: "paragraph",
            text: "Opportunity Cost is central to capital budgeting: the true cost of an investment includes the return that could have been earned on the next-best alternative use of those funds.",
          },
          {
            kind: "paragraph",
            text: "Cash Flows vs. Profit: capital budgeting decisions are based on cash flows, not accounting profit, because profit includes non-cash items (like depreciation) and doesn't reflect the actual timing of money in and out (recall the Cash Flow Statement, Financial Accounting Unit 3).",
          },
        ],
      },
      {
        id: "cost-of-capital",
        title: "2. Composite Cost of Capital (WACC)",
        icon: "Percent",
        blocks: [
          {
            kind: "paragraph",
            text: "Since a firm raises money from multiple sources (debt, preference capital, equity), it needs a single blended rate — the Weighted Average Cost of Capital (WACC) — to evaluate whether a project's return is good enough.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — WACC",
            text: "A company is financed by: Debt ₹40,00,000 at an after-tax cost of 7%; Preference Capital ₹20,00,000 at a cost of 10%; Equity ₹40,00,000 at a cost of 15%. Total Capital = ₹1,00,00,000. WACC = (40/100 × 7%) + (20/100 × 10%) + (40/100 × 15%) = 2.8% + 2.0% + 6.0% = 10.8%. This 10.8% is the minimum return a new project must earn to be worth accepting.",
          },
        ],
      },
      {
        id: "npv-irr",
        title: "3. Capital Budgeting Decisions: NPV and IRR",
        icon: "Calculator",
        blocks: [
          {
            kind: "table",
            headers: ["Technique", "Meaning", "Decision Rule"],
            rows: [
              ["Net Present Value (NPV)", "Sum of the present values of all future cash inflows, minus the initial investment", "Accept if NPV > 0"],
              ["Internal Rate of Return (IRR)", "The discount rate at which NPV becomes exactly zero — the project's own 'break-even' rate of return", "Accept if IRR > Cost of Capital (WACC)"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — NPV",
            text: "A project requires an initial investment of ₹1,00,000 and is expected to generate cash inflows of ₹40,000 per year for 3 years. The cost of capital (discount rate) is 10%. Present Value of inflows: Year 1 = 40,000 ÷ 1.10 = ₹36,364; Year 2 = 40,000 ÷ 1.10² = ₹33,058; Year 3 = 40,000 ÷ 1.10³ = ₹30,053. Total PV of inflows = 36,364 + 33,058 + 30,053 = ₹99,475. NPV = 99,475 − 1,00,000 = −₹525. Since NPV is (barely) negative, the project should technically be REJECTED at a 10% cost of capital — it earns slightly less than 10%. (In fact, this project's IRR is very close to 10%, just under it.)",
          },
          {
            kind: "callout",
            tone: "info",
            title: "NPV vs. IRR — which is better?",
            text: "NPV is generally considered the technically superior method because it directly measures the rupee value added to the firm and correctly assumes cash flows are reinvested at the cost of capital. IRR is more intuitive (a single percentage figure) but can give misleading rankings when comparing mutually exclusive projects of different sizes or cash flow patterns — a common exam discussion point.",
          },
          {
            kind: "paragraph",
            text: "In practice, Excel's NPV() and IRR() functions are used to analyse real capital budgeting projects quickly, especially when cash flows are uneven or the project life is long.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "WACC", definition: "Weighted Average Cost of Capital — the blended cost across all of a firm's financing sources." },
      { term: "NPV", definition: "Net Present Value — the present value of future cash inflows minus the initial investment." },
      { term: "IRR", definition: "Internal Rate of Return — the discount rate at which a project's NPV equals zero." },
    ],
    examQuestions: [
      "Explain the nature of investment decisions and the role of opportunity cost. (Medium)",
      "Why are cash flows used instead of accounting profit in capital budgeting? (Short)",
      "Calculate the WACC of a firm given its capital structure and component costs. (Numerical, Long)",
      "Calculate the NPV of a project given its cash flows and cost of capital. State whether it should be accepted. (Numerical, Long)",
      "Explain IRR and compare it with NPV as capital budgeting techniques. (Long)",
    ],
  },
  {
    unitNumber: 3,
    title: "Financial Decision: Capital Structure",
    hours: 8,
    headings: [
      {
        id: "capital-structure-theories",
        title: "1. Capital Structure: Relevance and Irrelevance Theory",
        icon: "Scale",
        blocks: [
          {
            kind: "paragraph",
            text: "Capital Structure is the mix of debt and equity a firm uses to finance its assets. The central debate in finance theory is whether this mix actually affects the firm's overall value.",
          },
          {
            kind: "table",
            headers: ["Theory", "View"],
            rows: [
              ["Net Income (NI) Approach", "Capital structure IS relevant — increasing debt (a cheaper source than equity) always increases firm value, since it lowers the WACC"],
              ["Net Operating Income (NOI) Approach", "Capital structure is IRRELEVANT — the overall cost of capital and firm value stay constant regardless of the debt-equity mix, because rising financial risk offsets the benefit of cheaper debt"],
              ["Modigliani-Miller (MM) Approach", "Under strict no-tax assumptions, capital structure is irrelevant (like the NOI approach) — but MM later showed that WITH corporate taxes, debt does add value due to the tax-deductibility of interest (the 'tax shield')"],
            ],
          },
        ],
      },
      {
        id: "ebit-eps",
        title: "2. EBIT-EPS Analysis and the Point of Indifference",
        icon: "GitCompare",
        blocks: [
          {
            kind: "paragraph",
            text: "EBIT-EPS Analysis examines how a firm's Earnings Per Share (EPS) changes under different EBIT (Earnings Before Interest and Tax) levels, for different financing plans (e.g., all-equity vs. a mix of debt and equity) — helping choose the financing plan that maximises EPS for the expected level of EBIT.",
          },
          { kind: "diagram", diagramId: "ebit-eps-chart", caption: "Fig 3.1 — EBIT-EPS Indifference Chart" },
          {
            kind: "paragraph",
            text: "The Point of Indifference (or break-even EBIT) is the EBIT level at which EPS is exactly the SAME under two different financing plans — below this point, the all-equity plan gives higher EPS; above it, the debt-financed plan gives higher EPS (because financial leverage magnifies EPS once EBIT is high enough to comfortably cover the fixed interest cost).",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Point of Indifference",
            text: "Plan A (All Equity): 1,00,000 shares. Plan B (Debt + Equity): 60,000 shares plus ₹20,00,000 of 10% debt (annual interest = ₹2,00,000). Tax rate = 30%. At the indifference EBIT level (X): EPS under Plan A = EPS under Plan B → [(X)(1−0.30)] ÷ 1,00,000 = [(X − 2,00,000)(1−0.30)] ÷ 60,000. Solving: 0.70X ÷ 1,00,000 = 0.70(X − 2,00,000) ÷ 60,000 → 0.70X × 60,000 = 0.70(X − 2,00,000) × 1,00,000 → 42,000X = 70,000(X − 2,00,000) → 42,000X = 70,000X − 1,40,00,00,000 → 28,000X = 1,40,00,00,000 → X = ₹5,00,000. So at an expected EBIT of ₹5,00,000, both plans give identical EPS — above ₹5,00,000, the debt plan (Plan B) is more attractive.",
          },
        ],
      },
      {
        id: "leverage",
        title: "3. Leverage and Financial/Operating Decisions",
        icon: "Weight",
        blocks: [
          {
            kind: "table",
            headers: ["Leverage Type", "Meaning"],
            rows: [
              ["Operating Leverage", "The extent to which fixed operating costs (recall CVP analysis, Cost & Management Accounting Unit 2) are used — high operating leverage means profit is highly sensitive to changes in sales volume"],
              ["Financial Leverage", "The extent to which debt (fixed interest cost) is used in the capital structure — high financial leverage magnifies the effect of EBIT changes on EPS (as seen in the EBIT-EPS analysis above)"],
              ["Combined Leverage", "The total effect of both operating and financial leverage together on EPS, for a given change in sales"],
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Capital Structure", definition: "The mix of debt and equity a firm uses to finance its assets." },
      { term: "Tax Shield", definition: "The tax saving generated by the deductibility of interest expense on debt." },
      { term: "Point of Indifference", definition: "The EBIT level at which EPS is identical under two different financing plans." },
      { term: "Financial Leverage", definition: "The extent to which a firm uses debt, magnifying the effect of EBIT changes on EPS." },
    ],
    examQuestions: [
      "Explain the Net Income and Net Operating Income approaches to capital structure. (Long)",
      "Explain the Modigliani-Miller hypothesis with and without taxes. (Long)",
      "Calculate the point of indifference between two financing plans given EBIT, shares, and debt details. (Numerical, Long)",
      "Explain EBIT-EPS analysis and its use in financing decisions. (Medium)",
      "Differentiate between operating leverage and financial leverage. (Medium)",
    ],
  },
  {
    unitNumber: 4,
    title: "Dividend Relevance",
    hours: 8,
    headings: [
      {
        id: "dividend-policy-factors",
        title: "1. Factors Affecting Dividend Policy and Forms of Dividend",
        icon: "Coins",
        blocks: [
          {
            kind: "paragraph",
            text: "Dividend Policy determines how much of a firm's profit is distributed to shareholders (as dividends) versus retained for reinvestment.",
          },
          {
            kind: "bullets",
            items: [
              "Factors affecting dividend policy: profitability and cash position, growth/investment opportunities available (recall Capital Budgeting, Unit 2), legal restrictions, and shareholder preferences/expectations.",
              "Forms of dividend: cash dividend (most common), stock dividend/bonus shares (additional shares instead of cash), and stock buybacks (repurchasing shares, which increases EPS for remaining shareholders).",
            ],
          },
          {
            kind: "table",
            headers: ["Dividend Policy Type", "Description"],
            rows: [
              ["Stable Dividend Policy", "Pays a consistent dividend amount/percentage regardless of short-term profit fluctuations"],
              ["Constant Payout Ratio Policy", "Pays a fixed PERCENTAGE of profit as dividend each year (so the actual amount varies with profit)"],
              ["Residual Dividend Policy", "Pays out only what's left after funding all profitable investment opportunities first"],
            ],
          },
        ],
      },
      {
        id: "dividend-models",
        title: "2. Dividend Models: Walter and Gordon",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "paragraph",
            text: "Walter's Model argues that dividend policy DOES affect share value, depending on the relationship between the firm's internal Rate of Return (r) and its Cost of Capital (Ke):",
          },
          {
            kind: "bullets",
            items: [
              "If r > Ke (the firm can invest profitably): retaining earnings (low payout) increases share value.",
              "If r < Ke (the firm's investments earn less than shareholders could get elsewhere): distributing earnings (high payout) increases share value.",
              "If r = Ke: dividend policy has no effect on share value.",
            ],
          },
          {
            kind: "paragraph",
            text: "Gordon's Growth Model similarly argues dividend policy affects value, specifically through investors' preference for certain, current dividends over uncertain future capital gains — a concept later called the \"Bird-in-Hand\" theory. Gordon's model values a share as: P = D1 ÷ (Ke − g), where D1 is the expected dividend next year, Ke is the cost of equity, and g is the expected growth rate in dividends.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Gordon's Growth Model",
            text: "Expected dividend next year (D1) = ₹5, Cost of equity (Ke) = 12%, Expected growth rate (g) = 5%. Share Price = D1 ÷ (Ke − g) = 5 ÷ (0.12 − 0.05) = 5 ÷ 0.07 = ₹71.43.",
          },
        ],
      },
      {
        id: "mm-and-theories",
        title: "3. Miller-Modigliani (MM) Hypothesis and Theories of Dividend Payout",
        icon: "Scale",
        blocks: [
          {
            kind: "paragraph",
            text: "The Miller-Modigliani (MM) Hypothesis argues, in contrast to Walter and Gordon, that dividend policy is IRRELEVANT to share value under perfect market conditions (no taxes, no transaction costs) — a shareholder can create their own \"dividend\" by simply selling some shares if the firm pays too little, so the firm's payout choice shouldn't matter.",
          },
          {
            kind: "table",
            headers: ["Theory", "View"],
            rows: [
              ["Dividend Irrelevance Theory (MM)", "Dividend policy has no effect on firm value under ideal (frictionless) market conditions"],
              ["Bird-in-Hand Theory (Gordon)", "Investors prefer certain current dividends (\"a bird in hand\") over uncertain future capital gains (\"two in the bush\") — so higher current payout increases value"],
              ["Tax Preference Theory", "If dividends are taxed at a higher rate than capital gains (as is often the case), investors may actually prefer LOWER dividend payout and more retained earnings/capital gains"],
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Walter's Model", definition: "A dividend model where policy affects value depending on whether the firm's return exceeds its cost of capital." },
      { term: "Gordon's Growth Model", definition: "Values a share as expected dividend divided by (cost of equity minus growth rate)." },
      { term: "Bird-in-Hand Theory", definition: "The theory that investors prefer certain current dividends over uncertain future capital gains." },
    ],
    examQuestions: [
      "Discuss the factors affecting dividend policy. (Medium)",
      "Explain Walter's Model of dividend relevance. (Long)",
      "Calculate share price using Gordon's Growth Model given dividend, cost of equity, and growth rate. (Numerical, Medium)",
      "Explain the Miller-Modigliani dividend irrelevance hypothesis. (Long)",
      "Explain the Bird-in-Hand theory and the Tax Preference theory of dividends. (Medium)",
    ],
  },
  {
    unitNumber: 5,
    title: "Working Capital Management",
    hours: 8,
    headings: [
      {
        id: "working-capital-concepts",
        title: "1. Concepts, Need and Classification of Working Capital",
        icon: "Wallet",
        blocks: [
          {
            kind: "paragraph",
            text: "Working Capital is the capital required for a firm's day-to-day operations — the funds tied up in current assets (like inventory and receivables) net of current liabilities.",
          },
          {
            kind: "table",
            headers: ["Concept", "Meaning"],
            rows: [
              ["Gross Working Capital", "Total investment in current assets"],
              ["Net Working Capital", "Current Assets − Current Liabilities"],
            ],
          },
          {
            kind: "paragraph",
            text: "Need for working capital: to purchase raw materials, pay wages and day-to-day expenses, extend credit to customers, and maintain a buffer of liquidity for unexpected needs.",
          },
          {
            kind: "bullets",
            items: [
              "By concept: Gross vs. Net working capital (as above).",
              "By time: Permanent (Fixed) Working Capital — the minimum level always required, regardless of season — vs. Temporary (Variable) Working Capital — the extra amount needed during peak seasons or special situations.",
            ],
          },
          { kind: "diagram", diagramId: "working-capital-cycle", caption: "Fig 5.1 — The Working Capital Operating Cycle" },
        ],
      },
      {
        id: "cash-inventory-receivable-mgmt",
        title: "2. Cash, Inventory and Receivable Management",
        icon: "Coins",
        blocks: [
          {
            kind: "paragraph",
            text: "Cash Management involves maintaining an optimal cash balance — enough for operational needs and unexpected contingencies, without holding excessive idle cash that earns no return.",
          },
          {
            kind: "paragraph",
            text: "Inventory Management aims to minimise the combined cost of ordering and holding inventory (recall EOQ and ABC analysis, Operations Management Unit 3) while avoiding stock-outs.",
          },
          {
            kind: "paragraph",
            text: "Receivable Management involves setting an appropriate Credit Policy — deciding credit terms, credit period, and collection efforts — balancing the benefit of increased sales (from offering credit) against the cost of funds tied up in receivables and the risk of bad debts.",
          },
          {
            kind: "paragraph",
            text: "The Cash Conversion Cycle (CCC) measures the time (in days) between paying cash for raw materials and receiving cash from customers — a shorter CCC means the firm needs less working capital to fund the same level of operations.",
          },
          {
            kind: "table",
            headers: ["Component", "Formula"],
            rows: [
              ["Inventory Period", "(Average Inventory ÷ Cost of Goods Sold) × 365"],
              ["Receivables Period", "(Average Receivables ÷ Credit Sales) × 365"],
              ["Payables Period", "(Average Payables ÷ Credit Purchases) × 365"],
              ["Cash Conversion Cycle (CCC)", "Inventory Period + Receivables Period − Payables Period"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Cash Conversion Cycle",
            text: "Inventory Period = 45 days. Receivables Period = 30 days. Payables Period = 20 days. CCC = 45 + 30 − 20 = 55 days. This means the company's cash is tied up in the operating cycle for 55 days on average, before it comes back in from customers — the shorter this number, the less working capital financing the firm needs.",
          },
        ],
      },
      {
        id: "financing-working-capital",
        title: "3. Factoring and Financing Working Capital",
        icon: "Handshake",
        blocks: [
          {
            kind: "paragraph",
            text: "Factoring is a financial arrangement where a firm sells its accounts receivable (customer invoices) to a third party (a \"factor\") at a discount, in exchange for immediate cash — improving cash flow and shifting the credit risk of collection to the factor.",
          },
          {
            kind: "paragraph",
            text: "Sources of financing working capital: trade credit from suppliers, short-term bank loans/cash credit, commercial paper (for large, creditworthy firms), and factoring (as above) — the choice depends on cost, availability, and the firm's credit rating.",
          },
        ],
      },
      {
        id: "case-studies",
        title: "4. Case Study",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Dell's negative cash conversion cycle",
            text: "Dell's historic build-to-order model achieved a NEGATIVE cash conversion cycle — it collected cash from customers before it even had to pay its own suppliers — an extreme, widely studied example of exceptional working capital management that effectively let Dell fund its growth using its suppliers' and customers' money rather than its own.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Net Working Capital", definition: "Current Assets minus Current Liabilities." },
      { term: "Cash Conversion Cycle", definition: "The time between paying for raw materials and receiving cash from customers." },
      { term: "Factoring", definition: "Selling accounts receivable to a third party at a discount for immediate cash." },
    ],
    examQuestions: [
      "Explain the concept and classification of working capital. (Medium)",
      "Explain the working capital operating cycle with a diagram. (Long)",
      "Calculate the cash conversion cycle from given data. (Numerical, Medium)",
      "Explain the principles of receivable management and credit policy. (Medium)",
      "Explain factoring as a source of financing working capital. (Short)",
    ],
  },
];
