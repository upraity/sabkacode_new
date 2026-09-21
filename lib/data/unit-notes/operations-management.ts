import { UnitNote } from "@/types";

// Detailed, in-app notes for Operations Management (BMB205) — AKTU MBA
// Sem 2.
export const operationsManagementUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Production Concepts",
    hours: 7,
    headings: [
      {
        id: "production-operations",
        title: "1. Meaning, Nature and Scope of Production & Operations Management",
        icon: "Factory",
        blocks: [
          {
            kind: "paragraph",
            text: "Production Management traditionally focused on manufacturing physical goods; Operations Management broadened this to cover the transformation of ANY inputs (materials, labour, information) into outputs — including services — making it the more comprehensive, modern term.",
          },
          {
            kind: "table",
            headers: ["Aspect", "Production Management", "Operations Management"],
            rows: [
              ["Focus", "Manufacturing/physical goods", "Both goods and services"],
              ["Scope", "Narrower — shop floor activities", "Broader — includes service delivery, supply chain, quality"],
            ],
          },
        ],
      },
      {
        id: "productivity",
        title: "2. Productivity: Factors and Measurement",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "paragraph",
            text: "Productivity is the ratio of output to input: Productivity = Output ÷ Input. Higher productivity means producing more with the same (or fewer) resources.",
          },
          {
            kind: "bullets",
            items: [
              "Factors affecting productivity: technology and equipment, workforce skill and motivation (recall Motivation theories, MCOB Unit 4), work methods, and management quality.",
              "Productivity measurement: partial productivity ratios (e.g., output per labour hour, output per unit of material) vs. total factor productivity (output relative to ALL inputs combined).",
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Labour Productivity",
            text: "A factory produces 5,000 units using 250 labour hours. Labour Productivity = 5,000 ÷ 250 = 20 units per labour hour. If a process improvement allows the same 250 hours to produce 5,500 units, productivity rises to 5,500 ÷ 250 = 22 units per hour — a 10% productivity improvement.",
          },
          {
            kind: "paragraph",
            text: "Work Study and Work Measurement: Method Study analyses and improves the way a job is done (finding the most efficient method); Work Measurement (time study) determines the standard time a qualified worker should take to complete a task at a defined pace — together these form the basis for setting fair production standards and incentive schemes (recall Labour Cost, Cost & Management Accounting Unit 1).",
          },
        ],
      },
      {
        id: "production-technology-layout",
        title: "3. Production Technology and Plant Layout",
        icon: "LayoutGrid",
        blocks: [
          {
            kind: "table",
            headers: ["Type of Manufacturing Process", "Description", "Example"],
            rows: [
              ["Job Production", "One-off, customised production", "Custom furniture, ships"],
              ["Batch Production", "Groups of identical items produced together", "Bakery products, pharmaceuticals"],
              ["Mass Production", "Continuous, large-scale production of standardised items", "Automobiles on an assembly line"],
              ["Continuous/Process Production", "Uninterrupted, highly automated flow production", "Oil refining, chemicals, cement"],
            ],
          },
          {
            kind: "table",
            headers: ["Plant Layout Type", "Description"],
            rows: [
              ["Process Layout", "Machines/departments grouped by function (all lathes together, all welding together) — flexible for varied products, but material movement is complex"],
              ["Product Layout", "Machines arranged in the sequence of the production process for one specific product — efficient for high-volume standardised output (an assembly line)"],
              ["Fixed-Position Layout", "The product stays in one place; workers/equipment/materials come to it — used for very large or immovable products (ships, aircraft, buildings)"],
              ["Cellular Layout", "Machines grouped into 'cells' to produce a family of similar products efficiently — combines some flexibility of process layout with some efficiency of product layout"],
            ],
          },
          {
            kind: "paragraph",
            text: "Plant location decisions weigh factors like proximity to raw materials/markets, availability of labour and infrastructure, government incentives, and transportation costs.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Productivity", definition: "The ratio of output produced to input used." },
      { term: "Method Study", definition: "Analysing and improving the way a job is performed." },
      { term: "Product Layout", definition: "A plant layout arranged in the sequence of a specific product's production process." },
    ],
    examQuestions: [
      "Differentiate between production management and operations management. (Short)",
      "Explain the factors affecting productivity and its measurement, with a numerical example. (Numerical, Medium)",
      "Explain method study and work measurement. (Medium)",
      "Discuss the types of manufacturing processes with examples. (Long)",
      "Explain the different types of plant layout with examples. (Long)",
    ],
  },
  {
    unitNumber: 2,
    title: "Operations Concepts (Services)",
    hours: 8,
    headings: [
      {
        id: "services-scenario",
        title: "1. Services Scenario in India and Product vs. Service",
        icon: "Store",
        blocks: [
          {
            kind: "paragraph",
            text: "India's services sector now contributes over half of the country's GDP — spanning IT services, banking, healthcare, education, and hospitality — making service operations management increasingly critical.",
          },
          {
            kind: "table",
            headers: ["Characteristic", "Product (Good)", "Service"],
            rows: [
              ["Tangibility", "Tangible — can be seen/touched", "Intangible"],
              ["Storage", "Can be stored as inventory", "Cannot be stored (perishable — an empty airline seat is lost revenue forever)"],
              ["Production & Consumption", "Separated in time and place", "Often simultaneous (a haircut is produced and consumed at the same time)"],
              ["Consistency", "Standardised, consistent quality", "Variable — depends heavily on the person delivering it"],
            ],
          },
          {
            kind: "paragraph",
            text: "Classification of services: by degree of customer contact (high-contact like healthcare vs. low-contact like an ATM), by tangibility of the service act, and by whether the service is directed at people or at possessions.",
          },
        ],
      },
      {
        id: "service-design",
        title: "2. Service Design and Capacity Planning",
        icon: "PencilRuler",
        blocks: [
          {
            kind: "paragraph",
            text: "Service Design decisions must account for factors like the level of customer involvement, customisation vs. standardisation trade-offs, and the physical environment (\"servicescape\") where the service is delivered.",
          },
          {
            kind: "paragraph",
            text: "Service Blueprinting is a technique that maps out every step of a service process — separating what's visible to the customer (the \"line of visibility\") from the invisible backstage support activities — helping identify potential failure points before they happen.",
          },
          {
            kind: "paragraph",
            text: "Service Capacity Planning is challenging because services can't be stored as inventory (recall the perishability characteristic above) — so firms use strategies like flexible staffing, reservation systems, and demand-shifting through pricing (e.g., off-peak discounts) to match capacity with fluctuating demand.",
          },
        ],
      },
      {
        id: "service-quality",
        title: "3. Dimensions of Service Quality and SERVQUAL",
        icon: "Star",
        blocks: [
          {
            kind: "paragraph",
            text: "Key dimensions of service quality: Reliability (performing the promised service dependably), Responsiveness (willingness to help promptly), Assurance (staff knowledge and ability to inspire trust), Empathy (individualised attention), and Tangibles (physical facilities/appearance).",
          },
          {
            kind: "paragraph",
            text: "The Service Quality Gap Model identifies WHERE a service can fail to meet customer expectations:",
          },
          { kind: "diagram", diagramId: "servqual-gaps", caption: "Fig 2.1 — The SERVQUAL Gap Model" },
          {
            kind: "paragraph",
            text: "SERVQUAL is a widely used survey instrument that measures service quality by comparing customers' expectations against their actual perceptions across the five dimensions above — the bigger the gap between expectation and perception, the lower the perceived service quality.",
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
            title: "Case study — Taj Hotels' service recovery culture",
            text: "Taj Hotels are frequently studied for empowering front-line staff to resolve customer complaints on the spot without needing manager approval — directly addressing Gap 3 (the delivery gap) in the SERVQUAL model, by closing the gap between service standards and actual service delivery in real time.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Perishability", definition: "The inability to store a service as inventory for later use." },
      { term: "Service Blueprinting", definition: "A technique mapping every step of a service process, including visible and backstage activities." },
      { term: "SERVQUAL", definition: "A survey instrument measuring service quality across five dimensions by comparing expectation to perception." },
    ],
    examQuestions: [
      "Differentiate between a product and a service with examples. (Medium)",
      "Explain the classification of services. (Short)",
      "Explain service blueprinting and its usefulness. (Medium)",
      "Discuss the challenges of service capacity planning. (Medium)",
      "Explain the SERVQUAL model and the five gaps in service quality. (Long)",
    ],
  },
  {
    unitNumber: 3,
    title: "Material and Inventory Management",
    hours: 10,
    headings: [
      {
        id: "ppc",
        title: "1. Production Planning and Control (PPC)",
        icon: "ClipboardList",
        blocks: [
          {
            kind: "paragraph",
            text: "Production Planning and Control (PPC) ensures the right quantity of the right product is manufactured at the right time, using resources efficiently.",
          },
          {
            kind: "bullets",
            items: [
              "Routing: determining the sequence of operations and the path materials will take through the production process.",
              "Scheduling: setting the specific timing (start/end times) for each operation.",
              "Loading: assigning specific jobs to specific machines/workstations, ensuring workload is balanced.",
            ],
          },
          {
            kind: "paragraph",
            text: "Material Requirement Planning (MRP) is a computer-based system that calculates exactly what materials/components are needed, in what quantities, and when — based on the production schedule and the product's Bill of Materials (BOM). An Aggregate Production Plan sets overall production levels, workforce size, and inventory levels for a medium-term horizon (often 6-18 months), balancing demand forecasts against capacity.",
          },
        ],
      },
      {
        id: "inventory-types",
        title: "2. Types of Inventories and Control Techniques",
        icon: "Boxes",
        blocks: [
          {
            kind: "paragraph",
            text: "Types of inventory: raw materials, work-in-progress (WIP), finished goods, and MRO (maintenance, repair, and operating supplies).",
          },
          {
            kind: "table",
            headers: ["Technique", "Basis of Classification"],
            rows: [
              ["ABC Analysis", "Value — 'A' items (few items, high value, tight control), 'B' items (moderate), 'C' items (many items, low value, loose control)"],
              ["VED Analysis", "Criticality — Vital, Essential, Desirable (used mainly for spare parts)"],
              ["FSN Analysis", "Movement — Fast-moving, Slow-moving, Non-moving"],
              ["HML Analysis", "Unit price — High, Medium, Low price items"],
              ["SDE Analysis", "Availability/sourcing difficulty — Scarce, Difficult, Easy to procure"],
            ],
          },
        ],
      },
      {
        id: "eoq",
        title: "3. Economic Order Quantity (EOQ)",
        icon: "Repeat",
        blocks: [
          {
            kind: "paragraph",
            text: "EOQ is the order quantity that minimises the TOTAL cost of inventory — the sum of Ordering Cost (which falls as order size increases, since fewer orders are placed) and Carrying/Holding Cost (which rises as order size increases, since more stock sits in the warehouse).",
          },
          { kind: "diagram", diagramId: "eoq-curve", caption: "Fig 3.1 — The EOQ cost curve" },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — EOQ",
            text: "Annual demand (D) = 10,000 units. Ordering cost per order (O) = ₹100. Carrying cost per unit per year (C) = ₹8. EOQ = √(2DO ÷ C) = √(2 × 10,000 × 100 ÷ 8) = √(20,00,000 ÷ 8) = √2,50,000 = 500 units. So the firm should order 500 units at a time. Number of orders per year = 10,000 ÷ 500 = 20 orders. Total ordering cost = 20 × ₹100 = ₹2,000. Total carrying cost = (500 ÷ 2) × ₹8 = 250 × 8 = ₹2,000. Notice these are equal at the EOQ point — that's exactly what the EOQ formula guarantees: total cost is minimised where ordering cost equals carrying cost.",
          },
        ],
      },
      {
        id: "jit-kanban",
        title: "4. Just-in-Time (JIT) and KANBAN",
        icon: "Timer",
        blocks: [
          {
            kind: "paragraph",
            text: "Just-in-Time (JIT) is a production philosophy where materials/components arrive exactly when needed in the production process — minimising inventory holding cost close to zero, but requiring extremely reliable suppliers and processes (any disruption stops production immediately, since there's no buffer stock).",
          },
          {
            kind: "paragraph",
            text: "KANBAN is a visual signalling system (traditionally physical cards, now often digital) used to implement JIT — a downstream workstation only pulls (requests) materials from the upstream station when it actually needs them, preventing overproduction and controlling work-in-progress levels.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "MRP", definition: "Material Requirement Planning — a system calculating exactly what materials are needed and when." },
      { term: "EOQ", definition: "Economic Order Quantity — the order size that minimises total ordering plus carrying cost." },
      { term: "JIT", definition: "Just-in-Time — a production philosophy minimising inventory by having materials arrive exactly when needed." },
      { term: "KANBAN", definition: "A visual pull-based signalling system used to implement JIT." },
    ],
    examQuestions: [
      "Explain the process of production planning and control (routing, scheduling, loading). (Medium)",
      "Explain Material Requirement Planning (MRP). (Medium)",
      "Explain ABC, VED, and FSN analysis of inventory control. (Long)",
      "Calculate the EOQ, number of orders, and total inventory cost from given data. (Numerical, Long)",
      "Explain JIT and KANBAN and how they help minimise inventory. (Medium)",
    ],
  },
  {
    unitNumber: 4,
    title: "Supply Chain Management",
    hours: 8,
    headings: [
      {
        id: "scm-overview",
        title: "1. Overview and Conceptual Model of SCM",
        icon: "Truck",
        blocks: [
          {
            kind: "paragraph",
            text: "Supply Chain Management (SCM) coordinates the flow of materials, information, and finances across the entire network — from raw material suppliers, through manufacturing, to the end customer (extending the distribution channel concept from Marketing Management, Unit 4).",
          },
          {
            kind: "paragraph",
            text: "Supply Chain Drivers — the factors managers can adjust to balance responsiveness against efficiency: Inventory, Transportation, Facilities, and Information.",
          },
          {
            kind: "paragraph",
            text: "Measuring supply chain performance: metrics like order fulfilment cycle time, inventory turnover, perfect order rate, and total supply chain cost.",
          },
        ],
      },
      {
        id: "logistics-bullwhip",
        title: "2. Logistics, the Bullwhip Effect, and Push/Pull Systems",
        icon: "Waves",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Inbound logistics: moving raw materials/components INTO the production facility.",
              "Outbound logistics: moving finished goods OUT to customers (recall Value Chain Analysis, Strategic Management Unit 2).",
              "Global Supply Chain: adds complexity from international shipping times, customs/tariffs, and currency risk.",
            ],
          },
          {
            kind: "paragraph",
            text: "The Bullwhip Effect describes how small fluctuations in actual customer demand get progressively amplified into much larger swings in orders as you move upstream through the supply chain (retailer → distributor → manufacturer → raw material supplier) — caused by factors like order batching, demand forecasting errors, and price fluctuations/promotions.",
          },
          {
            kind: "table",
            headers: ["System", "Approach"],
            rows: [
              ["Push System", "Production is based on demand FORECASTS, pushing goods toward the market in anticipation of demand (traditional mass production)"],
              ["Pull System", "Production is triggered by ACTUAL customer demand/orders (recall JIT and KANBAN above) — reduces excess inventory but requires a very responsive supply chain"],
            ],
          },
        ],
      },
      {
        id: "lean-agile-forecasting",
        title: "3. Lean/Agile Manufacturing, Role of IT, and Demand Forecasting",
        icon: "Zap",
        blocks: [
          {
            kind: "paragraph",
            text: "Lean Manufacturing focuses on eliminating waste (recall the 5S and JIT concepts) to maximise efficiency for predictable, high-volume demand. Agile Manufacturing prioritises flexibility and speed to respond to unpredictable, rapidly changing demand — many modern supply chains use a hybrid \"leagile\" approach, lean up to a point and agile closer to the customer.",
          },
          {
            kind: "paragraph",
            text: "Role of IT in SCM: Enterprise Resource Planning (ERP) systems, RFID/barcode tracking, and real-time data sharing across supply chain partners all reduce the information delays that cause the Bullwhip Effect.",
          },
          {
            kind: "paragraph",
            text: "Demand Forecasting methods in supply chain:",
          },
          {
            kind: "table",
            headers: ["Method", "How it works"],
            rows: [
              ["Simple Moving Average", "Averages demand over the last N periods equally"],
              ["Weighted Moving Average", "Averages recent periods but gives MORE weight to more recent data"],
              ["Linear Regression", "Fits a trend line to historical demand data to project forward (recall Trend Analysis, Business Statistics Unit 2)"],
              ["Exponential Smoothing", "Weights the most recent actual demand and the previous forecast, with recent data weighted more heavily via a smoothing constant (α)"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — 3-period Simple Moving Average",
            text: "Actual demand for the last 3 months: Month 1 = 200 units, Month 2 = 220 units, Month 3 = 240 units. Forecast for Month 4 = (200 + 220 + 240) ÷ 3 = 660 ÷ 3 = 220 units.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Bullwhip Effect", definition: "The amplification of small demand fluctuations into larger swings moving upstream in a supply chain." },
      { term: "Push System", definition: "A production system based on demand forecasts, pushing goods toward the market." },
      { term: "Pull System", definition: "A production system triggered by actual customer demand." },
    ],
    examQuestions: [
      "Explain the conceptual model of supply chain management and its key drivers. (Medium)",
      "Explain the Bullwhip Effect and its causes. (Long)",
      "Differentiate between push and pull systems. (Short)",
      "Differentiate between lean and agile manufacturing. (Medium)",
      "Forecast demand using the simple moving average method, given historical data. (Numerical, Medium)",
      "Explain the role of IT in supply chain management. (Short)",
    ],
  },
  {
    unitNumber: 5,
    title: "Productivity and Quality",
    hours: 7,
    headings: [
      {
        id: "tqm-gurus",
        title: "1. Total Quality Management: Deming, Juran and PDCA",
        icon: "Award",
        blocks: [
          {
            kind: "paragraph",
            text: "Total Quality Management (TQM) is an organisation-wide philosophy that makes quality everyone's responsibility, focused on continuous improvement and customer satisfaction — directly connecting to the HRM-TQM linkage discussed in MCOB, Unit 1.",
          },
          {
            kind: "paragraph",
            text: "Deming's 14 Points are a set of management principles for transforming business effectiveness, emphasising: constancy of purpose toward improvement, driving out fear (so employees can report problems honestly), breaking down barriers between departments, and continuous training.",
          },
          {
            kind: "paragraph",
            text: "Juran's Quality Trilogy breaks quality management into three interrelated processes: Quality Planning (designing processes to meet quality goals), Quality Control (monitoring and correcting deviations during operations), and Quality Improvement (a structured process for achieving unprecedented, breakthrough levels of performance).",
          },
          { kind: "diagram", diagramId: "pdca-cycle", caption: "Fig 5.1 — The PDCA (Deming) Cycle" },
          {
            kind: "paragraph",
            text: "The PDCA Cycle (Plan-Do-Check-Act) is a continuous, four-stage cycle for quality improvement: Plan a change, Do (implement it on a small scale), Check the results, and Act (standardise if successful, or adjust and repeat if not).",
          },
        ],
      },
      {
        id: "kaizen-circles-tools",
        title: "2. KAIZEN, Quality Circles and 7 QC Tools",
        icon: "Sparkles",
        blocks: [
          {
            kind: "paragraph",
            text: "KAIZEN is the Japanese philosophy of continuous, incremental improvement involving every employee — small, ongoing improvements rather than occasional, large, radical changes (contrast with Business Process Reengineering, Strategic Management Unit 4, which IS radical/one-time).",
          },
          {
            kind: "paragraph",
            text: "Quality Circles are small groups of employees who voluntarily meet regularly to identify, analyse, and solve work-related quality problems in their own area.",
          },
          {
            kind: "table",
            headers: ["7 QC Tools", "Purpose"],
            rows: [
              ["Cause-and-Effect (Fishbone/Ishikawa) Diagram", "Identifies possible root causes of a problem"],
              ["Check Sheet", "Simple structured form for collecting and counting data in real time"],
              ["Control Chart", "Tracks a process over time to distinguish normal variation from a genuine problem"],
              ["Histogram", "Shows the frequency distribution of a data set (recall Business Statistics, Unit 1)"],
              ["Pareto Chart", "Shows which few causes account for most of the problems (based on the 80/20 rule)"],
              ["Scatter Diagram", "Shows the relationship between two variables (recall Correlation, Business Statistics Unit 3)"],
              ["Flowchart / Stratification", "Maps out a process step by step, or breaks data down into meaningful subgroups"],
            ],
          },
          {
            kind: "paragraph",
            text: "The New 7 Management Tools extend these into more strategic/planning-oriented tools — like the Affinity Diagram (organising large numbers of ideas into natural groupings) and the Tree Diagram (breaking a broad goal into increasingly detailed action steps).",
          },
        ],
      },
      {
        id: "iso-six-sigma-tpm",
        title: "3. ISO 9000, Six Sigma, TPM and 5S",
        icon: "ShieldCheck",
        blocks: [
          {
            kind: "table",
            headers: ["Standard/Tool", "Description"],
            rows: [
              ["ISO 9000:2000 Clauses", "An international quality management standard, with clauses covering the quality management system, management responsibility, resource management, product realisation, and measurement/analysis/improvement"],
              ["Six Sigma", "A rigorous, data-driven methodology aiming to reduce process defects to near-zero (3.4 defects per million opportunities), typically using the DMAIC framework: Define, Measure, Analyse, Improve, Control"],
              ["Total Productive Maintenance (TPM)", "A maintenance philosophy involving ALL employees (not just maintenance staff) in maximising equipment effectiveness and preventing breakdowns before they happen"],
              ["5S", "A workplace organisation methodology: Sort, Set in order, Shine, Standardize, Sustain — creating a clean, organised, and efficient workplace"],
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
            title: "Case study — Toyota Production System (TPS)",
            text: "The Toyota Production System is the origin of many concepts in this unit and the previous one (JIT, KANBAN, KAIZEN, and a strong quality culture) — Toyota's relentless focus on eliminating waste and empowering every worker to stop the production line the moment they spot a defect (the \"Andon cord\") is the single most-cited case study in operations and quality management globally.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "PDCA Cycle", definition: "Plan-Do-Check-Act — Deming's continuous cycle for quality improvement." },
      { term: "KAIZEN", definition: "The Japanese philosophy of continuous, incremental improvement involving every employee." },
      { term: "Six Sigma", definition: "A data-driven methodology aiming to reduce process defects to near-zero, using the DMAIC framework." },
      { term: "5S", definition: "A workplace organisation methodology: Sort, Set in order, Shine, Standardize, Sustain." },
    ],
    examQuestions: [
      "Explain Deming's 14 points and the PDCA cycle. (Long)",
      "Explain Juran's Quality Trilogy. (Medium)",
      "Discuss KAIZEN and quality circles. (Medium)",
      "Explain any four of the 7 QC tools with their uses. (Long)",
      "Explain Six Sigma and the DMAIC framework. (Medium)",
      "Explain Total Productive Maintenance and 5S. (Medium)",
    ],
  },
];
