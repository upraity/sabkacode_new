import { UnitNote } from "@/types";

// Detailed, in-app notes for Quantitative Techniques for Management (QTM,
// BMB206) — AKTU MBA Sem 2. This is the most numerically intensive subject
// in the syllabus — every technique (LPP, transportation, assignment,
// sequencing, queuing, CPM/PERT) includes a complete worked numerical
// example, since that is exactly how this subject is examined.
export const qtmUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Operations Research and Decision-Making",
    hours: 6,
    headings: [
      {
        id: "or-scope",
        title: "1. Uses, Scope and Applications of Operations Research",
        icon: "Brain",
        blocks: [
          {
            kind: "paragraph",
            text: "Operations Research (OR) is the application of scientific, mathematical, and analytical methods to help managers make better quantitative decisions — turning a business problem into a mathematical model that can be solved objectively.",
          },
          {
            kind: "table",
            headers: ["Application Area", "Example Use"],
            rows: [
              ["Production & Inventory", "Deciding optimal product-mix, EOQ (recall Operations Management, Unit 3)"],
              ["Marketing", "Media selection, sales-territory allocation"],
              ["Finance", "Capital budgeting under constraints, portfolio selection"],
              ["Logistics", "Transportation and distribution planning (Unit 3 of this subject)"],
              ["Project Management", "Scheduling large projects using CPM/PERT (Unit 5 of this subject)"],
            ],
          },
        ],
      },
      {
        id: "decision-environments",
        title: "2. Decision-Making Environments",
        icon: "CloudFog",
        blocks: [
          {
            kind: "table",
            headers: ["Environment", "Characteristic"],
            rows: [
              ["Certainty", "The outcome of each decision alternative is known with 100% confidence"],
              ["Risk", "Outcomes are not certain, but their probabilities ARE known (based on past data or estimation)"],
              ["Uncertainty", "Outcomes are not certain AND their probabilities are also unknown"],
            ],
          },
          {
            kind: "paragraph",
            text: "Under uncertainty, several decision criteria are used: Maximax (optimistic — pick the alternative with the best possible best-case outcome), Maximin (pessimistic — pick the alternative whose worst-case outcome is the least bad), and Minimax Regret (pick the alternative that minimises the maximum \"regret\" of not having chosen the best option for each possible state of nature).",
          },
        ],
      },
      {
        id: "decision-tree",
        title: "3. Decision Tree Approach",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "A Decision Tree is a diagram that maps out decision points (squares), chance events (circles), and their associated payoffs and probabilities — used for sequential decisions under risk, calculated using Expected Monetary Value (EMV = Σ [Probability × Payoff] for each branch).",
          },
          { kind: "diagram", diagramId: "decision-tree", caption: "Fig 1.1 — A decision tree with chance nodes and payoffs" },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Decision Tree (EMV)",
            text: "Option A: 60% chance of ₹80,000 payoff, 40% chance of ₹20,000 payoff. EMV(A) = (0.6 × 80,000) + (0.4 × 20,000) = 48,000 + 8,000 = ₹56,000. Option B: 60% chance of ₹50,000, 40% chance of ₹35,000. EMV(B) = (0.6 × 50,000) + (0.4 × 35,000) = 30,000 + 14,000 = ₹44,000. Since EMV(A) = ₹56,000 > EMV(B) = ₹44,000, Option A should be chosen.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Operations Research", definition: "The application of scientific and mathematical methods to support managerial decision-making." },
      { term: "Maximin Criterion", definition: "A pessimistic decision rule under uncertainty — choose the alternative with the best worst-case outcome." },
      { term: "EMV", definition: "Expected Monetary Value — the probability-weighted average payoff of a decision alternative." },
    ],
    examQuestions: [
      "Discuss the uses, scope, and applications of Operations Research. (Medium)",
      "Differentiate between decision-making under risk and under uncertainty. (Medium)",
      "Explain the Maximax, Maximin, and Minimax Regret criteria with an example. (Long)",
      "Solve a decision tree problem to find the EMV of two alternatives and recommend a choice. (Numerical, Long)",
    ],
  },
  {
    unitNumber: 2,
    title: "Linear Programming Problem (LPP)",
    hours: 6,
    headings: [
      {
        id: "lpp-formulation",
        title: "1. Mathematical Formulation of LP Models",
        icon: "FunctionSquare",
        blocks: [
          {
            kind: "paragraph",
            text: "Linear Programming is a mathematical technique for finding the optimal (maximum or minimum) value of a linear objective function, subject to a set of linear constraints — very commonly used for product-mix problems (how much of each product to make to maximise profit, given limited resources).",
          },
          {
            kind: "paragraph",
            text: "Every LPP has three components: the Objective Function (what to maximise/minimise, e.g., profit), the Decision Variables (the quantities to determine, e.g., x1, x2 = units of Product 1, Product 2), and the Constraints (limitations on resources, expressed as linear inequalities), plus the non-negativity restriction (x1, x2 ≥ 0, since negative production doesn't make sense).",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked example — Product-mix formulation",
            text: "A firm makes two products, X1 and X2, earning a profit of ₹20 and ₹25 per unit respectively. Each unit of X1 needs 1 hour on Machine A and 1 hour on Machine B; each unit of X2 needs 1 hour on Machine A and 2 hours on Machine B. Machine A has 80 hours available; Machine B has 100 hours available. Formulation: Maximize Z = 20x1 + 25x2, subject to: x1 + x2 ≤ 80 (Machine A), x1 + 2x2 ≤ 100 (Machine B), x1, x2 ≥ 0.",
          },
        ],
      },
      {
        id: "graphical-method",
        title: "2. Graphical Method of Solving LPP",
        icon: "LineChart",
        blocks: [
          {
            kind: "paragraph",
            text: "The graphical method (used only for 2-variable problems) plots each constraint as a line, identifies the Feasible Region (the area satisfying ALL constraints simultaneously), and evaluates the objective function at each Corner Point (vertex) of that region — the optimal solution ALWAYS occurs at a corner point.",
          },
          { kind: "diagram", diagramId: "lpp-graph", caption: "Fig 2.1 — Graphical solution of the LPP above" },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — solving the LPP graphically",
            text: "Continuing the example above (Maximize Z = 20x1 + 25x2; x1+x2≤80; x1+2x2≤100): the corner points of the feasible region are (0,0), (80,0), (60,20) [where the two constraint lines intersect], and (0,50). Evaluating Z at each: Z(0,0) = 0; Z(80,0) = 20×80 = 1,600; Z(60,20) = 20×60 + 25×20 = 1,200 + 500 = 1,700; Z(0,50) = 25×50 = 1,250. The maximum is at (60, 20) with Z = ₹1,700 — so the firm should produce 60 units of X1 and 20 units of X2 for a maximum profit of ₹1,700.",
          },
        ],
      },
      {
        id: "simplex-method",
        title: "3. Simplex Method",
        icon: "Table",
        blocks: [
          {
            kind: "paragraph",
            text: "The Simplex Method solves LPPs with any number of variables (where graphical method won't work) using an iterative, tabular (matrix) algorithm:",
          },
          {
            kind: "bullets",
            ordered: true,
            items: [
              "Convert all inequality constraints into equations by adding Slack Variables (representing unused resource capacity).",
              "Set up the initial Simplex Table, starting from the origin (all decision variables = 0) as the first, usually non-optimal, feasible solution.",
              "Identify the entering variable (the column with the most negative coefficient in the objective row, for a maximisation problem) and the leaving variable (found via the minimum ratio test).",
              "Perform row operations to update the table (a 'pivot' operation).",
              "Repeat until no negative coefficients remain in the objective row — this signals the optimal solution has been reached.",
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam tip",
            text: "For the same product-mix example above, the Simplex Method would arrive at exactly the same answer as the graphical method — x1 = 60, x2 = 20, Z = ₹1,700 — since both methods solve the identical mathematical problem. Examiners often ask you to solve a 2-variable problem both ways to demonstrate they agree.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Feasible Region", definition: "The area satisfying all constraints of an LPP simultaneously." },
      { term: "Corner Point", definition: "A vertex of the feasible region — the optimal LPP solution always occurs here." },
      { term: "Slack Variable", definition: "A variable added to convert a ≤ constraint into an equation, representing unused capacity." },
    ],
    examQuestions: [
      "Formulate a product-mix problem as a linear programming problem. (Numerical, Medium)",
      "Solve a given LPP using the graphical method and state the optimal solution. (Numerical, Long)",
      "Explain the steps of the Simplex Method. (Long)",
      "What is a slack variable? Why is it needed in the Simplex Method? (Short)",
    ],
  },
  {
    unitNumber: 3,
    title: "Transportation Problem and Assignment Model",
    hours: 10,
    headings: [
      {
        id: "transportation-basics",
        title: "1. Transportation Problem: Finding an Initial Feasible Solution",
        icon: "Truck",
        blocks: [
          {
            kind: "paragraph",
            text: "The Transportation Problem finds the least-cost way to ship goods from several sources (factories/warehouses) with fixed supply to several destinations with fixed demand.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — North-West Corner Method (NWCM)",
            text: "Supply: S1 = 50, S2 = 60, S3 = 40 (total = 150). Demand: D1 = 30, D2 = 70, D3 = 50 (total = 150 — a balanced problem). Cost per unit (₹): S1→D1=4, S1→D2=6, S1→D3=8; S2→D1=3, S2→D2=5, S2→D3=7; S3→D1=6, S3→D2=4, S3→D3=3. NWCM always starts at the top-left cell: allocate min(50,30)=30 to S1-D1 (D1 fully met). Move right: allocate min(20,70)=20 to S1-D2 (S1 fully used). Move down: allocate min(60,50)=50 to S2-D2 (D2 fully met). Move right: allocate min(10,50)=10 to S2-D3 (S2 fully used). Move down: allocate min(40,40)=40 to S3-D3 (both fully met — solution complete). Total Cost = (30×4) + (20×6) + (50×5) + (10×7) + (40×3) = 120 + 120 + 250 + 70 + 120 = ₹680.",
          },
          {
            kind: "paragraph",
            text: "NWCM is simple but ignores cost entirely, so it rarely gives the optimal solution directly. Two better methods for finding a good initial solution: the Least Cost Method (always allocate to the cheapest available cell first) and Vogel's Approximation Method (VAM) — VAM calculates a 'penalty' (the difference between the two lowest costs) for each row/column and allocates to the cell with the lowest cost in the row/column with the HIGHEST penalty first; VAM usually gives a solution very close to optimal, or even optimal, on the first try.",
          },
        ],
      },
      {
        id: "transportation-optimality",
        title: "2. Testing for Optimality: Stepping Stone and MODI Method",
        icon: "CheckCircle2",
        blocks: [
          {
            kind: "paragraph",
            text: "Once an initial feasible solution is found (by NWCM, Least Cost, or VAM), it must be TESTED to see if it's actually optimal (lowest possible cost):",
          },
          {
            kind: "bullets",
            items: [
              "Stepping Stone Method: for each unused (empty) cell, trace a closed loop through currently used cells to calculate the net cost change of bringing that empty cell into the solution — if any loop shows a negative net cost change, the solution can still be improved.",
              "MODI (Modified Distribution) Method: a faster alternative to Stepping Stone — computes row and column index numbers (ui and vj) and uses them to directly calculate the opportunity cost of each empty cell, without manually tracing every loop.",
            ],
          },
          {
            kind: "paragraph",
            text: "Maximization Transportation Problem: since the standard method minimises cost, a maximisation problem (e.g., maximising profit per route instead of minimising cost) is converted by subtracting every value in the matrix from the largest value in the matrix, solving the resulting (now minimisation) problem normally, then interpreting the result in terms of the original profit values.",
          },
        ],
      },
      {
        id: "assignment-model",
        title: "3. Assignment Model: The Hungarian Algorithm",
        icon: "UserCheck",
        blocks: [
          {
            kind: "paragraph",
            text: "The Assignment Problem is a special case of the transportation problem where supply and demand are both exactly 1 at every source and destination — the classic case of assigning N workers to N jobs to minimise total cost (or time).",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Hungarian Algorithm",
            text: "Cost matrix (₹) for assigning 3 workers to 3 jobs — W1: J1=9, J2=11, J3=15; W2: J1=12, J2=9, J3=10; W3: J1=11, J2=14, J3=11. Step 1 (Row Reduction) — subtract each row's minimum from that row: W1 (min 9) → 0, 2, 6; W2 (min 9) → 3, 0, 1; W3 (min 11) → 0, 3, 0. Step 2 (Column Reduction) — each column already contains a zero (J1: 0, J2: 0, J3: 0), so no further reduction is needed. Step 3 (Assignment) — assign along zeros so each worker and job is used exactly once: W1→J1 (0), W2→J2 (0), W3→J3 (0) — a complete, valid assignment is found immediately. Total (original) cost = 9 + 9 + 11 = ₹29 — this is the optimal (minimum) total cost.",
          },
          {
            kind: "paragraph",
            text: "Maximization Assignment Problem: exactly like the maximisation transportation problem — subtract every value in the matrix from the largest value in the matrix first, then apply the Hungarian Algorithm normally to the resulting minimisation matrix.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "NWCM", definition: "North-West Corner Method — a simple starting-point method for the transportation problem, ignoring cost." },
      { term: "VAM", definition: "Vogel's Approximation Method — a penalty-based method usually giving a near-optimal initial transportation solution." },
      { term: "MODI Method", definition: "A method to test transportation solution optimality using row/column index numbers." },
      { term: "Hungarian Algorithm", definition: "A row/column-reduction based method for solving assignment problems optimally." },
    ],
    examQuestions: [
      "Solve a transportation problem using the North-West Corner Method and compute total cost. (Numerical, Long)",
      "Solve a transportation problem using Vogel's Approximation Method (VAM). (Numerical, Long)",
      "Explain the MODI method for testing optimality of a transportation solution. (Medium)",
      "Solve an assignment problem using the Hungarian Algorithm. (Numerical, Long)",
      "Explain how a maximization transportation/assignment problem is converted and solved. (Medium)",
    ],
  },
  {
    unitNumber: 4,
    title: "Sequencing and Queuing Theory",
    hours: 10,
    headings: [
      {
        id: "sequencing",
        title: "1. Sequencing: Johnson's Algorithm",
        icon: "ListOrdered",
        blocks: [
          {
            kind: "paragraph",
            text: "Sequencing problems determine the best ORDER to process a set of jobs through machines, to minimise the total time taken (makespan) or idle time.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Johnson's Rule (n jobs, 2 machines)",
            text: "Processing times (hours) — Job A: M1=5, M2=2; Job B: M1=1, M2=6; Job C: M1=9, M2=7; Job D: M1=3, M2=8; Job E: M1=10, M2=4. Johnson's Rule: find the smallest time in the whole table; if it's on M1, schedule that job as EARLY as possible; if on M2, schedule it as LATE as possible; remove that job and repeat. Smallest = Job B's M1 (1) → place first. Next smallest (excluding B) = Job A's M2 (2) → place last. Next = Job D's M1 (3) → place next available front slot. Next = Job E's M2 (4) → place next available back slot. Remaining Job C fills the middle. Optimal sequence: B – D – C – E – A. Computing the schedule: M1 finishes B,D,C,E,A at times 1, 4, 13, 23, 28. M2 (each job starts only after BOTH the previous M2 job finishes AND its own M1 finishes) finishes them at times 7, 15, 22, 27, 30. Total elapsed time (makespan) = 30 hours, with M2 idle for a total of 3 hours during the sequence.",
          },
          {
            kind: "paragraph",
            text: "Johnson's Rule extends to n jobs and 3 machines, PROVIDED one of two conditions holds: the minimum time on Machine 1 ≥ the maximum time on Machine 2, OR the minimum time on Machine 3 ≥ the maximum time on Machine 2. When this holds, two fictitious machines (M1' = M1+M2, and M2' = M2+M3) are created, and the same 2-machine Johnson's Rule is applied to these combined times.",
          },
          {
            kind: "paragraph",
            text: "For 2 jobs and m machines, a graphical method is used instead — plotting one job's processing time on each axis and finding a path that avoids overlapping machine usage, to minimise total elapsed time.",
          },
        ],
      },
      {
        id: "queuing-theory",
        title: "2. Queuing Theory: The M/M/1 Model",
        icon: "Users",
        blocks: [
          {
            kind: "paragraph",
            text: "Queuing Theory studies waiting lines — balancing the cost of making customers wait against the cost of providing more service capacity. The M/M/1 model is the simplest and most commonly examined queuing model:",
          },
          {
            kind: "bullets",
            items: [
              "M (first): arrivals follow a Poisson distribution (memoryless, random arrivals) at rate λ (lambda) per unit time.",
              "M (second): service times follow an Exponential distribution at rate μ (mu) per unit time.",
              "1: there is a single server, and a single queue (First-Come-First-Served), with infinite queue capacity allowed.",
            ],
          },
          {
            kind: "table",
            headers: ["Measure", "Formula"],
            rows: [
              ["Utilization Factor (ρ)", "ρ = λ ÷ μ"],
              ["Average number in the system (Ls)", "Ls = ρ ÷ (1 − ρ)"],
              ["Average number in the queue (Lq)", "Lq = ρ² ÷ (1 − ρ)"],
              ["Average waiting time in system (Ws)", "Ws = Ls ÷ λ"],
              ["Average waiting time in queue (Wq)", "Wq = Lq ÷ λ"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — M/M/1 Queue",
            text: "A bank counter serves customers at an average rate (μ) of 10 per hour, while customers arrive (λ) at an average rate of 8 per hour. Utilization ρ = 8 ÷ 10 = 0.8 (the server is busy 80% of the time). Ls = 0.8 ÷ (1 − 0.8) = 0.8 ÷ 0.2 = 4 customers in the system on average. Lq = 0.8² ÷ 0.2 = 0.64 ÷ 0.2 = 3.2 customers waiting in the queue on average. Ws = 4 ÷ 8 = 0.5 hours = 30 minutes average time in the system. Wq = 3.2 ÷ 8 = 0.4 hours = 24 minutes average waiting time before being served.",
          },
          {
            kind: "paragraph",
            text: "Application for better customer service: management can use these formulas to decide, for example, whether adding a second server (moving to an M/M/2 model) would sufficiently reduce Wq to justify its extra cost — a classic OR-based service capacity decision.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Johnson's Rule", definition: "An algorithm for sequencing jobs across 2 (or, under conditions, 3) machines to minimise total time." },
      { term: "Makespan", definition: "The total elapsed time to complete a sequence of jobs." },
      { term: "M/M/1 Queue", definition: "A queuing model with Poisson arrivals, exponential service times, and a single server." },
      { term: "Utilization Factor (ρ)", definition: "The ratio of arrival rate to service rate — the proportion of time the server is busy." },
    ],
    examQuestions: [
      "Solve a 5-job, 2-machine sequencing problem using Johnson's Rule and find the total elapsed time. (Numerical, Long)",
      "Explain the conditions for extending Johnson's Rule to 3 machines. (Medium)",
      "Explain the characteristics of an M/M/1 queuing model. (Medium)",
      "Calculate Ls, Lq, Ws, and Wq for a given M/M/1 queue. (Numerical, Long)",
      "How can queuing theory help management improve customer service? (Short)",
    ],
  },
  {
    unitNumber: 5,
    title: "Project Management: CPM, PERT and Gantt Charts",
    hours: 8,
    headings: [
      {
        id: "network-diagram-rules",
        title: "1. Rules for Drawing a Network Diagram",
        icon: "Network",
        blocks: [
          {
            kind: "paragraph",
            text: "A project network diagram represents a project as a set of activities (arrows) and events (nodes/circles) showing the logical sequence and dependencies between tasks.",
          },
          {
            kind: "bullets",
            items: [
              "Every activity must have a unique preceding and succeeding event.",
              "No activity can begin until all of its predecessor activities are complete.",
              "The network must have a single start event and a single end event.",
              "Loops (circular dependencies) are not allowed.",
              "Dummy activities (shown as dashed arrows, with zero duration) are used only to correctly show a dependency, without representing real work.",
            ],
          },
        ],
      },
      {
        id: "cpm-pert",
        title: "2. CPM and PERT",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "CPM (Critical Path Method) and PERT (Program Evaluation and Review Technique) both analyse project networks to find the Critical Path — the longest path through the network, which determines the minimum possible project duration. Any delay in a critical path activity delays the entire project.",
          },
          { kind: "diagram", diagramId: "network-diagram-cpm", caption: "Fig 5.1 — A project network showing the critical path" },
          {
            kind: "table",
            headers: ["Aspect", "CPM", "PERT"],
            rows: [
              ["Time estimates", "Single, deterministic time estimate per activity", "Three time estimates per activity: Optimistic (to), Most Likely (tm), Pessimistic (tp)"],
              ["Best suited for", "Repetitive projects with known, predictable durations (e.g., construction)", "Research/new projects with uncertain durations (e.g., R&D)"],
              ["Focus", "Cost-time trade-off (crashing activities)", "Probability of completing by a target date"],
            ],
          },
          {
            kind: "paragraph",
            text: "PERT's Expected Time formula: te = (to + 4tm + tp) ÷ 6, which gives more weight to the \"most likely\" estimate.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Critical Path",
            text: "A project has 5 activities: A (4 days, Event 1→2), B (2 days, 1→3), C (5 days, 2→4), D (3 days, 3→4), E (6 days, 4→5). Path 1: A–C–E = 4 + 5 + 6 = 15 days. Path 2: B–D–E = 2 + 3 + 6 = 11 days. Since Path 1 (15 days) is longer than Path 2 (11 days), A–C–E is the Critical Path, and the project's minimum duration is 15 days. Activities B and D together have a Total Float (slack) of 15 − 11 = 4 days — they could be delayed by up to 4 days combined without delaying the overall project.",
          },
        ],
      },
      {
        id: "gantt-chart",
        title: "3. GANTT Chart",
        icon: "BarChart3",
        blocks: [
          {
            kind: "paragraph",
            text: "A Gantt Chart is a horizontal bar chart showing each project activity's start date, duration, and end date along a timeline — much easier for non-technical stakeholders to read at a glance than a network diagram, though it doesn't show task dependencies as clearly as CPM/PERT does.",
          },
          { kind: "diagram", diagramId: "gantt-chart", caption: "Fig 5.2 — A Gantt chart for the same project activities" },
          {
            kind: "callout",
            tone: "info",
            title: "Exam tip",
            text: "A common question asks you to compare Gantt charts and network diagrams (CPM/PERT): Gantt charts are simple and great for tracking progress and communicating timelines, but network diagrams are essential for identifying the critical path and understanding which activities truly depend on which others — in practice, project managers often use both together.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Critical Path", definition: "The longest path through a project network, determining the minimum project duration." },
      { term: "Dummy Activity", definition: "A zero-duration activity used only to correctly represent a dependency in a network diagram." },
      { term: "Total Float", definition: "The amount a non-critical activity's timing can slip without delaying the overall project." },
      { term: "PERT Expected Time", definition: "te = (Optimistic + 4×Most Likely + Pessimistic) ÷ 6." },
    ],
    examQuestions: [
      "Explain the rules for drawing a project network diagram. (Medium)",
      "Differentiate between CPM and PERT. (Medium)",
      "Calculate the critical path and project duration from given activity data. (Numerical, Long)",
      "Explain the PERT expected time formula with a numerical example. (Numerical, Medium)",
      "Explain the Gantt chart and compare it with network-based techniques (CPM/PERT). (Medium)",
    ],
  },
];
