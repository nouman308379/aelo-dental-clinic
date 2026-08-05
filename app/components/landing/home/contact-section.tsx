import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { AppointmentForm } from "./appointment-form";

const CONTACT_INFO = [
  { icon: MapPin, label: "VISIT US", value: "123 Main Street, Toronto, ON" },
  { icon: Phone, label: "CALL", value: "(416) 555-0128" },
  { icon: Mail, label: "EMAIL", value: "hello@aelodental.ca" },
  { icon: Clock, label: "HOURS", value: "Mon–Fri 8am–7pm · Sat 9am–3pm" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="text-xs tracking-widest uppercase mb-3"
          style={{ color: "#6b7c6e" }}
        >
          Contact
        </div>
        <h2
          className="text-3xl md:text-4xl leading-snug mb-12"
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            color: "#1a1a1a",
          }}
        >
          Say hello — we&apos;d love to meet you.
        </h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Form — dark green */}
          <AppointmentForm />

          {/* Contact info */}
          <div className="flex-1 flex flex-col gap-3">
            {CONTACT_INFO.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-2xl p-5"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e0e0d8",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#d4e4d8" }}
                >
                  <item.icon className="w-5 h-5" style={{ color: "#2d5a3d" }} />
                </div>
                <div>
                  <div
                    className="text-[10px] tracking-widest uppercase mb-0.5"
                    style={{ color: "#6b7c6e" }}
                  >
                    {item.label}
                  </div>
                  <div className="text-sm" style={{ color: "#1a1a1a" }}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
