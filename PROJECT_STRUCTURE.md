# SilkStudy Project Structure

```txt
app/
  page.tsx
  layout.tsx
  provinces/[slug]/
  cities/[slug]/
  universities/[slug]/
  majors/[slug]/
  consultation/
  admin/
    universities/
      [slug]/
        reviews/
    cities/
    majors/
    consultations/
    seo/
    reviews/
    social-imports/
  login/
  dashboard/
  api/
    auth/[...nextauth]/
    search/
    universities/
    consultations/
    admin/
      universities/
        [id]/
          media/
      cities/
        [id]/
      majors/
        [id]/
      consultations/
        [id]/
        export/
      seo/
        [id]/
      reviews/
        [id]/
      social-imports/
      cloudinary-signature/
components/
  admin/
  common/
  forms/
  map/
  search/
  universities/
lib/
  catalog/
    catalog-quality.ts
    international-university-directory.ts
  i18n/
  media/
  prisma.ts
  province-showcase.ts
  city-destinations.ts
  major-guides.ts
messages/
  en.json
  zh.json
  vi.json
prisma/
  schema.prisma
  seed.ts
public/
  icons/
  images/
    cities/
    provinces/
    universities/
styles/
  globals.css
types/
```

## Database Modules

- Users, sessions, accounts, and verification tokens for Auth.js.
- Provinces and cities for China map navigation.
- Universities with media, rankings, costs, English programs, scholarships, SEO, and CMS publishing flags.
- Majors and university program joins for degree, language, tuition, and admission requirements.
- Consultations for lead generation and CRM status tracking.
- External review imports for compliant Douyin, TikTok, Xiaohongshu, and other social-platform review staging.
- Admin logs for auditability.
- SEO metadata for provinces, cities, universities, and majors.

## Catalog Modules

- `lib/catalog/international-university-directory.ts` holds the international-student university baseline, source metadata, deduplication, slugging, inferred city/province mapping, fallback majors, and fallback campus-life summaries.
- `lib/catalog/catalog-quality.ts` generates the admin QA report for source rows, unique schools, duplicates, curated/baseline split, issue queue, and province coverage.
- `lib/province-showcase.ts` powers the interactive China map, province cards, travel/culture positioning, and top-school highlights.
- `lib/city-destinations.ts` aggregates city destinations from the full catalog and enriches living cost, climate, visa convenience, tourism, internships, and review dimensions.
- `lib/major-guides.ts` provides major landing/detail page guidance and fallback career pathways.

## Implemented API Surface

- `GET /api/search?q=...`
- `GET /api/universities`
- `GET|POST /api/universities/[slug]/reviews`
- `POST /api/consultations`
- `GET /api/consultations`
- `GET|POST /api/admin/universities`
- `PATCH|DELETE /api/admin/universities/[id]`
- `GET|POST /api/admin/universities/[id]/media`
- `GET|POST /api/admin/cities`
- `PATCH|DELETE /api/admin/cities/[id]`
- `GET|POST /api/admin/majors`
- `PATCH|DELETE /api/admin/majors/[id]`
- `GET /api/admin/consultations`
- `PATCH|DELETE /api/admin/consultations/[id]`
- `GET /api/admin/consultations/export`
- `GET|POST /api/admin/seo`
- `PATCH|DELETE /api/admin/seo/[id]`
- `GET /api/admin/reviews`
- `PATCH /api/admin/reviews/[id]`
- `GET /api/admin/social-imports`
- `POST /api/admin/cloudinary-signature`
