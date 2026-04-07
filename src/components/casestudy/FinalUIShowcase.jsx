export default function FinalUIShowcase() {
  const screens = [
    { label: "Onboarding", h: 320 },
    { label: "Home", h: 370 },
    { label: "Destination", h: 340 },
    { label: "Plan My Trip", h: 380 },
    { label: "Itinerary", h: 330 },
    { label: "Packing List", h: 360 },
  ];
  const features = [
    "AI Itinerary Generator",
    "Group Cost Splitter",
    "Smart Packing Lists",
    "Real-Time Trip Tracker",
  ];

  return (
    <section className="w-full bg-[#0E1A20] py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <p className="font-syne font-bold text-[11px] uppercase tracking-[0.15em] text-wanderly-primary mb-3">
          Visual Design
        </p>
        <h2 className="font-syne font-[800] text-[36px] text-white mb-2">Final UI Screens</h2>
        <p className="font-dm text-[15px] text-white/60 mb-12">
          A seamless travel planning experience from first tap to final destination.
        </p>

        {/* Gallery */}
        <div className="flex justify-center gap-4 md:gap-5 mb-16 overflow-x-auto pb-4">
          {screens.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center shrink-0">
              <div
                className="w-[130px] md:w-[150px] rounded-[28px] border-[1.5px] border-wanderly-primary/50 overflow-hidden flex flex-col"
                style={{ height: s.h, background: "#1A2530" }}
              >
                <div className="h-8 bg-wanderly-primary/60" />
                <div className="flex-1 p-2 flex flex-col gap-1.5">
                  <div className="h-3 bg-white/10 rounded" />
                  <div className="flex-1 bg-white/5 rounded-md" />
                  <div className="h-6 bg-white/5 rounded" />
                </div>
                <div className="h-6 bg-wanderly-primary/40" />
              </div>
              <p className="font-dm text-[11px] text-white/60 mt-3">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-10">
          {features.map((f) => (
            <div key={f} className="flex flex-col items-center gap-2">
              <div className="w-6 h-6 rounded bg-white/20" />
              <p className="font-dm text-[13px] text-white">{f}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}