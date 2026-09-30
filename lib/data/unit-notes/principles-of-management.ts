import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Principles of Management (C-204)
// — Dr. Bhimrao Ambedkar University, Agra (DBRAU) BCA Semester 2, syllabus
// effective from session 2025-26.
export const principlesOfManagementUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Nature of Management",
    hours: 10,
    headings: [
      {
        id: "meaning-definition",
        title: "1. Meaning, Definition, Nature, Purpose and Importance of Management",
        icon: "Target",
        blocks: [
          {
            kind: "paragraph",
            text: "Management is the process of getting things done, with and through people, by efficiently and effectively using the available resources (men, money, material, machines and time) to achieve the goals of an organisation. It is a UNIVERSAL activity — needed in a business, a school, a hospital, a government office or even a household — wherever people work together for a common purpose.",
          },
          {
            kind: "table",
            headers: ["Author", "Definition (in brief)"],
            rows: [
              ["Harold Koontz and Heinz Weihrich", "Management is the process of designing and maintaining an environment in which individuals, working together in groups, efficiently accomplish selected aims."],
              ["Peter Drucker", "Management is a multi-purpose organ that manages a business, manages managers, and manages workers and work."],
              ["Henri Fayol", "To manage is to forecast and plan, to organise, to command, to co-ordinate and to control."],
              ["F.W. Taylor", "Management is the art of knowing what you want to do and then seeing that it is done in the best and cheapest way."],
              ["Mary Parker Follett", "Management is the art of getting things done through people."],
            ],
          },
          {
            kind: "table",
            headers: ["Nature (characteristics) of management", "Explanation"],
            rows: [
              ["Goal-oriented", "Every organisation has some goals, and management works to achieve them."],
              ["A continuous process", "The functions of management (planning, organising, ...) are performed continuously, not once."],
              ["A group activity", "Management applies to a group of people working together, not to one person alone."],
              ["Multidisciplinary", "Draws on economics, sociology, psychology, mathematics and statistics."],
              ["A dynamic (ongoing) function", "Must adapt to changes in the environment — technology, competition, law."],
              ["An intangible force", "Cannot be seen, only felt through the results (discipline, order, profit) it produces."],
              ["Both an art and a science", "Explained in detail below."],
              ["Universal", "Applies to all kinds of organisations, at all levels."],
              ["A factor of production", "Along with land, labour and capital, management combines and directs the other resources."],
            ],
          },
          {
            kind: "table",
            headers: ["Purpose / Importance of management", "Explanation"],
            rows: [
              ["Achieving group goals", "Coordinates individual efforts towards the common goal of the organisation."],
              ["Optimum use of resources", "Makes the best use of scarce resources by planning and controlling their use, reducing waste."],
              ["Reducing costs", "Gets maximum output with minimum input, improving productivity."],
              ["Establishing a sound organisation", "Defines authority and responsibility, avoiding overlap and duplication of work."],
              ["Coping with change", "Helps the organisation adapt to changes in technology, government policy and the market."],
              ["Providing innovation and stability", "Encourages new ideas while maintaining stability during change."],
              ["Development of society", "Creates jobs, produces quality goods and services, and promotes economic growth."],
            ],
          },
        ],
      },
      {
        id: "management-functions-overview",
        title: "2. Functions of Management (Overview)",
        icon: "Settings",
        blocks: [
          {
            kind: "paragraph",
            text: "Every manager, at every level, performs the same broad set of FUNCTIONS. Different authors group them slightly differently; the syllabus follows the widely used list: Planning, Organizing, Staffing, Directing, Controlling and Coordinating (with Forecasting and Decision-making studied along with Planning, and Strategic Management along with Controlling). These are studied in detail in Units II to IV; this section only introduces them.",
          },
          { kind: "diagram", diagramId: "management-functions", caption: "Fig 1.1 — The functions of management (POSDCoRB view)" },
          {
            kind: "table",
            headers: ["Function", "One-line meaning"],
            rows: [
              ["Planning", "Deciding in advance what to do, how to do it, when and by whom."],
              ["Organizing", "Arranging resources and activities into a structure to achieve the plan."],
              ["Staffing", "Filling and keeping filled the positions in the organisation structure with the right people."],
              ["Directing (Leading)", "Guiding, supervising and motivating subordinates towards the goals."],
              ["Controlling", "Measuring performance against the plan and correcting deviations."],
              ["Coordinating", "Synchronising the efforts of different individuals and departments."],
            ],
          },
        ],
      },
      {
        id: "management-art-science-profession",
        title: "3. Management as Art, Science and Profession",
        icon: "Award",
        blocks: [
          {
            kind: "paragraph",
            text: "A long-debated question is whether management is an ART, a SCIENCE, or a PROFESSION. The modern view is that management is BOTH an art and a science, and is becoming a profession.",
          },
          {
            kind: "table",
            headers: ["As a Science", "As an Art"],
            rows: [
              ["Systematised body of knowledge based on general principles (e.g., unity of command, span of control)", "Application of knowledge and skill to achieve a desired result — practical and personalised"],
              ["Principles are developed through observation and experimentation", "Every manager applies the principles differently, based on experience, creativity and judgement"],
              ["Can be taught in a classroom (theory)", "Improves with practice, like painting or music"],
              ["Cause-and-effect relationships (universal, but not as exact as physics or chemistry — hence called a 'soft' or 'inexact' science)", "Personal skill matters more than the principle itself in getting results"],
            ],
          },
          {
            kind: "table",
            headers: ["Feature of a profession", "Does management have it?"],
            rows: [
              ["Systematic body of knowledge", "Yes — theories, principles and case studies exist (e.g., MBA/BCA courses)."],
              ["Formal education and training", "Growing — management degrees and professional certifications (though not compulsory everywhere)."],
              ["Professional association", "Exists (AIMA in India, etc.) but membership is not compulsory to practise, unlike for a doctor or a chartered accountant."],
              ["Code of conduct/ethics", "Exists, but is not as strictly enforced as in law or medicine."],
              ["Service motive over profit motive", "Weak — a manager's job is largely to maximise profit for the owners."],
              ["Restricted entry", "No licence is legally required to become a manager, unlike a doctor or lawyer."],
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Conclusion",
            text: "Management has the features of a science (a body of knowledge and principles) and of an art (skilful application), and it is EMERGING as a profession, but it has not yet fully satisfied all the criteria of an established profession like medicine or law — mainly because entry is not restricted by a licence and the primary motive remains profit, not service.",
          },
        ],
      },
      {
        id: "management-social-system",
        title: "4. Management as a Social System; Concepts of Management, Administration and Organization",
        icon: "Users",
        blocks: [
          {
            kind: "paragraph",
            text: "Management as a SOCIAL SYSTEM views the organisation as a system of interacting human beings, each playing a role, influenced by social, cultural and psychological factors — not just a set of machines and processes. Because management deals with people, it must consider human relations, group behaviour, motivation and communication, and it also carries a SOCIAL RESPONSIBILITY towards employees, customers, the government and society at large (studied further in Unit V).",
          },
          {
            kind: "table",
            headers: ["Concept", "Meaning"],
            rows: [
              ["Management", "Getting work done through and with people; concerned mainly with the EXECUTION of policy — 'doing things'."],
              ["Administration", "A higher-level function concerned with determining major objectives and policies — 'deciding what to do'. In many organisations today the two terms are used interchangeably, but classically administration is above management (administration decides, management executes)."],
              ["Organization", "(1) As a NOUN — a group of people working together for a common goal, structured with defined authority and responsibility (e.g., 'a business organization'). (2) As a VERB — the management FUNCTION of arranging resources and activities into a coherent structure (studied in Unit III)."],
            ],
          },
          {
            kind: "table",
            headers: ["Basis", "Management", "Administration"],
            rows: [
              ["Nature of work", "Putting plans and policies into action (execution)", "Determining objectives and major policies (decision-making)"],
              ["Level", "Usually middle and lower level", "Usually top level"],
              ["Main function", "Motivating and controlling people to get work done", "Planning and framing policy"],
              ["Applicable to", "Business organisations (profit-oriented)", "Government, military, clubs, and business, in the classical view"],
              ["Nature of skill needed", "Technical and human skills", "Conceptual and human skills"],
            ],
          },
        ],
      },
      {
        id: "evolution-management",
        title: "5. Evolution of Management Thought",
        icon: "History",
        blocks: [
          {
            kind: "paragraph",
            text: "Management thought has developed through several stages, each contributing new ideas that are still used today. It is broadly divided into the CLASSICAL, NEO-CLASSICAL (BEHAVIOURAL) and MODERN approaches.",
          },
          { kind: "diagram", diagramId: "evolution-of-management", caption: "Fig 1.2 — Evolution of management thought" },
          {
            kind: "table",
            headers: ["Approach / School", "Main contributor(s)", "Key idea"],
            rows: [
              ["Scientific Management", "F.W. Taylor (father of scientific management), late 19th–early 20th century", "Use scientific methods (time-and-motion study, standardisation) to find the 'one best way' to do a job, and pay workers by results (differential piece-rate)."],
              ["Administrative (Fayol's) Theory", "Henri Fayol", "Identified the universal functions of management (plan, organise, command, coordinate, control) and 14 principles of management applicable to any organisation."],
              ["Bureaucratic Theory", "Max Weber", "An ideal organisation runs on clear rules, a defined hierarchy, division of labour and impersonal relationships, to ensure efficiency and fairness."],
              ["Human Relations (Neo-classical) Movement", "Elton Mayo (Hawthorne experiments, 1924–32)", "Employee productivity is influenced strongly by social and psychological factors — attention, group norms and morale — not only by pay and physical conditions."],
              ["Behavioural Science Approach", "Abraham Maslow, Douglas McGregor, Herzberg", "Deeper study of individual and group behaviour, motivation (Maslow's hierarchy of needs, Theory X and Theory Y) and leadership."],
              ["Quantitative (Management Science) Approach", "Operations research specialists (World War II onward)", "Uses mathematical models, statistics and computers for decision-making (linear programming, queuing theory)."],
              ["Systems Approach", "Ludwig von Bertalanffy and management theorists", "Views the organisation as an open SYSTEM of interrelated parts (input–process–output) interacting with its environment."],
              ["Contingency (Situational) Approach", "Fiedler, Lawrence and Lorsch", "There is no one best way to manage — the right approach depends on the situation (size, technology, environment)."],
              ["Modern approaches", "—", "Total Quality Management, learning organisations, knowledge management, e-management (studied further in Unit V)."],
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam Tip",
            text: "For 'evolution of management thought', present it as a timeline: Classical (Taylor's scientific management + Fayol's administrative theory + Weber's bureaucracy) → Neo-classical/Human Relations (Hawthorne studies) → Behavioural Science → Quantitative/Systems/Contingency → Modern. One line on the main contribution of each school is usually enough, with more detail on Taylor and Fayol.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Management", definition: "The process of getting things done through people by efficiently using resources to achieve organisational goals." },
      { term: "Administration", definition: "The higher-level function of determining objectives and major policies." },
      { term: "Organization", definition: "A group of people working together for a common goal; also the function of structuring resources and activities." },
      { term: "Scientific Management", definition: "Taylor's approach of using scientific study to find the best way to perform a job." },
      { term: "Hawthorne experiments", definition: "Elton Mayo's studies showing that social and psychological factors affect worker productivity." },
      { term: "Contingency approach", definition: "The view that there is no single best way to manage — it depends on the situation." },
    ],
    examQuestions: [
      "Define management. Explain its nature and importance. (Long)",
      "Discuss the purpose and functions of management. (Medium)",
      "'Management is both an art and a science.' Discuss. (Long)",
      "Is management a profession? Discuss with reasons. (Medium)",
      "Differentiate between management and administration. (Medium)",
      "Explain the concept of management as a social system. (Short)",
      "Trace the evolution of management thought. (Long)",
      "Explain the contribution of F.W. Taylor and Henri Fayol to management thought. (Medium)",
      "Write a short note on the Hawthorne experiments. (Short)",
    ],
  },
  {
    unitNumber: 2,
    title: "Functions of Management: Planning, Forecasting and Decision Making",
    hours: 10,
    headings: [
      {
        id: "planning",
        title: "1. Planning: Meaning, Need, Importance, Types and Levels",
        icon: "Compass",
        blocks: [
          {
            kind: "paragraph",
            text: "PLANNING is the primary (first) function of management — deciding in advance WHAT is to be done, HOW it is to be done, WHEN it is to be done and WHO will do it. It bridges the gap between where an organisation is now and where it wants to be. All other functions (organising, staffing, directing, controlling) are performed within the framework laid down by planning.",
          },
          {
            kind: "table",
            headers: ["Need and importance of planning", "Explanation"],
            rows: [
              ["Provides direction", "Gives a clear sense of purpose and direction to the whole organisation."],
              ["Reduces uncertainty and risk", "Anticipates future problems and prepares responses in advance."],
              ["Reduces overlapping and wasteful activities", "Coordinates the work of different departments towards common goals."],
              ["Promotes innovative ideas", "A planning exercise is a good time for creative thinking, since it forces managers to look ahead."],
              ["Facilitates decision-making", "Sets the goals and standards against which alternative courses of action are judged."],
              ["Establishes standards for controlling", "Without a plan there is nothing to compare actual performance against."],
            ],
          },
          {
            kind: "table",
            headers: ["Type of plan", "Meaning", "Example"],
            rows: [
              ["Objectives", "The ends towards which activity is aimed", "'Increase market share by 10%'"],
              ["Strategy", "A comprehensive plan for achieving objectives in a competitive environment", "Entering a new market"],
              ["Policy", "General statements that guide thinking and decision-making within limits", "'Promote from within wherever possible'"],
              ["Procedure", "The exact sequence of steps for performing a task", "Steps to process a purchase order"],
              ["Rule", "A specific statement requiring a specific action to be taken or not taken; no discretion allowed", "'No smoking in the factory'"],
              ["Programme", "A single-use plan comprising goals, policies, procedures and resources for a project", "A new-product launch programme"],
              ["Budget", "A plan expressed in numerical (usually financial) terms", "The annual sales budget"],
            ],
          },
          {
            kind: "table",
            headers: ["Level of planning", "Made by", "Time span", "Nature"],
            rows: [
              ["Strategic (Corporate) planning", "Top management", "Long term (3–5 years or more)", "Broad, deals with overall direction and major resource allocation"],
              ["Tactical (Administrative) planning", "Middle management", "Medium term (1–3 years)", "Translates strategic plans into departmental objectives"],
              ["Operational planning", "Lower/supervisory management", "Short term (day to day, weekly, monthly)", "Deals with the routine, day-to-day working of the organisation"],
            ],
          },
          {
            kind: "table",
            headers: ["Advantages of planning", "Limitations of planning"],
            rows: [
              ["Gives direction and reduces the risk of uncertainty", "Time-consuming and costly to prepare"],
              ["Reduces overlapping/wasteful activities and encourages innovation", "Reduces flexibility — rigid adherence to a plan can be harmful in a fast-changing environment"],
              ["Facilitates decision-making and control", "May give a false sense of security about the future"],
              ["Improves coordination", "Cannot foresee every future event (natural disasters, sudden policy changes) — external limitations"],
              ["Optimum use of resources", "Internal limitations: rigid policies, lack of skilled planners, resistance to change"],
            ],
          },
        ],
      },
      {
        id: "forecasting",
        title: "2. Forecasting: Need and Techniques",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "paragraph",
            text: "FORECASTING is the process of estimating future events (sales, demand, costs, technology trends) by systematically analysing past and present data. Good planning depends heavily on accurate forecasting — a plan is only as good as the assumptions about the future on which it is based.",
          },
          {
            kind: "bullets",
            items: [
              "Need for forecasting: reduces the risk of an uncertain future; helps set realistic objectives and budgets; helps in resource allocation (production, manpower, finance); helps in identifying future opportunities and threats; improves the quality of planning decisions.",
            ],
          },
          {
            kind: "table",
            headers: ["Technique of forecasting", "Description"],
            rows: [
              ["Qualitative (judgemental) techniques", "Based on opinion and judgement rather than numbers — used when historical data is scarce."],
              ["– Expert opinion / Jury of executive opinion", "Views of experienced managers or experts are pooled together."],
              ["– Delphi technique", "A panel of experts answers questionnaires anonymously over several rounds until a consensus emerges."],
              ["– Sales-force composite", "Salespeople estimate the likely sales in their own territories, which are combined."],
              ["Quantitative (statistical) techniques", "Based on numerical/historical data and mathematical methods."],
              ["– Time-series analysis", "Studies past data over time to find trends, seasonal patterns and cycles, and projects them forward."],
              ["– Moving averages", "Averages of the most recent few periods, updated as new data comes in, to smooth out short-term fluctuations."],
              ["– Regression analysis", "Establishes a mathematical relationship between the variable to be forecast and one or more related variables."],
              ["– Market research / Survey method", "Systematic collection of data directly from customers through surveys and questionnaires."],
            ],
          },
        ],
      },
      {
        id: "decision-making",
        title: "3. Decision Making: Types, Process and Techniques",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "DECISION MAKING is the process of choosing the best course of action from among several available alternatives to achieve a desired goal. It is called the 'core' or 'heart' of management, because every management function eventually requires decisions.",
          },
          {
            kind: "table",
            headers: ["Type of decision", "Meaning", "Example"],
            rows: [
              ["Programmed decisions", "Routine, repetitive decisions made according to established rules, policies or procedures", "Approving a standard leave application"],
              ["Non-programmed decisions", "Novel, unstructured and important decisions for which no ready-made solution exists", "Deciding whether to acquire another company"],
              ["Strategic decisions", "Long-term decisions taken by top management, affecting the whole organisation", "Entering a new market"],
              ["Operational (tactical) decisions", "Short-term, day-to-day decisions taken by middle/lower management", "Scheduling machine maintenance"],
              ["Individual decisions", "Taken by one manager alone", "A supervisor assigning a task"],
              ["Group decisions", "Taken jointly by a group or committee", "A board deciding on a merger"],
            ],
          },
          { kind: "diagram", diagramId: "decision-making-process", caption: "Fig 2.1 — Steps in the process of rational decision-making" },
          {
            kind: "table",
            headers: ["Step in rational decision-making", "Explanation"],
            rows: [
              ["1. Identify the problem", "Recognise and clearly define the real problem, not just its symptoms."],
              ["2. Analyse the problem and gather information", "Collect relevant facts, data and information about the problem."],
              ["3. Develop alternative courses of action", "List all the feasible alternatives (options) available."],
              ["4. Evaluate the alternatives", "Weigh the advantages, disadvantages, costs and risks of each alternative against the objective."],
              ["5. Select the best alternative", "Choose the option that best solves the problem, considering the resources and constraints."],
              ["6. Implement the decision", "Put the chosen alternative into action through proper planning and communication."],
              ["7. Follow up and review", "Monitor the results and take corrective action if the decision does not work as expected."],
            ],
          },
          {
            kind: "table",
            headers: ["Technique of decision-making", "Description"],
            rows: [
              ["Marginal analysis", "Compares the additional (marginal) cost of an alternative with its additional (marginal) benefit."],
              ["Cost-benefit analysis", "Compares the total expected costs and total expected benefits of each alternative in monetary terms."],
              ["Decision tree", "A diagram showing the sequence of decisions and their possible outcomes (with probabilities and payoffs), used to choose the alternative with the highest EXPECTED MONETARY VALUE (EMV)."],
              ["Brainstorming", "A group technique for generating a large number of creative alternatives without immediate criticism."],
              ["Operations research (OR) models", "Mathematical models such as linear programming, used for complex, quantifiable decisions."],
              ["Simulation", "Building a model of a real situation to test the effect of different decisions without real-world risk."],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "A simple decision-tree example",
            text: "A company can launch Product A (70% chance of success, profit ₹5,00,000; 30% chance of failure, loss ₹1,00,000) or Product B (50% chance of success, profit ₹8,00,000; 50% chance of failure, loss ₹2,00,000).  EMV(A) = 0.7 × 5,00,000 + 0.3 × (−1,00,000) = 3,50,000 − 30,000 = ₹3,20,000.  EMV(B) = 0.5 × 8,00,000 + 0.5 × (−2,00,000) = 4,00,000 − 1,00,000 = ₹3,00,000.  Since EMV(A) > EMV(B), Product A is the better decision on average.",
          },
        ],
      },
      {
        id: "organizing-intro",
        title: "4. Organizing: An Introduction",
        icon: "Network",
        blocks: [
          {
            kind: "paragraph",
            text: "ORGANIZING is the management function of identifying and grouping the work to be done, defining and delegating responsibility and authority, and establishing relationships to enable people to work together most effectively towards the organisation's goals. It converts the plan into a working structure of jobs and departments. (Its elements, processes, types and delegation of authority are studied in detail in Unit III.)",
          },
          {
            kind: "bullets",
            items: [
              "The process of organizing broadly involves: (1) identifying and dividing the work into manageable activities; (2) grouping similar activities into departments (departmentation); (3) assigning the activities to specific jobs and people; (4) delegating authority and fixing responsibility; (5) establishing relationships to coordinate the work of individuals, groups and departments.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Planning", definition: "Deciding in advance what to do, how, when and by whom." },
      { term: "Policy", definition: "A general guideline for decision-making within defined limits." },
      { term: "Forecasting", definition: "Estimating future events by analysing past and present data." },
      { term: "Decision making", definition: "Choosing the best course of action among available alternatives." },
      { term: "Programmed decision", definition: "A routine decision made according to established rules or procedures." },
      { term: "Decision tree", definition: "A diagram used to evaluate alternatives based on their probabilities and payoffs." },
      { term: "Organizing", definition: "Grouping activities and resources into a structure and assigning authority and responsibility." },
    ],
    examQuestions: [
      "What is planning? Explain its need, importance, advantages and limitations. (Long)",
      "Explain the types of plans with examples. (Medium)",
      "Explain the levels of planning in an organisation. (Medium)",
      "What is forecasting? Why is it needed? Explain any four techniques of forecasting. (Long)",
      "What is decision-making? Explain the types of decisions. (Medium)",
      "Explain the process of rational decision-making with a diagram. (Long)",
      "Explain any four techniques of decision-making. (Medium)",
      "Solve a decision-tree problem to select the best alternative using EMV. (Medium)",
      "What is organizing? Briefly explain its process. (Short)",
    ],
  },
  {
    unitNumber: 3,
    title: "Organizing, Staffing, Direction, Communication, Motivation and Leadership",
    hours: 12,
    headings: [
      {
        id: "organizing-elements",
        title: "1. Elements and Process of Organizing; Types of Organizations",
        icon: "Network",
        blocks: [
          {
            kind: "table",
            headers: ["Element of organizing", "Meaning"],
            rows: [
              ["Division of work (specialisation)", "Breaking the total task into smaller jobs so that each person specialises in a part of the work."],
              ["Departmentation", "Grouping related activities into departments (by function, product, territory, customer, or process)."],
              ["Hierarchy (scalar chain)", "The chain of authority from the top to the bottom of the organisation."],
              ["Authority and responsibility", "The right to command and the obligation to perform, assigned to each position."],
              ["Span of control", "The number of subordinates a manager can effectively supervise."],
              ["Coordination", "Synchronising the efforts of individuals and departments towards common goals."],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Process of organizing: (1) identify and divide the work; (2) departmentation — group similar activities; (3) assign duties to specific jobs and individuals; (4) delegate authority and fix responsibility; (5) establish structural relationships to coordinate the work.",
            ],
          },
          {
            kind: "table",
            headers: ["Type of organization structure", "Description", "Merit / Limitation"],
            rows: [
              ["Line organization", "Authority flows in a straight vertical line from the top to the bottom; each person reports to only one superior.", "Simple and clear authority / no specialist advice"],
              ["Line and staff organization", "Line managers have direct authority; staff (specialist) officers advise and assist without direct command authority.", "Benefit of specialisation / possible conflict between line and staff"],
              ["Functional organization", "Organised by specialised functions (production, finance, marketing, HR), each headed by a functional expert; workers may receive instructions from several functional heads.", "High degree of specialisation / violates unity of command"],
              ["Divisional organization", "Organised around products, geographic areas, or customer groups, each division being fairly self-contained.", "Accountability is clear / duplication of resources across divisions"],
              ["Matrix organization", "Combines functional and project/product structures — an employee reports to both a functional manager and a project manager.", "Flexible, good for complex projects / dual authority can cause confusion"],
            ],
          },
          { kind: "diagram", diagramId: "organization-structures", caption: "Fig 3.1 — Line, functional and matrix organisation structures" },
        ],
      },
      {
        id: "delegation-decentralization",
        title: "2. Delegation of Authority and Decentralization",
        icon: "GitCompareArrows",
        blocks: [
          {
            kind: "paragraph",
            text: "DELEGATION OF AUTHORITY is the process by which a manager assigns part of his/her authority (right to make decisions and give orders) to a subordinate, while remaining accountable for the results. It has THREE elements: AUTHORITY (given), RESPONSIBILITY (created for the subordinate to complete the task), and ACCOUNTABILITY (the subordinate remains answerable to the superior; note that accountability cannot be delegated, only authority and responsibility).",
          },
          {
            kind: "table",
            headers: ["Need for delegation", "Difficulties (barriers) in delegation"],
            rows: [
              ["Reduces the workload of top management, allowing focus on more important matters", "Manager's reluctance to give up authority or trust subordinates"],
              ["Develops and trains subordinates for higher responsibilities", "Fear that the subordinate will fail or outperform the manager"],
              ["Enables quicker decisions closer to the point of action", "Subordinate's lack of confidence or fear of criticism for mistakes"],
              ["Improves motivation and job satisfaction of employees", "Poor communication of what exactly has been delegated"],
              ["Facilitates growth and expansion of the organisation", "Absence of proper controls to check the delegated work"],
            ],
          },
          {
            kind: "paragraph",
            text: "DECENTRALIZATION is the systematic delegation of authority throughout all levels of the organisation, so that decision-making power is spread rather than concentrated at the top (CENTRALIZATION). It is the cumulative result of delegating authority to many people at many levels, whereas delegation refers to one act between a superior and a subordinate.",
          },
          {
            kind: "table",
            headers: ["Centralization", "Decentralization"],
            rows: [
              ["Decision-making authority is concentrated at the top", "Decision-making authority is spread across various levels"],
              ["Quick, uniform decisions; tighter control", "Faster decisions at the local level; better morale and initiative"],
              ["Suitable for small organisations or crisis situations", "Suitable for large, diversified or geographically spread organisations"],
              ["Overburdens top management", "Distributes the workload and develops future managers"],
            ],
          },
        ],
      },
      {
        id: "staffing",
        title: "3. Staffing: Meaning and Importance",
        icon: "Users",
        blocks: [
          {
            kind: "paragraph",
            text: "STAFFING is the management function of filling, and keeping filled, the positions in the organisation structure with COMPETENT people. It covers manpower planning, recruitment, selection, training, performance appraisal, promotion and compensation — essentially the human resource management function of an organisation.",
          },
          {
            kind: "bullets",
            items: [
              "Importance of staffing: (1) helps to find and place the right person in the right job; (2) improves the quality and quantity of output through skilled employees; (3) ensures continuous availability of trained manpower; (4) reduces employee turnover, absenteeism and cost of labour; (5) helps in the growth and diversification of a business, which is possible only through competent people; (6) creates job satisfaction and morale among employees.",
            ],
          },
        ],
      },
      {
        id: "direction",
        title: "4. Direction: Principles, Communication, Types and Importance",
        icon: "MessageCircle",
        blocks: [
          {
            kind: "paragraph",
            text: "DIRECTION (also called LEADING) is the management function of instructing, guiding, supervising and motivating subordinates so that they work willingly and efficiently towards the organisation's goals. It is the 'action' or 'human relations' aspect of management, since it deals directly with influencing people.",
          },
          {
            kind: "table",
            headers: ["Principle of direction", "Explanation"],
            rows: [
              ["Harmony of objectives", "Individual goals should be aligned with organisational goals."],
              ["Unity of command", "Each subordinate should receive orders from only one superior, to avoid confusion."],
              ["Direct supervision", "A supervisor should observe the subordinates' work directly for effective control and motivation."],
              ["Effective communication", "Orders and information must be communicated clearly, in a language subordinates understand."],
              ["Follow-through", "Directives must be monitored to ensure they are properly understood and implemented."],
              ["Managerial communication", "Two-way flow of information between managers and subordinates."],
              ["Use of appropriate leadership and motivation", "Choose the leadership style and motivational tools suited to the people and the situation."],
            ],
          },
          {
            kind: "paragraph",
            text: "COMMUNICATION is the process of exchanging information, ideas and understanding between a sender and a receiver, so that both arrive at a common understanding (see the full treatment of communication types and barriers in C-103, Unit I). In the context of direction, communication is the tool through which a manager passes instructions and receives feedback.",
          },
          {
            kind: "table",
            headers: ["Type of communication in direction", "Description"],
            rows: [
              ["Downward", "From superior to subordinate — orders, instructions, policies."],
              ["Upward", "From subordinate to superior — reports, grievances, suggestions."],
              ["Horizontal", "Between people/departments at the same level — coordination."],
              ["Formal", "Follows the official chain of command."],
              ["Informal (grapevine)", "Personal, unofficial exchange of information."],
              ["Verbal / Written / Non-verbal", "Spoken word / documents and memos / gestures, tone and body language."],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Importance of communication in management: enables coordination among departments; helps in decision-making and its implementation; increases managerial efficiency; builds cooperative attitudes and improves industrial relations; and serves as the basis of leadership and motivation.",
            ],
          },
        ],
      },
      {
        id: "motivation-leadership",
        title: "5. Motivation: Importance and Theories; Leadership: Meaning, Styles and Qualities",
        icon: "Rocket",
        blocks: [
          {
            kind: "paragraph",
            text: "MOTIVATION is the process of stimulating people to act willingly and enthusiastically to achieve the desired goals. A motivated workforce works with greater efficiency, lower absenteeism and higher morale (see also C-103, Unit IV for a general treatment of motivation, self-talk and goal setting).",
          },
          {
            kind: "table",
            headers: ["Theory of motivation", "Main idea"],
            rows: [
              ["Maslow's Hierarchy of Needs", "Human needs are arranged in a hierarchy — physiological, safety, social, esteem and self-actualisation; a satisfied need no longer motivates, and people move up the hierarchy as lower needs are met."],
              ["Herzberg's Two-Factor Theory", "HYGIENE factors (salary, working conditions, company policy) prevent dissatisfaction but do not motivate by themselves; MOTIVATOR factors (achievement, recognition, responsibility, growth) actually motivate and satisfy."],
              ["McGregor's Theory X and Theory Y", "Theory X assumes employees dislike work and must be controlled and directed; Theory Y assumes employees are self-motivated, seek responsibility and are creative — managers should adopt participative practices consistent with Theory Y where possible."],
              ["McClelland's Need Theory", "People are driven by three needs in different proportions: need for Achievement (nAch), need for Affiliation (nAff) and need for Power (nPow)."],
              ["Vroom's Expectancy Theory", "Motivation depends on the belief that effort will lead to performance, performance will lead to reward, and the reward is valued (Motivation = Expectancy × Instrumentality × Valence)."],
            ],
          },
          { kind: "diagram", diagramId: "maslow-hierarchy-mgmt", caption: "Fig 3.2 — Maslow's hierarchy of needs" },
          {
            kind: "paragraph",
            text: "LEADERSHIP is the ability to influence, inspire and guide the behaviour of others so that they willingly work towards achieving a common goal. Every manager is expected to be a leader, though leadership can also exist informally, without formal authority.",
          },
          {
            kind: "table",
            headers: ["Leadership style", "Description"],
            rows: [
              ["Autocratic (authoritarian)", "The leader makes all decisions alone and expects strict obedience; useful in a crisis or with unskilled workers, but can lower morale."],
              ["Democratic (participative)", "The leader consults subordinates and involves them in decision-making; improves morale and commitment but can be slower."],
              ["Laissez-faire (free-rein)", "The leader gives subordinates almost complete freedom to set their own goals and methods; works well with highly skilled, self-motivated teams."],
              ["Paternalistic", "The leader acts like a parent figure, caring for employees' welfare while also guiding and controlling their work."],
              ["Transformational", "The leader inspires followers with a vision, encourages innovation and develops them beyond their own self-interest."],
              ["Transactional", "The leader focuses on structured tasks, rewards and penalties in exchange for performance."],
            ],
          },
          {
            kind: "table",
            headers: ["Qualities of a good leader", "Functions of a leader"],
            rows: [
              ["Vision and foresight", "Setting goals and communicating a clear vision"],
              ["Self-confidence and integrity", "Planning and organising the work of the group"],
              ["Good communication skills", "Guiding, motivating and supporting subordinates"],
              ["Decisiveness and courage", "Representing the group to higher management and outsiders"],
              ["Empathy and emotional intelligence", "Resolving conflicts within the group"],
              ["Adaptability and knowledge of the job", "Evaluating performance and providing feedback"],
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Departmentation", definition: "Grouping related activities into departments." },
      { term: "Span of control", definition: "The number of subordinates a manager can effectively supervise." },
      { term: "Delegation", definition: "Assigning part of one's authority to a subordinate while remaining accountable for results." },
      { term: "Decentralization", definition: "Systematic delegation of authority throughout all levels of an organisation." },
      { term: "Staffing", definition: "Filling and keeping filled the positions in the organisation with competent people." },
      { term: "Direction", definition: "Instructing, guiding and motivating subordinates towards organisational goals." },
      { term: "Motivation", definition: "Stimulating people to work willingly and enthusiastically towards a goal." },
      { term: "Leadership", definition: "The ability to influence and guide others towards achieving a common goal." },
    ],
    examQuestions: [
      "Explain the elements and process of organizing. (Medium)",
      "Explain the types of organization structures with diagrams. (Long)",
      "What is delegation of authority? Explain its elements and the difficulties in delegation. (Long)",
      "Differentiate between delegation and decentralization. (Medium)",
      "What is staffing? Explain its importance. (Medium)",
      "Explain the principles of direction. (Medium)",
      "Explain the types and importance of communication in an organisation. (Medium)",
      "What is motivation? Explain any three theories of motivation. (Long)",
      "Explain Maslow's hierarchy of needs. (Medium)",
      "What is leadership? Explain its styles, qualities and functions. (Long)",
    ],
  },
  {
    unitNumber: 4,
    title: "Controlling, Coordination and Strategic Management",
    hours: 10,
    headings: [
      {
        id: "controlling",
        title: "1. Controlling: Need, Nature, Importance, Process and Techniques",
        icon: "GitCompare",
        blocks: [
          {
            kind: "paragraph",
            text: "CONTROLLING is the management function of measuring actual performance, comparing it with planned standards, and taking corrective action to ensure that organisational goals are achieved. It is often described as the last function in the management cycle, but it 'closes the loop' by feeding information back into planning — making management a continuous process rather than a straight line.",
          },
          { kind: "diagram", diagramId: "controlling-process", caption: "Fig 4.1 — The process of controlling" },
          {
            kind: "table",
            headers: ["Nature of controlling", "Explanation"],
            rows: [
              ["Forward-looking", "Although it measures what has already happened, its purpose is to improve FUTURE performance."],
              ["A continuous process", "Performed continuously throughout the year, not just at the end."],
              ["Pervasive", "Performed at every level and in every function of management."],
              ["Goal-oriented", "Aims to ensure that actual performance conforms to planned goals."],
              ["Based on planning", "There can be no control without a plan or standard to compare against."],
              ["A management function of the whole organisation", "Each manager controls the resources under his/her authority."],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Need and importance of controlling: (1) helps to achieve organisational goals by keeping performance on track; (2) improves the accuracy of future planning by providing feedback about what actually happens; (3) helps in the efficient use of resources by pointing out wastage; (4) improves employee motivation, since people know their performance is being evaluated; (5) helps in coping with change, since deviations reveal where adjustments are needed; (6) facilitates coordination, since a common set of standards is applied across the organisation; (7) helps in decentralisation, since it allows top management to delegate confidently, knowing that a control system will report problems.",
            ],
          },
          {
            kind: "table",
            headers: ["Step in the process of controlling", "Explanation"],
            rows: [
              ["1. Setting standards", "Establishing benchmarks against which actual performance will be measured (e.g., sales target, quality standard, time schedule)."],
              ["2. Measuring actual performance", "Recording and measuring the work actually done, using appropriate methods (reports, inspection, observation)."],
              ["3. Comparing actual performance with standards", "Finding the DEVIATION — the difference between what was planned and what actually happened."],
              ["4. Analysing the causes of deviation", "Investigating WHY the deviation occurred (a poor plan, insufficient resources, external factors, or poor execution)."],
              ["5. Taking corrective action", "Adjusting the work, the resources or (if the standard itself was wrong) revising the standard, to bring performance back on track."],
            ],
          },
          {
            kind: "table",
            headers: ["Technique of control", "Description"],
            rows: [
              ["Budgetary control", "Preparing budgets (sales, production, cash) for different activities and comparing actual figures with the budgeted figures."],
              ["Statistical/quality control (SQC)", "Uses statistical sampling and control charts to monitor and maintain the quality of output."],
              ["Break-even analysis", "Determines the level of sales at which total revenue equals total cost (no profit, no loss), used to control cost-volume-profit relationships."],
              ["Ratio analysis", "Analyses financial ratios (current ratio, profitability ratio) from financial statements to control financial performance."],
              ["Management Information System (MIS)", "A computerised system that gives managers timely and accurate information for control decisions."],
              ["PERT/CPM (Network techniques)", "Network-based techniques for controlling the time and cost of large projects."],
              ["Personal observation and management audit", "Direct supervision by walking around, and periodic independent review of the whole management system."],
            ],
          },
        ],
      },
      {
        id: "coordination",
        title: "2. Coordination: Need and Importance",
        icon: "RefreshCw",
        blocks: [
          {
            kind: "paragraph",
            text: "COORDINATION is the process of synchronising and integrating the activities of different individuals, groups and departments so that they work together smoothly towards the common goals of the organisation, avoiding duplication, conflict and delay. Unlike the other functions, coordination is often called 'the essence of management' because it is not a separate, single-time activity but is achieved AS A RESULT of properly performing all the other functions (planning, organizing, staffing, directing and controlling) together.",
          },
          {
            kind: "table",
            headers: ["Need for coordination", "Explanation"],
            rows: [
              ["Growth in size of organisations", "As organisations grow, more people and departments must be kept working towards the same goals."],
              ["Specialisation and division of labour", "Different specialists (finance, marketing, production) must be integrated so their separate work fits together."],
              ["Interdependence of departments", "The output of one department is often the input of another (e.g., production depends on the purchase department for materials)."],
              ["Diversity of skills and interests", "People with different backgrounds, goals and perspectives must be aligned to a common purpose."],
              ["Differences of opinion", "Coordination resolves conflicting viewpoints between individuals and departments."],
            ],
          },
          {
            kind: "table",
            headers: ["Importance of coordination", "Explanation"],
            rows: [
              ["Unity of direction", "Ensures all departments and individuals work towards common organisational goals rather than their own narrow objectives."],
              ["Reduces conflict and duplication", "Avoids two departments doing the same work or working at cross purposes."],
              ["Efficient use of resources", "Prevents wastage caused by uncoordinated activities."],
              ["Improves employee morale", "A well-coordinated organisation runs smoothly, reducing frustration among employees."],
              ["Facilitates growth and development", "A large, complex organisation can function effectively only when its many parts are coordinated."],
            ],
          },
        ],
      },
      {
        id: "strategic-management-basics",
        title: "3. Strategic Management: Definition, Classes and Levels of Decisions",
        icon: "Crown",
        blocks: [
          {
            kind: "paragraph",
            text: "STRATEGIC MANAGEMENT is the ongoing process of formulating, implementing and evaluating cross-functional decisions that enable an organisation to achieve its long-term objectives and to gain a competitive advantage in its environment. It looks at the organisation as a whole, in relation to its external environment (competitors, customers, technology, government policy).",
          },
          {
            kind: "table",
            headers: ["Class of decision (by level)", "Made by", "Nature"],
            rows: [
              ["Strategic decisions", "Top management (Board, CEO)", "Long-term, affect the whole organisation, define its direction and scope, involve high risk and major resource commitment (e.g., diversification, mergers)."],
              ["Tactical (Administrative) decisions", "Middle management", "Medium-term, translate strategy into departmental plans and resource allocation (e.g., organisation structure, distribution channels)."],
              ["Operational decisions", "Lower/supervisory management", "Short-term, routine day-to-day decisions that implement tactical decisions (e.g., work scheduling, inventory reordering)."],
            ],
          },
          {
            kind: "table",
            headers: ["Level of strategy", "Focus"],
            rows: [
              ["Corporate-level strategy", "Which businesses/industries should the company be in? (Growth, stability, retrenchment, diversification)."],
              ["Business-level (competitive) strategy", "How should the company compete in a particular industry or market? (Cost leadership, differentiation, focus)."],
              ["Functional-level strategy", "How should each functional department (marketing, finance, operations, HR) support the business strategy?"],
            ],
          },
        ],
      },
      {
        id: "strategist-relevance",
        title: "4. Role of Different Strategists; Relevance and Benefits of Strategic Management",
        icon: "HandHelping",
        blocks: [
          {
            kind: "table",
            headers: ["Strategist", "Role"],
            rows: [
              ["Board of Directors", "Approves the overall mission, vision and major strategic decisions; oversees top management on behalf of shareholders."],
              ["Chief Executive Officer (CEO) / Managing Director", "The chief architect of strategy — formulates, communicates and drives the implementation of corporate strategy."],
              ["Top (senior) management team", "Formulates business and functional strategies in their respective areas and ensures alignment with corporate strategy."],
              ["Strategic planning department / consultants", "Provide analysis, data, environmental scanning and formal planning support to top management."],
              ["Middle and line managers", "Translate strategy into action plans, targets and day-to-day decisions within their departments."],
              ["External stakeholders (consultants, industry experts)", "Provide an outside perspective, specialised expertise and benchmarking against competitors."],
            ],
          },
          {
            kind: "table",
            headers: ["Relevance / Benefits of strategic management", "Explanation"],
            rows: [
              ["Provides a clear sense of direction and purpose", "Everyone in the organisation understands the long-term vision and their role in achieving it."],
              ["Improves ability to cope with a changing environment", "A regular strategic process forces the organisation to scan and respond to external changes."],
              ["Better allocation of resources", "Resources are directed towards activities that support the chosen strategy."],
              ["Encourages proactive rather than reactive management", "Managers anticipate problems and opportunities rather than simply reacting to a crisis."],
              ["Improves financial performance", "Studies consistently associate systematic strategic planning with better long-term profitability and growth."],
              ["Facilitates communication and coordination", "A shared strategy improves communication and coordination across functions and levels."],
            ],
          },
          {
            kind: "paragraph",
            text: "Benefits of strategic management in India: as the Indian economy has liberalised, globalised and become more competitive since the 1990s, Indian companies (both public and private sector) have increasingly adopted formal strategic management to compete with multinational corporations, to identify new growth opportunities (domestic and export markets), to manage rapid changes in technology and government policy, and to build long-term competitive advantages rather than relying only on short-term operational efficiency.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Controlling", definition: "Measuring performance against standards and taking corrective action." },
      { term: "Deviation", definition: "The difference between actual performance and the planned standard." },
      { term: "Budgetary control", definition: "Comparing actual figures with budgeted figures to control performance." },
      { term: "Coordination", definition: "Synchronising the activities of individuals and departments towards common goals." },
      { term: "Strategic management", definition: "The process of formulating and implementing decisions to achieve long-term objectives and competitive advantage." },
      { term: "Corporate-level strategy", definition: "The strategy that decides which businesses or industries a company should be in." },
    ],
    examQuestions: [
      "What is controlling? Explain its nature and importance. (Medium)",
      "Explain the process of controlling with a diagram. (Long)",
      "Explain the techniques of managerial control. (Long)",
      "What is coordination? Explain its need and importance. (Medium)",
      "'Coordination is the essence of management.' Discuss. (Medium)",
      "What is strategic management? Explain the levels of decisions and levels of strategy. (Long)",
      "Explain the role of different strategists in an organisation. (Medium)",
      "Discuss the relevance and benefits of strategic management, particularly in the Indian context. (Long)",
    ],
  },
  {
    unitNumber: 5,
    title: "Recent Trends in Management",
    hours: 8,
    headings: [
      {
        id: "social-responsibility",
        title: "1. Social Responsibility of Management",
        icon: "HeartHandshake",
        blocks: [
          {
            kind: "paragraph",
            text: "SOCIAL RESPONSIBILITY OF MANAGEMENT (Corporate Social Responsibility, CSR) is the obligation of a business to take decisions and actions that protect and improve not only its own profit but also the welfare of society as a whole, including its employees, customers, the local community, the government and the environment.",
          },
          {
            kind: "table",
            headers: ["Responsibility towards", "Examples of action"],
            rows: [
              ["Shareholders/owners", "Fair return on investment, transparent financial reporting."],
              ["Employees", "Fair wages, safe working conditions, training, welfare facilities, non-discrimination."],
              ["Customers", "Quality products, fair pricing, honest advertising, after-sales service."],
              ["Government", "Timely payment of taxes, compliance with laws and regulations."],
              ["Community and society", "Supporting education, healthcare, rural development and disaster relief."],
              ["Environment", "Pollution control, sustainable use of resources, waste management."],
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "CSR in India",
            text: "Section 135 of the Companies Act, 2013 makes CSR spending mandatory for companies of a specified size, turnover or net profit: they must spend at least 2% of their average net profit of the preceding three years on CSR activities specified in Schedule VII of the Act (education, health, environment, rural development, and others), through a CSR committee of the Board.",
          },
        ],
      },
      {
        id: "environment-friendly-management",
        title: "2. Environment-Friendly (Green) Management",
        icon: "Sprout",
        blocks: [
          {
            kind: "paragraph",
            text: "ENVIRONMENT-FRIENDLY (GREEN) MANAGEMENT means running a business in a way that minimises harm to the natural environment while still achieving business objectives — recognising that natural resources are limited and that businesses have a duty (and increasingly a legal and market-driven necessity) to operate sustainably.",
          },
          {
            kind: "bullets",
            items: [
              "Practices of green management: adopting cleaner and energy-efficient technology; reducing, reusing and recycling waste; using renewable sources of energy (solar, wind); complying with pollution-control laws (Environment Protection Act, 1986); eco-labelling and green marketing of products; environmental audits and reporting.",
              "Benefits: reduces regulatory and legal risk; improves brand image and customer goodwill; often reduces costs in the long run through efficient resource use; attracts environmentally conscious investors and customers; contributes to sustainable development for future generations.",
            ],
          },
        ],
      },
      {
        id: "change-crisis-stress",
        title: "3. Management of Change, Crisis and Stress",
        icon: "RefreshCw",
        blocks: [
          {
            kind: "paragraph",
            text: "MANAGEMENT OF CHANGE is the process of planning, implementing and controlling organisational change — in technology, structure, processes, or culture — in a way that minimises employee resistance and disruption while achieving the intended benefits of the change.",
          },
          {
            kind: "table",
            headers: ["Cause of resistance to change", "How management can reduce resistance"],
            rows: [
              ["Fear of the unknown / loss of job security", "Communicate the reasons and benefits of the change clearly and early"],
              ["Habit and comfort with the existing way of working", "Involve and consult employees in planning the change"],
              ["Fear of loss of status, skills becoming obsolete", "Provide training and support to build new skills"],
              ["Poor timing or poor communication of the change", "Implement change gradually, with a clear timeline and feedback mechanism"],
            ],
          },
          {
            kind: "paragraph",
            text: "MANAGEMENT OF CRISIS (crisis management) is the process of identifying a serious threat to the organisation (financial collapse, accident, natural disaster, product recall, cyber-attack), planning a response in advance, and effectively handling the situation to minimise damage to the organisation, its people and its reputation. It typically involves: (1) prevention and preparedness (risk identification and contingency planning); (2) a rapid, honest response when the crisis hits, with a designated crisis team and clear communication; (3) recovery and learning — restoring normal operations and revising plans based on the lessons learned.",
          },
          {
            kind: "paragraph",
            text: "MANAGEMENT STRESS refers to managing the pressure, anxiety and strain experienced by managers and employees because of work demands (deadlines, targets, responsibility, conflict, change). Organisations manage stress through: reasonable workloads and realistic deadlines; clear job roles to avoid role ambiguity and conflict; employee counselling and wellness programmes; training in time management; encouraging work-life balance and providing recreational facilities; and open communication so problems can be raised early.",
          },
        ],
      },
      {
        id: "tqm",
        title: "4. Total Quality Management (TQM)",
        icon: "Award",
        blocks: [
          {
            kind: "paragraph",
            text: "TOTAL QUALITY MANAGEMENT (TQM) is a management approach in which every member of an organisation participates in continuously improving the quality of its products, services and processes, with the aim of long-term customer satisfaction and organisational success. 'Total' means every department and every employee is involved, not just a separate quality-control department.",
          },
          {
            kind: "table",
            headers: ["Principle of TQM", "Explanation"],
            rows: [
              ["Customer focus", "Quality is ultimately defined by meeting or exceeding customer expectations."],
              ["Continuous improvement (Kaizen)", "Small, ongoing improvements in every process, all the time, rather than occasional big changes."],
              ["Employee involvement", "Every employee, at every level, is responsible for quality and is empowered to suggest improvements."],
              ["Process-centred approach", "Focus on improving the underlying processes, not just inspecting the final output."],
              ["Fact-based decision-making", "Decisions are based on data and statistical analysis, not guesswork."],
              ["Integrated (systems) approach", "All departments work together, recognising quality affects and is affected by every part of the organisation."],
              ["Top management commitment", "Quality must be championed and driven from the top, not delegated entirely to a quality department."],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Tools associated with TQM: Kaizen (continuous improvement), Six Sigma (reducing defects through statistical methods), the PDCA (Plan-Do-Check-Act) cycle, benchmarking, and ISO 9000 quality-management certification.",
            ],
          },
        ],
      },
      {
        id: "international-management",
        title: "5. International Management",
        icon: "Globe",
        blocks: [
          {
            kind: "paragraph",
            text: "INTERNATIONAL MANAGEMENT is the process of managing business operations that are conducted in more than one country, involving the flow of goods, services, capital, technology and people across national boundaries. As markets have globalised, many organisations — including Indian IT and manufacturing companies — now operate internationally, and BCA graduates increasingly work in globally distributed teams.",
          },
          {
            kind: "table",
            headers: ["Challenge of international management", "Explanation"],
            rows: [
              ["Cultural differences", "Differences in language, values, customs and work styles across countries (see also C-103, Unit V on 'Values across cultures')."],
              ["Legal and political differences", "Each country has its own laws, taxation, labour regulations and political stability."],
              ["Economic differences", "Currency exchange rates, inflation and levels of economic development vary."],
              ["Communication and coordination across distances and time zones", "Managing global teams that rarely meet face to face."],
              ["Ethical and regulatory compliance", "Complying with the differing ethical expectations and regulations of each host country."],
            ],
          },
          {
            kind: "table",
            headers: ["Mode of international business", "Description"],
            rows: [
              ["Exporting / Importing", "Selling goods produced in the home country to foreign markets, or buying from abroad."],
              ["Licensing / Franchising", "Allowing a foreign firm to use the company's trademark, technology or business model for a fee."],
              ["Joint venture", "A partnership between a domestic and a foreign firm, sharing ownership, control and profit."],
              ["Wholly owned subsidiary / Foreign Direct Investment (FDI)", "Setting up or acquiring a fully owned operation in another country."],
              ["Multinational Corporation (MNC)", "A company that owns and manages business operations in more than one country."],
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam Tip",
            text: "Unit V is largely a set of short-answer topics. For each (social responsibility, green management, change/crisis/stress management, TQM, international management), be ready to write a 100-150 word note: a one-line definition, 3-4 bullet points of practices/principles, and one benefit or example — this format covers almost any question asked from this unit.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Corporate Social Responsibility (CSR)", definition: "The obligation of a business to contribute to the welfare of society, not only to its own profit." },
      { term: "Green management", definition: "Managing a business in a way that minimises harm to the environment." },
      { term: "Change management", definition: "Planning and implementing organisational change while minimising resistance." },
      { term: "Crisis management", definition: "Preparing for and responding to serious threats to an organisation." },
      { term: "Total Quality Management (TQM)", definition: "A management approach involving everyone in continuously improving quality." },
      { term: "International management", definition: "Managing business operations across more than one country." },
      { term: "Multinational Corporation (MNC)", definition: "A company that owns and manages operations in more than one country." },
    ],
    examQuestions: [
      "What is the social responsibility of management? Explain the responsibilities towards different stakeholders. (Long)",
      "Write a note on CSR provisions under the Companies Act, 2013. (Medium)",
      "What is environment-friendly (green) management? Explain its practices and benefits. (Medium)",
      "Explain the management of change. Why do employees resist change and how can resistance be reduced? (Long)",
      "Write a note on crisis management. (Medium)",
      "How can management stress be managed in an organisation? (Medium)",
      "What is Total Quality Management? Explain its principles. (Long)",
      "What is international management? Explain its challenges. (Medium)",
      "Explain the modes of entering international business. (Medium)",
    ],
  },
];
