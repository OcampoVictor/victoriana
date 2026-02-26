import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} className="w-full min-h-[calc(100vh-2rem)] flex items-center justify-center relative overflow-hidden bg-background-dark">
      {/* Background Image with Parallax and Overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center sepia-[0.3]"
        style={{ 
          backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYjebzrYlpk5pZHh1TdxJ9MWQEeeNenx44dCSqos4xqyWu-Y1WpKLcFkomZYw3aT5fX-jnfGzJnLrkDtDXdvM7f_VO1ctpePBCAqjBz0pfwZgLwdopCg8EkAkDAkIkHfXY0dyAOBi8WyGPAcEjISPrp0U1s4HfTjqxCAvgscqI0ea7M9yExqMm2XrpculAsYoLOfiMZOF669NRmw6wVv3KwTw_tTdVeJxGJh4IoIhmBn_41355Oy-XR24r0vBoiEfNjX8CsIGjj-3e")',
          y
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#1A1514]"></div>
      <div className="absolute inset-0 bg-damask opacity-10 mix-blend-overlay"></div>

      {/* Ornate Frame */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-6 md:inset-12 border border-secondary/30 pointer-events-none z-10"
      >
        <div className="absolute -top-1 -left-1 w-8 h-8 border-t border-l border-secondary"></div>
        <div className="absolute -top-1 -right-1 w-8 h-8 border-t border-r border-secondary"></div>
        <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b border-l border-secondary"></div>
        <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b border-r border-secondary"></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-5xl"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-secondary font-display tracking-[0.4em] uppercase text-xs md:text-sm mb-8 border-b border-secondary/50 pb-3"
        >
          La Boda De
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-white text-7xl md:text-9xl lg:text-[11rem] font-script leading-none drop-shadow-2xl mb-2"
        >
          Sofía <span className="text-secondary text-5xl md:text-7xl lg:text-8xl font-serif align-middle mx-2 md:mx-6">&amp;</span> Mateo
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-6 my-10"
        >
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-secondary"></div>
          <span className="material-symbols-outlined text-secondary text-2xl md:text-4xl">diamond</span>
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-secondary"></div>
        </motion.div>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-paper text-xl md:text-3xl font-display tracking-[0.2em] uppercase font-light mb-4 text-shadow-sm"
        >
          Sábado, 12 de Octubre, 2026
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-secondary-dark text-lg md:text-2xl font-serif italic mb-14"
        >
          Oaxaca de Juárez, México
        </motion.p>
        
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="group relative flex items-center justify-center px-10 py-4 bg-transparent border border-secondary text-secondary hover:text-background-dark transition-colors duration-500 overflow-hidden"
          href="#rsvp-section"
        >
          <span className="absolute inset-0 w-full h-full bg-secondary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
          <span className="relative font-display tracking-[0.2em] uppercase text-xs md:text-sm font-bold flex items-center gap-3">
            Confirmar Asistencia
            <span className="material-symbols-outlined text-base group-hover:translate-x-2 transition-transform duration-300">east</span>
          </span>
        </motion.a>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary/60 z-20"
      >
        <span className="text-[9px] font-display uppercase tracking-[0.3em]">Descubrir</span>
        <span className="material-symbols-outlined animate-bounce">expand_more</span>
      </motion.div>
    </div>
  );
}
