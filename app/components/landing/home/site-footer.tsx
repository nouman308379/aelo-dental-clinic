import { Leaf } from "lucide-react";

export function SiteFooter() {
  return (
    <footer
      className="border-t border-black/5 py-8"
      style={{ backgroundColor: "#f4f4ef" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#2d5a3d" }}
          >
            <Leaf className="w-3.5 h-3.5 text-white" />
          </div>
          <div>
            <div
              className="text-sm font-semibold leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Aelo
            </div>
            <div
              className="text-[8px] tracking-widest uppercase"
              style={{ color: "#6b7c6e" }}
            >
              Dental Clinic
            </div>
          </div>
        </div>
        <p className="text-xs" style={{ color: "#6b7c6e" }}>
          © 2026 Aelo Dental Clinic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
