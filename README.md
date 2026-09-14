# SabkaCode

A student-focused education and coding platform — notes, previous year papers, projects and tools,
built to support multiple universities from day one.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **No database yet** — content lives in `lib/data/*.json.ts` and is read through the functions in
  `lib/data/index.ts`. This is intentional: when you're ready to add a real database, you only need
  to change the function bodies in that one file — every page and component already calls them as
  if they were async database queries.
- No authentication, no admin panel, no payments — kept out of scope on purpose for this phase.

## Getting started locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Import the repository in Vercel (vercel.com/new).
3. No environment variables are required right now (see `.env.example`).
4. Vercel auto-detects Next.js — no custom build settings needed.
5. Deploy.

## Adding content today (no database)

All demo content lives under `lib/data/`:

- `courses.json.ts` — B.Tech, BCA, MCA, B.Pharm
- `universities.json.ts` — AKTU (active), VTU/JNTU/RTU (coming soon placeholders)
- `course-university.json.ts` — which universities offer which courses
- `branches.json.ts` — branches per course+university
- `subjects.json.ts` — subjects per branch+semester
- `resources.json.ts` — notes/PYQs/question banks/practicals/viva per subject
- `projects.json.ts` — the project catalogue
- `tools.json.ts` — the tools/calculators list

To add a new university, course, subject, or project: add an entry to the relevant file following
the existing shape. No page code needs to change — the routes are all dynamic
(`/courses/[course]/[university]/[branch]/[semester]/[subject]`).

**Important:** resource items and project files intentionally have optional `fileUrl` fields. Do
not fill these in with fake or placeholder links — leave them empty until a real file exists. The
UI shows an honest "coming soon" state instead.

## Moving to a real database later

When you're ready:

1. Set up your database (Postgres + Prisma is a natural fit for this schema).
2. Create tables matching the shapes in `types/index.ts`.
3. Rewrite the function bodies in `lib/data/index.ts` to query the database instead of the local
   arrays — keep the same function names and return types.
4. Delete the `*.json.ts` files once migrated.

No changes are needed in `app/` or `components/` — they only ever import from `lib/data`, never the
raw data files.

## Universities & courses now included

Migrated from your original static site:

- **AKTU** — B.Tech (demo CSE hierarchy), MCA (Semester 1: Fundamentals of Computers, with real notes links), MBA (Semester 1: Business Communication; Semester 2: BE, BRM, CMA, HRM, MIS, QTM with PYQ metadata)
- **DBRAU** — BCA, 22 subjects with real syllabus text and real Google Drive note links
- **CSJMU** — BCA, 9 subjects with real syllabus text and real Google Drive note links
- **CCSU** — listed as "coming soon" (mentioned on your original About/Contact pages, but no notes content existed for it yet)

**Important caveat on semesters:** your original site listed DBRAU and CSJMU subjects as a flat list with no explicit semester number. The semester assignments in `subjects.json.ts` are my best-effort mapping onto a standard 6-semester BCA structure — please review and adjust them against your actual university syllabus.

**Important caveat on AKTU MBA Semester 2 PYQs:** your original site's `/solve/aktu-mba-sem2-*` pages contain full, already-written solved answers (not just PDF links) — thousands of words each. I've added the PYQ entries as metadata (subject, year) but have **not** ported the full solved-answer text yet, since that's a large content job better done page-by-page rather than crammed in. Those resource entries currently show "File coming soon." Ask me to migrate these next, one at a time, and I'll build dedicated solution pages for them.

## Syllabus support

Each `Subject` now has an optional `syllabus` field (`types/index.ts`). When present, it renders in a dedicated "Syllabus" section above the resource tabs on the subject page (`components/resources/SyllabusSection.tsx`). Subjects without syllabus text yet show an honest empty state instead of a blank section.

## Affiliate Product Management System (Phase 1)

