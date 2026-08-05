import { Baby, Heart, Shield, Sparkles, Star, Zap } from "lucide-react";

const SERVICES = [
  {
    icon: Sparkles,
    title: "Cleanings & Prevention",
    desc: "Routine check-ups, cleanings and hygiene coaching to prevent problems before they start.",
  },
  {
    icon: Star,
    title: "Cosmetic Dentistry",
    desc: "Whitening, veneers and smile design tailored to bring out your best smile.",
  },
  {
    icon: Shield,
    title: "Restorative Care",
    desc: "Fillings, crowns, bridges and implants that restore comfort and function.",
  },
  {
    icon: Zap,
    title: "Emergency Dental",
    desc: "Same-day appointments for pain, chipped teeth and unexpected dental issues.",
  },
  {
    icon: Baby,
    title: "Family & Kids",
    desc: "Gentle, kid-friendly visits and preventive care for every generation of your family.",
  },
  {
    icon: Heart,
    title: "Gum & Oral Health",
    desc: "Periodontal treatment and oral health screenings to protect your long-term health.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24"
      style={{ backgroundColor: "#e8ede9" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="text-xs tracking-widest uppercase mb-3"
          style={{ color: "#6b7c6e" }}
        >
          Services
        </div>
        <h2
          className="text-3xl md:text-4xl leading-snug mb-12 max-w-xl"
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            color: "#1a1a1a",
          }}
        >
          Everything your smile needs, in one calm place.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="rounded-2xl p-6 space-y-3"
              style={{
                backgroundColor: "#f4f4ef",
                border: "1px solid #dde8de",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#d4e4d8" }}
              >
                <svc.icon className="w-5 h-5" style={{ color: "#2d5a3d" }} />
              </div>
              <div className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>
                {svc.title}
              </div>
              <div
                className="text-xs leading-relaxed"
                style={{ color: "#6b7c6e" }}
              >
                {svc.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
