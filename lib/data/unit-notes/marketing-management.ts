import { UnitNote } from "@/types";

// Detailed, in-app notes for Marketing Management (BMB105) — AKTU MBA Sem 1.
export const marketingManagementUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Introduction to Marketing & Consumer Behaviour",
    hours: 6,
    headings: [
      {
        id: "nature-scope",
        title: "1. Nature and Scope of Marketing",
        icon: "Megaphone",
        blocks: [
          {
            kind: "paragraph",
            text: "Marketing is the process of creating, communicating, delivering, and exchanging value with customers, partners, and society at large — it's much broader than just \"advertising\" or \"selling.\"",
          },
          {
            kind: "table",
            headers: ["Marketing Orientation", "Core Belief"],
            rows: [
              ["Production Concept", "Consumers prefer products that are widely available and low-cost — focus on production efficiency"],
              ["Product Concept", "Consumers prefer the highest quality/features — focus on continuous product improvement"],
              ["Selling Concept", "Consumers won't buy enough unless the firm undertakes aggressive selling/promotion"],
              ["Marketing Concept", "Focus on identifying and satisfying customer needs better than competitors"],
              ["Societal Marketing Concept", "Satisfy customer needs while also preserving long-term societal/environmental well-being"],
            ],
          },
          {
            kind: "paragraph",
            text: "Core concepts: Need (a basic human requirement — food, safety), Want (a need shaped by culture/personality — wanting a burger specifically), and Demand (a want backed by the ability and willingness to pay).",
          },
          {
            kind: "paragraph",
            text: "The Marketing Mix (the classic 4 Ps) is the set of controllable tools a firm blends to get the response it wants from its target market:",
          },
          { kind: "diagram", diagramId: "marketing-mix", caption: "Fig 1.1 — The Marketing Mix (4 Ps)" },
          {
            kind: "paragraph",
            text: "Customer value is the difference between what a customer gains from a product (benefits) and what they give up to get it (price, time, effort). The value delivery process involves choosing the value (via STP — Unit 2), providing the value (product/service/price decisions), and communicating the value (promotion).",
          },
        ],
      },
      {
        id: "consumer-behaviour",
        title: "2. Understanding Consumer Behaviour",
        icon: "ShoppingCart",
        blocks: [
          {
            kind: "paragraph",
            text: "Consumer behaviour studies how individuals select, buy, use, and dispose of products to satisfy their needs.",
          },
          {
            kind: "bullets",
            items: [
              "Buying motives: rational motives (price, quality, durability) and emotional motives (status, pride, fear, love).",
              "Factors influencing buying behaviour: cultural (culture, sub-culture, social class), social (family, reference groups, roles/status), personal (age, occupation, lifestyle, personality), and psychological (motivation, perception, learning, beliefs/attitudes).",
              "Buying habits: routine (habitual, low-involvement — e.g., buying the same toothpaste) vs. considered/complex buying (high-involvement, expensive, infrequent — e.g., buying a car).",
            ],
          },
          {
            kind: "paragraph",
            text: "The consumer buying decision process describes the stages a buyer goes through before and after a purchase:",
          },
          { kind: "diagram", diagramId: "consumer-buying-process", caption: "Fig 1.2 — The Consumer Buying Decision Process" },
          {
            kind: "paragraph",
            text: "Types of buying decisions: Complex buying behaviour (high involvement, significant brand differences — e.g., a laptop), Dissonance-reducing buying behaviour (high involvement, few differences between brands — e.g., carpets), Habitual buying behaviour (low involvement, few differences — e.g., salt), and Variety-seeking buying behaviour (low involvement, significant differences — e.g., trying different snack brands for variety).",
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
            title: "Case study — Patanjali's societal marketing positioning",
            text: "Patanjali built its marketing around the Societal Marketing Concept — positioning itself around \"swadeshi\" (national pride) and \"natural/Ayurvedic\" health benefits, appealing to both individual consumer needs and a broader cultural/societal sentiment, not just product features.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Marketing Mix (4 Ps)", definition: "Product, Price, Place, and Promotion — the controllable tools a firm blends to reach its target market." },
      { term: "Need vs. Want vs. Demand", definition: "A basic requirement (need), shaped by culture into a specific want, backed by ability to pay (demand)." },
      { term: "Complex Buying Behaviour", definition: "High-involvement purchase decisions where significant differences exist between brands." },
    ],
    examQuestions: [
      "Discuss the different marketing management orientations/philosophies. (Long)",
      "Explain the marketing mix (4 Ps) with examples. (Medium)",
      "Differentiate between need, want, and demand. (Short)",
      "Discuss the factors influencing consumer buying behaviour. (Long)",
      "Explain the consumer buying decision process with a diagram. (Long)",
      "Discuss the different types of buying decisions with examples. (Medium)",
    ],
  },
  {
    unitNumber: 2,
    title: "Market Segmentation, Targeting, Positioning & Branding",
    hours: 8,
    headings: [
      {
        id: "stp",
        title: "1. Segmentation, Targeting and Positioning (STP)",
        icon: "Crosshair",
        blocks: [
          {
            kind: "paragraph",
            text: "No firm can serve every customer in a mass market equally well. STP is the process of dividing the market, choosing which part to serve, and deciding how to be perceived there.",
          },
          { kind: "diagram", diagramId: "stp-process", caption: "Fig 2.1 — The STP process" },
          {
            kind: "table",
            headers: ["Basis for Segmentation", "Example Variables"],
            rows: [
              ["Geographic", "Region, city size, climate"],
              ["Demographic", "Age, gender, income, occupation, family size"],
              ["Psychographic", "Lifestyle, personality, values"],
              ["Behavioural", "Usage rate, brand loyalty, benefits sought, occasion"],
            ],
          },
          {
            kind: "paragraph",
            text: "Targeting: after evaluating segments (on size, growth, profitability, and fit with company objectives), a firm chooses a targeting strategy — undifferentiated (one offer for the whole market), differentiated (separate offers for several segments), concentrated/niche (focus on one segment), or micromarketing (tailored to individuals/local markets).",
          },
          {
            kind: "paragraph",
            text: "Positioning: designing the company's offering so it occupies a clear, distinctive, and desirable place in the target customer's mind, relative to competing products — usually achieved through product differentiation (on features, quality, design, or service).",
          },
        ],
      },
      {
        id: "branding",
        title: "2. Branding",
        icon: "Award",
        blocks: [
          {
            kind: "paragraph",
            text: "A brand is a name, term, design, or symbol that identifies a seller's product and differentiates it from competitors.",
          },
          {
            kind: "bullets",
            items: [
              "Types of brands: manufacturer brands, private-label (store) brands, individual brands (each product has its own name), and family/umbrella brands (all products share the company's name).",
              "Brand equity: the added value a brand name gives to a product — strong brand equity lets a firm charge premium prices, enjoy greater customer loyalty, and launch new products more easily (brand extension).",
              "Branding as positioning: a brand's identity (logo, tagline, personality) is a core tool used to establish and reinforce the product's intended market position.",
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
            title: "Case study — Maruti Suzuki's multi-brand positioning",
            text: "Maruti Suzuki positions the Alto as an affordable, practical first car (targeting price-sensitive, first-time buyers) while positioning the Nexa-channel cars (like the Baleno) as premium, style-focused — a clear example of differentiated targeting and distinct positioning under one parent company.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "STP", definition: "Segmentation, Targeting, Positioning — the process of dividing, choosing, and positioning in a market." },
      { term: "Niche Marketing", definition: "A concentrated targeting strategy focused on serving one specific market segment well." },
      { term: "Brand Equity", definition: "The added value a brand name gives to a product beyond its functional benefits." },
    ],
    examQuestions: [
      "Explain the bases for segmenting a consumer market. (Long)",
      "Discuss the various target market strategies. (Medium)",
      "What is positioning? Explain product differentiation strategies. (Medium)",
      "Explain the concept of branding and brand equity. (Medium)",
      "Discuss the different types of brands with examples. (Short)",
    ],
  },
  {
    unitNumber: 3,
    title: "Product and Pricing Decisions",
    hours: 8,
    headings: [
      {
        id: "product-decisions",
        title: "1. Product Decisions",
        icon: "Package",
        blocks: [
          {
            kind: "paragraph",
            text: "The Product Hierarchy ranges from a need family (broad need) down through product family, product class, product line, product type, brand, down to an individual item — useful for understanding how a specific product fits into a company's wider portfolio.",
          },
          {
            kind: "paragraph",
            text: "New Product Development (NPD) typically follows stages: idea generation → screening → concept development/testing → business analysis → product development → test marketing → commercialisation.",
          },
          {
            kind: "paragraph",
            text: "The Diffusion of Innovation process describes how a new product spreads through the market over time, across adopter categories: Innovators → Early Adopters → Early Majority → Late Majority → Laggards.",
          },
          { kind: "diagram", diagramId: "product-life-cycle", caption: "Fig 3.1 — The Product Life Cycle (PLC)" },
          {
            kind: "table",
            headers: ["PLC Stage", "Typical Marketing Focus"],
            rows: [
              ["Introduction", "Build product awareness, encourage trial; often high promotional cost, low profit"],
              ["Growth", "Build brand preference, expand distribution; sales and profit rise rapidly"],
              ["Maturity", "Defend market share, differentiate; sales peak, competition is intense"],
              ["Decline", "Harvest or discontinue; sales and profit fall"],
            ],
          },
          {
            kind: "paragraph",
            text: "Product mix strategies include: line extension (adding new items within an existing product line), line stretching (adding items at a different price/quality tier), and product mix pricing (setting prices across an entire related set of products).",
          },
          {
            kind: "paragraph",
            text: "Packaging and Labeling: packaging serves as a marketing tool (attracting attention, communicating brand identity) beyond its basic protective function; a good package should meet legal labeling requirements (ingredients, manufacturing/expiry date, MRP) while also standing out on the shelf.",
          },
        ],
      },
      {
        id: "pricing-decisions",
        title: "2. Pricing Decisions",
        icon: "IndianRupee",
        blocks: [
          {
            kind: "table",
            headers: ["Pricing Approach", "Basis"],
            rows: [
              ["Cost-Based Pricing", "Price = cost of production + a desired profit markup"],
              ["Value-Based Pricing", "Price is set based on the perceived value to the customer, not just cost"],
              ["Market-Based Pricing", "Price is set based on prevailing market rates/demand conditions"],
              ["Competitor-Based Pricing", "Price is set relative to what competitors charge for similar products"],
            ],
          },
          {
            kind: "paragraph",
            text: "New product pricing strategies:",
          },
          {
            kind: "bullets",
            items: [
              "Price Skimming: set a high initial price to \"skim\" maximum revenue from customers most willing to pay, then gradually lower it — common for new technology products (e.g., a new smartphone's launch price).",
              "Penetration Pricing: set a low initial price to quickly gain market share and discourage competitors, then potentially raise prices later — used by Reliance Jio when entering the Indian telecom market.",
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
            title: "Case study — Apple's price skimming strategy",
            text: "Apple consistently uses price skimming — launching new iPhones at a premium price for early adopters, then gradually reducing prices on older models as newer ones launch, maximising total revenue captured across different customer segments over the product's life cycle.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Product Life Cycle (PLC)", definition: "The stages a product passes through: Introduction, Growth, Maturity, Decline." },
      { term: "Diffusion of Innovation", definition: "The process by which a new product spreads through adopter categories over time." },
      { term: "Price Skimming", definition: "Setting a high initial price and gradually lowering it over time." },
      { term: "Penetration Pricing", definition: "Setting a low initial price to quickly gain market share." },
    ],
    examQuestions: [
      "Explain the product hierarchy and new product development process. (Long)",
      "Explain the Product Life Cycle with a diagram and marketing strategy at each stage. (Long)",
      "Discuss the diffusion of innovation process and adopter categories. (Medium)",
      "Explain packaging and labeling as marketing tools. (Short)",
      "Differentiate between price skimming and penetration pricing with examples. (Medium)",
      "Discuss the different pricing strategies used by firms. (Medium)",
    ],
  },
  {
    unitNumber: 4,
    title: "Place and Promotion Decisions",
    hours: 8,
    headings: [
      {
        id: "place-decision",
        title: "1. Place (Distribution Channel) Decisions",
        icon: "Truck",
        blocks: [
          {
            kind: "paragraph",
            text: "A distribution channel is the set of interdependent organisations involved in making a product available for use or consumption.",
          },
          { kind: "diagram", diagramId: "distribution-channel", caption: "Fig 4.1 — A typical (indirect) distribution channel" },
          {
            kind: "bullets",
            items: [
              "Channel alternatives: direct (manufacturer to consumer, e.g., a D2C website) vs. indirect (through wholesalers/retailers).",
              "Factors affecting channel choice: product nature (perishable goods need shorter channels), market characteristics, cost, and the level of control desired.",
              "Channel conflict: disagreement between channel members (e.g., a manufacturer's online D2C store competing with its own retail partners).",
              "Types of retailers: department stores, supermarkets, specialty stores, convenience stores, and e-commerce/online retailers.",
            ],
          },
        ],
      },
      {
        id: "advertising",
        title: "2. Advertising",
        icon: "Tv",
        blocks: [
          {
            kind: "paragraph",
            text: "Advertising objectives are typically to inform (about a new product), persuade (build preference over competitors), or remind (keep the brand top-of-mind).",
          },
          {
            kind: "paragraph",
            text: "The AIDA model describes the stages an advertisement should take a prospective customer through:",
          },
          { kind: "diagram", diagramId: "aida-model", caption: "Fig 4.2 — The AIDA Model" },
          {
            kind: "paragraph",
            text: "Public Relations (PR) is managing the organisation's reputation and relationships with the public through non-paid media — press releases, events, and sponsorships — distinct from paid advertising.",
          },
        ],
      },
      {
        id: "sales-promotion-personal-selling",
        title: "3. Sales Promotion, Personal Selling & Direct Marketing",
        icon: "Percent",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Sales Promotion: short-term incentives to encourage purchase — kinds include consumer promotions (discounts, coupons, contests) and trade promotions (dealer incentives); objectives are usually to boost short-term sales or clear inventory.",
              "Personal Selling: direct, face-to-face communication between a salesperson and a prospective buyer — features include personalisation and immediate feedback; the process typically follows prospecting → approach → presentation → handling objections → closing → follow-up.",
              "Direct Marketing: communicating directly with carefully targeted individual consumers to get an immediate response — forms include direct mail, telemarketing, email marketing, and catalogue marketing; benefits include measurability and personalisation.",
            ],
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
            title: "Case study — Amul's advertising strategy",
            text: "Amul's iconic topical hoardings (using current events with witty, timely commentary) have run for decades as a low-cost yet highly effective advertising strategy, keeping the brand consistently in public conversation without heavy TV/digital ad spend — a strong example of the \"remind\" objective of advertising done exceptionally well.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "AIDA Model", definition: "Attention, Interest, Desire, Action — the stages an advertisement should guide a prospect through." },
      { term: "Channel Conflict", definition: "Disagreement between members of a distribution channel over roles, territory, or pricing." },
      { term: "Direct Marketing", definition: "Communicating directly with targeted individual consumers to generate an immediate response." },
    ],
    examQuestions: [
      "Explain the factors affecting choice of a distribution channel. (Medium)",
      "Discuss channel conflict and types of retailers. (Medium)",
      "Explain the AIDA model of advertising. (Medium)",
      "Discuss the objectives, types, and functions of public relations. (Short)",
      "Explain sales promotion tools with examples. (Medium)",
      "Explain the personal selling process. (Long)",
      "Discuss direct marketing forms and their benefits. (Short)",
    ],
  },
  {
    unitNumber: 5,
    title: "CRM and Global Marketing",
    hours: 6,
    headings: [
      {
        id: "crm",
        title: "1. Customer Relationship Management (CRM)",
        icon: "HeartHandshake",
        blocks: [
          {
            kind: "paragraph",
            text: "CRM is the process of managing detailed information about individual customers and carefully managing all customer \"touchpoints\" to maximise customer loyalty over the long term.",
          },
          {
            kind: "paragraph",
            text: "Relationship Marketing (the broader philosophy of building long-term, mutually beneficial relationships with customers) vs. Relationship Management (the practical systems/processes, often software-driven, used to execute that philosophy).",
          },
          {
            kind: "bullets",
            items: [
              "Types of relationship marketing: transactional (basic), reactive (encourages complaints), accountable (follows up post-sale), proactive (contacts customer with improvement suggestions), and partnership (works continuously with the customer).",
              "Significance of CRM: increases customer retention and lifetime value, reduces the cost of acquiring new customers (which is generally higher than retaining existing ones), and generates valuable customer data/insights.",
            ],
          },
        ],
      },
      {
        id: "global-marketing",
        title: "2. Global Marketing",
        icon: "Globe",
        blocks: [
          {
            kind: "paragraph",
            text: "Global marketing extends marketing activities across national borders, requiring firms to navigate the Global Marketing Environment — differing economic conditions, political-legal systems, and cultural norms across countries.",
          },
          {
            kind: "table",
            headers: ["Entry Strategy", "Description"],
            rows: [
              ["Exporting", "Selling products made in the home country directly into a foreign market — lowest risk, lowest control"],
              ["Licensing/Franchising", "Allowing a foreign firm to use the company's brand/process for a fee"],
              ["Joint Venture", "Partnering with a local firm to share risk, investment, and market knowledge"],
              ["Direct/Wholly-Owned Investment", "Setting up wholly-owned operations in the foreign country — highest risk, highest control"],
            ],
          },
          {
            kind: "paragraph",
            text: "The Global marketing mix (the \"Global P's\") extends the standard 4 Ps with considerations like Politics and Public opinion, which significantly affect how a firm must adapt its offering in each foreign market.",
          },
          {
            kind: "paragraph",
            text: "Recent trends and innovation in marketing:",
          },
          {
            kind: "bullets",
            items: [
              "Green Marketing: developing and promoting products based on their environmental benefits (sustainable sourcing, eco-friendly packaging), responding to rising consumer environmental consciousness.",
              "Agile Marketing: applying agile project-management principles (short cycles, rapid testing, continuous adjustment) to marketing campaigns, allowing faster response to market feedback and trends.",
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
            title: "Case study — McDonald's global adaptation strategy",
            text: "McDonald's uses a joint venture / licensing-heavy entry strategy globally, and adapts its menu significantly by country (e.g., the McAloo Tikki burger in India, catering to local vegetarian preferences and taste) — a textbook example of \"think global, act local\" in global marketing.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "CRM", definition: "Customer Relationship Management — managing customer information and touchpoints to maximise loyalty." },
      { term: "Joint Venture", definition: "A global market entry strategy where a firm partners with a local company to share risk and investment." },
      { term: "Green Marketing", definition: "Developing and promoting products based on their environmental benefits." },
    ],
    examQuestions: [
      "Explain CRM and its significance to a business. (Medium)",
      "Differentiate between relationship marketing and relationship management. (Short)",
      "Discuss the types of relationship marketing. (Medium)",
      "Explain the different global market entry strategies. (Long)",
      "Discuss recent trends in marketing: green marketing and agile marketing. (Medium)",
    ],
  },
];
