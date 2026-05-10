import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page flex flex-col items-center justify-center text-center">
        <span className="eyebrow mb-6">404 · Page not found</span>
        <h1 className="font-display text-5xl font-bold tracking-tight md:text-7xl">
          <span className="gradient-text">Signal lost.</span>
        </h1>
        <p className="mt-6 max-w-xl text-balance text-base text-white/70 md:text-lg">
          The page you&apos;re looking for has drifted out of orbit. Let&apos;s get
          you back to known coordinates.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn-primary">Return Home</Link>
          <Link href="/contact" className="btn-ghost">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
