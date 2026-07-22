"use client";

import { useCallback, useState } from "react";
import { ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

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

const RAZORPAY_SCRIPT = "https://checkout.razorpay.com/v1/checkout.js";

function loadRazorpay(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(false);
    if (window.Razorpay) return resolve(true);
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${RAZORPAY_SCRIPT}"]`,
    );
    if (existing) {
      existing.addEventListener("load", () => resolve(true));
      existing.addEventListener("error", () => resolve(false));
      return;
    }
    const script = document.createElement("script");
    script.src = RAZORPAY_SCRIPT;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function CheckoutButton({
  itemId,
  itemName,
  label = "Buy now",
  className = "btn-primary w-full justify-center",
}: {
  itemId: string;
  itemName: string;
  label?: string;
  className?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  const startCheckout = useCallback(async () => {
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemId }),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.message || "Could not start checkout.");
        return;
      }

      const ok = await loadRazorpay();
      if (!ok || !window.Razorpay) {
        setStatus("error");
        setMessage("Could not load the payment window. Please try again.");
        return;
      }

      const rzp = new window.Razorpay({
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: "Bluetrace Technologies",
        description: itemName,
        order_id: data.orderId,
        theme: { color: "#1E90FF" },
        handler: async (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          try {
            const verifyRes = await fetch("/api/checkout/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ...response, itemId }),
            });
            const verify = await verifyRes.json();
            if (verifyRes.ok && verify.ok) {
              setStatus("success");
              setMessage(
                "Payment received — thank you! We'll email you within 24 hours to begin.",
              );
            } else {
              setStatus("error");
              setMessage(
                verify.message ||
                  "Payment captured but verification failed. Email rahim@bluetrace.tech with your payment id.",
              );
            }
          } catch {
            setStatus("error");
            setMessage(
              "Payment captured but confirmation failed. Please email rahim@bluetrace.tech.",
            );
          }
        },
        modal: {
          ondismiss: () => {
            setStatus((s) => (s === "loading" ? "idle" : s));
          },
        },
      });

      rzp.open();
      setStatus("idle");
    } catch {
      setStatus("error");
      setMessage("Something went wrong starting checkout.");
    }
  }, [itemId, itemName]);

  if (status === "success") {
    return (
      <div className="flex items-start gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-3 text-sm text-emerald-300">
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
        <span>{message}</span>
      </div>
    );
  }

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={startCheckout}
        disabled={status === "loading"}
        className={className}
      >
        {status === "loading" ? (
          <>
            Starting… <Loader2 className="h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            {label} <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
      {status === "error" && message ? (
        <p className="mt-2 flex items-start gap-1.5 text-xs text-red-300">
          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          <span>{message}</span>
        </p>
      ) : null}
    </div>
  );
}
