import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for International Business Management (BMB IB 01).
// Based on the supplied syllabus; explanations are expanded for university examination preparation.

export const internationalbusinessmanagementUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Introduction to International Business and Trade Theories",
    hours: 8,
    headings: [
      {
        id: "nature-scope", title: "1. Nature, Scope and Importance of International Business", icon: "Globe",
        blocks: [
          { kind: "paragraph", text: "International business is the study and management of commercial activities that cross national borders. It includes exporting and importing goods and services, international investment, licensing, franchising, contract manufacturing, international sourcing and the management of multinational enterprises. Compared with domestic business, the international environment introduces additional variables such as exchange rates, customs procedures, different legal systems, political risk and cultural distance." },
          { kind: "paragraph", text: "The scope is broader than foreign trade alone. A firm may internationalize through sales, procurement, production, research, finance or ownership. International business is important because it can widen markets, provide access to resources and capabilities, support economies of scale, expose firms to new competitors and enable knowledge transfer." },
          { kind: "table", headers: ["Dimension", "Examples", "Managerial issue"], rows: [["Trade", "Exports, imports, cross-border services", "Market access, price and logistics"], ["Investment", "FDI, subsidiaries, joint ventures", "Capital, control and risk"], ["Contractual modes", "Licensing, franchising", "Rights, monitoring and adaptation"], ["Operations", "Global sourcing, production, distribution", "Coordination across countries"]] },
          { kind: "callout", tone: "info", title: "Exam method", text: "Start a long answer with a definition, then explain scope, internationalization drivers and importance. A short concluding paragraph should mention both opportunities and additional risks." },
        ],
      },
      {
        id: "frameworks", title: "2. ERPG and LPG Frameworks in International Business", icon: "Layers",
        blocks: [
          { kind: "paragraph", text: "The syllabus places ERPG and LPG frameworks in the context of international business analysis. A framework is useful because it forces the manager to examine a foreign market systematically rather than relying on a single indicator such as market size. In an exam answer, explain the dimensions of the framework and connect them to market-entry decisions." },
          { kind: "table", headers: ["Analytical question", "What should be examined?", "Business implication"], rows: [["External environment", "Political, economic, social, legal and technological conditions", "Feasibility and risk"], ["Market attractiveness", "Demand, growth, competition and customer segments", "Revenue potential"], ["Firm capability", "Finance, people, technology, brand and supply chain", "Ability to compete"], ["Entry configuration", "Export, licensing, alliance, JV, acquisition or subsidiary", "Control and commitment"]] },
          { kind: "paragraph", text: "The LPG framework refers to Liberalization, Privatization and Globalization. In India's economic context, it is associated with the broad reform direction that reduced several controls, increased the role of market mechanisms and deepened integration with the global economy. The framework helps students connect domestic economic reforms with changes in competition, investment and international trade." },
        ],
      },
      {
        id: "drivers", title: "3. Drivers of Internationalization", icon: "TrendingUp",
        blocks: [
          { kind: "paragraph", text: "Internationalization is driven by opportunity as well as competitive pressure. Market-seeking firms look for new customers; resource-seeking firms look for inputs; efficiency-seeking firms distribute activities across locations; and strategic-asset-seeking firms may seek technology, brands, distribution networks or specialized knowledge." },
          { kind: "bullets", items: ["Market drivers: foreign demand, changing customer needs and saturation of the home market.", "Cost drivers: economies of scale, factor-cost differences and global sourcing opportunities.", "Government drivers: trade agreements, investment rules, export support and regulatory changes.", "Competitive drivers: global competitors, international customers and pressure to match rivals' geographic presence.", "Technology drivers: digital commerce, communication systems, logistics technology and faster information flows."] },
          { kind: "callout", tone: "example", title: "Illustrative entry path", text: "A manufacturer may begin with indirect exporting, then use a local distributor, and later consider a joint venture if local service, regulatory knowledge or market commitment becomes strategically important." },
        ],
      },
      {
        id: "trade-theories", title: "4. Classical and Modern Trade Theories", icon: "Scale",
        blocks: [
          { kind: "paragraph", text: "Trade theories explain why countries exchange goods and services and how specialization can create gains. Adam Smith's absolute advantage focuses on producing more efficiently, while David Ricardo's comparative advantage focuses on opportunity cost. Comparative advantage therefore explains why trade may benefit both countries even when one country is more productive in both products." },
          { kind: "table", headers: ["Theory", "Core proposition", "Use in examination"], rows: [["Mercantilism", "Exports were historically viewed as a source of national wealth and imports were restricted", "Explains historical protectionism"], ["Absolute advantage", "Specialize where productivity is higher", "Links trade with efficiency"], ["Comparative advantage", "Specialize according to lower opportunity cost", "Explains mutually beneficial trade"], ["Heckscher–Ohlin", "Trade reflects relative factor endowments", "Links trade with labour, capital and resources"], ["Product life-cycle", "Production and trade patterns change as products mature", "Links innovation with international location"], ["New trade theory", "Scale economies and first-mover effects can shape trade", "Explains trade among similar economies"], ["Porter's Diamond", "National advantage emerges from interacting competitive determinants", "Explains clusters and industry competitiveness"]] },
          { kind: "diagram", diagramId: "ib01-trade-theories", caption: "Major trade theories arranged from productivity and opportunity-cost explanations to factor endowments, scale and national competitive advantage." },
        ],
      },
      {
        id: "factor-mobility", title: "5. Competitive Advantage and Factor Mobility", icon: "Network",
        blocks: [
          { kind: "paragraph", text: "International competitive advantage is not limited to low cost. Firms may compete through quality, technology, design, brand reputation, speed, service, reliability, distribution and innovation. Factor mobility matters because capital, skilled labour, knowledge and technology can move across borders to different degrees, changing where value-creating activities are located." },
          { kind: "bullets", items: ["Factor conditions influence the availability and quality of labour, capital, infrastructure and knowledge.", "Demand conditions can stimulate innovation when customers are sophisticated or demanding.", "Related and supporting industries create supplier depth, clusters and knowledge spillovers.", "Firm strategy, structure and rivalry can encourage productivity improvement.", "International mobility of capital and knowledge can change the geographic configuration of production."] },
          { kind: "callout", tone: "info", title: "Answer structure", text: "For any trade-theory question: name the theory, state its central proposition, explain its mechanism, give a business implication and mention a limitation if asked." },
        ],
      },
    ],
    keyTerms: [{"term": "International Business", "definition": "Business activities involving transactions, investment or operations across national borders."}, {"term": "FDI", "definition": "Investment establishing a lasting interest and meaningful influence in an enterprise in another economy."}, {"term": "Internationalization", "definition": "The process through which a firm expands the geographic scope of its activities."}, {"term": "Comparative Advantage", "definition": "Ability to produce at a lower opportunity cost than another producer."}, {"term": "Absolute Advantage", "definition": "Ability to produce a good or service more efficiently than another producer."}, {"term": "Heckscher–Ohlin Theory", "definition": "Trade theory linking comparative advantage to relative factor endowments."}, {"term": "Product Life-Cycle Theory", "definition": "View that production and trade locations can change as a product moves through stages."}, {"term": "Porter's Diamond", "definition": "Framework explaining national competitive advantage through interacting determinants."}],
    examQuestions: ["Define international business and explain its scope and importance. (Long)", "Explain the major drivers of internationalization. (Long)", "Differentiate domestic and international business. (Medium)", "Explain absolute advantage and comparative advantage. (Long)", "Discuss the Heckscher–Ohlin theory. (Long)", "Explain the product life-cycle perspective. (Medium)", "Write a note on Porter's Diamond. (Medium)", "Explain the role of ERPG and LPG frameworks in international business analysis. (Medium)", "Define FDI. (Short)", "State four drivers of internationalization. (Short)"],
  },
  {
    unitNumber: 2,
    title: "Trade Policy & Commercial Instruments",
    hours: 6,
    headings: [
      {
        id: "policy", title: "1. Trade Policy: Objectives and Instruments", icon: "FileText",
        blocks: [
          { kind: "paragraph", text: "Trade policy consists of government measures that influence imports, exports and cross-border commercial activity. Governments may use policy to protect domestic industries, raise revenue, support employment, address strategic concerns, respond to trade practices or negotiate market access. Every instrument creates distributional effects across producers, consumers, importers, exporters and government." },
          { kind: "table", headers: ["Instrument", "Meaning", "Primary effect"], rows: [["Tariff", "Duty imposed on imports", "Raises landed cost"], ["Quota", "Quantitative limit on imports", "Restricts import volume"], ["Subsidy", "Government support to producers/exporters", "Can lower effective cost"], ["Non-tariff measure", "Regulatory or administrative trade measure", "Can change market access/compliance cost"], ["Trade remedy", "Specified measure responding to import-related conditions under applicable rules", "Can change competitive conditions"]] },
          { kind: "callout", tone: "info", title: "Key distinction", text: "Tariffs work mainly through price; quotas work directly through quantity. Non-tariff measures are broader and may include licensing, technical or sanitary requirements." },
        ],
      },
      {
        id: "tariff-quota", title: "2. Tariffs, Quotas and Subsidies", icon: "Scale",
        blocks: [
          { kind: "paragraph", text: "Tariffs can be specific, ad valorem or compound. A specific tariff is a fixed amount per unit; an ad valorem tariff is calculated as a percentage of customs value; a compound tariff combines the two. A quota limits the quantity that can enter a market and may create quota rents when access is scarce." },
          { kind: "paragraph", text: "Subsidies can support production, investment or exports depending on their design. Their treatment under trade rules is instrument-specific; therefore, an exam answer should not assume that every subsidy is automatically prohibited. Managers should examine the applicable legal framework and the destination market." },
          { kind: "table", headers: ["Form", "Calculation logic", "Illustrative interpretation"], rows: [["Specific tariff", "Fixed amount × quantity", "Burden rises with volume"], ["Ad valorem tariff", "Rate × customs value", "Burden varies with value"], ["Quota", "Maximum permitted quantity", "Quantity is the binding constraint"], ["Subsidy", "Support reduces effective cost", "Competitive position may change"]] },
        ],
      },
      {
        id: "protectionism", title: "3. Protectionism and Economic Effects", icon: "IndianRupee",
        blocks: [
          { kind: "paragraph", text: "Protectionism refers to policies intended to shield domestic economic activity from foreign competition. A protected producer may gain market share, while consumers may face higher prices or fewer choices. Import-dependent downstream firms may face higher input costs, so the full economic effect must be analysed across the supply chain." },
          { kind: "paragraph", text: "Multiplier effects refer to secondary rounds of income and spending following an initial change. In trade policy, an initial tariff, subsidy or investment change may affect suppliers, wages, consumption and investment. The magnitude depends on the structure of the economy, leakages, import intensity and the response of firms and households." },
          { kind: "callout", tone: "example", title: "Stakeholder chain", text: "A tariff on an imported industrial input may benefit a domestic input producer but increase the cost base of a downstream manufacturer. The downstream firm's competitiveness depends on whether it can absorb or pass on the added cost." },
        ],
      },
      {
        id: "india-policy", title: "4. India's Foreign Trade Policy and Make in India", icon: "Landmark",
        blocks: [
          { kind: "paragraph", text: "India's foreign trade policy framework connects export promotion, trade facilitation, customs processes, market access and participation in global value chains. Make in India is relevant because international competitiveness also depends on domestic manufacturing capability, supplier ecosystems, investment and productivity." },
          { kind: "bullets", items: ["Export promotion aims to improve firms' access to overseas markets.", "Trade facilitation seeks to reduce unnecessary time, cost and procedural friction.", "Manufacturing initiatives can support domestic capacity and integration with global value chains.", "Sectoral requirements may differ because products face different standards, duties and market conditions.", "Trade policy must be read alongside customs, foreign-exchange, product-standard and destination-market requirements."] },
          { kind: "callout", tone: "info", title: "Current-policy caution", text: "Rates, notifications and scheme conditions can change. For an examination, distinguish the stable concept from a time-sensitive policy detail and quote the prescribed session's material where exact conditions are required." },
        ],
      },
      {
        id: "lpg-policy", title: "5. LPG Policy Framework and Trade Strategy", icon: "Globe",
        blocks: [
          { kind: "paragraph", text: "Liberalization, Privatization and Globalization describes a broad direction associated with India's post-1991 economic reforms. Liberalization reduced several restrictions and controls; privatization increased the role of private enterprise and market mechanisms; globalization deepened India's links with trade, investment, technology and international services." },
          { kind: "table", headers: ["Element", "Broad meaning", "International-business link"], rows: [["Liberalization", "Greater market flexibility and fewer unnecessary controls", "More competition and market access"], ["Privatization", "Greater role for private enterprise", "Changes ownership and competitive structure"], ["Globalization", "Deeper integration with world markets", "Expands trade, investment and technology linkages"]] },
          { kind: "diagram", diagramId: "ib01-trade-policy-instruments", caption: "Trade-policy instrument map showing how tariffs, quotas, subsidies and non-tariff measures influence market access and business costs." },
        ],
      },
    ],
    keyTerms: [{"term": "Trade Policy", "definition": "Government policy governing or influencing international trade."}, {"term": "Tariff", "definition": "Customs duty imposed on an imported good."}, {"term": "Quota", "definition": "Quantitative restriction on the amount of a good that may be imported."}, {"term": "Subsidy", "definition": "Government support that can reduce a producer's effective cost."}, {"term": "Protectionism", "definition": "Use of policy to shield domestic activities from foreign competition."}, {"term": "Non-Tariff Measure", "definition": "A trade-affecting measure other than a conventional tariff."}, {"term": "Trade Facilitation", "definition": "Measures that simplify and speed legitimate cross-border trade."}, {"term": "LPG", "definition": "Liberalization, Privatization and Globalization, a broad framework associated with India's economic reforms."}],
    examQuestions: ["Explain the objectives and instruments of trade policy. (Long)", "Differentiate tariff, quota and subsidy. (Long)", "Explain protectionism and its effects on stakeholders. (Long)", "What are non-tariff measures? (Medium)", "Explain the significance of India's Foreign Trade Policy for exporters. (Medium)", "Discuss the relationship between Make in India and international business. (Medium)", "Explain the LPG policy framework. (Long)", "Differentiate specific and ad valorem tariffs. (Short)", "What is trade facilitation? (Short)", "Why do governments use quotas? (Short)"],
  },
  {
    unitNumber: 3,
    title: "Business Environment & Political Economy",
    hours: 10,
    headings: [
      {
        id: "pestel", title: "1. PESTEL Analysis", icon: "Compass",
        blocks: [
          { kind: "paragraph", text: "PESTEL analyses Political, Economic, Social, Technological, Environmental and Legal forces. For international business, it is useful for country screening because a factor that is favourable in one country may create risk in another. PESTEL should be treated as an evidence-based scan rather than a list of assumptions." },
          { kind: "table", headers: ["Factor", "Key questions", "Typical evidence"], rows: [["Political", "How stable and predictable is policy?", "Government stability, trade relations, policy direction"], ["Economic", "What affects demand and cost?", "Growth, inflation, income, rates, exchange rates"], ["Social", "How do people live and consume?", "Demographics, language, values, lifestyles"], ["Technological", "What technology conditions exist?", "Digital infrastructure, adoption, innovation"], ["Environmental", "What ecological constraints matter?", "Climate, resource use, environmental standards"], ["Legal", "What rules govern the business?", "Company, labour, product, competition and data rules"]] },
          { kind: "diagram", diagramId: "ib01-pestel", caption: "PESTEL framework for screening a foreign market before an entry decision." },
        ],
      },
      {
        id: "culture", title: "2. Cultural, Language and Communication Factors", icon: "BookOpen",
        blocks: [
          { kind: "paragraph", text: "Culture influences consumer behaviour, workplace expectations, negotiation, leadership, trust and communication. Language is only one visible element; deeper dimensions include attitudes to hierarchy, individualism and collectivism, time, relationships, status and uncertainty. Religion can affect calendars, food, finance practices, dress and consumption." },
          { kind: "paragraph", text: "Managers should use cultural frameworks as starting hypotheses, not stereotypes. Effective international managers verify local expectations through market research, local employees, partners and customer feedback. Communication may be direct or indirect, formal or informal, and high-context or low-context depending on the setting." },
          { kind: "callout", tone: "example", title: "Negotiation situation", text: "A firm entering a relationship-oriented market may need more time to establish trust before discussing price. The managerial lesson is to research relationship norms and adapt communication while keeping commercial and ethical standards clear." },
        ],
      },
      {
        id: "political-economy", title: "3. Political Economy and Country Risk", icon: "AlertTriangle",
        blocks: [
          { kind: "paragraph", text: "Political economy studies the interaction of political institutions and economic activity. Property rights, regulation, taxation, trade policy, labour institutions, financial systems and competition policy shape the operating environment. Predictability matters because firms commit capital over time." },
          { kind: "paragraph", text: "Country risk is the possibility that country-level political, economic, legal or social developments will adversely affect a business operation or investment. Political risk can include abrupt policy change, restrictions on capital movement or severe instability. Economic risk can include inflation, currency instability or downturns." },
          { kind: "table", headers: ["Risk", "Meaning", "Typical response"], rows: [["Political", "Risk from political/government developments", "Scenario planning and local intelligence"], ["Economic", "Risk from macroeconomic instability", "Stress testing and financial planning"], ["Legal/regulatory", "Risk from rules or compliance failure", "Legal review and controls"], ["Social/security", "Risk from unrest or security events", "Business continuity and contingency planning"]] },
        ],
      },
      {
        id: "legal", title: "4. Legal Frameworks and Multi-Jurisdictional Compliance", icon: "FileCheck",
        blocks: [
          { kind: "paragraph", text: "International firms may be subject to home-country law, host-country law, contracts and applicable international rules. A transaction can raise questions about jurisdiction, permits, product standards, taxation, employment, intellectual property, data, payment restrictions and dispute resolution." },
          { kind: "bullets", items: ["Host-country law governs many operational activities within the foreign market.", "Contracts allocate responsibilities such as delivery, payment, warranties and dispute resolution.", "International agreements may establish common rules or commitments between participating economies.", "Compliance requires procedures, documentation, internal controls and evidence of implementation.", "Transaction-specific legal issues should be reviewed with qualified professionals."] },
          { kind: "callout", tone: "info", title: "Exam phrase", text: "Use the term 'multi-jurisdictional compliance' to explain why international operations require coordination of multiple legal and regulatory systems." },
        ],
      },
      {
        id: "institutions", title: "5. Institutions and International Market Entry", icon: "Network",
        blocks: [
          { kind: "paragraph", text: "Institutions are the formal and informal rules that structure economic activity. Formal institutions include laws, courts, regulators and customs systems; informal institutions include business norms, trust and accepted practices. Institutional quality affects transaction costs, enforcement and the predictability of business decisions." },
          { kind: "bullets", items: ["Evaluate market size together with infrastructure, logistics, finance and institutional conditions.", "Local partners can provide knowledge but create governance and coordination requirements.", "Entry mode should match the firm's desired control, resource commitment and risk exposure.", "Country analysis must be updated because political and economic conditions change.", "Good country screening combines quantitative indicators with qualitative local evidence."] },
        ],
      },
    ],
    keyTerms: [{"term": "PESTEL", "definition": "Framework covering Political, Economic, Social, Technological, Environmental and Legal factors."}, {"term": "Political Economy", "definition": "Study of interaction between political institutions and economic activity."}, {"term": "Country Risk", "definition": "Potential adverse effect of country-level political, economic, legal or social developments."}, {"term": "Institution", "definition": "Formal or informal rule structuring economic behaviour."}, {"term": "Cultural Distance", "definition": "Difference between countries in values, norms and behavioural expectations."}, {"term": "High-Context Communication", "definition": "Communication in which context and relationships carry substantial meaning."}, {"term": "Sovereign Risk", "definition": "Risk associated with actions or conditions of a sovereign state."}, {"term": "Compliance", "definition": "Following applicable laws, regulations, standards, contracts and internal controls."}],
    examQuestions: ["Explain PESTEL analysis with an international business example. (Long)", "Discuss the role of culture in international business. (Long)", "Explain language, religion and communication style as international business factors. (Medium)", "What is country risk? Explain its components. (Long)", "Differentiate political and economic risk. (Medium)", "Explain the role of institutions in international business. (Medium)", "Why is legal compliance complex in international business? (Long)", "Write a note on cultural distance. (Short)", "Define political economy. (Short)", "What is multi-jurisdictional compliance? (Short)"],
  },
  {
    unitNumber: 4,
    title: "International Marketing",
    hours: 8,
    headings: [
      {
        id: "marketing", title: "1. Meaning, Scope and Importance of International Marketing", icon: "Globe",
        blocks: [
          { kind: "paragraph", text: "International marketing is the planning and execution of product, price, promotion and distribution activities across national markets. The central challenge is balancing global consistency with local responsiveness. A brand may retain a common identity while adapting packaging, language, pricing, promotion or distribution to local requirements." },
          { kind: "table", headers: ["Decision", "Standardization question", "Adaptation question"], rows: [["Product", "Can the same product meet needs?", "What features, packaging or compliance changes are needed?"], ["Price", "Can a common pricing logic work?", "How do income, taxes and competition affect local price?"], ["Promotion", "Can the core message travel?", "What language, media and cultural cues require change?"], ["Place", "Can the channel model be reused?", "What local distributors and logistics systems exist?"]] },
          { kind: "diagram", diagramId: "ib01-international-marketing-mix", caption: "International marketing mix showing the balance between global consistency and local adaptation." },
        ],
      },
      {
        id: "domestic-international", title: "2. Domestic versus International Marketing", icon: "ArrowLeftRight",
        blocks: [
          { kind: "paragraph", text: "Domestic marketing operates mainly within one national institutional and cultural setting. International marketing adds exchange-rate exposure, customs, multiple legal systems, cultural differences, international logistics and greater variation in competition." },
          { kind: "table", headers: ["Basis", "Domestic", "International"], rows: [["Environment", "Primarily one national setting", "Multiple national settings"], ["Currency", "Usually one currency", "Potentially multiple currencies"], ["Culture", "Relatively familiar", "Greater variation"], ["Regulation", "One main legal framework", "Multiple systems"], ["Logistics", "Domestic distribution", "Cross-border transport and customs"], ["Research", "One market context", "Comparative multi-country research"]] },
        ],
      },
      {
        id: "eprg", title: "3. EPRG Framework", icon: "Compass",
        blocks: [
          { kind: "paragraph", text: "The EPRG framework describes four managerial orientations. Ethnocentric management gives strong importance to home-country practices; polycentric management gives host-country subsidiaries greater autonomy; regiocentric management groups markets into regions; geocentric management seeks an integrated worldwide perspective while recognising relevant local differences." },
          { kind: "table", headers: ["Orientation", "Core view", "Typical implication"], rows: [["Ethnocentric", "Home-country practices are central", "Strong headquarters influence"], ["Polycentric", "Each market has distinct needs", "Local adaptation and autonomy"], ["Regiocentric", "Markets are managed regionally", "Regional coordination"], ["Geocentric", "World is interconnected", "Global integration with selective adaptation"]] },
          { kind: "diagram", diagramId: "ib01-eprg-framework", caption: "EPRG orientation spectrum from home-country focus to integrated global orientation." },
        ],
      },
      {
        id: "research-segmentation", title: "4. International Market Research and Segmentation", icon: "LineChart",
        blocks: [
          { kind: "paragraph", text: "International marketing research reduces uncertainty by collecting information about customers, competitors, channels, regulation and the macro environment. Secondary research uses existing data; primary research collects new evidence through interviews, surveys, observation, experiments or test marketing." },
          { kind: "bullets", items: ["Define the decision problem before collecting data.", "Check the date, source, reliability and comparability of country-level information.", "Segment using geography, demographics, behaviour, needs or firm characteristics as appropriate.", "Distinguish country-level assumptions from customer-level evidence.", "Validate important assumptions through primary research or market pilots where feasible."] },
          { kind: "callout", tone: "example", title: "B2B segmentation", text: "A software firm may segment foreign markets by industry, company size, digital maturity and regulatory needs rather than using nationality alone." },
        ],
      },
      {
        id: "product-price", title: "5. International Product and Pricing Decisions", icon: "IndianRupee",
        blocks: [
          { kind: "paragraph", text: "Product decisions include standardization or adaptation, packaging, branding, quality, service and regulatory compliance. Pricing decisions must consider cost-to-serve, customer willingness to pay, competitors, taxes, duties, distribution margins and exchange-rate movements. A home-market price cannot simply be copied into a foreign market without analysing the delivered economics." },
          { kind: "table", headers: ["Pricing factor", "Why it matters"], rows: [["Cost-to-serve", "International logistics and service costs affect margin"], ["Currency", "Exchange-rate movement changes realized revenue and cost"], ["Competition", "Local and international rivals shape reference prices"], ["Tax/duty", "Taxes and border charges affect final price"], ["Channel margin", "Distributors and retailers require margins"]] },
        ],
      },
    ],
    keyTerms: [{"term": "International Marketing", "definition": "Marketing activities planned and executed across national markets."}, {"term": "Standardization", "definition": "Use of a substantially common marketing approach across markets."}, {"term": "Adaptation", "definition": "Modification of an offering to meet local conditions."}, {"term": "EPRG", "definition": "Ethnocentric, Polycentric, Regiocentric and Geocentric framework."}, {"term": "Market Segmentation", "definition": "Division of a market into groups with relatively similar needs or characteristics."}, {"term": "Primary Research", "definition": "Collection of new data directly for a research problem."}, {"term": "Secondary Research", "definition": "Use of existing data collected previously."}, {"term": "International Pricing", "definition": "Pricing across markets while considering cost, demand, competition, currency and regulation."}],
    examQuestions: ["Define international marketing and explain its scope. (Long)", "Differentiate domestic and international marketing. (Long)", "Explain the EPRG framework. (Long)", "Discuss standardization versus adaptation. (Long)", "Explain the process of international market research. (Medium)", "Describe international market segmentation bases. (Medium)", "Explain factors affecting international pricing. (Long)", "Write a note on primary and secondary research. (Short)", "What is geocentric orientation? (Short)", "What is product adaptation? (Short)"],
  },
  {
    unitNumber: 5,
    title: "International Strategy, Institutions and Operations",
    hours: 8,
    headings: [
      {
        id: "global-strategy", title: "1. Global Business Strategy and Standardization–Localization", icon: "Globe",
        blocks: [
          { kind: "paragraph", text: "Global business strategy determines how a firm configures and coordinates activities across countries. Standardization seeks efficiency through common products, processes and branding, while localization adapts activities to local conditions. Many multinational strategies seek both integration and responsiveness rather than choosing an absolute extreme." },
          { kind: "table", headers: ["Approach", "Primary emphasis", "Main challenge"], rows: [["International", "Transfer home capabilities", "Balance transfer with local learning"], ["Multidomestic", "Local responsiveness", "Avoid excessive duplication"], ["Global", "Worldwide integration", "Manage meaningful local differences"], ["Transnational", "Integration plus responsiveness", "Coordinate complex knowledge flows"]] },
        ],
      },
      {
        id: "entry-modes", title: "2. International Entry Modes", icon: "Network",
        blocks: [
          { kind: "paragraph", text: "Entry mode determines the amount of capital, control, risk and local commitment. Licensing transfers defined rights under contract; franchising transfers a broader business format; alliances and joint ventures combine capabilities; acquisitions provide access to an existing operation; greenfield investment builds a new operation." },
          { kind: "table", headers: ["Mode", "Capital", "Control", "Typical strength"], rows: [["Licensing", "Lower", "Lower", "Fast access with limited capital"], ["Franchising", "Moderate", "Contract-based", "Replicable business format"], ["Alliance/JV", "Shared", "Shared/contractual", "Combines capabilities"], ["Acquisition", "High", "High", "Fast access to existing assets"], ["Greenfield", "High", "High", "Designed for strategic fit"]] },
          { kind: "diagram", diagramId: "ib01-entry-modes", caption: "Comparison of international entry modes using commitment, control and speed as decision dimensions." },
        ],
      },
      {
        id: "supply-chain", title: "3. International Supply Chain and Logistics", icon: "Truck",
        blocks: [
          { kind: "paragraph", text: "International supply chains coordinate sourcing, production, inventory, transport, customs, warehousing and final delivery across borders. Greater distance and more jurisdictions can increase lead-time and disruption exposure. Managers therefore balance cost efficiency with visibility, resilience and appropriate alternatives." },
          { kind: "bullets", items: ["Global sourcing can reduce cost or provide specialized inputs but may increase dependency.", "Transport mode affects cost, speed, capacity and reliability.", "Customs classification and documentation affect border clearance.", "Visibility helps firms detect delays and coordinate responses.", "Resilience may require supplier diversification, alternative routes or carefully designed buffers."] },
        ],
      },
      {
        id: "institutions", title: "4. International Institutions and Trade Agreements", icon: "Landmark",
        blocks: [
          { kind: "paragraph", text: "International institutions provide rules, finance, coordination or forums that influence global business. The syllabus names WTO, IMF, World Bank, TRIPS, TRIMS and GATS, as well as regional arrangements such as the EU and ASEAN. Their roles differ and should not be treated as interchangeable." },
          { kind: "table", headers: ["Institution/framework", "Broad area", "Business relevance"], rows: [["WTO", "Multilateral trade framework", "Trade rules and market-access disciplines"], ["IMF", "International monetary cooperation", "Macro-financial context"], ["World Bank", "Development finance", "Infrastructure and development projects"], ["TRIPS", "Trade-related intellectual property", "IP protection standards"], ["TRIMS", "Trade-related investment measures", "Rules concerning specified investment measures"], ["GATS", "Trade in services", "Framework for services trade"], ["EU / ASEAN", "Regional integration", "Regional market-access arrangements"]] },
        ],
      },
      {
        id: "india-export", title: "5. Indian Export Promotion and SEZ Policies", icon: "Award",
        blocks: [
          { kind: "paragraph", text: "India's export ecosystem involves policy institutions, customs authorities, banks, export promotion bodies and sector-specific organisations. ECGC is associated with export credit risk insurance, while EXIM Bank supports international trade and investment through financial and related services. SEZs are designated areas governed by a specific policy framework intended to facilitate economic activity and exports." },
          { kind: "paragraph", text: "The exact operation of schemes, eligibility conditions, rates and notifications can change. In examination answers, explain the institutional purpose and connect it with export facilitation, risk management, finance or market access rather than inventing current numerical benefits." },
          { kind: "callout", tone: "info", title: "Conclusion for long answers", text: "International strategy includes entry mode, marketing, supply-chain configuration, institutional compliance, finance and risk management. A sound strategy is therefore a coordinated system rather than a single foreign-market decision." },
        ],
      },
    ],
    keyTerms: [{"term": "Global Strategy", "definition": "Strategy for configuring and coordinating business activities across countries."}, {"term": "Localization", "definition": "Adaptation of products or operations to local conditions."}, {"term": "Licensing", "definition": "Contractual permission to use specified rights or intellectual property."}, {"term": "Franchising", "definition": "Contractual expansion through a business format and brand system."}, {"term": "Greenfield Investment", "definition": "Creation of a new foreign operation rather than acquisition of an existing one."}, {"term": "Strategic Alliance", "definition": "Cooperative arrangement between firms for shared strategic objectives."}, {"term": "WTO", "definition": "World Trade Organization, the principal multilateral institution dealing with global trade rules."}, {"term": "SEZ", "definition": "Special Economic Zone operating under a specific policy and regulatory framework."}],
    examQuestions: ["Explain global business strategy and standardization-localization. (Long)", "Compare licensing, franchising, alliances, acquisitions and greenfield investment. (Long)", "Explain international supply-chain management. (Medium)", "Discuss the roles of WTO, IMF and World Bank. (Long)", "Write notes on TRIPS, TRIMS and GATS. (Medium)", "Explain the business significance of regional economic blocs. (Medium)", "Discuss the role of ECGC and EXIM Bank. (Medium)", "Explain the broad purpose of SEZ policies. (Short)", "What is a strategic alliance? (Short)", "What is greenfield investment? (Short)"],
  },
];
