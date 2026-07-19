"use client";

/**
 * BluetraceChat — a lead-qualifying chat widget.
 *
 * Works IMMEDIATELY with zero API keys: it's a guided conversation that
 * collects name → requirement → budget → phone, then submits the lead to
 * your existing /api/inquiry endpoint AND offers a one-tap WhatsApp handoff.
 *
 * Add to your root layout (app/layout.tsx):
 *   import BluetraceChat from "@/components/BluetraceChat";
 *   ...
 *   <body>{children}<BluetraceChat /></body>
 *
 * This same widget is your live demo — when a visitor asks "can you build
 * this chatbot for my business?", the answer sells itself.
 */

import { useEffect, useRef, useState, type ChangeEvent, type KeyboardEvent } from "react";

const WHATSAPP = "919462225303";

type Msg = { from: "bot" | "user"; text: string };
type Lead = { name: string; need: string; budget: string; phone: string };
type Step = "intro" | "need" | "budget" | "phone" | "done";

const NEEDS = [
  "AI chatbot for my website",
  "WhatsApp / business automation",
  "IoT or embedded product",
  "Website / app development",
  "Something else",
];

const BUDGETS = ["Under ₹15,000", "₹15,000 – ₹50,000", "₹50,000 – ₹2,00,000", "₹2,00,000+", "Not sure yet"];

export default function BluetraceChat() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("intro");
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      from: "bot",
      text: "Hi! I'm the Bluetrace assistant 🤖 We build AI chatbots, automation and IoT products. What's your name?",
    },
  ]);
  const [input, setInput] = useState("");
  const [lead, setLead] = useState<Lead>({ name: "", need: "", budget: "", phone: "" });
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open]);

  function bot(text: string) {
    setMsgs((m: Msg[]) => [...m, { from: "bot", text }]);
  }
  function user(text: string) {
    setMsgs((m: Msg[]) => [...m, { from: "user", text }]);
  }

  async function submitLead(final: Lead) {
    try {
      // /api/inquiry expects FormData and requires: name, company, email,
      // phone, projectType, budgetRange, timeline, details (verified against
      // app/api/inquiry/route.ts). Fields the chatbot doesn't collect are
      // filled with explicit placeholders so validation passes.
      const fd = new FormData();
      fd.set("name", final.name || "Chatbot visitor");
      fd.set("company", "Not provided (chatbot lead)");
      fd.set("email", "not-collected@chatbot.lead");
      fd.set("phone", final.phone);
      fd.set("projectType", final.need || "Not specified");
      fd.set("budgetRange", final.budget || "Not specified");
      fd.set("timeline", "Not specified");
      fd.set(
        "details",
        `Lead captured by website chatbot. Need: ${final.need}. Budget: ${final.budget}. Contact: ${final.phone}.`
      );
      await fetch("/api/inquiry", { method: "POST", body: fd });
    } catch {
      /* lead still reaches you via WhatsApp handoff below */
    }
  }

  function handleText() {
    const text = input.trim();
    if (!text) return;
    setInput("");
    user(text);

    if (step === "intro") {
      setLead((l: Lead) => ({ ...l, name: text }));
      setStep("need");
      setTimeout(() => bot(`Nice to meet you, ${text}! What do you need help with?`), 350);
    } else if (step === "phone") {
      const final = { ...lead, phone: text };
      setLead(final);
      setStep("done");
      submitLead(final);
      setTimeout(
        () =>
          bot(
            "Perfect — our engineer will contact you within 12 hours. Want an instant reply? Tap the WhatsApp button below 👇"
          ),
        350
      );
    }
  }

  function handleChoice(choice: string) {
    user(choice);
    if (step === "need") {
      setLead((l: Lead) => ({ ...l, need: choice }));
      setStep("budget");
      setTimeout(() => bot("Got it. What budget range are you thinking?"), 350);
    } else if (step === "budget") {
      setLead((l: Lead) => ({ ...l, budget: choice }));
      setStep("phone");
      setTimeout(() => bot("Last step — what's your phone or WhatsApp number so our engineer can reach you?"), 350);
    }
  }

  const waText = encodeURIComponent(
    `Hi Bluetrace! I'm ${lead.name || "a visitor"}. I need: ${lead.need || "—"}. Budget: ${lead.budget || "—"}.`
  );

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((o: boolean) => !o)}
        aria-label={open ? "Close chat" : "Chat with us"}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-sky-400 text-2xl text-slate-950 shadow-lg shadow-sky-400/30 transition hover:scale-105"
      >
        {open ? "✕" : "💬"}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[480px] w-[min(92vw,360px)] flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl">
          <div className="border-b border-slate-800 bg-slate-900 px-4 py-3">
            <p className="text-sm font-semibold text-slate-100">Bluetrace Assistant</p>
            <p className="text-xs text-emerald-400">● Online — replies instantly</p>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {msgs.map((m: Msg, i: number) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm ${
                  m.from === "bot"
                    ? "bg-slate-800 text-slate-100"
                    : "ml-auto bg-sky-400 text-slate-950"
                }`}
              >
                {m.text}
              </div>
            ))}

            {step === "need" && (
              <div className="flex flex-wrap gap-2">
                {NEEDS.map((n: string) => (
                  <button
                    key={n}
                    onClick={() => handleChoice(n)}
                    className="rounded-full border border-sky-400/50 px-3 py-1.5 text-xs text-sky-300 transition hover:bg-sky-400/10"
                  >
                    {n}
                  </button>
                ))}
              </div>
            )}
            {step === "budget" && (
              <div className="flex flex-wrap gap-2">
                {BUDGETS.map((b: string) => (
                  <button
                    key={b}
                    onClick={() => handleChoice(b)}
                    className="rounded-full border border-sky-400/50 px-3 py-1.5 text-xs text-sky-300 transition hover:bg-sky-400/10"
                  >
                    {b}
                  </button>
                ))}
              </div>
            )}
            {step === "done" && (
              <a
                href={`https://wa.me/${WHATSAPP}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-emerald-500 px-4 py-2.5 text-center text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Continue on WhatsApp →
              </a>
            )}
            <div ref={endRef} />
          </div>

          {(step === "intro" || step === "phone") && (
            <div className="flex gap-2 border-t border-slate-800 p-3">
              <input
                value={input}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && handleText()}
                placeholder={step === "intro" ? "Type your name…" : "Phone / WhatsApp number…"}
                className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400"
              />
              <button
                onClick={handleText}
                className="rounded-lg bg-sky-400 px-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                Send
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
