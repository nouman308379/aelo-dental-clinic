const STATS = [
  { value: "15+", label: "Years of experience" },
  { value: "8k+", label: "Happy patients" },
  { value: "20+", label: "Services offered" },
  { value: "4.9★", label: "Average rating" },
];

export function AboutSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left */}
        <div className="flex-1 space-y-5">
          <div
            className="text-xs tracking-widest uppercase"
            style={{ color: "#6b7c6e" }}
          >
            About Us
          </div>
          <h2
            className="text-3xl md:text-4xl leading-snug max-w-md"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              color: "#1a1a1a",
            }}
          >
            Care that feels personal, in a clinic that feels like home.
          </h2>
          <p
            className="text-sm leading-relaxed max-w-sm"
            style={{ color: "#5a5a5a" }}
          >
            At Aelo Dental Clinic, we combine gentle, patient-first care with
            modern technology to keep your smile healthy for life. From your
            first cleaning to complex treatments, our team takes the time to
            listen, explain, and make every visit calm and comfortable.
          </p>
        </div>

        {/* Right — stat grid */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-6"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e0e0d8",
              }}
            >
              <div
                className="text-3xl font-semibold mb-1"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "#1a1a1a",
                }}
              >
                {s.value}
              </div>
              <div className="text-xs" style={{ color: "#6b7c6e" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
