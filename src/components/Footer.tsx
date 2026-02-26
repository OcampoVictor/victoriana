export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1514] py-20 border-t-8 border-double border-secondary/40 relative overflow-hidden text-[#FDFBF7]">
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span className="font-script text-[20rem] text-secondary">S&amp;M</span>
      </div>
      <div className="layout-content-container flex flex-col items-center justify-center max-w-[960px] mx-auto px-4 text-center relative z-10">
        <span className="material-symbols-outlined text-secondary mb-6 text-4xl">local_florist</span>
        <h2 className="text-[#FDFBF7] text-6xl md:text-7xl font-script mb-8">Sofía &amp; Mateo</h2>
        <div className="flex items-center gap-6 mb-12">
          <span className="h-px w-16 bg-secondary"></span>
          <p className="text-secondary text-xs font-display tracking-[0.3em] uppercase">12 • Oct • 2024</p>
          <span className="h-px w-16 bg-secondary"></span>
        </div>
        <div className="flex gap-8">
          <button className="group w-14 h-14 flex items-center justify-center rounded-full border border-secondary/50 text-secondary hover:bg-secondary hover:text-[#1A1514] transition-all duration-500">
            <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">mail</span>
          </button>
          <button className="group w-14 h-14 flex items-center justify-center rounded-full border border-secondary/50 text-secondary hover:bg-secondary hover:text-[#1A1514] transition-all duration-500">
            <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">share</span>
          </button>
        </div>
        <p className="text-white/30 text-[10px] mt-16 font-sans tracking-widest uppercase">Diseño Victoriano Elegante</p>
      </div>
    </footer>
  );
}
