import { Gift } from 'lucide-react';

export default function Gifts() {
  return (
    <div className="w-full flex justify-center py-20 lg:py-24 bg-white border-t-4 border-double border-secondary/20 relative">
      <div className="layout-content-container flex flex-col items-center max-w-[1080px] flex-1 px-4 lg:px-8 text-center">
        <span className="material-symbols-outlined text-secondary text-5xl mb-4">volunteer_activism</span>
        <h2 className="text-primary text-5xl lg:text-7xl font-script leading-tight mb-6 text-center">Mesa de Regalos</h2>
        <div className="w-24 h-px bg-secondary/50 mb-8"></div>
        
        <p className="text-slate-600 font-serif italic mb-12 text-xl max-w-2xl">
          Su presencia es nuestro mayor regalo, pero si desean tener un detalle con nosotros, hemos preparado las siguientes opciones:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* El Palacio de Hierro */}
          <div className="flex flex-col items-center justify-center p-10 border border-secondary/40 bg-[#FDFBF7] shadow-sm hover:shadow-md hover:border-primary transition-all group">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/El_Palacio_de_Hierro_logo.svg/2560px-El_Palacio_de_Hierro_logo.svg.png" 
              alt="El Palacio de Hierro" 
              className="h-12 object-contain mb-6 opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
            />
            <span className="font-display font-bold text-slate-800 tracking-widest uppercase mb-2">El Palacio de Hierro</span>
            <span className="text-slate-500 font-serif text-sm mb-6">Evento: 123456</span>
            <a 
              href="https://www.elpalaciodehierro.com/celebralia/" 
              target="_blank" 
              rel="noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 py-3 px-6 bg-primary text-white font-display uppercase tracking-widest text-xs hover:bg-primary-light transition-colors border border-primary-light shadow-sm w-full"
            >
              <Gift size={16} /> Ver Mesa
            </a>
          </div>

          {/* Liverpool */}
          <div className="flex flex-col items-center justify-center p-10 border border-secondary/40 bg-[#FDFBF7] shadow-sm hover:shadow-md hover:border-primary transition-all group">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Liverpool_logo.svg/2560px-Liverpool_logo.svg.png" 
              alt="Liverpool" 
              className="h-12 object-contain mb-6 opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
            />
            <span className="font-display font-bold text-slate-800 tracking-widest uppercase mb-2">Liverpool</span>
            <span className="text-slate-500 font-serif text-sm mb-6">Evento: 654321</span>
            <a 
              href="https://www.liverpool.com.mx/tienda/mesa-de-regalos" 
              target="_blank" 
              rel="noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 py-3 px-6 bg-primary text-white font-display uppercase tracking-widest text-xs hover:bg-primary-light transition-colors border border-primary-light shadow-sm w-full"
            >
              <Gift size={16} /> Ver Mesa
            </a>
          </div>

          {/* Sears */}
          <div className="flex flex-col items-center justify-center p-10 border border-secondary/40 bg-[#FDFBF7] shadow-sm hover:shadow-md hover:border-primary transition-all group">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sears_logo_%282010%29.svg/2560px-Sears_logo_%282010%29.svg.png" 
              alt="Sears" 
              className="h-12 object-contain mb-6 opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
            />
            <span className="font-display font-bold text-slate-800 tracking-widest uppercase mb-2">Sears</span>
            <span className="text-slate-500 font-serif text-sm mb-6">Evento: 987654</span>
            <a 
              href="https://www.sears.com.mx/Mesa-de-Regalos" 
              target="_blank" 
              rel="noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 py-3 px-6 bg-primary text-white font-display uppercase tracking-widest text-xs hover:bg-primary-light transition-colors border border-primary-light shadow-sm w-full"
            >
              <Gift size={16} /> Ver Mesa
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
