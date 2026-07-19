import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import BluetraceChat from "@/components/BluetraceChat"; // ← ADDED
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#05070D" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  applicationName: siteConfig.name,
  category: "technology",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/logo-actual.png", type: "image/png", sizes: "1254x1254" }],
    shortcut: "/logo-actual.png",
    apple: "/logo-actual.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    creator: "@bluetracetech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo-actual.png`,
  description: siteConfig.description,
  foundingDate: siteConfig.legal.incorporationDate,
  founder: {
    "@type": "Person",
    name: siteConfig.founder.name,
    jobTitle: siteConfig.founder.role,
  },
  employee: siteConfig.directors.map((d) => ({
    "@type": "Person",
    name: d.name,
    jobTitle: d.role,
  })),
  sameAs: [
    siteConfig.social.linkedin,
    siteConfig.social.github,
    siteConfig.social.x,
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: [siteConfig.location.addressLine1, siteConfig.location.addressLine2]
      .filter(Boolean)
      .join(", "),
    addressLocality: siteConfig.location.locality,
    addressRegion: siteConfig.location.region,
    postalCode: siteConfig.location.postalCode || undefined,
    addressCountry: siteConfig.location.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.location.lat,
    longitude: siteConfig.location.lng,
  },
  hasMap: siteConfig.location.mapsUrl,
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: siteConfig.emails.support,
      contactType: "customer support",
    },
    {
      "@type": "ContactPoint",
      email: siteConfig.emails.sales,
      contactType: "sales",
    },
    ...(siteConfig.phone
      ? [{ "@type": "ContactPoint", telephone: siteConfig.phone, contactType: "general" }]
      : []),
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-brand-ink text-white antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-black"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="relative">
            {children}
          </main>
          <Footer />
          <BluetraceChat /> {/* ← ADDED */}
        </ThemeProvider>
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
