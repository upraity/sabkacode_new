import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Geo Politics and Trade (BMB IB 03).
// Based on the supplied syllabus; explanations are expanded for university examination preparation.

export const geopoliticsandtradeUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Introduction to Geopolitics and the Global Trade Order",
    hours: 8,
    headings: [
      {
        id: "geopolitics", title: "1. Meaning and Scope of Geopolitics", icon: "Globe",
        blocks: [
          { kind: "paragraph", text: "Geopolitics studies how geography, power, resources, political relationships and strategic interests influence international affairs. For business, geopolitics matters because trade routes, energy supplies, sanctions, alliances, borders and technology policies can change the cost and feasibility of international operations." },
          { kind: "paragraph", text: "A geopolitical analysis connects physical geography with state interests and economic networks. Important variables include location of ports and chokepoints, resource distribution, strategic corridors, neighbouring states, political alliances and the ability of governments to influence cross-border commerce." },
          { kind: "diagram", diagramId: "ib03-geopolitical-order", caption: "Geopolitical analysis connecting geography, state power, economic interests and international trade flows." },
        ],
      },
      {
        id: "global-order", title: "2. Global Trade Order and Historical Evolution", icon: "History",
        blocks: [
          { kind: "paragraph", text: "The global trade order has evolved from colonial and imperial trading systems toward rules-based institutions, regional agreements and increasingly complex global value chains. Post-war institutions sought to reduce uncertainty and create mechanisms for cooperation, while later decades saw deeper integration, regionalisation and the rise of emerging economies." },
          { kind: "table", headers: ["Stage", "Broad characteristic", "Business significance"], rows: [["Imperial/colonial systems", "Trade strongly shaped by political power and control", "Unequal market access and strategic resources"], ["Post-war rules-based order", "Greater emphasis on multilateral trade rules", "More predictable international exchange"], ["Global value-chain era", "Production distributed across countries", "Cross-border interdependence"], ["Fragmentation pressures", "Geopolitical rivalry and resilience concerns", "Need for diversification and scenario planning"]] },
        ],
      },
      {
        id: "nation-states", title: "3. Nation-States, Power and Economic Influence", icon: "Landmark",
        blocks: [
          { kind: "paragraph", text: "States remain central actors in international trade because they control laws, borders, taxation, foreign policy and security. Economic power can also influence diplomatic relationships through market size, technology, finance, energy and infrastructure." },
          { kind: "bullets", items: ["Hard power includes coercive or security capabilities.", "Economic power includes market access, finance, trade and resource leverage.", "Soft power includes attraction, reputation and influence through institutions or culture.", "Geo-economic policy uses economic instruments to pursue strategic objectives."] },
        ],
      },
      {
        id: "strategic-geography", title: "4. Geography, Chokepoints and Trade Routes", icon: "Network",
        blocks: [
          { kind: "paragraph", text: "Physical geography can create strategic advantages and vulnerabilities. Ports, canals, straits, pipelines, rail corridors and major shipping routes can become critical to international trade. A disruption at a chokepoint can affect shipping time, freight costs, inventory and insurance." },
          { kind: "callout", tone: "example", title: "Trade-route logic", text: "If a major maritime route becomes unavailable, ships may take a longer alternative route. The direct business effects can include longer transit time, higher fuel consumption, higher freight cost and increased working-capital needs." },
        ],
      },
      {
        id: "geo-economics", title: "5. Geopolitics and Corporate Decision-Making", icon: "Compass",
        blocks: [
          { kind: "paragraph", text: "Companies respond to geopolitical conditions through market selection, sourcing strategy, investment location, inventory planning and risk management. A firm may diversify suppliers or production sites when dependence on one country creates unacceptable concentration exposure." },
          { kind: "callout", tone: "info", title: "Exam tip", text: "Separate a geopolitical event from its business transmission mechanism. Explain how the event affects trade policy, logistics, currency, input availability, demand or compliance before stating the business consequence." },
        ],
      },
    ],
    keyTerms: [{"term": "Geopolitics", "definition": "Study of how geography and power influence international relations and strategic outcomes."}, {"term": "Geo-economics", "definition": "Use of economic instruments and capabilities in pursuit of strategic objectives."}, {"term": "Chokepoint", "definition": "A strategically important narrow route through which substantial trade or transport flows."}, {"term": "Global Trade Order", "definition": "The institutions, rules and practices that structure international trade."}, {"term": "Global Value Chain", "definition": "Cross-border distribution of stages of production and value creation."}, {"term": "Hard Power", "definition": "Ability to influence through coercive or material capabilities."}, {"term": "Soft Power", "definition": "Ability to influence through attraction, legitimacy or persuasion."}, {"term": "Strategic Geography", "definition": "Geographic features that materially affect security, trade or economic strategy."}],
    examQuestions: ["Define geopolitics and explain its relevance to global trade. (Long)", "Explain the evolution of the global trade order. (Long)", "Discuss the role of nation-states in international trade. (Medium)", "What is geo-economics? Explain with examples. (Medium)", "Explain how chokepoints affect international trade. (Long)", "Discuss the relationship between geography and trade routes. (Medium)", "Explain how firms incorporate geopolitical analysis into strategy. (Long)", "Define a global value chain. (Short)", "What is a trade chokepoint? (Short)", "Differentiate hard power and soft power. (Short)"],
  },
  {
    unitNumber: 2,
    title: "Geopolitical Conflicts and Trade Disruptions",
    hours: 8,
    headings: [
      {
        id: "trade-restrictions", title: "1. Sanctions, Embargoes and Trade Restrictions", icon: "AlertTriangle",
        blocks: [
          { kind: "paragraph", text: "Trade restrictions can be used by states or international bodies for political, security or economic objectives. Sanctions may target countries, entities, individuals, sectors, financial flows or particular goods and technologies. Embargoes are broader restrictions on specified trade and must be understood according to the applicable legal instrument." },
          { kind: "paragraph", text: "For businesses, the important issue is compliance. A transaction may involve several jurisdictions, financial institutions, vessels, intermediaries and end users, so screening and due diligence become critical." },
          { kind: "diagram", diagramId: "ib03-conflict-disruption", caption: "Conflict-to-commerce transmission chain showing how sanctions, conflict and policy restrictions can affect trade flows." },
        ],
      },
      {
        id: "russia-ukraine", title: "2. Russia–Ukraine War and Trade Effects", icon: "Globe",
        blocks: [
          { kind: "paragraph", text: "The Russia–Ukraine war has had international economic effects through energy markets, agricultural trade, shipping risks, sanctions and changes in sourcing. The business lesson is not to treat a conflict as a single-variable event; different industries experience different transmission channels." },
          { kind: "table", headers: ["Channel", "Possible trade effect"], rows: [["Energy", "Price and supply volatility can affect production and transport costs"], ["Agriculture", "Changes in supply and logistics can affect commodity flows"], ["Shipping", "Risk premiums, route changes and insurance costs may rise"], ["Sanctions", "Certain counterparties, goods or financial transactions may become restricted"], ["Sourcing", "Firms may diversify suppliers or geographic exposure"]] },
        ],
      },
      {
        id: "red-sea", title: "3. Red Sea and Maritime Disruptions", icon: "Truck",
        blocks: [
          { kind: "paragraph", text: "Disruptions around important maritime routes can force vessels to alter routes or increase security measures. Longer routes can increase transit time, fuel consumption, freight cost and inventory requirements. The effect differs by cargo type, contract terms and alternative transport options." },
          { kind: "callout", tone: "example", title: "Supply-chain transmission", text: "Route disruption → longer voyage → longer lead time → higher inventory requirement → higher logistics and working-capital pressure. This chain explains why a geopolitical event can affect firms far from the conflict zone." },
        ],
      },
      {
        id: "trade-war", title: "4. US–China Rivalry and Trade War Dynamics", icon: "ArrowLeftRight",
        blocks: [
          { kind: "paragraph", text: "Strategic rivalry between major economies can influence tariffs, technology controls, investment screening, supply-chain location and access to critical inputs. Trade policy can therefore become linked with industrial and national-security policy." },
          { kind: "table", headers: ["Business area", "Potential strategic question"], rows: [["Sourcing", "Should critical inputs be single-sourced?"], ["Technology", "Are export controls or licensing restrictions relevant?"], ["Investment", "Could investment screening affect the project?"], ["Market access", "Could tariffs or regulatory barriers change competitiveness?"], ["Resilience", "Is geographic diversification justified?"]] },
        ],
      },
      {
        id: "policy-disruption", title: "5. Trade Disruption Risk Management", icon: "AlertTriangle",
        blocks: [
          { kind: "paragraph", text: "Risk management begins with identifying dependencies and mapping how a disruption would affect revenue, cost, supply and compliance. Firms can use scenario analysis, supplier diversification, alternative logistics routes, contractual safeguards, insurance and contingency inventories where economically justified." },
          { kind: "bullets", items: ["Map critical suppliers, customers, routes and financial channels.", "Identify dependencies that cannot be replaced quickly.", "Create scenarios for delay, restriction, price shock and route closure.", "Define triggers for activating contingency plans.", "Review plans because geopolitical conditions can change rapidly."] },
        ],
      },
    ],
    keyTerms: [{"term": "Sanction", "definition": "Restriction imposed under an applicable legal or policy regime on specified targets or activities."}, {"term": "Embargo", "definition": "A broad restriction on specified trade or commercial activity."}, {"term": "Trade War", "definition": "Escalating use of trade restrictions or retaliatory measures between economies."}, {"term": "Supply Disruption", "definition": "Interruption or deterioration of the normal flow of goods, services or inputs."}, {"term": "Due Diligence", "definition": "Process of investigating counterparties, transactions and relevant risks before proceeding."}, {"term": "Export Control", "definition": "Legal control over specified exports, technologies, goods or destinations."}, {"term": "Route Diversification", "definition": "Use of alternative transport routes to reduce dependence on a single route."}, {"term": "Scenario Planning", "definition": "Structured analysis of alternative future conditions and responses."}],
    examQuestions: ["Explain how geopolitical conflicts disrupt international trade. (Long)", "Discuss sanctions and embargoes as trade instruments. (Long)", "Explain the business effects of the Russia–Ukraine war on trade. (Medium)", "Discuss Red Sea maritime disruptions and supply chains. (Medium)", "Explain US–China trade-war dynamics. (Long)", "What is export control? (Short)", "Explain due diligence in geopolitical risk management. (Medium)", "How can firms manage trade-disruption risk? (Long)", "What is a trade war? (Short)", "Why is route diversification important? (Short)"],
  },
  {
    unitNumber: 3,
    title: "Resource Geopolitics and Energy Security",
    hours: 8,
    headings: [
      {
        id: "energy", title: "1. Energy Geopolitics", icon: "Waves",
        blocks: [
          { kind: "paragraph", text: "Energy geopolitics examines how oil, gas, electricity, minerals, infrastructure and energy technologies interact with state power and international relations. Energy is both a commercial commodity and a strategic input, so changes in supply or transport can have economy-wide effects." },
          { kind: "paragraph", text: "The importance of a resource depends not only on physical reserves but also on production capacity, transport infrastructure, processing capability, market concentration and political relationships." },
          { kind: "diagram", diagramId: "ib03-energy-security", caption: "Energy-security chain connecting resources, production, transport, processing, markets and strategic risk." },
        ],
      },
      {
        id: "pipelines-ports", title: "2. Pipelines, Ports and Transport Infrastructure", icon: "Network",
        blocks: [
          { kind: "paragraph", text: "Pipelines and ports can create geographic dependencies. A pipeline connects specific producing and consuming regions; a port connects maritime trade with inland networks. Infrastructure therefore influences both commercial efficiency and strategic vulnerability." },
          { kind: "table", headers: ["Infrastructure", "Strategic relevance"], rows: [["Pipeline", "Long-term route dependency and continuous-flow characteristics"], ["Port", "Gateway for maritime trade and bulk commodities"], ["Refinery/processing plant", "Can be a bottleneck when capacity is concentrated"], ["Grid/interconnector", "Links electricity markets and creates cross-border dependence"]] },
        ],
      },
      {
        id: "critical-minerals", title: "3. Critical Minerals and Resource Security", icon: "Factory",
        blocks: [
          { kind: "paragraph", text: "Critical minerals are inputs considered important to economic or strategic sectors and vulnerable to supply disruption. Their importance has increased with renewable energy, electronics, batteries and advanced manufacturing. Risk may arise from concentration in mining, refining, processing or transportation." },
          { kind: "bullets", items: ["Identify where extraction occurs and where processing occurs.", "Assess concentration and substitutability.", "Examine recycling and alternative-material possibilities.", "Consider environmental, social and governance requirements in supply decisions.", "Avoid assuming that a resource-rich country automatically controls the entire value chain; processing capacity can be a separate bottleneck."] },
        ],
      },
      {
        id: "resource-diplomacy", title: "4. Resource Diplomacy and Energy Deals", icon: "Handshake",
        blocks: [
          { kind: "paragraph", text: "Resource diplomacy involves government-to-government and commercial relationships concerning energy, minerals, infrastructure and long-term supply. Contracts, investment agreements, strategic reserves and infrastructure projects can have both economic and geopolitical dimensions." },
          { kind: "callout", tone: "info", title: "Exam focus", text: "Explain resource diplomacy as the intersection of commercial need and strategic state interest. Then show how supply concentration, infrastructure and long-term contracts influence business risk." },
        ],
      },
      {
        id: "india-energy", title: "5. India and Energy Security", icon: "IndianRupee",
        blocks: [
          { kind: "paragraph", text: "For India, energy security involves reliable and affordable access to energy while balancing import dependence, domestic capacity, diversification and the transition toward lower-carbon energy systems. Trade decisions can therefore be influenced by crude oil, gas, coal, renewable technologies, critical minerals and shipping routes." },
          { kind: "bullets", items: ["Diversification reduces dependence on one supplier or route.", "Strategic reserves can provide a buffer against temporary disruptions.", "Domestic renewable capacity can alter the composition of future energy demand.", "Import infrastructure and shipping access affect physical availability.", "Energy transition creates new resource dependencies, including minerals and processing capacity."] },
        ],
      },
    ],
    keyTerms: [{"term": "Energy Security", "definition": "Reliable access to energy at acceptable economic and strategic risk."}, {"term": "Critical Mineral", "definition": "Mineral considered important and potentially vulnerable to supply disruption."}, {"term": "Resource Diplomacy", "definition": "Diplomatic and commercial engagement concerning strategic resources."}, {"term": "Strategic Reserve", "definition": "Stock of a critical commodity maintained as a buffer against disruption."}, {"term": "Pipeline Dependency", "definition": "Exposure created by reliance on a particular pipeline route or network."}, {"term": "Resource Concentration", "definition": "Situation in which production or processing is heavily concentrated geographically."}, {"term": "Energy Transition", "definition": "Long-term shift in energy systems toward different technologies and lower-carbon sources."}, {"term": "Supply Resilience", "definition": "Capacity of a supply system to absorb and recover from disruption."}],
    examQuestions: ["Explain energy geopolitics and its relevance to trade. (Long)", "Discuss the role of pipelines and ports in resource security. (Medium)", "What are critical minerals and why are they strategically important? (Long)", "Explain resource diplomacy. (Medium)", "Discuss India's energy-security challenges in international trade. (Long)", "What is energy transition? (Short)", "Explain resource concentration risk. (Short)", "How can diversification improve energy security? (Medium)", "What is a strategic reserve? (Short)", "Explain supply resilience in resource markets. (Short)"],
  },
  {
    unitNumber: 4,
    title: "Power Blocs, Alliances and Regional Trade Politics",
    hours: 8,
    headings: [
      {
        id: "blocs", title: "1. Formation and Impact of Global Power Blocs", icon: "Layers",
        blocks: [
          { kind: "paragraph", text: "Power blocs are groupings of states whose political, economic or security interests create coordinated influence. In trade, blocs can affect market access, standards, investment flows, supply chains and diplomatic bargaining. Their influence depends on the size, cohesion and policy coordination of members." },
          { kind: "table", headers: ["Grouping", "Broad role in the syllabus", "Business relevance"], rows: [["EU", "Deep regional integration", "Common/regional market rules and standards"], ["BRICS", "Forum involving major emerging economies", "Dialogue and cooperation among members"], ["G7", "Group of major advanced economies", "Policy coordination and global economic influence"], ["G20", "Forum of major economies", "Economic and financial coordination"], ["Quad", "Strategic cooperation among four Indo-Pacific countries", "Regional strategic and economic relevance"]] },
        ],
      },
      {
        id: "regional-trade", title: "2. Regional Trade Blocs and Economic Integration", icon: "Globe",
        blocks: [
          { kind: "paragraph", text: "Economic integration can range from preferential trade arrangements to deeper forms such as free trade areas, customs unions, common markets and economic unions. The deeper the integration, the greater the coordination among members." },
          { kind: "diagram", diagramId: "ib03-regional-integration", caption: "Regional economic integration ladder from preferential arrangements to deeper forms of economic union." },
        ],
      },
      {
        id: "india-trade-blocs", title: "3. India and Indo-Pacific Trade Relations", icon: "Compass",
        blocks: [
          { kind: "paragraph", text: "India's trade strategy interacts with regional and global partnerships. The syllabus mentions India, Japan, Australia and ASEAN in the context of Indo-Pacific trade and strategic relations. Such relationships can influence supply-chain resilience, investment, technology cooperation and market access." },
          { kind: "bullets", items: ["Trade relationships can support diversification of export and import markets.", "Strategic partnerships may influence infrastructure and technology cooperation.", "Regional tensions can change the risk profile of particular routes or suppliers.", "Businesses should distinguish political partnership from legally binding trade commitments."] },
        ],
      },
      {
        id: "trade-agreements", title: "4. Trade Agreements, Tariffs and Non-Tariff Politics", icon: "FileText",
        blocks: [
          { kind: "paragraph", text: "Trade agreements can reduce tariffs, establish rules and create procedures for market access. However, non-tariff measures such as standards, licensing, technical regulations and sanitary requirements can remain commercially important. Therefore, headline tariff rates do not tell the entire market-access story." },
          { kind: "table", headers: ["Issue", "Business question"], rows: [["Tariff", "What duty applies to the product and origin? "], ["Rules of origin", "Does the product qualify for preferential treatment?"], ["Standards", "What technical or safety requirements apply?"], ["Services", "What restrictions affect cross-border services or investment?"], ["Dispute rules", "What mechanisms exist if commitments are contested?"]] },
        ],
      },
      {
        id: "corridors-soft-power", title: "5. Economic Corridors and Soft Power", icon: "Network",
        blocks: [
          { kind: "paragraph", text: "Economic corridors connect markets through transport, logistics, infrastructure and trade routes. Soft power influences how countries build relationships through culture, diplomacy, institutions and reputation. Together, corridors and soft power can shape the attractiveness and strategic relevance of economic partnerships." },
          { kind: "callout", tone: "example", title: "Corridor logic", text: "Infrastructure that reduces travel or logistics time can improve trade connectivity, but the commercial benefit also depends on political stability, financing, border procedures and actual demand." },
        ],
      },
    ],
    keyTerms: [{"term": "Power Bloc", "definition": "Grouping of states with coordinated political, economic or strategic interests."}, {"term": "Regional Integration", "definition": "Process through which countries reduce barriers and coordinate economic policies."}, {"term": "Free Trade Area", "definition": "Regional arrangement in which members reduce or remove many internal trade barriers while retaining separate external trade policies."}, {"term": "Customs Union", "definition": "Integration arrangement combining internal trade liberalisation with a common external tariff."}, {"term": "Rules of Origin", "definition": "Criteria used to determine the economic nationality/origin of a product for trade purposes."}, {"term": "Non-Tariff Measure", "definition": "Trade-affecting measure other than a conventional tariff."}, {"term": "Economic Corridor", "definition": "Connected infrastructure and trade route linking economic centres."}, {"term": "Soft Power", "definition": "Influence achieved through attraction, legitimacy, diplomacy or persuasion."}],
    examQuestions: ["Explain the role of power blocs in international trade. (Long)", "Discuss EU, BRICS, G7, G20 and Quad in the context of the syllabus. (Long)", "Explain forms of regional economic integration. (Long)", "Discuss India's Indo-Pacific trade relationships. (Medium)", "Explain the importance of rules of origin. (Medium)", "Why do non-tariff measures matter even when tariffs are low? (Long)", "Explain economic corridors and their business significance. (Medium)", "Define soft power. (Short)", "What is a customs union? (Short)", "What is a free trade area? (Short)"],
  },
  {
    unitNumber: 5,
    title: "Emerging Risks and the Future of Political Trade",
    hours: 8,
    headings: [
      {
        id: "technology-risk", title: "1. Technology and Cyber Risks in Trade", icon: "Cpu",
        blocks: [
          { kind: "paragraph", text: "Digital trade depends on networks, cloud services, payment systems, logistics platforms and data exchange. Cyber incidents can interrupt operations, expose sensitive information and create compliance or financial consequences. Technology policy can also become geopolitical when governments restrict access to advanced technologies or strategic components." },
          { kind: "bullets", items: ["Protect critical systems and maintain access controls.", "Map technology dependencies across suppliers and service providers.", "Plan for outages and cyber incidents.", "Monitor export controls and technology-related trade restrictions.", "Treat data security as part of trade continuity rather than only an IT issue."] },
        ],
      },
      {
        id: "climate", title: "2. Climate Risk and International Trade", icon: "Sprout",
        blocks: [
          { kind: "paragraph", text: "Climate change can affect trade through physical disruptions, changing resource availability, extreme weather, infrastructure damage and evolving environmental regulation. Businesses also face transition risks as markets, technologies and policies shift toward lower-emission production." },
          { kind: "table", headers: ["Risk", "Trade transmission"], rows: [["Physical", "Damage to ports, farms, factories or transport routes"], ["Resource", "Changes in water, energy or agricultural availability"], ["Regulatory", "New standards, reporting or environmental requirements"], ["Transition", "Demand shifts toward new technologies and products"]] },
        ],
      },
      {
        id: "surveillance", title: "3. Digital Surveillance and Trade Infrastructure Risk", icon: "MonitorPlay",
        blocks: [
          { kind: "paragraph", text: "Digital trade infrastructure creates new forms of dependence on platforms, data centres, communications networks and digital identity systems. Surveillance and data-governance concerns can influence market-entry decisions, technology sourcing and cross-border data practices." },
          { kind: "callout", tone: "info", title: "Exam distinction", text: "Cybersecurity, digital surveillance and data governance overlap but are not identical. Cybersecurity focuses on protecting systems and information; surveillance concerns monitoring capabilities and practices; data governance covers how data is collected, used, transferred and controlled." },
        ],
      },
      {
        id: "friendshoring", title: "4. Friend-Shoring, Near-Shoring and Supply-Chain Reconfiguration", icon: "RefreshCw",
        blocks: [
          { kind: "paragraph", text: "Friend-shoring describes shifting selected supply-chain activities toward countries considered strategically reliable; near-shoring moves activities closer to the main market. These strategies respond to resilience and geopolitical concerns but can increase cost or require new supplier qualification." },
          { kind: "table", headers: ["Strategy", "Basic idea", "Potential trade-off"], rows: [["Friend-shoring", "Source from strategically aligned partners", "May reduce geopolitical exposure but raise cost"], ["Near-shoring", "Move activity closer to the main market", "Can shorten lead times but may reduce scale benefits"], ["Diversification", "Use multiple countries or suppliers", "Reduces concentration but increases coordination"]] },
          { kind: "diagram", diagramId: "ib03-future-trade-risks", caption: "Future-risk map connecting technology, climate, surveillance, friend-shoring, near-shoring and supply-chain reconfiguration." },
        ],
      },
      {
        id: "future-outlook", title: "5. Multipolar World, Fragmentation and Trade Resilience", icon: "Compass",
        blocks: [
          { kind: "paragraph", text: "A multipolar world contains several significant centres of economic and political influence. Fragmentation can increase differences in standards, technology ecosystems, regulations and trade relationships. For businesses, resilience means building the ability to continue critical operations under plausible disruptions without assuming that every risk can be eliminated." },
          { kind: "bullets", items: ["Use scenario planning for major geopolitical and trade-policy changes.", "Avoid unnecessary dependence on a single critical supplier or route.", "Maintain alternative logistics and communication options.", "Integrate geopolitical monitoring into strategic planning.", "Balance resilience investments against cost, speed and capital requirements."] },
          { kind: "callout", tone: "info", title: "Future-oriented conclusion", text: "The future trade environment is likely to require both efficiency and resilience. Firms that understand the political transmission mechanism behind trade disruptions can make more informed decisions about markets, suppliers, technology and logistics." },
        ],
      },
    ],
    keyTerms: [{"term": "Cyber Risk", "definition": "Potential loss or disruption arising from attacks or failures affecting digital systems."}, {"term": "Climate Risk", "definition": "Business and trade risk arising from physical climate impacts or the transition to different environmental policies and technologies."}, {"term": "Digital Surveillance", "definition": "Use of digital technologies to monitor people, systems or activities."}, {"term": "Friend-Shoring", "definition": "Relocation or sourcing toward strategically trusted or aligned countries."}, {"term": "Near-Shoring", "definition": "Relocation of activities to a geographically closer country or region."}, {"term": "Multipolarity", "definition": "International system containing several significant centres of power."}, {"term": "Fragmentation", "definition": "Increasing divergence of markets, rules, standards or geopolitical groupings."}, {"term": "Trade Resilience", "definition": "Ability of trade and supply systems to withstand and recover from disruption."}],
    examQuestions: ["Explain emerging technology risks in international trade. (Long)", "Discuss climate risks and their effects on trade. (Long)", "Differentiate cybersecurity, surveillance and data governance. (Medium)", "Explain friend-shoring and near-shoring. (Long)", "Discuss supply-chain reconfiguration under geopolitical pressure. (Medium)", "What is a multipolar world? (Short)", "Explain trade fragmentation. (Medium)", "How can firms build trade resilience? (Long)", "What is friend-shoring? (Short)", "What is near-shoring? (Short)"],
  },
];
