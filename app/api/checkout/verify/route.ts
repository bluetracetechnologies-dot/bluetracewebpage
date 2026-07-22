import { NextResponse } from "next/server";
import crypto from "crypto";
import { getCatalogItem } from "@/lib/pricing";

/**
 * Verifies a completed Razorpay payment after the browser checkout succeeds.
 *
 * Razorpay returns razorpay_order_id, razorpay_payment_id and
 * razorpay_signature. The signature is HMAC-SHA256 of
 * `${order_id}|${payment_id}` keyed with your RAZORPAY_KEY_SECRET.
 *
 * On success we optionally forward the order to your lead/CRM webhook so a
 * paid order lands in the same place as inquiries.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      itemId,
      customer,
    } = body || {};

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { ok: false, message: "Missing payment fields." },
        { status: 400 },
      );
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      return NextResponse.json(
        { ok: false, message: "Payments are not configured." },
        { status: 503 },
      );
    }

    const expected = crypto
      .createHmac("sha256", keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    const valid =
      expected.length === String(razorpay_signature).length &&
      crypto.timingSafeEqual(
        Buffer.from(expected),
        Buffer.from(String(razorpay_signature)),
      );

    if (!valid) {
      return NextResponse.json(
        { ok: false, message: "Payment verification failed." },
        { status: 400 },
      );
    }

    const item = getCatalogItem(String(itemId || ""));

    const orderPayload = {
      kind: "paid_order",
      paidAt: new Date().toISOString(),
      razorpay_order_id,
      razorpay_payment_id,
      item: item
        ? { id: item.id, name: item.name, priceINR: item.priceINR }
        : { id: itemId },
      customer: {
        name: String(customer?.name || "").trim(),
        email: String(customer?.email || "").trim(),
        phone: String(customer?.phone || "").trim(),
        notes: String(customer?.notes || "").trim(),
      },
    };

    const webhook = process.env.BLUETRACE_LEAD_WEBHOOK_URL;
    if (webhook) {
      // Best-effort: don't fail the customer's confirmation if CRM is down.
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      }).catch(() => undefined);
    }

    return NextResponse.json({
      ok: true,
      message: "Payment verified. Thank you — we'll be in touch shortly.",
      order: orderPayload,
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Unable to verify payment." },
      { status: 500 },
    );
  }
}
