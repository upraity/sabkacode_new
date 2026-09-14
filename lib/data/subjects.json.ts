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
Download Notes of C Language
Hand Written Notes
Download
Download Book of C language
C Books
Writter name
Download
Let Us C
Yashavant Kanetkar
View
C Programming
Harry. H. Chaudhary
View
Download the practical file of C language.
Download here
Pattern Questions of C Language
C Pattern Question
Download`,
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
Download Book of Mathematics
Maths Books
Writter name
Download
Mathematics book (UNIT-1)
J.P Chauhan & Sharad Kumar`,
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
organization.
Download Notes of HTML
Units
Download
Unit-1`,
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
Files and Exception Handling: Streams and files, Namespaces, Exception handling.
Download Notes of C++ Language
Hand Written Notes
Download
Download Book of C++ language
C++ Books
Writter name
Download
Beginning C++ Programing
Richard Grimes`,
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
Download Notes of Statics
Units
Download
Unit-1`,
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
Download Notes of HTML
Units
Download
Unit-1`,
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
Download Notes of DSA With C
Topics
Download
Introduction
View
Classification of Data Structure
View
Operation on Data Structure
View
Address Calculating
View
Application of Array
View
Limitation of Array
View
Operations of Stack
View
Stack
View
Recursion
View
Tower of Hanoi
View
Queue
View
Algorithm of Insertion & Deletion of Queue
View
Tree
View
Download Book of DSA
DSA Books
Writter name
Download
Data Structure and Algorithm Using C++
Sachi Nandan Mohanty & Pabitra Kumar Tripathy
View
Fundamentals of Data Structure in C
E. Horowiz and S. Sahni
View
Download the practical file of DSA.
Download here`,
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
Download Book of OS
OS Books
Writter name
Download
OPERATING SYSTEM CONCEPTS
Abraham Silberschatz
View
Operating System
Andrew S. Tanenbaum
View
Download the Question Bank of OS
View here
Download the IMPORTANT question of OS with Solutions.
Download here`,
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
Download Notes of COA
Download`,
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
Download Notes of Dbms
Units
View
Unit-1
View
Unit-2
View
Download Book of Dbms
Dbms Books
Writter name
Download
Database System Concepts
Abraham Silberschatz & Henry F. Korth & S. Sudarshan
View
Database Management System
Mcgraw Hill
View
Some important function in SQL
Download here
Download Question Bank of Dbms
Download`,
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
Download Book of CN
CN Book
Writter Name
Download
Computer Network
A. S. Tanenbaum, David J. Wetherall
View
Data Communication Networking
Behrouz A. Forouzan
View
Download Question Bank of CN`,
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
Download Book of Java
Java Book
Download
Java Complete Reference
Herbert Schildt
View
Beginning of Java
I. Horton
View
Download Question Bank of Java`,
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
Download Book of PHP
Php Book`,
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
Download Question Bank of AI`,
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
    syllabus: `Download Book of DAA
DAA Book
Download
Download Question Bank of DAA`,
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
Download Book of E-Commerce
Ecommerce Books
Writter name
Download
Introduction to Ecommerce
Martin Kutz`,
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
Download Book of CG
CG Book
Download
Download Question Bank of CG`,
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
Download Book of SAD
SAD Book
Download
Download Question Bank of SAD`,
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
    syllabus: `Download Book of OT
NS Book
Download
Download Question Bank of NS`,
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
Download Notes of HTML
Units
Download
Unit-1`,
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
Download Book of OT
OT Book
Download
Operation Research
View
Download Question Bank of OT`,
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
    syllabus: `Download Book of VB.Net
VB.Net Book
Download
Download Question Bank of VB.Net`,
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
Download Book of Mathematics II
Mathematics II Books
Writter name
Download
Discrete Mathematical Structure
Kolman, Busby and Ross`,
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
Download Book of IT & WD
Internet Technology & Web Design Books
Writter name
Download
Web Technologies
Godbole AS & Kahate A`,
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
Download Book of Mathematics - III
Mathematics - III Book
Writter name
Download
Advanced Engineering Mathematics
Alan Jeffrey`,
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
Download Book of Python
Python Books
Writter name
Download
Learning Python 5th Edition
Mark Lutz, O’Reilly`,
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
Download Book of Software Engineer
Software Engineer Books
Writter name
Download
Software Engineering
I. Sommerville`,
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
Download Book of CG
CGA Books
Writter name
Download
Computer Graphics Principles & Practice
Foley, Van Dam, Feiner, Hughes`,
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
Download Book of Data Science
DS & ML Books
Writter name
Download
Doing Data Science
O’Neil and Rachel Schutt`,
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
Download Book of ICS
ICS Books
Writter name
Download
Penetration Testing - Hacking
Georgia Weidman`,
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
Download Book of IT
Internet of Things Books
Writter name
Download
IT Architecture and Design Principles
Raj Kamal`,
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
    code: `KMBN101`,
    description: `Business Communication — MBA Semester 1, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 1,
  },
  {
    id: `s-1034`,
    slug: `be`,
    name: `Business Environment & Legal Aspects of Business`,
    code: `BE`,
    description: `Business Environment & Legal Aspects of Business — MBA Semester 2, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 2,
  },
  {
    id: `s-1035`,
    slug: `brm`,
    name: `Business Research Methods`,
    code: `BRM`,
    description: `Business Research Methods — MBA Semester 2, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 2,
  },
  {
    id: `s-1036`,
    slug: `cma`,
    name: `Cost & Management Accounting`,
    code: `CMA`,
    description: `Cost & Management Accounting — MBA Semester 2, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 2,
  },
  {
    id: `s-1037`,
    slug: `hrm`,
    name: `Human Resource Management`,
    code: `HRM`,
    description: `Human Resource Management — MBA Semester 2, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 2,
  },
  {
    id: `s-1038`,
    slug: `mis`,
    name: `Management Information System`,
    code: `MIS`,
    description: `Management Information System — MBA Semester 2, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 2,
  },
  {
    id: `s-1039`,
    slug: `qtm`,
    name: `Quantitative Techniques for Management`,
    code: `QTM`,
    description: `Quantitative Techniques for Management — MBA Semester 2, AKTU.`,
    courseSlug: `mba`,
    universitySlug: `aktu`,
    branchSlug: `general`,
    semester: 2,
  },
];
