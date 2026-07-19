import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

/**
 * Razorpay Webhook — verified proof of payment.
 *
 * SETUP (after your Razorpay account is live):
 * 1. Razorpay Dashboard → Account & Settings → Webhooks → Add New Webhook
 *    - URL: https://YOUR-DOMAIN/api/razorpay/webhook   (e.g. https://bluetrace.tech/api/razorpay/webhook)
 *    - Secret: create any strong random string (e.g. from a password generator)
 *    - Active events: payment.captured
 * 2. In Vercel env vars add:
 *    RAZORPAY_WEBHOOK_SECRET = the same secret string
 *    (optional) BLUETRACE_LEAD_WEBHOOK_URL = your existing lead webhook —
 *    payments will be pushed there too, so you get an instant notification.
 *
 * WHY: The browser "payment success" handler can be faked by anyone with
 * DevTools. This webhook is signed by Razorpay's servers with your secret —
 * if the signature verifies, the money is genuinely captured. Only treat a
 * client as "paid" when you see this event (also visible in Razorpay
 * Dashboard → Transactions).
 */

export async function POST(req: NextRequest) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 503 });
  }

  // Signature must be computed over the RAW body, before JSON parsing.
  const rawBody = await req.text();
  const signature = req.headers.get("x-razorpay-signature") ?? "";

  const expected = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");

  const valid =
    signature.length === expected.length &&
    crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));

  if (!valid) {
    console.warn("Razorpay webhook: invalid signature — ignoring");
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const event = JSON.parse(rawBody);

  if (event.event === "payment.captured") {
    const p = event.payload?.payment?.entity ?? {};
    const record = {
      type: "PAYMENT_RECEIVED",
      paymentId: p.id,
      orderId: p.order_id,
      amountInr: (p.amount ?? 0) / 100,
      currency: p.currency,
      plan: p.notes?.plan ?? "unknown",
      email: p.email,
      contact: p.contact,
      method: p.method,
      at: new Date().toISOString(),
    };

    console.log("✅ Verified payment:", JSON.stringify(record));

    // Forward to your existing lead webhook (Google Sheet / CRM / email)
    // so you get pinged the moment money lands.
    const notifyUrl = process.env.BLUETRACE_LEAD_WEBHOOK_URL;
    if (notifyUrl) {
      try {
        await fetch(notifyUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(record),
        });
      } catch (e) {
        console.error("Payment notify forward failed:", e);
      }
    }
  }

  // Always 200 so Razorpay doesn't retry endlessly for events we ignore.
  return NextResponse.json({ ok: true });
}
