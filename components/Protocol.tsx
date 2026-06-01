'use client';

import Image, { StaticImageData } from 'next/image';
import { motion } from 'motion/react';
import prot1 from '@/src/assets/images/protocolo_relevamiento_1780354909573.png';
import prot2 from '@/src/assets/images/protocolo_preparacion_1780354992349.png';
import prot3 from '@/src/assets/images/protocolo_aclimatacion_1780355003915.png';
import prot4 from '@/src/assets/images/protocolo_instalacion_1780354923130.png';
import prot5 from '@/src/assets/images/protocolo_terminaciones_1780354936031.png';

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
    title: "Entrega y garantía",
    desc: "Acta de final de obra y certificado de garantía. Documentamos lo que hicimos y respondemos por ello. Por escrito.",
    img: null // Option to use icon
  }
];

export function Protocol() {
  return (
    <section id="protocolo" className="bg-bone py-32 w-full text-graphite">
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

        {/* Steps */}
        <div className="space-y-32 md:space-y-48">
          {steps.map((step, idx) => (
            <Step key={step.num} step={step} reverse={idx % 2 !== 0} />
          ))}
        </div>

      </div>
    </section>
  );
}

function Step({ step, reverse }: { step: any, reverse: boolean }) {
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      
      {/* Text */}
      <div className="flex-1 space-y-6">
        <motion.div 
          initial={{ opacity: 0, x: reverse ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-end gap-6"
        >
          <span className="text-6xl sm:text-8xl font-editorial font-medium text-copper leading-none">
            {step.num}
          </span>
          <div className="h-[1px] w-12 bg-copper-light mb-4 sm:mb-6 hidden sm:block" />
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
        className="flex-1 w-full"
      >
        {step.img ? (
          <div className="relative aspect-[3/2] w-full bg-graphite/5">
            <Image
              src={step.img}
              alt={step.title}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        ) : (
          <div className="relative aspect-[3/2] w-full flex items-center justify-center border border-copper/30 bg-graphite/5">
            <div className="text-center">
              <div className="w-16 h-16 border-2 border-copper rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-editorial text-copper italic text-lg">Documentado y Garantizado</span>
            </div>
          </div>
        )}
      </motion.div>

    </div>
  );
}
