import { CalendarDays, Play } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBjbGluaWMlMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzg1NzgxNjU1fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function HeroSection() {
  return (
    <section id="about-us" className="max-w-6xl mx-auto px-6 pt-16 pb-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left */}
        <div className="flex-1 space-y-6">
          <h1
            className="text-5xl md:text-6xl leading-tight"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              color: "#1a1a1a",
            }}
          >
            Healthy smiles,
            <br />
            for life.
            <span
              className="inline-block ml-1"
              style={{ color: "#2d5a3d", fontSize: "0.7em" }}
            >
              &#126;
            </span>
          </h1>
          <p
            className="text-base leading-relaxed max-w-xs"
            style={{ color: "#5a5a5a" }}
          >
            Compassionate care. Modern technology.
            <br />A team that puts you first.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <button
              className="flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#2d5a3d", color: "#ffffff" }}
            >
              <CalendarDays className="w-4 h-4" />
              Book Your Appointment
            </button>
            <button
              className="flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-full border transition-colors hover:bg-black/5"
              style={{ borderColor: "#2d5a3d", color: "#2d5a3d" }}
            >
              <Play className="w-4 h-4" />
              See Our Clinic
            </button>
          </div>
        </div>

        {/* Right — circular hero image */}
        <div className="flex-1 flex justify-center">
          <div
            className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden"
            style={{ border: "6px solid #e8ede9" }}
          >
            <img
              src={HERO_IMAGE}
              alt="Modern dental clinic interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
