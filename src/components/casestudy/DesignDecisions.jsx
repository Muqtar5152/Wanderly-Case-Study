const decisions = [
  {
    id: "01",
    title: "AI Toggle, Not AI Control",
    tags: ["UX", "AI", "Behavior"],
    before:
      "Most travel apps either require fully manual input — or push full automation with no transparency. Both extremes create friction. Manual = overwhelming. Full-auto = distrust.",
    after:
      "Wanderly introduces an optional AI toggle during trip creation. Users explicitly choose when AI assists. The system never auto-generates without consent — it waits to be invited.",
    why: "Traveler research revealed strong resistance to 'black-box itineraries.' The toggle preserves **autonomy while reducing the cognitive effort of planning** — the exact tension that causes abandonment.",
    impact: ["Increases trust in AI suggestions", "Higher AI feature adoption", "Lower drop-off during onboarding"],
  },
  {
    id: "02",
    title: "Macro → Micro Trip Breakdown",
    tags: ["IA", "Behavior", "Cognitive Load"],
    before:
      "Planning tools treat a trip as a flat list of bookings. Users must mentally connect flights, hotels, activities, and budgets — across multiple apps, tabs, and spreadsheets.",
    after:
      "Wanderly structures trips hierarchically: Destination → Day Plan → Activity → Detail. Users work top-down. The system builds micro-details only once macro intent is confirmed.",
    why: "**Cognitive overload peaks when decisions are made out of sequence.** Starting at the macro level gives users orientation before detail — mimicking how expert travelers actually plan.",
    impact: ["Reduces planning abandonment mid-flow", "Fewer back-tracking actions", "Cleaner mental model of the trip"],
  },
  {
    id: "03",
    title: "'What Should I Do Today?' — Daily Focus Screen",
    tags: ["UX", "Focus", "Productivity"],
    before:
      "Travel apps show everything at once — full itineraries, all destinations, all dates. During the trip itself, users need a single answer: what's next right now?",
    after:
      "Wanderly surfaces a Today View — a stripped-back screen showing only that day's plan, next activity, and one contextual prompt. All else is hidden behind a tap.",
    why: "**Decision fatigue compounds on travel days.** Showing one day at a time during the trip mirrors how humans actually experience time — not as a spreadsheet, but as a sequence.",
    impact: ["Reduces in-trip confusion", "Drives higher daily active usage", "Lowers support requests about 'finding my plan'"],
  },
  {
    id: "04",
    title: "Adaptive Reminders vs. Static Notifications",
    tags: ["AI", "Behavior", "Engagement"],
    before:
      "Standard apps send reminders at fixed times: '24 hours before.' These arrive out of context, get dismissed, and create notification fatigue.",
    after:
      "Wanderly uses contextual triggers: departure proximity, weather API, local time zone, and user activity patterns to send reminders at the right moment — not at a preset interval.",
    why: "**A reminder is only valuable if it's actionable.** A notification about packing sent 6 hours before departure is useful. The same message sent 5 days before gets ignored — and trains users to ignore all alerts.",
    impact: ["Higher notification open rate", "Lower opt-out rate", "Reminders feel helpful, not interruptive"],
  },
  {
    id: "05",
    title: "LMS-Style Auto-Sync vs. Manual Entry",
    tags: ["System", "Automation", "Trust"],
    before:
      "Users manually enter flight numbers, hotel bookings, and transport details. This creates duplicate work — data already exists in confirmation emails and booking platforms.",
    after:
      "Wanderly pulls booking confirmations via email parsing and calendar sync. Users verify, not enter. The system pre-fills; humans approve.",
    why: "**Manual data entry is where planning apps lose users permanently.** Every field you ask a user to fill is a decision point to quit. Auto-sync shifts the burden from user to system.",
    impact: ["Reduces onboarding drop-off", "Increases itinerary completeness", "Builds perceived AI intelligence immediately"],
  },
  {
    id: "06",
    title: "Energy-Based Scheduling (Morning vs. Night Travelers)",
    tags: ["Personalization", "Behavior", "AI"],
    before:
      "Itinerary tools schedule activities purely by time slot — no awareness of user energy levels, preferences, or chronotype. A museum at 8 AM suits one traveler, not another.",
    after:
      "During onboarding, users select a travel rhythm (early bird / night explorer / flexible). AI-generated itineraries front-load or back-load intense activities accordingly.",
    why: "**Mismatched scheduling creates real-trip abandonment** — users skip planned activities when they feel 'wrong.' A personalized rhythm means users actually follow the itinerary they planned.",
    impact: ["Higher itinerary adherence", "Stronger NPS among heavy users", "Differentiates from generic planner apps"],
  },
  {
    id: "07",
    title: "Bottom Navigation for Speed, Not Hierarchy",
    tags: ["UX", "Navigation", "Mobile"],
    before:
      "Many travel apps use hamburger menus or top tabs — forcing users to think about navigation structure while already managing complex trip decisions.",
    after:
      "Wanderly uses a persistent bottom nav with 4 tabs: Home, Saved, My Trips, Settings. Critical actions (Plan a Trip) are always reachable within one tap from any screen.",
    why: "**Navigation is not a feature — it's a cost.** Every tap wasted on navigation is attention stolen from actual planning. Bottom nav aligns with thumb-reach zones and reduces cognitive load in motion.",
    impact: ["Faster key-action reach time", "Reduced navigation errors on mobile", "Better one-handed usability during travel"],
  },
  {
    id: "08",
    title: "Green as a Behavioral Progress Signal — Not Branding",
    tags: ["Visual Design", "Behavior", "Psychology"],
    before:
      "Color in most apps reflects brand identity alone. Users get no visual feedback about task completion or trip progress — leading to uncertainty about 'where they are' in the planning process.",
    after:
      "Wanderly uses teal-green as a progress marker only — completed steps, confirmed bookings, and resolved tasks turn green. In-progress states stay blue. Unstarted stays neutral.",
    why: "**Color carries meaning before text is read.** Green triggers completion-association at a neurological level. When users see green progress, dopamine fires — reinforcing continued engagement with the planning flow.",
    impact: ["Increases plan completion rates", "Reduces 'is this done?' confusion", "Creates subconscious motivation to finish planning"],
  },
  {
    id: "09",
    title: "AI Time Estimation vs. User Guesswork",
    tags: ["AI", "UX", "Accuracy"],
    before:
      "Users manually estimate how long an activity takes — often wrong. Misestimated time cascades into broken schedules, missed activities, and frustration during the trip.",
    after:
      "When users add an activity, Wanderly's AI pre-fills a time estimate based on location type, transit time, and crowd patterns. Users can edit — but don't have to.",
    why: "**Guesswork is where planning breaks.** A museum visit 'takes 2 hours' but actually takes 3.5 when factoring line wait, cafe stop, and exit. AI knows this from aggregated data. Users don't.",
    impact: ["More realistic itineraries", "Fewer schedule conflicts", "Higher completion of planned activities"],
  },
  {
    id: "10",
    title: "Reduce Planning Effort — Not Add More Features",
    tags: ["Product Strategy", "UX", "Philosophy"],
    before:
      "The instinct in travel tech is to add features: more filters, more options, more customization. The result is apps that require onboarding training just to plan a weekend trip.",
    after:
      "Every Wanderly feature passes a single filter: does this reduce planning effort? New capabilities are only shipped if they save user decisions — not create new ones.",
    why: "**Feature bloat is the silent killer of travel apps.** TripAdvisor, Google Trips, and dozens of others failed not because of missing features — but because each new feature raised the cost of using the product.",
    impact: ["Leaner, faster product roadmap", "Higher user retention from simplicity", "Wanderly stays focused on the core job-to-be-done"],
  },
];

