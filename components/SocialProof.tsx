'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
// import { obra1, obra2 } from '@/src/assets/images/...';

const obras = [
  {
    id: 1,
    img: null,
    name: "[Obra 1]",
    tipo: "[tipo]",
    m2: "[m²]",
    zona: "[zona]"
  },
  {
    id: 2,
    img: null,
    name: "[Obra 2]",
    tipo: "[tipo]",
    m2: "[m²]",
    zona: "[zona]"
  }
];

const testimonials = [
  {
    id: 1,
    quote: "[Testimonio real de cliente 1]",
    name: "[Nombre del cliente]",
    role: "[Cliente / Arquitecto / Diseñador]"
  },
  {
    id: 2,
    quote: "[Testimonio real de cliente 2]",
    name: "[Nombre del cliente]",
    role: "[Cliente / Arquitecto / Diseñador]"
  }
];

export function SocialProof() {
  return (
    <section className="bg-bone py-32 w-full text-graphite overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <span className="block text-copper uppercase tracking-[0.2em] text-sm font-bold mb-4">
            Obras
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight">
            Cada obra es una referencia.
          </h2>
          <div className="h-[2px] w-16 bg-copper mt-8" />
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-32">
          {obras.map((obra) => (
            <motion.div 
              key={obra.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="space-y-4 group"
            >
              <div className="relative aspect-[4/3] w-full bg-graphite/5 overflow-hidden ring-1 ring-black/5 rounded-sm">
                {obra.img ? (
                  <Image
                    src={obra.img}
                    alt={`${obra.name} - ${obra.tipo}`}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-graphite/10 text-graphite/40 font-sans text-sm tracking-widest uppercase">
                    [ SLot foto REAL obra {obra.id} ]
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl uppercase tracking-tight">{obra.name}</h3>
                <p className="font-sans text-graphite-medium mt-1">
                  {obra.tipo} &bull; {obra.m2} &bull; {obra.zona}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {testimonials.map((test) => (
              <motion.div 
                key={test.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <p className="font-editorial italic text-2xl text-graphite">
                  &quot;{test.quote}&quot;
                </p>
                <div>
                  <h4 className="font-sans font-bold text-graphite-medium uppercase tracking-widest text-sm">{test.name}</h4>
                  <p className="font-sans text-graphite-medium/70 text-sm mt-1">{test.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Credibility Line */}
        <div className="text-center flex flex-col items-center">
          <div className="w-px h-16 bg-copper mb-8" />
          <p className="font-display uppercase tracking-widest text-xl text-graphite-medium">
            Instalación a cargo de instaladores certificados bajo el protocolo Cota Cero.
          </p>
        </div>

      </div>
    </section>
  );
}
