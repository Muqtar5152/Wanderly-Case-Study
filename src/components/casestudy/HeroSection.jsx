export default function HeroSection() {
  const chips = ["12 Weeks", "Figma + Miro + Google Forms", "Mobile App · AI/UX"];
  const roles = ["User Research", "Information Architecture", "Wireframes", "Visual Design", "Prototyping", "Usability Testing"];

  return (
    <section className="w-full bg-[#0E1A20] py-20 md:py-24">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-[60%] w-full">
          <span className="inline-block border border-wanderly-primary text-wanderly-primary text-[11px] uppercase tracking-[0.15em] font-syne font-bold px-4 py-1.5 rounded-full mb-6">
            UI/UX Case Study
          </span>
          <h1 className="font-syne font-[800] text-[48px] md:text-[56px] leading-[1.05] text-white mb-3">
            Wanderly
          </h1>
          <p className="font-dm text-[20px] text-white/70 mb-2">
            AI-Powered Smart Travel Planner
          </p>
          <p className="font-dm italic text-[16px] text-white/50 mb-8 max-w-md">
            Turning scattered trip planning into one seamless, intelligent journey.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {chips.map((c) => (
              <span key={c} className="bg-white/10 text-white/80 font-dm text-[13px] px-4 py-2 rounded-full border border-white/10">
                {c}
              </span>
            ))}
          </div>

          <div>
            <p className="text-white/50 font-dm text-[11px] uppercase tracking-[0.15em] mb-3">My Role</p>
            <div className="flex flex-wrap gap-2">
              {roles.map((r) => (
                <span key={r} className="bg-wanderly-primary/15 text-wanderly-primary font-dm text-[12px] font-medium px-3.5 py-1.5 rounded-full">
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="md:w-[40%] w-full flex justify-center">
          <div className="w-[200px] h-[400px] rounded-[32px] border-2 border-wanderly-primary/40 bg-wanderly-primary/8 flex items-center justify-center">
            <span className="text-wanderly-primary font-dm text-[12px]">App Preview</span>
          </div>
        </div>
      </div>
    </section>
  );
}