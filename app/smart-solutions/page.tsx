import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Home Automation, Energy Saving & IoT | Bluetrace Technologies",
  description:
    "Retrofit home automation, sensor-based lighting, energy monitoring, smart AC control and NRI care kits, engineered in-house by Bluetrace Technologies.",
};

const WHATSAPP = "919462225303";

type Pkg = {
  name: string;
  includes: string;
  price: string;
  timeline: string;
  highlight?: boolean;
};

const packages: Pkg[] = [
  {
    name: "Smart Room Starter",
    includes: "1 room: 4-channel retrofit module, occupancy sensor auto-off, app + voice",
    price: "Rs. 8,000 - 12,000",
    timeline: "1 day",
  },
  {
    name: "2BHK Home Automation",
    includes: "All rooms: lighting + fans + geyser + curtains, scenes, schedules, voice",
    price: "Rs. 40,000 - 75,000",
    timeline: "2-3 days",
    highlight: true,
  },
  {
    name: "Sensor Lighting - Common Areas",
    includes: "Apartment/office corridors, stairs, parking: occupancy + daylight control per zone",
    price: "Rs. 3,000 - 6,000 / zone",
    timeline: "1-2 days",
  },
  {
    name: "Energy Monitor Kit",
    includes: "Mains CT meter + 2 metering smart plugs, Rs. dashboard, alerts, monthly report",
    price: "Rs. 7,000 - 15,000",
    timeline: "Half day",
  },
  {
    name: "Smart AC Pack (per AC)",
    includes: "IR smart controller + sensor, schedules, geo-fencing, usage analytics",
    price: "Rs. 3,500 - 6,000",
    timeline: "1 hour",
  },
  {
    name: "NRI Care Kit",
    includes: "Security + gas + water + inactivity alerts, family app access from abroad",
    price: "Rs. 18,000 - 35,000",
    timeline: "1-2 days",
    highlight: true,
  },
  {
    name: "Custom IoT Prototype",
    includes: "Business brief to working device-to-cloud prototype",
    price: "Rs. 75,000",
    timeline: "3-6 weeks",
  },
];

const stats = [
  { figure: "~USD 6.7B", label: "India smart home market, 2026" },
  { figure: "~29% CAGR", label: "Projected growth to ~USD 24B by 2031" },
  { figure: "20-25%", label: "AC electricity saved by smart control" },
  { figure: "15-20%", label: "Bill reduction from energy monitoring" },
];

const capabilities = [
  {
    title: "Home Automation",
    body: "Whole-home or single-room control of lights, fans, ACs, geysers, pumps and curtains via app or voice. Retrofit modules sit behind existing switchboards - no rewiring, manual switches keep working.",
  },
  {
    title: "Sensor-Based Smart Lighting",
    body: "PIR/mmWave occupancy sensors switch lights off in empty rooms, corridors and parking, on instantly when someone enters. Occupancy sensing alone saves ~24% of lighting energy.",
  },
  {
    title: "Smart Energy Monitoring",
    body: "A clamp-on meter streams live consumption to a dashboard in rupees, not just kWh. Alerts flag a failing compressor or a geyser left on.",
  },
  {
    title: "Smart AC Solutions",
    body: "An IR-based controller makes any existing AC app-controlled - schedules, geo-fencing, usage analytics - without touching the AC's internals.",
  },
  {
    title: "Safety & Security Sensing",
    body: "Door/window sensors, gas leak detection, water leak/overflow protection, and elderly-care inactivity alerts, all visible to family abroad.",
  },
  {
    title: "Custom IoT Products",
    body: "End-to-end device-to-cloud builds for businesses: sensor selection, PCB design, firmware, cloud backend, dashboard and app. White-label available.",
  },
];

const pilotSteps = [
  { week: "Week 1-2", title: "Agree the pilot menu", body: "Smart AC Pack, Sensor Lighting, Energy Monitor Kit - cheapest to build, fastest to show savings." },
  { week: "Week 3-6", title: "Build + install", body: "Rs. 50,000-75,000 component budget covers 4-5 Parbhani sites: home, shop, society, office." },
  { week: "Week 7-12", title: "Pilots run", body: "Before/after electricity bills, photos and owner testimonials documented as sales proof." },
  { week: "Day 90", title: "Scale decision", body: "Local installs + repair hub, dealer-sold kits, or the NRI care kit marketed through the Canada network." },
];

