'use client';

import Image, { StaticImageData } from 'next/image';
import { motion } from 'motion/react';
import prot1 from '@/src/assets/images/protocolo_relevamiento_1780354909573.png';
import prot2 from '@/src/assets/images/protocolo_preparacion_1780354992349.png';
import prot3 from '@/src/assets/images/protocolo_aclimatacion_1780355003915.png';
import prot4 from '@/src/assets/images/protocolo_instalacion_1780354923130.png';
import prot5 from '@/src/assets/images/protocolo_terminaciones_1780354936031.png';
import prot6 from '@/src/assets/images/protocolo_cierre_1780364011686.png';

const steps = [
  {
    num: "01",
    title: "Relevamiento",
    desc: "Medimos. Diagnosticamos humedad, niveles y estado del sustrato. Definimos la cota cero real de tu obra antes de tocar un solo material.",
    img: prot1
  },
  {
    num: "02",
    title: "Preparación",
    desc: "Nivelamos y acondicionamos el sustrato. Sin esta base, ningún material rinde lo que promete. Es la etapa que casi nadie respeta y la que define todo.",
    img: prot2
  },
  {
    num: "03",
    title: "Aclimatación",
    desc: "Cada material descansa el tiempo que necesita, en el ambiente donde va a vivir. Sin apuro, sin atajos para entregar antes.",
    img: prot3
  },
  {
    num: "04",
    title: "Instalación",
    desc: "Instaladores certificados bajo protocolo. Cada plancha, cada junta, cada detalle ejecutado según método. Lo mismo, siempre.",
    img: prot4
  },
  {
    num: "05",
    title: "Terminaciones",
    desc: "Perfiles, zócalos, transiciones y sellados. El detalle que separa una obra de un trabajo cualquiera.",
    img: prot5
  },
  {
    num: "06",
    title: "Entrega y Cierre",
    desc: "Recorremos la obra terminada con vos y revisamos cada detalle. Te dejamos el registro completo de lo que se hizo —materiales, etapas y terminaciones— para que sepas exactamente qué quedó y cómo.",
    img: prot6
  }
];

export function Protocol() {
  return (
    <section id="protocolo" className="bg-bone pt-32 pb-24 w-full text-graphite relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        {/* Header */}
        <div className="mb-24 md:mb-32">
          <span className="block text-copper uppercase tracking-[0.2em] text-sm font-bold mb-4">
            El Protocolo
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-bold uppercase tracking-tight">
            Seis etapas. Cero atajos.
          </h2>
          <div className="h-[2px] w-16 bg-copper mt-8" />
        </div>

        {/* Steps with vertical line */}
        <div className="relative space-y-24 md:space-y-48">
          <div className="absolute left-[24px] lg:left-1/2 top-0 bottom-0 w-[1px] bg-copper-light/30 -translate-x-1/2 z-0 hidden lg:block" />
          
          {steps.map((step, idx) => (
            <Step key={step.num} step={step} reverse={idx % 2 !== 0} />
          ))}
        </div>

        <div className="mt-32 md:mt-48 text-center bg-graphite rounded-xl p-12 text-bone">
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

function Step({ step, reverse }: { step: any, reverse: boolean }) {
  return (
    <div className={`relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      
      {/* Text */}
      <div className="flex-1 space-y-6">
        <motion.div 
          initial={{ opacity: 0, x: reverse ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6"
        >
          <span className="text-6xl sm:text-8xl font-editorial font-medium text-copper leading-none">
            {step.num}
          </span>
          <div className="flex-1 h-[1px] bg-copper-light lg:hidden" />
        </motion.div>
        
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-tight"
        >
          {step.title}
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl font-sans text-graphite-medium leading-relaxed max-w-xl cursor-default"
        >
          {step.desc}
        </motion.p>
      </div>

      {/* Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full relative"
      >
        <div className="relative aspect-[3/2] w-full bg-graphite/5 overflow-hidden ring-1 ring-black/5 rounded-sm">
          <Image
            src={step.img}
            alt={step.title}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>

    </div>
  );
}
