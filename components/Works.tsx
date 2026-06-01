'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import obraImg from '@/src/assets/images/obra_1780354963163.png';

export function Works() {
  return (
    <section className="bg-bone py-32 w-full text-graphite overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <span className="block text-copper uppercase tracking-[0.2em] text-sm font-bold mb-4">
            Obras
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight">
            Cada obra es una referencia.
          </h2>
          <div className="h-[2px] w-16 bg-copper mt-8" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-video w-full group overflow-hidden"
        >
          <Image
            src={obraImg}
            alt="Completed high-end interior"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </motion.div>

      </div>
    </section>
  );
}
