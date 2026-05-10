import {
  Bot,
  CircuitBoard,
  Globe2,
  Radio,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  status: "Live" | "Beta" | "Coming Soon";
  highlights: string[];
};

export const products: Product[] = [
  {
    slug: "trace-ai",
    name: "Trace AI",
    category: "AI Platform",
    tagline: "Enterprise-grade AI workspace.",
    description:
      "A unified platform for deploying LLM apps, agents, and retrieval pipelines with built-in observability.",
    icon: Bot,
    status: "Coming Soon",
    highlights: ["Agents & RAG", "Eval & observability", "BYO model"],
  },
  {
    slug: "blueedge",
    name: "BlueEdge",
    category: "Embedded Platform",
    tagline: "Manufacturing-ready firmware platform.",
    description:
      "Production-grade firmware base, OTA updates, and device provisioning for medical, automotive and industrial-grade hardware.",
    icon: CircuitBoard,
    status: "Coming Soon",
    highlights: ["RTOS-based firmware base", "Secure OTA updates", "Provisioning & telemetry"],
  },
  {
    slug: "pulse",
    name: "Pulse",
    category: "IoT Telemetry",
    tagline: "Edge-to-cloud IoT telemetry.",
    description:
      "Low-power device fleets streaming telemetry through MQTT and LoRaWAN — visualised, alerted, and analysed in real time.",
    icon: Radio,
    status: "Coming Soon",
    highlights: ["MQTT / LoRaWAN ingest", "Realtime dashboards", "Alerts & anomaly detection"],
  },
  {
    slug: "bluekit",
    name: "BlueKit",
    category: "Web Toolkit",
    tagline: "Production starter for modern teams.",
    description:
      "Opinionated Next.js toolkit with auth, billing, and UI primitives that ships SaaS apps in days.",
    icon: Globe2,
    status: "Beta",
    highlights: ["Auth + billing", "Admin & analytics", "Design system"],
  },
  {
    slug: "autoflow",
    name: "AutoFlow",
    category: "Automation",
    tagline: "Workflow engine with AI copilots.",
    description:
      "Drag-and-drop automations augmented by AI copilots that connect your stack and remove manual work.",
    icon: Workflow,
    status: "Coming Soon",
    highlights: ["Visual builder", "AI copilots", "200+ integrations"],
  },
];
