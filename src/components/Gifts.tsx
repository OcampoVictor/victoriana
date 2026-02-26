import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, Plane, X } from 'lucide-react';

export default function Gifts() {
  const [isHoneymoonModalOpen, setIsHoneymoonModalOpen] = useState(false);
  const [isRegistryModalOpen, setIsRegistryModalOpen] = useState(false);

  return (
    <div className="w-full flex justify-center py-20 lg:py-24 bg-white border-t-4 border-double border-secondary/20 relative">
      <div className="layout-content-container flex flex-col items-center max-w-[800px] flex-1 px-4 lg:px-8 text-center">
        <span className="material-symbols-outlined text-secondary text-5xl mb-4">volunteer_activism</span>
        <h2 className="text-primary text-4xl lg:text-5xl font-display uppercase tracking-[0.2em] mb-6">Obsequios</h2>
        <div className="w-24 h-px bg-secondary/50 mb-8"></div>
        
        <p className="text-slate-600 font-serif italic mb-12 text-xl max-w-2xl">
          Su presencia es nuestro mayor regalo, pero si desean tener un detalle con nosotros, hemos preparado las siguientes opciones:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          <button 
            onClick={() => setIsRegistryModalOpen(true)}
            className="flex flex-col items-center justify-center p-10 border border-secondary/40 hover:border-primary transition-all group bg-[#FDFBF7] shadow-sm hover:shadow-md w-full"
          >
            <Gift className="text-secondary group-hover:text-primary transition-colors w-12 h-12 mb-4" strokeWidth={1} />
            <span className="font-display font-bold text-slate-800 tracking-widest uppercase mb-2">Mesa de Regalos</span>
            <span className="text-slate-500 font-serif text-sm">Ver opciones en tienda</span>
          </button>
          
          <button 
            onClick={() => setIsHoneymoonModalOpen(true)}
            className="flex flex-col items-center justify-center p-10 border border-secondary/40 hover:border-primary transition-all group bg-[#FDFBF7] shadow-sm hover:shadow-md w-full"
          >
            <Plane className="text-secondary group-hover:text-primary transition-colors w-12 h-12 mb-4" strokeWidth={1} />
            <span className="font-display font-bold text-slate-800 tracking-widest uppercase mb-2">Luna de Miel</span>
            <span className="text-slate-500 font-serif text-sm">Aportación voluntaria</span>
          </button>
        </div>
      </div>

      {/* Honeymoon Modal */}
      <AnimatePresence>
        {isHoneymoonModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsHoneymoonModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
            >
              <div className="bg-paper w-full max-w-2xl rounded-t-3xl p-8 md:p-12 border-t-8 border-double border-secondary/50 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] pointer-events-auto relative">
                <button 
                  onClick={() => setIsHoneymoonModalOpen(false)}
                  className="absolute top-6 right-6 text-slate-400 hover:text-primary transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="text-center">
                  <Plane className="w-12 h-12 text-secondary mx-auto mb-4" strokeWidth={1} />
                  <h3 className="text-3xl font-script text-primary mb-2">Nuestra Luna de Miel</h3>
                  <div className="w-16 h-px bg-secondary mx-auto mb-6"></div>
                  <p className="text-slate-600 font-serif text-lg mb-8 leading-relaxed">
                    El mejor regalo es su presencia, pero si desean contribuir a nuestra primera aventura como esposos, pueden hacerlo a la siguiente cuenta:
                  </p>
                  
                  <div className="bg-white p-6 border border-secondary/30 rounded-lg shadow-inner inline-block text-left">
                    <p className="text-sm font-display text-accent uppercase tracking-widest mb-1">Banco</p>
                    <p className="font-serif text-xl text-slate-800 mb-4">Banco Internacional</p>
                    
                    <p className="text-sm font-display text-accent uppercase tracking-widest mb-1">Cuenta CLABE</p>
                    <p className="font-mono text-lg text-slate-800 mb-4 tracking-widest">012 345 6789 0123 4567</p>
                    
                    <p className="text-sm font-display text-accent uppercase tracking-widest mb-1">Titular</p>
                    <p className="font-serif text-xl text-slate-800">Sofía & Mateo</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Registry Modal */}
      <AnimatePresence>
        {isRegistryModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsRegistryModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
            >
              <div className="bg-paper w-full max-w-2xl rounded-t-3xl p-8 md:p-12 border-t-8 border-double border-secondary/50 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] pointer-events-auto relative">
                <button 
                  onClick={() => setIsRegistryModalOpen(false)}
                  className="absolute top-6 right-6 text-slate-400 hover:text-primary transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="text-center">
                  <Gift className="w-12 h-12 text-secondary mx-auto mb-4" strokeWidth={1} />
                  <h3 className="text-3xl font-script text-primary mb-2">Mesa de Regalos</h3>
                  <div className="w-16 h-px bg-secondary mx-auto mb-6"></div>
                  <p className="text-slate-600 font-serif text-lg mb-8 leading-relaxed">
                    Si desean tener un detalle con nosotros, hemos seleccionado algunos artículos en las siguientes tiendas:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div className="bg-white p-6 border border-secondary/30 rounded-lg shadow-inner">
                      <p className="font-serif text-xl text-slate-800 mb-2">Liverpool</p>
                      <p className="text-sm font-display text-accent uppercase tracking-widest mb-1">No. de Evento</p>
                      <p className="font-mono text-lg text-slate-800 mb-4 tracking-widest">50123456</p>
                      <a href="https://www.liverpool.com.mx/tienda/mesa-de-regalos" target="_blank" rel="noreferrer" className="text-xs font-display tracking-[0.2em] uppercase text-secondary-dark hover:text-primary border-b border-secondary-dark hover:border-primary pb-1 transition-all inline-flex items-center">
                        Ir a la tienda <span className="material-symbols-outlined text-sm ml-1">open_in_new</span>
                      </a>
                    </div>
                    <div className="bg-white p-6 border border-secondary/30 rounded-lg shadow-inner">
                      <p className="font-serif text-xl text-slate-800 mb-2">Palacio de Hierro</p>
                      <p className="text-sm font-display text-accent uppercase tracking-widest mb-1">No. de Evento</p>
                      <p className="font-mono text-lg text-slate-800 mb-4 tracking-widest">345678</p>
                      <a href="https://www.elpalaciodehierro.com/celebralia/" target="_blank" rel="noreferrer" className="text-xs font-display tracking-[0.2em] uppercase text-secondary-dark hover:text-primary border-b border-secondary-dark hover:border-primary pb-1 transition-all inline-flex items-center">
                        Ir a la tienda <span className="material-symbols-outlined text-sm ml-1">open_in_new</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