**Files created:**
- `lib/data/products.json.ts` — the single central product record, keyed by product code
- `components/affiliate/AffiliateProduct.tsx` — the reusable `<AffiliateProduct code="..." />` component
- `app/recommendations/page.tsx` — a working example page

**Files modified:**
- `types/index.ts` — added `AffiliateProductData`
- `lib/data/index.ts` — added `getAffiliateProduct(code)` and `getActiveAffiliateProducts()`
- `next.config.mjs` — added `images.remotePatterns` for product image hosts
- `components/layout/Footer.tsx` — added a "Recommended Products" link
- `app/sitemap.ts` — added the new routes

**How it works:** every page places only a product code — `<AffiliateProduct code="LAPTOP001" />` — never a name, image, or link. The component is an async Server Component that looks up the code in `lib/data/products.json.ts` on the server and renders the card as plain HTML. No affiliate link or product data is ever shipped to the browser as JavaScript.

**Adding a new product:** open `lib/data/products.json.ts` and add a new entry, e.g.:
```ts
CHAIR001: {
  code: "CHAIR001",
  name: "Ergonomic Study Chair",
  image: "https://m.media-amazon.com/images/I/....jpg",
  shortDescription: "Comfortable seating for long study sessions.",
  description: "...",
  affiliateLink: "https://www.amazon.in/dp/XXXXXXXXXX?tag=your-tag-21",
  buttonText: "View on Amazon",
  category: "Furniture",
  active: true,
},
```
Then use it anywhere: `<AffiliateProduct code="CHAIR001" />`.

**Changing an existing link:** edit the `affiliateLink` (or any other field) on the matching code in `lib/data/products.json.ts` and redeploy. Every page using that code updates automatically — no page files need to change.

**Placing a product on a page:**
```tsx
import { AffiliateProduct } from "@/components/affiliate/AffiliateProduct";

<AffiliateProduct code="LAPTOP001" />
<AffiliateProduct code="MOUSE001" />
<AffiliateProduct code="KEYBOARD001" />
```

**Environment variables:** none required. Amazon affiliate links aren't secrets.

**Limitations of Phase 1:**
- No admin UI — products are edited by hand in a TypeScript file and require a redeploy to take effect (a few seconds on Vercel, but not instant).
- No database — fine at the current scale (tens to low hundreds of products); if you reach real catalog scale, Phase 2 becomes worth it.
- No image upload — image URLs must be hosted externally (Amazon's own CDN links work well and are already whitelisted in `next.config.mjs`).
- No click analytics on affiliate buttons yet.

**Phase 2 plan (admin dashboard + database) — for later, not built now:**
1. Add a database (Postgres via Vercel Postgres/Supabase/Neon are all Vercel-friendly) with a `products` table matching `AffiliateProductData`.
2. Rewrite `getAffiliateProduct`/`getActiveAffiliateProducts` in `lib/data/index.ts` to query that table instead of the local object — `AffiliateProduct.tsx` needs zero changes, since it only calls those functions.
3. Add authenticated admin routes (`/admin/products`) using a proper auth solution (NextAuth/Clerk/Vercel's own), gated so only you can reach them.
4. Build simple CRUD forms (add/edit/delete/toggle active) that write to the database.
5. Optional: add click tracking by routing the affiliate button through a `/api/go/[code]` redirect that logs a click then 302s to the real Amazon link.

This is a real architectural boundary, not a cosmetic one — Phase 1 intentionally has no auth or writable storage, so there's nothing insecure to lock down later.



- Authentication / accounts
- Admin panel for content management
- Payments / premium content
- Real file storage for notes, PYQs, and project files

The architecture (types, data-access functions, routing) is designed so these can be added later
without restructuring the app.

## Project structure

```
app/            Routes (App Router)
components/     Reusable UI, grouped by feature
lib/data/       Data models + the data-access API (swap for a DB later)
lib/search.ts   Lightweight in-memory search index
lib/seo.ts      Metadata helper
types/          Shared TypeScript types
```
