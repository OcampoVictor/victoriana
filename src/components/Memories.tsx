import { motion } from 'motion/react';

export default function Memories() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      clipPath: 'inset(100% 0 0 0)',
      y: 20,
    },
    visible: { 
      clipPath: 'inset(0% 0 0 0)',
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.76, 0, 0.24, 1] // Modern editorial easing
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.2, filter: 'blur(5px)' },
    visible: { 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { 
        duration: 1.2, 
        ease: [0.76, 0, 0.24, 1] 
      }
    }
  };

  return (
    <div className="w-full flex justify-center py-20 bg-paper border-t border-b border-double border-[6px] border-secondary/30">
      <div className="layout-content-container flex flex-col max-w-[1100px] flex-1 px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center mb-12"
        >
          <span className="material-symbols-outlined text-secondary text-4xl mb-2">camera_enhance</span>
          <h2 className="text-4xl font-display text-primary tracking-[0.2em] uppercase border-y-2 border-secondary py-3 px-8">Memorias</h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]"
        >
          <motion.div variants={itemVariants} className="md:col-span-4 md:row-span-2 group overflow-hidden relative shadow-lg p-3 bg-white border border-secondary/20">
            <div className="absolute top-2 left-2 w-full h-full border border-slate-100 pointer-events-none z-10"></div>
            <div className="w-full h-full overflow-hidden">
              <motion.div
                variants={imageVariants}
                className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-1000 group-hover:scale-105 sepia-[0.5] contrast-[1.1] brightness-90"
                style={{ backgroundImage: 'url("https://i.postimg.cc/SxVLzCdw/img_memorias.jpg")' }}
              ></motion.div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="md:col-span-8 md:row-span-1 group overflow-hidden relative shadow-lg p-3 bg-white border border-secondary/20">
            <div className="absolute top-2 left-2 w-full h-full border border-slate-100 pointer-events-none z-10"></div>
            <div className="w-full h-full overflow-hidden">
              <motion.div
                variants={imageVariants}
                className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-1000 group-hover:scale-105 sepia-[0.5] contrast-[1.1] brightness-90"
                style={{ backgroundImage: 'url("https://i.postimg.cc/ZRDvTLTD/img-memorias-5.jpg")' }}
              ></motion.div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="md:col-span-4 md:row-span-1 group overflow-hidden relative shadow-lg p-3 bg-white border border-secondary/20">
            <div className="absolute top-2 left-2 w-full h-full border border-slate-100 pointer-events-none z-10"></div>
            <div className="w-full h-full overflow-hidden">
              <motion.div
                variants={imageVariants}
                className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-1000 group-hover:scale-105 sepia-[0.5] contrast-[1.1] brightness-90"
                style={{ backgroundImage: 'url("https://i.postimg.cc/yxdhjdNw/img-memorias-3.jpg")' }}
              ></motion.div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="md:col-span-4 md:row-span-1 group overflow-hidden relative shadow-lg p-3 bg-white border border-secondary/20">
            <div className="absolute top-2 left-2 w-full h-full border border-slate-100 pointer-events-none z-10"></div>
            <div className="w-full h-full overflow-hidden">
              <motion.div
                variants={imageVariants}
                className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-1000 group-hover:scale-105 sepia-[0.5] contrast-[1.1] brightness-90"
                style={{ backgroundImage: 'url("https://i.postimg.cc/W3swDScN/img-memorias-4.jpg")' }}
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
