import { UnitNote } from "@/types";

// Detailed, in-app notes for Principles of Management (BBA101) — AKTU BBA
// Sem 1.
export const principlesOfManagementUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Fundamentals of Management",
    hours: 7,
    headings: [
      {
        id: "definitions-process",
        title: "1. Definition, Functions and Process of Management",
        icon: "BookOpen",
        blocks: [
          {
            kind: "paragraph",
            text: "Management is the process of planning, organising, staffing, directing, and controlling an organisation's resources (people, money, materials) to achieve its goals efficiently and effectively.",
          },
          {
            kind: "paragraph",
            text: "Scope and significance of management: management applies to every kind of organisation — business, government, non-profit — and is significant because it optimally uses scarce resources, achieves group goals, and adapts an organisation to a changing environment.",
          },
        ],
      },
      {
        id: "managerial-roles-skills",
        title: "2. Managerial Roles and Skills",
        icon: "UserCog",
        blocks: [
          {
            kind: "paragraph",
            text: "Henry Mintzberg identified 10 managerial roles across three categories: Interpersonal roles (figurehead, leader, liaison), Informational roles (monitor, disseminator, spokesperson), and Decisional roles (entrepreneur, disturbance handler, resource allocator, negotiator).",
          },
          {
            kind: "paragraph",
            text: "Robert Katz's managerial skills — Technical, Human, and Conceptual — vary in importance by level: technical skill matters most at the supervisory level, conceptual skill matters most at the top level, while human skill is equally vital at every level.",
          },
        ],
      },
      {
        id: "management-vs-administration",
        title: "3. Management vs. Administration",
        icon: "GitCompare",
        blocks: [
          {
            kind: "table",
            headers: ["Basis", "Management", "Administration"],
            rows: [
              ["Nature", "An executing function — getting things done", "A determining function — deciding broad policy and objectives"],
              ["Level", "Middle and lower level", "Top level"],
              ["Scope", "Narrower — implementing decisions", "Broader — planning and framing objectives"],
            ],
          },
        ],
      },
      {
        id: "evolution-taylor-fayol",
        title: "4. Contributions of Taylor, Fayol and the Behavioural Schools",
        icon: "History",
        blocks: [
          {
            kind: "table",
            headers: ["Thinker/School", "Key Contribution"],
            rows: [
              ["F.W. Taylor (Scientific Management)", "Time-motion study, standardisation of work methods, the 'one best way' of doing a job, differential piece-rate wage system"],
              ["Henri Fayol (Administrative Theory)", "14 Principles of Management (division of work, authority, unity of command, etc.) and the 5 functions of management"],
              ["Human Relations School (Elton Mayo, Hawthorne Studies)", "Employee productivity is influenced by social/psychological factors, not just physical conditions or pay"],
              ["Behavioural School", "Built on Human Relations findings, emphasising motivation, group dynamics, and leadership (recall Motivation theories and Leadership, Organizational Behaviour Units 2 and 5)"],
            ],
          },
        ],
      },
      {
        id: "indian-ethos",
        title: "5. Indian Ethos in Management",
        icon: "Landmark",
        blocks: [
          {
            kind: "paragraph",
            text: "Indian Ethos in Management draws management principles from ancient Indian texts (like the Bhagavad Gita, Arthashastra) — emphasising work as duty (\"karma yoga\") without excessive attachment to results, ethical conduct, holistic well-being of all stakeholders, and selfless service (\"seva\") as sound leadership principles that complement modern Western management theory.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Scientific Management", definition: "Taylor's approach of studying work scientifically to find the most efficient method." },
      { term: "Mintzberg's Managerial Roles", definition: "10 roles across interpersonal, informational, and decisional categories that managers perform." },
      { term: "Indian Ethos", definition: "Management principles drawn from ancient Indian philosophy, emphasising duty and ethical conduct." },
    ],
    examQuestions: [
      "Define management. Explain its functions and process. (Medium)",
      "Explain Mintzberg's managerial roles. (Long)",
      "Differentiate between management and administration. (Short)",
      "Discuss the contributions of Taylor and Fayol to management thought. (Long)",
      "Explain the concept of Indian ethos in management. (Medium)",
    ],
  },
  {
    unitNumber: 2,
    title: "Planning and Organizing",
    hours: 8,
    headings: [
      {
        id: "planning-concept",
        title: "1. Concept, Objectives, Types and Process of Planning",
        icon: "Map",
        blocks: [
          {
            kind: "paragraph",
            text: "Planning is deciding in advance what to do, how to do it, and who will do it — the first and most fundamental managerial function. Its objectives are to reduce uncertainty, focus attention on goals, and provide the basis for control.",
          },
          {
            kind: "paragraph",
            text: "Planning Premises are the assumptions (about the future economic, political, and market environment) on which a plan is based — accurate premises are essential for a plan to remain realistic.",
          },
          { kind: "diagram", diagramId: "planning-process", caption: "Fig 2.1 — The planning process" },
          {
            kind: "paragraph",
            text: "Types of planning: strategic (long-term, top management), tactical (medium-term, middle management), and operational (short-term, day-to-day) — a hierarchy of plans that cascade from broad direction down to specific action.",
          },
        ],
      },
      {
        id: "mbo",
        title: "2. Management by Objectives (MBO)",
        icon: "Target",
        blocks: [
          {
            kind: "paragraph",
            text: "Management by Objectives, popularised by Peter Drucker, is an approach where managers and employees jointly set specific, measurable objectives, and performance is later reviewed against them — increasing clarity and commitment compared to purely top-down goal-setting.",
          },
          { kind: "diagram", diagramId: "mbo-process", caption: "Fig 2.2 — The MBO cycle" },
        ],
      },
      {
        id: "organization-structure",
        title: "3. Organization: Nature, Significance and Structure",
        icon: "Building2",
        blocks: [
          {
            kind: "paragraph",
            text: "Organizing is the managerial function of arranging people and resources into a workable structure to accomplish planned objectives.",
          },
          {
            kind: "table",
            headers: ["Concept", "Meaning"],
            rows: [
              ["Formal Organization", "The officially sanctioned structure with defined roles, authority, and communication channels"],
              ["Informal Organization", "The natural network of personal and social relationships that forms alongside the formal structure"],
              ["Hierarchy", "The chain of authority from top management down to the lowest level, defining who reports to whom"],
              ["Line Relationship", "Direct authority relationship along the chain of command"],
              ["Staff Relationship", "Advisory relationship — specialists support line managers without direct command authority"],
            ],
          },
        ],
      },
      {
        id: "delegation-decentralization",
        title: "4. Delegation, Decentralization and Span of Control",
        icon: "Share2",
        blocks: [
          {
            kind: "paragraph",
            text: "Delegation of Authority is the process by which a manager assigns part of their work and authority to a subordinate, while remaining accountable for the outcome — involving Authority (the right to decide), Responsibility (the obligation to perform), and Accountability (being answerable, which can never be fully delegated).",
          },
          {
            kind: "paragraph",
            text: "Decentralization means systematically pushing decision-making authority down to lower levels of the organisation, as opposed to Centralization, where it stays concentrated at the top.",
          },
          {
            kind: "paragraph",
            text: "Span of Control refers to the number of subordinates a manager can effectively supervise — a narrow span means fewer subordinates per manager (more hierarchy levels), while a wide span means more subordinates per manager (a flatter structure).",
          },
        ],
      },
      {
        id: "case-studies",
        title: "5. Case Study",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Google's flat organizational structure",
            text: "Google has historically maintained a relatively flat structure with a wide span of control, encouraging faster decision-making and more employee autonomy — a deliberate structural choice reflecting its need for agility and innovation, in contrast to more hierarchical, narrow-span structures common in traditional manufacturing firms.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Planning Premises", definition: "The assumptions about the future environment on which a plan is based." },
      { term: "Span of Control", definition: "The number of subordinates a manager can effectively supervise." },
      { term: "Decentralization", definition: "Systematically pushing decision-making authority down to lower organisational levels." },
    ],
    examQuestions: [
      "Explain the concept, objectives, and process of planning. (Long)",
      "Discuss the types of planning with examples. (Medium)",
      "Explain MBO and its process. (Medium)",
      "Differentiate between formal and informal organization. (Short)",
      "Explain delegation of authority and its elements. (Long)",
      "Differentiate between centralization and decentralization. (Short)",
      "Explain the concept of span of control and its effect on organizational structure. (Medium)",
    ],
  },
  {
    unitNumber: 3,
    title: "Recruitment and Selection",
    hours: 7,
    headings: [
      {
        id: "staffing-concept",
        title: "1. Concept, Nature and Significance of Staffing",
        icon: "Users",
        blocks: [
          {
            kind: "paragraph",
            text: "Staffing is the managerial function of filling and keeping filled the positions in the organisation structure — ensuring the right person is available for the right job at the right time.",
          },
          {
            kind: "paragraph",
            text: "Significance: staffing directly determines organisational performance, since even the best plans and structures fail without competent people to execute them.",
          },
        ],
      },
      {
        id: "recruitment-selection-process",
        title: "2. Process of Recruitment and Selection",
        icon: "UserPlus",
        blocks: [
          { kind: "diagram", diagramId: "recruitment-selection-process", caption: "Fig 3.1 — The recruitment and selection process" },
          {
            kind: "bullets",
            items: [
              "Recruitment: searching for and attracting a pool of qualified candidates, from internal sources (promotion, transfer) or external sources (job portals, campus placement, referrals).",
              "Selection: choosing the best-fit candidate from the recruited pool through screening, tests, and interviews.",
            ],
          },
        ],
      },
      {
        id: "placement-orientation",
        title: "3. Placement and Orientation",
        icon: "MapPin",
        blocks: [
          {
            kind: "paragraph",
            text: "Placement is assigning the selected candidate to the specific job/role they are best suited for, based on their qualifications and the organisation's needs.",
          },
          {
            kind: "paragraph",
            text: "Orientation (or Induction) is the process of introducing a new employee to the organisation's culture, policies, colleagues, and job responsibilities — a well-designed orientation improves early job satisfaction and reduces the chance of early attrition.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Staffing", definition: "The managerial function of filling and keeping filled the positions in the organisation structure." },
      { term: "Orientation", definition: "The process of introducing a new employee to the organisation's culture, policies, and role." },
    ],
    examQuestions: [
      "Explain the concept, nature, and significance of staffing. (Medium)",
      "Explain the process of recruitment and selection. (Long)",
      "Differentiate between placement and orientation. (Short)",
      "Discuss the sources of recruitment with examples. (Medium)",
    ],
  },
  {
    unitNumber: 4,
    title: "Directing and Decision Making",
    hours: 9,
    headings: [
      {
        id: "directing-concept",
        title: "1. Concept and Principles of Directing",
        icon: "Compass",
        blocks: [
          {
            kind: "paragraph",
            text: "Directing (or Leading) is the process of instructing, guiding, and motivating people to work toward organisational goals — it's the function that actually gets things moving, after planning and organising have set the stage.",
          },
          {
            kind: "paragraph",
            text: "Principles of directing: harmony of objectives (aligning individual and organisational goals), unity of command (one subordinate reports to only one superior), and direct supervision.",
          },
          {
            kind: "paragraph",
            text: "Effective directing requires clear communication, appropriate motivation techniques (recall Motivation theories, Organizational Behaviour Unit 2), and effective supervision — closely observing and guiding subordinates' work.",
          },
        ],
      },
      {
        id: "decision-making",
        title: "2. Decision-Making Process and Techniques",
        icon: "GitFork",
        blocks: [
          {
            kind: "paragraph",
            text: "Decision-making is choosing a course of action from among alternatives — arguably the core of what managers actually do all day.",
          },
          { kind: "diagram", diagramId: "decision-making-process", caption: "Fig 4.1 — The decision-making process" },
          {
            kind: "paragraph",
            text: "Management by Exception (MBE): a technique where managers focus their attention only on significant deviations from standards, rather than reviewing every single result — freeing up time for more important strategic matters.",
          },
        ],
      },
      {
        id: "leadership",
        title: "3. Concept of Leadership",
        icon: "Crown",
        blocks: [
          {
            kind: "paragraph",
            text: "Leadership is the ability to influence a group toward the achievement of a vision or set of goals. It is critical to management because even a well-planned, well-organised effort can fail without a leader who can inspire and align people toward the goal — leadership and management are related but distinct: management is about coping with complexity (planning, budgeting, organising, controlling), while leadership is about coping with change (setting direction, aligning people, motivating and inspiring).",
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
            title: "Case study — Ratan Tata's leadership style",
            text: "Ratan Tata is widely studied for combining strong directive leadership on strategic decisions (like the Tata Nano and Jaguar Land Rover acquisitions) with a deeply values-driven, ethical approach to directing the Tata Group — illustrating how directing and leadership work together in practice, not just in theory.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Unity of Command", definition: "The principle that a subordinate should report to only one superior." },
      { term: "Management by Exception (MBE)", definition: "A technique focusing managerial attention only on significant deviations from standards." },
      { term: "Leadership", definition: "The ability to influence a group toward the achievement of a vision or set of goals." },
    ],
    examQuestions: [
      "Explain the concept and principles of directing. (Medium)",
      "Explain the decision-making process with an example. (Long)",
      "What is Management by Exception? Explain with an example. (Medium)",
      "Differentiate between management and leadership. (Medium)",
      "Discuss the importance of leadership in an organisation. (Short)",
    ],
  },
  {
    unitNumber: 5,
    title: "Controlling",
    hours: 9,
    headings: [
      {
        id: "control-elements",
        title: "1. Elements of Managerial Control",
        icon: "GaugeCircle",
        blocks: [
          {
            kind: "paragraph",
            text: "Controlling is the function of monitoring performance and taking corrective action when results deviate from standards — the final link that connects back to planning, completing the management cycle.",
          },
          { kind: "diagram", diagramId: "control-process", caption: "Fig 5.1 — The control process" },
          {
            kind: "paragraph",
            text: "Designing effective control systems requires: setting clear and measurable standards, timely reporting so corrective action can still make a difference, and focusing control on strategically significant activities rather than everything equally.",
          },
        ],
      },
      {
        id: "control-techniques",
        title: "2. Management Control Techniques",
        icon: "SlidersHorizontal",
        blocks: [
          {
            kind: "table",
            headers: ["Technique", "Description"],
            rows: [
              ["Budgetary Control", "Comparing actual financial performance against a budget and analysing variances"],
              ["Break-Even Analysis", "Finding the sales volume at which total revenue equals total cost"],
              ["Ratio Analysis", "Using financial ratios to assess liquidity, profitability, and solvency"],
              ["PERT/CPM", "Network-based techniques for controlling large projects (recall QTM's project management techniques)"],
              ["Management Information Systems (MIS)", "Using integrated information systems to monitor performance in real time"],
            ],
          },
        ],
      },
      {
        id: "coordination",
        title: "3. Coordination: Essence, Importance and Techniques",
        icon: "Link2",
        blocks: [
          {
            kind: "paragraph",
            text: "Coordination is often called the \"essence of management\" — it's the process of synchronising the efforts of individuals and departments so they work together smoothly toward common goals, avoiding duplication and conflict.",
          },
          {
            kind: "paragraph",
            text: "Importance: as an organisation grows and divides work into specialised departments, the risk of those departments working at cross-purposes grows too — coordination keeps everyone pulling in the same direction.",
          },
          {
            kind: "paragraph",
            text: "Principles of coordination: early stage coordination (built in from the planning stage, not fixed after problems arise), direct personal contact between managers, and reciprocal relationships (recognising that departments mutually affect each other).",
          },
          {
            kind: "paragraph",
            text: "Techniques of coordination: clear communication channels, well-defined organisational structure, cross-functional committees and meetings, and shared goals/incentives across departments.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Controlling", definition: "The managerial function of monitoring performance and taking corrective action against standards." },
      { term: "Coordination", definition: "Synchronising the efforts of individuals and departments toward common goals." },
      { term: "Budgetary Control", definition: "Comparing actual financial performance against a budget and analysing variances." },
    ],
    examQuestions: [
      "Explain the elements of managerial control with a diagram. (Long)",
      "Discuss the various techniques of management control. (Long)",
      "Explain the concept and importance of coordination. (Medium)",
      "Discuss the principles and techniques of coordination. (Medium)",
      "Why is coordination called the essence of management? (Short)",
    ],
  },
];
