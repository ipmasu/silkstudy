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
- `ADMIN_NOTIFICATION_FROM_EMAIL`
- `RESEND_API_KEY`

Recommended build command:

```bash
npm run prisma:generate && npm run build
```

## Database

The Prisma schema is in `prisma/schema.prisma`. For production, run migrations against the production PostgreSQL database before switching traffic.

## Consultation Email Notifications

Consultation requests are saved to the CRM first, then the site attempts to send an admin email through Resend.

Required variables:

- `ADMIN_NOTIFICATION_EMAIL`: the inbox that receives new lead emails. For SilkStudy, set this to `maximasure@hotmail.com`.
- `RESEND_API_KEY`: API key from Resend.
- `ADMIN_NOTIFICATION_FROM_EMAIL`: verified sender address. For production, use a verified domain sender such as `SilkStudy <consult@silkstudy.com>`. Do not leave this blank; Resend requires a sender address, and unverified/test senders may not deliver to external inboxes.

If email variables are missing or delivery fails, the consultation is still saved in the CRM and the API response includes the notification status.

## Media

Cloudinary upload signing is exposed at:

```txt
POST /api/admin/cloudinary-signature
```

The endpoint requires an admin session and returns signed upload parameters for client-side upload flows.
