import { UnitNote } from "@/types";

// Detailed, syllabus-aligned notes for HR Analytics (BMB HR 04)
// Dr. B. R. Ambedkar University, Agra (DBRAU), MBA IV Semester.
export const MbaHrAnalyticsUnitNotes: UnitNote[] = [
  {
    "unitNumber": 1,
    "title": "Introduction to HR Analytics",
    "hours": 8,
    "headings": [
      {
        "id": "evolution-hr-analytics",
        "title": "1. Evolution of HR Analytics",
        "icon": "History",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "HR Analytics is the systematic use of HR-related data, metrics, analytical methods and business information to understand workforce patterns and support better human-resource and business decisions. Its development reflects a movement from recording personnel information toward interpreting evidence and using it to answer business questions."
          },
          {
            "kind": "paragraph",
            "text": "An early stage of HR information management focused mainly on maintaining employee records, attendance, payroll, leave and basic administrative reports. As HR information systems became more capable, organizations could combine larger volumes of workforce information and produce standardized HR metrics. The next stage added analytical methods to identify patterns, relationships and possible drivers of outcomes such as turnover, hiring effectiveness, absence, performance and training results."
          },
          {
            "kind": "table",
            "headers": [
              "Stage",
              "Main orientation",
              "Typical output"
            ],
            "rows": [
              [
                "Personnel administration",
                "Record keeping and compliance",
                "Employee records, payroll and attendance reports"
              ],
              [
                "HR reporting",
                "Standardized measurement",
                "Headcount, turnover, absence and staffing reports"
              ],
              [
                "HR analytics",
                "Analysis and interpretation",
                "Patterns, relationships, drivers and comparisons"
              ],
              [
                "Predictive / decision support",
                "Forward-looking analysis",
                "Forecasts, risk indicators, scenarios and decision support"
              ],
              [
                "Strategic workforce analytics",
                "Business integration",
                "Evidence connecting workforce choices with business outcomes"
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-hr-analytics-hr-analytics-evolution",
            "caption": "Evolution of HR analytics from administrative HR records to analytical and strategic workforce decision support."
          }
        ]
      },
      {
        "id": "hris-data-sources",
        "title": "2. HR Information Systems and Data Sources",
        "icon": "Database",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "An HR Information System (HRIS) is a system used to collect, store, process, retrieve and report information related to employees and HR activities. HRIS supports administrative transactions as well as the availability of data for analysis. HR systems may be integrated with payroll, recruitment, learning, performance, attendance, compensation and other organizational systems."
          },
          {
            "kind": "paragraph",
            "text": "HR analytics depends on the quality and structure of the underlying data. Data sources can be internal, such as employee master records and performance systems, or external, such as labour-market information and industry benchmarks. Analysts must understand the source, definition, time period, population, ownership and quality of each data element before using it."
          },
          {
            "kind": "table",
            "headers": [
              "Data source",
              "Examples of information"
            ],
            "rows": [
              [
                "Core HR / employee master",
                "Employee ID, job, department, location, grade, tenure and employment status"
              ],
              [
                "Recruitment system",
                "Applications, source, stage, interview, offer and joining information"
              ],
              [
                "Payroll / compensation",
                "Pay components, incentives, benefits and payroll-related measures"
              ],
              [
                "Attendance / time",
                "Attendance, absence, leave, overtime and work-time information"
              ],
              [
                "Performance system",
                "Goals, ratings, feedback and performance outcomes"
              ],
              [
                "Learning system",
                "Training participation, completion, scores and learning records"
              ],
              [
                "External sources",
                "Labour-market conditions, salary benchmarks, industry or demographic data"
              ]
            ]
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Data-quality principle",
            "text": "A sophisticated analytical method cannot compensate for incorrect, incomplete, duplicated, inconsistent or poorly defined HR data. Data definitions and quality controls are therefore part of HR analytics, not an afterthought."
          }
        ]
      },
      {
        "id": "hr-metrics-vs-analytics",
        "title": "3. HR Metrics and HR Analytics",
        "icon": "LineChart",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "An HR metric is a defined quantitative measure used to monitor an HR activity, condition or outcome. HR analytics goes beyond measurement by asking why a result occurred, what factors are associated with it, what may happen next and what action could improve the outcome."
          },
          {
            "kind": "table",
            "headers": [
              "Aspect",
              "HR Metrics",
              "HR Analytics"
            ],
            "rows": [
              [
                "Purpose",
                "Measure and monitor",
                "Explain, predict or support decisions"
              ],
              [
                "Typical question",
                "How much? How often? How many?",
                "Why? What is associated? What may happen? What should we examine?"
              ],
              [
                "Example",
                "Turnover rate",
                "Which factors are associated with voluntary turnover?"
              ],
              [
                "Output",
                "KPI, ratio, trend or count",
                "Analysis, insight, forecast or decision support"
              ],
              [
                "Data need",
                "Defined and consistent measure",
                "Usually combines multiple variables and contextual data"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "A metric becomes more useful when its definition, numerator, denominator, population and time period are explicit. For example, turnover should distinguish the population being measured and the period covered rather than being treated as an unexplained percentage."
          }
        ]
      },
      {
        "id": "intuition-vs-analytics",
        "title": "4. Intuition versus Analytical Thinking",
        "icon": "Brain",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Intuition is a judgment formed from experience, pattern recognition and professional understanding. Analytical thinking uses explicit evidence, structured reasoning, data and assumptions. In HR decisions, professional judgment remains important, but analytical thinking helps test whether an intuitive conclusion is supported by evidence."
          },
          {
            "kind": "table",
            "headers": [
              "Dimension",
              "Intuitive decision",
              "Analytical decision"
            ],
            "rows": [
              [
                "Basis",
                "Experience and judgment",
                "Data, evidence and structured reasoning"
              ],
              [
                "Strength",
                "Fast and useful when information is limited",
                "More transparent and testable"
              ],
              [
                "Risk",
                "Bias, selective memory and overconfidence",
                "Poor data, wrong model or inappropriate interpretation"
              ],
              [
                "Best use",
                "Initial hypothesis and contextual judgment",
                "Testing hypotheses and informing decisions"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "The two approaches need not be treated as opposites. A practical analytics process can use managerial experience to frame a question, then use data to test assumptions and return the findings to management for contextual interpretation."
          }
        ]
      },
      {
        "id": "analytics-frameworks",
        "title": "5. LAMP, HR Scorecard and Workforce Scorecard",
        "icon": "Target",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The LAMP framework is a way of thinking about workforce analytics through four connected elements: Logic, Analytics, Measures and Process. The purpose is to prevent organizations from treating analytics as a purely technical exercise. Logic clarifies the business relationship or causal reasoning; analytics provides methods for examining evidence; measures define what is being tracked; and process connects the analysis to organizational decision making."
          },
          {
            "kind": "paragraph",
            "text": "The HR Scorecard links HR measures with strategic objectives. Instead of presenting a large collection of disconnected HR numbers, it emphasizes measures that show how HR activities contribute to strategic outcomes. The Workforce Scorecard extends this perspective toward workforce capabilities, behaviours and organizational outcomes."
          },
          {
            "kind": "table",
            "headers": [
              "Framework",
              "Core emphasis"
            ],
            "rows": [
              [
                "LAMP",
                "Logic, Analytics, Measures and Process as connected requirements for useful workforce analytics"
              ],
              [
                "HR Scorecard",
                "Alignment of HR measures with strategic objectives and organizational performance"
              ],
              [
                "Workforce Scorecard",
                "Linking workforce competencies, behaviours and people outcomes with business strategy"
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-hr-analytics-hr-data-planning",
            "caption": "HR analytics data-planning framework connecting HR data sources, measures, analysis and business decisions."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "HR Analytics",
        "definition": "Systematic use of HR data, metrics and analytical methods to generate evidence for workforce and business decisions."
      },
      {
        "term": "HRIS",
        "definition": "Human Resource Information System used to collect, store, process and retrieve HR-related information."
      },
      {
        "term": "HR Metric",
        "definition": "A defined quantitative measure of an HR activity, condition or outcome."
      },
      {
        "term": "HR Scorecard",
        "definition": "A strategic measurement approach linking HR measures with organizational objectives."
      },
      {
        "term": "Workforce Scorecard",
        "definition": "A framework emphasizing workforce capabilities, behaviours and their relationship with strategic outcomes."
      },
      {
        "term": "LAMP",
        "definition": "A workforce-analytics framework organized around Logic, Analytics, Measures and Process."
      },
      {
        "term": "Data Source",
        "definition": "A system or external source from which HR information is obtained for reporting or analysis."
      }
    ],
    "examQuestions": [
      "Define HR Analytics and explain its evolution from traditional HR reporting. (Long)",
      "Explain HR Information Systems and the major sources of HR data. (Long)",
      "Differentiate HR Metrics and HR Analytics with suitable examples. (Long)",
      "Explain intuition versus analytical thinking in HR decision making. (Medium)",
      "Explain the LAMP framework and its importance in HR analytics. (Long)",
      "Explain the HR Scorecard and Workforce Scorecard. (Long)",
      "Why is HR data quality important for analytics? (Medium)"
    ]
  },
  {
    "unitNumber": 2,
    "title": "Human Resource Planning and Forecasting; Recruitment and Selection Analytics",
    "hours": 8,
    "headings": [
      {
        "id": "quantitative-qualitative-hr-planning",
        "title": "1. Quantitative and Qualitative Dimensions of HR Planning",
        "icon": "Users",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Human Resource Planning (HRP) is the systematic process of assessing current and future workforce requirements and determining how the organization can obtain, develop, deploy and retain the people needed for its objectives. The quantitative dimension focuses on numbers such as headcount, vacancies, skills supply and projected demand. The qualitative dimension focuses on the capabilities, competencies, experience and roles required."
          },
          {
            "kind": "table",
            "headers": [
              "Dimension",
              "Key questions"
            ],
            "rows": [
              [
                "Quantitative",
                "How many employees are needed? Where and when are they needed? What is the expected workforce gap?"
              ],
              [
                "Qualitative",
                "Which skills, competencies, experience and roles are required? What capabilities are missing?"
              ],
              [
                "Supply",
                "What workforce is currently available and how may it change?"
              ],
              [
                "Demand",
                "What workforce will be required under expected business conditions?"
              ],
              [
                "Gap",
                "What shortages or surpluses exist between expected demand and supply?"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Effective HR planning connects workforce numbers with business strategy. A headcount plan without consideration of skills can produce a numerical match but still leave a capability gap."
          }
        ]
      },
      {
        "id": "demand-forecasting-methods",
        "title": "2. Methods and Techniques of HR Demand Forecasting",
        "icon": "TrendingUp",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "HR demand forecasting estimates the number and type of employees likely to be required in the future. The method selected depends on data availability, business stability, planning horizon and the nature of the workforce."
          },
          {
            "kind": "table",
            "headers": [
              "Method",
              "Description",
              "Typical use"
            ],
            "rows": [
              [
                "Managerial judgment",
                "Managers estimate future workforce needs using operational knowledge.",
                "Small or changing environments; expert input"
              ],
              [
                "Trend analysis",
                "Historical staffing trends are examined to identify patterns.",
                "Relatively stable workforce relationships"
              ],
              [
                "Ratio analysis",
                "A staffing requirement is linked to a business driver such as sales, output or customers.",
                "Organizations with measurable staffing ratios"
              ],
              [
                "Regression analysis",
                "Statistical relationship between workforce requirements and one or more business variables is estimated.",
                "Data-rich forecasting situations"
              ],
              [
                "Scenario analysis",
                "Workforce requirements are estimated under alternative business scenarios.",
                "High uncertainty or strategic planning"
              ],
              [
                "Workload analysis",
                "Required staff is derived from workload volume and expected productivity or time per task.",
                "Operations with measurable workload"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Forecasting should make assumptions explicit. A historical relationship may not remain valid if technology, productivity, business model, regulation or organizational structure changes."
          }
        ]
      },
      {
        "id": "manpower-forecasting-data",
        "title": "3. Data Base for Manpower Forecasting",
        "icon": "Database",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A manpower forecasting database contains the workforce and business information needed to estimate future staffing requirements and supply. The data should be defined consistently across time so that trends and relationships can be interpreted correctly."
          },
          {
            "kind": "bullets",
            "items": [
              "Current headcount by function, role, location and employment status.",
              "Historical hiring, separation, turnover, absence and movement information.",
              "Employee tenure, skills, qualifications and competency information.",
              "Workload, output, sales, production, customer or service-volume indicators.",
              "Expected business growth, contraction, technology changes and strategic initiatives.",
              "Retirement, attrition and internal-mobility assumptions where relevant.",
              "External labour-market information when internal data alone is insufficient."
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-hr-analytics-hr-data-planning",
            "caption": "HR planning data flow connecting workforce records, business drivers, demand forecasting and workforce decisions."
          }
        ]
      },
      {
        "id": "recruitment-selection-analytics",
        "title": "4. Recruitment and Selection Analytics",
        "icon": "UserCheck",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Recruitment analytics evaluates the efficiency and effectiveness of attracting and moving candidates through the hiring process. Selection analytics examines whether selection methods identify candidates who are likely to perform effectively after hiring. Useful measures can include time-to-fill, source effectiveness, selection ratios, offer acceptance, quality of hire and early turnover, provided the measures are clearly defined."
          },
          {
            "kind": "table",
            "headers": [
              "Analytics area",
              "Example question"
            ],
            "rows": [
              [
                "Source effectiveness",
                "Which recruitment sources produce suitable candidates or hires?"
              ],
              [
                "Process efficiency",
                "Where do candidates wait or drop out in the recruitment process?"
              ],
              [
                "Selection effectiveness",
                "Which selection methods are associated with later job performance?"
              ],
              [
                "Quality of hire",
                "How can post-hire performance, retention or other defined outcomes be assessed?"
              ],
              [
                "Candidate experience",
                "Where are candidates encountering delays or process problems?"
              ]
            ]
          }
        ]
      },
      {
        "id": "reliability-validity-selection",
        "title": "5. Reliability, Validity, Selection Bias and Predictive Outcomes",
        "icon": "CheckCircle",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Reliability refers to the consistency of a measurement or selection procedure. Validity concerns whether the procedure measures or predicts what it is intended to measure or predict. A selection method can be reliable without being sufficiently valid for the employment decision, so both concepts matter."
          },
          {
            "kind": "paragraph",
            "text": "Selection bias can occur when the design or implementation of a selection process systematically advantages or disadvantages particular groups or when data used for a model reflect historical bias. Analytics should therefore examine the quality and fairness of inputs, criteria, procedures and outcomes."
          },
          {
            "kind": "paragraph",
            "text": "Predictive selection analysis examines whether information available during selection is associated with later performance, retention or other defined job outcomes. The outcome must be clearly defined and the analytical relationship interpreted carefully; association alone does not establish causation."
          },
          {
            "kind": "table",
            "headers": [
              "Concept",
              "Meaning"
            ],
            "rows": [
              [
                "Reliability",
                "Consistency of a measurement or assessment procedure."
              ],
              [
                "Validity",
                "Evidence that a method appropriately measures or predicts the intended criterion."
              ],
              [
                "Selection bias",
                "Systematic distortion in selection data, criteria or outcomes that can disadvantage or misrepresent candidates."
              ],
              [
                "Predictive performance",
                "Use of selection information to estimate later job performance or another defined outcome."
              ],
              [
                "Predictive turnover",
                "Use of relevant information to estimate the likelihood of a defined future turnover outcome."
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-hr-analytics-recruitment-analytics",
            "caption": "Recruitment and selection analytics from sourcing and assessment through hiring and post-hire outcome measurement."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Human Resource Planning",
        "definition": "Systematic assessment of current and future workforce requirements and actions needed to meet them."
      },
      {
        "term": "Demand Forecasting",
        "definition": "Estimation of future workforce requirements in terms of number and, where relevant, capabilities."
      },
      {
        "term": "Manpower Forecasting",
        "definition": "Forecasting workforce requirements and supply using workforce and business data."
      },
      {
        "term": "Recruitment Analytics",
        "definition": "Analysis of recruitment sources, process efficiency, candidate flow and hiring outcomes."
      },
      {
        "term": "Reliability",
        "definition": "Consistency of a measurement or selection procedure."
      },
      {
        "term": "Validity",
        "definition": "Evidence that a selection method appropriately measures or predicts the intended criterion."
      },
      {
        "term": "Selection Bias",
        "definition": "Systematic distortion in selection procedures or data that can affect fairness or accuracy."
      }
    ],
    "examQuestions": [
      "Explain the quantitative and qualitative dimensions of Human Resource Planning. (Long)",
      "Discuss major methods and techniques of HR demand forecasting. (Long)",
      "Explain the data required for manpower forecasting. (Long)",
      "What is recruitment analytics? Explain its major applications. (Medium)",
      "Differentiate reliability and validity in selection analytics. (Long)",
      "Explain selection bias and its implications for HR analytics. (Long)",
      "How can analytics be used to predict performance and turnover? (Long)"
    ]
  },
  {
    "unitNumber": 3,
    "title": "Performance Analysis and Designing a Compensation System",
    "hours": 8,
    "headings": [
      {
        "id": "predicting-performance",
        "title": "1. Predicting Employee Performance",
        "icon": "LineChart",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Performance analytics uses defined employee, job and organizational information to understand performance patterns and support decisions. Predicting performance requires a clear definition of the performance criterion, appropriate predictors, reliable data and careful validation."
          },
          {
            "kind": "paragraph",
            "text": "Potential predictors may include job-relevant skills, prior experience, structured assessment results, training history, role characteristics and other legitimately available information. The analytical model should be evaluated for predictive usefulness and should not be treated as proof that a variable causes performance."
          },
          {
            "kind": "table",
            "headers": [
              "Step",
              "Analytical activity"
            ],
            "rows": [
              [
                "Define outcome",
                "Specify what 'performance' means and how it will be measured."
              ],
              [
                "Prepare data",
                "Check definitions, missing values, timing and quality."
              ],
              [
                "Select predictors",
                "Identify relevant variables based on job and organizational context."
              ],
              [
                "Model / analyze",
                "Use an appropriate analytical method and test assumptions."
              ],
              [
                "Validate",
                "Evaluate predictive performance on appropriate data."
              ],
              [
                "Interpret and act",
                "Use findings with managerial context and appropriate safeguards."
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-hr-analytics-performance-compensation-analytics",
            "caption": "Performance and compensation analytics framework connecting employee data, performance analysis and compensation decisions."
          }
        ]
      },
      {
        "id": "training-requirements",
        "title": "2. Training Requirements and Training Needs Analysis",
        "icon": "BookOpen",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Training needs analysis identifies the gap between the capabilities required for a job or organizational objective and the capabilities currently available. It can be conducted at organizational, task/job and individual levels."
          },
          {
            "kind": "table",
            "headers": [
              "Level",
              "Question"
            ],
            "rows": [
              [
                "Organizational",
                "What capabilities are required to achieve organizational objectives?"
              ],
              [
                "Task / job",
                "What knowledge, skills and behaviours are required to perform the job effectively?"
              ],
              [
                "Individual",
                "Which employees have specific capability gaps that training can address?"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Analytics can support training needs analysis by combining performance results, skill assessments, quality measures, productivity indicators, manager observations and employee learning data. Training should not be used as the automatic solution to every performance problem; process, resource, role or incentive issues may require other interventions."
          }
        ]
      },
      {
        "id": "training-effectiveness",
        "title": "3. Evaluating Training and Development",
        "icon": "CheckCircle",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Training evaluation examines whether learning activities produced the intended learning, behaviour and organizational outcomes. Evaluation should connect to the objectives established during needs analysis."
          },
          {
            "kind": "table",
            "headers": [
              "Evaluation level",
              "Illustrative question"
            ],
            "rows": [
              [
                "Reaction",
                "How did participants perceive the training and its relevance?"
              ],
              [
                "Learning",
                "Did knowledge or skill improve?"
              ],
              [
                "Behaviour / transfer",
                "Did employees apply the learning in their work?"
              ],
              [
                "Results",
                "Did the training contribute to relevant operational or business outcomes?"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Analytics can compare pre- and post-training measures, participation, completion, assessment scores, application indicators and defined performance outcomes. Strong evaluation requires careful attention to alternative explanations because performance may change for reasons unrelated to training."
          }
        ]
      },
      {
        "id": "selection-promotion-analytics",
        "title": "4. Optimizing Selection and Promotion Decisions",
        "icon": "Target",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Selection and promotion analytics supports evidence-based decisions about who should be hired, advanced or assigned to particular roles. The goal is not to replace managerial judgment but to improve consistency, transparency and evidence quality."
          },
          {
            "kind": "bullets",
            "items": [
              "Define job-relevant success criteria before evaluating candidates.",
              "Use consistent assessment criteria for comparable decisions.",
              "Review whether predictors are related to later outcomes.",
              "Monitor adverse patterns and potential sources of bias.",
              "Separate evidence from assumptions about an individual's potential.",
              "Document decision rules and maintain appropriate governance over sensitive employee data."
            ]
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Decision principle",
            "text": "An analytical recommendation should be interpreted within the job context and organizational process. A model can support a decision, but data quality, validity, fairness and human review remain important."
          }
        ]
      },
      {
        "id": "training-needs-effectiveness",
        "title": "5. Classifying Training Needs and Predicting Training Effectiveness and Performance",
        "icon": "Layers",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Classifying training needs means grouping capability gaps into meaningful categories so that the organization can prioritize learning interventions. Categories may relate to technical skills, behavioural capabilities, compliance, leadership, role transition or future capabilities, depending on the organization's context."
          },
          {
            "kind": "paragraph",
            "text": "Predicting training effectiveness involves estimating which participants, learning designs or conditions are associated with better learning or transfer outcomes. Prediction should be based on clearly defined outcomes and relevant variables rather than assumptions about employees."
          },
          {
            "kind": "table",
            "headers": [
              "Analytics question",
              "Possible evidence"
            ],
            "rows": [
              [
                "Who needs training?",
                "Skill assessments, performance gaps, role requirements and manager evidence."
              ],
              [
                "What training is needed?",
                "Competency gaps, task requirements and observed performance issues."
              ],
              [
                "Who is likely to benefit?",
                "Baseline capability, readiness, learning history and relevant contextual factors."
              ],
              [
                "Did training work?",
                "Learning results, transfer indicators and defined performance outcomes."
              ],
              [
                "What should improve next?",
                "Evaluation findings, participant feedback and outcome trends."
              ]
            ]
          }
        ]
      },
      {
        "id": "compensation-analytics",
        "title": "1. Understanding Compensation Analytics",
        "icon": "IndianRupee",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Compensation analytics is the use of quantitative and qualitative evidence to understand pay structures, compensation levels, pay distribution, incentives, benefits and their relationship with workforce and business outcomes. It helps management examine whether compensation is internally coherent, externally competitive, financially sustainable and aligned with organizational objectives."
          },
          {
            "kind": "paragraph",
            "text": "Compensation analysis should begin with clearly defined populations, pay components, time periods and comparison groups. Different measures can answer different questions; for example, average pay may describe a group, while median pay can reduce the influence of extreme values."
          },
          {
            "kind": "table",
            "headers": [
              "Analytics question",
              "Possible measure / evidence"
            ],
            "rows": [
              [
                "How much is being paid?",
                "Base pay, total cash, total rewards and distribution measures."
              ],
              [
                "How is pay distributed?",
                "Median, quartiles, ranges and pay-band analysis."
              ],
              [
                "Is pay internally aligned?",
                "Relationship between role value, grade, experience, performance and pay."
              ],
              [
                "Is pay externally competitive?",
                "Relevant market or benchmark comparisons."
              ],
              [
                "What are incentive outcomes?",
                "Eligibility, payout, performance relationship and cost."
              ],
              [
                "Are there pay differences requiring investigation?",
                "Comparable-group analysis using relevant job and employee characteristics."
              ]
            ]
          }
        ]
      },
      {
        "id": "quantifiable-compensation-data",
        "title": "2. Quantifiable Data for Compensation Analysis",
        "icon": "Table",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Quantifiable compensation data can include base salary, variable pay, incentives, allowances, benefits, grade, job level, tenure, performance measures and relevant job characteristics. Data must be normalized and interpreted carefully because employees can differ in role, location, experience, hours, employment status and compensation structure."
          },
          {
            "kind": "bullets",
            "items": [
              "Define each pay component and whether it is fixed, variable, recurring or one-time.",
              "Use a consistent time basis when comparing compensation.",
              "Separate legitimate job-related differences from unexplained differences.",
              "Maintain appropriate confidentiality and access controls for sensitive compensation data.",
              "Document the population and comparison method used in every analysis."
            ]
          }
        ]
      },
      {
        "id": "compensation-benefits-factors",
        "title": "3. Factors Affecting Compensation and Benefits",
        "icon": "Scale",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Compensation and benefits are influenced by internal and external factors. Internal factors include job value, skill requirements, performance, organizational policy and ability to pay. External factors include labour-market conditions, prevailing pay practices, industry conditions, location and applicable legal or regulatory requirements."
          },
          {
            "kind": "table",
            "headers": [
              "Factor",
              "Potential influence"
            ],
            "rows": [
              [
                "Job value / responsibility",
                "Higher responsibility or scarce expertise can support different pay structures."
              ],
              [
                "Skills and experience",
                "Relevant capability and experience may affect pay within a defined structure."
              ],
              [
                "Performance",
                "Performance-linked pay may connect rewards to defined outcomes."
              ],
              [
                "Labour market",
                "Scarcity or abundance of relevant talent can affect external pay pressure."
              ],
              [
                "Industry / location",
                "Market pay can vary across industries and locations."
              ],
              [
                "Organizational affordability",
                "Compensation must remain financially sustainable."
              ],
              [
                "Benefits design",
                "Benefits influence total rewards and employee value proposition."
              ]
            ]
          }
        ]
      },
      {
        "id": "compensation-planning-analytics",
        "title": "4. Analytics for Compensation Planning",
        "icon": "Target",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Compensation planning uses analytics to support decisions about salary structures, pay ranges, increments, incentives, workforce budgets and benefits. The analysis should connect compensation decisions with business strategy and workforce objectives."
          },
          {
            "kind": "bullets",
            "items": [
              "Estimate the financial impact of proposed pay changes.",
              "Analyze distribution within grades or bands.",
              "Compare relevant internal and external benchmarks.",
              "Identify compression or unusual pay patterns requiring review.",
              "Model different compensation-budget scenarios.",
              "Examine relationships between rewards, retention, performance and workforce outcomes where appropriate."
            ]
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "Example",
            "text": "If a firm plans a salary revision, compensation analytics can estimate the budget impact, compare current pay with defined market references, identify employees near or outside relevant ranges and model alternative revision scenarios."
          }
        ]
      },
      {
        "id": "competency-scorecard",
        "title": "5. Competency Scorecard",
        "icon": "LayoutTemplate",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A competency scorecard organizes information about the competencies required for roles and the extent to which employees demonstrate those competencies. It can connect role requirements, assessment results, development priorities and workforce planning."
          },
          {
            "kind": "table",
            "headers": [
              "Scorecard element",
              "Purpose"
            ],
            "rows": [
              [
                "Competency definition",
                "Clarify the knowledge, skill or behaviour expected."
              ],
              [
                "Role relevance",
                "Identify where the competency is required and at what level."
              ],
              [
                "Current assessment",
                "Record evidence of the employee's current capability."
              ],
              [
                "Gap",
                "Compare current capability with required level."
              ],
              [
                "Development action",
                "Specify learning, experience or other development response."
              ],
              [
                "Review measure",
                "Track progress and reassess capability."
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "A competency scorecard can complement compensation and performance systems, but competency scores should not automatically determine pay unless the organization's compensation design explicitly links them to reward decisions."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Performance Analytics",
        "definition": "Use of workforce and performance data to understand, evaluate or predict employee performance."
      },
      {
        "term": "Training Needs Analysis",
        "definition": "Systematic identification of capability gaps at organizational, job and individual levels."
      },
      {
        "term": "Training Effectiveness",
        "definition": "Extent to which a learning intervention achieves its intended learning, transfer or results objectives."
      },
      {
        "term": "Selection Analytics",
        "definition": "Use of data and analysis to improve hiring and candidate-assessment decisions."
      },
      {
        "term": "Promotion Analytics",
        "definition": "Evidence-based analysis supporting decisions about advancement and internal movement."
      },
      {
        "term": "Predictive Performance",
        "definition": "Estimation of a defined future performance outcome using relevant information."
      },
      {
        "term": "Compensation Analytics",
        "definition": "Use of data and analysis to understand and improve compensation structures, distribution, incentives and related decisions."
      },
      {
        "term": "Total Rewards",
        "definition": "Combined value of pay, incentives, benefits and other rewards provided to employees."
      },
      {
        "term": "Pay Range",
        "definition": "Defined range of compensation associated with a role, grade or job structure."
      },
      {
        "term": "Pay Compression",
        "definition": "A situation in which pay differences between employees or levels become unusually narrow relative to relevant factors."
      },
      {
        "term": "Compensation Planning",
        "definition": "Planning future compensation budgets, structures, increases, incentives and related workforce costs."
      },
      {
        "term": "Competency Scorecard",
        "definition": "Structured framework for comparing required competencies, current capability, gaps and development actions."
      }
    ],
    "examQuestions": [
      "Explain the process of predicting employee performance using HR analytics. (Long)",
      "Discuss training needs analysis at organizational, task and individual levels. (Long)",
      "Explain methods for evaluating training and development. (Long)",
      "How can analytics improve selection and promotion decisions? (Long)",
      "Explain how training needs can be classified using workforce data. (Medium)",
      "Discuss prediction of training effectiveness and performance. (Long)",
      "Explain the concept and uses of compensation analytics. (Long)",
      "Discuss quantifiable data used in compensation analysis. (Medium)",
      "Explain factors affecting compensation and benefits. (Long)",
      "Discuss the role of analytics in compensation planning. (Long)",
      "What is a competency scorecard? Explain its components and uses. (Long)",
      "How can compensation analytics support evidence-based reward decisions? (Medium)"
    ]
  },
  {
    "unitNumber": 4,
    "title": "Monitoring Impact of Interventions",
    "hours": 4,
    "headings": [
      {
        "id": "tracking-interventions",
        "title": "1. Tracking the Impact of HR Interventions",
        "icon": "LineChart",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "An HR intervention is an intentional action designed to influence a workforce, HR process or organizational outcome. Monitoring its impact means defining the expected outcome, selecting relevant indicators, collecting data before and after implementation and assessing whether observed changes are consistent with the intervention objective."
          },
          {
            "kind": "table",
            "headers": [
              "Monitoring stage",
              "Activity"
            ],
            "rows": [
              [
                "Baseline",
                "Record the relevant condition before intervention."
              ],
              [
                "Implementation tracking",
                "Confirm whether the intervention was delivered as intended."
              ],
              [
                "Outcome measurement",
                "Measure the defined result after implementation."
              ],
              [
                "Comparison",
                "Compare with baseline, target or an appropriate comparison group where possible."
              ],
              [
                "Interpretation",
                "Consider alternative explanations and implementation differences."
              ],
              [
                "Learning",
                "Use findings to modify, continue or discontinue the intervention."
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-hr-analytics-performance-compensation-analytics",
            "caption": "HR analytics framework illustrating measurement of workforce interventions and outcomes."
          }
        ]
      },
      {
        "id": "stress-value-change",
        "title": "2. Evaluating Stress Levels and Value-Change",
        "icon": "HeartHandshake",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The syllabus connects intervention monitoring with evaluation of stress levels and value-change. Stress-related evaluation can combine employee surveys, absence patterns, workload indicators, turnover, employee feedback and other relevant evidence. Value-change can be examined by measuring changes in defined employee attitudes, behaviours or organizational values before and after an intervention."
          },
          {
            "kind": "paragraph",
            "text": "Measurement should use consistent definitions and time periods. A change in a survey score is not automatically proof that an intervention caused the change; other organizational events may also influence employee perceptions."
          }
        ]
      },
      {
        "id": "evidence-based-practices",
        "title": "3. Formulating Evidence-Based Practices and Responsible Intervention",
        "icon": "ShieldCheck",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Evidence-based HR practice means making workforce decisions using the best available evidence, organizational data, professional expertise and relevant contextual information. Responsible implementation requires attention to privacy, fairness, transparency, data quality and the potential consequences of interventions."
          },
          {
            "kind": "bullets",
            "items": [
              "Define the problem and intended outcome clearly.",
              "Use relevant and credible evidence rather than isolated metrics.",
              "Check data quality and measurement limitations.",
              "Consider employee impact, privacy and fairness.",
              "Pilot or phase interventions where appropriate.",
              "Monitor outcomes and unintended consequences.",
              "Document decisions and revise practices when evidence changes."
            ]
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Responsible analytics",
            "text": "An intervention should be evaluated not only by whether a target metric changed, but also by whether the change was sustainable, fair, operationally practical and consistent with responsible use of employee data."
          }
        ]
      },
      {
        "id": "moderation-interaction-analysis",
        "title": "4. Evaluation, Moderation and Interaction Analysis",
        "icon": "GitCompare",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Moderation analysis examines whether the relationship between an intervention or predictor and an outcome changes depending on a third variable. For example, an HR intervention may have different effects for different job groups, tenure levels or work contexts. Interaction analysis is the statistical way of representing such conditional relationships."
          },
          {
            "kind": "paragraph",
            "text": "The key idea is that an average effect can hide meaningful differences across groups or conditions. Analysts therefore examine whether the relationship between variables changes when another variable changes, while ensuring that the data and analytical design support the interpretation."
          },
          {
            "kind": "table",
            "headers": [
              "Concept",
              "Meaning"
            ],
            "rows": [
              [
                "Main effect",
                "Average relationship between a predictor/intervention and an outcome, holding other modeled factors constant."
              ],
              [
                "Moderator",
                "Variable that changes the strength or direction of a relationship."
              ],
              [
                "Interaction",
                "Term or relationship used to represent the conditional effect of one variable depending on another."
              ],
              [
                "Practical interpretation",
                "Identify for whom, when or under what conditions an intervention appears more or less effective."
              ]
            ]
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "HR Intervention",
        "definition": "Intentional HR action designed to influence a workforce process, behaviour or outcome."
      },
      {
        "term": "Baseline",
        "definition": "Measurement of the relevant condition before an intervention is implemented."
      },
      {
        "term": "Evidence-Based HR",
        "definition": "HR practice informed by relevant evidence, organizational data, professional expertise and context."
      },
      {
        "term": "Moderator",
        "definition": "A variable that changes the strength or direction of a relationship between variables."
      },
      {
        "term": "Interaction",
        "definition": "A relationship in which the effect of one variable depends on the level of another variable."
      }
    ],
    "examQuestions": [
      "Explain the process of tracking the impact of HR interventions. (Long)",
      "Discuss how stress levels can be evaluated using HR data. (Medium)",
      "Explain evidence-based HR practices and responsible intervention implementation. (Long)",
      "What is moderation analysis? Explain its relationship with interaction analysis. (Long)",
      "Why is baseline measurement important when evaluating an HR intervention? (Medium)"
    ]
  },
  {
    "unitNumber": 5,
    "title": "Applications of HR Metrics and Creating HR Dashboards",
    "hours": 8,
    "headings": [
      {
        "id": "hr-metrics-types",
        "title": "1. HR Metrics and Types of HR Metrics",
        "icon": "Table",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "HR metrics are standardized measures used to monitor workforce conditions, HR processes and outcomes. A useful metric has a clear definition, population, time period and calculation method. Metrics should be selected because they answer a decision-relevant question rather than because they are easy to calculate."
          },
          {
            "kind": "table",
            "headers": [
              "Metric category",
              "Examples"
            ],
            "rows": [
              [
                "Staffing metrics",
                "Headcount, vacancy rate, time-to-fill, selection ratio, turnover."
              ],
              [
                "Retention metrics",
                "Turnover rate, retention rate, early turnover, tenure patterns."
              ],
              [
                "Training and development metrics",
                "Training participation, completion, learning results, training hours and development outcomes."
              ],
              [
                "Performance metrics",
                "Performance distribution, goal achievement and relevant performance indicators."
              ],
              [
                "Compensation metrics",
                "Pay distribution, compensation cost, incentive payout and relevant pay comparisons."
              ],
              [
                "Absence / attendance metrics",
                "Absence rate, leave patterns and attendance indicators."
              ]
            ]
          }
        ]
      },
      {
        "id": "staffing-metrics",
        "title": "2. Staffing Metrics",
        "icon": "Users",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Staffing metrics help HR and management monitor workforce acquisition and movement. Examples include headcount, vacancy rate, time-to-fill, time-to-hire, offer acceptance, source effectiveness, selection ratio and early turnover. Definitions must be consistent; for example, time-to-fill can have different starting and ending points if the organization does not define the measure."
          },
          {
            "kind": "paragraph",
            "text": "Staffing metrics should be interpreted together. A low time-to-fill is not necessarily a good outcome if it is accompanied by poor quality of hire or high early turnover. Dashboard design should therefore combine efficiency, quality and outcome measures where relevant."
          }
        ]
      },
      {
        "id": "training-development-metrics",
        "title": "3. Training and Development Metrics",
        "icon": "BookOpen",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Training and development metrics monitor participation, delivery, learning and transfer. Common measures include participation rate, completion rate, training hours, assessment results, learning transfer indicators and defined post-training performance outcomes."
          },
          {
            "kind": "table",
            "headers": [
              "Metric",
              "Illustrative calculation / interpretation"
            ],
            "rows": [
              [
                "Participation rate",
                "Participants ÷ eligible population × 100."
              ],
              [
                "Completion rate",
                "Completed participants ÷ enrolled participants × 100."
              ],
              [
                "Average training hours",
                "Total training hours ÷ relevant employee population."
              ],
              [
                "Learning score",
                "Defined assessment result using a consistent scoring method."
              ],
              [
                "Transfer indicator",
                "Evidence that trained behaviour or skill is applied in the job."
              ],
              [
                "Training outcome",
                "Defined operational or performance result associated with the learning objective."
              ]
            ]
          }
        ]
      },
      {
        "id": "dashboard-design-excel",
        "title": "4. Application-Oriented HR Dashboards: Excel Tools and Controls",
        "icon": "FileSpreadsheet",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "An HR dashboard is a visual management interface that summarizes selected HR measures so that users can identify status, trends, exceptions and areas requiring attention. The syllabus specifically emphasizes Excel-based dashboard creation, including add-ins/functions, named ranges, tables, form controls and useful formulas."
          },
          {
            "kind": "paragraph",
            "text": "A practical dashboard workflow is: define business questions → prepare clean source data → convert data into a structured table → calculate required metrics → create summaries/pivots → add controls or filters → design visual displays → validate numbers → connect findings to business interpretation."
          },
          {
            "kind": "table",
            "headers": [
              "Excel feature",
              "Dashboard use"
            ],
            "rows": [
              [
                "Excel Table",
                "Provides a structured, expandable data range and supports consistent formulas."
              ],
              [
                "Named Range",
                "Gives a meaningful name to a range and can simplify formulas or controls."
              ],
              [
                "Pivot Table",
                "Summarizes large datasets by categories, periods and measures."
              ],
              [
                "Form Controls",
                "Can support interactive selections or dashboard controls where configured appropriately."
              ],
              [
                "Add-ins / analysis tools",
                "Can extend Excel's analytical or visualization capabilities depending on the installed environment."
              ],
              [
                "Charts / visual elements",
                "Communicate trends, comparisons and distributions."
              ],
              [
                "Conditional formatting",
                "Highlights exceptions, thresholds or changes."
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-hr-analytics-hr-dashboard",
            "caption": "HR dashboard structure connecting source data, Excel calculations, controls, visual summaries and management findings."
          }
        ]
      },
      {
        "id": "excel-formulas-hr",
        "title": "5. Important Excel Formulas for HR Dashboards",
        "icon": "Calculator",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The syllabus specifically identifies VLOOKUP, INDEX, SUMIF, AVERAGEIF and COUNTIF as useful Excel formulas. These functions can help combine reference information, retrieve values and calculate conditional summaries for HR dashboards."
          },
          {
            "kind": "table",
            "headers": [
              "Function",
              "Purpose",
              "Typical HR dashboard use"
            ],
            "rows": [
              [
                "VLOOKUP",
                "Looks up a value in the first column of a table and returns a value from a specified column.",
                "Retrieve department, grade or category information from a reference table."
              ],
              [
                "INDEX",
                "Returns a value from a specified position in a range or array.",
                "Retrieve a value from a structured reference table; often combined with MATCH in flexible lookup designs."
              ],
              [
                "SUMIF",
                "Adds values that meet a specified condition.",
                "Sum compensation cost or training spend for a selected department/category."
              ],
              [
                "AVERAGEIF",
                "Calculates an average for cells meeting a condition.",
                "Average training hours, pay or performance-related measure for a defined group."
              ],
              [
                "COUNTIF",
                "Counts cells meeting a condition.",
                "Count employees in a category, status or defined condition."
              ]
            ]
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Illustrative Excel formulas",
            "text": "Examples: =SUMIF(B:B,\"Sales\",F:F) to sum column F for Sales; =COUNTIF(D:D,\"Active\") to count Active records; =AVERAGEIF(B:B,\"HR\",F:F) to average F for HR. VLOOKUP and INDEX require a clearly defined lookup/reference range."
          }
        ]
      },
      {
        "id": "storyboarding-integration",
        "title": "6. Storyboarding: Connecting Data and Integrating Findings",
        "icon": "LayoutTemplate",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Storyboarding organizes the sequence in which dashboard findings are communicated. Instead of placing many unrelated charts on one screen, a storyboard creates a logical path from business question to evidence, finding, interpretation and action."
          },
          {
            "kind": "table",
            "headers": [
              "Storyboard element",
              "Purpose"
            ],
            "rows": [
              [
                "Business question",
                "State what decision or issue the dashboard addresses."
              ],
              [
                "Context",
                "Define population, period and relevant benchmark or target."
              ],
              [
                "Evidence",
                "Present the most relevant metrics and visual patterns."
              ],
              [
                "Finding",
                "State what the data shows without overstating causation."
              ],
              [
                "Interpretation",
                "Explain possible drivers, limitations and contextual factors."
              ],
              [
                "Action / next step",
                "Identify the decision, investigation or intervention supported by the evidence."
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Integrating findings means connecting related metrics rather than reading each number independently. For example, staffing volume can be interpreted alongside vacancy, time-to-fill and early turnover to understand whether a recruitment process is merely fast or also effective."
          },
          {
            "kind": "diagram",
            "diagramId": "mba-hr-analytics-hr-dashboard",
            "caption": "HR dashboard and storyboard flow from data preparation to integrated findings and management action."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "HR Dashboard",
        "definition": "Visual interface that summarizes selected HR metrics and trends for monitoring and decision support."
      },
      {
        "term": "Staffing Metric",
        "definition": "Measure related to workforce acquisition, vacancies, hiring or staffing movement."
      },
      {
        "term": "Training Metric",
        "definition": "Measure related to participation, delivery, learning, transfer or training outcomes."
      },
      {
        "term": "Pivot Table",
        "definition": "Excel feature used to summarize and analyze structured data by categories and measures."
      },
      {
        "term": "Named Range",
        "definition": "Meaningful name assigned to a cell or range for easier reference in formulas or controls."
      },
      {
        "term": "Storyboard",
        "definition": "Structured sequence connecting a business question, data evidence, findings, interpretation and action."
      },
      {
        "term": "VLOOKUP",
        "definition": "Excel function that retrieves a value from a table using a lookup value in its first column."
      },
      {
        "term": "INDEX",
        "definition": "Excel function that returns a value from a specified position in a range or array."
      },
      {
        "term": "SUMIF",
        "definition": "Excel function that sums values meeting a specified criterion."
      },
      {
        "term": "AVERAGEIF",
        "definition": "Excel function that averages values meeting a specified criterion."
      },
      {
        "term": "COUNTIF",
        "definition": "Excel function that counts cells meeting a specified criterion."
      }
    ],
    "examQuestions": [
      "Define HR metrics and explain major types of HR metrics. (Long)",
      "Explain staffing metrics with suitable examples. (Long)",
      "Discuss training and development metrics. (Medium)",
      "Explain the process of creating an HR dashboard in Excel. (Long)",
      "Discuss the role of Tables, Named Ranges, Pivot Tables and Form Controls in dashboards. (Long)",
      "Explain VLOOKUP, INDEX, SUMIF, AVERAGEIF and COUNTIF with HR examples. (Long)",
      "What is storyboarding? Explain how it connects data and findings. (Long)",
      "Why should HR dashboards combine related metrics rather than display isolated numbers? (Medium)"
    ]
  }
];
