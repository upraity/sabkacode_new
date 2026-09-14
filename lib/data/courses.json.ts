import { Course } from "@/types";

// DEMO DATA — replace/extend freely. This file is the single source of
// truth for courses until a real database is connected.
export const courses: Course[] = [
  {
    id: "c-btech",
    slug: "btech",
    name: "B.Tech",
    fullName: "Bachelor of Technology",
    description:
      "A 4-year undergraduate engineering degree covering branches like Computer Science, IT, Electronics and more.",
    hasBranches: true,
    totalSemesters: 8,
  },
  {
    id: "c-bca",
    slug: "bca",
    name: "BCA",
    fullName: "Bachelor of Computer Applications",
    description: "A 3-year undergraduate degree focused on computer applications and programming.",
    hasBranches: false,
    totalSemesters: 6,
  },
  {
    id: "c-mca",
    slug: "mca",
    name: "MCA",
    fullName: "Master of Computer Applications",
    description: "A postgraduate degree for students aiming to specialise in computer applications.",
    hasBranches: false,
    totalSemesters: 4,
  },
  {
    id: "c-bpharm",
    slug: "bpharm",
    name: "B.Pharm",
    fullName: "Bachelor of Pharmacy",
    description: "A 4-year undergraduate degree in pharmaceutical sciences.",
    hasBranches: false,
    totalSemesters: 8,
  },
];
