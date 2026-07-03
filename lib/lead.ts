export const engineeringPackages = [
  {
    slug: "pcb-design-review",
    title: "PCB Design Review",
    price: "Starting from $199 / INR 15,000",
    deliverables: [
      "Schematic review",
      "Layout review",
      "Risk list",
      "Improvement report",
      "BOM notes",
    ],
  },
  {
    slug: "firmware-debug-session",
    title: "Firmware Debug Session",
    price: "Starting from $149 / INR 10,000",
    deliverables: [
      "2 to 6 hour debugging support",
      "Root-cause notes",
      "Code and hardware issue review",
      "Recommended fix plan",
    ],
  },
  {
    slug: "iot-prototype-development",
    title: "IoT Prototype Development",
    price: "Starting from $999 / INR 75,000",
    deliverables: [
      "Device firmware",
      "Cloud connectivity",
      "Dashboard",
      "Documentation",
      "Test plan",
    ],
  },
  {
    slug: "ble-esp32-stm32-firmware",
    title: "BLE / ESP32 / STM32 Firmware",
    price: "Starting from $499 / INR 40,000",
    deliverables: [
      "Firmware module",
      "Communication interface",
      "Integration notes",
      "Test support",
    ],
  },
  {
    slug: "school-ai-robotics-lab-setup",
    title: "School AI + Robotics Lab Setup",
    price: "Starting from INR 50,000",
    deliverables: [
      "AI workshop",
      "Robotics and IoT lab concept",
      "Training modules",
      "Demo projects",
    ],
  },
  {
    slug: "hospital-queue-appointment-system",
    title: "Hospital Queue / Appointment System",
    price: "Starting from INR 35,000",
    deliverables: [
      "Appointment workflow",
      "Queue and token concept",
      "Admin dashboard",
      "Patient communication support",
    ],
  },
] as const;

export const caseStudies = [
  {
    slug: "ble-wearable-monitoring-dashboard",
    title: "BLE Wearable Monitoring Dashboard",
    status: "Case study placeholder",
    summary:
      "Raspberry Pi 5 based BLE wearable monitoring system for CL831 and CL831SE fitness bracelets with BLE scanning, heart-rate and IMU capture, SQLite storage, Flask dashboard, session tracking, analytics, and CSV/JSON export.",
    technologies: ["Raspberry Pi 5", "BLE", "SQLite", "Flask", "Python"],
  },
  {
    slug: "esp32-smart-energy-monitoring-system",
    title: "ESP32 Smart Energy Monitoring System",
    status: "Prototype concept",
    summary:
      "ESP32-based energy monitoring prototype concept with voltage/current sensing, OLED display, switching logic, solar/battery/grid modes, and dashboard-ready telemetry.",
    technologies: ["ESP32", "Embedded C/C++", "Sensor telemetry", "OLED UI"],
  },
  {
    slug: "pcb-design-review-board-bringup",
    title: "PCB Design Review and Board Bring-Up",
    status: "Case study placeholder",
    summary:
      "Engineering support for schematic/layout review, power integrity, grounding/noise review, BOM risk checks, and firmware bring-up planning for custom hardware boards.",
    technologies: ["PCB review", "Power integrity", "BOM analysis", "Firmware bring-up"],
  },
  {
    slug: "school-ai-robotics-lab-proposal",
    title: "School AI and Robotics Lab Proposal",
    status: "Concept",
    summary:
      "AI, robotics, IoT, and future-skills lab concept for schools including student workshops, teacher AI productivity, robotics kits, and smart campus modules.",
    technologies: ["AI workshops", "Robotics kits", "IoT demos", "Education automation"],
  },
  {
    slug: "hospital-clinic-automation-concept",
    title: "Hospital / Clinic Automation Concept",
    status: "Concept",
    summary:
      "Appointment, queue, patient communication, and admin dashboard system concept for hospitals and clinics.",
    technologies: ["Workflow automation", "Dashboard", "Notifications", "Queue logic"],
  },
] as const;

export const industriesServed = [
  "IoT startups",
  "Wearables",
  "Smart home",
  "Healthcare and hospitals",
  "Schools and education",
  "Industrial automation",
  "Energy monitoring",
  "Robotics",
  "Local businesses",
] as const;

export const proofPoints = [
  "Bluetrace Technologies Private Limited",
  "Startup India recognition: placeholder, update after verification",
  "MSME/Udyam: placeholder, update after verification",
  "Portfolio and case studies shared on request",
  "Engineering and Upwork delivery experience",
] as const;

export const projectTypeOptions = [
  "Embedded Firmware",
  "PCB Design / Review",
  "IoT Prototype",
  "BLE / ESP32 / STM32 / nRF",
  "AI Automation",
  "Web / Mobile / SaaS",
  "School / Hospital Automation",
  "Other",
] as const;

export const budgetRangeOptions = [
  "Below INR 25,000",
  "INR 25,000 to INR 75,000",
  "INR 75,000 to INR 2,00,000",
  "INR 2,00,000+",
  "$199 to $499",
  "$500 to $1,500",
  "$1,500 to $5,000",
  "$5,000+",
] as const;

export const timelineOptions = [
  "Immediate start",
  "Within 2 weeks",
  "Within 1 month",
  "1 to 3 months",
  "3+ months",
] as const;
