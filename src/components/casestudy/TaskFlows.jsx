export default function TaskFlows() {
  const flows = [
    {
      label: "Task Flow 01",
      title: "Quick Weekend Getaway",
      steps: ["Launch App", "Sign Up/Login", "Use AI Planner", "Enter Preferences", "Get Itinerary", "Customize", "View Budget", "Packing List", "Trip Tracker", "Done"],
    },
    {
      label: "Task Flow 02",
      title: "Group Trip Planning",
      steps: ["Launch App", "Sign Up/Login", "Create Group Trip", "Invite Friends", "Enter Group Preferences", "AI Group Itinerary", "Modify Together", "Split Costs", "Share Plan", "Trip Tracker", "Done"],
    },
    {
      label: "Task Flow 03",
      title: "Family Vacation",
      steps: ["Launch App", "Sign Up/Login", 'Select "Family"', "Enter Dates + Preferences", "AI Family Itinerary", "Add Child-Safe Activities", "View Budget", "Packing List", "Trip Tracker", "Done"],
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <Eyebrow>User Journeys</Eyebrow>
        <h2 className="font-syne font-bold text-[32px] text-wanderly-body mb-10">Three Key Task Flows</h2>
        <div className="space-y-12">
          {flows.map((f) => (
            <div key={f.label}>
              <p className="font-syne font-bold text-[11px] uppercase tracking-[0.15em] text-wanderly-primary mb-2">{f.label}</p>
              <p className="font-dm font-medium text-[16px] text-wanderly-body mb-4">{f.title}</p>
              <div className="overflow-x-auto pb-2">
                <div className="flex items-center gap-0 min-w-max">
                  {f.steps.map((step, i) => (
                    <div key={i} className="flex items-center">
                      <div className="bg-white border border-wanderly-primary rounded-[12px] px-3.5 py-2 font-dm text-[12px] text-wanderly-body whitespace-nowrap">
                        {step}
                      </div>
                      {i < f.steps.length - 1 && (
                        <span className="text-wanderly-primary font-bold text-[16px] mx-2">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
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