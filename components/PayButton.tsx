"use client";

import { useState } from "react";

declare global {
  interface Window {
    Razorpay?: any;
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

      const rzp = new window.Razorpay({
        key: data.keyId,
        order_id: data.orderId,
        amount: data.amount,
        currency: data.currency,
        name: "Bluetrace Technologies",
        description: data.planName,
        theme: { color: "#38bdf8" },
        handler: () => {
          setMsg(
            "Payment received — thank you! We'll contact you within 12 hours to start."
          );
        },
        modal: { ondismiss: () => setBusy(false) },
      });
      rzp.on("payment.failed", () =>
        setMsg("Payment failed or cancelled. You were not charged — try again.")
      );
      rzp.open();
    } catch (e: any) {
      setMsg(e.message || "Something went wrong.");
    } finally {
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
