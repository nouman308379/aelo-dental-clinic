const STEPS = [
  {
    num: "01",
    title: "Book online",
    desc: "Pick a time that suits you in under a minute.",
  },
  {
    num: "02",
    title: "Quick intake",
    desc: "Share your details ahead — no clipboards in the waiting room.",
  },
  {
    num: "03",
    title: "Meet your team",
    desc: "A calm exam, clear plan and no pressure. Ever.",
  },
];

export function NewPatientsSection() {
  return (
    <section
      id="new-patients"
      className="py-24"
      style={{ backgroundColor: "#eeeee9" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="text-xs tracking-widest uppercase mb-3"
          style={{ color: "#6b7c6e" }}
        >
          New Patients
        </div>
        <h2
          className="text-3xl md:text-4xl leading-snug mb-12"
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            color: "#1a1a1a",
          }}
        >
          Your first visit, made simple.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="rounded-2xl p-7 space-y-3"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e0e0d8",
              }}
            >
              <div
                className="text-4xl font-light"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "#c8d8cc",
                }}
              >
                {step.num}
              </div>
              <div className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>
                {step.title}
              </div>
              <div
                className="text-xs leading-relaxed"
                style={{ color: "#6b7c6e" }}
              >
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
