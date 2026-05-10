export function FloatingGradients() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-brand-electric/30 blur-[120px] animate-float" />
      <div
        className="absolute top-1/3 -right-32 h-[30rem] w-[30rem] rounded-full bg-brand-purple/30 blur-[140px] animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute -bottom-40 left-1/3 h-[26rem] w-[26rem] rounded-full bg-brand-cyan/20 blur-[120px] animate-float"
        style={{ animationDelay: "3s" }}
      />
    </div>
  );
}
