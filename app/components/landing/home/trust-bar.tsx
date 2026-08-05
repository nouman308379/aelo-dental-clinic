import { Shield, Star, Users } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: Shield,
    title: "CDCP Accepted",
    desc: "We make it easy",
  },
  {
    icon: Users,
    title: "New Patients",
    desc: "Always welcome",
  },
  {
    icon: Star,
    title: "5-Star Care",
    desc: "Trusted by our community",
  },
];

export function TrustBar() {
  return (
    <div
      className="border-y border-black/5"
      style={{ backgroundColor: "#eeeee9" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TRUST_ITEMS.map((item) => (
            <div key={item.title} className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#d4e4d8" }}
              >
                <item.icon className="w-5 h-5" style={{ color: "#2d5a3d" }} />
              </div>
              <div>
                <div
                  className="text-sm font-semibold"
                  style={{ color: "#1a1a1a" }}
                >
                  {item.title}
                </div>
                <div className="text-xs" style={{ color: "#6b7c6e" }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
