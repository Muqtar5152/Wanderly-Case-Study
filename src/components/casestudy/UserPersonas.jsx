export default function UserPersonas() {
  const personas = [
    {
      initials: "SK", name: "Sara Khan", role: "Marketing Executive, 24", archetype: "The Adventurer",
      goals: ["Discover new places", "Manage trips without hassle", "Maximize enjoyment in limited time"],
      frustrations: ["Scattered info across platforms", "Overpacking", "Too much time planning"],
      needs: ["Streamlined suggestions", "End-to-end planning app", "Time-saving automation"],
      quote: "I wish someone would just plan it for me."
    },
    {
      initials: "RM", name: "Rahul Mehta", role: "IT Consultant, 30", archetype: "The Organizer",
      goals: ["Budget-friendly trips", "Organized group travel", "Smooth execution"],
      frustrations: ["Cost overruns", "Mismatched group expectations", "Inconsistent info quality"],
      needs: ["Clear cost breakdown", "Coordination tools", "Reliable reviews"],
      quote: "We need a solid itinerary. Let's not go over budget."
    },
    {
      initials: "PS", name: "Priya Sharma", role: "Teacher, 36", archetype: "The Family Planner",
      goals: ["Safe educational trips", "Stress-free planning", "Family enjoyment"],
      frustrations: ["Too many details", "Technology barriers", "No family-specific suggestions"],
      needs: ["Simple intuitive UX", "Child-friendly recommendations", "Reliable family travel tips"],
      quote: "Is this safe for my kids? Can someone help me plan this?"
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <Eyebrow>Define Phase</Eyebrow>
        <h2 className="font-syne font-bold text-[32px] text-wanderly-body mb-10">Three Travelers. One Product.</h2>
        <div className="space-y-8">
          {personas.map((p) => (
            <PersonaCard key={p.initials} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PersonaCard({ initials, name, role, archetype, goals, frustrations, needs, quote }) {
  return (
    <div className="rounded-[12px] overflow-hidden border border-wanderly-border">
      {/* Header */}
      <div className="bg-wanderly-primary px-6 py-4 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
          <span className="font-syne font-bold text-[14px] text-wanderly-primary">{initials}</span>
        </div>
        <div className="flex-1">
          <p className="font-syne font-bold text-[18px] text-white">{name}</p>
          <p className="font-dm text-[14px] text-white/70">{role}</p>
        </div>
        <span className="bg-white text-wanderly-primary font-syne font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
          {archetype}
        </span>
      </div>

      {/* Body */}
      <div className="bg-white p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Column label="Goals" items={goals} />
          <Column label="Frustrations" items={frustrations} />
          <Column label="Needs" items={needs} />
        </div>

        {/* Quote */}
        <div className="border-l-[3px] border-wanderly-accent bg-[#FFF5F5] py-3 px-4 rounded-r-lg">
          <p className="font-dm italic text-[14px] text-wanderly-body">"{quote}"</p>
        </div>
      </div>
    </div>
  );
}

function Column({ label, items }) {
  return (
    <div>
      <p className="font-syne font-bold text-[11px] uppercase tracking-[0.15em] text-wanderly-primary mb-3">{label}</p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="font-dm text-[13px] text-wanderly-body flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-wanderly-primary mt-1.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="font-syne font-bold text-[11px] uppercase tracking-[0.15em] text-wanderly-primary mb-3">
      {children}
    </p>
  );
}