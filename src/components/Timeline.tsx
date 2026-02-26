import { Church, Wine, UtensilsCrossed, Music } from 'lucide-react';
import { motion } from 'motion/react';

export default function Timeline() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      } 
    }
  };

  return (
    <div className="w-full flex justify-center py-20 lg:py-28 bg-paper relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 border-l-[20px] border-b-[20px] border-double border-secondary/10 rounded-bl-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 border-r-[20px] border-t-[20px] border-double border-secondary/10 rounded-tr-full pointer-events-none"></div>
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-primary text-5xl lg:text-7xl font-script mb-6 drop-shadow-sm">Cronograma del Día</h2>
          <div className="flex justify-center items-center gap-4">
            <div className="h-[1px] w-12 bg-secondary"></div>
            <span className="material-symbols-outlined text-secondary text-2xl">schedule</span>
            <div className="h-[1px] w-12 bg-secondary"></div>
          </div>
        </motion.div>
        
        <div className="relative">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden md:block absolute top-12 left-10 right-10 h-[2px] bg-secondary/30 w-auto z-0 origin-left"
          ></motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10"
          >
            <motion.div variants={itemVariants} className="flex flex-col items-center group text-center">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-double border-secondary flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 relative">
                <div className="absolute inset-2 border border-dashed border-secondary/40 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <Church className="w-10 h-10 text-primary animate-float-elegant" strokeWidth={1.5} />
              </div>
              <div className="px-2 bg-paper">
                <span className="block text-primary font-bold tracking-[0.1em] text-lg mb-2 font-display">17:00</span>
                <h3 className="text-slate-800 font-serif text-2xl italic mb-1">Ceremonia</h3>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col items-center group text-center">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-double border-secondary flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 relative">
                <div className="absolute inset-2 border border-dashed border-secondary/40 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <Wine className="w-10 h-10 text-primary animate-float-elegant" strokeWidth={1.5} style={{ animationDelay: '1s' }} />
              </div>
              <div className="px-2 bg-paper">
                <span className="block text-primary font-bold tracking-[0.1em] text-lg mb-2 font-display">18:30</span>
                <h3 className="text-slate-800 font-serif text-2xl italic mb-1">Cóctel</h3>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col items-center group text-center">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-double border-secondary flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 relative">
                <div className="absolute inset-2 border border-dashed border-secondary/40 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <UtensilsCrossed className="w-10 h-10 text-primary animate-float-elegant" strokeWidth={1.5} style={{ animationDelay: '2s' }} />
              </div>
              <div className="px-2 bg-paper">
                <span className="block text-primary font-bold tracking-[0.1em] text-lg mb-2 font-display">20:00</span>
                <h3 className="text-slate-800 font-serif text-2xl italic mb-1">Banquete</h3>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col items-center group text-center">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-double border-secondary flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 relative">
                <div className="absolute inset-2 border border-dashed border-secondary/40 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <Music className="w-10 h-10 text-primary animate-float-elegant" strokeWidth={1.5} style={{ animationDelay: '3s' }} />
              </div>
              <div className="px-2 bg-paper">
                <span className="block text-primary font-bold tracking-[0.1em] text-lg mb-2 font-display">22:00</span>
                <h3 className="text-slate-800 font-serif text-2xl italic mb-1">Baile</h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