export default function SmartSolutionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-14 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
          Smart Solutions &amp; IoT
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Home automation, energy saving
          <br className="hidden sm:block" /> and IoT, engineered in-house.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          Bluetrace designs its own firmware, PCB and cloud software - not
          reselling imported gadgets. Retrofit installs, no rewiring, and a
          bench that can repair what it sells.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
              "Hi, I'd like to discuss a smart home / IoT pilot with Bluetrace."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            Discuss a pilot on WhatsApp
          </a>
          <a
            href="#packages"
            className="rounded-lg border border-slate-700 px-6 py-3 text-sm text-slate-200 transition hover:border-slate-500"
          >
            See packages
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-sky-300">{s.figure}</p>
              <p className="mt-1 text-xs text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capability areas */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold">Capability areas</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">
          Every capability below can be delivered starting with a pilot
          installation - the same sensing, control, cloud and app stack
          proven across 8+ delivered engineering projects.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <h3 className="font-semibold text-slate-100">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-bold">Indicative packages</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">
          Working figures for discussion, finalized after a site survey. All
          packages include the app, installation and 1-year support. Prices
          exclude GST.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl border p-6 ${
                p.highlight
                  ? "border-sky-400 bg-slate-900 shadow-[0_0_40px_-12px_rgba(56,189,248,0.4)]"
                  : "border-slate-800 bg-slate-900/60"
              }`}
            >
              <h3 className="font-semibold text-slate-100">{p.name}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-400">{p.includes}</p>
              <div className="mt-4 flex items-baseline justify-between border-t border-slate-800 pt-4">
                <span className="text-sm font-semibold text-sky-300">
                  {p.price}
                </span>
                <span className="text-xs text-slate-500">{p.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NRI Care Kit spotlight */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                For families abroad
              </p>
              <h2 className="text-2xl font-bold">The NRI Care Kit</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Door activity, gas, water and inactivity alerts on your
                parents&apos; home in India, visible from anywhere in the
                world. No dependence on a vendor cloud that might shut down -
                Bluetrace built the hardware, firmware and app, and services
                what it sells.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Rs. 18,000 - 35,000, installed in 1-2 days, 1 year of support
                included.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                  "Hi, I'd like to know more about the NRI Care Kit."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                Ask about the NRI Care Kit
              </a>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-sm text-slate-400">
              <p className="font-semibold text-slate-200">What&apos;s included</p>
              <ul className="mt-3 space-y-2">
                <li>- Door/window sensors with intruder alerts</li>
                <li>- LPG gas leak detection with exhaust trigger</li>
                <li>- Water tank overflow / leak detection</li>
                <li>- Elderly-care inactivity alerts and panic button</li>
                <li>- Family app access from anywhere, no local SIM needed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 90-day pilot plan */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold">A 90-day pilot, not a leap of faith</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">
          Total capital at risk for the entire proof: under Rs. 1 lakh -
          decisions made on real electricity bills, not projections.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pilotSteps.map((s) => (
            <div
              key={s.week}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
                {s.week}
              </p>
              <h3 className="mt-2 font-semibold text-slate-100">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Bluetrace */}
      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold">Why Bluetrace</h2>
          <div className="mt-6 grid gap-4 text-sm text-slate-400 sm:grid-cols-2">
            <p>
              <strong className="text-slate-200">Engineering in-house.</strong>{" "}
              Firmware, PCB and app are Bluetrace&apos;s own - repairs and
              features don&apos;t depend on a vendor&apos;s app surviving.
            </p>
            <p>
              <strong className="text-slate-200">Repair capability.</strong>{" "}
              An electronics bench means Bluetrace can service power
              electronics, not just replace modules.
            </p>
            <p>
              <strong className="text-slate-200">Tier-2/tier-3 focus.</strong>{" "}
              Markets like Parbhani are underserved by metro-focused
              automation brands, while electricity costs there are rising.
            </p>
            <p>
              <strong className="text-slate-200">One relationship.</strong>{" "}
              Automation, energy, safety, repair and custom software under a
              single team - competitors usually offer only one slice.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-2xl font-bold">Start with a free site survey</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
          Step 1 is a free call or site visit to understand rooms, loads and
          pain points, followed by a fixed-price proposal within 1-2 days.
        </p>
        <a
          href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
            "Hi, I'd like to book a free site survey for smart home automation."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-lg bg-sky-400 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
        >
          Book a free site survey
        </a>
      </section>
    </main>
  );
}
