export default function Reflection() {
  const cards = [
    {
      title: "What Worked Well",
      color: "#1CA9C9",
      bg: "rgba(28,169,201,0.08)",
      body: "The AI-first approach resonated strongly with users. Starting with IA before visuals kept the structure solid throughout. The persona work directly drove design decisions rather than sitting as decoration.",
    },
    {
      title: "What I'd Do Differently",
      color: "#FF6B6B",
      bg: "rgba(255,107,107,0.08)",
      body: "I'd run a competitive audit earlier — some features I designed already existed in apps like TripIt. I'd also include a low-fidelity prototype test round before moving to hi-fi.",
    },
    {
      title: "Key Learning",
      color: "#1CA9C9",
      bg: "rgba(167,239,255,0.3)",
      body: "My architecture background taught me to treat IA like a floor plan — every screen needs a clear path in and out. This structural thinking became my design superpower throughout this project.",
    },
  ];
  const nextSteps = [
    "Build and test a working AI prototype with real itinerary generation",
    "Add real-time collaboration features for group trip planning",
    "Conduct longitudinal testing with actual travelers over a 4-week trip cycle",
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <Eyebrow>Learnings</Eyebrow>
        <h2 className="font-syne font-bold text-[32px] text-wanderly-body mb-10">What I Took Away From This Project</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-[12px] p-6"
              style={{ background: c.bg, borderLeft: `3px solid ${c.color}` }}
            >
              <p className="font-syne font-bold text-[16px] mb-3" style={{ color: c.color }}>
                {c.title}
              </p>
              <p className="font-dm text-[14px] text-wanderly-body leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Next Steps */}
        <div>
          <p className="font-syne font-bold text-[18px] text-wanderly-body mb-4">If I had more time…</p>
          <ul className="space-y-3">
            {nextSteps.map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-wanderly-primary mt-2 shrink-0" />
                <p className="font-dm text-[14px] text-wanderly-body">{s}</p>
              </li>
            ))}
          </ul>
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