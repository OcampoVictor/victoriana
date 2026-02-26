import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Navigation, X } from 'lucide-react';

export default function Celebration() {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  return (
    <div className="w-full flex justify-center py-20 bg-background-light border-b border-secondary/20 relative">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="material-symbols-outlined text-secondary text-5xl mb-4">church</span>
          <h2 className="text-primary text-5xl lg:text-6xl font-script mb-4">La Celebración</h2>
          <p className="text-accent font-serif italic text-lg max-w-lg mx-auto">
            Un santuario histórico donde las promesas se convierten en eternidad.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-0 border-4 border-double border-secondary shadow-2xl bg-white">
          <div className="flex flex-col justify-center p-10 md:p-14 gap-8 text-center md:text-left relative overflow-hidden">
            <div className="absolute inset-0 bg-damask opacity-20 z-0"></div>
            <div className="relative z-10">
              <h3 className="text-primary text-3xl font-display mb-3 uppercase tracking-wider">Ceremonia</h3>
              <p className="text-slate-700 font-serif text-lg leading-relaxed mb-6">
                La ceremonia solemne dará inicio a las <strong className="text-primary">16:00 horas</strong> en la Capilla de San Felipe, un espacio consagrado a la unión y la fe.
              </p>
              <div className="w-full h-px bg-secondary/30 my-6"></div>
              <h3 className="text-primary text-3xl font-display mb-3 uppercase tracking-wider">Recepción</h3>
              <p className="text-slate-700 font-serif text-lg leading-relaxed mb-8">
                <strong className="text-primary">Hacienda Los Laureles</strong><br />
                Camino Real a San Felipe #120<br />
                Oaxaca de Juárez, México
              </p>
              <button 
                onClick={() => setIsMapModalOpen(true)}
                className="inline-flex items-center justify-center md:justify-start text-secondary-dark font-bold text-xs hover:text-primary tracking-[0.2em] uppercase font-display border-b border-secondary-dark pb-1 hover:border-primary transition-all"
              >
                <span className="material-symbols-outlined text-lg mr-2">explore</span> Ver Ubicación
              </button>
            </div>
          </div>
          <div className="relative w-full aspect-square md:aspect-auto border-l-0 md:border-l-4 border-double border-secondary bg-[#E8E0D5] overflow-hidden flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 sepia-[0.8] contrast-125 mix-blend-multiply" 
              alt="Vintage Map" 
            />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-80 mix-blend-multiply"></div>
            
            <button 
              onClick={() => setIsMapModalOpen(true)}
              className="relative z-10 flex flex-col items-center animate-bounce cursor-pointer hover:scale-110 transition-transform" 
              style={{ animationDuration: '3s' }}
            >
              <div className="w-14 h-14 bg-primary rounded-full border-4 border-secondary flex items-center justify-center shadow-wax">
                <span className="material-symbols-outlined text-secondary text-3xl">favorite</span>
              </div>
              <div className="w-1 h-10 bg-gradient-to-b from-primary to-transparent"></div>
              <div className="w-8 h-2 bg-black/30 rounded-full blur-sm mt-1"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Map Modal */}
      <AnimatePresence>
        {isMapModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMapModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-4"
            >
              <div className="bg-paper w-full max-w-md p-6 border-4 border-double border-secondary/50 shadow-2xl pointer-events-auto relative">
                <button 
                  onClick={() => setIsMapModalOpen(false)}
                  className="absolute top-4 right-4 text-slate-600 hover:text-primary transition-colors z-20 bg-white/80 rounded-full p-1 backdrop-blur-sm"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div 
                  className="w-full aspect-video bg-cover bg-center mb-6 border border-secondary/30 sepia-[0.3]" 
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop")' }}
                ></div>
                
                <h3 className="text-2xl font-display text-primary mb-2 text-center uppercase tracking-widest">Hacienda Los Laureles</h3>
                <p className="text-slate-600 font-serif text-center mb-8 text-lg">
                  Camino Real a San Felipe #120<br/>
                  Oaxaca de Juárez, México
                </p>
                
                <div className="flex flex-col gap-3">
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white font-display uppercase tracking-widest text-xs hover:bg-primary-light transition-colors border border-primary-light shadow-sm"
                  >
                    <MapPin className="w-4 h-4" /> Abrir en Google Maps
                  </a>
                  <a 
                    href="https://waze.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center justify-center gap-2 w-full py-4 bg-white text-primary font-display uppercase tracking-widest text-xs hover:bg-slate-50 transition-colors border border-secondary/50 shadow-sm"
                  >
                    <Navigation className="w-4 h-4" /> Abrir en Waze
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
