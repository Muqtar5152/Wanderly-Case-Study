export default function FooterSection() {
  const links = [
    { label: "View Prototype ↗", href: "https://www.figma.com/design/fSP4jxvIfaLviKckrQoJfr/WanderAI-CS-and-UI?node-id=3-49&t=Oo7wXPXiFviZeAQF-1" },
    { label: "Behance ↗", href: "https://www.behance.net/muqtarpasha" },
    { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/mohammad-muqtar-pasha-9870a5187" },
  ];

  return (
    <section className="w-full bg-[#0E1A20] py-20">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <h2 className="font-syne font-[800] text-[42px] text-white mb-2">Wanderly</h2>
        <p className="font-dm text-[16px] text-white/60 mb-2">UI/UX Case Study · 2024</p>
        <p className="font-dm text-[14px] text-white/50 mb-8">Designed by Muqtar</p>

        <div className="flex justify-center gap-6 mb-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm text-[14px] text-wanderly-primary hover:text-wanderly-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="w-full h-px bg-wanderly-primary/30 mb-6" />
        <p className="font-dm text-[12px] text-white/40">Made with Figma · AI-assisted design workflow</p>
      </div>
    </section>
  );
}