# SilkStudy Deployment Notes

## Local Development

```bash
docker compose up -d
npm.cmd install
copy .env.example .env
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

Use `SEED_ADMIN_EMAIL` and `SEED_ADMIN_PASSWORD` from `.env` to sign in at `/login`.

## Vercel

Set these environment variables:

- `DATABASE_URL`
- `AUTH_SECRET`
- `NEXTAUTH_URL`
- `NEXT_PUBLIC_SITE_URL`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `ADMIN_NOTIFICATION_EMAIL`

Recommended build command:

```bash
npm run prisma:generate && npm run build
```

## Database

The Prisma schema is in `prisma/schema.prisma`. For production, run migrations against the production PostgreSQL database before switching traffic.

## Media

Cloudinary upload signing is exposed at:

```txt
POST /api/admin/cloudinary-signature
```

The endpoint requires an admin session and returns signed upload parameters for client-side upload flows.
