export default function Lodging() {
  return (
    <div className="w-full flex justify-center py-20 bg-paper border-t border-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-damask opacity-5 pointer-events-none"></div>
      <div className="layout-content-container flex flex-col items-center max-w-[1024px] flex-1 px-4 lg:px-8 relative z-10">
        <span className="material-symbols-outlined text-secondary text-5xl mb-4">bed</span>
        <h2 className="text-primary text-5xl lg:text-7xl font-script leading-tight mb-6 text-center">Hospedaje</h2>
        <div className="w-24 h-px bg-secondary/50 mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Option 1 */}
          <div className="bg-white border border-secondary/30 shadow-md relative group hover:border-primary transition-colors flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-secondary/50 group-hover:bg-primary transition-colors z-10"></div>
            <div className="relative w-full h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542314831-c6a4d14d837e?q=80&w=1000&auto=format&fit=crop" 
                alt="Hotel Boutique San José" 
                className="w-full h-full object-cover sepia-[0.2] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-slate-800 text-2xl font-bold font-serif mb-2">Hotel Boutique San José</h3>
              <div className="flex items-center gap-2 mb-4 text-slate-500 text-sm">
                <span className="material-symbols-outlined text-base">location_on</span>
                <span>Centro Histórico, Oaxaca</span>
              </div>
              <p className="text-slate-600 font-serif mb-6 line-clamp-2 flex-grow">
                Un espacio colonial con todas las comodidades modernas, a solo 10 minutos de la recepción.
              </p>
              <div className="bg-slate-50 border-l-4 border-secondary p-3 mb-6">
                <span className="text-[10px] text-accent uppercase tracking-widest font-display font-bold block mb-1">Código de Descuento</span>
                <span className="font-mono text-lg text-primary tracking-wider">BODASM24</span>
              </div>
              <div className="mt-auto">
                <a href="https://maps.google.com/?q=Hotel+Boutique+San+Jose+Oaxaca" target="_blank" rel="noreferrer" className="text-xs font-display tracking-[0.2em] uppercase text-secondary-dark hover:text-primary border-b border-secondary-dark hover:border-primary pb-1 transition-all inline-flex items-center">
                  Ver Ubicación <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Option 2 */}
          <div className="bg-white border border-secondary/30 shadow-md relative group hover:border-primary transition-colors flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-secondary/50 group-hover:bg-primary transition-colors z-10"></div>
            <div className="relative w-full h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551882547-ff40c0d13c05?q=80&w=1000&auto=format&fit=crop" 
                alt="Grand Hotel Oaxaca" 
                className="w-full h-full object-cover sepia-[0.2] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-slate-800 text-2xl font-bold font-serif mb-2">Grand Hotel Oaxaca</h3>
              <div className="flex items-center gap-2 mb-4 text-slate-500 text-sm">
                <span className="material-symbols-outlined text-base">location_on</span>
                <span>Zona Norte, Oaxaca</span>
              </div>
              <p className="text-slate-600 font-serif mb-6 line-clamp-2 flex-grow">
                Elegancia contemporánea con vistas panorámicas de la ciudad y excelente servicio de primera clase.
              </p>
              <div className="bg-slate-50 border-l-4 border-secondary p-3 mb-6">
                <span className="text-[10px] text-accent uppercase tracking-widest font-display font-bold block mb-1">Código de Descuento</span>
                <span className="font-mono text-lg text-primary tracking-wider">SOFIAYMATEO</span>
              </div>
              <div className="mt-auto">
                <a href="https://maps.google.com/?q=Grand+Hotel+Oaxaca" target="_blank" rel="noreferrer" className="text-xs font-display tracking-[0.2em] uppercase text-secondary-dark hover:text-primary border-b border-secondary-dark hover:border-primary pb-1 transition-all inline-flex items-center">
                  Ver Ubicación <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