const principles = [
  {
    num: "1",
    title: "Reduce Thinking, Not Control",
    body: "The goal is never to remove the user from the loop — it's to reduce how many decisions they must make. AI handles estimation, sequencing, and suggestions. Humans make final calls.",
  },
  {
    num: "2",
    title: "Show Intelligence, Don't Claim It",
    body: "Wanderly never labels features 'AI-Powered' in the UI. Intelligence is demonstrated through outcomes — pre-filled fields, accurate estimates, contextual reminders — not badges.",
  },
  {
    num: "3",
    title: "Design for Behavior, Not Intention",
    body: "Users intend to plan well. They behave differently under stress, time pressure, and decision fatigue. The product is built for how people actually behave — not how they ideally plan.",
  },
  {
    num: "4",
    title: "Clarity Over Flexibility",
    body: "Every additional option adds cognitive cost. Wanderly chooses opinionated defaults over infinite configurability. Flexibility is offered only where differentiation genuinely matters.",
  },
  {
    num: "5",
    title: "Progress Over Perfection",
    body: "A 70% complete itinerary a user follows beats a perfect plan they never finish building. The design system rewards partial completion and removes barriers to 'good enough' planning.",
  },
];

export default function DesignDecisions() {
  return (
    <section className="w-full bg-wanderly-bg py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <Eyebrow>Product Thinking</Eyebrow>
        <h2 className="font-syne font-[800] text-[36px] text-wanderly-body mb-3 leading-tight">
          Design Decisions & Product Reasoning
        </h2>
        <p className="font-dm text-[15px] text-wanderly-body/70 mb-14 max-w-2xl">
          Every decision in Wanderly is anchored to a behavioral problem, not a design preference. 
          Below is the product thinking that drove the key UX choices.
        </p>

        {/* Decision Cards */}
        <div className="space-y-8 mb-20">
          {decisions.map((d) => (
            <DecisionCard key={d.id} {...d} />
          ))}
        </div>

        {/* Principles */}
        <div className="bg-[#0E1A20] rounded-[20px] p-8 md:p-12">
          <Eyebrow light>Core Product Principles</Eyebrow>
          <h3 className="font-syne font-[800] text-[28px] text-white mb-8">
            The Philosophy Behind Wanderly
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div key={p.num} className="border border-wanderly-primary/30 rounded-[12px] p-5"
                style={{ background: "rgba(28,169,201,0.07)" }}>
                <span className="font-syne font-bold text-[11px] text-wanderly-primary uppercase tracking-widest mb-2 block">
                  Principle {p.num}
                </span>
                <p className="font-syne font-bold text-[16px] text-white mb-2">{p.title}</p>
                <p className="font-dm text-[13px] text-white/60 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DecisionCard({ id, title, tags, before, after, why, impact }) {
  return (
    <div className="bg-white border border-wanderly-border rounded-[16px] overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 pt-6 pb-4 border-b border-wanderly-border">
        <div className="flex items-center gap-4">
          <span className="font-syne font-[800] text-[13px] text-wanderly-primary bg-wanderly-secondary px-3 py-1 rounded-full">
            [{id}]
          </span>
          <h3 className="font-syne font-bold text-[18px] text-wanderly-body">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="font-dm text-[11px] text-wanderly-body/60 bg-wanderly-bg px-3 py-1 rounded-full border border-wanderly-border">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Before / After */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="px-6 py-5 border-b md:border-b-0 md:border-r border-wanderly-border">
          <p className="font-syne font-bold text-[10px] uppercase tracking-widest text-wanderly-accent mb-2">Before</p>
          <p className="font-dm text-[13px] text-wanderly-body/80 leading-relaxed">{before}</p>
        </div>
        <div className="px-6 py-5">
          <p className="font-syne font-bold text-[10px] uppercase tracking-widest text-wanderly-primary mb-2">After</p>
          <p className="font-dm text-[13px] text-wanderly-body/80 leading-relaxed">{after}</p>
        </div>
      </div>

      {/* Why + Impact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-wanderly-border bg-wanderly-bg/50">
        <div className="md:col-span-2 px-6 py-5 border-b md:border-b-0 md:border-r border-wanderly-border">
          <p className="font-syne font-bold text-[10px] uppercase tracking-widest text-wanderly-body/50 mb-2">Why This Works</p>
          <p className="font-dm text-[13px] text-wanderly-body leading-relaxed" dangerouslySetInnerHTML={{ __html: why.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        </div>
        <div className="px-6 py-5">
          <p className="font-syne font-bold text-[10px] uppercase tracking-widest text-wanderly-body/50 mb-3">Impact</p>
          <ul className="space-y-2">
            {impact.map((i, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-wanderly-primary mt-1.5 shrink-0" />
                <p className="font-dm text-[12px] text-wanderly-body">{i}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Eyebrow({ children, light }) {
  return (
    <p className={`font-syne font-bold text-[11px] uppercase tracking-[0.15em] mb-3 ${light ? "text-wanderly-secondary" : "text-wanderly-primary"}`}>
      {children}
    </p>
  );
}