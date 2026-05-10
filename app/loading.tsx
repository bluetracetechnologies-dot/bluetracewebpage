export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-transparent border-t-brand-cyan border-r-brand-electric" />
        <div className="absolute inset-2 animate-spin rounded-full border-2 border-transparent border-b-brand-purple" />
        <div className="absolute inset-5 rounded-full bg-gradient-to-br from-brand-cyan via-brand-electric to-brand-purple" />
      </div>
    </div>
  );
}
