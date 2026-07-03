"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { MotionReveal } from "@/components/MotionReveal";

const groups: { title: string; items: string[] }[] = [
  {
    title: "Embedded Platforms",
    items: ["STM32", "ESP32", "nRF52 / nRF52840", "Arduino", "Bare-metal C", "FreeRTOS"],
  },
  {
    title: "Connectivity and Protocols",
    items: ["BLE", "MQTT", "UART", "SPI", "I2C", "OTA", "LoRaWAN"],
  },
  {
    title: "Firmware and RTOS",
    items: ["FreeRTOS", "Zephyr", "Nordic SDK", "Board bring-up", "Sensor integration", "Low-power tuning"],
  },
  {
    title: "Cloud and Backend",
    items: ["Python", "Flask", "FastAPI", "Node.js", "Cloud dashboards", "SQLite", "PostgreSQL"],
  },
  {
    title: "Web and Mobile",
    items: ["React", "Next.js", "Admin panels", "API integrations", "Business websites", "Web apps"],
  },
  {
    title: "Automation and AI",
    items: ["AI workflow automation", "Business dashboards", "Internal tools", "AI assistants", "Notification workflows"],
  },
];

export function TechStack() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Technologies We Work With"
          title={
            <>
              Practical stack for <span className="gradient-text">reliable delivery</span>
            </>
          }
          description="We choose technologies based on product reliability, maintainability, and deployment readiness, not trend-chasing."
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
