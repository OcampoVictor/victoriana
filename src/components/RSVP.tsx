export default function RSVP() {
  return (
    <div className="w-full flex justify-center py-24 bg-damask relative" id="rsvp-section">
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="layout-content-container flex flex-col max-w-[800px] flex-1 px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary font-display text-xs tracking-[0.3em] font-bold uppercase block mb-6">
            Por Favor Responder Antes Del
          </span>
          <h2 className="text-primary text-4xl md:text-5xl font-display uppercase tracking-widest border-b-2 border-secondary inline-block pb-2 mb-4">1 de Septiembre</h2>
          <p className="text-accent font-serif italic text-xl max-w-md mx-auto mt-6">
            "La felicidad solo es real cuando es compartida."
          </p>
        </div>
        <div className="bg-[#FDFBF7] p-8 md:p-16 shadow-2xl border-double border-4 border-secondary/40 relative mx-4 md:mx-0">
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
        </div>
      </div>
    </div>
  );
}
