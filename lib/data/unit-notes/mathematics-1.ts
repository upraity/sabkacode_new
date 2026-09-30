import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Mathematics-I (C-205)
// — Dr. Bhimrao Ambedkar University, Agra (DBRAU) BCA Semester 2, syllabus
// effective from session 2025-26. Every numerical example was recomputed
// with Python (sympy) before being written here.
export const mathematics1UnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Basic Concepts of Trigonometry",
    hours: 8,
    headings: [
      {
        id: "trig-functions",
        title: "1. Basic Trigonometric Functions",
        icon: "Compass",
        blocks: [
          {
            kind: "paragraph",
            text: "Consider a right-angled triangle with one acute angle θ. The six trigonometric ratios relate θ to the ratios of the sides — Perpendicular (P, opposite to θ), Base (B, adjacent to θ) and Hypotenuse (H, the longest side).",
          },
          { kind: "diagram", diagramId: "trig-ratios", caption: "Fig 1.1 — Trigonometric ratios in a right-angled triangle" },
          {
            kind: "table",
            headers: ["Ratio", "Definition", "Reciprocal"],
            rows: [
              ["sin θ", "Perpendicular / Hypotenuse = P/H", "cosec θ = H/P = 1/sin θ"],
              ["cos θ", "Base / Hypotenuse = B/H", "sec θ = H/B = 1/cos θ"],
              ["tan θ", "Perpendicular / Base = P/B = sin θ / cos θ", "cot θ = B/P = 1/tan θ"],
            ],
          },
          {
            kind: "paragraph",
            text: "Sign convention (ASTC rule): in the first quadrant All ratios are positive; in the second quadrant only Sine (and cosec) are positive; in the third quadrant only Tangent (and cot) are positive; in the fourth quadrant only Cosine (and sec) are positive. (Remembered as 'All Silver Tea Cups'.)",
          },
        ],
      },
      {
        id: "trig-common-angles",
        title: "2. Values of Trigonometric Functions for Common Angles",
        icon: "Table",
        blocks: [
          {
            kind: "table",
            headers: ["θ", "0°", "30°", "45°", "60°", "90°"],
            rows: [
              ["sin θ", "0", "1/2", "1/√2", "√3/2", "1"],
              ["cos θ", "1", "√3/2", "1/√2", "1/2", "0"],
              ["tan θ", "0", "1/√3", "1", "√3", "not defined"],
              ["cosec θ", "not defined", "2", "√2", "2/√3", "1"],
              ["sec θ", "1", "2/√3", "√2", "2", "not defined"],
              ["cot θ", "not defined", "√3", "1", "1/√3", "0"],
            ],
          },
          {
            kind: "paragraph",
            text: "A quick way to remember sin values 0°→90°: write 0, 1, 2, 3, 4 under a root sign and divide by 2 — √(0/4), √(1/4), √(2/4), √(3/4), √(4/4) — giving 0, 1/2, 1/√2, √3/2, 1. The cosine values are the same sequence in REVERSE order.",
          },
        ],
      },
      {
        id: "trig-identities",
        title: "3. Trigonometric Identities: Sum, Difference and Double-Angle Formulas",
        icon: "Sigma",
        blocks: [
          {
            kind: "table",
            headers: ["Fundamental identity", "Statement"],
            rows: [
              ["Pythagorean identities", "sin²θ + cos²θ = 1;   1 + tan²θ = sec²θ;   1 + cot²θ = cosec²θ"],
            ],
          },
          {
            kind: "table",
            headers: ["Sum and difference formulas", "Statement"],
            rows: [
              ["sin(A ± B)", "sin A cos B ± cos A sin B"],
              ["cos(A ± B)", "cos A cos B ∓ sin A sin B"],
              ["tan(A ± B)", "(tan A ± tan B) / (1 ∓ tan A tan B)"],
            ],
          },
          {
            kind: "table",
            headers: ["Double-angle formula", "Statement"],
            rows: [
              ["sin 2A", "2 sin A cos A"],
              ["cos 2A", "cos²A − sin²A = 2cos²A − 1 = 1 − 2sin²A"],
              ["tan 2A", "2 tan A / (1 − tan²A)"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example — sin 75° using the sum formula",
            text: "sin 75° = sin(45° + 30°) = sin 45° cos 30° + cos 45° sin 30° = (1/√2)(√3/2) + (1/√2)(1/2) = (√6 + √2)/4 ≈ 0.966.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example — verifying cos 2A using A = 30°",
            text: "cos 2(30°) = cos 60° = 1/2.  Using cos²A − sin²A: (√3/2)² − (1/2)² = 3/4 − 1/4 = 1/2 ✓.  Using 2cos²A − 1: 2(3/4) − 1 = 1/2 ✓.  Using 1 − 2sin²A: 1 − 2(1/4) = 1/2 ✓.",
          },
        ],
      },
      {
        id: "trig-applications",
        title: "4. Applications of Trigonometric Identities",
        icon: "Target",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Height and distance problems: finding the height of a building, tower or mountain using the angle of elevation/depression measured from a known distance.",
              "Simplifying and proving trigonometric expressions used later in calculus (differentiating and integrating trigonometric functions, Unit III and IV).",
              "Wave motion, alternating current (AC) circuits and signal processing (represented as sine/cosine waves).",
              "Navigation, surveying and astronomy (finding distances and angles that cannot be measured directly).",
              "Computer graphics — rotation of a point in 2-D uses exactly the sum formulas: x' = x cos θ − y sin θ,  y' = x sin θ + y cos θ.",
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Height and distance — worked example",
            text: "A tower is 100 m away from an observer, and the angle of elevation of its top is 30°. Find the height of the tower.  tan 30° = height / 100 ⟹ height = 100 × tan 30° = 100 × (1/√3) ≈ 57.7 m.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Proving an identity",
            text: "Prove: (1 + tan²A) / (1 + cot²A) = tan²A.  LHS = sec²A / cosec²A (using the Pythagorean identities) = (1/cos²A) / (1/sin²A) = sin²A/cos²A = tan²A = RHS ✓.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Trigonometric ratio", definition: "The ratio of two sides of a right-angled triangle with respect to an acute angle." },
      { term: "ASTC rule", definition: "A rule for the sign of trigonometric ratios in each quadrant: All, Sine, Tangent, Cosine." },
      { term: "Pythagorean identity", definition: "sin²θ + cos²θ = 1 and its two derived forms." },
      { term: "Double-angle formula", definition: "A formula that expresses sin 2A, cos 2A or tan 2A in terms of A." },
    ],
    examQuestions: [
      "Define the six trigonometric ratios with a diagram. (Medium)",
      "Write the values of trigonometric functions for 0°, 30°, 45°, 60° and 90°. (Short)",
      "State and prove the sum and difference formulas for sine and cosine. (Long)",
      "Derive the double-angle formulas for sin 2A and cos 2A. (Medium)",
      "Find the value of sin 75° and cos 15° using the sum/difference formulas. (Medium)",
      "Prove: (1 + tan²A)/(1 + cot²A) = tan²A. (Medium)",
      "A tower is 100 m from an observer and the angle of elevation of its top is 30°. Find the height. (Short)",
      "Explain any three applications of trigonometry. (Short)",
    ],
  },
  {
    unitNumber: 2,
    title: "Limits of Various Types",
    hours: 8,
    headings: [
      {
        id: "limit-point",
        title: "1. Limit at a Point",
        icon: "Crosshair",
        blocks: [
          {
            kind: "paragraph",
            text: "The LIMIT of a function f(x) as x approaches a point 'a' is the value that f(x) gets closer and closer to as x gets closer and closer to a (from either side), WITHOUT x actually being equal to a. It is written lim(x→a) f(x) = L. The limit may exist even if f(a) is undefined, and may differ from f(a) even if f(a) is defined.",
          },
          {
            kind: "table",
            headers: ["One-sided limit", "Meaning"],
            rows: [
              ["Left-hand limit (LHL)", "lim(x→a⁻) f(x): the value f(x) approaches as x approaches a from values LESS than a."],
              ["Right-hand limit (RHL)", "lim(x→a⁺) f(x): the value f(x) approaches as x approaches a from values GREATER than a."],
              ["Existence of the limit", "lim(x→a) f(x) exists (and equals L) if and only if LHL = RHL = L."],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example — a limit computed directly by substitution",
            text: "lim(x→2) (x² + 3x − 1) = 2² + 3(2) − 1 = 4 + 6 − 1 = 9 (direct substitution works because the function is continuous at x = 2).",
          },
        ],
      },
      {
        id: "limit-properties",
        title: "2. Properties of Limits and Computation of Limits",
        icon: "Sigma",
        blocks: [
          {
            kind: "table",
            headers: ["Property (assuming the limits exist)", "Statement"],
            rows: [
              ["Sum/Difference", "lim [f(x) ± g(x)] = lim f(x) ± lim g(x)"],
              ["Product", "lim [f(x) · g(x)] = lim f(x) · lim g(x)"],
              ["Quotient", "lim [f(x) / g(x)] = lim f(x) / lim g(x),  provided lim g(x) ≠ 0"],
              ["Constant multiple", "lim [k · f(x)] = k · lim f(x)"],
              ["Power", "lim [f(x)]ⁿ = [lim f(x)]ⁿ"],
            ],
          },
          {
            kind: "table",
            headers: ["Standard limit", "Value"],
            rows: [
              ["lim(x→0) sin x / x", "1"],
              ["lim(x→0) tan x / x", "1"],
              ["lim(x→0) (1 − cos x) / x²", "1/2"],
              ["lim(x→0) (eˣ − 1) / x", "1"],
              ["lim(x→0) log(1 + x) / x", "1"],
              ["lim(n→∞) (1 + 1/n)ⁿ", "e"],
              ["lim(x→a) (xⁿ − aⁿ)/(x − a)", "n·aⁿ⁻¹"],
            ],
          },
          {
            kind: "paragraph",
            text: "For an indeterminate form 0/0 obtained by direct substitution, common techniques are: (1) FACTORISATION — factor and cancel the common term; (2) RATIONALISATION — multiply and divide by the conjugate surd; (3) use the standard limits above; (4) L'Hospital's rule (Unit III).",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example — factorisation method",
            text: "lim(x→2) (x³ − 8)/(x − 2). Direct substitution gives 0/0. Factor: x³ − 8 = (x − 2)(x² + 2x + 4). So the limit = lim(x→2) (x² + 2x + 4) = 4 + 4 + 4 = 12.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example — rationalisation method",
            text: "lim(x→0) (√(x+1) − 1)/x. Direct substitution gives 0/0. Multiply numerator and denominator by (√(x+1) + 1): = lim(x→0) [(x+1) − 1] / [x(√(x+1)+1)] = lim(x→0) x / [x(√(x+1)+1)] = lim(x→0) 1/(√(x+1)+1) = 1/2.",
          },
        ],
      },
      {
        id: "continuity",
        title: "3. Continuity: at a Point and over an Interval",
        icon: "GitCompare",
        blocks: [
          {
            kind: "paragraph",
            text: "A function f(x) is CONTINUOUS AT A POINT x = a if all three conditions hold: (1) f(a) is defined; (2) lim(x→a) f(x) exists (LHL = RHL); (3) lim(x→a) f(x) = f(a). Informally, a continuous function has a graph that can be drawn WITHOUT lifting the pen.",
          },
          {
            kind: "table",
            headers: ["Continuity over an interval", "Meaning"],
            rows: [
              ["Continuous on an open interval (a, b)", "f is continuous at every point of (a, b)."],
              ["Continuous on a closed interval [a, b]", "f is continuous on (a, b), and lim(x→a⁺) f(x) = f(a), lim(x→b⁻) f(x) = f(b) (one-sided continuity at the end points)."],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Checking continuity at a point",
            text: "f(x) = (x² − 1)/(x − 1) for x ≠ 1, and f(1) = 3.  lim(x→1) f(x) = lim(x→1) (x+1) = 2 (after cancelling x−1).  Since f(1) = 3 ≠ 2, the limit does not equal f(1), so f is NOT continuous at x = 1 (it has a removable discontinuity — it would become continuous only if f(1) were redefined as 2).",
          },
        ],
      },
      {
        id: "intermediate-value-discontinuity",
        title: "4. Intermediate Value Theorem and Types of Discontinuities",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "INTERMEDIATE VALUE THEOREM (IVT): if f is continuous on the closed interval [a, b] and k is any value between f(a) and f(b), then there exists at least one point c in [a, b] such that f(c) = k. A common use is to prove that an equation has a root in an interval: if f(a) and f(b) have OPPOSITE signs, f has at least one root between a and b.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Using IVT to locate a root",
            text: "f(x) = x³ − 4x − 9 is continuous everywhere (a polynomial). f(2) = 8 − 8 − 9 = −9 (negative) and f(3) = 27 − 12 − 9 = 6 (positive). Since f(2) and f(3) have opposite signs, by the IVT there is at least one root of x³ − 4x − 9 = 0 between x = 2 and x = 3.",
          },
          {
            kind: "table",
            headers: ["Type of discontinuity", "Meaning", "Example"],
            rows: [
              ["Removable discontinuity", "lim(x→a) f(x) exists but either f(a) is undefined or f(a) ≠ the limit; the discontinuity can be 'removed' by (re)defining f(a) to equal the limit.", "f(x) = (x²−1)/(x−1) at x = 1"],
              ["Jump discontinuity", "LHL and RHL both exist but are UNEQUAL — the graph 'jumps' from one value to another.", "f(x) = x/|x| at x = 0 (LHL = −1, RHL = 1)"],
              ["Infinite discontinuity", "f(x) → ∞ or −∞ as x → a (at least one one-sided limit is infinite).", "f(x) = 1/x at x = 0"],
              ["Oscillating discontinuity", "f(x) oscillates without settling to any single value as x → a.", "f(x) = sin(1/x) at x = 0"],
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Limit", definition: "The value a function approaches as its input approaches a given point." },
      { term: "One-sided limit", definition: "The limit approached from only the left (LHL) or only the right (RHL) of a point." },
      { term: "Indeterminate form", definition: "An expression like 0/0 whose value cannot be found by direct substitution." },
      { term: "Continuity at a point", definition: "f(a) is defined, the limit exists at a, and the limit equals f(a)." },
      { term: "Intermediate Value Theorem", definition: "A continuous function on [a,b] takes every value between f(a) and f(b)." },
      { term: "Removable discontinuity", definition: "A discontinuity that can be removed by suitably (re)defining the function at that point." },
    ],
    examQuestions: [
      "Define the limit of a function at a point. Explain left-hand and right-hand limits. (Medium)",
      "State the properties of limits. (Short)",
      "Evaluate lim(x→2) (x³−8)/(x−2) and lim(x→0) (√(x+1)−1)/x. (Medium)",
      "State the standard limits of sin x/x, (eˣ−1)/x and (1+1/n)ⁿ. (Short)",
      "Define continuity of a function at a point. Check whether f(x)=(x²−1)/(x−1), f(1)=3, is continuous at x=1. (Medium)",
      "State the Intermediate Value Theorem. Use it to show that x³−4x−9=0 has a root between 2 and 3. (Medium)",
      "Explain the types of discontinuities with examples. (Long)",
    ],
  },
  {
    unitNumber: 3,
    title: "Differentiation",
    hours: 12,
    headings: [
      {
        id: "derivative-rules",
        title: "1. Derivative: Sum, Difference, Product, Quotient and Chain Rule",
        icon: "Sigma",
        blocks: [
          {
            kind: "paragraph",
            text: "The DERIVATIVE of a function f(x) at a point x measures the instantaneous rate of change of f with respect to x — geometrically, the slope of the tangent line to the curve y = f(x) at that point. It is defined as f'(x) = lim(h→0) [f(x+h) − f(x)] / h, and is written f'(x), dy/dx, or Df(x).",
          },
          {
            kind: "table",
            headers: ["Rule", "Statement"],
            rows: [
              ["Constant rule", "d/dx (c) = 0"],
              ["Power rule", "d/dx (xⁿ) = n·xⁿ⁻¹"],
              ["Sum/Difference rule", "d/dx [f(x) ± g(x)] = f'(x) ± g'(x)"],
              ["Product rule", "d/dx [f(x)·g(x)] = f'(x)·g(x) + f(x)·g'(x)"],
              ["Quotient rule", "d/dx [f(x)/g(x)] = [f'(x)g(x) − f(x)g'(x)] / [g(x)]²"],
              ["Chain rule (function of a function)", "If y = f(u) and u = g(x), then dy/dx = dy/du · du/dx = f'(g(x))·g'(x)"],
            ],
          },
          {
            kind: "table",
            headers: ["Standard derivative", "Value"],
            rows: [
              ["d/dx (sin x)", "cos x"],
              ["d/dx (cos x)", "−sin x"],
              ["d/dx (tan x)", "sec²x"],
              ["d/dx (eˣ)", "eˣ"],
              ["d/dx (aˣ)", "aˣ ln a"],
              ["d/dx (ln x)", "1/x"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved examples",
            text: "Product rule: d/dx (log x · sin x) = (1/x)·sin x + log x · cos x.  Chain rule: d/dx sin(x²) = cos(x²) · 2x = 2x cos(x²).  Quotient rule: d/dx (x/(x+1)) = [1·(x+1) − x·1]/(x+1)² = 1/(x+1)².",
          },
        ],
      },
      {
        id: "logarithmic-differentiation",
        title: "2. Derivatives of Composite Functions and Logarithmic Differentiation",
        icon: "Code",
        blocks: [
          {
            kind: "paragraph",
            text: "LOGARITHMIC DIFFERENTIATION is used when a function is a product/quotient of many factors, or has a VARIABLE in both the base and the exponent (yˣ type). Taking the natural log of both sides converts products into sums (easier to differentiate) and brings a variable exponent down as a multiplier.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example — y = xˣ",
            text: "Take log of both sides: ln y = x ln x.  Differentiate both sides with respect to x: (1/y)(dy/dx) = ln x + x·(1/x) = ln x + 1.  So dy/dx = y(ln x + 1) = xˣ(ln x + 1).",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example — y = (x² + 1)³ / [(x+1)² (x−1)]",
            text: "ln y = 3 ln(x²+1) − 2 ln(x+1) − ln(x−1).  Differentiate: (1/y)(dy/dx) = 6x/(x²+1) − 2/(x+1) − 1/(x−1).  So dy/dx = y × [6x/(x²+1) − 2/(x+1) − 1/(x−1)], where y is the original expression.",
          },
        ],
      },
      {
        id: "mean-value-theorems",
        title: "3. Rolle's Theorem and Mean Value Theorem",
        icon: "Award",
        blocks: [
          {
            kind: "table",
            headers: ["Theorem", "Conditions", "Conclusion"],
            rows: [
              ["Rolle's Theorem", "f is continuous on [a, b], differentiable on (a, b), and f(a) = f(b)", "There exists at least one point c in (a, b) such that f'(c) = 0"],
              ["Lagrange's Mean Value Theorem (MVT)", "f is continuous on [a, b] and differentiable on (a, b)", "There exists at least one point c in (a, b) such that f'(c) = [f(b) − f(a)] / (b − a)"],
            ],
          },
          { kind: "diagram", diagramId: "mvt-geometry", caption: "Fig 3.1 — Geometric meaning of the Mean Value Theorem: the tangent at c is parallel to the chord AB" },
          {
            kind: "callout",
            tone: "example",
            title: "Rolle's theorem — worked example",
            text: "f(x) = x² − 4x + 3 on [1, 3]. f(1) = 1 − 4 + 3 = 0 and f(3) = 9 − 12 + 3 = 0, so f(1) = f(3), and f is a polynomial (continuous and differentiable everywhere). f'(x) = 2x − 4 = 0 ⟹ c = 2, which lies in (1, 3). So Rolle's theorem is verified with c = 2.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Mean Value Theorem — worked example",
            text: "f(x) = x³ on [1, 2]. [f(2) − f(1)]/(2 − 1) = (8 − 1)/1 = 7.  f'(x) = 3x², so 3c² = 7 ⟹ c² = 7/3 ⟹ c = √(7/3) ≈ 1.528, which lies in (1, 2). MVT is verified.",
          },
        ],
      },
      {
        id: "expansions-lhospital",
        title: "4. Expansion of Functions (Maclaurin's and Taylor's) and L'Hospital's Rule",
        icon: "Sigma",
        blocks: [
          {
            kind: "table",
            headers: ["Series", "Formula"],
            rows: [
              ["Maclaurin's series (expansion about x = 0)", "f(x) = f(0) + f'(0)x + f''(0)x²/2! + f'''(0)x³/3! + ..."],
              ["Taylor's series (expansion about x = a)", "f(x) = f(a) + f'(a)(x−a) + f''(a)(x−a)²/2! + f'''(a)(x−a)³/3! + ..."],
            ],
          },
          {
            kind: "table",
            headers: ["Standard Maclaurin expansion", "Series"],
            rows: [
              ["eˣ", "1 + x + x²/2! + x³/3! + x⁴/4! + ..."],
              ["sin x", "x − x³/3! + x⁵/5! − ..."],
              ["cos x", "1 − x²/2! + x⁴/4! − ..."],
              ["ln(1 + x)", "x − x²/2 + x³/3 − x⁴/4 + ...  (|x| < 1)"],
            ],
          },
          {
            kind: "paragraph",
            text: "L'HOSPITAL'S RULE: if lim(x→a) f(x)/g(x) is of the indeterminate form 0/0 or ∞/∞, and f'(a), g'(a) exist with g'(a) ≠ 0, then lim(x→a) f(x)/g(x) = lim(x→a) f'(x)/g'(x). The rule may be applied repeatedly if the new limit is still indeterminate. Other indeterminate forms (0·∞, ∞−∞, 0⁰, 1^∞, ∞⁰) are first converted to the 0/0 or ∞/∞ form (often using logarithms) before applying the rule.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example — L'Hospital's rule",
            text: "lim(x→0) (x − sin x)/x³ is 0/0.  Differentiate top and bottom: lim(x→0) (1 − cos x)/(3x²), still 0/0.  Differentiate again: lim(x→0) sin x/(6x), still 0/0.  Differentiate once more: lim(x→0) cos x / 6 = 1/6.  So the limit = 1/6 (matches the standard limit method too).",
          },
        ],
      },
      {
        id: "maxima-minima-curve-tracing",
        title: "5. Maxima and Minima, Curve Tracing, Successive Differentiation and Leibnitz's Theorem",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "table",
            headers: ["Step to find maxima/minima of y = f(x)", "Explanation"],
            rows: [
              ["1. Find f'(x) and solve f'(x) = 0", "Gives the CRITICAL POINTS (points where the tangent is horizontal)."],
              ["2. Find f''(x) at each critical point c", "SECOND DERIVATIVE TEST: if f''(c) < 0, f has a LOCAL MAXIMUM at c; if f''(c) > 0, a LOCAL MINIMUM; if f''(c) = 0, the test is inconclusive (examine further derivatives or the sign of f' around c)."],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example — maxima and minima of f(x) = x³ − 3x² − 9x + 5",
            text: "f'(x) = 3x² − 6x − 9 = 3(x² − 2x − 3) = 3(x−3)(x+1) = 0 ⟹ x = 3 or x = −1.  f''(x) = 6x − 6.  At x = −1: f''(−1) = −12 < 0, so LOCAL MAXIMUM; f(−1) = −1 − 3 + 9 + 5 = 10.  At x = 3: f''(3) = 12 > 0, so LOCAL MINIMUM; f(3) = 27 − 27 − 27 + 5 = −22.",
          },
          {
            kind: "paragraph",
            text: "CURVE TRACING is sketching the shape of a curve y = f(x) using calculus: (1) find the domain and any symmetry (even/odd function); (2) find the x- and y-intercepts; (3) find f'(x) to locate intervals of increase/decrease and turning points (maxima/minima); (4) find f''(x) to locate points of inflection and intervals of concavity (concave up where f'' > 0, concave down where f'' < 0); (5) find asymptotes (vertical, horizontal, oblique) if any; (6) plot a few key points and sketch the curve using all this information.",
          },
          {
            kind: "paragraph",
            text: "SUCCESSIVE DIFFERENTIATION means differentiating a function repeatedly to get the higher-order derivatives f'(x), f''(x), f'''(x), ..., fⁿ(x) (also written y₁, y₂, y₃, ..., yₙ). LEIBNITZ'S THEOREM (stated here without proof, as per the syllabus) gives a formula for the n-th derivative of a PRODUCT of two functions u(x) and v(x):",
          },
          {
            kind: "table",
            headers: ["Leibnitz's theorem", "Formula (yₙ means the n-th derivative)"],
            rows: [
              ["(uv)ₙ", "(uv)ₙ = Σ (from r=0 to n) ⁿCᵣ · uₙ₋ᵣ · vᵣ  =  uₙv + nCu₍ₙ₋₁₎v₁ + nC₂u₍ₙ₋₂₎v₂ + ... + uvₙ"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Applying Leibnitz's theorem — find the 2nd derivative of y = x² eˣ",
            text: "Let u = eˣ (so u₁ = u₂ = eˣ, every derivative is eˣ) and v = x² (so v₁ = 2x, v₂ = 2, v₃ = 0 onwards).  Using Leibnitz's theorem for n = 2: y₂ = u₂v + 2C1·u₁v₁ + u v₂ = eˣ·x² + 2·eˣ·2x + eˣ·2 = eˣ(x² + 4x + 2).",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Derivative", definition: "The instantaneous rate of change of a function; the slope of its tangent line." },
      { term: "Chain rule", definition: "The rule for differentiating a function of a function: dy/dx = dy/du · du/dx." },
      { term: "Logarithmic differentiation", definition: "Taking the log of both sides before differentiating, used for products/quotients or variable exponents." },
      { term: "Rolle's Theorem", definition: "If f(a) = f(b), there is a point c in (a,b) where f'(c) = 0." },
      { term: "Mean Value Theorem", definition: "There is a point c where the tangent is parallel to the chord joining the end points." },
      { term: "L'Hospital's rule", definition: "Differentiating numerator and denominator to resolve a 0/0 or ∞/∞ limit." },
      { term: "Point of inflection", definition: "A point where the concavity of a curve changes." },
      { term: "Leibnitz's theorem", definition: "A formula for the n-th derivative of a product of two functions." },
    ],
    examQuestions: [
      "State and explain the sum, product, quotient and chain rules of differentiation. (Medium)",
      "Differentiate y = xˣ using logarithmic differentiation. (Medium)",
      "State and verify Rolle's theorem for f(x) = x² − 4x + 3 on [1, 3]. (Medium)",
      "State and verify Lagrange's Mean Value Theorem for f(x) = x³ on [1, 2]. (Medium)",
      "Write the Maclaurin series expansions of eˣ, sin x and cos x. (Short)",
      "Evaluate lim(x→0) (x − sin x)/x³ using L'Hospital's rule. (Medium)",
      "Find the maxima and minima of f(x) = x³ − 3x² − 9x + 5. (Long)",
      "Explain the steps of curve tracing. (Medium)",
      "State Leibnitz's theorem and find the 2nd derivative of x²eˣ using it. (Long)",
    ],
  },
  {
    unitNumber: 4,
    title: "Integration",
    hours: 12,
    headings: [
      {
        id: "integral-as-limit-sum",
        title: "1. Integral as a Limit of a Sum and the Fundamental Theorem of Calculus",
        icon: "Sigma",
        blocks: [
          {
            kind: "paragraph",
            text: "The DEFINITE INTEGRAL of a continuous function f(x) over [a, b] is defined as the LIMIT of a sum: divide [a, b] into n equal sub-intervals of width h = (b−a)/n, and form the sum of the areas of n thin rectangles Σ f(a + rh)·h; as n → ∞ (h → 0) this sum approaches the exact area under the curve: ∫ₐᵇ f(x) dx = lim(h→0) h·Σ(r=0 to n−1) f(a + rh).",
          },
          {
            kind: "table",
            headers: ["Fundamental Theorem of Calculus (stated without proof)", "Statement"],
            rows: [
              ["Part 1", "If F(x) is any antiderivative of f(x) (i.e., F'(x) = f(x)), then ∫ₐᵇ f(x) dx = F(b) − F(a)."],
              ["Part 2", "Differentiation and integration are inverse processes: d/dx [∫ₐˣ f(t) dt] = f(x)."],
            ],
          },
          {
            kind: "paragraph",
            text: "This theorem is the practical bridge between the abstract 'limit of a sum' definition and the everyday method of evaluating a definite integral by finding an antiderivative and substituting the limits — exactly the method used throughout this unit.",
          },
        ],
      },
      {
        id: "integration-methods",
        title: "2. Indefinite Integrals: Substitution, By Parts and Partial Fractions",
        icon: "RefreshCw",
        blocks: [
          {
            kind: "table",
            headers: ["Standard integral", "Result (+ C omitted for brevity)"],
            rows: [
              ["∫ xⁿ dx", "xⁿ⁺¹/(n+1),  n ≠ −1"],
              ["∫ 1/x dx", "ln|x|"],
              ["∫ eˣ dx", "eˣ"],
              ["∫ sin x dx", "−cos x"],
              ["∫ cos x dx", "sin x"],
              ["∫ sec²x dx", "tan x"],
              ["∫ 1/(1+x²) dx", "tan⁻¹x"],
              ["∫ 1/(x²−a²) dx", "(1/2a) ln|(x−a)/(x+a)|"],
            ],
          },
          {
            kind: "paragraph",
            text: "METHOD OF SUBSTITUTION: if the integral contains a function and its derivative (or a close multiple), substitute t = (the inner function) to simplify the integral. It is the reverse of the chain rule.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example — substitution",
            text: "∫ 2x cos(x²) dx. Let t = x², so dt = 2x dx.  Integral becomes ∫ cos t dt = sin t + C = sin(x²) + C.",
          },
          {
            kind: "paragraph",
            text: "INTEGRATION BY PARTS: used for the integral of a PRODUCT of two functions. Formula: ∫ u dv = uv − ∫ v du (choose u using the order ILATE — Inverse trig, Logarithmic, Algebraic, Trigonometric, Exponential — as the first factor u, so that ∫ v du becomes simpler).",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example — integration by parts",
            text: "∫ x ln x dx. By ILATE, u = ln x (Logarithmic), dv = x dx. Then du = (1/x)dx, v = x²/2.  ∫ x ln x dx = (x²/2)ln x − ∫ (x²/2)(1/x) dx = (x²/2)ln x − ∫ (x/2) dx = (x²/2)ln x − x²/4 + C.",
          },
          {
            kind: "paragraph",
            text: "PARTIAL FRACTIONS: used to integrate a RATIONAL function P(x)/Q(x) (a ratio of polynomials) by first splitting it into simpler fractions whose denominators are the factors of Q(x), which can then be integrated one at a time using the standard results above.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example — partial fractions",
            text: "∫ x / [(x+1)(x+2)] dx.  Write x/[(x+1)(x+2)] = A/(x+1) + B/(x+2).  Then x = A(x+2) + B(x+1).  At x = −1: −1 = A(1) ⟹ A = −1.  At x = −2: −2 = B(−1) ⟹ B = 2.  So the integral = ∫ [−1/(x+1) + 2/(x+2)] dx = −ln|x+1| + 2ln|x+2| + C.",
          },
        ],
      },
      {
        id: "reduction-formulae",
        title: "3. Reduction Formulae for Trigonometric Functions",
        icon: "Repeat",
        blocks: [
          {
            kind: "paragraph",
            text: "A REDUCTION FORMULA expresses an integral involving a power n (such as ∫ sinⁿx dx) in terms of the SAME TYPE of integral with a smaller power (n−2), obtained by using integration by parts once. It lets a hard integral with a large power be reduced step by step to an easy base case (n = 0 or n = 1).",
          },
          {
            kind: "table",
            headers: ["Reduction formula", "Statement"],
            rows: [
              ["∫ sinⁿx dx", "= −(sinⁿ⁻¹x cos x)/n + (n−1)/n · ∫ sinⁿ⁻²x dx"],
              ["∫ cosⁿx dx", "= (cosⁿ⁻¹x sin x)/n + (n−1)/n · ∫ cosⁿ⁻²x dx"],
              ["∫₀^(π/2) sinⁿx dx = ∫₀^(π/2) cosⁿx dx", "= [(n−1)/n · (n−3)/(n−2) · ... ] × (π/2 if n even, ×1 if n odd) — the WALLIS FORMULA"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example — Wallis formula",
            text: "∫₀^(π/2) sin⁴x dx = (3/4)(1/2)(π/2) = 3π/16 ≈ 0.589 (n = 4 is even, so the last factor is π/2).",
          },
        ],
      },
      {
        id: "gamma-beta",
        title: "4. Gamma and Beta Functions (Definition Only)",
        icon: "Sigma",
        blocks: [
          {
            kind: "paragraph",
            text: "The GAMMA FUNCTION and BETA FUNCTION are special definite integrals that generalise the factorial and appear frequently in probability, statistics and advanced calculus. Per the syllabus, only their definitions and basic properties are required (no derivation).",
          },
          {
            kind: "table",
            headers: ["Function", "Definition (n, m > 0)", "Key property"],
            rows: [
              ["Gamma function Γ(n)", "Γ(n) = ∫₀^∞ e⁻ˣ xⁿ⁻¹ dx", "Γ(n) = (n−1)! for a positive integer n;  Γ(n+1) = n·Γ(n);  Γ(1) = 1;  Γ(1/2) = √π"],
              ["Beta function B(m, n)", "B(m, n) = ∫₀¹ xᵐ⁻¹(1−x)ⁿ⁻¹ dx", "B(m, n) = B(n, m)  (symmetric);  B(m, n) = Γ(m)Γ(n) / Γ(m+n)"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved examples",
            text: "Γ(6) = 5! = 120 (since 6 is a positive integer, Γ(6) = (6−1)! = 5!).   B(3, 4) = Γ(3)Γ(4)/Γ(7) = (2!)(3!)/(6!) = (2)(6)/720 = 12/720 = 1/60.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Definite integral", definition: "The limit of a sum, giving the exact area under a curve between two limits." },
      { term: "Fundamental Theorem of Calculus", definition: "∫ₐᵇ f(x)dx = F(b) − F(a), where F is any antiderivative of f." },
      { term: "Integration by substitution", definition: "Simplifying an integral by changing the variable, the reverse of the chain rule." },
      { term: "Integration by parts", definition: "∫u dv = uv − ∫v du, used for integrating a product of two functions." },
      { term: "Partial fractions", definition: "Splitting a rational function into simpler fractions before integrating." },
      { term: "Reduction formula", definition: "A formula that expresses an integral of power n in terms of the same integral of a smaller power." },
      { term: "Gamma / Beta function", definition: "Special definite integrals generalising the factorial; Γ(n)=(n−1)! for integer n." },
    ],
    examQuestions: [
      "Define the definite integral as a limit of a sum. State the Fundamental Theorem of Calculus. (Medium)",
      "Evaluate ∫ 2x cos(x²) dx using substitution. (Short)",
      "Evaluate ∫ x ln x dx using integration by parts. (Medium)",
      "Evaluate ∫ x/[(x+1)(x+2)] dx using partial fractions. (Medium)",
      "State the reduction formula for ∫ sinⁿx dx. Use the Wallis formula to evaluate ∫₀^(π/2) sin⁴x dx. (Long)",
      "Define the Gamma and Beta functions. State their properties. (Medium)",
      "Find Γ(6) and B(3, 4). (Short)",
    ],
  },
  {
    unitNumber: 5,
    title: "Vector Algebra",
    hours: 8,
    headings: [
      {
        id: "vector-basics",
        title: "1. Definition of a Vector in 2 and 3 Dimensions",
        icon: "Compass",
        blocks: [
          {
            kind: "paragraph",
            text: "A SCALAR quantity has only MAGNITUDE (size), e.g., mass, temperature, speed. A VECTOR quantity has both MAGNITUDE and DIRECTION, e.g., displacement, velocity, force. A vector is represented geometrically by a directed line segment (an arrow) and denoted by a bold letter or with an arrow: **a** or a⃗.",
          },
          {
            kind: "table",
            headers: ["Concept", "In 2 dimensions", "In 3 dimensions"],
            rows: [
              ["Component form", "a = a₁i + a₂j, written (a₁, a₂)", "a = a₁i + a₂j + a₃k, written (a₁, a₂, a₃)"],
              ["Unit vectors", "i = (1, 0), j = (0, 1)", "i = (1,0,0), j = (0,1,0), k = (0,0,1)"],
              ["Magnitude (length)", "|a| = √(a₁² + a₂²)", "|a| = √(a₁² + a₂² + a₃²)"],
              ["Unit vector along a", "â = a / |a|", "â = a / |a|"],
            ],
          },
          {
            kind: "table",
            headers: ["Type of vector", "Meaning"],
            rows: [
              ["Zero (null) vector", "A vector with magnitude 0 and no definite direction."],
              ["Unit vector", "A vector with magnitude 1."],
              ["Equal vectors", "Vectors with the same magnitude and the same direction."],
              ["Negative of a vector", "A vector with the same magnitude but opposite direction: −a."],
              ["Position vector", "The vector from the origin O to a point P, written OP⃗."],
              ["Collinear (parallel) vectors", "Vectors along the same line or parallel lines (one is a scalar multiple of the other)."],
              ["Coplanar vectors", "Vectors that lie in, or are parallel to, the same plane."],
            ],
          },
          {
            kind: "table",
            headers: ["Operation", "Rule (a = (a₁,a₂,a₃), b = (b₁,b₂,b₃))"],
            rows: [
              ["Addition", "a + b = (a₁+b₁, a₂+b₂, a₃+b₃) — the TRIANGLE LAW or PARALLELOGRAM LAW of vector addition"],
              ["Scalar multiplication", "k·a = (ka₁, ka₂, ka₃) — stretches (|k|>1), shrinks (|k|<1) or reverses (k<0) the vector"],
            ],
          },
        ],
      },
      {
        id: "dot-product",
        title: "2. Scalar (Dot) Product",
        icon: "Sigma",
        blocks: [
          {
            kind: "paragraph",
            text: "The SCALAR (DOT) PRODUCT of two vectors a and b, written a · b, is a SCALAR (number) defined as a · b = |a||b| cos θ, where θ is the angle between them. In component form: a · b = a₁b₁ + a₂b₂ + a₃b₃.",
          },
          {
            kind: "table",
            headers: ["Property of the dot product", "Statement"],
            rows: [
              ["Commutative", "a · b = b · a"],
              ["Distributive", "a · (b + c) = a·b + a·c"],
              ["With itself", "a · a = |a|²"],
              ["Perpendicular vectors", "a · b = 0  ⟺  a and b are perpendicular (θ = 90°), for non-zero vectors"],
              ["Angle between two vectors", "cos θ = (a · b) / (|a||b|)"],
              ["Unit vectors", "i·i = j·j = k·k = 1;  i·j = j·k = k·i = 0"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example",
            text: "a = (1, 2, 3), b = (4, 5, 6).  a · b = 1(4) + 2(5) + 3(6) = 4 + 10 + 18 = 32.  |a| = √14, |b| = √77.  cos θ = 32/√(14×77) = 32/√1078 ≈ 0.974, so θ ≈ 13.0°.",
          },
        ],
      },
      {
        id: "cross-product",
        title: "3. Vector (Cross) Product",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "The VECTOR (CROSS) PRODUCT of two vectors a and b, written a × b, is a VECTOR whose magnitude is |a||b| sin θ (the area of the parallelogram formed by a and b) and whose direction is perpendicular to both a and b (given by the RIGHT-HAND RULE: curl the fingers from a to b, the thumb points along a × b).",
          },
          {
            kind: "table",
            headers: ["Formula / Property", "Statement"],
            rows: [
              ["Determinant formula", "a × b = | i  j  k ; a₁ a₂ a₃ ; b₁ b₂ b₃ |  (expand along the first row)"],
              ["NOT commutative", "a × b = −(b × a)"],
              ["Parallel vectors", "a × b = 0  ⟺  a and b are parallel (θ = 0° or 180°), for non-zero vectors"],
              ["Unit vectors", "i × j = k,  j × k = i,  k × i = j;  i × i = j × j = k × k = 0"],
              ["Area of a parallelogram", "with sides a, b: Area = |a × b|"],
              ["Area of a triangle", "with sides a, b: Area = (1/2)|a × b|"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example",
            text: "a = (1, 2, 3), b = (4, 5, 6).  a × b = i(2×6 − 3×5) − j(1×6 − 3×4) + k(1×5 − 2×4) = i(12−15) − j(6−12) + k(5−8) = −3i + 6j − 3k = (−3, 6, −3).  |a × b| = √(9+36+9) = √54 = 3√6, so the area of the parallelogram formed by a and b is 3√6 square units.",
          },
        ],
      },
      {
        id: "triple-products",
        title: "4. Scalar Triple Product and Vector Triple Product",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "The SCALAR TRIPLE PRODUCT of three vectors a, b, c is the scalar a · (b × c), also written [a b c]. It is computed directly as the DETERMINANT of the three vectors written as rows.",
          },
          {
            kind: "table",
            headers: ["Property of the scalar triple product", "Statement"],
            rows: [
              ["Determinant form", "[a b c] = a · (b × c) = | a₁ a₂ a₃ ; b₁ b₂ b₃ ; c₁ c₂ c₃ |"],
              ["Cyclic property", "[a b c] = [b c a] = [c a b]  (a cyclic swap does not change the value; a non-cyclic swap changes the sign)"],
              ["Coplanar test", "a, b, c are COPLANAR (lie in the same plane)  ⟺  [a b c] = 0"],
              ["Physical meaning", "|[a b c]| = volume of the PARALLELEPIPED with edges a, b, c"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example — scalar triple product and volume",
            text: "a = (1,2,3), b = (4,5,6), c = (7,8,10).  [a b c] = 1(5×10 − 6×8) − 2(4×10 − 6×7) + 3(4×8 − 5×7) = 1(50−48) − 2(40−42) + 3(32−35) = 2 + 4 − 9 = −3.  Since [a b c] ≠ 0, the three vectors are NOT coplanar. The volume of the parallelepiped with edges a, b, c = |−3| = 3 cubic units.",
          },
          {
            kind: "paragraph",
            text: "The VECTOR TRIPLE PRODUCT of three vectors a, b, c is the vector a × (b × c), which lies in the plane of b and c (since it is perpendicular to a × (something perpendicular to that plane)). It can be expanded WITHOUT computing the cross products directly, using the identity below.",
          },
          {
            kind: "table",
            headers: ["Identity", "Statement"],
            rows: [
              ["Lagrange's (BAC−CAB) identity", "a × (b × c) = b(a · c) − c(a · b)"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example — vector triple product",
            text: "a = (1,2,3), b = (4,5,6), c = (7,8,10).  a·c = 1(7)+2(8)+3(10) = 7+16+30 = 53.  a·b = 1(4)+2(5)+3(6) = 32.  Using the identity: a × (b × c) = 53(4,5,6) − 32(7,8,10) = (212,265,318) − (224,256,320) = (−12, 9, −2).",
          },
        ],
      },
      {
        id: "vector-geometry",
        title: "5. Physical Interpretation of Area and Volume",
        icon: "Target",
        blocks: [
          {
            kind: "table",
            headers: ["Geometric quantity", "Vector formula", "Vectors used"],
            rows: [
              ["Area of a parallelogram", "|a × b|", "Two adjacent sides a, b"],
              ["Area of a triangle", "(1/2)|a × b|", "Two sides a, b of the triangle from one vertex"],
              ["Area of a triangle with vertices A, B, C", "(1/2)|AB⃗ × AC⃗|", "Two sides from vertex A"],
              ["Volume of a parallelepiped", "|a · (b × c)|", "Three edges a, b, c from one vertex"],
              ["Volume of a tetrahedron with edges a, b, c from one vertex", "(1/6)|a · (b × c)|", "One-sixth of the parallelepiped's volume"],
              ["Test for coplanar points/vectors", "[a b c] = 0", "Volume of the parallelepiped is zero"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Area of a triangle with given vertices",
            text: "Find the area of the triangle with vertices A(1,1,1), B(2,3,4), C(3,5,2).  AB⃗ = (1,2,3), AC⃗ = (2,4,1).  AB⃗ × AC⃗ = i(2×1−3×4) − j(1×1−3×2) + k(1×4−2×2) = i(2−12) − j(1−6) + k(4−4) = (−10, 5, 0).  |AB⃗ × AC⃗| = √(100+25) = √125 = 5√5.  Area = (1/2)(5√5) = (5√5)/2 square units.",
          },
          {
            kind: "callout",
            tone: "info",
            title: "Applications of vector algebra",
            text: "Vector algebra is fundamental to computer graphics (surface normals via cross product, lighting via dot product), physics (force, work = F·d, torque = r×F), robotics, and 3-D game engines, where every rotation, projection and collision test is built from dot and cross products.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Vector", definition: "A quantity having both magnitude and direction." },
      { term: "Dot (scalar) product", definition: "a·b = |a||b|cosθ; a scalar result used to find angles and test perpendicularity." },
      { term: "Cross (vector) product", definition: "a×b, a vector perpendicular to both a and b with magnitude |a||b|sinθ." },
      { term: "Scalar triple product", definition: "a·(b×c); its magnitude gives the volume of a parallelepiped." },
      { term: "Vector triple product", definition: "a×(b×c) = b(a·c) − c(a·b)." },
      { term: "Coplanar vectors", definition: "Vectors lying in the same plane; the scalar triple product is zero." },
    ],
    examQuestions: [
      "Define a vector. Explain its types (zero, unit, position, collinear, coplanar). (Medium)",
      "Define the dot product. State its properties. Find the angle between (1,2,3) and (4,5,6). (Medium)",
      "Define the cross product. Find (1,2,3) × (4,5,6) and the area of the parallelogram formed by them. (Long)",
      "Define the scalar triple product. Show that a, b, c are coplanar when [a b c] = 0. (Medium)",
      "Find the scalar triple product of (1,2,3), (4,5,6), (7,8,10) and state whether they are coplanar. Find the volume of the parallelepiped. (Long)",
      "State and apply Lagrange's identity to find a×(b×c) for the given vectors. (Medium)",
      "Find the area of the triangle with vertices A(1,1,1), B(2,3,4), C(3,5,2). (Medium)",
      "Explain the physical interpretation of the cross product and the scalar triple product. (Short)",
    ],
  },
];
