export default function FinalUIShowcase() {
  const allSet = new URL("../../assets/wireframes/all-set.png", import.meta.url).href;
  const home = new URL("../../assets/wireframes/home.png", import.meta.url).href;
  const destinations = new URL("../../assets/wireframes/destinations.png", import.meta.url).href;
  const overview = new URL("../../assets/wireframes/overview.png", import.meta.url).href;
  const destinationOverview = new URL("../../assets/wireframes/destination-overview.png", import.meta.url).href;
  const questions = new URL("../../assets/wireframes/questions.png", import.meta.url).href;
  const budget = new URL("../../assets/wireframes/budget.png", import.meta.url).href;
  const calendar = new URL("../../assets/wireframes/calender.png", import.meta.url).href;
  const summary = new URL("../../assets/wireframes/summary.png", import.meta.url).href;
  const articles = new URL("../../assets/wireframes/articles.png", import.meta.url).href;

  const screens = [
    { label: "Onboarding", img: allSet },
    { label: "Home", img: home },
    { label: "Destinations", img: destinations },
    { label: "Destination Overview", img: overview },
    { label: "Destination Detail", img: destinationOverview },
    { label: "Who Is Going", img: questions },
    { label: "Travel Budget", img: budget },
    { label: "Pick Dates", img: calendar },
    { label: "Review Summary", img: summary },
    { label: "Articles", img: articles },
  ];

  const heights = [340, 380, 340, 380, 340, 380, 340, 380, 340, 380];

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
        <p className="font-dm text-[15px] text-white/60 mb-4">
          A seamless travel planning experience from first tap to final destination.
        </p>

        {/* Figma link */}
        <div className="mb-12">
          <a
            href="https://www.figma.com/design/fSP4jxvIfaLviKckrQoJfr/WanderAI-CS-and-UI?node-id=0-1&p=f&t=sGPJuh4dbTPkj9EJ-0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-wanderly-primary text-white font-dm font-medium text-[14px] px-5 py-2.5 rounded-[10px] hover:bg-wanderly-primary/80 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            View Full Prototype in Figma ↗
          </a>
        </div>

        {/* Gallery */}
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-4" style={{ width: "max-content" }}>
            {screens.map((s, i) => (
              <div key={s.label} className="flex flex-col items-center">
                <div
                  className="rounded-[24px] overflow-hidden border-[1.5px] border-wanderly-primary/50 shadow-lg"
                  style={{ width: 140, height: i % 2 === 0 ? 290 : 320 }}
                >
                  <img
                    src={s.img}
                    alt={s.label}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="font-dm text-[11px] text-white/60 mt-2 text-center" style={{maxWidth: 120}}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-10 mt-8">
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