import { UnitNote } from "@/types";

// Detailed, in-app notes for Strategic Management (BMB301) — AKTU MBA
// Semester 3, common subject. Add Unit 2-5 as separate objects in this
// same array as they're written; the UnitNotesSection component and the
// subject page need no changes to pick them up.
export const strategicManagementUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Introduction & Corporate Governance",
    hours: 5,
    headings: [
      {
        id: "meaning",
        title: "1. Meaning of Strategy",
        icon: "BookOpen",
        blocks: [
          {
            kind: "paragraph",
            text: 'The word "strategy" comes from the Greek word "strategos", meaning "the art of the general" — originally a military term for planning to win a war. In business, it means the same idea: planning to win in the market.',
          },
          {
            kind: "callout",
            tone: "info",
            title: "Simple definition",
            text: "Strategy is a company's game plan to achieve its long-term goals by deciding what to do, what not to do, and how to use its limited resources (money, people, time) better than competitors.",
          },
          {
            kind: "bullets",
            items: [
              "Alfred Chandler: \"Strategy is the determination of long-term goals of an enterprise, and the adoption of courses of action and allocation of resources necessary for achieving these goals.\"",
              "Michael Porter: Strategy is about being different — deliberately choosing a different set of activities to deliver a unique mix of value.",
              "Henry Mintzberg (5 P's of Strategy): Plan, Ploy, Pattern, Position, and Perspective.",
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "Think of two students preparing for the same MBA exam. Student A studies everything randomly. Student B looks at last 5 years' papers, identifies high-weightage topics, and studies only those deeply first. Student B has a strategy — a deliberate plan to win with limited time (a limited resource).",
          },
          {
            kind: "table",
            headers: ["P", "Meaning", "Example"],
            rows: [
              ["Plan", "A consciously intended course of action", "Amazon planning to enter grocery delivery"],
              ["Ploy", "A specific manoeuvre to outwit a competitor", "An airline announcing a fake fare hike to scare rivals"],
              ["Pattern", "Consistency in behaviour over time (realized strategy)", "Apple always launching premium-priced products"],
              ["Position", "Locating the organisation in the market environment", "Patanjali positioned as a \"Swadeshi / Ayurvedic\" brand"],
              ["Perspective", "The organisation's ingrained way of perceiving the world", "Google's culture of \"innovate and take risks\""],
            ],
          },
          {
            kind: "paragraph",
            text: "Strategy is also easy to confuse with related terms. Knowing the difference is a common exam question:",
          },
          {
            kind: "table",
            headers: ["Term", "Meaning", "Time Horizon"],
            rows: [
              ["Strategy", "The overall long-term game plan to reach a goal", "Long term (3-5+ years)"],
              ["Policy", "A general guideline that governs how decisions are made", "Medium to long term"],
              ["Tactics", "Short-term specific actions used to execute the strategy", "Short term (days-months)"],
              ["Strategic Intent", "The ambitious, almost obsessive long-term aspiration that drives a firm (e.g. Canon's early intent to \"beat Xerox\")", "Long term / aspirational"],
            ],
          },
        ],
      },
      {
        id: "nature-scope",
        title: "2. Nature and Scope of Strategy",
        icon: "Shapes",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Future oriented — deals with long-term direction, not daily operations.",
              "Action oriented — it's not just a document, it must be implemented.",
              "Top management responsibility — made by the board and senior leaders.",
              "Deals with uncertainty — decisions are taken without complete information about the future.",
              "Affects the whole organisation — unlike a tactical decision that affects one department.",
              "Difficult to reverse — strategic decisions usually involve heavy investment and are hard to undo quickly.",
              "Competitive in nature — always made keeping rivals in mind.",
            ],
          },
          {
            kind: "paragraph",
            text: "The scope of strategic management covers everything from analysing the environment to controlling results:",
          },
          {
            kind: "bullets",
            items: [
              "Environmental analysis (external and internal)",
              "Strategy formulation (corporate, business, functional level)",
              "Strategy implementation (structure, systems, culture)",
              "Strategic evaluation and control",
              "Corporate governance and stakeholder management",
            ],
          },
        ],
      },
      {
        id: "importance",
        title: "3. Importance of Strategic Management",
        icon: "Star",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Gives clear direction — everyone in the company knows the destination.",
              "Better resource allocation — money and people go to the highest-priority projects.",
              "Competitive advantage — helps a firm stand out and win over rivals.",
              "Prepares for change — helps a company anticipate and adapt to market/technology shifts.",
              "Improves financial performance — firms that plan strategically tend to outperform those that don't.",
              "Coordinates functions — aligns marketing, finance, HR, and operations toward one goal.",
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Real example",
            text: "Nokia had huge market share in mobile phones but failed to strategically respond to the smartphone/touchscreen shift led by Apple and Android. Poor strategic foresight — not poor manufacturing — caused its downfall. This shows why strategic management matters more than just \"doing operations well.\"",
          },
        ],
      },
      {
        id: "levels",
        title: "4. Levels of Strategy",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "Strategy is not made at just one level. Every organisation makes decisions at three levels:",
          },
          {
            kind: "diagram",
            diagramId: "levels-of-strategy",
            caption: "Fig 1.1 — Pyramid of the three levels of strategy",
          },
          {
            kind: "table",
            headers: ["Level", "Made by", "Focus", "Example"],
            rows: [
              [
                "Corporate Level",
                "Board of Directors, CEO",
                "\"Which businesses should we be in?\"",
                "Tata Group entering aviation (Air India) alongside steel and IT",
              ],
              [
                "Business Level",
                "SBU / Division Heads",
                "\"How do we compete in this specific industry?\"",
                "Tata Motors competing on cost leadership in small cars",
              ],
              [
                "Functional Level",
                "Department Managers",
                "\"How does each department support the business strategy?\"",
                "Marketing dept. deciding the ad campaign for a Tata Motors launch",
              ],
            ],
          },
        ],
      },
      {
        id: "model",
        title: "5. Model of Strategic Management",
        icon: "Workflow",
        blocks: [
          {
            kind: "paragraph",
            text: "Strategic management is not a one-time event — it's a continuous, cyclical process with four broad stages:",
          },
          {
            kind: "diagram",
            diagramId: "strategy-cycle",
            caption: "Fig 1.2 — The continuous cycle of strategic management",
          },
          {
            kind: "bullets",
            ordered: true,
            items: [
              "Environmental Scanning: studying the external environment (economy, competitors, technology) and internal environment (strengths, weaknesses, resources).",
              "Strategy Formulation: setting mission, vision, objectives, and choosing corporate/business/functional strategies (covered in Unit 3).",
              "Strategy Implementation: putting the strategy into action through structure, budgets, programs, and leadership (covered in Unit 4).",
              "Strategy Evaluation & Control: measuring performance against goals and taking corrective action (covered in Unit 5).",
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam tip",
            text: "This 4-stage model connects all 5 units of this subject. If you remember this diagram, you'll understand where every unit fits in the bigger picture.",
          },
        ],
      },
      {
        id: "decision-making",
        title: "6. Strategic Decision-Making Process",
        icon: "Route",
        blocks: [
          {
            kind: "paragraph",
            text: "Strategic decisions (like entering a new country, launching a new product line, or a merger) are high-stake and hard to reverse, so they follow a structured process:",
          },
          {
            kind: "bullets",
            ordered: true,
            items: [
              "Identify the problem/opportunity — e.g., \"Our sales are declining in Tier-2 cities.\"",
              "Gather and analyse information — market research, financial data, competitor analysis (SWOT, PESTEL).",
              "Generate alternative strategies — e.g., cut prices, launch a new budget product, exit the market.",
              "Evaluate alternatives — check feasibility, cost, risk, and fit with company resources.",
              "Select the best strategy — the board/top management makes the final choice.",
              "Implement the decision — allocate budget, assign teams, set timelines.",
              "Monitor and get feedback — track results and revise if needed.",
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "When Maruti Suzuki noticed rising demand for SUVs eating into its hatchback sales, it went through this process: identified the threat, studied SUV market data, considered options (ignore it, partner, or launch its own SUV), and finally decided to launch models like the Brezza and Grand Vitara — a classic strategic decision.",
          },
        ],
      },
      {
        id: "governance-meaning",
        title: "7. Corporate Governance — Meaning",
        icon: "Landmark",
        blocks: [
          {
            kind: "paragraph",
            text: "Corporate Governance is the system of rules, practices, and processes by which a company is directed and controlled. It defines the relationship between the board of directors, management, shareholders, and other stakeholders (employees, customers, government, society).",
          },
          {
            kind: "callout",
            tone: "info",
            title: "In simple words",
            text: "Corporate governance answers the question — \"Who is watching the people running the company, to make sure they don't misuse power or cheat the shareholders?\"",
          },
          {
            kind: "paragraph",
            text: "Key principles of good corporate governance:",
          },
          {
            kind: "bullets",
            items: [
              "Transparency — clear and honest financial disclosure",
              "Accountability — management answerable to the board, board answerable to shareholders",
              "Fairness — equal treatment of all shareholders, including minority shareholders",
              "Responsibility — towards all stakeholders, not just shareholders",
              "Independence — decisions free from undue influence of promoters/management",
            ],
          },
          {
            kind: "paragraph",
            text: "Corporate governance in India is not just a good practice — it is backed by law and regulation. The key sources are:",
          },
          {
            kind: "bullets",
            items: [
              "Companies Act, 2013 — lays down rules for board composition, independent directors, audit committees, and CSR (Section 135).",
              "SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 (SEBI LODR) — governance rules specifically for listed companies, replacing the older \"Clause 49\" of the listing agreement.",
              "Secretarial Standards issued by the ICSI — procedural standards for board and general meetings.",
              "Stakeholder theory vs. shareholder theory: modern governance has shifted from \"maximise only shareholder wealth\" (Friedman's shareholder theory) toward balancing the interests of all stakeholders — employees, customers, society, and the environment (stakeholder theory), which is also why ESG and CSR now sit inside the governance conversation.",
            ],
          },
        ],
      },
      {
        id: "board",
        title: "8. Composition of the Board & Its Roles",
        icon: "Users",
        blocks: [
          {
            kind: "diagram",
            diagramId: "board-composition",
            caption: "Fig 1.3 — Typical composition of a company's Board of Directors",
          },
          {
            kind: "paragraph",
            text: "Composition of the board:",
          },
          {
            kind: "bullets",
            items: [
              "Executive Directors: full-time directors involved in daily operations (e.g., Managing Director, Whole-time Director).",
              "Non-Executive Directors: not involved in daily operations; usually represent promoters or bring outside expertise.",
              "Independent Directors: have no material/financial relationship with the company; SEBI mandates at least one-third (or half, in some cases) of the board be independent directors for listed companies in India.",
              "Chairman: heads the board and board meetings; may or may not be the same person as the CEO.",
            ],
          },
          {
            kind: "paragraph",
            text: "Roles and responsibilities of the board of directors:",
          },
          {
            kind: "bullets",
            items: [
              "Setting the company's mission, vision, and overall strategy.",
              "Appointing and evaluating top management (CEO/MD).",
              "Approving major decisions — budgets, mergers, big investments.",
              "Ensuring legal and ethical compliance (Companies Act, SEBI regulations).",
              "Protecting the interests of shareholders and other stakeholders.",
              "Monitoring financial performance and risk management.",
              "Ensuring accurate and timely disclosure of information.",
            ],
          },
        ],
      },
      {
        id: "trends",
        title: "9. Trends in Corporate Governance",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "bullets",
            items: [
              "ESG focus: Environmental, Social, and Governance reporting is now mandatory for top listed Indian companies (SEBI's BRSR — Business Responsibility and Sustainability Report).",
              "Board diversity: mandatory appointment of at least one woman director for listed companies.",
              "Stricter independent director norms: cooling-off periods, limits on the number of directorships.",
              "Say-on-pay / executive compensation scrutiny: shareholder approval required for high executive salaries.",
              "Digital governance: virtual/hybrid board meetings, use of AI in risk and compliance monitoring.",
              "Increased whistleblower protection mechanisms.",
              "Related Party Transaction (RPT) scrutiny: stricter approval requirements to prevent promoters from favouring themselves.",
            ],
          },
        ],
      },
      {
        id: "csr",
        title: "10. Corporate Social Responsibility (CSR)",
        icon: "HeartHandshake",
        blocks: [
          {
            kind: "paragraph",
            text: "CSR means a company's obligation to give back to society — beyond just making profit — by contributing to social, environmental, and economic development.",
          },
          {
            kind: "callout",
            tone: "info",
            title: "Legal requirement in India",
            text: "Under Section 135 of the Companies Act, 2013, companies with net worth ≥ ₹500 crore, or turnover ≥ ₹1,000 crore, or net profit ≥ ₹5 crore must spend at least 2% of their average net profit (of the last 3 years) on CSR activities.",
          },
          {
            kind: "paragraph",
            text: "Common CSR activities (Schedule VII areas):",
          },
          {
            kind: "bullets",
            items: [
              "Eradicating hunger and poverty, promoting healthcare",
              "Promoting education, especially for women and differently-abled persons",
              "Environmental sustainability and conservation",
              "Rural development projects",
              "Disaster relief and contribution to PM relief funds",
            ],
          },
          {
            kind: "callout",
            tone: "case",
            title: "Real example",
            text: "Infosys Foundation spends heavily on education, healthcare, and rural development. Tata Group was doing CSR-type work (townships, hospitals, schools for employees and communities) even before it became a legal requirement — often cited as a model of \"governance driven by values, not just law.\"",
          },
        ],
      },
      {
        id: "case-studies",
        title: "11. Case Studies (Corporate Governance)",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Satyam Computers scam (2009)",
            text: "Satyam's Chairman Ramalinga Raju admitted to inflating the company's profits and cash balances for years (fabricating over ₹7,000 crore). This is the most-cited case of corporate governance failure in India — weak independent board oversight, poor auditing, and lack of transparency allowed the fraud to continue for years. It led to major reforms in auditing standards and rotation rules for auditors.",
          },
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Tata Group",
            text: "Tata Sons is often used as a positive example of governance — a strong holding structure, philanthropic trusts owning majority shares, and a long-standing reputation for ethical business. The 2016-2017 Tata-Mistry boardroom battle (removal of Cyrus Mistry as Chairman) is also studied as a case of governance and board-power-struggle issues, even at well-reputed companies.",
          },
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Infosys",
            text: "Infosys is frequently cited for strong, transparent governance practices — clear separation of Chairman and CEO roles, strong independent board representation, and transparent disclosures, which helped it become one of India's most trusted IT brands globally.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Strategos", definition: "Greek origin of the word \"strategy\" — art of the general." },
      { term: "SBU", definition: "Strategic Business Unit — an independent business division within a large company." },
      { term: "ESG", definition: "Environmental, Social, Governance — a framework to assess a company's sustainability practices." },
      { term: "BRSR", definition: "Business Responsibility and Sustainability Report, mandated by SEBI for top listed companies." },
      { term: "RPT", definition: "Related Party Transaction — a deal between a company and its own promoters/insiders." },
      { term: "Section 135", definition: "Companies Act provision that makes CSR spending mandatory for large companies." },
    ],
    examQuestions: [
      "Define strategy. Explain Mintzberg's 5 P's of strategy with examples. (Long)",
      "Discuss the nature and importance of strategic management. (Long)",
      "Explain the model of strategic management with a diagram. (Long)",
      "Describe the strategic decision-making process. (Medium)",
      "What is corporate governance? Explain its key principles. (Medium)",
      "Discuss the composition and role of the board of directors. (Long)",
      "Write short notes on recent trends in corporate governance. (Short)",
      "Explain CSR with reference to Section 135 of the Companies Act, 2013. (Medium)",
      "Discuss the Satyam scam as a case of corporate governance failure. (Case-based)",
      "Differentiate between corporate, business, and functional level strategy. (Short)",
    ],
  },
  {
    unitNumber: 2,
    title: "Environmental Scanning",
    hours: 8,
    headings: [
      {
        id: "meaning",
        title: "1. Meaning & Importance of Environmental Scanning",
        icon: "Radar",
        blocks: [
          {
            kind: "paragraph",
            text: "Environmental scanning is the process of continuously collecting, analysing, and interpreting data about the forces outside and inside an organisation that could affect its strategy. Think of it as the company's \"radar system\" — it helps spot opportunities and threats before they hit.",
          },
          {
            kind: "paragraph",
            text: "The environment is usually studied in two layers:",
          },
          {
            kind: "bullets",
            items: [
              "Macro (external) environment — broad forces the firm cannot control: economy, government, technology, society. Analysed using PESTEL, the IO/SCP approach, and Porter's Five Forces.",
              "Micro (internal) environment — the firm's own resources and capabilities that it can control and build on. Analysed using RBV, VRIO, and Value Chain Analysis.",
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Why it matters",
            text: "A SWOT analysis (Unit 3) is actually built from environmental scanning — the macro environment feeds the Opportunities & Threats, and the micro environment feeds the Strengths & Weaknesses.",
          },
        ],
      },
      {
        id: "pestel",
        title: "2. Macro Environment: PESTEL Analysis",
        icon: "Globe",
        blocks: [
          {
            kind: "paragraph",
            text: "PESTEL is a framework to scan the six broad macro-environmental factors that affect every industry, even though no single firm can control them.",
          },
          { kind: "diagram", diagramId: "pestel", caption: "Fig 2.1 — The six PESTEL factors" },
          {
            kind: "table",
            headers: ["Factor", "What it covers", "Example"],
            rows: [
              ["Political", "Government stability, tax policy, trade restrictions, FDI rules", "Change in import duty affecting the auto industry"],
              ["Economic", "GDP growth, inflation, interest rates, exchange rates, disposable income", "Rising interest rates reducing home-loan demand for real estate firms"],
              ["Social", "Demographics, lifestyle changes, cultural attitudes, education levels", "Growing health-consciousness boosting demand for oat/millet-based foods"],
              ["Technological", "Automation, R&D activity, rate of technological change, digital adoption", "UPI/digital payments disrupting traditional banking and cash-based retail"],
              ["Environmental", "Climate change, pollution norms, sustainability expectations", "Stricter emission norms (BS-VI) forcing auto makers to redesign engines"],
              ["Legal", "Labour law, consumer protection law, competition law, data protection law", "The Digital Personal Data Protection Act, 2023 affecting how firms handle customer data"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "When the Indian government pushed the PLI (Production Linked Incentive) scheme, it was a Political/Economic PESTEL factor that directly encouraged electronics and mobile manufacturers to set up factories in India instead of importing.",
          },
        ],
      },
      {
        id: "io-scp",
        title: "3. Industrial Organization (IO) Model & the SCP Approach",
        icon: "Factory",
        blocks: [
          {
            kind: "paragraph",
            text: "The Industrial Organization (IO) model says that a firm's profitability is determined mainly by the industry it operates in, not by what the firm itself does differently. In other words: \"pick the right industry, and you're already halfway to being profitable.\"",
          },
          {
            kind: "paragraph",
            text: "This idea is explained through the Structure-Conduct-Performance (SCP) approach:",
          },
          {
            kind: "bullets",
            ordered: true,
            items: [
              "Structure: the basic characteristics of the industry — number of competitors, entry barriers, product differentiation (e.g., a highly concentrated industry like telecom vs. a fragmented one like local grocery stores).",
              "Conduct: how firms behave within that structure — their pricing, R&D spending, advertising, and capacity decisions (shaped by the structure).",
              "Performance: the resulting efficiency, profitability, and growth of firms in that industry (shaped by conduct, which is shaped by structure).",
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam tip",
            text: "The logic flows one way: Structure → Conduct → Performance. This IO logic is also the foundation Michael Porter later built his Five Forces Model on.",
          },
        ],
      },
      {
        id: "porter-five-forces",
        title: "4. Porter's Five Forces Model",
        icon: "Swords",
        blocks: [
          {
            kind: "paragraph",
            text: "Michael Porter's Five Forces Model helps analyse how attractive (i.e., how profitable) an industry is likely to be, by studying five competitive forces.",
          },
          { kind: "diagram", diagramId: "porter-five-forces", caption: "Fig 2.2 — Porter's Five Forces Model" },
          {
            kind: "table",
            headers: ["Force", "Meaning", "High when…"],
            rows: [
              ["Threat of New Entrants", "How easily new competitors can enter the industry", "Entry barriers (capital, licensing, brand loyalty) are low"],
              ["Bargaining Power of Suppliers", "How much suppliers can dictate price/terms", "Few suppliers, or the input is unique/critical (e.g., rare earth metals for EV batteries)"],
              ["Bargaining Power of Buyers", "How much customers can pressure firms on price/quality", "Buyers are large, few, or products are undifferentiated (commoditised)"],
              ["Threat of Substitutes", "Availability of alternative products/services that satisfy the same need", "Substitutes offer similar value at a lower cost (e.g., Zoom calls vs. business travel)"],
              ["Industry Rivalry (existing competitors)", "Intensity of competition among current players", "Many equally-sized competitors, slow industry growth, low switching costs"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Real example",
            text: "The Indian airline industry has a low-profitability structure under Porter's model: low entry barriers, high buyer bargaining power (price-comparison apps), high supplier power (only Boeing/Airbus + few fuel suppliers), high rivalry (many airlines fighting on price) — which explains why several Indian airlines have struggled financially over the years.",
          },
        ],
      },
      {
        id: "rbv",
        title: "5. Micro Environment: Resource-Based View (RBV)",
        icon: "Gem",
        blocks: [
          {
            kind: "paragraph",
            text: "While the IO model says \"industry matters most,\" the Resource-Based View (RBV) argues the opposite: a firm's own unique internal resources and capabilities are the real source of competitive advantage — which is why two firms in the exact same industry (e.g., IndiGo vs. other Indian airlines) can have very different levels of profitability.",
          },
          {
            kind: "bullets",
            items: [
              "Tangible resources: physical assets, machinery, cash, land, buildings.",
              "Intangible resources: brand reputation, patents, organisational culture, customer relationships.",
              "Capabilities: the firm's capacity to combine resources effectively — e.g., Toyota's manufacturing efficiency (the Toyota Production System) is a capability, not just a resource.",
            ],
          },
        ],
      },
      {
        id: "vrio",
        title: "6. VRIO Framework",
        icon: "KeyRound",
        blocks: [
          {
            kind: "paragraph",
            text: "VRIO is a tool to test whether a firm's resource/capability can actually deliver a sustainable competitive advantage. It asks four questions, in order:",
          },
          {
            kind: "table",
            headers: ["Question", "If \"No\"", "If \"Yes\" to all four"],
            rows: [
              ["Valuable — does it help exploit an opportunity or neutralise a threat?", "Competitive disadvantage", "—"],
              ["Rare — do few (or no) competitors also have it?", "Competitive parity (equal footing)", "—"],
              ["Inimitable — is it costly/hard for rivals to copy or substitute?", "Temporary competitive advantage", "—"],
              ["Organised — is the firm organised (systems, processes, culture) to actually exploit it?", "Unused competitive advantage", "Sustainable competitive advantage"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "Amazon's logistics network is Valuable (fast delivery), Rare (few competitors match its scale), hard to Imitate (took 20+ years and billions to build), and the company is Organised around it (dedicated logistics division) — so it passes all four VRIO tests and gives Amazon a sustainable competitive advantage.",
          },
        ],
      },
      {
        id: "sustainability",
        title: "7. Using Resources for Competitive Advantage & Its Sustainability",
        icon: "ShieldCheck",
        blocks: [
          {
            kind: "paragraph",
            text: "Having a valuable resource is not enough — a firm must also protect it from being copied. Ways competitive advantage stays sustainable over time:",
          },
          {
            kind: "bullets",
            items: [
              "Causal ambiguity — competitors can't clearly identify what exactly is causing the firm's success (e.g., a specific company culture).",
              "Path dependency — the advantage was built over a long, unique history that can't simply be recreated overnight (e.g., decades of brand trust).",
              "Social complexity — the advantage comes from complex relationships (team culture, supplier trust) that are hard to replicate mechanically.",
              "Legal protection — patents, trademarks, and copyrights that legally block imitation for a period of time.",
            ],
          },
        ],
      },
      {
        id: "value-chain",
        title: "8. Value Chain Analysis",
        icon: "Link2",
        blocks: [
          {
            kind: "paragraph",
            text: "Porter's Value Chain breaks a firm's activities into a chain of value-adding steps, so managers can see exactly where cost is added and where value (and therefore, potential competitive advantage) is created.",
          },
          { kind: "diagram", diagramId: "value-chain", caption: "Fig 2.3 — Porter's Value Chain" },
          {
            kind: "bullets",
            items: [
              "Primary activities (directly create/deliver the product): Inbound Logistics → Operations → Outbound Logistics → Marketing & Sales → Service.",
              "Support activities (help the primary activities run): Firm Infrastructure, Human Resource Management, Technology Development, Procurement.",
              "Margin: the difference between the total value created and the total cost of performing the activities — this is where profit comes from.",
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Real example",
            text: "Zara built a competitive advantage through its value chain, not just its product: fast in-house manufacturing (Operations) and tightly controlled logistics (Outbound Logistics) let it move a design from sketch to store shelf in about 2 weeks, compared to months for typical competitors.",
          },
        ],
      },
      {
        id: "case-studies",
        title: "9. Case Studies",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Jio's entry into Indian telecom",
            text: "Reliance Jio's 2016 entry is a textbook Porter's Five Forces disruption: it deliberately used a low-price strategy to raise rivalry and buyer power industry-wide, forcing weaker players (Aircel, Reliance Communications) out and triggering the sector's biggest consolidation.",
          },
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Nokia vs. resource-based view",
            text: "Nokia had huge tangible resources (factories, distribution) but lacked the intangible capability of software/app-ecosystem innovation that Apple and Google had built — an RBV lesson that resources must be the right resources for the environment, not just large in quantity.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "PESTEL", definition: "Political, Economic, Social, Technological, Environmental, Legal — a framework to scan the macro environment." },
      { term: "IO Model", definition: "Industrial Organization model — the view that industry structure is the main driver of firm profitability." },
      { term: "SCP", definition: "Structure-Conduct-Performance — the logic chain behind the IO model." },
      { term: "RBV", definition: "Resource-Based View — the view that a firm's unique internal resources drive competitive advantage." },
      { term: "VRIO", definition: "Valuable, Rare, Inimitable, Organised — a test for whether a resource gives sustainable competitive advantage." },
      { term: "Value Chain", definition: "Porter's model of a firm's primary and support activities that create value and margin." },
    ],
    examQuestions: [
      "Explain PESTEL analysis with suitable examples for each factor. (Long)",
      "Discuss the Industrial Organization model and the Structure-Conduct-Performance approach. (Medium)",
      "Explain Porter's Five Forces Model with a diagram. (Long)",
      "What is the Resource-Based View? How is it different from the IO model? (Medium)",
      "Explain the VRIO framework with an example. (Long)",
      "How can a firm make its competitive advantage sustainable? (Medium)",
      "Explain Porter's Value Chain Analysis with a diagram. (Long)",
      "Differentiate between macro environment and micro environment scanning. (Short)",
    ],
  },
  {
    unitNumber: 3,
    title: "Strategy Formulation",
    hours: 9,
    headings: [
      {
        id: "swot",
        title: "1. Strategy Formulation: Situational Analysis Using SWOT",
        icon: "Grid2x2",
        blocks: [
          {
            kind: "paragraph",
            text: "Before choosing a strategy, a firm must know where it stands. SWOT analysis combines the internal scan (Strengths, Weaknesses — from RBV/VRIO/Value Chain in Unit 2) with the external scan (Opportunities, Threats — from PESTEL/Porter's Five Forces in Unit 2) into one simple 2x2 grid.",
          },
          { kind: "diagram", diagramId: "swot-matrix", caption: "Fig 3.1 — The SWOT matrix" },
          {
            kind: "table",
            headers: ["Element", "Origin", "Question it answers"],
            rows: [
              ["Strengths", "Internal", "What do we do better than competitors?"],
              ["Weaknesses", "Internal", "Where are we at a disadvantage?"],
              ["Opportunities", "External", "What trends/gaps in the environment can we exploit?"],
              ["Threats", "External", "What external forces could hurt us?"],
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Beyond the list: TOWS matching",
            text: "A good SWOT doesn't just list four boxes — it matches them into strategies: SO (use strength to grab an opportunity), WO (fix a weakness to capture an opportunity), ST (use a strength to reduce a threat), and WT (defensive move to minimise weakness and threat together). This matching step is called the TOWS matrix and is often what examiners actually want to see.",
          },
        ],
      },
      {
        id: "competitive-strategy",
        title: "2. Business Strategies — Competitive Strategy",
        icon: "Target",
        blocks: [
          {
            kind: "paragraph",
            text: "At the business level, Michael Porter says a firm can only win in one of a few ways — trying to do all of them at once usually leads to being \"stuck in the middle\" with no clear advantage.",
          },
          { kind: "diagram", diagramId: "generic-strategies-matrix", caption: "Fig 3.2 — Porter's Generic Competitive Strategies" },
          {
            kind: "bullets",
            items: [
              "Cost Leadership: become the lowest-cost producer in the industry and win on price across a broad market (e.g., Patanjali, DMart).",
              "Differentiation: offer something genuinely unique (design, quality, brand, technology) that customers will pay a premium for, across a broad market (e.g., Apple, Tanishq).",
              "Focus (Cost Focus / Differentiation Focus): target a narrow market segment and win it with either low cost or differentiation, rather than competing broadly (e.g., a regional airline like SpiceJet's early no-frills, budget-only focus).",
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "IndiGo (cost leadership — broad, low-cost, no-frills across India) and Vistara pre-merger (differentiation — full-service, premium experience) both competed in Indian aviation but with completely different generic strategies — neither tried to be \"a bit of both.\"",
          },
        ],
      },
      {
        id: "cooperative-strategy",
        title: "3. Business Strategies — Cooperative Strategy",
        icon: "Handshake",
        blocks: [
          {
            kind: "paragraph",
            text: "Sometimes firms choose to cooperate with rivals instead of only competing with them.",
          },
          {
            kind: "bullets",
            items: [
              "Collusion: firms secretly (or openly) agree to fix prices, output, or divide markets to reduce competition. Overt collusion (formal agreements/cartels) is illegal in most countries, including India under the Competition Act, 2002; tacit collusion (unspoken, similar behaviour without a formal deal) is harder to prove but still watched by regulators like the CCI (Competition Commission of India).",
              "Strategic Alliances: two or more firms formally cooperate (without merging) to achieve a shared goal — sharing R&D costs, entering a new market together, or combining technology.",
            ],
          },
          {
            kind: "callout",
            tone: "case",
            title: "Real example",
            text: "The Airbus consortium was formed as a strategic alliance among European aerospace firms to compete with Boeing's scale, sharing enormous R&D and manufacturing costs that no single European firm could bear alone.",
          },
        ],
      },
      {
        id: "corporate-strategy",
        title: "4. Corporate Strategies — Directional Strategy",
        icon: "Compass",
        blocks: [
          {
            kind: "paragraph",
            text: "At the corporate level, the board decides the overall direction the whole company (across all its businesses) should move in:",
          },
          {
            kind: "table",
            headers: ["Directional Strategy", "When used", "Example"],
            rows: [
              [
                "Growth Strategies",
                "Company wants to expand — via concentration (more of the same business), vertical integration (owning suppliers/distributors), horizontal integration (buying competitors), or diversification (entering new businesses).",
                "Reliance moving from oil & gas into retail and telecom (diversification)",
              ],
              [
                "Stability Strategy",
                "Company is satisfied with current performance and simply wants to maintain its position — used in a mature, stable industry or after a period of fast growth to consolidate gains.",
                "A well-established regional FMCG brand maintaining its market share without aggressive expansion",
              ],
              [
                "Retrenchment Strategies",
                "Company reduces its scale to survive — via turnaround (cutting costs to fix a struggling unit), divestment (selling off a business unit), or liquidation (shutting down entirely).",
                "Future Group divesting/selling several of its retail businesses during its financial crisis",
              ],
            ],
          },
        ],
      },
      {
        id: "corporate-parenting",
        title: "5. Corporate Parenting",
        icon: "Building2",
        blocks: [
          {
            kind: "paragraph",
            text: "Corporate parenting looks at corporate strategy from a different angle: instead of asking \"which businesses should we be in?\", it asks \"how can the corporate head office (the parent) actually add value to each of its business units?\" — as a good parent adds value to a child.",
          },
          {
            kind: "bullets",
            items: [
              "The parent can add value by: providing central services (finance, HR, legal) more cheaply than each unit could alone, transferring skills/best practices between units, providing capital and stretching targets, and building an overall corporate brand/reputation.",
              "The parent can also destroy value if it adds unnecessary bureaucracy, imposes a one-size-fits-all approach on very different businesses, or takes decisions too slowly.",
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "The Tata Group's parent company, Tata Sons, adds value to Tata Motors, Tata Steel, and Tata Consultancy Services by sharing the trusted \"Tata\" brand, common governance standards, and cross-company synergies — even though the businesses themselves are completely different.",
          },
        ],
      },
      {
        id: "functional-strategies",
        title: "6. Functional Strategies",
        icon: "LayoutGrid",
        blocks: [
          {
            kind: "paragraph",
            text: "Functional strategies translate the business-level strategy into specific action plans for each department, so everyone's daily work supports the same overall direction:",
          },
          {
            kind: "table",
            headers: ["Function", "What its strategy decides"],
            rows: [
              ["Marketing", "Target segments, product positioning, pricing strategy, promotion mix, distribution channels"],
              ["Financial", "Capital structure (debt vs. equity), dividend policy, investment/capital budgeting decisions"],
              ["R&D", "How much to invest in innovation, whether to be a first-mover or a fast-follower on new technology"],
              ["Operations", "Production capacity, quality management, plant location, make-vs-buy decisions"],
              ["Purchasing", "Vendor selection, negotiating terms, single-sourcing vs. multi-sourcing raw materials"],
              ["Logistics", "Warehousing, transportation, inventory management, distribution network design"],
              ["HRM", "Recruitment, training, compensation, and performance management policies aligned to strategy"],
              ["IT", "Choice of systems (ERP, CRM), data security, digital transformation roadmap"],
            ],
          },
        ],
      },
      {
        id: "sourcing-decision",
        title: "7. The Sourcing Decision: Outsourcing & Offshoring",
        icon: "Truck",
        blocks: [
          {
            kind: "paragraph",
            text: "A key functional/operations decision is whether to perform an activity in-house or get it done externally:",
          },
          {
            kind: "bullets",
            items: [
              "Outsourcing: hiring an external company to perform an activity that was (or could be) done in-house — e.g., a company outsourcing its payroll processing or customer support call centre.",
              "Offshoring: moving an activity to a different country, usually to cut costs or access specific talent — the work can still be done in-house (a company's own offshore unit) or outsourced to a foreign vendor at the same time.",
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "A US bank getting its customer service handled by an Indian BPO firm is both outsourcing (external vendor) and offshoring (different country) at once. If that same bank instead opened its own captive back-office unit in India, it would be offshoring without outsourcing.",
          },
        ],
      },
      {
        id: "case-studies",
        title: "8. Case Studies",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Patanjali (Cost Leadership)",
            text: "Patanjali disrupted the Indian FMCG market with an aggressive cost-leadership strategy — Ayurvedic products at prices well below established players like HUL and Colgate — forcing incumbents to launch their own low-cost \"natural\" sub-brands in response.",
          },
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Maruti Suzuki & Toyota alliance",
            text: "Maruti Suzuki and Toyota entered a strategic alliance to co-develop and badge-engineer vehicles (e.g., the Glanza, Urban Cruiser), sharing platforms and R&D costs — a cooperative strategy rather than a merger or acquisition.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "TOWS Matrix", definition: "The matching step of SWOT that pairs strengths/weaknesses with opportunities/threats to generate specific strategies." },
      { term: "Generic Strategies", definition: "Porter's three broad ways to compete: cost leadership, differentiation, and focus." },
      { term: "Strategic Alliance", definition: "A formal cooperation agreement between firms that stops short of a merger." },
      { term: "Retrenchment", definition: "A corporate strategy of reducing scale — through turnaround, divestment, or liquidation." },
      { term: "Corporate Parenting", definition: "How a corporate head office adds (or destroys) value across its business units." },
      { term: "Offshoring", definition: "Moving a business activity to a different country, whether kept in-house or outsourced." },
    ],
    examQuestions: [
      "Explain SWOT analysis and the TOWS matrix with an example. (Long)",
      "Explain Porter's generic competitive strategies with examples. (Long)",
      "What is cooperative strategy? Explain collusion and strategic alliances. (Medium)",
      "Discuss the different directional (corporate) strategies with examples. (Long)",
      "What is corporate parenting? How does a parent add value to its business units? (Medium)",
      "Explain the various functional strategies of an organisation. (Long)",
      "Differentiate between outsourcing and offshoring with examples. (Short)",
    ],
  },
  {
    unitNumber: 4,
    title: "Strategy Choice, Analysis & Implementation",
    hours: 9,
    headings: [
      {
        id: "scenario-analysis",
        title: "1. Scenario Analysis Process",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "Scenario analysis is a technique to prepare for an uncertain future by building a few plausible, different \"stories\" of how the environment might unfold — instead of betting everything on a single forecast.",
          },
          {
            kind: "bullets",
            ordered: true,
            items: [
              "Identify the key strategic issue or decision that needs to be made.",
              "Identify the key driving forces and uncertainties in the macro environment (e.g., oil prices, government policy, technology adoption speed).",
              "Select the 2-3 most critical and most uncertain drivers.",
              "Build a small number of distinct scenarios (typically 2-4) — e.g., \"best case,\" \"worst case,\" and \"most likely case.\"",
              "Assess the implications of each scenario for the company's strategy.",
              "Identify early warning signals that would indicate which scenario is actually unfolding.",
              "Develop flexible strategies/contingency plans that would work reasonably well across multiple scenarios.",
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Real example",
            text: "Automakers openly run scenario planning around EV adoption speed — building strategies for a \"fast EV transition\" scenario and a \"slow, hybrid-dominant transition\" scenario at the same time, so they aren't caught off guard either way.",
          },
        ],
      },
      {
        id: "bcg-matrix",
        title: "2. BCG Matrix (Growth-Share Matrix)",
        icon: "PieChart",
        blocks: [
          {
            kind: "paragraph",
            text: "Developed by the Boston Consulting Group, this tool helps a multi-business (or multi-product) company decide where to invest, by plotting each business/product on two dimensions: market growth rate and relative market share.",
          },
          { kind: "diagram", diagramId: "bcg-matrix", caption: "Fig 4.1 — The BCG Growth-Share Matrix" },
          {
            kind: "table",
            headers: ["Quadrant", "Meaning", "Suggested Strategy"],
            rows: [
              ["Stars", "High growth, high market share", "Invest heavily to maintain leadership as the market grows"],
              ["Question Marks", "High growth, low market share", "Invest selectively to try to turn into Stars, or divest"],
              ["Cash Cows", "Low growth, high market share", "Milk for cash with minimal investment; use the cash to fund Stars/Question Marks"],
              ["Dogs", "Low growth, low market share", "Harvest or divest — rarely worth further investment"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "In Hindustan Unilever's portfolio, a category like premium skincare (fast-growing, strong share) behaves like a Star, while a mature, high-share category like soaps behaves like a Cash Cow that funds newer growth bets.",
          },
        ],
      },
      {
        id: "ansoff-grid",
        title: "3. Ansoff Grid (Product-Market Growth Matrix)",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "paragraph",
            text: "The Ansoff Grid helps a firm choose a growth strategy by looking at whether it's selling existing or new products, into existing or new markets.",
          },
          { kind: "diagram", diagramId: "ansoff-matrix", caption: "Fig 4.2 — The Ansoff Growth Matrix" },
          {
            kind: "table",
            headers: ["Strategy", "Products x Markets", "Example"],
            rows: [
              ["Market Penetration", "Existing products, existing markets", "Coca-Cola running more ads/discounts to sell more cola in the same markets"],
              ["Market Development", "Existing products, new markets", "A domestic Indian brand launching in the Middle East / Africa for the first time"],
              ["Product Development", "New products, existing markets", "Maruti Suzuki launching an electric vehicle for its existing Indian customer base"],
              ["Diversification", "New products, new markets", "Reliance (originally oil & textiles) launching Jio (telecom) and Reliance Retail — the riskiest quadrant"],
            ],
          },
        ],
      },
      {
        id: "ge-nine-cell",
        title: "4. GE Nine-Cell Planning Grid",
        icon: "Grid3x3",
        blocks: [
          {
            kind: "paragraph",
            text: "Developed by GE with McKinsey, this is a more detailed alternative to the BCG matrix — instead of two simple factors, it uses two composite factors: industry attractiveness (market size, growth rate, competitive intensity, profitability) and business strength (market share, brand, cost position, quality).",
          },
          { kind: "diagram", diagramId: "ge-nine-cell", caption: "Fig 4.3 — The GE/McKinsey Nine-Cell Matrix" },
          {
            kind: "bullets",
            items: [
              "Invest/Grow zone (top-left) — strong business in an attractive industry: keep investing.",
              "Selectivity/Hold zone (diagonal) — mixed signals: invest selectively and monitor closely.",
              "Harvest/Divest zone (bottom-right) — weak business in an unattractive industry: minimise investment or exit.",
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam tip",
            text: "The key difference from BCG: GE Nine-Cell uses multiple weighted factors (more realistic, more work) while BCG uses just two simple factors (easier, but oversimplified).",
          },
        ],
      },
      {
        id: "mckinsey-7s",
        title: "5. McKinsey's 7-S Framework",
        icon: "Boxes",
        blocks: [
          {
            kind: "paragraph",
            text: "The McKinsey 7-S framework is used to check whether an organisation is properly aligned to implement its strategy — all seven elements need to fit together, or implementation fails even with a brilliant strategy on paper.",
          },
          { kind: "diagram", diagramId: "mckinsey-7s", caption: "Fig 4.4 — The McKinsey 7-S Framework" },
          {
            kind: "table",
            headers: ["S", "Type", "Meaning"],
            rows: [
              ["Strategy", "Hard", "The plan to build and sustain competitive advantage"],
              ["Structure", "Hard", "How the organisation is divided (departments, hierarchy, reporting lines)"],
              ["Systems", "Hard", "The daily processes and procedures (IT systems, budgeting, performance reviews)"],
              ["Shared Values", "Soft", "The core beliefs and culture at the centre, connecting all other S's"],
              ["Skills", "Soft", "The actual capabilities/competencies present in the organisation"],
              ["Style", "Soft", "The leadership and management style"],
              ["Staff", "Soft", "The people, their numbers, and how they are developed/motivated"],
            ],
          },
        ],
      },
      {
        id: "implementation",
        title: "6. Strategy Implementation: Programs, Budgets & Procedures",
        icon: "ListTodo",
        blocks: [
          {
            kind: "paragraph",
            text: "Once a strategy is chosen, it must be translated into action through three implementation tools, usually in this order:",
          },
          {
            kind: "bullets",
            ordered: true,
            items: [
              "Programs: the specific activities/steps needed to accomplish a plan (e.g., a \"digital transformation program\" with named sub-projects).",
              "Budgets: a statement of programs in terms of money — confirming the organisation actually has the financial resources for the programs, and controlling how funds are spent.",
              "Procedures (Standard Operating Procedures): the detailed, step-by-step methods used to carry out the programs consistently across the organisation.",
            ],
          },
        ],
      },
      {
        id: "corporate-development",
        title: "7. Stages of Corporate Development & Organizational Life Cycle",
        icon: "Sprout",
        blocks: [
          {
            kind: "paragraph",
            text: "As companies grow, they typically pass through recognisable stages, each needing a different structure and management style:",
          },
          {
            kind: "table",
            headers: ["Stage", "Description"],
            rows: [
              ["Stage I — Simple structure", "Owner-manager runs everything directly; typical of a small start-up."],
              ["Stage II — Functional structure", "Business grows; specialised departments (marketing, finance, operations) are created, run by functional managers."],
              ["Stage III — Divisional structure", "Company diversifies into multiple product lines/geographies, each run as a semi-independent division reporting to a central corporate office."],
            ],
          },
          {
            kind: "paragraph",
            text: "The Organizational Life Cycle describes a similar pattern in terms of maturity: Birth → Growth → Maturity → Decline (or Revival) — with strategy needs shifting at each phase (e.g., a company in Decline often needs a retrenchment strategy from Unit 3).",
          },
        ],
      },
      {
        id: "org-structures",
        title: "8. Organizational Structures: Matrix, Network & Modular/Cellular",
        icon: "Network",
        blocks: [
          {
            kind: "paragraph",
            text: "As strategy gets more complex, firms often move beyond simple functional/divisional structures to more flexible designs:",
          },
          { kind: "diagram", diagramId: "matrix-structure", caption: "Fig 4.5 — A matrix organizational structure" },
          {
            kind: "bullets",
            items: [
              "Matrix Structure: employees report to two bosses at once — a functional head and a project/product head (shown in the diagram above). Good for complex projects needing cross-functional input, but can create confusion over authority (\"who do I really answer to?\").",
              "Network Structure: a small central \"hub\" firm coordinates a network of external partners/contractors who perform most of the actual functions (manufacturing, logistics, design) — very flexible and low-asset, but the hub firm has less direct control.",
              "Modular / Cellular Structure: the organisation is broken into self-contained, semi-autonomous \"cells\" or modules that can be added, removed, or reconfigured quickly as strategy changes — offering high flexibility for fast-changing environments.",
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Real example",
            text: "Nike largely operates a network structure — it owns very little manufacturing itself and instead coordinates a global network of contract manufacturers, letting it focus its own resources on design, branding, and marketing.",
          },
        ],
      },
      {
        id: "reengineering",
        title: "9. Reengineering and Strategy Implementation",
        icon: "RefreshCw",
        blocks: [
          {
            kind: "paragraph",
            text: "Business Process Reengineering (BPR) means radically redesigning core business processes from scratch — not just improving them incrementally — to achieve dramatic improvements in cost, quality, speed, or service.",
          },
          {
            kind: "bullets",
            items: [
              "Reengineering is used when a strategy requires a fundamentally different way of working that the current processes simply cannot support (e.g., moving from in-branch banking to a fully digital bank).",
              "It's different from ordinary Total Quality Management (TQM), which improves existing processes step by step; reengineering starts with a blank page and asks \"if we were designing this process today, how would we do it?\"",
            ],
          },
        ],
      },
      {
        id: "leadership-culture",
        title: "10. Leadership and Corporate Culture",
        icon: "Crown",
        blocks: [
          {
            kind: "paragraph",
            text: "Even the best strategy fails without the right leadership and culture to carry it out:",
          },
          {
            kind: "bullets",
            items: [
              "Leadership's role in implementation: communicating the strategy clearly, allocating resources, removing obstacles, and personally modelling the behaviours the strategy requires.",
              "Corporate culture: the shared values, beliefs, and \"way we do things around here\" that shape how employees actually behave day to day — this connects directly back to the \"Shared Values\" centre of the McKinsey 7-S model above.",
              "A mismatch between strategy and culture (e.g., a cost-leadership strategy inside a culture used to lavish spending) is one of the most common reasons strategy implementation fails, even when the strategy itself was well designed.",
            ],
          },
        ],
      },
      {
        id: "case-studies",
        title: "11. Case Studies",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Kodak's culture problem",
            text: "Kodak actually invented an early digital camera in the 1970s but its dominant film-business culture and leadership were unwilling to cannibalise their profitable film business — a classic implementation/culture failure, not a lack of strategic or technical insight.",
          },
          {
            kind: "callout",
            tone: "case",
            title: "Case study — ITC's diversification via BCG-style thinking",
            text: "ITC, originally a cigarette (tobacco) company, deliberately diversified into FMCG, hotels, paperboards, and agri-business — a portfolio that mirrors BCG-matrix logic, using stable cash flows from its \"Cash Cow\" cigarette business to fund newer \"Question Mark\" businesses like packaged foods.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Scenario Analysis", definition: "Planning technique that builds multiple plausible future scenarios instead of a single forecast." },
      { term: "BCG Matrix", definition: "A 2x2 portfolio tool plotting market growth rate against relative market share (Stars, Question Marks, Cash Cows, Dogs)." },
      { term: "Ansoff Grid", definition: "A 2x2 growth-strategy tool based on new/existing products and new/existing markets." },
      { term: "McKinsey 7-S", definition: "A framework of seven interdependent elements (3 hard, 4 soft) needed for successful strategy implementation." },
      { term: "BPR", definition: "Business Process Reengineering — radical, from-scratch redesign of core business processes." },
      { term: "Network Structure", definition: "An organisational design where a hub firm coordinates a network of external partners rather than performing most functions itself." },
    ],
    examQuestions: [
      "Explain the scenario analysis process with an example. (Medium)",
      "Explain the BCG Matrix with its four quadrants and suggested strategies. (Long)",
      "Explain the Ansoff Grid with examples for each strategy. (Long)",
      "Compare the GE Nine-Cell Grid with the BCG Matrix. (Medium)",
      "Explain the McKinsey 7-S Framework with a diagram. (Long)",
      "Discuss programs, budgets, and procedures as tools of strategy implementation. (Medium)",
      "Explain the stages of corporate development and the organizational life cycle. (Medium)",
      "Discuss matrix, network, and modular/cellular organizational structures. (Long)",
      "What is business process reengineering? How does it support strategy implementation? (Medium)",
      "Explain the role of leadership and corporate culture in strategy implementation. (Medium)",
    ],
  },
  {
    unitNumber: 5,
    title: "Strategy Evaluation & Control",
    hours: 5,
    headings: [
      {
        id: "evaluation-control-process",
        title: "1. Evaluation & Control Process",
        icon: "GaugeCircle",
        blocks: [
          {
            kind: "paragraph",
            text: "Strategy evaluation and control is the final stage of the strategic management model (Unit 1) — it checks whether the strategy is actually delivering the intended results, and feeds corrections back into the cycle.",
          },
          {
            kind: "bullets",
            ordered: true,
            items: [
              "Determine what to measure — the processes and outputs that matter most to strategic success (not everything that's easy to measure).",
              "Set standards of performance — specific, measurable targets derived from the objectives set during strategy formulation.",
              "Measure actual performance — at pre-decided intervals (monthly, quarterly, annually).",
              "Compare actual performance against the standard — identify the size and direction of any deviation.",
              "Take corrective action — adjust the strategy, the implementation plan, or the standard itself if it was unrealistic.",
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam tip",
            text: "This process is the same logic as the well-known \"Plan → Do → Check → Act\" cycle, applied specifically to strategy instead of daily operations.",
          },
        ],
      },
      {
        id: "types-of-controls",
        title: "2. Measuring Performance: Types of Controls",
        icon: "SlidersHorizontal",
        blocks: [
          {
            kind: "table",
            headers: ["Type of Control", "When it happens", "Example"],
            rows: [
              ["Feedforward (Preliminary) Control", "Before the activity begins", "Checking a supplier's quality certifications before signing a contract"],
              ["Concurrent (Steering) Control", "While the activity is happening", "A supervisor monitoring a production line in real time and adjusting it immediately"],
              ["Feedback Control", "After the activity is completed", "Reviewing last quarter's sales figures to decide next quarter's targets"],
              ["Strategic Surveillance", "Ongoing, broad monitoring", "General scanning of news/industry reports for any threat that could invalidate the whole strategy"],
            ],
          },
        ],
      },
      {
        id: "abc-costing",
        title: "3. Activity-Based Costing (ABC)",
        icon: "Calculator",
        blocks: [
          {
            kind: "paragraph",
            text: "Activity-Based Costing assigns overhead and indirect costs to products/services based on the actual activities that drive those costs — instead of spreading overhead evenly (e.g., by machine hours) as traditional costing does.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "If Product A needs 10 machine setups a month and Product B needs just 1, traditional costing might still split setup costs equally between them — but ABC correctly assigns most of the setup cost to Product A, revealing that Product A is actually far less profitable than it first appears.",
          },
        ],
      },
      {
        id: "erm",
        title: "4. Enterprise Risk Management (ERM)",
        icon: "ShieldAlert",
        blocks: [
          {
            kind: "paragraph",
            text: "Enterprise Risk Management is a company-wide, structured process to identify, assess, and manage all types of risk (strategic, financial, operational, compliance, reputational) that could affect the achievement of strategic objectives — rather than managing each risk in a separate department silo.",
          },
          {
            kind: "bullets",
            items: [
              "Risk identification — scanning for potential risks across the whole organisation.",
              "Risk assessment — estimating the likelihood and potential impact of each risk.",
              "Risk response — deciding to avoid, reduce, transfer (e.g., insurance), or accept each risk.",
              "Monitoring — continuously tracking risks as the environment changes.",
            ],
          },
        ],
      },
      {
        id: "primary-measures",
        title: "5. Primary Measures of Corporate Performance",
        icon: "LineChart",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Return on Investment (ROI): Net Profit ÷ Total Investment — the most widely used traditional financial measure.",
              "Return on Equity (ROE): Net Profit ÷ Shareholders' Equity — measures return generated for shareholders specifically.",
              "Earnings Per Share (EPS): a common stock-market performance measure.",
              "Economic Value Added (EVA): profit remaining after subtracting the cost of all capital employed (debt + equity) — shows whether the company is truly creating value, not just accounting profit.",
              "Market Value Added (MVA): the difference between a company's market value and the capital investors have put into it over time.",
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Limitation of purely financial measures",
            text: "Financial measures like ROI only show past results and can encourage short-term thinking (e.g., cutting R&D just to boost this quarter's profit) — which is exactly the gap the Balanced Scorecard below was designed to fill.",
          },
        ],
      },
      {
        id: "balanced-scorecard",
        title: "6. Balanced Scorecard Approach",
        icon: "LayoutDashboard",
        blocks: [
          {
            kind: "paragraph",
            text: "Developed by Kaplan and Norton, the Balanced Scorecard measures corporate performance from four perspectives at once, so management doesn't rely on financial numbers alone.",
          },
          { kind: "diagram", diagramId: "balanced-scorecard", caption: "Fig 5.1 — The Balanced Scorecard" },
          {
            kind: "table",
            headers: ["Perspective", "Key Question", "Example Metric"],
            rows: [
              ["Financial", "How do we look to shareholders?", "ROI, revenue growth, EVA"],
              ["Customer", "How do customers see us?", "Customer satisfaction score, market share, retention rate"],
              ["Internal Business Process", "What must we excel at internally?", "Defect rate, cycle time, process efficiency"],
              ["Learning & Growth", "Can we continue to improve and create value?", "Employee training hours, employee satisfaction, rate of innovation"],
            ],
          },
        ],
      },
      {
        id: "responsibility-centers",
        title: "7. Responsibility Centers",
        icon: "Building",
        blocks: [
          {
            kind: "paragraph",
            text: "A responsibility centre is any organisational unit headed by a manager who is responsible for its specific set of activities. Control systems are designed around the type of centre:",
          },
          {
            kind: "table",
            headers: ["Type", "Manager is responsible for", "Example"],
            rows: [
              ["Revenue Centre", "Output/sales only (not costs)", "A regional sales office"],
              ["Expense (Cost) Centre", "Inputs/costs only (not revenue)", "The HR or accounting department"],
              ["Profit Centre", "Both revenue and costs (i.e., profit)", "An independent product division"],
              ["Investment Centre", "Profit relative to the capital invested", "A fully autonomous subsidiary company"],
            ],
          },
        ],
      },
      {
        id: "benchmarking",
        title: "8. Benchmarking",
        icon: "Trophy",
        blocks: [
          {
            kind: "paragraph",
            text: "Benchmarking means comparing a firm's own products, processes, or performance against the best-in-class performers (inside or outside the industry) to identify improvement gaps.",
          },
          {
            kind: "bullets",
            items: [
              "Internal benchmarking: comparing similar processes/units within the same organisation.",
              "Competitive benchmarking: comparing directly against competitors.",
              "Functional/Generic benchmarking: comparing a specific process (e.g., logistics) against the best performer of that process in any industry, even unrelated ones.",
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Real example",
            text: "Many hospitals have benchmarked their patient check-in and logistics processes against Formula 1 pit-stop teams — an unrelated industry, but one known for extreme speed and precision in a short, high-stakes process.",
          },
        ],
      },
      {
        id: "problems-guidelines",
        title: "9. Problems in Measuring Performance & Guidelines for Proper Control",
        icon: "AlertTriangle",
        blocks: [
          {
            kind: "paragraph",
            text: "Common problems in measuring performance:",
          },
          {
            kind: "bullets",
            items: [
              "Short-term orientation — managers optimise for this quarter's numbers at the expense of long-term strategy.",
              "Goal displacement — employees start \"managing the measure\" instead of the actual underlying goal it was meant to represent.",
              "Suboptimisation — a department improves its own metric in a way that actually hurts overall company performance.",
              "Over-reliance on a single measure (usually financial), missing the fuller picture.",
            ],
          },
          {
            kind: "paragraph",
            text: "Guidelines for proper strategic control:",
          },
          {
            kind: "bullets",
            items: [
              "Control only significant, strategically important activities — not everything.",
              "Use both quantitative and qualitative standards.",
              "Timely reporting so corrective action can actually still make a difference.",
              "Use multiple, balanced measures (as in the Balanced Scorecard) rather than one single number.",
              "Reward achievement of the standard, not just \"looking busy.\"",
            ],
          },
        ],
      },
      {
        id: "strategic-audit",
        title: "10. Strategic Audit of a Corporation",
        icon: "ClipboardCheck",
        blocks: [
          {
            kind: "paragraph",
            text: "A strategic audit is a comprehensive, systematic checklist-style review of a corporation's entire strategic management process — essentially a structured way to apply everything from Units 1-5 to one real company, typically covering:",
          },
          {
            kind: "bullets",
            ordered: true,
            items: [
              "Current situation — current mission, objectives, strategies, and policies.",
              "Corporate governance — board and top management review.",
              "External environment — PESTEL and Porter's Five Forces analysis.",
              "Internal environment — resources, capabilities, VRIO, value chain.",
              "Analysis of strategic factors (SWOT/TOWS).",
              "Strategic alternatives and recommended strategy.",
              "Implementation plan — programs, budgets, procedures.",
              "Evaluation and control — the metrics and systems that will track success.",
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam tip",
            text: "A strategic audit question is often really asking you to apply Units 1 through 5 together to one company case study, in this exact sequence.",
          },
        ],
      },
      {
        id: "case-studies",
        title: "11. Case Studies",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Infosys and the Balanced Scorecard approach",
            text: "IT services firms like Infosys are widely cited for tracking non-financial metrics (employee attrition, training hours, client satisfaction, utilisation rates) alongside financial results — a practical, real-world application of the Balanced Scorecard's four-perspective approach.",
          },
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Yes Bank's control failure",
            text: "Yes Bank's near-collapse in 2020 is often studied as a strategic control failure — aggressive loan growth (a financial performance measure) was pursued without adequate risk management (ERM) and lending controls, leading to a massive pile-up of bad loans that regulators eventually had to step in on.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "ABC Costing", definition: "Activity-Based Costing — assigning overheads based on the actual activities that drive them." },
      { term: "ERM", definition: "Enterprise Risk Management — a company-wide structured process to identify and manage all types of risk." },
      { term: "EVA", definition: "Economic Value Added — profit remaining after subtracting the cost of all capital employed." },
      { term: "Balanced Scorecard", definition: "A performance measurement framework covering financial, customer, internal process, and learning & growth perspectives." },
      { term: "Responsibility Centre", definition: "An organisational unit (revenue, expense, profit, or investment centre) headed by an accountable manager." },
      { term: "Strategic Audit", definition: "A comprehensive, structured review of a corporation's entire strategic management process." },
    ],
    examQuestions: [
      "Explain the strategy evaluation and control process. (Medium)",
      "Discuss the different types of strategic controls with examples. (Medium)",
      "What is Activity-Based Costing? How is it different from traditional costing? (Medium)",
      "Explain Enterprise Risk Management and its key steps. (Medium)",
      "Discuss the primary measures of corporate performance. (Long)",
      "Explain the Balanced Scorecard approach with a diagram. (Long)",
      "What are responsibility centers? Explain their types. (Medium)",
      "What is benchmarking? Explain its types with examples. (Medium)",
      "Discuss the problems in measuring performance and guidelines for proper control. (Long)",
      "What is a strategic audit of a corporation? Explain its key components. (Long)",
    ],
  },
];
