"use client";

import { useState } from "react";

declare global {
  interface Window {
    Razorpay?: new (options: {
      key: string;
      order_id: string;
      amount: number;
      currency: string;
      name: string;
      description: string;
      theme?: { color?: string };
      handler?: (response: {
        razorpay_order_id: string;
        razorpay_payment_id: string;
        razorpay_signature: string;
      }) => void | Promise<void>;
      modal?: { ondismiss?: () => void };
    }) => {
      on: (event: string, callback: () => void) => void;
      open: () => void;
    };
  }
}

type Props = {
  planId: string;
  planName: string;
  amountInr: number;
  label: string;
  highlight?: boolean;
};

function loadRazorpay(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

export default function PayButton({ planId, planName, label, highlight }: Props) {
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function pay() {
    setBusy(true);
    setMsg(null);
    try {
      const ok = await loadRazorpay();
      if (!ok) throw new Error("Could not load payment window. Check your connection.");

      const res = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Payment setup failed.");
      if (!window.Razorpay) {
        throw new Error("Payment SDK unavailable. Refresh and try again.");
      }

      const rzp = new window.Razorpay({
        key: data.keyId,
        order_id: data.orderId,
        amount: data.amount,
        currency: data.currency,
        name: "Bluetrace Technologies",
        description: data.planName || planName,
        theme: { color: "#38bdf8" },
        handler: () => {
          setMsg(
            "Payment received — thank you! We'll contact you within 12 hours to start."
          );
          setBusy(false);
        },
        modal: { ondismiss: () => setBusy(false) },
      });
      rzp.on("payment.failed", () => {
        setMsg("Payment failed or cancelled. You were not charged — try again.");
        setBusy(false);
      });
      rzp.open();
    } catch (e: unknown) {
      const err = e instanceof Error ? e.message : "Something went wrong.";
      setMsg(err);
      setBusy(false);
    }
  }

  return (
    <div>
      <button
        onClick={pay}
        disabled={busy}
        className={`w-full rounded-lg py-2.5 text-sm font-semibold transition disabled:opacity-60 ${
          highlight
            ? "bg-sky-400 text-slate-950 hover:bg-sky-300"
            : "bg-slate-100 text-slate-900 hover:bg-white"
        }`}
      >
        {busy ? "Opening secure checkout…" : label}
      </button>
      {msg && <p className="mt-2 text-xs text-slate-400">{msg}</p>}
    </div>
  );
}
