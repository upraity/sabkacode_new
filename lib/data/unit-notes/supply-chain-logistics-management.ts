import { UnitNote } from "@/types";

export const SupplyChainLogisticsManagementUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Supply Chain Concepts",
    hours: 8,
    headings: [
      {
        id: "objectives-and-stages-of-a-supply-chain",
        title: "Objectives and Stages of a Supply Chain",
        icon: "GitBranch",
        blocks: [
          { kind: "paragraph", text: "A supply chain connects suppliers, manufacturers, distributors, retailers and customers through material, information and financial flows. Its objective is to satisfy customer requirements while balancing cost, speed, quality, flexibility, reliability and asset utilization. The stages normally include sourcing, production, inventory positioning, distribution and final delivery. Managing the stages as one system is important because a local improvement can create a higher total cost elsewhere." },
{ kind: "diagram", diagramId: "scm-flow", caption: "End-to-end supply-chain stages." },
        ]
      },
      {
        id: "value-chain-process",
        title: "Value Chain Process",
        icon: "Layers",
        blocks: [
          { kind: "paragraph", text: "The value-chain perspective examines how activities add value for the customer. Procurement, operations, logistics, marketing, service and supporting activities should be coordinated so that the total customer proposition is improved. Supply-chain decisions therefore concern not only physical movement but also information, relationships and service." },
        ]
      },
      {
        id: "cycle-view-of-supply-chain-process",
        title: "Cycle View of Supply Chain Process",
        icon: "RefreshCw",
        blocks: [
          { kind: "paragraph", text: "The cycle view examines supply-chain activities through linked cycles between adjacent stages, such as customer-order, replenishment, manufacturing and procurement cycles. It helps identify who performs each activity, what triggers it and where information or inventory moves. This makes process responsibility and coordination easier to analyze." },
        ]
      },
      {
        id: "key-issues-drivers-and-obstacles-in-scm",
        title: "Key Issues, Drivers and Obstacles in SCM",
        icon: "AlertTriangle",
        blocks: [
          { kind: "paragraph", text: "Important issues include demand uncertainty, inventory levels, lead time, capacity, supplier reliability, transportation, information quality and coordination. Major drivers include facilities, inventory, transportation, information, sourcing and pricing. Obstacles arise when partners lack visibility, incentives are misaligned, processes are fragmented or decisions optimize one stage instead of total supply-chain performance." },
{ kind: "table", headers: ["Driver", "Typical influence"], rows: [["Facilities", "Capacity and network response"], ["Inventory", "Availability versus carrying cost"], ["Transportation", "Speed, cost and reach"], ["Information", "Visibility and coordination"], ["Sourcing", "Supplier capability and risk"], ["Pricing", "Demand and margin behavior"]] },
        ]
      },
      {
        id: "supply-chain-strategy-strategic-fit-and-best-practices",
        title: "Supply Chain Strategy, Strategic Fit and Best Practices",
        icon: "Target",
        blocks: [
          { kind: "paragraph", text: "Supply-chain strategy should fit the product, market and competitive priorities. A highly predictable low-cost product may emphasize efficiency, while uncertain demand may require responsiveness and flexibility. Best practices include demand visibility, supplier collaboration, inventory discipline, process standardization, performance measurement and continuous improvement. A streamlined supply chain reduces unnecessary delays and hand-offs without sacrificing required controls." },
{ kind: "callout", tone: "example", title: "Practical example", text: "A fashion retailer with short product life cycles may value responsiveness and rapid replenishment more heavily than a commodity producer with stable demand." },
        ]
      }
    ],
    keyTerms: [
      { term: "Supply chain", definition: "Network of organizations and activities involved in sourcing, transforming and delivering products or services." },
      { term: "Strategic fit", definition: "Alignment between supply-chain strategy and business/customer requirements." },
      { term: "SCM driver", definition: "Factor that materially influences supply-chain performance." }
    ],
    examQuestions: [
      "Explain the objectives and stages of a supply chain. (Long)",
      "Explain the value-chain process and cycle view. (Long)",
      "Discuss supply-chain drivers and obstacles. (Long)",
      "Explain strategic fit in SCM. (Medium)",
      "Discuss best practices for streamlined SCM. (Long)"
    ]
  },
  {
    unitNumber: 2,
    title: "Logistics",
    hours: 8,
    headings: [
      {
        id: "evolution-objectives-components-and-functions-of-logistics",
        title: "Evolution, Objectives, Components and Functions of Logistics",
        icon: "Truck",
        blocks: [
          { kind: "paragraph", text: "Logistics evolved from separate transportation and storage activities toward integrated management of movement, storage and related information. Its objectives are to deliver the right product, in the right quantity and condition, to the right place and time at an economical total cost. Core functions include transportation, warehousing, order processing, inventory handling, packaging, material handling and information management." },
{ kind: "diagram", diagramId: "logistics-functions", caption: "Conceptual framework for the topic." },
        ]
      },
      {
        id: "distribution-issues-and-challenges",
        title: "Distribution Issues and Challenges",
        icon: "MapPin",
        blocks: [
          { kind: "paragraph", text: "Distribution decisions must balance service coverage, inventory, facility cost, transportation and delivery speed. Common challenges include uncertain demand, dispersed customers, congestion, limited infrastructure, damaged goods, last-mile cost and coordination between warehouses and transport providers. Good distribution design evaluates the complete network rather than one route or facility." },
        ]
      },
      {
        id: "competitive-advantage-through-logistics",
        title: "Competitive Advantage through Logistics",
        icon: "TrendingUp",
        blocks: [
          { kind: "paragraph", text: "Logistics can create competitive advantage through faster delivery, higher reliability, lower total cost, better availability and superior service. The advantage is sustainable when logistics capabilities are difficult to imitate and are consistently linked to customer expectations. Service promises should be supported by realistic inventory, transport and capacity decisions." },
        ]
      },
      {
        id: "transportation-functions-costs-and-modes",
        title: "Transportation: Functions, Costs and Modes",
        icon: "Truck",
        blocks: [
          { kind: "paragraph", text: "Transportation connects supply-chain locations and influences both cost and customer service. Mode selection considers freight cost, speed, reliability, capacity, distance, product characteristics and infrastructure. Road offers flexibility, rail is useful for suitable high-volume movements, air emphasizes speed, water suits large-volume movements where available, and pipelines serve specialized continuous flows." },
{ kind: "table", headers: ["Mode", "Typical strength"], rows: [["Road", "Flexibility and door-to-door reach"], ["Rail", "Large-volume, longer-distance movement"], ["Air", "Speed for time-sensitive shipments"], ["Water", "Large-volume economical movement where feasible"], ["Pipeline", "Continuous movement of suitable products"]] },
        ]
      },
      {
        id: "network-decisions-optimization-and-cross-docking",
        title: "Network Decisions, Optimization and Cross Docking",
        icon: "GitBranch",
        blocks: [
          { kind: "paragraph", text: "Logistics network decisions concern facility location, number of facilities, capacity, transportation links and inventory positioning. Optimization seeks a feasible balance among cost, service, capacity and risk. Cross docking reduces storage by transferring suitable inbound goods quickly toward outbound dispatch. It requires accurate information, synchronized schedules and reliable handling." },
{ kind: "diagram", diagramId: "cross-docking", caption: "Conceptual framework for the topic." },
        ]
      }
    ],
    keyTerms: [
      { term: "Logistics", definition: "Management of movement and storage of goods, services and related information." },
      { term: "Cross docking", definition: "Transfer of inbound goods toward outbound dispatch with limited intermediate storage." },
      { term: "Distribution network", definition: "Set of facilities and transportation links used to deliver products." }
    ],
    examQuestions: [
      "Explain the evolution and objectives of logistics. (Long)",
      "Discuss logistics components and functions. (Long)",
      "Explain how logistics creates competitive advantage. (Long)",
      "Compare transportation modes. (Long)",
      "Explain network optimization and cross docking. (Long)"
    ]
  },
  {
    unitNumber: 3,
    title: "Supply Chain Performance",
    hours: 8,
    headings: [
      {
        id: "bullwhip-effect-and-reduction",
        title: "Bullwhip Effect and Reduction",
        icon: "TrendingUp",
        blocks: [
          { kind: "paragraph", text: "The bullwhip effect is amplification of demand variability as orders move upstream. Forecast updating, order batching, price promotions, rationing and poor information sharing can create larger fluctuations in production and inventory than the original customer-demand change. Reduction methods include better demand visibility, smaller order batches, stable pricing, collaboration and coordinated replenishment." },
{ kind: "diagram", diagramId: "bullwhip", caption: "Conceptual framework for the topic." },
        ]
      },
      {
        id: "performance-measurement-dimensions-and-tools",
        title: "Performance Measurement: Dimensions and Tools",
        icon: "Gauge",
        blocks: [
          { kind: "paragraph", text: "Supply-chain performance measurement converts objectives into indicators. Important dimensions include service, cost, speed, quality, flexibility and asset utilization. Measures such as on-time delivery, order fill, cycle time, logistics cost, inventory turns and perfect-order performance help managers identify where performance is improving or deteriorating." },
        ]
      },
      {
        id: "scor-model",
        title: "SCOR Model",
        icon: "Layers",
        blocks: [
          { kind: "paragraph", text: "The SCOR model is a reference framework for describing and analyzing supply-chain processes and performance. It provides a common structure for process categories and performance attributes, helping organizations compare processes and identify improvement opportunities. In an exam answer, explain the framework as a process-reference and performance-management tool rather than treating it as a single KPI." },
        ]
      },
      {
        id: "demand-chain-management",
        title: "Demand Chain Management",
        icon: "Users",
        blocks: [
          { kind: "paragraph", text: "Demand chain management starts from customer demand and coordinates activities needed to respond to that demand. It emphasizes market information, customer needs, demand sensing and alignment between commercial decisions and supply operations. The idea complements supply-chain management by strengthening the demand-side perspective." },
        ]
      },
      {
        id: "global-supply-chain-and-network-design",
        title: "Global Supply Chain and Network Design",
        icon: "Globe",
        blocks: [
          { kind: "paragraph", text: "Global supply chains provide access to international suppliers and markets but add lead-time, regulatory, currency, geopolitical, cultural and infrastructure complexity. Network design should consider total landed cost, service, risk, facility location, supplier alternatives and demand geography. A globally low-cost design may be unsuitable if disruption risk or service requirements are ignored." },
        ]
      }
    ],
    keyTerms: [
      { term: "Bullwhip effect", definition: "Amplification of demand/order variability as information moves upstream." },
      { term: "SCOR", definition: "Supply-chain process reference and performance framework." },
      { term: "Demand chain", definition: "Customer-demand-oriented view of activities and information used to satisfy market requirements." }
    ],
    examQuestions: [
      "Explain the bullwhip effect and methods of reducing it. (Long)",
      "Discuss dimensions and tools of supply-chain performance measurement. (Long)",
      "Explain the SCOR model. (Long)",
      "Discuss demand chain management. (Medium)",
      "Explain factors influencing global supply-chain network design. (Long)"
    ]
  },
  {
    unitNumber: 4,
    title: "Warehousing",
    hours: 8,
    headings: [
      {
        id: "warehouse-concept-and-types",
        title: "Warehouse Concept and Types",
        icon: "Warehouse",
        blocks: [
          { kind: "paragraph", text: "A warehouse stores and manages inventory between points of supply and demand. Warehouses can be classified by ownership, function, product type or role in the network, such as distribution centers, public warehouses and specialized facilities. The correct design depends on service requirements, product characteristics, volume and network structure." },
        ]
      },
      {
        id: "warehouse-strategy-and-facility-location",
        title: "Warehouse Strategy and Facility Location",
        icon: "Map",
        blocks: [
          { kind: "paragraph", text: "Warehouse strategy determines how many facilities are required, where they should be located, what capacity they need and which customer or product flows they will serve. Location decisions consider proximity to customers and suppliers, transport links, labor, land cost, taxes, infrastructure, demand concentration and disruption risk." },
        ]
      },
      {
        id: "warehouse-network-design",
        title: "Warehouse Network Design",
        icon: "GitBranch",
        blocks: [
          { kind: "paragraph", text: "Network design balances facility cost, inventory duplication, transportation cost and customer service. Centralization can reduce duplicated inventory and simplify control, while decentralization can reduce delivery time and improve local responsiveness. Analytical models should use demand, cost and service constraints rather than assuming one structure is always superior." },
{ kind: "diagram", diagramId: "warehouse-network", caption: "Conceptual framework for the topic." },
        ]
      },
      {
        id: "reverse-logistics",
        title: "Reverse Logistics",
        icon: "RefreshCw",
        blocks: [
          { kind: "paragraph", text: "Reverse logistics manages returns and movements from downstream points back toward sellers, manufacturers or recovery channels. It includes returns, repair, refurbishment, recalls, recycling and disposal. Efficient reverse logistics protects customer service and can recover value while controlling unnecessary handling and disposal cost." },
{ kind: "diagram", diagramId: "reverse-logistics", caption: "Conceptual framework for the topic." },
        ]
      },
      {
        id: "outsourcing-3pl-and-4pl",
        title: "Outsourcing, 3PL and 4PL",
        icon: "Handshake",
        blocks: [
          { kind: "paragraph", text: "Outsourcing transfers selected logistics activities to an external provider. A 3PL commonly executes defined transportation, warehousing or fulfillment services. A 4PL is more strongly associated with coordinating multiple logistics resources and providers. Outsourcing decisions should assess total cost, capability, control, dependency, service, data and continuity risks." },
        ]
      }
    ],
    keyTerms: [
      { term: "3PL", definition: "Third-party logistics provider performing specified logistics activities." },
      { term: "4PL", definition: "Lead logistics integration approach coordinating multiple logistics resources/providers." },
      { term: "Reverse logistics", definition: "Management of downstream-to-upstream flows for returns, recovery or disposal." }
    ],
    examQuestions: [
      "Explain warehouse types and objectives. (Long)",
      "Discuss warehouse strategy and facility location. (Long)",
      "Explain warehouse network design. (Long)",
      "Discuss reverse logistics. (Long)",
      "Distinguish 3PL and 4PL and discuss outsourcing decisions. (Long)"
    ]
  },
  {
    unitNumber: 5,
    title: "Supply Chain and CRM",
    hours: 8,
    headings: [
      {
        id: "supply-chain-and-crm-linkage",
        title: "Supply Chain and CRM Linkage",
        icon: "Link",
        blocks: [
          { kind: "paragraph", text: "CRM captures customer interactions, preferences, orders and feedback, while supply-chain systems use demand and order information to plan inventory and fulfillment. Linking CRM and SCM improves demand visibility, service design, order accuracy and customer communication. The linkage is most valuable when customer information is converted into operational decisions." },
{ kind: "diagram", diagramId: "crm-link", caption: "Conceptual framework for the topic." },
        ]
      },
      {
        id: "it-infrastructure-for-scm-and-crm",
        title: "IT Infrastructure for SCM and CRM",
        icon: "Monitor",
        blocks: [
          { kind: "paragraph", text: "IT infrastructure supports transaction processing, planning, visibility, integration and analytics. Supply-chain applications may manage orders, inventory, procurement, warehouses and transportation; CRM applications manage customer information, interactions and service. Integration reduces duplicate data and improves end-to-end visibility." },
        ]
      },
      {
        id: "functional-components-of-crm",
        title: "Functional Components of CRM",
        icon: "Users",
        blocks: [
          { kind: "paragraph", text: "CRM commonly includes operational functions for sales and service, analytical functions for customer-data analysis, and collaborative functions for coordinating interactions across channels. The relevant components should support customer acquisition, retention, service quality and informed decision-making." },
        ]
      },
      {
        id: "green-supply-chain-management",
        title: "Green Supply Chain Management",
        icon: "Leaf",
        blocks: [
          { kind: "paragraph", text: "Green SCM incorporates environmental considerations into sourcing, production, packaging, transportation, warehousing and end-of-life decisions. It can involve efficient transport, reduced packaging, responsible supplier selection, energy efficiency, recycling and reverse logistics. Green initiatives should be evaluated together with service, cost and operational feasibility." },
{ kind: "table", headers: ["Area", "Possible practice"], rows: [["Sourcing", "Environmental criteria for supplier selection"], ["Transport", "Load and route efficiency"], ["Packaging", "Reduced or recyclable material"], ["Warehousing", "Energy and resource efficiency"], ["End-of-life", "Reuse, recycling and responsible recovery"]] },
        ]
      },
      {
        id: "supply-chain-sustainability",
        title: "Supply Chain Sustainability",
        icon: "Globe",
        blocks: [
          { kind: "paragraph", text: "Sustainability considers long-term economic, environmental and social effects across the supply chain. It requires responsible sourcing, resilient operations, resource efficiency, appropriate labor practices and transparent governance. Sustainability is strongest when integrated into normal supply-chain decisions instead of being treated as a separate reporting activity." },
        ]
      }
    ],
    keyTerms: [
      { term: "CRM", definition: "Management of customer relationships, interactions and customer information." },
      { term: "Green SCM", definition: "Supply-chain management incorporating environmental considerations." },
      { term: "Supply-chain sustainability", definition: "Long-term management of economic, environmental and social impacts across supply-chain activities." }
    ],
    examQuestions: [
      "Explain the linkage between SCM and CRM. (Long)",
      "Discuss IT infrastructure used in SCM and CRM. (Long)",
      "Explain functional components of CRM. (Medium)",
      "Discuss green supply-chain management. (Long)",
      "Explain supply-chain sustainability. (Long)"
    ]
  }
];
