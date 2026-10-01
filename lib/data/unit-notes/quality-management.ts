import { UnitNote } from "@/types";

export const QualityManagementUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Quality Concepts",
    hours: 8,
    headings: [
      {
        id: "evolution-and-concepts-of-quality-management",
        title: "Evolution and Concepts of Quality Management",
        icon: "Award",
        blocks: [
          { kind: "paragraph", text: "Quality management evolved from inspection of finished goods toward prevention, statistical process control, quality assurance and organization-wide continuous improvement. Quality is not limited to absence of defects; it concerns whether products, services and processes satisfy requirements and customer expectations." },
{ kind: "diagram", diagramId: "quality-evolution", caption: "Conceptual framework for the topic." },
        ]
      },
      {
        id: "quality-control-versus-quality-assurance",
        title: "Quality Control versus Quality Assurance",
        icon: "GitCompare",
        blocks: [
          { kind: "paragraph", text: "Quality control focuses on operational techniques used to detect and control quality characteristics, while quality assurance is concerned with planned and systematic activities that provide confidence that requirements will be met. The distinction is useful for understanding detection versus prevention and system-level assurance." },
{ kind: "table", headers: ["Basis", "Quality Control", "Quality Assurance"], rows: [["Focus", "Product/process results", "System and planned activities"], ["Orientation", "Detection/control", "Prevention/confidence"], ["Typical evidence", "Inspection and process data", "Procedures, audits and system controls"]] },
        ]
      },
      {
        id: "dimensions-and-principles-of-quality",
        title: "Dimensions and Principles of Quality",
        icon: "Layers",
        blocks: [
          { kind: "paragraph", text: "Quality dimensions translate the broad concept of quality into attributes such as performance, features, reliability, conformance, durability, serviceability, aesthetics and perceived quality. Quality-management principles emphasize customer focus, leadership, engagement of people, process approach, improvement, evidence-based decisions and relationship management." },
        ]
      },
      {
        id: "deming-juran-and-crosby-philosophies",
        title: "Deming, Juran and Crosby Philosophies",
        icon: "Brain",
        blocks: [
          { kind: "paragraph", text: "Deming emphasized variation, system thinking and management responsibility for improvement. Juran developed the quality trilogy of planning, control and improvement and emphasized fitness for use. Crosby emphasized conformance to requirements, prevention and the zero-defects philosophy. Their approaches differ in emphasis but all move quality beyond final inspection." },
{ kind: "table", headers: ["Thinker", "Core emphasis"], rows: [["Deming", "Variation, systems and management improvement"], ["Juran", "Quality planning, control and improvement"], ["Crosby", "Conformance, prevention and zero defects"]] },
        ]
      },
      {
        id: "quality-cost-leadership-and-top-management",
        title: "Quality Cost, Leadership and Top Management",
        icon: "IndianRupee",
        blocks: [
          { kind: "paragraph", text: "Cost of quality includes prevention, appraisal, internal failure and external failure costs. Leadership and top management are essential because quality objectives, resources, culture and cross-functional priorities are management responsibilities. A quality system is unlikely to remain effective if senior management treats quality as only the responsibility of a separate department." },
        ]
      }
    ],
    keyTerms: [
      { term: "Quality Control", definition: "Operational techniques used to fulfill quality requirements." },
      { term: "Quality Assurance", definition: "Planned activities providing confidence that quality requirements will be met." },
      { term: "TQM", definition: "Organization-wide quality philosophy emphasizing customer focus and continuous improvement." },
      { term: "Quality cost", definition: "Costs associated with prevention, appraisal and failure of quality." }
    ],
    examQuestions: [
      "Explain evolution of quality management. (Long)",
      "Distinguish Quality Control and Quality Assurance. (Medium)",
      "Explain dimensions and principles of quality. (Long)",
      "Discuss Deming, Juran and Crosby philosophies. (Long)",
      "Explain quality cost and role of top management. (Long)"
    ]
  },
  {
    unitNumber: 2,
    title: "Quality Management System and Process Quality Improvement",
    hours: 8,
    headings: [
      {
        id: "basics-of-qms",
        title: "Basics of QMS",
        icon: "Settings",
        blocks: [
          { kind: "paragraph", text: "A Quality Management System is a structured set of processes, responsibilities, documented information and controls used to achieve quality objectives consistently. A QMS connects policy, planning, operations, measurement, corrective action and continual improvement so quality becomes part of normal management." },
        ]
      },
      {
        id: "seven-qc-tools",
        title: "Seven QC Tools",
        icon: "BarChart3",
        blocks: [
          { kind: "paragraph", text: "The seven basic quality-control tools are check sheet, histogram, Pareto chart, cause-and-effect diagram, scatter diagram, control chart and flowchart. They help collect data, visualize variation, prioritize problems, investigate causes and understand process behavior." },
{ kind: "diagram", diagramId: "seven-qc-tools", caption: "Conceptual framework for the topic." },
        ]
      },
      {
        id: "control-charts-process-capability-and-measurement-system-analysis",
        title: "Control Charts, Process Capability and Measurement System Analysis",
        icon: "Gauge",
        blocks: [
          { kind: "paragraph", text: "Control charts monitor process behavior over time and help distinguish common-cause variation from signals requiring investigation. Process capability compares process variation and centering with specification requirements. Measurement System Analysis examines whether the measurement process is sufficiently reliable for decision-making." },
        ]
      },
      {
        id: "design-of-experiments-and-acceptance-sampling",
        title: "Design of Experiments and Acceptance Sampling",
        icon: "FlaskConical",
        blocks: [
          { kind: "paragraph", text: "Design of Experiments (DOE) systematically varies selected factors to study their effects on an output and can reveal interactions that one-factor-at-a-time experimentation may miss. Acceptance sampling evaluates a sample from a lot to decide whether the lot should be accepted according to the sampling plan and specified criteria." },
        ]
      },
      {
        id: "quality-costs-and-pfmea-service-quality",
        title: "Quality Costs and PFMEA; Service Quality",
        icon: "ShieldCheck",
        blocks: [
          { kind: "paragraph", text: "Prevention, appraisal, internal failure and external failure costs show how quality performance affects economics. PFMEA applies failure-mode analysis to a process by identifying possible failures, effects, causes and controls so preventive actions can be prioritized. Service quality adds customer-facing dimensions such as reliability, responsiveness and assurance to the quality analysis." },
        ]
      }
    ],
    keyTerms: [
      { term: "QMS", definition: "Structured system of processes and responsibilities used to achieve quality objectives." },
      { term: "Seven QC tools", definition: "Basic tools for data collection, visualization, prioritization and process analysis." },
      { term: "Process capability", definition: "Assessment of how consistently a process can meet specified requirements." },
      { term: "MSA", definition: "Measurement System Analysis used to assess the adequacy of a measurement process." },
      { term: "PFMEA", definition: "Process-focused Failure Mode and Effects Analysis." }
    ],
    examQuestions: [
      "Explain the concept and elements of QMS. (Long)",
      "Explain the seven QC tools. (Long)",
      "Discuss control charts and process capability. (Long)",
      "Explain Measurement System Analysis. (Medium)",
      "Discuss DOE and acceptance sampling. (Long)",
      "Explain quality costs and PFMEA. (Long)",
      "Discuss service quality. (Medium)"
    ]
  },
  {
    unitNumber: 3,
    title: "Product Quality Improvement",
    hours: 7,
    headings: [
      {
        id: "quality-function-deployment",
        title: "Quality Function Deployment",
        icon: "GitBranch",
        blocks: [
          { kind: "paragraph", text: "Quality Function Deployment translates customer requirements into technical and process requirements. It helps design teams prioritize the voice of the customer and connect it with measurable engineering characteristics. QFD is useful because product quality is designed through requirements and decisions before production rather than relying only on final inspection." },
{ kind: "diagram", diagramId: "qfd", caption: "Conceptual framework for the topic." },
        ]
      },
      {
        id: "robust-design-and-taguchi-method",
        title: "Robust Design and Taguchi Method",
        icon: "Settings2",
        blocks: [
          { kind: "paragraph", text: "Robust design seeks consistent performance despite variation in controllable and noise factors. Taguchi's quality-engineering approach emphasizes designing products and processes so that performance is less sensitive to variation and deviations from the target create lower loss." },
        ]
      },
      {
        id: "design-fmea",
        title: "Design FMEA",
        icon: "ShieldCheck",
        blocks: [
          { kind: "paragraph", text: "Design FMEA examines possible product-design failure modes before production. For each important failure, the team studies its effect, potential cause and existing controls, then prioritizes actions to reduce risk. DFMEA is preventive and should influence design decisions rather than merely document known problems." },
{ kind: "table", headers: ["Question", "Purpose"], rows: [["What can fail?", "Identify failure mode"], ["What is the effect?", "Understand consequence"], ["Why can it fail?", "Identify cause"], ["How is it controlled?", "Review prevention/detection"], ["What should change?", "Reduce important risk"]] },
        ]
      },
      {
        id: "product-reliability-analysis",
        title: "Product Reliability Analysis",
        icon: "TrendingUp",
        blocks: [
          { kind: "paragraph", text: "Reliability is the probability that a product performs its required function for a specified period under stated conditions. Reliability analysis studies failure patterns, life data and operating conditions to improve design, maintenance and product performance. It is especially important where failure has high customer, safety or operational consequences." },
        ]
      }
    ],
    keyTerms: [
      { term: "QFD", definition: "Method for translating customer requirements into technical and process requirements." },
      { term: "Robust design", definition: "Design approach intended to reduce sensitivity to variation." },
      { term: "Taguchi method", definition: "Quality-engineering approach emphasizing robust design and reduced variation effects." },
      { term: "DFMEA", definition: "Failure Mode and Effects Analysis applied to product design." },
      { term: "Reliability", definition: "Probability of successful function for a specified time under stated conditions." }
    ],
    examQuestions: [
      "Explain Quality Function Deployment. (Long)",
      "Discuss robust design and Taguchi method. (Long)",
      "Explain Design FMEA. (Long)",
      "Discuss product reliability analysis. (Long)",
      "Differentiate DFMEA and PFMEA. (Medium)"
    ]
  },
  {
    unitNumber: 4,
    title: "Total Quality Management",
    hours: 9,
    headings: [
      {
        id: "meaning-and-elements-of-tqm",
        title: "Meaning and Elements of TQM",
        icon: "Target",
        blocks: [
          { kind: "paragraph", text: "Total Quality Management is an organization-wide philosophy that integrates customer focus, leadership, employee involvement, process management, supplier relationships, fact-based decisions and continuous improvement. TQM requires quality to be built into everyday work rather than delegated only to inspection or quality specialists." },
{ kind: "diagram", diagramId: "tqm", caption: "Conceptual framework for the topic." },
        ]
      },
      {
        id: "quality-circles",
        title: "Quality Circles",
        icon: "Users",
        blocks: [
          { kind: "paragraph", text: "Quality circles are small groups of employees who meet regularly to identify and solve work-related quality problems. They use employee knowledge and structured problem-solving to improve local processes and encourage participation. Their effectiveness depends on management support, relevant training and implementation of useful recommendations." },
        ]
      },
      {
        id: "six-sigma-for-process-improvement-and-product-design",
        title: "Six Sigma for Process Improvement and Product Design",
        icon: "Gauge",
        blocks: [
          { kind: "paragraph", text: "Six Sigma is a data-driven improvement approach focused on reducing variation and defects. DMAIC\u2014Define, Measure, Analyze, Improve and Control\u2014is commonly used for improving an existing process. DMADV\u2014Define, Measure, Analyze, Design and Verify\u2014is used when a new or substantially redesigned process/product is required." },
{ kind: "diagram", diagramId: "dmaic", caption: "Conceptual framework for the topic." },
        ]
      },
      {
        id: "design-benchmarking-and-qfd",
        title: "Design Benchmarking and QFD",
        icon: "GitCompare",
        blocks: [
          { kind: "paragraph", text: "Benchmarking compares performance or design characteristics with relevant references to identify gaps and learning opportunities. QFD can be used alongside benchmarking by translating customer requirements into technical characteristics and process requirements. Both approaches support fact-based design improvement." },
        ]
      },
      {
        id: "taguchi-quality-engineering-and-tpm",
        title: "Taguchi Quality Engineering and TPM",
        icon: "Cog",
        blocks: [
          { kind: "paragraph", text: "Taguchi quality engineering emphasizes robust design and reduction of variation effects. Total Productive Maintenance focuses on equipment effectiveness, preventive care, operator involvement and reduction of breakdowns, defects and other equipment-related losses. Together they support reliable processes and consistent quality." },
        ]
      }
    ],
    keyTerms: [
      { term: "TQM", definition: "Organization-wide quality-management philosophy." },
      { term: "Quality circle", definition: "Small employee group working on workplace quality problems." },
      { term: "Six Sigma", definition: "Data-driven improvement approach focused on variation and defect reduction." },
      { term: "DMAIC", definition: "Define, Measure, Analyze, Improve and Control." },
      { term: "TPM", definition: "Total Productive Maintenance focused on equipment effectiveness and proactive maintenance." }
    ],
    examQuestions: [
      "Explain TQM and its elements. (Long)",
      "Discuss quality circles. (Medium)",
      "Explain Six Sigma and DMAIC. (Long)",
      "Distinguish DMAIC and DMADV. (Medium)",
      "Explain design benchmarking and QFD. (Long)",
      "Discuss Taguchi quality engineering and TPM. (Long)"
    ]
  },
  {
    unitNumber: 5,
    title: "Quality Standards",
    hours: 8,
    headings: [
      {
        id: "iso-9000-and-quality-management",
        title: "ISO 9000 and Quality Management",
        icon: "BookOpen",
        blocks: [
          { kind: "paragraph", text: "The ISO 9000 family provides internationally recognized fundamentals and terminology for quality management systems. ISO 9001 specifies requirements for a QMS and is commonly used for conformity assessment and certification. The standards framework emphasizes controlled processes, customer requirements, evidence, improvement and system effectiveness." },
        ]
      },
      {
        id: "iso-14001-environmental-management",
        title: "ISO 14001 Environmental Management",
        icon: "Leaf",
        blocks: [
          { kind: "paragraph", text: "ISO 14001 provides a framework for an environmental management system. It helps organizations identify environmental aspects, establish objectives and controls, meet applicable obligations and improve environmental performance systematically." },
        ]
      },
      {
        id: "iso-22000-food-safety-management",
        title: "ISO 22000 Food Safety Management",
        icon: "ShieldCheck",
        blocks: [
          { kind: "paragraph", text: "ISO 22000 addresses food-safety management systems across the food chain. It combines management-system principles with systematic control of food-safety hazards and communication across relevant organizations in the chain." },
        ]
      },
      {
        id: "iso-iec-27001-information-security",
        title: "ISO/IEC 27001 Information Security",
        icon: "Lock",
        blocks: [
          { kind: "paragraph", text: "ISO/IEC 27001 specifies requirements for an Information Security Management System. It uses a risk-based approach to protect information and manage confidentiality, integrity and availability through governance, controls, monitoring and continual improvement." },
        ]
      },
      {
        id: "ohsas-18001-qs-9000-indian-standards-audits-and-awards",
        title: "OHSAS 18001, QS 9000, Indian Standards, Audits and Awards",
        icon: "Award",
        blocks: [
          { kind: "paragraph", text: "The supplied syllabus includes OHSAS 18001 and QS 9000 as quality-related standards/specifications. OHSAS 18001 is a legacy occupational-health-and-safety specification, while ISO 45001 is the current ISO standard in this area. Quality audits systematically compare objective evidence with defined criteria; certification audits assess conformity with applicable certifiable requirements. Quality awards recognize organizational excellence using defined assessment frameworks." },
{ kind: "diagram", diagramId: "audit-cycle", caption: "Conceptual framework for the topic." },
        ]
      }
    ],
    keyTerms: [
      { term: "ISO 9000", definition: "Fundamentals and vocabulary for quality management systems." },
      { term: "ISO 9001", definition: "Requirements for a quality management system." },
      { term: "ISO 14001", definition: "Environmental management system standard." },
      { term: "ISO 22000", definition: "Food safety management system standard." },
      { term: "ISO/IEC 27001", definition: "Information security management system standard." },
      { term: "Quality audit", definition: "Systematic, independent and documented evaluation against audit criteria." }
    ],
    examQuestions: [
      "Explain ISO 9000 and the concept of quality management systems. (Long)",
      "Discuss ISO 14001. (Medium)",
      "Explain ISO 22000. (Medium)",
      "Discuss ISO/IEC 27001. (Long)",
      "Explain OHSAS 18001 and its current context. (Medium)",
      "Discuss quality audits and certification. (Long)",
      "Explain the role of quality awards. (Medium)"
    ]
  }
];
