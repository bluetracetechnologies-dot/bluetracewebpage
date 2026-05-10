import { ExternalLink, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function LocationMap() {
  const { location, phone } = siteConfig;
  const fullAddress = [
    location.addressLine1,
    location.addressLine2,
    [location.locality, location.region].filter(Boolean).join(", "),
    [location.country, location.postalCode].filter(Boolean).join(" — "),
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="glass h-full rounded-2xl p-6">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-cyan/20 via-brand-electric/20 to-brand-purple/20 text-brand-cyan ring-1 ring-white/10">
            <MapPin className="h-5 w-5" />
          </span>
          <h3 className="mt-5 font-display text-lg font-semibold text-white">
            Visit us
          </h3>
          <address className="mt-3 whitespace-pre-line text-sm not-italic leading-relaxed text-white/70">
            {fullAddress}
          </address>

          {phone && (
            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
            >
              <Phone className="h-4 w-4" /> {phone}
            </a>
          )}

          <div className="mt-5 flex flex-wrap gap-3 text-xs">
            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-white/80 transition hover:border-white/30 hover:text-white"
            >
              Open in Google Maps <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-white/60">
              {location.lat.toFixed(5)}, {location.lng.toFixed(5)}
            </span>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="relative h-[320px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] md:h-[420px]">
          <iframe
            title="Bluetrace Technologies on Google Maps"
            src={location.embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full grayscale-[0.25] contrast-[1.05] [color-scheme:dark]"
            allowFullScreen
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
          />
        </div>
      </div>
    </div>
  );
}
