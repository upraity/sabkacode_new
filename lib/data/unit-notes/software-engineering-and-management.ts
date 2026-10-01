import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Software Engineering and Management (BMB IT 01)
// — BMB IT Electives, MBA Semester 3. English explanations follow the supplied syllabus.
export const softwareEngineeringAndManagementUnitNotesUnitNotes: UnitNote[] = [
  {
    "unitNumber": 1,
    "title": "Introduction to Information System Development",
    "hours": 6,
    "headings": [
      {
        "id": "system-development-overview",
        "title": "1. Information System Development and System Design",
        "icon": "BookOpen",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Information System Development is the systematic process of identifying an organizational problem or opportunity, analysing information requirements, designing a solution, implementing it, and maintaining the resulting system. System analysis concentrates on understanding what the organization needs; system design translates those requirements into a workable technical and organizational solution."
          },
          {
            "kind": "table",
            "headers": [
              "Stage",
              "Main question",
              "Typical output"
            ],
            "rows": [
              [
                "Problem/opportunity identification",
                "Why is change needed?",
                "Problem statement and objectives"
              ],
              [
                "Analysis",
                "What must the system do?",
                "Requirements, process and data models"
              ],
              [
                "Design",
                "How will it work?",
                "Architecture, database and interface design"
              ],
              [
                "Implementation",
                "How will it be introduced?",
                "Configured/developed system and migration"
              ],
              [
                "Maintenance/evaluation",
                "Does it continue to meet needs?",
                "Fixes, enhancements and review"
              ]
            ]
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Exam focus",
            "text": "In a long answer, distinguish analysis from design clearly: analysis defines the required behaviour and information; design specifies the structure and mechanisms used to deliver that behaviour."
          }
        ]
      },
      {
        "id": "business-system-concepts",
        "title": "2. Business System Concepts and Information",
        "icon": "Layers",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A business system is a coordinated set of people, processes, resources, data and technologies used to achieve organizational objectives. An information system supports that system by collecting, processing, storing and distributing information. Data are raw facts; information is processed or interpreted data that is useful for decision-making."
          },
          {
            "kind": "table",
            "headers": [
              "Concept",
              "Meaning",
              "Example"
            ],
            "rows": [
              [
                "Data",
                "Raw recorded facts",
                "Order quantity = 25"
              ],
              [
                "Information",
                "Processed data with meaning",
                "Monthly demand increased by 12%"
              ],
              [
                "System",
                "Interrelated elements working toward an objective",
                "Order processing system"
              ],
              [
                "Information system",
                "People, processes, data and technology working together",
                "Sales information system"
              ]
            ]
          }
        ]
      },
      {
        "id": "categories-information-systems",
        "title": "3. Categories of Information Systems",
        "icon": "LayoutTemplate",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Organizations commonly use different information systems for different managerial levels and business functions. Transaction processing systems capture routine transactions; management information systems convert operational data into structured reports; decision support systems support semi-structured decisions; executive information systems provide high-level summaries and trends."
          },
          {
            "kind": "table",
            "headers": [
              "System category",
              "Primary purpose",
              "Typical users"
            ],
            "rows": [
              [
                "TPS",
                "Record routine transactions",
                "Operational staff"
              ],
              [
                "MIS",
                "Periodic management reporting",
                "Middle managers"
              ],
              [
                "DSS",
                "Analysis and decision support",
                "Managers/analysts"
              ],
              [
                "EIS/ESS",
                "Strategic overview",
                "Senior executives"
              ],
              [
                "Functional systems",
                "Support a specific function",
                "Departmental users"
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "it01-is-levels",
            "caption": "Relationship between operational, managerial and strategic information systems."
          },
          {
            "kind": "diagram",
            "diagramId": "it01-is-levels",
            "caption": "Information-system levels and decision support."
          }
        ]
      },
      {
        "id": "system-development-strategies",
        "title": "4. Strategies for System Development",
        "icon": "GitBranch",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A development strategy determines how an organization will acquire and introduce an information system. The choice depends on scope, uncertainty, resources, risk, urgency, integration requirements and user involvement."
          },
          {
            "kind": "bullets",
            "items": [
              "In-house development gives the organization direct control but requires internal technical capability.",
              "Package acquisition can reduce development time but may require process changes or customization.",
              "Outsourcing transfers selected development or operational work to an external provider; governance and service-level controls remain important.",
              "Prototyping develops an early working model so requirements can be clarified through user feedback.",
              "Iterative approaches deliver and refine functionality in repeated cycles rather than waiting for one final release."
            ]
          }
        ]
      },
      {
        "id": "portfolio-and-application-development",
        "title": "5. Implementation and Evaluation of Systems",
        "icon": "RefreshCw",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Implementation converts the approved design into operational use. Major activities include configuration or coding, testing, data conversion, training, documentation, deployment and post-implementation review. Evaluation checks whether the system achieved its stated objectives, performs reliably, is accepted by users and provides expected organizational benefits."
          },
          {
            "kind": "paragraph",
            "text": "The application development portfolio is the collection of current, planned and proposed applications. Portfolio thinking helps management compare projects, dependencies, risks, costs and strategic contribution instead of treating each application as an isolated investment."
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "Mini case",
            "text": "A retailer replacing a manual stock register should first document the current process and requirements, then design inventory data and workflows, test the application with representative transactions, train staff, migrate opening balances and review whether stock accuracy and reporting improved."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "System analysis",
        "definition": "Systematic study of business problems, processes, information and requirements before solution design."
      },
      {
        "term": "System design",
        "definition": "Specification of how the proposed system, data, interfaces, controls and components will operate."
      },
      {
        "term": "Information system",
        "definition": "A coordinated arrangement of people, processes, data and technology that produces useful information."
      },
      {
        "term": "Transaction Processing System",
        "definition": "An operational system that records and processes routine business transactions."
      },
      {
        "term": "Decision Support System",
        "definition": "A system that supports analysis and semi-structured managerial decisions."
      },
      {
        "term": "Prototyping",
        "definition": "Building an early model of a system to clarify requirements and obtain user feedback."
      },
      {
        "term": "Application portfolio",
        "definition": "A managed collection of existing, planned and proposed business applications."
      },
      {
        "term": "Post-implementation review",
        "definition": "An evaluation after deployment to assess performance, benefits, risks and user acceptance."
      }
    ],
    "examQuestions": [
      "Explain the system development process and distinguish system analysis from system design. (Long)",
      "Discuss the role of information systems in business organizations. (Long)",
      "Differentiate data, information and knowledge with suitable business examples. (Medium)",
      "Explain the major categories of information systems and their users. (Long)",
      "What is prototyping? Explain its role in requirements clarification. (Medium)",
      "Discuss major strategies for system development and their implications. (Long)",
      "Explain the importance of application portfolio management. (Medium)",
      "What activities are performed during system implementation? (Short)",
      "What is a post-implementation review? (Short)"
    ]
  },
  {
    "unitNumber": 2,
    "title": "Analysis Techniques & Tools",
    "hours": 8,
    "headings": [
      {
        "id": "requirements-analysis",
        "title": "1. Information Requirement Analysis",
        "icon": "FileCheck",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Information requirement analysis identifies what information users need, when they need it, how it should be presented, what transactions create or update it, and what controls apply. Analysts gather requirements through interviews, observation, document analysis, questionnaires, workshops and review of existing systems."
          },
          {
            "kind": "table",
            "headers": [
              "Requirement type",
              "Question to ask",
              "Example"
            ],
            "rows": [
              [
                "Functional",
                "What must the system do?",
                "Create and approve purchase orders"
              ],
              [
                "Data",
                "What information is needed?",
                "Supplier, item, quantity, price"
              ],
              [
                "Control",
                "What must be prevented or detected?",
                "Only authorized users approve orders"
              ],
              [
                "Performance",
                "How well must it work?",
                "Reports available within an agreed response time"
              ],
              [
                "User/interface",
                "How will users interact?",
                "Search, form and dashboard requirements"
              ]
            ]
          }
        ]
      },
      {
        "id": "system-documentation",
        "title": "2. System Documentation",
        "icon": "FileText",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "System documentation describes how a system is organized, operates and is maintained. It may include process descriptions, data definitions, program or configuration documentation, user manuals, control procedures, interface specifications and maintenance records."
          },
          {
            "kind": "paragraph",
            "text": "Good documentation reduces dependence on individual employees, supports training and maintenance, and provides evidence for control and audit activities. Documentation should be version-controlled and updated when the system changes."
          }
        ]
      },
      {
        "id": "structured-analysis",
        "title": "3. Structured Analysis: DFD, Data Dictionary and ERD",
        "icon": "GitCompare",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Structured analysis decomposes a complex system into understandable models. A Data Flow Diagram (DFD) shows how data move between external entities, processes and data stores. A data dictionary defines the meaning, format and characteristics of data elements. An Entity-Relationship Diagram (ERD) models entities, attributes and relationships used in data design."
          },
          {
            "kind": "table",
            "headers": [
              "Tool",
              "Represents",
              "Key purpose"
            ],
            "rows": [
              [
                "Context diagram",
                "System and external entities",
                "Defines system boundary and major flows"
              ],
              [
                "DFD",
                "Processes, flows, stores, entities",
                "Explains movement and transformation of data"
              ],
              [
                "Data dictionary",
                "Data elements and structures",
                "Standardizes data definitions"
              ],
              [
                "ERD",
                "Entities and relationships",
                "Supports database design"
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "it01-analysis-models",
            "caption": "How requirements are translated into complementary analysis models."
          },
          {
            "kind": "diagram",
            "diagramId": "it01-analysis-models",
            "caption": "Complementary structured-analysis models."
          }
        ]
      },
      {
        "id": "case-tools",
        "title": "4. CASE Tools",
        "icon": "Cpu",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Computer-Aided Software Engineering (CASE) tools support activities such as modelling, documentation, repository management, code generation, testing and configuration management. Their value comes from consistency, traceability and reduced repetitive work."
          },
          {
            "kind": "bullets",
            "items": [
              "Upper CASE tools mainly support early activities such as planning, requirements and analysis.",
              "Lower CASE tools support implementation, testing and maintenance activities.",
              "Integrated CASE attempts to support a broader lifecycle through shared repositories and connected models.",
              "CASE tools do not replace analyst judgment; poor requirements or incorrect models can still produce a poor system."
            ]
          }
        ]
      },
      {
        "id": "project-planning-cost",
        "title": "5. Project Planning, Cost Estimation and Risk",
        "icon": "CalendarClock",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "System projects require a defined scope, deliverables, schedule, responsibilities, resources, assumptions and risks. Cost estimation should consider development effort, infrastructure, software, training, migration, support and contingency where appropriate. Work Breakdown Structure (WBS) decomposes a project into manageable work packages."
          },
          {
            "kind": "table",
            "headers": [
              "Risk area",
              "Typical example",
              "Response"
            ],
            "rows": [
              [
                "Scope",
                "Uncontrolled requirement additions",
                "Change control and prioritization"
              ],
              [
                "Schedule",
                "Critical task delay",
                "Dependency tracking and contingency"
              ],
              [
                "Technical",
                "Integration failure",
                "Prototype and interface testing"
              ],
              [
                "People",
                "Key skill unavailable",
                "Cross-training and resource planning"
              ],
              [
                "Security",
                "Unauthorized access",
                "Access control and testing"
              ]
            ]
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Exam tip",
            "text": "A strong answer connects estimation with scope, effort, resources and assumptions. A cost number without its basis is not a reliable estimate."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Requirement analysis",
        "definition": "Process of identifying and documenting information, functional, control and performance needs."
      },
      {
        "term": "DFD",
        "definition": "A model showing how data move between processes, external entities and data stores."
      },
      {
        "term": "Data dictionary",
        "definition": "A repository describing data elements, structures, meanings and characteristics."
      },
      {
        "term": "ERD",
        "definition": "A diagram representing entities, attributes and relationships for data modelling."
      },
      {
        "term": "CASE",
        "definition": "Computer-Aided Software Engineering tools that support software development activities."
      },
      {
        "term": "WBS",
        "definition": "Work Breakdown Structure; hierarchical decomposition of project work into manageable components."
      },
      {
        "term": "Risk",
        "definition": "An uncertain event or condition that can affect project objectives."
      },
      {
        "term": "Scope",
        "definition": "The defined boundaries and deliverables of a project or system."
      }
    ],
    "examQuestions": [
      "Explain information requirement analysis and the techniques used to gather requirements. (Long)",
      "Explain DFDs and their role in structured analysis. (Long)",
      "Differentiate DFD, data dictionary and ERD. (Long)",
      "What is system documentation and why is it important? (Medium)",
      "Explain CASE tools and their major categories. (Medium)",
      "Discuss project planning fundamentals for information systems. (Long)",
      "Explain WBS and its usefulness in project planning. (Medium)",
      "Discuss cost estimation and the factors affecting system project cost. (Long)",
      "Identify major system project risks and suitable responses. (Medium)",
      "What is a context diagram? (Short)"
    ]
  },
  {
    "unitNumber": 3,
    "title": "System Design and Data Management",
    "hours": 8,
    "headings": [
      {
        "id": "design-principles",
        "title": "1. Principles of System Design",
        "icon": "PenTool",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "System design converts analysed requirements into a detailed blueprint. A sound design aims for clarity, modularity, maintainability, reliability, security, usability and appropriate performance. Separation of concerns helps keep different responsibilities understandable and changeable."
          },
          {
            "kind": "table",
            "headers": [
              "Design concern",
              "Meaning",
              "Example"
            ],
            "rows": [
              [
                "Modularity",
                "Divide a system into understandable components",
                "Separate order, payment and reporting modules"
              ],
              [
                "Maintainability",
                "Make changes easier and safer",
                "Clear interfaces and documentation"
              ],
              [
                "Scalability",
                "Support increased workload",
                "Architecture capable of adding capacity"
              ],
              [
                "Security",
                "Protect systems and information",
                "Authentication and authorization"
              ],
              [
                "Usability",
                "Support effective user interaction",
                "Consistent forms and feedback"
              ]
            ]
          }
        ]
      },
      {
        "id": "input-output-design",
        "title": "2. Input-Output Design",
        "icon": "AppWindow",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Input design determines how users or other systems supply data. Good input design minimizes errors through validation, clear labels, appropriate defaults and controlled formats. Output design determines how processed information is presented through reports, screens, notifications and dashboards."
          },
          {
            "kind": "bullets",
            "items": [
              "Validate required fields, ranges, formats and relationships where appropriate.",
              "Use meaningful labels and error messages that help users correct the problem.",
              "Design outputs for the decision or action they support rather than displaying unnecessary data.",
              "Consider confidentiality when displaying or exporting sensitive information."
            ]
          }
        ]
      },
      {
        "id": "ecommerce-design",
        "title": "3. Design for Business Applications and Online Catalogues",
        "icon": "ShoppingCart",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Business application design links user interactions, business rules, data storage and external services. An online catalogue generally requires product identification, descriptions, categories, prices, availability, search/filter functions and controlled updates. The catalogue should connect consistently with inventory, order and customer processes."
          },
          {
            "kind": "diagram",
            "diagramId": "it01-application-architecture",
            "caption": "Layered business application architecture from user interaction to data and external services."
          },
          {
            "kind": "table",
            "headers": [
              "Layer",
              "Responsibility",
              "Typical concern"
            ],
            "rows": [
              [
                "Presentation",
                "Screens and user interaction",
                "Usability and validation"
              ],
              [
                "Application/business",
                "Business rules and workflows",
                "Correct processing"
              ],
              [
                "Data",
                "Persistence and retrieval",
                "Integrity and consistency"
              ],
              [
                "Integration",
                "External systems/services",
                "Interfaces and reliability"
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "it01-application-architecture",
            "caption": "Layered business application architecture."
          }
        ]
      },
      {
        "id": "file-organization",
        "title": "4. File Organization and Design Techniques",
        "icon": "FolderOpen",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "File organization concerns how records are arranged and accessed in file-based systems. Common approaches include sequential, indexed and direct or hashed access. The choice depends on access patterns, update frequency, storage requirements and performance."
          },
          {
            "kind": "table",
            "headers": [
              "Organization",
              "Strength",
              "Limitation"
            ],
            "rows": [
              [
                "Sequential",
                "Simple for ordered batch processing",
                "Slow for arbitrary direct retrieval"
              ],
              [
                "Indexed",
                "Supports faster search through indexes",
                "Requires index maintenance and storage"
              ],
              [
                "Direct/hashed",
                "Efficient direct access for suitable keys",
                "Collision handling and key design matter"
              ]
            ]
          }
        ]
      },
      {
        "id": "database-concepts",
        "title": "5. Database Concepts and Design",
        "icon": "Database",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Database design structures data so that required information can be stored, retrieved and maintained consistently. Conceptual modelling identifies entities and relationships; logical design translates these into relations and constraints; physical design considers storage and access mechanisms."
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "Normalization example",
            "text": "If a customer table repeatedly stores multiple product columns such as Product1, Product2 and Product3, the structure becomes difficult to query and update. A separate order and order-item structure represents the repeating relationship more cleanly."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "System design",
        "definition": "Detailed specification of how a proposed information system will operate and be structured."
      },
      {
        "term": "Modularity",
        "definition": "Designing a system as manageable components with defined responsibilities and interfaces."
      },
      {
        "term": "Input validation",
        "definition": "Checking entered data against required rules before processing or storage."
      },
      {
        "term": "Output design",
        "definition": "Design of reports, screens, dashboards and other information presentations."
      },
      {
        "term": "Sequential file",
        "definition": "A file organization in which records are stored and commonly processed in sequence."
      },
      {
        "term": "Index",
        "definition": "An auxiliary structure used to improve retrieval of records or database rows."
      },
      {
        "term": "Normalization",
        "definition": "A database design process that reduces inappropriate redundancy and update anomalies."
      },
      {
        "term": "Business rule",
        "definition": "A rule or constraint that represents an organization's required way of conducting a process."
      }
    ],
    "examQuestions": [
      "Explain the principles of good system design. (Long)",
      "Discuss input and output design with suitable examples. (Long)",
      "Explain the architecture of a business application. (Medium)",
      "Discuss design considerations for an online catalogue. (Medium)",
      "Explain sequential, indexed and direct file organization. (Long)",
      "What is normalization and why is it useful? (Medium)",
      "Differentiate conceptual, logical and physical database design. (Long)",
      "Explain modularity and maintainability in system design. (Medium)",
      "What is input validation? Give examples. (Short)"
    ]
  },
  {
    "unitNumber": 4,
    "title": "System Analysis and Design in E-Commerce",
    "hours": 8,
    "headings": [
      {
        "id": "ecommerce-models",
        "title": "1. E-Commerce Models",
        "icon": "Globe",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "E-commerce refers to electronically enabled commercial transactions and supporting interactions. B2B involves transactions between businesses, B2C connects businesses with consumers, and C2C enables transactions between consumers through a platform or marketplace."
          },
          {
            "kind": "table",
            "headers": [
              "Model",
              "Participants",
              "Typical example"
            ],
            "rows": [
              [
                "B2B",
                "Business to business",
                "Supplier selling to a manufacturer"
              ],
              [
                "B2C",
                "Business to consumer",
                "Online retailer selling to a customer"
              ],
              [
                "C2C",
                "Consumer to consumer",
                "Marketplace facilitating resale between individuals"
              ]
            ]
          }
        ]
      },
      {
        "id": "advantages-limitations",
        "title": "2. Advantages and Disadvantages of E-Commerce",
        "icon": "Scale",
        "blocks": [
          {
            "kind": "table",
            "headers": [
              "Area",
              "Potential advantage",
              "Potential limitation"
            ],
            "rows": [
              [
                "Market reach",
                "Customers can be served beyond a physical location",
                "Competition and localization challenges"
              ],
              [
                "Convenience",
                "Transactions can be initiated online",
                "Dependence on connectivity and platform availability"
              ],
              [
                "Data",
                "Digital transactions can support analytics",
                "Privacy and security responsibilities"
              ],
              [
                "Cost",
                "Some physical-channel costs may be reduced",
                "Technology, logistics and platform costs remain"
              ],
              [
                "Service",
                "Self-service and automated communication",
                "Service failures can affect many users quickly"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "The impact depends on the business model, product, customer segment, logistics capability and technology maturity. Therefore, e-commerce design should be analysed as a business system rather than only as a website."
          }
        ]
      },
      {
        "id": "ecommerce-architecture",
        "title": "3. E-Commerce System Architecture",
        "icon": "Network",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "An e-commerce architecture typically coordinates presentation, application/business logic, data management, identity, payment or other external services, and operational support. The architecture must handle authentication, session management, transaction integrity, availability and secure communication."
          },
          {
            "kind": "diagram",
            "diagramId": "it01-ecommerce-architecture",
            "caption": "High-level e-commerce architecture linking customer interaction, application services, data and external services."
          },
          {
            "kind": "diagram",
            "diagramId": "it01-ecommerce-architecture",
            "caption": "High-level e-commerce architecture."
          }
        ]
      },
      {
        "id": "security-considerations",
        "title": "4. Security Considerations in E-Commerce",
        "icon": "AlertTriangle",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Security must protect confidentiality, integrity and availability while maintaining a usable customer experience. Controls include strong authentication, authorization, secure communications, input validation, logging, monitoring, backup and controlled access to administrative functions."
          },
          {
            "kind": "bullets",
            "items": [
              "Protect credentials and sessions against unauthorized use.",
              "Validate and constrain input to reduce application-layer attacks.",
              "Apply least-privilege access to administrative and service accounts.",
              "Maintain logs and monitoring appropriate to business and security needs.",
              "Protect backups and sensitive exports as carefully as live data."
            ]
          }
        ]
      },
      {
        "id": "ecommerce-analysis-design",
        "title": "5. Analysis and Design Approach",
        "icon": "GitCompareArrows",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A disciplined approach begins with stakeholder and customer needs, maps the purchase or service journey, identifies business rules and data, models integrations, designs the interface and controls, then tests complete scenarios such as browsing, checkout, payment confirmation, cancellation and returns."
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Exam structure",
            "text": "For a question on e-commerce system design, write the business model first, then architecture, data/process flow, security controls and a brief testing or implementation discussion."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "B2B",
        "definition": "Business-to-business electronic commerce."
      },
      {
        "term": "B2C",
        "definition": "Business-to-consumer electronic commerce."
      },
      {
        "term": "C2C",
        "definition": "Consumer-to-consumer electronic commerce, commonly facilitated by a marketplace."
      },
      {
        "term": "E-commerce architecture",
        "definition": "The coordinated technical structure supporting online commercial interactions and related services."
      },
      {
        "term": "Authentication",
        "definition": "Verification of the identity of a user or system."
      },
      {
        "term": "Authorization",
        "definition": "Determination of what an authenticated user or system is permitted to do."
      },
      {
        "term": "Transaction integrity",
        "definition": "Ensuring a transaction is processed consistently and without unauthorized alteration."
      },
      {
        "term": "Least privilege",
        "definition": "Giving an account only the access required for its legitimate tasks."
      }
    ],
    "examQuestions": [
      "Explain B2B, B2C and C2C e-commerce models. (Long)",
      "Discuss advantages and limitations of e-commerce systems. (Long)",
      "Explain the architecture of an e-commerce system. (Long)",
      "Discuss major security considerations in e-commerce. (Long)",
      "Explain authentication and authorization with examples. (Medium)",
      "Describe the analysis steps for an online shopping system. (Medium)",
      "Why is transaction integrity important in e-commerce? (Short)",
      "What is C2C e-commerce? (Short)",
      "Explain least privilege in an e-commerce environment. (Short)"
    ]
  },
  {
    "unitNumber": 5,
    "title": "Business System Development and Implementation",
    "hours": 10,
    "headings": [
      {
        "id": "testing-quality",
        "title": "1. System Testing and Quality Assurance",
        "icon": "FlaskConical",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "System testing evaluates the integrated system against specified requirements. Testing may include functional, integration, system, usability, performance and security-related testing as appropriate. Quality assurance is broader: it establishes processes and practices intended to prevent defects and improve the consistency of development and delivery."
          },
          {
            "kind": "table",
            "headers": [
              "Testing level/type",
              "Purpose",
              "Example"
            ],
            "rows": [
              [
                "Unit",
                "Check an individual component",
                "Validate a calculation function"
              ],
              [
                "Integration",
                "Check interaction between components",
                "Order service with inventory service"
              ],
              [
                "System",
                "Evaluate the complete integrated system",
                "End-to-end order scenario"
              ],
              [
                "Acceptance",
                "Determine whether user/business requirements are met",
                "Business user validates workflow"
              ]
            ]
          }
        ]
      },
      {
        "id": "documentation",
        "title": "2. System Documentation",
        "icon": "FileText",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Implementation requires technical and operational documentation. Technical documentation explains architecture, configuration, interfaces and maintenance procedures. User documentation explains normal operation, while training materials help users perform their tasks safely and consistently."
          },
          {
            "kind": "bullets",
            "items": [
              "Keep version numbers and change history.",
              "Document configuration and dependencies.",
              "Provide recovery and operational procedures where relevant.",
              "Update documentation as part of controlled change."
            ]
          }
        ]
      },
      {
        "id": "implementation-process",
        "title": "3. Implementation and Deployment",
        "icon": "Rocket",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Implementation can use direct changeover, phased deployment, pilot deployment or parallel operation. The appropriate approach depends on risk, complexity, organizational readiness and the cost of operating old and new systems together."
          },
          {
            "kind": "table",
            "headers": [
              "Approach",
              "Description",
              "Main consideration"
            ],
            "rows": [
              [
                "Direct",
                "Switch to the new system at once",
                "Fast but higher transition risk"
              ],
              [
                "Parallel",
                "Old and new operate together for a period",
                "Higher operating effort but comparison is possible"
              ],
              [
                "Pilot",
                "Deploy first to a limited group/location",
                "Limits initial exposure"
              ],
              [
                "Phased",
                "Introduce modules or functions in stages",
                "Requires careful dependency planning"
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "it01-implementation-cycle",
            "caption": "Implementation lifecycle from preparation through deployment and post-implementation support."
          },
          {
            "kind": "diagram",
            "diagramId": "it01-implementation-cycle",
            "caption": "Implementation and deployment cycle."
          }
        ]
      },
      {
        "id": "maintenance-support",
        "title": "4. System Maintenance and Support",
        "icon": "Settings",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Maintenance keeps a system useful after deployment. Corrective maintenance fixes discovered faults; adaptive maintenance changes the system for environmental changes; perfective maintenance improves performance or usability; preventive maintenance reduces the probability of future failures."
          },
          {
            "kind": "table",
            "headers": [
              "Maintenance type",
              "Purpose",
              "Illustration"
            ],
            "rows": [
              [
                "Corrective",
                "Remove defects",
                "Fix incorrect tax calculation"
              ],
              [
                "Adaptive",
                "Respond to changed environment",
                "Update for a changed external interface"
              ],
              [
                "Perfective",
                "Improve functionality or quality",
                "Improve report usability"
              ],
              [
                "Preventive",
                "Reduce future failure risk",
                "Refactor fragile components and improve monitoring"
              ]
            ]
          }
        ]
      },
      {
        "id": "security-auditing-bcp",
        "title": "5. Security, Auditing, Disaster Recovery and Business Continuity",
        "icon": "Shield",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Information-system security protects assets through administrative, technical and physical controls. Auditing provides independent or structured examination of controls, activities and evidence. Disaster recovery focuses on restoring technology and information capabilities after disruptive events; business continuity is broader and addresses how critical business operations continue or recover."
          },
          {
            "kind": "diagram",
            "diagramId": "it01-security-continuity",
            "caption": "Relationship between security controls, auditing, disaster recovery and business continuity."
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Important distinction",
            "text": "Disaster recovery is primarily concerned with restoring affected technology and information capabilities. Business continuity addresses the continued or timely resumption of critical business processes, which may involve people, facilities, suppliers and manual workarounds as well as IT."
          },
          {
            "kind": "diagram",
            "diagramId": "it01-security-continuity",
            "caption": "Security, audit, recovery and continuity relationship."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Quality assurance",
        "definition": "Planned practices and processes intended to improve and assure development and delivery quality."
      },
      {
        "term": "System testing",
        "definition": "Testing the integrated system against requirements and expected behaviour."
      },
      {
        "term": "Direct changeover",
        "definition": "Replacing the old system with the new system at one point in time."
      },
      {
        "term": "Parallel operation",
        "definition": "Running old and new systems together for a transition period."
      },
      {
        "term": "Corrective maintenance",
        "definition": "Maintenance performed to correct discovered defects."
      },
      {
        "term": "Adaptive maintenance",
        "definition": "Maintenance required because the operating environment has changed."
      },
      {
        "term": "Security audit",
        "definition": "A structured examination of security controls, evidence and practices."
      },
      {
        "term": "Disaster recovery",
        "definition": "Processes and capabilities for restoring technology and information services after disruption."
      },
      {
        "term": "Business continuity",
        "definition": "Capability to continue or recover critical business operations during and after disruption."
      }
    ],
    "examQuestions": [
      "Explain system testing and quality assurance and distinguish them. (Long)",
      "Discuss different approaches to system implementation. (Long)",
      "Explain system maintenance and its four major categories. (Long)",
      "Discuss security and auditing requirements in information systems. (Long)",
      "Differentiate disaster recovery and business continuity. (Medium)",
      "Explain the importance of system documentation during implementation. (Medium)",
      "What is pilot implementation? (Short)",
      "What is corrective maintenance? (Short)",
      "Explain preventive maintenance with an example. (Short)"
    ]
  }
] as UnitNote[];
