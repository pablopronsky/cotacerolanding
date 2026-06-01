'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroImg from '@/src/assets/images/hero_1780354878589.png';
import { Logo } from './Logo';

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-graphite">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="Refined empty space with premium floor"
          fill
          className="object-cover object-center"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Graphite Overlay */}
        <div className="absolute inset-0 bg-graphite/80" />
      </div>

      {/* Header/Nav */}
      <header className="absolute top-0 left-0 w-full p-8 z-20 flex justify-between items-center">
        <Logo />
        <a href="#contacto" className="text-bone uppercase tracking-widest text-sm hover:text-copper transition-colors">
          Contacto
        </a>
      </header>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col items-start justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="block text-copper uppercase tracking-[0.2em] text-sm font-bold mb-6">
            Superficies y Terminaciones
          </span>
          <h1 className="text-5xl sm:text-7xl font-display font-bold text-bone uppercase tracking-tight leading-[0.9]">
            Cada obra tiene un <br className="hidden sm:block" />
            punto de partida.
          </h1>
          <h2 className="mt-4 text-3xl sm:text-5xl font-editorial italic text-bone font-medium">
            Nosotros lo llamamos cota cero.
          </h2>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
            className="h-[2px] w-24 bg-copper my-8 origin-left"
          />

          <p className="text-bone/80 text-lg sm:text-xl font-sans max-w-xl leading-relaxed mb-10">
            No vendemos pisos. Garantizamos cómo se instalan. Un protocolo de obra que controla cada etapa, desde el sustrato hasta la última terminación.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a 
              href="#contacto"
              className="inline-flex items-center justify-center bg-copper text-bone px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-copper-light transition-colors duration-300"
            >
              Agendá tu relevamiento
            </a>
            <a 
              href="#protocolo"
              className="inline-flex items-center gap-2 group text-bone hover:text-copper transition-colors py-4 uppercase tracking-widest text-sm"
            >
              <span>Conocé el protocolo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
