    export default function InformationArchitecture() {
  const tree = [
    { parent: "Onboarding", children: ["Signup / Login", "Connect Social"] },
    { parent: "Home Dashboard", children: ["Explore Destinations", "Trending Deals", "Search"] },
    { parent: "Plan My Trip", children: ["Enter Preferences", "AI Itinerary", "Customize", "Cost Estimator", "Packing List"] },
    { parent: "My Trips", children: ["Upcoming", "Past", "Trip Tracker", "Memories"] },
    { parent: "Profile & Settings", children: ["Account Settings", "Notifications", "Help & Support"] },
  ];

  return (
    <section className="w-full bg-wanderly-bg py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <Eyebrow>Ideate Phase</Eyebrow>
        <h2 className="font-syne font-bold text-[32px] text-wanderly-body mb-4">Mapping the App's Structure</h2>
        <p className="font-dm text-[15px] text-wanderly-body/80 mb-12 max-w-2xl">
          I mapped the full navigation hierarchy before designing a single screen — treating the IA like a floor plan, ensuring every screen has a clear path in and out.
        </p>

        {/* Sitemap Tree */}
        <div className="overflow-x-auto pb-4">
          <div className="flex flex-col items-center min-w-[900px]">
            {/* Root */}
            <div className="bg-wanderly-primary text-white font-syne font-bold text-[14px] px-6 py-3 rounded-[10px]">
              Wanderly App
            </div>
            <div className="w-px h-8 bg-wanderly-primary/40" />

            {/* Level 1 connector */}
            <div className="relative w-full max-w-[880px]">
              <div className="h-px bg-wanderly-primary/30 absolute top-0 left-[10%] right-[10%]" />
            </div>

            {/* Level 1 */}
            <div className="flex justify-between w-full max-w-[880px] relative">
              {tree.map((node, i) => (
                <div key={node.parent} className="flex flex-col items-center flex-1">
                  <div className="w-px h-6 bg-wanderly-primary/30" />
                  <div className="border border-wanderly-primary bg-white text-wanderly-primary font-syne font-bold text-[12px] px-3 py-2 rounded-[8px] text-center whitespace-nowrap">
                    {node.parent}
                  </div>
                  <div className="w-px h-5 bg-wanderly-primary/20" />

                  {/* Level 2 */}
                  <div className="flex flex-col gap-2 items-center">
                    {node.children.map((child) => (
                      <div key={child} className="bg-wanderly-secondary text-wanderly-primary font-dm text-[11px] px-3 py-1.5 rounded-[6px] text-center whitespace-nowrap">
                        {child}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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