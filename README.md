# SilkStudy

SilkStudy is a production-oriented MVP for helping global students explore Chinese universities by province, city, university, major, scholarship, and consultation path.

## MVP Scope

Current implementation includes:

- Next.js App Router project skeleton
- Prisma schema for PostgreSQL
- Auth.js compatible user/session models
- CMS-ready entities for provinces, cities, universities, majors, scholarships, consultations, admin logs, SEO metadata, and external social-review import staging
- Seed data generated from the full starter university dataset used by the public site
- Initial i18n message files for English and Chinese, with future-language structure reserved
- Interactive China SVG map with province hover and click-through
- University, province, city, major, scholarship, consultation, admin, login, and dashboard pages
- University detail decision modules for nearby living, food, tourism, internships, transport, safety, destination fit, and student reviews
- API-backed autocomplete search with debounce
- Consultation form submission API with validation and CRM note creation
- Auth.js Credentials login with PrismaAdapter and role-aware sessions
- Admin CMS for universities, cities, majors, consultations, review moderation, social imports, SEO metadata, and Cloudinary upload handoff
- Student dashboard MVP for shortlist, documents, scholarship matching, and application timeline
- Scholarship matching MVP for CSC, provincial, university, and low-cost city strategies
- Metadata API, robots.txt, sitemap.xml, and JSON-LD helpers

## Current Data Coverage

The public catalog currently combines curated MVP profiles with a deduplicated CSC host-university baseline:

- 279 source rows from the CSC host-university starter source
- 272 unique university profiles after deduplication
- 31 province-level map destinations
- 54 student-city destinations aggregated from the catalog
- Full public fallback rendering before PostgreSQL is connected

Baseline records are intentionally marked for verification when ranking, tuition, official website, program detail, housing, or campus-life fields are not yet confirmed.

## Local Run

```bash
docker compose up -d
npm install
cp .env.example .env
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

Set `DATABASE_URL`, `NEXTAUTH_SECRET`/`AUTH_SECRET`, and optional Cloudinary credentials before running database-backed flows.

The seed uses:

```txt
SEED_ADMIN_EMAIL=admin@silkstudy.com
SEED_ADMIN_PASSWORD=change-this-password
```

Change these values in `.env` before running `npm run prisma:seed`. After seeding, visit `/login`, sign in with the seed admin account, and open `/admin`.

## Data Expansion

Recommended future data expansion path:

1. Add official admissions-office records and MOE/CSC/CUCAS-style directory exports into the catalog import workflow.
2. Verify province, city, website, program language, tuition, scholarship, dormitory, application deadline, and international-office contact.
3. Promote verified records from baseline to curated profiles in the CMS.
4. Keep source notes and checked dates visible in the admin catalog QA page.

External comments from Douyin, TikTok, Xiaohongshu, YouTube, Google, or student forums should only be imported through a compliant workflow: permission or platform-allowed export, source attribution, moderation, language normalization, duplicate detection, and clear separation between quoted user reviews and editorial summaries.

## Media Upload

Cloudinary upload is available in `/admin/universities` after login. Add these values to `.env`:

```txt
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

See `DEPLOYMENT.md` for Vercel and production notes.
