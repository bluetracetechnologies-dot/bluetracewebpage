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

  const svgSrc =
    surface === "dark" ? "/logo-horizontal.svg" : "/logo-horizontal-light.svg";
  const pngSrc =
    surface === "dark"
      ? "/logo-horizontal.png"
      : "/logo-horizontal-light.png";

  return (
    <Link
      href="/"
      aria-label="BlueTrace Technologies"
      className={`group inline-flex items-center ${className}`}
    >
      <span className="inline-flex items-center transition-transform duration-300 group-hover:scale-[1.01]">
        <picture>
          <source srcSet={svgSrc} type="image/svg+xml" />
          <source srcSet={pngSrc} type="image/png" />
          <img
            src="/logo-actual.png"
            alt="BlueTrace Technologies"
            className={`${sizeClass} w-auto object-contain`}
            loading="eager"
            decoding="async"
          />
        </picture>
      </span>
    </Link>
  );
}
