import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Logo } from "./Logo";

const linkGroups = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Products", href: "/products" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-brand-ink/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-electric/60 to-transparent"
      />

      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo context="footer" surface="dark" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
            <a
              href={siteConfig.location.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-start gap-2 text-xs text-white/55 transition hover:text-white/85"
            >
              <MapPin className="mt-0.5 h-3.5 w-3.5 flex-none" />
              <span>
                {[siteConfig.location.locality, siteConfig.location.region, siteConfig.location.country]
                  .filter(Boolean)
                  .join(", ")}
              </span>
            </a>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-white/30 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.github}
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-white/30 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.x}
                aria-label="X / Twitter"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-white/30 hover:text-white"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${siteConfig.emails.primary}`}
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-white/30 hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-4">
            {linkGroups.map((g) => (
              <div key={g.title}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                  {g.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-white/70 transition hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                Contact
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li>
                  <a className="hover:text-white" href={`mailto:${siteConfig.emails.primary}`}>
                    {siteConfig.emails.primary}
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="tel:+919462225303">
                    +91 9462225303
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="tel:+919823797953">
                    +91 9823797953
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="https://wa.me/919462225303" target="_blank" rel="noreferrer">
                    WhatsApp Bluetrace
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {year} {siteConfig.legalName}. All rights reserved.</p>
          <p className="font-mono">
            <span className="gradient-text">{siteConfig.tagline}</span>
          </p>
        </div>

        {(siteConfig.legal.cin || siteConfig.legal.pan || siteConfig.legal.tan) && (
          <div className="mt-3 flex flex-col gap-1 text-[11px] text-white/40 md:flex-row md:flex-wrap md:items-center md:gap-x-4">
            {siteConfig.legal.cin ? (
              <span>CIN: <span className="font-mono text-white/60">{siteConfig.legal.cin}</span></span>
            ) : null}
            {siteConfig.legal.pan ? (
              <span>PAN: <span className="font-mono text-white/60">{siteConfig.legal.pan}</span></span>
            ) : null}
            {siteConfig.legal.tan ? (
              <span>TAN: <span className="font-mono text-white/60">{siteConfig.legal.tan}</span></span>
            ) : null}
          </div>
        )}
      </div>
    </footer>
  );
}
