import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Computer Organization and Architecture (C-404)
// — Dr. Bhimrao Ambedkar University, Agra, B.C.A. Fourth Semester.
export const computerOrganizationArchitectureC404UnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Basic Computer Organization and Instruction Formats",
    hours: 8,
    headings: [
      {
        id: "von-neumann-and-basic-structure",
        title: "1. Von Neumann Architecture and Basic Structure of Computers",
        icon: "Cpu",
        blocks: [
          {
            kind: "paragraph",
            text: "The Von Neumann architecture stores program instructions and data in the same main memory and uses a common communication path between the processor and memory. The CPU repeatedly fetches an instruction, decodes it, obtains required operands, executes the operation and stores the result when necessary. The basic organization contains the CPU, main memory, input devices and output devices connected through system interconnection paths."
          },
          {
            kind: "diagram",
            diagramId: "c404-von-neumann-structure",
            caption: "Basic Von Neumann computer organization showing CPU, memory and I/O."
          },
          {
            kind: "table",
            headers: ["Component", "Primary role"],
            rows: [
              ["ALU", "Performs arithmetic and logical operations."],
              ["Control Unit", "Generates control signals and coordinates instruction execution."],
              ["Registers", "Provide very fast temporary storage inside the CPU."],
              ["Main memory", "Stores instructions and data currently required by programs."],
              ["Input unit", "Transfers information from external sources into the computer."],
              ["Output unit", "Transfers processed information to external devices."]
            ]
          }
        ]
      },
      {
        id: "operational-concepts",
        title: "2. Operational Concepts and Instruction Execution",
        icon: "Play",
        blocks: [
          {
            kind: "paragraph",
            text: "Instruction execution follows a sequence of micro-operations. The Program Counter (PC) identifies the address of the next instruction. During fetch, the instruction is brought from memory and loaded into the Instruction Register (IR). The control unit decodes the instruction and issues control signals for the required execute phase. Operand transfers, ALU operations and memory accesses are performed according to the instruction."
          },
          {
            kind: "diagram",
            diagramId: "c404-instruction-cycle",
            caption: "Fetch-decode-execute instruction cycle."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Simple Instruction-Execution Example",
            text: "For an instruction such as ADD R1,R2, the CPU first fetches and decodes the instruction. The control unit identifies the source and destination registers and selects the ALU addition operation. The ALU produces the sum and the destination register receives the result. Exact micro-operations depend on the processor organization."
          }
        ]
      },
      {
        id: "arithmetic-and-logic",
        title: "3. Arithmetic, Logic and Shift Micro-Operations",
        icon: "Calculator",
        blocks: [
          {
            kind: "paragraph",
            text: "Micro-operations are elementary operations performed on data stored in registers. Arithmetic micro-operations include addition, subtraction, increment and decrement. Logic micro-operations include AND, OR, XOR and complement. Shift micro-operations move bit patterns left or right and may be logical, arithmetic or circular."
          },
          {
            kind: "table",
            headers: ["Category", "Examples", "Purpose"],
            rows: [
              ["Arithmetic", "R3 ← R1 + R2; R1 ← R1 + 1", "Numerical operations and address calculations."],
              ["Logic", "R1 ← R1 AND R2; R1 ← R1 XOR R2", "Bit manipulation and masking."],
              ["Logical shift", "Shift left/right with zero fill", "Bit movement without preserving a sign bit."],
              ["Arithmetic shift", "Signed shift with sign preservation on right shift", "Signed arithmetic operations."],
              ["Circular shift", "Bit shifted out re-enters at the opposite end", "Rotation and bit-level processing."]
            ]
          }
        ]
      },
      {
        id: "instruction-set-characteristics",
        title: "4. Instruction Set Characteristics",
        icon: "List",
        blocks: [
          {
            kind: "paragraph",
            text: "An instruction set defines the operations that a processor can execute and the way operands are represented and accessed. Instruction-set characteristics include the operation repertoire, number and type of operands, register organization, addressing methods, instruction length and memory-access behavior. These choices affect instruction encoding, implementation complexity and performance."
          },
          {
            kind: "table",
            headers: ["Characteristic", "Question it answers"],
            rows: [
              ["Operation types", "What operations can the CPU perform?"],
              ["Operands", "How many operands can an instruction specify and where are they located?"],
              ["Instruction length", "How many bits/bytes encode an instruction?"],
              ["Registers", "Which general-purpose or special-purpose registers are available?"],
              ["Memory access", "Which instructions can read/write memory?"],
              ["Addressing modes", "How is the effective operand address determined?"]
            ]
          }
        ]
      },
      {
        id: "cpu-single-bus",
        title: "5. CPU Organization with a Single Bus",
        icon: "Network",
        blocks: [
          {
            kind: "paragraph",
            text: "A single-bus CPU organization connects processor registers and functional units through one common internal bus. Only one source generally places data on the bus at a time, while one or more destination registers can load the bus value under control signals. The organization reduces interconnection complexity but can create bus contention and limits the number of simultaneous transfers."
          },
          {
            kind: "diagram",
            diagramId: "c404-single-bus-cpu",
            caption: "Conceptual single-bus CPU organization with registers, ALU and control unit."
          }
        ]
      },
      {
        id: "types-of-operators",
        title: "6. Types of Operators and Operands",
        icon: "Binary",
        blocks: [
          {
            kind: "paragraph",
            text: "Operators describe the action performed by an instruction, such as arithmetic, logical, shift, transfer, compare or control operations. Operands are the data items on which the operation acts. Depending on the instruction set, operands may be located in registers, memory or encoded directly inside the instruction."
          },
          {
            kind: "table",
            headers: ["Operand location", "Example idea"],
            rows: [
              ["Register", "ADD R1,R2"],
              ["Immediate", "ADD R1,#5"],
              ["Memory", "ADD R1,[address]"],
              ["Implicit", "An instruction uses an operand implied by the opcode or architecture."]
            ]
          }
        ]
      },
      {
        id: "addressing-modes",
        title: "7. Addressing Modes",
        icon: "MapPin",
        blocks: [
          {
            kind: "paragraph",
            text: "An addressing mode specifies how the processor obtains an operand or computes its effective address. Common modes include immediate, direct, indirect, register, register indirect, indexed, base/displacement and relative addressing. The exact set is architecture-dependent."
          },
          {
            kind: "table",
            headers: ["Mode", "Effective-address/operand idea", "Example form"],
            rows: [
              ["Immediate", "Operand value is inside the instruction.", "MOV R1,#25"],
              ["Direct", "Instruction contains the memory address.", "LOAD R1,[1000]"],
              ["Indirect", "Instruction points to a location containing the effective address.", "LOAD R1,[[1000]]"],
              ["Register", "Operand is in a register.", "ADD R1,R2"],
              ["Register indirect", "A register contains the memory address.", "LOAD R1,[R2]"],
              ["Indexed", "Base address plus index register.", "LOAD R1,[BASE+INDEX]"],
              ["Relative", "Effective address is based on PC plus displacement.", "Branch with displacement"]
            ]
          },
          {
            kind: "callout",
            tone: "example",
            title: "Addressing-Mode Example",
            text: "If a register R2 contains 5000 and the instruction uses register-indirect addressing [R2], the memory operand is obtained from address 5000. If indexed addressing uses base 5000 and index 20, the effective address is 5020, assuming no additional scaling."
          }
        ]
      },
      {
        id: "instruction-formats",
        title: "8. Instruction Formats",
        icon: "Rows3",
        blocks: [
          {
            kind: "paragraph",
            text: "An instruction format specifies how the bits of an instruction are divided into fields such as opcode, register identifiers, addressing-mode bits and immediate/displacement fields. Common classifications include zero-address, one-address, two-address and three-address formats. The number of explicit address fields affects instruction length and the number of instructions required for an operation."
          },
          {
            kind: "diagram",
            diagramId: "c404-instruction-formats",
            caption: "Conceptual zero-, one-, two- and three-address instruction formats."
          },
          {
            kind: "table",
            headers: ["Format", "Example idea", "Typical organization"],
            rows: [
              ["Zero-address", "ADD", "Stack-oriented; operands are implicit on stack top."],
              ["One-address", "ADD X", "Accumulator is an implicit operand."],
              ["Two-address", "ADD R1,R2", "One operand can also serve as destination."],
              ["Three-address", "ADD R1,R2,R3", "Two sources and a separate destination can be explicit."]
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Von Neumann Architecture", definition: "Architecture in which instructions and data share a common memory system." },
      { term: "ALU", definition: "Arithmetic Logic Unit that performs arithmetic and logical operations." },
      { term: "Program Counter", definition: "Register containing the address of the next instruction to be fetched." },
      { term: "Instruction Register", definition: "Register holding the instruction currently being decoded/executed." },
      { term: "Micro-operation", definition: "An elementary operation performed on data stored in processor registers." },
      { term: "Addressing Mode", definition: "Rule used to determine an instruction operand or its effective address." },
      { term: "Instruction Format", definition: "Bit-field organization of an instruction." },
      { term: "Effective Address", definition: "Actual address of the operand in memory after applying the addressing mode." }
    ],
    examQuestions: [
      "Explain Von Neumann architecture with a neat diagram. (Long)",
      "Explain the basic structure and functional units of a computer. (Long)",
      "Describe the fetch-decode-execute instruction cycle. (Long)",
      "Explain arithmetic, logic and shift micro-operations with examples. (Medium)",
      "Discuss important instruction-set characteristics. (Medium)",
      "Explain CPU organization with a single bus. (Long)",
      "Explain different types of operands and operators. (Short)",
      "Explain common addressing modes with suitable examples. (Long)",
      "Explain zero-, one-, two- and three-address instruction formats. (Long)"
    ]
  },

  {
    unitNumber: 2,
    title: "Processor Organization and Control Unit",
    hours: 8,
    headings: [
      {
        id: "processor-organization",
        title: "1. Processor Organization and General Register Organization",
        icon: "Cpu",
        blocks: [
          {
            kind: "paragraph",
            text: "Processor organization describes how registers, ALU, control circuitry and internal buses are arranged to execute instructions. A general-register organization provides several registers that can hold operands, addresses and intermediate results. Register selection logic and the ALU are coordinated by control signals generated from the current instruction and processor state."
          },
          {
            kind: "diagram",
            diagramId: "c404-general-register-organization",
            caption: "General register organization feeding the ALU through internal selection and bus paths."
          }
        ]
      },
      {
        id: "parallelism-arithmetic",
        title: "2. Parallelism and Computer Arithmetic",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "Parallelism means performing multiple independent operations or handling multiple pieces of work at the same time. Processor organization can exploit instruction-level, data-level or hardware-level parallelism. Computer arithmetic includes representation and operations on integers and floating-point numbers; the processor implements these using arithmetic circuits and control sequences."
          },
          {
            kind: "table",
            headers: ["Topic", "Core idea"],
            rows: [
              ["Parallelism", "Overlap or perform independent computations concurrently."],
              ["Integer arithmetic", "Operations on fixed-width signed/unsigned representations."],
              ["Floating-point arithmetic", "Operations on sign, exponent and significand representations with normalization and rounding considerations."],
              ["Overflow", "Result exceeds the representable range for the chosen representation."]
            ]
          }
        ]
      },
      {
        id: "register-organization",
        title: "3. Register Organization and Microoperations",
        icon: "Table",
        blocks: [
          {
            kind: "paragraph",
            text: "Registers form the fastest storage level inside a processor. A register organization may include general-purpose registers plus special registers such as PC, IR, stack pointer and status/flag registers. Microoperations move and transform register contents under control of the control unit."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Register-Transfer Example",
            text: "An operation such as R3 ← R1 + R2 conceptually requires selecting R1 and R2 as ALU inputs, selecting addition as the ALU operation and enabling R3 to load the ALU result. The actual timing/control signals depend on the processor design."
          }
        ]
      },
      {
        id: "instruction-cycle",
        title: "4. Instruction Cycle and Microprogramming",
        icon: "Repeat",
        blocks: [
          {
            kind: "paragraph",
            text: "The instruction cycle consists of the control sequence needed to fetch an instruction and carry out its operation. Microprogramming implements control signals using a microprogram stored in control memory. Each microinstruction specifies a set of micro-operations or control signals, and a sequencing mechanism selects the next microinstruction."
          },
          {
            kind: "diagram",
            diagramId: "c404-microprogrammed-control",
            caption: "Conceptual microprogrammed control-unit organization."
          }
        ]
      },
      {
        id: "microprogrammed-control",
        title: "5. Microprogrammed Control",
        icon: "Code2",
        blocks: [
          {
            kind: "paragraph",
            text: "In a microprogrammed control unit, control memory stores microinstructions. A control address register identifies the current microinstruction; a microinstruction register holds the fetched microinstruction; decoder/sequencing logic determines the next control address. Microprogramming makes complex control sequences easier to design and modify than large fixed logic networks, although control-memory access can introduce overhead."
          },
          {
            kind: "table",
            headers: ["Component", "Function"],
            rows: [
              ["Control memory", "Stores microinstructions."],
              ["Control Address Register", "Holds the address of the next/current microinstruction."],
              ["Microinstruction register", "Holds the fetched microinstruction/control word."],
              ["Sequencing logic", "Determines the next microinstruction address."],
              ["Control signals", "Activate datapath operations such as register transfers and ALU functions."]
            ]
          }
        ]
      },
      {
        id: "hardwired-vs-microprogrammed",
        title: "6. Hardwired and Microprogrammed Control",
        icon: "GitCompareArrows",
        blocks: [
          {
            kind: "paragraph",
            text: "Hardwired control generates control signals through fixed logic circuits, decoders, gates and timing signals. Microprogrammed control obtains control information from a control memory. Hardwired control can be fast but becomes complex for rich instruction sets; microprogrammed control is generally easier to modify and organize for complex control sequences."
          },
          {
            kind: "table",
            headers: ["Feature", "Hardwired control", "Microprogrammed control"],
            rows: [
              ["Implementation", "Fixed logic circuits", "Microinstructions in control memory"],
              ["Modification", "Difficult after hardware design", "Easier by changing microcode/control memory"],
              ["Control complexity", "Can become large for complex instruction sets", "Naturally suited to complex control sequences"],
              ["Speed", "Typically fast control generation", "May include control-memory/sequencing overhead"]
            ]
          }
        ]
      },
      {
        id: "bus-structure-and-branching",
        title: "7. Single/Two/Three Bus Structures, Branching and Sequencing",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "Internal bus structures determine how operands and results move among registers and the ALU. A single-bus organization uses one shared path; two- and three-bus structures provide more simultaneous transfer paths and can reduce datapath bottlenecks. Control sequencing includes selecting the next microinstruction, handling conditional branches and choosing different sequences according to instruction opcode or status conditions."
          },
          {
            kind: "table",
            headers: ["Structure", "General characteristic"],
            rows: [
              ["Single bus", "Simple interconnection, but transfers compete for one path."],
              ["Two bus", "More simultaneous movement than one bus."],
              ["Three bus", "Can provide two source paths and a separate result path in a suitable datapath."],
              ["Branching/sequencing", "Selects next control step based on opcode, flags or external conditions."]
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Processor Organization", definition: "Arrangement of registers, ALU, buses and control mechanisms within the CPU." },
      { term: "General Register", definition: "CPU register used for operands, addresses or intermediate results." },
      { term: "Microinstruction", definition: "Control-memory word specifying micro-operations/control signals for a processor step." },
      { term: "Microprogram", definition: "Sequence of microinstructions implementing instruction-control sequences." },
      { term: "Control Memory", definition: "Memory that stores microinstructions in a microprogrammed control unit." },
      { term: "Hardwired Control", definition: "Control-unit implementation based on fixed hardware logic." },
      { term: "Sequencing", definition: "Determining the next microinstruction/control step." },
      { term: "Bus Structure", definition: "Internal datapath arrangement used to transfer values among processor units." }
    ],
    examQuestions: [
      "Explain general register organization with a neat diagram. (Long)",
      "Discuss parallelism in processor organization. (Medium)",
      "Explain computer arithmetic considerations in processor design. (Medium)",
      "Explain register transfer and microoperations with an example. (Medium)",
      "Explain the instruction cycle and its major phases. (Long)",
      "Explain microprogrammed control with a block diagram. (Long)",
      "Differentiate hardwired and microprogrammed control. (Long)",
      "Explain single-, two- and three-bus structures. (Medium)",
      "Explain branching and sequencing in a microprogrammed control unit. (Medium)"
    ]
  },

  {
    unitNumber: 3,
    title: "Memory Organization and Cache Memory",
    hours: 8,
    headings: [
      {
        id: "memory-system-considerations",
        title: "1. Memory System: Basic Considerations",
        icon: "Database",
        blocks: [
          {
            kind: "paragraph",
            text: "A memory system is organized as a hierarchy because no single memory technology simultaneously provides minimum cost, maximum capacity and maximum speed. The hierarchy commonly moves from registers to cache, main memory and secondary storage. Upper levels are smaller and faster; lower levels are larger and slower."
          },
          {
            kind: "diagram",
            diagramId: "c404-memory-hierarchy",
            caption: "Memory hierarchy from fastest/smallest storage to slower/larger storage."
          },
          {
            kind: "table",
            headers: ["Level", "Relative characteristic"],
            rows: [
              ["Registers", "Fastest and closest to execution units; very small."],
              ["Cache", "Small, fast memory holding frequently/recently used data and instructions."],
              ["Main memory", "Larger working storage directly accessed by the CPU through the memory system."],
              ["Secondary storage", "Very large, non-volatile storage with higher access latency."]
            ]
          }
        ]
      },
      {
        id: "memory-subsystem-organization",
        title: "2. Design of Memory Subsystem",
        icon: "Boxes",
        blocks: [
          {
            kind: "paragraph",
            text: "Memory-subsystem design considers capacity, access time, cycle time, cost per bit, organization, word length, addressing and data-transfer width. Semiconductor memories can be organized using arrays of cells, decoders and read/write circuitry. The system must match processor requests to the memory's organization and timing."
          }
        ]
      },
      {
        id: "dynamic-memory-chips",
        title: "3. Dynamic Memory Chips",
        icon: "MemoryStick",
        blocks: [
          {
            kind: "paragraph",
            text: "Dynamic RAM (DRAM) stores each bit using a capacitor-based cell and requires periodic refresh because the stored charge leaks. DRAM provides high density and is widely used for main memory. Static RAM (SRAM) uses bistable circuitry and does not require the same periodic refresh mechanism; it is faster and more expensive per bit and is commonly used for cache."
          },
          {
            kind: "table",
            headers: ["Feature", "DRAM", "SRAM"],
            rows: [
              ["Storage cell", "Capacitor-based", "Bistable circuitry"],
              ["Refresh", "Required", "Not required in the same periodic DRAM sense"],
              ["Density", "High", "Lower"],
              ["Typical use", "Main memory", "Cache"],
              ["Cost per bit", "Lower", "Higher"]
            ]
          }
        ]
      },
      {
        id: "memory-interleaving",
        title: "4. Memory Interleaving",
        icon: "Grid2x2",
        blocks: [
          {
            kind: "paragraph",
            text: "Memory interleaving divides memory into multiple modules or banks so that consecutive accesses can be distributed among them. With suitable access timing, a new access can begin in one bank while another bank is completing a previous operation, improving memory bandwidth."
          },
          {
            kind: "diagram",
            diagramId: "c404-memory-interleaving",
            caption: "Conceptual distribution of consecutive memory words across multiple interleaved banks."
          }
        ]
      },
      {
        id: "cache-memory",
        title: "5. Cache Memory and Cache Organization",
        icon: "Zap",
        blocks: [
          {
            kind: "paragraph",
            text: "Cache memory is a small, fast memory placed between the CPU and main memory. It exploits locality of reference: temporal locality means recently used items are likely to be used again, while spatial locality means nearby addresses are likely to be accessed soon. A cache stores blocks/lines fetched from main memory."
          },
          {
            kind: "diagram",
            diagramId: "c404-cache-hierarchy",
            caption: "CPU-cache-main-memory relationship and the role of locality."
          },
          {
            kind: "table",
            headers: ["Mapping method", "Basic rule"],
            rows: [
              ["Direct mapping", "Each memory block maps to exactly one cache line."],
              ["Fully associative", "A memory block may be placed in any cache line."],
              ["Set associative", "A block maps to one set and can occupy any line within that set."]
            ]
          }
        ]
      },
      {
        id: "cache-design-and-mapping",
        title: "6. Elements of Cache Design and Mapping Functions",
        icon: "Map",
        blocks: [
          {
            kind: "paragraph",
            text: "Important cache-design choices include cache size, line/block size, mapping function, replacement policy, write policy and number of cache levels. A memory address is commonly divided into tag, index/set and block-offset fields. The exact bit allocation depends on address size, cache capacity, line size and associativity."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Direct-Mapped Cache Example",
            text: "Suppose a cache has 16 lines and each line stores one block. For a memory block number B, the direct-mapped line index is B mod 16. Thus block 37 maps to line 37 mod 16 = 5. The tag identifies which memory block currently occupies that line."
          }
        ]
      },
      {
        id: "cache-replacement-algorithms",
        title: "7. Cache Replacement Algorithms",
        icon: "Repeat",
        blocks: [
          {
            kind: "paragraph",
            text: "Replacement is needed when a new block must enter a cache set that has no free line. Policies can include LRU, FIFO and other architecture-specific approaches. LRU removes the least recently used line; FIFO removes the oldest line in insertion order. Replacement policy matters mainly in associative caches where multiple blocks can compete for a set."
          }
        ]
      },
      {
        id: "external-memory",
        title: "8. External Memory",
        icon: "HardDrive",
        blocks: [
          {
            kind: "paragraph",
            text: "External memory provides persistent storage outside main memory. Magnetic disks and other secondary-storage devices provide large capacity at higher access latency. The memory hierarchy uses external memory as a lower level from which data and programs are brought into faster memory when needed."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Memory Hierarchy", definition: "Organization of storage levels by speed, capacity and cost." },
      { term: "DRAM", definition: "Dynamic random-access memory using charge storage that requires refresh." },
      { term: "SRAM", definition: "Static random-access memory using bistable storage and typically used for cache." },
      { term: "Memory Interleaving", definition: "Distribution of memory accesses across multiple banks/modules to increase bandwidth." },
      { term: "Cache", definition: "Small, fast memory that stores recently or frequently used blocks." },
      { term: "Locality", definition: "Tendency of programs to reuse recent data or access nearby addresses." },
      { term: "Cache Hit", definition: "Requested block is found in the cache." },
      { term: "Cache Miss", definition: "Requested block is absent from the cache and must be obtained from a lower memory level." },
      { term: "Associativity", definition: "Number of possible cache locations within a mapping set for a block." }
    ],
    examQuestions: [
      "Explain memory hierarchy with a neat diagram. (Long)",
      "Discuss major considerations in memory-system design. (Medium)",
      "Compare DRAM and SRAM. (Medium)",
      "Explain memory interleaving with a diagram. (Long)",
      "What is cache memory? Explain locality of reference. (Long)",
      "Explain direct, associative and set-associative cache mapping. (Long)",
      "Solve a cache mapping/address-field problem. (Long)",
      "Explain elements of cache design and replacement algorithms. (Medium)",
      "Write a note on external memory. (Short)"
    ]
  },

  {
    unitNumber: 4,
    title: "Input / Output Organization",
    hours: 8,
    headings: [
      {
        id: "io-module",
        title: "1. Input/Output Module: Need and Basic Concepts",
        icon: "Cable",
        blocks: [
          {
            kind: "paragraph",
            text: "An I/O module provides an interface between the CPU/memory system and peripheral devices. It hides device-specific control details, coordinates data transfer, reports device status and can provide buffering. I/O modules are required because peripherals often operate at different speeds and data formats from the processor."
          },
          {
            kind: "diagram",
            diagramId: "c404-io-module",
            caption: "CPU and memory communicating with peripheral devices through I/O modules."
          }
        ]
      },
      {
        id: "io-techniques",
        title: "2. I/O Techniques",
        icon: "ArrowLeftRight",
        blocks: [
          {
            kind: "paragraph",
            text: "Common I/O techniques include programmed I/O, interrupt-driven I/O and Direct Memory Access (DMA). Programmed I/O keeps the CPU involved in checking device status and transferring data. Interrupt-driven I/O allows the device to notify the CPU when service is required. DMA allows a controller to transfer blocks of data between a peripheral and memory with limited CPU involvement."
          },
          {
            kind: "table",
            headers: ["Technique", "CPU involvement", "Typical characteristic"],
            rows: [
              ["Programmed I/O", "High", "CPU repeatedly checks status and performs transfers."],
              ["Interrupt-driven I/O", "Moderate", "Device interrupts CPU when service is required."],
              ["DMA", "Lower for bulk transfer", "DMA controller manages memory-device data movement."]
            ]
          }
        ]
      },
      {
        id: "interrupts",
        title: "3. Interrupt-Driven I/O and Interrupt Basics",
        icon: "Bell",
        blocks: [
          {
            kind: "paragraph",
            text: "An interrupt is a signal/event that causes the processor to suspend the current execution flow and transfer control to an interrupt-service routine (ISR), after preserving sufficient state. Interrupts can be generated by hardware devices or software mechanisms. After servicing, the processor restores the required state and resumes the interrupted program when appropriate."
          },
          {
            kind: "diagram",
            diagramId: "c404-interrupt-cycle",
            caption: "Basic interrupt handling flow from event detection to return from ISR."
          },
          {
            kind: "table",
            headers: ["Concept", "Meaning"],
            rows: [
              ["Interrupt request", "Signal/event requesting processor attention."],
              ["ISR", "Interrupt Service Routine that handles the interrupt."],
              ["Interrupt vector", "Information used to identify the appropriate service routine in vector-based systems."],
              ["Priority", "Mechanism for deciding which interrupt is serviced first when multiple requests exist."]
            ]
          }
        ]
      },
      {
        id: "interrupt-priorities",
        title: "4. Interrupt Priorities and Interrupt Handling",
        icon: "ListOrdered",
        blocks: [
          {
            kind: "paragraph",
            text: "When multiple interrupt sources can request service, an interrupt-priority mechanism determines the order of handling. Priority may be fixed or dynamically managed. Interrupt handling must preserve processor context, identify the source, execute the appropriate ISR and restore execution correctly."
          }
        ]
      },
      {
        id: "types-of-interrupts",
        title: "5. Types of Interrupts",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "Interrupts can be classified by source and behavior. Hardware interrupts originate from external devices; software interrupts are generated by instructions or software mechanisms. Maskable interrupts can generally be disabled or masked temporarily, whereas non-maskable interrupts are reserved for conditions requiring immediate attention in architectures that support this distinction."
          },
          {
            kind: "table",
            headers: ["Type", "Description"],
            rows: [
              ["Hardware", "Generated by external hardware/device events."],
              ["Software", "Generated by an instruction or software mechanism."],
              ["Maskable", "Can be disabled/masked under appropriate control."],
              ["Non-maskable", "Designed for events that should not be ignored by normal masking."]
            ]
          }
        ]
      },
      {
        id: "dma",
        title: "6. Direct Memory Access (DMA)",
        icon: "ArrowDownUp",
        blocks: [
          {
            kind: "paragraph",
            text: "DMA transfers a block of data directly between an I/O device and main memory without requiring the CPU to execute an instruction for every transferred word/byte. A DMA controller manages the transfer and may interrupt the CPU when the operation completes or requires attention. DMA improves CPU availability for computation during large transfers."
          },
          {
            kind: "diagram",
            diagramId: "c404-dma-transfer",
            caption: "Conceptual DMA transfer between I/O device and memory under DMA-controller control."
          },
          {
            kind: "callout",
            tone: "example",
            title: "DMA Example",
            text: "When a storage or network device must place a large block in memory, the CPU can initialize the DMA controller with source/destination information, transfer size and control settings. The DMA controller then performs the transfer and can notify the CPU after completion."
          }
        ]
      },
      {
        id: "io-interface-serial-parallel",
        title: "7. I/O Interface, Serial and Parallel I/O",
        icon: "Cable",
        blocks: [
          {
            kind: "paragraph",
            text: "An I/O interface provides registers and control logic through which the processor communicates with a peripheral. Serial I/O transfers bits sequentially over a communication path, while parallel I/O transfers multiple bits across multiple lines during a transfer. Serial communication uses fewer physical lines and is common over longer links; parallel communication can transfer multiple bits at once but requires coordination among lines."
          },
          {
            kind: "table",
            headers: ["Feature", "Serial I/O", "Parallel I/O"],
            rows: [
              ["Data transfer", "One bit/serial stream at a time", "Multiple bits in parallel"],
              ["Wiring", "Fewer lines", "More lines"],
              ["Typical concern", "Timing/bit framing", "Synchronization/skew among lines"],
              ["Example concept", "Serial communication interface", "Parallel peripheral interface"]
            ]
          }
        ]
      },
      {
        id: "synchronous-asynchronous-transfer",
        title: "8. Synchronous and Asynchronous Data Transfer",
        icon: "Clock",
        blocks: [
          {
            kind: "paragraph",
            text: "Synchronous transfer uses a shared timing reference or clock relationship between sender and receiver. Asynchronous transfer does not require a continuously shared clock; control signals, start/stop conventions or handshaking can coordinate transfer. The choice depends on timing requirements and interface design."
          }
        ]
      },
      {
        id: "io-devices-coupling",
        title: "9. I/O Devices, Multiprogramming and Multiprocessing",
        icon: "Server",
        blocks: [
          {
            kind: "paragraph",
            text: "I/O devices include human-interface devices, storage devices, communication devices and sensors/controllers. In multiprogramming, I/O waiting allows the CPU to execute another ready process, improving utilization. In multiprocessing, multiple processors/cores can execute work concurrently, while I/O subsystems must coordinate access to shared devices and memory."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "I/O Module", definition: "Interface/control component connecting processor-memory system with peripheral devices." },
      { term: "Programmed I/O", definition: "CPU-controlled I/O in which software explicitly checks device status and transfers data." },
      { term: "Interrupt", definition: "Event that causes the processor to transfer control to an interrupt handler." },
      { term: "ISR", definition: "Interrupt Service Routine executed to handle a particular interrupt." },
      { term: "DMA", definition: "Technique allowing block data transfer between device and memory with limited CPU intervention." },
      { term: "Serial I/O", definition: "I/O in which data is transferred as a serial stream." },
      { term: "Parallel I/O", definition: "I/O in which multiple bits are transferred simultaneously across multiple lines." },
      { term: "Synchronous Transfer", definition: "Data transfer coordinated by a shared timing/clock relationship." },
      { term: "Asynchronous Transfer", definition: "Data transfer coordinated without requiring a continuously shared clock." }
    ],
    examQuestions: [
      "Explain the need and functions of an I/O module. (Long)",
      "Compare programmed I/O, interrupt-driven I/O and DMA. (Long)",
      "Explain interrupt-driven I/O with a neat diagram. (Long)",
      "Explain interrupt priorities and the basic interrupt-handling sequence. (Medium)",
      "Differentiate hardware/software and maskable/non-maskable interrupts. (Medium)",
      "Explain DMA with a block diagram and example. (Long)",
      "Compare serial and parallel I/O. (Medium)",
      "Differentiate synchronous and asynchronous data transfer. (Medium)",
      "Write notes on I/O devices, multiprogramming and multiprocessing. (Medium)"
    ]
  },

  {
    unitNumber: 5,
    title: "Microprogramming and RISC/CISC",
    hours: 8,
    headings: [
      {
        id: "microprogramming-basics",
        title: "1. Microprogramming: Basic Principles",
        icon: "Code",
        blocks: [
          {
            kind: "paragraph",
            text: "Microprogramming is a control-unit design technique in which control signals are represented by microinstructions stored in control memory. A machine instruction is implemented as a sequence of microinstructions. This separates instruction-level architecture from the detailed control sequence used by the datapath."
          },
          {
            kind: "diagram",
            diagramId: "c404-microprogramming-principle",
            caption: "Basic microprogramming principle from machine instruction to control signals."
          }
        ]
      },
      {
        id: "microprogramming-hardware",
        title: "2. Microprogrammed Computer Hardware",
        icon: "Cpu",
        blocks: [
          {
            kind: "paragraph",
            text: "A microprogrammed control unit typically contains control memory, a control address register, a microinstruction register and sequencing logic. The control memory supplies the current control word; the sequencing logic selects the next microinstruction according to the current instruction, status conditions and branch requirements."
          },
          {
            kind: "table",
            headers: ["Hardware block", "Function"],
            rows: [
              ["Control memory", "Stores microprograms/control words."],
              ["Control address register", "Specifies the microinstruction address."],
              ["Microinstruction register", "Holds the fetched control word."],
              ["Sequencer", "Generates the address of the next microinstruction."],
              ["Decoder/control outputs", "Translate control fields into datapath control signals where required."]
            ]
          }
        ]
      },
      {
        id: "microprogramming-application-advantages",
        title: "3. Application and Advantages of Microprogramming",
        icon: "Wrench",
        blocks: [
          {
            kind: "paragraph",
            text: "Microprogramming is especially useful when an instruction set contains complex instructions requiring multi-step control sequences. It provides an organized way to implement and modify control behavior. It can also simplify control-unit design, make instruction-set extensions easier to support and facilitate compatibility-oriented control implementations."
          },
          {
            kind: "table",
            headers: ["Advantage", "Explanation"],
            rows: [
              ["Design simplicity", "Complex control sequences can be represented as microinstruction sequences."],
              ["Modifiability", "Control behavior can be changed by modifying microcode/control memory in suitable designs."],
              ["Systematic control", "Datapath actions are described step by step."],
              ["Complex instructions", "Suitable for instruction sets with many multi-cycle operations."]
            ]
          }
        ]
      },
      {
        id: "microprogramming-limitations",
        title: "4. Limitations and Design Considerations",
        icon: "AlertTriangle",
        blocks: [
          {
            kind: "paragraph",
            text: "Microprogrammed control can introduce overhead because microinstructions must be fetched and sequenced from control memory. The width and encoding of the microinstruction affect control-memory size and the number of control signals that can be represented directly. Designers therefore balance speed, control-word width, sequencing flexibility and implementation cost."
          }
        ]
      },
      {
        id: "risc",
        title: "5. RISC: Reduced Instruction Set Computer",
        icon: "Zap",
        blocks: [
          {
            kind: "paragraph",
            text: "RISC is an instruction-set design philosophy emphasizing a relatively small and regular set of instructions, simple instruction formats, a register-oriented datapath and efficient execution. RISC designs commonly use load/store organization, where memory is accessed mainly through explicit load and store instructions while arithmetic/logic operations operate on registers."
          },
          {
            kind: "table",
            headers: ["Typical RISC characteristic", "Meaning"],
            rows: [
              ["Simple instructions", "Instructions tend to perform relatively basic operations."],
              ["Load/store model", "Memory access is separated from most arithmetic/logic operations."],
              ["Regular formats", "Instruction formats are comparatively uniform."],
              ["Many registers", "Registers hold operands and intermediate values to reduce memory traffic."],
              ["Pipeline-friendly design", "Regular instructions can simplify pipeline organization."]
            ]
          }
        ]
      },
      {
        id: "cisc",
        title: "6. CISC: Complex Instruction Set Computer",
        icon: "Boxes",
        blocks: [
          {
            kind: "paragraph",
            text: "CISC is an instruction-set philosophy allowing a richer and more varied instruction set, including instructions that may perform several lower-level operations. Instruction lengths and addressing modes can be more varied. Historically, complex instructions could reduce the number of instructions required by a program, while their implementation may require more complicated decoding and control."
          },
          {
            kind: "table",
            headers: ["Typical CISC characteristic", "Meaning"],
            rows: [
              ["Rich instruction set", "Many operations are directly represented by machine instructions."],
              ["Variable formats", "Instructions may have different lengths or field arrangements."],
              ["Many addressing modes", "Multiple ways to specify operands are supported."],
              ["Complex control", "Some instructions require multiple internal steps."],
              ["Code density", "A complex instruction may encode more work per instruction."]
            ]
          }
        ]
      },
      {
        id: "risc-vs-cisc",
        title: "7. RISC versus CISC",
        icon: "GitCompare",
        blocks: [
          {
            kind: "paragraph",
            text: "RISC and CISC are instruction-set design philosophies rather than a simple classification of all modern processors. The syllabus asks for their characteristics and comparison. A useful exam comparison should focus on instruction complexity, instruction formats, addressing modes, memory access model, register usage, control implementation and pipeline implications."
          },
          {
            kind: "diagram",
            diagramId: "c404-risc-cisc-comparison",
            caption: "Exam-oriented comparison of typical RISC and CISC design characteristics."
          },
          {
            kind: "table",
            headers: ["Feature", "Typical RISC tendency", "Typical CISC tendency"],
            rows: [
              ["Instruction set", "Smaller and more regular", "Larger and more varied"],
              ["Instruction length", "Often fixed/regular", "Often variable"],
              ["Addressing modes", "Fewer/simple", "More numerous/complex"],
              ["Memory operations", "Load/store separation", "Instructions may directly operate on memory"],
              ["Registers", "Typically many general-purpose registers", "Varies; historically more memory-oriented designs existed"],
              ["Control", "Often simpler control sequencing", "Often more complex control sequencing"],
              ["Pipelining", "Regularity can simplify pipeline design", "Variable instructions can complicate decoding/pipelining"]
            ]
          },
          {
            kind: "callout",
            tone: "info",
            title: "Important Exam Qualification",
            text: "Do not write that every RISC processor has exactly one instruction format or that every CISC processor always uses microprogramming. These are typical design tendencies, not universal rules for every architecture."
          }
        ]
      },
      {
        id: "cisc-and-risc-context",
        title: "8. Historical and Architectural Context",
        icon: "History",
        blocks: [
          {
            kind: "paragraph",
            text: "RISC and CISC represent different approaches to placing complexity in a processor system. Modern commercial architectures can incorporate ideas associated with both philosophies. Therefore, exam answers should present the syllabus-level characteristics clearly while avoiding absolute statements that are not true for every processor."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Microprogramming", definition: "Control-unit technique in which control signals are organized as microinstructions stored in control memory." },
      { term: "Microinstruction", definition: "A control word specifying micro-operations/control signals for one control step." },
      { term: "Control Memory", definition: "Memory storing the microinstructions of a microprogrammed control unit." },
      { term: "RISC", definition: "Reduced Instruction Set Computer design philosophy emphasizing a relatively small, regular and efficient instruction set." },
      { term: "CISC", definition: "Complex Instruction Set Computer design philosophy supporting a richer and more varied instruction set." },
      { term: "Load/Store Architecture", definition: "Architecture in which explicit load/store instructions handle memory access while most ALU operations use registers." },
      { term: "Instruction Density", definition: "Amount of program work represented per unit of instruction storage." },
      { term: "Microcode", definition: "Control information implementing instruction execution as microinstruction sequences." }
    ],
    examQuestions: [
      "Explain the basic principles of microprogramming. (Long)",
      "Draw and explain the hardware organization of a microprogrammed control unit. (Long)",
      "Discuss applications and advantages of microprogramming. (Medium)",
      "Explain limitations/design considerations of microprogrammed control. (Medium)",
      "Define RISC and explain its characteristics. (Long)",
      "Define CISC and explain its characteristics. (Long)",
      "Compare RISC and CISC architectures. (Long)",
      "Explain the load/store concept and its relationship to RISC. (Medium)",
      "Write a note on microprogramming versus hardwired control. (Medium)",
      "Explain why RISC/CISC should be treated as design philosophies rather than absolute categories. (Short)"
    ]
  }
];
