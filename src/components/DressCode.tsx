import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function DressCode() {
  const [activeTab, setActiveTab] = useState<'mujeres' | 'hombres'>('mujeres');

  return (
    <div className="w-full flex justify-center py-20 bg-background-light border-t-4 border-double border-secondary/20">
      <div className="layout-content-container flex flex-col items-center max-w-[1080px] flex-1 px-4 lg:px-8 text-center">
        <span className="material-symbols-outlined text-secondary text-5xl mb-4">checkroom</span>
        <h2 className="text-primary text-5xl lg:text-7xl font-script leading-tight mb-6 text-center">Código de Vestimenta</h2>
        <div className="w-24 h-px bg-secondary/50 mb-8"></div>
        
        <h3 className="text-slate-800 text-2xl font-bold font-serif mb-2">Rigurosa Etiqueta</h3>
        <p className="text-slate-600 font-serif italic mb-12 text-xl max-w-2xl mx-auto">Para acompañarnos en esta velada tan especial, sugerimos los siguientes atuendos.</p>
        
        <div className="w-full max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white border border-secondary/30 p-1 rounded-full shadow-sm">
              <button
                onClick={() => setActiveTab('mujeres')}
                className={`px-8 py-3 rounded-full font-display uppercase tracking-widest text-sm transition-all duration-300 ${
                  activeTab === 'mujeres' 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-slate-500 hover:text-primary'
                }`}
              >
                Mujeres
              </button>
              <button
                onClick={() => setActiveTab('hombres')}
                className={`px-8 py-3 rounded-full font-display uppercase tracking-widest text-sm transition-all duration-300 ${
                  activeTab === 'hombres' 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-slate-500 hover:text-primary'
                }`}
              >
                Hombres
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white border border-secondary/20 shadow-xl overflow-hidden relative min-h-[600px] md:min-h-[450px]">
            <AnimatePresence mode="wait">
              {activeTab === 'mujeres' && (
                <motion.div
                  key="mujeres"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-col md:flex-row h-full absolute inset-0"
                >
                  <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1566162963464-32537243644f?q=80&w=1000&auto=format&fit=crop" 
                      alt="Vestido largo de noche" 
                      className="w-full h-full object-cover sepia-[0.2]"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-paper h-full text-left">
                    <h4 className="font-display text-primary tracking-widest uppercase text-2xl mb-6">Damas</h4>
                    <p className="text-slate-700 font-serif text-lg leading-relaxed mb-6">
                      Vestido largo de noche elegante. Sugerimos tonos joya, pasteles o colores oscuros.
                    </p>
                    <div className="bg-white/50 border-l-4 border-accent p-4">
                      <span className="text-accent font-bold italic block">Por favor, evite el color blanco o marfil.</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'hombres' && (
                <motion.div
                  key="hombres"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-col md:flex-row h-full absolute inset-0"
                >
                  <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1000&auto=format&fit=crop" 
                      alt="Esmoquin o traje oscuro" 
                      className="w-full h-full object-cover sepia-[0.2]"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-paper h-full text-left">
                    <h4 className="font-display text-primary tracking-widest uppercase text-2xl mb-6">Caballeros</h4>
                    <p className="text-slate-700 font-serif text-lg leading-relaxed mb-6">
                      Esmoquin clásico o traje oscuro formal (negro, azul marino o gris oxford) con corbata o moño.
                    </p>
                    <div className="bg-white/50 border-l-4 border-slate-400 p-4">
                      <span className="text-slate-600 italic block">Zapatos de vestir formales.</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
