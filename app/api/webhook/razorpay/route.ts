import { NextResponse } from "next/server";
import crypto from "crypto";

/**
 * Razorpay server-to-server webhook (recommended for reliable confirmation).
 *
 * Configure in the Razorpay Dashboard → Settings → Webhooks with the events
 * `payment.captured` and `order.paid`, pointing to:
 *   https://bluetrace.tech/api/webhook/razorpay
 * and set the same secret in RAZORPAY_WEBHOOK_SECRET.
 *
 * We verify the X-Razorpay-Signature header (HMAC-SHA256 of the raw body).
 */
export async function POST(request: Request) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json(
      { ok: false, message: "Webhook secret not set." },
      { status: 503 },
    );
  }

  const raw = await request.text();
  const signature = request.headers.get("x-razorpay-signature") || "";

  const expected = crypto
    .createHmac("sha256", secret)
    .update(raw)
    .digest("hex");

  const valid =
    expected.length === signature.length &&
    crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));

  if (!valid) {
    return NextResponse.json(
      { ok: false, message: "Invalid signature." },
      { status: 400 },
    );
  }

  let event: Record<string, unknown> = {};
  try {
    event = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Forward the verified event to your CRM/lead webhook if configured.
  const forward = process.env.BLUETRACE_LEAD_WEBHOOK_URL;
  if (forward) {
    await fetch(forward, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind: "razorpay_webhook", event }),
    }).catch(() => undefined);
  }

  // Always 200 quickly so Razorpay does not retry a processed event.
  return NextResponse.json({ ok: true });
}
