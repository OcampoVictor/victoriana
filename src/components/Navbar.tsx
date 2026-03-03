import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Music4, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Audio setup
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); // Placeholder romantic song
    audioRef.current.loop = true;

    const handleScroll = () => {
      const countdownElement = document.getElementById('cuenta-regresiva');
      if (countdownElement) {
        const rect = countdownElement.getBoundingClientRect();
        // Show navbar when the top of the countdown section reaches the top of the viewport (or slightly before)
        if (rect.top <= window.innerHeight * 0.5) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        // Fallback if element not found
        if (window.scrollY > window.innerHeight * 0.8) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  const navLinks = [
    { name: 'Nuestra Historia', href: '#historia' },
    { name: 'Ceremonia', href: '#ceremonia' },
    { name: 'Recepción', href: '#recepcion' },
    { name: 'Hospedaje', href: '#hospedaje' },
    { name: 'Mesa de Regalos', href: '#regalos' },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    // Add slight delay to allow menu to close
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="fixed bottom-0 left-0 w-full z-40 bg-primary text-white shadow-[0_-10px_40px_rgba(0,0,0,0.3)] border-t border-white/10"
          >
            <div className="max-w-[1080px] mx-auto px-4 h-16 flex items-center justify-between">
              {/* Left: Music Toggle */}
              <button 
                onClick={toggleMusic}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
                aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
              >
                {isPlaying ? (
                  <Music className="w-4 h-4 text-secondary animate-pulse" />
                ) : (
                  <Music4 className="w-4 h-4 text-white/70" />
                )}
              </button>

              {/* Center: Title (Desktop only) */}
              <div className="hidden md:block font-script text-2xl text-secondary">
                S & M
              </div>

              {/* Right: Hamburger Menu */}
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="flex items-center gap-2 text-white/90 hover:text-secondary transition-colors"
                aria-label="Abrir menú"
              >
                <span className="hidden md:block font-display text-xs tracking-widest uppercase">Menú</span>
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Side Drawer (Cortina) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-paper z-50 shadow-2xl border-l-4 border-double border-secondary/30 flex flex-col"
            >
              <div className="p-6 flex justify-end">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:text-primary hover:bg-secondary/10 transition-colors"
                >
                  <X className="w-6 h-6" strokeWidth={1.5} />
                </button>
              </div>
              
              <div className="flex-1 flex flex-col items-center justify-center gap-8 p-8">
                <span className="font-script text-5xl text-primary mb-4">S & M</span>
                <div className="w-12 h-px bg-secondary/50 mb-4"></div>
                
                {navLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="font-display text-lg tracking-widest uppercase text-slate-700 hover:text-primary transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
              </div>
              
              <div className="p-8 text-center">
                <p className="text-xs font-serif italic text-slate-500">12 de Octubre, 2026</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
