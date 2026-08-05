"use client";

import { useState } from "react";
import { Leaf } from "lucide-react";

const NAV_LINKS = ["About Us", "Services", "CDCP", "New Patients", "Contact"];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-black/5"
      style={{ backgroundColor: "#f4f4ef" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#2d5a3d" }}
          >
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <div>
            <div
              className="text-base font-semibold leading-tight"
              style={{
                fontFamily: "var(--font-serif)",
                color: "#1a1a1a",
              }}
            >
              Aelo
            </div>
            <div
              className="text-[9px] tracking-widest uppercase"
              style={{ color: "#6b7c6e" }}
            >
              Dental Clinic
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-sm transition-colors hover:opacity-70"
              style={{ color: "#3a3a3a" }}
            >
              {link}
            </a>
          ))}
        </div>

        <button
          className="hidden md:block text-sm font-medium px-5 py-2.5 rounded-full transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#2d5a3d", color: "#ffffff" }}
        >
          Book Appointment
        </button>

        {/* Mobile menu toggle */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-4 flex flex-col gap-3 border-t border-black/5"
          style={{ backgroundColor: "#f4f4ef" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-sm py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button
            className="text-sm font-medium px-5 py-2.5 rounded-full w-full mt-1"
            style={{ backgroundColor: "#2d5a3d", color: "#ffffff" }}
          >
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
}
