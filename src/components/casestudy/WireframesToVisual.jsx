export default function WireframesToVisual() {
  const home = new URL("../../assets/wireframes/home.png", import.meta.url).href;
  const questions = new URL("../../assets/wireframes/questions.png", import.meta.url).href;
  const summary = new URL("../../assets/wireframes/summary.png", import.meta.url).href;

  const screens = [
    { label: "Home Screen", img: home },
    { label: "AI Preferences", img: questions },
    { label: "Itinerary Summary", img: summary },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <Eyebrow>Design Process</Eyebrow>
        <h2 className="font-syne font-bold text-[32px] text-wanderly-body mb-3">Visual Design Screens</h2>
        <p className="font-dm text-[15px] text-wanderly-body/80 mb-6 max-w-2xl">
          I followed a rigorous progression from paper wireframes to polished visual design, validating structure before investing in aesthetics.
        </p>

        {/* Figma CTA */}
        <div className="mb-12">
          <a
            href="https://www.figma.com/design/fSP4jxvIfaLviKckrQoJfr/WanderAI-CS-and-UI?node-id=0-1&p=f&t=sGPJuh4dbTPkj9EJ-0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-wanderly-primary text-white font-dm font-medium text-[15px] px-6 py-3 rounded-[12px] hover:bg-wanderly-primary/80 transition-colors shadow-md"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            View Full Design in Figma ↗
          </a>
        </div>

        {/* Screen previews */}
        <div className="flex flex-wrap justify-center gap-8">
          {screens.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-3">
              <div
                className="overflow-hidden rounded-[24px] border-2 border-wanderly-border shadow-sm"
                style={{ width: 150, height: 300 }}
              >
                <img src={s.img} alt={s.label} className="w-full h-full object-cover object-top" />
              </div>
              <p className="font-dm text-[13px] text-wanderly-body/70">{s.label}</p>
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