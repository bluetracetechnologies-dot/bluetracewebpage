import type { Metadata } from "next";
import PayButton from "@/components/PayButton";

export const metadata: Metadata = {
  title: "Pricing — AI Solutions & Engineering | Bluetrace Technologies",
  description:
    "Transparent pricing for AI chatbots, business automation, IoT and embedded engineering. Pay online, start in 48 hours.",
};

const WHATSAPP = "919462225303";

type Plan = {
  id: string;
  name: string;
  tagline: string;
  priceInr: number; // amount charged via Razorpay (advance / full)
  priceLabel: string;
  usdLabel: string;
  billing: string;
  features: string[];
  highlight?: boolean;
  cta: string;
};

const plans: Plan[] = [
  {
    id: "ai-chatbot-starter",
    name: "AI Chatbot — Starter",
    tagline: "Website chatbot that captures leads 24/7",
    priceInr: 14999,
    priceLabel: "₹14,999",
    usdLabel: "≈ $179",
    billing: "one-time setup",
    features: [
      "Custom-trained on your business FAQs",
      "Lead capture (name, phone, requirement)",
      "WhatsApp handoff to your team",
      "Installed on your existing website",
      "Delivery in 3–5 days",
      "1 month free support",
    ],
    cta: "Pay & start",
  },
  {
    id: "ai-automation-pro",
    name: "AI Automation — Pro",
    tagline: "Chatbot + workflow automation for your business",
    priceInr: 49999,
    priceLabel: "₹49,999",
    usdLabel: "≈ $599",
    billing: "one-time setup",
    highlight: true,
    features: [
      "Everything in Starter",
      "AI trained on your documents & catalog",
      "WhatsApp Business API integration",
      "Auto-reply to enquiries & bookings",
      "CRM / Google Sheets lead sync",
      "School, clinic & shop automation ready",
      "3 months free support",
    ],
    cta: "Pay & start",
  },
  {
    id: "custom-enterprise",
    name: "Custom AI / IoT Solution",
    tagline: "Embedded, IoT-to-cloud, SaaS — built to spec",
    priceInr: 25000,
    priceLabel: "From ₹1,00,000",
    usdLabel: "from $1,200",
    billing: "₹25,000 advance books your slot",
    features: [
      "AI agents & custom SaaS delivery",
      "ESP32 / STM32 / nRF firmware",
      "PCB design & review",
      "Device-to-cloud dashboards",
      "Dedicated engineer & weekly demos",
      "Fixed quote before work begins",
    ],
    cta: "Pay advance & book",
  },
];

const addons = [
  { name: "AI voice agent (calls in Hindi/English)", price: "₹24,999" },
  { name: "Extra language for chatbot", price: "₹4,999" },
  { name: "Monthly maintenance & retraining", price: "₹2,999/mo" },
  { name: "WhatsApp broadcast setup", price: "₹7,999" },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-12 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
          Pricing
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          AI solutions with clear prices.
          <br className="hidden sm:block" /> Pay online, start in 48 hours.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          Every project includes a written scope before we start. Pay securely
          by UPI, card or netbanking — you receive an invoice from Bluetrace
          Technologies Private Limited.
        </p>
      </section>

      {/* Plans */}
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`flex flex-col rounded-2xl border p-7 ${
              plan.highlight
                ? "border-sky-400 bg-slate-900 shadow-[0_0_40px_-12px_rgba(56,189,248,0.4)]"
                : "border-slate-800 bg-slate-900/60"
            }`}
          >
            {plan.highlight && (
              <span className="mb-4 w-fit rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300">
                Most popular
              </span>
            )}
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p className="mt-1 text-sm text-slate-400">{plan.tagline}</p>
            <div className="mt-5">
              <span className="text-3xl font-bold">{plan.priceLabel}</span>
              <span className="ml-2 text-sm text-slate-400">
                {plan.usdLabel}
              </span>
              <p className="mt-1 text-xs text-slate-500">{plan.billing}</p>
            </div>
            <ul className="mt-6 flex-1 space-y-2.5 text-sm text-slate-300">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span aria-hidden className="text-sky-400">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-7 space-y-3">
              <PayButton
                planId={plan.id}
                planName={plan.name}
                amountInr={plan.priceInr}
                label={plan.cta}
                highlight={plan.highlight}
              />
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                  `Hi, I'm interested in the ${plan.name} package. Please share details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-slate-700 py-2.5 text-center text-sm text-slate-300 transition hover:border-slate-500"
              >
                Ask on WhatsApp first
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Add-ons */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h3 className="text-lg font-semibold text-slate-200">Add-ons</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {addons.map((a) => (
            <div
              key={a.name}
              className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-4 text-sm"
            >
              <span className="text-slate-300">{a.name}</span>
              <span className="font-semibold text-sky-300">{a.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 text-sm text-slate-400 sm:grid-cols-3">
          <p>
            <strong className="text-slate-200">Secure payments.</strong> UPI,
            cards & netbanking via Razorpay. GST invoice on every payment.
          </p>
          <p>
            <strong className="text-slate-200">Written scope first.</strong>{" "}
            You approve a one-page scope before work starts. No surprises.
          </p>
          <p>
            <strong className="text-slate-200">Talk to an engineer.</strong>{" "}
            Call or WhatsApp +91 94622 25303 · rahim@bluetrace.tech
          </p>
        </div>
      </section>
    </main>
  );
}
