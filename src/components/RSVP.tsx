import { motion } from 'motion/react';

export default function RSVP() {
  return (
    <div className="w-full flex justify-center py-24 bg-damask relative overflow-hidden" id="rsvp-section">
      <div className="absolute inset-0 bg-primary/5"></div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[100px]"></div>
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[80px]"></div>
      </div>

      <div className="layout-content-container flex flex-col max-w-[800px] flex-1 px-4 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-display text-sm tracking-[0.4em] font-bold uppercase block mb-4">
            Estás cordialmente invitado
          </span>
          <h2 className="text-primary text-5xl lg:text-7xl font-script leading-tight mb-8 text-center">
            Acompáñanos en este día
          </h2>
          <div className="w-24 h-px bg-secondary/50 mx-auto mb-8"></div>
          <span className="text-accent font-display text-xs tracking-[0.3em] font-bold uppercase block mb-4">
            Por Favor Responder Antes Del
          </span>
          <p className="text-primary text-3xl font-serif italic mb-4 text-center">1 de Septiembre</p>
          <p className="text-accent font-serif italic text-lg max-w-md mx-auto mt-6">
            "La felicidad solo es real cuando es compartida."
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="bg-[#FDFBF7] p-8 md:p-16 shadow-2xl border-double border-4 border-secondary/40 relative mx-4 md:mx-0"
        >
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-primary rounded-full shadow-wax flex items-center justify-center border-4 border-primary-light/30 z-20">
            <span className="text-secondary font-script text-3xl font-bold pt-1 pr-1">S&amp;M</span>
          </div>
          <form className="space-y-10 mt-8 relative">
            <div className="absolute top-0 left-0 w-full h-full border border-secondary/10 pointer-events-none m-[-10px]"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-2 group">
                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-accent font-display group-focus-within:text-primary transition-colors" htmlFor="full-name">Nombre Completo</label>
                <input className="w-full bg-transparent border-0 border-b border-secondary focus:border-primary focus:ring-0 px-1 py-2 text-slate-800 placeholder-slate-400/50 transition-colors font-serif text-2xl italic outline-none" id="full-name" placeholder="Su nombre..." type="text" />
              </div>
              <div className="space-y-2 group">
                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-accent font-display group-focus-within:text-primary transition-colors" htmlFor="guests">Invitados</label>
                <input className="w-full bg-transparent border-0 border-b border-secondary focus:border-primary focus:ring-0 px-1 py-2 text-slate-800 placeholder-slate-400/50 transition-colors font-serif text-2xl italic outline-none" id="guests" max="10" min="1" placeholder="Cantidad" type="number" />
              </div>
            </div>
            <div className="space-y-2 group">
              <label className="block text-xs font-bold uppercase tracking-[0.2em] text-accent font-display group-focus-within:text-primary transition-colors" htmlFor="dietary">Restricciones Alimentarias</label>
              <select className="w-full bg-transparent border-0 border-b border-secondary focus:border-primary focus:ring-0 px-1 py-2 text-slate-800 font-serif text-xl italic outline-none" id="dietary" defaultValue="">
                <option disabled value="">Seleccione si aplica</option>
                <option value="none">Ninguna</option>
                <option value="gluten-free">Sin gluten</option>
                <option value="vegetarian">Vegetariano</option>
                <option value="vegan">Vegano</option>
              </select>
            </div>
            <div className="pt-10 flex justify-center">
              <button className="bg-primary hover:bg-primary-light text-[#FDFBF7] font-display uppercase tracking-[0.25em] text-xs font-bold py-5 px-16 shadow-wax hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-sm border-2 border-double border-secondary/50" type="button">
                Enviar Respuesta
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
