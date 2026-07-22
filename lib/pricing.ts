/**
 * Purchasable catalog for Bluetrace Technologies.
 *
 * This is the single source of truth for everything a customer (or an AI
 * shopping agent) can pay for online. Prices are stored in INR rupees;
 * Razorpay is charged in paise (rupees * 100) at order-creation time.
 *
 * Keep this file free of server-only secrets so it can be imported by both
 * client components (to render cards) and the machine-readable catalog feed.
 */

export type CatalogType = "fixed" | "deposit" | "retainer";

export type CatalogItem = {
  /** Stable id used by the checkout API and the /api/catalog agent feed. */
  id: string;
  name: string;
  category: string;
  /** One-line value proposition. */
  summary: string;
  /** Price in INR rupees (integer). Charged to Razorpay as priceINR * 100 paise. */
  priceINR: number;
  /** Display-only approximate USD price for international visitors. */
  priceUSD: number;
  type: CatalogType;
  /** "fixed" = full price. "deposit" = advance to start a custom project. "retainer" = recurring block. */
  unitLabel?: string;
  deliverables: string[];
  popular?: boolean;
  /** Optional turnaround shown on the card. */
  turnaround?: string;
};

export const catalog: CatalogItem[] = [
  {
    id: "pcb-design-review",
    name: "PCB Design Review",
    category: "Hardware",
    summary:
      "Independent schematic + layout review to catch power, grounding and DFM issues before you spend on a board re-spin.",
    priceINR: 15000,
    priceUSD: 199,
    type: "fixed",
    turnaround: "3–5 days",
    deliverables: [
      "Schematic review",
      "Layout & routing review",
      "Prioritised risk list",
      "Improvement report",
      "BOM & DFM notes",
    ],
  },
  {
    id: "firmware-debug-session",
    name: "Firmware Debug Session",
    category: "Firmware",
    summary:
      "Focused 2–6 hour live debugging on stubborn firmware, peripherals or bring-up blockers with a written fix plan.",
    priceINR: 10000,
    priceUSD: 149,
    type: "fixed",
    turnaround: "48 hours",
    popular: true,
    deliverables: [
      "2–6 hours live debugging",
      "Root-cause notes",
      "Code + hardware issue review",
      "Recommended fix plan",
    ],
  },
  {
    id: "ble-mcu-firmware-module",
    name: "BLE / ESP32 / STM32 Firmware Module",
    category: "Firmware",
    summary:
      "A production-ready wireless or MCU firmware module — GATT profiles, drivers and low-power tuning — integrated into your product.",
    priceINR: 40000,
    priceUSD: 499,
    type: "fixed",
    turnaround: "1–3 weeks",
    deliverables: [
      "Firmware module",
      "Communication interface",
      "Integration notes",
      "Test support",
    ],
  },
  {
    id: "iot-prototype",
    name: "IoT Prototype Development",
    category: "IoT",
    summary:
      "End-to-end device-to-cloud prototype: firmware, connectivity, dashboard and documentation you can demo to investors.",
    priceINR: 75000,
    priceUSD: 999,
    type: "fixed",
    turnaround: "3–6 weeks",
    deliverables: [
      "Device firmware",
      "Cloud connectivity",
      "Live dashboard",
      "Documentation",
      "Test plan",
    ],
  },
  {
    id: "school-ai-robotics-lab",
    name: "School AI + Robotics Lab Setup",
    category: "Education",
    summary:
      "Turn-key AI, robotics and IoT lab concept for schools — workshops, kits, training modules and demo projects.",
    priceINR: 50000,
    priceUSD: 649,
    type: "deposit",
    unitLabel: "booking deposit",
    turnaround: "Scheduled",
    deliverables: [
      "AI workshop plan",
      "Robotics + IoT lab concept",
      "Training modules",
      "Demo projects",
      "On-site setup roadmap",
    ],
  },
  {
    id: "hospital-queue-system",
    name: "Hospital Queue / Appointment System",
    category: "Automation",
    summary:
      "Appointment, token-queue, patient-communication and admin-dashboard system for clinics and hospitals.",
    priceINR: 35000,
    priceUSD: 449,
    type: "fixed",
    turnaround: "2–4 weeks",
    deliverables: [
      "Appointment workflow",
      "Queue & token system",
      "Admin dashboard",
      "Patient communication support",
    ],
  },
  {
    id: "consulting-block-5h",
    name: "Engineering Consulting — 5 Hours",
    category: "Consulting",
    summary:
      "A prepaid block of senior embedded/IoT engineering time. Use it for architecture reviews, code reviews or planning calls.",
    priceINR: 12500,
    priceUSD: 169,
    type: "retainer",
    unitLabel: "5-hour block",
    turnaround: "Booked within 3 days",
    deliverables: [
      "5 hours senior engineering time",
      "Architecture / code review",
      "Written summary & next steps",
    ],
  },
  {
    id: "project-deposit",
    name: "Custom Project — Start Deposit",
    category: "Custom",
    summary:
      "Have a bespoke firmware, PCB, IoT or AI project? Pay a refundable start deposit to lock your slot; it's adjusted against the final quote.",
    priceINR: 5000,
    priceUSD: 69,
    type: "deposit",
    unitLabel: "advance, adjusted in final invoice",
    turnaround: "Kickoff call in 24h",
    deliverables: [
      "Priority scheduling",
      "Scoping & requirements call",
      "Fixed written quote",
      "Deposit adjusted against project",
    ],
  },
];

export function getCatalogItem(id: string): CatalogItem | undefined {
  return catalog.find((item) => item.id === id);
}

/** Razorpay expects the amount in the smallest currency unit (paise for INR). */
export function toPaise(priceINR: number): number {
  return Math.round(priceINR * 100);
}

export const CURRENCY = "INR" as const;
