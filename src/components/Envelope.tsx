import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [zIndexSwapped, setZIndexSwapped] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    
    // Swap z-index halfway through the flap opening (0.4s) to allow letter to slide out in front of it
    setTimeout(() => {
      setZIndexSwapped(true);
    }, 400);

    // Wait for the animation to complete before unmounting
    setTimeout(() => {
      onOpen();
    }, 2500); // 2.5 seconds total animation time
  };

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-900/95 backdrop-blur-md"
    >
      <div className="relative w-[320px] sm:w-[400px] md:w-[600px] h-[220px] sm:h-[280px] md:h-[400px] cursor-pointer" onClick={handleOpen}>
        {/* Envelope Back */}
        <div className="absolute inset-0 bg-[#e0d8c3] shadow-2xl rounded-sm z-0"></div>

        {/* Letter Inside */}
        <motion.div 
          initial={{ y: 0, opacity: 1, scale: 1 }}
          animate={isOpen ? { y: "-80%", opacity: 0, scale: 0.9 } : { y: 0, opacity: 1, scale: 1 }}
          transition={{ 
            y: { delay: 0.8, duration: 1.2, ease: "easeInOut" },
            opacity: { delay: 1.2, duration: 0.8, ease: "easeInOut" },
            scale: { delay: 0.8, duration: 1.2, ease: "easeInOut" }
          }}
          className="absolute inset-x-4 top-4 bottom-4 bg-paper shadow-inner flex flex-col items-center justify-center border border-secondary/20 rounded-sm z-10"
        >
          <div className="w-full h-full border border-secondary/10 m-2 flex flex-col items-center justify-center p-4 md:p-8">
            <span className="font-script text-5xl md:text-7xl text-primary mb-2 md:mb-6">S & M</span>
            <span className="font-display text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-500 text-center">Nuestra Boda</span>
          </div>
        </motion.div>

        {/* Left Flap */}
        <div 
          className="absolute inset-0 bg-[#d1c7b1] z-20" 
          style={{ clipPath: 'polygon(0 0, 50% 50%, 0 100%)' }}
        ></div>
        
        {/* Right Flap */}
        <div 
          className="absolute inset-0 bg-[#d1c7b1] z-20" 
          style={{ clipPath: 'polygon(100% 0, 50% 50%, 100% 100%)' }}
        ></div>
        
        {/* Bottom Flap */}
        <div 
          className="absolute inset-0 bg-[#c5bba4] z-30 drop-shadow-[-2px_-2px_4px_rgba(0,0,0,0.1)]" 
          style={{ clipPath: 'polygon(0 100%, 50% 50%, 100% 100%)' }}
        ></div>

        {/* Top Flap */}
        <motion.div 
          animate={isOpen ? { rotateX: 180 } : { rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ 
            transformOrigin: 'top', 
            clipPath: 'polygon(0 0, 100% 0, 50% 50%)',
            zIndex: zIndexSwapped ? 5 : 40
          }}
          className="absolute inset-0 bg-[#e0d8c3] drop-shadow-[0_4px_6px_rgba(0,0,0,0.2)]"
        ></motion.div>

        {/* Wax Seal */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div 
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-20 h-20 md:w-28 md:h-28 bg-primary rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.3)] flex items-center justify-center border-2 border-primary-light hover:scale-105 transition-transform"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/20 flex items-center justify-center">
                <span className="font-script text-white text-3xl md:text-5xl">S&M</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-10 md:bottom-20 flex flex-col items-center gap-4 md:gap-6"
          >
            <p className="text-white/70 font-display tracking-[0.2em] uppercase text-xs md:text-sm animate-pulse">
              Toca el sello para abrir
            </p>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleOpen();
              }}
              className="px-6 py-2 md:px-8 md:py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm border border-white/20 transition-all font-serif italic text-sm md:text-base"
            >
              Ver Invitación
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
