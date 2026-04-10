import { useState, useEffect } from "react";

const tabs = [
  { label: "Overview", id: "overview" },
  { label: "Research", id: "research" },
  { label: "Personas", id: "personas" },
  { label: "Solution", id: "solution" },
  { label: "Thinking", id: "thinking" },
  { label: "Design", id: "design" },
  { label: "Outcomes", id: "outcomes" },
];

export default function StickyNav() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const observers = [];
    tabs.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-[#0E1A20]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => scrollTo(t.id)}
              className={`shrink-0 font-dm text-[13px] font-medium px-4 py-2.5 rounded-[8px] transition-all whitespace-nowrap ${
                active === t.id
                  ? "bg-wanderly-primary text-white"
                  : "text-white/50 hover:text-white hover:bg-white/10"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}