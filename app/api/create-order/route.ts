import { NextRequest, NextResponse } from "next/server";
import { createRazorpayClient, MIN_RAZORPAY_AMOUNT_PAISE } from "@/lib/razorpay";

export async function POST(request: NextRequest) {
  try {
    const razorpay = createRazorpayClient();
    if (!razorpay) {
      return NextResponse.json(
        { error: "Payments not configured yet." },
        { status: 503 },
      );
    }

    const body = await request.json().catch(() => ({}));
    const amount = Number(body?.amount);
    const currency = String(body?.currency || "INR").toUpperCase();
    const receipt = String(body?.receipt || `receipt_${Date.now()}`);

    if (!Number.isFinite(amount) || amount < MIN_RAZORPAY_AMOUNT_PAISE) {
      return NextResponse.json(
        { error: "Amount must be at least 100 paise." },
        { status: 400 },
      );
    }

    const order = await razorpay.orders.create({
      amount: Math.trunc(amount),
      currency,
      receipt,
    });

    return NextResponse.json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unable to create order.";
    const status = /auth|unauthori/i.test(message) ? 401 : 500;

    return NextResponse.json(
      { error: status === 401 ? "Authentication failed." : message },
      { status },
    );
  }
}