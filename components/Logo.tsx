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
      ? "h-14 w-auto max-w-[280px] md:h-16"
      : "h-10 w-auto max-w-[240px] md:h-12";

  const wrapperClass =
    context === "footer"
      ? "px-0 py-0"
      : "rounded-lg border border-white/10 bg-black/20 px-2 py-1 backdrop-blur-sm";

  const svgSrc =
    surface === "dark" ? "/logo.svg" : "/logo-light.svg";
  const pngSrc =
    surface === "dark"
      ? "/logo-horizontal-light.png"
      : "/logo-horizontal.png";

  return (
    <Link
      href="/"
      aria-label="BlueTrace Technologies"
      className={`group inline-flex items-center ${className}`}
    >
      <span className={`inline-flex items-center transition-transform duration-300 group-hover:scale-[1.01] ${wrapperClass}`}>
        <picture>
          <source srcSet={svgSrc} type="image/svg+xml" />
          <source srcSet={pngSrc} type="image/png" />
          <img
            src="/logo-actual.png"
            alt="BlueTrace Technologies"
            className={`${sizeClass} block object-contain`}
            loading="eager"
            decoding="async"
          />
        </picture>
      </span>
    </Link>
  );
}
