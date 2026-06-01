'use client';

import { motion } from 'motion/react';

export function Problem() {
  return (
    <section className="bg-graphite py-32 sm:py-48 w-full relative flex items-center justify-center text-bone overflow-hidden">
      {/* Subtle background grain noise effect */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-12">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-display font-bold uppercase tracking-tight leading-[0.9]"
        >
          El material lo elige cualquiera.<br className="hidden sm:block" /> El resultado lo define el protocolo.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl font-sans text-bone/80 leading-relaxed max-w-3xl mx-auto"
        >
          La mayoría de las fallas en un piso no son del material. Son de la instalación y del sustrato que nadie controló. Humedad mal medida. Niveles que no se respetaron. Tiempos de aclimatación que se saltearon para entregar más rápido.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-3xl sm:text-4xl lg:text-5xl font-editorial italic text-copper">
            &quot;Un piso mal puesto no se nota el primer día. Se nota el primer invierno.&quot;
          </p>
        </motion.div>

      </div>
    </section>
  );
}
