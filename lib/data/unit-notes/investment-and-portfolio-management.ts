import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Investment and Portfolio Management (BMB FM 01)
// — AKTU, MBA Semester III, 40 hours, syllabus supplied by the user.
export const InvestmentAndPortfolioManagementUnitNotes: UnitNote[] = [
  {
    unitNumber: 1, title: "Investments", hours: 10,
    headings: [
      { id: "capital-market", title: "1. Capital Market: Structure and Functions", icon: "LineChart", blocks: [
        { kind: "paragraph", text: "The capital market is the market for medium- and long-term funds and securities. It includes mechanisms through which issuers raise capital and investors buy and sell securities. The syllabus requires the nature, structure, functioning and limitations of securities markets, stock exchanges and new-issue markets." },
        { kind: "table", headers: ["Area", "Meaning", "Importance"], rows: [["Primary market", "Market for new securities issued to investors.", "Raises fresh capital for issuers."], ["Secondary market", "Trading of securities already issued.", "Provides liquidity and price discovery."], ["Stock exchange", "Organized market facilitating eligible securities trading.", "Supports orderly trading, information and liquidity."], ["New-issue market", "Channel for fresh securities.", "Connects issuers with investors."]] },
        { kind: "diagram", diagramId: "fm-capital-market-structure", caption: "Primary and secondary components of the capital market." }
      ] },
      { id: "trading-securities", title: "2. Trading of Securities and Order Types", icon: "RefreshCw", blocks: [
        { kind: "paragraph", text: "Securities trading involves the placement, matching and execution of orders. The syllabus covers equity, debentures/bonds, order types, margin trading, clearing and settlement. The investor must understand both the trading instruction and the post-trade process." },
        { kind: "table", headers: ["Concept", "Explanation"], rows: [["Market order", "Instruction to execute at the best available market price."], ["Limit order", "Instruction with a specified maximum purchase or minimum sale price."], ["Margin trading", "Trading with permitted margin-based funding subject to applicable requirements."], ["Clearing", "Determination and management of obligations created by trades."], ["Settlement", "Final transfer of securities and funds."]] },
        { kind: "callout", tone: "example", title: "Order example", text: "A limit buy order can execute only at the specified maximum price or a more favorable price, subject to available market orders." }
      ] },
      { id: "regulation-security-analysis", title: "3. Regulation and Security Analysis", icon: "Scale", blocks: [
        { kind: "paragraph", text: "The regulatory system provides rules for market integrity, investor protection, disclosure and orderly trading. Security analysis aims to evaluate risk and expected return using systematic approaches. The syllabus includes types of investors and the aims and approaches of security analysis." },
        { kind: "table", headers: ["Approach", "Main information"], rows: [["Fundamental analysis", "Economic, industry and company factors."], ["Technical analysis", "Price, volume and market-pattern information."], ["Risk-return analysis", "Expected return relative to uncertainty and risk."]] },
        { kind: "diagram", diagramId: "fm-security-analysis-approaches", caption: "Major approaches to security analysis." }
      ] },
      { id: "stock-exchange-functions", title: "4. Stock Exchange Functions", icon: "Landmark", blocks: [
        { kind: "paragraph", text: "A stock exchange supports liquidity, price discovery, market information and organized trading. Its functions help transform securities into tradable financial assets and facilitate continuous valuation." },
        { kind: "table", headers: ["Function", "Explanation"], rows: [["Liquidity", "Allows investors to buy and sell securities through an organized market."], ["Price discovery", "Trading and information contribute to market prices."], ["Information", "Quotations and disclosures support decisions."], ["Mobilization", "Channels savings toward investment."]] }
      ] },
      { id: "investment-case", title: "5. Investment Case Study", icon: "FileText", blocks: [
        { kind: "paragraph", text: "An investment case should identify the investor objective, horizon and risk tolerance before analyzing a security. The answer should classify the security and market, select an appropriate analytical approach, compare expected return with risk and state limitations of the analysis." },
        { kind: "callout", tone: "case", title: "Case-study framework", text: "Identify objective and constraints; classify the security; analyze market and security information; evaluate risk and expected return; then explain the investment decision using only the facts provided." }
      ] }
    ],
    keyTerms: [
      { term: "Capital market", definition: "Market for medium- and long-term financial funds and securities." },
      { term: "Primary market", definition: "Market in which new securities are issued." },
      { term: "Secondary market", definition: "Market in which existing securities are traded." },
      { term: "Stock exchange", definition: "Organized market facilitating securities trading." },
      { term: "Margin trading", definition: "Permitted trading arrangement involving margin-based funding." },
      { term: "Clearing", definition: "Process of determining obligations from trades." },
      { term: "Settlement", definition: "Completion of a securities trade through transfer of securities and funds." },
      { term: "Fundamental analysis", definition: "Analysis of economic, industry and company factors." },
      { term: "Technical analysis", definition: "Analysis of market price, volume and patterns." }
    ],
    examQuestions: [
      "Explain the structure and functions of the capital market. (Long)",
      "Distinguish between primary and secondary markets. (Medium)",
      "Explain the functions of a stock exchange. (Long)",
      "Discuss major methods of issuing securities. (Long)",
      "Explain market and limit orders. (Short)",
      "Discuss margin trading and its risks. (Medium)",
      "Explain clearing and settlement. (Long)",
      "Discuss major approaches to security analysis. (Long)"
    ]
  },
  {
    unitNumber: 2, title: "Portfolio Theory", hours: 8,
    headings: [
      { id: "risk-return", title: "1. Risk and Return", icon: "TrendingUp", blocks: [
        { kind: "paragraph", text: "Portfolio theory begins with risk and return. Return represents gain or loss, while risk represents uncertainty around the realized result. The syllabus includes components and measurement of risk, covariance, correlation and systematic analysis." },
        { kind: "table", headers: ["Measure", "Meaning"], rows: [["Expected return", "Probability-weighted average of possible returns."], ["Variance", "Average squared dispersion around expected return."], ["Standard deviation", "Square root of variance and common total-risk measure."], ["Covariance", "Measures joint movement of two return series."], ["Correlation", "Standardized measure of co-movement."]] },
        { kind: "callout", tone: "example", title: "Expected return", text: "For possible returns R1 and R2 with probabilities P1 and P2, E(R) = P1R1 + P2R2, where P1 + P2 = 1." }
      ] },
      { id: "portfolio-risk", title: "2. Portfolio Risk and Diversification", icon: "Layers", blocks: [
        { kind: "paragraph", text: "Portfolio risk depends on individual asset risk and the way asset returns move together. Diversification can reduce unsystematic risk when assets are not perfectly positively correlated. Therefore, covariance and correlation are central to portfolio construction." },
        { kind: "table", headers: ["Correlation", "Diversification effect"], rows: [["+1", "No covariance-based diversification benefit."], ["Between 0 and +1", "Some diversification benefit may arise."], ["0", "Linear co-movement is absent; covariance contribution is reduced."], ["Negative", "Potentially stronger diversification benefit."]] },
        { kind: "diagram", diagramId: "fm-portfolio-risk", caption: "Relationship among variance, covariance and correlation in portfolio risk." }
      ] },
      { id: "markowitz-single-index", title: "3. Markowitz Theory and Single Index Model", icon: "GitCompare", blocks: [
        { kind: "paragraph", text: "Markowitz theory uses expected returns, variances and covariances to identify efficient portfolios. The Single Index Model simplifies covariance estimation by relating security returns to a common market index plus security-specific effects." },
        { kind: "table", headers: ["Model", "Core idea"], rows: [["Markowitz", "Explicit expected return, variance and covariance framework."], ["Single Index", "Security return related to a common index plus residual risk."]] },
        { kind: "diagram", diagramId: "fm-portfolio-models", caption: "Conceptual comparison of portfolio-selection models." }
      ] },
      { id: "efficient-portfolio", title: "4. Efficient Portfolio and Selection", icon: "Target", blocks: [
        { kind: "paragraph", text: "An efficient portfolio offers the highest expected return for a given risk or the lowest risk for a given expected return among feasible portfolios. Selection therefore depends on the investor\u2019s risk tolerance and constraints rather than return alone." },
        { kind: "callout", tone: "info", title: "Exam point", text: "Do not define an efficient portfolio simply as the portfolio with the highest return. Efficiency is a relative risk-return concept within the feasible set." }
      ] },
      { id: "portfolio-case", title: "5. Portfolio Case Study", icon: "FileText", blocks: [
        { kind: "paragraph", text: "A portfolio case should identify the securities, expected returns, risk measures and correlations. The analysis should explain how diversification changes total risk and how the selected portfolio model supports the choice." },
        { kind: "callout", tone: "case", title: "Case-study method", text: "Compare securities individually, examine covariance/correlation, form feasible combinations, identify efficient combinations and match the final choice to the investor\u2019s risk-return requirement." }
      ] }
    ],
    keyTerms: [
      { term: "Risk", definition: "Uncertainty surrounding investment outcomes." },
      { term: "Expected return", definition: "Probability-weighted average return." },
      { term: "Variance", definition: "Measure of squared dispersion of returns." },
      { term: "Standard deviation", definition: "Square root of variance." },
      { term: "Covariance", definition: "Measure of joint movement of two returns." },
      { term: "Correlation", definition: "Standardized measure of co-movement." },
      { term: "Efficient portfolio", definition: "Non-dominated feasible portfolio in risk-return space." },
      { term: "Markowitz model", definition: "Portfolio framework using expected returns, variances and covariances." },
      { term: "Single Index Model", definition: "Model linking security returns to a common market index." }
    ],
    examQuestions: [
      "Define risk and return. (Long)",
      "Explain variance, standard deviation, covariance and correlation. (Long)",
      "How does diversification reduce risk? (Medium)",
      "Explain efficient portfolio and efficient frontier. (Long)",
      "Discuss the effect of correlation on portfolio risk. (Long)",
      "Explain Markowitz theory. (Long)",
      "Explain the Single Index Model. (Medium)",
      "Compare Markowitz and Single Index models. (Long)"
    ]
  },
  {
    unitNumber: 3, title: "Capital Market & Asset Pricing", hours: 6,
    headings: [
      { id: "technical", title: "1. Technical Analysis and Dow Theory", icon: "TrendingUp", blocks: [
        { kind: "paragraph", text: "Technical analysis studies market-generated information such as price and volume to identify trends and patterns. The syllabus includes Dow Theory, support and resistance, charts, trend lines, gaps, wave theory and relative-strength analysis." },
        { kind: "table", headers: ["Tool", "Study focus"], rows: [["Dow Theory", "Market trends and confirmation concepts."], ["Support", "Price area where buying interest may resist decline."], ["Resistance", "Price area where selling interest may resist advance."], ["Trend line", "Graphical representation of price direction."], ["Gap", "Price interval in which trading does not occur between relevant quoted levels."]] }
      ] },
      { id: "fundamental-emh", title: "2. Fundamental Analysis and EMH", icon: "LineChart", blocks: [
        { kind: "paragraph", text: "Fundamental analysis evaluates economic, industry and company factors. The Efficient Market Hypothesis examines how efficiently information is reflected in security prices and its implications for investment decisions." },
        { kind: "table", headers: ["Approach", "Main question"], rows: [["Economic", "How can macroeconomic conditions affect markets?"], ["Industry", "What is the structure and outlook of the industry?"], ["Company", "What do business and financial fundamentals indicate?"], ["EMH", "How quickly and efficiently is information reflected in price?"]] }
      ] },
      { id: "capm-apt", title: "3. CAPM, APT and Capital Market Theory", icon: "Sigma", blocks: [
        { kind: "paragraph", text: "Asset-pricing models connect expected return with systematic risk. CAPM relates expected return to the risk-free rate and beta. APT uses multiple systematic factors. Capital Market Theory extends portfolio analysis to a market setting involving risky assets and a risk-free asset." },
        { kind: "callout", tone: "example", title: "CAPM structure", text: "E(Ri) = Rf + \u03b2i[E(Rm) \u2212 Rf]. Numerical applications should use only the values supplied in the question." }
      ] },
      { id: "technical-v-fundamental", title: "4. Technical versus Fundamental Analysis", icon: "GitCompare", blocks: [
        { kind: "table", headers: ["Basis", "Technical", "Fundamental"], rows: [["Primary data", "Price, volume and charts", "Economic, industry and company information"], ["Focus", "Patterns and trends", "Value and business prospects"], ["Typical output", "Trend or trading interpretation", "Valuation or investment assessment"]] },
        { kind: "callout", tone: "info", title: "Exam point", text: "Neither approach should be described as universally sufficient; the answer should state the assumptions and limitations relevant to the question." }
      ] },
      { id: "asset-pricing-case", title: "5. Capital-Market Case Study", icon: "FileText", blocks: [
        { kind: "paragraph", text: "A case can combine price trends, fundamental information and required-return analysis. The answer should separate observed facts from assumptions and explain the limitations of the selected model." },
        { kind: "callout", tone: "case", title: "Case framework", text: "Classify the information, analyze technical and fundamental evidence, apply CAPM/APT if data are given, compare risk and required return, and discuss limitations." }
      ] }
    ],
    keyTerms: [
      { term: "Technical analysis", definition: "Analysis of price, volume and chart information." },
      { term: "Support", definition: "Price area where buying pressure may resist decline." },
      { term: "Resistance", definition: "Price area where selling pressure may resist advance." },
      { term: "EMH", definition: "Framework examining how information is reflected in security prices." },
      { term: "CAPM", definition: "Model relating expected return to risk-free return and systematic risk." },
      { term: "Beta", definition: "Measure of sensitivity to market movements in the CAPM framework." },
      { term: "Risk premium", definition: "Return above a reference risk-free return for bearing risk." },
      { term: "APT", definition: "Multi-factor asset-pricing framework." }
    ],
    examQuestions: [
      "Explain technical analysis and its tools. (Long)",
      "Discuss Dow Theory. (Long)",
      "Explain support, resistance and trend lines. (Medium)",
      "Distinguish technical and fundamental analysis. (Medium)",
      "Explain EMH and its implications. (Long)",
      "Explain CAPM and beta. (Long)",
      "Discuss APT. (Medium)",
      "Compare CAPM and APT. (Long)"
    ]
  },
  {
    unitNumber: 4, title: "Bond, Equity and Derivative Analysis", hours: 8,
    headings: [
      { id: "equity-valuation", title: "1. Equity Valuation", icon: "LineChart", blocks: [
        { kind: "paragraph", text: "Equity valuation estimates the economic value of a share using expected cash flows, growth and required return. The syllabus includes discounted cash-flow techniques, balance-sheet valuation, dividend discount models, intrinsic value versus market price, earnings multiplier, P/E, price/book, price/sales and EVA." },
        { kind: "table", headers: ["Method", "Main basis"], rows: [["Dividend Discount Model", "Expected future dividends and required return/growth."], ["P/E ratio", "Price relative to earnings."], ["Price/book", "Market price relative to book value."], ["Price/sales", "Price or equity value relative to sales."], ["EVA", "Value creation after considering cost of capital."]] }
      ] },
      { id: "bond-valuation", title: "2. Bond and Debenture Valuation", icon: "IndianRupee", blocks: [
        { kind: "paragraph", text: "Bond valuation is based on the present value of expected coupon payments and redemption value. The syllabus includes bond nature, valuation, bond theorem and term structure of interest rates." },
        { kind: "table", headers: ["Concept", "Meaning"], rows: [["Coupon", "Periodic interest payment according to bond terms."], ["Face value", "Stated amount associated with the security."], ["Yield to maturity", "Discount rate equating price with present value of promised cash flows under standard assumptions."], ["Term structure", "Relationship between interest rates/yields and maturities."]] },
        { kind: "callout", tone: "example", title: "Valuation principle", text: "Bond value = present value of expected coupons + present value of redemption amount, discounted at the required yield." }
      ] },
      { id: "derivatives", title: "3. Derivatives and Their Significance", icon: "Layers", blocks: [
        { kind: "paragraph", text: "A derivative is a financial contract whose value is derived from an underlying asset, rate, index or reference. The syllabus includes meaning, features, types, significance and participants in derivative markets." },
        { kind: "table", headers: ["Participant", "Primary objective"], rows: [["Hedger", "Reduce or manage underlying risk."], ["Speculator", "Accept market risk in expectation of favorable price movement."], ["Arbitrageur", "Seek to benefit from price inconsistencies across related markets."]] },
        { kind: "diagram", diagramId: "fm-derivative-participants", caption: "Major participants in derivative markets." }
      ] },
      { id: "derivative-regulation", title: "4. Regulatory Framework of Derivative Markets", icon: "Scale", blocks: [
        { kind: "paragraph", text: "Derivative markets require rules for market integrity, disclosure, risk controls, participant eligibility and settlement. The exact regulatory provisions depend on the instrument and applicable framework. The syllabus requires the role and significance of regulation rather than unsupported section-level detail." },
        { kind: "callout", tone: "info", title: "Exam focus", text: "Explain why derivatives need regulation: leverage, counterparty exposure, market integrity, transparency and systemic-risk considerations." }
      ] },
      { id: "bond-equity-derivative-case", title: "5. Integrated Security Analysis", icon: "FileText", blocks: [
        { kind: "table", headers: ["Security", "Cash-flow focus", "Main risk/valuation concern"], rows: [["Bond", "Coupon and redemption", "Yield, duration, credit and interest-rate effects"], ["Equity", "Dividends and future value", "Growth, required return and valuation assumptions"], ["Derivative", "Contractual payoff linked to underlying", "Underlying price/rate, volatility, time and contract terms"]] },
        { kind: "callout", tone: "case", title: "Case method", text: "Identify the instrument, map expected cash flows or payoff, select the appropriate valuation framework, state assumptions and then interpret the result." }
      ] }
    ],
    keyTerms: [
      { term: "Bond", definition: "Debt security with contractual interest and repayment terms." },
      { term: "Yield to maturity", definition: "Discount rate equating bond price with promised cash flows under standard assumptions." },
      { term: "Dividend Discount Model", definition: "Equity valuation method based on discounted expected dividends." },
      { term: "Intrinsic value", definition: "Estimated economic value under a valuation model." },
      { term: "EVA", definition: "Economic Value Added after considering cost of capital." },
      { term: "Term structure", definition: "Relationship between interest rates/yields and maturities." },
      { term: "Derivative", definition: "Contract whose value is derived from an underlying." },
      { term: "Hedger", definition: "Participant seeking to reduce underlying risk." },
      { term: "Speculator", definition: "Participant accepting risk for expected profit." },
      { term: "Arbitrageur", definition: "Participant seeking gains from price inconsistencies." }
    ],
    examQuestions: [
      "Explain bond valuation. (Long)",
      "Discuss yield to maturity. (Medium)",
      "Explain the Dividend Discount Model. (Long)",
      "Differentiate intrinsic value and market price. (Medium)",
      "Explain P/E, price/book and price/sales. (Medium)",
      "Discuss EVA. (Long)",
      "Explain derivatives and their types. (Long)",
      "Distinguish hedgers, speculators and arbitrageurs. (Medium)"
    ]
  },
  {
    unitNumber: 5, title: "Active Portfolio Management", hours: 8,
    headings: [
      { id: "performance", title: "1. Performance Evaluation of Existing Portfolio", icon: "Target", blocks: [
        { kind: "paragraph", text: "Active portfolio management uses security selection, timing, risk control and continuous review. Performance evaluation compares realized return with risk and an appropriate benchmark or expected return. The syllabus includes Sharpe, Treynor and Jensen measures." },
        { kind: "table", headers: ["Measure", "Risk basis", "Interpretation"], rows: [["Sharpe", "Total risk", "Excess return per unit of total risk."], ["Treynor", "Systematic risk / beta", "Excess return per unit of systematic risk."], ["Jensen", "CAPM benchmark", "Abnormal performance relative to CAPM expected return."]] },
        { kind: "diagram", diagramId: "fm-performance-measures", caption: "Comparison of major portfolio performance measures." }
      ] },
      { id: "portfolio-management", title: "2. Active Portfolio Management Process", icon: "RefreshCw", blocks: [
        { kind: "paragraph", text: "The active process starts with objectives and constraints, followed by research, security selection, portfolio construction, monitoring and revision. Each decision should remain consistent with the investor\u2019s risk tolerance and mandate." },
        { kind: "table", headers: ["Stage", "Activity"], rows: [["Objective setting", "Define return, risk, horizon and constraints."], ["Research", "Analyze securities and market factors."], ["Selection", "Choose exposures consistent with strategy."], ["Construction", "Set weights and diversification."], ["Monitoring", "Track risk and performance."], ["Revision", "Change positions when justified by evidence and constraints."]] }
      ] },
      { id: "revision", title: "3. Portfolio Revision", icon: "Repeat", blocks: [
        { kind: "paragraph", text: "Portfolio revision means changing an existing portfolio to maintain alignment with objectives. Changes can arise from price movements, changes in risk tolerance, security prospects, liquidity needs or concentration." },
        { kind: "diagram", diagramId: "fm-portfolio-revision", caption: "Portfolio monitoring and revision cycle." }
      ] },
      { id: "mutual-funds", title: "4. Portfolio Management and Mutual Fund Industry", icon: "Layers", blocks: [
        { kind: "paragraph", text: "Mutual funds pool investors\u2019 money and invest according to a stated mandate. Portfolio management in mutual funds combines diversification, professional management, disclosure and performance measurement. NAV provides a basis for valuing units under the applicable framework." },
        { kind: "table", headers: ["Feature", "Implication"], rows: [["Pooling", "Combines investor funds into a portfolio."], ["Professional management", "Investment decisions follow the fund mandate."], ["Diversification", "Exposure can be spread across securities."], ["NAV", "Provides unit valuation under the applicable framework."]] }
      ] },
      { id: "active-case", title: "5. Active-Management Case Study", icon: "FileText", blocks: [
        { kind: "callout", tone: "case", title: "Case framework", text: "Given portfolio return, risk-free information and a risk measure, identify whether Sharpe, Treynor or Jensen is appropriate; apply the stated formula; interpret the result; and discuss limitations." }
      ] }
    ],
    keyTerms: [
      { term: "Active portfolio management", definition: "Management involving active security selection, timing or other decisions." },
      { term: "Sharpe measure", definition: "Excess return relative to total risk." },
      { term: "Treynor measure", definition: "Excess return relative to systematic risk." },
      { term: "Jensen measure", definition: "CAPM-based abnormal performance measure." },
      { term: "Portfolio revision", definition: "Change in an existing portfolio to maintain alignment with objectives." },
      { term: "Benchmark", definition: "Reference index or portfolio used for performance comparison." },
      { term: "Mutual fund", definition: "Pooled investment vehicle investing according to a stated mandate." },
      { term: "NAV", definition: "Net asset value used for mutual-fund unit valuation." }
    ],
    examQuestions: [
      "Explain active portfolio management. (Long)",
      "Discuss performance evaluation. (Long)",
      "Explain Sharpe measure. (Medium)",
      "Explain Treynor measure. (Medium)",
      "Explain Jensen measure. (Medium)",
      "Compare Sharpe, Treynor and Jensen. (Long)",
      "Explain portfolio revision. (Long)",
      "Discuss mutual funds and portfolio management. (Long)"
    ]
  }
];
