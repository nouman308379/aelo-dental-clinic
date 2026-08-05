"use client";

import { useState } from "react";

const TEXT_FIELDS = [
  { key: "name", placeholder: "Your name", type: "text" },
  { key: "email", placeholder: "Email", type: "email" },
  { key: "phone", placeholder: "Phone (optional)", type: "tel" },
];

export function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className="lg:w-[55%] rounded-3xl p-8 space-y-4"
      style={{ backgroundColor: "#2d5a3d" }}
    >
      <div>
        <p className="text-xl font-medium mb-1" style={{ color: "#ffffff" }}>
          Book an appointment
        </p>
        <p className="text-xs" style={{ color: "#a8c5b0" }}>
          Fill out the form and we&apos;ll get back within one business day.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        {TEXT_FIELDS.map((field) => (
          <input
            key={field.key}
            type={field.type}
            placeholder={field.placeholder}
            value={form[field.key as keyof typeof form]}
            onChange={(e) =>
              setForm((f) => ({ ...f, [field.key]: e.target.value }))
            }
            className="w-full rounded-xl px-4 py-3 text-sm outline-none placeholder-[#a8c5b0]"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          />
        ))}
        <textarea
          placeholder="What can we help with?"
          rows={3}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="w-full rounded-xl px-4 py-3 text-sm outline-none placeholder-[#a8c5b0] resize-none"
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            color: "#ffffff",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        />
        <button
          type="submit"
          className="w-full py-3 rounded-xl text-sm font-medium transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#f4f4ef", color: "#2d5a3d" }}
        >
          Request appointment
        </button>
      </form>
    </div>
  );
}
