import { motion } from 'motion/react';

export default function OurStory() {
  return (
    <div className="w-full flex justify-center py-20 lg:py-32 bg-background-light relative">
      <div className="absolute left-0 top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/flower-trail.png')] opacity-5"></div>
      <div className="layout-content-container flex flex-col max-w-[1080px] flex-1 px-6 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 flex flex-col gap-6 lg:pr-8 text-center lg:text-left">
            <div>
              <span className="text-secondary text-xs tracking-[0.4em] font-display uppercase block mb-4 border-l-4 border-primary pl-4">
                Nuestra Historia
              </span>
              <h2 className="text-primary text-5xl lg:text-7xl font-script leading-tight">
                Un Romance Atemporal
              </h2>
            </div>
            <div className="space-y-6 text-slate-700 font-serif text-xl leading-relaxed">
              <p>
                <span className="text-6xl float-left mr-2 text-secondary font-display leading-[0.8]">T</span>odo comenzó con una taza de té y una conversación que parecía no tener fin. En aquel salón antiguo, rodeados de libros y melodías suaves, descubrimos que nuestras almas hablaban el mismo idioma.
              </p>
              <p>
                A través de las estaciones, nuestro amor floreció como los jardines victorianos, cultivado con paciencia, respeto y una profunda admiración mutua.
              </p>
              <p className="font-bold text-accent">
                Ahora, les invitamos a ser testigos del comienzo de nuestro capítulo más importante.
              </p>
            </div>
            <div className="pt-6 flex justify-center lg:justify-start">
              <img
                alt="vintage flower"
                className="h-24 opacity-40 mix-blend-multiply grayscale contrast-150"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSOWYzb-qKuhldhJnwdaWQtrVDeEe8GNFw-HFHA7XE1qscZzdTeeR7SNcQAI9NTTdefygw5FI2ExE6_JdTqew5GbRXOoRjE8ayiR7-3HaJD9KbPw2JIezbJoJZ-9-1dCtGAPDklVtPS2vK-ndHpem_A84LYb0Zv2zj0M_X-iL85_XTulOjDV6ix-g2q1CDwJHOkYg7hZcSyIX_zprfiW_GZ8zDeRg3wKZ0cWSIYqEX74hgmZAJ5FwudEBktxf7SVs-oxpycDQigGcO"
              />
            </div>
          </div>
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="order-1 lg:order-2 relative p-6 bg-white shadow-2xl rotate-1 border border-secondary/20"
          >
            <div className="absolute -top-3 -right-3 w-24 h-24 border-t-[6px] border-r-[6px] border-secondary/60 z-20"></div>
            <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-[6px] border-l-[6px] border-secondary/60 z-20"></div>
            <div className="relative w-full aspect-[3/4] overflow-hidden sepia-charcoal ring-1 ring-slate-200">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://i.postimg.cc/BnN51HpR/img_nuestra_historia.jpg")' }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
