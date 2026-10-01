import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Performance and Reward Management (BMB HR 03)
// — AKTU, MBA Semester III, 40 teaching hours, syllabus provided by the user.
export const performanceAndRewardManagementUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Introduction to Performance Management",
    hours: 7,
    headings: [
      {
        id: "meaning-and-purpose-of-performance-management",
        title: "1. Meaning, Uses and Purpose of Performance Management",
        icon: "Target",
        blocks: [
          {
            kind: "paragraph",
            text: "Performance Management (PM) is a continuous process through which an organization clarifies expected performance, supports employees in achieving it, observes and assesses results, provides feedback, and uses the information for development and organizational decisions. It is broader than an annual appraisal because it connects individual contribution with team and organizational objectives."
          },
          {
            kind: "table",
            headers: ["Aspect", "Performance Management"],
            rows: [
              ["Nature", "Continuous and developmental process"],
              ["Focus", "Performance expectations, behaviour, results and improvement"],
              ["Time horizon", "Ongoing, with periodic formal reviews"],
              ["Participants", "Employee, manager and relevant organizational stakeholders"],
              ["Main outputs", "Goals, feedback, development actions, performance decisions and records"],
              ["Organizational link", "Connects employee performance with business and departmental objectives"]
            ]
          },
          {
            kind: "paragraph",
            text: "The major uses of performance management include clarifying expectations, improving performance, identifying development needs, supporting career decisions, recognizing contribution, strengthening communication between managers and employees, and generating information for compensation or other HR decisions where the organization's policy permits."
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam distinction",
            text: "Performance management should be described as a system or process, not merely as a form completed once a year. Appraisal is one component within the wider performance-management process."
          }
        ]
      },
      {
        id: "performance-management-versus-performance-appraisal",
        title: "2. Performance Management versus Performance Appraisal",
        icon: "GitCompare",
        blocks: [
          {
            kind: "table",
            headers: ["Basis", "Performance Management", "Performance Appraisal"],
            rows: [
              ["Scope", "Broad HR and management process", "Specific assessment activity"],
              ["Frequency", "Continuous", "Usually periodic"],
              ["Primary purpose", "Manage, develop and improve performance", "Assess performance against criteria"],
              ["Orientation", "Future and present focused", "Often review-oriented"],
              ["Tools", "Goals, feedback, coaching, development, appraisal", "Ratings, forms, review discussions"],
              ["Relationship", "Contains appraisal as one element", "Forms one part of performance management"]
            ]
          },
          {
            kind: "diagram",
            diagramId: "performance-management-cycle",
            caption: "Performance management as a continuous cycle linking planning, execution, review, feedback and development."
          }
        ]
      },
      {
        id: "challenges-of-performance-management",
        title: "3. Challenges of Performance Management in the Current Scenario",
        icon: "AlertTriangle",
        blocks: [
          {
            kind: "paragraph",
            text: "Contemporary performance management faces challenges because jobs, technology, work arrangements and employee expectations change rapidly. A system may become ineffective if goals are unclear, measures are poorly designed, feedback is delayed, managers apply standards inconsistently, or employees do not understand how performance information will be used."
          },
          {
            kind: "table",
            headers: ["Challenge", "Why it matters", "Management response"],
            rows: [
              ["Unclear goals", "Employees cannot reliably prioritize work", "Define measurable and role-relevant objectives"],
              ["Rating bias", "Assessment may reflect personal preferences rather than performance", "Use evidence, multiple inputs and trained reviewers"],
              ["Delayed feedback", "Problems may continue without correction", "Use regular performance conversations"],
              ["Changing work", "Fixed targets can become obsolete", "Review goals when business conditions materially change"],
              ["Remote/hybrid work", "Visibility may differ from actual contribution", "Measure outcomes and agreed behaviours rather than physical visibility"],
              ["Weak manager capability", "Poor conversations reduce the value of the system", "Train managers in goal setting, feedback and documentation"]
            ]
          }
        ]
      },
      {
        id: "performance-management-as-system-and-process",
        title: "4. Performance Management as a System and Process",
        icon: "RefreshCw",
        blocks: [
          {
            kind: "paragraph",
            text: "A performance-management system integrates organizational objectives, departmental goals, individual expectations, performance measurement, feedback, development and reward-related decisions. As a process, it moves through connected stages rather than isolated HR activities."
          },
          {
            kind: "diagram",
            diagramId: "performance-system-process",
            caption: "Integrated performance-management process from organizational direction to individual development."
          },
          {
            kind: "table",
            headers: ["Stage", "Key activity", "Expected output"],
            rows: [
              ["Planning", "Translate organizational goals into role expectations", "Performance plan"],
              ["Execution", "Perform work and use available resources", "Work results and behaviours"],
              ["Monitoring", "Track progress and evidence", "Performance information"],
              ["Review", "Discuss achievement and gaps", "Assessment and feedback"],
              ["Development", "Address capability and performance gaps", "Development action plan"],
              ["Renewal", "Set revised or new expectations", "Next performance cycle"]
            ]
          }
        ]
      },
      {
        id: "performance-criteria-and-effective-appraisal",
        title: "5. Establishing Performance Criteria and Developing an Effective Appraisal System",
        icon: "FileCheck",
        blocks: [
          {
            kind: "paragraph",
            text: "Performance criteria are standards or dimensions used to judge whether expected performance has been achieved. Effective criteria should be related to the job, understandable, observable or measurable where possible, sufficiently comprehensive and applied consistently. An appraisal system should combine clear standards with reliable evidence and a meaningful review discussion."
          },
          {
            kind: "table",
            headers: ["Criterion quality", "Meaning"],
            rows: [
              ["Job relevance", "The criterion should relate to responsibilities the employee can reasonably influence."],
              ["Clarity", "The employee should understand what successful performance means."],
              ["Measurability", "Results should be measured with suitable indicators where practical."],
              ["Reliability", "Similar performance should not produce arbitrary differences because of the assessor."],
              ["Fairness", "Standards should be applied consistently and supported by evidence."],
              ["Completeness", "Important aspects of the role should not be ignored merely because they are easy to measure."]
            ]
          },
          {
            kind: "callout",
            tone: "example",
            title: "Illustrative criterion",
            text: "For a customer-service role, 'responds to customer issues within the agreed service standard while maintaining service quality' is more useful than an undefined criterion such as 'works hard' because it provides a clearer basis for evidence and discussion."
          }
        ]
      },
      {
        id: "kra-ksa-and-kpi",
        title: "6. KRA, KSA and KPI: Connecting Role Expectations with Measurement",
        icon: "LineChart",
        blocks: [
          {
            kind: "table",
            headers: ["Term", "Meaning", "Use in performance management"],
            rows: [
              ["KRA", "Key Result Area", "Defines an important result area for a role."],
              ["KSA", "Knowledge, Skills and Abilities", "Describes capabilities required to perform the role effectively."],
              ["KPI", "Key Performance Indicator", "Provides an indicator used to monitor a defined performance dimension."]
            ]
          },
          {
            kind: "paragraph",
            text: "KRA answers 'what important result area is this role responsible for?', KSA answers 'what capabilities are required to perform it?', and KPI answers 'how will a relevant aspect of performance be monitored?'. These concepts should be connected rather than treated as interchangeable terms."
          },
          {
            kind: "diagram",
            diagramId: "kra-ksa-kpi-framework",
            caption: "Relationship among result areas, required capabilities and performance indicators."
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam tip",
            text: "A good answer should define all three terms separately and then explain their relationship with a simple job example."
          }
        ]
      },
      {
        id: "smart-objectives",
        title: "7. SMART Annual Performance Objectives",
        icon: "Target",
        blocks: [
          {
            kind: "paragraph",
            text: "SMART objectives are annual performance objectives designed to be Specific, Measurable, Achievable, Relevant and Time-bound. The purpose is to convert broad expectations into objectives that can be understood, monitored and reviewed."
          },
          {
            kind: "table",
            headers: ["SMART element", "Question it should answer"],
            rows: [
              ["Specific", "What exactly is to be achieved?"],
              ["Measurable", "What evidence or indicator will show progress or achievement?"],
              ["Achievable", "Is the objective realistically attainable with available authority and resources?"],
              ["Relevant", "How does the objective contribute to the role and organizational priorities?"],
              ["Time-bound", "By when must the objective be achieved?"]
            ]
          },
          {
            kind: "callout",
            tone: "example",
            title: "Illustrative objective",
            text: "Instead of 'improve customer service', a more structured objective could be 'reduce average resolution time for assigned customer complaints to the agreed service standard by the end of the annual review period, while maintaining the required quality level.'"
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Performance Management", definition: "A continuous process of planning, monitoring, reviewing and developing employee performance in relation to organizational objectives." },
      { term: "Performance Appraisal", definition: "A formal assessment of an employee's performance against established criteria." },
      { term: "Performance criterion", definition: "A standard or dimension used to assess whether expected performance has been achieved." },
      { term: "KRA", definition: "Key Result Area; an important result area for which a role is responsible." },
      { term: "KSA", definition: "Knowledge, Skills and Abilities required to perform a role effectively." },
      { term: "KPI", definition: "Key Performance Indicator used to monitor a defined performance dimension." },
      { term: "SMART objective", definition: "An objective designed to be Specific, Measurable, Achievable, Relevant and Time-bound." },
      { term: "Performance feedback", definition: "Information communicated to an employee about performance, progress, strengths or gaps." },
      { term: "Performance development", definition: "Planned actions intended to improve capability and future performance." },
      { term: "Performance cycle", definition: "The recurring sequence of planning, execution, monitoring, review and development." }
    ],
    examQuestions: [
      "Define Performance Management and explain its uses and purpose. (Long)",
      "Distinguish between Performance Management and Performance Appraisal. (Medium)",
      "Explain the major challenges of Performance Management in the current scenario. (Long)",
      "Discuss Performance Management as a system and as a process. (Long)",
      "Explain the characteristics of effective performance criteria. (Long)",
      "Describe the steps involved in developing an effective appraisal system. (Long)",
      "Differentiate between KRA, KSA and KPI with suitable examples. (Long)",
      "Explain SMART annual performance objectives and their five elements. (Medium)",
      "Explain how feedback and development are integrated into Performance Management. (Medium)",
      "Write a short note on the importance of linking individual objectives with organizational goals. (Short)"
    ]
  },

  {
    unitNumber: 2,
    title: "Managing Performance",
    hours: 9,
    headings: [
      {
        id: "managing-performance-at-all-levels",
        title: "1. Managing Performance at Different Management Levels",
        icon: "Users",
        blocks: [
          {
            kind: "paragraph",
            text: "Managing performance at all levels requires translating organizational strategy into objectives appropriate to different roles. Senior management focuses strongly on organizational outcomes and strategic priorities; middle managers connect departmental performance with strategy; operational managers and employees focus on execution, service, quality, productivity and role-specific outcomes."
          },
          {
            kind: "table",
            headers: ["Level", "Typical performance focus", "Management requirement"],
            rows: [
              ["Top management", "Strategic outcomes, growth, sustainability and organizational priorities", "Strategic alignment and outcome measures"],
              ["Middle management", "Departmental targets and cross-functional coordination", "Translation of strategy into departmental objectives"],
              ["Supervisory level", "Team output, quality, attendance, safety and workflow", "Frequent monitoring and coaching"],
              ["Individual employee", "Role responsibilities, objectives and required behaviours", "Clear expectations, feedback and development"]
            ]
          },
          {
            kind: "callout",
            tone: "info",
            title: "Alignment principle",
            text: "Performance management works best when objectives at lower levels contribute logically to higher-level goals. Alignment does not mean that every employee must have the same target; it means role objectives should support the organization's direction."
          }
        ]
      },
      {
        id: "methods-of-managing-performance",
        title: "2. Methods of Managing Performance",
        icon: "Settings",
        blocks: [
          {
            kind: "paragraph",
            text: "Methods of managing performance include goal setting, management by objectives, regular reviews, coaching, feedback, development planning, competency assessment and multi-source feedback. Organizations may combine methods rather than rely on a single technique."
          },
          {
            kind: "table",
            headers: ["Method", "Main purpose", "Typical use"],
            rows: [
              ["Goal setting", "Define expected results", "Annual or periodic performance planning"],
              ["Coaching", "Improve performance through guidance and practice", "Ongoing manager–employee interaction"],
              ["Feedback", "Provide information about progress and gaps", "Regular performance conversations"],
              ["MBO", "Manage through agreed objectives", "Roles with identifiable objectives"],
              ["Competency assessment", "Assess required behaviours and capabilities", "Development and career decisions"],
              ["360-degree feedback", "Collect performance-related feedback from multiple sources", "Leadership and developmental assessment"]
            ]
          }
        ]
      },
      {
        id: "360-degree-performance-appraisal",
        title: "3. 360-Degree Performance Appraisal",
        icon: "RefreshCw",
        blocks: [
          {
            kind: "paragraph",
            text: "360-degree performance appraisal collects structured feedback from multiple perspectives associated with an employee, which may include the manager, peers, subordinates, internal or external customers and self-assessment depending on the organization's design. Its purpose is to provide a broader picture of workplace behaviour and performance."
          },
          {
            kind: "diagram",
            diagramId: "three-sixty-appraisal",
            caption: "Multiple feedback sources surrounding the employee in a 360-degree appraisal system."
          },
          {
            kind: "table",
            headers: ["Feature", "Explanation"],
            rows: [
              ["Multiple sources", "Feedback is obtained from more than one relationship or viewpoint."],
              ["Self-assessment", "The employee may assess their own performance for comparison and reflection."],
              ["Developmental use", "Often useful for identifying behavioural and leadership development needs."],
              ["Confidentiality", "Anonymity and confidentiality arrangements can affect response quality and trust."],
              ["Limitation", "Different raters may have different opportunities to observe the employee."]
            ]
          }
        ]
      },
      {
        id: "management-by-objectives",
        title: "4. Management by Objectives (MBO)",
        icon: "Target",
        blocks: [
          {
            kind: "paragraph",
            text: "Management by Objectives (MBO) is an approach in which managers and employees work with clearly defined objectives and use those objectives as a basis for managing and reviewing performance. MBO emphasizes participation, goal clarity, measurable outcomes and periodic review."
          },
          {
            kind: "diagram",
            diagramId: "mbo-cycle",
            caption: "MBO cycle showing organizational goals, jointly agreed objectives, performance and review."
          },
          {
            kind: "table",
            headers: ["Stage", "Activity"],
            rows: [
              ["Organizational direction", "Identify broad organizational objectives."],
              ["Cascading", "Translate organizational goals into departmental and individual objectives."],
              ["Agreement", "Discuss and agree objectives, measures and time frames."],
              ["Execution", "Employee performs against agreed objectives."],
              ["Review", "Measure results and discuss deviations."],
              ["Renewal", "Set revised objectives for the next period."]
            ]
          }
        ]
      },
      {
        id: "performance-analysis-for-development",
        title: "5. Performance Analysis for Individual and Organizational Development",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "paragraph",
            text: "Performance analysis compares expected performance with actual results and behaviours to identify strengths, gaps and development priorities. At the individual level it can guide training, coaching and career development. At the organizational level, patterns in performance data can indicate process, resource, capability or system-level issues."
          },
          {
            kind: "table",
            headers: ["Analysis level", "Questions"],
            rows: [
              ["Individual", "What was expected? What was achieved? Which capabilities or conditions explain the gap?"],
              ["Team", "Are gaps concentrated in coordination, workload, skills or leadership?"],
              ["Department", "Are objectives aligned with resources and organizational priorities?"],
              ["Organization", "Are recurring performance patterns indicating a system or strategic issue?"]
            ]
          },
          {
            kind: "callout",
            tone: "example",
            title: "Performance-gap analysis",
            text: "If sales results are below target, the analysis should not automatically conclude that employees lack ability. It should examine factors such as target quality, market conditions, product availability, customer demand, training, territory allocation and sales behaviour before deciding on a development response."
          }
        ]
      },
      {
        id: "performance-management-and-organizational-development",
        title: "6. Performance Management as an Organizational Development Tool",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "Performance management contributes to organizational development when performance information is aggregated and used to identify recurring capability needs, improve work processes, align structures and strengthen leadership. The system becomes developmental when review outcomes lead to concrete actions rather than only ratings."
          },
          {
            kind: "table",
            headers: ["Performance information", "Possible organizational action"],
            rows: [
              ["Repeated skill gaps", "Training or capability-building programme"],
              ["Unclear responsibilities", "Role redesign or clarification"],
              ["Repeated process delays", "Process improvement"],
              ["Leadership behaviour gaps", "Coaching or leadership development"],
              ["Misaligned targets", "Goal or measurement redesign"]
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: "360-degree appraisal", definition: "A multi-source performance feedback method using feedback from several relevant workplace perspectives." },
      { term: "MBO", definition: "Management by Objectives; an approach based on agreed objectives and periodic performance review." },
      { term: "Goal alignment", definition: "Logical connection between organizational, departmental, team and individual objectives." },
      { term: "Performance gap", definition: "Difference between expected performance and actual performance." },
      { term: "Coaching", definition: "Managerial or professional support aimed at improving performance and capability." },
      { term: "Multi-source feedback", definition: "Performance-related feedback collected from multiple relevant observers." },
      { term: "Performance analysis", definition: "Systematic examination of results and performance evidence to identify strengths and gaps." },
      { term: "Development need", definition: "A capability or knowledge area requiring improvement to support effective performance." },
      { term: "Organizational development", definition: "Planned efforts to improve organizational capability, effectiveness and adaptation." }
    ],
    examQuestions: [
      "Explain methods of managing performance at different levels of management. (Long)",
      "Discuss the importance of performance management at top, middle and supervisory levels. (Long)",
      "Explain the concept, process and uses of 360-degree performance appraisal. (Long)",
      "Discuss the advantages and limitations of 360-degree appraisal. (Medium)",
      "Define MBO and explain its process. (Long)",
      "Discuss the advantages and limitations of Management by Objectives. (Long)",
      "Explain performance analysis for individual development. (Medium)",
      "Explain how performance analysis can support organizational development. (Long)",
      "Distinguish between 360-degree appraisal and traditional manager-only appraisal. (Medium)",
      "Write a short note on goal alignment in Performance Management. (Short)"
    ]
  },

  {
    unitNumber: 3,
    title: "Contemporary Issues: Potential Appraisal, Competency Mapping and Balanced Scorecard",
    hours: 7,
    headings: [
      {
        id: "potential-appraisal",
        title: "1. Potential Appraisal",
        icon: "Award",
        blocks: [
          {
            kind: "paragraph",
            text: "Potential appraisal is concerned with assessing an employee's capacity to take on higher or different responsibilities in the future. It differs from current-performance appraisal because strong present performance does not automatically prove readiness for a more complex role. Potential assessment should therefore consider capabilities, learning orientation, behavioural indicators and future role requirements."
          },
          {
            kind: "table",
            headers: ["Performance appraisal", "Potential appraisal"],
            rows: [
              ["Primary question", "How well is the employee performing now?"],
              ["Time orientation", "Primarily present/past performance", "Primarily future capacity"],
              ["Reference", "Current role requirements", "Future or higher-level role requirements"],
              ["Use", "Performance decisions and development", "Career planning, succession and development"],
              ["Evidence", "Results and current behaviours", "Capabilities, learning, adaptability and role-related potential"]
            ]
          },
          {
            kind: "callout",
            tone: "info",
            title: "Important distinction",
            text: "Potential should not be treated as a simple synonym for current performance. An employee may perform a current role very well but require additional competencies before moving into a substantially different role."
          }
        ]
      },
      {
        id: "competency-mapping",
        title: "2. Competency Mapping",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "Competency mapping identifies the competencies required for particular roles and compares them with the competencies demonstrated by employees. A competency can include knowledge, skills, abilities, behaviours and other characteristics relevant to effective role performance."
          },
          {
            kind: "diagram",
            diagramId: "competency-mapping-career-link",
            caption: "Competency mapping connecting role requirements, employee capability gaps, development and career movement."
          },
          {
            kind: "table",
            headers: ["Step", "Activity"],
            rows: [
              ["Identify role competencies", "Determine competencies required for effective performance."],
              ["Assess current competencies", "Collect evidence of the employee's present capability."],
              ["Map gaps", "Compare required and demonstrated competency levels."],
              ["Develop", "Use training, coaching, job assignments or other development methods."],
              ["Review", "Reassess capability and readiness for future opportunities."]
            ]
          }
        ]
      },
      {
        id: "career-development-linkage",
        title: "3. Competency Mapping and Career Development",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "paragraph",
            text: "Competency mapping supports career development by making the capabilities required for future roles more visible. Employees can use the competency profile to understand development priorities, while HR can use it to structure development programmes, internal mobility and career pathways."
          },
          {
            kind: "table",
            headers: ["Career activity", "Role of competency mapping"],
            rows: [
              ["Career planning", "Shows competencies required for target roles."],
              ["Training", "Helps identify relevant learning needs."],
              ["Internal mobility", "Provides a structured basis for comparing employee capability with role requirements."],
              ["Promotion readiness", "Supports assessment of capabilities needed at the next level."],
              ["Development planning", "Converts competency gaps into development actions."]
            ]
          }
        ]
      },
      {
        id: "succession-planning",
        title: "4. Succession Planning",
        icon: "Users",
        blocks: [
          {
            kind: "paragraph",
            text: "Succession planning is the systematic identification and development of people who may be able to fill important roles in the future. It reduces dependence on last-minute replacement decisions and creates a structured pipeline of capability for critical positions."
          },
          {
            kind: "table",
            headers: ["Element", "Explanation"],
            rows: [
              ["Critical role identification", "Determine positions where continuity is important."],
              ["Talent identification", "Identify employees who may be suitable for future roles."],
              ["Potential assessment", "Assess readiness and development requirements."],
              ["Development", "Provide assignments, coaching, training or exposure."],
              ["Readiness review", "Monitor progress toward future-role requirements."]
            ]
          },
          {
            kind: "callout",
            tone: "example",
            title: "Illustrative succession case",
            text: "If a department head role requires strategic planning, financial understanding and people leadership, succession planning should identify potential successors against those requirements and document the development actions needed before assuming the role."
          }
        ]
      },
      {
        id: "balanced-scorecard-introduction",
        title: "5. Balanced Scorecard: Introduction and Applications",
        icon: "LineChart",
        blocks: [
          {
            kind: "paragraph",
            text: "The Balanced Scorecard is a strategic performance-management framework that views organizational performance through multiple perspectives rather than relying only on financial measures. The commonly used perspectives are financial, customer, internal business process, and learning and growth."
          },
          {
            kind: "diagram",
            diagramId: "balanced-scorecard-perspectives",
            caption: "Four commonly used Balanced Scorecard perspectives and their relationship with strategy."
          },
          {
            kind: "table",
            headers: ["Perspective", "Typical question", "Illustrative measures"],
            rows: [
              ["Financial", "How is the organization performing financially?", "Revenue, cost, margin or return measures"],
              ["Customer", "How do customers perceive value and service?", "Satisfaction, retention, service measures"],
              ["Internal process", "Which processes must perform well?", "Quality, cycle time, productivity measures"],
              ["Learning and growth", "How does the organization build future capability?", "Skills, learning, innovation and engagement indicators"]
            ]
          }
        ]
      },
      {
        id: "balanced-scorecard-advantages-limitations",
        title: "6. Advantages and Limitations of Balanced Scorecard",
        icon: "GitCompare",
        blocks: [
          {
            kind: "table",
            headers: ["Advantages", "Limitations / cautions"],
            rows: [
              ["Combines financial and non-financial measures", "Poorly selected measures can create confusion."],
              ["Links measures with strategy", "Requires clear strategic logic and ownership."],
              ["Encourages longer-term capability building", "Implementation can require substantial effort and data."],
              ["Provides a broader performance view", "Too many indicators can reduce focus."],
              ["Supports communication of priorities", "Measures may become targets that distort behaviour if poorly designed."]
            ]
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam structure",
            text: "For a Balanced Scorecard answer, define the framework, explain the four perspectives, describe applications, and then discuss advantages and limitations with examples."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Potential appraisal", definition: "Assessment of an employee's capacity for future or higher-level responsibilities." },
      { term: "Competency", definition: "A combination of relevant knowledge, skills, abilities and behaviours associated with effective performance." },
      { term: "Competency mapping", definition: "Systematic identification and assessment of competencies required for roles and demonstrated by employees." },
      { term: "Career development", definition: "Planned activities that support an employee's progression and capability over time." },
      { term: "Succession planning", definition: "Systematic identification and development of potential successors for important future roles." },
      { term: "Balanced Scorecard", definition: "A multi-perspective strategic performance-management framework." },
      { term: "Financial perspective", definition: "Balanced Scorecard perspective concerned with financial outcomes and value." },
      { term: "Customer perspective", definition: "Perspective concerned with customer value, satisfaction and related outcomes." },
      { term: "Internal process perspective", definition: "Perspective concerned with processes that must perform effectively to execute strategy." },
      { term: "Learning and growth perspective", definition: "Perspective concerned with capabilities, people, learning and future organizational capacity." }
    ],
    examQuestions: [
      "Define potential appraisal and distinguish it from performance appraisal. (Long)",
      "Explain the objectives and process of potential appraisal. (Medium)",
      "What is competency mapping? Explain its major steps. (Long)",
      "Discuss the linkage between competency mapping and career development. (Long)",
      "Explain succession planning and its importance to organizations. (Long)",
      "Discuss the relationship between potential appraisal and succession planning. (Medium)",
      "Define Balanced Scorecard and explain its four perspectives. (Long)",
      "Explain the applications of Balanced Scorecard in performance management. (Long)",
      "Discuss the advantages and limitations of Balanced Scorecard. (Long)",
      "Write a short note on learning and growth perspective of Balanced Scorecard. (Short)"
    ]
  },

  {
    unitNumber: 4,
    title: "Reward System and Job Evaluation",
    hours: 9,
    headings: [
      {
        id: "reward-system-definition-function-significance",
        title: "1. Reward System: Definition, Functions and Significance",
        icon: "Award",
        blocks: [
          {
            kind: "paragraph",
            text: "A reward system is the set of financial and non-financial rewards and practices through which an organization recognizes employee contribution and supports desired performance and behaviour. It may include direct pay, incentives, benefits, recognition, development opportunities and other employment rewards."
          },
          {
            kind: "table",
            headers: ["Function", "How the reward system contributes"],
            rows: [
              ["Attraction", "Helps make employment opportunities competitive and relevant to the labour market."],
              ["Retention", "Supports the organization's ability to retain employees through appropriate rewards and employment conditions."],
              ["Motivation", "Can reinforce desired performance and contribution."],
              ["Recognition", "Signals that valuable contribution is noticed."],
              ["Alignment", "Can connect rewards with organizational priorities and role expectations."],
              ["Equity", "Provides a framework for consistent and explainable reward decisions."]
            ]
          },
          {
            kind: "diagram",
            diagramId: "reward-system-framework",
            caption: "Major components and purposes of an integrated employee reward system."
          }
        ]
      },
      {
        id: "principles-of-effective-reward-system",
        title: "2. Principles of an Effective Reward System",
        icon: "Scale",
        blocks: [
          {
            kind: "paragraph",
            text: "A reward system should be designed with attention to internal equity, external competitiveness, performance linkage, affordability, legal compliance, transparency and administrative feasibility. These principles may sometimes conflict, so HR must establish a coherent reward philosophy."
          },
          {
            kind: "table",
            headers: ["Principle", "Meaning"],
            rows: [
              ["Internal equity", "Employees should perceive meaningful relationships among jobs and rewards within the organization."],
              ["External competitiveness", "Rewards should be considered in relation to relevant labour-market conditions."],
              ["Performance linkage", "Where policy intends, variable rewards should reflect defined performance or contribution."],
              ["Consistency", "Comparable cases should be treated using consistent rules."],
              ["Transparency", "Employees should understand the broad basis of reward decisions."],
              ["Compliance", "Reward practices must operate within applicable legal requirements."]
            ]
          }
        ]
      },
      {
        id: "job-evaluation-definition-and-purpose",
        title: "3. Job Evaluation: Definition, Objectives and Inputs",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "Job evaluation is a systematic process of determining the relative worth of jobs within an organization. It evaluates the job rather than the person occupying it. The resulting job structure can support internal equity and provide a basis for designing or reviewing pay structures."
          },
          {
            kind: "table",
            headers: ["Job-evaluation input", "What it examines"],
            rows: [
              ["Job duties", "Nature and scope of responsibilities."],
              ["Skill requirements", "Knowledge, technical skills and experience required."],
              ["Effort", "Mental and physical effort associated with the job."],
              ["Responsibility", "Accountability for people, assets, decisions or outcomes."],
              ["Working conditions", "Relevant conditions and demands of the job."],
              ["Job context", "Relationships, complexity and organizational impact."]
            ]
          },
          {
            kind: "callout",
            tone: "info",
            title: "Key distinction",
            text: "Job evaluation evaluates the relative worth of jobs; performance appraisal evaluates how well a person performs a job. Mixing these two concepts is a common examination error."
          }
        ]
      },
      {
        id: "methods-of-job-evaluation",
        title: "4. Methods of Job Evaluation",
        icon: "GitCompare",
        blocks: [
          {
            kind: "table",
            headers: ["Method", "Basic idea", "General characteristic"],
            rows: [
              ["Ranking", "Arrange jobs from relatively lower to higher worth", "Simple but less detailed"],
              ["Job classification / grading", "Place jobs into predefined grades or classes", "Uses established grade descriptions"],
              ["Point-factor method", "Assign points to compensable factors", "Analytical and structured"],
              ["Factor comparison", "Compare jobs factor by factor", "Combines comparison with factor values"]
            ]
          },
          {
            kind: "paragraph",
            text: "The choice of job-evaluation method depends on organizational size, job diversity, administrative capability and the level of analytical detail required. Analytical methods generally provide more explicit factor-based comparisons, while simpler methods can be easier to administer."
          },
          {
            kind: "diagram",
            diagramId: "job-evaluation-methods",
            caption: "Comparison framework for major job-evaluation methods."
          }
        ]
      },
      {
        id: "practical-implications-of-job-evaluation",
        title: "5. Practical Implications for Technical, Non-Technical and Executive/Managerial Positions",
        icon: "FileText",
        blocks: [
          {
            kind: "paragraph",
            text: "Job evaluation must reflect the nature of the jobs being compared. Technical jobs may place greater emphasis on specialized knowledge and technical responsibility; non-technical roles may emphasize service, coordination, administrative or operational responsibilities; executive and managerial roles may involve broader accountability, decision-making, leadership and organizational impact."
          },
          {
            kind: "table",
            headers: ["Job category", "Relevant evaluation considerations"],
            rows: [
              ["Technical", "Specialized knowledge, technical complexity, problem solving and technical accountability."],
              ["Non-technical", "Administrative or operational responsibility, coordination, service and working conditions."],
              ["Executive / managerial", "Decision-making, leadership, scope of responsibility, organizational impact and accountability."],
              ["All categories", "Job content should be evaluated consistently using the selected job-evaluation framework."]
            ]
          }
        ]
      },
      {
        id: "significance-of-wage-differences",
        title: "6. Significance of Wage Differences",
        icon: "IndianRupee",
        blocks: [
          {
            kind: "paragraph",
            text: "Wage differences may reflect differences in job requirements, responsibility, skill, market conditions, experience, performance-related elements and organizational reward policy. From an HR perspective, differences should be explainable through relevant criteria and should operate within applicable legal and organizational requirements."
          },
          {
            kind: "table",
            headers: ["Source of difference", "Possible basis"],
            rows: [
              ["Job value", "Different responsibilities, complexity or required competencies."],
              ["Labour market", "Different market rates for scarce or specialized skills."],
              ["Performance", "Variable or merit-related rewards under the organization's system."],
              ["Experience / service", "Service-related progression where policy provides for it."],
              ["Allowances", "Compensation for specified working or employment conditions."]
            ]
          },
          {
            kind: "callout",
            tone: "example",
            title: "Practical example",
            text: "Two jobs may have different pay because one has broader decision authority and accountability. The HR explanation should be based on job requirements and the organization's reward structure rather than simply on the personal qualities of the employees occupying the jobs."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Reward system", definition: "The set of financial and non-financial rewards and practices used to recognize contribution and support organizational objectives." },
      { term: "Internal equity", definition: "Perceived fairness of reward relationships among jobs within an organization." },
      { term: "External competitiveness", definition: "Relationship between an organization's rewards and relevant external labour-market conditions." },
      { term: "Job evaluation", definition: "Systematic assessment of the relative worth of jobs within an organization." },
      { term: "Ranking method", definition: "Job-evaluation method that orders jobs from relatively lower to higher worth." },
      { term: "Job classification", definition: "Method that places jobs into predefined grades or classes." },
      { term: "Point-factor method", definition: "Analytical job-evaluation method that assigns points to compensable factors." },
      { term: "Factor comparison", definition: "Job-evaluation method that compares jobs factor by factor." },
      { term: "Compensable factor", definition: "A job characteristic considered relevant when evaluating relative job worth." },
      { term: "Wage differential", definition: "A difference in pay between jobs or employees arising from relevant reward-system factors." }
    ],
    examQuestions: [
      "Define a reward system and explain its functions and significance. (Long)",
      "Explain the principles of an effective reward system. (Long)",
      "Define job evaluation and distinguish it from performance appraisal. (Medium)",
      "Explain the objectives and inputs of job evaluation. (Long)",
      "Discuss the major methods of job evaluation. (Long)",
      "Compare ranking, job classification, point-factor and factor-comparison methods. (Long)",
      "Explain the practical implications of job evaluation for technical and non-technical positions. (Medium)",
      "Discuss job evaluation for executive and managerial positions. (Medium)",
      "Explain the significance of wage differences in an organization. (Long)",
      "Write a short note on internal equity and external competitiveness. (Short)"
    ]
  },

  {
    unitNumber: 5,
    title: "Compensation, Pay Structure, Incentives, Benefits and Wage Legislation",
    hours: 8,
    headings: [
      {
        id: "methods-of-pay-and-allowances",
        title: "1. Methods of Pay and Allowances",
        icon: "Wallet",
        blocks: [
          {
            kind: "paragraph",
            text: "Compensation includes the monetary and non-monetary returns associated with employment. The syllabus covers methods of pay and allowances, pay structure, incentives, fringe benefits, overtime, city compensatory allowance and travelling allowance. A compensation system should be understood as a structured combination of different pay elements rather than as basic salary alone."
          },
          {
            kind: "table",
            headers: ["Component", "General meaning"],
            rows: [
              ["Basic pay", "Core fixed pay forming the base of the salary structure."],
              ["DA", "Dearness Allowance, where applicable, designed to address specified cost-of-living considerations under the relevant pay structure."],
              ["HRA", "House Rent Allowance provided according to the applicable compensation policy and conditions."],
              ["Gross pay", "Total earnings before deductions from the relevant salary components."],
              ["Take-home pay", "Amount received after applicable deductions from gross earnings."],
              ["Other allowances", "Additional payments linked to specified conditions, duties, locations or expenses."]
            ]
          },
          {
            kind: "diagram",
            diagramId: "pay-structure-breakdown",
            caption: "Illustrative relationship among basic pay, allowances, gross pay, deductions and take-home pay."
          }
        ]
      },
      {
        id: "pay-structure-and-salary-components",
        title: "2. Pay Structure: Basic Pay, DA, HRA, Gross Pay and Take-Home Pay",
        icon: "IndianRupee",
        blocks: [
          {
            kind: "paragraph",
            text: "A pay structure organizes the different components of employee earnings. For examination purposes, students should distinguish earnings before deductions from the amount actually received after deductions. The exact components, rates, eligibility and tax treatment depend on the applicable employment arrangement and organization."
          },
          {
            kind: "table",
            headers: ["Term", "Conceptual relationship"],
            rows: [
              ["Basic pay", "Base component of the salary package."],
              ["Allowances", "Additional components attached to specified purposes or conditions."],
              ["Gross pay", "Basic pay plus applicable earnings and allowances before deductions."],
              ["Deductions", "Amounts legally or contractually deducted from earnings."],
              ["Take-home pay", "Gross pay less applicable deductions."]
            ]
          },
          {
            kind: "callout",
            tone: "example",
            title: "Illustrative calculation structure",
            text: "If an employee's basic pay is ₹B and applicable allowances together are ₹A, a simplified gross-pay structure is Gross Pay = B + A. If total permitted deductions are ₹D, then Take-home Pay = Gross Pay − D. Actual payroll may contain many additional components."
          }
        ]
      },
      {
        id: "incentive-schemes-time-and-piece-rate",
        title: "3. Incentive Schemes and Methods of Payment",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "paragraph",
            text: "Incentive schemes provide additional earnings or recognition linked to specified performance, output, productivity or other criteria. The syllabus specifically includes time-rate and piece-rate methods of payment. Under a time-rate system, pay is primarily related to time worked; under a piece-rate system, earnings are linked to units of output according to the applicable rate."
          },
          {
            kind: "table",
            headers: ["Method", "Basic basis", "Potential emphasis"],
            rows: [
              ["Time rate", "Pay linked primarily to time worked", "Time, attendance and job requirements"],
              ["Piece rate", "Pay linked to units of output", "Output and productivity"],
              ["Incentive scheme", "Additional reward linked to defined performance conditions", "Productivity, quality, targets or other measures"],
              ["Group incentive", "Reward linked to team or group performance", "Team cooperation and collective output"]
            ]
          },
          {
            kind: "diagram",
            diagramId: "incentive-payment-methods",
            caption: "Conceptual comparison of time-based pay, output-based pay and broader incentive arrangements."
          },
          {
            kind: "callout",
            tone: "info",
            title: "Design caution",
            text: "An incentive should not encourage employees to increase quantity by compromising required quality, safety or compliance. The chosen performance measure should therefore match the behaviour the organization actually wants."
          }
        ]
      },
      {
        id: "fringe-benefits-and-other-allowances",
        title: "4. Fringe Benefits and Other Allowances",
        icon: "Award",
        blocks: [
          {
            kind: "paragraph",
            text: "Fringe benefits are additional benefits provided to employees beyond core wages or salary. The exact package varies by employer and employment arrangement. The syllabus also includes overtime, city compensatory allowance and travelling allowance as examples of additional compensation-related elements."
          },
          {
            kind: "table",
            headers: ["Element", "Purpose / study focus"],
            rows: [
              ["Fringe benefits", "Additional employee benefits beyond core pay."],
              ["Overtime", "Compensation associated with eligible work beyond prescribed or applicable working hours, subject to the governing rules."],
              ["City compensatory allowance", "Allowance associated with specified city or location-related employment conditions where provided."],
              ["Travelling allowance", "Payment or reimbursement associated with eligible official travel under applicable policy."],
              ["Other allowances", "Payments linked to specific job, location, expense or employment conditions."]
            ]
          },
          {
            kind: "callout",
            tone: "example",
            title: "Compensation-package view",
            text: "An employee's reward package can contain fixed pay, allowances, variable incentives and benefits. HR should distinguish between earnings, reimbursements, benefits and statutory deductions when explaining the package."
          }
        ]
      },
      {
        id: "wage-legislation-and-equal-remuneration",
        title: "5. Wage Legislation and Equal Remuneration",
        icon: "Scale",
        blocks: [
          {
            kind: "paragraph",
            text: "The supplied syllabus lists 'Wage and Equal Remuneration Act 1948' and 'Equal Remuneration Act-1976' under Unit 5. The wording is reproduced as supplied. Because the source syllabus does not provide further statutory detail, students should verify the exact prescribed Act title and amendment material against their faculty's official reading list before memorizing section numbers or historical provisions."
          },
          {
            kind: "table",
            headers: ["Syllabus wording", "Study direction"],
            rows: [
              ["Wage and Equal Remuneration Act 1948", "Use the exact title prescribed by the course material and study the relevant wage-protection concepts assigned by the faculty."],
              ["Equal Remuneration Act, 1976", "Study the statutory principle of equal remuneration and its application to covered employment."],
              ["HR implication", "Compensation decisions should be based on legitimate job and employment criteria and comply with applicable law."]
            ]
          },
          {
            kind: "callout",
            tone: "info",
            title: "Source-accuracy note",
            text: "The syllabus image contains this law topic in the wording shown above. These notes do not silently replace it with a different statute. Use the university's prescribed legal text for the exact statutory history and section-wise provisions."
          }
        ]
      },
      {
        id: "profit-sharing-options",
        title: "6. Profit-Sharing Options",
        icon: "Percent",
        blocks: [
          {
            kind: "paragraph",
            text: "Profit sharing is a variable-reward approach under which employees receive a defined share or distribution linked to organizational profit according to the applicable scheme. The design may specify eligibility, the profit measure, the sharing formula, timing and treatment of different employee groups."
          },
          {
            kind: "table",
            headers: ["Design element", "Question to define"],
            rows: [
              ["Eligibility", "Which employees participate?"],
              ["Profit measure", "Which definition of profit is used?"],
              ["Sharing formula", "How is the distributable amount determined?"],
              ["Allocation", "How is the amount distributed among participants?"],
              ["Timing", "When is the reward calculated and paid?"],
              ["Governance", "What rules and records support the calculation?"]
            ]
          },
          {
            kind: "diagram",
            diagramId: "profit-sharing-framework",
            caption: "High-level framework for designing a profit-sharing arrangement."
          },
          {
            kind: "callout",
            tone: "case",
            title: "Case-study approach",
            text: "For a profit-sharing case, first identify the eligible employee group, then define the profit measure and sharing rule, determine the distributable pool under the scheme, and finally explain how the amount would be allocated and communicated."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Compensation", definition: "The monetary and non-monetary returns associated with employment." },
      { term: "Basic pay", definition: "The core fixed component of an employee's salary structure." },
      { term: "DA", definition: "Dearness Allowance, where applicable under the relevant pay structure." },
      { term: "HRA", definition: "House Rent Allowance provided according to applicable compensation rules and conditions." },
      { term: "Gross pay", definition: "Total applicable earnings before deductions." },
      { term: "Take-home pay", definition: "Amount received after applicable deductions from earnings." },
      { term: "Time rate", definition: "Payment method primarily linked to time worked." },
      { term: "Piece rate", definition: "Payment method linked to units of output according to the applicable rate." },
      { term: "Fringe benefit", definition: "An additional employee benefit provided beyond core wages or salary." },
      { term: "Profit sharing", definition: "A variable-reward arrangement in which employees receive a defined share linked to organizational profit under the scheme." }
    ],
    examQuestions: [
      "Define compensation and explain the major methods of pay and allowances. (Long)",
      "Explain the components of a pay structure including basic pay, DA, HRA, gross pay and take-home pay. (Long)",
      "Distinguish between gross pay and take-home pay. (Short)",
      "Explain incentive schemes and compare time-rate and piece-rate methods of payment. (Long)",
      "Discuss the advantages and limitations of incentive-based compensation. (Long)",
      "Explain fringe benefits and discuss overtime, city compensatory allowance and travelling allowance. (Long)",
      "Discuss the significance of wage legislation and equal remuneration in compensation management. (Long)",
      "Explain the principle of equal remuneration and its relevance to HR compensation practices. (Medium)",
      "Explain the concept and major design elements of profit sharing. (Long)",
      "Develop a compensation-package case analysis covering pay, allowances, incentives and benefits. (Long)"
    ]
  }
];
