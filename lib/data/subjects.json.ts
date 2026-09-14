import { Subject } from "@/types";

// DATA — subjects across AKTU (B.Tech CSE demo hierarchy, MBA, MCA),
// DBRAU (BCA) and CSJMU (BCA). DBRAU/CSJMU/MBA/MCA subjects, names and
// syllabus text below are migrated from the original SabkaCode site.
//
// Note on semesters: the original static site listed DBRAU and CSJMU BCA
// subjects as a flat list without an explicit semester tag. The semester
// numbers below are a reasonable best-effort mapping onto a standard
// 6-semester BCA structure — double check and adjust them against your
// university's actual syllabus before treating them as final.
export const subjects: Subject[] = [
  {
    id: "s-ds",
    slug: "data-structures",
    name: "Data Structures",
    code: "KCS301",
    description: "Arrays, linked lists, stacks, queues, trees, graphs and algorithm analysis.",
    courseSlug: "btech",
    universitySlug: "aktu",
    branchSlug: "cse",
    semester: 3,
  },
  {
    id: "s-dbms",
    slug: "database-management-systems",
    name: "Database Management Systems",
    code: "KCS302",
    description: "Relational model, SQL, normalization, transactions and indexing.",
    courseSlug: "btech",
    universitySlug: "aktu",
    branchSlug: "cse",
    semester: 3,
  },
  {
    id: "s-dld",
    slug: "digital-logic-design",
    name: "Digital Logic Design",
    code: "KCS303",
    description: "Boolean algebra, combinational and sequential circuits.",
    courseSlug: "btech",
    universitySlug: "aktu",
    branchSlug: "cse",
    semester: 3,
  },
  {
    id: "s-ds-sem4",
    slug: "design-and-analysis-of-algorithms",
    name: "Design & Analysis of Algorithms",
    code: "KCS402",
    description: "Algorithm design paradigms, complexity analysis and NP-completeness.",
    courseSlug: "btech",
    universitySlug: "aktu",
    branchSlug: "cse",
    semester: 4,
  },

  {
    id: `s-1001`,
    slug: `c`,
    name: `C Language`,
    code: `BCA01`,
    description: `C Language — BCA syllabus, notes and study material for DBRAU.`,
    courseSlug: `bca`,
    universitySlug: `dbrau`,
    branchSlug: `general`,
    semester: 1,
    syllabus: `C basics: C character set, Identifiers and keywords, Data type, Constants, Variables and Arrays, Declarations, Expressions statements, Symbolic constants, Compound statements, Arithmetic operators, Unary operators,
Relational and Logical operators, Assignment operators, Conditional operators, Bit operators.
Decision Control Structures: If statement, If-else statement, Nested if(), If ladder, Switch, case statement, Iterative statements:For loop, While loop, Do-while loop, Conditional statements: Break, Continue, Storage
Classes, Array: Declaration of an Array, Initialization of Array, Types of Array: Single Dimension Array, Two, Dimensional Array, Address Calculation of an Element of a 2-D Array.
Functions: Library Functions, User Defined Functions, Function Declaration, Prototype Declaration, Types of Arguments: Actual Arguments, Formal Arguments, Function Definition, Passing Arrays as Parameters,
Methods to Call a Function: Call by Value, Call by Reference.
Pointers: Declaration of Pointer Variables, Pointer Arithmetic, Returning Multiple Output Values through a Function Strings.
Structures, Unions, Array of Structures, Enumerations, File Handling: Opening a file, Closing a file, File Opening Modes, Reading from and writing to a file, Copying Content of an existing file to another, Command line arguments, argc and argv Parameters, Pre-processor directives.
`,
  },
  {
    id: `s-1002`,
    slug: `maths`,
    name: `Mathematics`,
    code: `BCA02`,
    description: `Mathematics — BCA syllabus, notes and study material for DBRAU.`,
    courseSlug: `bca`,
    universitySlug: `dbrau`,
    branchSlug: `general`,
    semester: 1,
    syllabus: `Determinants: Definition, Minors, Cofactors, Properties of Determinants MATRICES: Definition, Types of Matrices, Addition, Subtraction, Scalar Multiplication
and Multiplication of Matrices, Adjoint, Inverse, Cramers Rule, Rank of Matrix Dependence of Vectors, Eigen Vectors of a Matrix, Caley-Hamilton Theorem (without proof).
LIMITS & CONTINUITY: Limit at a Point, Properties of Limit, Computation of Limits of Various Types of Functions, Continuity at a Point, Continuity Over an
Interval Intermediate Value Theorem, Type of Discontinuities.
Differentiation: Derivation, Derivatives of Sum, Differences, Product & Quotients, Chain Rule, Derivatives of Composite Functions, Logarithmic Differentiation
Rolle's Theorem, Mean Value Theorem, Expansion of Functions (Maclaurin's & Taylor's), Indeterminate Forms, L' Hospitals Rule, Maxima & Minima, Curve Tracing, Successive
Differentiation & Liebnitz Theorem.
INTEGRATION: Integral as Limit of Sum, Fundamental Theorem of Calculus( without proof.), Indefinite Integrals, Methods of Integration Substitution, By Parts
Partial Fractions, Reduction Formulae for Trigonometric Functions, Gamma and Beta Functions(definition).
VECTOR ALGEBRA: Definition of a vector in 2 and 3 Dimensions; Double and Triple Scalar and Vector Product and physical interpretation of area and volume.
`,
  },
  {
    id: `s-1003`,
    slug: `de`,
    name: `Digital Electronics`,
    code: `BCA03`,
    description: `Digital Electronics — BCA syllabus, notes and study material for DBRAU.`,
    courseSlug: `bca`,
    universitySlug: `dbrau`,
    branchSlug: `general`,
    semester: 1,
    syllabus: `Logic gates and circuit: Gates (OR, AND, NOR, NAND, XOR & XNOR); Demogran’s laws; Boolean laws, Circuit designing techniques (SOP, POS, K-Map).
Combinational Building Blocks: Multiplexes; Decoder; Encoder; Adder and Subtracter.
Memories: ROMs, PROMs, EPROMs, RAMs, Hard Disk, Floppy Disk and CD-ROM.
Sequential Building Blocks: Flip-Flop (RS, D, JK, Master-slave & & T flip-flops); Registers & Shift registers; Counters; Synchronous and Asynchronous Designing method.
Memory Organization: Basic cell of static and dynamic RAM; Building large memories using chips; Associative memory; Cache memory organization and Virtual memory
organization.`,
  },
  {
    id: `s-1004`,
    slug: `cpp`,
    name: `C++ Language`,
    code: `BCA04`,
    description: `C++ Language — BCA syllabus, notes and study material for DBRAU.`,
    courseSlug: `bca`,
    universitySlug: `dbrau`,
    branchSlug: `general`,
    semester: 2,
    syllabus: `Introduction: Introducing Object Oriented Approach, Procedural Programing Language Vs. Object Oriented Language, Basic concept of OOPS, Operators, Tokens, Variables, Keywords, Data types, Identifiers, Characters, Type def statement, Constants, Enumerated data type.
Control Flow: If statement, If else statement, Nested If, Else, Statements, For Loop, While Loop, While Loop, Break, Switch, Continue, goto. Classes and Objects, Encapsulation, information hiding, abstract data types, object & classes, attributes, methods, C++ class declaration, Constructors and destructors, Default parameter value, object types, C++ garbage collection, dynamic memory allocation, Metaclass/abstract classes.
Array: Array Illustration, Multi, Dimensional arrays, Strings, Array of strings, function prototype, function return data type, parameter passing, default argument, Inline function, Function Overloading, Array Function, Operator Overloading.
Pointers: Pointer to Derived Class, array of pointers, Inheritance and Polymorphism: Inheritance, Class hierarchy, derivation, public, private & protected, abstract classes, Single, Multilevel, Multiple, Hierarchical, Hybrid, benefits of Inheritance.
Files and Exception Handling: Streams and files, Namespaces, Exception handling.`,
  },
  {
    id: `s-1005`,
    slug: `stats`,
    name: `Statistics`,
    code: `BCA05`,
    description: `Statistics — BCA syllabus, notes and study material for DBRAU.`,
    courseSlug: `bca`,
    universitySlug: `dbrau`,
    branchSlug: `general`,
    semester: 2,
    syllabus: `Classification of data, Tabulation of data, preparation of frequency distribution, presentation of data through histogram, frequency polygon curve.
Measures of Central Tendency: Computer of Arithemetic Mean, Median and Mode for ungrouped data grouped data, verification of median through ogives.
Measures of Dispersion: Computation of Range, Quartile deviation, mean deviation and standard deviation, coefficient of variation.(Numerical Application Only).
Concept of skewness, Karl Pearson's and Bowley's Cofficients of skewness (Numerical Application only).
Meaning of Correlation, Type of correlation, Correlation Coefficients, Karl Pearson, Spearman's rank correlation coefficient.(Numerical Application Only).
`,
  },
  {
    id: `s-1006`,
    slug: `html`,
    name: `HTML & Web Design`,
    code: `BCA06`,
    description: `HTML & Web Design — BCA syllabus, notes and study material for DBRAU.`,
    courseSlug: `bca`,
    universitySlug: `dbrau`,
    branchSlug: `general`,
    semester: 2,
    syllabus: `Basics of INternet and Web: The Basics of internet, World Wide Web, Web page, Home page, Web site, Static, Dynamic and Active webpage. Overview of protocols, Simple Mail Transfer Protocol, Gopher, Telnet, Emails, TFTP, Simple Network Management Protocol, Hyper Text Transfer Protocol. Client Server Computing Concepts. Web Client and Web Server, Web Browser, Browser e.g., Netscape Navigator, Internet Explorer, Morzilla Firefox, Client Side Scripting Language, VB Script and Java Script, Active X Control and Plug-ins, Web Server Architecture, IMage maps, CGI, API Web database connectivity, DBC, ODBC.
Dynamic Html: Dynamic Html, Cocument Object Model, Features, DHTML, CSSP(Cascading Style Sheet Positioning) and JSSS(Java Script assisted Style Sheet), Layers of Netscape, The ID Attribute, DHTML Events.
Introduction to HTML: Editors, Basics, Elements, Attribute, Heading, Paragraphs, Styles, Formatting, Quotaions, Comments, CSS Links, Images, Tables, Lists, Blocks, Classess, ID, Frames, File Paths Head, Layout , Computer Code, Entities, Symbols, Char set, Color and Background of Web Pages, Hypertext, Hyperlink, and Hypermedia, Links, Anchors and URLs, Links to External Documents, Differnet Section of a page and graphics, Footnote, and E-malling, Creating Table, Frame, Form and Style Sheet.
CSS: Introduction, Syntax, Color, Background, Border, Margins, Padding, Height/Width, Box Model, Outline, Text, Fonts, Icons, Links, Lists, Tables, Display, Max, Width, Position, Overflow, Float, Inline, Block, Align, Combinators, Pseudo Class, Pseudo Elements, Opacity, Navigation Bar, Dropdowns, Image Gallery, Image Sprites, Attr Selectors, Forms, Counters, WEbsite Layout, Units, Specificity.
XML: Introduction, Tree, Synatx, Elements, Attributes, Namespaces, Display, HTTp request, Parser, DOM, XPath, XSLT, XQuerry, XLink, Validator, DTD, Schema, Server.
`,
  },
  {
    id: `s-1007`,
    slug: `dsa`,
    name: `Data Structures & Algorithms`,
    code: `BCA07`,
    description: `Data Structures & Algorithms — BCA syllabus, notes and study material for DBRAU.`,
    courseSlug: `bca`,
    universitySlug: `dbrau`,
    branchSlug: `general`,
    semester: 3,
    syllabus: `Classification of Data Structure: Operations on Data Structure, Address Calculating, Application of Array, Limitation of Array, Array as parameters, Sparse Matrix.
Continuous Implementation(Stack): Array Representation, Operations of Stacks, Push & Pop, Applications of Stack, Conversation of Infix to Prefix and Post Expressions, Evaluation of Postfix expression using stack, Recursion:Recursive Defination and process, Principles of Recursion, Tower of Hanoi problem, Recursion Vs Iteration Continuous, Implementation(Queue): Array representation and implementation of queues, Operation on Queue: Create, Add, Delete, Full and empty queue, circular queue, De-queue and Priority queue.
Non Continuous Implementation Link Lists: Linear list concept, Linked List Terminology representation of Linked List in Memory, Type of Linked List, Single Linked List, Doubly Linked List, Single Circular List, Circular Doubly Linked List, Operation on Linked List: Create list insert node(empty list beginning, middle, end), Delete node(first, general case). Traversing node, Searching node, Print list, Count nodes, Sort lists.
Tree: Introduction to tree & it Terminology binary trees, Type of Binary tree, representation of Binary tree, Traversals(inorder, preorder, postorder), Tree Expression, Binary Search Tree, Insertion and Deletion in BST.
Sorting & Searching Techniques: Bubble Sort, Selection Sort, Insertion Sort, Quick Sort, Merge Sort, Sequential Sort, Binary Search.
`,
  },
  {
    id: `s-1008`,
    slug: `os`,
    name: `Operating System`,
    code: `BCA08`,
    description: `Operating System — BCA syllabus, notes and study material for DBRAU.`,
    courseSlug: `bca`,
    universitySlug: `dbrau`,
    branchSlug: `general`,
    semester: 3,
    syllabus: `Introduction: What is an operating system, Simple Batch Systems, Multi, Programmed Batch System, Time. Sharing System, Personal. Computer systems, Parallel Systems, Distributed Systems, Real, Time Sysiems, Memory Organization: Fixed memory , variable memory. Memory Management: Background, Logical versus physical Address space, swapping. Contiguous allocation, paging, Segmentation Virtual memory: Denand Paging. Page Replacement, Page replacement Algorithms, Performance of Demand Paging, Allocation of Frames, thrashing.
Processes: Process Con cept, Process Scheduling, operation on processes, CPU Scheduling: Basic Concepts, Scheduling Criteria, Scheduling Algorithms, Multiple,Processor Scheduling, Process Synchronization: Background, the critical, section problem, synchronization Hardware, Semaphores, Cassical Problems of synchronization. Deadlocks: system Model, Deadlock Characterization, Methods for Handling Deadlocks, Deadlock Prevention, Deadlock Avoidance, Deadlock Detection, Recovery from Deadlock.
Device Management: Techniques for Device Management, Dedicated Devices, Shared Devices, Virtual Devices, Input or Output Devices. Storage Devices, Buffering Secondary Storage Structure: Disk Structure, Disk Scheduling, Disk Management, Swap, Space Management, Disk Reiability Information Management: Introduction, A simple file system General Model of a File system, Symbolic File System, Basic File System, Access Control Verification, Logical File System, Physical File System File Syster. Interface, File Concept,Access Methods, Directory Structure, Protection. Consistency Semantics File, System Implementation: File, System Structure. Allocation Methods, Free Space Management.
Unix: A Sample Login Session, Logging On, Using the on - line Man pages, Logging Off, Directory and File Structure, File Names.
Directories, The dfProgram, Your Login Directory, Subdirectories, Specifying Files, Protecting Files and Directoreis, Text Editors, Files as Output and Log files, Logging Your Actions to a File, Comparing Files, Searching Through Files, The Systems and Dealing with Multiple Users.
Windows: Features of windows desktop, start menu, contro. Windows, panel, my computer, windows explorer, accessories, Managing Multipis managing arranging icons on the desktop, creating and managing folders. files and drivers, logging ofi and shutting down windows Control. Entertainment CD player, VD Player, media player, Sound recorder, volume control.
`,
  },
  {
    id: `s-1009`,
    slug: `coa`,
    name: `Computer Organization and Architecture`,
    code: `BCA09`,
    description: `Computer Organization and Architecture — BCA syllabus, notes and study material for DBRAU.`,
    courseSlug: `bca`,
    universitySlug: `dbrau`,
    branchSlug: `general`,
    semester: 3,
    syllabus: `Computer Evolution: Briefhistory ofComputer, Classification of computer, Structure of a computer system, Arithmetic Logic Unit, Control Unit, Von Neumann Architecture, Integer Addition and Subtraction, Floating point representation, Signed numbers, Binary Arithmetic 1's and 2's Complements, Booths Algorithm, Hardware Implementation, IEEE Standards, Floating Point Arithmetic, The accumulator, shifts, carry and overflow instruction Characteristics, CPU with single BUS, Types of operands, Types of operations, Addressing Modes, instruction Formats.
Processor Organization: Parallelism and Computer arithmetic, Computer arithmetic associatively, Floating Point in the 8086, Programmers Model of 8086, Register Organization 8086 Registers, Instruction Cycles, Addressing Modes, Micro operations, The instruction cycle, Control of the CPU, Functional Requirements, Single, Two, three bus structure Execution of a complete instruction, Branching, Sequencing of Control Signals, Hardwired Control Unit, Micro- Programmed Control.
Memory Organization: Characteristics ofMemory Systems, Main Memory, Types of memory, Memory system considerations, Design of memory subsystem using Static, Dynamic Memory Chips, Memory interleaving High Speed Memories: Cache Memory, Structure of cache and main memory, Elements of Cache Design, Mapping functions, Replacement algorithms, External Memory, Virtual memory.
I/O Organization: Input/ Output Module: Need, Techniques, Interrupt Driven I/O, Basic concepts of an Interrupt, Response of CPU to an Interrupt, Design issues, Priorities, interrupt handling, Types of interrupts. Data transfer Techniques, Data memory Acces, Buses, Types of buses., /O interface, synchronous and Asynchronous Data Transfer, serial l/O Input Devices, Output Devices, Multi-programming vs. Multiprocessing, Comparison between closely coupled and closely coupled multiprocessor.
Micro-programming: Basic Principles, Features, Hardwired VS. MicrO programmed computers, Applications and advantages of micro programming, Limitations of microprogramming Computer Clock Micro instructions and its Contro! Path. Microcode. Machine instruction. Paralie! ganization, Instruction Set Architecture (1SA), RISC and CISC. Characteristics of CISC. Characteristics ofRISC. RISC versus CISC. Vector Processing requirements and characteristics ofvector processing.
`,
  },
  {
    id: `s-1010`,
    slug: `dbms`,
    name: `Database Management System`,
    code: `BCA10`,
    description: `Database Management System — BCA syllabus, notes and study material for DBRAU.`,
    courseSlug: `bca`,
    universitySlug: `dbrau`,
    branchSlug: `general`,
    semester: 4,
    syllabus: `Introduction: Database system concepts, Database Users, and Architecture Introduction to Database System with example, Introduction to Traditional File
Oriented System, Characteristics of the Database Approach, Components of Database System, Database users, Advantages and disadvantages of using a DBMS, structure of DBMS,
Database Schemas and Instances, DBMS Architecture, Data Independence, Database Languages and Interfaces, Classification of Database Management Systems.
Data Modeling & Relational: Database Management System Data Modeling using the Entity Relationship Model: Entity Types, Entity Sets, Attributes, Key
Relationships, Relationship Types, Role and Structural, Constraints, weak Entity Types, ER Diagrams, Naming Conventions, Design issues.
The Relational Data model: Relational Constraints and the Relational Algebra: Relational Model Concepts, Relational Constraints and Relational database Schemas
update Operations and Dealing with Constraint Violations, Basic Relational Algebra Operations, Additional Relational Operations, and Examples ofQueries in Relational
Algebra.
SQL: SQL. and Database Design Theory and Methodology Structured Query Language The Relational Database Standard: Data Definition, Constraints and schema Changes
in SQL, Types of SQL Commands, SQL, Operators and their Procedure, insert, Delete, and Update Statements in SQL. Queries and Sub Queries, Aggregate Functions, Join
Unions, Intersection, Minus Views (Virtual Tables) in SQL. Functional Dependencies and Normalization of Relational Database: Informal Design Guidelines for Relation
Schemas. Functional Dependencies, Armstrong Rules, Closure of Attributes, Normal Forms Based on Primary Keys, General Definitions of Second and Third Normal Forms, Boyce
Codd Normal Form.
Transaction Processing: Concurrency Control and Distributed Database Transaction Processing Concepts: Introduction to Transaction Processing Transaction and
system concepts, Desirable Properties of Transactions, Concurrency Control Techniques, Locking Techniques for concurrency Control, Concurrency Control Based on Timestamp
Ordering.
`,
  },
  {
    id: `s-1011`,
    slug: `cn`,
    name: `Computer Networks`,
    code: `BCA11`,
    description: `Computer Networks — BCA syllabus, notes and study material for DBRAU.`,
    courseSlug: `bca`,
    universitySlug: `dbrau`,
    branchSlug: `general`,
    semester: 4,
    syllabus: `Basic Concepts: Components of data communication, distributed processing, standards and organizations. Line configuration, topology, Transmission mode, and categories of networks.OSI and TCP/IP Models: Layers and their functions, comparison of models. Digital Transmission: Interfaces and Modems: DTE-DCE Interface, Modems, Cable modems.
Transmission Media: Guided and unguided, Attenuation, distortion, noise, throughput, propagation speed and time, wavelength, Shannon capacity, comparison of media.
Telephony: Multiplexing, error detection and correction: Many to one, One to many, WDM, TDM, FDM, Circuit switching, packet switching and message switching. Data link control protocols: Line discipline, flow control, error control, synchronous and asynchronous protocols, character and bit oriented protocols, Link access procedures.Point to point controls: Transmission states, PPP layers, LCP, Authentication, NCP.ISDN: Services, Historical outline, subscriber’s access, ISDN Layers and broadcast ISDN.
Devices: Repeaters, bridges, gateways, routers, The Network Layer; Design issues, Routing algorithms, Congestion control Algorithms, Quality of service, Internetworking, Network-Layer in the internet.
Transport and upper layers in OSI Model: Transport layer functions, connection management, functions of session layers, presentation layer and application layer.
`,
  },
  {
    id: `s-1012`,
    slug: `java`,
    name: `Java Programming`,
    code: `BCA12`,
    description: `Java Programming — BCA syllabus, notes and study material for DBRAU.`,
    courseSlug: `bca`,
    universitySlug: `dbrau`,
    branchSlug: `general`,
    semester: 4,
    syllabus: `Number System & Boolean Algebra: Number system: Binary, Octal, Decimal, Hexadecimal, Conversion of Number System, Binary Arith- metic & Complement,, Binary Codes: Weighted & Non Weighted, Gray Code, Excess-3 Code. Error Detection Codes, Hamming Code, Boolean Function, Boolean Postulates, De-Morgan's Theorem, Boolean Expressions: Sum of Product, Product of Sum, Minimization of Boolean Expressions, using K- Map, Logic Gates: AND, OR, NOT, NAND, NOR, XOR, XNOR, Implemen- tations of Logic Functions using Gates, NAND, NOR, Implementations, Mul- tilevel gate Implementations.
Combinational Circuits: Adders & Subtractors: Half adder, full adder, binary adder, half subtractor, full subtractor, magnitude compara- tor: Two Bit comparator, three Bit Magnitude comparator, multiplexer & De -multiplexer: 4*1 Multiplexer, 8*1 Multiplexer, Decoder && Encoder, par- ity Checker & Generator, code converter.
Sequential Circuit: Introduction to flip flops: SR, JK, T, D master Slave flip, conversion of flip flops, characteristics table & Equation, edge triggering & Level Triggering, excitation table.
Registers: Introduction of Registers, classification of Registers, register with parallel load, shift registers, bidirectional shift register with parallel load.
Counters: Introduction of counter, Asynchronous/Ripple counter, synchronous counters, BCD counter, 4 bit binary counter with parallel load, design of synchronous counters, ring counter, Johnson counter
`,
  },
  {
    id: `s-1013`,
    slug: `php`,
    name: `PHP Programming`,
    code: `BCA13`,
    description: `PHP Programming — BCA syllabus, notes and study material for DBRAU.`,
    courseSlug: `bca`,
    universitySlug: `dbrau`,
    branchSlug: `general`,
    semester: 5,
    syllabus: `PHP: Introduction to PHP Evaluation of PHP, Basic Syntax, Defining variable and constant, PHP data type, Operator and Expression, Decisions and loop making decisions, Doing repetitive task with looping, Mixing decisions and looping with KTML, Function: Define a function, Call by value and call by reference, Recursive function, String Creating and accessing, String Searching & Replacing string, Formatting string, String related Library function.
Array: Anatomy of an Array, Creating index based an Associative array Accessing array Element Looping with index based array, looping with associative array using each () and Foreach (), Some useful library function, Handling HTML Form PHP capturing Form Data dealing with multi -value filled, and generating file uploaded form, redirecting a form after submission.
Working with file and Directories: Understanding file & directory, opening and closing, a file, coping, renaming and deleting a file, working with directories, creating and delecting folder, file uploading & Downloading.
Session and Cookie: Introduction to Session Control, Session Functionality what is a Cookie, Setting Cookies with PHP, using Cookies with Sessions, Deleting Cookies, Registering Session Variables, Destroying the variable and Session 8 Database Connectivity with
MySQL: Introduction to RDBMS, Connection with MySQL Database, Performing basic database operation (DML) (insert, Delete, update, Select), Setting query Parameter, Executing query join (Cross joins, inner joins, outer joins, self joins) Exception Handling Understanding Exception and error, Try, Catch, Throw, Error tracking and debuting.
`,
  },
  {
    id: `s-1014`,
    slug: `ai`,
    name: `Artificial Intelligence`,
    code: `BCA14`,
    description: `Artificial Intelligence — BCA syllabus, notes and study material for DBRAU.`,
    courseSlug: `bca`,
    universitySlug: `dbrau`,
    branchSlug: `general`,
    semester: 5,
    syllabus: `AI Concepts, Various definitions of Al, Knowledge, Knowledge Pyramid, People and Computers; What computers can do better than people, what people can do better than computers, Characteristics of Al Problems, Problem Representation in Al, Components of AI, AI evolution, Application Areas of AI, History of o AI, The Turing Test and The Revised Turing Test.
Expert System: Components of Expert System; Knowledge Base, Inference Engine, User Interface, Features of Expert System, Expert System Life Cycle, Categories of Expert System, Rulee Based vs Model Based Expert System, Advantages/Limitations of Expert System, Developing an Expert System; Identification, n Conceptualization, Formalization, Implementation, Testing, Using an Expert System, Application Areas of Expert System.
AI and Search Process: Brute Force Search, Depth First/Breadth First Search, Heuristic Search Hill Climbing, Constraint Satisfaction, Mean End Analysis, Best First Seach, A* Algorithm, AO* Algorithm, Beam Search.
Natural Language Processing: Introduction, Need, Goal, Fundamental Problems in Natural Language Understanding, How People Overcome Natural Language Problems, Speech Recognition Introduction, Advantages and Approaches, I Introduction to Robotics, Parts of a Robot Controlling.
Applications: Communication, Communication as action, Formal grammar for a fragment of English, Syntactic Analysis,s Augmented Grammars, Semantic interpretation, Ambiguity andnd disambiguation, Discourse understanding, Grammar induction, Probabilistic language processing, Probabilistic language models, s Information retrieval, Information Extraction, Machine Translation.
`,
  },
  {
    id: `s-1015`,
    slug: `daa`,
    name: `Design and Analysis of Algorithms`,
    code: `BCA15`,
    description: `Design and Analysis of Algorithms — BCA syllabus, notes and study material for DBRAU.`,
    courseSlug: `bca`,
    universitySlug: `dbrau`,
    branchSlug: `general`,
    semester: 5,
    syllabus: ``,
  },
  {
    id: `s-1016`,
    slug: `ec`,
    name: `E-Commerce`,
    code: `BCA16`,
    description: `E-Commerce — BCA syllabus, notes and study material for DBRAU.`,
    courseSlug: `bca`,
    universitySlug: `dbrau`,
    branchSlug: `general`,
    semester: 5,
    syllabus: `Introduction to E-Commerce: The Scope of Electronic Commerce, Definition of Electronic Commerce, Electronic E-commerce and the Trade Cycle, Electronic Markets, Electronic Data Interchange, Internet Commerce, E-Commerce in Perspective.
Business Strategy in an Electronic Age: Supply Chains, Porter’s Value Chain Model, Inter Organizational Value Chains, Competitive Strategy, Porter’s Model, First Mover Advantage Sustainable Competitive Advantage, Competitive Advantage using E -Commerce, Business Strategy, Introduction to Business Strategy, Strategic Implications of IT, Technology, Business Environment, Business Capability, Exiting Business Strategy, Strategy Formulation & Implementation Planning, E-Commerce Implementation, E-Commerce Evaluation.
Business-to-Business Electronic Commerce: Characteristics of B2B EC, Models of B2B Ec, Procurement Management Using the Buyer’s Internal Marketplace, Just in Time Delivery, Other B2B Models, Auctions and Services from Traditional to Internet Based EDI, Intergration with Back-end Information System, The Role of Software Agents for B2B EC, Electronic marketing in B2B, Solutions of B2B EC, Managerial Issues, Electronic Data Interchange (EDI), EDI: The Nuts and Bolts, EDI & Business.
Internet and Extranet: Automotive Network Exchange, The Largest Extranet, Architecture of the Internet, Intranet and Extranet, Intranet software, Applications of Intranets, Intranet Application Case Studies, Considerations in Intranet Deployment, The Extranets, The structures of Extranets, Extranet products & services, Applications of Extranets, Business Models of Extranet Applications, Managerial Issues.
Electronic Payment Systems: Is SET a failure, Electronic Payments & Protocols, Security Schemes in Electronic payment systems, Electronic Credit card system on the Internet, Electronic Fund transfer and Debit cards on the Internet, Stored –value Cards and E- Cash, Electronic Check Systems, Prospect of Electronic Payment Systems, Managerial Issues.
Public Policy: From Legal Issues to Privacy: EC- Related Legal Incidents, Legal Incidents, Ethical & Other Public Policy Issues, Protecting Privacy, Protecting Intellectual Property, Free speech, Internet Indecency & Censorship, Taxation & Encryption Policies, Other Legal Issues: Contracts, Gambling & More, Consumer & Seller Protection In EC.
Infrastructure For EC: It takes more than Technology, A Network Of Networks, Internet Protocols, Web- Based client/ Server, Internet Security, selling on the web, Chatting on the Web, Multimedia delivery, Analyzing Web Visits, Managerial Issues.
`,
  },
  {
    id: `s-1017`,
    slug: `cg`,
    name: `Computer Graphics`,
    code: `BCA17`,
    description: `Computer Graphics — BCA syllabus, notes and study material for DBRAU.`,
    courseSlug: `bca`,
    universitySlug: `dbrau`,
    branchSlug: `general`,
    semester: 6,
    syllabus: `Introduction: The Advantages of Interactive Graphics, Representative Uses of Computer Graphics, Classification of Application Development of Hardware and software for computer Graphics, Conceptual Framework for Interactive Graphics, Overview, Scan: Converting Lines, Scan Converting Circles, Scan Converting Ellipses.
Hardcopy Technologies, Display Technologies, Raster-Scan Display System, Video Controller, Random-Scan Display processor, Input Devices for Operator Interaction, Image Scanners, Working exposure on graphics tools like Dream Weaver, 3D Effects etc.
Clipping Southland- Cohen Algorithm, Cyrus-Beck Algorithm, Midpoint Subdivision Algorithm.
Geometrical Transformation 2D Transformation, Homogeneous Coordinates and Matrix Representation of 2D Transformations, composition of 2D Transformations, the Window-to-Viewport Transformations, Introduction to 3D Transformations Matrix.
Representing Curves & Surfaces Polygon meshes parametric, Cubic Curves, Quadric Surface; Solid Modeling Representing Solids, Regularized Boolean Set Operation primitive Instancing Sweep Representations, Boundary Representations, Spatial Partitioning Representations and Constructive Solid Geometry Comparison of Representations.
Introductory Concepts: Multimedia Definition, CD-ROM and the multimedia highway, Computer Animation (Design, types of animation, using different functions)
Uses of Multimedia, Introduction to making multimedia – The stage of Project, hardware & software requirements to make good multimedia skills and Training opportunities in Multimedia Motivation for Multimedia usage.
`,
  },
  {
    id: `s-1018`,
    slug: `sad`,
    name: `System Analysis and Design`,
    code: `BCA18`,
    description: `System Analysis and Design — BCA syllabus, notes and study material for DBRAU.`,
    courseSlug: `bca`,
    universitySlug: `dbrau`,
    branchSlug: `general`,
    semester: 6,
    syllabus: `Overview of Systems Concepts, Analysis and Design Life cycle, Introduction to System Concept: Characteristics of the system, Elements of a System, Types of Systems, Physical and Abstract System, Open and Closed System, Formal and Informal System, Introduction to Data and Information; Types of Information System, Categories of Information System, Needs of Informations Systems, Qualities of Information System, Software Development Life Cycle (SDLC), Role and Attributes of System Analyst.
System Planning and Requirements Determination System planning and initial Investigation Strategic Plan for Information processing, Tools for Planning, Problems in Planning, Need for requirement definition.
Information gathering tools: Review of Literature, pracedures and forms, Methodologies, Tools and Techniques of Analysis Systems Analysis and Design; Decision Tree, Data Dictionary, Decision Table. Structured English, Data Flow Diagram, Components of a DFD, Zero Level DFD, DFD Transformation and. Decomposition, Context Diagram Levelling a DFD, Feasibility Study Economic Feasibility (Cost & Benefit Analysis), Organizational Feasibility, Technical Feasibility, Behavioural Feasibility study.
System Design and implementation Process of Design: Logical and Physical Design, Design Methodologies, Elements of Form Design, Design of Output, Design of Input, Design of File, Design of procedure, Audit Trail, System implementation and Testing: Operational and Test Environment, Conversion Preparation, Database installation, Users Training and Final Report to Management, Creating a new System, Test Plan: Activity Network for system Testing, Types of Testing.
System Quality Assurance, IT infrastructure Selection and Evaluation of Processing and Maintenance Quality Assurance: Quality factors specification, Levels of Quality Assurance, Computer Hardware and Software Selection, Computer Configuration Determination, Requesting Proposal from Vendors, Evaluation of Vendor's Proposals, Acceptance of system, Evaluation of Processing, Need of Maintenance.
`,
  },
  {
    id: `s-1019`,
    slug: `ns`,
    name: `Network Security`,
    code: `BCA19`,
    description: `Network Security — BCA syllabus, notes and study material for DBRAU.`,
    courseSlug: `bca`,
    universitySlug: `dbrau`,
    branchSlug: `general`,
    semester: 6,
    syllabus: ``,
  },
  {
    id: `s-1020`,
    slug: `nm`,
    name: `Numerical Methods`,
    code: `BCA20`,
    description: `Numerical Methods — BCA syllabus, notes and study material for DBRAU.`,
    courseSlug: `bca`,
    universitySlug: `dbrau`,
    branchSlug: `general`,
    semester: 6,
    syllabus: `Roots of Equations:Bisections Method, False Position Method, Newton's Raphson Method, Rate of convergence of Newton's Method.
Interpolation and Extrapolation: Finite Differences, The operator E, Newton's Forward and Backward Differences, Newton's dividend differences formulae,
Lagrange's Interpolation formula for unequal INtervals, Gauss's Interpolation formula, Starling formula, Bessel's formula, Laplace Everett formula.
Numerical Differentiation Numerical Integration: Introduction, direct methods, maxima and minima of a tabulated function, General Quadratic formula, Trapezoidal rule, Simpson's One third rule, Simpson's three-eight rule.
Solution of Linear Equation: Gauss's Elimination method and Gauss's Siedel iterative method.
Solution of Differential Equations: Euler's method, Picard method, Fourth-order Ranga-Kutta method.
`,
  },
  {
    id: `s-1021`,
    slug: `ot`,
    name: `Optimization Techniques`,
    code: `BCA21`,
    description: `Optimization Techniques — BCA syllabus, notes and study material for DBRAU.`,
    courseSlug: `bca`,
    universitySlug: `dbrau`,
    branchSlug: `general`,
    semester: 6,
    syllabus: `Basic of operation research (OR): Characteristics of OR, Necessity of OR in industry, OR and decision making, role of computers in OR. Linear programming: Formulations and graphical solution of (2 variables) canonical and standard terms of linear programming problem.
Algebraic solution: Simplex methods, Charnes method of penalties, two phase simplex method.
Transportation model: Definition, Formulation and solution of transportation models, the row, minima column, minima, matrix, minima and Vogel's approximation methods. Assignment model: Definition of assignment model, comparison with transportation model, formulation and solution of assignment model.
Sequencing Problem: Processing of n jobs through 2 machines, processing n jobs through 3 machines, processing 2 jobs through m machines.
Game theory: Characteristics of games, maxima, - minimax criteria of optimality, dominance property, algebraic and graphical method of solution of solving 2× 2 games.
`,
  },
  {
    id: `s-1022`,
    slug: `vb`,
    name: `Visual Basic .NET`,
    code: `BCA22`,
    description: `Visual Basic .NET — BCA syllabus, notes and study material for DBRAU.`,
    courseSlug: `bca`,
    universitySlug: `dbrau`,
    branchSlug: `general`,
    semester: 6,
    syllabus: ``,
  },
  {
    id: `s-1023`,
    slug: `maths2`,
    name: `Mathematics-II`,
    code: `BCA-C201`,
    description: `Mathematics-II — BCA syllabus, notes and study material for CSJMU.`,
    courseSlug: `bca`,
    universitySlug: `csjmu`,
    branchSlug: `general`,
    semester: 4,
    syllabus: `SETS
Sets, Subsets, Equal Sets Universal Sets, Finite and Infinite Sets, Operation on Sets, Union, Intersection and
Complements of Sets, Cartesian Product, Cardinality of Set, Simple Applications.
RELATIONS AND FUNCTIONS
Properties of Relations, Equivalence Relation, Partial Order Relation Function: Domain and Range, Onto, Into
and One to One Functions, Composite and Inverse Functions.
PARTIAL ORDER RELATIONS AND LATTICES
Partial Order Sets, Representation of POSETS using Hasse diagram, Chains, Maximal and Minimal Point, Glb,
lub, Lattices & Algebric Systems, Principle of Duality, Basic Properties, Sublattices, Distributed &
Complemented Lattics.
FUNCTIONS OF SEVERAL VARIABLES
Partial Differentiation, Chain Rule, Extrema of Functions of 2 Variables, Euler’s Theorem.
MULTIPLE INTEGRATION
Double Integral in Cartesian and Polar Coordinates to find Area, Change of Order of Integration, Triple Integral
to Find Volume of Simple Shapes in Cartesian Coordinates.
s`,
  },
  {
    id: `s-1024`,
    slug: `itwd`,
    name: `Internet Technology & Web Design`,
    code: `BCA-C202`,
    description: `Internet Technology & Web Design — BCA syllabus, notes and study material for CSJMU.`,
    courseSlug: `bca`,
    universitySlug: `csjmu`,
    branchSlug: `general`,
    semester: 4,
    syllabus: `Introduction to Internet: Internet, Growth of Internet, Owners of the Internet, Anatomy of Internet,
ARPANET and Internet history of the World Wide Web, basic Internet Terminology, Net etiquette. Internet
Applications – Commerce on the Internet, Governance on the Internet, Impact of Internet on Society –
Crime on/through the Internet.
Internet Connectivity & Network: Connectivity types: level one, level two and level three connectivity,
modem, dedicated connections through the telephone system, ISDN, Protocol options – Shell, SLIP, PPP,
Service options – E-mail, WWW, News Firewall etc. Network definition, Common terminologies: LAN,
WAN, Node, Host, Workstation, bandwidth, Interoperability, Network administrator, network security.
Internet Security Management Concepts: Overview of Internet Security, Firewalls, Internet Security,
Management Concepts and Information Privacy.
Introduction to Java: The JDK Directory Structure, Java History; Java Features; Structure of Java
Program; Compiling and Interpreting Applications; Java Tokens; Java Character set; Keywords and
Identifiers, Primitive Data types Declarations, Non-Primitive data types; Operators and Expressions;
Implicit and Explicit Type Conversions: The Cast Operator; Control Statements: If- else – if statement and
Switch-case; Loops: While, Do While and For; Object Oriented Concepts: Abstraction and Encapsulation,
Data Hiding; Introduction to Classes and Object; Access Controls; Implementation of Inheritance and
Polymorphism; Methods in Java; Access Modifiers; Constructors and its types.HTML Programming
Basics:HTML page structure, HTML Text, HTML links, HTML document tables, HTML Frames, HTML Images.
Web Publishing and Browsing: Overview, SGML, Web hosting, HTML. CGL, Documents Interchange
Standards, Components of Web Publishing, Document management, Web Page Design Consideration and
Principles, Search and Meta Search Engines, WWW, Browser, HTTP, Publishing Tools.
`,
  },
  {
    id: `s-1025`,
    slug: `maths3`,
    name: `Mathematics-III`,
    code: `BCA-C301`,
    description: `Mathematics-III — BCA syllabus, notes and study material for CSJMU.`,
    courseSlug: `bca`,
    universitySlug: `csjmu`,
    branchSlug: `general`,
    semester: 5,
    syllabus: `COMPLEX VARIABLES:
Complex Number System, Algebra of Complex Numbers, Polar Form, Powers
and Roots, Functions of Complex Variables, Elementary Functions.
VECTOR CALCULUS:
Differentiation of Vectors, Scalar and Vector Fields, Gradient, Directional
Derivatives, Divergence and Curl and their Physical Meaning.
FOURIER SERIES:
Periodic Functions, Fourier series, Fourier Series of Even and Odd Functions, Half
Range Series.
ORDINARY DIFFERENTIAL EQUATIONS OF FIRST ORDER:
Variable- Separable Method, Homogeneous Differential Equations, Exact Differential Equations, Linear Differential Equations,
Bernoulli’s Differential Equations, Differential Equations of First Order and First Degree by Integrating
Factor.
ORDINARY DIFFERENTIAL EQUATIONS OF SECOND ORDER:
Homogenous Differential Equations with Constant Coefficients, Cases of Complex Roots and Repeated
Roots, Differential Operator, Solutions by Methods of Direct Formulae for Particular Integrals, Operator
Method for Finding Particular Integrals, (Direct Formulae).
`,
  },
  {
    id: `s-1026`,
    slug: `python`,
    name: `Python Programming`,
    code: `BCA-C302`,
    description: `Python Programming — BCA syllabus, notes and study material for CSJMU.`,
    courseSlug: `bca`,
    universitySlug: `csjmu`,
    branchSlug: `general`,
    semester: 5,
    syllabus: `Python:
Features of Python, Environmental setup, Installation and tools required for running, Basic Types Variable
types and operators : Assigning values to variables Multiple Assignments Standard Data Types Set Map Single line
comments using Multi-line comments using triple quote, Data Type Conversion Operators, Types of Operator,
Conditional statement, Looping statements with else-Pass-Break continue.
Number and List:
Accessing values in List-Delete, update List element-Basic List operationsIndexing, Slicing and Matrices Built in methods and Functions for List-Accessing values in TupleDelete, List element-Basic Tuple operations Indexing, Slicing and Matrices Built in methods and
Functions for Tuple.
Dictionary and Function:
Accessing values in Dictionary-Updating Dictionary-Deleting Dictionary –elementsProperties of Dictionary keys-Built in Dictionary Functions and Methods Defining Function-Calling function- Pass
by reference vs value Function Arguments-Required arguments-Keyword arguments-Default arguments-Variablelength arguments Recursion.
Modules and Packages:
The Time Module and its functions-Calendar modules and its functionsOther modules and Functions Sum and Difference f time and date Import From import statement
From import statement Executing modules, Local functions-Reload function Packages in Python.
Exception handling:
Exception handling and assertions-Standard Exceptions-Assertions in Python-Handling an
exception-Except clause with no exception-Except Clause with multiple exception-Try-Finally Clause-Argument of
an Exception Raising an Exception.
`,
  },
  {
    id: `s-1027`,
    slug: `se`,
    name: `Software Engineering`,
    code: `BCA-C303`,
    description: `Software Engineering — BCA syllabus, notes and study material for CSJMU.`,
    courseSlug: `bca`,
    universitySlug: `csjmu`,
    branchSlug: `general`,
    semester: 5,
    syllabus: `Software Engineering:
Definition and paradigms, A generic view of software engineering.
Requirements Analysis:
Statement of system scope, isolation of top level processes and entitles and their
allocation to physical elements, refinement and review.
Designing Software Solutions:
Refining the software Specification; Application of fundamental design
concept for data, architectural and procedural designs using software blue print methodology and object
oriented design paradigm; Creating design document.
Software Implementation:
Relationship between design and implementation, Implementation issues and
programming support environment, Coding the procedural design, Good coding style.
Software Maintenance:
Maintenance as part of software evaluation, reasons for maintenance, types of
maintenance (Perceptive, adoptive, corrective), designing for maintainability, techniques for maintenance.
Comprehensive examples using available software platforms/case tools, Configuration Management.
`,
  },
  {
    id: `s-1028`,
    slug: `cg`,
    name: `Computer Graphics & Animation`,
    code: `BCA-C401`,
    description: `Computer Graphics & Animation — BCA syllabus, notes and study material for CSJMU.`,
    courseSlug: `bca`,
    universitySlug: `csjmu`,
    branchSlug: `general`,
    semester: 6,
    syllabus: `Introduction:
Interactive Computer Graphics, Advantages of Interactive Graphics, Representative Uses of
Computer Graphics, Conceptual Framework for Interactive Graphics, Classification of Application
Development of Hardware and software for computer Graphics.
Scan Conversion:
Scan Converting Lines, Scan Converting Circles, Scan Converting Ellipses.
Clipping: point clipping, Cohen-Sutherland line clipping Algorithm, Midpoint Subdivision Algorithm,
polygon clipping (Sutherland-Hodgeman)
Geometrical Transformation:
2D Transformation (translation, rotation, scaling, reflection and shearing),
Homogeneous Coordinates and Matrix Representation of 2D Transformations, Successive and composite
2D Transformations, the Window-to-Viewport Transformations, Introduction to 3D Transformations
Matrix.
Curves & Surfaces:
Polygon Surfaces and polygon meshes, Quadratic and super quadrics surfaces, Spline
curve and representation.
Computer Animation:
Introduction, Application of animation, Morphing, Keyframe system, Motion
specifications in Animation, Types of animation, Sequencing of Animation Design and Fundamental
principles of animation.
`,
  },
  {
    id: `s-1029`,
    slug: `dsml`,
    name: `Data Science & Machine Learning`,
    code: `BCA-C402`,
    description: `Data Science & Machine Learning — BCA syllabus, notes and study material for CSJMU.`,
    courseSlug: `bca`,
    universitySlug: `csjmu`,
    branchSlug: `general`,
    semester: 6,
    syllabus: `Introduction to Data Science:
Evolution of Data Science, Data Science Roles, Stages in a Data
Science Project, Applications of Data Science in various fields, Data Security Issues.
Data Collection and Data Pre-Processing:
Data Collection Strategies, Data Pre-Processing Overview,
Data Cleaning, Data Integration and Transformation, Data Reduction.
Exploratory Data Analytics:
Descriptive Statistics - Mean Standard Deviation, Skewness and Kurtosis –
Box Plots – Pivot Table – Correlation Statistics – ANOVA.
Introduction:
Idea of Machines learning from data, Classification of problem – Regression
and Classification, Supervised and Unsupervised learning.
Neural Networks:
History, Artificial and biological neural networks, Artificial intelligence and neural
networks, Biological neurons, Models of single neurons, Different neural network models.
`,
  },
  {
    id: `s-1030`,
    slug: `ics`,
    name: `Information & Cyber Security`,
    code: `BCA-C403`,
    description: `Information & Cyber Security — BCA syllabus, notes and study material for CSJMU.`,
    courseSlug: `bca`,
    universitySlug: `csjmu`,
    branchSlug: `general`,
    semester: 6,
    syllabus: `Concept of Cyberspace:
Netizens Technology, Law and Society Object, Scope of the Information Technology Act,
2000, Electronic Records and Electronic Commerce. Intrusion Detection System, Intrusion Prevention System, Public
Key Infrastructure.
Internet Security:
Computer Security and Threats, Hacking, Cracking, sneaking, Viruses, Trojan Horses, malicious
code, Worms and Logic Bombs. Network attack and Defense Most Common Attacks, Scripts Kiddies and Packaged
Defense.
Wireless Network Security:
Wireless Network Components, Security issues in Wireless Networks,
Securing a Wireless Network, Mobile Security, The Smartphone Pentest Framework
Cyber Laws and Standards:
ISO 27001, Cyber Law (Information Technology Act, 2000),
International Standards maintained for Cyber Security, Security Audit, Investigation by Investing
Agency, Cyber Security Solutions.
Security Management:
Disaster Recovery, Digital Signature, Ethical Hacking, Penetration Testing, Computer
Forensics.
`,
  },
  {
    id: `s-1031`,
    slug: `it`,
    name: `Internet of Things`,
    code: `BCA-C404`,
    description: `Internet of Things — BCA syllabus, notes and study material for CSJMU.`,
    courseSlug: `bca`,
    universitySlug: `csjmu`,
    branchSlug: `general`,
    semester: 6,
    syllabus: `Internet of Things (IoT):
Vision, Definition, Conceptual Framework, Architectural view, technology
behind IoT, Sources of the IoT, M2M Communication, IoT Examples.
M2M vs IoT An Architectural Overview:
Building architecture, Main design principles and needed
capabilities, An IoT architecture outline, standards considerations. Reference Architecture and
Reference Model of IoT.
Hardware for IoT:
Sensors, Digital sensors, actuators, radio frequency identification (RFID)
technology, wireless sensor networks, participatory sensing technology. Embedded Platforms
for IoT: Embedded computing basics, Overview of IOT supported Hardware platforms.
Network & Communication aspects in IoT:
Wireless Medium access issues, MAC protocol survey,
Survey routing protocols, Sensor deployment & Node discovery.
Domain specific applications of IoT:
Home automation, Industry applications, Surveillance
applications, Other IoT application.
`,
  },
  {
    id: `s-1032`,
    slug: `foc`,
    name: `Fundamentals of Computers`,
    code: `KCA101`,
    description: `Fundamentals of Computers — MCA Semester 1, AKTU.`,
    courseSlug: `mca`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 1,
    syllabus: `Unit I
Introduction to Computer: Definition, Computer Hardware & Computer Software Components: Hardware – Introduction, Input
devices, Output devices, Central Processing Unit, Memory- Primary and Secondary. Software - Introduction, Types – System and
Application.
Computer Languages: Introduction, Concept of Compiler, Interpreter &Assembler
Problem solving concept: Algorithms – Introduction, Definition, Characteristics, Limitations,
Conditions in pseudo-code, Loops in pseudo code.
Unit II
Operating system: Definition, Functions, Types, Classification, Elements of command based and GUI based operating system.
Computer Network: Overview, Types (LAN, WAN and MAN), Data
Communication, topologies.
Unit III
Internet : Overview, Architecture, Functioning, Basic services like WWW, FTP,Telnet, Gopher etc., Search engines, E-mail, Web
Browsers.
Internet of Things (IoT): Definition, Sensors, their types and features, Smart Cities, Industrial
Internet of Things.
Unit IV
Block chain: Introduction, overview, features, limitations and application areas ,fundamentals of Block Chain.
Crypto currencies: Introduction , Applications and use cases
Cloud Computing: It nature and benefits, AWS, Google, Microsoft & IBM Services
Unit V
Emerging Technologies: Introduction, overview, features, limitations and application areas of Augmented Reality, Virtual Reality,
Grid computing, Green computing, Big data analytics, Quantum Computing and Brain Computer
Interface`,
  },
  {
    id: `s-1033`,
    slug: `bc`,
    name: `Business Communication`,
    code: `BMB107`,
    description: `Business Communication — MBA Semester 1, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 1,
    syllabus: `UNIT I:
Introduction: Role of communication – defining and classifying communication – purpose of 
communication – process of communication –characteristics of successful communication – importance 
of communication in management – communication structure in organization – communication in crisis 
barriers to communication. Case Studies 
UNIT II: 
Oral communication: What is oral Communication – principles of successful oral communication –what 
is conversation control – reflection and empathy: two sides of effective oral communication – effective 
listening – non – verbal communication. Written communication: Purpose of writing – clarity in writing – principles of effective writing – approaching the writing process systematically: The 3X3 writing process 
for business communication: Pre writing – Writing – Revising – Specific writing features – coherence – 
electronic writing process. 
UNIT III: 
Business letters and reports: Introduction to business letters – writing routine and persuasive letters – 
positive and negative messages- writing memos – what is a report purpose, kinds and objectives of report 
writing. Presentation skills: What is a presentation – elements of presentation – designing a presentation. 
Advanced visual support for business presentation types of visual aid 
UNITIV: 
Employment communication: Introduction – writing CVs – Group discussions – interview skills Impact 
of Technological Advancement on Business Communication networks – Intranet – Internet – e mails – 
SMS – teleconferencing – video conferencing. Case Studies 
UNITV :  
Group communication: Meetings – Planning meetings – objectives – participants – timing – venue of 
meetings – leading meetings. Media management – the press release press conference – media interviews 
Seminars – workshop – conferences. Business etiquettes. Case Studies`,
  },
    {
    id: `s-1034`,
    slug: `mcob`,
    name: `Management Concept & Organisational Behaviour`,
    code: `BMB101`,
    description: `Management Concept & Organisational Behaviour — MBA Semester 1, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 1,
    syllabus: `UNIT I 
Fundamentals of Management: Management practices from past to present, Different levels of 
management, Managerial skills and Managerial Functions, Case Studies 
Planning- Objective of planning, Planning process, Types of planning, Types of plans, Management by 
Objective, Decision-making- types, process & techniques, Case Studies 
UNIT-II 
Organising & Staffing- Types of organization, Organization structure, delegation and decentralization of 
authority, Meaning of staffing, Recruitment, selection & placement, Training & development.. 
Directing & Controlling- Principle of directing, Essence of coordination, Different control techniques, 
Management by exception. Case Studies. 
UNIT III
Fundamentals of individual behavior: Concepts of OB,OB Model, Components of OB, Personality, 
types of personality, Personal effectiveness, meaning of Attitudes, Types, Components, attitude formation 
and attitude change. Meaning & Type of Group Behaviour, Interpersonal skills, Transactional Analysis, 
Johari Window, Meaning of Perception, process, behavioral applications of perception. Case Studies. 
UNIT IV 
Motivation:, Theory of Motivation: Maslow’s, Herzberg’s, McClelland, Contemporary theories of 
Motivation: Self Determination Theory, Self Efficacy Theory, Vroom’s Expectancy Theory, Equity 
Theory, Reinforcement Theory. 
UNIT V:
Leadership: What is leadership, types of leaders and leadership styles, traits and qualities of effective 
leader, trait theory, LSM – Leadership Situational Model, Team Building, Tuckman Model of Team 
Development. Organizational Change: Meaning of organizational change approaches to managing 
organizational change, creating a culture for change, implementing the change, Kurt Lewin Model of 
change. Case Studies `,
  },
    {
    id: `s-1035`,
    slug: `me`,
    name: `Managerial Economics`,
    code: `BMB102`,
    description: `Managerial Economics — MBA Semester 1, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 1,
    syllabus: `UNIT –I 
Basic Concepts and principles: Definition, Nature and Scope of Economics-Micro Economics and Macro 
Economics, Managerial Economics and its relevance in business decisions. Fundamental Principles of 
Managerial Economics - Incremental Principle, Marginal Principle, Opportunity Cost Principle, 
Discounting Principle, Concept of Time Perspective, Equi-Marginal Principle, Utility Analysis, Cardinal 
Utility and Ordinal Utility. Case Studies 
UNIT –II  
Demand and Supply Analysis: Theory of Demand, Types of Demand. Determinants of demand, Demand 
Function, Demand Schedule, Demand curve, Law of Demand, Exceptions to the law of Demand, Shifts in 
demand curve, Elasticity of Demand and its measurement. Price Elasticity, Income Elasticity, Arc 
Elasticity. Cross Elasticity and Advertising Elasticity. Uses of Elasticity of Demand for managerial decision 
making, Demand forecasting meaning, significance and methods.( numerical Exercises) Case Studies 
Supply Analysis; Law of Supply, Supply Elasticity; Analysis and its uses for managerial decision making. 
Price of a Product under demand and supply forces . Case Studies 
UNIT –III 
Production and cost Analysis: Production concepts & analysis; Production function, Types of production 
function, Laws of production: Law of diminishing returns, Law of returns to scale. 
Cost concept and analysis: Cost, Types of costs, Cost output relationship in the short-run. Cost output 
relationship in the Long-run. Estimation of revenue. Average Revenue, Marginal Revenue . Case Studies 
UNIT –IV 
Market structures: Perfect and Imperfect Market Structures, Perfect Competition, features, determination 
of price under perfect competition. Monopoly: Feature, pricing under monopoly, Price Discrimination. 
Monopolistic: Features, pricing under monopolistic competition, product differentiation. Oligopoly: 
Features, kinked demand curve, cartels, price leadership. Case Studies 
UNIT –V  
National Income; Concepts and various methods of its measurement, Circular flows in 2 sector, 3 sector, 
4 sector economies, Inflation, types and causes, Business Cycle & its phases. `,
  },
    {
    id: `s-1036`,
    slug: `faa`,
    name: `Financial Accounting & Analysis`,
    code: `BMB103`,
    description: `Financial Accounting & Analysis — MBA Semester 1, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 1,
    syllabus: `UNIT I
Meaning and Scope of Accounting: Evolution and Users of Accounting, Basic Accounting terminologies, 
Principles of Accounting, Accounting Concepts & Conventions, Accounting Equation, Deprecation 
Accounting. GAAP(introduction). 
UNIT II 
Mechanics of Accounting: Accounting Standards and IFRS: International Accounting Principles and 
Standards; Matching of Indian Accounting Standards with International Accounting Standards, Double 
entry system of Accounting, journalizing of transactions; Ledger posting and Trial Balance. 
UNIT III
Presentation of Financial Statement: Preparation of final accounts (Profit & Loss Account and Balance 
Sheet) according to companies act 2013 (vertical format), Excel Application to make Balance sheet, Case 
studies and Workshops, Preparation of Cash Flow Statement and its analysis. 
UNIT IV
Analysis of financial statement: Ratio Analysis- Solvency ratios, Profitability ratios, activity ratios, 
liquidity ratios, Market capitalization ratios; leverage Ratio, Detailed Analysis using excel application. 
UNIT V
Financial Statement Analysis and Recent Types of Accounting: Common Size Statement; Comparative 
Balance Sheet and Trend Analysis of manufacturing, Service & banking organizations, Case Study and 
Workshops in analysing Balance sheet. Human Resource Accounting, Forensic Accounting, Accounting 
for corporate social responsibility. `,
  },
    {
    id: `s-1037`,
    slug: `bsa`,
    name: `Business Statistics & Analytics`,
    code: `BMB104`,
    description: `Business Statistics & Analytics — MBA Semester 1, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 1,
    syllabus: `Unit I: Descriptive Statistics 
Meaning, Scope, types, functions and limitations of statistics, Measures of Central tendency – Mean, Median, 
Mode, Quartiles, Measures of Dispersion – Range, Inter quartile range, Mean deviation, Standard deviation, 
Variance, Coefficient of Variation, Skewness and Kurtosis. 
Unit II:Time Series & Index Number 
Time series analysis: Concept, Additive and Multiplicative models, Components of time series, Trend 
analysis: Least Square method - Linear and Non- Linear equations, Applications in business decision
making. 
Index Numbers:- Meaning , Types of index numbers, uses of index numbers, Construction of Price, 
Quantity and Volume indices:- Fixed base and Chain base methods. 
Unit III: Correlation & Regression Analysis 
Correlation Analysis: Rank Method & Karl Pearson's Coefficient of Correlation and Properties of 
Correlation. 
Regression Analysis: Fitting of a Regression Line and Interpretation of Results, Properties of Regression 
Coefficients and Relationship between Regression and Correlation. 
Unit IV: Probability Thoery & Distribution 
Probability: Theory of Probability, Addition and Multiplication Law, Baye’s Theorem 
Probability Theoretical Distributions: Concept and application of Binomial; Poisson and Normal 
distributions. Introduction to bivariate and multivariate data analysis( Cluster and Factor analysis) 
Unit V: Hypothesis Testing& Business Analytics 
Hypothesis Testing: Null and Alternative Hypotheses; Type I and Type II errors; Testing of Hypothesis: 
Large Sample Tests, Small Sample test, (t, F, Z Test and Chi Square Test) 
Concept of Business Analytics- Meaning types and application of Business Analytics, Use of Spread Sheet to anlayze data-Descriptive analytics and Predictive analytics.  `,
  },
    {
    id: `s-1038`,
    slug: `mm`,
    name: `Marketing Management`,
    code: `BMB105`,
    description: `Marketing Management — MBA Semester 1, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 1,
    syllabus: `Unit 1
Introduction: Nature and scope of marketing, Various marketing orientations, Need, Want, Demand, 
Elements of Marketing mix, customer value and the value delivery process. 
Understanding Consumer Behavior: Buying motives, factors influencing buying behavior, buying habits, 
stages in consumer buying decision process, types of consumer buying decisions. 
Unit 2 
Market segmentation, Targeting and Positioning: Meaning, Factors influencing segmentation, Market 
Aggregation, Basis for segmentation, Segmentation of Consumer. Targeting: Meaning, Basis for identifying 
target customers, Target Market Strategies. Positioning: Meaning, product differentiation strategies, tasks 
involved in positioning. Branding: Concept of Branding, Brand Types, Brand equity, Branding Positioning. 
Unit 3 
Product Decisions: Concept, Product Hierarchy, New Product Development, Diffusion process, Product Life 
cycle, Product mix strategies. Packaging / Labeling: Packaging as a marketing tool, requirement of good 
packaging, Role of labeling in packaging. Pricing Decisions: Pricing concepts for establishing value, Pricing 
Strategies-Value based, Cost based, Market based, Competitor based, New product pricing – Price Skimming 
& Penetration pricing 
Unit 4 
Place Decision: Meaning, Purpose, Channel alternatives, Factors affecting channel choice, Channel design 
and Channel management decisions, Channel conflict, Retailing & Types of Retailers. Advertising: 
Advertising Objectives, Advertising Budget, Advertising Copy, AIDA model, Public Relation: Meaning, 
Objectives, Types, and Functions of Public Relations. Sales Promotion: Sales Promotion Mix, Kinds of 
promotion, Tools and Techniques of sales promotion, Push-pull strategies of promotion, Personal Selling: 
Concept, Features, Functions, Steps/process involved in Personal Selling, Direct Marketing: Meaning, 
Features, Functions, Growth and benefits of direct marketing, different forms. 
Unit 5
CRM: Meaning, Relationship Marketing Vs. Relationship Management, Types of Relationship Management, 
Significance of Customer Relationship Management. Global Marketing: current scenario, Global Marketing 
environment, Entry strategies, Global P’s of Marketing., Recent trends and Innovation in Marketing- Green 
Marketing, Agile Marketing`,
  },
    {
    id: `s-1039`,
    slug: `cie`,
    name: `Creativity, Innovation & Entrepreneurship`,
    code: `BMB106`,
    description: `Creativity, Innovation & Entrepreneurship — MBA Semester 1, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 1,
    syllabus: `Unit 1 
Creativity and Innovation: Meaning, the difference between innovation and creativity, Innovation types & 
Platforms, Business Model Innovation, Service Innovation, Design-led innovation, Improvisation, Large firm Vs. 
Start-up innovation, Co-creation and open innovation, developing an innovation strategy, Sources of innovation, 
Innovation Environment, Creative Destruction 
Unit 2
Entrepreneurship: Meaning, definition and concept, Factors affecting entrepreneurship, characteristics and skills 
of an entrepreneur, entrepreneur v/s manager. Types of entrepreneurs, functions of an entrepreneur, entrepreneurial 
decision-process. Social, rural and women Entrepreneurship, Case Studies of Successful Entrepreneurs, 
Entrepreneurial Failure 
Unit 3 
Entrepreneurial Eco-System in India: Overview of MSME, Role of Central Govt & State Govt in supporting SMEs, 
subsidies, grants, export-oriented units - fiscal & tax concessions, other government initiatives and inclusive entrepreneurial 
growth Government e Market place (GeM), Zero effect Zero defect, Lean Manufacturing., Startup India, Stand Up India, 
Make in India, Innovate in India.  
Entrepreneurial Finance: Estimating financial requirements; Sources of finance — banks & financial institutions; 
Bootstrapping, Crowdfunding. Angel investing Venture Capital; IPO 
Role of agencies assisting entrepreneurship: DICs, SSIs, NSICs, NISBUD, Entrepreneurship Development Institute 
of India (EDII). New initiatives taken by the government to promote entrepreneurship. State Startup Ranking by DIPIT, 
State Innovation Ranking by NITI AAYOG (India Innovation Index),  
Unit 4
From Idea to Opportunity: Idea generation- sources and methods, identification and classification of ideas. 
Individual creativity: idea to business opportunity Process of New Venture and its Challenges. 
Developing a Business Plan: Business Planning Process: elements of business planning, preparation of project 
plan, components of an ideal business plan: market plan, financial plan, operational plan, and Feasibility Analysis 
— aspects and methods: Economic analysis, financial analysis, market-, and technological feasibility, Business 
Model Launching a new venture, Growth and Sustainability.`,
  },
    {
    id: `s-1040`,
    slug: `it1`,
    name: `IT Skills-1`,
    code: `BMB151`,
    description: `IT Skills-1 — MBA Semester 1, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 1,
    syllabus: `UNIT I: Conceptual Framework 
Hardware: (a) Input devices - keyboard, printing devices, voice speech devices, scanner, MICR, OMR, 
Bar code reader, digital camera etc. (b) Output devices - Visual Display UNIT, printers, plotters (c) 
Storage Devices – Magnetic storage devices, Optical storage devices, Flash Memory. 
Software: Types of software with examples; Introduction to languages, compiler, interpreter and 
Assembler, Operating System Functions, Types and Classification, Elements of GUI based operating 
system. Network and Internet: Types of computer networks (LAN, WAN and MAN), Netiquettes, Basic 
services over Internet like WWW, FTP, Telnet, Gopher, URL, Domain names, Web Browsers, 
Multimedia and its applications: Concepts of Text, Graphics, Animation, Audio, Images, Video. 
Multimedia Application in Education, Entertainment, Marketing. Names of common multimedia file 
formats, 
UNIT II : Windows and Users Interface (Lab Work)
Windows operating System: Introduction and characteristics, Elements of GUI. Using Mouse, My 
Computer Icon, The Recycle Bin, Status Bar, Start and Menu & Menu-selection, Running an Application, 
Windows Explorer: Viewing of File, Folders and Directories Creating and Renaming of files and folders 
Opening and closing of different Windows, Windows Setting: Control Panels, Wall paper and Screen 
Savers Setting the date and Sound. Concept of menu, Using Help, Using right Button of the Mouse, 
Creating Short cuts, Basics of Window Setup, Notepad, Window Accessories 
UNIT III: Word Processor Software (Lab Work) – 8 hours 
Word processing concepts: Opening, Saving, Closing the file, Opening an existing document, Selecting 
text, Editing text, Finding and replacing text, printing documents, Creating and Printing Merged 
Documents, Character and Paragraph Formatting, Page Design and Layout. Editing and Profiling Tools: 
Checking and correcting spellings. Using Graphics, Tables, Charts, Document Templates and Wizards. 
UNIT IV: Spreadsheet Software (Lab Work) 
Spreadsheet Package Spreadsheet: Concept and Working Interface, Creating, Saving and Editing a 
Workbook, Inserting, Deleting Work Sheets, entering data in a cell / formula Copying and Moving from 
selected cells, handling operators in Formulae. Functions in Spreadsheet: Mathematical, Logical, 
statistical, text, financial, Date and Time functions, Using Function Wizard. Formatting a Worksheet and 
Cell: changing data alignment, changing date, number, character or currency format, changing font, adding 
borders and colors. Printing worksheets, Charts and Graphs – Creating, Previewing, and Modifying 
Charts. Integrating word processor, spread sheets, web pages.
UNIT V: Presentation Software (lab Work)
Interface of the Presentation Package: Creating, Opening and Saving Presentations. Professional Look of 
the Presentation: Working in different Design & Views, Working with Slides. Formatting and Editing: 
Text, Image and Paragraph formatting, Checking Spelling and Correcting Typing Mistakes, Making 
Notes Pages and Handouts, Drawing and Working with Objects, Adding Clip Art and other pictures, 
Designing Slide Shows, Running and Controlling a Slide Show, Printing Presentations.
`,
    },
    {
    id: `s-1041`,
    slug: `mp1`,
    name: `Mini Project-1`,
    code: `BMB152`,
    description: `Mini Project-1 — MBA Semester 1, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 1,
    syllabus: `Project/Practical work / Seminar 
In the first semester, the students (individuals or teams of 2-3)  are required to develop an 
innovative idea for a product or servic and a project report to be prepared on that idea under 
the guidance of a faculty member. The report will be prepared individually and this report 
will consist of importance and relevance of the innovative idea, its feasibilities and detailed 
descriptions. The report will be evaluated by one external examiner appointed by the 
university. Student has to present his output in a seminar. `,
  },
  {
    id: `s-1042`,
    slug: `be`,
    name: `Business Environment & Legal Aspects of Business`,
    code: `BMB201`,
    description: `Business Environment & Legal Aspects of Business — MBA Semester 2, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 2,
    syllabus: `Unit I 
Introduction to Micro Environment – 
Meaning of Business & Business Environment,, Types of Business Organizations , SWOT analysis , 
Types of Environment-Internal to the Enterprise (Value System, Management Structure and Nature, 
Human Resource, Company Image and Brand Value, Physical Assets, Facilities, Research & 
Development, Intangibles, Competitive Advantage), External to the Enterprise , Micro- Suppliers, 
Customers, Market Intermediaries; Macro- Demography, Natural, Legal & Political, Technological,) 
Michael Porter’s Five Forces Analysis, Competitive Strategies 
Unit II 
Macro Factors: Economic, Socio-Cultural, Competitive & International Environment – 
Economy, Competition, Socio-cultural and International); Business Environment with reference to 
Global Integration; Comparative Analysis of Business Environment: India and Other Countries , 
Factors affecting international business environment, Business Policy : LPG model & International 
forces in business. 
UNIT- III 
Law of Contract: Definition, essentials and types of contracts, offer definition and essentials, 
acceptance – definition and essentials, consideration – definition and essentials, exceptions to the rule, 
no consideration, no contract, doctrine of privity of contract, capacity of parties, free consent, quasi 
contract, legality of object, performance of contract, termination of contract, remedies for breach of 
contract. 
Sale of Goods Act: Essentials, sale v/s agreement to sell. Condition v/s warranties, rights of unpaid 
seller.
UNIT IV  
Companies Act Definition, characteristics and kinds of companies, steps in formation of company. 
Memorandum of Association, Articles of Association, prospectus. Directors: appointment, power, 
duties and liabilities, meeting and resolutions: types of meetings. Auditor: appointment, rights and 
liabilities, modes of winding up of a company. 
UNITV 
Consumer Protection Act: Definitions - Aims and objectives, Consumer protection councils, 
Redressal agencies and penalties for violation. 
The Information Technology Act: Definition, Digital Signature, Electronic Governance, 
Attribution, Acknowledgment and Dispatch of Electronic Records, Sense Electronic Records and 
Sense Digital Signatures, Regulation of Certifying Authorities, Digital Signature Certificates, Duties 
of Subscribers, Penalties and Offences.`,
  },
  {
    id: `s-1043`,
    slug: `brm`,
    name: `Business Research Methods`,
    code: `BMB203`,
    description: `Business Research Methods — MBA Semester 2, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 2,
    syllabus: `Unit 1  
Research: – Definition, Meaning, Importance types and Qualities of Research; Research applications in 
functional areas of Business, Emerging trends in Business research. 
Research & the Scientific Method: Characteristics of scientific method. Steps in Research Process 
Concept of Scientific Enquiry: – Formulation of Research Problem – Management Question – research 
Question – Investigation Question 
Research Proposal – Elements of a Research Proposal, Drafting a Research Proposal, evaluating a 
research proposal. 
Unit 2  
Research design: Concept, Features of a good research design, Use of a good research design; 
Qualitative and Quantitative research approaches, Comparison – Pros and Cons of both approaches. 
Exploratory Research Design: Concept, Types: Qualitative techniques – Projective Techniques, Depth 
Interview, Experience Survey, Focus Groups, Observation. 
Descriptive Research Designs: Concept, types and uses. Concept of Cross-sectional and Longitudinal 
Research 
Experimental Design: Concept of Cause, Causal relationships, Concept of Independent & Dependent 
variables, concomitant variable, extraneous variable, Treatment, Control group. 
Unit 3  
Scaling & measurement techniques: Concept of Measurement: Need of Measurement; Problems in 
measurement in management research – Validity and Reliability. Levels of measurement – Nominal, 
Ordinal, Interval, Ratio. Attitude Scaling Techniques: Concept of Scale – Rating Scales viz. Likert Scales, 
Semantic Differential Scales, Constant Sum Scales, Graphic Rating Scales – Ranking Scales – Paired 
comparison & Forced Ranking – Concept and Application. 
Unit 4  
Sampling:Basic Concepts: Defining the Universe, Concepts of Statistical Population, Sample, 
Characteristics of a good sample. Sampling Frame (practical approach for determining the sample frame 
expected), Sampling errors, Non Sampling errors, Methods to reduce the errors, Sample Size constraints, 
Non Response. 
Probability Sample: Simple Random Sample, Systematic Sample, Stratified Random Sample, Area 
Sampling & Cluster Sampling.
Non Probability Sample: Judgment Sampling, Convenience Sampling, Purposive Sampling, Quota 
Sampling & Snowballing Sampling methods. Determining size of the sample – Practical considerations 
in sampling and sample size, sample size determination. 
Unit 5 
Data Analysis: Editing, Coding, Tabular representation of data, frequency tables, Construction of 
frequency distributions, Graphical Representation of Data: Appropriate Usage of Bar charts, Pie charts, 
Histogram. 
Hypothesis: Qualities of a good Hypothesis –Framing Null Hypothesis & Alternative Hypothesis. Concept 
of Hypothesis Testing – Logic & Importance. Analysis of Variance: One way and two way Classifications. 
Mechanism of Report Writing- Report Preparation: Types, Report Structure: preliminary section, main 
report, interpretation of results, suggestions and recommendations, limitations of the study, Report 
formulation.
`,
  },
  {
    id: `s-1044`,
    slug: `cma`,
    name: `Cost & Management Accounting`,
    code: `BMB207`,
    description: `Cost & Management Accounting — MBA Semester 2, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 2,
    syllabus: `UNIT - I 
Meaning, nature and scope of Management Accounting; Difference between management 
accounting and financial accounting,Cost concepts: , Cost Unit, Cost Control  and Cost Reduction; 
Components of total Cost, Cost Sheet, Classification of costs, Types and methods of costing, 
Inventory Management, Labour Cost, Overheads, Activity based costing. 
UNIT - II 
Cost-Volume-Profit Analysis: Marginal cost, Contribution per unit and Total contribution. Profit- 
Volume Ratio, Break-even Point : Margin of safety. Decision Making such as : Key Factor, Pricing, 
Product Profitability, Dropping a product line, Make or Buy, Export Order, Sell or Process Further, 
Shut down vs. Continue  operations. 
UNIT - III
Budgets and Budgetary Control: Meaning, Types of Budgets, Steps in Budgetary Control, Fixed 
and Flexible Budgeting, Sales budget, Production Budget, Raw material consumption Budget, Raw 
Material Purchase Budget, Overhead Budgets, Cash Budget, and Master Budget. Zero based 
budgeting.  
UNIT –IV  
Standard Costing and Variance Analysis: Meaning of Standard Cost and Standard Costing, 
Advantages, Limitations and Applications; Material Variance, Overhead Variance, Sales Variance, 
Sales Margin Variance.
UNIT –V  
Process costing, concepts of normal loss, abnormal loss, abnormal effectiveness. Preparation of 
process accounts, normal loss account, abnormal loss account, abnormal gain account. Process 
costing with opening and closing WIP; equivalent units (using FIFO) and Cost allocation. Joint and 
by products : Allocation of joint costs based on Physical units method, Relative market value 
methods (Sales value at split off method and Net realizable value method). Introduction to the 
concept of Target Costing, Life Cycle Costing, Quality Costing, and Activity based Costing. `,
  },
  {
    id: `s-1045`,
    slug: `hrm`,
    name: `Human Resource Management`,
    code: `BMB202`,
    description: `Human Resource Management — MBA Semester 2, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 2,
    syllabus: `UNIT I: 
Essentials of HRM: Functions of HRM, HRM vs.HRD, Strategic HRM: Meaning and Roles in 
Strategy formulation and implementation, Barriers to strategic HRM, Linking HR strategy with 
business strategy, Roles of HR Manager, roles of HR in merger and acquisitions, Technology & HR 
and changing roles of HR due to technology, HRM linkage with TQM & productivity. Case Studies  
UNIT II:  
Human Resource Planning and Employee Hiring : Meaning of job Analysis, job design, Human 
Resource Planning, methods demand forecasting for manpower planning, factors influencing HRP, 
Employee hiring- methods of Recruitment, Employee selection, process of employee selection, recent 
trends in recruitment. Case Studies 
UNIT III:  
Employee Training & Development: Meaning importance of Training, types and methods and types 
of training, career planning, promotion, transfer, demotion and separation, Performance Appraisal: 
Meaning and types of appraisal, Job Evaluation: Meaning and methods of job evaluation. Case Studies 
UNIT IV:  
Compensation Management and Employee Relations: Introduction to compensation management, 
Components and structure of employee compensation, Factors affecting employee compensation, 
Employee incentive schemes, and recent trends in compensations management, Meaning of employee 
relation and industrial relations. Case Studies 
UNIT V:  
Employee Safety/ Health and International Human Resource Management: Needs and leagal 
provision of employee health, measures to promote employee health , purpose of employee safety, 
accidents: causes & prevention, effective safety management ,& legal provisos. basic principles 
governing International Human Resource Case Studies`,
  },
  {
    id: `s-1046`,
    slug: `mis`,
    name: `Management Information System`,
    code: `BMB208`,
    description: `Management Information System — MBA Semester 2, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 2,
    syllabus: `UNIT -1  
Management Information Systems - Need, Purpose and Objectives, Contemporary Approaches to 
MIS, Information as a strategic resource, Use of information for competitive advantage, MIS as an 
instrument for the organizational change. Information Technology – Characteristics and emerging 
trends, IT Capabilities and their organizational impact, IT enabled services. Transaction Processing 
System: Characteristics and its importance 
UNIT -II  
Information, Management and Decision Making - Attributes of information and its relevance to 
Decision Making, Types of information. Models of Decision Making - Classical, Administrative and 
Herbert Simon's Models. Management Support Systems: Decision Support Systems, Group Decision 
Support Systems, and Executive Information Systems. 
UNIT -III  
Managing Data Resources- The need for data management, Challenges of data management, Data 
independence, Data redundancy, Data consistency, Data administration. Database Management 
System – Concepts and types of DBMS, Fields, Records, Table, View, Reports and Queries. Data 
warehouse and Data mining – Characteristics and uses of Data warehouse, Techniques of Data 
Mining, Business Intelligence 
Database Management System (Lab): Creation of Table, View and Reports. Basics of SQL and 
running queries`,
  },
  {
    id: `s-1047`,
    slug: `qtm`,
    name: `Quantitative Techniques for Management`,
    code: `BMB206`,
    description: `Quantitative Techniques for Management — MBA Semester 2, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 2,
    syllabus: `Unit I: Operations Research & Decision Making Environments 
Operations Research:- Uses, Scope and Applications of Operation Research in managerial decision- 
making .Decision-making environments:- Decision-making under certainty, uncertainty and risk 
situations; Decision tree approach and its applications. 
Unit II: Linear Programming Problem  
Linear programming: Mathematical formulations of LP Models for product-mix problems; graphical and 
simplex method of solving LP problems. 
Unit III: Transportation Problem & Assignment model  
Transportation problem: Various methods of finding Initial basic feasible solution-North West Corner 
Method, Least Cost Method & VAM Method and optimal solution-Stepping Stone & MODI Method, 
Maximization Transportation Problem 
Assignment model: Hungarian Algorithm and its applications, Maximization Assignment Problem.  
Unit IV: Sequencing & Queuing Theory 
Sequencing Problem: Johnsons Algorithm for n Jobs and Two machines, n Jobs and Three Machines, 
Two jobs and m - Machines Problems. 
Queuing Theory: Characteristics of M/M/I Queue model; Application of Poisson and Exponential 
distribution in estimating arrival rate and service rate; Applications of Queue model for better service to 
the customers. 
Unit V: Project Management 
Project Management: Rules for drawing the network diagram, Applications of CPM and PERT 
techniques in Project planning and control; GANTT Char`,
  },
    {
    id: `s-1048`,
    slug: `om`,
    name: `Operation Management`,
    code: `BMB205`,
    description: `Operation Management — MBA Semester 2, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 2,
    syllabus: `UNIT–I: Production Concepts: 
Introduction, meaning, nature and scope of production and operations management. Difference 
between production and operations management. Productivity, factors affecting productivity and 
productivity measurement. Work study— Method study and work measurement. Production 
Technology – Types of manufacturing processes. Plant location and types of plant layout. 
UNIT –II: Operations Concepts: 
Services scenario in India, difference between product and service, characteristics of services, 
classification of services, product and service design, factors affecting service design, service 
designing process, service blueprinting, service capacity planning. Dimensions of quality in services, 
understanding service quality gap, measuring service quality using SERVQUAL model. Case Studies 
UNIT-III: Material and Inventory Management: 
Types of production planning, process of production planning and control (PPC) – routing, scheduling 
and loading. Master production schedule, aggregate production planning. Types of inventories, 
inventory control techniques- EOQ, ABC, VED, FSN, HML and SDE (Simple numerical problems 
on Inventory control techniques). Just-in-time (JIT) and KANBAN. Case Studies 
UNIT-IV: Supply Chain Management: 
Overview of supply chain management, conceptual model of SCM, supply chain drivers, measuring 
supply chain performance, core and reverse supply chain, global supply chain, inbound and outbound 
logistics, Bullwhip effect in SCM, push and pull systems, lean manufacturing, agile manufacturing, 
role of IT in SCM. Demand forecasting in supply chain— 
Simple moving average method, weighted moving average method, linear regression and exponential 
smoothing method. Case Studies
UNIT-V: Productivity and Quality: 
TQM, Deming’s 14 principles, Juran’s quality triology, PDCA cycle, KAIZEN, quality circles, 7QC 
tools and its 7 new management tools, ISO 9000-2000 clauses, six sigma, Total Productive 
Maintenance (TPM), 5S. Case Studies
`,
  },
    {
    id: `s-1049`,
    slug: `fm`,
    name: `Financial Management & Corporate Finance`,
    code: `BMB204`,
    description: `Financial Management & Corporate Finance — MBA Semester 2, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 2,
    syllabus: `UNIT I 
Introduction to Finance & Corporate Finance: Corporate Finance & its scope, Corporate Governance 
and Agency Problem, Finance & Corporate Strategy,Time Value of Money, Risk and Return. Types of 
Financial Markets: Capital Market, Factors affecting Financial Markets, Linkages between Economy & 
Financial Markets, Integration of Indian Financial Markets with Global Financial Markets. 
UNIT II  
Investment and Financing Decision:  Capital Budgeting, Nature of investment decisions, Risk 
Analysis in investment decisions, Concept of Opportunity Cost, Cost of Debenture, Preference and 
Equity capital, Composite Cost of Capital, Cash Flows as Profit and components of Cash Flows, 
Capital Budgeting Decisions, Calculation of NPV and IRR, Excel Application in Analysing Projects. 
UNIT III 
Financial Decision: Capital Structure, Relevance and Irrelevancy theory, Leverage analysis – 
financial, operating and combined leverage along with its implications, EBIT EPS Analysis, Point of 
Indifference. 
UNIT IV  
Dividend Relevance: Factors Affecting Dividend Policy, Forms of Dividends, Types of Dividend 
Policies, Dividend Models: Walter and Gordon Model, Miller- Modigliani (MM) Hypothesis.Theories 
of Dividend Payout (Dividend Irreverence Theory, Bird- in hand Theory, Tax Preference Theory. 
UNIT V  
Working Capital Management: Concepts & Principles of Working Capital, Need for working 
capital, Classification and importance of working capital, Working capital cycle, Inventory 
Management, Cash Management, Accounts receivable Management and Factoring, Credit policy, 
Financing working capital. `,
  },
    {
    id: `s-1050`,
    slug: `it2`,
    name: `IT Skills-2`,
    code: `BMB251`,
    description: `IT Skills-2 — MBA Semester 2, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 2,
    syllabus: `Unit I ( Lab work on spreadsheet ) 
Pivot Table: Developing Pivot Table, Analyzing data using goal seek and solver, Scenarios Create 
named scenarios. Show, edit, delete scenarios, Creating a scenario summary report. Validating and 
Auditing: Set, edit validation criteria for data entry in a cell range like: whole number, decimal, list, 
date, time, Trace precedent, dependent cells. Identify cells with missing dependents. Creating 
applications in Spreadsheet and Macros. 
Unit II ( Lab work on spreadsheet) 
Creating and formatting Charts: Understanding chart types, column chart, bar chart, line chart, pie 
chart, XY Scatter chart , Area chart, surface chart, bubble chart. Create a combined chart like: column 
and line, column and area. Change the chart type for a defined data series, Add, delete a data series in 
a chart, Re-position chart title, legend, data labels. Change scale of value axis: minimum, maximum 
number to display, major interval. Change display units on value axis without changing data source: 
hundreds, thousands, millions. Format columns, bars, pie slices, plot area, chart area to display an 
image. `,
  },
    {
    id: `s-1051`,
    slug: `mp2`,
    name: `Mini Project`,
    code: `BMB252`,
    description: `Mini Project — MBA Semester 2, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 2,
    syllabus: `In second semester, the students are required to validate the idea which was screened in the previous 
semester & presented. The validation report shall be a detailed analysis considering the market 
feasibility, select a Lean Canvas for making your assumptions , test yours assumptions around the 
identified market, the future scope of the selected product or service, test your value proposition,  and 
prepare a project report. Preference should be given to the application of emerging technologies in the 
selected industry. It may consist of Fintech, Blockchain, Financial Services, Data Science, Social 
Entrepreneurship or any other suitable area of interest. The report will be prepared individually. The 
report will be evaluated by one external examiner appointed by university. 
Feasibility analysis of the idea ( market, technical and financial analysis).`,
  },
  {
    id: `s-1052`,
    slug: `sm`,
    name: `Strategic Management`,
    code: `BMB301`,
    description: `Strategic Management — MBA Semester 3, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 3,
    specialization: `common`,
    syllabus: `Unit 1 
Introduction: meaning nature, scope, and importance of strategy; Model of strategic 
management, Strategic Decision-Making Process. 
Corporate Governance: Composition of the board, Role and Responsibilities of the board of 
directors, Trends in corporate governance, Corporate Social Responsibility. Case Studies and 
Latest Updates. 
Unit 2 
Environmental Scanning: Understanding the Macro Environment: PESTEL Analysis, 
Industrial Organization (IO) & the Structure Conduct Performance (SCP) approach, Porter’s 
Five Forces Model, Understanding the Micro Environment: Resource Based View (RBV) 
Analysis, VRIO Framework, Using resources to gain Competitive advantage & its 
sustainability, Value Chain Analysis. Case Studies and Latest Updates. 
Unit 3  
Strategy Formulation: Situational Analysis using SWOT approach  
Business Strategies: Competitive Strategy: - Cost Leadership, Differentiation & Focus,  
Cooperative Strategy: - Collusion & Strategic Alliances Corporate Strategies: Directional 
Strategy: Growth strategies, Stability Strategies & Retrenchment Strategies. Corporate 
Parenting, Functional Strategies: Marketing, Financial, R&D, Operations, Purchasing, 
Logistics, HRM & IT. The sourcing decision: Outsourcing & offshoring. Case Studies and 
Latest Updates.
Unit 4  
Strategy Choice and Analysis: Scenario Analysis Process, Tools & Techniques of strategic 
Analysis: BCG Matrix, Ansoff Grid, GE Nine Cell Planning Grid, McKinsey’s 7’S framework. 
Strategy implementation: Developing Programs, Budget and Procedures, Stages of 
Corporate Development, Organizational Life cycle, Organizational Structures: Matrix, 
Network & Modular/Cellular; Reengineering and Strategy implementation, Leadership and 
corporate culture, Case Studies and Latest Updates. 
Unit 5  
Strategy Evaluation & Control: Evaluation & Control process, Measuring performance: 
types of controls, activity based costing, enterprise risk management, primary measures of 
corporate performance, balance scorecard approach to measure key Performance, 
responsibility centers, Benchmarking, Problems in measuring Performance & Guidelines for 
proper control. Strategic Audit of a Corporation. Case Studies and Latest Updates. 
`,
  },
    {
    id: `s-1053`,
    slug: `cbnm`,
    name: `Consumer Behaviour & Neuro Marketing`,
    code: `BMBMK01`,
    description: `Consumer Behaviour & Neuro Marketing — MBA Semester 3, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 3,
      specialization: `Marketing`,
    syllabus: `Unit 1  
Introduction: Consumer Behavior & the Marketing Mix, Consumer Goals, Consumer 
Decision Making Process: Need Recognition, Search for information, Pre purchase evaluation 
of alternatives, Purchase, Consumption, Post consumption Evaluation & Divestment, 
Interruption in buying process & their effects, Customer involvement, Consumer Journey 
through the World of Technology. 
Unit 2  
Psychological factors: Perception, learning, motivation, attitude formation and change, 
personality, and lifestyle. Personal factors: Demographics, life cycle, occupation, and income. 
Social factors: Family, reference groups, roles and status. Cultural factors: Culture, sub
culture, cross-cultural consumer behaviour. Consumer involvement and buying decision 
process (complex, habitual, variety-seeking). Organizational buying vs individual buying 
behaviour. Case Studies and Industry Applications. 
Unit 3 
Consumer Behaviour in Digital Age Online and mobile consumer behaviour, Influence of 
social media, peer reviews, and digital communities. Role of AI, machine learning, and big 
data in understanding consumers. Behavioural targeting and personalization strategies. 
Consumer privacy and data protection in digital marketing. Emerging trends in digital 
consumption patterns. Case Discussions and Industry Practices. 
Unit 4 
Introduction to Neuromarketing: Meaning and scope of neuromarketing. Principles of 
neuroscience relevant to marketing: Brain functions, emotions, and decision-making. 
Neuromarketing techniques: Eye-tracking, fMRI, EEG, biometrics, facial coding. Applications of 
neuromarketing in advertising, branding, packaging, and pricing strategies. Benefits and limitations 
of neuromarketing. Ethical issues, criticisms, and regulatory frameworks related to neuromarketing. 
Case Studies. 
Unit 5
Consumer Behaviour and Neuromarketing Strategies: Translating consumer insights into 
marketing strategy. Designing customer experiences using neuromarketing findings. Sensory 
marketing and subconscious consumer triggers. Role of neuromarketing in retail, FMCG, luxury 
brands, and service sectors. Developing integrated consumer behaviour and neuromarketing 
strategies for real-world challenges. Case Study.`,
  },
   {
    id: `s-1054`,
    slug: `mwa`,
    name: `Marketing & Web Analytics`,
    code: `BMBMK02`,
    description: `Marketing & Web Analytics — MBA Semester 3, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 3,
    specialization: `Marketing`,
    syllabus: `Unit 1: (4 Hours) 
Introduction to Marketing Analytics: Meaning, Characteristics, Advantages & Disadvantages of 
Marketing Analytics, Market Data Sources: Primary & Secondary Market Sizing: Stakeholders, 
Applications, Top-down & Bottom-up Approaches, PESTLE Analysis & Porter’s Five Forces 
Model for market evaluation 
Unit 2: (8 Hours) 
Pricing Analytics: Pricing Policy & Objectives, Demand Estimation: Price Elasticity, Linear & 
Power Demand Curves, Optimizing Pricing and Subjective Demand Curves, Pricing Multiple 
Products ,Price Bundling: Pure vs. Mixed Bundling Nonlinear Pricing & Profit Maximization 
Strategies, Revenue Management: Markdown Pricing & Uncertainty Handling, Price Skimming 
and Sales Promotions 
Unit 3: (7 Hours) 
Sales Forecasting & Customer Analytics: Linear & Multiple Regression for Forecasting, 
Seasonality & Special Events Modeling, Ratio to Moving Average Methods-Curve Forecasting for 
New Products, Customer Lifetime Value (CLV): Concept, Estimation & Business Implication, 
Market Segmentation: STP Framework, Clustering for Segment Derivation, Describing Market 
Segments 
Unit 4: (8 Hours)  
Retailing, Advertising & Web Analytics Retail Analytics: Market Basket Analysis (2-way & 3
way lift), RFM Analysis, Retail Space & Sales Resource Allocation. Advertising Analytics: 
Advertising Effectiveness, PPC, Online Ads.  
Introduction to Web Analytics: Key Terms, Process, Offsite vs. Onsite Web Analytics, Web 
Analytics Tools & Metrics: Hits, Page Views, Bounce Rate, Traffic Source  
Google Analytics Overview KPIs: Need, Characteristics, Perspective & Usage Custom Campaigns 
& Content Reports 
Unit 5: (9 Hours)  
Social Media, Web Analytics Tools & Qualitative Analysis: Facebook Analytics: Demographics, 
Engagement & Post Performance, Social Campaign Analysis: Goals & Outcomes Analytics for Instagram, Twitter, LinkedIn, YouTube Organic vs. Paid Traffic, Benchmarking 
Web Analytics Tools: A/B Testing, Online Surveys, Web Crawling & Indexing, NLP Techniques 
for Micro-text Analysis Google Website Optimizer: Working & Implementation.  
Qualitative Techniques: Heuristic Evaluation, Site Visits, Surveys (Post-visit & Online)Web 
Analytics 2.0 vs. 1.0,Competitive Intelligence, Website Traffic Trends & Overlap.` ,
  },
  {
    id: `s-1055`,
    slug: `sdm`,
    name: `Sales & Distribution Management`,
    code: `BMBMK03`,
    description: `Sales & Distribution Management — MBA Semester 3, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 3,
    specialization: `Marketing`,
    syllabus: `Unit1: (4 Hours) 
Introduction to Sales: Role of selling in marketing, Personal selling, Types of sales personnel, 
Characteristics of a successful salesman, Process of effective selling. 
UNIT 2: (8 Hours)  
Sales Force Management: Types of sales organizations and their structure, Recruitment, 
Selection, Training and Development. Sales force motivation & compensation, designing incentives 
and contests, Sales forecasting, Sales budget, Sales quota, Sales territory, Building sales reporting 
mechanism and monitoring, Sales force productivity, Sales force appraisal. 
Unit 3: (8 Hours) 
Sales Planning and Control: Sales Forecasting Methods and Techniques, Sales Budgeting and 
Resource Allocation, Sales Strategy and Sales Planning Process, Sales Call Planning and Time 
Management, Role of Technology in Sales Planning (CRM, Sales force Automation),Ethics in 
Selling and Legal Aspects 
Unit 4: (10 Hours) 
Distribution Channel Management: Types of Marketing Channels, Channel Design and 
Selection, Channel Conflict and its Management, Channel Partner Selection, Motivation, and 
Performance Appraisal, Retailing and Wholesaling: Trends and Practices. Managing Vertical and 
Horizontal Marketing Systems 
Unit 5: (10 Hours)  
Logistics and Emerging Trends in Distribution: Introduction to Logistics and Supply Chain 
Management, Order Processing, Warehousing, Inventory Management, Transportation and 
Distribution Cost Control ,E-commerce and Omnichannel Distribution, Role of IT in Distribution 
(ERP, SCM Tools), Emerging Trends: Green Logistics, Reverse Logistics, Direct-to-Consumer 
(D2C) Channels, Role of IT in retailing: ERP, CRM, analytics-retailing and Omni channel  
strategies, Mobile retailing, Social commerce, AI/ML in retail, Ethical and legal issues in retail, 
Sustainability in retailing, Future trends`,
  },
  {
    id: `s-1056`,
    slug: `tam`,
    name: `Talent Acquisition Management`,
    code: `BMBHR01`,
    description: `Talent Acquisition Management — MBA Semester 3, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 3,
    specialization: `HR`,
    syllabus: `Unit 1: Introduction to Talent Management        
Concept and evolution of Talent Management; Talent Value Chain: Acquisition, Retention, & 
Development; Talent Management Models (Zinger Model, Six Principles of TM); Talent Practices: 
India, USA, Europe, other Asian countries; Strategic relevance of talent for competitive advantage; 
Cases and latest updates. 
Unit 2: Talent Acquisition & Retention Strategies       
Talent Acquisition lifecycle: Job analysis, sourcing, assessment; Use of Psychometric tools in 
recruitment;  Best practices in recruitment of various MNCs; Employer Branding and Employee 
Value Proposition (EVP); Employee Engagement & Retention Strategies; Cases and EVP design 
exercise. 
Unit 3: Talent Development for Global Leadership      
Talent development methods: Coaching, Mentoring, Training; Global Leadership Competencies 
(GLOBE study, case analysis); Integrated Talent Management Process Succession Planning and 
Career Development; Use of Meta-Analysis & Talent Analytics; Cases on succession planning; 
Exercises on leadership assessment. 
Unit 4: Performance Management & Rewards        
Performance Appraisal Systems (MBO, 360-degree feedback); Compensation and Reward 
Strategies; Motivating Star Employees and High Potentials; Cultural aspects in talent mobility; 
Coaching with Compassion (Daniel Goleman framework); Cases on the evaluation of reward 
policies with latest updates; Exercises on performance reviews and rewards mapping. 
Unit 5: Strategic Talent Management & Contemporary Issues     
Strategic Workforce Planning; Talent Success Drivers & Talent-Powered Organizations; Big Data, 
AI & Talent Analytics;  Talent Management Challenges; Ethical considerations & Future of Work 
(employment-to-consultation shifts); Cases and latest updates; Exercises on the talent strategy 
design using analytics.`,
  },
  {
    id: `s-1057`,
    slug: `erl`,
    name: `Employee Relations & Labour Laws`,
    code: `BMBHR02`,
    description: `Employee Relations & Labour Laws — MBA Semester 3, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 3,
    specialization: `HR`,
    syllabus: `Unit 1: (9 Hours) 
Employee Relations Management (ERM) & Industrial Relation: Introduction and Importance of 
Employee Relations, Employee Relations Management Tools, Approaches to Understand IR, the 
Trends of Industrial Relations in India, Factors Leading the Present State of Industrial Relations, 
Impact of Globalization on the Liberalized Economy   Emerging challenges of IR in India, Linking 
Industrial Relations with economic growth of a country, Trade Unionism: Development of trade 
unionism, functions, type and structure of trade union, Why Employees Join Trade Unions , Trade 
Unions in the Eyes of the Management, Politics and Trade Unions, Outside Leadership of Trade 
Unions problems & suggestive remedial measures of trade unions, The Trade Unions Act 1926 & 
Amendment Bill, 2019 : Objective, Recognition and registration, Industrial Democracy & 
Participative Management. Case Studies 
Unit2: (8 Hours) 
Collective Bargaining: Significance, types & procedure of Collective bargaining Discipline: The 
Industrial Employment (Standing Orders) Act 1961, Misconduct, Disciplinary Action, Types of 
Punishments, Code of Discipline, Domestic Enquiry, Grievance Handling in IR: Grievance 
Settlement Procedure, Industrial Disputes, Preventive & Settlement Machinery in India. Employee 
Participation and Empowerment: Objectives, Employee Participation, Advantages of 
Employee Participation, Employee Participation in India, Methods of Participation, 
Employee Empowerment. Case Studies 
Unit 3 (8 Hours) 
The Factories Act, 1948 & The Factories (Amendment) Bill, 2016 & The shop & Establishment 
Act 1948, The Payment of Wages Act, 1936 and amendment in 2020, The Workmen’s 
compensation Act, 1923, The Industrial Disputes Act, 1947  
Unit 4 (8 Hours) 
The Payment of Minimum wages act 1948 & its revisions 2019, 2020 & 2021, The Contract Labor 
(Abolition & regulative) act The ESI Act, 1948 and latest amendments, Child Labour (Prohibition 
& Regulation) Act, 1986 and its latest amendment,   
Unit 5 (7 Hours) 
The payment of Bonus Act, 1965 and amendments,   The payment of Gratuity Cat, 1972 and its 
amendment 2018 ,The Maternity Benefit Act, 1961 and amendments,  Employee’s Provident fund 
& Miscellaneous Provisions Act, 1952 .  `,
  },
  {
    id: `s-1058`,
    slug: `prm`,
    name: `Performance and Reward Management `,
    code: `BMBHR03`,
    description: `Performance and Reward Management  — MBA Semester 3, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 3,
    specialization: `HR`,
    syllabus: `Unit1: (7 hours) 
Introduction to Performance Management System :Meaning, Uses and purpose of Performance 
Management, Performance Management vs Performance Appraisal, Performance management and 
its challenges in current scenario, Performance management as a System and Process, Establishing 
Performance Criterion of developing an Effective Appraisal System, Criteria (KRA, KSA VS KPI). 
Case Studies 
Unit2: (9 hours)  
Managing Performance: Methods of managing performance of all the levels of Management,  360 
degree Performance Appraisal, MBO and Performance analysis for Individual and organizational 
development. Case Studies 
Unit3: (7 hours)  
Contemporary Issues: Potential appraisal, Competency mapping & its linkage with Career 
Development and Succession planning, Balance score card: Introduction and Applications, 
Advantages and limitations. Case Studies 
Unit 4: (9 hours)  
Reward System: Compensation- Definition, Function, and significance. Job evaluation: Methods 
of job evaluation, Inputs to job evaluation, Practical implication for technical/non-technical and 
executive/managerial positions and significance of wage differentials. Case Studies
Unit 5: (8 Hours)  
Compensation: Method of pay and Allowances, Pay structure: Basic Pay, DA, HRA, Gross Pay, 
Take home pay etc. Incentive schemes; Methods of payment: Time and piece rate. Fringe 
benefits & other allowances: Overtime, City compensatory, Travelling etc. Regulatory 
compliance: Introductions, Wage and Pay commissions, Overview of minimum wages Act- 1948 
and Equal Remuneration Act-1976. Profit Sharing options; Case Studies. `,
  },
  {
    id: `s-1059`,
    slug: `ipm`,
    name: `Investment and Portfolio Management `,
    code: `BMBFM01`,
    description: `Investment and Portfolio Management — MBA Semester 3, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 3,
    specialization: `Finance`,
    syllabus: `Unit I Investments                                                                                                                
(10 hrs)                                                                                             
Overview of Capital Market: Market of securities, Stock Exchange and New Issue   Markets - their 
nature, structure, functioning and limitations; Trading of securities: equity and debentures/ bonds. 
Securities trading - Types of orders, margin trading, clearing and settlement procedures. 
Regularity systems for equity markets, Type of investors, Aim & Approaches of Security 
analysis. 
Unit II Portfolio Theory                                                                                  
(8 Hrs) 
Risk & Return: Concept of Risk, Component & Measurement of risk, covariance, correlation risk. 
Fundamental coefficient, Measurement of systematic Analysis: Economic, Industry, Company 
Analysis, Portfolio risk and return, Beta as a measure of risk, calculation of beta, Selection of 
Portfolio: Markowitz’s Theory, Single Index Model, Case Studies. 
Unit III  Capital Market & Asset Pricing                                                           
(6 Hrs) 
Technical Analysis: DOW Theory, Support and Resistance level, Type of charts & its 
interpretations, Trend line, Gap Wave Theory, Relative strength analysis , Technical Versus 
Fundamental analysis. Nature of Stock Markets: EMH (Efficient Market Hypothesis) and its 
implications for investment decision. Capital market theorem, CAPM (Capital Asset Pricing 
Model) and Arbitrage Pricing Theory. Case Studies.  
Unit IV  Bond, Equity and Derivative Analysis                 
(8 Hrs) 
Valuation of Equity Discounted Cash-flow techniques: Balance sheet valuation, Dividend 
discount models, Intrinsic value and market price, earnings multiplier approach, P/E ratio, 
Price/Book value, Price/sales ratio, Economic value added (EVA). Valuation of 
Debentures/Bonds : nature of bonds, valuation, Bond theorem, Term structure of interest rates. 
Meaning, features, and types of derivatives, Role and significance of derivatives in financial 
markets, Participants in derivative markets: hedgers, speculators, and arbitrageurs, Regulatory 
framework of derivative markets 
Unit V Active Portfolio Management                                                                 
(8Hrs) 
Portfolio Management and Performance Evaluation: Performance Evaluation of existing 
portfolio, Sharpe, Treynor and Jensen measures; Finding alternatives and revision of portfolio; 
Portfolio Management and Mutual Fund Industry 
`,
  },
  {
    id: `s-1060`,
    slug: `tpm`,
    name: `Tax Planning & Management`,
    code: `BMBFM02`,
    description: `Tax Planning & Management — MBA Semester 3, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 3,
    specialization: `Finance`,
    syllabus: `Unit 1 : Fundamental Concepts                
(6Hours)                                                                               
Introduction: Definition, Cannons of Taxation Person, Assesse, Income, Previous Year, 
Assessment Year, Income Tax Important Dates and Forms. Residential Status & Tax Incidence: 
Individual Income Exempted from Tax. 
Unit 2   :Heads of Income and provisions             
(10Hours)                                              
Heads of Income – Salaries, Income from House Property, Profits & Gains from Business or 
Profession, Capital Gains, Income from Other sources., Clubbing of incomes, Calculation of 
Taxable Income, Tax Calculation including Surcharge and Marginal relief, Deduction, Rebate, 
Relief, Set Off & Carry Forward of Losses – Principles, Meaning, inter-sources & inter-head Set 
Off. 
Unit 3 : Tax Planning   & Management                                                            
(8 Hours)                                                                               
Tax Avoidance, Planning, & Evasion, Income Tax Authorities- Their appointment- Jurisdiction
Powers and functions- Provisions relating to collection and recovery of tax- Refund of tax, 
Offences, penalties and Prosecutions, Appeals and Revisions, Advance Tax, TDS, Advance 
Rulings, Avoidance of Double Taxation Agreements. 
Unit 4  : Corporate Tax                                                                             
(6Hours) 
Computation of taxable income, Carry-forward and set-off of losses for companies, Minimum 
Alternative Tax (MAT), Set-off and Carry-forward of Amalgamation Losses, Tax Planning for 
Amalgamation, Merger and Demerger of Companies, Tax Provisions for Venture Capital Funds. 
Unit  5  GST                          
(10 Hours) 
Introduction to GST: GST Concepts –Advantages and Limitations of VAT – GST as the 
preferred Tax Structure. Model of GST. Need for Tax Reforms, GST Principles – Single GST, 
Dual GST; Transactions covered under GST; Impact of GST. Registration and Filing: – Rates of 
Tax – Rates in Foreign Countries – In India; Assessment and Administration of GST. `,
  },
  {
    id: `s-1061`,
    slug: `fcra`,
    name: `Financial Credit and Risk Analysis `,
    code: `BMBFM03`,
    description: `Financial Credit and Risk Analysis — MBA Semester 3, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 3,
    specialization: `Finance`,
    syllabus: `UNIT I : Introduction                                                                                               
(6 hours) 
Financial Credit: Meaning & Objectives, Credit Risk, Credit Analysis, Seven C’s, Credit Analysis 
Process, Credit Process, Documentation, Loan Pricing and Profitability Analysis. Regulations, 
Types of Credit Facilities: Various types of Credit Facilities- Cash Credit, Overdrafts, Demand 
Loan, Bill Finance – Drawee Bill Scheme, Bill Discounting. Cash Delivery: Types of Facilities, 
Modes of Delivery. 
UNIT II : Trade Credit Risk
                                                                                   (8 hours) 
Sole -Banking Arrangement, Multiple Banking Arrangement, Consortium Lending, Syndication. 
Credit Thrust, Credit Priorities, Credit Acquisitions, Statutory & Regulatory restrictions on 
Advances. Credit Appraisal: Validation of proposal, Dimensions of Credit Appraisals, Structuring 
of Loan documents, Credit Risk, Credit Risk Rating, Credit Worthiness of Borrower, Purpose of 
Loan, Source of Repayment, Cash Flow, Collateral. 
UNIT III : Letter of Credit and Loan Commitments                                           
(10 hours) 
Quasi Credit Facilities: Advantages of Non-Fund Facilities, Various types of NFB Facilities, 
Various types Letter of Credits, Assessment of LC limits, Bills Purchase/ Discounting under LC, 
Loan commitments, Un-funded lines of credit and their characteristics Various types of Bank Guarantees: Performance Guarantee, Financial Guarantees, Deferred 
Payment Guarantees, Types of Performance and Financial Guarantees, Assessment of Bank 
Guarantees Limit, Period of Claim under Guarantee.  
UNIT IV : Operational Risk Overview                          (08 hours) 
Risk & Uncertainty, Financial Sector, Risk Types, Operational Risk Management- Recruitment & 
Training, Work flow Design, Work Flow Documentation, Delegation of Authority, Independent 
Internal Audit, Independent Compliance Function, Independent Risk Management Function, 
System Audit, Corporate Governance, Whistle Blower Policy, Risk Management Culture. 
UNIT V : Credit Analysis & Rating                                                                       
(08 hours) 
Importance of credit analysis, Stages of credit analysis profitability analysis and pricing of loans, 
Credit risk analysis (Debt ratios and risk of leverage), Analysis of working capital, liquidity , 
operating and cash cycle risk . 
Credit Rating: Measurement of Risk, Objective of Rating, Internal & External Rating, Model Credit 
Rating, Methodology of Rating, Internal & External Comparison, Model Rating Formats.  `,
  },
  {
    id: `s-1062`,
    slug: `sclm`,
    name: `Supply Chain & Logistics Management`,
    code: `BMBOM01`,
    description: `Supply Chain & Logistics Management — MBA Semester 3, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 3,
    specialization: `Operation`,
    syllabus: `Unit 1 (8 Hours) 
Supply Chain Concepts: Objectives of a Supply Chain, Stages of Supply chain, Value 
Chain Process, Cycle view of Supply Chain Process, Key issues in SCM, logistics & 
Supply Chain Drivers and obstacles, Supply chain strategies, strategic fit, Best practices in 
SCM, Obstacles of streamlined SCM. 
Unit 2 (8 Hours) 
Logistics :Evolution, Objectives, Components and Functions of Logistics Management, 
Distribution related Issues and Challenges; Gaining competitive advantage through 
Logistics Management, Transportation- Functions, Costs, and Mode; Network and Decision, 
Containerization, Cross docking. 
Unit 3 (8 Hours) 
Supply Chain Performance: Bullwhip effect and reduction, Performance measurement: 
Dimension, Tools of performance measurement, SCOR Model. Demand chain 
management, Global Supply chain- Challenges in establishing Global Supply Chain, 
Factors that influences designing Global Supply Chain Network. 
Unit 4 (8 Hours) 
Warehousing: Concept and types, Warehousing strategy, Warehouse facility location & 
network design, Reverse logistics, Outsourcing- Nature and concept, Strategic decision to 
Outsourcing, Third party logistics(3PL), Fourth party logistics(4PL). 
Unit 5 (8 Hours) 
Supply Chain and CRM- Linkage, IT infrastructure used for Supply Chain and CRM, 
Functional components for CRM, Green supply chain management, Supply Chain sustainability`,
  },
  {
    id: `s-1063`,
    slug: `bpr`,
    name: `Business Process Re-Engineering`,
    code: `BMBOM02`,
    description: `Business Process Re-Engineering — MBA Semester 3, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 3,
    specialization: `Operation`,
    syllabus: `Unit 1: (8 Hours) 
Introduction to Business Process Re-engineering: Concept, definition, and evolution of BPR, 
Objectives, significance, and scope of BPR in operations management. Principles and philosophy 
of BPR. Traditional vs. Re-engineered Processes. Role of BPR in enhancing organizational 
competitiveness. Critical success factors and myths related to BPR. 
Unit 2: (8 Hours) 
Business Process Mapping and Modeling: Tools and Techniques. Process documentation and 
process benchmarking. Identifying core and support processes. Analyzing process performance and 
identifying bottlenecks. Process innovation vs. process improvement. Evaluating BPR readiness. 
Unit 3: (8 Hours) 
BPR Life Cycle and Methodology: Hammer & Champy, Davenport, and other approaches. 
Strategic alignment and process prioritization. Role of IT in BPR: Enterprise Resource Planning 
(ERP), Artificial Intelligence, and Process Automation. Tools supporting BPR: Business Process 
Management Systems (BPMS), Workflow Automation Tools. Cost-benefit analysis of BPR 
initiatives. Managing BPR implementation projects. Case Study Discussions. 
Unit 4: (8 Hours) 
Change Management and Risk Mitigation in BPR: Organizational change management 
principles relevant to BPR. Human resource considerations and overcoming resistance to change. 
Risk identification and mitigation strategies in BPR. Communication strategies for BPR success. 
Measuring outcomes and impact of re-engineered processes. Learning from BPR failures: Global 
and Indian corporate examples. 
Unit 5: (8 Hours) 
Emerging Trends in Process Reengineering: Digital transformation and BPR. Industry 4.0 and 
process digitization. Role of Big Data Analytics and Cloud Computing in reengineering processes. 
Sustainable and green process reengineering. Future directions of BPR in service and 
manufacturing sectors.  `,
  },
  {
    id: `s-1064`,
    slug: `qm`,
    name: `Quality Management`,
    code: `BMBOM03`,
    description: `Quality Management — MBA Semester 3, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 3,
    specialization: `Operation`,
    syllabus: `Unit 1( 8Hours) 
Quality Concepts: Evolution of Quality Management, Concepts of Quality, Quality 
Control v/s Quality assurance , Dimensions of Quality, Principles of Quality, Deming’s, 
Juran’s & Crosby’s Quality Philosophy, Quality Cost, Quality Leadership, Role of Top 
Management. 
Unit 2 (8 Hours) 
Quality Management System (QMS) & Process Quality Improvement : Basics of QMS, 
7 QC tools, Regression Control Charts, Process Capability and Analysis, Measurement system 
Analysis, Design and Analysis of Experiment (DOE), Acceptance sampling plan, Different 
Cost associated with Quality like Assurance cost, Failure cost , prevention cost, 
rectification cost, appraisal cost, Process failure mode and effect analysis (PFMEA), 
Understanding Service Quality, case studies. 
Unit 3 (7 Hours) 
Product Quality Improvement: Quality Function Deployment, Robust Design and 
Taguchi Method, Design Failure Mode & Effect Analysis, Product Reliability Analysis. 
Unit 4 (9Hours) 
Total Quality Management: Meaning of TQM, Elements of Total Quality Management, 
Quality Circles, Six Sigma, Six sigma for Process Improvement, Six Sigma in Product 
Development & Design. Benchmarking, Quality Function Deployment (QFD), Taguchi’s 
Quality Engineering, Total Productive Maintenance (TPM) 
Unit 5 (8 Hours) 
Quality Standards : ISO-9000 and it concept of Quality management, ISO 14001, ISO 
22000, ISO 27001, OHSAS 18001 and QS 9000, Indian Quality standards, Quality Audit, 
Quality Awards. `,
  },
   {
    id: `s-1065`,
    slug: `ibm`,
    name: `International Business Management`,
    code: `BMBIB01`,
    description: `International Business Management — MBA Semester 3, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 3,
    specialization: `IB`,
    syllabus: `Unit 1: Introduction to International Business and Trade Theories (8 Hours) 
Nature, scope, and importance of international business, introduction to EPRG & LPG frameworks, 
major modes of market entry: exporting, joint ventures, FDI, licensing, wholly owned subsidiaries, 
theoretical foundations: classical and modern trade theories, Leontief paradox, PLC theory, national 
competitive advantage, and factor mobility theory. 
Unit 2: Trade Policy & Commercial Instruments (6 Hours) 
Instruments of commercial policy: tariffs, quotas, subsidies, non-tariff barriers, economic multiplier 
effects (with numerical examples), trade protectionism, India’s foreign trade policy, Make in India 
initiatives, LPG policy framework. 
Unit 3: Business Environment & Political Economy (10 Hours) 
International business environment analysis: PESTEL covering economic, political, cultural, 
technological factors, cultural dimensions: language, religion, communication styles in business 
contexts, political and legal frameworks: systems of governance, legal protection, IPR, and national 
risk factors. Latest updates and cases. 
Unit 4: International Marketing (8 Hours) 
Introduction to International Marketing: Definition, scope and importance; Differences between 
domestic and international marketing; EPRG framework (Ethnocentric, Polycentric, Regiocentric,Geocentric); Environmental factors affecting international marketing – Political, Economic, Social, 
Cultural, Technological, Legal; Hofstede’s cultural dimensions and their impact on marketing 
decisions; International market research and segmentation; International product and pricing 
decisions. Latest updates and cases. 
Unit 5: International Strategy, Institutions and Operations (8 Hours) 
Global business strategy: standardization vs localization, international expansion strategies 
including M&A, alliances, licensing, franchising, international marketing, supply chain and 
logistics management, use of Incoterms, role of trade promotion bodies in India (EXIM Bank, 
ECGC), global institutions and trade agreements: WTO, GATT, IMF, World Bank, TRIPS, 
TRIMS, GATS, regional economic blocs: EU, ASEAN, NAFTA, SAARC, emergence and 
strategies of multinational firms, Indian export promotion schemes and SEZ policies. `,
  },
   {
    id: `s-1066`,
    slug: `eid`,
    name: `Export Import Documentation`,
    code: `BMBIB02`,
    description: `Export Import Documentation — MBA Semester 3, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 3,
    specialization: `IB`,
    syllabus: `Unit 1: Indian EXIM Framework and Registration                                        
(8Hr) 
Latest Foreign Trade Policy (FTP) overview; objectives and key provisions; role of Directorate 
General of Foreign Trade (DGFT), Export-Import Bank of India (EXIM Bank), Export Promotion 
Councils (EPCs), Special Economic Zones (SEZs); types of exports and imports; registration 
processes including Import Export Code (IEC), Registration Cum Membership Certificate (RCMC) 
and Authorized Dealer Code (AD Code); overview of Start-up and Micro, Small and Medium 
Enterprises (MSME) support in India’s FTP. 
Unit 2: Commercial and Regulatory Documentation                                       
(8Hr) 
Commercial documents: proforma invoice; commercial invoice; packing list; certificate of origin 
from Directorate General of Foreign Trade (DGFT) and chamber of commerce; inspection and 
quality certificates (Food Safety and Standards Authority of India (FSSAI), Agricultural and 
Processed Food Products Export Development Authority (APEDA); regulatory documents: 
shipping bill; bill of entry; Goods and Services Tax (GST) invoice for exports; e-invoicing 
compliance; overview of GST refund mechanisms for exports. 
Unit 3: Shipping, Logistics & Insurance Documentation
                                                  (7Hr) 
Indian logistics infrastructure: Inland Container Depots (ICDs); Container Freight Stations 
(CFS); Special Economic Zones (SEZs); role of shipping lines and freight forwarders; types of 
shipments: Full Container Load (FCL) vs Less than Container Load (LCL); types of transport 
Page 40 
documents: bill of lading; airway bill; multimodal transport documents; marine insurance in India. 
Unit 4: Banking, Payment & Foreign Exchange Documents                                      
(9Hr) 
Payment modes in Indian trade: advance payment; documents against payment (DP); documents 
against acceptance (DA); letter of credit (LC) process under Uniform Customs and Practice for 
Documentary Credits (UCPDC) norms; Reserve Bank of India (RBI) and Foreign Exchange 
Management Act (FEMA) guidelines on foreign exchange (forex) management; Authorized Dealer 
(AD) bank’s role; banking documents: electronic Bank Realization Certificate (e-BRC); Foreign 
Inward Remittance Certificate (FIRC); Goods Receipt (GR) form; Shipping Declaration Form 
(SDF); steps for foreign currency realization and repatriation. 
Unit 5: Customs Procedures and Digital Trade Platforms                                         
(8Hr) 
Overview of Indian Customs Act; customs clearance process for exports and imports; role of 
Customs House Agent (CHA); Indian Customs Electronic Gateway (ICEGATE) registration; 
uploading documents online (shipping bill, electronic Certificate of Origin (e-CoO), electronic 
Bank Realization Certificate (e-BRC)); Indian Single Window System; trade analytics and 
compliance monitoring tools.`,
  },
   {
    id: `s-1067`,
    slug: `gpt`,
    name: `Geo Politics & Trade`,
    code: `BMBIB03`,
    description: `Geo Politics & Trade — MBA Semester 3, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 3,
    specialization: `IB`,
    syllabus: `Unit 1: Introduction to Geopolitics and the Global Trade Order (8 Hours) 
Meaning and scope of geopolitics, relationship between geography, power, and economics, 
historical evolution of geopolitical trade (Silk Road to WTO), role of nation-states in trade 
influence, geostrategy and economic nationalism in trade decisions. 
Unit 
2: Geopolitical Conflicts and Trade Disruptions 
Strategic use of trade restrictions: sanctions, embargoes, and tariffs, conflicts and wars impacting 
trade flows (e.g., Russia-Ukraine, Israel-Palestine), disruption of global supply chains due to 
political instability, control over critical raw materials (oil, gas, rare earths), case studies: Strait of 
Hormuz, Suez Canal, South China Sea. Latest updates. 
Unit 3: Resource Geopolitics and Energy Security 
Global energy politics: pipelines, ports, and control zones, political economy of OPEC+ and fuel 
pricing, climate politics: carbon tariffs, green subsidies, energy transition diplomacy, competition 
over water and agricultural trade resources, resource diplomacy: energy aid, extraction deals, 
infrastructure influence. Latest updates. 
Unit 4: 
Power Blocs, Alliances, and Regional Trade Politics (8 Hours) 
Formation and impact of global power blocs (BRICS, G7, G20, QUAD), strategic trade alignments: 
Belt and Road Initiative, Indo-Pacific strategy, trade agreements with geopolitical motives (e.g., 
RCEP, IPEF, EU-African deals), politics behind FTAs, customs unions, economic corridors, soft 
power, foreign aid, trade missions in foreign policy. Latest updates. 
Unit 5: 
Emerging Risks and the Future of Political Trade (8 Hours) 
Technology and trade tensions: AI, semiconductors, data localization, cybersecurity, digital 
surveillance, trade infrastructure risk, friend-shoring, near-shoring, supply chain reconfiguration, 
satellite-based trade surveillance, maritime control, future outlook: multipolar world, global 
fragmentation, trade resilience strategies. Latest updates.`,
  },
   {
    id: `s-1068`,
    slug: `sem`,
    name: `Software Engineering & Management`,
    code: `BMBIT01`,
    description: `Software Engineering & Management — MBA Semester 3, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 3,
    specialization: `IT`,
    syllabus: `Unit - I:   6hrs  
Introduction to Information System Development: Overview of System Analysis and Design; 
Business System Concepts; Categories of Information Systems; Strategies for System 
Development; Implementation and Evaluation of Systems; Managing the Application Development 
Portfolio 
Unit - II: 8 hrs  
Analysis Techniques & Tools: Study of Existing Systems - Information Requirement Analysis, 
System Documentation; Structured Analysis - Data Flow Tools: Data Flow Diagrams (DFD), Data 
Dictionary Concepts; Application Prototype Development - Steps, Uses, Tools, and Strategies; 
Computer-Aided System Tools (CASE); Project Planning Fundamentals- Cost Estimation, Work 
and Resource Estimation, Risk Analysis in Software Projects 
Unit - III: 8 hrs  
Page 44 
System Design and Data Management: Principles of System Design; Input-Output Design for 
Business Applications; Design of Online Catalogues; File Organization and Design Techniques; 
Database Concepts and Design 
Unit - IV: 8 hrs  
Systems Analysis and Design in E-Commerce: E-Commerce Models: B2B, B2C, and C2C; 
Advantages and Disadvantages of E-Commerce Systems; E-Commerce System Architectures; 
Security Considerations in E-Commerce 
Unit - V: 10 hrs  
Business System Development and Implementation: System Testing and Quality Assurance; 
Documentation for Systems; Implementation and Development Processes; Hardware and Software 
Selection Criteria; System Maintenance and Support 
Security Control and Auditing: Security and Auditing of Information Systems; Objectives and 
Techniques of Information System Controls; Auditing Information Systems; Disaster Recovery and 
Business Process Continuity Planning`,
  },
   {
    id: `s-1069`,
    slug: `etb`,
    name: `Emerging Technologies For Business`,
    code: `BMBIT02`,
    description: `Emerging Technologies For Business — MBA Semester 3, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 3,
    specialization: `IT`,
    syllabus: `Unit - I:  8 Hours 
Foundations of Digital & Emerging Technologies: Evolution of technology and the Fourth 
Industrial Revolution (Industry 4.0); Introduction to digital transformation in business; Overview of 
enabling technologies and business drivers; Human-machine interaction; future trends in business 
technology adoption; Introduction to programmable networks, devices, and automation 
Unit - II: 8 Hours 
Data Science, Big Data & Cloud Computing: Understanding data, information, data value chain, 
and types; The data pipeline: collection, cleaning, storage, analysis, curation, and visualization; Big 
Data: key concepts and business use cases; Role of data science in business analytics and decision
making; Cloud Computing: fundamentals, service models (IaaS, PaaS, SaaS), deployment models; 
Cloud platforms for data storage, management, and scalable analytics 
Unit - III:  6 Hours 
Artificial Intelligence, IoT & Computer Vision: Artificial Intelligence (AI): machine learning, 
deep learning, business applications; IoT: architecture, devices, enabling networks, and business 
implementations; Use of IoT in supply chain, healthcare, smart cities, manufacturing; Computer 
Vision: fundamentals, business applications in quality control, retail, and automation; Integration of 
AI & IoT for intelligent products and smart services 
Unit - IV: 12 Hours 
Blockchain, 3D Printing & Other Disruptive Technologies: Blockchain fundamentals: 
distributed ledgers, smart contracts, business applications (finance, supply chain, traceability); 
Real-world challenges and regulatory considerations for blockchain adoption; 3D Printing 
(Additive Manufacturing): technology, business use cases, supply chain impact, mass 
customization; Survey of additional emerging technologies (e.g., neuromorphic computing, 
quantum computing, edge computing)  
AR, VR, MR & Virtual Try-On in Business: Augmented Reality (AR), Virtual Reality (VR), and 
Mixed Reality (MR): differences, technologies, and development; Immersive experiences in 
business: marketing, training, product design, simulation; Virtual Try-On: concepts, enabling 
technologies (AR/AI), applications in retail, fashion, beauty, home décor; Data-driven 
personalization and customer engagement via immersive technologies; Challenges and 
opportunities of implementing immersive solutions 
Unit - V: 6 Hours 
Ethics, Security, Sustainability & Leadership in Emerging Tech: Data privacy, security, and 
compliance (GDPR, other regulations); Cybersecurity issues in cloud, AI, IoT, and blockchain 
adoption; Ethics and bias in AI, big data, and immersive technologies; Sustainable technology 
adoption and digital responsibility; Leadership and future workplace skills: managing innovation, 
change management, digital strategy`,
  },
   {
    id: `s-1070`,
    slug: `dbms`,
    name: `Database Management System`,
    code: `BMBIT03`,
    description: `Database Management System — MBA Semester 3, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 3,
    specialization: `IT`,
    syllabus: `Unit - I: 6 hrs 
Introduction to Database Systems: Basic concepts: Data, information, fields, records, files, 
databases; Evolution and need for database systems in business; Data models: Hierarchical, 
network, relational, object-oriented; File-oriented systems vs. Database systems; Three-layered 
architecture of DBMS; Applications and advantages/disadvantages of DBMS 
Unit - II: 8 hrs 
Data Modelling & Database Design: Entity-Relationship (ER) Model - Entities, attributes, 
relationships, constraints, ER diagrams, extended features (generalization, specialization, 
aggregation); Relational database model - Structure, keys (primary, foreign), integrity constraints, 
Normalization (1NF, 2NF, 3NF, BCNF); Relational schema and table design; Role and 
responsibilities of the Database Administrator (DBA)  
Unit - III: 8 hrs  
Relational Query Languages: Structured Query Language (SQL) -Data Definition Language 
(DDL), Data Manipulation Language (DML), Creating, altering, and deleting tables, Data types, 
constraints, aggregate functions, Joins, sub-queries, views, transaction control commands (commit, 
rollback); Relational algebra and calculus - Operators: Selection, projection, join, set operations 
Unit - IV: 8 hrs 
Database Implementation & Management: Database storage and physical structures - Indexing, 
B-trees, hashing; Query processing and optimization - Evaluation strategies, query cost analysis; 
Backup, recovery, and disaster management; Concurrency control: Locking, timestamping, 
deadlocks; Transaction management and ACID properties 
Unit - V: 10 hrs  
Security, Authorization, and Advanced Topics: Database security: Authentication, authorization, 
privileges, threats; Auditing, access controls, violation handling; Data integrity and constraints; 
Distributed databases and client-server architecture basics; Introduction to data warehousing, 
OLAP, OLTP, and data mining concepts 
Practical Applications & Case Studies: Use of commercial and open-source DBMS (e.g., 
MySQL, Oracle, SQL Server); Case studies from finance, marketing, HR, retail, and e-commerce 
sectors; Designing and demonstrating a relational database for a business use case `,
  },
   /*{
    id: `s-1064`,
    slug: `qm`,
    name: `Quality Management`,
    code: `BMBOM03`,
    description: `Quality Management — MBA Semester 3, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 3,
    specialization: `Operation`,
    syllabus: ``,
  },
   {
    id: `s-1064`,
    slug: `qm`,
    name: `Quality Management`,
    code: `BMBOM03`,
    description: `Quality Management — MBA Semester 3, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 3,
    specialization: `Operation`,
    syllabus: ``,
  },*/
  
];
