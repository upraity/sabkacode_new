import { UnitNote } from "@/types";

export const BcaDesignAndAnalysisOfAlgorithmDbrauUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Basic Concepts of Algorithms and Complexity Analysis",
    hours: 8,
    headings: [
      {
        id: "algorithm-definition",
        title: "1. Definition and Characteristics of an Algorithm",
        icon: "BookOpen",
        blocks: [
          { kind: "paragraph", text: "An algorithm is a finite, ordered sequence of unambiguous steps used to solve a problem or perform a computation. A good algorithm accepts appropriate input, produces the required output, terminates after a finite number of steps and has clearly defined operations." },
          { kind: "table", headers: ["Characteristic", "Explanation"], rows: [
            ["Input", "An algorithm may receive zero or more clearly specified inputs."],
            ["Output", "It should produce one or more clearly specified results."],
            ["Definiteness", "Every step should be precise and unambiguous."],
            ["Finiteness", "The process must terminate after a finite number of steps."],
            ["Effectiveness", "Each operation should be sufficiently basic and executable."],
            ["Correctness", "For valid inputs, the algorithm should produce the required result."]
          ]},
          { kind: "callout", tone: "example", title: "Example: Finding the larger of two numbers", text: "Read A and B. Compare A and B. If A is greater than B, report A; otherwise report B. This illustrates input, comparison, decision and output in a finite sequence." },
          { kind: "diagram", diagramId: "bca-c505-algorithm-flow", caption: "Basic input-process-output view of an algorithm." }
        ]
      },
      {
        id: "complexity",
        title: "2. Complexity of Algorithms",
        icon: "Gauge",
        blocks: [
          { kind: "paragraph", text: "Algorithm complexity describes the resources required as the input size grows. The syllabus emphasizes time complexity and asymptotic analysis. Time complexity estimates the growth of the number of elementary operations, while space complexity describes memory requirements." },
          { kind: "table", headers: ["Complexity", "Typical interpretation"], rows: [
            ["O(1)", "Constant growth; independent of input size in the asymptotic sense."],
            ["O(log n)", "Logarithmic growth; common in repeated halving."],
            ["O(n)", "Linear growth; work grows approximately in proportion to n."],
            ["O(n log n)", "Common for efficient comparison sorting algorithms."],
            ["O(n²)", "Quadratic growth; common for simple nested-loop algorithms."],
            ["O(2ⁿ)", "Exponential growth; becomes expensive rapidly as n increases."]
          ]},
          { kind: "callout", tone: "example", title: "Example", text: "A single loop that visits n elements once performs work proportional to n, so its asymptotic time complexity is O(n). Two independent nested loops each running n times generally give O(n²)." }
        ]
      },
      {
        id: "analysis-techniques",
        title: "3. Analysis Techniques",
        icon: "Search",
        blocks: [
          { kind: "paragraph", text: "Algorithm analysis can be performed by counting basic operations, identifying loops and recursive calls, writing a recurrence for recursive algorithms and simplifying the resulting growth expression. The aim is to understand how running time changes with input size rather than measuring only one machine's execution time." },
          { kind: "table", headers: ["Technique", "Use"], rows: [
            ["Frequency counting", "Count how often a dominant operation executes."],
            ["Loop analysis", "Determine iterations of loops and nested loops."],
            ["Recurrence analysis", "Model the cost of recursive divide-and-conquer algorithms."],
            ["Asymptotic simplification", "Retain the dominant growth term for large n."]
          ]}
        ]
      },
      {
        id: "asymptotic",
        title: "4. Asymptotic Notations and Growth of Functions",
        icon: "TrendingUp",
        blocks: [
          { kind: "paragraph", text: "Asymptotic notation describes the growth rate of a function for large input sizes. Big-O provides an asymptotic upper bound, Big-Omega provides an asymptotic lower bound, and Big-Theta describes a tight asymptotic bound when both upper and lower bounds match." },
          { kind: "table", headers: ["Notation", "Meaning"], rows: [
            ["O(g(n))", "Asymptotic upper bound: f(n) does not grow faster than a constant multiple of g(n) beyond a suitable point."],
            ["Ω(g(n))", "Asymptotic lower bound: f(n) grows at least as fast as a constant multiple of g(n) beyond a suitable point."],
            ["Θ(g(n))", "Tight asymptotic bound: f(n) is bounded above and below by constant multiples of g(n)."]
          ]},
          { kind: "diagram", diagramId: "bca-c505-growth-functions", caption: "Conceptual comparison of common growth rates." },
          { kind: "callout", tone: "example", title: "Example", text: "For f(n) = 3n² + 5n + 7, the n² term dominates for large n. Therefore f(n) is Θ(n²), and consequently it is also O(n²) and Ω(n²)." }
        ]
      },
      {
        id: "master-theorem",
        title: "5. Master Theorem",
        icon: "GitMerge",
        blocks: [
          { kind: "paragraph", text: "The Master Theorem is a standard method for solving many divide-and-conquer recurrences of the form T(n) = aT(n/b) + f(n), where a represents the number of recursive subproblems, n/b is the reduced problem size and f(n) is the non-recursive work." },
          { kind: "table", headers: ["Case", "Condition", "Result pattern"], rows: [
            ["Case 1", "f(n) grows polynomially slower than n^(log_b a)", "T(n) is Θ(n^(log_b a))."],
            ["Case 2", "f(n) matches n^(log_b a) up to logarithmic factors", "T(n) includes an additional logarithmic factor."],
            ["Case 3", "f(n) grows polynomially faster than n^(log_b a), with the required regularity condition", "T(n) is Θ(f(n))."]
          ]},
          { kind: "callout", tone: "example", title: "Example: Merge Sort", text: "Merge Sort satisfies T(n) = 2T(n/2) + Θ(n). Here a = 2, b = 2 and f(n) = Θ(n), which matches n^(log₂2) = n. The result is Θ(n log n)." },
          { kind: "diagram", diagramId: "bca-c505-master-theorem", caption: "Divide-and-conquer recurrence structure used by the Master Theorem." }
        ]
      },
      {
        id: "substitution",
        title: "6. Substitution Method",
        icon: "Replace",
        blocks: [
          { kind: "paragraph", text: "The substitution method solves a recurrence by first guessing a suitable asymptotic bound and then proving the guess by substitution and induction. It is useful when the recurrence does not fit a convenient direct Master Theorem case or when a rigorous proof of a guessed bound is required." },
          { kind: "callout", tone: "example", title: "Example approach", text: "For a recurrence such as T(n) = 2T(n/2) + n, one may guess T(n) = O(n log n), substitute the induction hypothesis for T(n/2), simplify the expression and choose constants so the bound is established." }
        ]
      },
      {
        id: "iteration",
        title: "7. Iteration Method",
        icon: "Repeat",
        blocks: [
          { kind: "paragraph", text: "The iteration method repeatedly expands a recurrence until reaching the base case. The resulting pattern is then summed to obtain the asymptotic bound. It is also called repeated substitution in many algorithm-analysis contexts, but the syllabus separately lists substitution and iteration, so exam answers should describe iteration as repeated expansion followed by summation." },
          { kind: "callout", tone: "example", title: "Example", text: "For T(n) = T(n/2) + 1, repeated expansion gives T(n) = T(n/4) + 2 = ... = T(1) + log₂n, so the running time is Θ(log n)." },
          { kind: "diagram", diagramId: "bca-c505-recurrence-expansion", caption: "Repeated expansion of a recurrence until the base case." }
        ]
      }
    ],
    keyTerms: [
      { term: "Algorithm", definition: "Finite sequence of precise steps used to solve a problem." },
      { term: "Time Complexity", definition: "Asymptotic measure of computational work as input size grows." },
      { term: "Space Complexity", definition: "Amount of memory required by an algorithm as input size grows." },
      { term: "Big-O", definition: "Asymptotic upper-bound notation." },
      { term: "Big-Omega", definition: "Asymptotic lower-bound notation." },
      { term: "Big-Theta", definition: "Tight asymptotic bound." },
      { term: "Recurrence", definition: "Equation that expresses the cost of a recursive algorithm in terms of smaller inputs." },
      { term: "Master Theorem", definition: "Method for solving many divide-and-conquer recurrences of the form T(n)=aT(n/b)+f(n)." },
      { term: "Substitution Method", definition: "Method that guesses a bound and proves it by substitution, commonly with induction." },
      { term: "Iteration Method", definition: "Method that repeatedly expands a recurrence and sums the resulting work." }
    ],
    examQuestions: [
      "Define an algorithm and explain its characteristics with an example. (Long)",
      "Explain time complexity and space complexity. (Medium)",
      "Explain Big-O, Big-Omega and Big-Theta notation with examples. (Long)",
      "Explain the Master Theorem and its cases. (Long)",
      "Solve a divide-and-conquer recurrence using the substitution method. (Long)",
      "Explain the iteration method with a recurrence example. (Long)",
      "Compare common growth functions such as log n, n, n log n and n². (Medium)"
    ]
  },
  {
    unitNumber: 2,
    title: "Sorting and Divide-and-Conquer Algorithms",
    hours: 8,
    headings: [
      {
        id: "divide-conquer",
        title: "1. Divide-and-Conquer Approach",
        icon: "GitBranch",
        blocks: [
          { kind: "paragraph", text: "Divide-and-conquer solves a problem by dividing it into smaller subproblems, solving the subproblems recursively and combining their results. The three standard stages are divide, conquer and combine." },
          { kind: "diagram", diagramId: "bca-c505-divide-conquer", caption: "Divide, conquer and combine stages." },
          { kind: "callout", tone: "example", title: "Example", text: "Merge Sort divides an array into two halves, recursively sorts both halves and then combines them by merging the sorted halves." }
        ]
      },
      {
        id: "max-min",
        title: "2. Maximum and Minimum Using Divide-and-Conquer",
        icon: "ArrowUpDown",
        blocks: [
          { kind: "paragraph", text: "The maximum and minimum elements of an array can be found using divide-and-conquer by dividing the array into two parts, recursively finding the maximum and minimum of each part and then comparing the two local maxima and two local minima." },
          { kind: "table", headers: ["Step", "Operation"], rows: [
            ["Divide", "Split the array into two subarrays."],
            ["Conquer", "Find maximum and minimum recursively in each subarray."],
            ["Combine", "Compare the two maxima and the two minima."],
            ["Base case", "For one element, that element is both maximum and minimum."]
          ]},
          { kind: "callout", tone: "example", title: "Example", text: "For [8, 3, 12, 5], divide into [8,3] and [12,5]. Their maxima are 8 and 12, so the overall maximum is 12; their minima are 3 and 5, so the overall minimum is 3." }
        ]
      },
      {
        id: "merge-sort",
        title: "3. Merge Sort",
        icon: "GitMerge",
        blocks: [
          { kind: "paragraph", text: "Merge Sort is a divide-and-conquer sorting algorithm. It recursively divides the array until subarrays contain one element, then merges sorted subarrays. The merge operation takes linear time for a subproblem, giving an overall time complexity of Θ(n log n)." },
          { kind: "diagram", diagramId: "bca-c505-merge-sort", caption: "Merge Sort recursively divides and then merges sorted halves." },
          { kind: "table", headers: ["Property", "Merge Sort"], rows: [
            ["Best time", "Θ(n log n)"],
            ["Average time", "Θ(n log n)"],
            ["Worst time", "Θ(n log n)"],
            ["Main idea", "Divide into halves and merge sorted halves."],
            ["Extra space", "Typically O(n) for the standard array implementation."]
          ]},
          { kind: "callout", tone: "example", title: "Example", text: "To sort [8, 3, 2, 9], split into [8,3] and [2,9], sort them as [3,8] and [2,9], then merge to obtain [2,3,8,9]." }
        ]
      },
      {
        id: "quick-sort",
        title: "4. Quick Sort",
        icon: "Zap",
        blocks: [
          { kind: "paragraph", text: "Quick Sort is a divide-and-conquer sorting algorithm based on partitioning around a pivot. After partitioning, elements are arranged into portions on either side of the pivot according to the partition rule, and the portions are sorted recursively." },
          { kind: "diagram", diagramId: "bca-c505-quick-sort", caption: "Pivot-based partitioning in Quick Sort." },
          { kind: "table", headers: ["Case", "Time complexity"], rows: [
            ["Best", "Θ(n log n)"],
            ["Average", "Θ(n log n)"],
            ["Worst", "Θ(n²), for unfavorable partitioning such as repeatedly choosing an extreme pivot." ]
          ]},
          { kind: "callout", tone: "example", title: "Example", text: "For [7, 2, 9, 4, 3], if 4 is selected as a pivot, the partitioning process separates smaller and larger elements around the pivot. The resulting parts are then recursively sorted." }
        ]
      },
      {
        id: "heap-sort",
        title: "5. Heap Sort",
        icon: "Layers",
        blocks: [
          { kind: "paragraph", text: "Heap Sort uses a binary heap. For ascending order, a max-heap is commonly used: the largest element is placed at the root, exchanged with the last unsorted element and the heap is restored. Repeating this produces a sorted array." },
          { kind: "diagram", diagramId: "bca-c505-heap-sort", caption: "Max-heap structure and repeated extraction of the maximum." },
          { kind: "table", headers: ["Property", "Heap Sort"], rows: [
            ["Best time", "Θ(n log n)"],
            ["Average time", "Θ(n log n)"],
            ["Worst time", "Θ(n log n)"],
            ["Main structure", "Binary heap."],
            ["Typical extra array space", "O(1) apart from implementation details."]
          ]}
        ]
      },
      {
        id: "sorting-comparison",
        title: "6. Comparison of Sorting Algorithms",
        icon: "Table2",
        blocks: [
          { kind: "table", headers: ["Algorithm", "Best", "Average", "Worst", "Main idea"], rows: [
            ["Merge Sort", "Θ(n log n)", "Θ(n log n)", "Θ(n log n)", "Divide and merge"],
            ["Quick Sort", "Θ(n log n)", "Θ(n log n)", "Θ(n²)", "Pivot and partition"],
            ["Heap Sort", "Θ(n log n)", "Θ(n log n)", "Θ(n log n)", "Heap and extraction"]
          ]},
          { kind: "callout", tone: "info", title: "Exam point", text: "When asked for sorting time complexity, clearly state best, average and worst cases and briefly identify the core operation that determines the complexity." }
        ]
      }
    ],
    keyTerms: [
      { term: "Divide-and-Conquer", definition: "Strategy that divides a problem, solves smaller subproblems and combines their results." },
      { term: "Merge Sort", definition: "Divide-and-conquer sorting algorithm based on recursively sorting halves and merging them." },
      { term: "Quick Sort", definition: "Sorting algorithm that partitions around a pivot and recursively sorts the resulting parts." },
      { term: "Pivot", definition: "Element selected as the reference for partitioning in Quick Sort." },
      { term: "Heap", definition: "Complete-tree-based data structure satisfying a heap-order property." },
      { term: "Heap Sort", definition: "Sorting algorithm that builds a heap and repeatedly extracts the root element." },
      { term: "Partition", definition: "Process of rearranging data around a pivot according to a partition rule." },
      { term: "Recursion", definition: "A technique in which a procedure or algorithm calls itself on smaller instances." }
    ],
    examQuestions: [
      "Explain the divide-and-conquer approach with an example. (Long)",
      "Explain maximum and minimum finding using divide-and-conquer. (Medium)",
      "Explain Merge Sort with algorithm, example and time complexity. (Long)",
      "Explain Quick Sort, partitioning and its best/average/worst complexities. (Long)",
      "Explain Heap Sort with heap construction and complexity. (Long)",
      "Compare Merge Sort, Quick Sort and Heap Sort. (Long)"
    ]
  },
  {
    unitNumber: 3,
    title: "Greedy Method, Dynamic Programming and Backtracking",
    hours: 8,
    headings: [
      {
        id: "greedy-method",
        title: "1. Greedy Method — General Method",
        icon: "Target",
        blocks: [
          { kind: "paragraph", text: "The greedy method constructs a solution step by step by making a locally best choice at each stage. A greedy algorithm is correct only for problems where the chosen local decisions can be shown to lead to a globally optimal solution. Greedy solutions generally use a selection rule, feasibility test and solution update." },
          { kind: "diagram", diagramId: "bca-c505-greedy-method", caption: "General greedy construction process." },
          { kind: "callout", tone: "example", title: "Example idea", text: "In a fractional knapsack problem, repeatedly choose an available item with the highest value-to-weight ratio while capacity remains. Fractions of an item are allowed, which makes the greedy strategy applicable." }
        ]
      },
      {
        id: "knapsack",
        title: "2. Knapsack Problem",
        icon: "BriefcaseBusiness",
        blocks: [
          { kind: "paragraph", text: "The knapsack problem selects items subject to a capacity constraint. In the fractional version, an item may be divided, so a greedy ratio strategy can produce an optimal solution. The 0/1 version does not generally permit arbitrary fractions and is commonly treated with dynamic programming or other methods rather than the simple fractional greedy rule." },
          { kind: "table", headers: ["Version", "Item selection"], rows: [
            ["Fractional knapsack", "Fractions of items may be selected; greedy value/weight ratio is applicable."],
            ["0/1 knapsack", "Each item is either selected completely or not selected; fractional selection is not allowed."]
          ]},
          { kind: "callout", tone: "example", title: "Example", text: "If capacity is 50 and items have value/weight ratios 6, 5 and 4, a fractional-knapsack greedy strategy considers the ratio-6 item first, then ratio-5, then ratio-4 as capacity permits." }
        ]
      },
      {
        id: "huffman",
        title: "3. Huffman Codes",
        icon: "Binary",
        blocks: [
          { kind: "paragraph", text: "Huffman coding is a greedy technique for constructing a prefix code. At each step, the two symbols or subtrees with the smallest frequencies are combined. Repeating this process creates a binary tree from which shorter codes are assigned to more frequent symbols in the usual Huffman construction." },
          { kind: "diagram", diagramId: "bca-c505-huffman-tree", caption: "Conceptual Huffman tree construction by repeatedly combining the two least-frequency nodes." },
          { kind: "callout", tone: "example", title: "Example", text: "For frequencies such as A:5, B:9, C:12 and D:13, repeatedly combine the two smallest frequencies to build the tree. The resulting root-to-leaf paths form prefix-free binary codes." }
        ]
      },
      {
        id: "dynamic-programming",
        title: "4. Dynamic Programming — General Method",
        icon: "Network",
        blocks: [
          { kind: "paragraph", text: "Dynamic programming solves problems with overlapping subproblems and optimal substructure by storing results of smaller subproblems so they do not need to be recomputed. It can be implemented top-down with memoization or bottom-up with a table." },
          { kind: "table", headers: ["Concept", "Meaning"], rows: [
            ["Optimal substructure", "An optimal solution can be constructed from optimal solutions to relevant subproblems."],
            ["Overlapping subproblems", "The same smaller problems occur repeatedly."],
            ["Memoization", "Top-down storage of already computed results."],
            ["Tabulation", "Bottom-up computation and storage in a table."]
          ]}
        ]
      },
      {
        id: "matrix-chain",
        title: "5. Matrix Chain Multiplication",
        icon: "Grid3X3",
        blocks: [
          { kind: "paragraph", text: "Matrix Chain Multiplication determines the parenthesization of a sequence of matrices that minimizes the number of scalar multiplications. The order of matrix multiplication affects cost even though the final mathematical product is the same." },
          { kind: "diagram", diagramId: "bca-c505-matrix-chain", caption: "Different parenthesizations of a matrix chain can have different multiplication costs." },
          { kind: "callout", tone: "example", title: "Example", text: "For A(10×30), B(30×5) and C(5×60), computing (AB)C costs 10×30×5 plus 10×5×60, while A(BC) has a different cost. Dynamic programming chooses the cheaper parenthesization." }
        ]
      },
      {
        id: "lcs",
        title: "6. Longest Common Subsequence (LCS)",
        icon: "GitCompare",
        blocks: [
          { kind: "paragraph", text: "The Longest Common Subsequence problem finds the longest sequence that appears in two sequences in the same relative order, not necessarily contiguously. Dynamic programming builds a table based on prefixes of the two input sequences." },
          { kind: "diagram", diagramId: "bca-c505-lcs-table", caption: "Conceptual LCS dynamic-programming table." },
          { kind: "callout", tone: "example", title: "Example", text: "For sequences ABCD and AEBD, one common subsequence is ABD. The dynamic-programming table helps determine the longest such subsequence rather than checking every subsequence independently." }
        ]
      },
      {
        id: "backtracking",
        title: "7. Backtracking — General Method",
        icon: "Undo2",
        blocks: [
          { kind: "paragraph", text: "Backtracking constructs a solution incrementally and abandons a partial solution as soon as it cannot lead to a valid complete solution. It systematically explores a state-space tree while pruning infeasible branches." },
          { kind: "diagram", diagramId: "bca-c505-backtracking-tree", caption: "State-space exploration and pruning in backtracking." }
        ]
      },
      {
        id: "n-queens",
        title: "8. N-Queens Problem",
        icon: "Crown",
        blocks: [
          { kind: "paragraph", text: "The N-Queens problem asks for placement of N queens on an N×N chessboard so that no two queens attack each other. A backtracking solution places a queen row by row, checks whether the new position is safe and backtracks when no safe continuation exists." },
          { kind: "diagram", diagramId: "bca-c505-nqueens", caption: "Conceptual safe-placement checks for the N-Queens problem." },
          { kind: "callout", tone: "example", title: "Example", text: "For 4-Queens, place one queen in the first row, then try safe columns in subsequent rows. If a later row has no safe column, remove the previous queen and try its next possible column." }
        ]
      },
      {
        id: "sum-subsets",
        title: "9. Sum of Subsets",
        icon: "Sigma",
        blocks: [
          { kind: "paragraph", text: "The Sum of Subsets problem seeks a subset of given numbers whose sum equals a specified target. Backtracking explores the include/exclude decision for each number and can prune a branch when the partial sum cannot lead to the target under the chosen conditions." },
          { kind: "callout", tone: "example", title: "Example", text: "For set {3, 5, 7, 10} and target 15, the subset {5, 10} is a solution. A backtracking tree can explore include/exclude choices and discard branches that cannot reach 15." }
        ]
      }
    ],
    keyTerms: [
      { term: "Greedy Method", definition: "Strategy that repeatedly chooses a locally best feasible option." },
      { term: "Fractional Knapsack", definition: "Knapsack variant in which fractions of items may be selected." },
      { term: "Huffman Coding", definition: "Greedy method for constructing a prefix code by repeatedly combining the two least-frequency nodes." },
      { term: "Dynamic Programming", definition: "Optimization technique that stores solutions of overlapping subproblems." },
      { term: "Memoization", definition: "Top-down dynamic-programming technique that stores previously computed results." },
      { term: "Tabulation", definition: "Bottom-up dynamic-programming technique using a table." },
      { term: "Matrix Chain Multiplication", definition: "Problem of choosing matrix parenthesization that minimizes scalar multiplication cost." },
      { term: "LCS", definition: "Longest Common Subsequence problem for two sequences." },
      { term: "Backtracking", definition: "Systematic search that abandons partial solutions when they cannot lead to valid solutions." },
      { term: "N-Queens", definition: "Problem of placing N queens so that no two attack each other." },
      { term: "Sum of Subsets", definition: "Problem of finding a subset whose elements sum to a specified target." }
    ],
    examQuestions: [
      "Explain the greedy method and its general strategy. (Long)",
      "Explain fractional knapsack using the greedy method. (Long)",
      "Explain Huffman coding with an example. (Long)",
      "Explain dynamic programming and its characteristics. (Long)",
      "Explain Matrix Chain Multiplication using dynamic programming. (Long)",
      "Explain LCS and its dynamic-programming approach. (Long)",
      "Explain backtracking with a state-space tree. (Medium)",
      "Solve or explain the N-Queens problem using backtracking. (Long)",
      "Explain the Sum of Subsets problem using backtracking. (Medium)"
    ]
  },
  {
    unitNumber: 4,
    title: "Analysis of Graph Algorithms",
    hours: 8,
    headings: [
      {
        id: "elementary-graphs",
        title: "1. Elementary Graph Algorithms",
        icon: "Share2",
        blocks: [
          { kind: "paragraph", text: "A graph consists of vertices and edges representing relationships between objects. Graph algorithms operate on this structure for tasks such as traversal, connectivity, shortest paths and spanning trees. Graphs may be directed or undirected and may be weighted or unweighted." },
          { kind: "table", headers: ["Term", "Meaning"], rows: [
            ["Vertex", "Node representing an object or state."],
            ["Edge", "Connection between two vertices."],
            ["Degree", "Number of incident edges for a vertex in an undirected graph."],
            ["Path", "Sequence of vertices connected by edges."],
            ["Cycle", "Path that returns to its starting vertex."],
            ["Weighted graph", "Graph whose edges carry weights or costs."]
          ]},
          { kind: "diagram", diagramId: "bca-c505-basic-graph", caption: "Basic graph with vertices and edges." }
        ]
      },
      {
        id: "multistage-graphs",
        title: "2. Multistage Graphs",
        icon: "Workflow",
        blocks: [
          { kind: "paragraph", text: "A multistage graph is a directed graph whose vertices are divided into stages, with edges progressing according to the stage structure. Dynamic programming can be used to determine an optimal path by solving from later stages toward the source." },
          { kind: "diagram", diagramId: "bca-c505-multistage-graph", caption: "Conceptual staged directed graph used for shortest/optimal path analysis." }
        ]
      },
      {
        id: "bfs",
        title: "3. Breadth-First Search (BFS)",
        icon: "Layers3",
        blocks: [
          { kind: "paragraph", text: "Breadth-First Search explores a graph level by level from a starting vertex. A queue is typically used to store vertices whose neighbors are yet to be processed. In an unweighted graph, BFS can find shortest paths in terms of number of edges from the source." },
          { kind: "diagram", diagramId: "bca-c505-bfs", caption: "BFS visits vertices level by level." },
          { kind: "callout", tone: "example", title: "Example", text: "Starting at A, first visit A's unvisited neighbors. Then process those neighbors and visit their unvisited neighbors. The queue maintains the frontier of the search." }
        ]
      },
      {
        id: "dfs",
        title: "4. Depth-First Search (DFS)",
        icon: "Route",
        blocks: [
          { kind: "paragraph", text: "Depth-First Search explores as far as possible along one branch before backtracking. It can be implemented recursively or with an explicit stack. DFS is useful for connectivity, cycle-related analysis and many graph-structure problems." },
          { kind: "diagram", diagramId: "bca-c505-dfs", caption: "DFS follows a branch deeply before backtracking." }
        ]
      },
      {
        id: "spanning-tree",
        title: "5. Spanning Trees",
        icon: "Network",
        blocks: [
          { kind: "paragraph", text: "A spanning tree of a connected undirected graph is a subgraph that contains all vertices and is a tree. A tree with V vertices has V−1 edges. A minimum spanning tree (MST) is a spanning tree of a weighted connected graph having minimum total edge weight." },
          { kind: "callout", tone: "example", title: "Example", text: "If a connected graph has 5 vertices, any spanning tree contains exactly 4 edges. Different spanning trees can have different total weights; the minimum one is the MST." },
          { kind: "diagram", diagramId: "bca-c505-spanning-tree", caption: "A graph and one possible spanning tree." }
        ]
      },
      {
        id: "kruskal",
        title: "6. Kruskal's Algorithm",
        icon: "GitBranch",
        blocks: [
          { kind: "paragraph", text: "Kruskal's algorithm constructs an MST by sorting edges by nondecreasing weight and repeatedly adding the next lightest edge if it does not create a cycle. A disjoint-set/union-find structure is commonly used to detect whether adding an edge would connect vertices already in the same component." },
          { kind: "diagram", diagramId: "bca-c505-kruskal", caption: "Kruskal's edge-selection process for an MST." },
          { kind: "callout", tone: "example", title: "Example", text: "Sort all edges by weight. Consider them from smallest to largest. Add an edge if it joins two different components; skip it if it would create a cycle. Continue until V−1 edges have been selected." }
        ]
      },
      {
        id: "prim",
        title: "7. Prim's Algorithm",
        icon: "Plus",
        blocks: [
          { kind: "paragraph", text: "Prim's algorithm grows an MST from a starting vertex. At each step, it chooses the minimum-weight edge connecting a vertex already in the tree to a vertex outside the tree. The process continues until all vertices are included." },
          { kind: "diagram", diagramId: "bca-c505-prim", caption: "Prim's algorithm grows the spanning tree from a starting vertex." },
          { kind: "table", headers: ["Kruskal", "Prim"], rows: [
            ["Considers globally sorted edges.", "Grows one tree from a starting vertex."],
            ["Adds an edge when it does not create a cycle.", "Adds the lightest edge crossing from the current tree to an outside vertex."],
            ["Naturally handles multiple components during the process, yielding a forest if the graph is disconnected.", "Standard MST form assumes a connected graph for one spanning tree."]
          ]}
        ]
      },
      {
        id: "dijkstra",
        title: "8. Single-Source Shortest Path — Dijkstra's Algorithm",
        icon: "Map",
        blocks: [
          { kind: "paragraph", text: "Dijkstra's algorithm finds shortest-path distances from a single source in a graph with non-negative edge weights. It repeatedly selects the unsettled vertex with the smallest tentative distance and relaxes its outgoing edges." },
          { kind: "diagram", diagramId: "bca-c505-dijkstra", caption: "Dijkstra's shortest-path relaxation process." },
          { kind: "callout", tone: "info", title: "Important", text: "The standard Dijkstra method requires non-negative edge weights. Graphs containing negative-weight edges require a different approach." }
        ]
      },
      {
        id: "bellman-ford",
        title: "9. Bellman-Ford Algorithm",
        icon: "ArrowLeftRight",
        blocks: [
          { kind: "paragraph", text: "Bellman-Ford also solves the single-source shortest-path problem and can handle negative edge weights. It repeatedly relaxes all edges and can detect a reachable negative-weight cycle when an improvement remains possible after the expected number of relaxation rounds." },
          { kind: "diagram", diagramId: "bca-c505-bellman-ford", caption: "Repeated edge relaxation in Bellman-Ford." }
        ]
      },
      {
        id: "warshall",
        title: "10. All-Pairs Shortest Path — Warshall/Floyd-Warshall Context",
        icon: "Grid2X2",
        blocks: [
          { kind: "paragraph", text: "The syllabus lists an all-pairs shortest-path topic under the graph algorithms unit. The standard dynamic-programming formulation commonly associated with this topic is Floyd-Warshall for shortest paths, while Warshall's algorithm is classically associated with transitive closure. In an exam, follow the terminology used by the course material or teacher when distinguishing the two." },
          { kind: "callout", tone: "example", title: "Dynamic-programming idea", text: "Floyd-Warshall considers whether allowing an intermediate vertex k improves the current shortest distance from i to j. The distance table is updated for successive intermediate-vertex sets." },
          { kind: "table", headers: ["Problem", "Typical algorithm"], rows: [
            ["Single source, non-negative weights", "Dijkstra"],
            ["Single source, possible negative edges", "Bellman-Ford"],
            ["All pairs shortest paths", "Floyd-Warshall dynamic programming"],
            ["Transitive closure", "Warshall's algorithm"]
          ]}
        ]
      }
    ],
    keyTerms: [
      { term: "Graph", definition: "Structure consisting of vertices and edges." },
      { term: "Vertex", definition: "Node in a graph." },
      { term: "Edge", definition: "Connection between graph vertices." },
      { term: "BFS", definition: "Breadth-first graph traversal using level-wise exploration." },
      { term: "DFS", definition: "Depth-first graph traversal that explores a branch before backtracking." },
      { term: "Spanning Tree", definition: "Tree containing all vertices of a connected undirected graph." },
      { term: "Minimum Spanning Tree", definition: "Spanning tree with minimum total edge weight." },
      { term: "Kruskal's Algorithm", definition: "MST algorithm that processes edges in increasing weight order and avoids cycles." },
      { term: "Prim's Algorithm", definition: "MST algorithm that grows one tree by repeatedly selecting a minimum crossing edge." },
      { term: "Dijkstra's Algorithm", definition: "Single-source shortest-path algorithm for graphs with non-negative edge weights." },
      { term: "Bellman-Ford", definition: "Single-source shortest-path algorithm that can handle negative edge weights." },
      { term: "Floyd-Warshall", definition: "Dynamic-programming algorithm for all-pairs shortest paths." },
      { term: "Transitive Closure", definition: "Representation of reachability between pairs of vertices." }
    ],
    examQuestions: [
      "Define a graph and explain basic graph terminology. (Medium)",
      "Explain BFS and DFS with examples and differences. (Long)",
      "What is a spanning tree? Explain minimum spanning tree. (Medium)",
      "Explain Kruskal's algorithm with an example. (Long)",
      "Explain Prim's algorithm and compare it with Kruskal's algorithm. (Long)",
      "Explain Dijkstra's algorithm and its limitation regarding negative weights. (Long)",
      "Explain Bellman-Ford algorithm. (Long)",
      "Explain all-pairs shortest paths and the Floyd-Warshall/Warshall terminology. (Long)",
      "Explain multistage graphs and optimal path calculation. (Medium)"
    ]
  },
  {
    unitNumber: 5,
    title: "Complexity Theory: P, NP, NP-Complete and NP-Hard",
    hours: 8,
    headings: [
      {
        id: "complexity-intro",
        title: "1. Introduction to Complexity Theory",
        icon: "Scale",
        blocks: [
          { kind: "paragraph", text: "Complexity theory studies the computational resources required by problems and the relationships among classes of problems. The syllabus focuses on P, NP, polynomial reduction, NP-complete problems and NP-hard problems." },
          { kind: "diagram", diagramId: "bca-c505-complexity-classes", caption: "Conceptual relationship among common complexity classes." }
        ]
      },
      {
        id: "class-p",
        title: "2. Class P",
        icon: "CircleCheck",
        blocks: [
          { kind: "paragraph", text: "Class P consists of decision problems that can be solved by a deterministic algorithm in polynomial time with respect to the input size. Polynomial-time bounds include forms such as O(n), O(n²), O(n³) and more generally O(n^k) for a fixed constant k." },
          { kind: "callout", tone: "example", title: "Example idea", text: "A decision version of a problem that can be solved in polynomial time by a known deterministic algorithm belongs to P." }
        ]
      },
      {
        id: "class-np",
        title: "3. Class NP",
        icon: "BadgeCheck",
        blocks: [
          { kind: "paragraph", text: "Class NP consists of decision problems for which a proposed solution, or certificate, can be verified in polynomial time by a deterministic procedure. The definition does not mean that every NP problem is known to require exponential time; rather, it identifies problems whose solutions can be efficiently verified." },
          { kind: "callout", tone: "info", title: "Exam point", text: "P is contained in NP because a polynomial-time algorithm can also verify a proposed solution in polynomial time." }
        ]
      },
      {
        id: "polynomial-reduction",
        title: "4. Polynomial Reduction",
        icon: "ArrowRightLeft",
        blocks: [
          { kind: "paragraph", text: "A polynomial-time reduction transforms instances of one problem into instances of another problem in polynomial time while preserving the relevant yes/no answer. If problem A can be reduced to problem B, written conceptually as A ≤p B, then an efficient algorithm for B can be used to solve A efficiently after performing the reduction." },
          { kind: "diagram", diagramId: "bca-c505-polynomial-reduction", caption: "Conceptual polynomial-time transformation from problem A to problem B." },
          { kind: "callout", tone: "example", title: "Why reductions matter", text: "Reductions allow researchers to compare problem difficulty. To show that a new problem is at least as hard as a known hard problem, a suitable polynomial-time reduction can be constructed from the known problem to the new problem." }
        ]
      },
      {
        id: "np-complete",
        title: "5. NP-Complete Problems",
        icon: "CircleDot",
        blocks: [
          { kind: "paragraph", text: "A decision problem is NP-complete when it is in NP and every problem in NP can be polynomially reduced to it. Thus NP-complete problems are among the central hardest problems within NP under polynomial-time reductions." },
          { kind: "table", headers: ["Requirement", "Meaning"], rows: [
            ["Membership in NP", "A proposed solution can be verified in polynomial time."],
            ["NP-hardness", "Every problem in NP can be polynomially reduced to the problem."]
          ]},
          { kind: "callout", tone: "example", title: "Exam example", text: "Classic textbook examples include SAT and related decision problems. When naming examples in an exam, use examples covered in your prescribed classroom material if a particular list is required." }
        ]
      },
      {
        id: "np-hard",
        title: "6. NP-Hard Problems",
        icon: "TriangleAlert",
        blocks: [
          { kind: "paragraph", text: "A problem is NP-hard if every problem in NP can be polynomially reduced to it. An NP-hard problem does not have to belong to NP; for example, its solution may not be verifiable in polynomial time under the decision-problem definition used for NP." },
          { kind: "table", headers: ["NP-Complete", "NP-Hard"], rows: [
            ["Must be in NP.", "Need not be in NP."],
            ["Has polynomial-time verifiable certificates under the NP definition.", "May be an optimization or other problem outside the decision class NP."],
            ["Is NP-hard as well.", "At least as hard as every problem in NP under polynomial reductions."]
          ]}
        ]
      },
      {
        id: "p-vs-np",
        title: "7. Relationship Among P, NP, NP-Complete and NP-Hard",
        icon: "GitBranch",
        blocks: [
          { kind: "paragraph", text: "The known containment P ⊆ NP is central to the topic. Whether P equals NP remains an open question in complexity theory. NP-complete problems are in NP and NP-hard; NP-hard problems form a broader hardness category that can include problems outside NP." },
          { kind: "diagram", diagramId: "bca-c505-p-np-relationship", caption: "Conceptual class relationship; the equality P = NP is not assumed." },
          { kind: "callout", tone: "info", title: "Exam-ready distinction", text: "Remember: P is about polynomial-time solvability; NP is about polynomial-time verification; NP-complete means both NP membership and NP-hardness; NP-hard means at least NP-level hardness under polynomial reductions and does not require membership in NP." }
        ]
      }
    ],
    keyTerms: [
      { term: "Complexity Theory", definition: "Study of computational resources and relationships among classes of computational problems." },
      { term: "P", definition: "Class of decision problems solvable in deterministic polynomial time." },
      { term: "NP", definition: "Class of decision problems whose proposed solutions can be verified in polynomial time." },
      { term: "Polynomial Reduction", definition: "Polynomial-time transformation that preserves the relevant yes/no answer between problem instances." },
      { term: "NP-Complete", definition: "Problem that belongs to NP and is NP-hard under polynomial-time reductions." },
      { term: "NP-Hard", definition: "Problem to which every NP problem can be polynomially reduced; it need not belong to NP." },
      { term: "Certificate", definition: "Proposed solution or witness that can be verified in polynomial time for an NP decision problem." },
      { term: "Decision Problem", definition: "Problem whose answer is typically represented as yes or no." }
    ],
    examQuestions: [
      "Explain complexity theory and the class P. (Medium)",
      "Define NP and explain polynomial-time verification. (Long)",
      "Explain polynomial reduction with an example. (Long)",
      "Define NP-complete problems and give their two essential conditions. (Long)",
      "Explain NP-hard problems and differentiate them from NP-complete problems. (Long)",
      "Explain the relationship among P, NP, NP-complete and NP-hard. (Long)",
      "What is the significance of polynomial reduction in complexity theory? (Medium)"
    ]
  }
];
