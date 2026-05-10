import type { Metadata } from "next";
import { Github, Linkedin, Mail, Phone, MessageCircle, Globe, Twitter } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { GlassCard } from "@/components/GlassCard";
import { MotionReveal } from "@/components/MotionReveal";
import { LocationMap } from "@/components/LocationMap";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bluetrace Technologies. We respond to inquiries within one business day.",
  alternates: { canonical: "/contact" },
};

const ICONS = {
  email: Mail,
  phone: Phone,
  whatsapp: MessageCircle,
  url: Globe,
} as const;

function hrefFor(type: string, value: string) {
  if (type === "email") return `mailto:${value}`;
  if (type === "phone") return `tel:${value.replace(/\s+/g, "")}`;
  if (type === "whatsapp")
    return `https://wa.me/${value.replace(/[^0-9]/g, "")}`;
  return value;
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Talk to <span className="gradient-text">Bluetrace</span>
          </>
        }
        description="Tell us about your project, your roadmap, or a system that needs scale. We respond within one business day."
      />

      <section className="section pt-0">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl font-bold text-white">Direct channels</h2>
            <p className="mt-3 text-sm text-white/65">
              Email is the fastest way to reach us. Choose the inbox that fits your inquiry.
            </p>

            <div className="mt-6 space-y-4">
              {siteConfig.contactChannels.map((c, i) => {
                const Icon = ICONS[c.type] ?? Mail;
                return (
                  <MotionReveal key={`${c.type}-${c.value}`} delay={i * 0.04}>
                    <a
                      href={hrefFor(c.type, c.value)}
                      className="glass glass-hover block rounded-2xl p-5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                          {c.label}
                        </span>
                        <Icon className="h-4 w-4 text-white/50" />
                      </div>
                      <p className="mt-3 font-display text-lg font-semibold text-white">
                        {c.value}
                      </p>
                      {c.description && (
                        <p className="mt-1 text-sm text-white/60">{c.description}</p>
                      )}
                    </a>
                  </MotionReveal>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-white/30 hover:text-white">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={siteConfig.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-white/30 hover:text-white">
                <Github className="h-4 w-4" />
              </a>
              <a href={siteConfig.social.x} target="_blank" rel="noreferrer" aria-label="X / Twitter" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-white/30 hover:text-white">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <GlassCard className="p-6 md:p-8" hover={false}>
              <h2 className="font-display text-2xl font-bold text-white">Project brief</h2>
              <p className="mt-2 text-sm text-white/60">
                Drop a few details and we&apos;ll respond with next steps.
              </p>
              <form
                action={`mailto:${siteConfig.emails.primary}`}
                method="post"
                encType="text/plain"
                className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2"
              >
                <Field label="Full name" name="name" required />
                <Field label="Work email" type="email" name="email" required />
                <Field label="Company" name="company" className="md:col-span-2" />
                <Field label="Budget (optional)" name="budget" className="md:col-span-2" />
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                    Project details
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-brand-cyan/40"
                    placeholder="Tell us about goals, timelines and any constraints…"
                  />
                </div>
                <div className="md:col-span-2 flex items-center justify-between gap-3">
                  <p className="text-xs text-white/50">
                    Submitting opens your email client. Prefer direct?{" "}
                    <a className="underline hover:text-white" href={`mailto:${siteConfig.emails.primary}`}>
                      {siteConfig.emails.primary}
                    </a>
                  </p>
                  <button type="submit" className="btn-primary">
                    Send message
                  </button>
                </div>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <MotionReveal>
            <LocationMap />
          </MotionReveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-brand-cyan/40"
      />
    </div>
  );
}
