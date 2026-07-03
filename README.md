# Bluetrace Technologies Website

Official website source code for Bluetrace Technologies Private Limited.

## Project Overview

This project is a Next.js website positioned for lead generation across:

- Embedded systems and firmware development
- PCB design and review
- IoT device-to-cloud solutions
- BLE / ESP32 / STM32 / nRF engineering
- AI automation and SaaS delivery
- Web, mobile, and cloud applications
- School, hospital, and business automation

Official website: https://bluetrace.tech

Official contact:

- Email: rahim@bluetrace.tech
- Phone/WhatsApp: +91 9462225303, +91 9823797953

## Versioning

- v1.0: Baseline stable website (tagged before major upgrade)
- v2.0: Lead-generation website upgrade in progress on lead-generation-v2 branch

Branch strategy:

- main: stable production
- lead-generation-v2: active major upgrade branch

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open in browser:

- http://localhost:3000

## Build Instructions

Run production build:

```bash
npm run build
```

Run production server locally:

```bash
npm start
```

Optional checks:

```bash
npm run lint
npm run type-check
```

## Lead Form Configuration

The inquiry form posts to /api/inquiry.

To persist leads to a CRM/webhook, configure this environment variable:

- BLUETRACE_LEAD_WEBHOOK_URL

Without this variable, the API still accepts submissions but only returns a confirmation response.

## Deployment Instructions

### Vercel

1. Push branch to GitHub.
2. Connect repository in Vercel or trigger redeploy.
3. Set required environment variables (if used).
4. Deploy:

```bash
npm run deploy
```

or via Vercel UI redeploy.

### Netlify / Other

Use standard Next.js production build command:

- Build: npm run build
- Start: npm start

## Rollback Instructions

If v2.0 has issues:

1. Checkout main or the stable commit.
2. Restore baseline tag:

```bash
git checkout v1.0
```

3. Redeploy stable version from tag or main.
4. Continue fixes in lead-generation-v2.

Suggested recovery flow:

```bash
git checkout main
git checkout v1.0
# redeploy from tag or switch main to a known stable commit through a standard revert/cherry-pick workflow
```

If you do not want to rewrite main history, redeploy directly from the v1.0 tag in your hosting platform.
