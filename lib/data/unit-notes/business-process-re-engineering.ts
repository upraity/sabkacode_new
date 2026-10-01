import { UnitNote } from "@/types";

export const BusinessProcessReEngineeringUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Introduction to Business Process Re-engineering",
    hours: 8,
    headings: [
      {
        id: "concept-definition-and-evolution-of-bpr",
        title: "Concept, Definition and Evolution of BPR",
        icon: "RefreshCw",
        blocks: [
          { kind: "paragraph", text: "Business Process Re-engineering (BPR) is a fundamental rethinking and radical redesign of business processes to achieve major improvements in performance such as cost, quality, service and speed. BPR shifts attention from isolated departmental tasks to end-to-end processes and outcomes. Its evolution is linked with increasing competition, customer expectations and the ability of information technology to enable new ways of working." },
{ kind: "diagram", diagramId: "bpr-redesign", caption: "Conceptual framework for the topic." },
        ]
      },
      {
        id: "objectives-significance-and-scope",
        title: "Objectives, Significance and Scope",
        icon: "Target",
        blocks: [
          { kind: "paragraph", text: "BPR seeks substantial improvement rather than merely small incremental adjustments. Objectives may include lower cycle time, reduced cost, improved quality, better customer service, fewer hand-offs and stronger process control. Its scope can cover a single process, a cross-functional process or a wider organizational process architecture." },
        ]
      },
      {
        id: "principles-and-philosophy-of-bpr",
        title: "Principles and Philosophy of BPR",
        icon: "Brain",
        blocks: [
          { kind: "paragraph", text: "BPR principles include questioning existing assumptions, organizing work around outcomes, integrating related activities, reducing unnecessary hand-offs, using information at its point of need and enabling appropriate decisions at the level where work is performed. Technology should be used as an enabler of redesigned processes rather than simply automating inefficient steps." },
        ]
      },
      {
        id: "traditional-versus-re-engineered-processes",
        title: "Traditional versus Re-engineered Processes",
        icon: "GitCompare",
        blocks: [
          { kind: "paragraph", text: "Traditional processes are often functional, sequential and dependent on multiple hand-offs and approvals. A re-engineered process seeks end-to-end ownership, fewer unnecessary steps, faster information flow and clearer accountability. The comparison should focus on process structure and outcomes, not on the assumption that every traditional process is automatically inefficient." },
{ kind: "table", headers: ["Basis", "Traditional tendency", "Re-engineered tendency"], rows: [["Organization", "Functional silos", "End-to-end process orientation"], ["Work flow", "Many hand-offs", "Integrated flow"], ["Information", "Repeated entry", "Shared/available information"], ["Decision-making", "Centralized approvals", "Appropriate empowerment"]] },
        ]
      },
      {
        id: "competitiveness-critical-success-factors-and-myths",
        title: "Competitiveness, Critical Success Factors and Myths",
        icon: "ShieldCheck",
        blocks: [
          { kind: "paragraph", text: "BPR can support competitiveness through better cost, quality, speed and customer responsiveness. Critical success factors include executive sponsorship, clear process ownership, employee involvement, realistic goals, technology alignment, change management and measurement. Common myths include treating BPR as only software implementation, assuming every process needs radical change, or expecting technology alone to create benefits." },
        ]
      }
    ],
    keyTerms: [
      { term: "BPR", definition: "Fundamental rethinking and radical redesign of business processes for major performance improvement." },
      { term: "Process orientation", definition: "Focus on end-to-end work and outcomes rather than isolated departmental tasks." },
      { term: "Process owner", definition: "Person or role accountable for end-to-end process performance." }
    ],
    examQuestions: [
      "Define BPR and explain its evolution. (Long)",
      "Discuss objectives, significance and scope of BPR. (Long)",
      "Explain BPR principles and philosophy. (Long)",
      "Compare traditional and re-engineered processes. (Long)",
      "Discuss critical success factors and myths of BPR. (Long)"
    ]
  },
  {
    unitNumber: 2,
    title: "Business Process Mapping and Modeling",
    hours: 8,
    headings: [
      {
        id: "process-documentation-and-mapping-tools",
        title: "Process Documentation and Mapping Tools",
        icon: "Map",
        blocks: [
          { kind: "paragraph", text: "Process documentation records how work is performed, while process mapping presents activities, decisions, inputs, outputs, roles and hand-offs in an understandable structure. Mapping creates a current-state baseline for analysis and helps teams identify where delays, duplication, rework and control gaps occur." },
{ kind: "diagram", diagramId: "process-map", caption: "Conceptual framework for the topic." },
        ]
      },
      {
        id: "process-benchmarking",
        title: "Process Benchmarking",
        icon: "BarChart3",
        blocks: [
          { kind: "paragraph", text: "Benchmarking compares process performance or practices with internal standards, other processes or relevant external organizations. The purpose is to identify performance gaps and learn what practices may contribute to better outcomes. Benchmarking should consider differences in product, scale, customer requirements and operating context before copying a practice." },
        ]
      },
      {
        id: "core-and-support-processes",
        title: "Core and Support Processes",
        icon: "Layers",
        blocks: [
          { kind: "paragraph", text: "Core processes directly create value for customers, while support processes enable core operations. BPR should understand both because a support process such as procurement, IT, HR or finance can become a constraint on a core customer-facing process. Process boundaries should therefore be defined around actual work and outcomes." },
        ]
      },
      {
        id: "performance-analysis-and-bottlenecks",
        title: "Performance Analysis and Bottlenecks",
        icon: "Search",
        blocks: [
          { kind: "paragraph", text: "Process analysis examines cycle time, queue time, error rates, rework, resource utilization, approvals and hand-offs. A bottleneck is a constraint that limits throughput or causes disproportionate delay. Removing a bottleneck requires identifying its underlying cause rather than simply adding resources without understanding demand and process structure." },
        ]
      },
      {
        id: "process-innovation-improvement-and-bpr-readiness",
        title: "Process Innovation, Improvement and BPR Readiness",
        icon: "Zap",
        blocks: [
          { kind: "paragraph", text: "Process improvement generally seeks incremental gains within the existing process logic, while process innovation and BPR may challenge the existing design itself. BPR readiness involves leadership commitment, process ownership, data availability, technology capability, organizational capacity for change and a clearly defined business case." },
        ]
      }
    ],
    keyTerms: [
      { term: "Process mapping", definition: "Visual or structured representation of process activities and flows." },
      { term: "Benchmarking", definition: "Comparison of performance or practices to identify gaps and learning opportunities." },
      { term: "Bottleneck", definition: "Constraint that limits process throughput or creates disproportionate delay." },
      { term: "BPR readiness", definition: "Organizational preparedness to undertake and sustain process re-engineering." }
    ],
    examQuestions: [
      "Explain process documentation and mapping. (Long)",
      "Discuss process benchmarking. (Medium)",
      "Distinguish core and support processes. (Medium)",
      "Explain how bottlenecks are identified. (Long)",
      "Compare process improvement, innovation and BPR. (Long)",
      "Discuss BPR readiness factors. (Long)"
    ]
  },
  {
    unitNumber: 3,
    title: "BPR Life Cycle and Methodology",
    hours: 8,
    headings: [
      {
        id: "hammer-and-champy-approach",
        title: "Hammer and Champy Approach",
        icon: "RefreshCw",
        blocks: [
          { kind: "paragraph", text: "Hammer and Champy's BPR approach is associated with fundamental rethinking and radical redesign. The central idea is to question why work is performed in the existing manner and redesign the process around desired outcomes. The approach emphasizes major performance improvements rather than merely automating the old sequence." },
{ kind: "diagram", diagramId: "hammer-champy", caption: "Conceptual framework for the topic." },
        ]
      },
      {
        id: "davenport-and-other-approaches",
        title: "Davenport and Other Approaches",
        icon: "GitCompare",
        blocks: [
          { kind: "paragraph", text: "Davenport's process perspective emphasizes understanding processes, information, technology and organizational change. Different BPR approaches vary in terminology and sequence, but a useful lifecycle normally includes current-state understanding, process vision, future-state design, implementation and performance review." },
        ]
      },
      {
        id: "strategic-alignment-and-process-prioritization",
        title: "Strategic Alignment and Process Prioritization",
        icon: "Target",
        blocks: [
          { kind: "paragraph", text: "Not every process should be re-engineered at the same time. Prioritization should consider strategic importance, customer impact, performance gap, feasibility, risk, technology dependence and expected benefits. Strategic alignment ensures that BPR resources are directed toward processes that matter to organizational objectives." },
        ]
      },
      {
        id: "role-of-it-erp-ai-and-process-automation",
        title: "Role of IT, ERP, AI and Process Automation",
        icon: "Cpu",
        blocks: [
          { kind: "paragraph", text: "IT can enable integration, workflow automation, data visibility and new service models. ERP integrates information and processes across functions; AI can support analysis, prediction and decision assistance; automation can reduce repetitive work. Technology should follow process objectives and control requirements rather than become the objective itself." },
        ]
      },
      {
        id: "bpms-workflow-tools-and-cost-benefit-analysis",
        title: "BPMS, Workflow Tools and Cost-Benefit Analysis",
        icon: "Settings",
        blocks: [
          { kind: "paragraph", text: "Business Process Management Systems and workflow tools support process modeling, execution, monitoring and improvement. A BPR business case should compare expected benefits such as cost reduction, speed and service improvement with implementation cost, training, technology, transition risk and ongoing operating cost. Benefits should be measurable and reviewed after implementation." },
        ]
      }
    ],
    keyTerms: [
      { term: "Hammer & Champy", definition: "BPR approach associated with fundamental rethinking and radical redesign." },
      { term: "ERP", definition: "Integrated enterprise system approach connecting information and processes across functions." },
      { term: "BPMS", definition: "Business Process Management System supporting process modeling, execution, monitoring and improvement." },
      { term: "Process automation", definition: "Use of technology to execute or coordinate defined process activities with reduced manual intervention." }
    ],
    examQuestions: [
      "Explain Hammer and Champy's BPR approach. (Long)",
      "Discuss Davenport's process perspective. (Medium)",
      "Explain strategic alignment and process prioritization. (Long)",
      "Discuss the role of ERP, AI and automation in BPR. (Long)",
      "Explain BPMS and workflow tools. (Medium)",
      "Discuss cost-benefit analysis for BPR. (Long)"
    ]
  },
  {
    unitNumber: 4,
    title: "Change Management and Risk Mitigation in BPR",
    hours: 8,
    headings: [
      {
        id: "organizational-change-management",
        title: "Organizational Change Management",
        icon: "Users",
        blocks: [
          { kind: "paragraph", text: "BPR changes roles, workflows, authority, technology and performance expectations. Change management prepares people for these changes through leadership, communication, participation, training and reinforcement. It is not an afterthought; it should be planned alongside process and technology design." },
{ kind: "diagram", diagramId: "change-management", caption: "Conceptual framework for the topic." },
        ]
      },
      {
        id: "human-resources-and-resistance-to-change",
        title: "Human Resources and Resistance to Change",
        icon: "Users",
        blocks: [
          { kind: "paragraph", text: "Employees may resist when they fear job loss, reduced autonomy, unfamiliar technology, increased workload or unclear responsibilities. HR considerations include role redesign, competency development, training, staffing and performance measures. Involvement and transparent communication can help convert process knowledge into better future-state design." },
        ]
      },
      {
        id: "risk-identification-and-mitigation",
        title: "Risk Identification and Mitigation",
        icon: "ShieldCheck",
        blocks: [
          { kind: "paragraph", text: "BPR risks can arise from operational disruption, technology failure, poor data, inadequate controls, resistance, unrealistic benefits or weak governance. Mitigation can include phased implementation, testing, contingency plans, data validation, training, control redesign and post-implementation monitoring." },
        ]
      },
      {
        id: "communication-and-measuring-outcomes",
        title: "Communication and Measuring Outcomes",
        icon: "MessageSquare",
        blocks: [
          { kind: "paragraph", text: "Communication should explain the reason for change, expected benefits, role impacts, implementation stages and available support. Outcomes should be measured against baseline indicators such as cycle time, cost, quality, service level, error rate and customer satisfaction so that the organization can verify whether redesign delivered the intended benefits." },
        ]
      },
      {
        id: "learning-from-bpr-failures-and-corporate-examples",
        title: "Learning from BPR Failures and Corporate Examples",
        icon: "BookOpen",
        blocks: [
          { kind: "paragraph", text: "BPR failures often involve unclear objectives, weak sponsorship, inadequate change management, technology-first thinking, poor process understanding or unrealistic implementation scope. Global and Indian examples should be studied by identifying the old process, redesign logic, implementation challenges and measurable results rather than memorizing company names without context." },
        ]
      }
    ],
    keyTerms: [
      { term: "Change management", definition: "Structured management of people, communication, capability and adoption during change." },
      { term: "Resistance to change", definition: "Reluctance of employees or stakeholders to adopt a new process or system." },
      { term: "BPR risk", definition: "Potential adverse outcome arising from redesign or implementation of a re-engineered process." }
    ],
    examQuestions: [
      "Explain change management in BPR. (Long)",
      "Discuss HR considerations and resistance to change. (Long)",
      "Explain BPR risks and mitigation. (Long)",
      "Discuss communication strategies for BPR success. (Medium)",
      "Explain how BPR outcomes should be measured. (Long)"
    ]
  },
  {
    unitNumber: 5,
    title: "Emerging Trends in Business Process Reengineering",
    hours: 8,
    headings: [
      {
        id: "digital-transformation-and-bpr",
        title: "Digital Transformation and BPR",
        icon: "Cpu",
        blocks: [
          { kind: "paragraph", text: "Digital transformation can change how organizations deliver services, interact with customers and execute operations. In BPR, digital technologies can enable redesigned processes with fewer manual steps, better integration, faster decisions and stronger visibility. The redesign should begin with the business outcome and then identify appropriate technology enablers." },
{ kind: "diagram", diagramId: "digital-bpr", caption: "Conceptual framework for the topic." },
        ]
      },
      {
        id: "industry-4-0-and-process-digitization",
        title: "Industry 4.0 and Process Digitization",
        icon: "Cpu",
        blocks: [
          { kind: "paragraph", text: "Industry 4.0 connects machines, systems, data and people through technologies such as IoT, analytics, automation and cyber-physical systems. Process digitization can provide real-time information, predictive decisions and automated responses, but requires data governance, cybersecurity and process accountability." },
        ]
      },
      {
        id: "big-data-analytics-and-cloud-computing",
        title: "Big Data Analytics and Cloud Computing",
        icon: "Database",
        blocks: [
          { kind: "paragraph", text: "Big data analytics can reveal patterns, bottlenecks, customer behavior and process anomalies from large datasets. Cloud computing provides scalable shared technology services and can support collaboration and integration. Both are useful only when data quality, security, governance and process objectives are properly addressed." },
        ]
      },
      {
        id: "sustainable-and-green-process-re-engineering",
        title: "Sustainable and Green Process Re-engineering",
        icon: "Leaf",
        blocks: [
          { kind: "paragraph", text: "Sustainable BPR considers environmental and resource impacts while redesigning processes. Examples include reducing paper, energy, waste, unnecessary transport and material consumption. Sustainability should be built into process requirements and performance indicators rather than treated as a separate reporting activity." },
        ]
      },
      {
        id: "future-directions-in-service-and-manufacturing",
        title: "Future Directions in Service and Manufacturing",
        icon: "Layers",
        blocks: [
          { kind: "paragraph", text: "Future BPR applications can involve intelligent automation, integrated customer journeys, predictive analytics, connected operations and data-driven decision-making. Service organizations may redesign onboarding, claims or support processes; manufacturers may redesign planning, maintenance, quality and fulfillment. The common principle remains end-to-end process improvement." },
        ]
      }
    ],
    keyTerms: [
      { term: "Digital transformation", definition: "Organizational change enabled by digital technologies that alters processes, services or business models." },
      { term: "Industry 4.0", definition: "Connected and intelligent industrial environment using digital, automation and data technologies." },
      { term: "Big data analytics", definition: "Analysis of large and complex datasets to generate patterns, insights and decisions." },
      { term: "Cloud computing", definition: "On-demand access to shared computing resources and services over a network." }
    ],
    examQuestions: [
      "Explain digital transformation and BPR. (Long)",
      "Discuss Industry 4.0 as an enabler of BPR. (Long)",
      "Explain big data analytics and cloud computing in BPR. (Long)",
      "Discuss sustainable and green process re-engineering. (Medium)",
      "Explain future directions of BPR in service and manufacturing. (Long)"
    ]
  }
];
