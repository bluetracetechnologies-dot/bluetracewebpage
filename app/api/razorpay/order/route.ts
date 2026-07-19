import { NextRequest, NextResponse } from "next/server";

/**
 * Creates a Razorpay order server-side.
 *
 * Required environment variables (set in Vercel → Project → Settings → Environment Variables):
 *   RAZORPAY_KEY_ID       = rzp_live_xxxxxxxx   (from Razorpay Dashboard → Account & Settings → API Keys)
 *   RAZORPAY_KEY_SECRET   = xxxxxxxxxxxxxxxx    (shown once when you generate the key — save it!)
 *
 * Money from successful payments settles automatically to the bank account
 * you register during Razorpay KYC (T+2 days by default).
 */

const ALLOWED_PLANS: Record<string, { amount: number; name: string }> = {
  "ai-chatbot-starter": { amount: 14999, name: "AI Chatbot — Starter" },
  "ai-automation-pro": { amount: 49999, name: "AI Automation — Pro" },
  "custom-enterprise": { amount: 25000, name: "Custom Solution — Advance" },
};

export async function POST(req: NextRequest) {
  try {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json(
        {
          error:
            "Payments not configured yet. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET.",
        },
        { status: 503 }
      );
    }

    const { planId } = await req.json();
    const plan = ALLOWED_PLANS[planId];
    if (!plan) {
      return NextResponse.json({ error: "Unknown plan" }, { status: 400 });
    }

    // Amount is defined server-side only — the client can never change the price.
    const res = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " + Buffer.from(`${keyId}:${keySecret}`).toString("base64"),
      },
      body: JSON.stringify({
        amount: plan.amount * 100, // paise
        currency: "INR",
        receipt: `${planId}-${Date.now()}`,
        notes: { plan: plan.name },
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Razorpay order failed:", detail);
      return NextResponse.json(
        { error: "Could not create order. Try again or contact us." },
        { status: 502 }
      );
    }

    const order = await res.json();
    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId, // public key id is safe to expose
      planName: plan.name,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
