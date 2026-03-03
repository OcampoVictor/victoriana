import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export default function Ceremony() {
  return (
    <div className="w-full flex justify-center py-20 bg-background-light border-b border-secondary/20 relative overflow-hidden">
      <div className="layout-content-container flex flex-col max-w-[1080px] flex-1 px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="material-symbols-outlined text-secondary text-5xl mb-4">church</span>
          <h2 className="text-primary text-5xl lg:text-7xl font-script leading-tight mb-4 text-center">Ceremonia</h2>
          <p className="text-accent font-serif italic text-lg max-w-lg mx-auto">
            Un santuario histórico donde las promesas se convierten en eternidad.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col gap-8 text-center lg:text-left order-2 lg:order-1"
          >
            <div>
              <h3 className="text-primary text-3xl font-display mb-4 uppercase tracking-wider">Templo de Santo Domingo de Guzmán</h3>
              <p className="text-slate-700 font-serif text-xl leading-relaxed mb-2">
                <strong className="text-primary">16:00 horas</strong>
              </p>
              <p className="text-slate-600 font-serif text-lg leading-relaxed">
                Macedonio Alcalá s/n, Ruta Independencia, Centro<br />
                Oaxaca de Juárez, Oax., México
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://maps.app.goo.gl/example" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-center gap-2 py-4 px-8 bg-primary text-white font-display uppercase tracking-widest text-xs hover:bg-primary-light transition-colors border border-primary-light shadow-sm"
              >
                <MapPin className="w-4 h-4" /> Google Maps
              </a>
              <a 
                href="https://waze.com/ul?ll=17.0664,-96.7216&navigate=yes" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-center gap-2 py-4 px-8 bg-white text-primary font-display uppercase tracking-widest text-xs hover:bg-slate-50 transition-colors border border-secondary/50 shadow-sm"
              >
                <Navigation className="w-4 h-4" /> Waze
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="relative w-full aspect-[4/3] lg:aspect-square border-4 border-double border-secondary bg-[#E8E0D5] overflow-hidden order-1 lg:order-2 shadow-2xl"
          >
            <img 
              src="https://i.postimg.cc/kGvwCjh7/tema-victoriana-parroquia.jpg" 
              className="absolute inset-0 w-full h-full object-cover sepia-[0.3] contrast-110" 
              alt="Templo de Santo Domingo" 
            />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-40 mix-blend-multiply pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
