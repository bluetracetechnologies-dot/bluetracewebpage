import {
  Brain,
  CircuitBoard,
  Cloud,
  Code2,
  Cpu,
  Layers,
  Plug,
  Radio,
  Smartphone,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    description:
      "Production-grade AI systems — from LLM applications and RAG pipelines to computer vision and predictive analytics.",
    icon: Brain,
    highlights: ["LLM apps & agents", "RAG pipelines", "ML model deployment"],
  },
  {
    slug: "embedded-systems",
    title: "Embedded Systems",
    description:
      "Custom firmware, board bring-up, and manufacturing-ready PCB design for medical, automotive and industrial-grade electronics.",
    icon: Cpu,
    highlights: ["PCB design & bring-up", "Custom firmware (RTOS / bare-metal)", "NDA-safe development"],
  },
  {
    slug: "iot-platforms",
    title: "IoT Platforms",
    description:
      "Low-power IoT devices, gateways, and cloud telemetry pipelines — from edge sensor to dashboard, end-to-end.",
    icon: Radio,
    highlights: ["Low-power edge devices", "MQTT / LoRaWAN / BLE", "Fleet & OTA management"],
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    description:
      "End-to-end SaaS products engineered for multi-tenancy, billing, and enterprise scale from day one.",
    icon: Layers,
    highlights: ["Multi-tenant architecture", "Billing & auth", "Admin dashboards"],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    description:
      "Resilient cloud platforms on AWS, GCP and Azure with infrastructure-as-code, observability, and cost control.",
    icon: Cloud,
    highlights: ["AWS / GCP / Azure", "Terraform & IaC", "Kubernetes"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "High-performance web apps and marketing sites built with Next.js, edge runtimes, and modern UX.",
    icon: Code2,
    highlights: ["Next.js / React", "Edge & SSR", "Design systems"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications optimized for performance, offline-first UX, and store scale.",
    icon: Smartphone,
    highlights: ["iOS & Android", "React Native / Flutter", "Offline-first"],
  },
  {
    slug: "api-systems",
    title: "API Systems",
    description:
      "Robust public and internal APIs — REST, GraphQL, and event-driven — built for high throughput and clean DX.",
    icon: Plug,
    highlights: ["REST & GraphQL", "Event-driven", "Developer portals"],
  },
  {
    slug: "automation-tools",
    title: "Automation Tools",
    description:
      "Internal automations, workflow engines, and AI copilots that compress operational overhead.",
    icon: Workflow,
    highlights: ["Workflow engines", "AI copilots", "Integrations"],
  },
  {
    slug: "technical-consulting",
    title: "Technical Consulting",
    description:
      "Architecture reviews, hardware/software roadmaps, and CTO-level engagements to de-risk critical decisions.",
    icon: Sparkles,
    highlights: ["Architecture audits", "Hardware + software roadmaps", "Fractional CTO"],
  },
];
