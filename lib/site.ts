export const siteConfig = {
  name: "Bluetrace Technologies",
  legalName: "Bluetrace Technologies Private Limited",
  shortName: "Bluetrace",
  tagline: "Embedded, IoT & PCB Engineering for Smart Connected Products",
  description:
    "Bluetrace Technologies Private Limited helps startups, schools, hospitals, and businesses design, prototype, debug, and deploy firmware, PCB, IoT, automation, and software systems.",
  url: "https://bluetrace.tech",
  ogImage: "https://bluetrace.tech/og.png",
  keywords: [
    "Embedded systems company India",
    "IoT development company India",
    "PCB design review services",
    "Firmware development services",
    "ESP32 firmware development",
    "STM32 firmware development",
    "nRF52 firmware development",
    "BLE IoT development",
    "IoT prototype development",
    "AI automation company India",
    "SaaS development company India",
    "School robotics lab setup",
    "Hospital automation software",
    "Embedded firmware developer India",
    "IoT device-to-cloud development",
  ],
  emails: {
    primary: "rahim@bluetrace.tech",
    support: "rahim@bluetrace.tech",
    sales: "rahim@bluetrace.tech",
  },
  phone: "+91 9462225303",
  contactChannels: [
    {
      type: "email",
      label: "General",
      value: "rahim@bluetrace.tech",
      description: "Founder & general inquiries.",
    },
    {
      type: "phone",
      label: "Phone / WhatsApp",
      value: "+91 9462225303",
      description: "Primary project line for calls and WhatsApp.",
    },
    {
      type: "phone",
      label: "Phone",
      value: "+91 9823797953",
      description: "Secondary line for urgent engineering discussions.",
    },
    {
      type: "whatsapp",
      label: "WhatsApp",
      value: "+91 9462225303",
      description: "Send requirements, drawings, and references instantly.",
    },
  ] as Array<{
    type: "email" | "phone" | "whatsapp" | "url";
    label: string;
    value: string;
    description?: string;
  }>,
  location: {
    addressLine1: "H. No. 1812, Raj Nagar",
    addressLine2: "Near Kareem Hospital",
    locality: "Parbhani",
    region: "Maharashtra",
    country: "India",
    postalCode: "431401",
    lat: 19.269784927368164,
    lng: 76.76473999023438,
    mapsUrl:
      "https://www.google.com/maps?q=19.269784927368164,76.76473999023438&z=17&hl=en",
    embedUrl:
      "https://maps.google.com/maps?q=19.269784927368164,76.76473999023438&z=17&hl=en&output=embed",
  },
  legal: {
    cin: "",
    pan: "",
    tan: "",
    incorporationDate: "2026-05-06",
    foundingYear: 2026,
    issuedAt: "Manesar (CRC), Ministry of Corporate Affairs",
  },
  founder: {
    name: "A.R. Ansari",
    role: "CEO",
  },
  directors: [
    { name: "A.R. Ansari", role: "Founder & CEO" },
    { name: "Abdul Mujahed", role: "Director" },
    { name: "Kashif Ansari", role: "Director" },
  ],
  social: {
    linkedin: "https://www.linkedin.com/company/bluetrace-technologies",
    github: "https://github.com/bluetrace-tech",
    x: "https://x.com/bluetracetech",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Products", href: "/products" },
    { label: "Pricing", href: "/pricing" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
