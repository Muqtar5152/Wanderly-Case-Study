export default function DesignSystemSection() {
  const colors = [
    { hex: "#1CA9C9", label: "Primary" },
    { hex: "#A7EFFF", label: "Secondary" },
    { hex: "#FF6B6B", label: "Highlight" },
    { hex: "#595959", label: "Body Text" },
    { hex: "#F3F3F3", label: "Background" },
  ];
  const typeScale = [
    { size: "32px", weight: "Bold", name: "Display" },
    { size: "22px", weight: "SemiBold", name: "Heading" },
    { size: "14px", weight: "Regular", name: "Body" },
    { size: "11px", weight: "Regular", name: "Caption" },
  ];

  return (
    <section className="w-full bg-wanderly-bg py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <Eyebrow>Visual Foundation</Eyebrow>
        <h2 className="font-syne font-bold text-[32px] text-wanderly-body mb-10">Design System</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colors */}
          <div>
            <p className="font-syne font-bold text-[14px] text-wanderly-body mb-5">Colors</p>
            <div className="space-y-4">
              {colors.map((c) => (
                <div key={c.hex} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full shrink-0 border border-wanderly-border" style={{ background: c.hex }} />
                  <div>
                    <p className="font-dm text-[13px] text-wanderly-body font-medium">{c.hex}</p>
                    <p className="font-dm text-[11px] text-wanderly-body/60">{c.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div>
            <p className="font-syne font-bold text-[14px] text-wanderly-body mb-5">Typography</p>
            <p className="font-dm text-[12px] text-wanderly-body/60 mb-4">Satoshi · Primary Typeface</p>
            <div className="space-y-4">
              {typeScale.map((t) => (
                <div key={t.name} className="flex items-baseline gap-3">
                  <span className="font-syne text-wanderly-body" style={{ fontSize: t.size, fontWeight: t.weight === "Bold" ? 700 : t.weight === "SemiBold" ? 600 : 400 }}>
                    Aa
                  </span>
                  <div>
                    <p className="font-dm text-[12px] text-wanderly-body font-medium">{t.name}</p>
                    <p className="font-dm text-[11px] text-wanderly-body/50">{t.size} · {t.weight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Components */}
          <div>
            <p className="font-syne font-bold text-[14px] text-wanderly-body mb-5">Components</p>
            <div className="space-y-4">
              <button className="bg-wanderly-primary text-white font-dm text-[14px] font-medium px-6 py-2.5 rounded-[10px] w-full">
                Plan My Trip
              </button>
              <button className="bg-white border border-wanderly-primary text-wanderly-primary font-dm text-[14px] font-medium px-6 py-2.5 rounded-[10px] w-full">
                Explore
              </button>
              <input
                readOnly
                placeholder="Where do you want to go?"
                className="w-full bg-white border border-wanderly-border font-dm text-[14px] px-4 py-2.5 rounded-[10px] focus:border-wanderly-primary outline-none text-wanderly-body"
              />
              <div>
                <span className="inline-block bg-wanderly-secondary text-wanderly-primary font-dm text-[13px] px-4 py-1.5 rounded-[20px]">
                  Beach Vacation
                </span>
              </div>
              <div className="bg-white border-t-[3px] border-wanderly-primary rounded-[12px] p-4">
                <p className="font-syne font-bold text-[16px] text-wanderly-body">Maldives</p>
                <p className="font-dm text-[13px] text-wanderly-body/60 mt-1">Starting ₹45,000</p>
              </div>
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