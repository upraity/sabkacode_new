import { UnitNote } from "@/types";

// Detailed, syllabus-aligned notes for Project and Sourcing Management (BMB OM 05)
// Dr. B. R. Ambedkar University, Agra (DBRAU), MBA IV Semester.
export const MbaProjectAndSourcingManagementUnitNotes: UnitNote[] = [
  {
    "unitNumber": 1,
    "title": "Introduction to Sourcing and Procurement",
    "hours": 8,
    "headings": [
      {
        "id": "sourcing-procurement-purchasing",
        "title": "1. Sourcing, Procurement and Purchasing",
        "icon": "ShoppingCart",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Sourcing, procurement and purchasing are related but distinct activities. Sourcing is the systematic process of identifying, evaluating and developing suitable sources of supply. Procurement is broader and covers the planning and acquisition of goods and services, supplier relationships, contracting and related activities. Purchasing generally refers more specifically to the transactional process of ordering and obtaining the required items or services."
          },
          {
            "kind": "table",
            "headers": [
              "Term",
              "Core emphasis"
            ],
            "rows": [
              [
                "Sourcing",
                "Finding and evaluating suitable suppliers and supply alternatives."
              ],
              [
                "Procurement",
                "End-to-end acquisition process including planning, sourcing, contracting, ordering and supplier management."
              ],
              [
                "Purchasing",
                "Transactional acquisition activities such as requisitions, purchase orders, receipt and invoice processing."
              ],
              [
                "Supplier management",
                "Managing supplier performance, relationships, risk and development after selection."
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "The distinction matters because an organization can process purchase orders efficiently while still having a weak sourcing strategy. Strategic procurement connects purchasing decisions with cost, quality, continuity, risk, sustainability and organizational objectives."
          },
          {
            "kind": "diagram",
            "diagramId": "mba-project-and-sourcing-management-sourcing-process",
            "caption": "Sourcing and procurement process from requirement identification through supplier selection, ordering and supplier performance management."
          }
        ]
      },
      {
        "id": "purchasing-cycle",
        "title": "2. Purchasing Cycle",
        "icon": "RefreshCw",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The purchasing cycle is the sequence through which a requirement is converted into an authorized purchase and finally into receipt, verification and payment. The exact sequence varies by organization, but the basic control logic is similar."
          },
          {
            "kind": "table",
            "headers": [
              "Stage",
              "Main activity"
            ],
            "rows": [
              [
                "Need identification",
                "Recognize the requirement and define specifications, quantity, timing and budget."
              ],
              [
                "Purchase requisition",
                "Internal request is raised and authorized according to organizational controls."
              ],
              [
                "Supplier / source identification",
                "Existing supplier or appropriate market source is identified."
              ],
              [
                "Quotation / tender / negotiation",
                "Commercial terms are obtained and evaluated as required."
              ],
              [
                "Purchase order / contract",
                "Authorized commitment is issued to the selected supplier."
              ],
              [
                "Receipt and inspection",
                "Goods or services are received and checked against requirements."
              ],
              [
                "Invoice verification",
                "Invoice is matched with purchase and receipt records according to policy."
              ],
              [
                "Payment and closure",
                "Approved payment is processed and purchasing records are closed."
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-project-and-sourcing-management-sourcing-process",
            "caption": "Purchasing cycle showing requirement, sourcing, purchase order, receipt, invoice verification and closure."
          }
        ]
      },
      {
        "id": "cips-purchasing-professional",
        "title": "3. CIPS and Professional Purchasing Practice",
        "icon": "Award",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "CIPS refers to the Chartered Institute of Procurement & Supply, a professional body associated with procurement and supply practice. In the syllabus context, professional purchasing emphasizes structured procurement processes, ethical conduct, supplier management, commercial awareness and the development of procurement capability."
          },
          {
            "kind": "paragraph",
            "text": "Professional procurement practice requires clear specifications, transparent procedures, appropriate authorization, objective supplier evaluation, accurate documentation, confidentiality where required and avoidance of conflicts of interest. Procurement professionals also need commercial skills, analytical ability, negotiation capability, risk awareness and relationship-management skills."
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Professional principle",
            "text": "Procurement decisions should be based on defined requirements, appropriate evidence and authorized processes rather than personal preference or undocumented supplier influence."
          }
        ]
      },
      {
        "id": "purchase-order-process",
        "title": "4. Purchase Order Process",
        "icon": "FileText",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A purchase order (PO) is an authorized document communicating the buyer's intention to purchase specified goods or services under stated terms. It normally identifies the supplier, items or services, quantities, prices or pricing basis, delivery requirements and relevant commercial conditions."
          },
          {
            "kind": "bullets",
            "items": [
              "Requirement and specification are defined before the order is raised.",
              "Internal authorization confirms that the purchase is permitted.",
              "The purchase order communicates the agreed commercial and delivery requirements.",
              "The supplier acknowledges or accepts the order according to the organization's process.",
              "Receipt is recorded and checked against the order.",
              "Invoice verification is performed before payment under the applicable control process."
            ]
          },
          {
            "kind": "paragraph",
            "text": "Purchase-order controls help reduce unauthorized purchasing, specification ambiguity and payment disputes. Digital procurement systems can connect requisitions, purchase orders, receipts and invoices to improve traceability."
          }
        ]
      },
      {
        "id": "sourcing-procurement-strategies",
        "title": "5. Sourcing and Procurement Strategies",
        "icon": "Target",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Sourcing strategy determines how an organization approaches its supply market. The strategy depends on spend value, supply risk, market competitiveness, switching difficulty, technical requirements, demand stability and the strategic importance of the category."
          },
          {
            "kind": "table",
            "headers": [
              "Strategy",
              "Typical application"
            ],
            "rows": [
              [
                "Single sourcing",
                "One selected supplier is used for a requirement where concentration is acceptable and justified."
              ],
              [
                "Multiple sourcing",
                "More than one supplier is used to reduce dependence or improve competitive tension."
              ],
              [
                "Local sourcing",
                "Suppliers are sourced from a nearby or domestic market for relevant operational or strategic reasons."
              ],
              [
                "Global sourcing",
                "International supply markets are considered for cost, capability, technology or availability."
              ],
              [
                "Strategic partnership",
                "Closer long-term relationship is developed where supplier capability is strategically important."
              ],
              [
                "Competitive bidding",
                "Suppliers compete through quotations, tenders or other structured commercial processes."
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "No strategy is universally appropriate. Procurement should balance total cost, quality, continuity, supplier risk, flexibility, compliance and long-term organizational requirements."
          }
        ]
      },
      {
        "id": "make-or-buy",
        "title": "6. Make-or-Buy Decision",
        "icon": "Scale",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A make-or-buy decision determines whether an organization should produce a requirement internally or obtain it from an external supplier. The analysis should compare relevant costs and operational factors rather than simply comparing an internal accounting cost with a supplier quotation."
          },
          {
            "kind": "table",
            "headers": [
              "Make considerations",
              "Buy considerations"
            ],
            "rows": [
              [
                "Available internal capacity",
                "External supplier capability"
              ],
              [
                "Control over technology and process",
                "Access to specialist expertise"
              ],
              [
                "Confidentiality / strategic capability",
                "Potential economies of supplier scale"
              ],
              [
                "Relevant incremental production cost",
                "Supplier price and total acquisition cost"
              ],
              [
                "Quality and process control",
                "Supplier quality and service capability"
              ],
              [
                "Long-term strategic importance",
                "Flexibility and market alternatives"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Relevant cost analysis should consider avoidable or incremental internal costs, supplier price, logistics, quality costs, inventory implications, contract management and opportunity cost of internal capacity. Strategic factors can be decisive when the activity is critical to competitive capability or supply continuity."
          },
          {
            "kind": "diagram",
            "diagramId": "mba-project-and-sourcing-management-sourcing-process",
            "caption": "Sourcing decision context showing requirement analysis, internal-versus-external alternatives and supplier evaluation."
          }
        ]
      },
      {
        "id": "sourcing-case-studies",
        "title": "7. Case Studies in Sourcing and Procurement",
        "icon": "FileText",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A sourcing case should be analyzed by defining the requirement, supply-market conditions, supplier alternatives, commercial objectives, risk factors and decision criteria. The analyst should not evaluate suppliers on price alone when quality, delivery, continuity, compliance or technical capability materially affect the total outcome."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Sourcing",
        "definition": "Process of identifying, evaluating and developing suitable sources of supply."
      },
      {
        "term": "Procurement",
        "definition": "End-to-end process of planning and acquiring goods or services and managing associated supplier and commercial activities."
      },
      {
        "term": "Purchasing",
        "definition": "Transactional activities involved in ordering and obtaining required goods or services."
      },
      {
        "term": "Purchase Order",
        "definition": "Authorized document communicating the buyer's purchase requirements and commercial terms to a supplier."
      },
      {
        "term": "CIPS",
        "definition": "Chartered Institute of Procurement & Supply, a professional body associated with procurement and supply practice."
      },
      {
        "term": "Make-or-Buy",
        "definition": "Decision on whether a requirement should be produced internally or obtained externally."
      },
      {
        "term": "Supplier",
        "definition": "External organization or party providing goods, services or other required inputs."
      }
    ],
    "examQuestions": [
      "Differentiate sourcing, procurement and purchasing with suitable examples. (Long)",
      "Explain the complete purchasing cycle. (Long)",
      "Discuss the role of CIPS and professional purchasing practices. (Medium)",
      "Explain the purchase order process and its control importance. (Long)",
      "Discuss major sourcing and procurement strategies. (Long)",
      "Explain the make-or-buy decision and the factors affecting it. (Long)",
      "How should a sourcing and procurement case study be analyzed? (Medium)"
    ]
  },
  {
    "unitNumber": 2,
    "title": "Evaluating Suppliers' Efficiency: Vendor Rating, Selection and Development",
    "hours": 8,
    "headings": [
      {
        "id": "supplier-evaluation",
        "title": "1. Supplier Evaluation and Efficiency",
        "icon": "SearchCheck",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Supplier evaluation is the systematic assessment of a supplier's ability and performance against defined requirements. Evaluation may occur before selection, during the supplier relationship and at periodic review points. The objective is to establish whether a supplier can deliver the required value, quality, reliability, capacity and commercial performance."
          },
          {
            "kind": "table",
            "headers": [
              "Evaluation area",
              "Illustrative evidence"
            ],
            "rows": [
              [
                "Quality",
                "Defect rate, conformity, corrective actions and quality-system evidence."
              ],
              [
                "Delivery",
                "On-time delivery, lead time, delivery reliability and responsiveness."
              ],
              [
                "Cost / commercial",
                "Price, total cost, payment terms and cost-change behaviour."
              ],
              [
                "Capacity",
                "Production/service capability, capacity availability and scalability."
              ],
              [
                "Technical capability",
                "Technology, expertise, certifications and ability to meet specifications."
              ],
              [
                "Financial / continuity",
                "Financial stability, business continuity and supply-risk indicators."
              ],
              [
                "Service",
                "Communication, problem resolution and support responsiveness."
              ]
            ]
          }
        ]
      },
      {
        "id": "vendor-rating",
        "title": "2. Vendor Rating",
        "icon": "Star",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Vendor rating is a structured method of assigning ratings or scores to suppliers based on selected performance criteria. A rating system should define the criteria, weights where appropriate, measurement period, data sources and decision thresholds before results are interpreted."
          },
          {
            "kind": "table",
            "headers": [
              "Criterion",
              "Illustrative measure"
            ],
            "rows": [
              [
                "Quality",
                "Accepted quantity ÷ received quantity, defect rate or defined quality score."
              ],
              [
                "Delivery",
                "On-time deliveries ÷ total deliveries."
              ],
              [
                "Price",
                "Variance from agreed or benchmark price, where meaningful."
              ],
              [
                "Service",
                "Response and issue-resolution performance."
              ],
              [
                "Compliance",
                "Conformance with contractual, documentation and process requirements."
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "A weighted vendor-rating model can be used when criteria have different strategic importance. For example, a buyer may assign greater importance to quality and delivery than to a small price difference for a critical component."
          },
          {
            "kind": "diagram",
            "diagramId": "mba-project-and-sourcing-management-supplier-evaluation",
            "caption": "Supplier evaluation and vendor-rating framework covering quality, delivery, cost, capability, risk and service."
          }
        ]
      },
      {
        "id": "supplier-selection",
        "title": "3. Supplier Selection and Qualification",
        "icon": "CheckCircle",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Supplier selection is the decision process used to choose suppliers that meet defined technical, commercial and operational requirements. Qualification determines whether a supplier is eligible to participate based on minimum requirements, while selection compares qualified suppliers against decision criteria."
          },
          {
            "kind": "table",
            "headers": [
              "Step",
              "Purpose"
            ],
            "rows": [
              [
                "Requirement definition",
                "Specify what the supplier must deliver."
              ],
              [
                "Market identification",
                "Identify potential sources."
              ],
              [
                "Pre-qualification",
                "Check minimum capability, compliance and eligibility."
              ],
              [
                "Request for information / quotation / proposal",
                "Obtain relevant technical and commercial information."
              ],
              [
                "Evaluation",
                "Compare supplier responses using predefined criteria."
              ],
              [
                "Due diligence",
                "Verify important claims, risks and capabilities."
              ],
              [
                "Selection and contracting",
                "Select the supplier and establish agreed terms."
              ],
              [
                "Onboarding",
                "Set up systems, processes, contacts and performance expectations."
              ]
            ]
          }
        ]
      },
      {
        "id": "supplier-performance",
        "title": "4. Supplier Performance Evaluation",
        "icon": "BarChart3",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Supplier performance evaluation measures actual supplier results against agreed standards. Performance management should distinguish isolated incidents from persistent patterns and should identify root causes where performance falls below requirements."
          },
          {
            "kind": "table",
            "headers": [
              "Performance metric",
              "Purpose"
            ],
            "rows": [
              [
                "On-time delivery",
                "Measures delivery reliability against agreed dates."
              ],
              [
                "Defect rate",
                "Measures quality problems in supplied goods or services."
              ],
              [
                "Lead time",
                "Measures elapsed time between defined order and delivery points."
              ],
              [
                "Fill rate / completeness",
                "Measures whether required quantities are supplied as expected."
              ],
              [
                "Corrective-action closure",
                "Measures supplier responsiveness to identified problems."
              ],
              [
                "Cost performance",
                "Tracks agreed price, changes and relevant total-cost effects."
              ]
            ]
          }
        ]
      },
      {
        "id": "supplier-development",
        "title": "5. Supplier Development",
        "icon": "TrendingUp",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Supplier development consists of actions undertaken to improve supplier capability or performance. Development can include joint process improvement, technical support, training, quality improvement, capacity development, information sharing and collaborative problem solving."
          },
          {
            "kind": "paragraph",
            "text": "Supplier development is particularly relevant when a supplier is strategically important and performance can be improved through collaboration. It should have a clear objective, baseline, action plan, responsibility and follow-up measurement."
          },
          {
            "kind": "diagram",
            "diagramId": "mba-project-and-sourcing-management-supplier-evaluation",
            "caption": "Supplier development cycle linking performance gaps, improvement actions, collaboration and reassessment."
          }
        ]
      },
      {
        "id": "supplier-selection-strategy",
        "title": "6. Supplier Selection Strategy",
        "icon": "Target",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Supplier selection strategy should reflect the organization's supply category and risk profile. For critical inputs, technical capability, continuity and quality may receive substantial weight. For standardized, low-risk purchases, competitive pricing and transaction efficiency may receive greater emphasis."
          },
          {
            "kind": "table",
            "headers": [
              "Selection consideration",
              "Question"
            ],
            "rows": [
              [
                "Strategic fit",
                "Can the supplier support the organization's longer-term requirements?"
              ],
              [
                "Technical fit",
                "Can the supplier meet specifications and required capability?"
              ],
              [
                "Commercial fit",
                "Are price, terms and total cost acceptable?"
              ],
              [
                "Operational fit",
                "Can delivery, capacity and responsiveness meet requirements?"
              ],
              [
                "Risk fit",
                "What supply, financial, geopolitical, compliance or continuity risks exist?"
              ],
              [
                "Relationship fit",
                "Is appropriate communication and collaboration possible?"
              ]
            ]
          }
        ]
      },
      {
        "id": "supplier-case-studies",
        "title": "7. Supplier Evaluation and Selection Case Studies",
        "icon": "FileText",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A supplier case study should begin with the purchasing requirement and then construct a transparent evaluation framework. The case should identify criteria, evidence, weights where justified, supplier alternatives, risk considerations and the implementation or development plan."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Supplier Evaluation",
        "definition": "Systematic assessment of a supplier's capability and performance against defined requirements."
      },
      {
        "term": "Vendor Rating",
        "definition": "Structured rating or scoring of supplier performance using selected criteria."
      },
      {
        "term": "Supplier Qualification",
        "definition": "Process of verifying whether a supplier meets minimum eligibility and capability requirements."
      },
      {
        "term": "Supplier Selection",
        "definition": "Decision process for choosing a supplier from qualified alternatives."
      },
      {
        "term": "Supplier Performance",
        "definition": "Measured results of a supplier against agreed quality, delivery, cost and service requirements."
      },
      {
        "term": "Supplier Development",
        "definition": "Planned actions to improve supplier capability or performance."
      },
      {
        "term": "Due Diligence",
        "definition": "Verification and investigation of relevant supplier information and risks before or during engagement."
      }
    ],
    "examQuestions": [
      "Explain supplier evaluation and the major criteria used to evaluate suppliers. (Long)",
      "What is vendor rating? Explain its procedure and importance. (Long)",
      "Discuss supplier selection and qualification processes. (Long)",
      "Explain major supplier performance metrics. (Medium)",
      "What is supplier development? Explain its process and benefits. (Long)",
      "Discuss factors affecting supplier selection strategy. (Long)",
      "How should a supplier-evaluation case study be approached? (Medium)"
    ]
  },
  {
    "unitNumber": 3,
    "title": "Price Determination and Negotiation",
    "hours": 8,
    "headings": [
      {
        "id": "price-determination",
        "title": "1. Price Determination in Procurement",
        "icon": "IndianRupee",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Price determination is the process of establishing an appropriate commercial price for a good or service. Procurement price analysis should distinguish the quoted price from total acquisition cost and should consider specification, quantity, market conditions, supplier economics, logistics, payment terms, risk and the nature of the contract."
          },
          {
            "kind": "table",
            "headers": [
              "Factor",
              "Influence on price"
            ],
            "rows": [
              [
                "Specification",
                "More demanding quality, performance or technical requirements can increase cost."
              ],
              [
                "Quantity / volume",
                "Volume can affect supplier economics and commercial terms."
              ],
              [
                "Market competition",
                "Competitive supply markets can influence pricing pressure."
              ],
              [
                "Input costs",
                "Material, labour, energy and other supplier costs can affect price."
              ],
              [
                "Logistics",
                "Freight, insurance, handling and location can affect total cost."
              ],
              [
                "Payment terms",
                "Credit period, advance payment and financing implications can affect commercial value."
              ],
              [
                "Risk allocation",
                "Who bears price, delivery, quality or demand risks can influence the agreed price."
              ]
            ]
          }
        ]
      },
      {
        "id": "pricing-factors",
        "title": "2. Factors Influencing Price",
        "icon": "Scale",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Price is influenced by both internal cost factors and external market conditions. A procurement manager should avoid treating the supplier's quoted price as a complete explanation of cost. The analysis should identify the cost drivers relevant to the category and the terms of supply."
          },
          {
            "kind": "bullets",
            "items": [
              "Material and component costs.",
              "Direct and indirect labour requirements.",
              "Manufacturing or service-process costs.",
              "Overheads and supplier operating costs.",
              "Transportation, warehousing and handling.",
              "Order quantity, demand pattern and capacity utilization.",
              "Market competition and availability of alternative suppliers.",
              "Taxes, duties, regulatory requirements and applicable contractual terms.",
              "Currency and market risks for international purchases where relevant."
            ]
          }
        ]
      },
      {
        "id": "types-pricing",
        "title": "3. Types of Pricing",
        "icon": "List",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Different procurement situations use different pricing structures. The appropriate structure depends on the nature of the requirement, uncertainty, scope definition and allocation of risk between buyer and supplier."
          },
          {
            "kind": "table",
            "headers": [
              "Pricing type / structure",
              "Description"
            ],
            "rows": [
              [
                "Fixed price",
                "A specified price is agreed for the defined scope, subject to the contract terms."
              ],
              [
                "Cost-plus",
                "Supplier is reimbursed for defined costs plus an agreed fee or margin."
              ],
              [
                "Unit price",
                "Price is specified per unit of the purchased good or service."
              ],
              [
                "Time and materials",
                "Payment is based on defined labour/time rates and material costs."
              ],
              [
                "Volume-based pricing",
                "Price changes according to defined purchase-volume levels."
              ],
              [
                "Indexed / escalation pricing",
                "Price is linked to an agreed index or adjustment mechanism under defined conditions."
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Pricing structure should be selected with attention to uncertainty and incentives. A fixed price can provide budget certainty when scope is well defined, while more flexible structures may be appropriate where costs or scope are genuinely uncertain."
          }
        ]
      },
      {
        "id": "negotiation-process",
        "title": "4. Negotiation Process",
        "icon": "Handshake",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Procurement negotiation is a structured discussion through which buyer and supplier seek agreement on commercial, technical, delivery and contractual terms. Effective negotiation starts before the meeting through preparation of requirements, objectives, alternatives, data and authority limits."
          },
          {
            "kind": "table",
            "headers": [
              "Stage",
              "Main activity"
            ],
            "rows": [
              [
                "Preparation",
                "Define objectives, requirements, information, alternatives, authority and likely supplier interests."
              ],
              [
                "Opening",
                "Establish scope, agenda and relevant facts."
              ],
              [
                "Exploration",
                "Ask questions, clarify needs, constraints and assumptions."
              ],
              [
                "Bargaining",
                "Discuss price and non-price terms while exchanging proposals and concessions."
              ],
              [
                "Agreement",
                "Document the agreed terms and confirm responsibilities."
              ],
              [
                "Closure / implementation",
                "Translate the agreement into contract or purchase documentation and monitor execution."
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-project-and-sourcing-management-price-negotiation",
            "caption": "Procurement negotiation process from preparation and exploration through bargaining, agreement and implementation."
          }
        ]
      },
      {
        "id": "negotiation-techniques",
        "title": "5. Negotiation Techniques",
        "icon": "MessageCircle",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Negotiation techniques are methods used to structure discussion and reach agreement. Ethical negotiation should be based on accurate information, authorized objectives and transparent commitments rather than deception or misrepresentation."
          },
          {
            "kind": "bullets",
            "items": [
              "Prepare a clear target and acceptable range before negotiation.",
              "Separate issues into price and non-price variables such as delivery, quality, payment, warranty and service.",
              "Use objective criteria and relevant market evidence.",
              "Ask questions to understand the supplier's constraints and cost drivers.",
              "Trade concessions conditionally rather than giving concessions without reciprocal value.",
              "Use total-cost analysis rather than focusing only on unit price.",
              "Document agreements precisely to avoid later ambiguity."
            ]
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Total-cost perspective",
            "text": "A lower unit price may not produce a lower overall cost if it causes higher freight, quality failures, inventory, downtime, administration or other lifecycle costs."
          }
        ]
      },
      {
        "id": "negotiation-power-alternatives",
        "title": "6. Negotiation Power and Alternatives",
        "icon": "GitBranch",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Negotiation power is influenced by alternatives, information, time pressure, switching difficulty, supply-market structure and the relative importance of the transaction. A buyer with credible alternative sources may have greater flexibility than a buyer dependent on a single supplier."
          },
          {
            "kind": "paragraph",
            "text": "The concept of alternatives is closely connected with BATNA—Best Alternative To a Negotiated Agreement. A well-defined alternative helps the negotiator identify the point beyond which accepting an agreement would be less attractive than pursuing another available course."
          },
          {
            "kind": "table",
            "headers": [
              "Source of leverage",
              "Example"
            ],
            "rows": [
              [
                "Supplier alternatives for buyer",
                "Qualified alternative suppliers are available."
              ],
              [
                "Buyer alternatives for supplier",
                "Supplier has other customers or uses for capacity."
              ],
              [
                "Information",
                "Reliable market and cost information improves negotiation preparation."
              ],
              [
                "Time",
                "Urgency can reduce flexibility if not managed."
              ],
              [
                "Switching cost",
                "High switching difficulty can reduce immediate alternatives."
              ],
              [
                "Volume / strategic value",
                "Significant business may affect negotiating positions."
              ]
            ]
          }
        ]
      },
      {
        "id": "negotiation-case-studies",
        "title": "7. Price and Negotiation Case Studies",
        "icon": "FileText",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A price-negotiation case should identify the requirement, cost drivers, market alternatives, objectives, constraints, bargaining variables and implementation terms. The analysis should distinguish a headline price concession from the total economic value of the negotiated package."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Price Determination",
        "definition": "Process of establishing an appropriate commercial price or pricing structure for a procurement requirement."
      },
      {
        "term": "Total Cost",
        "definition": "Combined relevant costs associated with acquiring, receiving, using and managing a purchase."
      },
      {
        "term": "Fixed Price",
        "definition": "Pricing arrangement in which a specified price applies to a defined scope under stated contract conditions."
      },
      {
        "term": "Cost-Plus",
        "definition": "Pricing arrangement based on defined costs plus an agreed fee or margin."
      },
      {
        "term": "Negotiation",
        "definition": "Structured discussion intended to reach agreement on relevant commercial and other terms."
      },
      {
        "term": "BATNA",
        "definition": "Best Alternative To a Negotiated Agreement; the best available alternative if an agreement is not reached."
      },
      {
        "term": "Concession",
        "definition": "A change offered by one party in negotiation in exchange for value or movement on another issue."
      }
    ],
    "examQuestions": [
      "Explain price determination in procurement and the factors affecting price. (Long)",
      "Discuss different types of pricing structures used in procurement. (Long)",
      "Explain the complete procurement negotiation process. (Long)",
      "Discuss important negotiation techniques for purchasing professionals. (Long)",
      "Explain negotiation power and the importance of alternatives and BATNA. (Long)",
      "Why should procurement negotiations consider total cost rather than unit price alone? (Medium)",
      "How should a price-negotiation case study be analyzed? (Medium)"
    ]
  },
  {
    "unitNumber": 4,
    "title": "Introduction of Project",
    "hours": 8,
    "headings": [
      {
        "id": "project-characteristics",
        "title": "1. Characteristics of a Project",
        "icon": "FolderKanban",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A project is a temporary endeavour undertaken to create a defined product, service or result. Projects have a defined objective, a beginning and an end, require coordinated resources and operate under constraints such as time, cost, scope, quality and risk."
          },
          {
            "kind": "table",
            "headers": [
              "Characteristic",
              "Explanation"
            ],
            "rows": [
              [
                "Temporary",
                "A project has a defined start and completion point, even though its output may have a long life."
              ],
              [
                "Unique output",
                "The result is not simply routine repetition of an ongoing operational activity."
              ],
              [
                "Defined objective",
                "The project exists to achieve specified outcomes or deliverables."
              ],
              [
                "Resource constraints",
                "People, money, equipment and other resources are limited."
              ],
              [
                "Interdependence",
                "Project activities are connected and delays or changes can affect other activities."
              ],
              [
                "Uncertainty",
                "Projects commonly involve assumptions, risks and changing conditions."
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-project-and-sourcing-management-project-lifecycle",
            "caption": "Project lifecycle from initiation through planning, execution, monitoring/control and closure."
          }
        ]
      },
      {
        "id": "types-projects",
        "title": "2. Types of Projects",
        "icon": "Layers",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Projects can be classified according to purpose, scale, industry, ownership, technology, duration or degree of complexity. Classification helps managers understand the operating environment and choose suitable planning and control approaches."
          },
          {
            "kind": "table",
            "headers": [
              "Project type",
              "Illustrative example"
            ],
            "rows": [
              [
                "Construction",
                "Building, infrastructure or facility development."
              ],
              [
                "Technology / IT",
                "Software implementation, systems development or technology migration."
              ],
              [
                "Product development",
                "Development and launch of a new product."
              ],
              [
                "Organizational change",
                "Implementation of a new structure, process or major transformation."
              ],
              [
                "Research and development",
                "Creation or testing of new knowledge, technology or solutions."
              ],
              [
                "Maintenance / shutdown",
                "Planned major maintenance, overhaul or shutdown activity."
              ]
            ]
          }
        ]
      },
      {
        "id": "project-life-cycle",
        "title": "3. Project Life Cycle",
        "icon": "RefreshCw",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The project life cycle is the sequence of stages through which a project progresses. The exact names differ across methodologies, but the syllabus emphasizes understanding project phases and the flow from initiation to completion."
          },
          {
            "kind": "table",
            "headers": [
              "Phase",
              "Main purpose"
            ],
            "rows": [
              [
                "Initiation",
                "Define the need, objective, broad scope, feasibility and authorization."
              ],
              [
                "Planning",
                "Develop scope, schedule, resources, cost, risk and implementation plans."
              ],
              [
                "Execution",
                "Perform the planned work and produce project deliverables."
              ],
              [
                "Monitoring and control",
                "Measure progress, manage changes, risks, cost, time and quality."
              ],
              [
                "Closure",
                "Complete acceptance, documentation, handover, financial closure and lessons learned."
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-project-and-sourcing-management-project-lifecycle",
            "caption": "Project lifecycle diagram covering initiation, planning, execution, monitoring/control and closure."
          }
        ]
      },
      {
        "id": "deliverables",
        "title": "4. Project Deliverables and Documentation",
        "icon": "FileCheck",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A project deliverable is a defined, verifiable output produced by project work. Deliverables can be physical products, documents, systems, services, reports, facilities or other specified results. Deliverables should have clear acceptance criteria so that stakeholders can determine whether the required output has been completed."
          },
          {
            "kind": "bullets",
            "items": [
              "Define each deliverable in measurable or verifiable terms.",
              "Identify acceptance criteria and responsible parties.",
              "Break major deliverables into manageable work packages where appropriate.",
              "Maintain version and change control for important project documents.",
              "Obtain formal acceptance before treating a major deliverable as complete."
            ]
          }
        ]
      },
      {
        "id": "project-management-concepts",
        "title": "5. Project Management Concepts",
        "icon": "Settings2",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Project management is the application of knowledge, skills, methods and tools to project activities in order to achieve defined requirements. Core management areas include scope, schedule, cost, quality, resources, risk, communication, procurement and stakeholder management."
          },
          {
            "kind": "paragraph",
            "text": "The project manager coordinates activities and stakeholders, monitors constraints, manages changes and ensures that decisions are communicated and implemented. Effective project management requires integration because a change in one constraint can affect others."
          },
          {
            "kind": "table",
            "headers": [
              "Constraint / area",
              "Typical management question"
            ],
            "rows": [
              [
                "Scope",
                "What work is included and excluded?"
              ],
              [
                "Time",
                "When must activities and deliverables be completed?"
              ],
              [
                "Cost",
                "What budget and cost controls apply?"
              ],
              [
                "Quality",
                "What standards and acceptance criteria must be achieved?"
              ],
              [
                "Risk",
                "What uncertainties can affect objectives?"
              ],
              [
                "Resources",
                "Which people, equipment and materials are required?"
              ],
              [
                "Stakeholders",
                "Who can influence or is affected by the project?"
              ]
            ]
          }
        ]
      },
      {
        "id": "project-cost-classification",
        "title": "6. Fixed, Variable, Recurring and Non-Recurring Costs",
        "icon": "IndianRupee",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Project costs can be classified to improve budgeting and control. Fixed costs do not change directly with the relevant level of activity within a defined range and period. Variable costs change with the level or quantity of activity. Recurring costs arise repeatedly during a project or service period, while non-recurring costs occur as one-time or infrequent project expenditures."
          },
          {
            "kind": "table",
            "headers": [
              "Cost type",
              "Meaning",
              "Example"
            ],
            "rows": [
              [
                "Fixed",
                "Does not directly vary with the relevant activity level within a defined range.",
                "A fixed project management fee for a defined scope."
              ],
              [
                "Variable",
                "Changes with activity, quantity or output.",
                "Material cost that increases with project quantity."
              ],
              [
                "Recurring",
                "Occurs repeatedly over the project period.",
                "Periodic software subscription or repeated service charge."
              ],
              [
                "Non-recurring",
                "Occurs once or infrequently for a defined project need.",
                "One-time setup or initial implementation cost."
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "A single expenditure can be viewed differently depending on the classification basis and time period. Therefore, project budgeting should state the assumptions and classification rules used."
          }
        ]
      },
      {
        "id": "project-financing-budgeting",
        "title": "7. Project Financing and Budgeting",
        "icon": "WalletCards",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Project financing and budgeting determine how the project will be funded and how approved resources will be allocated and controlled. A project budget normally converts the work scope into estimated resource costs and provides a baseline for monitoring."
          },
          {
            "kind": "table",
            "headers": [
              "Budget component",
              "Purpose"
            ],
            "rows": [
              [
                "Cost estimate",
                "Estimate the resources required for project work."
              ],
              [
                "Contingency / risk provision",
                "Provide an approved allowance for defined uncertainty where appropriate."
              ],
              [
                "Time-phased budget",
                "Show when expenditure is expected to occur."
              ],
              [
                "Cost baseline",
                "Reference against which actual project cost performance is monitored."
              ],
              [
                "Cash-flow planning",
                "Estimate timing of cash requirements and funding availability."
              ]
            ]
          }
        ]
      },
      {
        "id": "sources-of-finance",
        "title": "8. Sources of Finance for Projects",
        "icon": "Landmark",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Project funding may come from internal or external sources depending on the organization, project type, risk and financing structure. The choice should consider cost of funds, control, repayment obligations, risk, cash flow and the project's expected returns."
          },
          {
            "kind": "table",
            "headers": [
              "Source",
              "General characteristic"
            ],
            "rows": [
              [
                "Internal funds",
                "Organization's retained funds or internally generated resources."
              ],
              [
                "Equity",
                "Capital provided by owners or investors in exchange for an ownership interest or return expectation."
              ],
              [
                "Debt",
                "Borrowed funds that generally create repayment and financing obligations."
              ],
              [
                "Bank / institutional finance",
                "Loans or structured facilities provided by financial institutions."
              ],
              [
                "Lease / asset finance",
                "Financing structure used for specified assets or equipment."
              ],
              [
                "Project-specific funding",
                "Funding arranged around the cash flows, sponsors or structure of a particular project."
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-strategic-financial-management-project-analysis",
            "caption": "Project-analysis context linking project feasibility, financial evaluation, cost, funding and investment decision considerations."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Project",
        "definition": "Temporary endeavour undertaken to create a defined product, service or result."
      },
      {
        "term": "Project Life Cycle",
        "definition": "Sequence of stages through which a project progresses from initiation to closure."
      },
      {
        "term": "Deliverable",
        "definition": "Defined, verifiable output produced by project work."
      },
      {
        "term": "Project Management",
        "definition": "Application of knowledge, skills, methods and tools to project activities to achieve requirements."
      },
      {
        "term": "Fixed Cost",
        "definition": "Cost that does not directly vary with the relevant activity level within a defined range and period."
      },
      {
        "term": "Variable Cost",
        "definition": "Cost that changes with activity, quantity or output."
      },
      {
        "term": "Project Budget",
        "definition": "Approved financial plan for allocating and controlling project resources."
      },
      {
        "term": "Project Financing",
        "definition": "Arrangements through which funds are obtained to support project expenditure."
      }
    ],
    "examQuestions": [
      "Define a project and explain its major characteristics. (Long)",
      "Discuss different types of projects with examples. (Medium)",
      "Explain the project life cycle in detail. (Long)",
      "What are project deliverables? Explain the importance of acceptance criteria and documentation. (Long)",
      "Discuss major project-management concepts and constraints. (Long)",
      "Differentiate fixed, variable, recurring and non-recurring project costs. (Long)",
      "Explain project financing and budgeting. (Long)",
      "Discuss major sources of finance for projects. (Long)"
    ]
  },
  {
    "unitNumber": 5,
    "title": "Project Scheduling, Network Analysis and Control",
    "hours": 8,
    "headings": [
      {
        "id": "project-scheduling",
        "title": "1. Project Scheduling",
        "icon": "CalendarClock",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Project scheduling converts the planned work into an ordered time plan. It identifies activities, dependencies, durations, resources, milestones and expected completion dates. Scheduling provides the basis for coordinating work and monitoring whether the project is progressing according to plan."
          },
          {
            "kind": "bullets",
            "items": [
              "Identify the activities required to produce the defined deliverables.",
              "Determine activity relationships and dependencies.",
              "Estimate activity durations using appropriate information.",
              "Assign resources and identify constraints.",
              "Sequence activities and establish milestones.",
              "Calculate or determine the expected project completion based on the chosen scheduling method.",
              "Monitor actual progress against the schedule and update the plan when approved changes occur."
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-project-and-sourcing-management-project-scheduling",
            "caption": "Project scheduling framework showing activities, dependencies, milestones, durations and schedule control."
          }
        ]
      },
      {
        "id": "wbs",
        "title": "2. Work Breakdown Structure (WBS)",
        "icon": "Network",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A Work Breakdown Structure decomposes the project scope into progressively smaller components so that the work can be planned, assigned and controlled. The WBS is deliverable-oriented: it organizes the total scope into manageable elements rather than simply listing random tasks."
          },
          {
            "kind": "table",
            "headers": [
              "WBS level",
              "Purpose"
            ],
            "rows": [
              [
                "Project",
                "Defines the complete project scope."
              ],
              [
                "Major deliverables",
                "Breaks the project into principal outputs or outcome areas."
              ],
              [
                "Sub-deliverables",
                "Further decomposes major outputs into manageable components."
              ],
              [
                "Work packages",
                "Lowest practical planning level where work, responsibility, cost and schedule can be estimated and controlled."
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "A good WBS supports scope clarity, responsibility assignment, cost estimation, scheduling and progress measurement. If a work item is outside the approved scope, it should not be silently inserted into the WBS; it should be handled through the appropriate change process."
          }
        ]
      },
      {
        "id": "gantt-chart",
        "title": "3. Gantt Chart",
        "icon": "BarChart3",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A Gantt chart is a time-oriented project schedule that displays activities against a calendar or time scale. Bars represent activity durations and can show planned or actual progress. Gantt charts are useful for communicating the schedule to project teams and stakeholders."
          },
          {
            "kind": "table",
            "headers": [
              "Gantt element",
              "Use"
            ],
            "rows": [
              [
                "Activity list",
                "Shows the scheduled work items."
              ],
              [
                "Time scale",
                "Shows days, weeks, months or another relevant period."
              ],
              [
                "Activity bar",
                "Shows planned duration and, where configured, progress."
              ],
              [
                "Milestone",
                "Marks an important event or zero-duration point."
              ],
              [
                "Dependency / linkage",
                "Can show relationships between activities in supported scheduling tools."
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-project-and-sourcing-management-project-scheduling",
            "caption": "Project schedule/Gantt representation connecting activities, durations, milestones and dependencies."
          }
        ]
      },
      {
        "id": "pert",
        "title": "4. PERT: Program Evaluation and Review Technique",
        "icon": "GitBranch",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "PERT is a network-based scheduling technique designed for projects in which activity durations are uncertain. It uses three time estimates for an activity: optimistic time (a), most likely time (m), and pessimistic time (b). The expected time is commonly calculated as: te = (a + 4m + b) / 6."
          },
          {
            "kind": "paragraph",
            "text": "PERT can also estimate activity-time uncertainty. A commonly used variance expression is: variance = ((b - a) / 6)². These calculations are useful when activity durations are uncertain and a probabilistic planning perspective is appropriate."
          },
          {
            "kind": "table",
            "headers": [
              "Estimate",
              "Meaning"
            ],
            "rows": [
              [
                "Optimistic (a)",
                "Shortest reasonable duration under favourable conditions."
              ],
              [
                "Most likely (m)",
                "Most realistic duration under normal conditions."
              ],
              [
                "Pessimistic (b)",
                "Longest reasonable duration under adverse but plausible conditions."
              ],
              [
                "Expected time (te)",
                "Weighted estimate calculated using the PERT formula."
              ]
            ]
          },
          {
            "kind": "callout",
            "tone": "formula",
            "title": "PERT formula",
            "text": "Expected activity time te = (a + 4m + b) / 6. PERT uses the most-likely estimate as the dominant component of the weighted average."
          }
        ]
      },
      {
        "id": "cpm",
        "title": "5. CPM: Critical Path Method",
        "icon": "Route",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The Critical Path Method (CPM) is a network scheduling technique that uses activity durations and dependencies to determine the sequence of activities that controls the minimum project completion time under the modeled schedule. The critical path is the longest-duration path through the network in terms of total activity time, and activities on that path have zero total float under the standard calculation assumptions."
          },
          {
            "kind": "paragraph",
            "text": "CPM commonly uses deterministic activity durations. The calculation identifies early start (ES), early finish (EF), late start (LS), late finish (LF) and float. The forward pass calculates early times; the backward pass calculates late times."
          },
          {
            "kind": "table",
            "headers": [
              "Term",
              "Meaning"
            ],
            "rows": [
              [
                "ES",
                "Earliest time an activity can start based on predecessor relationships."
              ],
              [
                "EF",
                "Earliest time an activity can finish."
              ],
              [
                "LS",
                "Latest time an activity can start without delaying the modeled project completion."
              ],
              [
                "LF",
                "Latest time an activity can finish without delaying the modeled project completion."
              ],
              [
                "Float",
                "Allowable scheduling flexibility under the calculation assumptions."
              ],
              [
                "Critical activity",
                "Activity with zero total float in the modeled critical path."
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-project-and-sourcing-management-project-scheduling",
            "caption": "Network scheduling context for CPM, including dependencies, critical path and schedule control."
          }
        ]
      },
      {
        "id": "pert-cpm-calculations",
        "title": "6. PERT and CPM Calculations",
        "icon": "Calculator",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "PERT and CPM calculations begin with a correctly defined activity network. For CPM, activity durations and precedence relationships are entered, the forward pass determines early times, and the backward pass determines late times. Float is then calculated and activities with zero total float identify the critical path under the model."
          },
          {
            "kind": "paragraph",
            "text": "For a simple activity represented by start and finish nodes, EF = ES + duration. During the backward pass, LS = LF - duration. Total float can be expressed as TF = LS - ES or TF = LF - EF. For PERT, expected activity durations can first be calculated from the three time estimates and then used in the network."
          },
          {
            "kind": "table",
            "headers": [
              "Calculation",
              "Formula"
            ],
            "rows": [
              [
                "CPM early finish",
                "EF = ES + activity duration"
              ],
              [
                "CPM late start",
                "LS = LF − activity duration"
              ],
              [
                "Total float",
                "TF = LS − ES = LF − EF"
              ],
              [
                "PERT expected time",
                "te = (a + 4m + b) / 6"
              ],
              [
                "PERT variance",
                "Variance = ((b − a) / 6)²"
              ]
            ]
          }
        ]
      },
      {
        "id": "project-control",
        "title": "7. Project Control",
        "icon": "Gauge",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Project control compares actual project performance with the approved scope, schedule, cost and quality baselines and initiates corrective action when material deviations occur. Control is continuous rather than a final-stage activity."
          },
          {
            "kind": "bullets",
            "items": [
              "Track actual progress against planned activities and milestones.",
              "Monitor actual cost against the approved cost baseline.",
              "Control scope changes through formal change-management procedures.",
              "Monitor risks, issues and dependencies.",
              "Verify deliverable quality and acceptance.",
              "Update forecasts when approved changes or actual performance alter the expected outcome.",
              "Communicate significant deviations and corrective actions to relevant stakeholders."
            ]
          }
        ]
      },
      {
        "id": "project-termination",
        "title": "8. Types of Project Termination and Termination Process",
        "icon": "Flag",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Project termination is the formal ending of a project. Termination may occur because the project has achieved its objectives, because the work is integrated into ongoing operations, because the project is stopped before completion, or because continuation is no longer justified."
          },
          {
            "kind": "table",
            "headers": [
              "Type",
              "Meaning"
            ],
            "rows": [
              [
                "Normal termination",
                "Project objectives and deliverables are completed and the project is formally closed."
              ],
              [
                "Integration / absorption",
                "Project output or team is absorbed into the ongoing organization or operations."
              ],
              [
                "Premature termination",
                "Project is stopped before planned completion."
              ],
              [
                "Perpetual / extended project",
                "Project continues through repeated extensions or becomes difficult to close as a distinct temporary effort."
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "A termination process normally includes completion or decision to stop work, acceptance or disposition of deliverables, contract and procurement closure, financial closure, release of resources, documentation, lessons learned and formal closure approval. For a prematurely terminated project, the organization should document the reason, obligations, remaining risks and treatment of incomplete work."
          },
          {
            "kind": "diagram",
            "diagramId": "mba-project-and-sourcing-management-project-lifecycle",
            "caption": "Project lifecycle and closure context showing the transition from project execution and control to formal termination and closure."
          }
        ]
      },
      {
        "id": "case-studies-project-scheduling",
        "title": "9. Project Scheduling and Control Case Studies",
        "icon": "FileText",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A scheduling case study should begin by listing activities, dependencies and durations, then construct the network and identify the schedule-controlling path. The analyst should separately examine resource constraints, risks and actual progress because a mathematically valid network does not automatically guarantee practical execution."
          },
          {
            "kind": "paragraph",
            "text": "For a control case, compare planned and actual dates, cost, scope and deliverables. Identify the source of variance, determine whether a formal change is required, and recommend corrective action with a clear owner and follow-up measure."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Project Schedule",
        "definition": "Time-based plan showing project activities, dependencies, durations, milestones and expected completion."
      },
      {
        "term": "WBS",
        "definition": "Work Breakdown Structure that decomposes total project scope into manageable deliverables and work packages."
      },
      {
        "term": "Gantt Chart",
        "definition": "Time-oriented visual representation of project activities and durations."
      },
      {
        "term": "PERT",
        "definition": "Network scheduling technique using optimistic, most likely and pessimistic time estimates for uncertain activity durations."
      },
      {
        "term": "CPM",
        "definition": "Network scheduling method used to identify the path controlling modeled project completion time and calculate activity float."
      },
      {
        "term": "Critical Path",
        "definition": "Longest-duration path through the modeled project network; its activities have zero total float under standard CPM assumptions."
      },
      {
        "term": "Float",
        "definition": "Scheduling flexibility available to an activity without delaying the modeled project completion or relevant successor constraint."
      },
      {
        "term": "Project Control",
        "definition": "Continuous comparison of actual project performance with approved baselines and corrective management of deviations."
      },
      {
        "term": "Project Termination",
        "definition": "Formal ending of a project through completion, integration, premature closure or another recognized termination route."
      }
    ],
    "examQuestions": [
      "Explain project scheduling and its major steps. (Long)",
      "What is WBS? Explain its importance in project planning and control. (Long)",
      "Explain the Gantt chart and its applications. (Medium)",
      "Explain PERT, its three time estimates and formulas. (Long)",
      "Explain CPM and the concepts of ES, EF, LS, LF and float. (Long)",
      "Solve and explain a PERT/CPM network problem using the relevant formulas. (Numerical)",
      "Discuss project control and the importance of monitoring deviations. (Long)",
      "Explain types of project termination and the termination process. (Long)",
      "How should a project scheduling and control case study be analyzed? (Medium)"
    ]
  }
];
