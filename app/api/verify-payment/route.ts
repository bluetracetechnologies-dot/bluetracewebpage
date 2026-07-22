import { NextRequest, NextResponse } from "next/server";
import { verifyRazorpaySignature } from "@/lib/razorpay";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const orderId = String(body?.razorpay_order_id || body?.order_id || "").trim();
    const paymentId = String(body?.razorpay_payment_id || body?.payment_id || "").trim();
    const signature = String(body?.razorpay_signature || body?.signature || "").trim();

    if (!orderId || !paymentId || !signature) {
      return NextResponse.json(
        { ok: false, message: "Missing payment fields." },
        { status: 400 },
      );
    }

    const valid = verifyRazorpaySignature({
      orderId,
      paymentId,
      signature,
    });

    if (!valid) {
      return NextResponse.json(
        { ok: false, message: "Payment verification failed." },
        { status: 400 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Payment verified successfully.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Unable to verify payment." },
      { status: 500 },
    );
  }
}