export default function WireframesToVisual() {
  const screens = [
    "Home / Discovery Screen",
    "AI Trip Planner — Preferences Screen",
    "Itinerary View Screen",
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <Eyebrow>Design Process</Eyebrow>
        <h2 className="font-syne font-bold text-[32px] text-wanderly-body mb-3">From Lo-Fi to Hi-Fi</h2>
        <p className="font-dm text-[15px] text-wanderly-body/80 mb-12 max-w-2xl">
          I followed a rigorous progression from paper wireframes to polished visual design, validating structure before investing in aesthetics.
        </p>

        <div className="space-y-10">
          {screens.map((label, i) => (
            <div key={i}>
              <p className="font-dm font-medium text-[14px] text-wanderly-body mb-4">{label}</p>
              <div className="flex items-center justify-center gap-6 md:gap-10">
                {/* Lo-fi */}
                <div className="text-center">
                  <p className="font-dm text-[11px] text-wanderly-body/60 mb-2">Lo-Fi Wireframe</p>
                  <WireframePhone />
                </div>

                <span className="text-wanderly-primary font-bold text-[24px]">→</span>

                {/* Hi-fi */}
                <div className="text-center">
                  <p className="font-dm text-[11px] text-wanderly-primary mb-2">Hi-Fi Design</p>
                  <HiFiPhone screenIndex={i} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WireframePhone() {
  return (
    <div className="w-[140px] md:w-[160px] h-[280px] md:h-[300px] rounded-[24px] border-2 border-wanderly-border bg-white p-3 flex flex-col gap-2.5">
      <div className="h-5 bg-gray-200 rounded-md" />
      <div className="h-8 bg-gray-200 rounded-md" />
      <div className="flex-1 flex flex-col gap-2">
        <div className="h-14 bg-gray-100 rounded-md" />
        <div className="h-14 bg-gray-100 rounded-md" />
        <div className="h-14 bg-gray-100 rounded-md" />
      </div>
      <div className="h-6 bg-gray-200 rounded-md" />
    </div>
  );
}

function HiFiPhone({ screenIndex }) {
  return (
    <div className="w-[140px] md:w-[160px] h-[280px] md:h-[300px] rounded-[24px] border-2 border-wanderly-primary/30 bg-white overflow-hidden flex flex-col">
      <div className="h-10 bg-wanderly-primary" />
      <div className="flex-1 p-3 flex flex-col gap-2">
        {screenIndex === 0 && (
          <>
            <div className="h-8 bg-wanderly-secondary rounded-md" />
            <div className="h-16 bg-wanderly-secondary/50 rounded-md" />
            <div className="h-16 bg-wanderly-secondary/50 rounded-md" />
            <div className="flex-1" />
          </>
        )}
        {screenIndex === 1 && (
          <>
            <div className="h-4 bg-wanderly-secondary rounded-md w-3/4" />
            <div className="h-8 bg-wanderly-secondary/50 rounded-md" />
            <div className="h-8 bg-wanderly-secondary/50 rounded-md" />
            <div className="h-8 bg-wanderly-secondary/50 rounded-md" />
            <div className="mt-auto h-8 bg-wanderly-primary/20 rounded-md" />
          </>
        )}
        {screenIndex === 2 && (
          <>
            <div className="h-5 bg-wanderly-secondary rounded-md w-1/2" />
            <div className="h-12 bg-wanderly-secondary/40 rounded-md" />
            <div className="h-12 bg-wanderly-secondary/40 rounded-md" />
            <div className="h-12 bg-wanderly-secondary/40 rounded-md" />
          </>
        )}
      </div>
      <div className="h-8 bg-wanderly-primary/90" />
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="font-syne font-bold text-[11px] uppercase tracking-[0.15em] text-wanderly-primary mb-3">
      {children}
    </p>
  );
}