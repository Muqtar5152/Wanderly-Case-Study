export default function Research() {
  const methods = [
    { title: "User Interviews", count: "3 participants", desc: "In-depth qualitative sessions" },
    { title: "Survey", count: "Multiple respondents", desc: "Quantitative validation" },
    { title: "Competitive Analysis", count: "Existing apps reviewed", desc: "Market landscape" },
  ];
  const quotes = [
    { text: "I get overwhelmed by too many options and can't decide what to include.", name: "Sara, 24", role: "Marketing Executive" },
    { text: "Managing everyone's preferences in group travel and staying within budget is hard.", name: "Rahul, 30", role: "IT Consultant" },
    { text: "I struggle to find child-friendly and safe activities that everyone enjoys.", name: "Priya, 36", role: "Teacher" },
  ];
  const stats = [
    { value: "90%", label: "Open to AI planning" },
    { value: "70%", label: "Prefer group travel" },
    { value: "40%", label: "Cite budgeting as top pain" },
    { value: "60%", label: "Take 2–3 trips per year" },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Methods */}
        <Eyebrow>Empathize Phase</Eyebrow>
        <h2 className="font-syne font-bold text-[32px] text-wanderly-body mb-8">Understanding Real Travelers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {methods.map((m) => (
            <div key={m.title} className="bg-wanderly-secondary rounded-[10px] p-5">
              <p className="font-syne font-bold text-[16px] text-wanderly-primary mb-1">{m.title}</p>
              <p className="font-dm text-[13px] text-wanderly-body/70 mb-1">{m.count}</p>
              <p className="font-dm text-[13px] text-wanderly-body">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Quotes */}
        <Eyebrow>What Users Said</Eyebrow>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {quotes.map((q, i) => (
            <div key={i} className="bg-white border border-wanderly-border rounded-[12px] p-5">
              <p className="font-dm italic text-[14px] text-wanderly-body leading-relaxed mb-4">"{q.text}"</p>
              <p className="font-dm text-[12px] text-wanderly-primary font-medium">
                — {q.name}, <span className="text-wanderly-body/60">{q.role}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <Eyebrow>Survey Findings</Eyebrow>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="bg-wanderly-bg rounded-[10px] p-5 text-center">
              <p className="font-syne font-[800] text-[36px] text-wanderly-primary">{s.value}</p>
              <p className="font-dm text-[13px] text-wanderly-body/70 mt-1">{s.label}</p>
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