import { NextResponse } from "next/server";
import { getCatalogItem, toPaise, CURRENCY } from "@/lib/pricing";

/**
 * Creates a Razorpay order for a catalog item.
 *
 * The price is ALWAYS taken from the server-side catalog (never from the
 * client) so the amount cannot be tampered with. Uses Razorpay's REST API
 * directly with HTTP Basic auth — no SDK dependency required.
 *
 * Required env vars:
 *   RAZORPAY_KEY_ID       (e.g. rzp_live_xxx or rzp_test_xxx)
 *   RAZORPAY_KEY_SECRET
 *   NEXT_PUBLIC_RAZORPAY_KEY_ID  (the same key id, exposed to the browser)
 */
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const itemId = String(body?.itemId || "").trim();

    const item = getCatalogItem(itemId);
    if (!item) {
      return NextResponse.json(
        { ok: false, message: "Unknown item." },
        { status: 400 },
      );
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Payments are not configured yet. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET.",
        },
        { status: 503 },
      );
    }

    const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
    const receipt = `bt_${item.id}_${Date.now()}`.slice(0, 40);

    const orderRes = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: toPaise(item.priceINR),
        currency: CURRENCY,
        receipt,
        notes: {
          itemId: item.id,
          itemName: item.name,
          type: item.type,
        },
      }),
    });

    const order = await orderRes.json();

    if (!orderRes.ok) {
      return NextResponse.json(
        {
          ok: false,
          message:
            order?.error?.description || "Could not create payment order.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || keyId,
      item: {
        id: item.id,
        name: item.name,
        priceINR: item.priceINR,
      },
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Unable to start checkout right now." },
      { status: 500 },
    );
  }
}
