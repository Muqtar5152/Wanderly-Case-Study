export default function ProjectOverview() {
  const stats = [
    { value: "12 Weeks", label: "Project Duration" },
    { value: "Figma · Miro", label: "Tools Used" },
    { value: "3 Methods", label: "Research Approaches" },
  ];
  const roles = [
    "User Research", "Information Architecture", "Wireframes",
    "Visual Design", "Prototyping", "Usability Testing"
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-[55%]">
          <Eyebrow>The Product</Eyebrow>
          <h2 className="font-syne font-bold text-[32px] text-wanderly-body leading-tight mb-5">
            One app that handles everything your trip needs
          </h2>
          <p className="font-dm text-[15px] text-wanderly-body leading-relaxed mb-8">
            Wanderly is an AI-powered travel planning app that generates personalized itineraries based on user preferences — from destinations and transport to packing lists and real-time tracking. It acts as a one-stop intelligent travel assistant, turning complex planning into a seamless experience.
          </p>
          <div className="flex flex-wrap gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-wanderly-secondary rounded-[10px] px-5 py-4 flex-1 min-w-[140px]">
                <p className="font-syne font-bold text-[18px] text-wanderly-primary">{s.value}</p>
                <p className="font-dm text-[13px] text-wanderly-body/70 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-[45%]">
          <Eyebrow>My Responsibilities</Eyebrow>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {roles.map((r) => (
              <div key={r} className="bg-white border border-wanderly-border rounded-[12px] p-4">
                <div className="w-5 h-5 rounded bg-wanderly-primary/20 mb-3" />
                <p className="font-dm font-medium text-[14px] text-wanderly-body">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="font-syne font-bold text-[11px] uppercase tracking-[0.15em] text-wanderly-primary mb-3">
      {children}
    </p>
  );
}