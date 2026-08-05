import { CheckCircle2 } from "lucide-react";

const CDCP_BENEFITS = [
  "Direct billing where eligible",
  "Clear treatment plans, upfront",
  "Compassionate, judgement-free care",
];

export function CdcpSection() {
  return (
    <section id="cdcp" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="text-xs tracking-widest uppercase mb-3"
          style={{ color: "#6b7c6e" }}
        >
          CDCP
        </div>
        <h2
          className="text-3xl md:text-4xl leading-snug mb-10 max-w-xl"
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            color: "#1a1a1a",
          }}
        >
          Proudly accepting the Canadian Dental Care Plan.
        </h2>

        <div
          className="rounded-3xl p-8 flex flex-col lg:flex-row gap-8"
          style={{ border: "1px solid #dde8de", backgroundColor: "#ffffff" }}
        >
          {/* Left */}
          <div className="flex-1 space-y-5">
            <p className="text-sm leading-relaxed" style={{ color: "#5a5a5a" }}>
              We&apos;re a CDCP-accepting clinic — no complicated paperwork, no
              surprises. Our front-desk team will confirm your coverage, explain
              what&apos;s included and walk you through every step so you can
              focus on your care.
            </p>
            <ul className="space-y-2">
              {CDCP_BENEFITS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle2
                    className="w-4 h-4 shrink-0"
                    style={{ color: "#2d5a3d" }}
                  />
                  <span style={{ color: "#3a3a3a" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — dark green CTA card */}
          <div
            className="lg:w-72 rounded-2xl p-7 flex flex-col justify-between gap-6"
            style={{ backgroundColor: "#2d5a3d" }}
          >
            <div>
              <div
                className="text-[10px] tracking-widest uppercase mb-3"
                style={{ color: "#a8c5b0" }}
              >
                Not sure if you qualify?
              </div>
              <p
                className="text-xl leading-snug"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  color: "#ffffff",
                }}
              >
                We&apos;ll check your coverage — free, in one call.
              </p>
            </div>
            <button
              className="text-sm font-medium px-5 py-2.5 rounded-full w-fit transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#f4f4ef", color: "#2d5a3d" }}
            >
              Talk to our team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
