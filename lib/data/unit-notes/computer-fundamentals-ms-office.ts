import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Computer Fundamentals and MS-Office (C-101)
// — Dr. Bhimrao Ambedkar University, Agra (DBRAU) BCA Semester 1, syllabus
// effective from session 2025-26.
//
// NOTE: a few blocks use `kind: "code"` (DOS commands / batch files). See
// README-INTEGRATION.md in the zip for the one-time type + renderer addition.
export const computerFundamentalsUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Introduction to Computers",
    hours: 10,
    headings: [
      {
        id: "what-is-computer",
        title: "1. Introduction and Characteristics of Computers",
        icon: "Cpu",
        blocks: [
          {
            kind: "paragraph",
            text: "A computer is an electronic device that accepts data as input, processes it according to a set of stored instructions (a program), stores the results if required, and produces meaningful information as output. The word 'computer' comes from 'compute', meaning 'to calculate'. Every computer works on the simple cycle: INPUT → PROCESS → OUTPUT (with STORAGE in between).",
          },
          {
            kind: "paragraph",
            text: "Data vs Information: Data is a collection of raw, unorganised facts and figures (for example: 45, 78, 92). Information is data that has been processed into a meaningful form (for example: 'Average marks of the class = 71.67'). A computer converts data into information.",
          },
          {
            kind: "table",
            headers: ["Characteristic", "Explanation"],
            rows: [
              ["Speed", "A computer performs millions to billions of instructions per second. Speed is measured in MIPS / GHz. A calculation that takes a human hours takes a computer a fraction of a second."],
              ["Accuracy", "Computers give 100% accurate results provided the data and instructions are correct. Errors occur only because of wrong input — the principle is called GIGO (Garbage In, Garbage Out)."],
              ["Diligence", "A computer never gets tired, bored or distracted. It can perform the same task millions of times with the same speed and accuracy."],
              ["Versatility", "The same computer can be used for many different jobs — typing a letter, playing music, running a bank, controlling a satellite — just by changing the program."],
              ["Storage capacity", "A computer can store huge amounts of data in its memory and secondary storage and retrieve it instantly whenever required."],
              ["Automation", "Once a program is loaded, the computer carries out the instructions automatically without human intervention."],
              ["Reliability", "Modern computers are highly dependable and can work continuously for long periods with very few failures."],
              ["No IQ (Lack of intelligence)", "A computer has no thinking power of its own. It does exactly what it is instructed to do — nothing more, nothing less."],
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam Tip",
            text: "'Write the characteristics of a computer' is one of the most repeated questions. Write at least 6 characteristics, one line of explanation for each, and always mention GIGO under 'Accuracy' and 'No IQ' as the main limitation. This fetches full marks.",
          },
          {
            kind: "bullets",
            items: [
              "Limitations of computers: no intelligence (cannot take decisions on its own), depends on human instructions, cannot handle feelings/emotions, GIGO, needs electricity, and cannot learn from experience unless programmed to (AI).",
            ],
          },
        ],
      },
      {
        id: "block-diagram",
        title: "2. Block Diagram of a Computer",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "Every computer, from a smartphone to a supercomputer, is built on the same basic organisation proposed by John von Neumann (the 'stored-program concept': the program and the data are both kept in the same memory). It has four main parts — Input Unit, Central Processing Unit (CPU), Memory Unit and Output Unit.",
          },
          { kind: "diagram", diagramId: "computer-block-diagram", caption: "Fig 1.1 — Block diagram of a computer (thick arrows = data flow, dashed = control signals)" },
          {
            kind: "table",
            headers: ["Unit", "Function", "Examples"],
            rows: [
              ["Input Unit", "Accepts data and instructions from the user and converts them into a binary form the computer can understand.", "Keyboard, mouse, scanner, microphone, webcam"],
              ["Control Unit (CU)", "The 'brain' of the CPU. Fetches each instruction from memory, decodes it, and sends control signals to the other parts to execute it. It does not process data itself.", "Part of the CPU"],
              ["Arithmetic Logic Unit (ALU)", "Performs all arithmetic operations (+, −, ×, ÷) and logical operations (comparisons: <, >, =, AND, OR, NOT).", "Part of the CPU"],
              ["Registers", "Very small, extremely fast storage locations inside the CPU that hold the data/instruction currently being processed (e.g., Accumulator, Program Counter, Instruction Register).", "Part of the CPU"],
              ["Memory Unit", "Stores data, instructions and intermediate/final results. Primary memory (RAM/ROM) is directly accessed by the CPU; secondary memory keeps data permanently.", "RAM, ROM, hard disk"],
              ["Output Unit", "Converts the binary results into human-readable form and presents them to the user.", "Monitor, printer, speaker, plotter"],
            ],
          },
          {
            kind: "bullets",
            items: [
              "CPU = CU + ALU + Registers. It is called the 'brain' of the computer and is built on a single chip called the microprocessor in a PC.",
              "Instruction cycle (Fetch–Decode–Execute): (1) Fetch the instruction from memory, (2) Decode it in the CU, (3) Execute it in the ALU, (4) Store the result. This cycle repeats billions of times per second.",
            ],
          },
        ],
      },
      {
        id: "types-of-computers",
        title: "3. Types of Computers and Their Features",
        icon: "Factory",
        blocks: [
          {
            kind: "paragraph",
            text: "Computers are classified in several ways. The syllabus focuses on classification by SIZE and PROCESSING POWER: Super computers, Mainframe computers, Mini computers and Micro computers.",
          },
          { kind: "diagram", diagramId: "computer-types", caption: "Fig 1.2 — Types of computers by size, speed and cost" },
          {
            kind: "table",
            headers: ["Type", "Features", "Uses", "Examples"],
            rows: [
              ["Super Computer", "Fastest, most powerful and most expensive. Thousands of processors working in parallel. Speed measured in FLOPS (petaFLOPS). Needs special cooling and a large room.", "Weather forecasting, space research, nuclear simulation, molecular modelling, AI training", "PARAM (India, C-DAC), Cray, Fugaku, Frontier"],
              ["Mainframe Computer", "Very large, powerful, supports hundreds/thousands of users at the same time through terminals. Huge storage and very high reliability.", "Banks, airlines, railway reservation, insurance, government census", "IBM zSeries, UNIVAC"],
              ["Mini Computer", "Mid-sized, smaller and cheaper than a mainframe, supports about 4 to 200 users at once. Multi-user and multi-tasking.", "Small/medium businesses, research labs, departmental computing, industrial control", "PDP-11, VAX, IBM AS/400"],
              ["Micro Computer", "Smallest and cheapest, built around a single-chip microprocessor. Designed for one user (single-user). Includes desktops, laptops, notebooks, tablets and smartphones.", "Home, office, education, personal use", "IBM PC, Apple Mac, Dell laptop"],
            ],
          },
          {
            kind: "paragraph",
            text: "Other common classification — by type of data handled:",
          },
          {
            kind: "table",
            headers: ["Type", "Working principle", "Examples"],
            rows: [
              ["Analog Computer", "Works on continuous physical quantities such as temperature, pressure, speed, voltage.", "Thermometer, speedometer, seismograph"],
              ["Digital Computer", "Works on discrete data represented as binary digits (0 and 1). Most accurate and used everywhere today.", "PC, laptop, smartphone"],
              ["Hybrid Computer", "Combination of analog and digital features. Analog part measures, digital part processes.", "Petrol pump (measures fuel flow and computes price), ICU patient monitors"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy way to remember",
            text: "Think of transport: a Micro computer is like a bicycle (one person), a Mini computer is like a car (a few people), a Mainframe is like a train (hundreds of passengers) and a Super computer is like a rocket (incredibly fast, built for special missions).",
          },
        ],
      },
      {
        id: "programming-languages",
        title: "4. Types of Programming Languages",
        icon: "Code",
        blocks: [
          {
            kind: "paragraph",
            text: "A programming language is a set of rules and symbols used to write instructions (programs) that a computer can execute. Languages are broadly divided into three levels — Machine language, Assembly language and High-level language.",
          },
          {
            kind: "table",
            headers: ["Feature", "Machine Language", "Assembly Language", "High-Level Language"],
            rows: [
              ["Level", "Lowest (1st generation)", "Low (2nd generation)", "High (3rd generation onwards)"],
              ["Written using", "Binary digits 0 and 1", "Mnemonics/symbols like ADD, MOV, SUB", "English-like statements and mathematical expressions"],
              ["Translator needed", "None — directly understood by the CPU", "Assembler", "Compiler or Interpreter"],
              ["Portability", "Machine dependent", "Machine dependent", "Machine independent (portable)"],
              ["Execution speed", "Fastest", "Fast", "Slower than the two low-level languages"],
              ["Ease of use", "Very difficult, error-prone", "Difficult", "Easy to learn, read, write and debug"],
              ["Examples", "Binary code, e.g., 10110000 01100001", "8085/8086 assembly, MASM", "C, C++, Java, Python, COBOL, FORTRAN, BASIC, Pascal"],
            ],
          },
          {
            kind: "paragraph",
            text: "Language translators: A computer understands only machine language, so programs written in other languages must be translated first.",
          },
          { kind: "diagram", diagramId: "language-translators", caption: "Fig 1.3 — Language translators: source code to machine code" },
          {
            kind: "table",
            headers: ["Translator", "How it works", "Example"],
            rows: [
              ["Assembler", "Converts an assembly language program into machine code.", "MASM, TASM"],
              ["Compiler", "Translates the ENTIRE high-level program into machine code in one go, and reports all errors together. The output (.exe) can be run many times without recompiling.", "C, C++ compilers (GCC, Turbo C)"],
              ["Interpreter", "Translates and executes the program ONE LINE at a time. Stops at the first error. Slower but easier to debug.", "Python, BASIC, JavaScript"],
            ],
          },
          {
            kind: "table",
            headers: ["Compiler", "Interpreter"],
            rows: [
              ["Translates the whole program at once", "Translates one statement at a time"],
              ["Faster execution (translation done only once)", "Slower execution (translates every time it runs)"],
              ["Displays all errors after compilation", "Displays an error as soon as it is found, then stops"],
              ["Generates an object/executable file", "Does not generate any object file"],
              ["Needs more memory", "Needs less memory"],
            ],
          },
          {
            kind: "paragraph",
            text: "Generations of languages (bonus point for long answers): 1GL — Machine language; 2GL — Assembly language; 3GL — High-level procedural languages (C, Pascal); 4GL — Very high-level/non-procedural languages (SQL, report generators); 5GL — Artificial-intelligence based languages (Prolog, Mercury).",
          },
        ],
      },
      {
        id: "data-organization",
        title: "5. Data Organization, Drives, Files and Directories",
        icon: "FolderOpen",
        blocks: [
          {
            kind: "paragraph",
            text: "Data in a computer is organised in a hierarchy, from the smallest unit (bit) to the largest (database).",
          },
          { kind: "diagram", diagramId: "data-hierarchy", caption: "Fig 1.4 — Data hierarchy: from bit to database" },
          {
            kind: "table",
            headers: ["Level", "Meaning", "Example"],
            rows: [
              ["Bit", "Binary digit — the smallest unit of data (0 or 1).", "1"],
              ["Nibble / Byte", "4 bits = 1 nibble; 8 bits = 1 byte (one character).", "01000001 = 'A'"],
              ["Field", "A group of characters that forms a meaningful item.", "Name = 'Amit'"],
              ["Record", "A collection of related fields about one entity.", "Roll No, Name, Marks of one student"],
              ["File", "A collection of related records stored under one name.", "Student file (all students)"],
              ["Database", "An organised collection of related files.", "College database"],
            ],
          },
          {
            kind: "table",
            headers: ["Unit", "Equivalent"],
            rows: [
              ["8 bits", "1 Byte"],
              ["1 KB (Kilobyte)", "1024 Bytes"],
              ["1 MB (Megabyte)", "1024 KB"],
              ["1 GB (Gigabyte)", "1024 MB"],
              ["1 TB (Terabyte)", "1024 GB"],
              ["1 PB (Petabyte)", "1024 TB"],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Drive: a physical or logical storage device that is identified by a letter followed by a colon. A: and B: were used for floppy drives, C: is normally the hard disk (where the operating system is installed), D:, E: … are other hard-disk partitions, CD/DVD drives and pen drives.",
              "File: a named collection of data or instructions stored on a disk. A file name has two parts: the name and the extension, separated by a dot — for example, resume.docx. The extension tells the type of the file.",
              "Directory (Folder): a container that holds files and other directories. The top-most directory of a drive is the ROOT directory (C:\\). A directory inside another directory is a sub-directory. The full location of a file, e.g., C:\\Users\\Amit\\Documents\\resume.docx, is called its PATH.",
            ],
          },
          {
            kind: "table",
            headers: ["Extension", "File type"],
            rows: [
              [".txt", "Plain text file"],
              [".docx / .doc", "MS-Word document"],
              [".xlsx / .xls", "MS-Excel workbook"],
              [".pptx / .ppt", "MS-PowerPoint presentation"],
              [".accdb / .mdb", "MS-Access database"],
              [".exe / .com", "Executable (program) file"],
              [".bat", "Batch file"],
              [".jpg / .png / .bmp", "Image files"],
              [".mp3 / .mp4", "Audio / video files"],
              [".pdf", "Portable Document Format"],
              [".c / .html", "C source code / web page"],
            ],
          },
        ],
      },
      {
        id: "memory",
        title: "6. Types of Memory: Primary and Secondary",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "Memory is the part of a computer that stores data, instructions and results. It is divided into Primary memory (main memory, directly accessible by the CPU) and Secondary memory (auxiliary/backup memory, permanent storage).",
          },
          { kind: "diagram", diagramId: "memory-hierarchy", caption: "Fig 1.5 — Memory hierarchy: speed and cost fall, capacity rises as we go down" },
          {
            kind: "table",
            headers: ["Primary Memory", "Secondary Memory"],
            rows: [
              ["Directly accessed by the CPU", "Accessed through I/O channels; data is first moved to RAM"],
              ["Very fast", "Slower"],
              ["Small capacity (GBs)", "Very large capacity (hundreds of GBs to TBs)"],
              ["More expensive per byte", "Cheaper per byte"],
              ["RAM is volatile (loses data on power off); ROM is non-volatile", "Non-volatile (permanent storage)"],
              ["Examples: RAM, ROM, Cache", "Examples: hard disk, CD/DVD, pen drive, SSD"],
            ],
          },
          {
            kind: "paragraph",
            text: "RAM (Random Access Memory) — the working memory of the computer. It is read/write, temporary (volatile) and holds the programs and data currently in use. Two types: SRAM (Static RAM — uses flip-flops, faster, costlier, used for cache memory) and DRAM (Dynamic RAM — uses capacitors that must be refreshed continuously, cheaper, used as main memory).",
          },
          {
            kind: "paragraph",
            text: "ROM (Read Only Memory) — non-volatile memory whose contents are written at manufacturing time and normally cannot be changed. It stores the BIOS/bootstrap program that starts the computer. ROM has several variants:",
          },
          {
            kind: "table",
            headers: ["Type", "Full form", "Key features"],
            rows: [
              ["ROM", "Read Only Memory", "Programmed by the manufacturer using a mask; cannot be altered by the user."],
              ["PROM", "Programmable ROM", "Blank when bought; the user can write it ONCE using a special PROM programmer. After that it is read-only."],
              ["EPROM", "Erasable Programmable ROM", "Can be erased by exposing to ultraviolet (UV) light through a quartz window and then reprogrammed."],
              ["EEPROM", "Electrically Erasable PROM", "Can be erased and rewritten electrically, byte by byte, without removing the chip. Flash memory (pen drives, SSD) is an advanced form."],
            ],
          },
          {
            kind: "table",
            headers: ["RAM", "ROM"],
            rows: [
              ["Volatile (data lost when power is off)", "Non-volatile (data retained)"],
              ["Read and write memory", "Mostly read-only memory"],
              ["Stores current programs and data", "Stores permanent start-up (BIOS) instructions"],
              ["Types: SRAM, DRAM", "Types: ROM, PROM, EPROM, EEPROM"],
              ["Capacity is larger (GBs)", "Capacity is smaller (MBs)"],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Cache memory: a small, ultra-fast SRAM placed between the CPU and RAM. It stores frequently used data/instructions so the CPU does not have to wait for slower RAM.",
              "Registers: the fastest memory of all, located inside the CPU itself.",
            ],
          },
        ],
      },
      {
        id: "secondary-storage",
        title: "7. Secondary Storage Devices (FD, CD, HD, Pen Drive)",
        icon: "Package",
        blocks: [
          {
            kind: "table",
            headers: ["Device", "Technology", "Typical capacity", "Key points"],
            rows: [
              ["Floppy Disk (FD)", "Magnetic — a thin plastic disk coated with iron oxide inside a plastic jacket; has a write-protect notch.", "1.44 MB (3.5 inch); older 5.25 inch disks held 360 KB / 1.2 MB", "Portable and cheap but tiny capacity, slow and easily damaged. Now obsolete."],
              ["Hard Disk (HD)", "Magnetic — several rigid metal platters spinning at 5400/7200 RPM; data is stored on tracks divided into sectors; read/write heads float on top.", "500 GB – several TB", "Main storage of a PC. Large, fast and cheap per GB but has moving parts. SSD (Solid State Drive) is its faster, flash-based, no-moving-parts alternative."],
              ["Compact Disc (CD)", "Optical — data is stored as microscopic pits and lands read by a laser beam. CD-ROM (read only), CD-R (write once), CD-RW (rewritable).", "650–700 MB (about 80 minutes of audio). DVD holds 4.7 GB.", "Cheap and portable, good for distributing software, music and backups. Scratches damage data."],
              ["Pen Drive (USB Flash Drive)", "Solid state — uses flash memory (EEPROM type) connected through a USB port; no moving parts.", "4 GB – 1 TB", "Plug-and-play, small, fast, durable and rewritable. Can be lost easily or carry viruses."],
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Access methods",
            text: "Magnetic tapes are sequential-access devices (you must pass through earlier data to reach later data). Floppy disks, hard disks and CDs are direct (random) access devices — the read/write head can jump straight to any location, which is much faster.",
          },
        ],
      },
      {
        id: "io-devices",
        title: "8. Input / Output Devices: Scanners, Plotters, LCD, Plasma Display",
        icon: "Tv",
        blocks: [
          {
            kind: "paragraph",
            text: "Input devices send data into the computer (keyboard, mouse, light pen, joystick, scanner, microphone, webcam, barcode reader, touch screen). Output devices present the results (monitor, printer, plotter, speaker, projector). The devices named in the syllabus are explained below.",
          },
          {
            kind: "paragraph",
            text: "Scanner — an input device that converts a printed page, photograph or drawing into a digital image using light-sensing elements (CCD/CIS). With OCR (Optical Character Recognition) software the scanned image of text can be turned into editable text.",
          },
          {
            kind: "table",
            headers: ["Scanner type", "Description"],
            rows: [
              ["Flatbed scanner", "The document is placed on a glass plate and a scanning head moves under it. Most common in offices."],
              ["Sheet-fed scanner", "The paper moves past a fixed scanning head. Fast for multi-page documents."],
              ["Handheld scanner", "Small, portable device moved manually over the document. Lower quality."],
              ["Drum scanner", "Original is mounted on a rotating drum; gives the highest quality. Used in printing/publishing."],
            ],
          },
          {
            kind: "paragraph",
            text: "Plotter — an output device that draws high-quality, large-size graphics (engineering drawings, maps, architectural plans, posters) by moving pens or an ink head across paper under computer control. Unlike a printer that forms images from dots line by line, a plotter draws continuous lines. Types: Drum plotter (paper rolls over a rotating drum while the pen moves sideways), Flatbed plotter (paper lies fixed on a flat surface, the pen moves in both X and Y directions), and Inkjet plotter (spray ink on wide paper; most common now). Used in CAD/CAM applications.",
          },
          {
            kind: "table",
            headers: ["Display", "How it works", "Advantages", "Disadvantages"],
            rows: [
              ["CRT (Cathode Ray Tube)", "An electron gun fires a beam that lights phosphor dots on the screen.", "Cheap, good colour", "Bulky, heavy, high power, radiation"],
              ["LCD (Liquid Crystal Display)", "A layer of liquid crystals between two polarised glass sheets; crystals twist to allow or block a backlight, forming the image.", "Thin, light, low power consumption, no flicker", "Limited viewing angle, backlight required, black is not perfectly black"],
              ["Plasma Display", "Thousands of tiny cells filled with neon/xenon gas. When electric current passes, the gas becomes plasma and emits UV light that excites red, green and blue phosphors.", "Very large screen sizes, excellent colour and wide viewing angle, fast response", "High power consumption, heavy, expensive, screen burn-in, now largely replaced by LED/LCD"],
            ],
          },
          {
            kind: "paragraph",
            text: "Printers (extra for exams): Impact printers form characters by striking a ribbon (dot-matrix, daisy wheel, line printer) — noisy but can make carbon copies. Non-impact printers (inkjet, laser, thermal) form characters without striking — quiet, high quality and faster. Print quality is measured in DPI (dots per inch) and speed in PPM (pages per minute).",
          },
        ],
      },
      {
        id: "number-systems",
        title: "9. Number Systems and Conversions",
        icon: "Hash",
        blocks: [
          {
            kind: "paragraph",
            text: "A number system is a way of representing numbers using a fixed set of symbols (digits). The number of distinct digits is the BASE (or radix) of the system. A computer uses the binary system internally because electronic circuits have only two stable states (ON = 1, OFF = 0).",
          },
          {
            kind: "table",
            headers: ["System", "Base", "Digits used", "Example"],
            rows: [
              ["Decimal", "10", "0–9", "(156)₁₀"],
              ["Binary", "2", "0, 1", "(10011100)₂"],
              ["Octal", "8", "0–7", "(234)₈"],
              ["Hexadecimal", "16", "0–9 and A–F (A=10, B=11, C=12, D=13, E=14, F=15)", "(9C)₁₆"],
            ],
          },
          {
            kind: "paragraph",
            text: "Positional value: in every system, each digit has a weight equal to (base)^position, starting from position 0 on the right. For example (101)₂ = 1×2² + 0×2¹ + 1×2⁰ = 4 + 0 + 1 = 5.",
          },
          {
            kind: "table",
            headers: ["Decimal", "Binary", "Octal", "Hexadecimal"],
            rows: [
              ["0", "0000", "0", "0"],
              ["1", "0001", "1", "1"],
              ["2", "0010", "2", "2"],
              ["3", "0011", "3", "3"],
              ["4", "0100", "4", "4"],
              ["5", "0101", "5", "5"],
              ["6", "0110", "6", "6"],
              ["7", "0111", "7", "7"],
              ["8", "1000", "10", "8"],
              ["9", "1001", "11", "9"],
              ["10", "1010", "12", "A"],
              ["11", "1011", "13", "B"],
              ["12", "1100", "14", "C"],
              ["13", "1101", "15", "D"],
              ["14", "1110", "16", "E"],
              ["15", "1111", "17", "F"],
            ],
          },
          {
            kind: "paragraph",
            text: "A. Decimal to any base — repeatedly divide the number by the new base and write the remainders from BOTTOM to TOP (last remainder first). For fractions, repeatedly multiply the fraction by the base and write the integer parts from TOP to BOTTOM.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved: (45)₁₀ to binary",
            text: "45 ÷ 2 = 22 remainder 1; 22 ÷ 2 = 11 remainder 0; 11 ÷ 2 = 5 remainder 1; 5 ÷ 2 = 2 remainder 1; 2 ÷ 2 = 1 remainder 0; 1 ÷ 2 = 0 remainder 1. Reading the remainders from bottom to top: (45)₁₀ = (101101)₂. Check: 32 + 8 + 4 + 1 = 45 ✓",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved: (156)₁₀ to octal and (431)₁₀ to hexadecimal",
            text: "156 ÷ 8 = 19 rem 4; 19 ÷ 8 = 2 rem 3; 2 ÷ 8 = 0 rem 2 → (156)₁₀ = (234)₈. Check: 2×64 + 3×8 + 4 = 156 ✓.   431 ÷ 16 = 26 rem 15 (F); 26 ÷ 16 = 1 rem 10 (A); 1 ÷ 16 = 0 rem 1 → (431)₁₀ = (1AF)₁₆. Check: 256 + 160 + 15 = 431 ✓",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved: (0.625)₁₀ to binary",
            text: "0.625 × 2 = 1.25 → integer part 1; 0.25 × 2 = 0.50 → 0; 0.5 × 2 = 1.00 → 1. Reading top to bottom: (0.625)₁₀ = (0.101)₂. Check: 1/2 + 0/4 + 1/8 = 0.625 ✓",
          },
          {
            kind: "paragraph",
            text: "B. Any base to decimal — multiply each digit by its positional weight and add.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved: (110101)₂ to decimal and (2F6)₁₆ to decimal",
            text: "(110101)₂ = 1×32 + 1×16 + 0×8 + 1×4 + 0×2 + 1×1 = 32 + 16 + 4 + 1 = 53.   (2F6)₁₆ = 2×16² + 15×16¹ + 6×16⁰ = 512 + 240 + 6 = 758.",
          },
          {
            kind: "paragraph",
            text: "C. Binary ↔ Octal ↔ Hexadecimal (shortcut) — Since 8 = 2³ and 16 = 2⁴: one octal digit = 3 binary bits, one hex digit = 4 binary bits. Group the bits from the RIGHT (add leading zeros if needed).",
          },
          {
            kind: "table",
            headers: ["Conversion", "Working", "Answer"],
            rows: [
              ["(101110110)₂ → octal", "Group in 3s: 101 | 110 | 110 = 5 | 6 | 6", "(566)₈"],
              ["(1011101)₂ → hex", "Group in 4s: 0101 | 1101 = 5 | D", "(5D)₁₆"],
              ["(2F6)₁₆ → binary", "2 = 0010, F = 1111, 6 = 0110", "(1011110110)₂"],
              ["(725)₈ → hex", "Octal → binary: 111 010 101; regroup in 4s: 0001 | 1101 | 0101", "(1D5)₁₆"],
            ],
          },
          {
            kind: "paragraph",
            text: "D. Binary arithmetic — the four rules of binary addition: 0+0 = 0; 0+1 = 1; 1+0 = 1; 1+1 = 10 (write 0, carry 1); and 1+1+1 = 11 (write 1, carry 1).",
          },
          {
            kind: "table",
            headers: ["Operation", "Working", "Result"],
            rows: [
              ["Addition: 1011 + 1101", "From the right: bit0 1+1 = 0 carry 1; bit1 1+0+1 = 0 carry 1; bit2 0+1+1 = 0 carry 1; bit3 1+1+1 = 1 carry 1; final carry 1 → 11000", "(11000)₂ = 24  (11 + 13 = 24 ✓)"],
              ["Subtraction: 1101 − 1011", "Rules: 0−0 = 0, 1−0 = 1, 1−1 = 0, 0−1 = 1 with a borrow from the next left bit. bit0 1−1 = 0; bit1 0−1 → borrow, 2−1 = 1; bit2 1−0−1(borrow) = 0; bit3 1−1 = 0 → 0010", "(10)₂ = 2  (13 − 11 = 2 ✓)"],
              ["Subtraction: 10000 − 0111", "Write 10000 − 00111. bit0 0−1 → borrow → 1; bit1 0−1−1 → borrow → 0; bit2 0−1−1 → borrow → 0; bit3 0−0−1 → borrow → 1; bit4 1−0−1 = 0 → 01001", "(1001)₂ = 9  (16 − 7 = 9 ✓)"],
              ["Multiplication: 1011 × 101", "Multiply by each bit of the multiplier and add shifted rows: 1011 + 101100 (shift 2) = 110111", "(110111)₂ = 55  (11 × 5 = 55 ✓)"],
              ["Octal addition: (47)₈ + (65)₈", "7+5 = 12 → 12−8 = 4, carry 1; 4+6+1 = 11 → 11−8 = 3, carry 1 → 134", "(134)₈  (39 + 53 = 92 ✓)"],
              ["Hex addition: (2A)₁₆ + (3F)₁₆", "A(10)+F(15) = 25 → 25−16 = 9, carry 1; 2+3+1 = 6 → 69", "(69)₁₆  (42 + 63 = 105 ✓)"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Subtraction using 2's complement (how a computer actually subtracts)",
            text: "Compute 13 − 11 using 4-bit numbers. Step 1: 11 = 1011. Step 2: 1's complement (flip all bits) = 0100. Step 3: 2's complement = 1's complement + 1 = 0101. Step 4: Add to 13 (1101): 1101 + 0101 = 1 0010. Step 5: Discard the end-around carry → 0010 = 2 ✓. The ALU has no separate subtractor — it adds the 2's complement.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "GIGO", definition: "Garbage In, Garbage Out — wrong input always produces wrong output, however accurate the computer is." },
      { term: "CPU", definition: "Central Processing Unit — the brain of the computer, made of the Control Unit, ALU and Registers." },
      { term: "Compiler", definition: "A translator that converts the whole high-level program into machine code in one go." },
      { term: "Interpreter", definition: "A translator that converts and executes a program one statement at a time." },
      { term: "RAM", definition: "Random Access Memory — volatile, read/write main memory that holds the programs and data currently in use." },
      { term: "ROM", definition: "Read Only Memory — non-volatile memory that stores permanent start-up instructions (BIOS)." },
      { term: "EPROM", definition: "Erasable PROM — can be erased with UV light and reprogrammed." },
      { term: "Byte", definition: "A group of 8 bits, enough to store one character." },
      { term: "Base (radix)", definition: "The number of distinct digits in a number system (2, 8, 10, 16)." },
      { term: "2's complement", definition: "1's complement + 1; used by computers to perform subtraction by addition." },
    ],
    examQuestions: [
      "Define a computer. Explain its characteristics. (Long)",
      "Draw and explain the block diagram of a computer. (Long)",
      "Differentiate between Mini, Micro, Mainframe and Super computers. (Long)",
      "What are the different types of programming languages? Compare machine, assembly and high-level languages. (Long)",
      "Differentiate between a compiler and an interpreter. (Medium)",
      "What is data organisation? Explain the data hierarchy with an example. (Medium)",
      "Differentiate between primary and secondary memory. (Medium)",
      "Write short notes on RAM, ROM, PROM and EPROM. (Medium)",
      "Explain any two secondary storage devices. (Medium)",
      "Write short notes on: (a) Scanner (b) Plotter (c) LCD (d) Plasma display. (Medium)",
      "Convert: (a) (156)₁₀ to binary (b) (1011101)₂ to decimal (c) (725)₈ to hexadecimal. (Medium)",
      "Perform: (a) 1011 + 1101 (b) 1101 − 1011 (c) 1011 × 101 in binary. (Medium)",
      "What is GIGO? (Short)",
      "Define bit, byte, field, record and file. (Short)",
    ],
  },
  {
    unitNumber: 2,
    title: "Algorithm and Flowcharts",
    hours: 8,
    headings: [
      {
        id: "algorithm",
        title: "1. Algorithm: Definition and Characteristics",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "An algorithm is a finite, step-by-step, unambiguous set of instructions written to solve a problem or to accomplish a task. It is the logical plan that is prepared BEFORE writing the actual program. The word comes from the name of the Persian mathematician Al-Khwarizmi. A recipe for cooking tea is an everyday example of an algorithm.",
          },
          {
            kind: "table",
            headers: ["Characteristic", "Meaning"],
            rows: [
              ["Input", "An algorithm takes zero or more well-defined inputs."],
              ["Output", "It produces at least one output (the result)."],
              ["Definiteness (Unambiguous)", "Every step must be clear and precise, with only one possible meaning."],
              ["Finiteness", "It must end after a finite number of steps — it cannot run forever."],
              ["Effectiveness", "Each step must be simple and basic enough to be carried out exactly, in a finite time (even by hand)."],
              ["Language independent", "The same algorithm can be coded in C, Java or Python."],
            ],
          },
          {
            kind: "table",
            headers: ["Advantages", "Disadvantages"],
            rows: [
              ["Easy to understand — steps are in simple English", "Time-consuming to write for big problems"],
              ["Language independent — can be converted into any programming language", "Complex logic (many nested branches/loops) is difficult to show clearly"],
              ["Makes debugging and finding logical errors easier before coding", "No standard notation, so the style differs from person to person"],
              ["Acts as a blueprint that the programmer can follow", "Branching and looping are harder to follow than in a flowchart"],
              ["Helps in analysing the efficiency (time and space) of a solution", "Cannot be executed directly by a computer"],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Ways of representing an algorithm: (1) Natural language (step-wise English), (2) Flowchart (diagram), (3) Pseudocode (English mixed with programming-like keywords).",
              "Good algorithm qualities: correct, efficient (less time and memory), simple, and general (works for all valid inputs).",
            ],
          },
        ],
      },
      {
        id: "algorithm-examples",
        title: "2. Algorithm Examples",
        icon: "Play",
        blocks: [
          {
            kind: "paragraph",
            text: "Format to follow in the exam: start with 'Step 1: Start' and end with 'Step N: Stop'. Use READ/INPUT for input, PRINT/DISPLAY for output and '=' or '←' for assignment.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Example 1 — Add two numbers",
            text: "Step 1: Start. Step 2: Read the numbers A and B. Step 3: SUM = A + B. Step 4: Print SUM. Step 5: Stop.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Example 2 — Check whether a number is even or odd",
            text: "Step 1: Start. Step 2: Read N. Step 3: Find the remainder R = N mod 2. Step 4: If R = 0 then print 'N is Even', otherwise print 'N is Odd'. Step 5: Stop.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Example 3 — Largest of three numbers",
            text: "Step 1: Start. Step 2: Read A, B, C. Step 3: If A > B and A > C then print 'A is largest'. Step 4: Else if B > C then print 'B is largest'. Step 5: Else print 'C is largest'. Step 6: Stop.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Example 4 — Factorial of a number N",
            text: "Step 1: Start. Step 2: Read N. Step 3: Set FACT = 1 and I = 1. Step 4: Repeat Steps 5 and 6 while I ≤ N. Step 5: FACT = FACT × I. Step 6: I = I + 1. Step 7: Print FACT. Step 8: Stop.  (Dry run for N = 4: FACT becomes 1, 2, 6, 24 → answer 24.)",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Example 5 — Sum of the first N natural numbers",
            text: "Step 1: Start. Step 2: Read N. Step 3: Set SUM = 0 and I = 1. Step 4: While I ≤ N, do SUM = SUM + I and I = I + 1. Step 5: Print SUM. Step 6: Stop.  (For N = 5: 1+2+3+4+5 = 15.)",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Example 6 — Simple interest",
            text: "Step 1: Start. Step 2: Read P (principal), R (rate) and T (time). Step 3: SI = (P × R × T) / 100. Step 4: Print SI. Step 5: Stop.  (P = 5000, R = 6, T = 2 → SI = 600.)",
          },
          {
            kind: "paragraph",
            text: "The same algorithm written as pseudocode:",
          },
          {
            kind: "code",
            language: "text",
            title: "Pseudocode — Factorial",
            code: String.raw`BEGIN
  READ N
  FACT = 1
  FOR I = 1 TO N
     FACT = FACT * I
  END FOR
  PRINT FACT
END`,
          },
        ],
      },
      {
        id: "flowchart",
        title: "3. Flowchart: Definition, Symbols, Advantages and Disadvantages",
        icon: "Network",
        blocks: [
          {
            kind: "paragraph",
            text: "A flowchart is the pictorial (diagrammatic) representation of an algorithm. It uses standard geometrical symbols connected by arrows to show the sequence of operations, the decisions and the flow of control in a program. 'A picture is worth a thousand words' — a flowchart makes the logic of a program easy to see.",
          },
          { kind: "diagram", diagramId: "flowchart-symbols", caption: "Fig 2.1 — Standard flowchart symbols" },
          {
            kind: "table",
            headers: ["Symbol", "Name", "Purpose"],
            rows: [
              ["Oval (terminator)", "Start / Stop", "Marks the beginning and the end of the flowchart."],
              ["Parallelogram", "Input / Output", "Reading data (READ, INPUT) and displaying results (PRINT, DISPLAY)."],
              ["Rectangle", "Process", "Calculations, assignments and data manipulation, e.g., SUM = A + B."],
              ["Diamond", "Decision", "A condition with a YES/NO (True/False) answer; has one entry and two exits."],
              ["Circle", "Connector", "Joins different parts of a flowchart on the same page (used to avoid crossing lines)."],
              ["Pentagon / off-page connector", "Off-page connector", "Joins the flowchart to another page."],
              ["Arrow", "Flow line", "Shows the direction of the flow of control."],
              ["Rectangle with double vertical sides", "Predefined process", "Calls a sub-program/function defined elsewhere."],
              ["Hexagon", "Preparation", "Initialisation of loops/variables (used in some textbooks for FOR loops)."],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Rules for drawing a flowchart: (1) Use only standard symbols. (2) The flow normally goes from top to bottom and left to right. (3) Every flowchart has exactly one Start and at least one Stop. (4) A process/I-O symbol has one entry and one exit; a decision symbol has one entry and two exits (Yes/No). (5) Flow lines must not cross each other — use connectors. (6) Keep the text inside symbols short and clear.",
              "Types of flowcharts: System flowchart (shows the flow of data through an entire system) and Program flowchart (shows the logic of a single program).",
            ],
          },
          {
            kind: "table",
            headers: ["Advantages of flowcharts", "Disadvantages of flowcharts"],
            rows: [
              ["Better communication — logic can be understood by anyone, even non-programmers", "Complex to draw for large and complicated programs"],
              ["Effective analysis — helps to find problems and improve the logic", "Any change in logic means the whole flowchart must be redrawn"],
              ["Proper documentation of the program for future reference", "Time-consuming and costly to draw and update"],
              ["Easy debugging and testing — errors in logic are spotted early", "No standard about how much detail to show inside a symbol"],
              ["Acts as a guide (blueprint) during coding", "Cannot show the data structure or the exact code, only logic"],
            ],
          },
        ],
      },
      {
        id: "flowchart-examples",
        title: "4. Flowchart Examples",
        icon: "Compass",
        blocks: [
          {
            kind: "paragraph",
            text: "Example 1 — Even or Odd (a DECISION structure): the flowchart reads a number, checks the remainder of N ÷ 2 and follows the YES or NO branch.",
          },
          { kind: "diagram", diagramId: "flowchart-even-odd", caption: "Fig 2.2 — Flowchart to check whether a number is even or odd" },
          {
            kind: "paragraph",
            text: "Example 2 — Sum of the first N natural numbers (a LOOP structure): the decision diamond sends the flow back to the process box until the condition I ≤ N becomes false.",
          },
          { kind: "diagram", diagramId: "flowchart-sum-n", caption: "Fig 2.3 — Flowchart to find the sum of the first N natural numbers" },
          {
            kind: "bullets",
            items: [
              "Every flowchart is built from only three basic structures: Sequence (steps one after another), Selection/Decision (if–else) and Iteration/Loop (repeat while a condition is true). This idea is the base of structured programming in C (Unit II of C-102).",
              "Dry run: always test your flowchart with a small sample input (e.g., N = 4 for factorial) to prove that it gives the correct output.",
            ],
          },
        ],
      },
      {
        id: "algo-vs-flowchart",
        title: "5. Algorithm vs Flowchart",
        icon: "GitCompare",
        blocks: [
          {
            kind: "table",
            headers: ["Basis", "Algorithm", "Flowchart"],
            rows: [
              ["Form", "Written step-by-step in natural language / pseudocode", "Drawn using standard symbols and arrows"],
              ["Nature", "Textual representation", "Graphical (pictorial) representation"],
              ["Ease of understanding", "Needs careful reading", "Easier to grasp at a glance"],
              ["Complex logic", "Difficult to follow for many branches", "Branches and loops are clearly visible"],
              ["Effort to draw", "Quick to write", "Time-consuming to draw and modify"],
              ["Debugging", "Slightly harder", "Easier to trace the flow"],
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam Tip",
            text: "For a 10-mark question 'Explain algorithm and flowchart with an example', write: definition → characteristics → advantages/disadvantages → one algorithm example (step form) → the matching flowchart with symbols. Always label Start/Stop and the Yes/No branches.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Algorithm", definition: "A finite, ordered, unambiguous sequence of steps to solve a problem." },
      { term: "Flowchart", definition: "A diagram that represents an algorithm using standard symbols and arrows." },
      { term: "Pseudocode", definition: "An informal, English-like description of an algorithm that resembles program code." },
      { term: "Decision symbol", definition: "The diamond symbol that tests a condition and branches Yes/No." },
      { term: "Connector", definition: "A small circle that joins two parts of a flowchart to avoid long crossing lines." },
      { term: "Dry run", definition: "Manually tracing an algorithm/flowchart with sample data to verify its correctness." },
    ],
    examQuestions: [
      "Define algorithm. Explain its characteristics, advantages and disadvantages. (Long)",
      "Write an algorithm and draw a flowchart to find the factorial / largest of three numbers / even-odd. (Long)",
      "What is a flowchart? Explain the symbols used in a flowchart. (Long)",
      "State the advantages and disadvantages of flowcharts. (Medium)",
      "Differentiate between an algorithm and a flowchart. (Medium)",
      "Write an algorithm to find the sum of the first N natural numbers. (Medium)",
      "What is pseudocode? (Short)",
      "Name the three basic structures used in flowcharts. (Short)",
    ],
  },
  {
    unitNumber: 3,
    title: "Operating System, DOS and its Commands",
    hours: 8,
    headings: [
      {
        id: "os-intro",
        title: "1. Operating System: Definition, Functions and Services",
        icon: "Settings",
        blocks: [
          {
            kind: "paragraph",
            text: "An Operating System (OS) is system software that acts as an interface (a middle layer) between the user/application programs and the computer hardware. It manages all the hardware and software resources of the computer and provides a convenient environment for running programs. Without an OS, a computer is just a lifeless machine. Examples: MS-DOS, Windows, Linux, UNIX, macOS, Android.",
          },
          { kind: "diagram", diagramId: "os-layers", caption: "Fig 3.1 — Position of the operating system between the user and the hardware" },
          {
            kind: "paragraph",
            text: "Objectives of an OS: (1) Convenience — make the computer easy to use. (2) Efficiency — use the hardware resources in the best possible way. (3) Ability to evolve — allow new system functions to be added without disturbing existing ones.",
          },
          {
            kind: "table",
            headers: ["Function", "What the OS does"],
            rows: [
              ["Process management", "Creates, schedules and terminates processes; decides which program gets the CPU and for how long (CPU scheduling)."],
              ["Memory management", "Allocates RAM to programs, keeps track of used/free memory and frees it when a program ends."],
              ["File management", "Creates, deletes, copies, renames and organises files and directories; controls access permissions."],
              ["Device (I/O) management", "Controls input/output devices through device drivers; handles buffering and spooling (e.g., printer queue)."],
              ["Secondary storage management", "Allocates disk space, keeps track of free blocks and schedules disk access."],
              ["Security and protection", "Protects data from unauthorised access using passwords, user accounts and permissions."],
              ["User interface (command interpreter)", "Provides a CLI (command line, e.g., DOS) or a GUI (graphical, e.g., Windows) through which the user talks to the computer."],
              ["Error detection and handling", "Detects hardware/software errors (printer out of paper, disk failure) and takes corrective action."],
              ["Resource allocation and accounting", "Shares CPU, memory and devices between many users/programs and records who used how much."],
            ],
          },
          {
            kind: "paragraph",
            text: "Services provided by an OS: Program execution (load a program into memory and run it), I/O operations, File-system manipulation, Communication (between processes/computers), Error detection, Resource allocation, Accounting and Protection & security.",
          },
        ],
      },
      {
        id: "os-history",
        title: "2. History of Operating Systems and of DOS",
        icon: "History",
        blocks: [
          {
            kind: "table",
            headers: ["Generation / Period", "Hardware", "Operating system features"],
            rows: [
              ["1st (1945–1955)", "Vacuum tubes", "No OS. Programs were fed in machine language directly by the programmer using switches and plug-boards."],
              ["2nd (1955–1965)", "Transistors", "Batch operating systems. Jobs on punched cards were collected and run one after another by a monitor program."],
              ["3rd (1965–1980)", "Integrated Circuits (ICs)", "Multiprogramming and time-sharing (OS/360, MULTICS, UNIX in 1969–70). Many users share one computer."],
              ["4th (1980–today)", "Microprocessors / PCs", "Personal-computer OS: MS-DOS (1981), Mac OS (1984), Windows (1985 onwards), Linux (1991), Android (2008); GUI, networking, mobile and cloud."],
            ],
          },
          {
            kind: "paragraph",
            text: "History of DOS: DOS stands for Disk Operating System. It began as 86-DOS (QDOS) written by Tim Paterson at Seattle Computer Products. Microsoft bought it, improved it and supplied it to IBM as PC-DOS for the IBM PC in 1981; the version sold to other manufacturers was called MS-DOS. DOS is a single-user, single-tasking, command-line (text-based) operating system.",
          },
          {
            kind: "table",
            headers: ["Version", "Year", "Important addition"],
            rows: [
              ["MS-DOS 1.0", "1981", "First version, shipped with the IBM PC; supported floppy disks only."],
              ["MS-DOS 2.0", "1983", "Hard-disk support and the hierarchical directory (tree) structure; batch file improvements."],
              ["MS-DOS 3.x", "1984–87", "Support for 1.2 MB floppies, larger hard disks and networking (3.1)."],
              ["MS-DOS 5.0", "1991", "Better memory management, full-screen EDIT, UNDELETE, on-line HELP."],
              ["MS-DOS 6.0 / 6.22", "1993 / 1994", "Disk compression (DoubleSpace/DriveSpace), MemMaker, antivirus tools. 6.22 was the last stand-alone version."],
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Why DOS is still studied",
            text: "Modern Windows still has a command prompt (cmd.exe) that understands the same commands (DIR, COPY, MD, CD ...) and batch files. DOS concepts — files, directories, paths, commands — are the base of every operating system.",
          },
        ],
      },
      {
        id: "dos-files-dirs",
        title: "3. Booting, Files and Directories in DOS",
        icon: "FolderOpen",
        blocks: [
          {
            kind: "paragraph",
            text: "Booting is the process of loading the operating system into the main memory when the computer is switched on. Cold boot = starting from power-off. Warm boot = restarting with Ctrl + Alt + Del without switching off the power.",
          },
          { kind: "diagram", diagramId: "dos-boot-process", caption: "Fig 3.2 — DOS boot sequence" },
          {
            kind: "table",
            headers: ["DOS system file", "Role"],
            rows: [
              ["IO.SYS", "Hidden system file that contains the basic input/output drivers; loaded first."],
              ["MSDOS.SYS", "Hidden file — the DOS kernel; manages files, memory and system calls."],
              ["COMMAND.COM", "The command interpreter. It displays the prompt, reads the command typed by the user and runs it. It contains all INTERNAL commands."],
              ["CONFIG.SYS", "Text file that configures the system at start-up (device drivers, FILES, BUFFERS)."],
              ["AUTOEXEC.BAT", "Batch file that is executed automatically every time DOS starts (sets PATH, PROMPT, loads programs)."],
            ],
          },
          {
            kind: "bullets",
            items: [
              "File names in DOS follow the 8.3 rule: up to 8 characters for the name and up to 3 for the extension (e.g., LETTER01.TXT). Spaces and characters like * ? / \\ : | < > are not allowed. Names like CON, PRN, AUX, NUL are reserved for devices.",
              "Wildcard characters: * (asterisk) stands for any number of characters — *.TXT means all text files; ? (question mark) stands for exactly one character — FILE?.DOC means FILE1.DOC, FILEA.DOC, etc.",
              "Drives: A: and B: (floppy), C: (hard disk), D: onwards (other drives). To change the drive just type its letter, e.g., D: and press Enter.",
              "Directory structure: DOS stores files in a tree-like hierarchy. The top is the ROOT directory (C:\\); inside it there can be many sub-directories, which can contain further sub-directories and files. The exact location of a file is written as a PATH, e.g., C:\\COLLEGE\\BCA\\NOTES.TXT.",
            ],
          },
          { kind: "diagram", diagramId: "dos-directory-tree", caption: "Fig 3.3 — Tree-structured directory in DOS" },
          {
            kind: "paragraph",
            text: "The DOS prompt (for example C:\\>) shows the current drive and directory and waits for a command. Commands are not case-sensitive.",
          },
        ],
      },
      {
        id: "dos-internal",
        title: "4. Internal Commands of DOS",
        icon: "Code",
        blocks: [
          {
            kind: "paragraph",
            text: "Internal commands are built into COMMAND.COM. They are loaded into memory during booting, so they are always available and execute quickly — even if the disk holding DOS is not in the drive.",
          },
          {
            kind: "table",
            headers: ["Command", "Purpose", "Syntax / Example"],
            rows: [
              ["DIR", "Lists the files and sub-directories of a directory. /P pauses after each screen; /W shows the list in wide format; /S includes sub-directories.", "DIR   |   DIR /P   |   DIR *.TXT   |   DIR A: /W"],
              ["CLS", "Clears the screen.", "CLS"],
              ["MD / MKDIR", "Creates a new directory.", "MD STUDENT"],
              ["CD / CHDIR", "Changes (or shows) the current directory. CD.. moves one level up; CD\\ moves to the root.", "CD STUDENT   |   CD..   |   CD\\"],
              ["RD / RMDIR", "Removes an EMPTY directory.", "RD STUDENT"],
              ["COPY", "Copies one or more files. COPY CON creates a new file from the keyboard (finish with F6 or Ctrl+Z then Enter).", "COPY A.TXT B.TXT   |   COPY *.TXT D:\\BACKUP   |   COPY CON NOTES.TXT"],
              ["DEL / ERASE", "Deletes one or more files (wildcards allowed).", "DEL OLD.TXT   |   DEL *.BAK"],
              ["REN / RENAME", "Changes the name of a file or directory.", "REN OLD.TXT NEW.TXT"],
              ["TYPE", "Displays the contents of a text file on the screen.", "TYPE NOTES.TXT"],
              ["DATE", "Shows or changes the system date.", "DATE"],
              ["TIME", "Shows or changes the system time.", "TIME"],
              ["VER", "Displays the DOS version number.", "VER"],
              ["VOL", "Displays the volume label and serial number of a disk.", "VOL C:"],
              ["PATH", "Sets or shows the search path — the directories DOS searches for external commands/programs.", "PATH C:\\DOS;C:\\WINDOWS"],
              ["PROMPT", "Changes the appearance of the DOS prompt. $P = current path, $G = > sign.", "PROMPT $P$G"],
              ["ECHO / REM / PAUSE", "Used mainly in batch files: display a message, insert a remark, wait for a key press.", "ECHO Hello"],
              ["SET", "Displays or sets environment variables.", "SET TEMP=C:\\TEMP"],
            ],
          },
          {
            kind: "code",
            language: "dos",
            title: "A short DOS session (creating a directory and a file)",
            code: String.raw`C:\> MD STUDENT
C:\> CD STUDENT
C:\STUDENT> COPY CON NOTES.TXT
This is my first DOS file.^Z
        1 file(s) copied
C:\STUDENT> DIR

 Volume in drive C has no label
 Directory of C:\STUDENT

.            <DIR>
..           <DIR>
NOTES    TXT            26
         1 file(s)             26 bytes
         2 dir(s)

C:\STUDENT> TYPE NOTES.TXT
This is my first DOS file.
C:\STUDENT> CD..
C:\>`,
          },
        ],
      },
      {
        id: "dos-external",
        title: "5. External Commands of DOS",
        icon: "Package",
        blocks: [
          {
            kind: "paragraph",
            text: "External commands are separate program files (.COM, .EXE or .BAT) stored on the disk, normally in the DOS directory. They are loaded from the disk into memory only when called, so DOS (or the PATH) must be able to find them.",
          },
          {
            kind: "table",
            headers: ["Command", "Purpose", "Example"],
            rows: [
              ["FORMAT", "Prepares a disk for use by creating tracks, sectors and a file system. Destroys the existing data. /S copies the system files (makes it bootable).", "FORMAT A:   |   FORMAT A: /S"],
              ["CHKDSK", "Checks a disk and reports its space, bad sectors and memory status. CHKDSK /F fixes errors.", "CHKDSK C:"],
              ["SCANDISK", "Advanced disk-checking tool that finds and repairs disk errors.", "SCANDISK C:"],
              ["DISKCOPY", "Makes an exact copy of one floppy disk on another.", "DISKCOPY A: B:"],
              ["XCOPY", "Copies files together with directories and sub-directories (faster than COPY). /S = include sub-directories.", "XCOPY C:\\DATA D:\\BACKUP /S"],
              ["ATTRIB", "Shows or changes file attributes: R (read-only), A (archive), H (hidden), S (system).", "ATTRIB +R NOTES.TXT"],
              ["TREE", "Displays the directory structure graphically as a tree.", "TREE C:\\"],
              ["LABEL", "Creates or changes the volume label of a disk.", "LABEL A: MYDISK"],
              ["MORE", "Displays output one screen at a time.", "TYPE BIG.TXT | MORE"],
              ["SORT", "Sorts the lines of a text file alphabetically.", "SORT < NAMES.TXT"],
              ["FIND", "Searches for a text string in a file.", "FIND \"BCA\" NOTES.TXT"],
              ["MOVE", "Moves files/directories from one place to another (also renames directories).", "MOVE A.TXT D:\\DATA"],
              ["DELTREE", "Deletes a directory with all its files and sub-directories.", "DELTREE OLDDATA"],
              ["EDIT", "Full-screen text editor for creating and editing text/batch files.", "EDIT MYFILE.BAT"],
              ["MEM", "Shows the memory usage — used, free, conventional and extended memory.", "MEM"],
              ["UNDELETE", "Recovers files deleted by mistake (works only if not overwritten).", "UNDELETE"],
              ["FDISK", "Creates and manages hard-disk partitions.", "FDISK"],
              ["SYS", "Copies the DOS system files to a disk so that it can boot.", "SYS A:"],
            ],
          },
          {
            kind: "table",
            headers: ["Internal commands", "External commands"],
            rows: [
              ["Part of COMMAND.COM", "Separate disk files (.COM/.EXE/.BAT)"],
              ["Loaded into memory at boot time", "Loaded into memory only when executed"],
              ["Always available, faster", "Need the file to be present on disk or in PATH; slower"],
              ["Perform simple tasks", "Perform advanced/utility tasks"],
              ["Examples: DIR, COPY, DEL, MD, CD, TYPE, CLS, REN", "Examples: FORMAT, CHKDSK, XCOPY, ATTRIB, TREE, DISKCOPY"],
            ],
          },
        ],
      },
      {
        id: "batch-files",
        title: "6. Batch Files",
        icon: "FileText",
        blocks: [
          {
            kind: "paragraph",
            text: "A batch file is a plain text file with the extension .BAT that contains a list of DOS commands. When the batch file name is typed, DOS executes all the commands in it one after another automatically, exactly as if they were typed by the user. Batch files save time by automating repetitive tasks such as backups and start-up settings. AUTOEXEC.BAT is a special batch file that runs at every boot.",
          },
          {
            kind: "bullets",
            items: [
              "Creating a batch file: use EDIT (e.g., EDIT BACKUP.BAT), or COPY CON BACKUP.BAT and type the commands, finishing with F6/Ctrl+Z and Enter, or use Notepad and save with the .BAT extension.",
              "Running it: type only the file name (BACKUP) at the prompt.",
              "Common batch commands: ECHO OFF (do not show the commands while running), ECHO (display a message), REM (comment), PAUSE (wait for a key), GOTO label (jump), IF (conditional execution), FOR (repeat), CALL (run another batch file), CLS, and replaceable parameters %1 … %9 that receive the words typed after the batch file name.",
            ],
          },
          {
            kind: "code",
            language: "bat",
            title: "Example 1 — BACKUP.BAT (automate a backup)",
            code: String.raw`@ECHO OFF
CLS
ECHO Starting backup of BCA notes ...
MD D:\BACKUP
COPY C:\BCA\*.TXT D:\BACKUP
ECHO Backup completed successfully.
PAUSE`,
          },
          {
            kind: "code",
            language: "bat",
            title: "Example 2 — SHOW.BAT with a parameter and IF / GOTO",
            code: String.raw`@ECHO OFF
REM Usage: SHOW filename
IF EXIST %1 GOTO SHOW
ECHO File %1 not found.
GOTO END
:SHOW
TYPE %1
:END`,
            output: "C:\\> SHOW NOTES.TXT   →  prints the file if it exists, otherwise 'File NOTES.TXT not found.'",
          },
          {
            kind: "code",
            language: "bat",
            title: "Example 3 — a typical AUTOEXEC.BAT",
            code: String.raw`@ECHO OFF
PATH C:\DOS;C:\WINDOWS
PROMPT $P$G
SET TEMP=C:\TEMP
CLS`,
          },
          {
            kind: "table",
            headers: ["Advantages of batch files", "Limitations"],
            rows: [
              ["Automate repetitive tasks", "Limited programming features (no complex data types)"],
              ["Save time and reduce typing mistakes", "Errors in one command can spoil the whole task"],
              ["Easy to create with any text editor", "Only DOS/Windows command-line compatible; not portable to other OS"],
            ],
          },
        ],
      },
      {
        id: "types-of-os",
        title: "7. Types of Operating Systems",
        icon: "Layers",
        blocks: [
          {
            kind: "table",
            headers: ["Type", "Description", "Examples / Uses"],
            rows: [
              ["Batch OS", "Similar jobs are collected into a batch and executed one after another with no user interaction while running. CPU may sit idle during I/O.", "Early IBM mainframes; payroll and billing processing"],
              ["Single-user, single-tasking", "Only one user and one program at a time.", "MS-DOS"],
              ["Multiprogramming OS", "Several programs are kept in memory; when one waits for I/O the CPU switches to another. Maximises CPU utilisation.", "UNIX, mainframe OS"],
              ["Multitasking / Time-sharing OS", "The CPU time is divided into small slices (quantum) and given in turn to many tasks/users so each feels it has its own computer.", "Windows, Linux, UNIX"],
              ["Multiprocessing (Parallel) OS", "Uses two or more CPUs in one computer that share memory and work together — faster and more reliable.", "Server/multicore OS such as Linux, Windows Server"],
              ["Real-time OS (RTOS)", "Guarantees a response within a strict time limit. Hard real-time (missing a deadline is a disaster) and soft real-time (occasional delay is tolerable).", "Air traffic control, missile systems, medical monitors, robots"],
              ["Distributed OS", "Many independent computers connected through a network appear to the user as a single system; resources and load are shared.", "LOCUS, cloud clusters"],
              ["Network OS", "Runs on a server and lets many computers share files, printers and users over a network.", "Windows Server, Novell NetWare, UNIX"],
              ["Embedded / Mobile OS", "Small OS built into devices with limited resources.", "Android, iOS, OS in washing machines, ATMs"],
            ],
          },
          {
            kind: "table",
            headers: ["Basis", "Types"],
            rows: [
              ["By number of users", "Single-user (DOS, Windows 95) and Multi-user (UNIX, Linux, Windows Server)"],
              ["By number of tasks", "Single-tasking (DOS) and Multi-tasking (Windows, Linux)"],
              ["By user interface", "CLI — Command Line Interface (DOS, UNIX shell) and GUI — Graphical User Interface (Windows, macOS)"],
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam Tip",
            text: "For 'Explain types of operating systems' write at least 5 types (batch, multiprogramming, time-sharing, real-time, distributed/network) with one line of definition and one example each — a table is the fastest way to score full marks.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Operating System", definition: "System software that manages hardware and software resources and provides an interface between the user and the computer." },
      { term: "DOS", definition: "Disk Operating System — a single-user, single-tasking, command-line OS by Microsoft (1981)." },
      { term: "COMMAND.COM", definition: "The DOS command interpreter that holds all the internal commands." },
      { term: "Internal command", definition: "A DOS command built into COMMAND.COM, e.g., DIR, COPY, DEL." },
      { term: "External command", definition: "A DOS command stored as a separate disk file, e.g., FORMAT, CHKDSK." },
      { term: "Wildcard", definition: "* (many characters) and ? (one character) used to match multiple file names." },
      { term: "Batch file", definition: "A .BAT text file of DOS commands that are executed automatically one after another." },
      { term: "Booting", definition: "Loading the operating system into memory when the computer starts." },
      { term: "Time-sharing", definition: "Sharing CPU time among many users in small time slices." },
    ],
    examQuestions: [
      "What is an operating system? Explain its functions and services. (Long)",
      "Explain the history and evolution of operating systems. (Medium)",
      "Write a note on the history of DOS and its versions. (Medium)",
      "Explain the DOS booting process and the role of IO.SYS, MSDOS.SYS and COMMAND.COM. (Medium)",
      "Differentiate between internal and external commands of DOS. Give examples. (Long)",
      "Explain any eight internal commands of DOS with syntax and examples. (Long)",
      "Explain the DIR, COPY, DEL, REN and TYPE commands. (Medium)",
      "What is a batch file? How is it created? Write a batch file to copy files. (Long)",
      "Explain the types of operating systems. (Long)",
      "What are wildcard characters? Explain with examples. (Short)",
      "What is the use of AUTOEXEC.BAT and CONFIG.SYS? (Short)",
    ],
  },
  {
    unitNumber: 4,
    title: "Windows Operating Environment",
    hours: 8,
    headings: [
      {
        id: "windows-features",
        title: "1. Introduction and Features of MS-Windows",
        icon: "AppWindow",
        blocks: [
          {
            kind: "paragraph",
            text: "MS-Windows is a GUI (Graphical User Interface) based operating system developed by Microsoft. Instead of typing commands as in DOS, the user works with windows, icons, menus and a pointing device (mouse) — this is called the WIMP interface (Windows, Icons, Menus, Pointer). It is the most widely used desktop operating system in the world.",
          },
          {
            kind: "table",
            headers: ["Feature", "Explanation"],
            rows: [
              ["Graphical User Interface", "Programs, files and settings are shown as pictures (icons) and windows — easy to learn, no commands to remember."],
              ["Multitasking", "Many programs can run at the same time, each in its own window; the user can switch between them (e.g., listening to music while typing)."],
              ["Plug and Play", "New hardware (pen drive, printer, mouse) is detected and configured automatically."],
              ["Long file names", "File names can be up to 255 characters, with spaces (unlike the 8.3 rule of DOS)."],
              ["Taskbar and Start menu", "Give quick access to programs, settings and running applications."],
              ["WYSIWYG", "What You See Is What You Get — the screen shows exactly how the printout will look."],
              ["OLE and clipboard", "Data can be copied/linked/embedded between different applications (Object Linking and Embedding)."],
              ["Networking and Internet support", "Built-in support for LAN, Wi-Fi and web browsing."],
              ["Multimedia support", "Play audio/video, view pictures, record sound."],
              ["Security and user accounts", "Multiple users with passwords and different permission levels."],
              ["Built-in help and accessories", "Help system plus Notepad, Paint, Calculator, WordPad and many more tools."],
            ],
          },
          {
            kind: "table",
            headers: ["Version", "Year", "Remark"],
            rows: [
              ["Windows 1.0 / 3.1", "1985 / 1992", "Graphical shell that ran on top of MS-DOS."],
              ["Windows 95", "1995", "First full GUI OS: Start button, Taskbar, long file names, Plug and Play."],
              ["Windows 98 / Me", "1998 / 2000", "Internet integration, USB support."],
              ["Windows NT / 2000", "1996 / 2000", "Secure, stable, business and server editions."],
              ["Windows XP", "2001", "Very popular; stable and user-friendly."],
              ["Windows Vista / 7", "2007 / 2009", "Aero glass interface; Windows 7 became hugely popular."],
              ["Windows 8 / 10", "2012 / 2015", "Touch-friendly tiles; Windows 10 brought back the Start menu."],
              ["Windows 11", "2021", "Centred taskbar, rounded design, Snap layouts."],
            ],
          },
        ],
      },
      {
        id: "desktop-taskbar",
        title: "2. Desktop, Icons and Taskbar",
        icon: "MonitorPlay",
        blocks: [
          {
            kind: "paragraph",
            text: "The Desktop is the main screen that appears after Windows starts. It is the workspace on which icons, windows and the taskbar are placed, and the background picture is called the wallpaper.",
          },
          { kind: "diagram", diagramId: "windows-desktop", caption: "Fig 4.1 — Parts of the Windows desktop" },
          {
            kind: "table",
            headers: ["Desktop element", "Description"],
            rows: [
              ["Icons", "Small pictures that represent programs, files, folders or system objects. Double-click an icon to open it."],
              ["Wallpaper / Background", "The picture or colour behind the icons; can be changed from Personalise."],
              ["Taskbar", "The horizontal bar at the bottom of the screen."],
              ["Start button", "Opens the Start menu — the gateway to all programs, settings, search and shut down/restart options."],
              ["Task buttons / pinned apps", "Show the programs that are open (or pinned for quick launch); click one to switch to it."],
              ["Notification area (System tray)", "Right end of the taskbar: clock and date, volume, network, battery and background programs."],
              ["Show Desktop button", "Tiny button at the far right that minimises all windows to show the desktop."],
            ],
          },
          {
            kind: "table",
            headers: ["Type of icon", "Meaning", "Examples"],
            rows: [
              ["System icons", "Represent standard Windows features", "This PC / My Computer, Recycle Bin, Network, Control Panel"],
              ["Program icons (Shortcuts)", "Have a small arrow at the corner; a shortcut is a link that opens the original item quickly. Deleting a shortcut does not delete the original.", "Chrome, MS-Word shortcut"],
              ["File icons", "Show the type of the file (document, picture, music)", "Resume.docx, photo.jpg"],
              ["Folder icons", "Yellow folder — a container for files", "Documents, Downloads"],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Creating a desktop shortcut: right-click the program/file → Send to → Desktop (create shortcut) — or right-click on the desktop → New → Shortcut.",
              "Arranging icons: right-click on the desktop → View / Sort by (Name, Size, Item type, Date modified); 'Auto arrange icons' keeps them in a grid.",
              "Recycle Bin: holds deleted files temporarily so they can be restored (right-click → Restore). Empty Recycle Bin permanently deletes them. Shift + Delete bypasses the Recycle Bin.",
              "Taskbar tasks: Alt + Tab switches between open windows; the Taskbar can be locked, auto-hidden or moved from Taskbar settings; the Start button can be opened with the Windows logo key.",
            ],
          },
        ],
      },
      {
        id: "windows-application",
        title: "3. Windows Application, Window Anatomy and File Management",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "A Windows application is a program designed to run in a window under Windows (e.g., Notepad, MS-Word, Chrome). An application can be started from the Start menu, from a desktop shortcut, from the taskbar, by double-clicking a file associated with it, or by typing its name in the Run box (Win + R).",
          },
          { kind: "diagram", diagramId: "window-anatomy", caption: "Fig 4.2 — Anatomy of an application window" },
          {
            kind: "table",
            headers: ["Part of the window", "Function"],
            rows: [
              ["Title bar", "Shows the name of the application/document; drag it to move the window. Double-click to maximise/restore."],
              ["Minimise / Maximise (Restore) / Close", "Three buttons at the top-right: hide to taskbar, fill the screen or restore size, exit the window."],
              ["Menu bar / Ribbon", "Lists the commands (File, Edit, View, Help ...)."],
              ["Toolbar", "Buttons for the most frequently used commands."],
              ["Work area (Client area)", "The main region where the document/data is displayed and edited."],
              ["Scroll bars", "Move the hidden part of the content into view (vertical and horizontal)."],
              ["Status bar", "Bottom line that shows information such as page number, zoom, current mode."],
              ["Borders / corners", "Drag them to resize the window."],
            ],
          },
          {
            kind: "paragraph",
            text: "File management: Files and folders are managed through File Explorer / Windows Explorer / My Computer. Its window has a navigation pane (folder tree), a file list and a details/preview pane. Common operations are: creating a new folder (right-click → New → Folder), renaming (F2), copying (Ctrl + C, Ctrl + V), moving (Ctrl + X, Ctrl + V or drag and drop), deleting (Delete key), searching, and viewing properties.",
          },
          {
            kind: "table",
            headers: ["Shortcut key", "Action"],
            rows: [
              ["Ctrl + C / Ctrl + X / Ctrl + V", "Copy / Cut / Paste"],
              ["Ctrl + Z / Ctrl + Y", "Undo / Redo"],
              ["Ctrl + A", "Select all"],
              ["Ctrl + S / Ctrl + P / Ctrl + F", "Save / Print / Find"],
              ["Alt + Tab", "Switch between open applications"],
              ["Alt + F4", "Close the active window / shut down dialog on desktop"],
              ["Ctrl + Alt + Del", "Security screen / Task Manager"],
              ["Win + D  /  Win + E", "Show desktop / Open File Explorer"],
              ["F2  /  F5", "Rename / Refresh"],
              ["Shift + Delete", "Delete permanently, bypassing the Recycle Bin"],
              ["Print Screen", "Copy the screen picture to the clipboard"],
            ],
          },
        ],
      },
      {
        id: "control-panel",
        title: "4. Control Panel",
        icon: "Settings",
        blocks: [
          {
            kind: "paragraph",
            text: "The Control Panel is the central place in Windows where the user can view and change system settings and configure hardware and software. In new versions of Windows most of these options are also available in the Settings app.",
          },
          {
            kind: "table",
            headers: ["Control Panel item", "What it does"],
            rows: [
              ["Display / Personalization", "Change wallpaper, screen saver, theme, screen resolution, font size."],
              ["Date and Time", "Set the system date, time and time zone."],
              ["Regional Settings (Region)", "Set the language, number/date/currency formats."],
              ["Programs and Features (Add/Remove Programs)", "Install, uninstall or repair software."],
              ["Mouse / Keyboard", "Set pointer speed, double-click speed, left/right-handed buttons, key repeat rate."],
              ["Printers / Devices", "Add and manage printers and other hardware."],
              ["Sound", "Set volume, sound scheme, choose speakers/microphone."],
              ["Fonts", "View, install or delete fonts."],
              ["System / Device Manager", "See hardware details and manage drivers."],
              ["User Accounts", "Create users, set or change passwords."],
              ["Network and Sharing Centre", "Connect to Wi-Fi/LAN and share folders/printers."],
              ["Power Options", "Set sleep/hibernate and battery behaviour."],
              ["Windows Update / Security", "Keep the system updated and protected."],
            ],
          },
          {
            kind: "bullets",
            items: [
              "To change the wallpaper: right-click the desktop → Personalise → Background → choose a picture → Apply.",
              "To set a screen saver: Control Panel → Personalization → Screen Saver → select the saver, set the waiting time (minutes) → Apply / OK.",
              "To change the date and time: click the clock in the taskbar (or Control Panel → Date and Time) → Change date and time → set values → OK.",
              "To uninstall a program: Control Panel → Programs and Features → select the program → Uninstall.",
              "To open Control Panel: Start → type 'Control Panel', or Win + R → control.",
            ],
          },
        ],
      },
      {
        id: "accessories",
        title: "5. Windows Accessories",
        icon: "Package",
        blocks: [
          {
            kind: "paragraph",
            text: "Windows Accessories are small built-in programs supplied with Windows to perform common tasks without installing extra software (Start → All Programs → Accessories / Windows Accessories).",
          },
          {
            kind: "table",
            headers: ["Accessory", "Use"],
            rows: [
              ["Notepad", "Simple plain-text editor."],
              ["Paint (Paintbrush)", "Drawing and simple picture editing."],
              ["WordPad", "Basic word processor with formatting (bold, colour, alignment, pictures); saves as .rtf/.docx."],
              ["Calculator", "Standard, scientific, programmer (binary/octal/hex conversions) and statistics modes."],
              ["Character Map", "Insert special symbols and characters not on the keyboard."],
              ["Snipping Tool / Snip & Sketch", "Capture screenshots."],
              ["Sound Recorder / Media Player", "Record and play audio and video."],
              ["Task Manager", "See running programs and end tasks that are not responding."],
              ["System Tools", "Disk Cleanup, Disk Defragmenter (Optimise Drives), Backup, System Restore."],
            ],
          },
        ],
      },
      {
        id: "notepad",
        title: "6. Notepad",
        icon: "FileText",
        blocks: [
          {
            kind: "paragraph",
            text: "Notepad is the simplest text editor of Windows. It creates and edits plain text (.txt) files with no formatting (no bold, italic or pictures) and opens very quickly. Programmers use it to write C/HTML/batch programs, and to keep quick notes.",
          },
          {
            kind: "table",
            headers: ["Menu", "Important options"],
            rows: [
              ["File", "New (Ctrl+N), Open (Ctrl+O), Save (Ctrl+S), Save As, Page Setup, Print (Ctrl+P), Exit"],
              ["Edit", "Undo, Cut, Copy, Paste, Delete, Find (Ctrl+F), Find Next, Replace (Ctrl+H), Go To (Ctrl+G), Select All, Time/Date (F5)"],
              ["Format", "Word Wrap (breaks long lines to fit the window), Font (type, style, size)"],
              ["View", "Status Bar, Zoom"],
              ["Help", "View help, About Notepad"],
            ],
          },
          {
            kind: "table",
            headers: ["Notepad", "WordPad", "MS-Word"],
            rows: [
              ["Plain text only", "Rich text formatting", "Full-featured word processor"],
              ["No font styles per word", "Bold, italic, colour, alignment, pictures", "Tables, mail merge, styles, spell check, headers/footers"],
              ["Saves as .txt", "Saves as .rtf / .docx", "Saves as .docx / .doc"],
              ["Very small, fast", "Medium", "Large, feature-rich"],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Steps to create and save a file: Start → Notepad → type the text → File → Save As → choose the folder → type the file name → Save (the .txt extension is added automatically).",
              "Limitations: no formatting, no spell-checker, maximum practical file size is limited, cannot insert pictures or tables.",
            ],
          },
        ],
      },
      {
        id: "paintbrush",
        title: "7. Paintbrush (Paint)",
        icon: "PenTool",
        blocks: [
          {
            kind: "paragraph",
            text: "Paintbrush (called Paint in later versions of Windows) is a graphics/drawing program that lets the user create and edit bitmap (raster) pictures using drawing tools. Files are saved as .bmp by default (and also .png, .jpg, .gif). It is used for making simple drawings, logos, editing screenshots and cropping/resizing pictures.",
          },
          {
            kind: "table",
            headers: ["Tool", "Function"],
            rows: [
              ["Pencil", "Draws thin freehand lines."],
              ["Brush / Airbrush", "Draws freehand strokes of different shapes and thickness / sprays paint."],
              ["Eraser", "Erases part of the drawing (replaces it with the background colour)."],
              ["Fill with Colour (paint bucket)", "Fills a closed area with the selected colour."],
              ["Pick Colour (eyedropper)", "Copies a colour from the picture to use it again."],
              ["Magnifier", "Zooms in to work on small details."],
              ["Text tool (A)", "Adds text to a picture."],
              ["Line / Curve", "Draw straight lines (Shift keeps them straight) and curved lines."],
              ["Rectangle / Rounded rectangle / Ellipse / Polygon", "Draw geometrical shapes (hold Shift for a square or circle)."],
              ["Select / Free-form select", "Select a part of the picture to move, copy, resize or rotate."],
              ["Colour box / palette", "Choose foreground (left-click) and background (right-click) colours."],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Steps to draw a simple house: open Paint → choose Rectangle tool and draw the walls → choose Polygon/Line tool and draw the roof → use the rectangle for the door → pick a colour and use Fill with Colour → File → Save As → name the file → Save.",
              "Other options: Image → Flip/Rotate, Stretch/Skew, Resize, Crop; Attributes (width, height); Invert colours; View → Zoom.",
              "Paint creates bitmap images (made of pixels), so enlarging a picture too much makes it look blurred; a vector program like CorelDRAW does not have this problem.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "GUI", definition: "Graphical User Interface — using windows, icons, menus and a mouse instead of typed commands." },
      { term: "Desktop", definition: "The main screen of Windows that holds icons, windows and the taskbar." },
      { term: "Taskbar", definition: "The bar at the bottom of the screen containing the Start button, running programs and the system tray." },
      { term: "Shortcut", definition: "A link icon that opens a file, folder or program without going to its original location." },
      { term: "Control Panel", definition: "The Windows tool for changing system settings and hardware/software configuration." },
      { term: "Plug and Play", definition: "Automatic detection and configuration of newly attached hardware." },
      { term: "Notepad", definition: "A basic text editor that saves plain .txt files." },
      { term: "Paintbrush", definition: "A bitmap drawing program of Windows that saves pictures as .bmp." },
      { term: "Multitasking", definition: "Running more than one program at the same time." },
    ],
    examQuestions: [
      "What is MS-Windows? Explain its main features. (Long)",
      "What is a GUI? How is it better than a command-line interface like DOS? (Medium)",
      "Explain the different components of the Windows desktop. (Medium)",
      "What is a taskbar? Explain the Start menu and the notification area. (Medium)",
      "What is the Control Panel? Explain any five of its options. (Medium)",
      "Explain how to change the wallpaper, screen saver and the date/time in Windows. (Medium)",
      "Write a short note on Windows accessories. (Medium)",
      "Write short notes on Notepad and Paintbrush. (Medium)",
      "What is an icon and a shortcut? What is the Recycle Bin? (Short)",
      "List any five keyboard shortcuts of Windows. (Short)",
      "Explain the parts of an application window with a diagram. (Medium)",
    ],
  },
  {
    unitNumber: 5,
    title: "Word Processors, Spreadsheets, Database Packages and MS-Office",
    hours: 12,
    headings: [
      {
        id: "office-suite",
        title: "1. MS-Office at a Glance",
        icon: "Presentation",
        blocks: [
          {
            kind: "paragraph",
            text: "MS-Office is a suite (bundle) of application software from Microsoft for office and educational work. The main applications are MS-Word (word processor), MS-Excel (spreadsheet), MS-Access (database) and MS-PowerPoint (presentation). Other components include Outlook (e-mail) and Publisher (desktop publishing). All applications share a similar look (Ribbon), commands and shortcuts, and data can be easily exchanged among them.",
          },
          { kind: "diagram", diagramId: "office-suite", caption: "Fig 5.1 — The main applications of MS-Office" },
          {
            kind: "table",
            headers: ["Application", "Type", "Used for", "File extension"],
            rows: [
              ["MS-Word", "Word processor", "Letters, reports, resumes, books", ".docx (.doc)"],
              ["MS-Excel", "Spreadsheet", "Calculations, mark sheets, budgets, charts, analysis", ".xlsx (.xls)"],
              ["MS-Access", "Database (DBMS)", "Storing, managing and retrieving large organised data", ".accdb (.mdb)"],
              ["MS-PowerPoint", "Presentation", "Slide shows, lectures, business presentations", ".pptx (.ppt)"],
            ],
          },
        ],
      },
      {
        id: "editors-wp",
        title: "2. Editors and Word Processors: Basic Concepts",
        icon: "AlignLeft",
        blocks: [
          {
            kind: "paragraph",
            text: "An Editor (text editor) is a program used to create and modify plain text such as program code, batch files and notes. It has no formatting features. Examples: Notepad, EDIT (DOS), vi (UNIX).",
          },
          {
            kind: "paragraph",
            text: "A Word Processor is an application program used to create, edit, format, store, print and share text documents. It replaces the typewriter with far greater power — text can be corrected any number of times before printing. Examples: MS-Word, WordPerfect, WordStar, OpenOffice/LibreOffice Writer, Google Docs.",
          },
          {
            kind: "table",
            headers: ["Editor", "Word Processor"],
            rows: [
              ["Works on plain text only", "Works on formatted text with pictures, tables and objects"],
              ["No formatting (fonts, colours, alignment)", "Extensive formatting features"],
              ["Used to write programs/scripts", "Used to write letters, reports, books"],
              ["Small and simple; Notepad, vi", "Larger and feature-rich; MS-Word"],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Basic features of a word processor: creating/opening/saving/printing documents, cut-copy-paste, find and replace, spelling and grammar check, thesaurus, character and paragraph formatting, page setup, headers and footers, page numbering, tables, graphics, mail merge, templates, macros and print preview.",
              "Advantages: easy correction, professional look, spell check, saves paper and time, easy sharing/e-mailing, storage for future use. Limitation: needs a computer/electricity and knowledge of the software.",
            ],
          },
        ],
      },
      {
        id: "ms-word",
        title: "3. MS-Word",
        icon: "FileText",
        blocks: [
          {
            kind: "paragraph",
            text: "MS-Word is the most popular word processor in the world. Documents are saved with the extension .docx (older versions: .doc). The screen is organised as follows:",
          },
          { kind: "diagram", diagramId: "ms-word-window", caption: "Fig 5.2 — The MS-Word window" },
          {
            kind: "table",
            headers: ["Part", "Description"],
            rows: [
              ["Title bar", "Shows the document name and application name; has minimise, maximise and close buttons."],
              ["Quick Access Toolbar", "Small toolbar with Save, Undo, Redo (can be customised)."],
              ["Ribbon (Tabs)", "Contains the commands grouped in tabs: File, Home, Insert, Design, Layout, References, Mailings, Review, View."],
              ["Ruler", "Used to set margins, indents and tab stops."],
              ["Document (editing) area", "The white area where the text is typed; the blinking line is the insertion point (cursor)."],
              ["Scroll bars", "Move through the document."],
              ["Status bar", "Shows page number, word count, language, view buttons and the zoom slider."],
            ],
          },
          {
            kind: "table",
            headers: ["Task", "How to do it"],
            rows: [
              ["Create / Open / Save", "File → New (Ctrl+N); File → Open (Ctrl+O); File → Save (Ctrl+S); Save As to give a new name or format (e.g., PDF)."],
              ["Select text", "Drag with the mouse, or double-click = word, triple-click = paragraph, Ctrl+A = all."],
              ["Cut, Copy, Paste", "Ctrl+X, Ctrl+C, Ctrl+V; Undo Ctrl+Z; Redo Ctrl+Y."],
              ["Find and Replace", "Ctrl+F to find, Ctrl+H to replace a word everywhere in the document."],
              ["Character formatting", "Home → Font group: font name, size, Bold (Ctrl+B), Italic (Ctrl+I), Underline (Ctrl+U), colour, superscript/subscript, change case."],
              ["Paragraph formatting", "Home → Paragraph group: alignment — Left (Ctrl+L), Centre (Ctrl+E), Right (Ctrl+R), Justify (Ctrl+J); line spacing, indents, bullets and numbering, borders and shading."],
              ["Page setup", "Layout → Margins, Orientation (portrait/landscape), Size (A4), Columns, Breaks (page break Ctrl+Enter)."],
              ["Header, footer and page number", "Insert → Header / Footer / Page Number."],
              ["Tables", "Insert → Table; Table Tools to insert/delete rows and columns, merge and split cells, set borders."],
              ["Pictures and shapes", "Insert → Pictures / Shapes / WordArt / SmartArt / Chart."],
              ["Spelling and grammar", "Review → Spelling & Grammar (F7); red wavy line = spelling error, blue/green = grammar."],
              ["Print", "File → Print (Ctrl+P) — set copies, page range, printer; Print Preview is shown on the right."],
            ],
          },
          {
            kind: "paragraph",
            text: "Mail Merge: a feature that produces many personalised copies of the same letter (for example, an invitation sent to 100 people) by combining a Main document (the letter with fixed text) and a Data source (a list of names and addresses in Excel/Access/Word table).",
          },
          {
            kind: "bullets",
            items: [
              "Step 1: Create or open the main document (the letter).",
              "Step 2: Mailings → Start Mail Merge → Letters.",
              "Step 3: Select Recipients → choose/attach the data source (e.g., an Excel sheet with Name, Address, City).",
              "Step 4: Insert Merge Fields («Name», «Address») at the required places in the letter.",
              "Step 5: Preview Results to check each letter.",
              "Step 6: Finish & Merge → Edit Individual Documents / Print Documents / Send E-mail Messages.",
            ],
          },
        ],
      },
      {
        id: "dtp",
        title: "4. Introduction to Desktop Publishing (DTP)",
        icon: "LayoutTemplate",
        blocks: [
          {
            kind: "paragraph",
            text: "Desktop Publishing (DTP) is the use of a personal computer and special page-layout software to combine text, graphics and images and produce professional-quality printed or electronic publications — newspapers, magazines, brochures, books, posters, visiting cards and newsletters — right from the desk. It works on the WYSIWYG principle: the screen shows exactly what will be printed.",
          },
          { kind: "diagram", diagramId: "dtp-process", caption: "Fig 5.3 — Steps in desktop publishing" },
          {
            kind: "bullets",
            items: [
              "Hardware needed: a computer with good RAM and display, scanner (to input pictures/text), digital camera, laser/inkjet printer or high-resolution imagesetter, and storage devices.",
              "DTP software: Adobe PageMaker (older), Adobe InDesign, QuarkXPress, CorelDRAW, MS-Publisher, Scribus (free). Supporting tools: Photoshop (images), Illustrator (vector art).",
              "Features: page layout with columns, master pages, text wrapping around pictures, fonts and typography, colour management, templates, import of text and pictures, and print-ready output (PDF).",
              "Applications: publishing books and newspapers, advertisements, brochures, certificates, wedding cards, magazines and e-books.",
            ],
          },
          {
            kind: "table",
            headers: ["Word Processor", "Desktop Publishing software"],
            rows: [
              ["Main aim: creating and editing text", "Main aim: page layout and design"],
              ["Limited control over graphics and layout", "Total control over placement of text and graphics"],
              ["Simple documents: letters, reports", "Complex publications: magazines, books, posters"],
              ["Easy to learn — MS-Word", "Needs design skills — InDesign, PageMaker"],
            ],
          },
        ],
      },
      {
        id: "spreadsheet-database",
        title: "5. Spreadsheet and Database Packages: Purpose and Usage",
        icon: "Table",
        blocks: [
          {
            kind: "paragraph",
            text: "A Spreadsheet is an application that presents data in a grid of rows and columns (a worksheet) and lets the user enter numbers, text and formulas; it automatically recalculates when data changes. The first popular spreadsheet was VisiCalc (1979). Others: Lotus 1-2-3, MS-Excel, LibreOffice Calc, Google Sheets. Uses: accounting, budgets, mark sheets, payroll, statistics, graphs and financial analysis.",
          },
          {
            kind: "paragraph",
            text: "A Database package (DBMS — Database Management System) is software used to create, store, organise, retrieve and manage large collections of related data (a database) efficiently. Examples: MS-Access, MySQL, Oracle, dBase, FoxPro. Uses: student records, library systems, bank accounts, inventory and reservation systems.",
          },
          {
            kind: "table",
            headers: ["Spreadsheet (Excel)", "Database (Access)"],
            rows: [
              ["Data is stored in a single grid (worksheet)", "Data is stored in related tables"],
              ["Best for calculations and analysis", "Best for storing and retrieving large amounts of data"],
              ["Formulas and charts are the main strengths", "Queries, forms and reports are the main strengths"],
              ["Data repetition (redundancy) is common", "Data redundancy is reduced by relating tables"],
              ["Suitable for small data", "Suitable for very large data and many users"],
            ],
          },
        ],
      },
      {
        id: "ms-excel",
        title: "6. MS-Excel",
        icon: "FileSpreadsheet",
        blocks: [
          {
            kind: "paragraph",
            text: "MS-Excel is a spreadsheet program. A file is called a Workbook (.xlsx) and it contains one or more Worksheets (sheets). A worksheet is a grid of ROWS (numbered 1, 2, 3 ... up to 1,048,576) and COLUMNS (lettered A, B, C ... up to XFD, i.e., 16,384 columns). The box where a row and a column meet is a CELL; its name is the cell address, e.g., B3 (column B, row 3). A group of cells is a range, e.g., B2:D6.",
          },
          { kind: "diagram", diagramId: "ms-excel-window", caption: "Fig 5.4 — The MS-Excel window" },
          {
            kind: "table",
            headers: ["Term", "Meaning"],
            rows: [
              ["Workbook / Worksheet", "The Excel file / a single sheet inside it (tabs at the bottom)."],
              ["Cell / Active cell", "Basic unit of a worksheet / the currently selected cell (dark border)."],
              ["Name Box", "Shows the address of the active cell."],
              ["Formula Bar", "Shows and edits the content or formula of the active cell."],
              ["Fill handle", "Small square at the corner of the active cell; drag it to copy formulas or create series (1, 2, 3 ...; Mon, Tue ...)."],
              ["Data types", "Text (labels), Number, Date/Time and Formula (always starts with =)."],
            ],
          },
          {
            kind: "paragraph",
            text: "Formulas and functions: A formula is an expression that starts with an equal sign (=) and calculates a value, e.g., =A1+B1. A function is a predefined formula, e.g., =SUM(A1:A5). Operators: + − * / ^ (power) & (join text) and comparison (=, <, >, <=, >=, <>). Order of evaluation: brackets → ^ → * and / → + and − → & → comparison.",
          },
          {
            kind: "table",
            headers: ["Function", "Purpose", "Example → Result"],
            rows: [
              ["SUM", "Adds numbers", "=SUM(A1:A5) with 10,20,30,40,50 → 150"],
              ["AVERAGE", "Arithmetic mean", "=AVERAGE(A1:A5) → 30"],
              ["MAX / MIN", "Largest / smallest value", "=MAX(A1:A5) → 50;  =MIN(A1:A5) → 10"],
              ["COUNT / COUNTA", "Counts numeric cells / non-empty cells", "=COUNT(A1:A5) → 5"],
              ["PRODUCT", "Multiplies numbers", "=PRODUCT(2,3,4) → 24"],
              ["ROUND", "Rounds to given digits", "=ROUND(3.14159,2) → 3.14"],
              ["SQRT / POWER / MOD", "Square root / power / remainder", "=SQRT(81) → 9;  =POWER(2,3) → 8;  =MOD(10,3) → 1"],
              ["IF", "Logical test — returns one value if TRUE, another if FALSE", "=IF(A1>=40,\"Pass\",\"Fail\")"],
              ["SUMIF / COUNTIF", "Sum / count only cells that meet a condition", "=COUNTIF(C2:C10,\"Pass\")"],
              ["LEN / UPPER / LOWER", "Length of text / change case", "=LEN(\"BCA\") → 3;  =UPPER(\"bca\") → BCA"],
              ["LEFT / RIGHT / CONCATENATE", "Extract characters / join text", "=LEFT(\"COMPUTER\",3) → COM"],
              ["TODAY / NOW", "Current date / date and time", "=TODAY()"],
              ["VLOOKUP", "Looks up a value in the first column of a table and returns a value from the same row", "=VLOOKUP(101,A2:C10,2,FALSE)"],
            ],
          },
          {
            kind: "table",
            headers: ["Cell reference", "Form", "Behaviour when copied"],
            rows: [
              ["Relative", "A1", "Changes automatically according to the new position (copy =A1+B1 from row 1 to row 2 → =A2+B2)."],
              ["Absolute", "$A$1", "Never changes — both column and row are fixed (F4 key adds the $ signs)."],
              ["Mixed", "$A1 or A$1", "Only the column or only the row is fixed."],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Example — Student mark sheet using formulas",
            text: "Columns: A = Name, B = Maths, C = Physics, D = Chemistry, E = Total (=SUM(B2:D2)), F = Percentage (=E2/300*100), G = Result (=IF(F2>=40,\"Pass\",\"Fail\")).  Row 2: Amit 78, 82, 90 → Total 250, 83.33 %, Pass.  Row 3: Neha 45, 38, 52 → Total 135, 45 %, Pass.  Row 4: Ravi 30, 28, 35 → Total 93, 31 %, Fail.  Filling E2:G2 down (with the fill handle) copies the formulas to all students automatically.",
          },
          {
            kind: "table",
            headers: ["Operation", "How to do it"],
            rows: [
              ["Save / Open workbook", "Ctrl+S / Ctrl+O (.xlsx)."],
              ["Insert / delete rows, columns, sheets", "Right-click the row/column header or sheet tab → Insert / Delete; Home → Insert."],
              ["Formatting", "Home → Number format (currency, %, date), alignment, Merge & Centre, borders, fill colour, font; Format Painter copies formatting."],
              ["Conditional formatting", "Home → Conditional Formatting — colour cells automatically (e.g., marks below 40 in red)."],
              ["Sort and Filter", "Data → Sort (A→Z, smallest to largest) and Filter (shows only rows matching a condition)."],
              ["Charts", "Select data → Insert → Column / Bar / Line / Pie / Scatter / Area chart → add title and labels."],
              ["Freeze Panes", "View → Freeze Panes — keeps headings visible while scrolling."],
              ["Print", "Page Layout → Print Area / Orientation; File → Print."],
            ],
          },
          {
            kind: "table",
            headers: ["Error value", "Cause"],
            rows: [
              ["#DIV/0!", "Division by zero or an empty cell."],
              ["#NAME?", "Misspelt function name or unknown text in a formula."],
              ["#VALUE!", "Wrong type of argument, e.g., adding text to a number."],
              ["#REF!", "The formula refers to a cell that has been deleted."],
              ["#N/A", "A value is not available (e.g., VLOOKUP found no match)."],
              ["#####", "The column is too narrow to show the number (widen the column)."],
            ],
          },
          {
            kind: "table",
            headers: ["Chart type", "Best used for"],
            rows: [
              ["Column / Bar", "Comparing values across categories (e.g., marks of students)."],
              ["Line", "Showing trends over time (e.g., monthly sales)."],
              ["Pie", "Showing parts of a whole as percentages (e.g., expense distribution)."],
              ["Scatter (XY)", "Showing the relationship between two numeric variables."],
              ["Area", "Showing the magnitude of change over time."],
            ],
          },
        ],
      },
      {
        id: "ms-access",
        title: "7. MS-Access and Creation of Files",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "MS-Access is a Relational Database Management System (RDBMS) from Microsoft. It stores data in related tables and provides tools to search, sort, filter, display and print the data. A database file is saved with the extension .accdb (.mdb in older versions) and one file holds all its objects.",
          },
          { kind: "diagram", diagramId: "access-objects", caption: "Fig 5.5 — Main objects of an Access database" },
          {
            kind: "table",
            headers: ["Object", "Purpose"],
            rows: [
              ["Table", "Stores the data in rows (records) and columns (fields). It is the foundation of the database."],
              ["Query", "Asks a question of the data — selects, filters, sorts or calculates from one or more tables (e.g., students with marks > 60). Uses SQL."],
              ["Form", "A user-friendly screen for entering, viewing and editing records one at a time."],
              ["Report", "A formatted, printable summary of the data (with grouping, totals and headings)."],
              ["Macro / Module", "Macros automate tasks; Modules hold VBA programming code."],
            ],
          },
          {
            kind: "table",
            headers: ["Basic term", "Meaning"],
            rows: [
              ["Field", "A column of a table; stores one type of information (e.g., Name)."],
              ["Record", "A row of a table; all the information about one entity (one student)."],
              ["Primary key", "A field (or fields) with a unique value in every record used to identify it, e.g., Roll No. It cannot be blank or repeated."],
              ["Foreign key / Relationship", "A field that links one table to the primary key of another table (One-to-One, One-to-Many, Many-to-Many)."],
            ],
          },
          {
            kind: "table",
            headers: ["Data type", "Stores"],
            rows: [
              ["Short Text (Text)", "Names, addresses — up to 255 characters"],
              ["Long Text (Memo)", "Long descriptions or comments"],
              ["Number", "Numeric values for calculation"],
              ["Date/Time", "Dates and times"],
              ["Currency", "Money values"],
              ["AutoNumber", "A unique number generated automatically for each new record"],
              ["Yes/No", "True/False, checkbox"],
              ["OLE Object / Attachment", "Pictures, documents, sound"],
              ["Hyperlink", "Web or e-mail address"],
            ],
          },
          {
            kind: "paragraph",
            text: "Creation of a file (database) in MS-Access — step by step:",
          },
          {
            kind: "bullets",
            items: [
              "Step 1: Start → MS-Access. On the start screen click 'Blank database'.",
              "Step 2: Type the File name (for example College.accdb), choose the folder using the folder icon, and click Create. A new database with an empty Table1 opens.",
              "Step 3: Switch to Design View (Home → View → Design View), and type the table name, e.g., Student.",
              "Step 4: Enter the Field Names and choose a Data Type for each — RollNo (Number), Name (Short Text), DOB (Date/Time), Fees (Currency).",
              "Step 5: Select the RollNo row and click 'Primary Key' on the ribbon (a key symbol appears). Save the table (Ctrl+S).",
              "Step 6: Switch to Datasheet View and enter the records (one row per student).",
              "Step 7: Use the Create tab to make a Query, Form or Report from the table. Close the database — Access saves the data automatically.",
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Sample Student table",
            text: "RollNo (Primary Key) | Name | DOB | Fees:   101 | Amit | 12-03-2006 | 15000;   102 | Neha | 25-07-2005 | 15000;   103 | Ravi | 01-11-2006 | 12000.   A query 'Fees = 15000' would return Amit and Neha.",
          },
        ],
      },
      {
        id: "switching-apps",
        title: "8. Switching Between Applications and Sharing Data",
        icon: "RefreshCw",
        blocks: [
          {
            kind: "paragraph",
            text: "Because Windows is a multitasking OS, many applications can be open at once (Word, Excel, browser ...). The user can switch between them and share data among them.",
          },
          {
            kind: "table",
            headers: ["Method", "How"],
            rows: [
              ["Taskbar", "Click the button of the required application in the taskbar."],
              ["Alt + Tab", "Hold Alt and press Tab repeatedly to choose an open window."],
              ["Windows + Tab (Task View)", "Shows all open windows as thumbnails to pick from."],
              ["Ctrl + F6 / View → Switch Windows", "Move between documents open in the same Office application."],
              ["Minimise / Restore", "Minimise one window and restore another."],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Copy–Paste using the Clipboard: select data in one application → Ctrl+C → switch to the other application → Ctrl+V. Paste Special lets you choose the format (text, picture, link).",
              "Drag and drop: drag selected data from one window to another.",
              "Integration example: an Excel chart pasted into a Word report; an Excel table used as the data source for a Word mail merge; a Word outline imported into PowerPoint.",
            ],
          },
          {
            kind: "table",
            headers: ["Linking (OLE)", "Embedding (OLE)"],
            rows: [
              ["Data stays in the source file; the destination shows a link", "A full copy of the data is stored inside the destination file"],
              ["Changes in the source update the destination automatically", "Changes in the original do NOT affect the embedded copy"],
              ["Destination file is small", "Destination file becomes larger"],
              ["Source file must remain available", "Works even if the source file is deleted"],
            ],
          },
        ],
      },
      {
        id: "powerpoint",
        title: "9. MS-PowerPoint",
        icon: "MonitorPlay",
        blocks: [
          {
            kind: "paragraph",
            text: "MS-PowerPoint is presentation software used to create slide shows that combine text, pictures, charts, tables, audio, video and animation. A presentation file has the extension .pptx (.ppt in older versions; .ppsx is a direct slide show). It is widely used in teaching, business meetings, seminars and project defence.",
          },
          {
            kind: "table",
            headers: ["Term", "Meaning"],
            rows: [
              ["Slide", "A single page of the presentation."],
              ["Layout", "Arrangement of placeholders on a slide: Title Slide, Title and Content, Two Content, Comparison, Blank ..."],
              ["Theme / Template / Design", "Ready-made combination of colours, fonts and background that gives the whole presentation a uniform look."],
              ["Slide Master", "The master slide that controls the common formatting (logo, fonts, footer) of all slides."],
              ["Transition", "The visual effect when moving from one slide to the next (Fade, Push, Wipe)."],
              ["Animation", "Movement/entry/exit effects applied to objects (text, pictures) inside a slide."],
              ["Notes page / Handout", "Speaker notes for the presenter / printed copies for the audience."],
            ],
          },
          {
            kind: "table",
            headers: ["View", "Use"],
            rows: [
              ["Normal view", "Main editing view — slide thumbnails on the left, current slide in the centre, notes below."],
              ["Slide Sorter", "Shows all slides as small pictures to rearrange, copy or delete them."],
              ["Outline view", "Shows only the text of all slides."],
              ["Notes Page", "Type speaker notes for each slide."],
              ["Reading view / Slide Show", "Full-screen presentation view (Slide Show: F5)."],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Creating a presentation: Start → PowerPoint → Blank Presentation (or choose a theme) → type the title on the first slide → Home → New Slide (Ctrl+M) for further slides → choose layouts → add text, pictures (Insert → Pictures), tables, charts, SmartArt, audio/video → apply a Design theme → add Transitions and Animations → Save (Ctrl+S).",
              "Running the slide show: Slide Show tab → From Beginning (F5) or From Current Slide (Shift+F5). Use Enter/Right arrow/Space for next slide, Left arrow for previous, Esc to exit. Slide Show → Rehearse Timings sets automatic timing.",
              "Good presentation practice: one idea per slide, short bullet points (not sentences), large readable fonts (24 pt or more), good contrast between text and background, relevant pictures and limited use of animation.",
              "Printing: File → Print → choose Slides, Handouts (2, 3, 6 slides per page) or Notes Pages.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Word Processor", definition: "Software used to create, edit, format, store and print text documents, e.g., MS-Word." },
      { term: "Mail Merge", definition: "Combining a main document with a data source to produce many personalised letters." },
      { term: "DTP", definition: "Desktop Publishing — designing page layouts with text and graphics on a computer for professional printing." },
      { term: "Workbook / Worksheet", definition: "An Excel file / a single grid of rows and columns inside it." },
      { term: "Cell address", definition: "The name of a cell formed by its column letter and row number, e.g., C5." },
      { term: "Formula", definition: "An expression starting with = that calculates a value in Excel." },
      { term: "Absolute reference", definition: "A cell reference with $ signs ($A$1) that does not change when copied." },
      { term: "Primary key", definition: "A field that uniquely identifies each record in a table." },
      { term: "Query", definition: "A request to search, filter or calculate data from database tables." },
      { term: "Slide Master", definition: "The template slide that controls the common formatting of all slides in PowerPoint." },
      { term: "OLE", definition: "Object Linking and Embedding — a way to share data between Windows applications." },
    ],
    examQuestions: [
      "What is a word processor? Explain the features of MS-Word. (Long)",
      "Differentiate between an editor and a word processor. (Medium)",
      "What is mail merge? Explain the steps to perform it. (Long)",
      "What is desktop publishing? Explain its features, hardware and software. (Medium)",
      "Differentiate between a spreadsheet and a database package. (Medium)",
      "What is MS-Excel? Explain workbook, worksheet, cell, formula bar and name box. (Medium)",
      "Explain any eight functions of MS-Excel with examples. (Long)",
      "What are relative, absolute and mixed cell references? (Medium)",
      "How are charts created in Excel? Explain the different types of charts. (Medium)",
      "What is MS-Access? Explain the objects of an Access database. (Long)",
      "Explain the steps to create a file (database and table) in MS-Access. (Long)",
      "How can we switch between applications in Windows? (Short)",
      "What is MS-PowerPoint? Explain its views and steps to create a presentation. (Long)",
      "Differentiate between linking and embedding. (Short)",
      "Write the file extensions of Word, Excel, Access and PowerPoint. (Short)",
    ],
  },
];
