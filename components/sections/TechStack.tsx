"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { MotionReveal } from "@/components/MotionReveal";

const groups: { title: string; items: string[] }[] = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Go", "Python", "FastAPI", "GraphQL", "gRPC"],
  },
  {
    title: "AI / ML",
    items: ["PyTorch", "LangChain", "OpenAI", "Anthropic", "Vector DBs", "vLLM"],
  },
  {
    title: "Cloud & Data",
    items: ["AWS", "GCP", "Azure", "Kubernetes", "Terraform", "Postgres", "Redis"],
  },
  {
    title: "Embedded & IoT",
    items: ["ESP32", "STM32", "FreeRTOS", "Zephyr", "MQTT", "LoRaWAN", "BLE"],
  },
  {
    title: "DevEx & Quality",
    items: ["GitHub Actions", "Vercel", "Cloudflare", "Sentry", "OpenTelemetry"],
  },
];

export function TechStack() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Technology stack"
          title={
            <>
              Modern, opinionated, <span className="gradient-text">production-tested</span>
            </>
          }
          description="A pragmatic stack chosen for reliability, developer velocity and long-term maintainability."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <MotionReveal key={g.title} delay={i * 0.05}>
              <div className="glass glass-hover h-full rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  {g.title}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
