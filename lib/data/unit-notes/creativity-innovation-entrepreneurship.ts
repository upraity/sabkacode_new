import { UnitNote } from "@/types";

// Detailed, in-app notes for Creativity, Innovation & Entrepreneurship
// (BMB106) — AKTU MBA Sem 1. This subject has only 4 units per its syllabus.
export const creativityInnovationEntrepreneurshipUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Creativity and Innovation",
    hours: 4,
    headings: [
      {
        id: "creativity-vs-innovation",
        title: "1. Meaning: The Difference Between Creativity and Innovation",
        icon: "Lightbulb",
        blocks: [
          {
            kind: "paragraph",
            text: "Creativity is the ability to generate novel and useful ideas. Innovation is the process of successfully implementing those ideas to create value — creativity is the spark, innovation is turning that spark into something the market actually uses.",
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam tip",
            text: "A common exam question: \"Is every creative idea an innovation?\" Answer: No — creativity is necessary but not sufficient. An idea only becomes an innovation once it is actually developed and successfully brought to users/the market.",
          },
        ],
      },
      {
        id: "innovation-types",
        title: "2. Innovation Types & Platforms",
        icon: "Layers",
        blocks: [
          { kind: "diagram", diagramId: "innovation-types", caption: "Fig 1.1 — Types of Innovation" },
          {
            kind: "table",
            headers: ["Type", "Meaning", "Example"],
            rows: [
              ["Product Innovation", "A new or significantly improved good", "The first smartphone with a touchscreen"],
              ["Service Innovation", "A new or improved way of delivering a service", "Contactless UPI payments"],
              ["Business Model Innovation", "A new way of creating and capturing value", "Netflix's shift from DVD rental to streaming subscription"],
              ["Process Innovation", "A new or improved method of production/delivery", "Toyota's just-in-time manufacturing process"],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Design-led innovation: putting deep user/customer understanding (via design thinking methods) at the centre of the innovation process, rather than starting from technology alone.",
              "Improvisation: creating solutions spontaneously and adaptively, in real time, often under resource constraints.",
              "Large firm vs. Start-up innovation: large firms typically have more resources but more bureaucracy/risk-aversion; start-ups are more agile and risk-tolerant but resource-constrained — this trade-off is why many large firms now partner with or invest in start-ups.",
              "Co-creation and open innovation: involving customers, partners, or even the public in generating and developing new ideas, rather than relying only on an in-house R&D team.",
            ],
          },
        ],
      },
      {
        id: "innovation-environment",
        title: "3. Sources of Innovation & the Innovation Environment",
        icon: "Sprout",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Sources of innovation: unexpected occurrences, incongruities (gaps between what is and what \"should be\"), process needs, industry/market structure changes, demographic changes, changes in perception, and new knowledge.",
              "Innovation Environment: an organisational culture and structure that tolerates failure, rewards experimentation, gives employees time/resources to explore ideas, and removes unnecessary bureaucratic barriers.",
              "Creative Destruction: economist Joseph Schumpeter's term for how innovation constantly destroys old industries/business models while creating new ones (e.g., digital cameras destroying the film photography industry).",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Creativity", definition: "The ability to generate novel and useful ideas." },
      { term: "Innovation", definition: "The process of successfully implementing a creative idea to create value." },
      { term: "Creative Destruction", definition: "Schumpeter's concept of innovation destroying old industries while creating new ones." },
      { term: "Open Innovation", definition: "Involving external parties (customers, partners) in the innovation process." },
    ],
    examQuestions: [
      "Differentiate between creativity and innovation with examples. (Medium)",
      "Explain the different types of innovation. (Long)",
      "Discuss design-led innovation and co-creation. (Medium)",
      "Explain the sources of innovation. (Medium)",
      "What is meant by 'creative destruction'? Explain with an example. (Short)",
    ],
  },
  {
    unitNumber: 2,
    title: "Entrepreneurship",
    hours: 5,
    headings: [
      {
        id: "meaning-definition",
        title: "1. Meaning, Definition and Concept of Entrepreneurship",
        icon: "Rocket",
        blocks: [
          {
            kind: "paragraph",
            text: "Entrepreneurship is the process of designing, launching, and running a new business, typically starting as a small enterprise, while bearing much of the associated risk in pursuit of profit and growth.",
          },
          {
            kind: "paragraph",
            text: "Factors affecting entrepreneurship: economic factors (capital availability, market demand), social factors (social status of entrepreneurs, family background), psychological factors (need for achievement, risk-taking ability), and government/policy factors (ease of doing business, subsidies).",
          },
        ],
      },
      {
        id: "types-characteristics",
        title: "2. Types of Entrepreneurs, Skills & the Entrepreneurial Decision Process",
        icon: "Users",
        blocks: [
          {
            kind: "table",
            headers: ["Type", "Description"],
            rows: [
              ["Social Entrepreneur", "Starts a venture primarily to solve a social problem, with financial sustainability as a means, not the primary end"],
              ["Rural Entrepreneur", "Establishes an enterprise in a rural area, often around agriculture or local crafts"],
              ["Women Entrepreneur", "A woman who initiates and runs a business enterprise, often supported by specific government schemes"],
            ],
          },
          {
            kind: "paragraph",
            text: "Characteristics and skills of an entrepreneur: risk-taking ability, innovativeness, self-confidence, strong need for achievement, perseverance, and the ability to identify and seize opportunities.",
          },
          {
            kind: "paragraph",
            text: "Entrepreneur vs. Manager: an entrepreneur bears ownership risk and is driven by innovation/opportunity, while a manager is typically a salaried employee focused on efficiently running existing operations set up by others.",
          },
          {
            kind: "paragraph",
            text: "Functions of an entrepreneur: idea generation, risk-bearing, organising resources (capital, labour, land), innovation, and decision-making.",
          },
          {
            kind: "paragraph",
            text: "Entrepreneurial decision process: moving from the current situation (e.g., a stable job) toward considering venture creation — triggered by \"push\" factors (job dissatisfaction, unemployment) or \"pull\" factors (spotting a market opportunity, desire for independence), followed by evaluating feasibility and finally committing to launch.",
          },
        ],
      },
      {
        id: "entrepreneurial-failure",
        title: "3. Case Studies of Successful Entrepreneurs & Entrepreneurial Failure",
        icon: "TrendingDown",
        blocks: [
          {
            kind: "paragraph",
            text: "Common causes of entrepreneurial failure: inadequate market research, poor financial management/undercapitalisation, lack of a clear business plan, wrong team/partner choices, and inability to adapt to changing market conditions.",
          },
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Byju's rapid rise and later struggles",
            text: "Byju's grew rapidly on strong demand for edtech during the pandemic and aggressive marketing/acquisitions, but later faced serious difficulties from over-expansion, weak financial controls, and unsustainable cash burn — a widely studied case of entrepreneurial scaling outpacing financial discipline.",
          },
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Kiran Mazumdar-Shaw (Biocon)",
            text: "Kiran Mazumdar-Shaw founded Biocon with very limited capital in a male-dominated industry, and grew it into a major global biopharmaceutical company — often cited as a case study in women's entrepreneurship, perseverance, and building a knowledge-based venture in India.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Push Factors", definition: "Negative circumstances (like job loss) that push a person toward starting a venture." },
      { term: "Pull Factors", definition: "Positive opportunities that attract a person toward starting a venture." },
      { term: "Social Entrepreneur", definition: "An entrepreneur whose venture primarily aims to solve a social problem." },
    ],
    examQuestions: [
      "Define entrepreneurship. Discuss the factors affecting it. (Medium)",
      "Explain the characteristics and skills of a successful entrepreneur. (Long)",
      "Differentiate between an entrepreneur and a manager. (Short)",
      "Discuss social, rural, and women entrepreneurship with examples. (Medium)",
      "Explain the entrepreneurial decision process. (Medium)",
      "Discuss the common causes of entrepreneurial failure. (Medium)",
    ],
  },
  {
    unitNumber: 3,
    title: "Entrepreneurial Eco-System in India & Finance",
    hours: 5,
    headings: [
      {
        id: "msme-ecosystem",
        title: "1. Overview of MSME & Government Support for SMEs",
        icon: "Building2",
        blocks: [
          {
            kind: "paragraph",
            text: "MSME (Micro, Small & Medium Enterprises) are classified in India based on investment in plant/machinery/equipment and annual turnover, and form the backbone of India's entrepreneurial ecosystem, contributing significantly to employment and GDP.",
          },
          {
            kind: "bullets",
            items: [
              "Role of Central and State Government in supporting SMEs: subsidies, fiscal and tax concessions, export-oriented incentives, and easier compliance norms.",
              "Zero Effect Zero Defect (ZED): a government scheme encouraging MSMEs to manufacture products with 'zero defect' quality and 'zero effect' on the environment.",
              "Lean Manufacturing: a production philosophy focused on minimising waste (of time, material, effort) while maximising value for the customer — widely promoted for MSME competitiveness.",
              "Startup India, Stand Up India, Make in India: flagship government initiatives providing funding support, tax benefits, easier compliance, and promotional support to encourage new ventures and domestic manufacturing.",
            ],
          },
        ],
      },
      {
        id: "entrepreneurial-finance",
        title: "2. Entrepreneurial Finance",
        icon: "Wallet",
        blocks: [
          {
            kind: "paragraph",
            text: "Estimating financial requirements is one of the first practical steps for a new venture — covering fixed capital (assets, equipment) and working capital (day-to-day operating expenses) needs.",
          },
          {
            kind: "table",
            headers: ["Source of Finance", "Description"],
            rows: [
              ["Banks & Financial Institutions", "Traditional term loans and working capital finance"],
              ["Bootstrapping", "Self-funding the venture using personal savings and revenue, minimising external funding early on"],
              ["Crowdfunding", "Raising small amounts of money from a large number of people, typically via an online platform"],
              ["Angel Investment", "Funding from wealthy individuals (angel investors) in exchange for equity, typically at a very early stage"],
              ["Venture Capital (VC)", "Funding from professional investment firms, typically at a later/growth stage, in exchange for equity"],
              ["IPO (Initial Public Offering)", "Raising capital by offering company shares to the public for the first time, usually once the company has matured significantly"],
            ],
          },
        ],
      },
      {
        id: "support-agencies",
        title: "3. Role of Agencies Assisting Entrepreneurship",
        icon: "HandHelping",
        blocks: [
          {
            kind: "table",
            headers: ["Agency", "Role"],
            rows: [
              ["DICs (District Industries Centres)", "Provide support and services to small/village industries at the district level"],
              ["SSIs (Small Scale Industries) support bodies", "Promote and assist small-scale industrial units"],
              ["NSIC (National Small Industries Corporation)", "Supports MSMEs through financing, technology, and marketing assistance"],
              ["NISBUD", "National Institute for Entrepreneurship and Small Business Development — trains and develops entrepreneurs"],
              ["EDII (Entrepreneurship Development Institute of India)", "A premier national institute for entrepreneurship training, research, and education"],
            ],
          },
          {
            kind: "paragraph",
            text: "New government initiatives track and encourage entrepreneurship through rankings: the State Startup Ranking by DPIIT (Department for Promotion of Industry and Internal Trade) and the State Innovation Ranking by NITI Aayog's India Innovation Index — both encourage states to compete in building better entrepreneurial ecosystems.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "MSME", definition: "Micro, Small & Medium Enterprises — classified by investment and turnover, forming a key part of India's economy." },
      { term: "Bootstrapping", definition: "Self-funding a venture using personal savings and revenue rather than external investment." },
      { term: "EDII", definition: "Entrepreneurship Development Institute of India — a premier national institute for entrepreneurship training." },
      { term: "India Innovation Index", definition: "NITI Aayog's ranking of Indian states on their innovation ecosystem." },
    ],
    examQuestions: [
      "Discuss the role of the government in promoting MSMEs in India. (Long)",
      "Explain Zero Effect Zero Defect and Lean Manufacturing. (Medium)",
      "Discuss Startup India, Stand Up India, and Make in India initiatives. (Medium)",
      "Explain the various sources of entrepreneurial finance. (Long)",
      "Discuss the role of DICs, NSIC, and EDII in supporting entrepreneurship. (Medium)",
      "What are the State Startup Ranking and India Innovation Index? (Short)",
    ],
  },
  {
    unitNumber: 4,
    title: "From Idea to Opportunity & Developing a Business Plan",
    hours: 6,
    headings: [
      {
        id: "idea-to-opportunity",
        title: "1. From Idea to Opportunity",
        icon: "Sparkles",
        blocks: [
          {
            kind: "paragraph",
            text: "Not every idea is a viable business opportunity — an opportunity is an idea that is also desirable (customers want it), feasible (it can actually be built/delivered), and viable (it can make money).",
          },
          { kind: "diagram", diagramId: "entrepreneurial-process", caption: "Fig 4.1 — From idea to a sustainable venture" },
          {
            kind: "bullets",
            items: [
              "Sources and methods of idea generation: personal experience/pain points, brainstorming, market gaps, technology shifts, and observing trends in other industries/countries.",
              "Identification and classification of ideas: separating ideas by market size, resource requirements, and strategic fit before choosing which to pursue.",
              "Individual creativity: idea-to-opportunity conversion also depends heavily on the individual founder's ability to see a genuine unmet need where others just see a familiar situation.",
            ],
          },
          {
            kind: "paragraph",
            text: "The Process of New Venture creation and its challenges: challenges typically include raising initial capital, building a founding team, validating the idea with real customers, and navigating regulatory/licensing requirements — all under conditions of high uncertainty.",
          },
        ],
      },
      {
        id: "business-plan",
        title: "2. Developing a Business Plan",
        icon: "FileText",
        blocks: [
          {
            kind: "paragraph",
            text: "Business Planning Process: a business plan is a formal written document outlining the venture's goals, strategy, and how it will be executed — used both to guide the founding team and to raise external funding.",
          },
          {
            kind: "table",
            headers: ["Component", "What it Covers"],
            rows: [
              ["Executive Summary", "A concise overview of the entire plan"],
              ["Market Plan", "Target customers, market size, competitor analysis, marketing strategy"],
              ["Financial Plan", "Startup costs, revenue projections, break-even analysis, funding requirements"],
              ["Operational Plan", "Day-to-day processes, location, equipment, supply chain, staffing"],
            ],
          },
          {
            kind: "paragraph",
            text: "Feasibility Analysis is conducted across several dimensions before committing fully to a plan:",
          },
          {
            kind: "bullets",
            items: [
              "Economic feasibility: will the venture be financially viable and profitable?",
              "Financial feasibility: can the required funding realistically be raised?",
              "Market feasibility: is there genuine, sufficient customer demand?",
              "Technological feasibility: can the product/service actually be built with available technology and resources?",
            ],
          },
          {
            kind: "paragraph",
            text: "Launching a new venture involves choosing a business model, product/service launch strategy, and go-to-market plan; Growth and Sustainability then require the venture to scale operations, maintain financial discipline, and continue innovating to avoid stagnation or decline (echoing the Product Life Cycle from Marketing Management).",
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
            title: "Case study — Zerodha's lean, bootstrapped launch",
            text: "Zerodha, India's largest stockbroker by client base, was built without external venture capital funding — the founders bootstrapped the company, kept operations lean (a low-cost, technology-driven discount brokerage model), and grew profitably by directly solving a clear, validated market pain point (expensive traditional brokerage).",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Opportunity", definition: "An idea that is desirable, feasible, and financially viable — not every idea qualifies." },
      { term: "Feasibility Analysis", definition: "Assessing a venture idea across economic, financial, market, and technological dimensions." },
      { term: "Business Plan", definition: "A formal document outlining a venture's goals, strategy, and execution plan." },
    ],
    examQuestions: [
      "Explain the sources and methods of idea generation for entrepreneurs. (Medium)",
      "What separates a mere idea from a genuine business opportunity? (Short)",
      "Discuss the challenges in the process of new venture creation. (Medium)",
      "Explain the components of a business plan. (Long)",
      "Discuss the different aspects of feasibility analysis. (Long)",
      "What factors determine the growth and sustainability of a new venture? (Medium)",
    ],
  },
];
