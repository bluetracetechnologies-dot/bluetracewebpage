import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Bluetrace Technologies — Home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <BluetraceMark className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-extrabold tracking-tight">
          <span className="text-brand-electric">Blue</span>
          <span className="text-white">Trace</span>
        </span>
        <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-white/45">
          Technologies
        </span>
      </span>
    </Link>
  );
}

function BluetraceMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden
    >
      <rect x="1" y="1" width="62" height="62" rx="14" fill="#0F1F4D" />
      <rect
        x="1"
        y="1"
        width="62"
        height="62"
        rx="14"
        stroke="#1E3A8A"
        strokeOpacity="0.6"
        strokeWidth="1"
      />
      <path
        d="M 14 22 A 18 18 0 0 1 50 22"
        stroke="#3B82F6"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="14" cy="22" r="1.6" fill="#3B82F6" />
      <circle cx="50" cy="22" r="1.6" fill="#3B82F6" />
      <g stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round">
        <path d="M 4 36 L 10 36" />
        <path d="M 4 44 L 10 44" />
      </g>
      <g fill="#3B82F6">
        <circle cx="3.5" cy="36" r="1.1" />
        <circle cx="3.5" cy="44" r="1.1" />
      </g>
      <text
        x="13"
        y="51"
        fontFamily="'Arial Black','Helvetica Neue',Impact,system-ui,sans-serif"
        fontWeight="900"
        fontSize="32"
        fill="#3B82F6"
        letterSpacing="-2"
      >
        B
      </text>
      <text
        x="32"
        y="51"
        fontFamily="'Arial Black','Helvetica Neue',Impact,system-ui,sans-serif"
        fontWeight="900"
        fontSize="32"
        fill="#FFFFFF"
        letterSpacing="-2"
      >
        T
      </text>
    </svg>
  );
}
