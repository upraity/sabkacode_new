import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Numerical Methods (C-305)
// — Dr. Bhimrao Ambedkar University, Agra, B.C.A. Third Semester.
export const numericalMethodsUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Roots of Equations",
    hours: 8,
    headings: [
      {
        id: "roots-and-bracketing",
        title: "1. Roots of Equations and Bracketing",
        icon: "Target",
        blocks: [
          {
            kind: "paragraph",
            text: "A root of an equation f(x) = 0 is a value of x for which f(x) becomes zero. Numerical methods are used when an exact algebraic solution is difficult or unavailable. Before applying a bracketing method, choose an interval [a,b] in which f(a) and f(b) have opposite signs. If f is continuous on [a,b] and f(a)f(b) < 0, the Intermediate Value Theorem guarantees at least one root in the interval."
          },
          {
            kind: "table",
            headers: ["Method", "Basic idea", "Requires bracket?", "Main feature"],
            rows: [
              ["Bisection", "Repeatedly halves an interval and retains the sign-changing half.", "Yes", "Very reliable; linear convergence."],
              ["False Position", "Uses a straight line through endpoint values to estimate the root.", "Yes", "Usually faster than bisection when the bracket behaves well."],
              ["Newton-Raphson", "Uses the tangent at the current approximation.", "No", "Very fast near a simple root; needs derivative."],
              ["Rate of convergence", "Measures how rapidly errors decrease as iterations increase.", "Not a method itself", "Used to compare iterative methods."]
            ]
          },
          {
            kind: "diagram",
            diagramId: "c305-root-finding-methods",
            caption: "Conceptual comparison of bracketing and open root-finding methods."
          }
        ]
      },
      {
        id: "bisection-method",
        title: "2. Bisection Method",
        icon: "Repeat",
        blocks: [
          {
            kind: "paragraph",
            text: "The Bisection Method is a closed or bracketing method. If f(a)f(b) < 0, calculate the midpoint c = (a+b)/2. Test the sign of f(c). If f(a)f(c) < 0, replace b by c; otherwise replace a by c. Repeat until the interval is sufficiently small or |f(c)| is sufficiently close to zero."
          },
          {
            kind: "table",
            headers: ["Step", "Operation"],
            rows: [
              ["1", "Choose a and b such that f(a)f(b) < 0."],
              ["2", "Compute c = (a+b)/2."],
              ["3", "Evaluate f(c)."],
              ["4", "Select the half interval containing the sign change."],
              ["5", "Repeat until the required accuracy is reached."]
            ]
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked Example: Bisection",
            text: "Find an approximation to the root of f(x) = x^3 − x − 2 in [1,2]. f(1) = −2 and f(2) = 4, so a root is bracketed. Iteration 1: c = 1.500000, f(c) = 0.875000, so use [1,1.5]. Iteration 2: c = 1.250000, f(c) = −0.296875, so use [1.25,1.5]. Iteration 3: c = 1.375000, f(c) = 0.224609, so use [1.25,1.375]. Thus after three bisections the root is bracketed in [1.25,1.375]."
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam Point",
            text: "Bisection cannot lose the bracket if the sign-change rule is followed. For an initial interval of width b−a, after n iterations the interval width is (b−a)/2^n."
          }
        ]
      },
      {
        id: "false-position-method",
        title: "3. False Position Method",
        icon: "LineChart",
        blocks: [
          {
            kind: "paragraph",
            text: "The False Position Method, or Regula Falsi, retains the bracketing principle but estimates the root by the x-intercept of the straight line joining (a,f(a)) and (b,f(b)). The estimate is x = [a f(b) − b f(a)]/[f(b) − f(a)]. After computing x, replace the endpoint having the same sign as f(x)."
          },
          {
            kind: "table",
            headers: ["Aspect", "Bisection", "False Position"],
            rows: [
              ["Estimate", "Midpoint of interval", "x-intercept of secant line"],
              ["Bracket preserved", "Yes", "Yes"],
              ["Derivative required", "No", "No"],
              ["Typical advantage", "Predictable reduction of interval", "Can locate a root faster when the secant estimate is good"]
            ]
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked Example: First False-Position Iteration",
            text: "For f(x) = x^3 − x − 2 with a=1 and b=2, f(1)=−2 and f(2)=4. x = [1(4) − 2(−2)]/[4−(−2)] = 8/6 = 1.333333. Since f(1.333333) ≈ −0.962963, the new bracket is [1.333333, 2]."
          }
        ]
      },
      {
        id: "newton-raphson-method",
        title: "4. Newton's Raphson Method",
        icon: "Crosshair",
        blocks: [
          {
            kind: "paragraph",
            text: "Newton-Raphson is an open iterative method based on the tangent to f(x) at the current approximation x_n. The formula is x_(n+1) = x_n − f(x_n)/f'(x_n). A good initial guess is important. The method can converge very rapidly near a simple root, but it may fail or diverge when f'(x) is zero or very small, the starting value is poor, or the function has an unfavorable shape."
          },
          {
            kind: "diagram",
            diagramId: "c305-newton-tangent",
            caption: "Newton-Raphson iteration: tangent intercept used as the next approximation."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked Example: Newton-Raphson",
            text: "For f(x)=x^3−x−2, f'(x)=3x^2−1. Take x0=1.5. Then x1=1.5−0.875/5.75=1.347826. Continuing from this value gives x2≈1.488742, and subsequent iterations move toward the root. The important exam step is to show f(x_n), f'(x_n), and the substitution in the iteration formula at every stage."
          },
          {
            kind: "info",
            title: "Exam Note",
            text: "State both the iteration formula and the stopping criterion. A common criterion is |x_(n+1)−x_n| < ε, or |f(x_n)| < ε, depending on the question."
          }
        ]
      },
      {
        id: "rate-of-convergence",
        title: "5. Rate of Convergence of Newton's Method",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "paragraph",
            text: "The order of convergence describes how quickly the error approaches zero. If e_n denotes the error at iteration n, an iterative method has order p when e_(n+1) is approximately proportional to |e_n|^p near the root. For a simple root and suitable starting value, Newton-Raphson has quadratic convergence (p=2), which is substantially faster than the linear convergence of bisection."
          },
          {
            kind: "table",
            headers: ["Method", "Typical order", "Interpretation"],
            rows: [
              ["Bisection", "1 (linear)", "Error decreases at a roughly constant linear rate."],
              ["False Position", "Usually linear", "Speed depends strongly on function shape and endpoint behavior."],
              ["Newton-Raphson", "2 (quadratic) near a simple root", "Correct digits can increase rapidly after entering the local convergence region."]
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Root", definition: "A value x for which f(x)=0." },
      { term: "Bracketing", definition: "Choosing an interval whose endpoint function values have opposite signs." },
      { term: "Bisection Method", definition: "A bracketing method that repeatedly halves an interval." },
      { term: "False Position", definition: "A bracketing method that estimates the root using a secant-line intercept." },
      { term: "Newton-Raphson", definition: "An iterative method using the tangent formula x_(n+1)=x_n−f(x_n)/f'(x_n)." },
      { term: "Convergence", definition: "The tendency of successive approximations to approach the required root." },
      { term: "Order of convergence", definition: "A measure of how the error decreases from one iteration to the next." },
      { term: "Tolerance", definition: "The allowed numerical error used to decide when an iteration may stop." }
    ],
    examQuestions: [
      "Define a root of an equation and explain the need for numerical root-finding methods. (Short)",
      "Explain the Bisection Method with algorithm and stopping criterion. (Medium)",
      "Solve a nonlinear equation by the Bisection Method for a specified number of iterations. (Long)",
      "Explain the False Position Method and derive its iteration formula. (Medium)",
      "Compare Bisection and False Position Methods. (Short)",
      "Explain Newton's Raphson Method with derivation from the tangent equation. (Long)",
      "Apply Newton-Raphson Method to obtain a root of a given equation. (Long)",
      "Discuss the convergence and limitations of Newton-Raphson Method. (Medium)",
      "Explain the rate of convergence of Bisection, False Position and Newton-Raphson methods. (Medium)"
    ]
  },

  {
    unitNumber: 2,
    title: "Interpolation and Extrapolation",
    hours: 8,
    headings: [
      {
        id: "finite-differences",
        title: "1. Finite Differences",
        icon: "Table",
        blocks: [
          {
            kind: "paragraph",
            text: "Interpolation estimates the value of a function inside the range of known data, while extrapolation estimates a value outside the known range. Finite differences are especially useful when x-values are equally spaced. The forward difference is Δy_i = y_(i+1)−y_i; the second difference is Δ²y_i = Δy_(i+1)−Δy_i, and higher differences are obtained similarly."
          },
          {
            kind: "table",
            headers: ["Difference", "Definition"],
            rows: [
              ["First forward difference", "Δy_i = y_(i+1) − y_i"],
              ["Second forward difference", "Δ²y_i = Δy_(i+1) − Δy_i"],
              ["Third forward difference", "Δ³y_i = Δ²y_(i+1) − Δ²y_i"],
              ["Backward difference", "∇y_i = y_i − y_(i−1)"]
            ]
          },
          {
            kind: "diagram",
            diagramId: "c305-difference-table",
            caption: "Finite-difference table showing successive difference levels."
          }
        ]
      },
      {
        id: "newton-forward-backward",
        title: "2. Newton's Forward and Backward Interpolation",
        icon: "ArrowLeftRight",
        blocks: [
          {
            kind: "paragraph",
            text: "Newton's Forward Interpolation Formula is used mainly when the required x is near the beginning of an equally spaced table. With p=(x−x0)/h, y(x)=y0+pΔy0+[p(p−1)/2!]Δ²y0+[p(p−1)(p−2)/3!]Δ³y0+... . Newton's Backward Formula is used mainly near the end of the table: y(x)=yn+p∇yn+[p(p+1)/2!]∇²yn+[p(p+1)(p+2)/3!]∇³yn+..., where p=(x−xn)/h."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked Example: Forward Interpolation",
            text: "Given x: 0,1,2 and y: 1,3,7, estimate y at x=1.5. Here h=1 and p=1.5. The differences are Δy0=2 and Δ²y0=2. Therefore y=1+(1.5)(2)+[1.5(0.5)/2](2)=1+3+0.75=4.75."
          },
          {
            kind: "callout",
            tone: "info",
            title: "Formula Selection",
            text: "Use Forward interpolation when x is near the beginning of an equally spaced table and Backward interpolation when x is near the end. Always calculate h and p before substituting."
          }
        ]
      },
      {
        id: "lagrange-interpolation",
        title: "3. Lagrange's Interpolation Formula",
        icon: "Sigma",
        blocks: [
          {
            kind: "paragraph",
            text: "Lagrange interpolation is convenient when x-values are not equally spaced. For n+1 data points, P(x)=Σ[y_i L_i(x)], where L_i(x)=Π[(x−x_j)/(x_i−x_j)] for j≠i. No finite-difference table is required."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked Example: Lagrange Interpolation",
            text: "For points (0,1), (1,3), (2,7), estimate y at x=1.5. L0=(1.5−1)(1.5−2)/[(0−1)(0−2)]=−0.125; L1=(1.5−0)(1.5−2)/[(1−0)(1−2)]=0.75; L2=(1.5−0)(1.5−1)/[(2−0)(2−1)]=0.375. Thus P(1.5)=1(−0.125)+3(0.75)+7(0.375)=4.75."
          },
          {
            kind: "table",
            headers: ["Newton Formula", "Lagrange Formula"],
            rows: [
              ["Best suited to", "Equally spaced data for forward/backward forms", "Equally or unequally spaced data"],
              ["Main structure", "Uses finite differences", "Uses Lagrange basis polynomials"],
              ["Table required", "Difference table generally required", "No difference table required"],
              ["Calculation", "Efficient for repeated values in an established table", "Direct but can become lengthy with many points"]
            ]
          }
        ]
      },
      {
        id: "gauss-stirling-bessel-laplace",
        title: "4. Gauss, Stirling, Bessel and Laplace Interpolation",
        icon: "Scale",
        blocks: [
          {
            kind: "paragraph",
            text: "Central-difference interpolation formulas are useful when the required x lies near the middle of an equally spaced data table. Gauss forward and Gauss backward formulas arrange central differences around the central argument. Stirling's formula is particularly convenient when x is very near the central value. Bessel's formula is useful when x lies near the midpoint between two central tabulated values. Laplace's interpolation formula is another central-difference form used for suitable equally spaced data."
          },
          {
            kind: "table",
            headers: ["Formula", "Typical location of x", "Data requirement"],
            rows: [
              ["Gauss Forward", "Near the center, slightly on the forward side", "Equally spaced x-values"],
              ["Gauss Backward", "Near the center, slightly on the backward side", "Equally spaced x-values"],
              ["Stirling", "Very close to the central value", "Equally spaced x-values"],
              ["Bessel", "Near the midpoint of two central values", "Equally spaced x-values"],
              ["Laplace", "Central interpolation arrangement", "Equally spaced x-values"]
            ]
          },
          {
            kind: "info",
            title: "Exam Strategy",
            text: "In a numerical problem, first locate the required x relative to the center of the table. Then choose the central formula whose arrangement matches that location. Write the selected formula before substituting difference-table values."
          }
        ]
      },
      {
        id: "extrapolation",
        title: "5. Interpolation versus Extrapolation",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "paragraph",
            text: "Interpolation predicts a value within the range of observed x-values. Extrapolation predicts beyond that range. Interpolation is generally safer because the estimate is supported by data on both sides or within the known interval; extrapolation depends more strongly on the assumed mathematical trend."
          },
          {
            kind: "table",
            headers: ["Feature", "Interpolation", "Extrapolation"],
            rows: [
              ["Location", "Inside the known data range", "Outside the known data range"],
              ["Purpose", "Estimate missing intermediate value", "Estimate beyond available observations"],
              ["Risk", "Usually lower", "Usually higher because trend assumptions extend beyond data"]
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Interpolation", definition: "Estimation of an unknown value inside the range of known data." },
      { term: "Extrapolation", definition: "Estimation of a value outside the range of known data." },
      { term: "Finite Difference", definition: "A difference between successive tabulated function values used to build interpolation formulas." },
      { term: "Forward Difference", definition: "Difference formed by subtracting a value from the next value." },
      { term: "Backward Difference", definition: "Difference formed by subtracting the previous value from the current value." },
      { term: "Lagrange Polynomial", definition: "An interpolation polynomial constructed from basis polynomials for known data points." },
      { term: "Stirling Formula", definition: "A central interpolation formula suited to a point near the middle of an equally spaced table." },
      { term: "Bessel Formula", definition: "A central interpolation formula suited to a point near the midpoint of two central values." }
    ],
    examQuestions: [
      "Define interpolation and extrapolation and distinguish between them. (Short)",
      "Construct a forward finite-difference table for given tabulated data. (Medium)",
      "Explain Newton's Forward Interpolation Formula and its conditions of use. (Long)",
      "Explain Newton's Backward Interpolation Formula with notation. (Long)",
      "Use Newton's Forward Formula to estimate a missing value. (Long)",
      "Derive and apply Lagrange's Interpolation Formula. (Long)",
      "Compare Newton's and Lagrange's interpolation methods. (Medium)",
      "Explain Gauss Forward and Gauss Backward interpolation formulas. (Medium)",
      "Explain Stirling and Bessel interpolation and state when each is preferred. (Medium)",
      "Write short notes on Laplace interpolation formula and central differences. (Short)"
    ]
  },

  {
    unitNumber: 3,
    title: "Numerical Differentiation and Numerical Integration",
    hours: 8,
    headings: [
      {
        id: "numerical-differentiation",
        title: "1. Numerical Differentiation",
        icon: "LineChart",
        blocks: [
          {
            kind: "paragraph",
            text: "Numerical differentiation estimates derivatives from tabulated values when an explicit differentiable function is unavailable or inconvenient. For equally spaced data, finite-difference formulas provide approximations to the first and higher derivatives. The choice of forward, backward, or central form depends on the location of the required point."
          },
          {
            kind: "table",
            headers: ["Location", "Common approach"],
            rows: [
              ["Near beginning", "Forward-difference derivative formula"],
              ["Near end", "Backward-difference derivative formula"],
              ["Near middle", "Central-difference formulas are often preferred"]
            ]
          }
        ]
      },
      {
        id: "numerical-integration",
        title: "2. Numerical Integration and Quadrature",
        icon: "Sigma",
        blocks: [
          {
            kind: "paragraph",
            text: "Numerical integration, or quadrature, approximates a definite integral from function values. It is useful when an antiderivative is difficult to obtain or when only tabulated observations are available. The syllabus covers direct methods, the maximum and minimum of a tabulated function, the general quadrature formula, Trapezoidal Rule, Simpson's One-Third Rule, Simpson's Three-Eighth Rule and Eight Rule."
          },
          {
            kind: "diagram",
            diagramId: "c305-quadrature-rules",
            caption: "Geometric interpretation of trapezoidal and Simpson-type quadrature ideas."
          }
        ]
      },
      {
        id: "trapezoidal-rule",
        title: "3. Trapezoidal Rule",
        icon: "LayoutTemplate",
        blocks: [
          {
            kind: "paragraph",
            text: "For equally spaced points with step size h=(b−a)/n, the composite Trapezoidal Rule is integral(a to b) f(x)dx ≈ h/2 [y0 + yn + 2(y1+y2+...+y_(n−1))]. It replaces the curve over each subinterval by a straight line and therefore sums trapezoid areas."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked Example: Trapezoidal Rule",
            text: "Approximate integral from 0 to 2 of x^2 dx using n=2. h=(2−0)/2=1. The values are y0=0, y1=1, y2=4. Integral ≈ (1/2)[0+4+2(1)] = 3. The exact integral is 8/3≈2.6667, showing the approximation error for this coarse partition."
          },
          {
            kind: "info",
            title: "Condition",
            text: "For the composite Trapezoidal Rule, the interval is divided into n equal subintervals. The method can be applied for any positive integer n."
          }
        ]
      },
      {
        id: "simpsons-one-third",
        title: "4. Simpson's One-Third Rule",
        icon: "Percent",
        blocks: [
          {
            kind: "paragraph",
            text: "Simpson's One-Third Rule fits a quadratic polynomial over pairs of subintervals. For equally spaced points and even n, integral(a to b) f(x)dx ≈ h/3 [y0 + yn + 4(y1+y3+...+y_(n−1)) + 2(y2+y4+...+y_(n−2))]."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked Example: Simpson's One-Third",
            text: "For integral from 0 to 2 of x^2 dx with n=2 and h=1, y0=0, y1=1, y2=4. Integral ≈ 1/3[0+4+4(1)] = 8/3 = 2.666666..., which equals the exact value for this quadratic."
          },
          {
            kind: "info",
            title: "Exam Point",
            text: "The composite One-Third Rule requires an even number of subintervals. In the formula, odd-indexed interior ordinates receive coefficient 4 and even-indexed interior ordinates receive coefficient 2."
          }
        ]
      },
      {
        id: "simpsons-three-eighth-and-eight-rule",
        title: "5. Simpson's Three-Eighth and Eight Rule",
        icon: "Scale",
        blocks: [
          {
            kind: "paragraph",
            text: "Simpson's Three-Eighth Rule uses cubic interpolation over groups of three subintervals. For a single group with equal spacing h, integral(x0 to x3) f(x)dx ≈ 3h/8 [y0+3y1+3y2+y3]. The Eight Rule listed in the syllabus is another quadrature formula; when answering an examination question, reproduce the exact form taught in class or prescribed by the course text, because naming conventions for higher-order quadrature formulas can vary."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked Example: Three-Eighth Rule",
            text: "For integral from 0 to 3 of x^3 dx, use h=1 and values y0=0, y1=1, y2=8, y3=27. Approximation = 3/8[0+3(1)+3(8)+27] = 3/8(54) = 20.25. The exact integral is 81/4 = 20.25."
          },
          {
            kind: "table",
            headers: ["Rule", "Basic interpolation idea", "Subinterval condition"],
            rows: [
              ["Trapezoidal", "Linear", "No parity restriction for composite form"],
              ["Simpson 1/3", "Quadratic", "n must be even"],
              ["Simpson 3/8", "Cubic", "n must be a multiple of 3 for the composite form"]
            ]
          }
        ]
      },
      {
        id: "maximum-minimum-tabulated-function",
        title: "6. Maximum and Minimum of a Tabulated Function",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "paragraph",
            text: "For tabulated data, the largest and smallest listed function values give the observed maximum and minimum among the tabulated points. If the question asks for a maximum or minimum between tabulated points, interpolation or numerical differentiation can be used to estimate where the derivative changes sign. Therefore, distinguish an observed tabular maximum from a continuous-function extremum."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Numerical Differentiation", definition: "Approximation of derivatives using tabulated or sampled function values." },
      { term: "Quadrature", definition: "Numerical approximation of a definite integral." },
      { term: "Trapezoidal Rule", definition: "Integration rule that approximates each strip by a trapezoid." },
      { term: "Simpson's 1/3 Rule", definition: "Quadratic interpolation-based rule using alternating coefficients 4 and 2." },
      { term: "Simpson's 3/8 Rule", definition: "Cubic interpolation-based rule using coefficients 1,3,3,1 for one group." },
      { term: "Step size", definition: "The spacing h between consecutive equally spaced x-values." },
      { term: "Quadrature error", definition: "Difference between a numerical integral and the exact integral." },
      { term: "Tabulated function", definition: "A function represented by discrete values at specified arguments." }
    ],
    examQuestions: [
      "Explain the need for numerical differentiation and state suitable formulas for tabulated data. (Medium)",
      "Define numerical integration and explain the idea of quadrature. (Short)",
      "Derive the composite Trapezoidal Rule. (Long)",
      "Evaluate a definite integral using the Trapezoidal Rule. (Long)",
      "Derive Simpson's One-Third Rule and state its condition. (Long)",
      "Evaluate a definite integral using Simpson's One-Third Rule. (Long)",
      "Explain Simpson's Three-Eighth Rule with formula and condition. (Medium)",
      "Apply Simpson's Three-Eighth Rule to a numerical example. (Long)",
      "Compare Trapezoidal, Simpson's 1/3 and Simpson's 3/8 rules. (Medium)",
      "Explain how maximum and minimum values can be obtained from tabulated data. (Short)"
    ]
  },

  {
    unitNumber: 4,
    title: "Solution of Linear Equations",
    hours: 8,
    headings: [
      {
        id: "linear-equation-system",
        title: "1. System of Linear Equations",
        icon: "Table",
        blocks: [
          {
            kind: "paragraph",
            text: "A system of linear equations can be written as AX=B, where A is the coefficient matrix, X is the vector of unknowns, and B is the constant vector. Numerical solution is required when the system is too large or when a direct symbolic solution is inconvenient. The syllabus covers Gauss's Elimination Method and Gauss-Seidel iterative Method."
          },
          {
            kind: "table",
            headers: ["Method", "Type", "Core idea", "Convergence issue"],
            rows: [
              ["Gauss Elimination", "Direct", "Transform the augmented matrix to upper triangular form, then use back substitution.", "Does not require iterative convergence; pivoting may be needed for numerical stability."],
              ["Gauss-Seidel", "Iterative", "Repeatedly update each unknown using the newest available values.", "Convergence depends on the system and ordering; diagonal dominance is a common sufficient condition."]
            ]
          },
          {
            kind: "diagram",
            diagramId: "c305-gauss-elimination",
            caption: "Flow of Gaussian elimination from augmented matrix to back substitution."
          }
        ]
      },
      {
        id: "gaussian-elimination",
        title: "2. Gauss's Elimination Method",
        icon: "ArrowLeftRight",
        blocks: [
          {
            kind: "paragraph",
            text: "Gauss elimination eliminates unknowns successively. First, the coefficient of the first unknown is used as a pivot to eliminate that unknown from equations below it. The process is repeated for the second and later pivots until an upper triangular system is obtained. The unknowns are then found by back substitution, beginning with the last equation."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked Example: Gaussian Elimination",
            text: "Solve x+y=3 and 2x+3y=8. The augmented matrix is [1 1 | 3; 2 3 | 8]. Apply R2←R2−2R1: [1 1 | 3; 0 1 | 2]. Back substitution gives y=2 and x=1. Therefore the solution is (x,y)=(1,2)."
          },
          {
            kind: "info",
            title: "Pivoting",
            text: "If a pivot is zero, row interchange is necessary. Even when the pivot is nonzero, partial pivoting can improve numerical stability by selecting a suitably large pivot in the current column."
          }
        ]
      },
      {
        id: "gauss-seidel-method",
        title: "3. Gauss-Seidel Iterative Method",
        icon: "Repeat",
        blocks: [
          {
            kind: "paragraph",
            text: "In Gauss-Seidel iteration, each equation is rearranged so that one variable is expressed in terms of the others. Starting from an initial guess, the variables are updated one at a time. A newly calculated value is used immediately in the next equation of the same iteration. Iteration continues until the changes between successive iterations satisfy the chosen tolerance."
          },
          {
            kind: "diagram",
            diagramId: "c305-gauss-seidel",
            caption: "Gauss-Seidel update cycle showing immediate reuse of newly computed values."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked Example: One Gauss-Seidel Iteration",
            text: "For 4x+y=9 and x+3y=7, write x=(9−y)/4 and y=(7−x)/3. Starting from x0=0, y0=0: x1=(9−0)/4=2.25. Use this new x1 immediately: y1=(7−2.25)/3=1.583333. This is one Gauss-Seidel iteration."
          },
          {
            kind: "table",
            headers: ["Point", "Gauss-Seidel"],
            rows: [
              ["Update rule", "Use the newest available variable values immediately."],
              ["Initial guess", "Required."],
              ["Stopping test", "Often based on maximum change or residual tolerance."],
              ["Typical sufficient condition", "Strict diagonal dominance can guarantee convergence for common formulations."]
            ]
          }
        ]
      },
      {
        id: "direct-versus-iterative",
        title: "4. Direct and Iterative Solutions",
        icon: "GitCompare",
        blocks: [
          {
            kind: "paragraph",
            text: "Gauss elimination is a direct method: in exact arithmetic it reaches the solution through a finite sequence of elimination and substitution operations. Gauss-Seidel is iterative: it generates a sequence of approximations. For exam answers, clearly distinguish finite elimination operations from repeated approximation and convergence testing."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Linear System", definition: "A collection of linear equations in one or more unknowns." },
      { term: "Augmented Matrix", definition: "The coefficient matrix with the constants column appended." },
      { term: "Pivot", definition: "The current matrix element used to eliminate entries below or above it." },
      { term: "Elimination", definition: "Row operations used to remove an unknown from selected equations." },
      { term: "Back Substitution", definition: "Finding unknowns from the last equation upward after triangularization." },
      { term: "Gauss-Seidel", definition: "An iterative method that immediately reuses newly computed variable values." },
      { term: "Diagonal Dominance", definition: "A condition where the magnitude of a diagonal coefficient exceeds the sum of magnitudes of the other coefficients in its row." },
      { term: "Residual", definition: "The difference obtained when an approximate solution is substituted into the original equations." }
    ],
    examQuestions: [
      "Explain the representation AX=B of a system of linear equations. (Short)",
      "Describe Gauss's Elimination Method with algorithm. (Medium)",
      "Solve a system of linear equations using Gauss elimination. (Long)",
      "Explain pivoting and its importance in Gaussian elimination. (Medium)",
      "Explain Gauss-Seidel iterative Method and its algorithm. (Long)",
      "Perform Gauss-Seidel iterations for a given system using an initial approximation. (Long)",
      "State a sufficient condition commonly used to support convergence of Gauss-Seidel iteration. (Short)",
      "Differentiate direct and iterative methods of solving linear equations. (Medium)"
    ]
  },

  {
    unitNumber: 5,
    title: "Solution of Differential Equations",
    hours: 8,
    headings: [
      {
        id: "first-order-ode",
        title: "1. Numerical Solution of Differential Equations",
        icon: "Waves",
        blocks: [
          {
            kind: "paragraph",
            text: "A first-order initial-value problem has the form dy/dx=f(x,y), y(x0)=y0. Numerical methods generate approximate values of y at successive x-values when an exact solution is difficult to obtain. The syllabus covers Euler's Method, Picard's Method and the Fourth-Order Runge-Kutta Method."
          },
          {
            kind: "table",
            headers: ["Method", "Main idea", "Typical characteristic"],
            rows: [
              ["Euler", "Uses the slope at the current point to move to the next point.", "Simple, but comparatively low accuracy."],
              ["Picard", "Uses successive substitution in the integral form of the differential equation.", "Provides successive approximations and is useful for understanding iterative solution construction."],
              ["RK4", "Combines four slope estimates within each step.", "High practical accuracy for many smooth initial-value problems."]
            ]
          },
          {
            kind: "diagram",
            diagramId: "c305-ode-methods",
            caption: "Conceptual comparison of Euler, Picard and fourth-order Runge-Kutta approaches."
          }
        ]
      },
      {
        id: "euler-method",
        title: "2. Euler's Method",
        icon: "ArrowLeftRight",
        blocks: [
          {
            kind: "paragraph",
            text: "Euler's Method uses the differential equation's slope at the current point. If y'=f(x,y), then y_(n+1)=y_n+h f(x_n,y_n), with x_(n+1)=x_n+h. It is easy to apply but accumulates truncation error because the slope is treated as constant over each step."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked Example: Euler Method",
            text: "For y'=x+y, y(0)=1, take h=0.1. At (x0,y0)=(0,1), slope f=0+1=1. Hence y1=1+0.1(1)=1.1 and x1=0.1. At the next point, slope f(0.1,1.1)=1.2, so y2=1.1+0.1(1.2)=1.22 at x2=0.2."
          }
        ]
      },
      {
        id: "picard-method",
        title: "3. Picard's Method",
        icon: "Repeat",
        blocks: [
          {
            kind: "paragraph",
            text: "Picard's method converts y'=f(x,y), y(x0)=y0 into the integral equation y=y0+integral from x0 to x of f(t,y(t))dt. Starting with an initial approximation, successive substitutions generate improved approximations. For a problem such as y'=x+y, y(0)=1, the first approximation is obtained by replacing y(t) inside the integral with the initial approximation."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Picard Iteration Structure",
            text: "For y'=x+y, y(0)=1, take y0(x)=1. Then y1(x)=1+integral from 0 to x (t+1)dt = 1+x+x^2/2. The next approximation is formed by substituting y1(t) into the integral: y2(x)=1+integral from 0 to x [t+1+t+t^2/2]dt = 1+x+x^2+x^3/6."
          },
          {
            kind: "info",
            title: "Exam Point",
            text: "Show the integral form first, state the initial approximation, and then show at least the requested number of successive substitutions. Do not skip the transformation from differential to integral form."
          }
        ]
      },
      {
        id: "runge-kutta-fourth-order",
        title: "4. Fourth-Order Runge-Kutta Method",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "paragraph",
            text: "The classical fourth-order Runge-Kutta method (RK4) uses four slopes in each step. For y'=f(x,y): k1=f(xn,yn); k2=f(xn+h/2, yn+hk1/2); k3=f(xn+h/2, yn+hk2/2); k4=f(xn+h, yn+hk3); then y_(n+1)=yn+(h/6)(k1+2k2+2k3+k4)."
          },
          {
            kind: "diagram",
            diagramId: "c305-rk4-four-slopes",
            caption: "The four slope evaluations k1, k2, k3 and k4 used by classical RK4."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked Example: One RK4 Step",
            text: "For y'=y, y(0)=1 with h=0.1: k1=1; k2=1.05; k3=1.0525; k4=1.10525. Therefore y1=1+(0.1/6)(1+2(1.05)+2(1.0525)+1.10525)=1.1051708333. This is close to the exact value e^0.1≈1.105170186."
          },
          {
            kind: "table",
            headers: ["Slope", "Evaluation point"],
            rows: [
              ["k1", "Start of interval"],
              ["k2", "Midpoint using k1"],
              ["k3", "Midpoint using k2"],
              ["k4", "End of interval using k3"]
            ]
          }
        ]
      },
      {
        id: "method-comparison",
        title: "5. Comparison of Numerical ODE Methods",
        icon: "GitCompareArrows",
        blocks: [
          {
            kind: "table",
            headers: ["Feature", "Euler", "Picard", "RK4"],
            rows: [
              ["Basic mechanism", "Single slope step", "Successive integral substitution", "Four weighted slopes"],
              ["Ease of calculation", "Very easy", "Can become algebraically lengthy", "Moderate numerical work"],
              ["Accuracy", "Lower for a given step size", "Depends on number and quality of iterations", "Generally high for smooth problems"],
              ["Best exam emphasis", "Formula and step-by-step table", "Integral transformation and iterations", "Correct k1, k2, k3, k4 substitutions"]
            ]
          },
          {
            kind: "info",
            title: "Exam Writing Tip",
            text: "For any numerical differential-equation problem, write the initial condition, define h, state the method formula, calculate intermediate quantities in a table or clearly separated steps, and state the final approximation with its x-value."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Initial-Value Problem", definition: "A differential equation supplied with a value of the dependent variable at a starting point." },
      { term: "Step Size", definition: "The increment h between successive independent-variable values." },
      { term: "Euler's Method", definition: "A first-order numerical method using the current slope to advance the solution." },
      { term: "Picard's Method", definition: "A successive-approximation method based on the integral form of the differential equation." },
      { term: "Runge-Kutta Method", definition: "A family of methods combining several slope estimates within one step." },
      { term: "RK4", definition: "The classical fourth-order Runge-Kutta method using four slope evaluations." },
      { term: "Truncation Error", definition: "Error introduced by replacing an exact mathematical process with a finite approximation." },
      { term: "Initial Approximation", definition: "The starting function or value used to generate successive numerical approximations." }
    ],
    examQuestions: [
      "Define an initial-value problem for a first-order differential equation. (Short)",
      "Explain Euler's Method and derive its iteration formula. (Medium)",
      "Solve a first-order differential equation numerically using Euler's Method. (Long)",
      "Explain Picard's Method and convert a differential equation into its integral form. (Long)",
      "Obtain successive Picard approximations for a given initial-value problem. (Long)",
      "Explain the classical fourth-order Runge-Kutta Method and all four k-values. (Long)",
      "Perform one or more RK4 steps for a given differential equation. (Long)",
      "Compare Euler, Picard and RK4 methods. (Medium)",
      "What is the role of step size in numerical solution of differential equations? (Short)"
    ]
  }
];
