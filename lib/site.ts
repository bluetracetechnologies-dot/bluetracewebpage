export const siteConfig = {
  name: "Bluetrace Technologies",
  legalName: "Bluetrace Technologies Private Limited",
  shortName: "Bluetrace",
  tagline: "Building Intelligent Digital Infrastructure",
  description:
    "Bluetrace Technologies builds intelligent software systems, AI-powered platforms, embedded electronics, IoT infrastructure, and scalable digital products for modern businesses and startups.",
  url: "https://bluetrace.tech",
  ogImage: "https://bluetrace.tech/og.png",
  keywords: [
    "Bluetrace",
    "Bluetrace Technologies",
    "AI solutions",
    "Embedded systems",
    "IoT infrastructure",
    "Industrial IoT",
    "PCB design",
    "Firmware development",
    "SaaS development",
    "Cloud infrastructure",
    "Automation tools",
    "API systems",
    "Web development",
    "Mobile app development",
    "Technical consulting",
  ],
  emails: {
    primary: "rahim@bluetrace.tech",
    support: "support@bluetrace.tech",
    sales: "sales@bluetrace.tech",
  },
  phone: "+91 90243 04883",
  contactChannels: [
    {
      type: "email",
      label: "General",
      value: "rahim@bluetrace.tech",
      description: "Founder & general inquiries.",
    },
    {
      type: "email",
      label: "Sales",
      value: "sales@bluetrace.tech",
      description: "Pricing, scoping and engagements.",
    },
    {
      type: "email",
      label: "Support",
      value: "support@bluetrace.tech",
      description: "Help with existing products & projects.",
    },
    {
      type: "phone",
      label: "Phone",
      value: "+91 90243 04883",
      description: "Mon–Sat · 10:00 AM – 7:00 PM IST.",
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
    cin: "U62099ME2026PTC474717",
    pan: "AAOCB7164R",
    tan: "NSKB08840G",
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
    { label: "Products", href: "/products" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
