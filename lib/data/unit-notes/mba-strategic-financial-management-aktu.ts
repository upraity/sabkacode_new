import { UnitNote } from "@/types";

// Detailed, syllabus-aligned notes for Strategic Financial Management (BMB FM 05)
// Dr. B. R. Ambedkar University, Agra (DBRAU), MBA IV Semester.
export const MbaStrategicFinancialManagementUnitNotes: UnitNote[] = [
  {
    "unitNumber": 1,
    "title": "Strategic Financial Management",
    "hours": 8,
    "headings": [
      {
        "id": "sfm-objectives-functions",
        "title": "1. Objectives and Functions of Strategic Financial Management",
        "icon": "Target",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Strategic Financial Management (SFM) applies financial management principles to long-term strategic decisions. It connects financial analysis with corporate strategy so that decisions about investment, financing, capital structure, dividends and growth are evaluated in terms of value creation, risk and sustainability."
          },
          {
            "kind": "paragraph",
            "text": "The central objective of financial management is generally expressed as maximizing the long-term value of the firm for its owners, while recognizing the constraints imposed by risk, liquidity, governance, law, stakeholders and the firm's operating environment. Strategic financial management therefore looks beyond short-term accounting profit and asks how a decision changes future cash flows, risk and the value of the business."
          },
          {
            "kind": "table",
            "headers": [
              "Function",
              "Strategic question"
            ],
            "rows": [
              [
                "Investment decisions",
                "Where should the firm deploy capital to create acceptable value?"
              ],
              [
                "Financing decisions",
                "How should investments be financed and at what cost and risk?"
              ],
              [
                "Capital structure",
                "What mix of debt and equity is appropriate for the firm's risk and cash-flow profile?"
              ],
              [
                "Dividend decisions",
                "How should distributable cash be balanced between shareholders and reinvestment?"
              ],
              [
                "Working capital",
                "How can liquidity and operating efficiency be maintained without excessive capital lock-up?"
              ],
              [
                "Risk management",
                "Which financial risks matter and how should they be identified, measured and managed?"
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-strategic-financial-management-sfm-framework",
            "caption": "Strategic financial management framework linking investment, financing, capital structure, dividend, risk and value decisions."
          }
        ]
      },
      {
        "id": "security-valuation",
        "title": "2. Valuation of Securities",
        "icon": "LineChart",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Security valuation estimates the economic worth of a financial claim from the cash flows expected to be received by its holder and the return required for bearing risk. The syllabus specifically includes approaches to corporate valuation and equity valuation using cash flow and dividend-earning approaches."
          },
          {
            "kind": "paragraph",
            "text": "The fundamental logic of valuation is the present value principle: a future cash flow is worth less today than the same nominal amount received immediately because of time value of money and risk. The valuation model therefore depends on expected cash flows, their timing, growth and the appropriate discount rate."
          },
          {
            "kind": "table",
            "headers": [
              "Security / approach",
              "Core valuation idea"
            ],
            "rows": [
              [
                "Bond / debt security",
                "Present value of contractual interest and principal cash flows discounted at an appropriate required return."
              ],
              [
                "Equity – dividend approach",
                "Present value of expected future dividends, subject to assumptions about dividend growth and required return."
              ],
              [
                "Equity – cash-flow approach",
                "Present value of expected cash flows available to relevant capital providers or equity holders, depending on the model used."
              ],
              [
                "Corporate valuation",
                "Value of the operating business and relevant claims using expected future cash flows and an appropriate discount rate."
              ]
            ]
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Core principle",
            "text": "Present Value = Future Cash Flow ÷ (1 + required return)^number of periods. For multiple cash flows, discount each relevant cash flow and sum the present values."
          }
        ]
      },
      {
        "id": "equity-valuation-cashflow",
        "title": "3. Equity Valuation: Cash Flow and Dividend-Earning Approaches",
        "icon": "IndianRupee",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Equity valuation can be approached through dividends or through broader cash flows. A dividend model focuses on distributions expected by shareholders. A cash-flow approach focuses on cash generated by the business and the claims against it, allowing valuation even when dividends do not closely reflect the firm's underlying cash-generating capacity."
          },
          {
            "kind": "paragraph",
            "text": "The dividend approach is especially intuitive for mature firms with stable dividend policies. A simple constant-growth form is P0 = D1 / (Ke − g), where P0 is current value, D1 is expected dividend next period, Ke is required return on equity and g is the sustainable growth rate, with the usual condition Ke > g."
          },
          {
            "kind": "paragraph",
            "text": "Cash-flow-based valuation is more flexible for firms whose dividend policy differs from their economic capacity to generate cash. The analyst must forecast operating performance, investment requirements, working-capital needs and financing-related cash flows consistently with the selected valuation framework."
          },
          {
            "kind": "table",
            "headers": [
              "Issue",
              "Dividend approach",
              "Cash-flow approach"
            ],
            "rows": [
              [
                "Primary forecast",
                "Dividends",
                "Relevant cash flows generated by the business/equity"
              ],
              [
                "Best suited to",
                "Stable dividend-paying firms",
                "Firms where dividends do not represent underlying cash generation well"
              ],
              [
                "Main sensitivity",
                "Dividend growth and required return",
                "Cash-flow forecasts, growth, investment and discount rate"
              ],
              [
                "Risk of misuse",
                "Assuming an inappropriate growth pattern",
                "Overestimating cash flows or using an inconsistent discount rate"
              ]
            ]
          }
        ]
      },
      {
        "id": "valuation-factors",
        "title": "4. Factors Influencing Valuation and Investment Decisions",
        "icon": "Scale",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Valuation is affected by both firm-specific and market-wide factors. Expected revenue growth, operating margins, reinvestment, working capital, taxes, financing risk, interest rates, inflation, industry conditions and competitive position can all influence estimated value."
          },
          {
            "kind": "bullets",
            "items": [
              "Expected cash flows: higher sustainable cash flows generally increase value, all else equal.",
              "Growth: growth creates value when the expected return on incremental investment exceeds the relevant cost of capital.",
              "Risk: higher perceived risk generally requires a higher return, reducing present value when cash flows are unchanged.",
              "Interest rates: changes in market rates can affect discount rates, borrowing costs and asset valuations.",
              "Capital structure: debt can alter financing cost and financial risk and may affect the overall cost of capital.",
              "Liquidity and working capital: inefficient capital lock-up can reduce free cash generation.",
              "Strategic position: competitive advantage, technology, regulation and industry structure can alter long-term cash-flow expectations."
            ]
          }
        ]
      },
      {
        "id": "capital-budgeting-strategic",
        "title": "5. Strategic Role of Capital Budgeting",
        "icon": "Calculator",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Capital budgeting is the process of evaluating long-term investment proposals such as new capacity, technology, product development, expansion, replacement and major strategic projects. It is strategic because such investments commit capital for several years and can materially influence the firm's competitive position."
          },
          {
            "kind": "paragraph",
            "text": "Relevant cash flows should include incremental after-tax cash flows caused by the project. Analysts commonly consider initial investment, operating cash flows, changes in working capital, terminal or salvage value and opportunity costs. Financing costs should not be double-counted when the discount rate already incorporates the financing opportunity cost."
          },
          {
            "kind": "table",
            "headers": [
              "Technique",
              "Basic interpretation"
            ],
            "rows": [
              [
                "NPV",
                "Present value of relevant future cash flows minus initial investment. Positive NPV indicates value creation under the model assumptions."
              ],
              [
                "IRR",
                "Discount rate at which the project's NPV becomes zero; compare carefully with the required return."
              ],
              [
                "Payback period",
                "Time required to recover the initial investment; useful for liquidity/risk screening but ignores some later cash flows."
              ],
              [
                "Profitability Index",
                "Present value of future cash inflows relative to the initial investment; useful under capital rationing."
              ],
              [
                "Accounting measures",
                "Use accounting profit measures rather than cash-flow value; useful for supplementary performance analysis but not a substitute for NPV."
              ]
            ]
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Strategic Financial Management",
        "definition": "Long-term financial decision-making integrated with corporate strategy, value creation and risk management."
      },
      {
        "term": "Security Valuation",
        "definition": "Estimation of the economic value of a financial claim from expected cash flows and required return."
      },
      {
        "term": "Corporate Valuation",
        "definition": "Estimation of the value of a business based on expected future economic cash flows and risk."
      },
      {
        "term": "Discount Rate",
        "definition": "Required rate used to convert future cash flows into present value."
      },
      {
        "term": "Capital Budgeting",
        "definition": "Evaluation and selection of long-term investment projects."
      },
      {
        "term": "NPV",
        "definition": "Present value of relevant future cash flows less the initial investment."
      },
      {
        "term": "IRR",
        "definition": "Discount rate at which a project's NPV equals zero."
      }
    ],
    "examQuestions": [
      "Define Strategic Financial Management and explain its objectives and functions. (Long)",
      "Explain the fundamental principle of security valuation. (Long)",
      "Discuss corporate valuation and equity valuation using cash-flow and dividend-earning approaches. (Long)",
      "Explain the factors influencing security valuation and investment decisions. (Long)",
      "Explain the strategic importance of capital budgeting. (Long)",
      "Differentiate NPV, IRR, Payback Period and Profitability Index. (Long)"
    ]
  },
  {
    "unitNumber": 2,
    "title": "Capital Structure",
    "hours": 8,
    "headings": [
      {
        "id": "capital-structure-factors",
        "title": "1. Factors Affecting Capital Structure",
        "icon": "Scale",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Capital structure refers to the mix of long-term financing sources used by a firm, particularly debt and equity. The appropriate structure depends on the firm's operating risk, cash-flow stability, asset characteristics, tax environment, growth opportunities, financial flexibility and market conditions."
          },
          {
            "kind": "table",
            "headers": [
              "Factor",
              "Influence on capital structure"
            ],
            "rows": [
              [
                "Business risk",
                "Higher operating risk generally reduces the firm's ability to safely add fixed financial obligations."
              ],
              [
                "Cash-flow stability",
                "Stable and predictable cash flows can support greater debt capacity than highly volatile cash flows."
              ],
              [
                "Asset structure",
                "Assets with reliable value and collateral characteristics can affect borrowing capacity."
              ],
              [
                "Growth opportunities",
                "High-growth firms may need flexibility and may avoid excessive fixed claims."
              ],
              [
                "Tax considerations",
                "Interest deductibility can affect the after-tax cost of debt where applicable."
              ],
              [
                "Control considerations",
                "Debt can raise funds without issuing new equity, but increases fixed obligations."
              ],
              [
                "Market conditions",
                "Interest rates, investor sentiment and credit conditions affect financing choices."
              ],
              [
                "Financial flexibility",
                "The firm may preserve borrowing capacity for future opportunities or shocks."
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-strategic-financial-management-capital-structure",
            "caption": "Capital structure decision framework showing debt-equity choice and major influencing factors."
          }
        ]
      },
      {
        "id": "capital-structure-theories",
        "title": "2. Capital Structure Theories",
        "icon": "BookOpen",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Capital structure theories examine whether and how the mix of debt and equity affects firm value and cost of capital. Important perspectives include the Net Income approach, Net Operating Income approach, traditional approach and the Modigliani–Miller framework under different assumptions."
          },
          {
            "kind": "table",
            "headers": [
              "Theory / approach",
              "Central proposition"
            ],
            "rows": [
              [
                "Net Income approach",
                "Under its assumptions, greater use of relatively cheaper debt can reduce overall cost of capital and increase firm value."
              ],
              [
                "Net Operating Income approach",
                "Capital structure does not change total firm value because changes in financing cost offset changes in debt-equity proportions."
              ],
              [
                "Traditional approach",
                "An optimal range may exist: moderate debt can reduce cost of capital, but excessive leverage increases financial risk and eventually raises overall cost."
              ],
              [
                "Modigliani–Miller without taxes",
                "Under idealized assumptions, financing mix is irrelevant to firm value."
              ],
              [
                "Modigliani–Miller with corporate taxes",
                "Interest tax effects can make debt valuable in the theoretical framework, subject to the assumptions and limitations of the model."
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "These theories are analytical models rather than universal rules. Real firms face taxes, bankruptcy and distress costs, agency problems, information asymmetry, transaction costs and financing constraints."
          }
        ]
      },
      {
        "id": "operating-financial-leverage",
        "title": "3. Operating and Financial Leverage",
        "icon": "TrendingUp",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Operating leverage arises from fixed operating costs. When a firm has substantial fixed operating costs, a change in sales can cause a proportionately larger change in operating profit. Financial leverage arises from fixed financial charges such as interest. It can magnify the effect of changes in operating profit on earnings available to equity holders."
          },
          {
            "kind": "table",
            "headers": [
              "Leverage",
              "Source of fixed cost",
              "Main effect"
            ],
            "rows": [
              [
                "Operating leverage",
                "Fixed operating costs",
                "Amplifies the response of EBIT to changes in sales."
              ],
              [
                "Financial leverage",
                "Interest and other fixed financing charges",
                "Amplifies the response of EPS or equity earnings to changes in EBIT."
              ],
              [
                "Combined leverage",
                "Both operating and financial fixed commitments",
                "Magnifies the overall sensitivity of equity earnings to sales changes."
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "A high degree of leverage can increase potential returns in favourable conditions but also increases downside sensitivity. Strategic financial management therefore evaluates leverage together with business risk and cash-flow capacity."
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Core measures",
            "text": "Degree of Operating Leverage (DOL) = % change in EBIT ÷ % change in sales. Degree of Financial Leverage (DFL) = % change in EPS ÷ % change in EBIT. Combined leverage links the two effects."
          }
        ]
      },
      {
        "id": "roe-roi-analysis",
        "title": "4. ROE and ROI Analysis",
        "icon": "LineChart",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Return on Equity (ROE) measures the return generated on shareholders' equity. Return on Investment (ROI) is a broader return measure whose exact definition can vary by analytical context. In strategic financial analysis, the definitions used should be stated clearly before comparison."
          },
          {
            "kind": "paragraph",
            "text": "ROE can be decomposed through the DuPont framework into profitability, asset utilization and financial leverage. A common three-step expression is ROE = Net Profit Margin × Total Asset Turnover × Equity Multiplier. This helps identify whether changes in ROE arise from margins, efficiency or leverage."
          },
          {
            "kind": "table",
            "headers": [
              "ROE driver",
              "Meaning"
            ],
            "rows": [
              [
                "Net profit margin",
                "Profit generated from each unit of sales."
              ],
              [
                "Asset turnover",
                "Sales generated from the asset base."
              ],
              [
                "Equity multiplier",
                "Relationship between assets and equity; reflects financial leverage."
              ],
              [
                "ROE",
                "Overall return generated for equity holders."
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "ROI-style measures can support project, divisional or investment analysis. The analyst should avoid comparing ROI figures calculated on inconsistent definitions of investment or profit."
          }
        ]
      },
      {
        "id": "capital-structure-practical",
        "title": "5. Strategic Capital Structure Decision",
        "icon": "Target",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A practical capital-structure decision balances the benefits of debt with the costs and risks associated with fixed financial obligations. Management should consider target leverage, debt maturity, repayment capacity, interest-rate exposure, refinancing risk, credit quality and access to equity capital."
          },
          {
            "kind": "bullets",
            "items": [
              "Estimate sustainable operating cash flows.",
              "Assess debt capacity and downside scenarios.",
              "Compare after-tax financing costs where relevant.",
              "Evaluate effects on financial risk and credit standing.",
              "Preserve sufficient liquidity and financial flexibility.",
              "Consider the impact on control, ownership dilution and shareholder returns.",
              "Review the structure as business conditions and strategy change."
            ]
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Capital Structure",
        "definition": "Long-term financing mix, especially debt and equity, used by a firm."
      },
      {
        "term": "Financial Leverage",
        "definition": "Use of fixed financial obligations that magnifies the effect of operating performance on equity earnings."
      },
      {
        "term": "Operating Leverage",
        "definition": "Sensitivity of operating profit to changes in sales arising from fixed operating costs."
      },
      {
        "term": "DOL",
        "definition": "Degree of Operating Leverage; percentage change in EBIT relative to percentage change in sales."
      },
      {
        "term": "DFL",
        "definition": "Degree of Financial Leverage; percentage change in EPS relative to percentage change in EBIT."
      },
      {
        "term": "ROE",
        "definition": "Return generated on shareholders' equity."
      },
      {
        "term": "ROI",
        "definition": "Return measure relating an investment return to the investment base; definition depends on context."
      }
    ],
    "examQuestions": [
      "Explain the factors affecting a firm's capital structure. (Long)",
      "Discuss major theories of capital structure. (Long)",
      "Explain operating, financial and combined leverage with suitable examples. (Long)",
      "Differentiate operating leverage and financial leverage. (Medium)",
      "Explain ROE and its DuPont analysis. (Long)",
      "Discuss the strategic process of deciding an appropriate capital structure. (Long)"
    ]
  },
  {
    "unitNumber": 3,
    "title": "Dividend Policy",
    "hours": 8,
    "headings": [
      {
        "id": "dividend-factors",
        "title": "1. Factors Affecting Dividend Decisions",
        "icon": "IndianRupee",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Dividend policy concerns decisions about how much of distributable earnings should be paid to shareholders and how much should be retained for reinvestment and financial flexibility. A firm's dividend decision is connected with its investment opportunities, cash generation, financing needs and shareholder expectations."
          },
          {
            "kind": "table",
            "headers": [
              "Factor",
              "Implication"
            ],
            "rows": [
              [
                "Investment opportunities",
                "Strong positive-NPV opportunities may support greater retention."
              ],
              [
                "Cash-flow availability",
                "Accounting profit alone does not determine the cash available for distribution."
              ],
              [
                "Earnings stability",
                "Stable earnings can support more predictable dividend patterns."
              ],
              [
                "Liquidity",
                "Dividend payments require adequate cash or financing capacity."
              ],
              [
                "Access to capital markets",
                "Easy access to external financing can affect retention needs."
              ],
              [
                "Shareholder preferences",
                "Different investors may prefer current income or reinvestment and growth."
              ],
              [
                "Debt covenants",
                "Financing agreements may restrict distributions under specified conditions."
              ],
              [
                "Tax considerations",
                "Relative tax treatment can influence investor and corporate preferences."
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-strategic-financial-management-dividend-policy",
            "caption": "Dividend decision framework showing investment needs, cash availability, financing and shareholder considerations."
          }
        ]
      },
      {
        "id": "dividend-theories",
        "title": "2. Theories of Dividend Policy",
        "icon": "BookOpen",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Dividend theories examine whether dividend policy affects firm value and how investors interpret dividend payments. The major perspectives in the syllabus include dividend relevance and irrelevance approaches."
          },
          {
            "kind": "table",
            "headers": [
              "Approach",
              "Core idea"
            ],
            "rows": [
              [
                "Dividend irrelevance perspective",
                "Under idealized assumptions, firm value is determined by investment policy and cash-flow earning capacity rather than dividend payout itself."
              ],
              [
                "Dividend relevance perspectives",
                "Dividends can affect investor valuation because of preferences, information effects, uncertainty, taxes or other market considerations."
              ],
              [
                "Bird-in-hand argument",
                "This perspective emphasizes investor preference for relatively certain current dividends compared with uncertain future capital gains."
              ],
              [
                "Signalling perspective",
                "Dividend changes may communicate management's information or expectations about future earnings, subject to market interpretation."
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "These theories use different assumptions. In practical policy design, management should consider investment opportunities, cash flow, financing constraints, investor expectations and market communication rather than relying on one theory in isolation."
          }
        ]
      },
      {
        "id": "corporate-dividend-policies",
        "title": "3. Corporate Dividend Policies",
        "icon": "Table",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A corporate dividend policy establishes the broad pattern by which a company distributes earnings. Common policy descriptions include stable dividend per share, constant payout ratio, regular dividend plus occasional extra dividend, residual approaches and other flexible policies."
          },
          {
            "kind": "table",
            "headers": [
              "Policy",
              "Description"
            ],
            "rows": [
              [
                "Stable dividend",
                "Attempts to maintain a relatively predictable dividend per share."
              ],
              [
                "Constant payout ratio",
                "Pays a specified proportion of relevant earnings, causing dividends to vary with earnings."
              ],
              [
                "Regular plus extra",
                "Maintains a regular base distribution with additional payments when conditions permit."
              ],
              [
                "Residual policy",
                "Distribution is considered after financing acceptable investment opportunities with retained earnings."
              ],
              [
                "Flexible / discretionary",
                "Dividend varies according to liquidity, investment requirements and broader financial conditions."
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "The choice depends on corporate objectives, investment pipeline, cash-flow stability, investor expectations and financing access. The policy should also be communicated consistently so that investors understand the basis of distributions."
          }
        ]
      },
      {
        "id": "dividend-stability",
        "title": "4. Dividend Stability and Shareholder Expectations",
        "icon": "TrendingUp",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Dividend stability refers to consistency in dividend payments over time. Investors may value predictability, but maintaining an unsustainably high dividend can weaken liquidity or force expensive external financing. A sound policy balances stability with the firm's actual earning and cash-flow capacity."
          },
          {
            "kind": "paragraph",
            "text": "Management should distinguish between a temporary decline in earnings and a structural change in earning capacity. A policy designed around sustainable cash generation is generally more robust than one based solely on a short-term target."
          }
        ]
      },
      {
        "id": "dividend-strategy",
        "title": "5. Strategic Dividend Decision",
        "icon": "Target",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A strategic dividend decision begins with estimating cash available after operating requirements and investment commitments. Management then evaluates financing capacity, shareholder expectations, risk, contractual constraints and the long-term growth plan before determining the distribution approach."
          },
          {
            "kind": "bullets",
            "items": [
              "Forecast sustainable earnings and cash flows.",
              "Identify positive-NPV investment opportunities and funding requirements.",
              "Assess liquidity and debt obligations.",
              "Consider shareholder expectations and market communication.",
              "Review legal, contractual and tax constraints applicable to the firm.",
              "Choose a sustainable policy and communicate it consistently.",
              "Monitor whether the policy remains appropriate as strategy changes."
            ]
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Dividend Policy",
        "definition": "Policy governing the distribution of earnings/cash to shareholders and retention for reinvestment."
      },
      {
        "term": "Dividend Relevance",
        "definition": "View that dividend policy can affect perceived value or investor valuation under certain conditions."
      },
      {
        "term": "Dividend Irrelevance",
        "definition": "View that under idealized assumptions dividend policy does not affect firm value when investment policy is fixed."
      },
      {
        "term": "Payout Ratio",
        "definition": "Dividend distributed relative to the relevant earnings base."
      },
      {
        "term": "Residual Dividend Policy",
        "definition": "Policy under which dividends are considered after funding acceptable investment opportunities from retained earnings."
      },
      {
        "term": "Dividend Stability",
        "definition": "Consistency and predictability of dividend distributions over time."
      }
    ],
    "examQuestions": [
      "Explain the factors affecting dividend decisions. (Long)",
      "Discuss major theories of dividend policy. (Long)",
      "Explain different corporate dividend policies with examples. (Long)",
      "What is dividend stability and why can it matter to shareholders? (Medium)",
      "Discuss the strategic process of making a dividend decision. (Long)"
    ]
  },
  {
    "unitNumber": 4,
    "title": "Institutional Setup for Term Finance and Working Capital Finance",
    "hours": 8,
    "headings": [
      {
        "id": "term-finance-institutions",
        "title": "1. Institutional Setup for Term Finance",
        "icon": "Landmark",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Term finance supports medium- and long-term requirements such as expansion, modernization, replacement, infrastructure and major capital expenditure. The institutional financing ecosystem may include commercial banks, development-oriented financial institutions, specialized lenders, capital markets and other eligible financing channels depending on the nature and regulatory context of the borrower."
          },
          {
            "kind": "paragraph",
            "text": "A term-finance institution evaluates the borrower's project, repayment capacity, management quality, security, industry conditions and financial projections. The financing structure should match the economic life and cash-generation pattern of the asset being financed."
          },
          {
            "kind": "table",
            "headers": [
              "Financing consideration",
              "Why it matters"
            ],
            "rows": [
              [
                "Tenor",
                "Should broadly match the timing of expected project cash flows."
              ],
              [
                "Repayment capacity",
                "Determines whether the borrower can service principal and interest."
              ],
              [
                "Project viability",
                "Assesses whether the underlying investment is economically sound."
              ],
              [
                "Security / collateral",
                "May reduce lender exposure subject to applicable rules and enforceability."
              ],
              [
                "Financial structure",
                "Debt should be compatible with leverage and liquidity capacity."
              ],
              [
                "Monitoring",
                "Helps identify deterioration in project or borrower performance."
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-strategic-financial-management-term-finance",
            "caption": "Institutional term-finance structure and project appraisal considerations."
          }
        ]
      },
      {
        "id": "financial-services-banks-nbfcs",
        "title": "2. Banks, NBFCs and Commercial Banking",
        "icon": "Building2",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Commercial banks provide a range of working-capital and term-finance services, including loans, cash-credit arrangements, overdrafts, guarantees and other financial services. Non-Banking Financial Companies (NBFCs) provide specified financial services under the applicable regulatory framework and can be important sources of specialized credit."
          },
          {
            "kind": "paragraph",
            "text": "The suitability of a financing source depends on the purpose, tenor, cost, collateral requirements, flexibility, documentation and repayment structure. The borrower should compare the total economic cost and conditions rather than only the headline interest rate."
          },
          {
            "kind": "table",
            "headers": [
              "Source",
              "Typical role"
            ],
            "rows": [
              [
                "Commercial bank",
                "Working capital, term loans, transaction banking, guarantees and related services."
              ],
              [
                "NBFC",
                "Specialized lending and financing products within its permitted activities."
              ],
              [
                "Capital market",
                "Long-term debt or equity financing for eligible issuers and instruments."
              ],
              [
                "Development-oriented institution",
                "Long-term/project-oriented financing and support where applicable."
              ]
            ]
          }
        ]
      },
      {
        "id": "venture-capital",
        "title": "3. Venture Capital",
        "icon": "Rocket",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Venture capital is equity-oriented risk capital generally associated with businesses that have high growth potential but also substantial uncertainty. Venture investors may contribute capital, strategic guidance, networks and governance participation. Unlike conventional debt, equity financing does not normally create a fixed interest obligation, but it can dilute existing ownership and involve investor influence."
          },
          {
            "kind": "paragraph",
            "text": "The venture-capital process commonly includes sourcing opportunities, preliminary screening, due diligence, valuation and negotiation, investment, monitoring and eventual exit. The investor's return is typically linked to growth in the value of the investment."
          },
          {
            "kind": "table",
            "headers": [
              "Stage",
              "Typical activity"
            ],
            "rows": [
              [
                "Screening",
                "Initial assessment of market, team, product and growth potential."
              ],
              [
                "Due diligence",
                "Detailed review of business, technology, finance, legal matters and risks."
              ],
              [
                "Valuation / negotiation",
                "Determine investment terms, ownership and governance provisions."
              ],
              [
                "Investment / monitoring",
                "Provide capital and monitor progress and strategic milestones."
              ],
              [
                "Exit",
                "Potential realization through sale, merger, buyback, public offering or another agreed route."
              ]
            ]
          }
        ]
      },
      {
        "id": "private-equity",
        "title": "4. Private Equity",
        "icon": "IndianRupee",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Private equity refers broadly to equity investment in privately held businesses or transactions involving private ownership structures. Private-equity investors may invest in growth, expansion, buyouts, restructuring or other transactions depending on the fund strategy."
          },
          {
            "kind": "paragraph",
            "text": "Private equity differs from venture capital in typical stage and transaction profile, although the boundaries can overlap. A private-equity investor may emphasize established businesses, operational improvement, governance, capital structure and a defined exit strategy."
          },
          {
            "kind": "table",
            "headers": [
              "Dimension",
              "Typical venture-capital emphasis",
              "Typical private-equity emphasis"
            ],
            "rows": [
              [
                "Business stage",
                "Earlier/high-growth ventures are common",
                "More established businesses are common, though strategies vary"
              ],
              [
                "Risk profile",
                "High growth and high uncertainty",
                "Growth, operational improvement, buyout or restructuring depending on strategy"
              ],
              [
                "Ownership",
                "Often minority or negotiated growth investment",
                "Can involve significant or controlling ownership"
              ],
              [
                "Value creation",
                "Scaling product, market and organization",
                "Operational, strategic and financial improvement plus disciplined capital allocation"
              ]
            ]
          }
        ]
      },
      {
        "id": "commercial-banking-working-capital",
        "title": "5. Commercial Banking and Working Capital Finance",
        "icon": "Wallet",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Working capital finance supports the short-term operating cycle of a business. Firms may require financing for inventory, receivables and other operating needs while waiting for customer collections. Commercial banks can provide cash credit, overdraft, working-capital demand loans and other facilities subject to assessment and applicable arrangements."
          },
          {
            "kind": "paragraph",
            "text": "Working-capital requirements depend on the length of the operating cycle, seasonality, inventory policy, credit terms, collection efficiency, supplier terms and business growth. Excessive working capital can reduce returns through idle funds, while insufficient working capital can create liquidity and operating problems."
          },
          {
            "kind": "table",
            "headers": [
              "Working-capital component",
              "Management concern"
            ],
            "rows": [
              [
                "Inventory",
                "Avoid excessive stock while maintaining service and production continuity."
              ],
              [
                "Receivables",
                "Control credit quality and collection period."
              ],
              [
                "Cash",
                "Maintain adequate liquidity without holding unnecessarily idle balances."
              ],
              [
                "Payables",
                "Use supplier credit responsibly while preserving supplier relationships."
              ],
              [
                "Operating cycle",
                "Reduce avoidable delays from procurement through production to collection."
              ]
            ]
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Term Finance",
        "definition": "Medium- or long-term finance used for capital expenditure, expansion, modernization or other longer-duration requirements."
      },
      {
        "term": "Commercial Bank",
        "definition": "Banking institution providing deposit, lending, payment and related financial services."
      },
      {
        "term": "NBFC",
        "definition": "Non-Banking Financial Company operating under the applicable regulatory framework and providing specified financial services."
      },
      {
        "term": "Venture Capital",
        "definition": "Risk-oriented equity investment generally associated with high-growth businesses and substantial uncertainty."
      },
      {
        "term": "Private Equity",
        "definition": "Equity investment in private businesses or private transactions, often involving growth, buyouts or operational improvement."
      },
      {
        "term": "Working Capital Finance",
        "definition": "Short-term financing used to support operating-cycle requirements such as inventory and receivables."
      }
    ],
    "examQuestions": [
      "Explain the institutional setup for term finance and the factors considered by lenders. (Long)",
      "Discuss the role of commercial banks and NBFCs in business finance. (Long)",
      "Explain venture capital and its investment process. (Long)",
      "Differentiate venture capital and private equity. (Long)",
      "Explain working-capital finance and the role of commercial banks. (Long)",
      "Discuss factors determining a firm's working-capital financing requirement. (Medium)"
    ]
  },
  {
    "unitNumber": 5,
    "title": "Project Financing and Analysis",
    "hours": 8,
    "headings": [
      {
        "id": "project-meaning-concept",
        "title": "1. Project: Meaning and Concept",
        "icon": "FolderOpen",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A project is a temporary, organized undertaking designed to achieve a defined objective within specified scope, time and resource constraints. In financial management, project analysis examines whether a proposed investment is economically and financially viable and whether the risks are acceptable."
          },
          {
            "kind": "paragraph",
            "text": "Project finance and project appraisal are related but distinct. Project appraisal evaluates the economic and financial attractiveness of the investment. Project financing concerns how the investment is funded and how repayment is structured."
          }
        ]
      },
      {
        "id": "project-life-cycle",
        "title": "2. Project Life Cycle",
        "icon": "RefreshCw",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The project life cycle describes the broad stages through which a project progresses. Although terminology differs across organizations, a practical financial-management sequence is identification/conception, feasibility and appraisal, planning and financing, implementation, operation and monitoring, followed by completion or review."
          },
          {
            "kind": "table",
            "headers": [
              "Stage",
              "Major activity"
            ],
            "rows": [
              [
                "Concept / identification",
                "Define the problem, opportunity, objectives and preliminary scope."
              ],
              [
                "Feasibility / appraisal",
                "Assess technical, market, financial, legal and organizational feasibility."
              ],
              [
                "Planning / financing",
                "Develop schedule, resources, risk plan and financing structure."
              ],
              [
                "Implementation",
                "Procure, construct, install or develop the project deliverables."
              ],
              [
                "Operation / monitoring",
                "Operate the asset and compare actual performance with plans."
              ],
              [
                "Completion / review",
                "Close the project, document lessons and evaluate outcomes."
              ]
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-project-and-sourcing-management-project-lifecycle",
            "caption": "Project life-cycle diagram used for the project-analysis topic."
          }
        ]
      },
      {
        "id": "project-analysis",
        "title": "3. Project Analysis",
        "icon": "Search",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Project analysis examines whether the proposed investment is feasible and value creating. Financial analysis commonly includes initial investment, operating cash flows, working-capital requirements, taxes, terminal value and risk. The analysis should use incremental cash flows rather than accounting profit alone."
          },
          {
            "kind": "bullets",
            "items": [
              "Market analysis: demand, customers, competition, pricing and market risks.",
              "Technical analysis: technology, capacity, location, inputs, process and implementation requirements.",
              "Financial analysis: investment, cash flows, NPV, IRR, financing and sensitivity.",
              "Economic analysis: broader resource and economic effects where required.",
              "Risk analysis: key uncertainties, scenarios, sensitivity and mitigation plans.",
              "Legal and organizational analysis: approvals, ownership, contracts, management and governance requirements."
            ]
          },
          {
            "kind": "callout",
            "tone": "info",
            "title": "Project value logic",
            "text": "NPV = Present value of expected incremental project cash inflows and outflows, including relevant terminal cash flows, minus the initial investment. A positive NPV under the selected assumptions indicates value creation."
          }
        ]
      },
      {
        "id": "financial-project-cycle",
        "title": "4. Financial and Economic Analysis of Market and Non-Market Projects",
        "icon": "LineChart",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Financial analysis asks whether the project is attractive from the perspective of the project owner or investor using relevant financial cash flows. Economic analysis can consider the broader resource costs and benefits to the economy or society where such analysis is required."
          },
          {
            "kind": "table",
            "headers": [
              "Dimension",
              "Financial analysis",
              "Economic analysis"
            ],
            "rows": [
              [
                "Perspective",
                "Project owner/investor",
                "Broader economy or society"
              ],
              [
                "Prices",
                "Financial/market prices, subject to the analytical framework",
                "May use adjusted economic or shadow prices where appropriate"
              ],
              [
                "Taxes/transfers",
                "May be included according to investor cash-flow perspective",
                "Transfers may be treated differently because they may not represent resource costs to the economy"
              ],
              [
                "Main question",
                "Does the investment create financial value?",
                "Does the project use resources efficiently from the wider perspective?"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Market projects are generally assessed around commercial demand and financial returns. Non-market or public projects may require broader cost-benefit analysis because benefits may not be captured through market prices alone."
          }
        ]
      },
      {
        "id": "project-risk-management",
        "title": "5. Project Risk, Uncertainty and Analysis of Market and Non-Market Projects",
        "icon": "AlertTriangle",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Project forecasts are uncertain because future demand, prices, costs, construction schedules, interest rates, regulation and technology may differ from assumptions. Risk analysis therefore tests how project outcomes change when important assumptions change."
          },
          {
            "kind": "bullets",
            "items": [
              "Sensitivity analysis: change one important assumption at a time to identify variables to which NPV or other outcomes are most sensitive.",
              "Scenario analysis: evaluate internally consistent combinations such as optimistic, base and adverse cases.",
              "Break-even analysis: identify the level of a variable at which the project reaches a specified financial threshold.",
              "Risk mitigation: use contracts, diversification, insurance where appropriate, contingencies, phased investment or operational controls.",
              "Monitoring: compare actual performance with assumptions and update decisions when material deviations occur."
            ]
          },
          {
            "kind": "diagram",
            "diagramId": "mba-strategic-financial-management-project-analysis",
            "caption": "Project analysis diagram covering project appraisal and analysis context."
          }
        ]
      },
      {
        "id": "project-appraisal",
        "title": "6. Project Appraisal and Screening of Ideas",
        "icon": "CheckCircle",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Project appraisal is the structured evaluation of a project before committing significant resources. Screening eliminates proposals that clearly fail strategic, legal, technical or financial requirements before detailed analysis consumes resources."
          },
          {
            "kind": "table",
            "headers": [
              "Appraisal criterion",
              "Key question"
            ],
            "rows": [
              [
                "Strategic fit",
                "Does the project support the organization's strategy?"
              ],
              [
                "Market feasibility",
                "Is there credible demand and a defensible market position?"
              ],
              [
                "Technical feasibility",
                "Can the project be implemented with available technology and capabilities?"
              ],
              [
                "Financial viability",
                "Do expected cash flows and risk justify the investment?"
              ],
              [
                "Funding feasibility",
                "Can the project be financed without unacceptable financial strain?"
              ],
              [
                "Risk acceptability",
                "Are key risks understood and manageable?"
              ],
              [
                "Legal / environmental fit",
                "Does the project meet applicable legal and environmental requirements?"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Good project appraisal is not only a calculation exercise. It combines financial models with assumptions about markets, operations, technology, regulation and risk. The quality of the decision is therefore strongly dependent on the quality of the underlying assumptions."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Project",
        "definition": "Temporary undertaking with defined objectives, scope, resources and time constraints."
      },
      {
        "term": "Project Appraisal",
        "definition": "Systematic evaluation of a project’s strategic, technical, financial, economic and risk characteristics."
      },
      {
        "term": "Project Life Cycle",
        "definition": "Sequence of stages through which a project is identified, developed, implemented, operated and reviewed."
      },
      {
        "term": "Sensitivity Analysis",
        "definition": "Analysis of the effect of changing one key assumption on project outcomes."
      },
      {
        "term": "Scenario Analysis",
        "definition": "Evaluation of project outcomes under internally consistent alternative sets of assumptions."
      },
      {
        "term": "Break-even Analysis",
        "definition": "Analysis identifying the level of activity or variable at which a specified financial threshold is reached."
      },
      {
        "term": "Project Finance",
        "definition": "Financing structure designed to fund a project and support repayment from defined project-related cash flows and arrangements."
      }
    ],
    "examQuestions": [
      "Define a project and explain the concept of project appraisal. (Medium)",
      "Explain the project life cycle in detail. (Long)",
      "Discuss the major components of project analysis. (Long)",
      "Differentiate financial analysis and economic analysis of projects. (Long)",
      "Explain project risk and uncertainty and the major tools used for analysis. (Long)",
      "Explain sensitivity analysis, scenario analysis and break-even analysis. (Long)",
      "Discuss the process of project appraisal and screening of project ideas. (Long)"
    ]
  }
];
