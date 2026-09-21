import { UnitNote } from "@/types";

// Detailed, in-app notes for Cost and Management Accounting (BMB207) —
// AKTU MBA Sem 2. Heavily numerical — every major technique includes a
// worked example with actual figures, as this is a calculation-driven
// subject.
export const costManagementAccountingUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Introduction to Management Accounting and Cost Concepts",
    hours: 10,
    headings: [
      {
        id: "meaning-scope",
        title: "1. Meaning, Nature and Scope of Management Accounting",
        icon: "BookOpen",
        blocks: [
          {
            kind: "paragraph",
            text: "Management Accounting is the branch of accounting concerned with providing information to internal management for planning, decision-making, and control — unlike financial accounting, which reports to external users.",
          },
          {
            kind: "table",
            headers: ["Basis", "Financial Accounting", "Management Accounting"],
            rows: [
              ["Users", "External (investors, banks, government)", "Internal (management only)"],
              ["Legal requirement", "Mandatory (Companies Act, tax laws)", "Voluntary — no legal requirement"],
              ["Time orientation", "Historical — records what already happened", "Both historical and future-oriented (budgets, forecasts)"],
              ["Format", "Must follow prescribed formats (Schedule III)", "No fixed format — designed for management's specific needs"],
              ["Precision", "Highly precise, audited", "Approximations acceptable if timely and useful"],
            ],
          },
          {
            kind: "paragraph",
            text: "Cost Reduction is a permanent, genuine reduction in the unit cost of a product/service without impairing its suitability for use (e.g., through process improvement) — distinct from Cost Control, which is about keeping actual costs within a set budget/standard.",
          },
        ],
      },
      {
        id: "cost-concepts-sheet",
        title: "2. Cost Concepts and the Cost Sheet",
        icon: "Receipt",
        blocks: [
          {
            kind: "table",
            headers: ["Cost Classification", "Categories"],
            rows: [
              ["By Nature", "Material, Labour, Expenses"],
              ["By Function", "Production, Administration, Selling & Distribution"],
              ["By Behaviour", "Fixed, Variable, Semi-Variable"],
              ["By Traceability", "Direct (traceable to a specific product/job) vs. Indirect (Overheads — shared across products)"],
            ],
          },
          {
            kind: "paragraph",
            text: "A Cost Sheet is a statement that presents the total cost of a product, broken down step by step:",
          },
          {
            kind: "table",
            headers: ["Cost Sheet Component", "Formula / Includes"],
            rows: [
              ["Prime Cost", "Direct Material + Direct Labour + Direct Expenses"],
              ["Works/Factory Cost", "Prime Cost + Factory Overheads"],
              ["Cost of Production", "Works Cost + Office & Administration Overheads"],
              ["Total Cost / Cost of Sales", "Cost of Production + Selling & Distribution Overheads"],
              ["Sales", "Total Cost + Profit"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Cost Sheet",
            text: "Direct Material ₹50,000; Direct Labour ₹30,000; Direct Expenses ₹5,000; Factory Overheads ₹15,000; Office Overheads ₹10,000; Selling Overheads ₹8,000. Prime Cost = 50,000 + 30,000 + 5,000 = ₹85,000. Works Cost = 85,000 + 15,000 = ₹1,00,000. Cost of Production = 1,00,000 + 10,000 = ₹1,10,000. Total Cost = 1,10,000 + 8,000 = ₹1,18,000. If the firm wants a 20% profit on cost, Sales = 1,18,000 × 1.20 = ₹1,41,600.",
          },
        ],
      },
      {
        id: "methods-costing",
        title: "3. Types and Methods of Costing",
        icon: "Layers",
        blocks: [
          {
            kind: "table",
            headers: ["Method", "Used for"],
            rows: [
              ["Job Costing", "Cost is computed for each distinct job/order separately (e.g., a custom furniture order)"],
              ["Batch Costing", "Cost is computed for a batch of identical units produced together (e.g., a batch of medicines)"],
              ["Process Costing", "Cost is computed per process/stage in continuous, mass production (e.g., sugar, chemicals) — covered in depth in Unit 5"],
              ["Contract Costing", "Cost is computed for large, long-duration projects (e.g., construction contracts)"],
              ["Operating Costing", "Cost is computed for services rather than physical products (e.g., transport, hospitals)"],
            ],
          },
        ],
      },
      {
        id: "inventory-labour-overheads",
        title: "4. Inventory Control, Labour Cost and Overheads",
        icon: "Boxes",
        blocks: [
          {
            kind: "paragraph",
            text: "Inventory control techniques (EOQ, ABC analysis, etc.) are covered in full detail in Operations Management, Unit 3 — from a cost accounting perspective, the goal is to minimise the combined cost of ordering and carrying inventory (recall the EOQ curve).",
          },
          {
            kind: "paragraph",
            text: "Labour Cost includes direct labour (wages of workers directly engaged in production) and indirect labour (supervisors, maintenance staff) — controlling labour cost involves time-and-motion study, proper wage incentive schemes, and minimising idle time.",
          },
          {
            kind: "paragraph",
            text: "Overheads are indirect costs that cannot be traced to a specific product — they must be apportioned (divided among departments on a fair basis, like floor area or machine hours) and then absorbed into product cost (using an overhead absorption rate, e.g., overhead per machine hour).",
          },
          {
            kind: "paragraph",
            text: "Activity-Based Costing (ABC) — introduced already in Strategic Management, Unit 5 — assigns overheads based on the actual cost-driving activities (like number of machine setups) rather than a single blanket rate, giving more accurate product costs, especially where products consume overhead resources very differently.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Prime Cost", definition: "Direct Material + Direct Labour + Direct Expenses." },
      { term: "Cost Reduction", definition: "A permanent, genuine reduction in unit cost without impairing product suitability." },
      { term: "Overhead Absorption Rate", definition: "The rate used to charge overheads to products, e.g., overhead per machine hour." },
    ],
    examQuestions: [
      "Differentiate between financial accounting and management accounting. (Medium)",
      "Differentiate between cost reduction and cost control. (Short)",
      "Prepare a cost sheet from given data and calculate the sales price for a target profit. (Numerical, Long)",
      "Explain the different methods of costing with examples. (Long)",
      "Explain the concept of overhead apportionment and absorption. (Medium)",
      "Explain Activity-Based Costing and how it differs from traditional costing. (Medium)",
    ],
  },
  {
    unitNumber: 2,
    title: "Cost-Volume-Profit Analysis",
    hours: 8,
    headings: [
      {
        id: "cvp-basics",
        title: "1. Marginal Cost, Contribution and P/V Ratio",
        icon: "Percent",
        blocks: [
          {
            kind: "paragraph",
            text: "Marginal Costing separates costs into fixed and variable components, and focuses on Contribution — the amount left over from sales after covering variable costs, which then goes toward covering fixed costs and generating profit.",
          },
          {
            kind: "table",
            headers: ["Term", "Formula"],
            rows: [
              ["Contribution per unit", "Selling Price per unit − Variable Cost per unit"],
              ["Total Contribution", "Contribution per unit × Number of units sold, OR Sales − Total Variable Cost"],
              ["Profit-Volume (P/V) Ratio", "(Contribution ÷ Sales) × 100"],
              ["Profit", "Total Contribution − Fixed Cost"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example",
            text: "Selling price = ₹100/unit, Variable cost = ₹60/unit, Fixed cost = ₹2,00,000, Units sold = 8,000. Contribution per unit = 100 − 60 = ₹40. Total Contribution = 40 × 8,000 = ₹3,20,000. P/V Ratio = (40 ÷ 100) × 100 = 40%. Profit = 3,20,000 − 2,00,000 = ₹1,20,000.",
          },
        ],
      },
      {
        id: "bep-mos",
        title: "2. Break-Even Point and Margin of Safety",
        icon: "TrendingUp",
        blocks: [
          { kind: "diagram", diagramId: "break-even-chart", caption: "Fig 2.1 — The Break-Even Chart" },
          {
            kind: "table",
            headers: ["Term", "Formula"],
            rows: [
              ["Break-Even Point (in units)", "Fixed Cost ÷ Contribution per unit"],
              ["Break-Even Point (in ₹ sales value)", "Fixed Cost ÷ P/V Ratio"],
              ["Margin of Safety (MOS)", "Actual Sales − Break-Even Sales"],
              ["MOS Ratio", "(Margin of Safety ÷ Actual Sales) × 100"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example (continuing from above)",
            text: "Using Fixed Cost = ₹2,00,000, Contribution/unit = ₹40, P/V Ratio = 40%: BEP (units) = 2,00,000 ÷ 40 = 5,000 units. BEP (sales value) = 2,00,000 ÷ 0.40 = ₹5,00,000. Actual Sales = 8,000 units × ₹100 = ₹8,00,000. Margin of Safety = 8,00,000 − 5,00,000 = ₹3,00,000, i.e. an MOS Ratio of (3,00,000 ÷ 8,00,000) × 100 = 37.5% — meaning sales can fall by 37.5% before the company starts making a loss.",
          },
        ],
      },
      {
        id: "cvp-decisions",
        title: "3. Decision-Making Using Marginal Costing",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "Marginal costing and contribution analysis support several classic short-term management decisions:",
          },
          {
            kind: "bullets",
            items: [
              "Key Factor (Limiting Factor) Analysis: when a scarce resource (machine hours, raw material, labour) limits production, the firm should prioritise the product with the highest contribution per unit of the scarce resource, not the highest contribution per unit of product.",
              "Pricing decisions: in the short run, any price above variable cost per unit makes a positive contribution and may be worth accepting (e.g., for a special one-off bulk order) even if it's below full cost.",
              "Product profitability and dropping a product line: a product line should generally only be dropped if it has a negative contribution (not merely lower profit than others), since fixed costs often continue regardless.",
              "Make or Buy decision: compare the marginal cost of making the item in-house against the price of buying it externally; buy only if the external price is lower than the relevant marginal cost of making it.",
              "Export order / Sell or Process Further: accept an export order at a lower price if it still covers variable cost and utilises otherwise-idle capacity; process a product further only if the additional revenue from processing exceeds the additional (marginal) cost of that further processing.",
              "Shut Down vs. Continue Operations: continue operating in the short run as long as the business is covering its variable costs and making SOME contribution toward fixed costs — shutting down avoids the loss but still leaves the full fixed cost as a shutdown cost.",
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Key Factor analysis",
            text: "Product A: Contribution/unit = ₹40, requires 2 machine hours/unit → Contribution/machine hour = ₹20. Product B: Contribution/unit = ₹50, requires 4 machine hours/unit → Contribution/machine hour = ₹12.50. If machine hours are the limiting factor, Product A should be prioritised (₹20/hour beats ₹12.50/hour) even though Product B has a higher contribution per unit.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Contribution", definition: "Selling Price minus Variable Cost per unit — what's left to cover fixed costs and profit." },
      { term: "P/V Ratio", definition: "Profit-Volume Ratio — Contribution divided by Sales, expressed as a percentage." },
      { term: "Margin of Safety", definition: "The excess of actual sales over break-even sales." },
      { term: "Key Factor", definition: "A scarce resource that limits production, guiding which product to prioritise." },
    ],
    examQuestions: [
      "Calculate contribution, P/V ratio, and profit from given sales and cost data. (Numerical, Long)",
      "Calculate the break-even point and margin of safety from given data. (Numerical, Long)",
      "Explain key factor analysis with a numerical example. (Numerical, Medium)",
      "Explain the make-or-buy decision using marginal costing. (Medium)",
      "When should a firm continue operating despite a loss, versus shut down? Explain using marginal costing logic. (Long)",
      "Explain the 'sell or process further' decision with an example. (Medium)",
    ],
  },
  {
    unitNumber: 3,
    title: "Budgets and Budgetary Control",
    hours: 4,
    headings: [
      {
        id: "budget-meaning",
        title: "1. Meaning, Types of Budgets and Budgetary Control",
        icon: "Wallet",
        blocks: [
          {
            kind: "paragraph",
            text: "A Budget is a quantitative, financial plan for a future period. Budgetary Control is the ongoing process of comparing actual results against the budget, analysing variances, and taking corrective action.",
          },
          {
            kind: "bullets",
            items: [
              "Steps in budgetary control: setting objectives, preparing individual budgets, coordinating into a master budget, comparing actuals to budget, and taking corrective action on variances.",
              "Fixed Budget: prepared for a single, specific level of activity — doesn't automatically adjust if actual activity differs.",
              "Flexible Budget: prepared for multiple levels of activity, so it can be adjusted to the actual output achieved — a much fairer basis for comparing actual performance.",
            ],
          },
        ],
      },
      {
        id: "functional-budgets",
        title: "2. Functional Budgets and the Master Budget",
        icon: "FileSpreadsheet",
        blocks: [
          {
            kind: "table",
            headers: ["Budget", "Purpose"],
            rows: [
              ["Sales Budget", "Forecast of expected sales revenue/units — usually the starting point for all other budgets"],
              ["Production Budget", "Planned production units = Budgeted Sales + Desired Closing Stock − Opening Stock"],
              ["Raw Material Consumption Budget", "Material needed for the planned production"],
              ["Raw Material Purchase Budget", "Material to be purchased = Consumption + Desired Closing Stock of material − Opening Stock of material"],
              ["Overhead Budgets", "Planned factory, administration, and selling overhead costs"],
              ["Cash Budget", "Forecast of cash inflows and outflows, to identify future cash surpluses or shortages"],
              ["Master Budget", "The summary budget combining all functional budgets into one overall Budgeted Profit & Loss Account and Balance Sheet"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Production Budget",
            text: "Budgeted sales = 10,000 units. Desired closing stock = 2,000 units. Opening stock = 1,500 units. Production Budget = 10,000 + 2,000 − 1,500 = 10,500 units to be produced.",
          },
        ],
      },
      {
        id: "zero-based-budgeting",
        title: "3. Zero-Based Budgeting (ZBB)",
        icon: "RotateCcw",
        blocks: [
          {
            kind: "paragraph",
            text: "Zero-Based Budgeting requires every expense to be justified from a \"zero base\" each new budget period, rather than simply adjusting the previous year's budget incrementally — forcing managers to actively justify why each cost should exist at all, which can uncover unnecessary or outdated spending that traditional budgeting tends to just carry forward year after year.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Flexible Budget", definition: "A budget prepared for multiple activity levels, adjustable to actual output achieved." },
      { term: "Master Budget", definition: "The summary budget combining all functional budgets into an overall financial plan." },
      { term: "Zero-Based Budgeting", definition: "A budgeting approach requiring every expense to be justified from zero each period." },
    ],
    examQuestions: [
      "Explain the steps in budgetary control. (Medium)",
      "Differentiate between a fixed budget and a flexible budget. (Short)",
      "Prepare a production budget and raw material purchase budget from given data. (Numerical, Long)",
      "Explain the cash budget and its importance. (Medium)",
      "Explain zero-based budgeting and how it differs from traditional budgeting. (Medium)",
    ],
  },
  {
    unitNumber: 4,
    title: "Standard Costing and Variance Analysis",
    hours: 8,
    headings: [
      {
        id: "standard-costing-meaning",
        title: "1. Meaning, Advantages and Limitations of Standard Costing",
        icon: "Target",
        blocks: [
          {
            kind: "paragraph",
            text: "A Standard Cost is a pre-determined, carefully estimated cost for a unit of product, under specified working conditions. Standard Costing is the technique of setting these standards and then comparing actual costs against them to compute Variances.",
          },
          {
            kind: "bullets",
            items: [
              "Advantages: helps in cost control, simplifies inventory valuation, aids in setting realistic budgets, and highlights inefficiencies quickly (Management by Exception — recall MCOB, Unit 2).",
              "Limitations: setting accurate standards is difficult and time-consuming, standards can become outdated quickly in a fast-changing environment, and may create pressure/resentment if used punitively rather than constructively.",
            ],
          },
        ],
      },
      {
        id: "material-variance",
        title: "2. Material Cost Variance",
        icon: "Package",
        blocks: [
          { kind: "diagram", diagramId: "variance-analysis", caption: "Fig 4.1 — Categories of standard cost variance" },
          {
            kind: "table",
            headers: ["Variance", "Formula"],
            rows: [
              ["Material Cost Variance (MCV)", "(Standard Cost of Actual Output) − (Actual Cost)"],
              ["Material Price Variance (MPV)", "(Standard Price − Actual Price) × Actual Quantity"],
              ["Material Usage Variance (MUV)", "(Standard Quantity for Actual Output − Actual Quantity) × Standard Price"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Material Variance",
            text: "Standard: 10 kg of material per unit at ₹5/kg. Actual production: 100 units, using 1,050 kg of material at an actual cost of ₹5.20/kg. Standard Quantity for actual output = 10 × 100 = 1,000 kg. Standard Cost = 1,000 × ₹5 = ₹5,000. Actual Cost = 1,050 × ₹5.20 = ₹5,460. Material Cost Variance = 5,000 − 5,460 = ₹460 (Adverse). Material Price Variance = (5 − 5.20) × 1,050 = ₹−210, i.e. ₹210 (Adverse) — material cost more per kg than planned. Material Usage Variance = (1,000 − 1,050) × 5 = ₹−250, i.e. ₹250 (Adverse) — more material was used than the standard allowed. Check: MPV + MUV = −210 + (−250) = −460, which matches the total MCV of ₹460 (Adverse).",
          },
        ],
      },
      {
        id: "other-variances",
        title: "3. Overhead, Sales and Sales Margin Variances",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "paragraph",
            text: "Overhead Variance measures the difference between standard overhead absorbed and actual overhead incurred, further split into expenditure and volume/efficiency components (similar logic to the price/usage split seen above for material).",
          },
          {
            kind: "paragraph",
            text: "Sales Variance measures the difference between budgeted and actual sales value, split into Sales Price Variance (effect of selling at a different price than planned) and Sales Volume Variance (effect of selling a different quantity than planned).",
          },
          {
            kind: "paragraph",
            text: "Sales Margin Variance takes this further by looking at the effect on profit margin specifically, rather than just revenue — split similarly into a margin price variance and a margin volume variance.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Standard Cost", definition: "A pre-determined, carefully estimated cost for a unit of product under specified conditions." },
      { term: "Material Price Variance", definition: "The portion of material cost variance caused by paying a different price than standard." },
      { term: "Material Usage Variance", definition: "The portion of material cost variance caused by using a different quantity than standard." },
    ],
    examQuestions: [
      "Explain standard costing and its advantages and limitations. (Medium)",
      "Calculate material cost, price, and usage variance from given data. (Numerical, Long)",
      "Explain overhead variance and its components. (Medium)",
      "Differentiate between sales price variance and sales volume variance. (Medium)",
      "Explain sales margin variance. (Short)",
    ],
  },
  {
    unitNumber: 5,
    title: "Process Costing, Joint Products and Modern Costing Concepts",
    hours: 10,
    headings: [
      {
        id: "process-costing-basics",
        title: "1. Process Costing: Normal and Abnormal Loss",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "Process Costing applies when a product passes through several continuous processes (e.g., sugar manufacturing: crushing → boiling → crystallising → packing), and cost is accumulated separately for each process, then transferred to the next.",
          },
          {
            kind: "bullets",
            items: [
              "Normal Loss: an unavoidable loss expected under normal operating conditions (e.g., evaporation, unavoidable spillage) — its cost is absorbed by the good units produced (it increases the cost per unit of good output).",
              "Abnormal Loss: a loss beyond what's normally expected, due to inefficiency (e.g., a machine breakdown) — this loss is valued separately and charged to the Costing Profit & Loss Account, NOT absorbed into good units' cost.",
              "Abnormal Effectiveness (Abnormal Gain): the opposite situation — actual loss is LESS than the normal (expected) loss; this gain is also valued separately and credited to the Costing Profit & Loss Account.",
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Normal and Abnormal Loss",
            text: "Input = 1,000 units, cost = ₹50,000. Normal loss = 5% of input = 50 units (assume scrap value = ₹0 for simplicity). Expected good output = 1,000 − 50 = 950 units. Cost per unit of good output = ₹50,000 ÷ 950 = ₹52.63. If actual output was only 930 units, Abnormal Loss = 950 − 930 = 20 units, valued at 20 × ₹52.63 = ₹1,052.60, and charged to the Abnormal Loss Account (removed from the process account, not spread over the remaining good units).",
          },
        ],
      },
      {
        id: "equivalent-units",
        title: "2. Process Costing with WIP: Equivalent Units (FIFO)",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "When a process has Opening and Closing Work-in-Progress (WIP), we can't just divide total cost by total physical units, since partly-completed units haven't absorbed a full unit's worth of cost. Equivalent Units convert partly-finished units into the equivalent number of fully-finished units, for costing purposes.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Equivalent Units (FIFO method)",
            text: "Opening WIP = 200 units (60% complete). Units introduced = 1,000. Units completed and transferred = 1,000. Closing WIP = 200 units (40% complete). Under FIFO, equivalent units = [Opening WIP × (100% − 60%) to finish it] + [Units started and fully completed this period] + [Closing WIP × 40% complete]. = (200 × 40%) + (1,000 − 200) + (200 × 40%) = 80 + 800 + 80 = 960 equivalent units. Cost per equivalent unit = Cost incurred THIS period only (FIFO ignores opening WIP's brought-forward cost when computing this period's rate) ÷ 960 equivalent units.",
          },
        ],
      },
      {
        id: "joint-by-products",
        title: "3. Joint Products and By-Products: Cost Allocation",
        icon: "SplitSquareHorizontal",
        blocks: [
          {
            kind: "paragraph",
            text: "Joint Products are two or more products of significant value produced simultaneously from the same process and inputs, up to a \"split-off point\" (e.g., petrol and diesel from crude oil refining). A By-Product is a product of minor value produced incidentally alongside the main product.",
          },
          {
            kind: "table",
            headers: ["Method", "How joint cost is allocated"],
            rows: [
              ["Physical Units Method", "In proportion to the physical quantity (e.g., litres, kg) of each joint product produced"],
              ["Relative Market Value at Split-Off", "In proportion to each product's sales value at the point they separate (split off)"],
              ["Net Realizable Value (NRV) Method", "In proportion to each product's final sales value minus any further processing costs incurred after split-off"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Physical Units Method",
            text: "Joint cost up to split-off = ₹1,00,000, producing Product X (600 litres) and Product Y (400 litres). Using the Physical Units Method: Product X's share = (600 ÷ 1,000) × 1,00,000 = ₹60,000. Product Y's share = (400 ÷ 1,000) × 1,00,000 = ₹40,000.",
          },
        ],
      },
      {
        id: "modern-costing",
        title: "4. Target Costing, Life Cycle Costing and Quality Costing",
        icon: "Sparkles",
        blocks: [
          {
            kind: "table",
            headers: ["Concept", "Meaning"],
            rows: [
              ["Target Costing", "Starts from the market-determined selling price and desired profit margin, working backward to find the maximum allowable cost — the reverse of traditional cost-plus pricing (recall cost-based vs. value-based pricing, Marketing Management Unit 3)"],
              ["Life Cycle Costing", "Considers ALL costs of a product across its entire life — from design and development through production, use, and eventual disposal — not just the manufacturing cost"],
              ["Quality Costing", "Tracks the total cost of quality — prevention costs, appraisal costs, and the costs of internal/external failure (recall TQM, Operations Management Unit 5)"],
              ["Activity-Based Costing (ABC)", "Assigns overheads based on actual cost-driving activities rather than a single blanket rate (introduced in Unit 1 above and Strategic Management, Unit 5)"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Target Costing",
            text: "A company wants to launch a product at a market-acceptable price of ₹500, with a required profit margin of 20% of selling price. Target Profit = 500 × 20% = ₹100. Target Cost = Selling Price − Target Profit = 500 − 100 = ₹400. If current estimated cost to produce is ₹450, the company must find ways (design changes, supplier negotiation, process efficiency) to close the ₹50 \"cost gap\" before launch — this forward-looking cost-reduction pressure is the defining feature of target costing.",
          },
        ],
      },
      {
        id: "case-studies",
        title: "5. Case Study",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Target costing at Toyota",
            text: "Toyota is one of the most widely cited pioneers of target costing — determining a vehicle's target selling price from market research first, then working with suppliers and engineers to design the car to hit the resulting target cost, rather than designing the car first and pricing it based on whatever it happened to cost to build.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Normal Loss", definition: "An unavoidable process loss under normal conditions, absorbed into the cost of good output." },
      { term: "Abnormal Loss", definition: "A process loss beyond the normal expected level, charged separately to the Costing P&L Account." },
      { term: "Equivalent Units", definition: "Partly-finished units converted into the equivalent number of fully-finished units for costing." },
      { term: "Target Costing", definition: "Working backward from market price and desired margin to find the maximum allowable product cost." },
    ],
    examQuestions: [
      "Differentiate between normal loss and abnormal loss with a numerical example. (Numerical, Long)",
      "Explain the concept of equivalent units under the FIFO method with a numerical example. (Numerical, Long)",
      "Differentiate between joint products and by-products. (Short)",
      "Explain the methods of allocating joint costs with a numerical example. (Numerical, Long)",
      "Explain target costing with a numerical example. (Numerical, Medium)",
      "Discuss life cycle costing and quality costing. (Medium)",
    ],
  },
];
