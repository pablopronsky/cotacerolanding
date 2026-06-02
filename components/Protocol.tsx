'use client';

import { motion } from 'motion/react';

const steps = [
  {
    num: "01",
    title: "RELEVAMIENTO",
    desc: "Medimos humedad, niveles y estado del sustrato. Definimos la cota cero real de tu obra antes de tocar un material."
  },
  {
    num: "02",
    title: "PREPARACIÓN",
    desc: "Nivelamos y acondicionamos el sustrato. La base que casi nadie respeta y la que lo define todo."
  },
  {
    num: "03",
    title: "ACLIMATACIÓN",
    desc: "Cada material descansa el tiempo que necesita, en el ambiente donde va a vivir. Sin atajos."
  },
  {
    num: "04",
    title: "INSTALACIÓN",
    desc: "Instaladores certificados bajo protocolo. Cada plancha y cada junta, ejecutadas según método."
  },
  {
    num: "05",
    title: "TERMINACIONES",
    desc: "Perfiles, zócalos, transiciones y sellados. El detalle que separa una obra de un trabajo cualquiera."
  },
  {
    num: "06",
    title: "ENTREGA Y CIERRE",
    desc: "Recorremos la obra terminada con vos y te dejamos el registro completo de lo que se hizo."
  }
];

export function Protocol() {
  return (
    <section id="protocolo" className="bg-bone pt-32 pb-24 w-full text-graphite relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:items-center md:text-center">
          <span className="block text-copper uppercase tracking-[0.2em] text-sm font-bold mb-4">
            El Protocolo
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-bold uppercase tracking-tight">
            Seis etapas. Cero atajos.
          </h2>
        </div>

        {/* Grid Block */}
        <div className="relative w-full bg-[#1A1A1C] border-t border-l border-white/5 overflow-hidden shadow-2xl">
          {/* Top Copper Line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-copper z-20" />
          
          {/* Subtle Grid Pattern */}
          <div 
            className="absolute inset-0 z-0 opacity-[0.03]"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #ece5d6 1px, transparent 1px), linear-gradient(to bottom, #ece5d6 1px, transparent 1px)', 
              backgroundSize: '32px 32px' 
            }}
          />
          
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 sm:p-8 flex flex-col border-b border-r border-white/5 relative bg-graphite/40"
              >
                <span className="font-editorial text-3xl sm:text-4xl text-copper italic mb-6">
                  {step.num}
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-bone uppercase tracking-widest mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-bone/80 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Bridge */}
        <div className="mt-24 md:mt-32 text-center bg-graphite rounded-xl p-12 text-bone">
           <h3 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-tight mb-8">
             Tu obra puede empezar bien.
           </h3>
           <a 
              href="#contacto"
              className="inline-flex items-center justify-center bg-copper text-graphite px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-copper-light transition-colors duration-300"
            >
              Agendá tu relevamiento sin cargo
            </a>
        </div>
      </div>
    </section>
  );
}
