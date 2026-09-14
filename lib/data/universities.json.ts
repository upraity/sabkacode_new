import { University } from "@/types";

// DEMO DATA — AKTU is fully wired up as the first university. Others are
// listed as "coming-soon" placeholders to prove the architecture supports
// many universities without code changes — no fake content is attached
// to them.
export const universities: University[] = [
  {
    id: "u-aktu",
    slug: "aktu",
    name: "Dr. A.P.J. Abdul Kalam Technical University",
    shortName: "AKTU",
    description: "A state technical university based in Lucknow, Uttar Pradesh.",
    location: "Lucknow, Uttar Pradesh",
    websiteUrl: "https://aktu.ac.in",
    status: "active",
  },
  {
    id: "u-vtu",
    slug: "vtu",
    name: "Visvesvaraya Technological University",
    shortName: "VTU",
    description: "A state technical university based in Karnataka.",
    location: "Belagavi, Karnataka",
    status: "coming-soon",
  },
  {
    id: "u-jntu",
    slug: "jntu",
    name: "Jawaharlal Nehru Technological University",
    shortName: "JNTU",
    description: "A state technical university in Andhra Pradesh / Telangana.",
    location: "Andhra Pradesh / Telangana",
    status: "coming-soon",
  },
  {
    id: "u-rtu",
    slug: "rtu",
    name: "Rajasthan Technical University",
    shortName: "RTU",
    description: "A state technical university based in Rajasthan.",
    location: "Kota, Rajasthan",
    status: "coming-soon",
  },
];
