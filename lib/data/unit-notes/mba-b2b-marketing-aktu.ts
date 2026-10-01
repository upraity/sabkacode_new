import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for B2B Marketing (BMB MK 05)
// — AKTU, MBA IV Semester.
export const b2bMarketingUnitNotes: UnitNote[] = [
  {
    "unitNumber": 1,
    "title": "Introduction to B2B Marketing",
    "hours": 8,
    "headings": [
      {
        "id": "concept-of-business-marketing",
        "title": "1. Concept of Business Marketing and Business Market Customers",
        "icon": "FileText",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Business-to-business (B2B) marketing refers to the planning and execution of marketing activities in which the customer is an organization rather than an individual consumer buying primarily for personal use. The customer may purchase products or services for production, resale, institutional use, government functions, or supporting organizational operations."
          },
          {
            "kind": "paragraph",
            "text": "A business market therefore includes manufacturers, wholesalers, retailers, service organizations, government departments, public institutions and other organizational buyers. The purchase is usually connected with an organizational objective such as production, cost control, service delivery, resale, capacity creation or continuity of operations."
          },
          {
            "kind": "table",
            "headers": [
              "Basis",
              "B2B Market",
              "B2C Market"
            ],
            "rows": [
              [
                "Primary buyer",
                "Organization or institution",
                "Individual consumer or household"
              ],
              [
                "Purpose",
                "Production, resale, operations or institutional use",
                "Personal or household consumption"
              ],
              [
                "Decision process",
                "Often formal, multi-person and policy influenced",
                "Often shorter and more individual"
              ],
              [
                "Demand",
                "Frequently derived from downstream demand",
                "Usually directly linked to consumer need"
              ],
              [
                "Relationship",
                "Long-term relationships are often important",
                "May be transactional or relationship-based"
              ],
              [
                "Communication",
                "Technical, commercial and solution-oriented",
                "Often broader consumer-oriented communication"
              ]
            ]
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "Example",
            "text": "A manufacturer buying industrial sensors for an automated production line is a B2B transaction. The manufacturer evaluates technical specifications, reliability, service support, total cost and supplier capability rather than buying the sensor simply for personal consumption."
          }
        ]
      },
      {
        "id": "business-market-structure",
        "title": "2. Market Structure and Business Environment",
        "icon": "Network",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The structure of a business market describes how buyers, sellers, intermediaries, suppliers and complementary organizations are arranged and how they interact. A B2B marketer must understand not only the immediate customer but also the wider value chain in which the customer's purchase is embedded."
          },
          {
            "kind": "paragraph",
            "text": "The business environment includes economic conditions, technology, regulation, competition, infrastructure, social conditions and changes in customer industries. Because organizational purchases are connected with business performance, changes in any major environmental factor can alter demand, purchasing priorities and supplier evaluation."
          },
          {
            "kind": "bullets",
            "items": [
              "Micro environment: customers, competitors, suppliers, intermediaries and internal organizational capabilities.",
              "Macro environment: economic, technological, political-legal, social and ecological forces.",
              "Industry environment: entry barriers, rivalry, substitute solutions, supplier power and buyer power.",
              "Value-chain environment: upstream suppliers, focal organization, distributors, service partners and downstream customers."
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-b2b-marketing-b2b-environment",
            "caption": "B2B market environment and the organizational forces surrounding the business customer."
          }
        ]
      },
      {
        "id": "business-marketing-characteristics",
        "title": "3. Characteristics of Business Marketing",
        "icon": "Factory",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "B2B marketing has characteristics that distinguish it from consumer marketing. The number of buyers can be smaller, but individual accounts may have substantially higher transaction value. Buying decisions can involve several departments and may require specifications, tenders, negotiations, demonstrations, trials and formal approvals."
          },
          {
            "kind": "bullets",
            "items": [
              "Derived demand: demand for many industrial inputs depends on demand for the final product or service.",
              "Fewer but larger buyers: a supplier may depend on a relatively small number of major accounts.",
              "Professional buying: purchasing decisions are often handled by trained procurement or technical personnel.",
              "Multiple decision participants: users, influencers, buyers, deciders and gatekeepers may all participate.",
              "Closer supplier relationships: technical support, customization and after-sales service can be important.",
              "Complex products and specifications: products are frequently evaluated on performance, compatibility, quality and lifecycle cost.",
              "Negotiated transactions: price, delivery, credit, warranty and service terms may be negotiated.",
              "Longer decision cycles: qualification, testing and approval can make the process longer than routine consumer purchases."
            ]
          },
          {
            "kind": "table",
            "headers": [
              "Characteristic",
              "Marketing implication"
            ],
            "rows": [
              [
                "Derived demand",
                "Monitor downstream industries and final-market demand."
              ],
              [
                "Multiple participants",
                "Map the buying center and address different stakeholder requirements."
              ],
              [
                "Technical complexity",
                "Provide evidence, specifications, demonstrations and expert support."
              ],
              [
                "Large account value",
                "Invest in account management and relationship development."
              ],
              [
                "Long buying cycle",
                "Maintain engagement through evaluation, negotiation and implementation."
              ]
            ]
          }
        ]
      },
      {
        "id": "strategic-role-b2b",
        "title": "4. Strategic Role of Marketing in Business Context",
        "icon": "Target",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "In a B2B organization, marketing is not limited to promotion. It contributes to market selection, customer understanding, value proposition design, product-service decisions, channel strategy, pricing logic, relationship management and coordination with sales and operations."
          },
          {
            "kind": "paragraph",
            "text": "Strategic B2B marketing connects the external market with organizational capabilities. The marketer studies which customer segments the firm can serve profitably and sustainably, what problems those customers face, what competing solutions exist, and how the organization can create and communicate superior value."
          },
          {
            "kind": "bullets",
            "items": [
              "Market intelligence and industry analysis.",
              "Segmentation, targeting and positioning of business markets.",
              "Value proposition and solution design.",
              "Coordination with sales, product development and service teams.",
              "Customer relationship and key-account management.",
              "Channel and partner strategy.",
              "Measurement of customer, market and financial outcomes."
            ]
          }
        ]
      },
      {
        "id": "commercial-enterprises",
        "title": "5. Types of Commercial Enterprises",
        "icon": "Factory",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Commercial enterprises participate in business markets in different roles. A manufacturer produces goods or equipment; a wholesaler purchases and resells in larger quantities; a distributor provides market access and logistics; a service enterprise provides intangible or specialized services; and a retailer sells products or services closer to final users."
          },
          {
            "kind": "table",
            "headers": [
              "Enterprise type",
              "Typical B2B role"
            ],
            "rows": [
              [
                "Manufacturer",
                "Produces industrial goods, components, equipment or finished products."
              ],
              [
                "Wholesaler",
                "Purchases in volume and resells to business or retail customers."
              ],
              [
                "Distributor",
                "Provides channel access, inventory, logistics, market coverage and support."
              ],
              [
                "Service enterprise",
                "Provides professional, technical, financial, IT, logistics or other services."
              ],
              [
                "Retail enterprise",
                "Purchases merchandise and sells to final consumers; may itself be a B2B buyer."
              ],
              [
                "Institutional organization",
                "Purchases for institutional service delivery rather than ordinary resale."
              ]
            ]
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "B2B Marketing",
        "definition": "Marketing of products and services to organizations and institutions."
      },
      {
        "term": "Business Market",
        "definition": "A market in which organizations purchase for production, resale, operations or institutional purposes."
      },
      {
        "term": "Derived Demand",
        "definition": "Demand for a business input that results from demand elsewhere in the value chain."
      },
      {
        "term": "Buying Center",
        "definition": "The group of people participating in an organizational buying decision."
      },
      {
        "term": "Value Proposition",
        "definition": "A clear statement of the value a supplier intends to create for a target customer."
      },
      {
        "term": "Key Account",
        "definition": "A strategically important customer requiring focused relationship and account management."
      },
      {
        "term": "Commercial Enterprise",
        "definition": "An organization engaged in business activity such as manufacturing, distribution, wholesaling or retailing."
      },
      {
        "term": "Industrial Product",
        "definition": "A product purchased for organizational production, operations, resale or service delivery."
      }
    ],
    "examQuestions": [
      "Explain the concept of B2B marketing and discuss the nature of business market customers. (Long)",
      "Differentiate between B2B and B2C marketing on major dimensions. (Long)",
      "Explain business market structure and the major elements of the B2B environment. (Long)",
      "Discuss the characteristics of business marketing and their implications for marketers. (Long)",
      "Explain derived demand with a suitable business example. (Medium)",
      "Describe the strategic role of marketing in a business organization. (Long)",
      "Explain the major types of commercial enterprises operating in business markets. (Medium)",
      "Why are organizational buying decisions generally more complex than routine consumer purchases? (Medium)"
    ]
  },
  {
    "unitNumber": 2,
    "title": "Organizational Buying and Buyer Behaviour",
    "hours": 8,
    "headings": [
      {
        "id": "organizational-buyers-decision-process",
        "title": "1. Organizational Buyers' Decision Process",
        "icon": "GitBranch",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Organizational buying is a structured process through which an organization identifies a need, defines requirements, evaluates alternatives, selects a supplier and reviews the purchase. The exact sequence differs according to the importance, novelty and complexity of the purchase."
          },
          {
            "kind": "table",
            "headers": [
              "Stage",
              "Main activity"
            ],
            "rows": [
              [
                "Problem recognition",
                "An operational, technical, commercial or service need is identified."
              ],
              [
                "General need description",
                "The organization defines the broad requirement and desired outcome."
              ],
              [
                "Product specification",
                "Technical, quality, quantity and performance specifications are established."
              ],
              [
                "Supplier search",
                "Potential suppliers are identified and screened."
              ],
              [
                "Proposal solicitation",
                "Qualified suppliers are invited to submit proposals or quotations."
              ],
              [
                "Supplier selection",
                "Offers are evaluated against relevant criteria."
              ],
              [
                "Order-routine specification",
                "Quantities, schedules, delivery, service, payment and contractual details are finalized."
              ],
              [
                "Performance review",
                "Supplier and purchase performance are evaluated after implementation."
              ]
            ]
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "Example",
            "text": "A hospital replacing diagnostic equipment may first recognize a capacity or reliability problem, define clinical and technical requirements, invite qualified suppliers, evaluate demonstrations and service arrangements, negotiate commercial terms, install the equipment and then review supplier performance."
          },
          {
            "kind": "diagram",
            "diagramId": "mba-b2b-marketing-organizational-buying",
            "caption": "Organizational buying process and major decision participants."
          }
        ]
      },
      {
        "id": "stepwise-process-flow",
        "title": "2. Stepwise Model and Process Flow Model",
        "icon": "ArrowLeftRight",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A stepwise model presents organizational buying as a sequence of decision stages. It is useful for understanding where a supplier must provide information, evidence, negotiation support or implementation assistance. A process-flow view emphasizes movement of information and decisions between the buying organization and suppliers."
          },
          {
            "kind": "bullets",
            "items": [
              "The stepwise model is useful for stage-by-stage planning and sales forecasting.",
              "The process-flow model highlights feedback, approvals, information exchange and movement between departments.",
              "Complex purchases may move backward to earlier stages when specifications change, proposals fail to meet requirements, or new information emerges.",
              "The marketer should therefore treat organizational buying as a managed decision process rather than a single purchase event."
            ]
          },
          {
            "kind": "table",
            "headers": [
              "Decision requirement",
              "Supplier response"
            ],
            "rows": [
              [
                "Technical fit",
                "Specifications, demonstrations, tests and technical documentation."
              ],
              [
                "Commercial fit",
                "Price structure, terms, total cost and contractual clarity."
              ],
              [
                "Risk reduction",
                "References, certifications, warranties, service commitments and implementation plans."
              ],
              [
                "Operational fit",
                "Delivery capability, integration, maintenance and support."
              ],
              [
                "Relationship fit",
                "Communication quality, responsiveness and account support."
              ]
            ]
          }
        ]
      },
      {
        "id": "business-market-buyers",
        "title": "3. Characteristics of Business Markets and Buying Situations",
        "icon": "Users",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Business markets contain different buying situations. A straight rebuy involves routine repeat purchasing with relatively little change. A modified rebuy involves changes in specifications, supplier, terms or other purchase conditions. A new-task purchase involves a new or unfamiliar requirement and usually demands more information and evaluation."
          },
          {
            "kind": "table",
            "headers": [
              "Buying situation",
              "Typical decision effort",
              "Marketing implication"
            ],
            "rows": [
              [
                "Straight rebuy",
                "Lower",
                "Maintain quality, reliability, service and account relationship."
              ],
              [
                "Modified rebuy",
                "Moderate",
                "Demonstrate improvement and respond to revised requirements."
              ],
              [
                "New task",
                "High",
                "Provide education, technical evidence, risk reduction and consultative support."
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Business markets may also be characterized by concentrated demand, professional procurement, close buyer-seller relationships, formal specifications and substantial economic consequences from supplier failure."
          }
        ]
      },
      {
        "id": "government-commercial-institutional",
        "title": "4. Government as Customer; Commercial and Institutional Customers",
        "icon": "Landmark",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Government organizations can be major B2B customers because they procure goods and services for public administration, infrastructure, healthcare, education, security and other functions. Government procurement commonly involves formal procedures, eligibility requirements, specifications, documentation, transparency requirements and contractual conditions."
          },
          {
            "kind": "paragraph",
            "text": "Commercial enterprises buy for production, operations or resale. Institutional customers such as hospitals, universities and nonprofit institutions purchase to support their service mission. The marketer must understand the customer's objectives, budget structure, decision authority and procurement rules."
          },
          {
            "kind": "table",
            "headers": [
              "Customer type",
              "Primary purchase purpose",
              "Important buying consideration"
            ],
            "rows": [
              [
                "Government",
                "Public service and administration",
                "Procurement procedure, compliance, documentation, value and delivery."
              ],
              [
                "Commercial enterprise",
                "Production, operations or resale",
                "Performance, cost, continuity, profitability and supplier capability."
              ],
              [
                "Institutional customer",
                "Service delivery and institutional operations",
                "Mission fit, quality, budget, reliability and accountability."
              ]
            ]
          }
        ]
      },
      {
        "id": "buying-roles-case-studies",
        "title": "5. Buying Roles and Behaviour: Case-Study Approach",
        "icon": "Handshake",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Different people can play different roles in an organizational purchase. A user actually uses the product or service; an influencer contributes specifications or evaluation; a buyer handles purchasing or commercial negotiation; a decider has authority over the final choice; and a gatekeeper controls access to information or suppliers."
          },
          {
            "kind": "paragraph",
            "text": "Understanding these roles prevents a marketer from treating the organization as if it were a single individual. A technical user may prioritize performance, finance may emphasize total cost, procurement may focus on terms and compliance, and senior management may evaluate strategic risk."
          },
          {
            "kind": "callout",
            "tone": "case",
            "title": "Case-study method",
            "text": "When analyzing a B2B buying case, identify the buying situation, participants and their roles, the organizational need, evaluation criteria, alternatives, approval process, risks and post-purchase review. Then explain how the supplier should respond at each stage."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Organizational Buying",
        "definition": "The process through which an organization acquires goods or services."
      },
      {
        "term": "Straight Rebuy",
        "definition": "Routine repeat purchase with little or no change."
      },
      {
        "term": "Modified Rebuy",
        "definition": "Repeat purchase in which specifications, suppliers or terms are changed."
      },
      {
        "term": "New Task",
        "definition": "A new purchase situation requiring substantial information and evaluation."
      },
      {
        "term": "User",
        "definition": "Person who directly uses the purchased product or service."
      },
      {
        "term": "Influencer",
        "definition": "Participant who affects specifications or evaluation."
      },
      {
        "term": "Buyer",
        "definition": "Participant responsible for purchasing or commercial negotiation."
      },
      {
        "term": "Decider",
        "definition": "Participant with authority to select or approve the supplier or alternative."
      },
      {
        "term": "Gatekeeper",
        "definition": "Participant who controls information or access to decision makers."
      }
    ],
    "examQuestions": [
      "Explain the organizational buying decision process in detail. (Long)",
      "Explain the stepwise model of organizational buying. (Medium)",
      "Differentiate the stepwise model and process-flow model of organizational buying. (Medium)",
      "Explain straight rebuy, modified rebuy and new-task buying situations. (Long)",
      "Discuss the major characteristics of business markets. (Medium)",
      "Explain government as a customer and discuss its implications for B2B marketers. (Long)",
      "Differentiate commercial and institutional customers. (Medium)",
      "Explain the roles of user, influencer, buyer, decider and gatekeeper. (Long)",
      "How should a marketer analyze an organizational buying case study? (Medium)"
    ]
  },
  {
    "unitNumber": 3,
    "title": "B2B Marketing Strategy",
    "hours": 8,
    "headings": [
      {
        "id": "strategy-making-management",
        "title": "1. Strategy Making and Strategy Management in B2B",
        "icon": "Target",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "B2B marketing strategy determines how an organization will select markets, create customer value, compete and build sustainable relationships. Strategy making involves analysis and choice; strategy management adds implementation, monitoring and adaptation."
          },
          {
            "kind": "bullets",
            "items": [
              "Analyze customers, competitors, technology and industry forces.",
              "Define target business segments and attractive applications.",
              "Develop a differentiated value proposition.",
              "Align product, service, pricing, channel and communication decisions.",
              "Coordinate marketing with sales, operations, finance and product development.",
              "Measure outcomes and modify strategy when market conditions change."
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-b2b-marketing-b2b-strategy",
            "caption": "B2B marketing strategy process from analysis and choice to implementation and control."
          }
        ]
      },
      {
        "id": "industrial-product-strategy",
        "title": "2. Industrial Product Strategy",
        "icon": "FolderOpen",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Industrial product strategy concerns the design and management of products and solutions for organizational users. The marketer must understand functional requirements, technical specifications, quality expectations, compatibility, reliability, service support and lifecycle economics."
          },
          {
            "kind": "table",
            "headers": [
              "Product decision",
              "B2B consideration"
            ],
            "rows": [
              [
                "Core performance",
                "Whether the product solves the customer's technical or operational problem."
              ],
              [
                "Quality and reliability",
                "Consistency, durability and performance under expected conditions."
              ],
              [
                "Customization",
                "Ability to adapt configuration or specifications to customer requirements."
              ],
              [
                "Complementary services",
                "Installation, training, maintenance, technical support and warranties."
              ],
              [
                "Lifecycle value",
                "Acquisition, operation, maintenance and disposal implications."
              ],
              [
                "Product portfolio",
                "Role of each product or solution in serving segments and strategic goals."
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Product strategy should therefore be solution-oriented. In many B2B markets, customers evaluate the combined product-service package rather than the physical product alone."
          }
        ]
      },
      {
        "id": "products-services-business-markets",
        "title": "3. Managing Products and Services for Business Markets",
        "icon": "Settings",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Business-market offerings can range from standardized products to highly customized solutions and services. Management decisions include product quality, configuration, product line breadth, service levels, installation, training, maintenance, warranties and customer support."
          },
          {
            "kind": "bullets",
            "items": [
              "Standardized offerings can improve scale and consistency.",
              "Customized offerings can improve customer fit but may increase complexity and cost.",
              "Service support can reduce perceived risk and improve customer retention.",
              "Total cost of ownership may matter more than purchase price for complex industrial products.",
              "Continuous feedback from business users helps identify product improvement opportunities."
            ]
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "Example",
            "text": "An industrial equipment supplier can compete not only through machine specifications but through preventive maintenance, operator training, spare-parts availability, remote monitoring and response time. The complete solution can become the basis of differentiation."
          }
        ]
      },
      {
        "id": "business-market-channels",
        "title": "4. Managing Business Market Channels",
        "icon": "GitBranch",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A B2B channel connects the supplier with organizational customers. Channels may be direct, indirect or hybrid. Direct selling is common when products are complex, accounts are concentrated or close technical relationships are important. Intermediaries can provide geographical coverage, inventory, logistics, financing and market access."
          },
          {
            "kind": "table",
            "headers": [
              "Channel approach",
              "Advantages",
              "Challenges"
            ],
            "rows": [
              [
                "Direct",
                "Control, close customer relationship, technical selling",
                "Higher selling and service resource requirements"
              ],
              [
                "Distributor/intermediary",
                "Market coverage, inventory and local support",
                "Less direct control and possible channel conflict"
              ],
              [
                "Hybrid",
                "Flexibility across segments and accounts",
                "Requires clear channel rules and coordination"
              ]
            ]
          }
        ]
      },
      {
        "id": "strategic-tools",
        "title": "5. Strategic Tools: Growth-Share Matrix, Portfolio Matrix and Balanced Scorecard",
        "icon": "LayoutTemplate",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Strategic tools help managers structure complex information. The Growth-Share Matrix classifies business units using market growth and relative market share. It commonly distinguishes stars, cash cows, question marks and dogs as analytical categories. The tool is useful for portfolio thinking but should not be treated as the only basis for strategic decisions."
          },
          {
            "kind": "paragraph",
            "text": "A multifold portfolio matrix extends portfolio analysis by considering multiple dimensions such as market attractiveness and business strength. A Balanced Scorecard translates strategy into performance perspectives rather than relying on a single financial measure."
          },
          {
            "kind": "table",
            "headers": [
              "Tool",
              "Core dimensions",
              "Use"
            ],
            "rows": [
              [
                "Growth-Share Matrix",
                "Market growth and relative market share",
                "Portfolio allocation and strategic role."
              ],
              [
                "Multifold Portfolio Matrix",
                "Multiple attractiveness and business-strength factors",
                "More comprehensive portfolio assessment."
              ],
              [
                "Balanced Scorecard",
                "Financial, customer, internal process, learning and growth perspectives",
                "Translate strategy into measurable objectives and performance monitoring."
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-b2b-marketing-b2b-strategy",
            "caption": "Strategic planning context for portfolio and performance-management tools."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "B2B Strategy",
        "definition": "A long-term plan for selecting markets, creating value and competing in business markets."
      },
      {
        "term": "Industrial Product Strategy",
        "definition": "Strategic management of products and solutions designed for organizational users."
      },
      {
        "term": "Channel Strategy",
        "definition": "Choice and management of routes through which offerings reach business customers."
      },
      {
        "term": "Growth-Share Matrix",
        "definition": "Portfolio tool using market growth and relative market share."
      },
      {
        "term": "Star",
        "definition": "High-growth, high-relative-share category in the Growth-Share Matrix."
      },
      {
        "term": "Cash Cow",
        "definition": "Low-growth, high-relative-share category that may generate substantial cash."
      },
      {
        "term": "Question Mark",
        "definition": "High-growth, low-relative-share category requiring strategic evaluation."
      },
      {
        "term": "Balanced Scorecard",
        "definition": "Strategic performance framework covering financial and non-financial perspectives."
      },
      {
        "term": "Portfolio",
        "definition": "Collection of products, business units or offerings managed as a group."
      }
    ],
    "examQuestions": [
      "Explain the process of strategy making and strategy management in B2B marketing. (Long)",
      "Discuss industrial product strategy and the factors that influence it. (Long)",
      "Explain how products and services should be managed for business markets. (Long)",
      "Discuss direct, indirect and hybrid B2B marketing channels. (Medium)",
      "Explain the Growth-Share Matrix and its strategic categories. (Long)",
      "Explain the multifold portfolio matrix and its usefulness. (Medium)",
      "Discuss the Balanced Scorecard as a strategic management tool. (Long)",
      "Why should strategic tools be used as aids to managerial judgment rather than as automatic decision rules? (Medium)",
      "Explain the role of case studies in B2B strategy formulation. (Short)"
    ]
  },
  {
    "unitNumber": 4,
    "title": "Segmentation, Targeting & Positioning (STP) in B2B Markets",
    "hours": 8,
    "headings": [
      {
        "id": "market-segmentation",
        "title": "1. Market Segmentation in B2B Markets",
        "icon": "Layers",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "B2B market segmentation divides a broad organizational market into groups of customers with sufficiently similar needs, characteristics or buying behaviour to justify differentiated marketing approaches. Segmentation is useful because business customers are not homogeneous: industries, organization sizes, technologies, applications and purchasing practices can differ substantially."
          },
          {
            "kind": "table",
            "headers": [
              "Segmentation basis",
              "Illustration"
            ],
            "rows": [
              [
                "Industry/vertical",
                "Automotive, healthcare, banking, construction, education."
              ],
              [
                "Organization size",
                "Small, medium and large enterprises."
              ],
              [
                "Geography",
                "Region, country, industrial cluster or service area."
              ],
              [
                "Technology/application",
                "Technology platform, production process or usage requirement."
              ],
              [
                "Buying behaviour",
                "Purchase frequency, supplier preference, procurement structure or buying situation."
              ],
              [
                "Needs/benefits",
                "Reliability, customization, speed, cost reduction, compliance or service support."
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Effective segmentation requires measurable and actionable differences. A segment should be identifiable, sufficiently meaningful, reachable and compatible with the organization's capabilities."
          }
        ]
      },
      {
        "id": "targeting",
        "title": "2. Targeting in B2B Markets",
        "icon": "Crosshair",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Targeting is the process of evaluating market segments and deciding which segments the organization will serve. B2B firms may use concentrated targeting for a specialized niche, differentiated targeting for several segments with distinct offers, or broader coverage where customer needs are relatively similar."
          },
          {
            "kind": "bullets",
            "items": [
              "Assess segment attractiveness and expected demand.",
              "Evaluate competitive intensity and customer bargaining conditions.",
              "Check the firm's technical, financial, service and channel capabilities.",
              "Estimate the strategic fit with organizational objectives.",
              "Select segments that can be served effectively and sustainably."
            ]
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Important distinction",
            "text": "Segmentation identifies meaningful groups; targeting selects the groups the firm intends to serve. Targeting therefore follows segmentation rather than replacing it."
          }
        ]
      },
      {
        "id": "positioning",
        "title": "3. Positioning Strategies in B2B",
        "icon": "Compass",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Positioning defines how the organization wants a target business customer to understand and distinguish its offering relative to alternatives. Effective B2B positioning is normally supported by credible evidence such as performance data, service capability, certifications, reliability, implementation expertise, total cost or measurable business outcomes."
          },
          {
            "kind": "table",
            "headers": [
              "Positioning basis",
              "Possible B2B promise"
            ],
            "rows": [
              [
                "Performance",
                "Superior or dependable technical performance."
              ],
              [
                "Cost/value",
                "Lower total cost or stronger economic value."
              ],
              [
                "Service",
                "Faster response, installation, maintenance or support."
              ],
              [
                "Specialization",
                "Deep expertise in a particular industry or application."
              ],
              [
                "Innovation",
                "Advanced technology or solution capability."
              ],
              [
                "Reliability/risk reduction",
                "Consistent quality, compliance and dependable supply."
              ]
            ]
          }
        ]
      },
      {
        "id": "b2b-advertising",
        "title": "4. B2B Advertising Techniques",
        "icon": "Megaphone",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "B2B advertising communicates value to professional audiences. Because organizational buyers often require detailed evidence, B2B communication may combine advertising with technical content, trade publications, webinars, demonstrations, events, case studies, sales presentations and digital lead-generation activities."
          },
          {
            "kind": "bullets",
            "items": [
              "Use clear business outcomes rather than only broad promotional claims.",
              "Support technical or performance claims with credible evidence.",
              "Tailor messages to the roles of users, influencers, procurement and senior decision makers.",
              "Use case studies and application examples to reduce perceived risk.",
              "Coordinate advertising with personal selling, digital marketing and relationship management."
            ]
          }
        ]
      },
      {
        "id": "positioning-process",
        "title": "5. Positioning and STP Process",
        "icon": "ArrowLeftRight",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The STP process can be summarized as: understand the market → segment customers → evaluate segments → select target segments → define desired position → design the value proposition → communicate and deliver the position → monitor customer response and competitive changes."
          },
          {
            "kind": "diagram",
            "diagramId": "mba-b2b-marketing-b2b-stp",
            "caption": "B2B segmentation, targeting and positioning process."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Segmentation",
        "definition": "Division of a heterogeneous business market into meaningful customer groups."
      },
      {
        "term": "Targeting",
        "definition": "Evaluation and selection of market segments to serve."
      },
      {
        "term": "Positioning",
        "definition": "Designing the desired place of an offering in the target customer's perception relative to alternatives."
      },
      {
        "term": "Firmographics",
        "definition": "Organizational characteristics such as industry, size and location used for segmentation."
      },
      {
        "term": "Niche",
        "definition": "A narrowly defined segment with specialized requirements."
      },
      {
        "term": "Value Proposition",
        "definition": "The specific combination of benefits and value offered to a target customer."
      },
      {
        "term": "Differentiation",
        "definition": "Creating meaningful differences in an offering that customers can recognize and value."
      },
      {
        "term": "B2B Advertising",
        "definition": "Paid or controlled communication designed to influence organizational audiences."
      }
    ],
    "examQuestions": [
      "Explain the concept and process of market segmentation in B2B markets. (Long)",
      "Discuss the major bases of B2B market segmentation with examples. (Long)",
      "Explain targeting and the criteria used to select business-market segments. (Long)",
      "What is positioning? Explain positioning strategies in B2B markets. (Long)",
      "Explain B2B advertising techniques and their distinctive characteristics. (Medium)",
      "Differentiate segmentation, targeting and positioning. (Medium)",
      "Explain the complete STP process for a B2B organization. (Long)",
      "How can a B2B firm use technical evidence and case studies to strengthen its positioning? (Medium)"
    ]
  },
  {
    "unitNumber": 5,
    "title": "B2B Marketing Communication and Channels",
    "hours": 8,
    "headings": [
      {
        "id": "b2b-advertising-channels",
        "title": "1. B2B Advertising Channels and Communication Strategies",
        "icon": "Mail",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "B2B communication uses a combination of channels because organizational buying involves multiple participants and different information requirements. Communication may be directed toward awareness, technical understanding, lead generation, supplier evaluation, relationship development or customer retention."
          },
          {
            "kind": "table",
            "headers": [
              "Channel",
              "Typical B2B use"
            ],
            "rows": [
              [
                "Trade publications",
                "Industry-specific awareness and technical information."
              ],
              [
                "Email and digital communication",
                "Lead nurturing, product information and account communication."
              ],
              [
                "Website/content",
                "Technical resources, product information, case studies and credibility."
              ],
              [
                "Trade shows and exhibitions",
                "Demonstration, networking, lead generation and relationship building."
              ],
              [
                "Webinars/events",
                "Education, product demonstrations and thought leadership."
              ],
              [
                "Personal selling",
                "Complex solution presentation, negotiation and relationship management."
              ],
              [
                "Case studies",
                "Evidence of application, results and customer experience."
              ]
            ]
          }
        ]
      },
      {
        "id": "trade-shows-exhibitions",
        "title": "2. Trade Shows, Exhibitions and Business Meets",
        "icon": "Presentation",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Trade shows and exhibitions bring buyers, suppliers, technology providers and industry participants together. They can support lead generation, competitive intelligence, product demonstration, relationship building and market education."
          },
          {
            "kind": "bullets",
            "items": [
              "Define target visitor and account objectives before the event.",
              "Present clear product or solution demonstrations.",
              "Collect and qualify leads rather than only counting visitors.",
              "Coordinate booth activity with sales and technical teams.",
              "Follow up quickly with relevant information and next steps.",
              "Measure outcomes through qualified leads, meetings, opportunities and customer engagement."
            ]
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "Example",
            "text": "An industrial automation company can use an exhibition to demonstrate a production-monitoring solution, conduct live technical discussions, collect qualified plant-manager leads and schedule post-event demonstrations for high-potential accounts."
          }
        ]
      },
      {
        "id": "sales-force-management",
        "title": "3. Sales Force Management in B2B",
        "icon": "Users",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Sales force management includes planning sales territories, assigning accounts, recruiting and training salespeople, setting objectives, designing compensation, supervising performance and evaluating results. B2B selling often requires consultative selling because customers may need technical diagnosis and solution design rather than a simple product pitch."
          },
          {
            "kind": "table",
            "headers": [
              "Sales management area",
              "Key consideration"
            ],
            "rows": [
              [
                "Territory design",
                "Workload, geography, account potential and service requirements."
              ],
              [
                "Account assignment",
                "Fit between salesperson capability and customer/account needs."
              ],
              [
                "Training",
                "Product knowledge, industry knowledge, negotiation, solution selling and communication."
              ],
              [
                "Compensation",
                "Alignment between incentives and desired sales behaviours and outcomes."
              ],
              [
                "Performance evaluation",
                "Revenue, margin, account growth, customer retention, pipeline quality and service quality."
              ],
              [
                "Coordination",
                "Integration with marketing, product, operations and customer service."
              ]
            ]
          }
        ]
      },
      {
        "id": "channels-participants",
        "title": "4. Business Marketing Channels and Participants",
        "icon": "Network",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Business marketing channels may involve manufacturers, agents, distributors, dealers, system integrators, service providers and logistics partners. Each participant can add value through market access, inventory, technical support, financing, installation, service or relationship management."
          },
          {
            "kind": "paragraph",
            "text": "Channel design should consider customer expectations, product complexity, geographic coverage, required service levels, channel economics and potential conflict. Clear responsibilities and communication mechanisms reduce duplication and conflict."
          }
        ]
      },
      {
        "id": "channel-design-management",
        "title": "5. Channel Design and Management Decisions",
        "icon": "Settings",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Channel design decisions include selecting direct or indirect routes, determining the number and type of intermediaries, assigning territories, defining responsibilities, setting service standards and developing performance measures. Channel management then involves recruitment, training, motivation, coordination and conflict resolution."
          },
          {
            "kind": "bullets",
            "items": [
              "Define the target customer's buying and service requirements.",
              "Identify channel alternatives capable of meeting those requirements.",
              "Compare coverage, cost, control and service implications.",
              "Set clear roles for each channel participant.",
              "Establish performance standards and review mechanisms.",
              "Manage channel conflict through communication, role clarity and aligned incentives."
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-b2b-marketing-b2b-channels-communication",
            "caption": "B2B communication channels, sales interaction and channel participants."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Trade Show",
        "definition": "Industry event where organizations demonstrate offerings and interact with business customers."
      },
      {
        "term": "Lead Generation",
        "definition": "Process of identifying potential business customers and opportunities."
      },
      {
        "term": "Personal Selling",
        "definition": "Direct interaction between sales personnel and organizational buyers."
      },
      {
        "term": "Consultative Selling",
        "definition": "Selling approach based on diagnosing customer needs and proposing appropriate solutions."
      },
      {
        "term": "Sales Territory",
        "definition": "Geographic, account-based or industry-based area assigned to a sales role."
      },
      {
        "term": "Channel Member",
        "definition": "An intermediary or partner participating in the route to the business customer."
      },
      {
        "term": "Channel Conflict",
        "definition": "Disagreement among channel participants about roles, pricing, territories or customer ownership."
      },
      {
        "term": "Channel Management",
        "definition": "Planning and controlling relationships and performance within a marketing channel."
      }
    ],
    "examQuestions": [
      "Explain B2B advertising channels and communication strategies. (Long)",
      "Discuss the role of trade shows, exhibitions and business meets in B2B marketing. (Medium)",
      "Explain sales force management and its major functions in B2B organizations. (Long)",
      "What is consultative selling? Explain its relevance to business markets. (Medium)",
      "Explain business marketing channels and identify major channel participants. (Long)",
      "Discuss channel design and management decisions in B2B marketing. (Long)",
      "What is channel conflict? Explain ways to manage it. (Medium)",
      "Explain how B2B communication should be integrated across digital, events and personal selling channels. (Long)"
    ]
  }
];
