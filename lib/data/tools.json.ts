import { Tool } from "@/types";

export const tools: Tool[] = [
  {
    id: "t-cgpa",
    slug: "cgpa-calculator",
    name: "CGPA Calculator",
    description: "Calculate your overall CGPA from semester-wise SGPA.",
    category: "student-tools",
    icon: "Calculator",
    howItWorks: `CGPA (Cumulative Grade Point Average) is a credit-weighted average of your SGPA across all completed semesters — not a plain average. Each semester's SGPA is multiplied by that semester's total credits, these are added up across every semester, and the result is divided by your total credits overall:

CGPA = (SGPA₁ × Credits₁ + SGPA₂ × Credits₂ + ... ) ÷ (Credits₁ + Credits₂ + ...)

Weighting by credits matters because semesters with heavier credit loads (more or longer subjects) count proportionally more toward your final CGPA than lighter semesters.`,
    faqs: [
      {
        q: "Is CGPA the same as taking a simple average of my SGPAs?",
        a: "Only if every semester has the exact same total credits. If credit loads differ between semesters, a simple average and the credit-weighted CGPA will give slightly different numbers — the credit-weighted version is the correct one most universities use.",
      },
      {
        q: "Does a backlog or re-attempted subject affect CGPA differently?",
        a: "This varies by university — some recompute the grade point once you clear a backlog, others keep the original attempt's grade point in certain calculations. Check your university's examination rules for the exact policy.",
      },
      {
        q: "What's considered a good CGPA?",
        a: "It depends heavily on your university's grading scale and the opportunity you're applying for, but as a rough guide, 7.5+ is generally considered strong and 8.5+ excellent on a 10-point scale in most Indian universities.",
      },
    ],
  },
  {
    id: "t-sgpa",
    slug: "sgpa-calculator",
    name: "SGPA Calculator",
    description: "Calculate your SGPA from subject-wise credits and grade points.",
    category: "student-tools",
    icon: "Calculator",
    howItWorks: `SGPA (Semester Grade Point Average) is the credit-weighted average of the grade points you scored in each subject within a single semester:

SGPA = (Credits₁ × GradePoint₁ + Credits₂ × GradePoint₂ + ...) ÷ (Credits₁ + Credits₂ + ...)

A subject's "grade point" (usually on a 0–10 scale) comes from the letter grade or marks band your university assigns for that subject — a 4-credit subject where you score a 9 grade point contributes more to your SGPA than a 2-credit subject with the same grade point, because it's weighted by credits.`,
    faqs: [
      {
        q: "What exactly is a 'grade point'?",
        a: "It's a numeric value (commonly 0–10) your university maps to a letter grade or marks range for a subject — for example, O/A+ might map to 10, A to 9, and so on. Check your university's grading scale for the exact mapping.",
      },
      {
        q: "Can SGPA be higher than 10?",
        a: "No — on the standard 10-point scale used by most Indian universities, SGPA (and CGPA) is capped at 10, since it's a weighted average of grade points that themselves max out at 10.",
      },
      {
        q: "Why is my SGPA different from my percentage of marks?",
        a: "SGPA is based on grade points per subject (which collapse a range of marks into one point value), while percentage is a direct average of raw marks — the two scales aren't linearly identical, which is why conversions between them are always approximate.",
      },
    ],
  },
  {
    id: "t-percentage",
    slug: "percentage-calculator",
    name: "Percentage Calculator",
    description: "Convert marks or CGPA into an equivalent percentage.",
    category: "student-tools",
    icon: "Percent",
    howItWorks: `This tool works in two modes:

From marks: Percentage = (Marks Obtained ÷ Total Marks) × 100 — a direct, exact calculation.

From CGPA: most Indian universities that use a 10-point scale recommend the formula Percentage = CGPA × 9.5 as an approximate equivalence (a convention that traces back to an old AICTE/UGC circular adopted by many universities). It's an approximation, not a universal rule — some universities specify their own multiplier or a different formula entirely.`,
    faqs: [
      {
        q: "Is the CGPA × 9.5 formula officially correct for every university?",
        a: "No — it's a widely used convention, but not universal. Some universities officially use CGPA × 10, or a different formula altogether. Always check your own university's official conversion rule for anything official (like applications or certificates).",
      },
      {
        q: "Why would two students with the same CGPA show different real percentages?",
        a: "Because the CGPA-to-percentage formula is an approximation, not a reverse-calculation of actual marks — two students with the same CGPA could have scored slightly different raw marks that happened to round to the same grade points.",
      },
    ],
  },
  {
    id: "t-attendance",
    slug: "attendance-calculator",
    name: "Attendance Calculator",
    description: "Check how many classes you can miss and stay above the required attendance.",
    category: "student-tools",
    icon: "CalendarCheck",
    howItWorks: `Given classes attended, total classes held so far, and your required attendance percentage, this tool calculates one of two things:

If you're already above the requirement, it works out the maximum additional classes you can miss (assuming total classes keep increasing) while staying at or above the required percentage — solved from Attended ÷ (Total + x) ≥ Required%.

If you're below the requirement, it calculates how many classes in a row you'd need to attend (assuming you don't miss any) to climb back up to the required percentage — solved from (Attended + x) ÷ (Total + x) ≥ Required%.`,
    faqs: [
      {
        q: "What's a typical minimum attendance requirement?",
        a: "75% is the most common minimum in Indian universities and AICTE-affiliated institutions, though some universities set it slightly differently or allow condonation in special cases — check your own university's examination rules.",
      },
      {
        q: "What happens if my attendance falls below the minimum?",
        a: "Policies vary, but commonly it can mean detention from end-semester exams, a shortage-of-attendance fine, or a formal condonation request — check your institution's specific attendance policy.",
      },
      {
        q: "Does this tool account for medical leave or official exemptions?",
        a: "No — it's a plain mathematical calculator based on the numbers you enter. Any attendance relaxation for medical or other approved reasons is handled separately by your college administration, not reflected here.",
      },
    ],
  },
  {
    id: "t-age",
    slug: "age-calculator",
    name: "Age Calculator",
    description: "Calculate exact age in years, months and days from a date of birth.",
    category: "student-tools",
    icon: "Cake",
    howItWorks: `This tool calculates the exact calendar difference between your date of birth and today — years, months, and days — by comparing calendar dates directly rather than dividing total days by 365.25. That's why it correctly handles things like leap years and months of different lengths (28–31 days) without drifting off by a day or two over time.`,
    faqs: [
      {
        q: "Why do different age calculators sometimes give slightly different results?",
        a: "Most differences come from how months and leap years are handled internally — some tools approximate using a fixed 30-day month or 365.25-day year, which drifts from the true calendar difference. This tool compares actual calendar dates to avoid that drift.",
      },
      {
        q: "Is this useful for eligibility criteria (like exam age limits)?",
        a: "It gives you an accurate age as of today's date, which is a reasonable starting point — but always check the exact 'as on' cutoff date specified in the eligibility notice, since official age calculations are usually based on a specific reference date, not today.",
      },
    ],
  },
  {
    id: "t-unit",
    slug: "unit-converter",
    name: "Unit Converter",
    description: "Convert between common length, weight and temperature units.",
    category: "coding-tools",
    icon: "ArrowLeftRight",
    howItWorks: `Length and weight conversions work by converting your input to a common base unit (metres for length, grams for weight) using standard conversion factors, then converting from that base unit into your target unit.

Temperature is different because its scales don't share a common zero point, so it converts through Celsius as an intermediate step using the standard formulas: °C = (°F − 32) × 5⁄9, and K = °C + 273.15.`,
    faqs: [
      {
        q: "Why might my manual calculation differ slightly from the tool's result?",
        a: "Usually rounding — this tool carries full decimal precision internally and only rounds the final displayed answer, while manual step-by-step conversion often rounds at each intermediate step, which can compound into a small difference.",
      },
      {
        q: "Does 0°C equal 0°F?",
        a: "No — 0°C equals 32°F. The two scales have different zero points (0°C is water's freezing point; 0°F was originally defined differently), which is exactly why temperature conversion needs its own formula instead of a simple multiplying factor.",
      },
    ],
  },
];
