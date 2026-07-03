import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Bluetrace Technologies — Home"
      className={`group inline-flex items-center ${className}`}
    >
      <span className="inline-flex overflow-hidden rounded-2xl border border-white/10 bg-white p-1 shadow-[0_10px_30px_-18px_rgba(255,255,255,0.6)] transition-transform duration-300 group-hover:scale-[1.01]">
        <Image
          src="/logo-actual.png"
          alt="Bluetrace Technologies"
          width={1254}
          height={1254}
          priority
          className="h-11 w-11 rounded-xl object-contain md:h-12 md:w-12"
        />
      </span>
    </Link>
  );
}
