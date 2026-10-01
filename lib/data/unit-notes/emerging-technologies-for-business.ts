import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Emerging Technologies for Business (BMB IT 02)
// — BMB IT Electives, MBA Semester 3. English explanations follow the supplied syllabus.
export const emergingTechnologiesForBusinessUnitNotesUnitNotes: UnitNote[] = [
  {
    "unitNumber": 1,
    "title": "Foundations of Digital & Emerging Technologies",
    "hours": 8,
    "headings": [
      {
        "id": "digital-revolution",
        "title": "1. Evolution from Traditional to Digital Business",
        "icon": "History",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The digital revolution refers to the increasing use of digital technologies to create, process, communicate and analyse information. In business, the transition is not simply replacement of paper with software; it can change customer interaction, operating models, products, channels and decision-making."
          },
          {
            "kind": "table",
            "headers": [
              "Stage",
              "Business characteristic",
              "Technology emphasis"
            ],
            "rows": [
              [
                "Traditional operations",
                "Manual and physical processes dominate",
                "Paper records and local systems"
              ],
              [
                "Digitized processes",
                "Existing processes are represented digitally",
                "Enterprise software and databases"
              ],
              [
                "Digital business",
                "Processes and channels are redesigned around digital capabilities",
                "Cloud, analytics, platforms and automation"
              ],
              [
                "Emerging-tech business",
                "Advanced technologies create new capabilities",
                "AI, IoT, blockchain, immersive and advanced computing"
              ]
            ]
          }
        ]
      },
      {
        "id": "industry40",
        "title": "2. Industry 4.0 and Smart Manufacturing",
        "icon": "Factory",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Industry 4.0 describes a model of highly connected and data-driven industrial systems. Sensors, connectivity, analytics, automation and cyber-physical integration can support real-time monitoring, predictive maintenance, flexible production and traceability."
          },
          {
            "kind": "diagram",
            "diagramId": "it02-industry40",
            "caption": "Conceptual Industry 4.0 loop connecting physical processes, sensors, data platforms, analytics and action."
          },
          {
            "kind": "diagram",
            "diagramId": "it02-industry40",
            "caption": "Industry 4.0 data-to-action loop."
          }
        ]
      },
      {
        "id": "enabling-technologies",
        "title": "3. Digital Technologies as Business Enablers",
        "icon": "Cpu",
        "blocks": [
          {
            "kind": "bullets",
            "items": [
              "Cloud computing provides on-demand computing, storage and software capabilities over networks.",
              "Artificial intelligence and machine learning support pattern recognition, prediction, classification and automation.",
              "Internet of Things connects physical objects, sensors and systems for data exchange.",
              "Big data technologies support storage and analysis of large, varied and rapidly generated datasets.",
              "Programmable networks and APIs enable systems and devices to interact through defined interfaces."
            ]
          }
        ]
      },
      {
        "id": "automation",
        "title": "4. Devices, Networks and Automation",
        "icon": "Wifi",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Digital business increasingly combines devices, communication networks and automation. A sensor may collect operational data, a network may transport it, an analytics platform may interpret it, and an automated or human-controlled action may follow."
          },
          {
            "kind": "table",
            "headers": [
              "Component",
              "Role",
              "Business example"
            ],
            "rows": [
              [
                "Device/sensor",
                "Observe physical conditions",
                "Temperature sensor in cold storage"
              ],
              [
                "Network",
                "Move data",
                "Industrial wireless network"
              ],
              [
                "Platform",
                "Store/process data",
                "Cloud analytics service"
              ],
              [
                "Automation",
                "Execute or trigger action",
                "Alert or machine adjustment"
              ],
              [
                "Human decision",
                "Interpret context and govern action",
                "Manager approves intervention"
              ]
            ]
          }
        ]
      },
      {
        "id": "business-impact",
        "title": "5. Business Impact and Adoption",
        "icon": "Target",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Technology adoption should be evaluated through business objectives rather than novelty. Organizations should consider expected value, process fit, implementation cost, skills, integration, security, legal obligations and change-management requirements."
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Exam point",
            "text": "A technology is not automatically valuable because it is new. The business case should connect the technology to a defined problem, measurable objective and realistic implementation capability."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Digital transformation",
        "definition": "Organizational change in which digital capabilities reshape processes, products, services or business models."
      },
      {
        "term": "Industry 4.0",
        "definition": "A model of connected, data-driven and increasingly automated industrial operations."
      },
      {
        "term": "Cyber-physical system",
        "definition": "A system integrating computational elements with physical processes and feedback."
      },
      {
        "term": "IoT",
        "definition": "Internet of Things; networked physical objects capable of sensing, communication or interaction."
      },
      {
        "term": "Cloud computing",
        "definition": "On-demand network access to shared configurable computing resources and services."
      },
      {
        "term": "Automation",
        "definition": "Use of technology to perform or trigger tasks with reduced manual intervention."
      },
      {
        "term": "Programmable network",
        "definition": "A network whose behaviour can be controlled or configured through software-defined mechanisms."
      },
      {
        "term": "Emerging technology",
        "definition": "A developing technology whose business applications, capabilities or impacts are still evolving."
      }
    ],
    "examQuestions": [
      "Explain the evolution from traditional business systems to digital business. (Long)",
      "Discuss Industry 4.0 and its relevance to business. (Long)",
      "Explain how IoT, cloud and AI act as business enablers. (Long)",
      "What is a cyber-physical system? (Medium)",
      "Discuss programmable networks, devices and automation. (Medium)",
      "Explain the factors that should guide emerging-technology adoption. (Long)",
      "Differentiate digitization and digital transformation. (Medium)",
      "What is Industry 4.0? (Short)",
      "Define IoT. (Short)"
    ]
  },
  {
    "unitNumber": 2,
    "title": "Data Science, Big Data & Cloud Computing",
    "hours": 8,
    "headings": [
      {
        "id": "data-science-basics",
        "title": "1. Data Science and Data Value",
        "icon": "LineChart",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Data science combines data management, statistical reasoning, computational techniques and domain understanding to extract useful insights. The value chain can be viewed as collection, cleaning, storage, analysis, interpretation and action."
          },
          {
            "kind": "diagram",
            "diagramId": "it02-data-value-chain",
            "caption": "Data-to-decision pipeline showing how raw data becomes an actionable business insight."
          },
          {
            "kind": "diagram",
            "diagramId": "it02-data-value-chain",
            "caption": "Data value chain."
          }
        ]
      },
      {
        "id": "data-types",
        "title": "2. Data, Information, Data Value Chain and Types",
        "icon": "FileSpreadsheet",
        "blocks": [
          {
            "kind": "table",
            "headers": [
              "Type",
              "Description",
              "Business example"
            ],
            "rows": [
              [
                "Structured",
                "Organized in a predefined schema",
                "Sales transaction table"
              ],
              [
                "Semi-structured",
                "Has organizational markers but flexible structure",
                "JSON/XML records"
              ],
              [
                "Unstructured",
                "No fixed tabular schema",
                "Reviews, images, documents"
              ],
              [
                "Batch data",
                "Collected and processed periodically",
                "Daily sales file"
              ],
              [
                "Streaming data",
                "Generated continuously or near-continuously",
                "Sensor events"
              ]
            ]
          }
        ]
      },
      {
        "id": "big-data",
        "title": "3. Big Data Characteristics and Sources",
        "icon": "Layers",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Big data is commonly described through characteristics such as volume, velocity and variety; additional dimensions such as veracity and value are often used to emphasize data quality and usefulness. Sources include transaction systems, websites, mobile applications, sensors, social platforms and enterprise systems."
          },
          {
            "kind": "paragraph",
            "text": "Large data volume alone does not create business value. Data must be relevant, sufficiently reliable, accessible to appropriate users and connected to decisions or processes."
          }
        ]
      },
      {
        "id": "analytics-models",
        "title": "4. Analytics and Machine Learning Models",
        "icon": "Brain",
        "blocks": [
          {
            "kind": "table",
            "headers": [
              "Analytics type",
              "Question",
              "Illustration"
            ],
            "rows": [
              [
                "Descriptive",
                "What happened?",
                "Monthly sales dashboard"
              ],
              [
                "Diagnostic",
                "Why did it happen?",
                "Analysis of a sales decline"
              ],
              [
                "Predictive",
                "What may happen?",
                "Demand forecast"
              ],
              [
                "Prescriptive",
                "What should be done?",
                "Recommended inventory action"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Machine learning models can support classification, regression, clustering and other tasks. Model selection depends on the target problem, available data, quality, interpretability requirements and operational context."
          }
        ]
      },
      {
        "id": "cloud-platforms",
        "title": "5. Cloud Platforms and Service Models",
        "icon": "Cloud",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Cloud computing provides scalable access to computing resources. Common service models are Infrastructure as a Service (IaaS), Platform as a Service (PaaS) and Software as a Service (SaaS). Deployment choices can include public, private, hybrid and other organizational arrangements."
          },
          {
            "kind": "table",
            "headers": [
              "Model",
              "Provider commonly manages",
              "Customer primarily manages"
            ],
            "rows": [
              [
                "IaaS",
                "Physical infrastructure and virtualization",
                "OS, applications and data"
              ],
              [
                "PaaS",
                "Infrastructure and application platform",
                "Application code and data"
              ],
              [
                "SaaS",
                "Application stack and infrastructure",
                "Configuration, users and data use"
              ]
            ]
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Exam tip",
            "text": "When explaining cloud, define the service model before listing benefits. Then discuss scalability, access, cost model, security, dependency and governance."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Data science",
        "definition": "Interdisciplinary practice of extracting insight from data using computational, statistical and domain methods."
      },
      {
        "term": "Big data",
        "definition": "Large, complex or rapidly generated datasets requiring specialized approaches to storage and analysis."
      },
      {
        "term": "Data value chain",
        "definition": "Sequence through which data is collected, processed, analysed, interpreted and converted into action."
      },
      {
        "term": "Machine learning",
        "definition": "Computational methods that learn patterns from data for tasks such as prediction or classification."
      },
      {
        "term": "IaaS",
        "definition": "Cloud service model providing configurable computing infrastructure resources."
      },
      {
        "term": "PaaS",
        "definition": "Cloud service model providing a managed platform for application development and deployment."
      },
      {
        "term": "SaaS",
        "definition": "Cloud service model in which users access a provider-managed software application."
      },
      {
        "term": "Predictive analytics",
        "definition": "Analysis intended to estimate likely future outcomes using historical and current data."
      }
    ],
    "examQuestions": [
      "Explain the data value chain with a business example. (Long)",
      "Discuss the characteristics and sources of big data. (Long)",
      "Differentiate structured, semi-structured and unstructured data. (Medium)",
      "Explain descriptive, diagnostic, predictive and prescriptive analytics. (Long)",
      "Discuss machine learning applications in business. (Medium)",
      "Explain IaaS, PaaS and SaaS. (Long)",
      "Discuss cloud deployment considerations for organizations. (Long)",
      "What is big data? (Short)",
      "What is predictive analytics? (Short)"
    ]
  },
  {
    "unitNumber": 3,
    "title": "Artificial Intelligence, IoT & Computer Vision",
    "hours": 6,
    "headings": [
      {
        "id": "ai-fundamentals",
        "title": "1. Artificial Intelligence and Machine Learning",
        "icon": "Brain",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Artificial Intelligence (AI) refers broadly to computational systems designed to perform tasks associated with capabilities such as perception, reasoning, learning, language processing or decision support. Machine learning is a major AI approach in which models learn patterns from data."
          },
          {
            "kind": "table",
            "headers": [
              "Concept",
              "Meaning",
              "Business illustration"
            ],
            "rows": [
              [
                "AI",
                "Broad field of intelligent computational capabilities",
                "Automated document classification"
              ],
              [
                "Machine learning",
                "Learning patterns from data",
                "Demand prediction"
              ],
              [
                "Deep learning",
                "Machine learning using multi-layer neural architectures",
                "Image or speech recognition"
              ],
              [
                "Computer vision",
                "Analysis of visual information",
                "Quality inspection"
              ]
            ]
          }
        ]
      },
      {
        "id": "iot-architecture",
        "title": "2. IoT Architecture and Enabling Technologies",
        "icon": "Network",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "An IoT solution commonly contains sensing/actuation, connectivity, processing or edge capability, a platform/data layer, applications and human or automated actions. Security and device lifecycle management cut across the architecture."
          },
          {
            "kind": "diagram",
            "diagramId": "it02-iot-architecture",
            "caption": "IoT architecture from physical devices and sensors through connectivity and processing to business applications."
          },
          {
            "kind": "diagram",
            "diagramId": "it02-iot-architecture",
            "caption": "IoT architecture."
          }
        ]
      },
      {
        "id": "computer-vision",
        "title": "3. Computer Vision Applications",
        "icon": "MonitorPlay",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Computer vision enables software to interpret images or video for tasks such as classification, detection, inspection, counting and monitoring. In manufacturing, it can support quality inspection; in retail, it can support shelf or product analysis; in healthcare, it can assist image-based analysis subject to appropriate validation and governance."
          },
          {
            "kind": "paragraph",
            "text": "A computer-vision pipeline generally involves image acquisition, preprocessing, feature or representation extraction, model inference and interpretation/action."
          }
        ]
      },
      {
        "id": "integration",
        "title": "4. AI + IoT Integration",
        "icon": "GitCompareArrows",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "IoT generates data from the physical environment, while AI can analyse that data and produce predictions or decisions. Integration can therefore support predictive maintenance, anomaly detection, demand optimization and intelligent service delivery."
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "Illustrative flow",
            "text": "A machine sensor reports vibration data → the data platform stores and processes observations → an AI model estimates an abnormal pattern → the system raises an alert → maintenance staff investigate and decide the appropriate action."
          }
        ]
      },
      {
        "id": "business-smart-services",
        "title": "5. Intelligent Products and Smart Services",
        "icon": "Sparkles",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "AI and IoT can turn a conventional product into a connected product that reports status, supports remote monitoring or enables usage-based services. The business impact may include improved service responsiveness, operational insight and new revenue models, but also increased requirements for security, privacy and lifecycle management."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Artificial intelligence",
        "definition": "Computational approaches intended to perform tasks associated with intelligent behaviour."
      },
      {
        "term": "Machine learning",
        "definition": "Methods that learn patterns from data to perform specified tasks."
      },
      {
        "term": "Computer vision",
        "definition": "AI-related techniques for extracting information from images or video."
      },
      {
        "term": "IoT architecture",
        "definition": "Layered arrangement of devices, connectivity, processing, data/platform services and applications."
      },
      {
        "term": "Edge computing",
        "definition": "Processing data near the source or device instead of sending all processing to a distant central platform."
      },
      {
        "term": "Anomaly detection",
        "definition": "Identification of observations that differ materially from expected patterns."
      },
      {
        "term": "Predictive maintenance",
        "definition": "Maintenance planning informed by data-based estimates of equipment condition or failure risk."
      },
      {
        "term": "Smart service",
        "definition": "A service enhanced by connected devices, data and digital capabilities."
      }
    ],
    "examQuestions": [
      "Explain AI and machine learning and distinguish the two. (Long)",
      "Explain IoT architecture with a suitable diagram. (Long)",
      "Discuss computer vision applications in business. (Medium)",
      "Explain how AI and IoT can be integrated for smart products. (Long)",
      "Discuss predictive maintenance using IoT and AI. (Medium)",
      "What is edge computing? (Short)",
      "Define computer vision. (Short)",
      "Explain anomaly detection with an example. (Short)"
    ]
  },
  {
    "unitNumber": 4,
    "title": "Blockchain, 3D Printing & Other Disruptive Technologies",
    "hours": 12,
    "headings": [
      {
        "id": "blockchain-fundamentals",
        "title": "1. Blockchain Fundamentals",
        "icon": "GitBranch",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A blockchain is a distributed record structure in which transactions are grouped into blocks and linked using cryptographic techniques. Depending on the design, participants may maintain copies of the record and use a consensus mechanism to agree on additions."
          },
          {
            "kind": "diagram",
            "diagramId": "it02-blockchain-flow",
            "caption": "Illustrative transaction flow from proposed transaction through validation, block formation and ledger update."
          },
          {
            "kind": "diagram",
            "diagramId": "it02-blockchain-flow",
            "caption": "Blockchain transaction-to-ledger flow."
          }
        ]
      },
      {
        "id": "blockchain-use",
        "title": "2. Business Applications and Traceability",
        "icon": "FileCheck",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Blockchain can be considered where multiple parties need a shared record and trust or reconciliation is a significant issue. Potential applications include provenance, supply-chain traceability, selected financial workflows and credential or record verification. Suitability depends on governance, participants, privacy, performance and integration requirements."
          },
          {
            "kind": "table",
            "headers": [
              "Potential use",
              "Business objective",
              "Key design question"
            ],
            "rows": [
              [
                "Supply-chain traceability",
                "Track provenance/events",
                "Who records and validates events?"
              ],
              [
                "Shared records",
                "Reduce reconciliation between parties",
                "Who governs the shared ledger?"
              ],
              [
                "Credentials",
                "Verify issued records",
                "How are privacy and revocation handled?"
              ],
              [
                "Financial workflows",
                "Coordinate transaction records",
                "What compliance and settlement rules apply?"
              ]
            ]
          }
        ]
      },
      {
        "id": "3d-printing",
        "title": "3d-printing",
        "icon": "Factory",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "3D printing, or additive manufacturing, builds objects by adding material according to a digital model. It can support rapid prototyping, customized products, low-volume production and complex geometries. Business feasibility depends on material, equipment, quality requirements, production volume, post-processing and cost."
          },
          {
            "kind": "diagram",
            "diagramId": "it02-3d-printing",
            "caption": "Digital model to slicing/toolpath, layer-by-layer manufacturing and finished product."
          },
          {
            "kind": "diagram",
            "diagramId": "it02-3d-printing",
            "caption": "3D printing workflow."
          }
        ]
      },
      {
        "id": "advanced-computing",
        "title": "4. Advanced Computing and Quantum Concepts",
        "icon": "Cpu",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The syllabus places quantum computing under advanced disruptive technologies. Quantum computing uses quantum-mechanical principles and different computational representations from conventional binary computing. For business students, the important point is that quantum approaches are an emerging area with potential implications for selected optimization, simulation and cryptographic problems; practical applicability depends on hardware and algorithm maturity."
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Scope note",
            "text": "Quantum computing should be discussed as an emerging technology rather than presented as a universal replacement for conventional computers."
          }
        ]
      },
      {
        "id": "disruption-evaluation",
        "title": "5. Evaluating Disruptive Technology",
        "icon": "Scale",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A disruptive technology can alter established products, processes, channels or industry structures. Evaluation should consider the business problem, maturity, economics, ecosystem dependencies, skills, security, regulation and likely operational change."
          },
          {
            "kind": "bullets",
            "items": [
              "Define the business problem before choosing the technology.",
              "Separate a proof of concept from production readiness.",
              "Assess integration and data requirements.",
              "Identify new risks introduced by connectivity or automation.",
              "Measure business outcomes rather than technology adoption alone."
            ]
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Blockchain",
        "definition": "A distributed ledger structure in which records are grouped into linked blocks using cryptographic mechanisms."
      },
      {
        "term": "Distributed ledger",
        "definition": "A shared record maintained across multiple participants or nodes according to defined rules."
      },
      {
        "term": "Consensus",
        "definition": "A mechanism by which participating nodes agree on the validity or ordering of ledger updates."
      },
      {
        "term": "Traceability",
        "definition": "Ability to follow the history, movement or status of an item or event."
      },
      {
        "term": "3D printing",
        "definition": "Additive manufacturing that builds physical objects from digital models by adding material layer by layer."
      },
      {
        "term": "Additive manufacturing",
        "definition": "Manufacturing approach that creates an object by adding material rather than removing it from a larger piece."
      },
      {
        "term": "Quantum computing",
        "definition": "A computing paradigm based on quantum-mechanical principles and quantum information representations."
      },
      {
        "term": "Disruptive technology",
        "definition": "Technology capable of significantly changing existing products, processes, markets or business models."
      }
    ],
    "examQuestions": [
      "Explain blockchain technology and its basic working. (Long)",
      "Discuss business applications of blockchain. (Long)",
      "Explain how blockchain can support supply-chain traceability. (Medium)",
      "Explain 3D printing and its business applications. (Long)",
      "Discuss the advantages and limitations of additive manufacturing. (Medium)",
      "Explain the basic idea of quantum computing as an emerging technology. (Medium)",
      "What is distributed ledger technology? (Short)",
      "What is consensus in blockchain? (Short)",
      "Define 3D printing. (Short)"
    ]
  },
  {
    "unitNumber": 5,
    "title": "AR, VR, MR & Virtual Try-On in Business",
    "hours": 6,
    "headings": [
      {
        "id": "xr-concepts",
        "title": "1. AR, VR and MR",
        "icon": "MonitorPlay",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Augmented Reality (AR) overlays digital information on the user's view of the physical environment. Virtual Reality (VR) creates an immersive digitally generated environment. Mixed Reality (MR) combines physical and digital elements so that virtual content can interact with or remain anchored to the physical environment."
          },
          {
            "kind": "table",
            "headers": [
              "Technology",
              "Basic idea",
              "Business example"
            ],
            "rows": [
              [
                "AR",
                "Adds digital information to physical view",
                "Product information overlay"
              ],
              [
                "VR",
                "Immerses user in virtual environment",
                "Virtual training simulation"
              ],
              [
                "MR",
                "Blends physical and digital interaction",
                "Interactive industrial visualization"
              ]
            ]
          }
        ]
      },
      {
        "id": "virtual-try-on",
        "title": "2. Virtual Try-On and Customer Experience",
        "icon": "ShoppingCart",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Virtual try-on systems allow customers to preview products digitally before purchase. Depending on the product, this may use cameras, body/face tracking, computer vision, 3D assets and recommendation or visualization software."
          },
          {
            "kind": "diagram",
            "diagramId": "it02-virtual-tryon",
            "caption": "Customer journey for a virtual try-on experience from product selection to digital visualization and purchase decision."
          },
          {
            "kind": "diagram",
            "diagramId": "it02-virtual-tryon",
            "caption": "Virtual try-on customer flow."
          }
        ]
      },
      {
        "id": "business-applications",
        "title": "3. Business Applications",
        "icon": "Store",
        "blocks": [
          {
            "kind": "bullets",
            "items": [
              "Retail: visualize apparel, accessories, cosmetics or furniture before purchase.",
              "Training: provide simulated environments for repeated practice.",
              "Marketing: create interactive product demonstrations and experiences.",
              "Manufacturing: visualize designs, maintenance instructions or assembly information.",
              "Customer support: overlay contextual guidance during service activities."
            ]
          }
        ]
      },
      {
        "id": "implementation-challenges",
        "title": "4. Challenges and Opportunities",
        "icon": "AlertTriangle",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Immersive solutions require careful attention to device availability, content quality, tracking accuracy, user comfort, privacy, accessibility, integration and cost. The business opportunity is strongest when immersion improves a measurable customer, training or operational outcome."
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Exam focus",
            "text": "Do not treat AR, VR and MR as interchangeable terms. Start the answer with their distinction, then discuss use cases, technology requirements, benefits and implementation challenges."
          }
        ]
      },
      {
        "id": "ethics-business",
        "title": "5. Responsible Immersive Business Use",
        "icon": "Shield",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Immersive applications may collect images, movement, spatial or behavioural information. Organizations therefore need appropriate privacy, consent, security and governance practices. User experience should also consider accessibility and the risk of misleading visualization."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Augmented Reality",
        "definition": "Technology that overlays digital information or objects onto a view of the physical environment."
      },
      {
        "term": "Virtual Reality",
        "definition": "Technology that provides an immersive computer-generated environment."
      },
      {
        "term": "Mixed Reality",
        "definition": "Technology that combines physical and digital elements with interactive spatial relationships."
      },
      {
        "term": "Virtual try-on",
        "definition": "Digital visualization that lets customers preview how a product may look or fit before purchase."
      },
      {
        "term": "Immersive technology",
        "definition": "Technology designed to create or augment a user's sense of presence in a digital or blended environment."
      },
      {
        "term": "Spatial tracking",
        "definition": "Tracking the position or movement of users, devices or digital content in space."
      },
      {
        "term": "Digital asset",
        "definition": "A reusable digital representation such as a 3D model, image or animation."
      },
      {
        "term": "Customer experience",
        "definition": "The customer's overall perception and interaction across touchpoints with a business."
      }
    ],
    "examQuestions": [
      "Differentiate AR, VR and MR. (Long)",
      "Explain virtual try-on and its business applications. (Long)",
      "Discuss immersive technology applications in retail and training. (Medium)",
      "Explain the opportunities and challenges of AR/VR/MR adoption. (Long)",
      "Discuss privacy and security considerations in immersive applications. (Medium)",
      "What is spatial tracking? (Short)",
      "Define virtual try-on. (Short)",
      "Explain one manufacturing application of AR. (Short)"
    ]
  }
] as UnitNote[];
