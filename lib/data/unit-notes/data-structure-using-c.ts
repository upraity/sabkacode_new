import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Data Structure using C (C-203)
// — Dr. Bhimrao Ambedkar University, Agra (DBRAU) BCA Semester 2, syllabus
// effective from session 2025-26.
//
// Every C program was compiled with GCC (-Wall -Wextra, no warnings) and
// executed; the printed `output` is the real terminal output.

export const dataStructureUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Introduction to Data Structures and Arrays",
    hours: 10,
    headings: [
      {
        id: "ds-classification",
        title: "1. Classification of Data Structures",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "A DATA STRUCTURE is a particular way of organising, storing and accessing data in a computer so that it can be used efficiently. Choosing the right data structure for a problem — an array, a stack, a linked list, a tree — often decides how fast and how memory-efficient a program will be.",
          },
          { kind: "diagram", diagramId: "ds-classification", caption: "Fig 1.1 — Classification of data structures" },
          {
            kind: "table",
            headers: ["Category", "Meaning", "Examples"],
            rows: [
              [
                "Primitive data structures",
                "The basic types directly supported by the language; a single value is stored.",
                "int, char, float, double, pointer",
              ],
              [
                "Non-primitive data structures",
                "Built from primitive types; store a collection of values and the relationship between them.",
                "Arrays, lists, stacks, queues, trees, graphs",
              ],
              [
                "Linear (non-primitive)",
                "Elements form a SEQUENCE — each element (except the first and last) has exactly one predecessor and one successor.",
                "Array, linked list, stack, queue",
              ],
              [
                "Non-linear (non-primitive)",
                "Elements do NOT form a simple sequence — an element may be connected to several others.",
                "Tree, graph",
              ],
              [
                "Static structure",
                "Size is fixed at compile time and cannot grow or shrink while the program runs.",
                "Array",
              ],
              [
                "Dynamic structure",
                "Size can grow or shrink at run time using dynamic memory allocation.",
                "Linked list, dynamically-linked stack/queue",
              ],
            ],
          },
        ],
      },
      {
        id: "ds-operations",
        title: "2. Operations on Data Structures",
        icon: "RefreshCw",
        blocks: [
          {
            kind: "table",
            headers: ["Operation", "Meaning"],
            rows: [
              [
                "Traversing",
                "Visiting (accessing) every element of the structure exactly once, usually to process it.",
              ],
              ["Searching", "Finding whether a given value is present, and if so, its location."],
              ["Insertion", "Adding a new element to the structure."],
              ["Deletion", "Removing an existing element from the structure."],
              ["Sorting", "Arranging the elements in ascending or descending order."],
              ["Merging", "Combining the elements of two sorted structures into one sorted structure."],
              ["Copying (cloning)", "Making a duplicate of the whole structure."],
            ],
          },
          {
            kind: "paragraph",
            text: "Two useful measures compare data structures and algorithms: TIME COMPLEXITY — how the running time grows with the size n of the input (expressed with BIG-O notation: O(1) constant, O(log n), O(n), O(n log n), O(n²) ...), and SPACE COMPLEXITY — how much extra memory is needed. These measures are studied in detail through the examples of this unit and Unit V.",
          },
        ],
      },
      {
        id: "arrays-address",
        title: "3. Arrays: Address Calculation",
        icon: "Table",
        blocks: [
          {
            kind: "paragraph",
            text: "An array is a collection of elements of the SAME data type stored in CONTIGUOUS memory locations and referred to by one name; each element is accessed directly through an index (subscript), which is the biggest advantage of an array — RANDOM ACCESS in constant time O(1), because the address of any element can be calculated directly without scanning the earlier elements.",
          },
          {
            kind: "table",
            headers: ["Array", "Address formula", "Meaning of the terms"],
            rows: [
              [
                "1-D array a[n], base address B, element size w",
                "Address(a[i]) = B + i × w",
                "i = index (from 0)",
              ],
              [
                "1-D array with lower bound LB",
                "Address(a[i]) = B + (i − LB) × w",
                "used when indices start at 1 or another value",
              ],
              [
                "2-D array, m rows, n columns, ROW-MAJOR order (used by C)",
                "Address(a[i][j]) = B + w × (i × n + j)",
                "stored row by row",
              ],
              [
                "2-D array, COLUMN-MAJOR order (used by FORTRAN)",
                "Address(a[i][j]) = B + w × (j × m + i)",
                "stored column by column",
              ],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example",
            text: "An array int a[10][20] has base address 1000 and each int takes 4 bytes. Find the address of a[3][5] in row-major order.  Address = 1000 + 4 × (3 × 20 + 5) = 1000 + 4 × 65 = 1260.  In column-major order (m = 10 rows): Address = 1000 + 4 × (5 × 10 + 3) = 1000 + 4 × 53 = 1212.",
          },
        ],
      },
      {
        id: "arrays-applications",
        title: "4. Applications and Limitations of Arrays; Arrays as Parameters",
        icon: "Target",
        blocks: [
          {
            kind: "table",
            headers: ["Application of arrays", "Explanation"],
            rows: [
              [
                "Storing and processing lists",
                "Marks of students, temperatures of a week, prices of products — anything that is a simple list.",
              ],
              [
                "Implementing other data structures",
                "Stacks and queues are commonly implemented using arrays (Unit II).",
              ],
              [
                "Matrices and tables",
                "2-D arrays represent tables, images (pixel grids) and matrices for mathematical operations.",
              ],
              [
                "Look-up tables",
                "Fast access to precomputed values by index, e.g., a table of factorials or squares.",
              ],
              ["Strings", "A string is stored as a 1-D array of characters ending with '\\0'."],
              ["Sparse data (with a compact representation)", "See the next block for sparse matrices."],
            ],
          },
          {
            kind: "table",
            headers: ["Limitation of arrays", "Explanation"],
            rows: [
              [
                "Fixed (static) size",
                "The size must be known and fixed at compile time (or fixed once at run time for a dynamically allocated array); it cannot grow if more elements arrive.",
              ],
              [
                "Wastage or shortage of memory",
                "A large array reserved 'to be safe' wastes memory if few elements are used; too small an array overflows.",
              ],
              [
                "Costly insertion and deletion",
                "Inserting or deleting an element in the middle needs shifting all the following elements — O(n) time.",
              ],
              [
                "Contiguous memory required",
                "A very large array may fail to be allocated if enough continuous memory is not available.",
              ],
              [
                "Only same-type, homogeneous data",
                "Cannot mix different types of data in one (plain) array.",
              ],
            ],
          },
          {
            kind: "paragraph",
            text: "Arrays as parameters: in C, when an array is passed to a function only the ADDRESS of its first element is passed (never a copy), so the function works directly on the original array and any change is visible to the caller; the size is usually passed as a separate parameter because it cannot be found from the array itself inside the function.",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 1 — Passing an array to a function; find the largest and reverse it in place",
            code: String.raw`#include <stdio.h>

int largest(int a[], int n) {
    int max = a[0];
    for (int i = 1; i < n; i++)
        if (a[i] > max) max = a[i];
    return max;
}

void reverse(int a[], int n) {                 /* changes the ORIGINAL array */
    for (int i = 0; i < n / 2; i++) {
        int t = a[i];
        a[i] = a[n - 1 - i];
        a[n - 1 - i] = t;
    }
}

int main(void) {
    int arr[6] = {12, 45, 3, 78, 23, 56};
    printf("Largest = %d\n", largest(arr, 6));

    reverse(arr, 6);
    printf("Reversed: ");
    for (int i = 0; i < 6; i++) printf("%d ", arr[i]);
    printf("\n");
    return 0;
}`,
            output: String.raw`Largest = 78
Reversed: 56 23 78 3 45 12`,
          },
        ],
      },
      {
        id: "sparse-matrix",
        title: "5. Sparse Matrices",
        icon: "FileSpreadsheet",
        blocks: [
          {
            kind: "paragraph",
            text: "A SPARSE MATRIX is a matrix in which most of the elements are ZERO (a DENSE matrix has mostly non-zero elements). Storing a sparse matrix in the usual 2-D array wastes a large amount of memory and time in processing zeros. Sparse matrices arise often — in scientific computing, graph adjacency matrices of large sparse graphs, and search engines.",
          },
          { kind: "diagram", diagramId: "sparse-matrix", caption: "Fig 1.2 — A sparse matrix and its compact triplet representation" },
          {
            kind: "paragraph",
            text: "TRIPLET (COORDINATE) REPRESENTATION stores only the non-zero elements, each as a triple (row, column, value). The compact array has one extra row at the top recording (number of rows, number of columns, number of non-zero elements). If the original matrix has m rows, n columns and t non-zero elements, it needs m × n words, while the triplet form needs only 3 × (t + 1) words — a big saving when t is small.",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 2 — Converting a sparse matrix to its triplet (compact) representation",
            code: String.raw`#include <stdio.h>
#define ROWS 4
#define COLS 5

int main(void) {
    int m[ROWS][COLS] = {
        { 0, 0, 3, 0, 4 },
        { 0, 0, 5, 7, 0 },
        { 0, 0, 0, 0, 0 },
        { 0, 2, 6, 0, 0 }
    };
    int i, j, t = 0;

    for (i = 0; i < ROWS; i++)
        for (j = 0; j < COLS; j++)
            if (m[i][j] != 0) t++;

    printf("Triplet representation (rows, cols, non-zero count first):\n");
    printf("%d %d %d\n", ROWS, COLS, t);
    for (i = 0; i < ROWS; i++)
        for (j = 0; j < COLS; j++)
            if (m[i][j] != 0)
                printf("%d %d %d\n", i, j, m[i][j]);

    printf("\nMemory needed: normal = %d words, triplet = %d words\n", ROWS * COLS, 3 * (t + 1));
    return 0;
}`,
            output: String.raw`Triplet representation (rows, cols, non-zero count first):
4 5 6
0 2 3
0 4 4
1 2 5
1 3 7
3 1 2
3 2 6

Memory needed: normal = 20 words, triplet = 21 words`,
          },
          {
            kind: "bullets",
            items: [
              "Other representations of sparse matrices: the LINKED LIST representation (each non-zero element is a node with row, column, value and pointers to the next non-zero element in the same row and same column) is used when the matrix must be updated often, since the triplet array needs shifting on insertion/deletion.",
              "Operations such as addition, transpose and multiplication of two sparse matrices can be done directly on the triplet form without expanding back to the full matrix, saving time as well as space.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Data structure", definition: "A particular way of organising data in a computer for efficient use." },
      { term: "Linear / Non-linear structure", definition: "Elements form a simple sequence / elements may connect to many others." },
      { term: "Time complexity", definition: "How the running time of an algorithm grows with the size of the input." },
      { term: "Random access", definition: "Accessing any element directly by its address/index in constant time, as in an array." },
      { term: "Sparse matrix", definition: "A matrix in which most elements are zero." },
      { term: "Triplet representation", definition: "Storing only the non-zero elements of a sparse matrix as (row, column, value)." },
    ],
    examQuestions: [
      "What is a data structure? Explain its classification with examples. (Long)",
      "Explain the operations performed on data structures. (Medium)",
      "Derive the address of an element of a 1-D and a 2-D array (row-major and column-major). (Long)",
      "Find the address of a[3][5] in a 10x20 array with base 1000 and word size 4, in row-major and column-major order. (Medium)",
      "Explain the applications and limitations of arrays. (Medium)",
      "How are arrays passed as parameters to functions in C? (Short)",
      "What is a sparse matrix? Explain its triplet representation with an example. (Long)",
      "Why is the triplet representation more memory-efficient than a normal array for a sparse matrix? (Short)",
    ],
  },
  {
    unitNumber: 2,
    title: "Stacks, Queues and Recursion",
    hours: 12,
    headings: [
      {
        id: "stack-basics",
        title: "1. Stacks: Array Representation, Push and Pop",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "A STACK is a linear data structure in which insertion and deletion take place at only ONE end, called the TOP. It follows the principle LIFO (Last In, First Out) — the element inserted last is removed first, like a pile of plates. A stack implemented with an array (CONTINUOUS implementation) has a fixed maximum size (MAX) and a variable top that stores the index of the topmost element (top = −1 means the stack is empty).",
          },
          { kind: "diagram", diagramId: "stack-operations", caption: "Fig 2.1 — Push and Pop operations on a stack" },
          {
            kind: "table",
            headers: ["Operation", "Meaning", "Condition checked"],
            rows: [
              [
                "push(x)",
                "Inserts x at the top: top = top + 1; stack[top] = x.",
                "Overflow if top == MAX − 1",
              ],
              [
                "pop()",
                "Removes and returns the top element: x = stack[top]; top = top − 1.",
                "Underflow if top == −1",
              ],
              [
                "peek() / top()",
                "Returns the top element without removing it.",
                "Underflow if the stack is empty",
              ],
              ["isEmpty() / isFull()", "Tests top == −1 / top == MAX − 1.", "—"],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 3 — Stack implemented with an array (push, pop, peek)",
            code: String.raw`#include <stdio.h>
#define MAX 5

int stack[MAX], top = -1;

void push(int x) {
    if (top == MAX - 1) { printf("Stack Overflow\n"); return; }
    stack[++top] = x;
    printf("Pushed %d\n", x);
}

int pop(void) {
    if (top == -1) { printf("Stack Underflow\n"); return -1; }
    return stack[top--];
}

int peek(void) { return (top == -1) ? -1 : stack[top]; }

int main(void) {
    push(10); push(20); push(30);
    printf("Top element = %d\n", peek());
    printf("Popped = %d\n", pop());
    printf("Popped = %d\n", pop());
    printf("Top element now = %d\n", peek());
    pop(); pop();                       /* second pop() causes underflow */
    return 0;
}`,
            output: String.raw`Pushed 10
Pushed 20
Pushed 30
Top element = 30
Popped = 30
Popped = 20
Top element now = 10
Stack Underflow`,
          },
          {
            kind: "table",
            headers: ["Application of stacks", "How the stack is used"],
            rows: [
              [
                "Function call management",
                "Every call is pushed on the CALL STACK with its local variables and return address; returning pops it — this is why recursion works (see below).",
              ],
              [
                "Expression evaluation and conversion",
                "Converting infix to postfix/prefix and evaluating postfix expressions (below).",
              ],
              [
                "Undo / Redo, browser back button",
                "Each action or page is pushed; undo/back pops the most recent one.",
              ],
              [
                "Balancing of symbols",
                "Checking that brackets ( ), { }, [ ] are properly matched and nested.",
              ],
              ["Reversing a list or string", "Push all items then pop them — they come out reversed."],
              [
                "Backtracking algorithms",
                "Maze solving, depth-first search (DFS) use a stack to remember the path.",
              ],
            ],
          },
        ],
      },
      {
        id: "infix-prefix-postfix",
        title: "2. Infix, Prefix and Postfix Expressions",
        icon: "Sigma",
        blocks: [
          {
            kind: "table",
            headers: ["Notation", "Position of the operator", "Example (A + B)"],
            rows: [
              ["Infix", "Between the two operands (the usual way humans write it)", "A + B"],
              ["Prefix (Polish notation)", "Before the two operands", "+ A B"],
              ["Postfix (Reverse Polish notation)", "After the two operands", "A B +"],
            ],
          },
          {
            kind: "paragraph",
            text: "Postfix and prefix expressions need NO brackets and NO operator-precedence rules to evaluate, which is why compilers convert expressions to postfix internally. Algorithm to convert INFIX to POSTFIX using a stack (of operators): scan the infix expression left to right — (1) if the symbol is an operand, add it to the output; (2) if it is '(', push it; (3) if it is ')', pop and output operators until '(' is popped (discard both brackets); (4) if it is an operator, pop and output operators from the stack while they have GREATER OR EQUAL precedence than the current operator, then push the current operator; (5) after the whole expression, pop and output any remaining operators.",
          },
          {
            kind: "table",
            headers: ["Operator", "Precedence"],
            rows: [
              ["^ (exponent)", "Highest (3), right associative"],
              ["*  /", "Middle (2), left associative"],
              ["+  −", "Lowest (1), left associative"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example — infix to postfix: A + B * C − D / E",
            text: "Scanning left to right with an operator stack (empty at start):  A → output A.  + → stack empty, push + [ + ].  B → output B.  * → * has higher precedence than + on top, push * [ +, * ].  C → output C.  − → pop * (out C→ already; pop * since ≥ prec of −), output *, then + also ≥ −, pop and output +, stack empty, push − [ − ].  D → output D.  / → / higher than − on top, push / [ −, / ].  E → output E.  End of expression: pop / and −.  Postfix = A B C * + D E / −.",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 4 — Convert an infix expression to postfix",
            code: String.raw`#include <stdio.h>
#include <string.h>
#include <ctype.h>
#define MAX 50

char stack[MAX];
int top = -1;

void push(char c) { stack[++top] = c; }
char pop(void)     { return stack[top--]; }
char peekTop(void) { return stack[top]; }

int precedence(char op) {
    if (op == '^') return 3;
    if (op == '*' || op == '/') return 2;
    if (op == '+' || op == '-') return 1;
    return 0;
}

int main(void) {
    char infix[MAX] = "A+B*C-D/E";
    char postfix[MAX];
    int j = 0;

    for (int i = 0; infix[i] != '\0'; i++) {
        char c = infix[i];
        if (isalnum(c)) {
            postfix[j++] = c;                                  /* operand: output directly */
        } else if (c == '(') {
            push(c);
        } else if (c == ')') {
            while (top != -1 && peekTop() != '(') postfix[j++] = pop();
            pop();                                              /* discard '(' */
        } else {                                                /* operator */
            while (top != -1 && peekTop() != '(' && precedence(peekTop()) >= precedence(c))
                postfix[j++] = pop();
            push(c);
        }
    }
    while (top != -1) postfix[j++] = pop();
    postfix[j] = '\0';

    printf("Infix   : %s\n", infix);
    printf("Postfix : %s\n", postfix);
    return 0;
}`,
            output: String.raw`Infix   : A+B*C-D/E
Postfix : ABC*+DE/-`,
          },
          {
            kind: "paragraph",
            text: "Evaluating a postfix expression with a stack (of numbers): scan left to right — if the symbol is an operand, PUSH its value; if it is an operator, POP the top TWO values (the second-popped is the LEFT operand), apply the operator, and PUSH the result. At the end, the single value remaining on the stack is the answer.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example — evaluate postfix 6 5 2 3 + 8 * + 3 + *",
            text: "Push 6, 5, 2, 3.  '+' → pop 3, 2 → 2+3 = 5, push 5. Stack: 6, 5, 5.  Push 8. Stack: 6, 5, 5, 8.  '*' → pop 8, 5 → 5×8 = 40, push 40. Stack: 6, 5, 40.  '+' → pop 40, 5 → 5+40 = 45, push 45. Stack: 6, 45.  Push 3. Stack: 6, 45, 3.  '+' → pop 3, 45 → 45+3 = 48, push 48. Stack: 6, 48.  '*' → pop 48, 6 → 6×48 = 288. Result = 288.",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 5 — Evaluate a postfix expression (single-digit operands)",
            code: String.raw`#include <stdio.h>
#include <ctype.h>

int stack[50], top = -1;
void push(int x) { stack[++top] = x; }
int pop(void)    { return stack[top--]; }

int main(void) {
    char postfix[] = "6 5 2 3+8*+3+*";       /* spaces are just for readability */
    char clean[50]; int k = 0;

    for (int i = 0; postfix[i]; i++)         /* remove the spaces before scanning */
        if (postfix[i] != ' ') clean[k++] = postfix[i];
    clean[k] = '\0';

    for (int i = 0; clean[i] != '\0'; i++) {
        char c = clean[i];
        if (isdigit(c)) {
            push(c - '0');
        } else {
            int b = pop();          /* right operand: popped first */
            int a = pop();          /* left operand */
            switch (c) {
                case '+': push(a + b); break;
                case '-': push(a - b); break;
                case '*': push(a * b); break;
                case '/': push(a / b); break;
            }
        }
    }
    printf("Postfix expression : %s\n", clean);
    printf("Result             = %d\n", pop());
    return 0;
}`,
            output: String.raw`Postfix expression : 6523+8*+3+*
Result             = 288`,
          },
        ],
      },
      {
        id: "recursion",
        title: "3. Recursion: Definition, Tower of Hanoi and Recursion vs Iteration",
        icon: "Repeat",
        blocks: [
          {
            kind: "paragraph",
            text: "A RECURSIVE function is a function that calls itself, directly or indirectly, to solve a smaller version of the same problem. Every recursive definition needs (1) one or more BASE CASES that stop the recursion with a direct answer, and (2) a RECURSIVE CASE that reduces the problem and calls the function again, moving towards a base case. Internally, each call is pushed onto the CALL STACK with its own copy of local variables; when a call returns, its frame is popped — this is exactly how a stack is used to implement recursion.",
          },
          { kind: "diagram", diagramId: "recursion-stack", caption: "Fig 2.2 — Call stack while computing factorial(4) recursively" },
          {
            kind: "code",
            language: "c",
            title: "Program 6 — Recursive factorial and Fibonacci",
            code: String.raw`#include <stdio.h>

long fact(int n) {
    if (n <= 1) return 1;                 /* base case */
    return n * fact(n - 1);               /* recursive case */
}

int fib(int n) {
    if (n == 0) return 0;                 /* base case 1 */
    if (n == 1) return 1;                 /* base case 2 */
    return fib(n - 1) + fib(n - 2);
}

int main(void) {
    printf("Factorial of 5 = %ld\n", fact(5));
    printf("Fibonacci series: ");
    for (int i = 0; i < 8; i++) printf("%d ", fib(i));
    printf("\n");
    return 0;
}`,
            output: String.raw`Factorial of 5 = 120
Fibonacci series: 0 1 1 2 3 5 8 13`,
          },
          {
            kind: "paragraph",
            text: "TOWER OF HANOI: three pegs (A, B, C) and n disks of different sizes stacked on peg A in decreasing size (largest at the bottom). Move all n disks to peg C, using B as auxiliary, following the rules: (1) move only one disk at a time; (2) only the topmost disk of a peg can be moved; (3) a larger disk can never be placed on a smaller one.",
          },
          {
            kind: "table",
            headers: ["Recursive solution — hanoi(n, from, to, aux)", "Meaning"],
            rows: [
              ["Base case: n == 0", "Nothing to move; return."],
              [
                "Step 1: hanoi(n − 1, from, aux, to)",
                "Move the top n − 1 disks from 'from' to 'aux' (using 'to' as the helper).",
              ],
              ["Step 2: print 'move disk n from -> to'", "Move the single remaining largest disk directly."],
              [
                "Step 3: hanoi(n − 1, aux, to, from)",
                "Move the n − 1 disks from 'aux' to 'to' (using 'from' as the helper).",
              ],
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Number of moves",
            text: "The Tower of Hanoi with n disks needs exactly 2ⁿ − 1 moves (a recurrence T(n) = 2·T(n − 1) + 1, T(0) = 0). For n = 3 this is 7 moves, verified by the program below; for n = 4, 15 moves.",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 7 — Tower of Hanoi (n = 3)",
            code: String.raw`#include <stdio.h>

int moveCount = 0;

void hanoi(int n, char from, char to, char aux) {
    if (n == 0) return;
    hanoi(n - 1, from, aux, to);
    moveCount++;
    printf("Move disk %d from %c to %c\n", n, from, to);
    hanoi(n - 1, aux, to, from);
}

int main(void) {
    int n = 3;
    hanoi(n, 'A', 'C', 'B');
    printf("Total moves = %d (expected 2^%d - 1 = %d)\n", moveCount, n, (1 << n) - 1);
    return 0;
}`,
            output: String.raw`Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C
Total moves = 7 (expected 2^3 - 1 = 7)`,
          },
          {
            kind: "table",
            headers: ["Recursion", "Iteration (loops)"],
            rows: [
              ["A function calls itself", "A loop (for/while) repeats a block of statements"],
              [
                "Uses the call stack — extra memory for each call; risk of stack overflow for large n",
                "Uses a fixed amount of memory regardless of the number of repetitions",
              ],
              [
                "Usually shorter, clearer code for naturally recursive problems (Tower of Hanoi, tree traversal)",
                "Usually faster (no function-call overhead) and preferred for simple repetition",
              ],
              ["Has a base case to stop", "Has a loop condition to stop"],
              [
                "Every recursive algorithm can be rewritten iteratively (often using an explicit stack)",
                "Every iterative algorithm can be rewritten recursively",
              ],
            ],
          },
        ],
      },
      {
        id: "queue-basics",
        title: "4. Queues: Array Representation, Circular Queue, Deque and Priority Queue",
        icon: "MoveHorizontal",
        blocks: [
          {
            kind: "paragraph",
            text: "A QUEUE is a linear data structure in which insertion takes place at one end (the REAR) and deletion at the other end (the FRONT). It follows the principle FIFO (First In, First Out) — like a line of people waiting, the first person to join is the first to be served.",
          },
          { kind: "diagram", diagramId: "queue-operations", caption: "Fig 2.3 — A simple queue and a circular queue" },
          {
            kind: "table",
            headers: ["Operation", "Meaning", "Condition checked (simple array queue)"],
            rows: [
              ["Create", "Initialise front = rear = −1 (empty queue).", "—"],
              ["Add (enqueue) x", "rear = rear + 1; queue[rear] = x.", "Full (overflow) if rear == MAX − 1"],
              [
                "Delete (dequeue)",
                "x = queue[front + 1]; front = front + 1.",
                "Empty (underflow) if front == rear",
              ],
              ["isFull / isEmpty", "rear == MAX − 1  /  front == rear", "—"],
            ],
          },
          {
            kind: "paragraph",
            text: "The problem with a simple array queue is that after several enqueue/dequeue operations, front keeps moving forward and the space at the beginning of the array is wasted even though it is 'empty' — the queue reports 'full' even when there is unused room at the front. A CIRCULAR QUEUE solves this by treating the array as circular: the rear (and front) wrap around to index 0 after reaching MAX − 1, using the modulus operator, so the freed space is reused.",
          },
          {
            kind: "table",
            headers: ["Circular queue operation", "Formula", "Full / empty test"],
            rows: [
              [
                "Enqueue x",
                "rear = (rear + 1) % MAX; queue[rear] = x;",
                "Full when (rear + 1) % MAX == front (one slot is deliberately left empty to tell full from empty)",
              ],
              ["Dequeue", "front = (front + 1) % MAX; return queue[front];", "Empty when front == rear"],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 8 — Circular queue: enqueue, dequeue and wrap-around",
            code: String.raw`#include <stdio.h>
#define MAX 5

int cq[MAX], front = -1, rear = -1;

int isFull(void)  { return (rear + 1) % MAX == front; }
int isEmpty(void) { return front == -1; }

void enqueue(int x) {
    if (isFull()) { printf("Queue is full, cannot insert %d\n", x); return; }
    if (isEmpty()) front = 0;
    rear = (rear + 1) % MAX;
    cq[rear] = x;
    printf("Enqueued %d\n", x);
}

int dequeue(void) {
    if (isEmpty()) { printf("Queue is empty\n"); return -1; }
    int x = cq[front];
    if (front == rear) front = rear = -1;      /* queue becomes empty */
    else front = (front + 1) % MAX;
    return x;
}

int main(void) {
    enqueue(10); enqueue(20); enqueue(30); enqueue(40);
    printf("Dequeued %d\n", dequeue());
    printf("Dequeued %d\n", dequeue());
    enqueue(50); enqueue(60);                  /* rear wraps around to reuse the freed slots */
    enqueue(70);                               /* now the queue is full */
    printf("Queue elements (front to rear): ");
    for (int i = 0, idx = front; i < (rear - front + MAX) % MAX + 1; i++, idx = (idx + 1) % MAX)
        printf("%d ", cq[idx]);
    printf("\n");
    return 0;
}`,
            output: String.raw`Enqueued 10
Enqueued 20
Enqueued 30
Enqueued 40
Dequeued 10
Dequeued 20
Enqueued 50
Enqueued 60
Enqueued 70
Queue elements (front to rear): 30 40 50 60 70`,
          },
          {
            kind: "table",
            headers: ["Type of queue", "Description"],
            rows: [
              [
                "Simple (linear) queue",
                "FIFO, insert at rear, delete at front; wastes space at the front (as explained above).",
              ],
              ["Circular queue", "Rear and front wrap around the array to reuse freed space."],
              [
                "Deque (Double-Ended Queue)",
                "Insertion and deletion are allowed at BOTH ends (front and rear). An input-restricted deque allows insertion only at one end; an output-restricted deque allows deletion only at one end.",
              ],
              [
                "Priority queue",
                "Each element has a PRIORITY; the element with the highest priority (not necessarily the one inserted first) is removed first. Equal-priority elements are usually served FIFO. Often implemented with a HEAP for efficiency.",
              ],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 9 — A simple priority queue (smaller number = higher priority)",
            code: String.raw`#include <stdio.h>
#define MAX 10

int pq[MAX], prio[MAX], n = 0;

void insert(int value, int priority) {
    pq[n] = value;
    prio[n] = priority;
    n++;
}

int removeHighestPriority(void) {
    if (n == 0) { printf("Priority queue is empty\n"); return -1; }
    int best = 0;
    for (int i = 1; i < n; i++)
        if (prio[i] < prio[best]) best = i;          /* smaller number = higher priority */

    int value = pq[best];
    for (int i = best; i < n - 1; i++) { pq[i] = pq[i + 1]; prio[i] = prio[i + 1]; }
    n--;
    return value;
}

int main(void) {
    insert(100, 3);           /* task 100, priority 3 */
    insert(200, 1);           /* task 200, priority 1 (highest) */
    insert(300, 2);
    insert(400, 1);

    printf("Processing order: ");
    while (n > 0) printf("%d ", removeHighestPriority());
    printf("\n");
    return 0;
}`,
            output: "Processing order: 200 400 300 100",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Stack", definition: "A LIFO linear structure where insertion and deletion happen only at the top." },
      { term: "Queue", definition: "A FIFO linear structure where insertion is at the rear and deletion at the front." },
      { term: "Postfix expression", definition: "An expression in which every operator comes after its operands." },
      { term: "Recursion", definition: "A function calling itself to solve a smaller version of the same problem." },
      { term: "Tower of Hanoi", definition: "A classic recursive puzzle needing 2ⁿ − 1 moves for n disks." },
      { term: "Circular queue", definition: "A queue implemented on an array where front and rear wrap around using modulus." },
      { term: "Priority queue", definition: "A queue in which the element with the highest priority is removed first." },
    ],
    examQuestions: [
      "What is a stack? Explain push and pop operations with array implementation. (Long)",
      "Explain the applications of a stack. (Medium)",
      "Convert the infix expression A+B*C-D/E to postfix using a stack. (Long)",
      "Evaluate the postfix expression 6 5 2 3 + 8 * + 3 + * using a stack. (Medium)",
      "What is recursion? Explain with the factorial function. Differentiate recursion from iteration. (Long)",
      "Explain the Tower of Hanoi problem and its recursive solution. How many moves are needed for n disks? (Long)",
      "What is a queue? Explain its array representation and operations. (Medium)",
      "What is a circular queue? Why is it needed? Explain with an example. (Long)",
      "Explain the deque and its types. (Short)",
      "What is a priority queue? Explain with an example. (Medium)",
    ],
  },
  {
    unitNumber: 3,
    title: "Linked Lists",
    hours: 12,
    headings: [
      {
        id: "linked-list-concept",
        title: "1. Linear List Concept, Terminology and Memory Representation",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "An array is a CONTINUOUS (CONTIGUOUS) implementation of a list — elements sit next to each other in memory, so inserting or deleting in the middle needs shifting many elements. A LINKED LIST is a NON-CONTINUOUS implementation: each element is stored in a separate block of memory called a NODE, and each node explicitly stores the address of the NEXT node, so the elements can be scattered anywhere in memory yet still be visited in order.",
          },
          { kind: "diagram", diagramId: "linked-list-node", caption: "Fig 3.1 — A node of a singly linked list" },
          {
            kind: "table",
            headers: ["Term", "Meaning"],
            rows: [
              ["Node", "A structure holding one DATA field and one or more POINTER (link) fields."],
              [
                "Head (start / first)",
                "A pointer variable that stores the address of the first node of the list.",
              ],
              [
                "NULL",
                "A special pointer value stored in the link field of the last node, marking the end of the list.",
              ],
              [
                "Traversal",
                "Moving through the list from the head, following the next pointers, one node at a time, until NULL.",
              ],
              ["Empty list", "A list with head == NULL (no nodes)."],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 10 — Node structure, dynamic creation and traversal of a linked list",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

void traverse(struct Node *head) {
    struct Node *p = head;
    while (p != NULL) {
        printf("%d -> ", p->data);
        p = p->next;
    }
    printf("NULL\n");
}

int main(void) {
    struct Node *n1 = (struct Node *) malloc(sizeof(struct Node));
    struct Node *n2 = (struct Node *) malloc(sizeof(struct Node));
    struct Node *n3 = (struct Node *) malloc(sizeof(struct Node));

    n1->data = 10;  n1->next = n2;
    n2->data = 20;  n2->next = n3;
    n3->data = 30;  n3->next = NULL;

    struct Node *head = n1;
    traverse(head);
    return 0;
}`,
            output: "10 -> 20 -> 30 -> NULL",
          },
          {
            kind: "table",
            headers: ["Array (continuous)", "Linked list (non-continuous)"],
            rows: [
              ["Fixed size, decided in advance", "Grows and shrinks dynamically at run time"],
              [
                "Random access in O(1) — a[i] directly",
                "Sequential access only — O(n) to reach the i-th node",
              ],
              [
                "Insertion/deletion in the middle needs shifting: O(n)",
                "Insertion/deletion needs no shifting: O(1) once the position is found",
              ],
              ["No extra memory per element", "Extra memory for the pointer field(s) of every node"],
              ["Memory is contiguous", "Memory can be anywhere; nodes are linked by pointers"],
            ],
          },
        ],
      },
      {
        id: "linked-list-types",
        title: "2. Types of Linked Lists",
        icon: "Network",
        blocks: [
          { kind: "diagram", diagramId: "linked-list-types", caption: "Fig 3.2 — Types of linked lists" },
          {
            kind: "table",
            headers: ["Type", "Structure", "Traversal"],
            rows: [
              [
                "Singly linked list",
                "Each node has one pointer to the NEXT node; the last node points to NULL.",
                "Forward only",
              ],
              [
                "Doubly linked list",
                "Each node has TWO pointers: next (to the following node) and prev (to the previous node); simplifies deletion and backward traversal.",
                "Forward and backward",
              ],
              [
                "Singly circular linked list",
                "Like a singly linked list, but the LAST node points back to the FIRST node instead of NULL — there is no natural 'end'.",
                "Forward, endlessly (a traversal loop must stop when it reaches the starting node again)",
              ],
              [
                "Circular doubly linked list",
                "Combines both ideas: two pointers per node, and the list forms a ring (last->next = first, first->prev = last).",
                "Forward and backward, endlessly",
              ],
            ],
          },
          {
            kind: "table",
            headers: ["Structure declaration", "Use"],
            rows: [
              ["struct Node { int data; struct Node *next; };", "Singly linked / singly circular list"],
              [
                "struct DNode { int data; struct DNode *prev, *next; };",
                "Doubly linked / circular doubly linked list",
              ],
            ],
          },
        ],
      },
      {
        id: "linked-list-operations",
        title: "3. Operations on a Singly Linked List: Create, Insert, Delete, Traverse and Count",
        icon: "Settings",
        blocks: [
          {
            kind: "table",
            headers: ["Insertion case", "Idea"],
            rows: [
              ["At the beginning", "new->next = head;  head = new;"],
              [
                "At the end",
                "traverse to the last node (whose next is NULL);  last->next = new;  new->next = NULL;",
              ],
              [
                "In the middle (after a given node p)",
                "new->next = p->next;  p->next = new;   — the new node must be linked to what comes after BEFORE p is relinked to it, or the rest of the list would be lost.",
              ],
              ["Into an empty list", "head = new;  new->next = NULL;"],
            ],
          },
          {
            kind: "table",
            headers: ["Deletion case", "Idea"],
            rows: [
              ["First node", "temp = head;  head = head->next;  free(temp);"],
              [
                "General case (a node with value x, not the first)",
                "Keep a trailing pointer prev one step behind cur; when cur->data == x, set prev->next = cur->next;  free(cur);",
              ],
              ["Last node", "Same as the general case — the node before it now points to NULL."],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 11 — Singly linked list: insert at beginning/end/middle, delete, traverse, search, count",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

struct Node { int data; struct Node *next; };
struct Node *head = NULL;

void insertBeginning(int x) {
    struct Node *n = (struct Node *) malloc(sizeof(struct Node));
    n->data = x;  n->next = head;  head = n;
}

void insertEnd(int x) {
    struct Node *n = (struct Node *) malloc(sizeof(struct Node));
    n->data = x;  n->next = NULL;
    if (head == NULL) { head = n; return; }
    struct Node *p = head;
    while (p->next != NULL) p = p->next;
    p->next = n;
}

void insertAfterValue(int afterVal, int x) {                 /* insert in the "middle" */
    struct Node *p = head;
    while (p != NULL && p->data != afterVal) p = p->next;
    if (p == NULL) { printf("Value %d not found\n", afterVal); return; }
    struct Node *n = (struct Node *) malloc(sizeof(struct Node));
    n->data = x;
    n->next = p->next;                                        /* link new node forward FIRST */
    p->next = n;                                               /* then link p to the new node  */
}

void deleteValue(int x) {
    struct Node *cur = head, *prev = NULL;
    while (cur != NULL && cur->data != x) { prev = cur; cur = cur->next; }
    if (cur == NULL) { printf("Value %d not found\n", x); return; }
    if (prev == NULL) head = cur->next;                       /* deleting the first node */
    else prev->next = cur->next;                              /* general case             */
    free(cur);
}

void traverse(void) {
    struct Node *p = head;
    printf("List: ");
    while (p != NULL) { printf("%d ", p->data); p = p->next; }
    printf("\n");
}

int search(int x) {
    struct Node *p = head; int pos = 1;
    while (p != NULL) { if (p->data == x) return pos; p = p->next; pos++; }
    return -1;
}

int countNodes(void) {
    int c = 0;
    for (struct Node *p = head; p != NULL; p = p->next) c++;
    return c;
}

int main(void) {
    insertEnd(20); insertEnd(30);          /* list: 20 30           */
    insertBeginning(10);                   /* list: 10 20 30        */
    insertEnd(50);                         /* list: 10 20 30 50     */
    insertAfterValue(30, 40);              /* list: 10 20 30 40 50  */
    traverse();

    printf("Position of 40 = %d\n", search(40));
    printf("Position of 99 = %d\n", search(99));
    printf("Count of nodes = %d\n", countNodes());

    deleteValue(10);                       /* delete the first node */
    deleteValue(40);                       /* delete a middle node  */
    traverse();
    printf("Count after deletion = %d\n", countNodes());
    return 0;
}`,
            output: String.raw`List: 10 20 30 40 50
Position of 40 = 4
Position of 99 = -1
Count of nodes = 5
List: 20 30 50
Count after deletion = 3`,
          },
        ],
      },
      {
        id: "linked-list-sort-print",
        title: "4. Printing, Sorting and Reversing a Linked List",
        icon: "AlignLeft",
        blocks: [
          {
            kind: "paragraph",
            text: "SORTING a linked list cannot use the direct index-swap trick of arrays (there is no a[i]); instead the DATA of the nodes is exchanged while the LINKS stay the same — this is like doing a bubble/selection sort by walking pointers instead of indices. REVERSING a singly linked list needs three pointers (prev, cur, next) so that a node's link is redirected backward without losing the rest of the list.",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 12 — Sorting a linked list (bubble sort by exchanging data) and reversing it",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

struct Node { int data; struct Node *next; };

struct Node *makeNode(int x) {
    struct Node *n = (struct Node *) malloc(sizeof(struct Node));
    n->data = x;  n->next = NULL;
    return n;
}

void insertEnd(struct Node **head, int x) {
    struct Node *n = makeNode(x);
    if (*head == NULL) { *head = n; return; }
    struct Node *p = *head;
    while (p->next != NULL) p = p->next;
    p->next = n;
}

void printList(struct Node *head) {
    for (struct Node *p = head; p != NULL; p = p->next) printf("%d ", p->data);
    printf("\n");
}

void bubbleSort(struct Node *head) {                   /* sort by exchanging DATA, not links */
    int swapped;
    do {
        swapped = 0;
        struct Node *p = head;
        while (p != NULL && p->next != NULL) {
            if (p->data > p->next->data) {
                int t = p->data; p->data = p->next->data; p->next->data = t;
                swapped = 1;
            }
            p = p->next;
        }
    } while (swapped);
}

struct Node *reverse(struct Node *head) {
    struct Node *prev = NULL, *cur = head, *next;
    while (cur != NULL) {
        next = cur->next;         /* save the rest of the list before breaking the link */
        cur->next = prev;         /* reverse the link */
        prev = cur;
        cur = next;
    }
    return prev;                  /* prev is now the new head */
}

int main(void) {
    struct Node *head = NULL;
    int values[] = {40, 10, 30, 20, 50};
    for (int i = 0; i < 5; i++) insertEnd(&head, values[i]);

    printf("Original : "); printList(head);
    bubbleSort(head);
    printf("Sorted   : "); printList(head);

    head = reverse(head);
    printf("Reversed : "); printList(head);
    return 0;
}`,
            output: String.raw`Original : 40 10 30 20 50
Sorted   : 10 20 30 40 50
Reversed : 50 40 30 20 10`,
          },
        ],
      },
      {
        id: "doubly-circular",
        title: "5. Doubly Linked List and Circular Linked List",
        icon: "RefreshCw",
        blocks: [
          {
            kind: "table",
            headers: ["Feature of a doubly linked list", "Advantage"],
            rows: [
              ["Two pointers per node (prev, next)", "Can be traversed in both directions"],
              [
                "Deleting a given node p",
                "prev is known directly (p->prev), so deletion needs no separate search for the previous node: p->prev->next = p->next; p->next->prev = p->prev;",
              ],
              ["Cost", "Extra memory for one more pointer field per node"],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 13 — Doubly linked list: insert at end, forward and backward traversal",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

struct DNode { int data; struct DNode *prev, *next; };
struct DNode *head = NULL, *tail = NULL;

void insertEnd(int x) {
    struct DNode *n = (struct DNode *) malloc(sizeof(struct DNode));
    n->data = x;  n->next = NULL;  n->prev = tail;
    if (head == NULL) head = n;
    else tail->next = n;
    tail = n;
}

int main(void) {
    insertEnd(10); insertEnd(20); insertEnd(30); insertEnd(40);

    printf("Forward  : ");
    for (struct DNode *p = head; p != NULL; p = p->next) printf("%d ", p->data);
    printf("\nBackward : ");
    for (struct DNode *p = tail; p != NULL; p = p->prev) printf("%d ", p->data);
    printf("\n");
    return 0;
}`,
            output: String.raw`Forward  : 10 20 30 40
Backward : 40 30 20 10`,
          },
          {
            kind: "paragraph",
            text: "A CIRCULAR linked list has no NULL at the end — the last node points back to the first. Traversal must therefore use a do-while loop (or check against the starting pointer) instead of testing for NULL, or it will loop forever.",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 14 — Singly circular linked list: create and traverse once around",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

struct Node { int data; struct Node *next; };

struct Node *insertEnd(struct Node *last, int x) {
    struct Node *n = (struct Node *) malloc(sizeof(struct Node));
    n->data = x;
    if (last == NULL) { n->next = n; return n; }              /* first node points to itself */
    n->next = last->next;                                      /* new node -> old first node  */
    last->next = n;                                             /* old last  -> new node       */
    return n;                                                   /* n is now the last node      */
}

void traverse(struct Node *last) {
    if (last == NULL) { printf("Empty list\n"); return; }
    struct Node *p = last->next;                                /* start = first node */
    do {
        printf("%d -> ", p->data);
        p = p->next;
    } while (p != last->next);                                  /* stop after one full round */
    printf("(back to start)\n");
}

int main(void) {
    struct Node *last = NULL;
    last = insertEnd(last, 10);
    last = insertEnd(last, 20);
    last = insertEnd(last, 30);
    traverse(last);
    return 0;
}`,
            output: "10 -> 20 -> 30 -> (back to start)",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Node", definition: "A structure with a data field and one or more pointer fields." },
      { term: "Head pointer", definition: "A pointer that stores the address of the first node of a linked list." },
      { term: "Singly linked list", definition: "A list whose nodes have a single pointer to the next node." },
      { term: "Doubly linked list", definition: "A list whose nodes have pointers to both the next and previous nodes." },
      { term: "Circular linked list", definition: "A list whose last node points back to the first node." },
      { term: "Traversal", definition: "Visiting every node of a list from the head to the end." },
    ],
    examQuestions: [
      "What is a linked list? Differentiate it from an array. (Medium)",
      "Explain the terminology of a linked list: node, head, NULL, traversal. (Short)",
      "Explain the types of linked lists with diagrams. (Long)",
      "Write a program to create a singly linked list and insert a node at the beginning, middle and end. (Long)",
      "Write a program to delete the first node and a general node from a singly linked list. (Long)",
      "How do you count and search for a value in a linked list? (Medium)",
      "Write a program to sort a linked list. (Medium)",
      "Write a program to reverse a singly linked list. (Long)",
      "Explain a doubly linked list. Why is deletion easier in it than in a singly linked list? (Medium)",
      "What is a circular linked list? Write a program to create and traverse one. (Long)",
    ],
  },
  {
    unitNumber: 4,
    title: "Trees",
    hours: 10,
    headings: [
      {
        id: "tree-terminology",
        title: "1. Introduction to Trees and Terminology",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "A TREE is a NON-LINEAR data structure that represents a hierarchical relationship between elements, like a family tree or the folder structure of a disk. It consists of NODES connected by EDGES, with one special node called the ROOT that has no parent; every other node has exactly one parent and can have zero or more children.",
          },
          { kind: "diagram", diagramId: "tree-terminology", caption: "Fig 4.1 — Terminology of a tree" },
          {
            kind: "table",
            headers: ["Term", "Meaning"],
            rows: [
              ["Root", "The topmost node of the tree; it has no parent."],
              ["Parent / Child", "A node directly above / directly below another connected node."],
              ["Siblings", "Nodes that have the same parent."],
              ["Leaf (terminal node)", "A node with no children."],
              ["Internal (non-terminal) node", "A node with at least one child."],
              ["Edge", "The link between a parent and a child."],
              ["Path", "A sequence of nodes and edges from one node to another."],
              [
                "Depth (level) of a node",
                "The number of edges from the root to that node; the root is at depth 0 (some books start at 1).",
              ],
              ["Height of a node", "The number of edges on the longest path from that node down to a leaf."],
              [
                "Height (depth) of the tree",
                "The height of the root — the length of the longest path from root to a leaf.",
              ],
              ["Degree of a node", "The number of children of that node."],
              ["Subtree", "A node together with all its descendants, viewed as a tree in itself."],
              [
                "Ancestor / Descendant",
                "Any node on the path from the root to a node / any node reachable going downward from a node.",
              ],
            ],
          },
        ],
      },
      {
        id: "binary-trees",
        title: "2. Binary Trees, Types of Binary Trees and Representation",
        icon: "Network",
        blocks: [
          {
            kind: "paragraph",
            text: "A BINARY TREE is a tree in which every node has AT MOST TWO children, conventionally called the LEFT child and the RIGHT child (order matters, unlike a general tree).",
          },
          { kind: "diagram", diagramId: "binary-tree-types", caption: "Fig 4.2 — Types of binary trees" },
          {
            kind: "table",
            headers: ["Type of binary tree", "Definition"],
            rows: [
              [
                "Full (strict) binary tree",
                "Every node has either 0 or exactly 2 children (never exactly 1).",
              ],
              [
                "Complete binary tree",
                "Every level is completely filled except possibly the last, which is filled from LEFT to right.",
              ],
              [
                "Perfect binary tree",
                "Every internal node has exactly 2 children AND every leaf is at the SAME level. A perfect tree of height h has 2^(h+1) − 1 nodes.",
              ],
              [
                "Skewed binary tree",
                "Every node has only a left child (left-skewed) or only a right child (right-skewed) — degenerates into a linked list.",
              ],
              [
                "Balanced binary tree",
                "The height of the left and right subtrees of every node differs by at most 1 (e.g., AVL tree).",
              ],
            ],
          },
          {
            kind: "paragraph",
            text: "Representation of a binary tree in memory: (1) LINKED representation — each node is a structure with DATA, a pointer LEFT and a pointer RIGHT (the usual and most flexible method, used below); (2) ARRAY (sequential) representation — store the nodes level by level in an array; for a node at index i (1-based), its left child is at 2i, its right child at 2i+1 and its parent at i/2 — simple but wastes space for a tree that is not complete (as used for heaps).",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 15 — Building a binary tree with the linked representation",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

struct Node { int data; struct Node *left, *right; };

struct Node *newNode(int x) {
    struct Node *n = (struct Node *) malloc(sizeof(struct Node));
    n->data = x;  n->left = n->right = NULL;
    return n;
}

int main(void) {
    /*        1
             / \\
            2   3
           / \\
          4   5      */
    struct Node *root = newNode(1);
    root->left  = newNode(2);
    root->right = newNode(3);
    root->left->left  = newNode(4);
    root->left->right = newNode(5);

    printf("root         = %d\n", root->data);
    printf("root->left   = %d\n", root->left->data);
    printf("root->right  = %d\n", root->right->data);
    printf("leftmost leaf (root->left->left) = %d\n", root->left->left->data);
    return 0;
}`,
            output: String.raw`root         = 1
root->left   = 2
root->right  = 3
leftmost leaf (root->left->left) = 4`,
          },
        ],
      },
      {
        id: "tree-traversals",
        title: "3. Tree Traversals: Inorder, Preorder and Postorder",
        icon: "Compass",
        blocks: [
          {
            kind: "paragraph",
            text: "TRAVERSING a binary tree means visiting every node exactly once in a systematic order. Since each node has (up to) two subtrees, there are three common DEPTH-FIRST orders, all naturally written as RECURSIVE algorithms:",
          },
          {
            kind: "table",
            headers: ["Traversal", "Order", "Rule (for a node N with left subtree L, right subtree R)"],
            rows: [
              [
                "Preorder",
                "Root, Left, Right",
                "Visit N, then traverse L (preorder), then traverse R (preorder).",
              ],
              [
                "Inorder",
                "Left, Root, Right",
                "Traverse L (inorder), then visit N, then traverse R (inorder). For a BINARY SEARCH TREE this visits the nodes in SORTED order.",
              ],
              [
                "Postorder",
                "Left, Right, Root",
                "Traverse L (postorder), then traverse R (postorder), then visit N.",
              ],
            ],
          },
          { kind: "diagram", diagramId: "tree-traversal-orders", caption: "Fig 4.3 — Traversal orders on the sample tree of Program 15" },
          {
            kind: "callout",
            tone: "example",
            title: "Traversals of the tree of Program 15 (1 is the root, 2 and 3 its children, 4 and 5 the children of 2)",
            text: "Preorder  (Root,Left,Right): 1, 2, 4, 5, 3.   Inorder (Left,Root,Right): 4, 2, 5, 1, 3.   Postorder (Left,Right,Root): 4, 5, 2, 3, 1.  These are the values printed by Program 16 below.",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 16 — Recursive preorder, inorder and postorder traversal",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

struct Node { int data; struct Node *left, *right; };

struct Node *newNode(int x) {
    struct Node *n = (struct Node *) malloc(sizeof(struct Node));
    n->data = x;  n->left = n->right = NULL;
    return n;
}

void preorder(struct Node *root) {
    if (root == NULL) return;
    printf("%d ", root->data);         /* Root  */
    preorder(root->left);              /* Left  */
    preorder(root->right);             /* Right */
}
void inorder(struct Node *root) {
    if (root == NULL) return;
    inorder(root->left);               /* Left  */
    printf("%d ", root->data);         /* Root  */
    inorder(root->right);              /* Right */
}
void postorder(struct Node *root) {
    if (root == NULL) return;
    postorder(root->left);             /* Left  */
    postorder(root->right);            /* Right */
    printf("%d ", root->data);         /* Root  */
}

int main(void) {
    struct Node *root = newNode(1);
    root->left  = newNode(2);
    root->right = newNode(3);
    root->left->left  = newNode(4);
    root->left->right = newNode(5);

    printf("Preorder  : "); preorder(root);  printf("\n");
    printf("Inorder   : "); inorder(root);   printf("\n");
    printf("Postorder : "); postorder(root); printf("\n");
    return 0;
}`,
            output: String.raw`Preorder  : 1 2 4 5 3
Inorder   : 4 2 5 1 3
Postorder : 4 5 2 3 1`,
          },
          {
            kind: "paragraph",
            text: "A TREE (ALGEBRAIC) EXPRESSION represents an arithmetic expression as a binary tree: every OPERAND is a leaf and every OPERATOR is an internal node whose two children are its operands (or sub-expressions). Traversing this tree PREORDER gives the PREFIX form, INORDER gives the INFIX form (add brackets to be exact), and POSTORDER gives the POSTFIX form of the same expression — this is exactly how a compiler represents and evaluates expressions.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Expression tree for (A + B) * (C − D)",
            text: "The root is '*'; its left child is '+' with leaves A, B; its right child is '−' with leaves C, D.  Preorder (prefix)  : * + A B − C D.  Inorder (infix, with brackets added by convention): (A + B) * (C − D).  Postorder (postfix) : A B + C D − *.",
          },
        ],
      },
      {
        id: "binary-search-tree",
        title: "4. Binary Search Tree: Insertion and Deletion",
        icon: "Crosshair",
        blocks: [
          {
            kind: "paragraph",
            text: "A BINARY SEARCH TREE (BST) is a binary tree with the ORDERING PROPERTY: for every node, all values in its LEFT subtree are SMALLER and all values in its RIGHT subtree are GREATER than the node's own value (no duplicates, in the usual definition). This property makes searching, inserting and deleting take O(h) time, where h is the height of the tree (O(log n) for a balanced tree, but O(n) in the worst case for a skewed tree).",
          },
          { kind: "diagram", diagramId: "bst-insertion", caption: "Fig 4.4 — Building a BST by inserting 50, 30, 70, 20, 40, 60, 80" },
          {
            kind: "table",
            headers: ["Operation", "Idea"],
            rows: [
              [
                "Search(x)",
                "Start at the root; if x equals the node's value, found; if x is smaller, go left; if larger, go right; repeat until found or a NULL is reached (not found).",
              ],
              [
                "Insert(x)",
                "Search for x as above; when a NULL position is reached, put a new leaf node with value x there — a BST is always built by inserting at a leaf position.",
              ],
              ["Delete(x) — leaf node", "Simply remove it (set the parent's pointer to NULL)."],
              [
                "Delete(x) — one child",
                "Connect the node's parent directly to its single child, bypassing the deleted node.",
              ],
              [
                "Delete(x) — two children",
                "Find the INORDER SUCCESSOR (the smallest value in the right subtree — keep going left from the right child) or the inorder predecessor (largest in the left subtree); copy that value into the node being deleted, then delete the successor/predecessor node (which has at most one child, reducing to an easier case).",
              ],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 17 — Binary Search Tree: insertion and searching (values inserted: 50, 30, 70, 20, 40, 60, 80)",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

struct Node { int data; struct Node *left, *right; };

struct Node *newNode(int x) {
    struct Node *n = (struct Node *) malloc(sizeof(struct Node));
    n->data = x;  n->left = n->right = NULL;
    return n;
}

struct Node *insert(struct Node *root, int x) {
    if (root == NULL) return newNode(x);           /* found the NULL spot: insert here */
    if (x < root->data)      root->left  = insert(root->left, x);
    else if (x > root->data) root->right = insert(root->right, x);
    return root;                                    /* x already present: no duplicate added */
}

struct Node *search(struct Node *root, int x) {
    if (root == NULL || root->data == x) return root;
    if (x < root->data) return search(root->left, x);
    return search(root->right, x);
}

void inorder(struct Node *root) {                   /* prints values in SORTED order */
    if (root == NULL) return;
    inorder(root->left);
    printf("%d ", root->data);
    inorder(root->right);
}

int main(void) {
    struct Node *root = NULL;
    int values[] = {50, 30, 70, 20, 40, 60, 80};
    for (int i = 0; i < 7; i++) root = insert(root, values[i]);

    printf("Inorder (sorted) : "); inorder(root); printf("\n");
    printf("Search 40 : %s\n", search(root, 40) ? "found" : "not found");
    printf("Search 45 : %s\n", search(root, 45) ? "found" : "not found");
    return 0;
}`,
            output: String.raw`Inorder (sorted) : 20 30 40 50 60 70 80
Search 40 : found
Search 45 : not found`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 18 — Deleting a node from a BST (all three cases)",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

struct Node { int data; struct Node *left, *right; };

struct Node *newNode(int x) {
    struct Node *n = (struct Node *) malloc(sizeof(struct Node));
    n->data = x;  n->left = n->right = NULL;
    return n;
}
struct Node *insert(struct Node *root, int x) {
    if (root == NULL) return newNode(x);
    if (x < root->data) root->left = insert(root->left, x);
    else if (x > root->data) root->right = insert(root->right, x);
    return root;
}
struct Node *findMin(struct Node *root) {           /* leftmost node = smallest value */
    while (root->left != NULL) root = root->left;
    return root;
}
struct Node *deleteNode(struct Node *root, int x) {
    if (root == NULL) return NULL;
    if (x < root->data) { root->left = deleteNode(root->left, x); return root; }
    if (x > root->data) { root->right = deleteNode(root->right, x); return root; }

    /* x == root->data: this is the node to delete */
    if (root->left == NULL && root->right == NULL) {           /* leaf */
        free(root);
        return NULL;
    }
    if (root->left == NULL) { struct Node *r = root->right; free(root); return r; }   /* one child */
    if (root->right == NULL) { struct Node *l = root->left;  free(root); return l; }   /* one child */

    struct Node *succ = findMin(root->right);        /* two children: inorder successor */
    root->data = succ->data;                         /* copy its value up               */
    root->right = deleteNode(root->right, succ->data); /* delete the successor node       */
    return root;
}
void inorder(struct Node *root) {
    if (root == NULL) return;
    inorder(root->left); printf("%d ", root->data); inorder(root->right);
}

int main(void) {
    struct Node *root = NULL;
    int values[] = {50, 30, 70, 20, 40, 60, 80};
    for (int i = 0; i < 7; i++) root = insert(root, values[i]);

    printf("Before deletion : "); inorder(root); printf("\n");

    root = deleteNode(root, 20);      /* leaf node          */
    printf("Delete leaf 20  : "); inorder(root); printf("\n");

    root = deleteNode(root, 30);      /* node with one child (40) after 20 is gone */
    printf("Delete 30 (1 child) : "); inorder(root); printf("\n");

    root = deleteNode(root, 50);      /* root, two children */
    printf("Delete root 50 (2 children) : "); inorder(root); printf("\n");
    return 0;
}`,
            output: String.raw`Before deletion : 20 30 40 50 60 70 80
Delete leaf 20  : 30 40 50 60 70 80
Delete 30 (1 child) : 40 50 60 70 80
Delete root 50 (2 children) : 40 60 70 80`,
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Tree", definition: "A non-linear data structure representing a hierarchy of nodes." },
      { term: "Binary tree", definition: "A tree in which every node has at most two children." },
      { term: "Complete binary tree", definition: "A binary tree in which every level is full except possibly the last, filled left to right." },
      { term: "Inorder / Preorder / Postorder", definition: "Traversal orders: Left-Root-Right / Root-Left-Right / Left-Right-Root." },
      {
        term: "Binary Search Tree (BST)",
        definition: "A binary tree where the left subtree has smaller and the right subtree has larger values than the node.",
      },
      { term: "Inorder successor", definition: "The smallest value in the right subtree of a node." },
    ],
    examQuestions: [
      "Explain the terminology of a tree with a diagram. (Medium)",
      "What is a binary tree? Explain its types. (Long)",
      "Explain the array and linked representations of a binary tree. (Medium)",
      "Explain preorder, inorder and postorder traversal with an example. (Long)",
      "Draw the expression tree for (A+B)*(C-D) and find its prefix, infix and postfix forms. (Medium)",
      "What is a binary search tree? Explain its insertion operation with an example. (Long)",
      "Explain the three cases of deletion from a BST with an example. (Long)",
      "What is the inorder successor of a node? Why is it used in deletion? (Short)",
    ],
  },
  {
    unitNumber: 5,
    title: "Sorting, Searching Techniques and Graphs",
    hours: 10,
    headings: [
      {
        id: "bubble-selection-insertion",
        title: "1. Bubble Sort, Selection Sort and Insertion Sort",
        icon: "GitCompare",
        blocks: [
          {
            kind: "paragraph",
            text: "SORTING arranges the elements of a list in ascending or descending order. These three sorts are simple to understand and code but take O(n²) time in the worst case, so they are used for small lists or as a first step in learning sorting.",
          },
          {
            kind: "table",
            headers: ["Algorithm", "Idea", "Time complexity (worst / best)", "Stable?"],
            rows: [
              [
                "Bubble sort",
                "Repeatedly compare adjacent elements and swap them if they are in the wrong order; the largest 'bubbles' to the end each pass.",
                "O(n²) / O(n) with an early-exit flag",
                "Yes",
              ],
              [
                "Selection sort",
                "In each pass, find the SMALLEST element of the unsorted part and swap it into its correct position.",
                "O(n²) / O(n²)",
                "No",
              ],
              [
                "Insertion sort",
                "Take each element and INSERT it into its correct position among the already-sorted part on its left, shifting larger elements right.",
                "O(n²) / O(n) for nearly sorted data",
                "Yes",
              ],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 19 — Bubble sort, selection sort and insertion sort on the same array",
            code: String.raw`#include <stdio.h>
#define N 6

void printArr(int a[]) {
    for (int i = 0; i < N; i++) printf("%d ", a[i]);
    printf("\n");
}

void bubbleSort(int a[]) {
    for (int i = 0; i < N - 1; i++) {
        int swapped = 0;
        for (int j = 0; j < N - 1 - i; j++)
            if (a[j] > a[j + 1]) { int t = a[j]; a[j] = a[j + 1]; a[j + 1] = t; swapped = 1; }
        if (!swapped) break;                       /* already sorted: stop early */
    }
}

void selectionSort(int a[]) {
    for (int i = 0; i < N - 1; i++) {
        int minPos = i;
        for (int j = i + 1; j < N; j++)
            if (a[j] < a[minPos]) minPos = j;
        int t = a[i]; a[i] = a[minPos]; a[minPos] = t;
    }
}

void insertionSort(int a[]) {
    for (int i = 1; i < N; i++) {
        int key = a[i], j = i - 1;
        while (j >= 0 && a[j] > key) { a[j + 1] = a[j]; j--; }
        a[j + 1] = key;
    }
}

int main(void) {
    int a1[N] = {64, 25, 12, 22, 11, 90};
    int a2[N] = {64, 25, 12, 22, 11, 90};
    int a3[N] = {64, 25, 12, 22, 11, 90};

    bubbleSort(a1);    printf("Bubble sort    : "); printArr(a1);
    selectionSort(a2); printf("Selection sort : "); printArr(a2);
    insertionSort(a3); printf("Insertion sort : "); printArr(a3);
    return 0;
}`,
            output: String.raw`Bubble sort    : 11 12 22 25 64 90
Selection sort : 11 12 22 25 64 90
Insertion sort : 11 12 22 25 64 90`,
          },
        ],
      },
      {
        id: "quick-merge-sort",
        title: "2. Quick Sort and Merge Sort",
        icon: "Sigma",
        blocks: [
          {
            kind: "paragraph",
            text: "QUICK SORT and MERGE SORT are DIVIDE AND CONQUER algorithms: they break the problem into smaller sub-problems, solve each recursively, and combine the results. They run in O(n log n) on average, much faster than the O(n²) sorts above for large lists.",
          },
          { kind: "diagram", diagramId: "sorting-complexity", caption: "Fig 5.1 — Divide-and-conquer sorting: quick sort and merge sort" },
          {
            kind: "table",
            headers: ["Algorithm", "Idea", "Time complexity"],
            rows: [
              [
                "Quick sort",
                "Choose a PIVOT element; PARTITION the array so that smaller elements go to its left and larger to its right; recursively quick-sort the two parts. Sorts IN PLACE (no extra array needed).",
                "O(n log n) average, O(n²) worst case (e.g., already-sorted data with a poor pivot choice)",
              ],
              [
                "Merge sort",
                "Split the array into two halves, recursively sort each half, then MERGE the two sorted halves into one sorted array by repeatedly picking the smaller front element.",
                "O(n log n) in EVERY case, but needs O(n) extra space for merging",
              ],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 20 — Quick sort (Lomuto partition scheme, last element as pivot)",
            code: String.raw`#include <stdio.h>

void swap(int *a, int *b) { int t = *a; *a = *b; *b = t; }

int partition(int arr[], int low, int high) {
    int pivot = arr[high];                 /* choose the last element as pivot */
    int i = low - 1;                       /* boundary of the "smaller" region */
    for (int j = low; j < high; j++)
        if (arr[j] < pivot) { i++; swap(&arr[i], &arr[j]); }
    swap(&arr[i + 1], &arr[high]);         /* place the pivot in its final position */
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);        /* left of the pivot  */
        quickSort(arr, pi + 1, high);       /* right of the pivot */
    }
}

int main(void) {
    int arr[] = {38, 27, 43, 3, 9, 82, 10};
    int n = sizeof(arr) / sizeof(arr[0]);

    quickSort(arr, 0, n - 1);
    printf("Sorted array: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\n");
    return 0;
}`,
            output: "Sorted array: 3 9 10 27 38 43 82",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 21 — Merge sort",
            code: String.raw`#include <stdio.h>

void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1, n2 = r - m;
    int left[50], right[50];
    for (int i = 0; i < n1; i++) left[i]  = arr[l + i];
    for (int j = 0; j < n2; j++) right[j] = arr[m + 1 + j];

    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2)                 /* merge, always taking the smaller front element */
        arr[k++] = (left[i] <= right[j]) ? left[i++] : right[j++];
    while (i < n1) arr[k++] = left[i++];     /* copy any leftovers */
    while (j < n2) arr[k++] = right[j++];
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);                /* sort the left half  */
        mergeSort(arr, m + 1, r);            /* sort the right half */
        merge(arr, l, m, r);                 /* merge the two sorted halves */
    }
}

int main(void) {
    int arr[] = {38, 27, 43, 3, 9, 82, 10};
    int n = sizeof(arr) / sizeof(arr[0]);

    mergeSort(arr, 0, n - 1);
    printf("Sorted array: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\n");
    return 0;
}`,
            output: "Sorted array: 3 9 10 27 38 43 82",
          },
          {
            kind: "table",
            headers: ["Sorting algorithm", "Best", "Average", "Worst", "Extra space", "Stable"],
            rows: [
              ["Bubble sort", "O(n)", "O(n²)", "O(n²)", "O(1)", "Yes"],
              ["Selection sort", "O(n²)", "O(n²)", "O(n²)", "O(1)", "No"],
              ["Insertion sort", "O(n)", "O(n²)", "O(n²)", "O(1)", "Yes"],
              ["Quick sort", "O(n log n)", "O(n log n)", "O(n²)", "O(log n)", "No"],
              ["Merge sort", "O(n log n)", "O(n log n)", "O(n log n)", "O(n)", "Yes"],
            ],
          },
        ],
      },
      {
        id: "searching",
        title: "3. Sequential Search and Binary Search",
        icon: "Crosshair",
        blocks: [
          {
            kind: "table",
            headers: ["Search", "Idea", "Requires", "Time complexity"],
            rows: [
              [
                "Sequential (linear) search",
                "Compare the key with EVERY element one by one, from the start, until found or the list ends.",
                "No ordering needed",
                "O(n)",
              ],
              [
                "Binary search",
                "Works only on a SORTED array. Compare the key with the MIDDLE element: if equal, found; if the key is smaller, search the left half; if larger, search the right half; repeat.",
                "Array must be sorted",
                "O(log n)",
              ],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 22 — Sequential search and binary search",
            code: String.raw`#include <stdio.h>

int sequentialSearch(int arr[], int n, int key) {
    for (int i = 0; i < n; i++)
        if (arr[i] == key) return i;
    return -1;
}

int binarySearch(int arr[], int n, int key) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == key) return mid;
        if (arr[mid] < key) low = mid + 1;      /* key is in the right half */
        else high = mid - 1;                    /* key is in the left half  */
    }
    return -1;
}

int main(void) {
    int arr[] = {11, 20, 30, 45, 56, 60, 78, 90};    /* must be sorted for binary search */
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("Sequential search for 56 : position %d\n", sequentialSearch(arr, n, 56));
    printf("Binary search for 56     : position %d\n", binarySearch(arr, n, 56));
    printf("Binary search for 100    : position %d (not found)\n", binarySearch(arr, n, 100));
    return 0;
}`,
            output: String.raw`Sequential search for 56 : position 4
Binary search for 56     : position 4
Binary search for 100    : position -1 (not found)`,
          },
        ],
      },
      {
        id: "graph-intro",
        title: "4. Introduction and Types of Graphs, Graph Representation",
        icon: "Network",
        blocks: [
          {
            kind: "paragraph",
            text: "A GRAPH G = (V, E) is a non-linear data structure consisting of a set V of VERTICES (nodes) and a set E of EDGES connecting pairs of vertices — unlike a tree, a graph can have cycles and a vertex can be reached from many others, with no single 'root'.",
          },
          { kind: "diagram", diagramId: "graph-types", caption: "Fig 5.2 — An undirected graph and its adjacency matrix / adjacency list" },
          {
            kind: "table",
            headers: ["Type of graph", "Meaning"],
            rows: [
              ["Undirected graph", "An edge (u, v) can be traversed in both directions."],
              [
                "Directed graph (digraph)",
                "An edge has a direction, written as (u → v) — traversable only from u to v.",
              ],
              ["Weighted graph", "Each edge has a WEIGHT (cost, distance, time) attached."],
              ["Unweighted graph", "All edges are treated as equal (weight 1)."],
              [
                "Cyclic / Acyclic graph",
                "Contains at least one cycle / contains no cycle (a tree is a connected acyclic graph).",
              ],
              ["Connected graph", "There is a path between every pair of vertices."],
              ["Complete graph", "There is an edge between every pair of vertices."],
            ],
          },
          {
            kind: "table",
            headers: ["Representation", "Description", "Space", "Best for"],
            rows: [
              [
                "Adjacency matrix",
                "An n × n matrix where cell (i, j) is 1 (or the weight) if there is an edge between i and j, else 0.",
                "O(n²)",
                "Dense graphs; O(1) test whether an edge exists",
              ],
              [
                "Adjacency list",
                "For each vertex, a linked list (or array) of its adjacent vertices.",
                "O(n + e)",
                "Sparse graphs; efficient traversal of neighbours",
              ],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 23 — Building a graph and printing its adjacency matrix and adjacency list",
            code: String.raw`#include <stdio.h>
#define V 5

int adj[V][V] = {0};

void addEdge(int u, int v) { adj[u][v] = 1; adj[v][u] = 1; }   /* undirected graph */

int main(void) {
    /* Graph:  0-1, 0-2, 1-2, 2-3, 3-4  (vertices 0..4) */
    addEdge(0, 1); addEdge(0, 2); addEdge(1, 2); addEdge(2, 3); addEdge(3, 4);

    printf("Adjacency matrix:\n   ");
    for (int j = 0; j < V; j++) printf("%d ", j);
    printf("\n");
    for (int i = 0; i < V; i++) {
        printf("%d: ", i);
        for (int j = 0; j < V; j++) printf("%d ", adj[i][j]);
        printf("\n");
    }

    printf("\nAdjacency list:\n");
    for (int i = 0; i < V; i++) {
        printf("%d -> ", i);
        for (int j = 0; j < V; j++)
            if (adj[i][j]) printf("%d ", j);
        printf("\n");
    }
    return 0;
}`,
            output: String.raw`Adjacency matrix:
   0 1 2 3 4
0: 0 1 1 0 0
1: 1 0 1 0 0
2: 1 1 0 1 0
3: 0 0 1 0 1
4: 0 0 0 1 0

Adjacency list:
0 -> 1 2
1 -> 0 2
2 -> 0 1 3
3 -> 2 4
4 -> 3`,
          },
        ],
      },
      {
        id: "shortest-path",
        title: "5. The Shortest Path Problem (Dijkstra's Algorithm)",
        icon: "Compass",
        blocks: [
          {
            kind: "paragraph",
            text: "The SHORTEST PATH PROBLEM asks for the path between two vertices of a weighted graph whose edge weights add up to the smallest total. DIJKSTRA'S ALGORITHM finds the shortest distance from one SOURCE vertex to every other vertex of a graph with NON-NEGATIVE edge weights.",
          },
          {
            kind: "bullets",
            items: [
              "Algorithm: (1) set dist[source] = 0 and dist[v] = ∞ for every other vertex; mark all vertices as unvisited; (2) repeat V times: pick the UNVISITED vertex u with the smallest dist[u], mark it visited; (3) for every neighbour v of u that is still unvisited, RELAX the edge: if dist[u] + weight(u, v) < dist[v], update dist[v] = dist[u] + weight(u, v); (4) after all vertices are visited, dist[] holds the shortest distance from the source to every vertex.",
            ],
          },
          { kind: "diagram", diagramId: "dijkstra-graph", caption: "Fig 5.3 — A weighted graph and the shortest distances from vertex 0" },
          {
            kind: "callout",
            tone: "example",
            title: "Worked trace (graph of Fig 5.3, source = 0)",
            text: "dist = [0, ∞, ∞, ∞, ∞]. Visit 0: relax 0-1 (2) → dist[1]=2; relax 0-2 (4) → dist[2]=4.  Visit 1 (smallest unvisited, 2): relax 1-2 (1) → dist[0]+... dist[1]+1=3 < 4 → dist[2]=3; relax 1-3 (7) → dist[3]=9.  Visit 2 (3): relax 2-3 (3) → dist[2]+3=6 < 9 → dist[3]=6; relax 2-4 (5) → dist[4]=8.  Visit 3 (6): relax 3-4 (1) → dist[3]+1=7 < 8 → dist[4]=7.  Visit 4 (7): no unvisited neighbours.  Final shortest distances from 0: [0, 2, 3, 6, 7] — matching the output of Program 24.",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 24 — Dijkstra's shortest path algorithm",
            code: String.raw`#include <stdio.h>
#define V 5
#define INF 9999

int graph[V][V] = {
    { 0, 2, 4, 0, 0 },
    { 2, 0, 1, 7, 0 },
    { 4, 1, 0, 3, 5 },
    { 0, 7, 3, 0, 1 },
    { 0, 0, 5, 1, 0 }
};

int minDistance(int dist[], int visited[]) {
    int min = INF, minIndex = -1;
    for (int v = 0; v < V; v++)
        if (!visited[v] && dist[v] <= min) { min = dist[v]; minIndex = v; }
    return minIndex;
}

void dijkstra(int src) {
    int dist[V], visited[V] = {0};
    for (int i = 0; i < V; i++) dist[i] = INF;
    dist[src] = 0;

    for (int count = 0; count < V - 1; count++) {
        int u = minDistance(dist, visited);
        visited[u] = 1;
        for (int v = 0; v < V; v++)
            if (!visited[v] && graph[u][v] && dist[u] != INF && dist[u] + graph[u][v] < dist[v])
                dist[v] = dist[u] + graph[u][v];
    }

    printf("Vertex \t Distance from source %d\n", src);
    for (int i = 0; i < V; i++) printf("%d \t %d\n", i, dist[i]);
}

int main(void) {
    dijkstra(0);
    return 0;
}`,
            output: String.raw`Vertex 	 Distance from source 0
0 	 0
1 	 2
2 	 3
3 	 6
4 	 7`,
          },
          {
            kind: "bullets",
            items: [
              "Applications of the shortest path problem: GPS and map navigation (Google Maps), network routing protocols, flight/train connection planning, telecommunication networks.",
              "Dijkstra's algorithm does not work correctly if the graph has NEGATIVE edge weights — the Bellman-Ford algorithm is used in that case.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Bubble / Selection / Insertion sort", definition: "Simple O(n²) sorting algorithms." },
      { term: "Quick sort / Merge sort", definition: "O(n log n) divide-and-conquer sorting algorithms." },
      { term: "Stable sort", definition: "A sort that keeps the relative order of equal elements." },
      { term: "Binary search", definition: "An O(log n) search on a sorted array by repeatedly halving the search range." },
      { term: "Graph", definition: "A non-linear structure of vertices connected by edges." },
      { term: "Adjacency matrix / list", definition: "A matrix / a set of lists representing which vertices of a graph are connected." },
      { term: "Dijkstra's algorithm", definition: "An algorithm that finds the shortest distance from a source vertex to all other vertices." },
    ],
    examQuestions: [
      "Explain bubble sort, selection sort and insertion sort with an example and their time complexity. (Long)",
      "Explain quick sort with an example. What is its worst-case time complexity? (Long)",
      "Explain merge sort with an example. (Long)",
      "Compare the sorting algorithms studied in terms of time complexity, space and stability. (Medium)",
      "Explain sequential search and binary search with programs. (Medium)",
      "What is a graph? Explain its types with examples. (Medium)",
      "Explain the adjacency matrix and adjacency list representations of a graph. (Medium)",
      "Explain the shortest path problem. Describe Dijkstra's algorithm with an example. (Long)",
    ],
  },
];
