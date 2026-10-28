# BreedMatch

Swipe-based connection app for dog breeders and puppy buyers, plus breeder-to-breeder networking.
**Connection platform only:** the only money that touches the site is profile activation. Puppy sales,
deposits, stud fees and services always happen directly between users, outside the app.

## Status: Phase 1 — landing page + founding breeder signup

| Route | What it is |
| --- | --- |
| `/` | Landing page |
| `/join` | Waitlist form (breeder or buyer; `?role=buyer` preselects) |
| `/pricing`, `/safety`, `/terms`, `/privacy` | Info pages (terms/privacy are drafts — get a lawyer review before charging) |
| `POST /api/waitlist` | Validates and saves signups to Supabase |

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in Supabase values
npm run dev
```

Without Supabase values the site still runs; the form just says signups aren't open yet.

## Supabase setup (free tier)

1. Create a project at supabase.com.
2. SQL Editor → run `supabase/migrations/0001_waitlist.sql`.
3. Project Settings → API → copy the project URL and the `service_role` key into `.env.local`.
4. View signups in Table Editor → `waitlist`.

## Roadmap

1. **Landing + founding breeder signup** ← here
2. Accounts and profiles: auth, reusable buyer application, breeder profile, photos
3. Discovery: buyer swipe deck, breeder applications inbox, Network swiping, referrals
4. Chat, email notifications (Resend), scam tripwire, report/block
5. Subscriptions via Stripe: buyer $5/3 mo; breeder $10/mo, $60/yr, $150 lifetime (founding only); 90-day founding trial; $5 buyer→breeder credit
6. Admin: verification queue, reports, suspensions, search
7. Midwest beta

Hosting target: Cloudflare (free plan allows commercial use), photos on Cloudflare R2.
