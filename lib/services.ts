import {
  BrainCircuit,
  CircuitBoard,
  Code,
  Cpu,
  Hospital,
  Radio,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
  problemSolved: string;
  technologies: string[];
  deliverables: string[];
  ctaLabel: string;
};

export const services: Service[] = [
  {
    slug: "embedded-firmware-development",
    title: "Embedded Firmware Development",
    description:
      "Production-grade embedded firmware for connected products across board bring-up, peripherals, communication, and robust runtime behavior.",
    icon: Cpu,
    highlights: ["STM32, ESP32, nRF52", "FreeRTOS, bare-metal", "UART, SPI, I2C, ADC, GPIO"],
    problemSolved:
      "Fix unstable prototypes, missed milestones, and bring-up delays by delivering firmware that is testable and hardware-aware.",
    technologies: ["STM32", "ESP32", "nRF52/nRF52840", "FreeRTOS", "Zephyr/Nordic SDK", "UART/SPI/I2C"],
    deliverables: ["Firmware architecture", "Board bring-up logs", "Driver + interface modules", "Debug and validation notes"],
    ctaLabel: "Book Free Technical Review",
  },
  {
    slug: "pcb-design-review",
    title: "PCB Design & Review",
    description:
      "Structured schematic and layout review to reduce board re-spin risks and improve manufacturing readiness.",
    icon: CircuitBoard,
    highlights: ["Schematic review", "Power and grounding", "BOM and DFM/DFT"],
    problemSolved:
      "Prevent costly hardware iteration cycles caused by hidden power, signal integrity, and production-readiness issues.",
    technologies: ["Altium/KiCad-ready workflows", "Power integrity review", "Noise and grounding analysis", "BOM risk checks"],
    deliverables: ["Issue and risk list", "Layout improvement notes", "BOM recommendations", "Manufacturing readiness checklist"],
    ctaLabel: "Request Project Quote",
  },
  {
    slug: "iot-device-to-cloud",
    title: "IoT Device-to-Cloud Solutions",
    description:
      "End-to-end IoT implementation from firmware and protocol design to dashboard telemetry and OTA planning.",
    icon: Radio,
    highlights: ["MQTT / HTTP", "Data logging", "OTA and fleet management"],
    problemSolved:
      "Connect devices reliably to cloud systems with clear visibility, maintainability, and secure update pathways.",
    technologies: ["MQTT", "HTTP", "Dashboards", "Data pipelines", "OTA strategy", "Device fleet controls"],
    deliverables: ["Firmware communication layer", "Cloud data model", "Dashboard baseline", "Device management plan"],
    ctaLabel: "Send Requirement",
  },
  {
    slug: "ble-esp32-stm32-nrf",
    title: "BLE / ESP32 / STM32 / nRF Development",
    description:
      "Focused wireless and MCU engineering support for BLE communication, GATT design, and low-power optimization.",
    icon: Wrench,
    highlights: ["BLE central/peripheral", "GATT profile design", "Low-power debugging"],
    problemSolved:
      "Resolve flaky BLE performance, integration blockers, and device battery-life issues in product-critical phases.",
    technologies: ["BLE", "GATT", "ESP32", "STM32", "nRF52/nRF52840", "Mobile integration support"],
    deliverables: ["Firmware communication modules", "Integration notes", "Power profile recommendations", "Debug findings"],
    ctaLabel: "Book Free Technical Review",
  },
  {
    slug: "ai-automation-saas",
    title: "AI Automation & SaaS Solutions",
    description:
      "Business-focused AI workflows, assistants, dashboards, and SaaS MVPs that reduce repetitive operations.",
    icon: BrainCircuit,
    highlights: ["AI workflow automation", "SaaS MVP delivery", "Internal business tools"],
    problemSolved:
      "Replace manual, repetitive workflows with measurable automation that improves response time and team throughput.",
    technologies: ["Next.js", "Python", "FastAPI/Node.js", "LLM integrations", "Automation workflows", "PostgreSQL/SQLite"],
    deliverables: ["Automation architecture", "Dashboards", "AI assistant flows", "Admin and reporting tools"],
    ctaLabel: "Request Project Quote",
  },
  {
    slug: "web-mobile-cloud",
    title: "Web, Mobile & Cloud Development",
    description:
      "Reliable software delivery for websites, business applications, mobile apps, APIs, and cloud dashboards.",
    icon: Code,
    highlights: ["Web and mobile apps", "API and admin panels", "Cloud dashboards"],
    problemSolved:
      "Move from fragmented tools to a cohesive product stack that supports operations, reporting, and customer workflows.",
    technologies: ["React/Next.js", "Node.js/FastAPI", "REST APIs", "Cloud hosting", "Admin panels", "Mobile app integration"],
    deliverables: ["Application modules", "API documentation", "Deployment setup", "Operational dashboard"],
    ctaLabel: "Send Requirement",
  },
  {
    slug: "school-hospital-business-automation",
    title: "School, Hospital & Business Automation",
    description:
      "Automation systems tailored for schools, clinics, hospitals, and local businesses with practical execution timelines.",
    icon: Hospital,
    highlights: ["Student/parent communication", "Hospital queue systems", "Business notifications"],
    problemSolved:
      "Replace manual follow-ups and disconnected operational workflows with integrated systems and clear process visibility.",
    technologies: ["Workflow automation", "WhatsApp and email notifications", "Admin dashboards", "Cloud reporting", "Role-based access"],
    deliverables: ["Process design blueprint", "Automation modules", "Staff onboarding notes", "Reporting and alert setup"],
    ctaLabel: "WhatsApp Bluetrace",
  },
];
