export default function WarmBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -10 }}
      aria-hidden="true"
    >
      {/* Base warm charcoal */}
      <div className="absolute inset-0" style={{ backgroundColor: "#1C2B2A" }} />

      {/* Terracotta radial — top center (subtil) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(193,68,14,0.12), transparent)",
        }}
      />

      {/* Green radial — bottom center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 110%, rgba(64,145,108,0.10), transparent)",
        }}
      />
    </div>
  );
}
