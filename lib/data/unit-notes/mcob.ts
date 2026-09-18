import { UnitNote } from "@/types";

// Detailed, in-app notes for Management Concept & Organisational Behaviour
// (BMB101) — AKTU MBA Semester 1.
export const mcobUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Fundamentals of Management & Planning",
    hours: 8,
    headings: [
      {
        id: "evolution",
        title: "1. Management Practices: Past to Present",
        icon: "History",
        blocks: [
          {
            kind: "paragraph",
            text: "Management as a formal field of study developed through a few major schools of thought, each still visible in how organisations run today.",
          },
          {
            kind: "table",
            headers: ["School of Thought", "Key Contributor(s)", "Core Idea"],
            rows: [
              ["Scientific Management", "F.W. Taylor", "Study work scientifically (time-motion study) to find the \"one best way\" and boost efficiency."],
              ["Administrative/Process Management", "Henri Fayol", "Identified 14 principles of management and 5 core managerial functions (still taught today)."],
              ["Bureaucratic Management", "Max Weber", "Formal rules, clear hierarchy, and division of labour create an efficient, impersonal organisation."],
              ["Human Relations / Behavioural", "Elton Mayo (Hawthorne Studies)", "Employee productivity is influenced by social factors and attention, not just physical conditions."],
              ["Systems Approach", "Ludwig von Bertalanffy (applied to mgmt)", "An organisation is an open system of interrelated parts, constantly interacting with its environment."],
              ["Contingency Approach", "Fiedler and others", "There is no single \"best way\" to manage — the right approach depends on the situation."],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "A modern factory still uses Taylor's time-motion thinking on the shop floor, Fayol's functions to run the whole plant, and the Human Relations insight that a supervisor who genuinely listens to workers gets better output than one who only enforces rules.",
          },
        ],
      },
      {
        id: "levels",
        title: "2. Different Levels of Management",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "Every organisation of reasonable size has three broad levels of management, each with a different mix of responsibilities:",
          },
          { kind: "diagram", diagramId: "management-levels-pyramid", caption: "Fig 1.1 — The three levels of management" },
          {
            kind: "table",
            headers: ["Level", "Who", "Main Focus"],
            rows: [
              ["Top Management", "Board of Directors, CEO, CXOs", "Long-term direction, overall policy, major decisions"],
              ["Middle Management", "Department/Divisional Heads, Regional Managers", "Translating top-level policy into departmental plans; coordinating"],
              ["First-Line / Supervisory Management", "Supervisors, Team Leaders, Foremen", "Day-to-day direction of operational/non-managerial employees"],
            ],
          },
        ],
      },
      {
        id: "skills-functions",
        title: "3. Managerial Skills and Managerial Functions",
        icon: "Wrench",
        blocks: [
          {
            kind: "paragraph",
            text: "Robert Katz identified three managerial skills, and their required mix changes by level:",
          },
          {
            kind: "table",
            headers: ["Skill", "Meaning", "Most needed at"],
            rows: [
              ["Technical Skill", "Job-specific knowledge and proficiency (e.g., accounting, coding, machinery)", "First-line management"],
              ["Human Skill", "Ability to work with, motivate, and lead people", "All levels equally"],
              ["Conceptual Skill", "Ability to see the organisation as a whole and understand how parts relate", "Top management"],
            ],
          },
          {
            kind: "paragraph",
            text: "Henri Fayol's five managerial functions are still the standard way to describe what managers actually do:",
          },
          {
            kind: "bullets",
            items: [
              "Planning — deciding objectives and how to achieve them.",
              "Organising — arranging resources and tasks into a workable structure.",
              "Staffing — recruiting, selecting, and developing people for roles.",
              "Directing (Leading) — guiding and motivating people toward objectives.",
              "Controlling — monitoring performance and correcting deviations.",
            ],
          },
        ],
      },
      {
        id: "planning",
        title: "4. Planning: Objectives, Process, Types",
        icon: "Map",
        blocks: [
          {
            kind: "paragraph",
            text: "Planning is the first and most fundamental managerial function — deciding in advance what to do, how to do it, and who will do it. The objective of planning is to reduce uncertainty, focus attention on goals, and provide a basis for control.",
          },
          { kind: "diagram", diagramId: "planning-process", caption: "Fig 1.2 — The planning process" },
          {
            kind: "paragraph",
            text: "Types of planning:",
          },
          {
            kind: "bullets",
            items: [
              "By scope: Strategic planning (long-term, whole organisation, top management) vs. Tactical/Operational planning (short-term, department-level).",
              "By time frame: Long-term, medium-term, and short-term plans.",
              "By frequency of use: Standing plans (used repeatedly — policies, procedures) vs. Single-use plans (for a one-time situation — a budget, a specific project plan).",
            ],
          },
          {
            kind: "paragraph",
            text: "Types of plans (a hierarchy, from broad to specific):",
          },
          {
            kind: "table",
            headers: ["Type of Plan", "Nature"],
            rows: [
              ["Mission", "The organisation's fundamental purpose — why it exists"],
              ["Objectives/Goals", "Specific end results to be achieved"],
              ["Strategies", "The broad approach to achieve objectives, considering competitors"],
              ["Policies", "General guidelines for decision-making"],
              ["Procedures", "Step-by-step instructions for handling a specific activity"],
              ["Rules", "Specific, mandatory actions or non-actions — no discretion allowed"],
              ["Programs", "A set of coordinated activities to accomplish a specific objective"],
              ["Budgets", "A plan expressed in numbers — a statement of expected results"],
            ],
          },
        ],
      },
      {
        id: "mbo",
        title: "5. Management by Objectives (MBO)",
        icon: "Target",
        blocks: [
          {
            kind: "paragraph",
            text: "Management by Objectives, popularised by Peter Drucker, is a management approach where managers and employees jointly set specific, measurable objectives, and performance is later reviewed against those objectives.",
          },
          { kind: "diagram", diagramId: "mbo-process", caption: "Fig 1.3 — The MBO cycle" },
          {
            kind: "callout",
            tone: "info",
            title: "Why it works",
            text: "Because employees help set their own targets (rather than simply being told), MBO tends to increase commitment, clarity, and motivation compared to purely top-down goal-setting.",
          },
        ],
      },
      {
        id: "decision-making",
        title: "6. Decision-Making: Types, Process & Techniques",
        icon: "GitFork",
        blocks: [
          {
            kind: "paragraph",
            text: "Decision-making is choosing a course of action from among alternatives — arguably the core of what managers actually do all day.",
          },
          {
            kind: "table",
            headers: ["Basis", "Types"],
            rows: [
              ["By programmability", "Programmed decisions (routine, repetitive, rule-based) vs. Non-programmed decisions (novel, unstructured, need judgement)"],
              ["By management level", "Strategic (top, long-term), Tactical (middle, medium-term), Operational (first-line, day-to-day)"],
            ],
          },
          { kind: "diagram", diagramId: "decision-making-process", caption: "Fig 1.4 — The decision-making process" },
          {
            kind: "paragraph",
            text: "Common decision-making techniques:",
          },
          {
            kind: "bullets",
            items: [
              "Quantitative techniques: decision trees, break-even analysis, linear programming, marginal analysis.",
              "Qualitative/group techniques: brainstorming, Delphi technique (expert consensus without face-to-face meeting), nominal group technique.",
            ],
          },
        ],
      },
      {
        id: "case-studies",
        title: "7. Case Studies",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Toyota's decision-making style",
            text: "Toyota is famous for \"Nemawashi\" — a slow, consensus-building decision process where many stakeholders are consulted before a decision is finalised. It looks slow upfront, but implementation is very fast afterward since everyone already agrees — a real-world variation of the non-programmed, group decision-making process.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Scientific Management", definition: "Taylor's approach of studying work scientifically to find the most efficient method." },
      { term: "MBO", definition: "Management by Objectives — jointly setting and reviewing specific objectives between manager and employee." },
      { term: "Programmed Decision", definition: "A routine, repetitive decision that can be handled by a standard rule or procedure." },
      { term: "Policy", definition: "A general guideline that channels decision-making within an organisation." },
      { term: "Conceptual Skill", definition: "The ability to see and understand the organisation as a whole, most needed at top management." },
    ],
    examQuestions: [
      "Trace the evolution of management thought from Taylor to the contingency approach. (Long)",
      "Explain the three levels of management and the skills required at each level. (Long)",
      "Discuss Fayol's five managerial functions with examples. (Medium)",
      "Explain the planning process with a diagram. (Long)",
      "Differentiate between the various types of plans with examples. (Medium)",
      "What is MBO? Explain its process and benefits. (Medium)",
      "Explain the decision-making process and the techniques used in it. (Long)",
      "Differentiate between programmed and non-programmed decisions. (Short)",
    ],
  },
  {
    unitNumber: 2,
    title: "Organising, Staffing, Directing & Controlling",
    hours: 8,
    headings: [
      {
        id: "types-of-organization",
        title: "1. Types of Organization",
        icon: "Building2",
        blocks: [
          {
            kind: "table",
            headers: ["Type", "Description", "Example"],
            rows: [
              ["Line Organization", "Direct, vertical chain of command from top to bottom; simplest form", "A small manufacturing unit"],
              ["Line & Staff Organization", "Line managers have direct authority; staff specialists advise without direct command authority", "A company with an HR/legal advisory team supporting line managers"],
              ["Functional Organization", "Grouped by function (marketing, finance, operations); specialists head each function", "Most medium-sized companies"],
              ["Divisional Organization", "Grouped by product, region, or customer; each division is semi-autonomous", "A company with separate divisions for each product line"],
              ["Matrix Organization", "Dual reporting — functional manager and project manager both have authority", "IT/consulting firms running cross-functional projects"],
            ],
          },
        ],
      },
      {
        id: "delegation",
        title: "2. Organization Structure, Delegation & Decentralization",
        icon: "Share2",
        blocks: [
          {
            kind: "paragraph",
            text: "Delegation of authority is the process by which a manager assigns part of their own work and authority to a subordinate, while still remaining accountable for the outcome. It has three parts:",
          },
          {
            kind: "bullets",
            items: [
              "Authority: the right to make decisions and give instructions — this is what's delegated.",
              "Responsibility: the obligation to complete the assigned task — this is created for the subordinate.",
              "Accountability: being answerable for the outcome — this can never be fully delegated; the manager remains ultimately accountable.",
            ],
          },
          {
            kind: "paragraph",
            text: "Centralization means most decision-making authority stays with top management; decentralization means authority is systematically pushed down to lower levels.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "A store manager delegating the authority to approve small refunds to a shift supervisor is decentralizing a decision — but the store manager remains accountable to head office if refund policy is misused.",
          },
        ],
      },
      {
        id: "staffing",
        title: "3. Staffing: Recruitment, Selection & Placement",
        icon: "UserPlus",
        blocks: [
          {
            kind: "paragraph",
            text: "Staffing is the managerial function of filling and keeping filled the positions in the organisation structure — matching the right people to the right roles.",
          },
          { kind: "diagram", diagramId: "recruitment-selection-process", caption: "Fig 2.1 — The recruitment and selection process" },
          {
            kind: "bullets",
            items: [
              "Recruitment: the process of searching for and attracting a pool of qualified candidates (internal sources like promotions/transfers, or external sources like job portals, campus placement).",
              "Selection: choosing the best-fit candidate from the recruited pool, through tests, interviews, and reference checks.",
              "Placement: assigning the selected candidate to the specific job/role they are best suited for.",
              "Training & Development: on-the-job or off-the-job programs to build the skills employees need, both for their current role (training) and future growth (development).",
            ],
          },
        ],
      },
      {
        id: "directing-controlling",
        title: "4. Directing & Controlling",
        icon: "Compass",
        blocks: [
          {
            kind: "paragraph",
            text: "Directing (or Leading) is the process of instructing, guiding, and motivating people to work toward organisational goals. Key principles of directing include: harmony of objectives (individual and organisational goals should align), unity of command (one subordinate should report to only one superior), and direct supervision.",
          },
          {
            kind: "paragraph",
            text: "Coordination is the essence of management — it's the process of synchronising the efforts of individuals and departments so they work together smoothly toward common goals, avoiding duplication and conflict.",
          },
          {
            kind: "paragraph",
            text: "Controlling is the function of monitoring performance and taking corrective action when results deviate from standards:",
          },
          { kind: "diagram", diagramId: "control-process", caption: "Fig 2.2 — The control process" },
          {
            kind: "bullets",
            items: [
              "Common control techniques: budgetary control, break-even analysis, ratio analysis, PERT/CPM (for project scheduling), management information systems (MIS).",
              "Management by Exception (MBE): a control technique where managers focus their attention only on significant deviations from the standard, rather than reviewing every single result — saving time for more important decisions.",
            ],
          },
        ],
      },
      {
        id: "case-studies",
        title: "5. Case Studies",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Google's matrix-style structure",
            text: "Google has historically used a matrix-like structure where engineers can work across product teams while still reporting to a functional engineering manager — enabling flexibility for cross-functional projects, though it can occasionally create ambiguity about priorities, a known trade-off of matrix organizations.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Delegation", definition: "A manager assigning part of their work and authority to a subordinate while retaining accountability." },
      { term: "Decentralization", definition: "Systematically pushing decision-making authority down to lower levels of the organisation." },
      { term: "Management by Exception (MBE)", definition: "A control technique focusing managerial attention only on significant deviations from standards." },
      { term: "Span of Control", definition: "The number of subordinates a manager can effectively supervise." },
    ],
    examQuestions: [
      "Explain the different types of organization structures with examples. (Long)",
      "What is delegation of authority? Explain its elements. (Medium)",
      "Differentiate between centralization and decentralization. (Short)",
      "Explain the staffing process from recruitment to placement. (Long)",
      "What are the principles of directing? (Medium)",
      "Explain the essence of coordination in management. (Short)",
      "Discuss the various techniques of managerial control. (Long)",
      "What is Management by Exception? Explain with an example. (Medium)",
    ],
  },
  {
    unitNumber: 3,
    title: "Fundamentals of Individual Behaviour",
    hours: 8,
    headings: [
      {
        id: "ob-concepts",
        title: "1. Concepts of OB and the OB Model",
        icon: "Users",
        blocks: [
          {
            kind: "paragraph",
            text: "Organisational Behaviour (OB) is the study of how individuals and groups act within organisations, and how that behaviour affects the organisation's performance. It draws on psychology, sociology, and anthropology.",
          },
          { kind: "diagram", diagramId: "ob-model", caption: "Fig 3.1 — A basic OB model" },
          {
            kind: "paragraph",
            text: "OB is studied at three levels: the individual level (personality, perception, attitudes, motivation), the group level (team dynamics, communication, leadership), and the organisational level (structure, culture, change).",
          },
          {
            kind: "paragraph",
            text: "Components of OB include: individual behaviour, group behaviour, organisation structure, and organisational processes/culture — all of which interact to shape overall performance.",
          },
        ],
      },
      {
        id: "personality",
        title: "2. Personality & Personal Effectiveness",
        icon: "Fingerprint",
        blocks: [
          {
            kind: "paragraph",
            text: "Personality is the relatively stable set of characteristics that influence an individual's behaviour. Two widely taught models:",
          },
          {
            kind: "bullets",
            items: [
              "The Big Five (OCEAN): Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism — the most research-backed personality framework.",
              "Type A vs. Type B personality: Type A individuals are competitive, time-urgent, and impatient; Type B individuals are relaxed, easy-going, and less driven by urgency.",
            ],
          },
          {
            kind: "paragraph",
            text: "Personal effectiveness refers to how well an individual manages themselves — their time, emotions, and skills — to achieve goals consistently, often built through self-awareness, goal-setting, and continuous learning.",
          },
        ],
      },
      {
        id: "attitudes",
        title: "3. Attitudes: Meaning, Types, Components, Formation & Change",
        icon: "Smile",
        blocks: [
          {
            kind: "paragraph",
            text: "An attitude is a learned predisposition to respond favourably or unfavourably to a person, object, or situation.",
          },
          {
            kind: "paragraph",
            text: "Attitudes have three components (the ABC model):",
          },
          {
            kind: "bullets",
            items: [
              "Affective (feeling): the emotional part — \"I don't like my new manager.\"",
              "Behavioural (acting): the intention to act — \"I plan to ask for a transfer.\"",
              "Cognitive (thinking/belief): the belief/evaluation — \"My manager is unfair.\"",
            ],
          },
          {
            kind: "paragraph",
            text: "In the workplace, the three most-studied attitudes are: job satisfaction, job involvement, and organisational commitment.",
          },
          {
            kind: "paragraph",
            text: "Attitudes are formed through direct experience, social learning (observing others, especially role models), and classical/operant conditioning. Attitude change usually happens through persuasion, new information, or cognitive dissonance (discomfort from holding two conflicting beliefs, which pushes a person to change one of them to restore consistency).",
          },
        ],
      },
      {
        id: "group-behaviour",
        title: "4. Group Behaviour & Interpersonal Skills",
        icon: "UsersRound",
        blocks: [
          {
            kind: "paragraph",
            text: "A group is two or more individuals, interacting and interdependent, who come together to achieve specific objectives.",
          },
          {
            kind: "bullets",
            items: [
              "Formal groups: created deliberately by the organisation to accomplish specific tasks (e.g., a project team).",
              "Informal groups: form naturally based on personal relationships and shared interests (e.g., a lunch group).",
              "Primary groups: small, close, long-term (e.g., a core project team).",
              "Secondary groups: larger, more impersonal, task-focused (e.g., an entire department).",
            ],
          },
          {
            kind: "paragraph",
            text: "Interpersonal skills — active listening, empathy, clear communication, conflict resolution, and emotional intelligence — determine how effectively an individual works within these groups.",
          },
        ],
      },
      {
        id: "transactional-analysis",
        title: "5. Transactional Analysis",
        icon: "MessagesSquare",
        blocks: [
          {
            kind: "paragraph",
            text: "Transactional Analysis (TA), developed by Eric Berne, is a model for understanding communication by looking at which \"ego state\" a person is speaking from in any interaction (transaction).",
          },
          { kind: "diagram", diagramId: "transactional-analysis", caption: "Fig 3.2 — The three ego states in Transactional Analysis" },
          {
            kind: "bullets",
            items: [
              "Parent: reflects attitudes/behaviour absorbed from parents/authority figures — can be Critical Parent (controlling, judgemental) or Nurturing Parent (caring, supportive).",
              "Adult: rational, logical, fact-based response — treats the other person as an equal.",
              "Child: reflects feelings and reactions from one's own childhood — can be Free Child (spontaneous, emotional) or Adapted Child (compliant or rebellious).",
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "If an employee makes a mistake and the manager responds with \"How could you be so careless?!\" (Critical Parent), the employee often reacts from their Child state (defensive or upset) — an unproductive transaction. An Adult-to-Adult response like \"Let's look at what went wrong and fix the process\" tends to produce a more constructive conversation.",
          },
        ],
      },
      {
        id: "johari-window",
        title: "6. Johari Window",
        icon: "Grid2x2",
        blocks: [
          {
            kind: "paragraph",
            text: "The Johari Window, developed by Joseph Luft and Harrington Ingham, is a model to understand self-awareness and interpersonal communication using four \"panes\" based on what is known/unknown to self vs. others.",
          },
          { kind: "diagram", diagramId: "johari-window", caption: "Fig 3.3 — The Johari Window" },
          {
            kind: "bullets",
            items: [
              "Open/Arena: known to self and known to others — the basis for good communication.",
              "Blind Spot: known to others but not to self (e.g., a habit others notice that you don't).",
              "Hidden/Facade: known to self but hidden from others (private information you choose not to share).",
              "Unknown: unknown to both self and others — undiscovered potential or issues.",
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam tip",
            text: "The goal in most OD (organisation development) interventions is to enlarge the Open/Arena area — through self-disclosure (reducing the Hidden area) and feedback from others (reducing the Blind Spot area).",
          },
        ],
      },
      {
        id: "perception",
        title: "7. Perception: Meaning, Process & Behavioural Applications",
        icon: "Eye",
        blocks: [
          {
            kind: "paragraph",
            text: "Perception is the process by which individuals organise and interpret their sensory impressions to give meaning to their environment — two people can see the exact same event and \"perceive\" it very differently.",
          },
          { kind: "diagram", diagramId: "perception-process", caption: "Fig 3.4 — The perception process" },
          {
            kind: "paragraph",
            text: "Behavioural applications / common perceptual distortions studied in OB:",
          },
          {
            kind: "bullets",
            items: [
              "Attribution theory: how we explain the causes of behaviour — attributing it to internal factors (a person's own character) or external factors (the situation).",
              "Halo effect: forming an overall impression of a person based on a single positive trait (e.g., assuming a well-dressed candidate is also competent).",
              "Stereotyping: judging someone based on the perception of the group they belong to, rather than their individual characteristics.",
              "Selective perception: interpreting what we see based on our own interests, background, and experience, rather than objectively.",
            ],
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
            title: "Case study — Performance review halo effect",
            text: "A common real-world OB problem: a manager rates an employee highly across all performance dimensions simply because that employee is very strong in one visible area (e.g., presentation skills) — a textbook halo effect that HR training programs specifically try to correct through structured, criteria-based appraisal forms.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "OB (Organisational Behaviour)", definition: "The study of individual and group behaviour within organisations." },
      { term: "Cognitive Dissonance", definition: "The discomfort felt when holding two conflicting beliefs, often resolved by changing one attitude." },
      { term: "Johari Window", definition: "A four-pane model (Open, Blind, Hidden, Unknown) of self-awareness and interpersonal communication." },
      { term: "Transactional Analysis", definition: "A model analysing communication through Parent, Adult, and Child ego states." },
      { term: "Halo Effect", definition: "Judging a person's overall character based on one single positive trait." },
    ],
    examQuestions: [
      "Explain the concept and model of Organisational Behaviour. (Medium)",
      "Discuss personality types and their relevance to workplace behaviour. (Medium)",
      "Explain the ABC components of attitude with examples. (Medium)",
      "Differentiate between formal and informal groups. (Short)",
      "Explain Transactional Analysis and its three ego states. (Long)",
      "Explain the Johari Window with a diagram. (Long)",
      "Explain the process of perception. (Medium)",
      "Discuss common perceptual distortions with examples (halo effect, stereotyping, attribution). (Long)",
    ],
  },
  {
    unitNumber: 4,
    title: "Motivation",
    hours: 8,
    headings: [
      {
        id: "maslow",
        title: "1. Maslow's Hierarchy of Needs",
        icon: "Mountain",
        blocks: [
          {
            kind: "paragraph",
            text: "Abraham Maslow proposed that human needs exist in a hierarchy — lower-level needs must be reasonably satisfied before higher-level needs become motivating.",
          },
          { kind: "diagram", diagramId: "maslow-hierarchy", caption: "Fig 4.1 — Maslow's Hierarchy of Needs" },
          {
            kind: "table",
            headers: ["Need Level", "Workplace Example"],
            rows: [
              ["Physiological", "Fair salary that covers basic living needs"],
              ["Safety", "Job security, safe working conditions, health insurance"],
              ["Social/Belonging", "Good relationships with colleagues, team belonging"],
              ["Esteem", "Recognition, promotions, respect from peers"],
              ["Self-Actualization", "Challenging work that lets an employee reach their full potential"],
            ],
          },
        ],
      },
      {
        id: "herzberg",
        title: "2. Herzberg's Two-Factor Theory",
        icon: "SplitSquareHorizontal",
        blocks: [
          {
            kind: "paragraph",
            text: "Frederick Herzberg argued that job satisfaction and dissatisfaction are driven by two separate sets of factors — removing dissatisfaction does not automatically create satisfaction.",
          },
          { kind: "diagram", diagramId: "herzberg-two-factor", caption: "Fig 4.2 — Herzberg's Hygiene Factors vs. Motivators" },
          {
            kind: "bullets",
            items: [
              "Hygiene factors (dissatisfiers): related to the job context (salary, policy, working conditions). Their absence causes dissatisfaction, but their presence doesn't necessarily motivate — it just prevents dissatisfaction.",
              "Motivators (satisfiers): related to the job content (achievement, recognition, responsibility, growth). These actually drive higher performance and satisfaction.",
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "Raising a already-fair salary further rarely boosts long-term motivation much (hygiene factor) — but giving an employee more meaningful responsibility or public recognition (motivator) often does.",
          },
        ],
      },
      {
        id: "mcclelland",
        title: "3. McClelland's Need Theory",
        icon: "Award",
        blocks: [
          {
            kind: "paragraph",
            text: "David McClelland proposed that people are driven by three learned (not innate) needs, in varying proportions:",
          },
          {
            kind: "bullets",
            items: [
              "Need for Achievement (nAch): the drive to excel, achieve goals, and get feedback on performance — high-nAch people prefer moderately challenging tasks with clear feedback.",
              "Need for Power (nPow): the desire to influence and control others.",
              "Need for Affiliation (nAff): the desire for friendly, close interpersonal relationships.",
            ],
          },
        ],
      },
      {
        id: "contemporary-theories",
        title: "4. Contemporary Motivation Theories",
        icon: "Sparkles",
        blocks: [
          {
            kind: "table",
            headers: ["Theory", "Core Idea"],
            rows: [
              [
                "Self-Determination Theory (Deci & Ryan)",
                "People are most intrinsically motivated when three psychological needs are met: Autonomy (control over one's own actions), Competence (feeling capable), and Relatedness (feeling connected to others).",
              ],
              [
                "Self-Efficacy Theory (Bandura)",
                "An individual's own belief in their capability to successfully perform a task strongly affects whether they actually attempt and persist at it.",
              ],
              [
                "Equity Theory (Adams)",
                "Employees compare their own outcome-to-input ratio (rewards vs. effort) to that of relevant others; perceived unfairness (inequity) reduces motivation, prompting people to restore balance (e.g., reducing effort).",
              ],
              [
                "Reinforcement Theory (Skinner)",
                "Behaviour is a function of its consequences — behaviour that is positively reinforced tends to be repeated; behaviour that is punished or not reinforced tends to decline.",
              ],
            ],
          },
        ],
      },
      {
        id: "expectancy-theory",
        title: "5. Vroom's Expectancy Theory",
        icon: "ArrowRightCircle",
        blocks: [
          {
            kind: "paragraph",
            text: "Victor Vroom's theory says motivation depends on a chain of three beliefs multiplying together — if any one is zero, overall motivation collapses to zero.",
          },
          { kind: "diagram", diagramId: "expectancy-theory", caption: "Fig 4.3 — Vroom's Expectancy chain" },
          {
            kind: "bullets",
            items: [
              "Expectancy: my belief that effort will lead to good performance (\"If I try hard, will I actually succeed?\").",
              "Instrumentality: my belief that good performance will lead to a specific outcome/reward (\"If I perform well, will I actually get rewarded?\").",
              "Valence: how much I personally value that outcome/reward.",
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "An employee won't be motivated to work overtime for a bonus if they believe (a) the target is impossible no matter how hard they work (low expectancy), (b) the company won't actually pay the promised bonus (low instrumentality), or (c) they don't care about that bonus anyway (low valence).",
          },
        ],
      },
      {
        id: "case-studies",
        title: "6. Case Studies",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Google's intrinsic-motivation approach",
            text: "Google's well-known \"20% time\" policy (letting engineers spend a portion of their time on self-directed projects) is a direct application of Self-Determination Theory — boosting autonomy and competence, which drove innovations like Gmail.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Hygiene Factors", definition: "Herzberg's job-context factors whose absence causes dissatisfaction but whose presence doesn't strongly motivate." },
      { term: "nAch", definition: "McClelland's Need for Achievement — the drive to excel and achieve challenging goals." },
      { term: "Self-Efficacy", definition: "An individual's belief in their own capability to successfully perform a specific task." },
      { term: "Equity Theory", definition: "Motivation theory based on comparing one's own outcome-to-input ratio with that of others." },
      { term: "Valence", definition: "In Vroom's theory, how much an individual personally values a given outcome/reward." },
    ],
    examQuestions: [
      "Explain Maslow's Hierarchy of Needs with workplace examples. (Long)",
      "Explain Herzberg's Two-Factor theory. How is it different from Maslow's theory? (Long)",
      "Discuss McClelland's Need theory. (Medium)",
      "Explain Self-Determination Theory and Self-Efficacy Theory. (Medium)",
      "Explain Vroom's Expectancy Theory with a diagram. (Long)",
      "What is Equity Theory? Explain with an example. (Medium)",
      "Explain Reinforcement Theory and its application in the workplace. (Medium)",
    ],
  },
  {
    unitNumber: 5,
    title: "Leadership & Organizational Change",
    hours: 8,
    headings: [
      {
        id: "leadership-meaning",
        title: "1. Leadership: Meaning, Types & Styles",
        icon: "Crown",
        blocks: [
          {
            kind: "paragraph",
            text: "Leadership is the ability to influence a group toward the achievement of a vision or set of goals — distinct from management, which is more about planning, organising, and controlling existing operations.",
          },
          {
            kind: "table",
            headers: ["Leadership Style", "Description"],
            rows: [
              ["Autocratic", "Leader makes decisions alone, with little input from the team"],
              ["Democratic (Participative)", "Leader involves the team in decision-making"],
              ["Laissez-Faire", "Leader gives the team high freedom, minimal direct supervision"],
              ["Transactional", "Leadership based on a clear exchange — rewards for performance, correction for deviations"],
              ["Transformational", "Leader inspires and motivates followers toward a shared vision, encouraging change beyond self-interest"],
            ],
          },
        ],
      },
      {
        id: "trait-theory",
        title: "2. Traits, Qualities of Effective Leaders & Trait Theory",
        icon: "Star",
        blocks: [
          {
            kind: "paragraph",
            text: "Trait theory argues that certain personal characteristics distinguish leaders from non-leaders — commonly cited traits include: self-confidence, integrity, drive, cognitive ability, and emotional intelligence.",
          },
          {
            kind: "callout",
            tone: "info",
            title: "A key limitation",
            text: "Trait theory struggles to explain why some people with \"leader-like\" traits never become effective leaders, and others without them do — which is exactly why later theories (like the Situational Model below) shifted focus from who the leader is to what behaviour fits the situation.",
          },
        ],
      },
      {
        id: "lsm",
        title: "3. Leadership Situational Model (LSM)",
        icon: "Sliders",
        blocks: [
          {
            kind: "paragraph",
            text: "The Hersey-Blanchard Situational Leadership Model says the most effective leadership style depends on the readiness/maturity level of the followers — there is no single \"best\" style.",
          },
          { kind: "diagram", diagramId: "leadership-situational", caption: "Fig 5.1 — The Hersey-Blanchard Situational Leadership Model" },
          {
            kind: "table",
            headers: ["Style", "Best suited when followers are…"],
            rows: [
              ["S1: Telling", "Low competence, low commitment — need clear, specific direction"],
              ["S2: Selling", "Some competence, variable commitment — need direction plus explanation/support"],
              ["S3: Participating", "Moderate-to-high competence, variable confidence — need collaboration, less direction"],
              ["S4: Delegating", "High competence, high commitment — can be trusted with full autonomy"],
            ],
          },
        ],
      },
      {
        id: "team-building",
        title: "4. Team Building & Tuckman's Model",
        icon: "Users",
        blocks: [
          {
            kind: "paragraph",
            text: "Team building refers to activities and processes used to improve social relations and cooperation within a team. Bruce Tuckman's model describes the typical stages a team passes through as it develops:",
          },
          { kind: "diagram", diagramId: "tuckman-model", caption: "Fig 5.2 — Tuckman's Stages of Team Development" },
          {
            kind: "table",
            headers: ["Stage", "What happens"],
            rows: [
              ["Forming", "Team members meet, are polite, and get oriented; little real work happens yet"],
              ["Storming", "Conflicts emerge over roles, ideas, and working style"],
              ["Norming", "The team resolves differences, establishes norms, and starts cooperating"],
              ["Performing", "The team works efficiently toward goals with high trust and minimal supervision"],
              ["Adjourning", "The team disbands after completing its task (relevant for project-based teams)"],
            ],
          },
        ],
      },
      {
        id: "organizational-change",
        title: "5. Organizational Change: Meaning & Approaches",
        icon: "RefreshCcw",
        blocks: [
          {
            kind: "paragraph",
            text: "Organizational change is the process by which an organisation alters its structure, strategy, processes, or culture to adapt to internal or external pressures (technology shifts, competition, regulation, growth).",
          },
          {
            kind: "bullets",
            items: [
              "Approaches to managing change: top-down (leadership-driven, fast but can face resistance), participative (involves employees, slower but builds buy-in), and a mix of both depending on urgency.",
              "Creating a culture for change: leaders build psychological safety, communicate a clear \"why\" for the change, and reward experimentation rather than only rewarding stability.",
              "Implementing change: involves clear communication, training, pilot testing, and visible leadership support throughout the transition.",
            ],
          },
        ],
      },
      {
        id: "kurt-lewin",
        title: "6. Kurt Lewin's Model of Change",
        icon: "Waves",
        blocks: [
          {
            kind: "paragraph",
            text: "Kurt Lewin's classic three-step model remains the most widely taught framework for managing planned organisational change:",
          },
          { kind: "diagram", diagramId: "kurt-lewin-change", caption: "Fig 5.3 — Kurt Lewin's 3-Step Change Model" },
          {
            kind: "bullets",
            ordered: true,
            items: [
              "Unfreeze: create awareness of the need for change and reduce resistance — often by highlighting problems with the current state.",
              "Change (Move): actually implement the new processes, structures, or behaviours, with support and training.",
              "Refreeze: stabilise the new state so it becomes the new normal — through reinforcement, new policies, and embedding it into culture, preventing a slide back to old habits.",
            ],
          },
        ],
      },
      {
        id: "case-studies",
        title: "7. Case Studies",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Satya Nadella's Microsoft turnaround",
            text: "Satya Nadella's leadership at Microsoft is widely studied as transformational leadership combined with Lewin's model — he \"unfroze\" a rigid, internally competitive culture by openly naming the problem, drove change toward a \"growth mindset\" and cloud-first strategy, and refroze it through new performance systems and public commitment to the new culture.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Transformational Leadership", definition: "A leadership style that inspires followers toward a shared vision beyond simple transactions/rewards." },
      { term: "LSM (Situational Leadership)", definition: "The Hersey-Blanchard model matching leadership style to follower readiness level." },
      { term: "Tuckman's Model", definition: "The five stages of team development: Forming, Storming, Norming, Performing, Adjourning." },
      { term: "Unfreeze-Change-Refreeze", definition: "Kurt Lewin's three-step model for managing planned organisational change." },
    ],
    examQuestions: [
      "Differentiate between leadership and management. (Short)",
      "Discuss the various leadership styles with examples. (Long)",
      "Explain trait theory of leadership and its limitations. (Medium)",
      "Explain the Leadership Situational Model with a diagram. (Long)",
      "Explain Tuckman's Model of Team Development. (Long)",
      "What is organizational change? Discuss approaches to managing it. (Medium)",
      "Explain Kurt Lewin's model of change with a diagram. (Long)",
      "How can an organisation create a culture that supports change? (Medium)",
    ],
  },
];
