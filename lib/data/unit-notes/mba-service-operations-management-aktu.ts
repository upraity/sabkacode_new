import { UnitNote } from "@/types";

// Detailed, syllabus-aligned notes for Service Operations Management (BMB OM 04)
// Dr. B. R. Ambedkar University, Agra (DBRAU), MBA IV Semester.
export const MbaServiceOperationsManagementUnitNotes: UnitNote[] = [
  {
    "unitNumber": 1,
    "title": "Introduction to Service Operations",
    "hours": 8,
    "headings": [
      {
        "id": "nature-characteristics-service-operations",
        "title": "1. Nature and Characteristics of Service Operations",
        "icon": "Waves",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Service operations are the activities through which an organization designs, delivers and controls services for customers. Unlike manufacturing, where the output is often a tangible product, service operations commonly involve an interaction between the customer, employees, information, physical resources and technology. The operational system therefore has to manage both the process and the customer's experience of that process."
          },
          {
            "kind": "paragraph",
            "text": "Important characteristics of services include intangibility, inseparability, variability and perishability. Intangibility means the service cannot generally be inspected as a physical object before purchase. Inseparability means production and consumption may occur together, particularly in customer-contact services. Variability means service performance can differ across employees, customers, locations and occasions. Perishability means unused service capacity often cannot be stored for later sale."
          },
          {
            "kind": "table",
            "headers": [
              "Characteristic",
              "Operational implication"
            ],
            "rows": [
              [
                "Intangibility",
                "Customers often evaluate quality through process, people, evidence and outcomes rather than a physical product alone."
              ],
              [
                "Inseparability",
                "Customer participation and employee-customer interaction become part of the delivery process."
              ],
              [
                "Variability",
                "Standardization, training, service design and process controls are important."
              ],
              [
                "Perishability",
                "Capacity cannot normally be inventoried, so demand and capacity must be coordinated."
              ],
              [
                "Customer participation",
                "The customer can influence timing, information requirements and sometimes the service process itself."
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-service-operations-management-service-operations-nature",
            "caption": "Nature and characteristics of service operations, including customer interaction, variability and perishability."
          }
        ]
      },
      {
        "id": "service-classification",
        "title": "2. Classification of Services",
        "icon": "Layers",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Services can be classified using different criteria because no single classification captures every operational difference. Useful dimensions include the degree of customer contact, the nature of the service act, customization, labour intensity, and whether the service is delivered to people, possessions, information or assets."
          },
          {
            "kind": "table",
            "headers": [
              "Classification dimension",
              "Illustrative categories",
              "Operational significance"
            ],
            "rows": [
              [
                "Customer contact",
                "High-contact / low-contact",
                "High-contact services require greater attention to interaction, environment and employee behaviour."
              ],
              [
                "Nature of service act",
                "People-processing / possession-processing / information-processing",
                "The object being processed changes the process, facility and resource requirements."
              ],
              [
                "Customization",
                "Standardized / customized",
                "Customization increases flexibility requirements and can increase process variability."
              ],
              [
                "Labour intensity",
                "Labour-intensive / technology-intensive",
                "Resource planning and productivity priorities differ."
              ],
              [
                "Delivery mode",
                "Physical / digital / hybrid",
                "Technology, location and customer-interface requirements change."
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Classification helps managers choose an appropriate operating system. For example, a highly customized, high-contact service usually requires more employee discretion than a standardized, technology-enabled transaction service."
          }
        ]
      },
      {
        "id": "service-economy-growth",
        "title": "3. Service Economy and Growth of Service Delivery",
        "icon": "TrendingUp",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The growth of the service economy has increased the importance of service operations in sectors such as banking, healthcare, education, hospitality, transport, telecommunications, retail and professional services. Growth in services can arise from changes in income, technology, demographics, outsourcing, specialization, urbanization and customer expectations."
          },
          {
            "kind": "paragraph",
            "text": "Service delivery has also changed through digital channels. Customers can increasingly interact through websites, mobile applications, self-service terminals, contact centres and integrated platforms. These channels alter the operating model because service capacity, information flow and customer support may need to be coordinated across physical and digital touchpoints."
          },
          {
            "kind": "table",
            "headers": [
              "Driver",
              "Operational effect"
            ],
            "rows": [
              [
                "Technology",
                "Enables automation, digital delivery, self-service and data-based service management."
              ],
              [
                "Changing customer expectations",
                "Increases pressure for convenience, speed, personalization and reliability."
              ],
              [
                "Specialization and outsourcing",
                "Creates networks of service providers and requires coordination and service-level management."
              ],
              [
                "Demographic and social change",
                "Changes demand patterns, service accessibility and workforce requirements."
              ],
              [
                "Globalization",
                "Expands service markets and creates cross-location delivery and coordination requirements."
              ]
            ]
          }
        ]
      },
      {
        "id": "service-process-matrix",
        "title": "4. Service Process Matrix",
        "icon": "Grid2X2",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A service process matrix classifies service operations according to dimensions such as labour intensity and the degree of customer interaction or customization. The purpose is to understand the operating characteristics of different service businesses and the managerial priorities associated with them."
          },
          {
            "kind": "paragraph",
            "text": "High labour intensity makes workforce productivity, staffing and employee skills particularly important. High interaction and customization make flexibility, customer contact and service design more important. Low-contact, standardized services can often emphasize process efficiency, automation and capacity utilization."
          },
          {
            "kind": "table",
            "headers": [
              "Process condition",
              "Typical managerial focus"
            ],
            "rows": [
              [
                "High contact + high customization",
                "Employee skills, customer experience, flexibility and service recovery."
              ],
              [
                "High contact + lower customization",
                "Consistent service standards, scheduling and customer-flow management."
              ],
              [
                "Lower contact + high customization",
                "Information accuracy, specialist capability and reliable back-office processing."
              ],
              [
                "Low contact + standardized",
                "Automation, process efficiency, capacity utilization and transaction reliability."
              ]
            ]
          }
        ]
      },
      {
        "id": "service-process-maturity",
        "title": "5. Service Process Maturity",
        "icon": "TrendingUp",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Service process maturity describes the extent to which a service process is understood, documented, standardized, measured and continuously improved. A mature process is not simply one with many rules; it is a process whose objectives, responsibilities, controls and performance measures are clear and which can adapt systematically when conditions change."
          },
          {
            "kind": "bullets",
            "items": [
              "Ad hoc stage: processes depend heavily on individual experience and are inconsistently performed.",
              "Defined stage: important processes are documented and responsibilities are clarified.",
              "Measured stage: service performance, quality, capacity and customer outcomes are systematically monitored.",
              "Managed stage: performance variation is actively controlled and improvement actions are integrated into operations.",
              "Continuously improved stage: process redesign, technology and learning are used to improve performance while preserving customer value."
            ]
          }
        ]
      },
      {
        "id": "service-positioning-competitiveness",
        "title": "6. Service Positioning and Role in Organizational Competitiveness",
        "icon": "Target",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Service positioning concerns how an organization designs its service proposition and operating system to occupy a meaningful position in the market. Positioning may emphasize speed, reliability, convenience, personalization, accessibility, expertise, cost, experience or another clearly defined value dimension."
          },
          {
            "kind": "paragraph",
            "text": "Service operations support competitiveness because operational decisions determine how consistently the promised service can be delivered. A strong market promise that cannot be supported by capacity, processes, employees and technology creates a gap between customer expectations and actual performance."
          },
          {
            "kind": "diagram",
            "diagramId": "mba-service-operations-management-service-strategy",
            "caption": "Service operations strategy connecting service positioning, operating capabilities, customer value and organizational competitiveness."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Service Operations",
        "definition": "Activities and processes used to design, deliver and control services for customers."
      },
      {
        "term": "Intangibility",
        "definition": "Service characteristic reflecting the absence of a purely physical product that can be inspected before purchase."
      },
      {
        "term": "Inseparability",
        "definition": "Characteristic in which service production and consumption may occur together, often involving customer interaction."
      },
      {
        "term": "Variability",
        "definition": "Potential variation in service performance across people, situations, locations or occasions."
      },
      {
        "term": "Perishability",
        "definition": "Inability to store unused service capacity for future sale in the same way as physical inventory."
      },
      {
        "term": "Service Process Maturity",
        "definition": "Extent to which a service process is defined, controlled, measured and continuously improved."
      },
      {
        "term": "Service Positioning",
        "definition": "Design of a service proposition around a clear value and competitive position."
      }
    ],
    "examQuestions": [
      "Explain the nature and characteristics of service operations in detail. (Long)",
      "Discuss major classifications of services and their operational implications. (Long)",
      "Explain the growth of the service economy and its impact on service delivery. (Long)",
      "What is a service process matrix? Explain its managerial significance. (Long)",
      "Explain service process maturity and its stages. (Long)",
      "Discuss service positioning and the role of service operations in organizational competitiveness. (Long)"
    ]
  },
  {
    "unitNumber": 2,
    "title": "Service Process Design",
    "hours": 8,
    "headings": [
      {
        "id": "flow-diagrams-process-analysis",
        "title": "1. Flow Diagrams and Process Analysis",
        "icon": "GitBranch",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Service process design specifies how a service moves from customer request to completion. Flow diagrams represent activities, decisions, handoffs and information or material movement. Process analysis examines the sequence, time, resources, bottlenecks, failure points and customer involvement in that flow."
          },
          {
            "kind": "paragraph",
            "text": "A useful service process map distinguishes front-office activities visible to the customer from back-office activities that support delivery. It can also identify waiting points, rework, unnecessary movement and duplicated activities."
          },
          {
            "kind": "table",
            "headers": [
              "Process-analysis element",
              "Purpose"
            ],
            "rows": [
              [
                "Activity",
                "Identify what work is actually performed."
              ],
              [
                "Decision point",
                "Show where different paths or service outcomes may occur."
              ],
              [
                "Handoff",
                "Identify transfer of responsibility or information between people or units."
              ],
              [
                "Waiting point",
                "Identify time during which the customer or work is waiting."
              ],
              [
                "Bottleneck",
                "Identify the stage that restricts overall process capacity."
              ],
              [
                "Failure point",
                "Identify where errors or service breakdowns may occur."
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-service-operations-management-service-process-capacity",
            "caption": "Service process and capacity analysis showing process flow, resource requirements and capacity constraints."
          }
        ]
      },
      {
        "id": "service-capacity-planning",
        "title": "2. Service Capacity Planning and Management",
        "icon": "Calculator",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Service capacity is the maximum level of service activity that a system can support under specified conditions. Capacity planning determines the resources required to meet expected demand while maintaining service quality and acceptable utilization. Unlike physical inventory, service capacity often cannot be stored, so capacity decisions must consider time as well as volume."
          },
          {
            "kind": "paragraph",
            "text": "Capacity can be expressed in customers served, transactions processed, beds available, seats offered, calls handled, appointments completed or another relevant service unit. Managers should distinguish design capacity from effective capacity because maintenance, staffing, breaks, variability and operating constraints reduce the capacity actually available."
          },
          {
            "kind": "table",
            "headers": [
              "Capacity concept",
              "Meaning"
            ],
            "rows": [
              [
                "Design capacity",
                "Theoretical maximum capacity under specified ideal conditions."
              ],
              [
                "Effective capacity",
                "Practical capacity after considering realistic operating constraints."
              ],
              [
                "Utilization",
                "Extent to which available capacity is being used."
              ],
              [
                "Capacity cushion",
                "Reserve capacity kept to handle uncertainty or demand variation."
              ],
              [
                "Bottleneck capacity",
                "Capacity of the constraining resource or process stage."
              ]
            ]
          }
        ]
      },
      {
        "id": "demand-capacity-mismatch",
        "title": "3. Managing Demand and Capacity Mismatches",
        "icon": "Scale",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Demand-capacity mismatch occurs when customer demand does not align with available service capacity. If demand exceeds capacity, waiting, lost sales, congestion or service-quality deterioration may occur. If capacity substantially exceeds demand, resources may remain underutilized and unit costs can increase."
          },
          {
            "kind": "table",
            "headers": [
              "Demand-side strategy",
              "Capacity-side strategy"
            ],
            "rows": [
              [
                "Differential pricing",
                "Flexible staffing"
              ],
              [
                "Reservations / appointments",
                "Cross-training employees"
              ],
              [
                "Off-peak promotions",
                "Part-time or temporary capacity"
              ],
              [
                "Demand information and communication",
                "Flexible operating hours"
              ],
              [
                "Self-service / digital channels",
                "Process redesign and automation"
              ],
              [
                "Queue management",
                "Resource redeployment across activities"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "The appropriate response depends on demand variability, customer tolerance for waiting, service perishability and the economics of adding capacity. Managers should avoid solving a temporary peak by permanently carrying excessive capacity unless the strategic benefits justify it."
          }
        ]
      },
      {
        "id": "service-process-management",
        "title": "4. Service Process Management",
        "icon": "Settings",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Service process management coordinates people, technology, information, facilities and procedures so that service delivery remains reliable and responsive. It includes process standardization, monitoring, quality control, exception handling, resource coordination and continuous improvement."
          },
          {
            "kind": "paragraph",
            "text": "A well-managed service process defines who is responsible for each activity, what information is required, what service standard applies, what happens when a failure occurs and how performance is measured. Process management should also preserve sufficient flexibility for legitimate customer needs."
          }
        ]
      },
      {
        "id": "queue-waiting-line-models",
        "title": "5. Queue Management and Waiting Line Models",
        "icon": "Clock",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A queue forms when demand for a service temporarily exceeds the rate at which the service system can serve customers. Queue management aims to balance waiting time, service capacity, cost and customer experience. Waiting is influenced by arrival patterns, service-time variability, number of servers, service discipline and utilization."
          },
          {
            "kind": "paragraph",
            "text": "Common waiting-line concepts include arrival rate (λ), service rate (μ), number of servers, queue discipline and utilization. In a simple single-server setting, stable operation generally requires the effective arrival rate to remain below the service capacity. As utilization approaches full capacity, waiting time can increase sharply because variability has less spare capacity to absorb fluctuations."
          },
          {
            "kind": "table",
            "headers": [
              "Queue element",
              "Meaning"
            ],
            "rows": [
              [
                "Arrival rate (λ)",
                "Average rate at which customers or jobs enter the system."
              ],
              [
                "Service rate (μ)",
                "Average rate at which one server can complete service."
              ],
              [
                "Number of servers",
                "Number of parallel service channels available."
              ],
              [
                "Queue discipline",
                "Rule determining the order in which waiting customers are served."
              ],
              [
                "Utilization",
                "Degree to which service capacity is occupied."
              ]
            ]
          }
        ]
      },
      {
        "id": "facility-layout-environment",
        "title": "6. Service Facility Layout and Service Environment",
        "icon": "LayoutTemplate",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Service facility layout determines the physical arrangement of service areas, employees, equipment, information points and customer movement. The service environment also includes ambience, signage, cleanliness, lighting, accessibility, privacy and other physical cues that influence customer perception."
          },
          {
            "kind": "paragraph",
            "text": "A good service layout reduces unnecessary movement, supports smooth customer flow, protects safety and privacy, and makes the service process understandable. In high-contact services, layout is part of the customer experience as well as an operational resource."
          }
        ]
      },
      {
        "id": "employee-scheduling-staffing",
        "title": "7. Employee Scheduling and Service Staffing Strategies",
        "icon": "CalendarClock",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Employee scheduling matches workforce availability and skills with expected service demand. Scheduling decisions should account for demand patterns, employee skills, legal or organizational constraints, breaks, leave, workload and service standards."
          },
          {
            "kind": "bullets",
            "items": [
              "Forecast demand by time period before preparing the schedule.",
              "Match staffing levels and skills to expected workload.",
              "Use cross-training to increase flexibility where appropriate.",
              "Consider peak periods, seasonality and unexpected demand.",
              "Balance employee workload with customer service requirements.",
              "Monitor schedule effectiveness through service performance, overtime, absence and utilization measures."
            ]
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Service Process Design",
        "definition": "Design of the sequence, resources, responsibilities and customer interactions required to deliver a service."
      },
      {
        "term": "Capacity",
        "definition": "Amount of service activity a system can perform under specified conditions."
      },
      {
        "term": "Bottleneck",
        "definition": "Process stage whose limited capacity constrains the output of the overall system."
      },
      {
        "term": "Queue",
        "definition": "Customers or jobs waiting for service because immediate service capacity is unavailable."
      },
      {
        "term": "Queue Discipline",
        "definition": "Rule used to determine the order in which waiting customers are served."
      },
      {
        "term": "Service Facility Layout",
        "definition": "Physical arrangement of service resources and customer movement areas."
      },
      {
        "term": "Staff Scheduling",
        "definition": "Planning employee availability and deployment to match expected service requirements."
      }
    ],
    "examQuestions": [
      "Explain flow diagrams and process analysis in service operations. (Long)",
      "Discuss service capacity planning and management. (Long)",
      "Explain methods for managing demand and capacity mismatches. (Long)",
      "What is service process management? Explain its major elements. (Medium)",
      "Explain queue management and important waiting-line concepts. (Long)",
      "Discuss service facility layout and service environment design. (Long)",
      "Explain employee scheduling and service staffing strategies. (Long)"
    ]
  },
  {
    "unitNumber": 3,
    "title": "Service Quality and Productivity",
    "hours": 8,
    "headings": [
      {
        "id": "service-quality-servqual",
        "title": "1. Service Quality and SERVQUAL",
        "icon": "Award",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Service quality is the degree to which a delivered service meets or exceeds relevant customer expectations and requirements. Because services are often experienced rather than physically inspected, customers may evaluate quality through reliability, responsiveness, assurance, empathy and tangible cues."
          },
          {
            "kind": "paragraph",
            "text": "SERVQUAL is a widely used service-quality measurement framework built around five dimensions: Reliability, Responsiveness, Assurance, Empathy and Tangibles. It compares customer perceptions with expectations or an appropriate service standard, depending on the measurement design."
          },
          {
            "kind": "table",
            "headers": [
              "SERVQUAL dimension",
              "Meaning"
            ],
            "rows": [
              [
                "Reliability",
                "Ability to perform the promised service dependably and accurately."
              ],
              [
                "Responsiveness",
                "Willingness and ability to help customers and provide prompt service."
              ],
              [
                "Assurance",
                "Employee knowledge, courtesy and ability to inspire confidence and trust."
              ],
              [
                "Empathy",
                "Caring and individualized attention to customers."
              ],
              [
                "Tangibles",
                "Physical facilities, equipment, appearance and other visible service evidence."
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-service-operations-management-servqual",
            "caption": "SERVQUAL framework showing the five dimensions of service quality."
          }
        ]
      },
      {
        "id": "gap-model-service-quality",
        "title": "2. Gap Model of Service Quality",
        "icon": "GitCompare",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The service-quality gap model explains how gaps can arise between what customers expect and what they perceive they receive. Gaps may occur because management does not correctly understand expectations, because service standards are poorly designed, because actual delivery differs from standards, or because external communication creates promises that delivery does not meet."
          },
          {
            "kind": "table",
            "headers": [
              "Gap",
              "Operational interpretation"
            ],
            "rows": [
              [
                "Knowledge / understanding gap",
                "Difference between customer expectations and management's understanding of those expectations."
              ],
              [
                "Service-design / standards gap",
                "Failure to translate customer understanding into appropriate service standards or process design."
              ],
              [
                "Delivery gap",
                "Difference between specified standards and actual service delivery."
              ],
              [
                "Communication gap",
                "Difference created when external communication or promises do not match actual delivery."
              ],
              [
                "Customer gap",
                "Difference between customer expectations and perceived service."
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-service-operations-management-servqual",
            "caption": "Service-quality gap framework related to SERVQUAL dimensions and customer expectations."
          }
        ]
      },
      {
        "id": "measuring-service-quality",
        "title": "3. Techniques for Measuring Service Quality",
        "icon": "LineChart",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Service quality measurement should use a combination of customer and operational evidence. Surveys can capture perceptions, while operational measures can reveal whether the process is actually meeting defined standards."
          },
          {
            "kind": "table",
            "headers": [
              "Technique",
              "What it can measure"
            ],
            "rows": [
              [
                "Customer surveys",
                "Perceptions, satisfaction, expectations and service-quality dimensions."
              ],
              [
                "Complaint analysis",
                "Failure types, recurring issues and customer pain points."
              ],
              [
                "Mystery shopping",
                "Observed service performance against defined criteria."
              ],
              [
                "Service-level measures",
                "Response time, resolution time, availability and other operational standards."
              ],
              [
                "Repeat-contact / rework measures",
                "Process failures and avoidable customer effort."
              ],
              [
                "Customer retention / churn indicators",
                "Longer-term behavioural outcomes associated with service experience."
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "No single measure should be interpreted as the complete definition of service quality. A high satisfaction score, for example, does not automatically prove that every process standard is being met."
          }
        ]
      },
      {
        "id": "service-productivity",
        "title": "4. Productivity in Service Operations",
        "icon": "TrendingUp",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Service productivity concerns the relationship between service outputs and the resources used to produce them. Outputs may include customers served, transactions completed, cases resolved or other defined service units. Inputs may include labour hours, equipment, facilities, technology and other resources."
          },
          {
            "kind": "paragraph",
            "text": "Service productivity is more complex than manufacturing productivity because customer participation and quality are often part of the process. Increasing the number of transactions per employee is not necessarily an improvement if error rates, waiting time or customer satisfaction deteriorate."
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Basic productivity logic",
            "text": "Productivity = Output ÷ Input. The output and input measures must be defined consistently; for service operations, productivity analysis should be interpreted together with quality and customer outcomes."
          }
        ]
      },
      {
        "id": "productivity-customer-satisfaction",
        "title": "5. Balancing Productivity and Customer Satisfaction",
        "icon": "Scale",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Productivity and customer satisfaction can conflict when efficiency is improved by reducing resources or interaction that customers value. The objective is therefore not maximum output at any cost, but efficient delivery of the required service value at an acceptable quality level."
          },
          {
            "kind": "table",
            "headers": [
              "Efficiency action",
              "Potential benefit",
              "Potential risk"
            ],
            "rows": [
              [
                "Automation",
                "Lower transaction effort and faster processing",
                "Loss of human support or poor exception handling"
              ],
              [
                "Standardization",
                "Consistency and lower process variation",
                "Insufficient flexibility for complex needs"
              ],
              [
                "Self-service",
                "Lower routine service workload",
                "Customer difficulty with complex or inaccessible interfaces"
              ],
              [
                "Staff reduction",
                "Lower direct labour cost",
                "Longer waits, workload pressure or service-quality decline"
              ],
              [
                "Process simplification",
                "Lower cycle time and effort",
                "Important controls or customer needs may be overlooked"
              ]
            ]
          }
        ]
      },
      {
        "id": "service-recovery-retention-guarantees",
        "title": "6. Service Recovery, Customer Retention and Service Guarantees",
        "icon": "HeartHandshake",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Service recovery is the process of responding to a service failure and restoring customer confidence where possible. Effective recovery generally requires timely recognition, acknowledgement, appropriate resolution, communication and learning from the failure."
          },
          {
            "kind": "paragraph",
            "text": "Customer retention strategies aim to encourage customers to continue using the service by delivering reliable value, reducing avoidable effort and responding effectively to problems. Service guarantees are explicit commitments about a defined service standard or compensation/remedy when that standard is not met, subject to the terms of the guarantee."
          },
          {
            "kind": "table",
            "headers": [
              "Practice",
              "Operational purpose"
            ],
            "rows": [
              [
                "Complaint handling",
                "Capture and resolve service failures."
              ],
              [
                "Recovery procedure",
                "Provide a consistent response to defined failures."
              ],
              [
                "Root-cause analysis",
                "Reduce recurrence rather than only correcting individual incidents."
              ],
              [
                "Retention management",
                "Understand and address factors associated with customer continuation or exit."
              ],
              [
                "Service guarantee",
                "Make a clear service commitment and define the response when the commitment is not met."
              ]
            ]
          }
        ]
      },
      {
        "id": "case-study-industry",
        "title": "7. Case Study Analysis and Industry Examples",
        "icon": "FileText",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Case-study analysis applies service-quality and productivity concepts to a real or hypothetical operating situation. The analyst should first identify the service process, customer expectations, operational measures, quality failures, capacity constraints and productivity issues before proposing interventions."
          },
          {
            "kind": "paragraph",
            "text": "Industry examples illustrate why the same service-quality principle can require different operating practices. A hospital must manage clinical quality, patient safety and waiting; a bank must manage transaction accuracy, security and responsiveness; a hotel must coordinate front-office, housekeeping and guest services; a retail service must coordinate availability, checkout and customer assistance."
          },
          {
            "kind": "diagram",
            "diagramId": "mba-service-operations-management-service-operations-nature",
            "caption": "Service operations context for analyzing industry-specific quality, productivity and customer-experience requirements."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Service Quality",
        "definition": "Extent to which service delivery meets relevant customer expectations and requirements."
      },
      {
        "term": "SERVQUAL",
        "definition": "Service-quality framework organized around Reliability, Responsiveness, Assurance, Empathy and Tangibles."
      },
      {
        "term": "Service Quality Gap",
        "definition": "Difference between relevant expectations, standards, delivery, communication or perceived service outcomes."
      },
      {
        "term": "Service Productivity",
        "definition": "Relationship between defined service output and resources used to produce it."
      },
      {
        "term": "Service Recovery",
        "definition": "Actions taken to respond to service failure and restore customer value or confidence."
      },
      {
        "term": "Service Guarantee",
        "definition": "Explicit commitment about a defined service standard and the response if the commitment is not met."
      },
      {
        "term": "Customer Retention",
        "definition": "Ability to maintain continuing customer relationships through sustained value and service performance."
      }
    ],
    "examQuestions": [
      "Explain service quality and the SERVQUAL model in detail. (Long)",
      "Discuss the gap model of service quality. (Long)",
      "Explain techniques for measuring service quality. (Long)",
      "What is productivity in service operations? Explain its measurement. (Medium)",
      "Discuss the balance between service productivity and customer satisfaction. (Long)",
      "Explain service recovery, customer retention and service guarantees. (Long)",
      "How should a service-operations case study be analyzed? (Long)"
    ]
  },
  {
    "unitNumber": 4,
    "title": "Technology in Service Operations",
    "hours": 8,
    "headings": [
      {
        "id": "role-information-technology",
        "title": "1. Role of Information Technology in Service Operations",
        "icon": "Cpu",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Information technology supports service operations by capturing information, coordinating activities, automating transactions, connecting employees and customers, monitoring performance and enabling digital delivery. Technology can improve speed and consistency, but its value depends on process design, user adoption, data quality and service requirements."
          },
          {
            "kind": "table",
            "headers": [
              "Technology role",
              "Operational contribution"
            ],
            "rows": [
              [
                "Transaction processing",
                "Faster and more consistent routine service transactions."
              ],
              [
                "Information integration",
                "Makes customer and operational information available across relevant functions."
              ],
              [
                "Automation",
                "Reduces manual effort for suitable repetitive activities."
              ],
              [
                "Monitoring",
                "Provides data for service-level, capacity and quality management."
              ],
              [
                "Customer interface",
                "Enables websites, mobile applications, portals and self-service."
              ],
              [
                "Decision support",
                "Supports forecasting, scheduling, personalization and operational control."
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-service-operations-management-service-technology",
            "caption": "Role of technology in service operations, connecting customers, front office, back office, data and service processes."
          }
        ]
      },
      {
        "id": "self-service-automation",
        "title": "2. Self-Service Technologies and Service Automation",
        "icon": "MonitorPlay",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Self-service technology allows customers to perform some service activities without direct assistance from an employee. Examples include automated teller machines, online account services, kiosks, check-in systems and digital service portals. Service automation uses technology to execute or support defined process steps."
          },
          {
            "kind": "paragraph",
            "text": "Automation should be selected where the process is sufficiently understood, repetitive and suitable for technology. Complex, emotional or exceptional service situations may still require human intervention. A good operating design provides escalation paths when self-service fails."
          }
        ]
      },
      {
        "id": "ecommerce-crm",
        "title": "3. E-Commerce and Customer Relationship Management",
        "icon": "ShoppingCart",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "E-commerce enables service or product transactions through electronic channels. In service operations, digital channels can support ordering, booking, payment, communication, delivery tracking and after-sales support. The operating challenge is to integrate the digital channel with fulfilment and customer support."
          },
          {
            "kind": "paragraph",
            "text": "Customer Relationship Management (CRM) systems organize customer information and interactions so that organizations can coordinate sales, service, communication and relationship activities. CRM can improve continuity when customer information is accurate, relevant and appropriately shared across service touchpoints."
          },
          {
            "kind": "table",
            "headers": [
              "Area",
              "Service-operations requirement"
            ],
            "rows": [
              [
                "E-commerce",
                "Reliable digital transaction, payment, fulfilment and support processes."
              ],
              [
                "CRM",
                "Consistent customer information and coordinated interaction history."
              ],
              [
                "Omnichannel service",
                "Continuity when customers move between digital, telephone and physical channels."
              ],
              [
                "Customer data",
                "Accuracy, appropriate access, privacy and responsible use."
              ]
            ]
          }
        ]
      },
      {
        "id": "cloud-erp-service-process",
        "title": "4. Cloud Computing, ERP and Service Process Optimization",
        "icon": "Cloud",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Cloud computing provides access to computing resources and software services through network-based infrastructure rather than requiring every organization to maintain all resources locally. In service operations, cloud platforms can support scalable applications, collaboration, customer systems and data access, subject to security and governance requirements."
          },
          {
            "kind": "paragraph",
            "text": "Enterprise Resource Planning (ERP) integrates information and processes across organizational functions. Although ERP is broader than service operations, integrated data can improve coordination between service delivery, finance, procurement, human resources and other functions."
          },
          {
            "kind": "paragraph",
            "text": "Service process optimization uses technology to remove unnecessary steps, reduce handoffs, improve information availability, automate suitable tasks and monitor performance. Optimization should begin with the process requirement rather than selecting technology first."
          }
        ]
      },
      {
        "id": "front-back-office",
        "title": "5. Back-Office and Front-Office Integration",
        "icon": "GitBranch",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The front office includes activities and interactions visible to or directly involving the customer, while the back office performs supporting activities that may be less visible. Integration is necessary because customer-facing service quality often depends on accurate and timely back-office work."
          },
          {
            "kind": "table",
            "headers": [
              "Front office",
              "Back office"
            ],
            "rows": [
              [
                "Customer interaction",
                "Data processing and record maintenance"
              ],
              [
                "Service request capture",
                "Verification and authorization"
              ],
              [
                "Customer communication",
                "Transaction processing and fulfilment support"
              ],
              [
                "Issue identification",
                "Investigation and resolution support"
              ],
              [
                "Service delivery",
                "Reporting, reconciliation and control"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Technology can connect these areas through shared systems, workflow, notifications and integrated data. Poor integration can cause repeated data entry, inconsistent information, delays and customer handoffs."
          }
        ]
      },
      {
        "id": "technology-adoption",
        "title": "6. Technology Adoption Challenges and Strategies",
        "icon": "ShieldCheck",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Technology adoption can fail even when the technology itself is capable. Common challenges include employee resistance, inadequate training, poor process design, integration problems, data-quality issues, cybersecurity and privacy concerns, implementation cost and weak management support."
          },
          {
            "kind": "table",
            "headers": [
              "Challenge",
              "Possible strategy"
            ],
            "rows": [
              [
                "Resistance to change",
                "Involve users, explain purpose, train employees and provide support."
              ],
              [
                "Skill gaps",
                "Develop role-specific digital capability and practical training."
              ],
              [
                "Poor process fit",
                "Redesign the process before or alongside technology implementation."
              ],
              [
                "Integration difficulty",
                "Use clear architecture, interfaces, data standards and staged implementation."
              ],
              [
                "Data/security risk",
                "Apply access controls, governance, security practices and monitoring."
              ],
              [
                "Implementation cost",
                "Use business-case analysis, prioritization and phased deployment where appropriate."
              ]
            ]
          }
        ]
      },
      {
        "id": "technology-case-study",
        "title": "7. Case Study: Technology in Service Operations",
        "icon": "FileText",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A technology case should be analyzed by connecting the technology to the service process rather than describing the technology in isolation. The analysis should identify the service problem, process affected, customer impact, employee impact, implementation requirements, risks and measurable outcomes."
          },
          {
            "kind": "paragraph",
            "text": "For example, a service organization introducing a digital appointment system should assess whether the system reduces waiting and improves capacity utilization, whether customers can use it easily, how exceptions are handled and whether staff schedules are connected to appointment demand."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Service Technology",
        "definition": "Technology used to support, automate, integrate or deliver service operations."
      },
      {
        "term": "Self-Service Technology",
        "definition": "Technology that enables customers to complete defined service activities without direct employee assistance."
      },
      {
        "term": "E-Commerce",
        "definition": "Electronic channel through which transactions, service interactions or related activities are conducted."
      },
      {
        "term": "CRM",
        "definition": "Customer Relationship Management system or approach used to organize customer information and interactions."
      },
      {
        "term": "Cloud Computing",
        "definition": "Network-based provision of computing resources or software services with scalable access."
      },
      {
        "term": "ERP",
        "definition": "Integrated system supporting information and processes across multiple organizational functions."
      },
      {
        "term": "Front Office",
        "definition": "Customer-facing activities and interactions in the service process."
      },
      {
        "term": "Back Office",
        "definition": "Supporting activities that enable customer-facing service delivery."
      }
    ],
    "examQuestions": [
      "Explain the role of information technology in service operations. (Long)",
      "Discuss self-service technologies and service automation. (Long)",
      "Explain e-commerce and CRM from a service-operations perspective. (Long)",
      "Discuss cloud computing, ERP and service process optimization. (Long)",
      "Explain the importance of front-office and back-office integration. (Medium)",
      "Discuss major technology-adoption challenges and strategies. (Long)",
      "Explain how to analyze a technology case in service operations. (Long)"
    ]
  },
  {
    "unitNumber": 5,
    "title": "Service Operations Strategy and Performance",
    "hours": 8,
    "headings": [
      {
        "id": "strategy-formulation-execution",
        "title": "1. Service Operations Strategy Formulation and Execution",
        "icon": "Target",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Service operations strategy translates the organization's service proposition into operating capabilities. Strategy formulation identifies customer requirements, competitive priorities, process choices, capacity needs, technology, people and performance objectives. Execution converts those choices into processes, responsibilities, resources and control systems."
          },
          {
            "kind": "table",
            "headers": [
              "Strategic element",
              "Typical question"
            ],
            "rows": [
              [
                "Customer value",
                "What service attributes matter to the target customer?"
              ],
              [
                "Competitive priority",
                "Should the operation emphasize cost, quality, speed, flexibility, reliability or another priority?"
              ],
              [
                "Process design",
                "What operating process can deliver the promised service consistently?"
              ],
              [
                "Capacity",
                "What resources and capacity are required?"
              ],
              [
                "Technology",
                "Which technologies support the service model?"
              ],
              [
                "People",
                "What skills, staffing and service behaviours are required?"
              ],
              [
                "Control",
                "How will performance be measured and improved?"
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-service-operations-management-service-strategy",
            "caption": "Service operations strategy linking customer requirements, competitive priorities, resources, process design and execution."
          }
        ]
      },
      {
        "id": "service-capacity-management",
        "title": "2. Service Capacity Management",
        "icon": "Calculator",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Service capacity management ensures that the organization has sufficient resources to handle demand while avoiding unnecessary idle capacity. It includes capacity forecasting, staffing, facility planning, technology capacity, scheduling and contingency arrangements."
          },
          {
            "kind": "paragraph",
            "text": "Because demand may vary by time, day, season or event, capacity management often requires flexibility. Organizations can adjust capacity through staffing patterns, appointments, reservations, outsourcing, process automation, cross-training and other operational mechanisms."
          }
        ]
      },
      {
        "id": "service-operations-systems",
        "title": "3. Service Operations Systems",
        "icon": "Network",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A service operations system is the coordinated set of people, processes, facilities, information, technology and controls through which a service is produced and delivered. The system should be viewed end-to-end because a problem in one component can affect the customer outcome even when other components perform well."
          },
          {
            "kind": "table",
            "headers": [
              "System component",
              "Examples"
            ],
            "rows": [
              [
                "People",
                "Service employees, supervisors, specialists and support staff."
              ],
              [
                "Process",
                "Service steps, standards, escalation and recovery procedures."
              ],
              [
                "Technology",
                "Customer interfaces, transaction systems, analytics and automation."
              ],
              [
                "Facilities",
                "Service locations, equipment, layout and physical environment."
              ],
              [
                "Information",
                "Customer, operational, capacity, quality and performance data."
              ],
              [
                "Control",
                "Service standards, KPIs, audits, feedback and improvement mechanisms."
              ]
            ]
          }
        ]
      },
      {
        "id": "benchmarking-control",
        "title": "4. Performance Benchmarking and Control",
        "icon": "BarChart3",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Performance benchmarking compares defined service-performance measures with a reference point. The reference may be an internal unit, a historical result, a target, an industry benchmark or another relevant comparator. The usefulness of benchmarking depends on comparability and consistent definitions."
          },
          {
            "kind": "paragraph",
            "text": "Operational control involves setting standards, measuring actual performance, identifying deviations and taking corrective or preventive action. Control should focus on measures that are relevant to service objectives rather than maximizing every metric independently."
          },
          {
            "kind": "table",
            "headers": [
              "Control activity",
              "Purpose"
            ],
            "rows": [
              [
                "Set standard",
                "Define the required service level or performance target."
              ],
              [
                "Measure",
                "Collect reliable performance information."
              ],
              [
                "Compare",
                "Identify gaps between actual and expected performance."
              ],
              [
                "Diagnose",
                "Investigate causes of material deviations."
              ],
              [
                "Correct / improve",
                "Take action and verify whether performance improves."
              ]
            ]
          }
        ]
      },
      {
        "id": "productivity-frameworks",
        "title": "5. Productivity Improvement Frameworks and Process Performance",
        "icon": "TrendingUp",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Productivity improvement in service operations involves improving the relationship between service output and resources while maintaining required quality and customer value. Useful approaches include process simplification, elimination of non-value-adding work, standardization, employee training, technology, capacity balancing and continuous improvement."
          },
          {
            "kind": "paragraph",
            "text": "Service process performance should be evaluated through a balanced set of measures. Typical dimensions include cycle time, waiting time, throughput, utilization, quality, error rate, customer satisfaction, service recovery and cost. Improving one dimension should not create unacceptable deterioration in another."
          },
          {
            "kind": "diagram",
            "diagramId": "mba-service-operations-management-service-process-capacity",
            "caption": "Service process performance and capacity framework connecting demand, resources, throughput, utilization and service outcomes."
          }
        ]
      },
      {
        "id": "industry-applications",
        "title": "6. Applications in Banking, Hospitality, Healthcare, Retail, Food Service and Logistics",
        "icon": "Building2",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Service operations principles apply across industries, but the operating priorities differ according to the service process, customer contact, regulatory requirements, capacity constraints and risk profile."
          },
          {
            "kind": "table",
            "headers": [
              "Industry",
              "Illustrative service-operations focus"
            ],
            "rows": [
              [
                "Banking",
                "Transaction accuracy, security, queue management, digital channels, service reliability and compliance."
              ],
              [
                "Hospitality",
                "Reservations, room/service capacity, guest experience, housekeeping coordination and service recovery."
              ],
              [
                "Healthcare",
                "Patient flow, appointment capacity, waiting, clinical support processes, safety and service quality."
              ],
              [
                "Retail",
                "Customer flow, availability, checkout capacity, assistance, returns and omnichannel service."
              ],
              [
                "Food service",
                "Demand peaks, kitchen/service capacity, waiting, order accuracy, hygiene and throughput."
              ],
              [
                "Logistics",
                "Shipment processing, tracking, capacity, routing, delivery reliability and customer communication."
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-service-operations-management-service-strategy",
            "caption": "Service operations strategy applied across different service industries and operating priorities."
          }
        ]
      },
      {
        "id": "continuous-improvement",
        "title": "7. Integrated Service Operations Performance Management",
        "icon": "RefreshCw",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Integrated performance management brings strategy, process, capacity, quality, productivity and customer outcomes into one control cycle. Managers should use performance information to identify material gaps, diagnose causes, implement improvement actions and monitor whether improvements are sustained."
          },
          {
            "kind": "bullets",
            "items": [
              "Start with the service promise and strategic objective.",
              "Translate the objective into measurable operational standards.",
              "Track capacity, quality, productivity and customer outcomes together.",
              "Investigate significant deviations rather than reacting to isolated numbers.",
              "Implement corrective or improvement actions with clear responsibility.",
              "Review results and update the operating process when evidence supports change."
            ]
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Service Operations Strategy",
        "definition": "Strategic design and execution of service processes and capabilities to deliver customer and organizational objectives."
      },
      {
        "term": "Capacity Management",
        "definition": "Planning and controlling service resources so capacity matches demand as effectively as possible."
      },
      {
        "term": "Service Operations System",
        "definition": "Integrated set of people, processes, technology, facilities, information and controls used to deliver a service."
      },
      {
        "term": "Benchmarking",
        "definition": "Comparison of defined performance measures with a relevant reference point."
      },
      {
        "term": "Operational Control",
        "definition": "Process of setting standards, measuring performance, identifying deviations and taking corrective action."
      },
      {
        "term": "Service Productivity",
        "definition": "Relationship between defined service output and resources used while maintaining required service value."
      },
      {
        "term": "Process Performance",
        "definition": "Measured performance of a service process across dimensions such as time, quality, capacity, cost and customer outcome."
      }
    ],
    "examQuestions": [
      "Explain service operations strategy formulation and execution. (Long)",
      "Discuss service capacity management in detail. (Long)",
      "What is a service operations system? Explain its components. (Long)",
      "Explain performance benchmarking and operational control. (Long)",
      "Discuss productivity improvement frameworks and service process performance. (Long)",
      "Explain applications of service operations management in banking, hospitality, healthcare, retail, food service and logistics. (Long)",
      "Explain an integrated approach to service operations performance management. (Medium)"
    ]
  }
];
