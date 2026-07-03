import Link from "next/link";

type LogoProps = {
  className?: string;
  context?: "navbar" | "footer";
  surface?: "dark" | "light";
};

export function Logo({
  className = "",
  context = "navbar",
  surface = "dark",
}: LogoProps) {
  const sizeClass =
    context === "footer"
      ? "h-14 w-auto md:h-16"
      : "h-9 w-auto md:h-11";

  const wrapperClass =
    context === "footer"
      ? "rounded-2xl px-3 py-2"
      : "rounded-xl px-2.5 py-1.5";

  const svgSrc = surface === "dark" ? "/logo.svg" : "/logo-light.svg";
  const pngSrc = surface === "dark" ? "/logo-horizontal.png" : "/logo-horizontal-light.png";

  return (
    <Link
      href="/"
      aria-label="BlueTrace Technologies"
      className={`group inline-flex items-center ${className}`}
    >
      <span
        className={`inline-flex items-center border border-white/10 bg-white/[0.03] shadow-[0_14px_40px_-26px_rgba(255,255,255,0.25)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-[1.01] ${wrapperClass}`}
      >
        <picture>
          <source srcSet={svgSrc} type="image/svg+xml" />
          <source srcSet={pngSrc} type="image/png" />
          <img
            src="/logo-actual.png"
            alt="BlueTrace Technologies"
            className={`${sizeClass} object-contain`}
            loading="eager"
            decoding="async"
          />
        </picture>
      </span>
    </Link>
  );
}
