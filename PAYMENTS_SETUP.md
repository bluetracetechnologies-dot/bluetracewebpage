# Bluetrace — Getting Paid Online (Razorpay) Setup

This adds real online payments to the site. Customers (or AI shopping agents) can
buy fixed-price engineering packages and pay by **UPI, card, netbanking or wallet**.
Money settles directly into your **Indian bank account** via Razorpay.

## What was added

| File | Purpose |
| --- | --- |
| `lib/pricing.ts` | The catalog of everything that can be bought (prices in ₹). Edit this to change offers/prices. |
| `app/pricing/page.tsx` | New **/pricing** page with Buy buttons. Added to the top nav. |
| `components/CheckoutButton.tsx` | Opens the Razorpay payment window and confirms the payment. |
| `app/api/checkout/route.ts` | Creates a Razorpay order (price is taken server-side, cannot be tampered with). |
| `app/api/checkout/verify/route.ts` | Cryptographically verifies the payment after checkout. |
| `app/api/webhook/razorpay/route.ts` | Optional server-to-server confirmation webhook. |
| `app/api/catalog/route.ts` | Public JSON feed at **/api/catalog** so AI agents/integrations can buy programmatically. |

No new npm packages are required — it uses Razorpay's REST API and Node's built-in crypto.

## Step 1 — Create a Razorpay account & link your bank

1. Sign up at <https://razorpay.com> with your business details.
2. Complete **KYC** (PAN, GST if any, and your **company bank account** — this is where
   money is deposited). Bluetrace Technologies Private Limited details will speed up approval.
3. Until KYC is approved you can still test with **Test Mode** keys.

## Step 2 — Get your API keys

1. Razorpay Dashboard → **Settings → API Keys → Generate Key**.
2. Copy the **Key Id** (`rzp_test_...` or `rzp_live_...`) and **Key Secret**.
3. Keep the secret private — never commit it.

## Step 3 — Set environment variables

Locally, copy `.env.example` to `.env.local` and fill in:

```
RAZORPAY_KEY_ID=rzp_test_xxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxx
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxxxxx
```

On **Vercel** (your host): Project → **Settings → Environment Variables** → add the same
three variables (and `RAZORPAY_WEBHOOK_SECRET` if you use the webhook) → **Redeploy**.

## Step 4 — Test the flow

1. `npm install` then `npm run dev`, open <http://localhost:3000/pricing>.
2. Click **Buy now**. In Test Mode use UPI id `success@razorpay` or test card
   `4111 1111 1111 1111`, any future expiry, any CVV.
3. You should see the green "Payment received" confirmation.

## Step 5 — Go live

1. Finish Razorpay KYC and switch the Dashboard to **Live Mode**.
2. Replace the three env vars with your `rzp_live_...` values and redeploy.
3. Real payments now land in your linked bank account (Razorpay settles on a T+2/T+3 cycle).

## Optional — Webhook (recommended)

For bullet-proof confirmation even if a customer closes the tab:

1. Dashboard → **Settings → Webhooks → Add** → URL: `https://bluetrace.tech/api/webhook/razorpay`
2. Select events **`payment.captured`** and **`order.paid`**, set a secret.
3. Add that secret as `RAZORPAY_WEBHOOK_SECRET` in Vercel and redeploy.

## Optional — Send orders to a Google Sheet / CRM

Set `BLUETRACE_LEAD_WEBHOOK_URL` to a Zapier/Make/Google-Apps-Script webhook URL and
every paid order (and inquiry) is POSTed there as JSON automatically.

## Editing your offers

Open `lib/pricing.ts` and edit the `catalog` array — change `name`, `priceINR`,
`priceUSD`, `deliverables`, add or remove items. The pricing page and the `/api/catalog`
agent feed update automatically.

## Note on Wix

Your production code here is a **Next.js app deployed on Vercel** (bluetrace.tech /
bluetracewebpage.vercel.app), not Wix. These changes apply to this repo. If you also run a
separate Wix site, Razorpay has a native Wix payment integration you'd enable inside the
Wix dashboard instead — tell me if that's the site you want wired up.
