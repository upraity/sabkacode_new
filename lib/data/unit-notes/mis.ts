import { UnitNote } from "@/types";

// Detailed, in-app notes for Management Information Systems (BMB208) —
// AKTU MBA Sem 2. This subject's syllabus only has 3 units (Credit 2,
// 20 contact hours).
export const misUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Introduction to MIS and Information Technology",
    hours: 6,
    headings: [
      {
        id: "mis-need-purpose",
        title: "1. Need, Purpose and Objectives of MIS",
        icon: "Database",
        blocks: [
          {
            kind: "paragraph",
            text: "A Management Information System (MIS) is an integrated system that collects, processes, stores, and distributes information to support managerial decision-making, coordination, and control across an organisation.",
          },
          {
            kind: "paragraph",
            text: "Contemporary approaches to competitive advantage view MIS not just as a record-keeping tool but as a strategic instrument — recall how information systems and technology tie directly into Porter's Five Forces and competitive strategy (Strategic Management, Units 2-3): good information can lower costs, differentiate a firm's offering, or create switching costs that lock in customers.",
          },
        ],
      },
      {
        id: "it-trends",
        title: "2. Information Technology: Characteristics, Trends and Capabilities",
        icon: "Cpu",
        blocks: [
          {
            kind: "paragraph",
            text: "Characteristics of Information Technology: speed of processing, accuracy, ability to store vast amounts of data, and connectivity across locations.",
          },
          {
            kind: "paragraph",
            text: "Emerging trends in IT: cloud computing, artificial intelligence and machine learning, mobile-first systems, and Internet of Things (IoT) — all continuously reshaping what an MIS can capture and analyse.",
          },
          {
            kind: "paragraph",
            text: "IT Capabilities and organisational impact: IT can flatten organisational hierarchies (by enabling faster information flow directly to decision-makers), enable remote/distributed work, and support entirely new, IT-enabled business models (recall Business Model Innovation, Creativity/Innovation Unit 1).",
          },
          {
            kind: "paragraph",
            text: "IT-enabled services (ITES) refer to services delivered using IT and telecom infrastructure — call centres, back-office processing, and business process outsourcing (BPO) are classic examples, forming a major part of India's services sector (recall Operations Management, Unit 2).",
          },
        ],
      },
      {
        id: "tps",
        title: "3. Transaction Processing Systems (TPS)",
        icon: "Receipt",
        blocks: [
          {
            kind: "paragraph",
            text: "A Transaction Processing System (TPS) is the most basic and operational level of information system — it records and processes the routine, day-to-day transactions of the business (e.g., sales entries, payroll processing, order processing).",
          },
          { kind: "diagram", diagramId: "mis-pyramid", caption: "Fig 1.1 — The pyramid of organisational information systems" },
          {
            kind: "bullets",
            items: [
              "Characteristics of TPS: handles large volumes of routine, repetitive transactions; requires high accuracy and reliability; forms the foundational data layer that higher-level systems (MIS, DSS, EIS) draw upon.",
              "Importance: without accurate, timely TPS data, all higher-level management reporting and decision support becomes unreliable — \"garbage in, garbage out.\"",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "MIS", definition: "Management Information System — an integrated system supporting managerial decision-making with processed information." },
      { term: "ITES", definition: "IT-Enabled Services — services delivered using IT and telecom infrastructure, like BPOs." },
      { term: "TPS", definition: "Transaction Processing System — the operational-level system recording routine business transactions." },
    ],
    examQuestions: [
      "Explain the need, purpose, and objectives of MIS. (Medium)",
      "Discuss how MIS can be used as an instrument for competitive advantage. (Medium)",
      "Explain the emerging trends in Information Technology. (Medium)",
      "What is a Transaction Processing System? Explain its characteristics and importance. (Long)",
      "Explain the pyramid of organisational information systems (TPS to EIS). (Medium)",
    ],
  },
  {
    unitNumber: 2,
    title: "Information, Management and Decision Making",
    hours: 6,
    headings: [
      {
        id: "information-attributes",
        title: "1. Attributes of Information and Its Relevance to Decision-Making",
        icon: "Info",
        blocks: [
          {
            kind: "paragraph",
            text: "Good information for decision-making must have several key attributes: accuracy, timeliness (available when needed, not after the decision deadline), relevance to the specific decision, completeness, and reliability of its source.",
          },
          {
            kind: "paragraph",
            text: "The relevance of information varies by management level (recall the 3 levels of management, MCOB Unit 1) — operational managers need detailed, real-time transactional information, while top management needs highly summarised, trend-focused information for strategic decisions.",
          },
        ],
      },
      {
        id: "decision-making-models",
        title: "2. Models of Decision-Making",
        icon: "GitFork",
        blocks: [
          {
            kind: "table",
            headers: ["Model", "View of Decision-Making"],
            rows: [
              ["Classical (Rational) Model", "Assumes the decision-maker has complete information, considers ALL possible alternatives, and chooses the objectively optimal one"],
              ["Administrative Model (Herbert Simon)", "Argues real-world managers have 'bounded rationality' — limited information, time, and cognitive capacity — so they \"satisfice\" (choose the first satisfactory option) rather than truly optimise"],
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam tip",
            text: "Herbert Simon's model is the more realistic and heavily tested one — his key insight is that managers don't have infinite time/information to find the 'perfect' decision (as the Classical model assumes), so they stop searching once they find an option that's 'good enough,' a concept he called satisficing.",
          },
        ],
      },
      {
        id: "management-support-systems",
        title: "3. Management Support Systems: DSS, GDSS and EIS",
        icon: "LayoutDashboard",
        blocks: [
          {
            kind: "table",
            headers: ["System", "Purpose", "Used by"],
            rows: [
              ["Decision Support System (DSS)", "Helps analyse data and model 'what-if' scenarios for semi-structured decisions", "Middle/senior management"],
              ["Group Decision Support System (GDSS)", "Facilitates collaborative decision-making among multiple people, often in a meeting setting", "Teams/committees"],
              ["Executive Information System (EIS)", "Provides highly summarised, easy-to-navigate strategic information (dashboards, key metrics)", "Top/executive management"],
            ],
          },
          {
            kind: "paragraph",
            text: "These systems sit progressively higher in the MIS pyramid shown in Unit 1 — DSS and GDSS support semi-structured, analytical decisions, while EIS supports the broad, strategic decisions of top management (recall Strategic Management, Unit 1).",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Bounded Rationality", definition: "Herbert Simon's concept that decision-makers have limited information, time, and cognitive capacity." },
      { term: "Satisficing", definition: "Choosing the first satisfactory option rather than searching for the theoretically optimal one." },
      { term: "DSS", definition: "Decision Support System — helps analyse data and model scenarios for semi-structured decisions." },
    ],
    examQuestions: [
      "Discuss the attributes of good information for decision-making. (Medium)",
      "Explain the Classical and Administrative (Herbert Simon) models of decision-making. (Long)",
      "What is bounded rationality? Explain the concept of satisficing. (Medium)",
      "Differentiate between DSS, GDSS, and EIS. (Long)",
    ],
  },
  {
    unitNumber: 3,
    title: "Managing Data Resources",
    hours: 8,
    headings: [
      {
        id: "data-management-challenges",
        title: "1. Need for Data Management and Its Challenges",
        icon: "Server",
        blocks: [
          {
            kind: "paragraph",
            text: "As organisations generate ever-growing volumes of data, effective data management becomes essential to ensure that data is accurate, accessible, and secure.",
          },
          {
            kind: "table",
            headers: ["Challenge", "Meaning"],
            rows: [
              ["Data Redundancy", "The same data stored in multiple, disconnected places, wasting storage and risking inconsistency"],
              ["Data Inconsistency", "The same data item having different values in different places due to redundancy"],
              ["Data Dependence", "Application programs tightly tied to the specific way data is stored, making changes difficult"],
              ["Data Administration", "The organisational function responsible for setting policies and standards for data quality, security, and access"],
            ],
          },
          {
            kind: "paragraph",
            text: "Data Independence (a key benefit of a proper database approach) means the way data is physically stored can be changed without needing to rewrite the application programs that use it — solving the data dependence problem above.",
          },
        ],
      },
      {
        id: "dbms",
        title: "2. Database Management System (DBMS)",
        icon: "Database",
        blocks: [
          {
            kind: "paragraph",
            text: "A DBMS is software that manages the creation, storage, retrieval, and security of data in a structured, centralised way — directly solving the redundancy and inconsistency problems above.",
          },
          {
            kind: "table",
            headers: ["Concept", "Meaning"],
            rows: [
              ["Field", "A single piece of data (e.g., a customer's name)"],
              ["Record", "A collection of related fields (e.g., all details of one customer)"],
              ["Table", "A collection of related records (e.g., all customers)"],
              ["View", "A customised, often restricted, way of looking at data from one or more tables"],
              ["Query", "A request to retrieve specific data matching given conditions"],
              ["Report", "A formatted, organised presentation of queried data for human reading"],
            ],
          },
          {
            kind: "paragraph",
            text: "Types of DBMS: hierarchical, network, relational (the most common today — data stored in related tables, e.g., MySQL, Oracle), and object-oriented DBMS.",
          },
        ],
      },
      {
        id: "warehouse-mining-bi",
        title: "3. Data Warehouse, Data Mining and Business Intelligence",
        icon: "Warehouse",
        blocks: [
          {
            kind: "table",
            headers: ["Concept", "Meaning"],
            rows: [
              ["Data Warehouse", "A large, centralised repository that consolidates data from multiple sources across the organisation, optimised for analysis and reporting rather than daily transactions"],
              ["Data Mining", "The process of discovering hidden patterns, correlations, and trends within large data sets, using statistical and machine-learning techniques (recall Cluster Analysis, Business Statistics Unit 4)"],
              ["Business Intelligence (BI)", "The broader set of tools, technologies, and practices for collecting, integrating, and analysing business data to support better decision-making — data warehousing and data mining are core BI building blocks"],
            ],
          },
          {
            kind: "paragraph",
            text: "Database Management System (Lab): practical skills covered include creating tables (defining fields and data types), creating views and reports, and the basics of SQL (Structured Query Language) — the standard language for querying and manipulating relational databases (e.g., a basic query: SELECT name, sales FROM customers WHERE sales > 50000;).",
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
            title: "Case study — Amazon's use of data mining",
            text: "Amazon's \"customers who bought this also bought...\" recommendation feature is a widely cited real-world application of data mining — analysing purchase pattern data across millions of transactions to identify hidden associations between products, directly driving additional sales.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Data Independence", definition: "The ability to change how data is physically stored without needing to rewrite application programs." },
      { term: "Data Warehouse", definition: "A centralised repository consolidating data from multiple sources, optimised for analysis." },
      { term: "SQL", definition: "Structured Query Language — the standard language for querying and manipulating relational databases." },
    ],
    examQuestions: [
      "Discuss the challenges of data management: redundancy, inconsistency, and dependence. (Medium)",
      "Explain the key concepts of a DBMS: fields, records, tables, views, queries, and reports. (Long)",
      "Differentiate between a data warehouse and data mining. (Medium)",
      "Explain the concept and importance of Business Intelligence. (Medium)",
      "Write a basic SQL query to retrieve specific records from a table. (Short)",
    ],
  },
];
