export default function KeyInsights() {
  const insights = [
    { num: "01", title: "Travelers are overwhelmed by scattered information", note: "Users juggle 4+ platforms per trip" },
    { num: "02", title: "Group coordination is the biggest pain point", note: "70% travel in groups, yet no unified tool exists" },
    { num: "03", title: "AI recommendations have high adoption potential", note: "90% of users said yes to AI-based planning" },
    { num: "04", title: "Budget tracking is a core unmet need", note: "40% cite cost management as their top frustration" },
    { num: "05", title: "Family travelers need simplicity and safety", note: "Low-tech users abandon complex interfaces" },
    { num: "06", title: "Packing and local tips are underserved", note: "15% frustrated by no smart packing guidance" },
  ];

  return (
    <section className="w-full bg-[#0E1A20] py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <p className="font-syne font-bold text-[11px] uppercase tracking-[0.15em] text-wanderly-primary mb-3">
          What We Learned
        </p>
        <h2 className="font-syne font-[800] text-[36px] text-white mb-10">
          6 Insights That Shaped the Design
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {insights.map((ins) => (
            <div
              key={ins.num}
              className="rounded-[12px] p-5 border border-wanderly-primary/30"
              style={{ background: "rgba(28,169,201,0.1)" }}
            >
              <span className="inline-block font-syne font-bold text-[14px] text-wanderly-primary bg-wanderly-primary/20 w-8 h-8 rounded-full flex items-center justify-center mb-4">
                {ins.num}
              </span>
              <p className="font-dm font-medium text-[15px] text-white mb-2">{ins.title}</p>
              <p className="font-dm text-[13px] text-wanderly-secondary">{ins.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}