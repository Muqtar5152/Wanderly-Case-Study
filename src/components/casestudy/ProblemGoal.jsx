export default function ProblemGoal() {
  const painPoints = [
    "Information overload — users rely on 4–6 scattered platforms",
    "Budget chaos — no single tool tracks group costs",
    "Coordination fatigue — group planning has no shared space",
  ];
  const criteria = [
    "Deliver AI-personalized itineraries in under 60 seconds",
    "Enable collaborative group planning with cost splitting",
    "Create an experience simple enough for low-tech users",
  ];

  return (
    <section className="w-full bg-wanderly-bg py-20">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col lg:flex-row gap-0">
        {/* Problem */}
        <div className="lg:w-1/2 lg:pr-12 pb-10 lg:pb-0">
          <Eyebrow>The Challenge</Eyebrow>
          <p className="font-syne font-bold text-[22px] italic text-wanderly-accent leading-snug mb-8">
            "Planning a trip shouldn't need 6 tabs, 3 apps, and a spreadsheet."
          </p>
          <div className="space-y-4">
            {painPoints.map((p, i) => (
              <div key={i} className="bg-white border-l-[3px] border-wanderly-accent rounded-r-[8px] py-3 px-4">
                <p className="font-dm text-[14px] text-wanderly-body">{p}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-wanderly-border" />

        {/* Goal */}
        <div className="lg:w-1/2 lg:pl-12 pt-10 lg:pt-0 border-t lg:border-t-0 border-wanderly-border">
          <Eyebrow>How Might We</Eyebrow>
          <p className="font-syne font-bold text-[20px] italic text-wanderly-primary leading-snug mb-8">
            "How might we make travel planning feel like a conversation — not a research project?"
          </p>
          <div className="space-y-4">
            {criteria.map((c, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-wanderly-primary mt-2 shrink-0" />
                <p className="font-dm text-[14px] text-wanderly-body">{c}</p>
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