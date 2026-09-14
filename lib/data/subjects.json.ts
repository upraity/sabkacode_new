import { Subject } from "@/types";

// DEMO DATA — subjects for AKTU B.Tech CSE, Semester 3, as a working
// example of the full hierarchy. Add more rows the same way for other
// semesters/branches/universities.
export const subjects: Subject[] = [
  {
    id: "s-ds",
    slug: "data-structures",
    name: "Data Structures",
    code: "KCS301",
    description: "Arrays, linked lists, stacks, queues, trees, graphs and algorithm analysis.",
    courseSlug: "btech",
    universitySlug: "aktu",
    branchSlug: "cse",
    semester: 3,
  },
  {
    id: "s-dbms",
    slug: "database-management-systems",
    name: "Database Management Systems",
    code: "KCS302",
    description: "Relational model, SQL, normalization, transactions and indexing.",
    courseSlug: "btech",
    universitySlug: "aktu",
    branchSlug: "cse",
    semester: 3,
  },
  {
    id: "s-dld",
    slug: "digital-logic-design",
    name: "Digital Logic Design",
    code: "KCS303",
    description: "Boolean algebra, combinational and sequential circuits.",
    courseSlug: "btech",
    universitySlug: "aktu",
    branchSlug: "cse",
    semester: 3,
  },
  {
    id: "s-ds-sem4",
    slug: "design-and-analysis-of-algorithms",
    name: "Design & Analysis of Algorithms",
    code: "KCS402",
    description: "Algorithm design paradigms, complexity analysis and NP-completeness.",
    courseSlug: "btech",
    universitySlug: "aktu",
    branchSlug: "cse",
    semester: 4,
  },
];
