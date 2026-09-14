// DEMO DATA — a simple many-to-many mapping table.
// This is exactly the shape a real DB join table would have, so swapping
// this for a Prisma/SQL query later is a one-file change.
export const courseUniversityLinks: { courseSlug: string; universitySlug: string }[] = [
  { courseSlug: "btech", universitySlug: "aktu" },
  { courseSlug: "bca", universitySlug: "aktu" },
  { courseSlug: "mca", universitySlug: "aktu" },
  { courseSlug: "bpharm", universitySlug: "aktu" },

  { courseSlug: "btech", universitySlug: "vtu" },
  { courseSlug: "mca", universitySlug: "vtu" },

  { courseSlug: "btech", universitySlug: "jntu" },

  { courseSlug: "btech", universitySlug: "rtu" },
];
