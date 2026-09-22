import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Elementary Mathematics (C-105)
// — Dr. Bhimrao Ambedkar University, Agra (DBRAU) BCA Semester 1, syllabus
// effective from session 2025-26. Every numerical example was recomputed with
// Python (sympy / fractions / statistics) before being written here.
export const elementaryMathematicsUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Set Theory, Relations and Functions",
    hours: 12,
    headings: [
      {
        id: "sets-basics",
        title: "1. Sets: Elements, Methods of Describing Sets and Types of Sets",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "A set is a well-defined collection of distinct objects, called its elements or members. 'Well-defined' means that for any object it can be decided definitely whether it belongs to the set or not. Sets are denoted by capital letters (A, B, C) and elements by small letters. If x is an element of A we write x ∈ A (x belongs to A); otherwise x ∉ A. Example: 'the vowels of the English alphabet' is a set; 'the intelligent students of a class' is NOT a set because 'intelligent' is not well-defined.",
          },
          {
            kind: "table",
            headers: ["Standard set", "Symbol", "Elements"],
            rows: [
              ["Natural numbers", "N", "1, 2, 3, ..."],
              ["Whole numbers", "W", "0, 1, 2, 3, ..."],
              ["Integers", "Z", "..., −2, −1, 0, 1, 2, ..."],
              ["Rational numbers", "Q", "numbers of the form p/q, q ≠ 0"],
              ["Real numbers", "R", "all rational and irrational numbers"],
            ],
          },
          {
            kind: "table",
            headers: ["Method of describing a set", "Meaning", "Example: set of natural numbers less than 5"],
            rows: [
              ["Roster (Tabular) form", "List all elements inside braces, separated by commas.", "A = {1, 2, 3, 4}"],
              ["Set-builder (Rule) form", "State the property that every element satisfies.", "A = {x : x ∈ N, x < 5}   (read: the set of all x such that x is a natural number less than 5)"],
              ["Venn diagram", "Elements are shown as points inside a closed curve drawn in a rectangle (universal set).", "A circle containing the points 1, 2, 3, 4"],
            ],
          },
          {
            kind: "table",
            headers: ["Type of set", "Meaning", "Example"],
            rows: [
              ["Empty (null, void) set", "A set with no element; written ∅ or { }.", "{x : x ∈ N, 3 < x < 4} = ∅"],
              ["Singleton set", "A set with exactly one element.", "{7}"],
              ["Finite set", "Number of elements is a whole number; n(A) is the cardinal number.", "A = {2, 4, 6}, n(A) = 3"],
              ["Infinite set", "Elements can never be counted completely.", "N, Z, R"],
              ["Equal sets", "Same elements (order and repetition do not matter): A = B.", "{1, 2, 3} = {3, 2, 1, 1}"],
              ["Equivalent sets", "Same number of elements: n(A) = n(B).", "{a, b, c} and {1, 2, 3}"],
              ["Subset (⊆)", "Every element of A is in B; A ⊆ B. ∅ is a subset of every set, and every set is a subset of itself.", "{1, 2} ⊆ {1, 2, 3}"],
              ["Proper subset (⊂)", "A ⊆ B and A ≠ B.", "{1, 2} ⊂ {1, 2, 3}"],
              ["Universal set (U)", "The set of all objects under discussion; every other set is its subset.", "For sets of digits, U = {0, 1, ..., 9}"],
              ["Disjoint sets", "No common element: A ∩ B = ∅.", "{1, 2} and {3, 4}"],
              ["Power set P(A)", "The set of all subsets of A. If n(A) = m then n(P(A)) = 2^m.", "See the example below"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Power set of A = {a, b, c}",
            text: "n(A) = 3, so the number of subsets is 2³ = 8: P(A) = { ∅, {a}, {b}, {c}, {a, b}, {a, c}, {b, c}, {a, b, c} }. The number of proper subsets is 2ⁿ − 1 = 7 (all except A itself).",
          },
        ],
      },
      {
        id: "set-operations",
        title: "2. Venn Diagrams and Operations on Sets",
        icon: "GitCompare",
        blocks: [
          { kind: "diagram", diagramId: "venn-operations", caption: "Fig 1.1 — Venn diagrams of the operations on two sets (shaded part is the result)" },
          {
            kind: "table",
            headers: ["Operation", "Symbol", "Definition", "Example (A = {1..6}, B = {4..8}, U = {1..10})"],
            rows: [
              ["Union", "A ∪ B", "Elements in A or in B (or both)", "{1, 2, 3, 4, 5, 6, 7, 8}"],
              ["Intersection", "A ∩ B", "Elements common to A and B", "{4, 5, 6}"],
              ["Difference", "A − B", "Elements in A but not in B", "A − B = {1, 2, 3};  B − A = {7, 8}"],
              ["Symmetric difference", "A Δ B", "(A − B) ∪ (B − A): in exactly one of the sets", "{1, 2, 3, 7, 8}"],
              ["Complement", "A′ (or Aᶜ)", "Elements of U that are not in A", "A′ = {7, 8, 9, 10};  B′ = {1, 2, 3, 9, 10}"],
            ],
          },
          {
            kind: "table",
            headers: ["Law", "Statement"],
            rows: [
              ["Commutative", "A ∪ B = B ∪ A;   A ∩ B = B ∩ A"],
              ["Associative", "(A ∪ B) ∪ C = A ∪ (B ∪ C);   (A ∩ B) ∩ C = A ∩ (B ∩ C)"],
              ["Distributive", "A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C);   A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)"],
              ["Idempotent", "A ∪ A = A;   A ∩ A = A"],
              ["Identity", "A ∪ ∅ = A;   A ∩ U = A;   A ∪ U = U;   A ∩ ∅ = ∅"],
              ["Complement", "A ∪ A′ = U;   A ∩ A′ = ∅;   (A′)′ = A;   ∅′ = U;   U′ = ∅"],
              ["De Morgan's laws", "(A ∪ B)′ = A′ ∩ B′;   (A ∩ B)′ = A′ ∪ B′"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Verifying De Morgan's laws with A = {1..6}, B = {4..8}, U = {1..10}",
            text: "A ∪ B = {1, ..., 8}, so (A ∪ B)′ = {9, 10}.  A′ ∩ B′ = {7, 8, 9, 10} ∩ {1, 2, 3, 9, 10} = {9, 10} ✓.   A ∩ B = {4, 5, 6}, so (A ∩ B)′ = {1, 2, 3, 7, 8, 9, 10}.  A′ ∪ B′ = {7, 8, 9, 10} ∪ {1, 2, 3, 9, 10} = {1, 2, 3, 7, 8, 9, 10} ✓.",
          },
          {
            kind: "table",
            headers: ["Counting formula", "Use"],
            rows: [
              ["n(A ∪ B) = n(A) + n(B) − n(A ∩ B)", "Number of elements in at least one of two sets"],
              ["n(A ∪ B) = n(A) + n(B)   if A ∩ B = ∅", "Disjoint sets"],
              ["n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(B ∩ C) − n(A ∩ C) + n(A ∩ B ∩ C)", "Three sets"],
              ["n(A′) = n(U) − n(A);   n(A − B) = n(A) − n(A ∩ B)", "Complement and difference"],
            ],
          },
        ],
      },
      {
        id: "set-applications",
        title: "3. Applications of Sets",
        icon: "Target",
        blocks: [
          {
            kind: "callout",
            tone: "example",
            title: "Problem 1 — Survey of tea and coffee (two sets)",
            text: "In a group of 100 students, 60 like tea, 50 like coffee and 20 like both. Find how many like (a) tea only, (b) coffee only, (c) at least one of the two, (d) neither.  Solution: n(T) = 60, n(C) = 50, n(T ∩ C) = 20.  (a) tea only = 60 − 20 = 40.  (b) coffee only = 50 − 20 = 30.  (c) n(T ∪ C) = 60 + 50 − 20 = 90.  (d) neither = 100 − 90 = 10.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Problem 2 — Three sets",
            text: "n(A) = 30, n(B) = 25, n(C) = 20, n(A ∩ B) = 10, n(B ∩ C) = 8, n(A ∩ C) = 6 and n(A ∩ B ∩ C) = 4. Find n(A ∪ B ∪ C).  n(A ∪ B ∪ C) = 30 + 25 + 20 − 10 − 8 − 6 + 4 = 55.",
          },
          {
            kind: "bullets",
            items: [
              "Method for word problems: (1) name each set; (2) write the given numbers as n(...) values; (3) start from the innermost region (the common part, A ∩ B ∩ C) and work outwards, subtracting; (4) finally check that the regions add up to the total.",
              "Applications in computing: sets are the basis of databases (tables are sets of records; SQL UNION, INTERSECT and EXCEPT are the set operations), of searching (documents containing word A AND word B is an intersection) and of data structures such as sets in Python.",
            ],
          },
        ],
      },
      {
        id: "relations",
        title: "4. Relations: Properties, Equivalence and Partial Order",
        icon: "Network",
        blocks: [
          {
            kind: "paragraph",
            text: "The Cartesian product A × B is the set of all ordered pairs (a, b) with a ∈ A and b ∈ B; if n(A) = m and n(B) = n then n(A × B) = mn, and in general A × B ≠ B × A. A RELATION R from A to B is any subset of A × B. If (a, b) ∈ R we write a R b. The DOMAIN of R is the set of all first components, and the RANGE the set of all second components. The INVERSE relation R⁻¹ = {(b, a) : (a, b) ∈ R}. A relation on A means a subset of A × A.",
          },
          {
            kind: "table",
            headers: ["Property of a relation R on A", "Meaning"],
            rows: [
              ["Reflexive", "(a, a) ∈ R for every a ∈ A"],
              ["Symmetric", "If (a, b) ∈ R then (b, a) ∈ R"],
              ["Antisymmetric", "If (a, b) ∈ R and (b, a) ∈ R then a = b"],
              ["Transitive", "If (a, b) ∈ R and (b, c) ∈ R then (a, c) ∈ R"],
            ],
          },
          {
            kind: "table",
            headers: ["Special relation", "Properties required", "Example"],
            rows: [
              ["Equivalence relation", "Reflexive + Symmetric + Transitive", "'has the same remainder when divided by 3'; 'is parallel to'; equality"],
              ["Partial order relation", "Reflexive + Antisymmetric + Transitive (the set with R is a poset)", "≤ on numbers; ⊆ on sets; 'divides' on positive integers"],
              ["Total (linear) order", "A partial order in which any two elements are comparable", "≤ on the real numbers"],
            ],
          },
          {
            kind: "paragraph",
            text: "An equivalence relation splits the set into disjoint EQUIVALENCE CLASSES (a partition): the class of a is [a] = {x : x R a}. Every element belongs to exactly one class.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Example 1 — An equivalence relation",
            text: "A = {1, 2, 3, 4}, R = {(1,1), (2,2), (3,3), (4,4), (1,2), (2,1), (3,4), (4,3)}.  Reflexive: all (a, a) are present ✓.  Symmetric: for (1,2) we have (2,1), for (3,4) we have (4,3) ✓.  Transitive: (1,2) and (2,1) give (1,1) ✓, (3,4) and (4,3) give (3,3) ✓, and no other chain exists ✓.  So R is an equivalence relation with classes [1] = [2] = {1, 2} and [3] = [4] = {3, 4}.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Example 2 — A partial order",
            text: "On D = {1, 2, 3, 4, 6, 12} let a R b mean 'a divides b'. It is reflexive (a divides a), antisymmetric (if a divides b and b divides a then a = b) and transitive (if a | b and b | c then a | c). It has 18 ordered pairs. It is a partial order but not a total order, because 2 and 3 are not comparable (neither divides the other).",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Example 3 — Congruence modulo 3 on the integers",
            text: "a R b if a − b is divisible by 3. Reflexive (a − a = 0); symmetric (if 3 | a − b then 3 | b − a); transitive (if 3 | a − b and 3 | b − c then 3 | a − c). It is an equivalence relation with three classes: numbers leaving remainder 0, 1 and 2 when divided by 3.",
          },
        ],
      },
      {
        id: "functions",
        title: "5. Functions: Types, Composite and Inverse; Standard Functions",
        icon: "Sigma",
        blocks: [
          {
            kind: "paragraph",
            text: "A FUNCTION f from a set A to a set B (written f : A → B) is a rule that assigns to EVERY element x of A exactly ONE element f(x) of B. A is the DOMAIN, B the CODOMAIN, and the set of all values f(x) actually obtained is the RANGE (range ⊆ codomain).",
          },
          { kind: "diagram", diagramId: "function-types", caption: "Fig 1.2 — Mapping diagrams of the types of functions" },
          {
            kind: "table",
            headers: ["Type", "Definition", "Condition / test"],
            rows: [
              ["One-to-one (injective)", "Different elements of A have different images.", "f(x₁) = f(x₂) ⇒ x₁ = x₂"],
              ["Many-to-one", "Two or more elements of A have the same image.", "Not one-one"],
              ["Onto (surjective)", "Every element of B is the image of at least one element of A.", "Range = Codomain"],
              ["Into", "At least one element of B is not an image.", "Range ⊂ Codomain"],
              ["Bijective", "Both one-one and onto.", "Has an inverse function"],
            ],
          },
          {
            kind: "paragraph",
            text: "Composite function: if f : A → B and g : B → C, then (g ∘ f)(x) = g(f(x)) is a function from A to C. In general f ∘ g ≠ g ∘ f. Inverse function: if f : A → B is bijective, then f⁻¹ : B → A is defined by f⁻¹(y) = x ⇔ f(x) = y. Only bijective functions have inverses, and f(f⁻¹(y)) = y, f⁻¹(f(x)) = x.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Composite and inverse function — worked example",
            text: "Let f(x) = x² and g(x) = x + 1.  (f ∘ g)(x) = f(g(x)) = (x + 1)²  and  (g ∘ f)(x) = g(f(x)) = x² + 1.  At x = 2: (f ∘ g)(2) = 9 while (g ∘ f)(2) = 5, so f ∘ g ≠ g ∘ f.   Inverse: for h(x) = 2x + 3 put y = 2x + 3 ⇒ x = (y − 3)/2, so h⁻¹(x) = (x − 3)/2.  Check: h(h⁻¹(x)) = 2·(x − 3)/2 + 3 = x ✓.",
          },
          {
            kind: "table",
            headers: ["Function", "Domain → Range", "Important properties"],
            rows: [
              ["Trigonometric: sin x, cos x", "R → [−1, 1]", "Periodic with period 2π; sin²x + cos²x = 1"],
              ["tan x", "all x except odd multiples of π/2 → R", "Period π; tan x = sin x / cos x"],
              ["Exponential: eˣ (or aˣ, a > 0)", "R → (0, ∞)", "Always positive; increasing for a > 1; eˣ · eʸ = eˣ⁺ʸ; e⁰ = 1"],
              ["Logarithmic: log x", "(0, ∞) → R", "Inverse of the exponential function"],
            ],
          },
          {
            kind: "table",
            headers: ["Angle θ", "0°", "30°", "45°", "60°", "90°"],
            rows: [
              ["sin θ", "0", "1/2", "1/√2", "√3/2", "1"],
              ["cos θ", "1", "√3/2", "1/√2", "1/2", "0"],
              ["tan θ", "0", "1/√3", "1", "√3", "not defined"],
            ],
          },
          {
            kind: "table",
            headers: ["Laws of logarithms (any base, log_a)", "Laws of exponents"],
            rows: [
              ["log(mn) = log m + log n", "aᵐ · aⁿ = aᵐ⁺ⁿ"],
              ["log(m/n) = log m − log n", "aᵐ / aⁿ = aᵐ⁻ⁿ"],
              ["log(mⁿ) = n log m", "(aᵐ)ⁿ = aᵐⁿ"],
              ["log_a a = 1;  log_a 1 = 0", "a⁰ = 1;  a⁻ⁿ = 1/aⁿ"],
              ["y = a^x ⇔ x = log_a y", "a^x is the inverse of log_a x"],
            ],
          },
        ],
      },
      {
        id: "graph-theory",
        title: "6. Basic Concept of Graph Theory",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "A graph G = (V, E) consists of a set V of VERTICES (nodes, points) and a set E of EDGES (lines) joining pairs of vertices. Graphs model networks — roads between cities, computers in a network, friends in a social network, flow charts.",
          },
          { kind: "diagram", diagramId: "graph-basics", caption: "Fig 1.3 — A graph with 5 vertices and 5 edges, and its adjacency matrix" },
          {
            kind: "table",
            headers: ["Term", "Meaning"],
            rows: [
              ["Adjacent vertices", "Two vertices joined by an edge."],
              ["Degree of a vertex", "Number of edges meeting at the vertex. In the figure: deg(A) = 2, deg(B) = 2, deg(C) = 3, deg(D) = 2, deg(E) = 1."],
              ["Handshaking lemma", "The sum of all degrees = 2 × (number of edges). Here 2 + 2 + 3 + 2 + 1 = 10 = 2 × 5, and so the number of odd-degree vertices is always even."],
              ["Path / Cycle", "A sequence of edges joining vertices without repeating a vertex / a closed path. A–C–D–E is a path; A–B–C–A is a cycle."],
              ["Connected graph", "There is a path between every pair of vertices."],
              ["Directed graph (digraph)", "Edges have a direction (one-way roads); undirected graphs have none."],
              ["Loop and multiple edges", "An edge from a vertex to itself / more than one edge between the same pair. A graph without them is a simple graph."],
              ["Complete graph Kₙ", "Every pair of the n vertices is adjacent; it has n(n − 1)/2 edges (K₅ has 10)."],
              ["Bipartite graph", "Vertices split into two sets so that every edge joins a vertex of one set to the other."],
              ["Tree", "A connected graph with no cycle; a tree with n vertices has exactly n − 1 edges."],
            ],
          },
          {
            kind: "paragraph",
            text: "Representation in a computer: the ADJACENCY MATRIX of a graph with n vertices is an n × n matrix whose (i, j) entry is 1 if vertices i and j are joined and 0 otherwise (for an undirected graph it is symmetric, and each row sum equals the degree). For the graph in Fig 1.3 with vertices in the order A, B, C, D, E the matrix is:",
          },
          {
            kind: "table",
            headers: ["", "A", "B", "C", "D", "E", "Row sum (degree)"],
            rows: [
              ["A", "0", "1", "1", "0", "0", "2"],
              ["B", "1", "0", "1", "0", "0", "2"],
              ["C", "1", "1", "0", "1", "0", "3"],
              ["D", "0", "0", "1", "0", "1", "2"],
              ["E", "0", "0", "0", "1", "0", "1"],
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Set", definition: "A well-defined collection of distinct objects." },
      { term: "Power set", definition: "The set of all subsets of a set; a set with n elements has 2ⁿ subsets." },
      { term: "De Morgan's laws", definition: "(A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′." },
      { term: "Equivalence relation", definition: "A relation that is reflexive, symmetric and transitive." },
      { term: "Partial order", definition: "A relation that is reflexive, antisymmetric and transitive." },
      { term: "Bijective function", definition: "A function that is both one-one and onto; only such functions have inverses." },
      { term: "Composite function", definition: "(g ∘ f)(x) = g(f(x))." },
      { term: "Degree of a vertex", definition: "The number of edges meeting at a vertex." },
      { term: "Adjacency matrix", definition: "An n × n 0/1 matrix showing which pairs of vertices are joined." },
    ],
    examQuestions: [
      "Define a set. Explain the methods of describing a set and the types of sets with examples. (Long)",
      "State and prove (verify with an example) De Morgan's laws. (Medium)",
      "Explain the operations on sets with Venn diagrams. (Medium)",
      "In a survey of 100 students, 60 like tea, 50 like coffee and 20 like both. How many like neither? (Medium)",
      "If n(A) = 30, n(B) = 25, n(C) = 20, n(A∩B) = 10, n(B∩C) = 8, n(A∩C) = 6, n(A∩B∩C) = 4, find n(A∪B∪C). (Short)",
      "Define reflexive, symmetric, antisymmetric and transitive relations. What is an equivalence relation? (Long)",
      "Show that 'congruence modulo 3' is an equivalence relation. (Medium)",
      "What is a partial order relation? Show that 'divides' on {1, 2, 3, 4, 6, 12} is a partial order. (Medium)",
      "Define a function. Explain one-one, onto, into and bijective functions. (Long)",
      "If f(x) = x² and g(x) = x + 1, find f∘g and g∘f. Find the inverse of h(x) = 2x + 3. (Medium)",
      "Define a graph. Explain degree, path, cycle and adjacency matrix with an example. (Long)",
      "State and verify the handshaking lemma. How many edges does K₆ have? (Short)",
    ],
  },
  {
    unitNumber: 2,
    title: "Determinants and Matrices",
    hours: 12,
    headings: [
      {
        id: "determinants",
        title: "1. Determinants: Minors, Cofactors and Properties",
        icon: "Equal",
        blocks: [
          {
            kind: "paragraph",
            text: "A determinant is a single number associated with a square matrix. For a 2 × 2 matrix, |a b; c d| = ad − bc. For a 3 × 3 determinant, expand along any row or column: the value is the sum of (element × its cofactor). The MINOR Mᵢⱼ of an element aᵢⱼ is the determinant left after deleting the i-th row and j-th column. The COFACTOR is Cᵢⱼ = (−1)^(i+j) Mᵢⱼ; the sign pattern for a 3 × 3 determinant is  + − +  /  − + −  /  + − +.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example — 3 × 3 determinant",
            text: "Let A = [2 1 3; 0 4 −1; 5 2 6] (rows separated by ;).  C₁₁ = +(4·6 − (−1)·2) = 26;  C₁₂ = −(0·6 − (−1)·5) = −5;  C₁₃ = +(0·2 − 4·5) = −20.  Expanding along the first row: |A| = 2(26) + 1(−5) + 3(−20) = 52 − 5 − 60 = −13.",
          },
          {
            kind: "table",
            headers: ["Property of determinants", "Statement"],
            rows: [
              ["1. Transpose", "|Aᵀ| = |A| (rows and columns can be interchanged)."],
              ["2. Row/column interchange", "Interchanging two rows (or columns) changes the sign of the determinant."],
              ["3. Identical rows", "If two rows (or columns) are identical, the determinant is 0."],
              ["4. Zero row", "If a row (or column) consists only of zeros, the determinant is 0."],
              ["5. Scalar multiple of a row", "Multiplying one row by k multiplies the determinant by k; |kA| = kⁿ|A| for an n × n matrix."],
              ["6. Proportional rows", "If two rows are proportional (one is a multiple of the other) the determinant is 0."],
              ["7. Row operation", "Adding a multiple of one row to another row does not change the value."],
              ["8. Triangular matrix", "The determinant equals the product of the diagonal elements."],
              ["9. Product", "|AB| = |A|·|B|."],
            ],
          },
        ],
      },
      {
        id: "matrix-types",
        title: "2. Introduction to Matrices and Types of Matrices",
        icon: "Table",
        blocks: [
          {
            kind: "paragraph",
            text: "A matrix is a rectangular arrangement of numbers in m rows and n columns, written inside brackets. Its ORDER is m × n. The number in the i-th row and j-th column is the element aᵢⱼ. Unlike a determinant, a matrix has no numerical value — it is an arrangement.",
          },
          {
            kind: "table",
            headers: ["Type of matrix", "Description", "Example"],
            rows: [
              ["Row matrix", "Only one row (1 × n)", "[1  5  7]"],
              ["Column matrix", "Only one column (m × 1)", "[2; 4; 6]"],
              ["Rectangular matrix", "Number of rows ≠ number of columns", "[1 2 3; 4 5 6]  (2 × 3)"],
              ["Square matrix", "Rows = columns (n × n)", "[1 2; 3 4]"],
              ["Diagonal matrix", "Square; all non-diagonal elements are 0", "[3 0; 0 5]"],
              ["Scalar matrix", "Diagonal matrix with equal diagonal elements", "[2 0; 0 2]"],
              ["Identity (unit) matrix I", "Scalar matrix with diagonal 1; AI = IA = A", "[1 0; 0 1]"],
              ["Null (zero) matrix", "All elements are 0", "[0 0; 0 0]"],
              ["Upper / lower triangular", "All elements below / above the diagonal are 0", "[1 2; 0 3]  /  [1 0; 2 3]"],
              ["Symmetric matrix", "Aᵀ = A (aᵢⱼ = aⱼᵢ)", "[1 2; 2 5]"],
              ["Skew-symmetric matrix", "Aᵀ = −A (diagonal elements are 0)", "[0 3; −3 0]"],
              ["Singular / non-singular", "Square matrix with |A| = 0 / |A| ≠ 0", "[1 2; 2 4] is singular"],
            ],
          },
        ],
      },
      {
        id: "matrix-operations",
        title: "3. Matrix Operations: Scalar Multiplication, Addition, Multiplication and Transpose",
        icon: "Sigma",
        blocks: [
          {
            kind: "table",
            headers: ["Operation", "Rule", "Example"],
            rows: [
              ["Scalar multiplication", "Multiply every element by the scalar k.", "2·[1 2; 3 4] = [2 4; 6 8]"],
              ["Addition / subtraction", "Only for matrices of the SAME order; add/subtract corresponding elements. Addition is commutative and associative.", "[1 2; 3 4] + [5 6; 7 8] = [6 8; 10 12]"],
              ["Multiplication", "A (m × n) can be multiplied by B (n × p) — the number of columns of A equals the number of rows of B; the product is m × p. (i, j) element = (row i of A) · (column j of B).", "See the worked example"],
              ["Transpose Aᵀ", "Interchange rows and columns; order m × n becomes n × m.", "[1 2 3; 4 5 6]ᵀ = [1 4; 2 5; 3 6]"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Matrix multiplication — worked example",
            text: "A = [1 2 3; 4 5 6] (2 × 3) and B = [7 8; 9 10; 11 12] (3 × 2), so AB is 2 × 2.  (1,1): 1·7 + 2·9 + 3·11 = 7 + 18 + 33 = 58.  (1,2): 1·8 + 2·10 + 3·12 = 8 + 20 + 36 = 64.  (2,1): 4·7 + 5·9 + 6·11 = 28 + 45 + 66 = 139.  (2,2): 4·8 + 5·10 + 6·12 = 32 + 50 + 72 = 154.  So AB = [58 64; 139 154].  (BA would be 3 × 3, so AB ≠ BA.)",
          },
          {
            kind: "bullets",
            items: [
              "Properties of multiplication: NOT commutative in general (AB ≠ BA); associative (AB)C = A(BC); distributive A(B + C) = AB + AC; AI = IA = A; AB = O does not mean A = O or B = O.",
              "Properties of transpose: (Aᵀ)ᵀ = A; (A + B)ᵀ = Aᵀ + Bᵀ; (kA)ᵀ = kAᵀ; (AB)ᵀ = BᵀAᵀ (order reverses) — checked above: (AB)ᵀ = [58 139; 64 154] = BᵀAᵀ.",
            ],
          },
        ],
      },
      {
        id: "matrix-inverse",
        title: "4. Inverse of a Matrix",
        icon: "RefreshCw",
        blocks: [
          {
            kind: "paragraph",
            text: "For a square matrix A, if there is a matrix A⁻¹ such that A·A⁻¹ = A⁻¹·A = I, then A⁻¹ is the inverse of A. The inverse exists only when A is non-singular (|A| ≠ 0), and it is unique. The formula is A⁻¹ = adj(A) / |A|, where the ADJOINT adj(A) is the TRANSPOSE of the matrix of cofactors. Shortcut for 2 × 2: the inverse of [a b; c d] is (1/(ad − bc))·[d −b; −c a].",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Inverse of a 3 × 3 matrix by the adjoint method",
            text: "A = [1 2 3; 0 1 4; 5 6 0].  |A| = 1(0 − 24) − 2(0 − 20) + 3(0 − 5) = −24 + 40 − 15 = 1 ≠ 0, so the inverse exists.  Cofactors: C₁₁ = −24, C₁₂ = 20, C₁₃ = −5; C₂₁ = 18, C₂₂ = −15, C₂₃ = 4; C₃₁ = 5, C₃₂ = −4, C₃₃ = 1.  Cofactor matrix = [−24 20 −5; 18 −15 4; 5 −4 1].  adj(A) = its transpose = [−24 18 5; 20 −15 −4; −5 4 1].  A⁻¹ = adj(A)/|A| = [−24 18 5; 20 −15 −4; −5 4 1].  Check: first row of A times first column of A⁻¹ = 1(−24) + 2(20) + 3(−5) = 1 ✓.",
          },
          {
            kind: "bullets",
            items: [
              "Properties: (A⁻¹)⁻¹ = A; (AB)⁻¹ = B⁻¹A⁻¹ (order reverses); (Aᵀ)⁻¹ = (A⁻¹)ᵀ; |A⁻¹| = 1/|A|; A·adj(A) = |A|·I.",
              "Uses: solving a system of equations AX = B as X = A⁻¹B; graphics transformations; cryptography.",
            ],
          },
        ],
      },
      {
        id: "matrix-rank",
        title: "5. Rank of a Matrix",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "The RANK of a matrix A is the order of the largest square sub-matrix whose determinant is non-zero — equivalently, the number of non-zero rows in its echelon (row-reduced) form. A matrix of order m × n has rank ≤ min(m, n); the zero matrix has rank 0; an n × n matrix has rank n exactly when |A| ≠ 0. Rank does not change under elementary row operations: (1) interchanging two rows, (2) multiplying a row by a non-zero number, (3) adding a multiple of one row to another.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Finding the rank by row operations",
            text: "A = [1 2 3 4; 2 3 4 5; 3 4 5 6].  R₂ → R₂ − 2R₁ gives [0 −1 −2 −3];  R₃ → R₃ − 3R₁ gives [0 −2 −4 −6].  Then R₃ → R₃ − 2R₂ gives [0 0 0 0].  The echelon form has two non-zero rows, so rank(A) = 2.",
          },
        ],
      },
      {
        id: "linear-dependence",
        title: "6. Linear Dependence and Independence of Vectors",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "Vectors v₁, v₂, ..., vₖ are LINEARLY DEPENDENT if there exist scalars c₁, ..., cₖ, not all zero, such that c₁v₁ + c₂v₂ + ... + cₖvₖ = 0; otherwise (only all cᵢ = 0 works) they are LINEARLY INDEPENDENT. In other words, the vectors are dependent when one of them can be written as a combination of the others. Test: form the matrix with the vectors as rows; the vectors are independent exactly when its rank equals the number of vectors (for n vectors of n components: |A| ≠ 0).",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Testing dependence",
            text: "v₁ = (1, 2, 3), v₂ = (4, 5, 6), v₃ = (7, 8, 9).  The determinant of [1 2 3; 4 5 6; 7 8 9] is 1(45 − 48) − 2(36 − 42) + 3(32 − 35) = −3 + 12 − 9 = 0, and its rank is 2 (< 3), so the vectors are linearly dependent.  Indeed v₃ = 2v₂ − v₁: 2(4, 5, 6) − (1, 2, 3) = (7, 8, 9) ✓.   By contrast (1, 0, 0), (0, 1, 0), (0, 0, 1) have determinant 1 and are independent.",
          },
        ],
      },
      {
        id: "eigen",
        title: "7. Eigen Values and Eigen Vectors",
        icon: "Compass",
        blocks: [
          {
            kind: "paragraph",
            text: "For a square matrix A, a non-zero vector X is an EIGEN VECTOR and the number λ an EIGEN VALUE if AX = λX — the matrix only stretches X by the factor λ without changing its direction. Rewriting, (A − λI)X = 0 has a non-zero solution only when |A − λI| = 0. This is the CHARACTERISTIC EQUATION; its roots are the eigen values. Steps: (1) write |A − λI| = 0 and expand; (2) solve for λ; (3) for each λ solve (A − λI)X = 0 to get the eigen vector.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Example 1 — 2 × 2 matrix",
            text: "A = [4 1; 2 3].  |A − λI| = (4 − λ)(3 − λ) − 2 = λ² − 7λ + 10 = 0, so λ = 2 and λ = 5.   For λ = 2: (A − 2I)X = [2 1; 2 1]X = 0 ⇒ 2x + y = 0 ⇒ X = (1, −2).   For λ = 5: [−1 1; 2 −2]X = 0 ⇒ x = y ⇒ X = (1, 1).   Check: A(1, 1) = (5, 5) = 5·(1, 1) ✓.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Example 2 — 3 × 3 matrix",
            text: "A = [1 0 −1; 1 2 1; 2 2 3].  The characteristic equation is λ³ − 6λ² + 11λ − 6 = 0, i.e. (λ − 1)(λ − 2)(λ − 3) = 0, so the eigen values are 1, 2, 3.  The eigen vectors are (1, −1, 0) for λ = 1, (−2, 1, 2) for λ = 2 and (−1, 1, 2) for λ = 3 (any non-zero multiple is also an eigen vector).  Check: sum of eigen values = 6 = trace (1 + 2 + 3); product = 6 = |A|.",
          },
          {
            kind: "table",
            headers: ["Property of eigen values", "Statement"],
            rows: [
              ["Sum", "Sum of the eigen values = trace of A (sum of the diagonal elements)."],
              ["Product", "Product of the eigen values = |A|. So A is singular exactly when 0 is an eigen value."],
              ["Triangular / diagonal matrix", "The eigen values are the diagonal elements."],
              ["Powers and inverse", "Aᵏ has eigen values λᵏ; A⁻¹ has eigen values 1/λ."],
              ["Transpose", "A and Aᵀ have the same eigen values."],
              ["Eigen vectors of different eigen values", "Are linearly independent."],
            ],
          },
        ],
      },
      {
        id: "cayley-hamilton",
        title: "8. Cayley–Hamilton Theorem (without proof)",
        icon: "Award",
        blocks: [
          {
            kind: "paragraph",
            text: "Theorem: every square matrix satisfies its own characteristic equation. That is, if the characteristic equation of A is λⁿ + c₁λⁿ⁻¹ + ... + cₙ = 0, then Aⁿ + c₁Aⁿ⁻¹ + ... + cₙI = O. Uses: to find the inverse of a matrix and higher powers of a matrix without direct multiplication.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Verification and finding the inverse",
            text: "A = [1 2; 3 4].  |A − λI| = (1 − λ)(4 − λ) − 6 = λ² − 5λ − 2, so the characteristic equation is λ² − 5λ − 2 = 0.  Verification: A² = [7 10; 15 22];  A² − 5A − 2I = [7 − 5 − 2, 10 − 10; 15 − 15, 22 − 20 − 2] = [0 0; 0 0] ✓.   Inverse: from A² − 5A − 2I = O multiply by A⁻¹: A − 5I − 2A⁻¹ = O, so A⁻¹ = (A − 5I)/2 = [−4 2; 3 −1]/2 = [−2 1; 3/2 −1/2].  Check with the formula: |A| = −2, adj(A) = [4 −2; −3 1], A⁻¹ = adj(A)/(−2) = [−2 1; 3/2 −1/2] ✓.",
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam Tip",
            text: "In numerical questions always (1) write the characteristic equation clearly, (2) substitute the matrix into it, (3) show the zero matrix result. Marks are given for each step. 'Verify Cayley–Hamilton theorem' and 'find A⁻¹ using it' are the two commonly asked forms.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Minor / Cofactor", definition: "The determinant left after deleting a row and a column / the minor with the sign (−1)^(i+j)." },
      { term: "Singular matrix", definition: "A square matrix whose determinant is zero; it has no inverse." },
      { term: "Transpose", definition: "The matrix obtained by interchanging the rows and columns." },
      { term: "Adjoint", definition: "The transpose of the cofactor matrix; A⁻¹ = adj(A)/|A|." },
      { term: "Rank", definition: "The order of the largest non-vanishing minor, or the number of non-zero rows in the echelon form." },
      { term: "Linear dependence", definition: "A set of vectors in which some vector is a combination of the others." },
      { term: "Eigen value", definition: "A number λ for which AX = λX has a non-zero solution X." },
      { term: "Characteristic equation", definition: "|A − λI| = 0, whose roots are the eigen values." },
      { term: "Cayley–Hamilton theorem", definition: "Every square matrix satisfies its own characteristic equation." },
    ],
    examQuestions: [
      "Define minor and cofactor. Evaluate the determinant of [2 1 3; 0 4 −1; 5 2 6]. (Medium)",
      "State any six properties of determinants. (Medium)",
      "Explain the types of matrices with examples. (Long)",
      "Multiply [1 2 3; 4 5 6] by [7 8; 9 10; 11 12]. Verify that (AB)ᵀ = BᵀAᵀ. (Medium)",
      "Find the inverse of [1 2 3; 0 1 4; 5 6 0] by the adjoint method. (Long)",
      "Find the rank of [1 2 3 4; 2 3 4 5; 3 4 5 6]. (Medium)",
      "Show that the vectors (1, 2, 3), (4, 5, 6), (7, 8, 9) are linearly dependent and find the relation. (Medium)",
      "Find the eigen values and eigen vectors of [4 1; 2 3]. (Long)",
      "State the Cayley–Hamilton theorem. Verify it for [1 2; 3 4] and hence find its inverse. (Long)",
      "State four properties of eigen values. (Short)",
    ],
  },
  {
    unitNumber: 3,
    title: "Probability",
    hours: 10,
    headings: [
      {
        id: "prob-basics",
        title: "1. Introduction: Experiment, Sample Space and Events",
        icon: "Percent",
        blocks: [
          {
            kind: "paragraph",
            text: "Probability is the measure of how likely an event is to happen. A RANDOM EXPERIMENT is an experiment whose result cannot be predicted with certainty but whose possible results are known (tossing a coin, throwing a die, drawing a card). Each result is an OUTCOME; the set of all possible outcomes is the SAMPLE SPACE S; an EVENT is any subset of S.",
          },
          {
            kind: "table",
            headers: ["Experiment", "Sample space S", "n(S)"],
            rows: [
              ["Toss one coin", "{H, T}", "2"],
              ["Toss two coins", "{HH, HT, TH, TT}", "4"],
              ["Throw one die", "{1, 2, 3, 4, 5, 6}", "6"],
              ["Throw two dice", "{(1,1), (1,2), ..., (6,6)}", "36"],
              ["Draw one card from a pack", "52 cards: 4 suits (spades, clubs = black; hearts, diamonds = red) × 13 cards (A, 2–10, J, Q, K); 12 face cards", "52"],
            ],
          },
          {
            kind: "paragraph",
            text: "Classical definition: if all outcomes of a random experiment are equally likely, the probability of an event E is P(E) = (number of outcomes favourable to E) / (total number of outcomes) = n(E)/n(S). Since 0 ≤ n(E) ≤ n(S), we have 0 ≤ P(E) ≤ 1; P = 0 is an impossible event and P = 1 a sure (certain) event. Odds in favour of E = P(E) : P(E′). Empirical (statistical) definition: P(E) is the relative frequency of E in a very large number of trials.",
          },
          {
            kind: "table",
            headers: ["Type of events", "Meaning", "Example (throw of a die)"],
            rows: [
              ["Simple / compound event", "One outcome / two or more outcomes", "{4} / {2, 4, 6}"],
              ["Mutually exclusive events", "Cannot occur together: A ∩ B = ∅", "'even number' and 'number 5'"],
              ["Exhaustive events", "Together they cover the whole sample space: A ∪ B ∪ ... = S", "'even' and 'odd'"],
              ["Complementary event", "A′ — the event 'A does not occur'; P(A′) = 1 − P(A)", "A = 'a 6', A′ = 'not a 6'"],
              ["Equally likely events", "Each has the same chance", "Each face of a fair die"],
              ["Independent events", "Occurrence of one does not affect the other", "Two separate throws of a die"],
              ["Dependent events", "Occurrence of one affects the other", "Drawing two cards without replacement"],
            ],
          },
        ],
      },
      {
        id: "prob-axioms",
        title: "2. Axioms of Probability",
        icon: "Scale",
        blocks: [
          {
            kind: "paragraph",
            text: "The modern (axiomatic) theory of probability, due to Kolmogorov, is based on three axioms for a sample space S and any events A, B:",
          },
          {
            kind: "table",
            headers: ["Axiom", "Statement"],
            rows: [
              ["Axiom 1 (non-negativity)", "P(A) ≥ 0 for every event A."],
              ["Axiom 2 (certainty)", "P(S) = 1."],
              ["Axiom 3 (additivity)", "If A and B are mutually exclusive (A ∩ B = ∅), then P(A ∪ B) = P(A) + P(B). (For any number of mutually exclusive events the probabilities add.)"],
            ],
          },
          {
            kind: "table",
            headers: ["Result deduced from the axioms", "Reason"],
            rows: [
              ["P(∅) = 0", "S and ∅ are mutually exclusive and S ∪ ∅ = S, so 1 = 1 + P(∅)."],
              ["P(A′) = 1 − P(A)", "A and A′ are mutually exclusive with A ∪ A′ = S, so P(A) + P(A′) = 1."],
              ["0 ≤ P(A) ≤ 1", "P(A′) ≥ 0 gives P(A) ≤ 1."],
              ["If A ⊆ B then P(A) ≤ P(B)", "B = A ∪ (B − A) with A and B − A disjoint."],
              ["P(A ∪ B) = P(A) + P(B) − P(A ∩ B)", "Addition theorem (next section)."],
            ],
          },
        ],
      },
      {
        id: "prob-addition-multiplication",
        title: "3. Addition and Multiplication Theorems; Conditional Probability",
        icon: "Sigma",
        blocks: [
          {
            kind: "table",
            headers: ["Theorem", "Formula", "Special case"],
            rows: [
              ["Addition (two events)", "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)", "Mutually exclusive: P(A ∪ B) = P(A) + P(B)"],
              ["Addition (three events)", "P(A ∪ B ∪ C) = P(A) + P(B) + P(C) − P(A∩B) − P(B∩C) − P(A∩C) + P(A∩B∩C)", "—"],
              ["Conditional probability", "P(A | B) = P(A ∩ B) / P(B), P(B) ≠ 0 — the probability of A given that B has occurred", "—"],
              ["Multiplication", "P(A ∩ B) = P(A)·P(B | A) = P(B)·P(A | B)", "Independent events: P(A ∩ B) = P(A)·P(B)"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Addition theorem — a card is drawn",
            text: "P(king or heart): P(king) = 4/52, P(heart) = 13/52, P(king of hearts) = 1/52, so P = 4/52 + 13/52 − 1/52 = 16/52 = 4/13.   P(red or queen) = 26/52 + 4/52 − 2/52 = 28/52 = 7/13.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Multiplication theorem — two cards drawn",
            text: "Two cards are drawn from a pack. P(both are aces) WITHOUT replacement = (4/52)·(3/51) = 12/2652 = 1/221 (dependent events).  WITH replacement = (4/52)·(4/52) = 1/169 (independent events).",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Urn problem",
            text: "An urn holds 3 red and 2 blue balls; two balls are drawn one after the other without replacement.  P(both red) = (3/5)(2/4) = 3/10.   P(one red and one blue) = (3/5)(2/4) + (2/5)(3/4) = 3/10 + 3/10 = 3/5.   P(both blue) = (2/5)(1/4) = 1/10.  The three add up to 1 ✓.",
          },
          {
            kind: "bullets",
            items: [
              "Events A and B are independent if and only if P(A ∩ B) = P(A)·P(B), equivalently P(A | B) = P(A). Mutually exclusive events with non-zero probabilities are NEVER independent (if one occurs the other cannot).",
              "Check for independence — given P(A) = 0.5, P(B) = 0.4 and P(A ∩ B) = 0.2: P(A)·P(B) = 0.2 = P(A ∩ B), so A and B are independent; P(A ∪ B) = 0.5 + 0.4 − 0.2 = 0.7 and P(A′ ∩ B′) = 1 − 0.7 = 0.3.",
            ],
          },
        ],
      },
      {
        id: "bayes",
        title: "4. Total Probability and Bayes' Theorem",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "Let E₁, E₂, ..., Eₙ be mutually exclusive and exhaustive events (a partition of the sample space, each with P(Eᵢ) > 0) and let A be any event that can happen only with one of the Eᵢ. Then:",
          },
          {
            kind: "table",
            headers: ["Theorem", "Formula", "Meaning"],
            rows: [
              ["Theorem of total probability", "P(A) = Σ P(Eᵢ)·P(A | Eᵢ)", "Overall chance of A: add over all the ways (causes) it can happen."],
              ["Bayes' theorem", "P(Eᵢ | A) = P(Eᵢ)·P(A | Eᵢ) / Σ P(Eⱼ)·P(A | Eⱼ)", "Reverse probability: given that A has happened, the probability that it came from cause Eᵢ. P(Eᵢ) are 'prior' and P(Eᵢ | A) 'posterior' probabilities."],
            ],
          },
          { kind: "diagram", diagramId: "probability-tree", caption: "Fig 3.1 — Probability tree for the factory problem" },
          {
            kind: "callout",
            tone: "example",
            title: "Problem 1 — Three machines",
            text: "Machines A, B and C produce 50 %, 30 % and 20 % of the items of a factory, and 3 %, 4 % and 5 % of their output is defective. An item is chosen at random and found defective. Find the probability that it was produced by each machine.  Total probability: P(D) = 0.5(0.03) + 0.3(0.04) + 0.2(0.05) = 0.015 + 0.012 + 0.010 = 0.037.  Bayes: P(A | D) = 0.015/0.037 = 15/37 ≈ 0.405;  P(B | D) = 0.012/0.037 = 12/37 ≈ 0.324;  P(C | D) = 0.010/0.037 = 10/37 ≈ 0.270.  (The three add up to 1.)",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Problem 2 — A medical test",
            text: "1 % of a population has a disease. A test detects the disease in 95 % of the persons who have it, but also gives a positive result for 5 % of the healthy persons. A person tests positive. What is the probability that he really has the disease?  P(D) = 0.01, P(+ | D) = 0.95, P(D′) = 0.99, P(+ | D′) = 0.05.  P(+) = 0.01(0.95) + 0.99(0.05) = 0.0095 + 0.0495 = 0.059.  P(D | +) = 0.0095/0.059 = 19/118 ≈ 0.161, i.e. only about 16 %. Because the disease is rare, most positive results are false alarms.",
          },
        ],
      },
      {
        id: "prob-problems",
        title: "5. Practice Problems with Answers",
        icon: "Target",
        blocks: [
          {
            kind: "table",
            headers: ["Problem", "Answer"],
            rows: [
              ["Two dice are thrown. P(sum = 7)?", "6/36 = 1/6"],
              ["Two dice are thrown. P(sum ≥ 10)?  (outcomes (4,6), (5,5), (6,4), (5,6), (6,5), (6,6))", "6/36 = 1/6"],
              ["Two dice are thrown. P(at least one six)?  (1 − P(no six) = 1 − 25/36)", "11/36"],
              ["Two dice are thrown. P(doubles)?", "6/36 = 1/6"],
              ["A card is drawn from a pack. P(a face card)? (12 face cards)", "12/52 = 3/13"],
              ["A coin is tossed 3 times. P(exactly two heads)?  (HHT, HTH, THH out of 8)", "3/8"],
              ["A coin is tossed 3 times. P(at least one head)?  (1 − P(TTT))", "7/8"],
              ["A bag has 4 white and 6 black balls. Two balls are drawn without replacement. P(both white)?", "(4/10)(3/9) = 2/15"],
              ["Same bag. P(one white and one black)?", "2·(4/10)(6/9) = 8/15"],
              ["Same bag. P(both black)?", "(6/10)(5/9) = 1/3   (2/15 + 8/15 + 1/3 = 1 ✓)"],
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam Tip",
            text: "Write the sample space size first, then the favourable cases, and state which theorem you use (addition for 'or', multiplication for 'and'; add the phrase 'without replacement' when the second probability changes). For Bayes' problems draw the tree or a table of P(Eᵢ), P(A | Eᵢ) and their product — this scores full marks even if the arithmetic slips.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Sample space", definition: "The set of all possible outcomes of a random experiment." },
      { term: "Event", definition: "A subset of the sample space." },
      { term: "Mutually exclusive events", definition: "Events that cannot occur together." },
      { term: "Independent events", definition: "Events for which P(A ∩ B) = P(A)·P(B)." },
      { term: "Conditional probability", definition: "P(A | B) = P(A ∩ B)/P(B): the probability of A when B is known to have occurred." },
      { term: "Addition theorem", definition: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)." },
      { term: "Bayes' theorem", definition: "Gives the posterior probability P(Eᵢ | A) of a cause after A has been observed." },
    ],
    examQuestions: [
      "Define sample space, event, mutually exclusive and exhaustive events with examples. (Medium)",
      "State the axioms of probability and deduce P(A′) = 1 − P(A) and P(∅) = 0. (Medium)",
      "State and prove the addition theorem of probability. (Long)",
      "State the multiplication theorem. Two cards are drawn without replacement; find the probability that both are aces. (Medium)",
      "What is conditional probability? When are two events independent? (Medium)",
      "State Bayes' theorem. Solve the three-machine (defective items) problem. (Long)",
      "A test detects a disease in 95 % of cases and gives 5 % false positives; the disease affects 1 % of the population. Find P(disease | positive). (Long)",
      "Two dice are thrown; find the probability that the sum is 7, and that the sum is at least 10. (Short)",
      "A bag has 4 white and 6 black balls; two are drawn without replacement. Find P(both white) and P(one of each colour). (Medium)",
    ],
  },
  {
    unitNumber: 4,
    title: "Statistics: Data, Frequency Distributions and Averages",
    hours: 10,
    headings: [
      {
        id: "stat-classification",
        title: "1. Classification of Data",
        icon: "Table",
        blocks: [
          {
            kind: "paragraph",
            text: "Statistics is the science of collecting, classifying, presenting, analysing and interpreting numerical data. Data can be PRIMARY (collected first-hand by the investigator through surveys, experiments, questionnaires) or SECONDARY (taken from published or already collected sources such as the Census or reports). Raw data is a mass of unorganised figures; CLASSIFICATION arranges them into groups according to common characteristics.",
          },
          {
            kind: "table",
            headers: ["Basis of classification", "Meaning", "Example"],
            rows: [
              ["Chronological (time series)", "According to time", "Sales of a firm in the years 2021–2025"],
              ["Geographical (spatial)", "According to place", "Population of the states of India"],
              ["Qualitative (by attribute)", "According to a quality that cannot be measured numerically", "Gender, religion, colour"],
              ["Quantitative (by variable)", "According to a measurable quantity", "Marks, height, income"],
            ],
          },
          {
            kind: "table",
            headers: ["Discrete variable", "Continuous variable"],
            rows: [
              ["Takes only separate (countable) values, usually whole numbers", "Takes any value in an interval, including fractions"],
              ["Number of students in a class; number of defective bulbs", "Height, weight, time, temperature"],
              ["Grouped with single values or ranges", "Always grouped in class intervals"],
            ],
          },
        ],
      },
      {
        id: "stat-tabulation",
        title: "2. Tabulation of Data",
        icon: "FileSpreadsheet",
        blocks: [
          {
            kind: "paragraph",
            text: "Tabulation is the systematic arrangement of classified data in rows and columns so that it is compact, easy to understand and easy to compare. A simple table shows one characteristic; a complex table shows two or more.",
          },
          {
            kind: "table",
            headers: ["Part of a table", "Purpose"],
            rows: [
              ["Table number", "Identification (Table 1, Table 2 ...)"],
              ["Title", "What the table shows: what, where and when"],
              ["Caption", "Headings of the columns"],
              ["Stub", "Headings of the rows (the first column)"],
              ["Body", "The numerical data"],
              ["Head-note", "Units of measurement, e.g. 'Rs. in lakhs'"],
              ["Foot-note and source", "Explanations and the origin of the data"],
            ],
          },
          {
            kind: "table",
            headers: ["Table 1: Sales of a company (Rs. in lakhs)", "2024", "2025", "Total"],
            rows: [
              ["North region", "40", "46", "86"],
              ["South region", "35", "38", "73"],
              ["Total", "75", "84", "159"],
            ],
          },
        ],
      },
      {
        id: "stat-frequency",
        title: "3. Preparation of a Frequency Distribution",
        icon: "LineChart",
        blocks: [
          {
            kind: "paragraph",
            text: "A frequency distribution shows how the observations are spread over classes, together with the number of observations (frequency) in each class.",
          },
          {
            kind: "table",
            headers: ["Term", "Meaning"],
            rows: [
              ["Class interval", "A group of values, e.g. 35–45"],
              ["Class limits", "The smallest and largest values of a class (lower limit, upper limit)"],
              ["Class width (size) h", "Upper limit − lower limit of a class"],
              ["Mid-value (class mark)", "(Lower limit + upper limit)/2"],
              ["Frequency f", "Number of observations in a class; N = Σf"],
              ["Exclusive method", "The upper limit is NOT included in the class (35–45 means 35 ≤ x < 45); used for continuous data"],
              ["Inclusive method", "Both limits are included (35–44 means 35 ≤ x ≤ 44)"],
              ["Cumulative frequency (cf)", "Running total of the frequencies ('less than' type)"],
              ["Relative frequency", "f/N (or as a percentage)"],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Steps: (1) find the range = largest − smallest; (2) decide the number of classes — Sturges' rule k ≈ 1 + 3.322 log₁₀N — usually 5 to 15; (3) class width h ≈ range/k, rounded to a convenient number; (4) write the classes without overlap; (5) go through the data and put a tally mark (/) in the proper class, every fifth tally crossing the four; (6) count the tallies to get the frequencies and add them to check that Σf = N; (7) add a cumulative frequency column if needed.",
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Marks of 30 students (raw data)",
            text: "45, 52, 38, 61, 49, 55, 42, 67, 58, 36, 48, 53, 41, 59, 64, 47, 51, 39, 56, 44, 62, 50, 46, 57, 43, 54, 60, 40, 65, 37.   Smallest = 36, largest = 67, range = 31. Four classes of width 10 (exclusive method) cover the data.",
          },
          {
            kind: "table",
            headers: ["Class (marks)", "Tally", "Frequency f", "Mid-value", "Cumulative frequency"],
            rows: [
              ["35 – 45", "//// ////", "9", "40", "9"],
              ["45 – 55", "//// ////", "10", "50", "19"],
              ["55 – 65", "//// ////", "9", "60", "28"],
              ["65 – 75", "//", "2", "70", "30"],
              ["Total", "", "N = 30", "", ""],
            ],
          },
        ],
      },
      {
        id: "stat-graphs",
        title: "4. Presentation of Data: Histogram, Frequency Polygon and Frequency Curve",
        icon: "TrendingUp",
        blocks: [
          { kind: "diagram", diagramId: "histogram-polygon", caption: "Fig 4.1 — Histogram and frequency polygon of a frequency distribution (N = 50)" },
          {
            kind: "table",
            headers: ["Graph", "How it is drawn", "Remarks"],
            rows: [
              ["Histogram", "Classes on the x-axis (with the exclusive method), frequencies on the y-axis. Draw adjoining rectangles, with no gaps, whose widths are the class widths and heights the frequencies.", "Area of each rectangle ∝ frequency. The mode can be found graphically from the tallest rectangle."],
              ["Frequency polygon", "Plot the mid-value of each class against its frequency and join the points by straight lines. Close the polygon on the x-axis at the mid-values of one empty class before the first and after the last class. (Or join the tops of the rectangles' mid-points.)", "Useful for comparing two distributions on the same axes."],
              ["Frequency curve", "Join the points of the polygon by a smooth freehand curve.", "Shows the general shape (symmetric, skewed, bell-shaped)."],
              ["Ogive (cumulative frequency curve)", "Plot cumulative frequencies against the upper class boundaries (less-than ogive) and join them. The median is read at N/2.", "Also gives quartiles and percentiles."],
            ],
          },
          {
            kind: "paragraph",
            text: "Data of Fig 4.1 (marks of 50 students): 0–10: 5; 10–20: 8; 20–30: 15; 30–40: 16; 40–50: 6. The rectangles have heights 5, 8, 15, 16, 6; the polygon joins the points (5, 5), (15, 8), (25, 15), (35, 16), (45, 6) and is closed at (−5, 0) and (55, 0).",
          },
        ],
      },
      {
        id: "stat-average-ungrouped",
        title: "5. Arithmetic Mean, Median and Mode for Ungrouped Data",
        icon: "Sigma",
        blocks: [
          {
            kind: "table",
            headers: ["Average", "Definition and formula (ungrouped data of n values)"],
            rows: [
              ["Arithmetic mean x̄", "x̄ = Σx / n — the sum of all values divided by their number."],
              ["Median M", "The middle value when the data are arranged in order: the ((n + 1)/2)-th value if n is odd; the mean of the (n/2)-th and (n/2 + 1)-th values if n is even."],
              ["Mode Z", "The value that occurs most frequently (a set may have no mode, or two modes — bimodal)."],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example — nine values",
            text: "Data: 12, 15, 11, 18, 15, 20, 15, 22, 18.   Sum = 146, n = 9, so Mean = 146/9 = 16.22.   Arranged: 11, 12, 15, 15, 15, 18, 18, 20, 22; n is odd so the median is the 5th value = 15.   Mode = 15 (occurs three times).",
          },
          {
            kind: "table",
            headers: ["", "Mean", "Median", "Mode"],
            rows: [
              ["Merits", "Uses every value; easy; basis of further statistics", "Not affected by extreme values; can be found graphically", "Easy to understand; not affected by extremes; works for qualitative data"],
              ["Demerits", "Distorted by extreme values (outliers)", "Does not use all values; not suitable for further algebra", "May not exist or may not be unique"],
              ["Best used for", "Symmetric data", "Skewed data such as incomes", "Most popular size/shoe size/brand"],
            ],
          },
        ],
      },
      {
        id: "stat-average-grouped",
        title: "6. Mean, Median and Mode for Grouped Data",
        icon: "Percent",
        blocks: [
          {
            kind: "table",
            headers: ["Average", "Formula for a frequency distribution (h = class width, N = Σf)"],
            rows: [
              ["Mean — direct method", "x̄ = Σfx / N  (x = mid-value of the class)"],
              ["Mean — assumed mean method", "x̄ = A + Σfd / N, where d = x − A  (A = assumed mean)"],
              ["Mean — step-deviation method", "x̄ = A + (Σfu / N) × h, where u = (x − A)/h"],
              ["Median", "M = L + ((N/2 − cf) / f) × h,  where L = lower limit of the median class (the class in which the N/2-th item lies), cf = cumulative frequency of the class before it, f = frequency of the median class"],
              ["Mode", "Z = L + ((f₁ − f₀) / (2f₁ − f₀ − f₂)) × h,  where L = lower limit of the modal class (highest frequency f₁), f₀ = frequency of the class before it and f₂ = frequency of the class after it"],
              ["Empirical relation", "Mode ≈ 3 Median − 2 Mean (for moderately skewed data)"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example — marks of 50 students",
            text: "Classes 0–10, 10–20, 20–30, 30–40, 40–50 with f = 5, 8, 15, 16, 6 (N = 50) and mid-values x = 5, 15, 25, 35, 45.   MEAN (direct): Σfx = 25 + 120 + 375 + 560 + 270 = 1350, so x̄ = 1350/50 = 27.   Step deviation with A = 25, h = 10: u = −2, −1, 0, 1, 2 and Σfu = −10 − 8 + 0 + 16 + 12 = 10, so x̄ = 25 + (10/50)(10) = 27 ✓.   MEDIAN: cumulative frequencies are 5, 13, 28, 44, 50; N/2 = 25 lies in the class 20–30, so L = 20, cf = 13, f = 15, h = 10: M = 20 + ((25 − 13)/15) × 10 = 20 + 8 = 28.   MODE: the modal class is 30–40 (f₁ = 16, f₀ = 15, f₂ = 6): Z = 30 + ((16 − 15)/(32 − 15 − 6)) × 10 = 30 + 10/11 = 30.91.   Check with the empirical relation: 3(28) − 2(27) = 30 ≈ 30.91 ✓.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Primary / Secondary data", definition: "Data collected first-hand by the investigator / data taken from existing sources." },
      { term: "Tabulation", definition: "The systematic arrangement of data in rows and columns." },
      { term: "Class interval / class width", definition: "A group of values in a frequency table / its upper limit minus lower limit." },
      { term: "Frequency distribution", definition: "A table showing the number of observations in each class." },
      { term: "Histogram", definition: "A graph of adjoining rectangles whose heights are the class frequencies." },
      { term: "Frequency polygon", definition: "A graph made by joining the mid-points of class frequencies by straight lines." },
      { term: "Arithmetic mean", definition: "The sum of the observations divided by their number." },
      { term: "Median", definition: "The middle value of the ordered data." },
      { term: "Mode", definition: "The most frequently occurring value." },
    ],
    examQuestions: [
      "What is classification of data? Explain its types. (Medium)",
      "What is tabulation? Explain the parts of a good table. (Medium)",
      "Explain the steps of preparing a frequency distribution. Prepare one from the 30 marks given (36 to 67). (Long)",
      "Explain histogram, frequency polygon and frequency curve. How are they drawn? (Long)",
      "Find the mean, median and mode of 12, 15, 11, 18, 15, 20, 15, 22, 18. (Medium)",
      "Find the mean, median and mode of the frequency distribution 0–10: 5, 10–20: 8, 20–30: 15, 30–40: 16, 40–50: 6. (Long)",
      "Write the merits and demerits of mean, median and mode. (Medium)",
      "What is the empirical relation between mean, median and mode? (Short)",
    ],
  },
  {
    unitNumber: 5,
    title: "Measures of Dispersion and Correlation",
    hours: 10,
    headings: [
      {
        id: "dispersion-intro",
        title: "1. Measures of Dispersion: Meaning and Range",
        icon: "Waves",
        blocks: [
          {
            kind: "paragraph",
            text: "An average shows the centre of the data but not how the values are scattered around it. Dispersion (variation) is the extent to which the values differ from each other or from their average. Two series can have the same mean but very different scatter — e.g., 40, 50, 60 and 10, 50, 90 both have mean 50. A measure of dispersion is ABSOLUTE if it has the units of the data (range, QD, MD, SD) and RELATIVE (a coefficient) if it is a pure number that allows comparison of series in different units.",
          },
          {
            kind: "table",
            headers: ["Measure", "Formula", "Coefficient (relative measure)"],
            rows: [
              ["Range", "R = L − S (largest − smallest)", "(L − S)/(L + S)"],
              ["Quartile deviation (semi-interquartile range)", "QD = (Q₃ − Q₁)/2", "(Q₃ − Q₁)/(Q₃ + Q₁)"],
              ["Mean deviation about the mean", "MD = Σ|x − x̄|/n  (grouped: Σf|x − x̄|/N)", "MD / x̄"],
              ["Standard deviation", "σ = √(Σ(x − x̄)²/n)  (grouped: √(Σf(x − x̄)²/N))", "Coefficient of variation CV = (σ/x̄) × 100 %"],
              ["Variance", "σ²", "—"],
            ],
          },
        ],
      },
      {
        id: "range-qd-md",
        title: "2. Range, Quartile Deviation and Mean Deviation",
        icon: "MoveHorizontal",
        blocks: [
          {
            kind: "callout",
            tone: "example",
            title: "Range and quartile deviation (ungrouped data)",
            text: "Data: 4, 6, 8, 10, 12, 14, 16, 18 (n = 8, already ordered).   Range = 18 − 4 = 14;  coefficient of range = 14/(18 + 4) = 0.636.   Q₁ is the ((n + 1)/4) = 2.25-th value = 6 + 0.25(8 − 6) = 6.5;  Q₃ is the 3(n + 1)/4 = 6.75-th value = 14 + 0.75(16 − 14) = 15.5.   QD = (15.5 − 6.5)/2 = 4.5;  coefficient of QD = (15.5 − 6.5)/(15.5 + 6.5) = 9/22 = 0.409.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Mean deviation (ungrouped data)",
            text: "Data: 2, 4, 6, 8, 10, mean x̄ = 6.  Deviations |x − 6| = 4, 2, 0, 2, 4, total 12.  MD = 12/5 = 2.4;  coefficient of MD = 2.4/6 = 0.4.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Grouped data (marks of 50 students: classes 0–50, f = 5, 8, 15, 16, 6; mean 27)",
            text: "Quartile deviation: N/4 = 12.5 lies in the class 10–20 (cf before = 5, f = 8): Q₁ = 10 + ((12.5 − 5)/8) × 10 = 19.375.  3N/4 = 37.5 lies in 30–40 (cf before = 28, f = 16): Q₃ = 30 + ((37.5 − 28)/16) × 10 = 35.9375.  QD = (35.9375 − 19.375)/2 = 8.28.   Mean deviation about the mean: Σf|x − 27| = 5(22) + 8(12) + 15(2) + 16(8) + 6(18) = 110 + 96 + 30 + 128 + 108 = 472, so MD = 472/50 = 9.44.",
          },
        ],
      },
      {
        id: "sd-cv",
        title: "3. Standard Deviation, Variance and Coefficient of Variation",
        icon: "Sigma",
        blocks: [
          {
            kind: "paragraph",
            text: "The standard deviation (σ) is the positive square root of the mean of the squared deviations from the mean; σ² is the variance. It is the most important and most widely used measure of dispersion because it uses every value and is suitable for further mathematical treatment. Shortcut formula: σ² = Σx²/n − (x̄)². For a frequency distribution by the step-deviation method: σ = h·√(Σfu²/N − (Σfu/N)²).",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Ungrouped data: 2, 4, 6, 8, 10",
            text: "x̄ = 6; deviations −4, −2, 0, 2, 4; squares 16, 4, 0, 4, 16, total 40.  σ² = 40/5 = 8 and σ = √8 = 2.83.   Shortcut: Σx² = 4 + 16 + 36 + 64 + 100 = 220, σ² = 220/5 − 6² = 44 − 36 = 8 ✓.",
          },
          {
            kind: "table",
            headers: ["Class", "f", "Mid-value x", "d = x − 27", "fd²", "u = (x − 25)/10", "fu", "fu²"],
            rows: [
              ["0 – 10", "5", "5", "−22", "2420", "−2", "−10", "20"],
              ["10 – 20", "8", "15", "−12", "1152", "−1", "−8", "8"],
              ["20 – 30", "15", "25", "−2", "60", "0", "0", "0"],
              ["30 – 40", "16", "35", "8", "1024", "1", "16", "16"],
              ["40 – 50", "6", "45", "18", "1944", "2", "12", "24"],
              ["Total", "50", "", "", "6600", "", "10", "68"],
            ],
          },
          {
            kind: "paragraph",
            text: "Grouped data (from the table): σ² = Σfd²/N = 6600/50 = 132, so σ = √132 = 11.49.  Step-deviation check: σ = 10 × √(68/50 − (10/50)²) = 10 × √(1.36 − 0.04) = 10 × √1.32 = 11.49 ✓.  Coefficient of variation = (11.49/27) × 100 = 42.55 %.",
          },
          {
            kind: "paragraph",
            text: "Coefficient of variation: CV = (σ / x̄) × 100. It measures RELATIVE variation and is used to compare the consistency (or stability) of two series — the series with the SMALLER CV is more consistent. Example: firm A has mean wage 50 and σ = 5, so CV = 10 %; firm B has mean wage 80 and σ = 12, so CV = 15 %. Firm A's wages are more uniform even though B's absolute σ is not much larger. Another check: the series 2, 4, 6, 8, 10 (σ = 2.83, mean 6) and 3, 6, 9, 12, 15 (σ = 4.24, mean 9) both have CV = 47.1 %, so they are equally variable in relative terms.",
          },
          {
            kind: "table",
            headers: ["Property of standard deviation", "Statement"],
            rows: [
              ["Change of origin", "Adding or subtracting a constant to every value does not change σ."],
              ["Change of scale", "Multiplying every value by k multiplies σ by |k|."],
              ["Minimum", "The sum of squared deviations is least when taken about the mean."],
              ["Never negative", "σ ≥ 0; σ = 0 only when all values are equal."],
            ],
          },
        ],
      },
      {
        id: "correlation-intro",
        title: "4. Correlation: Meaning and Types",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "paragraph",
            text: "Correlation studies whether two variables move together and how strongly. If a change in one variable is accompanied by a change in the other, they are correlated (e.g., height and weight, price and demand, marks in two subjects). Correlation shows association, not necessarily cause and effect.",
          },
          { kind: "diagram", diagramId: "correlation-scatter", caption: "Fig 5.1 — Scatter diagrams showing positive, negative and zero correlation" },
          {
            kind: "table",
            headers: ["Type", "Meaning", "Example"],
            rows: [
              ["Positive correlation", "Both variables increase (or decrease) together; 0 < r ≤ 1", "Income and expenditure"],
              ["Negative correlation", "One increases while the other decreases; −1 ≤ r < 0", "Price and demand"],
              ["Zero correlation (no correlation)", "No relation; r = 0", "Shoe size and marks"],
              ["Linear correlation", "The points lie near a straight line", "Distance and time at uniform speed"],
              ["Non-linear (curvilinear)", "The relation is a curve", "Yield and amount of fertiliser (up to a limit)"],
              ["Simple / multiple", "Two variables / more than two variables", "—"],
            ],
          },
          {
            kind: "table",
            headers: ["Value of coefficient r", "Interpretation"],
            rows: [
              ["r = +1 / r = −1", "Perfect positive / perfect negative correlation (points exactly on a line)"],
              ["0.75 ≤ |r| < 1", "High (strong) correlation"],
              ["0.25 ≤ |r| < 0.75", "Moderate correlation"],
              ["0 < |r| < 0.25", "Low (weak) correlation"],
              ["r = 0", "No linear correlation"],
            ],
          },
        ],
      },
      {
        id: "karl-pearson",
        title: "5. Karl Pearson's Coefficient of Correlation",
        icon: "Crosshair",
        blocks: [
          {
            kind: "paragraph",
            text: "Karl Pearson's coefficient measures the degree of LINEAR relationship between two variables X and Y: r = Σ(x − x̄)(y − ȳ) / √( Σ(x − x̄)² · Σ(y − ȳ)² ). Equivalent direct formula: r = (nΣxy − ΣxΣy) / √( (nΣx² − (Σx)²)(nΣy² − (Σy)²) ). Properties: −1 ≤ r ≤ +1; r does not change when a constant is added to (or subtracted from) X or Y, or when they are multiplied by positive constants; r is symmetric (rₓᵧ = rᵧₓ); r = 0 means no LINEAR relation (not necessarily independence).",
          },
          {
            kind: "table",
            headers: ["X", "Y", "dx = X − 16", "dy = Y − 14", "dx·dy", "dx²", "dy²"],
            rows: [
              ["10", "8", "−6", "−6", "36", "36", "36"],
              ["12", "9", "−4", "−5", "20", "16", "25"],
              ["14", "13", "−2", "−1", "2", "4", "1"],
              ["16", "12", "0", "−2", "0", "0", "4"],
              ["18", "17", "2", "3", "6", "4", "9"],
              ["20", "18", "4", "4", "16", "16", "16"],
              ["22", "21", "6", "7", "42", "36", "49"],
              ["Total  (ΣX = 112, ΣY = 98)", "", "", "", "122", "112", "140"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example — 7 pairs of observations",
            text: "n = 7, x̄ = 112/7 = 16, ȳ = 98/7 = 14.  From the table Σdxdy = 122, Σdx² = 112, Σdy² = 140.  r = 122 / √(112 × 140) = 122 / √15680 = 122 / 125.2 = 0.974.  There is a very high positive correlation between X and Y.",
          },
        ],
      },
      {
        id: "spearman",
        title: "6. Spearman's Rank Correlation Coefficient",
        icon: "Award",
        blocks: [
          {
            kind: "paragraph",
            text: "Spearman's rank correlation coefficient is used when the data are ranks (or can be ranked) — for qualitative characteristics such as beauty or honesty, or when actual values are unreliable. Formula: r_s = 1 − 6Σd² / (n(n² − 1)), where d = difference between the two ranks of an item and n = number of items. r_s also lies between −1 and +1. For tied values, give each the average of the ranks they would have taken, and add the correction m(m² − 1)/12 to Σd² for every group of m tied values.",
          },
          {
            kind: "table",
            headers: ["Student", "Marks in Test 1", "Marks in Test 2", "Rank R₁", "Rank R₂", "d = R₁ − R₂", "d²"],
            rows: [
              ["A", "85", "93", "2", "1", "1", "1"],
              ["B", "60", "75", "4", "3", "1", "1"],
              ["C", "73", "65", "3", "4", "−1", "1"],
              ["D", "40", "50", "5", "5", "0", "0"],
              ["E", "90", "80", "1", "2", "−1", "1"],
              ["Total", "", "", "", "", "", "Σd² = 4"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Rank correlation of the two test scores",
            text: "n = 5 and Σd² = 4, so r_s = 1 − (6 × 4)/(5 × (25 − 1)) = 1 − 24/120 = 0.8. The two rankings show a high positive agreement.  (Ranks are given in descending order of marks: the highest marks get rank 1.)",
          },
          {
            kind: "table",
            headers: ["Karl Pearson's r", "Spearman's r_s"],
            rows: [
              ["Uses actual values of the variables", "Uses only ranks"],
              ["Measures linear relationship", "Measures the agreement of orders; also monotonic non-linear relations"],
              ["Assumes (roughly) normal data; affected by extreme values", "No assumption; not affected much by extremes"],
              ["More laborious for large n", "Simple for small n"],
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam Tip",
            text: "Numerical questions on this unit are 'numerical applications only' — write the formula, make a neat table with every column (x, x − x̄, (x − x̄)², or ranks and d²), show the totals, substitute, and end with a one-line interpretation (for example 'high positive correlation' or 'series A is more consistent'). Never skip the check that Σ(x − x̄) = 0 or that the ranks add up to n(n + 1)/2.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Dispersion", definition: "The extent to which the values of a series are scattered about their average." },
      { term: "Range", definition: "Largest value minus the smallest value." },
      { term: "Quartile deviation", definition: "Half of the difference between the third and first quartiles." },
      { term: "Mean deviation", definition: "The average of the absolute deviations from the mean (or median)." },
      { term: "Standard deviation", definition: "The square root of the mean of the squared deviations from the mean." },
      { term: "Coefficient of variation", definition: "(σ / mean) × 100; a relative measure used to compare consistency." },
      { term: "Correlation", definition: "The degree of association between two variables." },
      { term: "Karl Pearson's r", definition: "The measure of linear correlation, −1 ≤ r ≤ +1." },
      { term: "Rank correlation", definition: "Spearman's coefficient r_s = 1 − 6Σd²/(n(n² − 1))." },
    ],
    examQuestions: [
      "What is dispersion? Explain the absolute and relative measures of dispersion. (Medium)",
      "Calculate the range, quartile deviation and their coefficients for 4, 6, 8, 10, 12, 14, 16, 18. (Medium)",
      "Calculate the mean deviation and standard deviation of 2, 4, 6, 8, 10. (Medium)",
      "Calculate the standard deviation and coefficient of variation of the distribution 0–10: 5, 10–20: 8, 20–30: 15, 30–40: 16, 40–50: 6. (Long)",
      "What is the coefficient of variation? Two firms have mean wages 50 and 80 and standard deviations 5 and 12; which is more consistent? (Medium)",
      "What is correlation? Explain its types with scatter diagrams. (Long)",
      "Write the properties of Karl Pearson's coefficient of correlation. (Short)",
      "Find the correlation coefficient between X = 10, 12, 14, 16, 18, 20, 22 and Y = 8, 9, 13, 12, 17, 18, 21. (Long)",
      "Explain Spearman's rank correlation. Find it for the scores A: 85, 60, 73, 40, 90 and B: 93, 75, 65, 50, 80. (Long)",
      "Differentiate between Karl Pearson's and Spearman's coefficients. (Short)",
    ],
  },
];
