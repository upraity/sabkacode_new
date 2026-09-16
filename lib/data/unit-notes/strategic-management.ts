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
];
