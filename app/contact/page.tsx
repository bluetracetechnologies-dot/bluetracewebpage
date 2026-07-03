import type { Metadata } from "next";
import { Github, Linkedin, Mail, Phone, MessageCircle, Globe, Twitter } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { GlassCard } from "@/components/GlassCard";
import { MotionReveal } from "@/components/MotionReveal";
import { LocationMap } from "@/components/LocationMap";
import { LeadInquiryForm } from "@/components/LeadInquiryForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Bluetrace Technologies Private Limited for embedded firmware, PCB review, IoT development, AI automation, and software engineering inquiries.",
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
            Send your <span className="gradient-text">project requirement</span>
          </>
        }
        description="Share project scope, budget, and timeline. We reply with practical next steps for firmware, PCB, IoT, automation, or software delivery."
      />

      <section className="section pt-0">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl font-bold text-white">Direct channels</h2>
            <p className="mt-3 text-sm text-white/65">
              For fastest response, submit the inquiry form and also WhatsApp key files to our primary project number.
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
              <h2 className="font-display text-2xl font-bold text-white">Professional inquiry form</h2>
              <p className="mt-2 text-sm text-white/60">
                Fields are structured for technical scoping across embedded, IoT, automation, and software projects.
              </p>
              <div className="mt-6">
                <LeadInquiryForm />
              </div>
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
