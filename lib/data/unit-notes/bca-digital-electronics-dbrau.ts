import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Digital Electronics (C-301)
// — Dr. Bhimrao Ambedkar University, Agra (DBRAU), B.C.A. Third Semester.
// Source syllabus: DBRAU BCA Third Semester, Paper Code C-301.
export const BcaDigitalElectronicsDbrauUnitNotes: UnitNote[] = [
  {
    "unitNumber": 1,
    "title": "Number System & Boolean Algebra",
    "hours": 8,
    "headings": [
      {
        "id": "number-system-overview",
        "title": "1. Number System and Bases",
        "icon": "Hash",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A number system is a method of representing quantities using a set of symbols and a base (radix). Digital electronics works mainly with binary because digital circuits naturally represent two stable logic states, but decimal, octal and hexadecimal are used as convenient human-readable forms."
          },
          {
            "kind": "table",
            "headers": [
              "System",
              "Base",
              "Digits used",
              "Typical digital use"
            ],
            "rows": [
              [
                "Binary",
                "2",
                "0, 1",
                "Internal representation of digital circuits"
              ],
              [
                "Octal",
                "8",
                "0–7",
                "Compact representation of binary groups of 3 bits"
              ],
              [
                "Decimal",
                "10",
                "0–9",
                "Everyday numerical representation and specifications"
              ],
              [
                "Hexadecimal",
                "16",
                "0–9, A–F",
                "Compact representation of binary groups of 4 bits"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "For an integer in radix r, each digit has a positional weight r^n. Thus 101101₂ = 1×2⁵ + 0×2⁴ + 1×2³ + 1×2² + 0×2¹ + 1×2⁰."
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "Worked conversion",
            "text": "Convert 45₁₀ to binary. Repeated division by 2 gives remainders 1, 0, 1, 1, 0, 1 when read upward, so 45₁₀ = 101101₂. The same value is 55₈ in octal and 2D₁₆ in hexadecimal."
          },
          {
            "kind": "diagram",
            "diagramId": "bca-sem3-de-number-systems",
            "caption": "Positional representation and the relationship among binary, octal, decimal and hexadecimal."
          }
        ]
      },
      {
        "id": "binary-conversion",
        "title": "2. Binary, Octal, Decimal and Hexadecimal Conversion",
        "icon": "Repeat",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Decimal-to-binary conversion for an integer is performed by repeated division by 2. Binary-to-decimal conversion uses positional weights. Binary-to-octal conversion groups bits from the radix point in sets of three; binary-to-hexadecimal conversion groups bits in sets of four."
          },
          {
            "kind": "table",
            "headers": [
              "Conversion",
              "Method",
              "Example"
            ],
            "rows": [
              [
                "Binary → Decimal",
                "Multiply each bit by its power of 2 and add",
                "11010₂ = 16+8+2 = 26₁₀"
              ],
              [
                "Decimal → Binary",
                "Repeated division by 2; read remainders upward",
                "26₁₀ = 11010₂"
              ],
              [
                "Binary → Octal",
                "Group from right in 3 bits",
                "110 101₂ = 65₈"
              ],
              [
                "Binary → Hex",
                "Group from right in 4 bits",
                "0001 1010₂ = 1A₁₆"
              ]
            ]
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "Fractional conversion",
            "text": "Convert 0.625₁₀ to binary. Multiply by 2 repeatedly: 0.625×2=1.25 → 1; 0.25×2=0.5 → 0; 0.5×2=1.0 → 1. Therefore 0.625₁₀ = 0.101₂."
          },
          {
            "kind": "paragraph",
            "text": "For mixed numbers, convert the integer part and fractional part separately and then combine them around the binary point. The same positional principle applies to octal and hexadecimal fractions."
          }
        ]
      },
      {
        "id": "complements",
        "title": "3. Complements: 1’s and 2’s Complement",
        "icon": "RefreshCw",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Complements are used in digital arithmetic, especially for representing negative binary numbers and implementing subtraction using addition circuits. For an n-bit binary word, the 1’s complement is obtained by changing every 0 to 1 and every 1 to 0. The 2’s complement is the 1’s complement plus 1."
          },
          {
            "kind": "table",
            "headers": [
              "Representation",
              "Operation on 8-bit 00101101",
              "Result"
            ],
            "rows": [
              [
                "Original",
                "—",
                "00101101"
              ],
              [
                "1’s complement",
                "Invert every bit",
                "11010010"
              ],
              [
                "2’s complement",
                "Add 1 to the 1’s complement",
                "11010011"
              ]
            ]
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "Subtraction using 2’s complement",
            "text": "Compute 13−5 using 5-bit binary. 13 = 01101 and 5 = 00101. The 2’s complement of 00101 is 11011. Add: 01101 + 11011 = 1 01000. Discard the end carry, giving 01000 = 8₁₀."
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Exam point",
            "text": "In fixed-width 2’s-complement arithmetic, the word length matters. Overflow occurs when the mathematical result cannot be represented in the available signed range."
          }
        ]
      },
      {
        "id": "boolean-algebra",
        "title": "4. Boolean Algebra and Basic Laws",
        "icon": "Sigma",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Boolean algebra operates on binary variables and logical operations. The principal operations are AND (·), OR (+), and NOT (complement). Boolean identities provide algebraic ways to simplify logic expressions before implementing them with gates."
          },
          {
            "kind": "table",
            "headers": [
              "Law",
              "AND form",
              "OR form"
            ],
            "rows": [
              [
                "Identity",
                "A·1 = A",
                "A+0 = A"
              ],
              [
                "Null / domination",
                "A·0 = 0",
                "A+1 = 1"
              ],
              [
                "Idempotent",
                "A·A = A",
                "A+A = A"
              ],
              [
                "Complement",
                "A·A̅ = 0",
                "A+A̅ = 1"
              ],
              [
                "Absorption",
                "A·(A+B)=A",
                "A+(A·B)=A"
              ],
              [
                "Involution",
                "(A̅)̅=A",
                "—"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "De Morgan’s theorems are (A·B)̅ = A̅ + B̅ and (A+B)̅ = A̅·B̅. They are especially useful when converting between NAND/NOR implementations and equivalent forms."
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "Boolean simplification",
            "text": "Simplify F = A + A·B. By the absorption law, A + A·B = A. Thus the circuit can be reduced to a direct A signal instead of implementing the redundant product term."
          },
          {
            "kind": "diagram",
            "diagramId": "bca-sem3-de-boolean-gates",
            "caption": "Basic Boolean operations and the correspondence between Boolean expressions and logic gates."
          }
        ]
      },
      {
        "id": "boolean-expressions-kmap",
        "title": "5. Boolean Expressions, SOP/POS and K-Map",
        "icon": "Layers",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A Boolean function may be written in Sum of Products (SOP) or Product of Sums (POS) form. In canonical SOP, the function is expressed as a sum of minterms; in canonical POS, it is expressed as a product of maxterms. Karnaugh maps provide a visual method for simplifying Boolean expressions for a small number of variables."
          },
          {
            "kind": "paragraph",
            "text": "For a K-map, adjacent cells represent minterms that differ in only one variable. Groups must contain 1, 2, 4, 8, ... cells and should be made as large as possible. Edge cells are considered adjacent, so groups may wrap around the map boundary."
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "Two-variable K-map example",
            "text": "For F(A,B)=Σm(1,3), the 1s occur at AB=01 and 11. These cells form a pair in which B remains 1 while A changes, so the simplified result is F=B."
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "K-map exam method",
            "text": "First draw the correct Gray-code ordering, place the specified minterms, form the largest valid groups, write the variables that remain constant in each group, and finally OR the resulting product terms."
          },
          {
            "kind": "diagram",
            "diagramId": "bca-sem3-de-kmap",
            "caption": "Four-variable Karnaugh-map grouping, including adjacency and wrap-around."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Radix",
        "definition": "The base of a number system; for example, binary has radix 2."
      },
      {
        "term": "Binary",
        "definition": "Base-2 number system using only 0 and 1."
      },
      {
        "term": "Hexadecimal",
        "definition": "Base-16 number system using 0–9 and A–F."
      },
      {
        "term": "1’s Complement",
        "definition": "Bitwise inversion of a binary word."
      },
      {
        "term": "2’s Complement",
        "definition": "The 1’s complement plus one, widely used for signed arithmetic."
      },
      {
        "term": "Boolean Algebra",
        "definition": "Algebraic system for manipulating binary logical variables."
      },
      {
        "term": "Minterm",
        "definition": "A product term containing every variable exactly once in true or complemented form."
      },
      {
        "term": "Karnaugh Map",
        "definition": "A graphical method for simplifying Boolean functions by grouping adjacent cells."
      }
    ],
    "examQuestions": [
      "Explain the binary, octal, decimal and hexadecimal number systems with examples. (Long)",
      "Convert given decimal numbers into binary, octal and hexadecimal forms. (Medium)",
      "Explain binary-to-octal and binary-to-hexadecimal conversion methods. (Medium)",
      "Explain 1’s and 2’s complements and their applications in binary arithmetic. (Long)",
      "Perform subtraction using the 2’s-complement method with a suitable example. (Long)",
      "State and explain the important laws of Boolean algebra. (Long)",
      "Prove and explain De Morgan’s theorems. (Long)",
      "Differentiate SOP and POS representations of Boolean functions. (Medium)",
      "Simplify a Boolean function using a Karnaugh map and explain the grouping rules. (Long)",
      "Explain adjacency and wrap-around grouping in a K-map. (Medium)"
    ]
  },
  {
    "unitNumber": 2,
    "title": "Combinational Circuits",
    "hours": 8,
    "headings": [
      {
        "id": "half-full-adders",
        "title": "1. Adders: Half Adder, Full Adder and Binary Adder",
        "icon": "Sigma",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A combinational circuit produces outputs that depend only on the current inputs. An adder performs binary addition. A half adder adds two one-bit inputs and produces Sum and Carry. A full adder adds three one-bit inputs: A, B and the incoming carry Cin."
          },
          {
            "kind": "table",
            "headers": [
              "Circuit",
              "Inputs",
              "Outputs",
              "Equations"
            ],
            "rows": [
              [
                "Half Adder",
                "A, B",
                "S, C",
                "S=A⊕B; C=A·B"
              ],
              [
                "Full Adder",
                "A, B, Cin",
                "S, Cout",
                "S=A⊕B⊕Cin; Cout=AB+ACin+BCin"
              ]
            ]
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "Full-adder example",
            "text": "For A=1, B=0, Cin=1: S=1⊕0⊕1=0 and Cout=(1·0)+(1·1)+(0·1)=1. Therefore the three input bits 1+0+1 produce sum 0 with carry 1."
          },
          {
            "kind": "paragraph",
            "text": "A multi-bit binary adder is formed by connecting full adders for successive bit positions. In a ripple-carry arrangement, the carry generated by a lower stage becomes the carry input of the next stage, so carry propagation affects speed."
          },
          {
            "kind": "diagram",
            "diagramId": "bca-sem3-de-adders",
            "caption": "Half-adder and full-adder logic, followed by cascading full adders for multi-bit binary addition."
          }
        ]
      },
      {
        "id": "subtractors",
        "title": "2. Subtractors: Half and Full Subtractor",
        "icon": "Scale",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A half subtractor subtracts B from A and produces Difference D and Borrow Bout. A full subtractor also considers an input borrow Bin from the previous lower-order stage."
          },
          {
            "kind": "table",
            "headers": [
              "Circuit",
              "Difference",
              "Borrow"
            ],
            "rows": [
              [
                "Half Subtractor",
                "D=A⊕B",
                "Bout=A̅B"
              ],
              [
                "Full Subtractor",
                "D=A⊕B⊕Bin",
                "Bout=A̅B + A̅Bin + B·Bin"
              ]
            ]
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "Half-subtractor example",
            "text": "For A=0 and B=1, D=0⊕1=1 and Bout=A̅B=1·1=1. This represents 0−1 as a one-bit difference with a borrow."
          },
          {
            "kind": "paragraph",
            "text": "Subtractor stages can be cascaded for multi-bit subtraction. Another common implementation is to use an adder with complemented subtrahend bits and an appropriate carry-in, which is closely related to 2’s-complement subtraction."
          }
        ]
      },
      {
        "id": "comparators",
        "title": "3. Magnitude Comparator",
        "icon": "GitCompare",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A magnitude comparator is a combinational circuit that compares two binary numbers and indicates whether A>B, A=B or A<B. For a one-bit comparator, equality is produced by XNOR, while greater-than and less-than conditions depend on the input combinations."
          },
          {
            "kind": "table",
            "headers": [
              "Condition",
              "One-bit expression"
            ],
            "rows": [
              [
                "A>B",
                "A·B̅"
              ],
              [
                "A=B",
                "A XNOR B = AB + A̅B̅"
              ],
              [
                "A<B",
                "A̅·B"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "For multi-bit numbers, the most significant differing bit determines the comparison. If all higher-order bits are equal, the next lower bit is examined. Comparator ICs can be cascaded to compare wider words."
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "Comparison example",
            "text": "Compare A=1010₂ and B=1001₂. The first three bits are equal, while the least significant bit differs: A has 0 and B has 1. Therefore A<B, so the A<B output is active."
          }
        ]
      },
      {
        "id": "multiplexers-demultiplexers",
        "title": "4. Multiplexer and Demultiplexer",
        "icon": "Network",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A multiplexer (MUX) selects one of several input data lines and connects the selected input to a single output. Selection is controlled by select lines. A demultiplexer (DEMUX) performs the reverse routing operation: one input is directed to one of several outputs according to the select lines."
          },
          {
            "kind": "table",
            "headers": [
              "Device",
              "Inputs",
              "Outputs",
              "Selection relationship"
            ],
            "rows": [
              [
                "2:1 MUX",
                "2 data inputs + 1 select",
                "1",
                "1 select line chooses one input"
              ],
              [
                "4:1 MUX",
                "4 data inputs + 2 selects",
                "1",
                "2 select lines choose one of four inputs"
              ],
              [
                "1:4 DEMUX",
                "1 data input + 2 selects",
                "4",
                "2 select lines choose one output"
              ]
            ]
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "4:1 MUX",
            "text": "With select lines S1S0=10, the selected input is I2. Therefore the output Y equals I2, irrespective of the values currently present on the other data inputs."
          },
          {
            "kind": "diagram",
            "diagramId": "bca-sem3-de-mux-demux",
            "caption": "Selection and routing principle of a 4:1 multiplexer and 1:4 demultiplexer."
          }
        ]
      },
      {
        "id": "decoders-encoders",
        "title": "5. Decoder and Encoder",
        "icon": "Cpu",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A decoder converts an n-bit binary input into up to 2^n mutually exclusive output lines. An encoder performs the reverse conceptual operation by converting one active input among several lines into a binary code. A priority encoder resolves cases in which more than one input may be active by assigning priority."
          },
          {
            "kind": "table",
            "headers": [
              "Circuit",
              "Typical relationship",
              "Application"
            ],
            "rows": [
              [
                "2-to-4 decoder",
                "2 inputs → 4 outputs",
                "Address or control-line selection"
              ],
              [
                "3-to-8 decoder",
                "3 inputs → 8 outputs",
                "Device selection and code decoding"
              ],
              [
                "8-to-3 encoder",
                "8 inputs → 3-bit code",
                "Code generation from one active input"
              ],
              [
                "Priority encoder",
                "Many inputs → encoded output with priority",
                "Interrupt and request handling"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Decoder outputs may be active-high or active-low depending on the implementation. Enable inputs are often provided so that the device can be activated or disabled as part of a larger system."
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Exam distinction",
            "text": "A decoder expands a binary code into one-of-many output selections, while an encoder compresses one-of-many active input conditions into a binary code. This direction of information flow is a common exam point."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Combinational Circuit",
        "definition": "A digital circuit whose output depends only on the present input values."
      },
      {
        "term": "Half Adder",
        "definition": "A circuit that adds two one-bit inputs and produces sum and carry."
      },
      {
        "term": "Full Adder",
        "definition": "A circuit that adds two bits and an input carry."
      },
      {
        "term": "Borrow",
        "definition": "The borrow output generated during binary subtraction."
      },
      {
        "term": "Comparator",
        "definition": "A circuit that indicates greater-than, equality and less-than relationships between binary values."
      },
      {
        "term": "Multiplexer",
        "definition": "A data selector that routes one of several inputs to a single output."
      },
      {
        "term": "Demultiplexer",
        "definition": "A data distributor that routes one input to one of several outputs."
      },
      {
        "term": "Decoder",
        "definition": "A circuit that converts an n-bit code into one of up to 2^n output selections."
      },
      {
        "term": "Encoder",
        "definition": "A circuit that converts an active input selection into a binary code."
      }
    ],
    "examQuestions": [
      "Explain the working of a half adder with truth table and logic equations. (Medium)",
      "Explain the full adder and derive its Sum and Carry expressions. (Long)",
      "Explain how multi-bit binary addition is performed using cascaded full adders. (Long)",
      "Differentiate half adder and full adder. (Medium)",
      "Explain half subtractor and full subtractor with equations. (Long)",
      "Explain the working of a magnitude comparator. (Long)",
      "Explain the operation of a 4:1 multiplexer with selection logic. (Long)",
      "Explain the difference between multiplexer and demultiplexer. (Medium)",
      "Explain decoder and encoder with suitable examples. (Long)",
      "What is a priority encoder and why is priority required? (Medium)"
    ]
  },
  {
    "unitNumber": 3,
    "title": "Sequential Circuit",
    "hours": 8,
    "headings": [
      {
        "id": "flip-flop-introduction",
        "title": "1. Introduction to Flip-Flops and Sequential Circuits",
        "icon": "Cpu",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A sequential circuit contains memory. Its output depends on present inputs and the stored previous state. A flip-flop is a bistable storage element that can maintain one binary state until an appropriate control condition changes it."
          },
          {
            "kind": "table",
            "headers": [
              "Feature",
              "Combinational circuit",
              "Sequential circuit"
            ],
            "rows": [
              [
                "Memory",
                "Absent",
                "Present"
              ],
              [
                "Output depends on",
                "Current inputs",
                "Current inputs + previous state"
              ],
              [
                "Typical elements",
                "Gates, adders, MUX",
                "Flip-flops, registers, counters"
              ],
              [
                "Clock",
                "Not essential",
                "Often used for synchronous operation"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "A clocked sequential system changes state in relation to a clock. Synchronous circuits are easier to analyze because state transitions occur at defined clock events. Asynchronous sequential circuits may respond to input changes without a common clock."
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Exam point",
            "text": "The key distinction is memory. If the circuit must remember a previous condition, it requires a storage mechanism such as a latch or flip-flop."
          }
        ]
      },
      {
        "id": "sr-jk-flipflop",
        "title": "2. SR and JK Flip-Flops",
        "icon": "Repeat",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The SR flip-flop has Set and Reset controls. In the basic active-high form, S=1,R=0 sets Q to 1; S=0,R=1 resets Q to 0; S=R=0 holds the previous state. The combination S=R=1 is treated as invalid in the simple NOR-based SR implementation."
          },
          {
            "kind": "table",
            "headers": [
              "S",
              "R",
              "Next Q",
              "Meaning"
            ],
            "rows": [
              [
                "0",
                "0",
                "Q",
                "Hold"
              ],
              [
                "0",
                "1",
                "0",
                "Reset"
              ],
              [
                "1",
                "0",
                "1",
                "Set"
              ],
              [
                "1",
                "1",
                "Invalid for basic SR",
                "Forbidden condition"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "The JK flip-flop improves on the SR limitation. With J=K=1, the output toggles on the active clock event rather than entering an invalid state."
          },
          {
            "kind": "table",
            "headers": [
              "J",
              "K",
              "Next Q",
              "Meaning"
            ],
            "rows": [
              [
                "0",
                "0",
                "Q",
                "No change"
              ],
              [
                "0",
                "1",
                "0",
                "Reset"
              ],
              [
                "1",
                "0",
                "1",
                "Set"
              ],
              [
                "1",
                "1",
                "Q̅",
                "Toggle"
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "bca-sem3-de-flipflops",
            "caption": "SR, JK, D and T flip-flop state-transition concepts and characteristic behavior."
          }
        ]
      },
      {
        "id": "d-t-flipflops",
        "title": "3. D and T Flip-Flops; Characteristic and Excitation Tables",
        "icon": "Table",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The D flip-flop has a single data input. On the active clock event, the next state follows D, so Q(next)=D. It is widely used for data storage and delay. The T flip-flop has a toggle input: T=0 holds the state and T=1 complements it."
          },
          {
            "kind": "table",
            "headers": [
              "Flip-flop",
              "Characteristic equation",
              "Main behavior"
            ],
            "rows": [
              [
                "D",
                "Q(next)=D",
                "Stores the D input"
              ],
              [
                "T",
                "Q(next)=T⊕Q",
                "Hold for T=0; toggle for T=1"
              ],
              [
                "JK",
                "Q(next)=JQ̅ + K̅Q",
                "Set, reset, hold or toggle"
              ]
            ]
          },
          {
            "kind": "table",
            "headers": [
              "Present Q",
              "Next Q",
              "D required",
              "T required"
            ],
            "rows": [
              [
                "0",
                "0",
                "0",
                "0"
              ],
              [
                "0",
                "1",
                "1",
                "1"
              ],
              [
                "1",
                "0",
                "0",
                "1"
              ],
              [
                "1",
                "1",
                "1",
                "0"
              ]
            ]
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "Excitation-table use",
            "text": "Suppose a D flip-flop must move from Q=0 to Q(next)=1. Because Q(next)=D, the required D input is 1. For a T flip-flop, a 0→1 transition requires T=1 because the state must toggle."
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Exam point",
            "text": "Characteristic tables tell what next state results from an input. Excitation tables tell what input is required to obtain a desired transition. This distinction is essential in sequential-circuit design."
          }
        ]
      },
      {
        "id": "master-slave",
        "title": "4. Master-Slave Flip-Flop",
        "icon": "GitBranch",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A master-slave flip-flop uses two stages connected in cascade. The master responds during one clock level and the slave responds during the opposite level. This arrangement prevents the output from following repeated changes at the input during the active clock interval in the way a level-sensitive arrangement might."
          },
          {
            "kind": "paragraph",
            "text": "Conceptually, the master captures the input first and the slave transfers the captured state to the output later. The result is controlled state transfer associated with the clock transition."
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "JK master-slave idea",
            "text": "When the clock is in the master-active phase, the master stores the JK result while the slave remains isolated. When the clock changes phase, the slave updates from the master. This prevents uncontrolled repeated toggling during one clock pulse."
          },
          {
            "kind": "diagram",
            "diagramId": "bca-sem3-de-master-slave",
            "caption": "Two-stage master-slave arrangement showing clock-controlled transfer from master to slave."
          }
        ]
      },
      {
        "id": "sequential-design",
        "title": "5. Design of Sequential Circuits",
        "icon": "PenTool",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Sequential-circuit design normally begins with a specification of states and transitions. The designer identifies inputs and outputs, creates a state diagram or state table, selects a flip-flop type, derives excitation requirements, simplifies the required logic and then verifies the resulting circuit."
          },
          {
            "kind": "table",
            "headers": [
              "Design step",
              "Purpose"
            ],
            "rows": [
              [
                "1. Define behavior",
                "Identify required states, inputs and outputs"
              ],
              [
                "2. State diagram/table",
                "Describe allowed state transitions"
              ],
              [
                "3. Select flip-flop",
                "Choose D, JK, T or another storage element"
              ],
              [
                "4. Derive excitation",
                "Determine flip-flop inputs for each transition"
              ],
              [
                "5. Simplify logic",
                "Use Boolean algebra/K-map to reduce equations"
              ],
              [
                "6. Implement and verify",
                "Connect gates and test all relevant transitions"
              ]
            ]
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "Simple sequence example",
            "text": "Suppose a two-state controller must alternate between states 0 and 1 on every clock. A T flip-flop with T=1 continuously produces 0→1→0→1 transitions. The flip-flop itself supplies the required state memory and toggle behavior."
          },
          {
            "kind": "diagram",
            "diagramId": "bca-sem3-de-sequence-design",
            "caption": "General workflow for designing a synchronous sequential circuit from specification to verified logic."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Sequential Circuit",
        "definition": "A circuit whose output depends on present inputs and stored previous state."
      },
      {
        "term": "Flip-Flop",
        "definition": "A bistable storage element capable of retaining one binary state."
      },
      {
        "term": "SR Flip-Flop",
        "definition": "Set-reset storage element with separate set and reset controls."
      },
      {
        "term": "JK Flip-Flop",
        "definition": "A flip-flop whose J=K=1 condition causes toggling."
      },
      {
        "term": "D Flip-Flop",
        "definition": "A data-storage flip-flop with next state equal to D."
      },
      {
        "term": "T Flip-Flop",
        "definition": "A toggle flip-flop that changes state when T=1."
      },
      {
        "term": "Characteristic Table",
        "definition": "A table showing the next state produced by each input and present-state combination."
      },
      {
        "term": "Excitation Table",
        "definition": "A table showing the input required to cause a desired state transition."
      },
      {
        "term": "Master-Slave",
        "definition": "A two-stage flip-flop arrangement in which master and slave transfer state in opposite clock phases."
      }
    ],
    "examQuestions": [
      "Differentiate combinational and sequential circuits. (Medium)",
      "Explain the concept and working of a flip-flop. (Long)",
      "Explain SR flip-flop with truth table and forbidden condition. (Long)",
      "Explain JK flip-flop and its toggle operation. (Long)",
      "Explain D and T flip-flops with characteristic equations. (Long)",
      "Differentiate characteristic and excitation tables with examples. (Medium)",
      "Construct the excitation table of a D or T flip-flop. (Medium)",
      "Explain the master-slave flip-flop and its purpose. (Long)",
      "Explain the general procedure for designing a synchronous sequential circuit. (Long)",
      "Explain state diagrams and state tables in sequential-circuit design. (Medium)"
    ]
  },
  {
    "unitNumber": 4,
    "title": "Registers",
    "hours": 8,
    "headings": [
      {
        "id": "register-introduction",
        "title": "1. Introduction and Classification of Registers",
        "icon": "FolderOpen",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A register is a group of flip-flops used to store and manipulate a multi-bit binary word. A 4-bit register normally uses four flip-flops, one for each bit. Registers are fundamental storage and data-transfer elements in digital systems."
          },
          {
            "kind": "table",
            "headers": [
              "Register type",
              "Data movement",
              "Typical use"
            ],
            "rows": [
              [
                "Parallel register",
                "All bits loaded together",
                "Temporary word storage"
              ],
              [
                "Shift-right register",
                "Bits move toward the right on clock events",
                "Serial transfer and arithmetic shifts"
              ],
              [
                "Shift-left register",
                "Bits move toward the left on clock events",
                "Serial transfer and bit manipulation"
              ],
              [
                "Universal shift register",
                "Can shift in either direction and load in parallel",
                "Flexible data movement"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Registers may be classified by how data enters and leaves: serial-in serial-out (SISO), serial-in parallel-out (SIPO), parallel-in serial-out (PISO), and parallel-in parallel-out (PIPO)."
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "4-bit storage",
            "text": "A 4-bit PIPO register receiving 1011 on its parallel inputs loads all four bits together on the active clock event, after which the stored outputs represent 1011 until changed."
          }
        ]
      },
      {
        "id": "parallel-load",
        "title": "2. Register with Parallel Load",
        "icon": "FileCheck",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A parallel-load register accepts several data bits simultaneously. A load control determines whether the register should capture new input data or retain its existing contents. This makes parallel loading suitable for fast transfer of a complete word."
          },
          {
            "kind": "table",
            "headers": [
              "Load control",
              "Operation"
            ],
            "rows": [
              [
                "LOAD=1",
                "On the active clock event, input word is stored"
              ],
              [
                "LOAD=0",
                "Stored word is retained, subject to the circuit design"
              ]
            ]
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "Parallel-load example",
            "text": "For a 4-bit register currently holding 0101, if LOAD is enabled and the parallel inputs are 1100, the next stored word becomes 1100 after the active clock event. Without the load condition, the previous 0101 is retained."
          },
          {
            "kind": "diagram",
            "diagramId": "bca-sem3-de-parallel-load-register",
            "caption": "4-bit register showing simultaneous parallel loading of a binary word."
          }
        ]
      },
      {
        "id": "shift-registers",
        "title": "3. Shift Registers: SISO, SIPO, PISO and PIPO",
        "icon": "MoveHorizontal",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A shift register transfers stored bits one position per clock event. In a right shift, each bit moves toward the least significant position and a new bit enters at the most significant side; in a left shift, the direction is reversed."
          },
          {
            "kind": "table",
            "headers": [
              "Type",
              "Input",
              "Output",
              "Use"
            ],
            "rows": [
              [
                "SISO",
                "Serial",
                "Serial",
                "Delay and serial transfer"
              ],
              [
                "SIPO",
                "Serial",
                "Parallel",
                "Serial-to-parallel conversion"
              ],
              [
                "PISO",
                "Parallel",
                "Serial",
                "Parallel-to-serial conversion"
              ],
              [
                "PIPO",
                "Parallel",
                "Parallel",
                "Parallel data storage"
              ]
            ]
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "Shift example",
            "text": "Consider a 4-bit right-shift register initially containing 1011. If a 0 enters from the left, one right shift produces 0101. A second right shift with a new input 1 produces 1010. The exact bit movement depends on the chosen input/output orientation."
          },
          {
            "kind": "diagram",
            "diagramId": "bca-sem3-de-shift-registers",
            "caption": "Four-bit shift-register operation and the four common serial/parallel input-output configurations."
          }
        ]
      },
      {
        "id": "bidirectional-register",
        "title": "4. Bidirectional Shift Register",
        "icon": "ArrowLeftRight",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A bidirectional shift register can shift data either left or right under the control of a direction input. A selection circuit chooses which neighboring flip-flop supplies the next value to each stage."
          },
          {
            "kind": "table",
            "headers": [
              "Direction control",
              "Action"
            ],
            "rows": [
              [
                "LEFT",
                "Shift each stored bit one position toward the left"
              ],
              [
                "RIGHT",
                "Shift each stored bit one position toward the right"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Bidirectional operation is useful in processors and communication interfaces where the same register must support movement in both directions. A universal shift register extends this idea by adding parallel loading and often a hold mode."
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Exam point",
            "text": "When drawing a shift-register diagram, label the clock, direction control, serial inputs, parallel inputs if present, and outputs. Also show clearly which flip-flop receives the incoming bit."
          }
        ]
      },
      {
        "id": "universal-register",
        "title": "5. Universal Shift Register",
        "icon": "Settings",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A universal shift register is designed to perform several operations, commonly hold, shift left, shift right and parallel load. Multiplexing logic before the flip-flop inputs selects the required source for each operation."
          },
          {
            "kind": "table",
            "headers": [
              "Control selection",
              "Typical operation"
            ],
            "rows": [
              [
                "00",
                "Hold"
              ],
              [
                "01",
                "Shift right"
              ],
              [
                "10",
                "Shift left"
              ],
              [
                "11",
                "Parallel load"
              ]
            ]
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "Operation selection",
            "text": "If the control inputs are defined as 11 for parallel load and the input word is 1001, the register loads 1001 at the active clock event. If the control changes to the shift-right selection, subsequent clock events move the stored bits right and admit the serial input."
          },
          {
            "kind": "diagram",
            "diagramId": "bca-sem3-de-universal-register",
            "caption": "Universal shift-register control concept: hold, shift right, shift left and parallel load."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Register",
        "definition": "A group of flip-flops used to store a multi-bit binary word."
      },
      {
        "term": "Parallel Load",
        "definition": "Loading all register bits simultaneously from parallel inputs."
      },
      {
        "term": "Shift Register",
        "definition": "A register that moves stored bits between stages on clock events."
      },
      {
        "term": "SISO",
        "definition": "Serial-in serial-out register configuration."
      },
      {
        "term": "SIPO",
        "definition": "Serial-in parallel-out register configuration."
      },
      {
        "term": "PISO",
        "definition": "Parallel-in serial-out register configuration."
      },
      {
        "term": "PIPO",
        "definition": "Parallel-in parallel-out register configuration."
      },
      {
        "term": "Bidirectional Register",
        "definition": "A register capable of shifting data in either direction."
      },
      {
        "term": "Universal Shift Register",
        "definition": "A flexible register supporting hold, bidirectional shifting and parallel loading."
      }
    ],
    "examQuestions": [
      "Define a register and explain its role in digital systems. (Medium)",
      "Explain the classification of registers based on serial and parallel data transfer. (Long)",
      "Explain a register with parallel load using a suitable example. (Long)",
      "Explain SISO, SIPO, PISO and PIPO registers. (Long)",
      "Explain the operation of a shift register with a step-by-step example. (Long)",
      "Differentiate left shift and right shift operations. (Medium)",
      "Explain the working of a bidirectional shift register. (Long)",
      "Explain the universal shift register and its major modes of operation. (Long)",
      "Compare serial and parallel data transfer in registers. (Medium)",
      "State practical applications of shift registers. (Short)"
    ]
  },
  {
    "unitNumber": 5,
    "title": "Counters",
    "hours": 8,
    "headings": [
      {
        "id": "counter-introduction",
        "title": "1. Introduction to Counters",
        "icon": "Repeat",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A counter is a sequential circuit that advances through a prescribed sequence of binary states in response to clock events. Counters are used for counting events, timing, frequency division, sequencing and control."
          },
          {
            "kind": "table",
            "headers": [
              "Counter concept",
              "Meaning"
            ],
            "rows": [
              [
                "State",
                "Current binary value stored by the counter"
              ],
              [
                "Count sequence",
                "Ordered list of states through which the counter moves"
              ],
              [
                "Modulus",
                "Number of distinct states before the sequence repeats"
              ],
              [
                "Clock",
                "Timing signal that causes state transitions"
              ]
            ]
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "Modulus example",
            "text": "A 3-bit binary up-counter has 2³=8 distinct states: 000 through 111. Therefore it is a MOD-8 counter and repeats after eight clock events."
          },
          {
            "kind": "paragraph",
            "text": "Counters may be asynchronous (ripple) or synchronous. They may also count upward, downward, or follow a custom sequence."
          }
        ]
      },
      {
        "id": "asynchronous-ripple",
        "title": "2. Asynchronous / Ripple Counters",
        "icon": "Repeat",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "In an asynchronous counter, only the first flip-flop receives the external clock. The output of one stage provides the clock or triggering signal for the next stage, so changes ripple through the chain."
          },
          {
            "kind": "table",
            "headers": [
              "Characteristic",
              "Ripple counter"
            ],
            "rows": [
              [
                "Clocking",
                "Stages are triggered successively"
              ],
              [
                "Propagation delay",
                "Accumulates across stages"
              ],
              [
                "Design",
                "Simple and economical"
              ],
              [
                "Limitation",
                "Temporary intermediate states can appear during transitions"
              ]
            ]
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "3-bit ripple count",
            "text": "A 3-bit binary ripple counter progresses 000→001→010→011→100→101→110→111→000. Because each stage responds after the preceding stage changes, the physical outputs do not switch at exactly the same instant."
          },
          {
            "kind": "diagram",
            "diagramId": "bca-sem3-de-ripple-counter",
            "caption": "Three-bit asynchronous ripple counter showing cascaded flip-flop clocking."
          }
        ]
      },
      {
        "id": "synchronous-counters",
        "title": "3. Synchronous Counters",
        "icon": "Cpu",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "In a synchronous counter, all flip-flops receive the same clock. Additional combinational logic determines which flip-flops should toggle on each clock event. This avoids the stage-by-stage ripple timing inherent in asynchronous counters."
          },
          {
            "kind": "table",
            "headers": [
              "Characteristic",
              "Synchronous counter"
            ],
            "rows": [
              [
                "Clocking",
                "Common clock reaches all stages"
              ],
              [
                "Propagation delay",
                "Primarily determined by logic and flip-flop delays rather than ripple through all stages"
              ],
              [
                "Speed",
                "Generally suitable for higher-speed operation"
              ],
              [
                "Design",
                "Requires additional logic for the desired sequence"
              ]
            ]
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "3-bit synchronous up-counter",
            "text": "For a T-flip-flop implementation, the least significant stage can toggle every clock, the next stage toggles when the lower bit is 1, and the third stage toggles when the two lower bits are both 1. This produces the standard binary count sequence."
          },
          {
            "kind": "diagram",
            "diagramId": "bca-sem3-de-synchronous-counter",
            "caption": "Common-clock synchronous counter with toggle-control logic for successive stages."
          }
        ]
      },
      {
        "id": "bcd-binary-parallel-load",
        "title": "4. BCD Counter and 4-bit Binary Counter with Parallel Load",
        "icon": "FileCheck",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A BCD counter counts decimal digits 0 through 9 using four binary bits and then returns to 0000. The six binary states 1010 through 1111 are not used as valid BCD digit states in a standard decade counter."
          },
          {
            "kind": "table",
            "headers": [
              "Decimal digit",
              "BCD"
            ],
            "rows": [
              [
                "0",
                "0000"
              ],
              [
                "1",
                "0001"
              ],
              [
                "2",
                "0010"
              ],
              [
                "3",
                "0011"
              ],
              [
                "4",
                "0100"
              ],
              [
                "5",
                "0101"
              ],
              [
                "6",
                "0110"
              ],
              [
                "7",
                "0111"
              ],
              [
                "8",
                "1000"
              ],
              [
                "9",
                "1001"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "A 4-bit binary counter with parallel load can either advance through its count sequence or load a specified four-bit value when the load control is asserted. This permits presetting a counter to a chosen starting value."
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "Parallel-load example",
            "text": "If a 4-bit counter is loaded with 1010, the next counting operation begins from decimal 10 rather than 0, subject to the specific counter’s control and counting direction."
          },
          {
            "kind": "diagram",
            "diagramId": "bca-sem3-de-bcd-parallel-load",
            "caption": "BCD decade counting sequence and the concept of presetting a 4-bit counter by parallel load."
          }
        ]
      },
      {
        "id": "ring-johnson",
        "title": "5. Ring Counter and Johnson Counter; Design of Synchronous Counters",
        "icon": "Waves",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A ring counter is a shift-register counter in which the output of the final stage is fed back to the input of the first stage. With n stages and a one-hot initial state, a basic ring counter cycles through n distinct one-hot states."
          },
          {
            "kind": "paragraph",
            "text": "A Johnson counter, also called a twisted-ring counter, feeds the complemented output of the last stage back to the first stage. With n flip-flops, the standard sequence has 2n distinct states."
          },
          {
            "kind": "table",
            "headers": [
              "Counter",
              "Feedback",
              "Typical number of states with n stages"
            ],
            "rows": [
              [
                "Ring counter",
                "Last output fed directly to first input",
                "n"
              ],
              [
                "Johnson counter",
                "Complemented last output fed to first input",
                "2n"
              ]
            ]
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "4-stage comparison",
            "text": "A four-stage ring counter with a single 1 can cycle through 1000→0100→0010→0001→1000. A four-stage Johnson counter has 8 states in its standard sequence because 2n=8."
          },
          {
            "kind": "paragraph",
            "text": "Designing a synchronous counter involves specifying the required sequence, selecting flip-flops, constructing a present-state/next-state table, deriving excitation inputs, simplifying the logic and verifying unused-state behavior."
          },
          {
            "kind": "diagram",
            "diagramId": "bca-sem3-de-ring-johnson",
            "caption": "Feedback structures of ring and Johnson counters and their state-sequence concept."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Counter",
        "definition": "A sequential circuit that advances through a defined sequence of states on clock events."
      },
      {
        "term": "Modulus",
        "definition": "The number of distinct states in a counter’s repeating sequence."
      },
      {
        "term": "Ripple Counter",
        "definition": "An asynchronous counter in which clocking propagates from one stage to the next."
      },
      {
        "term": "Synchronous Counter",
        "definition": "A counter in which all flip-flops receive a common clock."
      },
      {
        "term": "BCD Counter",
        "definition": "A counter that cycles through the ten valid BCD digit states 0000 to 1001."
      },
      {
        "term": "Parallel Load",
        "definition": "A counter operation that presets multiple stored bits simultaneously."
      },
      {
        "term": "Ring Counter",
        "definition": "A shift-register counter with direct feedback from the final stage to the first."
      },
      {
        "term": "Johnson Counter",
        "definition": "A twisted-ring counter using complemented feedback and producing 2n states with n stages."
      },
      {
        "term": "State Sequence",
        "definition": "The ordered list of counter states through which the circuit cycles."
      }
    ],
    "examQuestions": [
      "Define a counter and explain its applications. (Medium)",
      "Explain modulus and determine the modulus of a 3-bit binary counter. (Medium)",
      "Explain the working of an asynchronous or ripple counter. (Long)",
      "Discuss the advantages and limitations of ripple counters. (Medium)",
      "Explain the working of a synchronous counter. (Long)",
      "Differentiate asynchronous and synchronous counters. (Long)",
      "Explain a BCD counter and its valid state sequence. (Long)",
      "Explain a 4-bit binary counter with parallel load. (Long)",
      "Explain the working of a ring counter with a suitable state sequence. (Long)",
      "Explain the Johnson counter and compare it with a ring counter. (Long)",
      "Describe the general procedure for designing a synchronous counter. (Medium)"
    ]
  }
];
