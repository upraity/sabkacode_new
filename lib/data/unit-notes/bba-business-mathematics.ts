import { UnitNote } from "@/types";

// Detailed, in-app notes for Business Mathematics (BBA102) — AKTU BBA Sem 1.
// Numerical-heavy — every technique includes a worked example.
export const businessMathematicsUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Concepts of Algebra",
    hours: 6,
    headings: [
      {
        id: "indices-functions",
        title: "1. Law of Indices and Concept of Functions",
        icon: "FunctionSquare",
        blocks: [
          {
            kind: "table",
            headers: ["Law of Indices", "Rule"],
            rows: [
              ["Product Rule", "aᵐ × aⁿ = aᵐ⁺ⁿ"],
              ["Quotient Rule", "aᵐ ÷ aⁿ = aᵐ⁻ⁿ"],
              ["Power Rule", "(aᵐ)ⁿ = aᵐⁿ"],
              ["Negative Index", "a⁻ⁿ = 1 ÷ aⁿ"],
            ],
          },
          {
            kind: "paragraph",
            text: "A Function is a rule that assigns exactly one output value to each input value, written as y = f(x). Types include linear functions (y = mx + c, a straight line), quadratic functions (y = ax² + bx + c, a parabola), and exponential functions (used for compound growth, recall Unit 4).",
          },
        ],
      },
      {
        id: "linear-quadratic",
        title: "2. Linear and Quadratic Equations",
        icon: "Sigma",
        blocks: [
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Quadratic Equation",
            text: "Solve x² − 5x + 6 = 0. Using factorisation: x² − 5x + 6 = (x − 2)(x − 3) = 0. So x = 2 or x = 3. (Check: 2² − 5(2) + 6 = 4 − 10 + 6 = 0 ✓; 3² − 5(3) + 6 = 9 − 15 + 6 = 0 ✓.)",
          },
          {
            kind: "paragraph",
            text: "Business application: quadratic equations commonly arise in profit-maximisation problems, where profit is a quadratic function of quantity, and the equation is solved to find the break-even quantities (recall Break-Even Analysis, Cost & Management Accounting).",
          },
        ],
      },
      {
        id: "progressions",
        title: "3. Arithmetic, Geometric and Harmonic Progressions",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "table",
            headers: ["Progression", "Pattern", "nth Term", "Sum of n Terms"],
            rows: [
              ["Arithmetic Progression (AP)", "Constant difference between terms (e.g., 2, 5, 8, 11...)", "aₙ = a + (n−1)d", "Sₙ = n/2 [2a + (n−1)d]"],
              ["Geometric Progression (GP)", "Constant ratio between terms (e.g., 2, 6, 18, 54...)", "aₙ = a·rⁿ⁻¹", "Sₙ = a(rⁿ−1)/(r−1)"],
              ["Harmonic Progression (HP)", "Reciprocals of the terms form an AP (e.g., 1, 1/2, 1/3, 1/4...)", "Find via the corresponding AP of reciprocals", "—"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — AP",
            text: "A company's sales grow by a fixed ₹5,000 each month, starting at ₹50,000 in month 1. This is an AP with a = 50,000, d = 5,000. Sales in month 6: a₆ = 50,000 + (6−1)(5,000) = 50,000 + 25,000 = ₹75,000. Total sales over 6 months: S₆ = 6/2 × [2(50,000) + (6−1)(5,000)] = 3 × [1,00,000 + 25,000] = 3 × 1,25,000 = ₹3,75,000.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Function", definition: "A rule assigning exactly one output value to each input value." },
      { term: "Arithmetic Progression", definition: "A sequence with a constant difference between consecutive terms." },
      { term: "Geometric Progression", definition: "A sequence with a constant ratio between consecutive terms." },
    ],
    examQuestions: [
      "State and apply the laws of indices with examples. (Short)",
      "Solve a given quadratic equation by factorisation. (Numerical, Medium)",
      "Find the nth term and sum of n terms of a given AP. (Numerical, Medium)",
      "Find the nth term and sum of n terms of a given GP. (Numerical, Medium)",
      "Explain harmonic progression with an example. (Short)",
    ],
  },
  {
    unitNumber: 2,
    title: "Basics of Set Theory",
    hours: 9,
    headings: [
      {
        id: "set-concepts",
        title: "1. Fundamental Concepts, Representation and Operations",
        icon: "CircleDot",
        blocks: [
          {
            kind: "paragraph",
            text: "A Set is a well-defined collection of distinct objects, called elements. Sets are represented either in Roster form (listing all elements, e.g., A = {1, 2, 3, 4}) or Set-Builder form (a rule describing the elements, e.g., A = {x : x is a natural number less than 5}).",
          },
          {
            kind: "table",
            headers: ["Set Operation", "Meaning", "Notation"],
            rows: [
              ["Union", "All elements in A OR B (or both)", "A ∪ B"],
              ["Intersection", "Elements common to BOTH A and B", "A ∩ B"],
              ["Difference", "Elements in A but NOT in B", "A − B"],
              ["Complement", "Elements in the Universal Set U but NOT in A", "A′"],
            ],
          },
          { kind: "diagram", diagramId: "venn-diagram-sets", caption: "Fig 2.1 — Venn diagram showing two overlapping sets" },
        ],
      },
      {
        id: "de-morgans-laws",
        title: "2. De Morgan's Laws",
        icon: "Equal",
        blocks: [
          {
            kind: "table",
            headers: ["Law", "Statement"],
            rows: [
              ["First Law", "(A ∪ B)′ = A′ ∩ B′ — the complement of a union equals the intersection of the complements"],
              ["Second Law", "(A ∩ B)′ = A′ ∪ B′ — the complement of an intersection equals the union of the complements"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Set operations",
            text: "Let U = {1,2,3,4,5,6,7,8,9,10}, A = {1,2,3,4,5}, B = {4,5,6,7,8}. A ∪ B = {1,2,3,4,5,6,7,8}. A ∩ B = {4,5}. A − B = {1,2,3}. A′ = {6,7,8,9,10}. Verify De Morgan's first law: (A ∪ B)′ = {9,10}. A′ ∩ B′: A′ = {6,7,8,9,10}, B′ = {1,2,3,9,10}, so A′ ∩ B′ = {9,10}. Both sides match ✓.",
          },
        ],
      },
      {
        id: "business-applications",
        title: "3. Applications of Set Theory in Business",
        icon: "Briefcase",
        blocks: [
          {
            kind: "paragraph",
            text: "Set theory is widely used in market research and customer segmentation (recall Market Segmentation from Marketing Management) — for example, using set operations to find customers who bought Product A AND Product B (intersection), or who bought EITHER product (union), directly informing cross-selling and targeted marketing strategies.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Business application",
            text: "In a survey of 100 customers, 60 use Mobile Banking (M), 45 use Net Banking (N), and 25 use both. Using the union formula: n(M ∪ N) = n(M) + n(N) − n(M ∩ N) = 60 + 45 − 25 = 80. So 80 out of 100 customers use at least one digital banking channel, and 100 − 80 = 20 customers use neither.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Universal Set", definition: "The set containing all elements under consideration for a particular discussion." },
      { term: "De Morgan's Laws", definition: "Rules relating the complement of set unions and intersections." },
      { term: "Venn Diagram", definition: "A diagram using overlapping circles to show relationships between sets." },
    ],
    examQuestions: [
      "Explain the representation of sets with examples. (Short)",
      "Explain the set operations: union, intersection, difference, and complement with a Venn diagram. (Long)",
      "State and verify De Morgan's Laws with a numerical example. (Numerical, Long)",
      "Solve a business application problem using set theory (e.g., customer overlap). (Numerical, Medium)",
    ],
  },
  {
    unitNumber: 3,
    title: "Fundamentals of Matrix and Determinants",
    hours: 10,
    headings: [
      {
        id: "matrix-types-algebra",
        title: "1. Types of Matrices and Matrix Algebra",
        icon: "Grid3x3",
        blocks: [
          {
            kind: "paragraph",
            text: "A Matrix is a rectangular array of numbers arranged in rows and columns, widely used in business to organise and manipulate data (e.g., a sales matrix showing products × regions).",
          },
          {
            kind: "table",
            headers: ["Type of Matrix", "Description"],
            rows: [
              ["Row Matrix", "A matrix with only one row"],
              ["Column Matrix", "A matrix with only one column"],
              ["Square Matrix", "Equal number of rows and columns"],
              ["Diagonal Matrix", "A square matrix where all non-diagonal elements are zero"],
              ["Identity Matrix", "A diagonal matrix where all diagonal elements are 1"],
              ["Null (Zero) Matrix", "A matrix where all elements are zero"],
            ],
          },
          {
            kind: "paragraph",
            text: "Matrix algebra: matrices of the same order can be added or subtracted element-by-element; matrix multiplication requires the number of columns in the first matrix to equal the number of rows in the second.",
          },
        ],
      },
      {
        id: "determinants-adjoint-inverse",
        title: "2. Determinants, Adjoint and Inverse of a Matrix",
        icon: "Calculator",
        blocks: [
          {
            kind: "paragraph",
            text: "The Determinant of a square matrix is a single number that encodes certain properties of the matrix — a matrix has an inverse only if its determinant is non-zero (called a non-singular matrix).",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — 2×2 Determinant and Inverse",
            text: "For matrix A = [[4, 3], [2, 1]]: Determinant |A| = (4×1) − (3×2) = 4 − 6 = −2 (non-zero, so A is invertible). Adjoint of A (for a 2×2 matrix, swap the diagonal elements and negate the off-diagonal elements) = [[1, −3], [−2, 4]]. Inverse A⁻¹ = (1/|A|) × Adjoint = (1/−2) × [[1, −3], [−2, 4]] = [[−0.5, 1.5], [1, −2]].",
          },
        ],
      },
      {
        id: "rank-linear-equations",
        title: "3. Rank of a Matrix and Solving Linear Equations",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "The Rank of a matrix is the maximum number of linearly independent rows (or columns) it contains — used to determine whether a system of linear equations has a unique solution, no solution, or infinitely many solutions.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Cramer's Rule",
            text: "Solve: 2x + 3y = 8 and x − y = 1 (up to 2-3 variables, as covered in this course). Using Cramer's Rule: D = |[2,3],[1,−1]| = (2×−1) − (3×1) = −2−3 = −5. Dx = |[8,3],[1,−1]| = (8×−1) − (3×1) = −8−3 = −11. Dy = |[2,8],[1,1]| = (2×1) − (8×1) = 2−8 = −6. x = Dx/D = −11/−5 = 2.2. y = Dy/D = −6/−5 = 1.2. (Check: 2(2.2) + 3(1.2) = 4.4 + 3.6 = 8 ✓; 2.2 − 1.2 = 1 ✓.)",
          },
          {
            kind: "paragraph",
            text: "The Matrix Inverse Method solves the same system by writing it as AX = B, then finding X = A⁻¹B — useful especially when the same coefficient matrix needs to be solved against multiple different right-hand sides.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Determinant", definition: "A single number encoding certain properties of a square matrix; non-zero means the matrix is invertible." },
      { term: "Rank of a Matrix", definition: "The maximum number of linearly independent rows or columns in a matrix." },
      { term: "Cramer's Rule", definition: "A method to solve a system of linear equations using determinants." },
    ],
    examQuestions: [
      "Explain the types of matrices with examples. (Medium)",
      "Find the determinant, adjoint, and inverse of a given 2×2 or 3×3 matrix. (Numerical, Long)",
      "Explain the rank of a matrix and its significance. (Medium)",
      "Solve a system of linear equations using Cramer's Rule. (Numerical, Long)",
      "Solve a system of linear equations using the Matrix Inverse Method. (Numerical, Long)",
    ],
  },
  {
    unitNumber: 4,
    title: "Compound Interest and Annuities",
    hours: 9,
    headings: [
      {
        id: "interest-types",
        title: "1. Types of Interest Rates and Present/Future Value",
        icon: "IndianRupee",
        blocks: [
          {
            kind: "table",
            headers: ["Concept", "Formula"],
            rows: [
              ["Simple Interest (SI)", "SI = (P × R × T) ÷ 100"],
              ["Compound Interest — Future Value", "FV = P (1 + r)ⁿ"],
              ["Present Value", "PV = FV ÷ (1 + r)ⁿ"],
              ["Continuous Compounding", "FV = P × eʳⁿ (where e ≈ 2.71828)"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Compound Interest",
            text: "₹50,000 is invested at 8% p.a. compound interest for 3 years. FV = 50,000 × (1.08)³ = 50,000 × 1.2597 = ₹62,985 (approx.). Compound Interest earned = 62,985 − 50,000 = ₹12,985.",
          },
        ],
      },
      {
        id: "annuities",
        title: "2. Types of Annuities and Their Valuation",
        icon: "Repeat",
        blocks: [
          {
            kind: "paragraph",
            text: "An Annuity is a series of equal payments made at regular intervals.",
          },
          {
            kind: "table",
            headers: ["Type", "Description"],
            rows: [
              ["Ordinary Annuity", "Payments made at the END of each period"],
              ["Annuity Due", "Payments made at the BEGINNING of each period"],
              ["Perpetuity", "An annuity that continues forever"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Future Value of an Annuity",
            text: "₹10,000 is deposited at the end of each year for 3 years, earning 10% p.a. compound interest. FV of Ordinary Annuity = P × [((1+r)ⁿ − 1) ÷ r] = 10,000 × [((1.10)³ − 1) ÷ 0.10] = 10,000 × [(1.331 − 1) ÷ 0.10] = 10,000 × 3.31 = ₹33,100.",
          },
        ],
      },
      {
        id: "loans-debentures-sinking-funds",
        title: "3. Valuation of Loans, Debentures and Sinking Funds",
        icon: "Landmark",
        blocks: [
          {
            kind: "paragraph",
            text: "Valuation of simple loans and debentures uses present value concepts — the fair value of a loan or debenture equals the present value of all its future interest and principal repayments, discounted at the prevailing market interest rate.",
          },
          {
            kind: "paragraph",
            text: "A Sinking Fund is a fund into which fixed amounts are deposited regularly (like an annuity) to accumulate a specific sum by a target future date — commonly used by companies to systematically save for large future obligations, like repaying a debenture at maturity.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Sinking Fund",
            text: "A company needs ₹5,00,000 in 4 years to repay a debenture, and can earn 6% p.a. on a sinking fund. Using the sinking fund formula, the required annual deposit = FV × [r ÷ ((1+r)ⁿ − 1)] = 5,00,000 × [0.06 ÷ ((1.06)⁴ − 1)] = 5,00,000 × [0.06 ÷ 0.2625] = 5,00,000 × 0.2286 ≈ ₹1,14,300 per year.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Annuity", definition: "A series of equal payments made at regular intervals." },
      { term: "Perpetuity", definition: "An annuity that continues forever." },
      { term: "Sinking Fund", definition: "A fund built up through regular deposits to meet a specific future financial obligation." },
    ],
    examQuestions: [
      "Calculate the compound interest on a given principal, rate, and time. (Numerical, Medium)",
      "Differentiate between an ordinary annuity and an annuity due. (Short)",
      "Calculate the future value of an ordinary annuity given the periodic payment, rate, and time. (Numerical, Long)",
      "Explain the valuation of a simple loan/debenture. (Medium)",
      "Solve a sinking fund problem to find the required periodic deposit. (Numerical, Long)",
    ],
  },
  {
    unitNumber: 5,
    title: "Probability",
    hours: 6,
    headings: [
      {
        id: "probability-concept",
        title: "1. Concept, Uses and Types of Probability",
        icon: "Dice5",
        blocks: [
          {
            kind: "paragraph",
            text: "Probability measures the likelihood of an event occurring, expressed as a value between 0 (impossible) and 1 (certain) — widely used in business for risk assessment, quality control, and decision-making under uncertainty.",
          },
          { kind: "diagram", diagramId: "decision-tree", caption: "Fig 5.1 — A simple decision tree using probabilities" },
        ],
      },
      {
        id: "conditional-bayes",
        title: "2. Conditional Probability and Bayes' Theorem",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "Conditional Probability, P(A|B), is the probability of event A occurring, GIVEN that event B has already occurred: P(A|B) = P(A ∩ B) ÷ P(B).",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Bayes' Theorem",
            text: "A factory has 2 machines: Machine A produces 60% of output with a 2% defect rate; Machine B produces 40% of output with a 5% defect rate. A randomly picked item is found defective — what's the probability it came from Machine B? P(Defective) = P(A)×P(Defective|A) + P(B)×P(Defective|B) = (0.6×0.02) + (0.4×0.05) = 0.012 + 0.020 = 0.032. By Bayes' Theorem: P(B|Defective) = [P(B)×P(Defective|B)] ÷ P(Defective) = 0.020 ÷ 0.032 = 0.625, i.e., a 62.5% chance the defective item came from Machine B — even though B makes only 40% of total output, it contributes most of the defects due to its higher defect rate.",
          },
        ],
      },
      {
        id: "addition-multiplication",
        title: "3. Addition and Multiplication Theorems of Probability",
        icon: "Plus",
        blocks: [
          {
            kind: "table",
            headers: ["Theorem", "Formula", "Used when"],
            rows: [
              ["Addition Theorem", "P(A or B) = P(A) + P(B) − P(A and B)", "Finding the probability that at least one of two events occurs"],
              ["Multiplication Theorem", "P(A and B) = P(A) × P(B|A)", "Finding the probability that both events occur together"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked numerical example — Addition Theorem",
            text: "From a deck of 52 cards, what's the probability of drawing a King OR a Heart? P(King) = 4/52. P(Heart) = 13/52. P(King and Heart) = 1/52 (the King of Hearts). P(King or Heart) = 4/52 + 13/52 − 1/52 = 16/52 = 4/13 ≈ 0.308.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Conditional Probability", definition: "The probability of an event occurring given that another event has already occurred." },
      { term: "Bayes' Theorem", definition: "A formula for updating the probability of an event based on new evidence." },
      { term: "Mutually Exclusive Events", definition: "Events that cannot occur at the same time (their intersection probability is zero)." },
    ],
    examQuestions: [
      "Explain the concept and types of probability with examples. (Medium)",
      "Explain conditional probability with a numerical example. (Numerical, Medium)",
      "State and apply Bayes' Theorem to a numerical problem. (Numerical, Long)",
      "State and apply the addition theorem of probability. (Numerical, Medium)",
      "State and apply the multiplication theorem of probability. (Numerical, Medium)",
    ],
  },
];
