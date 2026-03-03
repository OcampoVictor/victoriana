import { Gift } from 'lucide-react';
import { motion } from 'motion/react';

export default function Gifts() {
  return (
    <div className="w-full flex justify-center py-20 lg:py-24 bg-white border-t-4 border-double border-secondary/20 relative overflow-hidden">
      <div className="layout-content-container flex flex-col items-center max-w-[1080px] flex-1 px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          <span className="material-symbols-outlined text-secondary text-5xl mb-4">volunteer_activism</span>
          <h2 className="text-primary text-5xl lg:text-7xl font-script leading-tight mb-6 text-center">Mesa de Regalos</h2>
          <div className="w-24 h-px bg-secondary/50 mb-8"></div>
          
          <p className="text-slate-600 font-serif italic mb-12 text-xl max-w-2xl">
            Su presencia es nuestro mayor regalo, pero si desean tener un detalle con nosotros, hemos preparado las siguientes opciones:
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* El Palacio de Hierro */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col items-center justify-center p-10 border border-secondary/40 bg-[#FDFBF7] shadow-sm hover:shadow-md hover:border-primary transition-all group"
          >
            <img 
              src="https://i.postimg.cc/CMkQJ77D/palacio_de_hierro_tema_victoriana.png" 
              alt="El Palacio de Hierro" 
              className="h-20 w-full object-contain mb-6 opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
            />
            <span className="text-slate-500 font-serif text-sm mb-6">Evento: 123456</span>
            <a 
              href="https://www.elpalaciodehierro.com/celebralia/" 
              target="_blank" 
              rel="noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 py-3 px-6 bg-primary text-white font-display uppercase tracking-widest text-xs hover:bg-primary-light transition-colors border border-primary-light shadow-sm w-full"
            >
              <Gift size={16} /> Ver Mesa
            </a>
          </motion.div>

          {/* Liverpool */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col items-center justify-center p-10 border border-secondary/40 bg-[#FDFBF7] shadow-sm hover:shadow-md hover:border-primary transition-all group"
          >
            <img 
              src="https://i.postimg.cc/44VSwPPc/liverpool_tema_victoriana.png" 
              alt="Liverpool" 
              className="h-20 w-full object-contain mb-6 opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
            />
            <span className="text-slate-500 font-serif text-sm mb-6">Evento: 654321</span>
            <a 
              href="https://www.liverpool.com.mx/tienda/mesa-de-regalos" 
              target="_blank" 
              rel="noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 py-3 px-6 bg-primary text-white font-display uppercase tracking-widest text-xs hover:bg-primary-light transition-colors border border-primary-light shadow-sm w-full"
            >
              <Gift size={16} /> Ver Mesa
            </a>
          </motion.div>

          {/* Sears */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="flex flex-col items-center justify-center p-10 border border-secondary/40 bg-[#FDFBF7] shadow-sm hover:shadow-md hover:border-primary transition-all group"
          >
            <img 
              src="https://i.postimg.cc/PfYRKyy1/sears_tema_victoriana.png" 
              alt="Sears" 
              className="h-20 w-full object-contain mb-6 opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
            />
            <span className="text-slate-500 font-serif text-sm mb-6">Evento: 987654</span>
            <a 
              href="https://www.sears.com.mx/Mesa-de-Regalos" 
              target="_blank" 
              rel="noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 py-3 px-6 bg-primary text-white font-display uppercase tracking-widest text-xs hover:bg-primary-light transition-colors border border-primary-light shadow-sm w-full"
            >
              <Gift size={16} /> Ver Mesa
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
