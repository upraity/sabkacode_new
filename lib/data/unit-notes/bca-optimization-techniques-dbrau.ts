import { UnitNote } from "@/types";

export const BcaOptimizationTechniquesDbrauUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Basics of Operations Research and Linear Programming",
    hours: 8,
    headings: [
      {
        id: "or-basics",
        title: "1. Basics of Operations Research",
        icon: "BookOpen",
        blocks: [
          { kind: "paragraph", text: "Operations Research (OR) is a systematic quantitative approach to decision making. It uses mathematical models, data and analytical techniques to study a decision problem and identify a feasible solution that optimizes a stated objective subject to restrictions. In this syllabus, the main application areas are linear programming, transportation, assignment, sequencing and game theory." },
          { kind: "diagram", diagramId: "bca-or-decision-model", caption: "General Operations Research decision process: problem, model, solution, evaluation and implementation." },
          { kind: "table", headers: ["Stage", "Meaning"], rows: [
            ["Problem definition", "Clearly identify the decision problem, objective and restrictions."],
            ["Model formulation", "Represent the real problem using variables, objective and constraints."],
            ["Solution", "Apply an appropriate OR technique to obtain a mathematical solution."],
            ["Evaluation", "Check feasibility and whether the solution is suitable for the stated problem."],
            ["Implementation", "Translate the selected solution into an operational decision."]
          ]}
        ]
      },
      {
        id: "characteristics-or",
        title: "2. Characteristics of Operations Research",
        icon: "ListChecks",
        blocks: [
          { kind: "paragraph", text: "Operations Research is characterized by a quantitative and model-based approach to decision making. It normally considers an objective, available resources, restrictions and alternative courses of action. OR techniques help a decision maker compare alternatives systematically rather than relying only on intuition." },
          { kind: "table", headers: ["Characteristic", "Explanation"], rows: [
            ["System approach", "The problem is studied as part of an overall system rather than as an isolated activity."],
            ["Quantitative analysis", "Numerical data and mathematical relationships are used."],
            ["Model based", "A mathematical or logical model represents important aspects of the real system."],
            ["Optimization orientation", "The method seeks an appropriate optimum or best feasible solution under the model."],
            ["Decision support", "Results assist managers or decision makers in selecting among alternatives."],
            ["Interdisciplinary nature", "OR may combine mathematics, statistics, computing and domain knowledge."]
          ]}
        ]
      },
      {
        id: "necessity-industry",
        title: "3. Necessity of OR in Industry and Decision Making",
        icon: "Factory",
        blocks: [
          { kind: "paragraph", text: "Industrial organizations frequently have limited resources and competing objectives. Operations Research provides methods for allocating scarce resources, planning production, transportation, assignment and scheduling activities. The result is a structured basis for decision making." },
          { kind: "callout", tone: "example", title: "Example", text: "A factory has limited machine hours and raw material. It produces two products with different profits and resource requirements. Linear programming can determine how much of each product should be produced under the stated constraints." },
          { kind: "table", headers: ["Area", "Typical OR question"], rows: [
            ["Production", "How should scarce machine hours be allocated?"],
            ["Transportation", "How can supply be sent to demand points under the model's cost structure?"],
            ["Assignment", "Which worker or machine should be assigned to which job?"],
            ["Scheduling", "In what sequence should jobs be processed?"],
            ["Decision making", "Which feasible alternative optimizes the stated objective?"]
          ]}
        ]
      },
      {
        id: "linear-programming-definition",
        title: "4. Linear Programming: Definition and Basic Structure",
        icon: "FunctionSquare",
        blocks: [
          { kind: "paragraph", text: "Linear Programming (LP) is an optimization technique in which the objective function and constraints are linear expressions of decision variables. A typical LP model contains decision variables, an objective function, constraints and non-negativity restrictions." },
          { kind: "formula", title: "General LP structure", text: "Maximize or Minimize  Z = c₁x₁ + c₂x₂ + … + cₙxₙ, subject to linear constraints and xᵢ ≥ 0." },
          { kind: "table", headers: ["Component", "Meaning"], rows: [
            ["Decision variables", "Unknown quantities to be determined."],
            ["Objective function", "Linear expression to maximize or minimize."],
            ["Constraints", "Linear restrictions on available resources or requirements."],
            ["Non-negativity", "Decision variables are usually restricted to zero or positive values."],
            ["Parameters", "Known coefficients such as profit, cost, resource consumption or availability."]
          ]}
        ]
      },
      {
        id: "lp-assumptions",
        title: "5. Important Assumptions of Linear Programming",
        icon: "Scale",
        blocks: [
          { kind: "paragraph", text: "The mathematical LP model is based on assumptions that make the relationships linear and the solution meaningful within the model. Common assumptions include proportionality, additivity, divisibility, certainty of coefficients and non-negativity where applicable." },
          { kind: "table", headers: ["Assumption", "Meaning"], rows: [
            ["Proportionality", "Contribution of each variable changes proportionally with its value."],
            ["Additivity", "Total contribution is the sum of individual contributions."],
            ["Divisibility", "Decision variables may take fractional values when the model permits them."],
            ["Certainty", "Model coefficients are treated as known for the stated problem."],
            ["Non-negativity", "Quantities such as production levels are generally not negative."]
          ]}
        ]
      },
      {
        id: "graphical-solution",
        title: "6. Graphical Solution of a Two-Variable LPP",
        icon: "ChartNoAxesCombined",
        blocks: [
          { kind: "paragraph", text: "The graphical method solves a linear programming problem containing two decision variables by representing each constraint as a line on a coordinate plane. The common region satisfying all constraints is the feasible region. For a linear objective function, an optimum occurs at an extreme point of the feasible region when an optimum exists." },
          { kind: "diagram", diagramId: "bca-lp-feasible-region", caption: "Conceptual two-variable graphical LP: constraints form a feasible region and candidate corner points." },
          { kind: "table", headers: ["Step", "Procedure"], rows: [
            ["1", "Define x and y as decision variables."],
            ["2", "Formulate the objective function."],
            ["3", "Write all constraints and non-negativity restrictions."],
            ["4", "Convert each boundary constraint into an equation for plotting."],
            ["5", "Plot the constraint lines and identify the feasible region."],
            ["6", "Find the corner/extreme points of the feasible region."],
            ["7", "Evaluate the objective function at the relevant corner points."],
            ["8", "Select the point giving the required maximum or minimum objective value."]
          ]},
          { kind: "callout", tone: "example", title: "Worked example", text: "Maximize Z = 3x + 2y subject to x + y ≤ 4, x ≤ 2, y ≤ 3, x ≥ 0 and y ≥ 0. The feasible corner points include (0,0), (2,0), (2,2), (1,3) and (0,3). Evaluating Z gives 0, 6, 10, 9 and 6 respectively. Therefore, for this model the maximum value is Z = 10 at x = 2, y = 2." },
          { kind: "callout", tone: "info", title: "Exam point", text: "Always check the objective value at the feasible corner points rather than choosing a point only from the graph visually." }
        ]
      },
      {
        id: "canonical-standard-form",
        title: "7. Canonical and Standard Terms of a Linear Programming Problem",
        icon: "FileText",
        blocks: [
          { kind: "paragraph", text: "Linear programming problems are often rewritten into a standard mathematical form before applying algebraic solution methods. The exact convention for the terms 'standard form' and 'canonical form' can vary by textbook, so in an exam answer the form used by the prescribed class notes or textbook should be stated clearly. A common maximization convention uses ≤ constraints with non-negative variables; equality can be introduced with slack or surplus/artificial variables when required by the solution method." },
          { kind: "table", headers: ["Term", "Purpose"], rows: [
            ["≤ constraint", "Represents an upper limit in a common maximization formulation."],
            ["Slack variable", "Added to a ≤ constraint to convert it into equality."],
            ["Surplus variable", "Subtracted from a ≥ constraint to obtain equality."],
            ["Artificial variable", "Introduced temporarily in methods such as Big-M or two-phase simplex when a starting basic feasible solution is otherwise unavailable."]
          ]},
          { kind: "callout", tone: "example", title: "Conversion example", text: "For x + y ≤ 5, introduce slack s ≥ 0: x + y + s = 5. For x + y ≥ 5, subtract surplus s ≥ 0: x + y − s = 5; an artificial variable may then be required by the selected simplex procedure." }
        ]
      }
    ],
    keyTerms: [
      { term: "Operations Research", definition: "Quantitative and model-based approach to supporting decisions and optimizing systems." },
      { term: "Linear Programming", definition: "Optimization method with a linear objective function and linear constraints." },
      { term: "Decision Variable", definition: "Unknown quantity whose value is determined by the optimization model." },
      { term: "Objective Function", definition: "Function representing the quantity to maximize or minimize." },
      { term: "Constraint", definition: "Mathematical restriction on decision variables." },
      { term: "Feasible Region", definition: "Set of points satisfying all constraints and required restrictions." },
      { term: "Slack Variable", definition: "Variable added to a less-than-or-equal constraint to obtain equality." },
      { term: "Surplus Variable", definition: "Variable subtracted from a greater-than-or-equal constraint to obtain equality." },
      { term: "Artificial Variable", definition: "Temporary variable used to construct a starting basis in certain simplex procedures." }
    ],
    examQuestions: [
      "Define Operations Research and explain its characteristics and necessity in industry. (Long)",
      "Define Linear Programming and explain its components. (Long)",
      "Explain the assumptions of Linear Programming. (Medium)",
      "Solve a two-variable LPP by the graphical method. (Long)",
      "Explain feasible region and corner-point evaluation. (Medium)",
      "Explain canonical and standard forms of an LPP. (Long)",
      "Differentiate slack, surplus and artificial variables. (Medium)"
    ]
  },
  {
    unitNumber: 2,
    title: "Algebraic Solution: Simplex, Big-M and Two-Phase Methods",
    hours: 8,
    headings: [
      {
        id: "simplex-introduction",
        title: "1. Simplex Method: Introduction",
        icon: "Table2",
        blocks: [
          { kind: "paragraph", text: "The simplex method is an algebraic procedure for solving linear programming problems. It moves from one basic feasible solution to another in a systematic manner while improving the objective value until an optimality condition is reached, when the problem has an optimum." },
          { kind: "diagram", diagramId: "bca-simplex-tableau-flow", caption: "Simplex procedure: formulate, construct tableau, select entering/leaving variables, pivot and test optimality." },
          { kind: "table", headers: ["Term", "Meaning"], rows: [
            ["Basic variable", "Variable included in the current basis."],
            ["Non-basic variable", "Variable currently assigned zero in a basic solution."],
            ["Pivot element", "Element used to perform the pivot operation."],
            ["Entering variable", "Variable selected to enter the basis to improve the objective."],
            ["Leaving variable", "Basic variable removed from the basis after the ratio test."]
          ]}
        ]
      },
      {
        id: "simplex-steps",
        title: "2. Simplex Method: Step-by-Step Procedure",
        icon: "ListOrdered",
        blocks: [
          { kind: "paragraph", text: "For a standard maximization problem with appropriate ≤ constraints and non-negative variables, a common simplex procedure begins with a slack-variable basis. The tableau is then updated through pivot operations until the optimality condition is satisfied." },
          { kind: "table", headers: ["Step", "Action"], rows: [
            ["1", "Convert the LPP into a suitable equality form."],
            ["2", "Construct the initial simplex tableau."],
            ["3", "Identify the entering variable using the chosen objective-row convention."],
            ["4", "Apply the positive ratio test to identify the leaving variable."],
            ["5", "Pivot to make the selected element a unit-column basis element."],
            ["6", "Repeat the process with the new tableau."],
            ["7", "Stop when the objective row satisfies the optimality condition for the chosen convention."],
            ["8", "Read the decision-variable values and objective value from the final tableau."]
          ]},
          { kind: "callout", tone: "example", title: "Small illustration", text: "If the current tableau indicates that increasing x₁ improves a maximization objective, x₁ can be selected as the entering variable. The ratio test identifies the limiting basic variable, and the pivot operation creates the next basic feasible solution." }
        ]
      },
      {
        id: "big-m-method",
        title: "3. Big-M (Method of Penalties)",
        icon: "Sigma",
        blocks: [
          { kind: "paragraph", text: "The Big-M method, also called the method of penalties, handles LPPs in which the initial constraints do not directly provide a convenient basic feasible solution. Artificial variables are introduced where necessary. A large penalty M is assigned to artificial variables in the objective function so that the optimization procedure drives them out of the final feasible solution whenever the original problem has a valid solution." },
          { kind: "formula", title: "Penalty idea", text: "For a maximization formulation, artificial variables are commonly given a large negative penalty in the objective function; for a minimization formulation, the sign is adjusted according to the chosen tableau convention." },
          { kind: "table", headers: ["Situation", "Typical adjustment"], rows: [
            ["≤ constraint", "Add slack variable."],
            ["≥ constraint", "Subtract surplus variable and add artificial variable when required."],
            ["= constraint", "Add artificial variable when a starting basis is needed."],
            ["Artificial variable", "Assign a large M penalty so it does not remain in a valid final solution."]
          ]},
          { kind: "callout", tone: "info", title: "Exam caution", text: "Do not treat M as an ordinary numerical constant. It represents a sufficiently large penalty, and the exact tableau signs depend on whether the problem is a maximization or minimization and on the objective-row convention used." }
        ]
      },
      {
        id: "big-m-procedure",
        title: "4. Big-M Method: Procedure",
        icon: "Workflow",
        blocks: [
          { kind: "paragraph", text: "The Big-M procedure first converts constraints into equations, introduces slack/surplus/artificial variables as required, modifies the objective function with M penalties, and then applies simplex iterations. The final solution must be checked for artificial variables." },
          { kind: "table", headers: ["Step", "Procedure"], rows: [
            ["1", "Write the LPP and identify all constraint types."],
            ["2", "Convert constraints to equality form."],
            ["3", "Add artificial variables where a starting basis requires them."],
            ["4", "Add the appropriate M penalty terms to the objective function."],
            ["5", "Construct and adjust the initial simplex tableau."],
            ["6", "Perform simplex iterations."],
            ["7", "Continue until the optimality condition is met."],
            ["8", "Check artificial variables. A positive artificial-variable value in the final solution indicates that the original constraints are not represented by a feasible original solution."]
          ]}
        ]
      },
      {
        id: "two-phase-method",
        title: "5. Two-Phase Simplex Method",
        icon: "GitBranch",
        blocks: [
          { kind: "paragraph", text: "The two-phase simplex method separates feasibility from optimization. Phase I constructs an auxiliary objective involving artificial variables and attempts to obtain a feasible basis with artificial variables removed from the solution. Phase II uses the original objective function and performs simplex iterations from the feasible basis obtained in Phase I." },
          { kind: "diagram", diagramId: "bca-two-phase-method", caption: "Two-phase simplex: Phase I establishes feasibility, Phase II optimizes the original objective." },
          { kind: "table", headers: ["Phase", "Purpose"], rows: [
            ["Phase I", "Minimize the sum of artificial variables or use the corresponding auxiliary objective to obtain a feasible basis."],
            ["Phase II", "Discard the Phase-I auxiliary objective and optimize the original LPP objective from the feasible basis."]
          ]},
          { kind: "callout", tone: "example", title: "Conceptual example", text: "If a constraint contains ≥ and therefore requires an artificial variable, Phase I works to eliminate the artificial contribution and find a feasible solution to the original constraints. Only after feasibility is established does Phase II optimize profit or cost." }
        ]
      },
      {
        id: "simplex-comparison",
        title: "6. Simplex, Big-M and Two-Phase: Comparison",
        icon: "GitCompare",
        blocks: [
          { kind: "table", headers: ["Method", "Main idea", "Artificial variables"], rows: [
            ["Simplex", "Iteratively improves a basic feasible solution.", "Not normally required when an obvious initial basis exists."],
            ["Big-M", "Uses large objective penalties to discourage artificial variables.", "Introduced when needed for a starting basis."],
            ["Two-Phase", "Uses a separate feasibility phase before optimizing the original objective.", "Used in Phase I when needed."]
          ]},
          { kind: "callout", tone: "info", title: "Exam approach", text: "For numerical questions, write the model first, state the form used, show the initial tableau clearly, identify entering and leaving variables, show each pivot, and finally state the optimal variable values and objective value." }
        ]
      }
    ],
    keyTerms: [
      { term: "Simplex Method", definition: "Iterative algebraic method for solving linear programming problems through basic feasible solutions." },
      { term: "Basic Feasible Solution", definition: "Feasible solution associated with a selected basis." },
      { term: "Pivot", definition: "Row-operation step that changes the current basis in a simplex tableau." },
      { term: "Ratio Test", definition: "Test commonly used to select the leaving variable in a simplex iteration." },
      { term: "Big-M Method", definition: "Simplex-based method using large penalties for artificial variables." },
      { term: "Penalty", definition: "Objective-function term used to discourage artificial variables from remaining in the final solution." },
      { term: "Two-Phase Method", definition: "Simplex procedure that separates feasibility determination from optimization." },
      { term: "Phase I", definition: "First stage of the two-phase method used to obtain a feasible basis." },
      { term: "Phase II", definition: "Second stage that optimizes the original objective function." }
    ],
    examQuestions: [
      "Explain the simplex method and its complete procedure. (Long)",
      "Solve an LPP using the simplex method. (Long)",
      "Explain the Big-M method of penalties with steps. (Long)",
      "Explain the two-phase simplex method. (Long)",
      "Differentiate Big-M and two-phase methods. (Medium)",
      "Explain entering variable, leaving variable, pivot element and ratio test. (Medium)",
      "What does a positive artificial variable in the final solution indicate? (Short)"
    ]
  },
  {
    unitNumber: 3,
    title: "Transportation and Assignment Models",
    hours: 8,
    headings: [
      {
        id: "transportation-definition",
        title: "1. Transportation Model: Definition and Formulation",
        icon: "Truck",
        blocks: [
          { kind: "paragraph", text: "A transportation model is a special linear programming model concerned with shipping a homogeneous product from a set of sources to a set of destinations while satisfying supply and demand conditions and optimizing a transportation objective, commonly total cost." },
          { kind: "diagram", diagramId: "bca-transportation-model", caption: "Transportation model with sources, destinations, unit costs, supply and demand." },
          { kind: "formula", title: "Transportation objective", text: "Minimize Z = Σᵢ Σⱼ cᵢⱼ xᵢⱼ, subject to source-supply and destination-demand constraints and xᵢⱼ ≥ 0." },
          { kind: "table", headers: ["Term", "Meaning"], rows: [
            ["Source", "Origin from which units are supplied."],
            ["Destination", "Location receiving units."],
            ["Supply", "Available quantity at a source."],
            ["Demand", "Required quantity at a destination."],
            ["Unit transportation cost", "Cost of sending one unit from a source to a destination."],
            ["Allocation xᵢⱼ", "Quantity transported from source i to destination j."]
          ]}
        ]
      },
      {
        id: "transportation-balance",
        title: "2. Balanced and Unbalanced Transportation Problems",
        icon: "Scale",
        blocks: [
          { kind: "paragraph", text: "A transportation problem is balanced when total supply equals total demand. If total supply and total demand are unequal, it is unbalanced and is commonly balanced by introducing a dummy source or dummy destination with appropriate zero or specified balancing costs according to the problem formulation." },
          { kind: "table", headers: ["Condition", "Treatment"], rows: [
            ["Total supply = total demand", "Balanced transportation problem."],
            ["Total supply > total demand", "A dummy destination can be introduced for the excess supply."],
            ["Total demand > total supply", "A dummy source can be introduced for the shortage in supply."]
          ]}
        ]
      },
      {
        id: "northwest-corner",
        title: "3. North-West Corner Rule",
        icon: "CornerDownLeft",
        blocks: [
          { kind: "paragraph", text: "The North-West Corner Rule provides an initial basic feasible solution by starting at the upper-left, or north-west, cell of the transportation table. Allocate as much as possible to that cell, adjust supply and demand, cross out a satisfied row or column and continue to the next available cell." },
          { kind: "table", headers: ["Step", "Action"], rows: [
            ["1", "Start with the north-west cell."],
            ["2", "Allocate the minimum of available supply and demand."],
            ["3", "Reduce the corresponding supply and demand."],
            ["4", "Cross out the row or column whose remaining quantity becomes zero."],
            ["5", "Move to the next available cell and repeat."],
            ["6", "Continue until all supply and demand are allocated."]
          ]},
          { kind: "callout", tone: "example", title: "Mini example", text: "If a cell has supply 30 and demand 20, allocate 20. The destination demand becomes zero, the source has 10 units remaining, and the next allocation moves to the next available destination in that source row." }
        ]
      },
      {
        id: "row-column-minima",
        title: "4. Row Minima and Column Minima Methods",
        icon: "TableProperties",
        blocks: [
          { kind: "paragraph", text: "Row minima and column minima methods generate initial feasible transportation solutions by considering the smallest transportation cost in each row or column. Allocation is made as much as possible in the selected low-cost cell, after which supply and demand are adjusted and the process continues." },
          { kind: "table", headers: ["Method", "Starting logic"], rows: [
            ["Row minima", "Process rows and allocate to a minimum-cost cell within the current row."],
            ["Column minima", "Process columns and allocate to a minimum-cost cell within the current column."]
          ]},
          { kind: "callout", tone: "info", title: "Exam point", text: "These methods are techniques for obtaining an initial basic feasible solution. They do not by themselves prove that the resulting transportation cost is globally optimal." }
        ]
      },
      {
        id: "vogels-approximation",
        title: "5. Vogel's Approximation Method",
        icon: "TrendingDown",
        blocks: [
          { kind: "paragraph", text: "Vogel's Approximation Method (VAM) is a transportation heuristic for obtaining a good initial basic feasible solution. It uses penalties based on the difference between the two smallest costs in a row or column. The row or column with the largest penalty is selected, and allocation is made to a minimum-cost cell in that row or column." },
          { kind: "diagram", diagramId: "bca-vogel-penalty", caption: "Conceptual VAM penalty: difference between the two smallest available costs in a row or column." },
          { kind: "table", headers: ["Step", "Action"], rows: [
            ["1", "For each active row and column, find the two smallest costs."],
            ["2", "Calculate penalty = second-smallest cost − smallest cost."],
            ["3", "Select the row or column with the largest penalty."],
            ["4", "Allocate as much as possible to its minimum-cost cell."],
            ["5", "Adjust supply/demand and recalculate penalties for the reduced table."],
            ["6", "Repeat until a complete basic feasible solution is obtained."]
          ]}
        ]
      },
      {
        id: "assignment-model",
        title: "6. Assignment Model: Definition and Formulation",
        icon: "UserRoundCheck",
        blocks: [
          { kind: "paragraph", text: "The assignment model is a special form of linear programming in which one set of agents or resources is assigned to another set of jobs or tasks, normally on a one-to-one basis. The objective may be to minimize cost/time or maximize effectiveness/profit according to the problem statement." },
          { kind: "diagram", diagramId: "bca-assignment-model", caption: "One-to-one assignment model: agents/resources are matched with jobs/tasks." },
          { kind: "formula", title: "Assignment objective", text: "Minimize or maximize Z = Σᵢ Σⱼ cᵢⱼ xᵢⱼ, with each agent assigned to one job and each job receiving one agent in the standard square assignment model." },
          { kind: "table", headers: ["Element", "Meaning"], rows: [
            ["Agent/resource", "Person, machine or other entity being assigned."],
            ["Job/task", "Activity to which an agent/resource is assigned."],
            ["Assignment variable", "xᵢⱼ indicates whether agent i is assigned to job j."],
            ["One-to-one restriction", "Each agent and each job receives one assignment in the standard model."]
          ]}
        ]
      },
      {
        id: "assignment-hungarian",
        title: "7. Solution of Assignment Model",
        icon: "Grid3X3",
        blocks: [
          { kind: "paragraph", text: "The standard assignment problem is commonly solved by the Hungarian method. The method transforms the cost matrix through row and column reductions and then uses zero positions to determine a feasible one-to-one assignment. If the available independent zeros do not provide a complete assignment, the matrix is adjusted and the process is repeated." },
          { kind: "table", headers: ["Stage", "Main operation"], rows: [
            ["Row reduction", "Subtract the smallest element of each row from every element in that row."],
            ["Column reduction", "Subtract the smallest element of each column from every element in that column."],
            ["Cover zeros", "Cover all zeros with a minimum number of horizontal and vertical lines."],
            ["Test assignment", "Check whether enough independent zeros exist for a complete assignment."],
            ["Adjust matrix", "If required, modify uncovered and covered elements and repeat."]
          ]},
          { kind: "callout", tone: "example", title: "Illustration", text: "For a 3 × 3 assignment table, after row and column reductions, choose independent zeros so that no two selected zeros lie in the same row or column. The selected zero positions represent the assignments." }
        ]
      },
      {
        id: "assignment-vs-transportation",
        title: "8. Assignment Model vs Transportation Model",
        icon: "GitCompare",
        blocks: [
          { kind: "table", headers: ["Basis", "Transportation", "Assignment"], rows: [
            ["Purpose", "Ship quantities from sources to destinations.", "Match agents/resources with jobs."],
            ["Allocation", "May assign multiple units to a route.", "Standard model uses one-to-one assignment."],
            ["Supply/demand", "General supply and demand quantities.", "Usually one unit for each agent and job."],
            ["Typical solution", "NW Corner, Row/Column Minima, VAM and optimality procedures.", "Hungarian method is a standard method."]
          ]}
        ]
      }
    ],
    keyTerms: [
      { term: "Transportation Model", definition: "Optimization model for allocating shipments from sources to destinations." },
      { term: "Balanced Problem", definition: "Transportation problem in which total supply equals total demand." },
      { term: "North-West Corner Rule", definition: "Initial-solution method that starts allocation at the upper-left cell of a transportation table." },
      { term: "Row Minima Method", definition: "Initial transportation allocation method based on minimum costs in rows." },
      { term: "Column Minima Method", definition: "Initial transportation allocation method based on minimum costs in columns." },
      { term: "Vogel's Approximation Method", definition: "Transportation heuristic using row and column cost penalties to construct an initial solution." },
      { term: "Assignment Model", definition: "One-to-one allocation model for assigning agents/resources to jobs/tasks." },
      { term: "Hungarian Method", definition: "Matrix-reduction method commonly used to solve assignment problems." },
      { term: "Dummy Row/Column", definition: "Artificial row or column added to balance an unbalanced transportation or assignment formulation when appropriate." }
    ],
    examQuestions: [
      "Define and formulate the transportation model. (Long)",
      "Explain the North-West Corner Rule with a numerical example. (Long)",
      "Explain Row Minima and Column Minima methods. (Medium)",
      "Explain Vogel's Approximation Method with steps. (Long)",
      "Differentiate balanced and unbalanced transportation problems. (Medium)",
      "Define the assignment model and explain its formulation. (Long)",
      "Explain the Hungarian method for solving an assignment problem. (Long)",
      "Compare transportation and assignment models. (Medium)"
    ]
  },
  {
    unitNumber: 4,
    title: "Sequencing Problems",
    hours: 8,
    headings: [
      {
        id: "sequencing-introduction",
        title: "1. Sequencing Problem: Introduction",
        icon: "ListOrdered",
        blocks: [
          { kind: "paragraph", text: "A sequencing problem determines the order in which jobs should be processed through machines so that a stated performance objective, commonly total elapsed time or idle time, is optimized under the assumptions of the model. The syllabus covers processing n jobs through 2 machines, n jobs through 3 machines and 2 jobs through m machines." },
          { kind: "diagram", diagramId: "bca-sequencing-general", caption: "General flow-shop sequencing: jobs pass through machines in an ordered processing route." },
          { kind: "table", headers: ["Term", "Meaning"], rows: [
            ["Job", "Unit of work requiring processing."],
            ["Machine", "Resource on which a job is processed."],
            ["Processing time", "Time required for a job to be processed on a particular machine."],
            ["Sequence", "Order in which jobs are processed."],
            ["Elapsed time", "Total time from start of the first operation to completion of the final operation."]
          ]}
        ]
      },
      {
        id: "n-jobs-2-machines",
        title: "2. Processing of n Jobs through 2 Machines",
        icon: "Workflow",
        blocks: [
          { kind: "paragraph", text: "For the classical n-jobs, 2-machines flow-shop problem, each job is processed first on Machine 1 and then on Machine 2. A standard sequencing rule is Johnson's rule. It selects the smallest processing time among the remaining jobs; if the minimum occurs on Machine 1, place that job as early as possible, and if it occurs on Machine 2, place it as late as possible." },
          { kind: "diagram", diagramId: "bca-johnson-two-machines", caption: "Johnson's rule for n jobs on two machines: minimum processing time determines front or rear placement." },
          { kind: "table", headers: ["Johnson rule step", "Action"], rows: [
            ["1", "Find the smallest processing time among all remaining jobs on both machines."],
            ["2", "If the minimum is on Machine 1, place the job in the earliest available position."],
            ["3", "If the minimum is on Machine 2, place the job in the latest available position."],
            ["4", "Remove the selected job and repeat until all jobs are sequenced."],
            ["5", "Prepare the machine completion-time table to calculate elapsed time and idle periods."]
          ]},
          { kind: "callout", tone: "example", title: "Illustration", text: "Suppose a remaining job has the smallest processing time on Machine 2. Under Johnson's rule, place that job in the last available position. If the smallest time instead occurs on Machine 1, place the corresponding job in the first available position." }
        ]
      },
      {
        id: "sequencing-two-machine-calculation",
        title: "3. Completion-Time Calculation for Two Machines",
        icon: "Clock3",
        blocks: [
          { kind: "paragraph", text: "After obtaining a sequence, calculate completion times job by job. On Machine 1, a job starts when the previous job on Machine 1 finishes. On Machine 2, a job can start only after the same job has finished on Machine 1 and Machine 2 has become available." },
          { kind: "formula", title: "Completion-time relationship", text: "For job j in the sequence: C₁j = C₁,previous + p₁j; C₂j = max(C₁j, C₂,previous) + p₂j." },
          { kind: "table", headers: ["Quantity", "Meaning"], rows: [
            ["p₁j", "Processing time of job j on Machine 1."],
            ["p₂j", "Processing time of job j on Machine 2."],
            ["C₁j", "Completion time of job j on Machine 1."],
            ["C₂j", "Completion time of job j on Machine 2."],
            ["max(C₁j, C₂,previous)", "Earliest possible start time of job j on Machine 2."]
          ]}
        ]
      },
      {
        id: "n-jobs-3-machines",
        title: "4. Processing of n Jobs through 3 Machines",
        icon: "Workflow",
        blocks: [
          { kind: "paragraph", text: "The n-jobs, 3-machines sequencing problem extends the flow-shop idea to three machines. A direct three-machine problem does not always reduce to the classical two-machine Johnson rule. Under the standard sufficient-condition transformation used in operations research, two fictitious machines can be formed using suitable combinations of the first and second machine times and the second and third machine times; the resulting problem can then be sequenced using the two-machine rule when the required condition holds." },
          { kind: "diagram", diagramId: "bca-sequencing-three-machines", caption: "Conceptual transformation of a three-machine sequencing problem to two fictitious machines under the applicable condition." },
          { kind: "callout", tone: "info", title: "Exam caution", text: "Do not apply the two-fictitious-machine transformation blindly. State the condition given in your prescribed method before using the reduction." }
        ]
      },
      {
        id: "two-jobs-m-machines",
        title: "5. Processing of 2 Jobs through m Machines",
        icon: "Rows3",
        blocks: [
          { kind: "paragraph", text: "When there are two jobs and multiple machines, the sequence is often determined by comparing the processing requirements of the two jobs across the machines. The objective is to decide which job should be processed first and then calculate the resulting elapsed time and idle periods according to the specified machine order." },
          { kind: "table", headers: ["Step", "Activity"], rows: [
            ["1", "List processing times of both jobs on all machines."],
            ["2", "Compare the relevant processing-time pattern according to the prescribed sequencing procedure."],
            ["3", "Select the job order."],
            ["4", "Construct the machine-wise completion-time table."],
            ["5", "Calculate total elapsed time and, where required, machine idle time."]
          ]},
          { kind: "callout", tone: "example", title: "Exam presentation", text: "Always show the processing-time table first, state the selected sequence, then show start/completion times machine by machine. This makes the numerical answer easy to verify." }
        ]
      }
    ],
    keyTerms: [
      { term: "Sequencing", definition: "Determining the order in which jobs are processed through machines." },
      { term: "Flow Shop", definition: "Production arrangement in which jobs follow the same ordered sequence of machines." },
      { term: "Processing Time", definition: "Time required to process a job on a particular machine." },
      { term: "Johnson's Rule", definition: "Classical sequencing rule for n jobs through two machines based on the smallest processing time." },
      { term: "Elapsed Time", definition: "Total time from the start of the first job to completion of the final job." },
      { term: "Machine Idle Time", definition: "Time during which a machine is available but not processing a job in the schedule." },
      { term: "Completion Time", definition: "Time at which a job finishes processing on a machine." }
    ],
    examQuestions: [
      "Define sequencing problem and explain its terminology. (Medium)",
      "Explain Johnson's rule for n jobs through two machines. (Long)",
      "Solve a sequencing problem for n jobs and 2 machines. (Long)",
      "Explain how completion times are calculated in a two-machine flow shop. (Medium)",
      "Explain the n-jobs, 3-machines problem and its standard transformation condition. (Long)",
      "Explain processing of two jobs through m machines. (Medium)",
      "Differentiate elapsed time and machine idle time. (Short)"
    ]
  },
  {
    unitNumber: 5,
    title: "Game Theory",
    hours: 8,
    headings: [
      {
        id: "game-theory-characteristics",
        title: "1. Game Theory: Characteristics",
        icon: "Users",
        blocks: [
          { kind: "paragraph", text: "Game theory studies decision situations in which the outcome for one decision maker depends on the actions selected by another decision maker. In the classical two-person zero-sum game considered in this syllabus, the gain of one player corresponds to the loss of the other. A payoff matrix represents the result associated with combinations of strategies." },
          { kind: "diagram", diagramId: "bca-game-payoff-matrix", caption: "Two-person zero-sum game represented by a payoff matrix." },
          { kind: "table", headers: ["Element", "Meaning"], rows: [
            ["Players", "Decision makers participating in the game."],
            ["Strategy", "A course of action available to a player."],
            ["Payoff", "Gain or loss associated with a pair of strategies."],
            ["Payoff matrix", "Table containing payoffs for strategy combinations."],
            ["Value of game", "Expected payoff under optimal strategy choices when a value is defined."]
          ]}
        ]
      },
      {
        id: "maximin-minimax",
        title: "2. Maxima, Minima and Maximin-Minimax Criteria",
        icon: "ArrowUpDown",
        blocks: [
          { kind: "paragraph", text: "For a payoff matrix in which payoffs are stated from the viewpoint of the maximizing player, the maximin criterion considers the minimum payoff in each row and selects the largest of these row minima. The minimax criterion considers the maximum payoff in each column and selects the smallest of these column maxima. Equality of the maximin and minimax values indicates a saddle point in the standard two-person zero-sum setting." },
          { kind: "table", headers: ["Criterion", "Procedure"], rows: [
            ["Row minimum", "Find the smallest payoff in each row."],
            ["Maximin", "Select the largest among the row minima."],
            ["Column maximum", "Find the largest payoff in each column."],
            ["Minimax", "Select the smallest among the column maxima."]
          ]},
          { kind: "callout", tone: "example", title: "Mini example", text: "For a payoff matrix whose row minima are 2, 3 and 1, the maximin value is 3. If the column maxima are 4, 3 and 5, the minimax value is 3. Because both values are 3, the matrix has a saddle point at the corresponding row-column intersection." }
        ]
      },
      {
        id: "saddle-point",
        title: "3. Saddle Point and Value of the Game",
        icon: "Target",
        blocks: [
          { kind: "paragraph", text: "A saddle point is a payoff entry that is the minimum of its row and the maximum of its column, under the usual payoff convention. Equivalently, the maximin value equals the minimax value. When a saddle point exists, optimal pure strategies can be identified directly from that row and column, and the saddle-point payoff is the value of the game." },
          { kind: "diagram", diagramId: "bca-game-saddle-point", caption: "Saddle point concept: a cell simultaneously satisfies the row-minimum and column-maximum conditions." },
          { kind: "callout", tone: "info", title: "Exam test", text: "Compute row minima and column maxima first. If maximin = minimax, a saddle point exists under the standard two-person zero-sum payoff convention." }
        ]
      },
      {
        id: "dominance-property",
        title: "4. Dominance Property",
        icon: "Filter",
        blocks: [
          { kind: "paragraph", text: "The dominance property reduces a game matrix by eliminating a strategy that is never better than another available strategy for the relevant player. If one row is dominated by another row for the maximizing player, the dominated row can be removed. For the minimizing player, a column can be removed when another column provides an equal or better outcome according to the minimizer's objective." },
          { kind: "table", headers: ["Player", "Typical dominance idea"], rows: [
            ["Maximizing player", "A row can be eliminated when another row gives at least as large a payoff against every opposing column."],
            ["Minimizing player", "A column can be eliminated when another column gives at most as large a payoff against every opposing row."]
          ]},
          { kind: "callout", tone: "example", title: "Example", text: "If Row A gives payoffs [2, 3, 4] and Row B gives [3, 4, 5] to the maximizing player, Row A is dominated by Row B because Row B is at least as good in every column." }
        ]
      },
      {
        id: "algebraic-2x2",
        title: "5. Algebraic Method for Solving a 2 × 2 Game",
        icon: "Calculator",
        blocks: [
          { kind: "paragraph", text: "When a reduced 2 × 2 game has no saddle point, mixed strategies can be obtained algebraically. Let the payoff matrix to the row player be [[a, b], [c, d]]. If the game is non-degenerate under the standard formula conditions, the probabilities assigned to the two row strategies and the two column strategies can be derived by making the opponent indifferent between their pure strategies." },
          { kind: "formula", title: "Standard 2 × 2 probability formulas", text: "Let D = a − b − c + d. Row player's first-strategy probability p = (d − c)/D and second-strategy probability = (a − b)/D. Column player's first-strategy probability q = (d − b)/D and second-strategy probability = (a − c)/D. Game value V = (ad − bc)/D, when D ≠ 0 and the resulting probabilities are valid." },
          { kind: "callout", tone: "info", title: "Exam caution", text: "These formulas assume the payoff matrix is interpreted from the row player's perspective and that the resulting probabilities lie between 0 and 1. If the matrix has a saddle point or the formula gives an invalid probability, use the appropriate pure-strategy or reduced-game analysis instead." }
        ]
      },
      {
        id: "graphical-2x2-games",
        title: "6. Graphical Method for Solving 2 × 2 Games",
        icon: "ChartLine",
        blocks: [
          { kind: "paragraph", text: "The graphical method represents the expected payoff against one player's mixed strategy as straight lines. For a 2 × 2 game, the row player can vary the probability assigned to one row strategy, and the expected payoff corresponding to each column strategy is plotted as a line. The maximizing player chooses the point that maximizes the lower envelope, subject to the probability interval 0 to 1." },
          { kind: "diagram", diagramId: "bca-game-graphical-method", caption: "Conceptual graphical solution of a 2 × 2 zero-sum game using expected-payoff lines." },
          { kind: "table", headers: ["Step", "Procedure"], rows: [
            ["1", "Let p be the probability of selecting the first row strategy."],
            ["2", "Write expected payoff equations against each column strategy."],
            ["3", "Plot the payoff lines for 0 ≤ p ≤ 1."],
            ["4", "Identify their intersection or the relevant envelope point."],
            ["5", "Read the optimal probability and game value from the graph."]
          ]}
        ]
      },
      {
        id: "game-theory-exam-method",
        title: "7. Exam-Ready Procedure for a Game Problem",
        icon: "ClipboardCheck",
        blocks: [
          { kind: "paragraph", text: "For a numerical game-theory question, first identify the payoff convention and write the matrix clearly. Then calculate row minima and column maxima. Check for a saddle point. If none exists, apply dominance to reduce the matrix where possible. For a remaining 2 × 2 game, use the algebraic or graphical method required by the question and state the strategies and value of the game." },
          { kind: "table", headers: ["Order", "What to write"], rows: [
            ["1", "Payoff matrix and player objectives."],
            ["2", "Row minima and maximin."],
            ["3", "Column maxima and minimax."],
            ["4", "Saddle-point conclusion."],
            ["5", "Dominance reduction if needed."],
            ["6", "Mixed-strategy solution if required."],
            ["7", "Value of the game and final strategy statement."]
          ]}
        ]
      }
    ],
    keyTerms: [
      { term: "Game Theory", definition: "Study of strategic decision situations in which outcomes depend on the actions of multiple decision makers." },
      { term: "Player", definition: "Decision maker participating in a game." },
      { term: "Strategy", definition: "Course of action available to a player." },
      { term: "Payoff", definition: "Gain or loss associated with a combination of strategies." },
      { term: "Maximin", definition: "Largest of the minimum payoffs in the rows for the maximizing player." },
      { term: "Minimax", definition: "Smallest of the maximum payoffs in the columns for the minimizing player." },
      { term: "Saddle Point", definition: "Payoff entry that is a row minimum and a column maximum under the standard convention." },
      { term: "Dominance", definition: "Property allowing a strategy that is never better than another strategy to be eliminated." },
      { term: "Mixed Strategy", definition: "Probabilistic selection among two or more pure strategies." },
      { term: "Value of Game", definition: "Expected payoff associated with optimal strategies in the modeled game." }
    ],
    examQuestions: [
      "Explain game theory and its characteristics. (Long)",
      "Explain maxima, minima, maximin and minimax criteria. (Medium)",
      "What is a saddle point? Explain how to identify it. (Long)",
      "Explain the dominance property with an example. (Medium)",
      "Solve a 2 × 2 game using the algebraic method. (Long)",
      "Explain the graphical method for solving a 2 × 2 game. (Long)",
      "Explain the complete procedure for solving a two-person zero-sum game. (Long)"
    ]
  }
];
