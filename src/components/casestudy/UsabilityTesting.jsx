export default function UsabilityTesting() {
  const setup = [
    { title: "5 Participants", desc: "Remote moderated sessions" },
    { title: "2 Task Scenarios", desc: "AI planner + group planning" },
    { title: "SUS Score: 82/100", desc: "Above industry average" },
  ];
  const findings = [
    {
      issue: "Users didn't understand the AI preferences screen",
      fix: "Added a progress indicator and simplified input labels",
    },
    {
      issue: "Cost estimator was hard to find",
      fix: "Promoted it to the main itinerary view",
    },
    {
      issue: "Group invite flow felt unclear",
      fix: "Added a visual onboarding tooltip for first-time group creators",
    },
  ];

  return (
    <section className="w-full bg-wanderly-bg py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <Eyebrow>Test Phase</Eyebrow>
        <h2 className="font-syne font-bold text-[32px] text-wanderly-body mb-10">What Users Told Us</h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Setup */}
          <div className="lg:w-[40%] space-y-4">
            {setup.map((s) => (
              <div key={s.title} className="bg-white border border-wanderly-border rounded-[12px] p-5">
                <p className="font-syne font-bold text-[16px] text-wanderly-primary">{s.title}</p>
                <p className="font-dm text-[13px] text-wanderly-body/70 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Findings */}
          <div className="lg:w-[60%] space-y-4">
            {findings.map((f, i) => (
              <div key={i} className="bg-white border border-wanderly-border rounded-[12px] p-5">
                <div className="flex items-start gap-3 mb-3">
                  <span className="inline-block bg-wanderly-accent/15 text-wanderly-accent font-syne font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shrink-0">
                    Issue
                  </span>
                  <p className="font-dm text-[14px] text-wanderly-body">{f.issue}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-block bg-wanderly-primary/15 text-wanderly-primary font-syne font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shrink-0">
                    Fix
                  </span>
                  <p className="font-dm text-[14px] text-wanderly-body">{f.fix}</p>
                </div>
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