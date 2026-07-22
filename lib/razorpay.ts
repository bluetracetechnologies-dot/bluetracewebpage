import crypto from "crypto";
import Razorpay from "razorpay";

export const MIN_RAZORPAY_AMOUNT_PAISE = 100;

export function getRazorpayKeyId() {
  return process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "";
}

export function getRazorpayKeySecret() {
  return process.env.RAZORPAY_KEY_SECRET || "";
}

export function createRazorpayClient() {
  const keyId = getRazorpayKeyId();
  const keySecret = getRazorpayKeySecret();

  if (!keyId || !keySecret) {
    return null;
  }

  return new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  });
}

export function verifyRazorpaySignature({
  orderId,
  paymentId,
  signature,
  keySecret = getRazorpayKeySecret(),
}: {
  orderId: string;
  paymentId: string;
  signature: string;
  keySecret?: string;
}) {
  if (!keySecret) {
    return false;
  }

  const expected = crypto
    .createHmac("sha256", keySecret)
    .update(`${orderId}|${paymentId}`)
    .digest("hex");

  return (
    expected.length === signature.length &&
    crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature))
  );
}