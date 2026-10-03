import { UnitNote } from "@/types";

export const BcaSoftwareEngineeringDbrauUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Introduction to Software Engineering",
    hours: 8,
    headings: [
      {
        id: "definition-and-types-of-software",
        title: "1. Definition and Types of Software",
        icon: "FileText",
        blocks: [
          { kind: "paragraph", text: "Software is a collection of programs, data and associated information that enables a computer system to perform useful tasks. Unlike hardware, software is intangible. A software product normally includes executable programs, configuration data, documentation and, where relevant, procedures needed by users and operators." },
          { kind: "table", headers: ["Type", "Meaning", "Examples"], rows: [
            ["System software", "Controls or supports operation of computer hardware and provides a platform for other software.", "Operating systems, device drivers, utilities"],
            ["Application software", "Performs tasks required by end users or organizations.", "Payroll, word processing, banking applications"],
            ["Embedded software", "Runs inside a device and controls or supports a dedicated function.", "Firmware in appliances, controllers"],
            ["Web/mobile software", "Software delivered through browsers or mobile platforms.", "Web portals, mobile banking apps"]
          ]},
          { kind: "callout", tone: "example", title: "Example", text: "In a college management system, the operating system is system software, the database application is application software, and firmware inside a network device is embedded software." }
        ]
      },
      {
        id: "characteristics-and-attributes",
        title: "2. Characteristics and Attributes of Good Software",
        icon: "Award",
        blocks: [
          { kind: "paragraph", text: "Software differs from manufactured physical products because it is developed rather than produced by repeatedly assembling physical units. Its main characteristics include intangibility, high dependence on logical design, ease of modification compared with hardware, and the fact that failures usually arise from defects in requirements, design, code, configuration or operation." },
          { kind: "table", headers: ["Attribute", "Explanation"], rows: [
            ["Correctness", "The software provides the required results for stated requirements."],
            ["Reliability", "The system performs consistently for a specified period and operating condition."],
            ["Usability", "Users can learn and operate the system effectively."],
            ["Efficiency", "The software uses time, memory, network and other resources appropriately."],
            ["Maintainability", "The software can be understood, corrected, adapted and enhanced."],
            ["Security", "The system protects data and functions against unauthorized access or misuse."]
          ]},
          { kind: "callout", tone: "info", title: "Exam point", text: "A good software product is not judged only by whether it runs. Quality also concerns reliability, usability, maintainability, efficiency, security and conformance to requirements." }
        ]
      },
      {
        id: "software-engineering-definition",
        title: "3. Definition of Software Engineering",
        icon: "Settings",
        blocks: [
          { kind: "paragraph", text: "Software engineering is the systematic, disciplined and measurable approach to the development, operation, maintenance and evolution of software. It applies engineering principles to software so that development is planned, controlled, reviewable and repeatable." },
          { kind: "bullets", items: [
            "Requirements are identified and documented before implementation decisions are finalized.",
            "Development activities are organized into a life-cycle process.",
            "Design and implementation are supported by standards, reviews and testing.",
            "Quality and project risks are considered throughout development.",
            "Maintenance and evolution are treated as planned engineering activities."
          ]},
          { kind: "diagram", diagramId: "bca-se-software-engineering-process", caption: "High-level software engineering process from requirements to maintenance." }
        ]
      },
      {
        id: "software-engineering-costs-and-challenges",
        title: "4. Software Engineering Costs and Challenges",
        icon: "TrendingUp",
        blocks: [
          { kind: "paragraph", text: "Software engineering cost is influenced by the size and complexity of the product, required quality, technology, team capability, development process, integration effort, testing effort and expected changes. Software projects also face uncertainty because requirements, technologies and business conditions can change during development." },
          { kind: "table", headers: ["Challenge", "Effect on a project"], rows: [
            ["Changing requirements", "Can cause redesign, rework, additional testing and schedule changes."],
            ["Complexity", "Makes design, testing, integration and maintenance harder."],
            ["Communication gaps", "Can create misunderstood requirements and inconsistent expectations."],
            ["Technology change", "May require new tools, skills or architectural decisions."],
            ["Quality pressure", "Shortcuts can increase defects and later maintenance cost."]
          ]}
        ]
      },
      {
        id: "software-requirements-definition",
        title: "5. Software Requirements and SRS",
        icon: "FileCheck",
        blocks: [
          { kind: "paragraph", text: "A software requirement describes a capability, constraint or quality expectation that the software must satisfy. Requirements provide the basis for design, implementation, testing and acceptance. A Software Requirements Specification (SRS) organizes the agreed requirements in a form that stakeholders and developers can use as a common reference." },
          { kind: "table", headers: ["Requirement type", "Example"], rows: [
            ["Functional", "The system shall calculate the student's semester result."],
            ["Performance", "The result page should respond within the specified response target under stated load."],
            ["Security", "Only authorized staff may modify examination records."],
            ["Usability", "A new operator should be able to complete a standard task after the specified training."],
            ["Constraint", "The system must use the institution's approved database platform."]
          ]},
          { kind: "callout", tone: "example", title: "Requirement example", text: "For an online library system, 'The system shall issue a book to an eligible member' is functional. 'Only authenticated librarians may approve an issue transaction' is a security requirement." }
        ]
      },
      {
        id: "srs-specification-techniques",
        title: "6. SRS Specification Techniques",
        icon: "FileSpreadsheet",
        blocks: [
          { kind: "paragraph", text: "Requirements may be expressed using structured natural language, tables, use-case style descriptions, mathematical or formal notation, diagrams and prototypes. The choice depends on the project and the need for precision. Good specifications should be clear, consistent, testable, traceable and understandable to relevant stakeholders." },
          { kind: "bullets", items: [
            "Structured text organizes each requirement using a consistent template.",
            "Tables are useful for rules, inputs, outputs and data definitions.",
            "Use cases describe interactions between actors and the system.",
            "Formal notation can reduce ambiguity where mathematically precise behavior is required.",
            "Prototypes can clarify interfaces and uncertain user expectations."
          ]}
        ]
      },
      {
        id: "languages-and-processors",
        title: "7. Languages and Processors for Requirements",
        icon: "Code",
        blocks: [
          { kind: "paragraph", text: "Requirement expression can use controlled natural language, structured specification languages, graphical models and formal languages. A processor or supporting tool may check syntax, transform models, generate documentation or assist analysis. The essential objective is to make requirements precise enough to support later design and verification." },
          { kind: "callout", tone: "info", title: "Exam focus", text: "In an answer, distinguish a requirement language or notation from a programming language: requirements describe what the system must provide or constrain, while programming languages are used to implement computational behavior." }
        ]
      }
    ],
    keyTerms: [
      { term: "Software", definition: "Programs, data and associated information that provide computer-based functionality." },
      { term: "Software Engineering", definition: "A systematic, disciplined and measurable approach to software development, operation and maintenance." },
      { term: "Requirement", definition: "A needed capability, condition or constraint that a system must satisfy." },
      { term: "SRS", definition: "Software Requirements Specification; a structured statement of agreed software requirements." },
      { term: "Reliability", definition: "The ability of software to perform required functions consistently under stated conditions." },
      { term: "Maintainability", definition: "The ease with which software can be analyzed, corrected, adapted or enhanced." },
      { term: "Functional Requirement", definition: "A requirement describing a service or behavior the system must provide." },
      { term: "Non-functional Requirement", definition: "A requirement concerning qualities, constraints or conditions such as performance, security or usability." }
    ],
    examQuestions: [
      "Define software and explain its major types with examples. (Long)",
      "Explain the characteristics of software and the attributes of good software. (Long)",
      "Define software engineering and discuss why an engineering approach is needed. (Long)",
      "Explain major software engineering costs and challenges. (Medium)",
      "What is a software requirement? Differentiate functional and non-functional requirements. (Long)",
      "Explain the purpose and contents of an SRS. (Long)",
      "Discuss different techniques used for software requirements specification. (Medium)",
      "Explain why requirements should be clear, consistent, testable and traceable. (Medium)",
      "Differentiate requirements specification from program implementation. (Short)"
    ]
  },
  {
    unitNumber: 2,
    title: "Software Development Life Cycle Models",
    hours: 8,
    headings: [
      {
        id: "sdlc-overview",
        title: "1. Software Development Life Cycle",
        icon: "RefreshCw",
        blocks: [
          { kind: "paragraph", text: "The Software Development Life Cycle (SDLC) is an organized framework for planning, developing, testing, delivering and maintaining software. Different life-cycle models arrange these activities differently according to project uncertainty, risk, feedback needs and delivery expectations." },
          { kind: "diagram", diagramId: "bca-se-sdlc-overview", caption: "Common SDLC activity flow: requirements, design, implementation, testing, deployment and maintenance." },
          { kind: "callout", tone: "example", title: "Example", text: "A small internal utility with stable requirements may use a sequential process, while a user-facing product with evolving requirements may benefit from repeated iterations and frequent feedback." }
        ]
      },
      {
        id: "waterfall-model",
        title: "2. Waterfall Model",
        icon: "ArrowLeftRight",
        blocks: [
          { kind: "paragraph", text: "The Waterfall model organizes development into largely sequential phases. A typical flow is requirements analysis → system and software design → implementation → integration and testing → deployment → maintenance. The model emphasizes documentation and phase completion before moving forward." },
          { kind: "table", headers: ["Strength", "Limitation"], rows: [
            ["Clear phase structure", "Late discovery of misunderstood requirements can be expensive."],
            ["Strong documentation", "Customer feedback may be delayed."],
            ["Easy milestone tracking", "Less flexible when requirements change frequently."],
            ["Useful for stable requirements", "Working software is normally delivered relatively late."]
          ]},
          { kind: "callout", tone: "info", title: "Exam point", text: "Do not describe Waterfall as meaning that no feedback is possible. Its defining characteristic is the predominantly sequential organization of activities, with controlled movement between phases." }
        ]
      },
      {
        id: "verification-and-validation-model",
        title: "3. Verification and Validation Model",
        icon: "GitCompareArrows",
        blocks: [
          { kind: "paragraph", text: "The Verification and Validation model, commonly represented as a V-shaped relationship between development activities and corresponding test activities, emphasizes that test planning should be connected to development stages. Verification asks whether work products are being built correctly according to specified requirements and design; validation asks whether the resulting software satisfies its intended use and user needs." },
          { kind: "table", headers: ["Development side", "Related test activity"], rows: [
            ["Requirements", "Acceptance testing"],
            ["System design", "System testing"],
            ["Architecture / high-level design", "Integration testing"],
            ["Detailed design / implementation", "Unit testing"]
          ]},
          { kind: "diagram", diagramId: "bca-se-v-model", caption: "V-model relationship between development work products and corresponding test levels." }
        ]
      },
      {
        id: "spiral-model",
        title: "4. Spiral Model",
        icon: "Repeat",
        blocks: [
          { kind: "paragraph", text: "The Spiral model organizes development into repeated cycles. Each cycle typically includes defining objectives and alternatives, identifying and resolving risks, developing and evaluating the next level of the product, and planning the next cycle. Risk analysis is the central distinguishing feature." },
          { kind: "table", headers: ["Activity in a cycle", "Purpose"], rows: [
            ["Objective setting", "Define goals, constraints and alternatives."],
            ["Risk analysis", "Identify important technical, cost, schedule or requirement risks and reduce them."],
            ["Development and evaluation", "Build and assess the selected solution or increment."],
            ["Planning", "Use results to decide the next cycle."]
          ]},
          { kind: "callout", tone: "example", title: "Example", text: "For a safety-sensitive system with an uncertain technology choice, an early spiral cycle may build a prototype specifically to investigate the highest technical risk before committing to a larger implementation." }
        ]
      },
      {
        id: "iterative-incremental-model",
        title: "5. Iterative and Incremental Development",
        icon: "Layers",
        blocks: [
          { kind: "paragraph", text: "Iterative development repeats analysis, design, implementation and evaluation so that understanding improves over successive cycles. Incremental development delivers the system in pieces, with each increment adding useful functionality. The approaches can be combined: an increment may itself be refined through iterations." },
          { kind: "table", headers: ["Concept", "Meaning"], rows: [
            ["Iteration", "A repeated development cycle used to refine understanding or the product."],
            ["Increment", "A delivered addition that increases the system's functionality."],
            ["Feedback", "Information from evaluation or users used to guide subsequent work."]
          ]}
        ]
      },
      {
        id: "big-bang-model",
        title: "6. Big Bang Model",
        icon: "Sparkles",
        blocks: [
          { kind: "paragraph", text: "The Big Bang approach commits relatively little formal planning and attempts to develop software with minimal process structure. It may be seen in very small experiments or learning projects where the scope and consequences of failure are limited. For larger projects, lack of systematic requirements, planning and risk control can make outcomes unpredictable." }
        ]
      },
      {
        id: "rapid-application-development",
        title: "7. Rapid Application Development",
        icon: "Rocket",
        blocks: [
          { kind: "paragraph", text: "Rapid Application Development (RAD) emphasizes quick construction, prototyping, user involvement, reusable components and time-boxed development. It is useful when a system can be modularized and users are available for rapid feedback. It is less suitable when requirements are highly uncertain in a way that requires deep architectural research, or when the environment does not support rapid user participation." },
          { kind: "callout", tone: "example", title: "Example", text: "A departmental information portal with well-understood workflows can be developed rapidly using reusable interface and data components while users review prototypes frequently." }
        ]
      },
      {
        id: "agile-and-extreme-programming",
        title: "8. Agile Methods and Extreme Programming",
        icon: "Repeat",
        blocks: [
          { kind: "paragraph", text: "Agile development emphasizes short feedback cycles, working software, close collaboration, responsiveness to change and continuous refinement. Extreme Programming (XP) is an Agile method that emphasizes practices such as frequent integration, automated testing, simple design, pair programming and close customer involvement." },
          { kind: "table", headers: ["Practice / principle", "Purpose"], rows: [
            ["Short iterations", "Obtain feedback early and frequently."],
            ["Continuous integration", "Detect integration problems close to when changes are made."],
            ["Test-first / automated tests", "Provide rapid feedback about expected behavior."],
            ["Pair programming", "Enable continuous review and shared understanding."],
            ["Customer collaboration", "Clarify priorities and acceptance continuously."]
          ]}
        ]
      },
      {
        id: "prototype-evolutionary-development",
        title: "9. Prototype Model and Evolutionary Development",
        icon: "LayoutTemplate",
        blocks: [
          { kind: "paragraph", text: "A prototype is an early version of a system or part of a system built to explore requirements, interface ideas, technical feasibility or user expectations. In evolutionary development, the product evolves through repeated refinement rather than being discarded after learning. Prototyping can reduce misunderstanding, but teams should distinguish an exploratory prototype from production-quality architecture and code." },
          { kind: "diagram", diagramId: "bca-se-prototyping-cycle", caption: "Prototype cycle: initial requirements, prototype, user evaluation, refinement and evolution." }
        ]
      }
    ],
    keyTerms: [
      { term: "SDLC", definition: "A structured life-cycle framework for software development and maintenance." },
      { term: "Waterfall Model", definition: "A predominantly sequential software development life-cycle model." },
      { term: "Verification", definition: "Checking whether a work product is built according to specified requirements and design." },
      { term: "Validation", definition: "Checking whether the developed software satisfies intended use and user needs." },
      { term: "Spiral Model", definition: "A risk-driven iterative model organized into repeated development cycles." },
      { term: "Iteration", definition: "A repeated cycle of development and evaluation used to refine a product." },
      { term: "Increment", definition: "A delivered addition that increases the functionality of a software system." },
      { term: "RAD", definition: "Rapid Application Development, emphasizing rapid construction, prototyping, reuse and user feedback." },
      { term: "Prototype", definition: "An early model used to explore requirements, design or technical feasibility." },
      { term: "Extreme Programming", definition: "An Agile development method emphasizing engineering practices and rapid feedback." }
    ],
    examQuestions: [
      "Define SDLC and explain the major activities in a software life cycle. (Long)",
      "Explain the Waterfall model with advantages and limitations. (Long)",
      "Explain the Verification and Validation model with a suitable diagram. (Long)",
      "Differentiate verification and validation. (Medium)",
      "Explain the Spiral model and its risk-driven nature. (Long)",
      "Differentiate iterative and incremental development. (Medium)",
      "Explain the Big Bang model and discuss where it may be used. (Short)",
      "Explain RAD with its major characteristics, advantages and limitations. (Long)",
      "Explain Agile development and the major practices of Extreme Programming. (Long)",
      "Explain the Prototype model and evolutionary development. (Medium)"
    ]
  },
  {
    unitNumber: 3,
    title: "Design Concepts",
    hours: 8,
    headings: [
      {
        id: "abstraction",
        title: "1. Abstraction",
        icon: "Layers",
        blocks: [
          { kind: "paragraph", text: "Abstraction focuses attention on essential characteristics while suppressing unnecessary implementation detail. In software design, abstraction allows a designer to reason about a component at an appropriate level before dealing with lower-level details." },
          { kind: "callout", tone: "example", title: "Example of abstraction", text: "A stack can be described by operations such as push, pop and peek without requiring a user of the abstraction to know whether the implementation uses an array or linked structure." }
        ]
      },
      {
        id: "architecture",
        title: "2. Software Architecture",
        icon: "LayoutTemplate",
        blocks: [
          { kind: "paragraph", text: "Software architecture describes the major components or subsystems of a software system, their responsibilities, their relationships and important constraints. Architecture provides a high-level structure that guides detailed design and helps stakeholders reason about qualities such as performance, security, availability and maintainability." },
          { kind: "diagram", diagramId: "bca-se-architecture-layers", caption: "Illustrative layered architecture showing presentation, application, domain and data responsibilities." },
          { kind: "table", headers: ["Architectural concern", "Question"], rows: [
            ["Structure", "What are the major components?"],
            ["Interaction", "How do components communicate?"],
            ["Quality attributes", "How will performance, security or maintainability be supported?"],
            ["Deployment", "Where will components execute and what resources do they need?"]
          ]}
        ]
      },
      {
        id: "design-patterns",
        title: "3. Design Patterns",
        icon: "GitCompare",
        blocks: [
          { kind: "paragraph", text: "A design pattern is a reusable description of a recurring design problem, its context and a general solution structure. A pattern is not a ready-made program; it guides design decisions. Patterns help designers communicate proven structures and avoid repeatedly solving common design problems from scratch." },
          { kind: "table", headers: ["Pattern idea", "Meaning"], rows: [
            ["Problem", "A recurring design situation that requires a solution."],
            ["Context", "Conditions in which the problem occurs."],
            ["Solution", "A reusable arrangement of responsibilities and collaborations."],
            ["Consequences", "Benefits, trade-offs and effects of applying the pattern."]
          ]},
          { kind: "callout", tone: "example", title: "Simple example", text: "An observer-style relationship can be used when several dependent objects need to be informed when a subject changes. The pattern organizes the dependency rather than prescribing one specific programming language implementation." }
        ]
      },
      {
        id: "modularity",
        title: "4. Modularity",
        icon: "Package",
        blocks: [
          { kind: "paragraph", text: "Modularity divides a software system into separately understandable and manageable modules. Good modularity makes responsibilities clearer, limits the effect of changes and supports testing and maintenance. A module should have a coherent purpose and controlled interfaces with other modules." },
          { kind: "diagram", diagramId: "bca-se-modularity", caption: "Modular decomposition: a system divided into cohesive modules with controlled interfaces." }
        ]
      },
      {
        id: "cohesion-and-coupling",
        title: "5. Cohesion and Coupling",
        icon: "GitCompareArrows",
        blocks: [
          { kind: "paragraph", text: "Cohesion measures how strongly the responsibilities within a module belong together. Coupling describes the degree of dependence between modules. In general design guidance, designers seek high cohesion within modules and appropriately low coupling between modules because this improves understandability, change isolation and maintainability." },
          { kind: "table", headers: ["Concept", "Preferred design direction", "Reason"], rows: [
            ["Cohesion", "Higher", "Related responsibilities stay together."],
            ["Coupling", "Lower", "Changes in one module are less likely to propagate unnecessarily."]
          ]},
          { kind: "callout", tone: "info", title: "Exam point", text: "Do not confuse cohesion with coupling: cohesion is primarily about relationships inside a module; coupling is primarily about relationships between modules." }
        ]
      },
      {
        id: "information-hiding",
        title: "6. Information Hiding",
        icon: "FileUser",
        blocks: [
          { kind: "paragraph", text: "Information hiding means designing modules so that implementation decisions likely to change are kept private behind stable interfaces. Other modules depend on the published interface rather than the hidden implementation details. This reduces the impact of change." },
          { kind: "callout", tone: "example", title: "Example", text: "A database access module can expose operations such as saveStudent() and findStudent() while hiding connection management, SQL construction and transaction details from the rest of the application." }
        ]
      },
      {
        id: "functional-independence",
        title: "7. Functional Independence",
        icon: "Target",
        blocks: [
          { kind: "paragraph", text: "Functional independence means that a module performs a focused responsibility and has limited dependence on other modules. Cohesion and coupling are important indicators of functional independence. A functionally independent module is easier to understand, test, reuse and modify." }
        ]
      },
      {
        id: "user-interface-design",
        title: "8. User Interface Design",
        icon: "MonitorPlay",
        blocks: [
          { kind: "paragraph", text: "User interface design defines how users interact with software through screens, controls, navigation, messages and feedback. Good interface design considers user goals, consistency, visibility of system status, error prevention, learnability and accessibility." },
          { kind: "table", headers: ["Principle", "Application"], rows: [
            ["Consistency", "Use similar terminology, controls and navigation patterns."],
            ["Feedback", "Tell the user what happened after an action."],
            ["Error prevention", "Constrain invalid input and provide understandable guidance."],
            ["Visibility", "Make important status and available actions easy to discover."],
            ["Accessibility", "Support users with different abilities and interaction needs."]
          ]}
        ]
      },
      {
        id: "information-presentation",
        title: "9. Information Presentation and Interface Evaluation",
        icon: "Presentation",
        blocks: [
          { kind: "paragraph", text: "Information presentation concerns how data and messages are organized so that users can perceive, understand and act on them. Interface evaluation checks whether the interface supports user tasks effectively. Evaluation can use representative users, task observation, usability inspection, prototypes and feedback." },
          { kind: "callout", tone: "example", title: "Evaluation example", text: "For a student result portal, an evaluation task could ask representative users to find a semester result, identify a subject mark and print the result. Observed difficulties can reveal navigation or presentation problems." }
        ]
      },
      {
        id: "design-notation",
        title: "10. Design Notation",
        icon: "GitBranch",
        blocks: [
          { kind: "paragraph", text: "Design notation provides a structured way to communicate software structure and behavior. Depending on the design approach, notation can represent classes, components, interactions, states, data flows or other relationships. A notation is useful when it reduces ambiguity and gives developers and reviewers a common visual language." },
          { kind: "diagram", diagramId: "bca-se-design-notation", caption: "Illustrative design notation linking components, interfaces and interactions." }
        ]
      }
    ],
    keyTerms: [
      { term: "Abstraction", definition: "Representation of essential characteristics while suppressing unnecessary detail." },
      { term: "Architecture", definition: "High-level organization of software components, relationships and constraints." },
      { term: "Design Pattern", definition: "A reusable description of a recurring design problem and a general solution structure." },
      { term: "Modularity", definition: "Division of a system into manageable modules with defined responsibilities." },
      { term: "Cohesion", definition: "Degree to which responsibilities within a module belong together." },
      { term: "Coupling", definition: "Degree of dependency between software modules." },
      { term: "Information Hiding", definition: "Keeping change-prone implementation decisions private behind stable interfaces." },
      { term: "Functional Independence", definition: "A design property in which a module has a focused responsibility and limited external dependence." },
      { term: "Interface Evaluation", definition: "Assessment of an interface against user tasks, usability and interaction goals." }
    ],
    examQuestions: [
      "Define abstraction and explain its role in software design. (Medium)",
      "Explain software architecture and its importance in system design. (Long)",
      "What is a design pattern? Explain its major elements and benefits. (Long)",
      "Explain modularity and discuss its advantages. (Medium)",
      "Differentiate cohesion and coupling with examples. (Long)",
      "Explain information hiding and functional independence. (Long)",
      "Discuss important principles of user interface design. (Long)",
      "Explain information presentation and interface evaluation. (Medium)",
      "What is design notation? Explain why notation is useful in software design. (Short)"
    ]
  },
  {
    unitNumber: 4,
    title: "Software Testing and Quality Assurance",
    hours: 8,
    headings: [
      {
        id: "testing-and-quality-assurance",
        title: "1. Software Testing and Quality Assurance",
        icon: "FileCheck",
        blocks: [
          { kind: "paragraph", text: "Software testing is the systematic execution and evaluation of software to find defects and obtain evidence about its behavior. Software quality assurance (SQA) is broader: it includes planned activities, standards, reviews, process controls and measurements intended to provide confidence that software processes and products satisfy stated quality requirements." },
          { kind: "table", headers: ["Testing", "Quality Assurance"], rows: [
            ["Focus", "Product behavior and defect detection", "Process and product quality activities"],
            ["Typical activities", "Test planning, test execution, defect reporting", "Standards, audits, reviews, process improvement"],
            ["Goal", "Find problems and evaluate behavior", "Prevent problems and improve confidence in quality"]
          ]}
        ]
      },
      {
        id: "verification-validation-techniques",
        title: "2. Verification, Validation and Testing Techniques",
        icon: "GitCompareArrows",
        blocks: [
          { kind: "paragraph", text: "Verification and validation provide complementary quality perspectives. Verification examines whether intermediate work products conform to requirements and design. Validation examines whether the resulting software is appropriate for its intended use. Testing provides evidence by executing software under selected conditions; reviews and inspections can examine work products without execution." },
          { kind: "callout", tone: "info", title: "Exam distinction", text: "A useful memory aid is: verification asks 'Are we building the product right?' while validation asks 'Are we building the right product?' The exact activities used to answer these questions depend on the development process." }
        ]
      },
      {
        id: "black-box-testing",
        title: "3. Black-Box and White-Box Testing",
        icon: "GitCompare",
        blocks: [
          { kind: "paragraph", text: "Black-box testing designs tests from externally visible requirements and behavior without relying on internal implementation details. White-box testing uses knowledge of internal structure, control flow or implementation to design tests. Both perspectives can reveal different classes of defects." },
          { kind: "table", headers: ["Aspect", "Black-box", "White-box"], rows: [
            ["Basis", "Requirements and observable behavior", "Internal structure and control flow"],
            ["Implementation knowledge", "Not required for test design", "Used for test design"],
            ["Typical objective", "Check externally visible behavior", "Exercise internal paths or structures"]
          ]}
        ]
      },
      {
        id: "unit-integration-system-testing",
        title: "4. Unit, Integration and System Testing",
        icon: "Layers",
        blocks: [
          { kind: "paragraph", text: "Unit testing focuses on individual units such as functions, classes or modules. Integration testing checks interactions and interfaces between combined components. System testing evaluates the complete integrated system against system-level requirements." },
          { kind: "diagram", diagramId: "bca-se-testing-levels", caption: "Testing levels from unit testing through integration and system testing." },
          { kind: "callout", tone: "example", title: "Example", text: "In a student portal, a grade-calculation function can be unit-tested first; the result service and database can then be tested together; finally, the complete portal can be tested using end-to-end student and staff workflows." }
        ]
      },
      {
        id: "design-of-test-cases",
        title: "5. Design of Test Cases",
        icon: "Table",
        blocks: [
          { kind: "paragraph", text: "A test case defines conditions, inputs, actions and expected results used to evaluate a specific behavior. Effective test design aims to cover important requirements, boundary conditions, representative valid inputs, invalid inputs and important interaction paths." },
          { kind: "table", headers: ["Test case element", "Purpose"], rows: [
            ["ID", "Uniquely identifies the test."],
            ["Precondition", "States what must be true before execution."],
            ["Input", "Defines data or actions supplied to the software."],
            ["Steps", "Specifies how the test is performed."],
            ["Expected result", "Defines the behavior against which actual behavior is compared."],
            ["Actual result / status", "Records what happened and whether the test passed."]
          ]},
          { kind: "callout", tone: "example", title: "Boundary example", text: "If an input field accepts marks from 0 to 100, useful tests include 0, 1, 99, 100 and values just outside the permitted range, rather than testing only a typical value such as 60." }
        ]
      },
      {
        id: "acceptance-testing",
        title: "6. Acceptance Testing",
        icon: "Users",
        blocks: [
          { kind: "paragraph", text: "Acceptance testing evaluates whether software satisfies agreed acceptance criteria and is suitable for delivery or operational use. It is often closely connected with business requirements and representative user workflows. The exact participants and formal acceptance process depend on the organization and contract." }
        ]
      },
      {
        id: "alpha-beta-testing",
        title: "7. Alpha and Beta Testing",
        icon: "Users",
        blocks: [
          { kind: "paragraph", text: "Alpha testing is typically performed in a controlled environment by the development organization or a closely managed group before wider release. Beta testing exposes a release candidate to a selected external or broader user group in a real or realistic environment to obtain additional feedback and discover issues that controlled testing may not reveal." }
        ]
      },
      {
        id: "quality-management",
        title: "8. Quality Management Activities",
        icon: "Settings",
        blocks: [
          { kind: "paragraph", text: "Quality management includes activities used to plan, assure, control and improve software quality. Typical activities include defining standards, reviews and inspections, test management, configuration control, defect analysis, measurement, audits and process improvement." },
          { kind: "table", headers: ["Activity", "Contribution"], rows: [
            ["Review", "Find problems in requirements, design, code or documents before later stages."],
            ["Audit", "Check conformance with defined processes or standards."],
            ["Measurement", "Provide evidence for monitoring and improvement."],
            ["Defect analysis", "Identify patterns and causes so recurring problems can be reduced."],
            ["Process improvement", "Modify practices based on evidence and lessons learned."]
          ]}
        ]
      },
      {
        id: "product-and-process-quality",
        title: "9. Product Quality and Process Quality",
        icon: "Scale",
        blocks: [
          { kind: "paragraph", text: "Product quality concerns properties of the delivered software such as functionality, reliability, usability, performance, security and maintainability. Process quality concerns the capability and consistency of the activities used to produce and maintain the software. Strong process quality can support product quality, but process conformance alone does not guarantee that every product requirement has been satisfied." }
        ]
      },
      {
        id: "cmm",
        title: "10. Capability Maturity Model (CMM)",
        icon: "TrendingUp",
        blocks: [
          { kind: "paragraph", text: "The Capability Maturity Model (CMM) is a framework for assessing and improving the maturity of software development processes. Its classic staged representation describes progressive levels of process discipline, from an ad hoc or unpredictable state toward defined, managed and continuously improving practices." },
          { kind: "table", headers: ["Classic CMM level", "General characterization"], rows: [
            ["1 — Initial", "Processes are ad hoc and success depends heavily on individual effort."],
            ["2 — Repeatable", "Basic project management practices make earlier successes more repeatable."],
            ["3 — Defined", "Processes are documented, standardized and used across the organization."],
            ["4 — Managed", "Processes are measured and controlled using quantitative information."],
            ["5 — Optimizing", "Continuous process improvement is emphasized using measurement and feedback."]
          ]},
          { kind: "callout", tone: "info", title: "Exam point", text: "The maturity levels describe increasing process capability; they are not a simple ranking of individual software products." }
        ]
      }
    ],
    keyTerms: [
      { term: "Software Testing", definition: "Systematic execution and evaluation used to find defects and obtain evidence about software behavior." },
      { term: "Quality Assurance", definition: "Planned activities and controls intended to provide confidence in software process and product quality." },
      { term: "Black-box Testing", definition: "Testing based primarily on externally visible requirements and behavior." },
      { term: "White-box Testing", definition: "Testing that uses knowledge of internal structure or implementation." },
      { term: "Unit Testing", definition: "Testing of an individual software unit such as a function, class or module." },
      { term: "Integration Testing", definition: "Testing of interactions and interfaces among combined components." },
      { term: "System Testing", definition: "Testing of the complete integrated system against system-level requirements." },
      { term: "Acceptance Testing", definition: "Testing against agreed acceptance criteria to determine suitability for delivery or use." },
      { term: "CMM", definition: "A staged framework for assessing and improving the maturity of software development processes." }
    ],
    examQuestions: [
      "Define software testing and explain its relationship with quality assurance. (Long)",
      "Differentiate verification and validation with suitable examples. (Long)",
      "Explain black-box and white-box testing. (Medium)",
      "Explain unit, integration and system testing with examples. (Long)",
      "What is a test case? Explain its important elements and test design considerations. (Long)",
      "Explain acceptance testing. (Short)",
      "Differentiate alpha and beta testing. (Medium)",
      "Discuss major quality management activities in software engineering. (Long)",
      "Differentiate product quality and process quality. (Medium)",
      "Explain the Capability Maturity Model and its classic maturity levels. (Long)"
    ]
  },
  {
    unitNumber: 5,
    title: "Software Cost Estimation and Maintenance",
    hours: 8,
    headings: [
      {
        id: "software-cost-estimation-introduction",
        title: "1. Introduction to Software Cost Estimation",
        icon: "IndianRupee",
        blocks: [
          { kind: "paragraph", text: "Software cost estimation predicts the effort, time and financial resources needed to develop or maintain a software system. Estimates support feasibility analysis, budgeting, staffing, scheduling and project control. Estimation is inherently uncertain, so assumptions, ranges and refinement are important." },
          { kind: "diagram", diagramId: "bca-se-estimation-factors", caption: "Major factors influencing software cost estimation." }
        ]
      },
      {
        id: "software-cost-factors",
        title: "2. Software Cost Factors",
        icon: "TrendingUp",
        blocks: [
          { kind: "paragraph", text: "Important cost factors include product size, complexity, required reliability, team capability, technology, tools, reuse, documentation, development process, integration effort, testing, schedule constraints and required quality. Organizational and environmental factors can also affect productivity." },
          { kind: "table", headers: ["Factor", "Possible cost effect"], rows: [
            ["Size", "Larger systems generally require more analysis, implementation, testing and maintenance."],
            ["Complexity", "Higher complexity increases design, integration and defect-management effort."],
            ["Reliability requirement", "Higher reliability expectations can require additional engineering and testing."],
            ["Team capability", "Skill and experience influence productivity and defect rates."],
            ["Technology", "New or immature technology can add learning and technical risk."],
            ["Schedule pressure", "Aggressive schedules may require additional staffing or may increase coordination and rework."]
          ]}
        ]
      },
      {
        id: "cost-estimation-techniques",
        title: "3. Software Cost Estimation Techniques",
        icon: "Sigma",
        blocks: [
          { kind: "paragraph", text: "Common estimation approaches include expert judgment, analogy, decomposition and algorithmic or parametric models. Expert judgment uses experienced practitioners; analogy compares with completed projects; decomposition estimates smaller components and aggregates them; algorithmic models use defined relationships between size, effort and other project attributes." },
          { kind: "table", headers: ["Technique", "Basic idea", "Advantage", "Limitation"], rows: [
            ["Expert judgment", "Experienced people estimate effort and cost.", "Fast and practical.", "Can be subjective."],
            ["Estimation by analogy", "Compare with similar completed projects.", "Uses organizational experience.", "Requires genuinely comparable historical data."],
            ["Decomposition", "Estimate components/tasks and aggregate.", "Makes large problems manageable.", "Errors in component estimates can accumulate."],
            ["Algorithmic model", "Apply a defined quantitative relationship.", "Repeatable and explicit.", "Depends on suitable inputs and calibration."]
          ]},
          { kind: "callout", tone: "example", title: "Simple decomposition example", text: "Suppose a team estimates three work packages as 12, 18 and 10 person-days. A basic additive estimate is 12 + 18 + 10 = 40 person-days, before adding any separately estimated project-wide activities or contingency." }
        ]
      },
      {
        id: "staffing-level-estimation",
        title: "4. Staffing Level Estimation",
        icon: "Users",
        blocks: [
          { kind: "paragraph", text: "Staffing estimation concerns the number and mix of people required over time. A project does not necessarily need the same staffing level throughout its life cycle. Requirements, architecture, implementation, testing and maintenance can have different staffing patterns, and communication overhead can rise as team size increases." },
          { kind: "callout", tone: "info", title: "Exam point", text: "Do not assume that doubling staff automatically halves project duration. Communication, coordination, onboarding and task dependencies can reduce the benefit of additional people, especially on tightly coupled work." }
        ]
      },
      {
        id: "maintenance-cost-estimation",
        title: "5. Estimating Software Maintenance Costs",
        icon: "RefreshCw",
        blocks: [
          { kind: "paragraph", text: "Software maintenance is the modification of software after delivery to correct faults, adapt to environmental changes, improve functionality or address quality and operational needs. Maintenance cost depends on system size, age, architecture, documentation, code quality, staff familiarity, change complexity, testing effort and the frequency of requested changes." },
          { kind: "table", headers: ["Maintenance category", "Typical purpose"], rows: [
            ["Corrective", "Correct faults discovered after delivery."],
            ["Adaptive", "Adapt software to changed environments, platforms, interfaces or external requirements."],
            ["Perfective", "Improve functionality, performance, usability or other desired qualities."],
            ["Preventive", "Reduce future problems through restructuring, documentation, refactoring or other maintainability improvements."]
          ]},
          { kind: "diagram", diagramId: "bca-se-maintenance-types", caption: "Four common categories of software maintenance and their purposes." }
        ]
      },
      {
        id: "maintenance-estimation-example",
        title: "6. Maintenance Estimation Example",
        icon: "Scale",
        blocks: [
          { kind: "paragraph", text: "A maintenance estimate should identify the requested change, affected components, analysis and design effort, implementation, testing, deployment and documentation. The estimator should also consider regression testing because a small code change can affect existing behavior." },
          { kind: "callout", tone: "example", title: "Worked estimation example", text: "If a change is estimated as 2 person-days for analysis/design, 3 for implementation, 2 for testing and 1 for deployment/documentation, the direct estimate is 2 + 3 + 2 + 1 = 8 person-days. Any contingency or project overhead should be stated separately rather than hidden inside the arithmetic." }
        ]
      },
      {
        id: "estimation-and-maintenance-summary",
        title: "7. Estimation and Maintenance: Exam Summary",
        icon: "BookOpen",
        blocks: [
          { kind: "paragraph", text: "For examination answers, connect estimation with project planning and explain why estimates are uncertain. Then distinguish effort, elapsed time and cost: effort is usually measured in person-time, elapsed time is calendar duration, and cost is the financial value associated with labor and other resources. For maintenance, explain both the categories and the factors that make changes expensive." },
          { kind: "table", headers: ["Term", "Meaning"], rows: [
            ["Effort", "Amount of human work required, commonly expressed in person-hours or person-days."],
            ["Elapsed time", "Calendar duration from project start to completion of a defined activity or release."],
            ["Cost", "Financial resources consumed by labor, tools, infrastructure and other project expenses."],
            ["Estimate", "A reasoned prediction based on available information and assumptions."]
          ]}
        ]
      }
    ],
    keyTerms: [
      { term: "Software Cost Estimation", definition: "Prediction of effort, time and financial resources required for software work." },
      { term: "Effort", definition: "Amount of human work required to perform a task or complete a project." },
      { term: "Elapsed Time", definition: "Calendar duration between relevant start and end points." },
      { term: "Expert Judgment", definition: "Estimation based on the knowledge and experience of qualified practitioners." },
      { term: "Analogy Estimation", definition: "Estimation based on comparison with similar completed projects." },
      { term: "Decomposition", definition: "Breaking a project into smaller components or tasks and estimating them separately." },
      { term: "Algorithmic Estimation", definition: "Quantitative estimation using a defined mathematical or parametric relationship." },
      { term: "Corrective Maintenance", definition: "Maintenance performed to correct discovered faults." },
      { term: "Adaptive Maintenance", definition: "Maintenance performed to adapt software to changed environments or requirements." },
      { term: "Perfective Maintenance", definition: "Maintenance that improves functionality, performance, usability or other desired qualities." },
      { term: "Preventive Maintenance", definition: "Maintenance intended to reduce the probability or impact of future problems." }
    ],
    examQuestions: [
      "Define software cost estimation and explain its importance in project planning. (Long)",
      "Discuss the major factors affecting software cost estimation. (Long)",
      "Explain different software cost estimation techniques with advantages and limitations. (Long)",
      "Differentiate expert judgment, analogy, decomposition and algorithmic estimation. (Medium)",
      "Explain staffing level estimation and factors affecting team size. (Medium)",
      "What is software maintenance? Explain its major categories. (Long)",
      "Explain corrective, adaptive, perfective and preventive maintenance with examples. (Long)",
      "Discuss the factors affecting software maintenance cost. (Long)",
      "Differentiate effort, elapsed time and cost. (Medium)",
      "Solve a simple software effort estimate using decomposition and explain the assumptions. (Medium)"
    ]
  }
];
