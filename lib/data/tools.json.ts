import { Tool } from "@/types";

export const tools: Tool[] = [
  {
    id: "t-cgpa",
    slug: "cgpa-calculator",
    name: "CGPA Calculator",
    description: "Calculate your overall CGPA from semester-wise SGPA.",
    category: "student-tools",
    icon: "Calculator",
  },
  {
    id: "t-sgpa",
    slug: "sgpa-calculator",
    name: "SGPA Calculator",
    description: "Calculate your SGPA from subject-wise credits and grade points.",
    category: "student-tools",
    icon: "Calculator",
  },
  {
    id: "t-percentage",
    slug: "percentage-calculator",
    name: "Percentage Calculator",
    description: "Convert marks or CGPA into an equivalent percentage.",
    category: "student-tools",
    icon: "Percent",
  },
  {
    id: "t-attendance",
    slug: "attendance-calculator",
    name: "Attendance Calculator",
    description: "Check how many classes you can miss and stay above the required attendance.",
    category: "student-tools",
    icon: "CalendarCheck",
  },
  {
    id: "t-age",
    slug: "age-calculator",
    name: "Age Calculator",
    description: "Calculate exact age in years, months and days from a date of birth.",
    category: "student-tools",
    icon: "Cake",
  },
  {
    id: "t-unit",
    slug: "unit-converter",
    name: "Unit Converter",
    description: "Convert between common length, weight and temperature units.",
    category: "coding-tools",
    icon: "ArrowLeftRight",
  },
];
