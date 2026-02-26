export default function DressCode() {
  return (
    <div className="w-full flex justify-center py-20 bg-background-light border-t-4 border-double border-secondary/20">
      <div className="layout-content-container flex flex-col items-center max-w-[800px] flex-1 px-4 lg:px-8 text-center">
        <span className="material-symbols-outlined text-secondary text-5xl mb-4">checkroom</span>
        <h2 className="text-primary text-4xl lg:text-5xl font-display uppercase tracking-[0.2em] mb-6">Código de Vestimenta</h2>
        <div className="w-24 h-px bg-secondary/50 mb-8"></div>
        
        <h3 className="text-slate-800 text-2xl font-bold font-serif mb-2">Rigurosa Etiqueta</h3>
        <p className="text-slate-600 font-serif italic mb-10 text-xl">Para acompañarnos en esta velada tan especial</p>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center w-full">
          <div className="bg-white p-8 border border-secondary/20 shadow-sm flex-1 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-secondary"></div>
            <h4 className="font-display text-primary tracking-widest uppercase text-sm mb-4">Caballeros</h4>
            <p className="text-slate-600 font-serif text-lg">Esmoquin o traje oscuro.</p>
          </div>
          <div className="bg-white p-8 border border-secondary/20 shadow-sm flex-1 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-secondary"></div>
            <h4 className="font-display text-primary tracking-widest uppercase text-sm mb-4">Damas</h4>
            <p className="text-slate-600 font-serif text-lg">Vestido largo de noche.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
