import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { GlassCard } from "@/components/GlassCard";
import { MotionReveal } from "@/components/MotionReveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Bluetrace Technologies. We hire senior engineers, designers and AI researchers building the next generation of digital infrastructure.",
  alternates: { canonical: "/careers" },
};

const placeholderRoles = [
  {
    title: "Senior Full-Stack Engineer",
    team: "Engineering",
    location: "Remote · Global",
  },
  {
    title: "AI / ML Engineer",
    team: "AI",
    location: "Remote · Global",
  },
  {
    title: "Cloud & Platform Engineer",
    team: "Infrastructure",
    location: "Remote · Global",
  },
  {
    title: "Product Designer",
    team: "Design",
    location: "Remote · Global",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title={
          <>
            Build the <span className="gradient-text">infrastructure</span> of what comes next
          </>
        }
        description="We are growing a small, senior team across engineering, AI and design. Roles below are placeholders — reach out anytime."
      />

      <section className="section pt-0">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {placeholderRoles.map((r, i) => (
              <MotionReveal key={r.title} delay={i * 0.04}>
                <GlassCard className="flex h-full items-start justify-between gap-4 p-6">
                  <div>
                    <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                      <Briefcase className="h-3.5 w-3.5" /> {r.team}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-semibold text-white">
                      {r.title}
                    </h3>
                    <p className="mt-2 inline-flex items-center gap-2 text-xs text-white/60">
                      <MapPin className="h-3.5 w-3.5" /> {r.location}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-wider text-white/60">
                    Placeholder
                  </span>
                </GlassCard>
              </MotionReveal>
            ))}
          </div>

          <MotionReveal>
            <GlassCard className="mt-10 p-8 md:p-10" hover={false}>
              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                Don&apos;t see your role?
              </h2>
              <p className="mt-3 max-w-2xl text-white/65">
                We&apos;re always open to meeting exceptional engineers, researchers and designers. Send us a note with what you want to build.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={`mailto:${siteConfig.emails.primary}?subject=Careers`} className="btn-primary">
                  Apply via email <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-ghost">Contact us</Link>
              </div>
            </GlassCard>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
