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

## What's intentionally not built yet

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
