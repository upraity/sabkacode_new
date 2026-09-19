import { UnitNote } from "@/types";

// Detailed, in-app notes for Managerial Economics (BMB102) — AKTU MBA Sem 1.
export const managerialEconomicsUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Basic Concepts and Principles",
    hours: 6,
    headings: [
      {
        id: "definition-scope",
        title: "1. Definition, Nature and Scope of Economics",
        icon: "BookOpen",
        blocks: [
          {
            kind: "paragraph",
            text: "Managerial Economics applies economic theory and quantitative methods to solve real business decision-making problems — it's the bridge between abstract economic theory and practical management decisions.",
          },
          {
            kind: "table",
            headers: ["Branch", "Focus", "Example Question"],
            rows: [
              ["Microeconomics", "Individual units — a firm, a household, a single market", "\"What price should our firm charge?\""],
              ["Macroeconomics", "The economy as a whole — national income, inflation, employment", "\"How will rising inflation affect overall consumer spending?\""],
            ],
          },
          {
            kind: "paragraph",
            text: "Managerial economics relies mainly on microeconomics for day-to-day decisions (pricing, output, costs) but uses macroeconomics to understand the broader business environment (interest rates, inflation, government policy) a firm operates in.",
          },
        ],
      },
      {
        id: "fundamental-principles",
        title: "2. Fundamental Principles of Managerial Economics",
        icon: "Compass",
        blocks: [
          {
            kind: "table",
            headers: ["Principle", "Meaning"],
            rows: [
              ["Incremental Principle", "A decision is worth making only if the incremental (additional) revenue from it exceeds the incremental cost."],
              ["Marginal Principle", "Optimal output/price is where marginal revenue equals marginal cost (MR = MC) — a special, narrower case of the incremental principle applied one unit at a time."],
              ["Opportunity Cost Principle", "The true cost of any choice is the value of the next-best alternative that had to be given up."],
              ["Discounting Principle", "A rupee received in the future is worth less than a rupee today, so future cash flows must be discounted to their present value before comparing decisions."],
              ["Concept of Time Perspective", "Short-run and long-run decisions must be weighed differently — a decision that looks bad short-term might be right long-term, and vice versa."],
              ["Equi-Marginal Principle", "A resource (e.g., an advertising budget) should be allocated across uses so that the marginal return from the last rupee spent is equal in every use — maximising total return."],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "A company deciding whether to accept a bulk order at a discounted price uses the incremental principle: if the incremental revenue from the order exceeds the incremental cost of producing it, the order is worth accepting — even if the discounted price is below the \"normal\" average cost.",
          },
        ],
      },
      {
        id: "utility-analysis",
        title: "3. Utility Analysis: Cardinal and Ordinal Utility",
        icon: "Scale",
        blocks: [
          {
            kind: "paragraph",
            text: "Utility is the satisfaction a consumer derives from consuming a good or service — the foundation of demand theory.",
          },
          {
            kind: "bullets",
            items: [
              "Cardinal utility approach: assumes utility can be measured in exact numbers (e.g., \"utils\") — associated with the Law of Diminishing Marginal Utility (each additional unit consumed gives less extra satisfaction than the one before).",
              "Ordinal utility approach: assumes utility can only be ranked/ordered (\"I prefer A to B\"), not measured in exact numbers — this is the modern approach, expressed through indifference curves.",
            ],
          },
        ],
      },
      {
        id: "case-studies",
        title: "4. Case Studies",
        icon: "FileText",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Airlines and the incremental principle",
            text: "Airlines often sell last-minute seats at steep discounts. This works because the incremental cost of carrying one more passenger on a flight that's already scheduled to fly is very low (just fuel weight, a meal) — so even a heavily discounted fare is still incrementally profitable, even though it's far below the \"average cost\" per seat.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Managerial Economics", definition: "The application of economic theory and quantitative methods to business decision-making." },
      { term: "Incremental Principle", definition: "A decision rule: proceed only if incremental revenue exceeds incremental cost." },
      { term: "Opportunity Cost", definition: "The value of the next-best alternative given up when making a choice." },
      { term: "Equi-Marginal Principle", definition: "Allocate a resource across uses so the marginal return is equal everywhere." },
    ],
    examQuestions: [
      "Define Managerial Economics. Discuss its nature and scope. (Medium)",
      "Differentiate between microeconomics and macroeconomics. (Short)",
      "Explain the incremental principle and the marginal principle with examples. (Long)",
      "Explain the opportunity cost principle and the discounting principle. (Medium)",
      "What is the equi-marginal principle? Explain with an example. (Medium)",
      "Differentiate between cardinal and ordinal utility analysis. (Short)",
    ],
  },
  {
    unitNumber: 2,
    title: "Demand and Supply Analysis",
    hours: 8,
    headings: [
      {
        id: "demand-theory",
        title: "1. Theory of Demand",
        icon: "TrendingDown",
        blocks: [
          {
            kind: "paragraph",
            text: "Demand is the quantity of a good a consumer is willing and able to buy at a given price, in a given time period.",
          },
          {
            kind: "bullets",
            items: [
              "Types of demand: Price demand, income demand, cross demand (for substitutes/complements), direct vs. derived demand, individual vs. market demand.",
              "Determinants of demand: price of the good, income, price of related goods, tastes/preferences, expectations, and the number of buyers.",
            ],
          },
          {
            kind: "paragraph",
            text: "The Law of Demand states that, other things being equal, quantity demanded falls as price rises, and rises as price falls — shown by a downward-sloping demand curve.",
          },
          { kind: "diagram", diagramId: "demand-supply-curve", caption: "Fig 2.1 — Demand and Supply curves with market equilibrium" },
          {
            kind: "bullets",
            items: [
              "Movement along the demand curve happens when the good's own price changes.",
              "Shift of the entire demand curve happens when any other determinant changes (e.g., a rise in income shifts the demand curve rightward for a normal good).",
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exceptions to the Law of Demand",
            text: "Giffen goods (very inferior goods where a price rise paradoxically increases demand, due to the strong income effect), Veblen goods (luxury/status goods where a higher price signals higher status and increases demand), and situations of speculation (buyers expecting prices to rise further) or urgent necessity (life-saving medicine) can all cause upward-sloping demand in the short run.",
          },
        ],
      },
      {
        id: "elasticity",
        title: "2. Elasticity of Demand",
        icon: "ArrowLeftRight",
        blocks: [
          {
            kind: "paragraph",
            text: "Elasticity of demand measures how responsive quantity demanded is to a change in one of its determinants.",
          },
          {
            kind: "table",
            headers: ["Type", "Measures Responsiveness of Demand to…", "Example"],
            rows: [
              ["Price Elasticity", "Change in the good's own price", "Demand for petrol falling only slightly even when price rises (inelastic)"],
              ["Income Elasticity", "Change in consumer income", "Demand for luxury cars rising sharply as income rises (highly elastic, > 1)"],
              ["Cross Elasticity", "Change in the price of a related good", "Demand for tea rising when coffee prices rise (positive, since they're substitutes)"],
              ["Advertising Elasticity", "Change in advertising expenditure", "Sales response to an increased ad budget"],
              ["Arc Elasticity", "Elasticity measured over a range/arc of the demand curve (not just at one point)", "Used when price change is large, not infinitesimal"],
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Why managers care",
            text: "Elasticity directly guides pricing decisions: a firm should generally raise prices on inelastic goods (revenue rises since quantity falls only a little) and consider price cuts or promotions on elastic goods (revenue can rise since quantity demanded rises a lot).",
          },
        ],
      },
      {
        id: "demand-forecasting",
        title: "3. Demand Forecasting",
        icon: "LineChart",
        blocks: [
          {
            kind: "paragraph",
            text: "Demand forecasting is predicting future demand for a product, essential for production planning, inventory management, and budgeting. Its significance lies in reducing uncertainty and helping allocate resources efficiently. Common methods include survey methods (consumer/expert opinion surveys) and statistical methods (trend analysis, regression — covered in Business Statistics).",
          },
        ],
      },
      {
        id: "supply-analysis",
        title: "4. Supply Analysis and Price Determination",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "paragraph",
            text: "The Law of Supply states that, other things being equal, quantity supplied rises as price rises — shown by an upward-sloping supply curve (see Fig 2.1 above). Supply elasticity measures how responsive quantity supplied is to a price change.",
          },
          {
            kind: "paragraph",
            text: "Market price is determined where the demand and supply curves intersect — the equilibrium price (Pe) and equilibrium quantity (Qe). If price is above equilibrium, supply exceeds demand (surplus), pushing price down; if below, demand exceeds supply (shortage), pushing price up.",
          },
        ],
      },
      {
        id: "case-studies",
        title: "5. Case Studies",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Onion price volatility in India",
            text: "Onion prices in India swing sharply because both demand and supply are highly inelastic in the short run (onions are a near-necessity, and supply can't be increased quickly mid-season) — even a small crop shortfall causes a large price spike, a classic real-world elasticity lesson.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Law of Demand", definition: "Quantity demanded falls as price rises, other things being equal." },
      { term: "Giffen Good", definition: "An exception to the law of demand where demand rises as price rises, due to a strong income effect." },
      { term: "Price Elasticity of Demand", definition: "The responsiveness of quantity demanded to a change in the good's own price." },
      { term: "Equilibrium Price", definition: "The price at which quantity demanded equals quantity supplied." },
    ],
    examQuestions: [
      "Explain the law of demand and its exceptions. (Long)",
      "Discuss the determinants of demand. (Medium)",
      "Explain the various types of elasticity of demand with examples. (Long)",
      "What is demand forecasting? Discuss its significance and methods. (Medium)",
      "Explain how equilibrium price is determined using demand and supply curves. (Long)",
      "Differentiate between movement along and shift of the demand curve. (Short)",
    ],
  },
  {
    unitNumber: 3,
    title: "Production and Cost Analysis",
    hours: 10,
    headings: [
      {
        id: "production-function",
        title: "1. Production Concepts and the Production Function",
        icon: "Factory",
        blocks: [
          {
            kind: "paragraph",
            text: "A production function expresses the technical/mathematical relationship between inputs (labour, capital, land) and the maximum output that can be produced from them, given the technology available: Q = f(L, K).",
          },
        ],
      },
      {
        id: "laws-of-production",
        title: "2. Laws of Production",
        icon: "TrendingDown",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Law of Diminishing Returns (short-run, one variable input): as more units of a variable input (e.g., labour) are added to a fixed input (e.g., land/machinery), the additional (marginal) output eventually starts to fall.",
              "Law of Returns to Scale (long-run, all inputs variable): describes how output changes when ALL inputs are increased proportionately — increasing returns to scale (output increases more than proportionately), constant returns to scale (output increases in the same proportion), or decreasing returns to scale (output increases less than proportionately).",
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "Adding more workers to a single small kitchen eventually causes them to get in each other's way — this is the Law of Diminishing Returns in action (fixed kitchen size, variable labour).",
          },
        ],
      },
      {
        id: "cost-analysis",
        title: "3. Cost Concepts and Cost-Output Relationship",
        icon: "IndianRupee",
        blocks: [
          {
            kind: "table",
            headers: ["Cost Concept", "Meaning"],
            rows: [
              ["Fixed Cost (FC)", "Does not change with output level in the short run (e.g., rent)"],
              ["Variable Cost (VC)", "Changes directly with output level (e.g., raw material)"],
              ["Total Cost (TC)", "TC = FC + VC"],
              ["Average Cost (AC)", "AC = TC ÷ Quantity"],
              ["Marginal Cost (MC)", "The additional cost of producing one more unit of output"],
            ],
          },
          { kind: "diagram", diagramId: "cost-curves", caption: "Fig 3.1 — Short-run U-shaped cost curves (MC, AC, AVC)" },
          {
            kind: "paragraph",
            text: "In the short run, AC, AVC, and MC are typically U-shaped — falling initially due to efficiencies, then rising due to diminishing returns. In the long run, the relationship between cost and output-run cost curves reflects returns to scale instead.",
          },
          {
            kind: "paragraph",
            text: "Revenue estimation: Average Revenue (AR) = Total Revenue ÷ Quantity (equals price under perfect competition); Marginal Revenue (MR) = the additional revenue from selling one more unit.",
          },
        ],
      },
      {
        id: "case-studies",
        title: "4. Case Studies",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Economies of scale at Amazon",
            text: "Amazon's massive warehouse and logistics investments show increasing returns to scale — as Amazon has scaled up its operations, its average cost per delivered package has fallen substantially, letting it profitably offer very low prices and fast delivery.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Law of Diminishing Returns", definition: "As more of a variable input is added to a fixed input, marginal output eventually falls." },
      { term: "Returns to Scale", definition: "How output responds when all inputs are increased proportionately, in the long run." },
      { term: "Marginal Cost", definition: "The additional cost of producing one more unit of output." },
    ],
    examQuestions: [
      "Explain the production function and the law of diminishing returns. (Long)",
      "Differentiate between the law of diminishing returns and the law of returns to scale. (Medium)",
      "Explain the different types of costs with examples. (Medium)",
      "Explain the short-run cost-output relationship with a diagram. (Long)",
      "Explain average revenue and marginal revenue with an example. (Short)",
    ],
  },
  {
    unitNumber: 4,
    title: "Market Structures",
    hours: 10,
    headings: [
      {
        id: "market-structures-overview",
        title: "1. Perfect and Imperfect Market Structures",
        icon: "Store",
        blocks: [
          {
            kind: "paragraph",
            text: "A market structure describes the competitive environment in which firms operate, mainly defined by the number of sellers, product differentiation, and entry barriers.",
          },
          {
            kind: "table",
            headers: ["Market Structure", "No. of Sellers", "Product", "Entry Barriers", "Example"],
            rows: [
              ["Perfect Competition", "Very many", "Homogeneous (identical)", "None", "Agricultural commodity markets"],
              ["Monopoly", "One", "Unique, no close substitute", "Very high", "Indian Railways (in rail transport)"],
              ["Monopolistic Competition", "Many", "Differentiated", "Low", "Restaurants, salons, retail shops"],
              ["Oligopoly", "Few (large)", "Homogeneous or differentiated", "High", "Telecom, automobiles, airlines"],
            ],
          },
        ],
      },
      {
        id: "perfect-competition",
        title: "2. Perfect Competition",
        icon: "Equal",
        blocks: [
          {
            kind: "paragraph",
            text: "Features: very many small buyers/sellers, homogeneous product, free entry and exit, perfect information, and firms are \"price takers\" (they accept the market price, they cannot influence it). Price is determined purely by overall market demand and supply; an individual firm's demand curve is a horizontal (perfectly elastic) line at the market price.",
          },
        ],
      },
      {
        id: "monopoly",
        title: "3. Monopoly",
        icon: "Crown",
        blocks: [
          {
            kind: "paragraph",
            text: "Features: a single seller, no close substitutes, significant barriers to entry (legal, technological, or resource-based), and the firm is a \"price maker\" that can influence price by controlling output.",
          },
          {
            kind: "paragraph",
            text: "Price discrimination is a monopoly pricing strategy: charging different prices to different customer groups for the same product, based on their willingness to pay (e.g., movie ticket discounts for students, or airline fares that vary by booking time).",
          },
        ],
      },
      {
        id: "monopolistic-competition",
        title: "4. Monopolistic Competition",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "Features: many sellers, product differentiation (branding, quality, features let each firm have some pricing power despite competition), relatively free entry/exit. Pricing reflects the firm's product differentiation strategy — a strongly differentiated/branded product can command a price premium over close substitutes.",
          },
        ],
      },
      {
        id: "oligopoly",
        title: "5. Oligopoly",
        icon: "Users",
        blocks: [
          {
            kind: "paragraph",
            text: "Features: a few large firms dominate the market, high entry barriers, and — most distinctively — firms are mutually interdependent (each firm's decisions directly affect, and are affected by, rivals' decisions).",
          },
          {
            kind: "bullets",
            items: [
              "Kinked demand curve: a theory explaining price rigidity in oligopoly — if a firm raises price, rivals won't follow (so it loses many customers), but if it cuts price, rivals will match the cut (so it gains few customers) — creating a \"kink\" that discourages firms from changing price at all.",
              "Cartels: formal or informal agreements among oligopoly firms to fix prices or output and reduce competition (e.g., OPEC in the global oil market).",
              "Price leadership: one dominant firm sets the price, and smaller firms in the industry follow it, without a formal agreement.",
            ],
          },
        ],
      },
      {
        id: "case-studies",
        title: "6. Case Studies",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Indian telecom oligopoly",
            text: "The Indian telecom sector (Jio, Airtel, Vi) is a textbook oligopoly — a few large players, high entry barriers (spectrum costs, infrastructure), and highly interdependent pricing, where a tariff change by one player is almost always quickly matched by the others.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Price Taker", definition: "A firm (as in perfect competition) that must accept the market price rather than set it." },
      { term: "Price Discrimination", definition: "Charging different prices to different customer groups for the same product." },
      { term: "Kinked Demand Curve", definition: "A theory explaining price rigidity in oligopoly due to asymmetric rival reactions to price changes." },
      { term: "Cartel", definition: "An agreement among firms in an oligopoly to fix prices or output." },
    ],
    examQuestions: [
      "Compare the features of perfect competition, monopoly, monopolistic competition, and oligopoly. (Long)",
      "Explain price determination under perfect competition. (Medium)",
      "Explain price discrimination under monopoly with examples. (Medium)",
      "Discuss the features and pricing behaviour under monopolistic competition. (Medium)",
      "Explain the kinked demand curve model of oligopoly. (Long)",
      "What are cartels and price leadership? Explain with examples. (Medium)",
    ],
  },
  {
    unitNumber: 5,
    title: "National Income",
    hours: 6,
    headings: [
      {
        id: "national-income-concepts",
        title: "1. Concepts and Measurement of National Income",
        icon: "Landmark",
        blocks: [
          {
            kind: "table",
            headers: ["Concept", "Meaning"],
            rows: [
              ["GDP (Gross Domestic Product)", "Total value of all final goods and services produced within a country's borders in a year"],
              ["GNP (Gross National Product)", "GDP plus net income earned by residents from abroad"],
              ["NNP (Net National Product)", "GNP minus depreciation (wear and tear of capital)"],
              ["NI (National Income)", "NNP at factor cost — total income earned by a country's factors of production"],
              ["Per Capita Income", "National Income divided by total population"],
            ],
          },
          {
            kind: "paragraph",
            text: "National income can be measured using three methods, which should theoretically arrive at the same figure:",
          },
          {
            kind: "bullets",
            items: [
              "Product (Output) Method: sums the value of all final goods and services produced.",
              "Income Method: sums all incomes earned by factors of production (wages, rent, interest, profit).",
              "Expenditure Method: sums all spending on final goods and services (consumption + investment + government spending + net exports).",
            ],
          },
        ],
      },
      {
        id: "circular-flow",
        title: "2. Circular Flow of Income",
        icon: "RefreshCw",
        blocks: [
          {
            kind: "paragraph",
            text: "The circular flow model shows how money, goods, and services move between sectors of the economy.",
          },
          { kind: "diagram", diagramId: "circular-flow", caption: "Fig 5.1 — Circular flow of income (2-sector economy)" },
          {
            kind: "bullets",
            items: [
              "2-sector economy: only Households and Firms — households supply factors of production and receive income; firms supply goods/services and receive spending.",
              "3-sector economy: adds the Government sector (taxes flow out, government spending flows in).",
              "4-sector economy: adds the Foreign/External sector (imports flow out, exports flow in).",
            ],
          },
        ],
      },
      {
        id: "inflation",
        title: "3. Inflation: Types and Causes",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "paragraph",
            text: "Inflation is a sustained rise in the general price level of an economy over time, reducing the purchasing power of money.",
          },
          {
            kind: "table",
            headers: ["Type", "Cause"],
            rows: [
              ["Demand-Pull Inflation", "Aggregate demand exceeds aggregate supply — \"too much money chasing too few goods\""],
              ["Cost-Push Inflation", "Rising production costs (wages, raw materials, fuel) push up prices"],
              ["Built-in (Wage-Price) Inflation", "Workers demand higher wages to keep up with past inflation, which pushes prices up further, causing a self-reinforcing spiral"],
            ],
          },
        ],
      },
      {
        id: "business-cycle",
        title: "4. Business Cycle and Its Phases",
        icon: "Waves",
        blocks: [
          {
            kind: "paragraph",
            text: "The business cycle refers to the recurring, wave-like fluctuations in overall economic activity (GDP, employment, output) over time.",
          },
          { kind: "diagram", diagramId: "business-cycle", caption: "Fig 5.2 — Phases of the Business Cycle" },
          {
            kind: "bullets",
            items: [
              "Expansion (Boom): rising output, employment, and demand.",
              "Peak: the highest point of economic activity, just before a downturn begins.",
              "Recession (Contraction): output and employment start falling.",
              "Trough (Depression): the lowest point of economic activity.",
              "Recovery: the economy starts growing again, moving back toward expansion.",
            ],
          },
        ],
      },
      {
        id: "case-studies",
        title: "5. Case Studies",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Post-COVID inflation in India",
            text: "India's 2021-2022 inflation spike combined both cost-push factors (rising global crude oil and input prices) and demand-pull factors (pent-up consumer demand after lockdowns eased) — a real-world example of the two inflation types occurring together.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "GDP", definition: "Gross Domestic Product — total value of final goods and services produced within a country in a year." },
      { term: "Circular Flow of Income", definition: "The model showing money, goods, and services moving between sectors of an economy." },
      { term: "Demand-Pull Inflation", definition: "Inflation caused by aggregate demand exceeding aggregate supply." },
      { term: "Business Cycle", definition: "Recurring wave-like fluctuations in overall economic activity." },
    ],
    examQuestions: [
      "Explain the concepts of GDP, GNP, NNP, and National Income. (Medium)",
      "Explain the three methods of measuring national income. (Long)",
      "Explain the circular flow of income in a 2-sector, 3-sector, and 4-sector economy. (Long)",
      "Differentiate between demand-pull and cost-push inflation. (Medium)",
      "Explain the phases of the business cycle with a diagram. (Long)",
    ],
  },
];
