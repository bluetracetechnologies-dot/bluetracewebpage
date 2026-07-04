import Link from "next/link";

type LogoProps = {
  className?: string;
  context?: "navbar" | "footer";
};

export function Logo({
  className = "",
  context = "navbar",
}: LogoProps) {
  const sizeClass =
    context === "footer"
      ? "h-16 w-auto max-w-[320px] md:h-20"
      : "h-12 w-auto max-w-[260px] md:h-14";

  const wrapperClass =
    context === "footer"
      ? "px-0 py-0"
      : "rounded-lg border border-white/15 bg-white/90 px-2 py-1 shadow-[0_10px_30px_-20px_rgba(255,255,255,0.85)]";

  return (
    <Link
      href="/"
      aria-label="BlueTrace Technologies"
      className={`group inline-flex items-center ${className}`}
    >
      <span className={`inline-flex items-center transition-transform duration-300 group-hover:scale-[1.01] ${wrapperClass}`}>
        <img
          src="/logo-exact-transparent.png"
          alt="BlueTrace Technologies"
          className={`${sizeClass} block object-contain`}
          loading="eager"
          decoding="async"
        />
      </span>
    </Link>
  );
}
