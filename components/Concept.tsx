'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import conceptoImg from '@/src/assets/images/concepto_cota_1780354895067.png';

export function Concept() {
  return (
    <section className="bg-bone py-24 sm:py-32 w-full relative overflow-hidden text-graphite-medium">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl sm:text-2xl font-sans leading-relaxed">
                En arquitectura, la cota cero es el nivel de referencia. El punto desde el cual se mide todo lo que se construye encima.
              </p>
            </motion.div>

            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[1px] w-24 bg-copper origin-left"
            />

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xl sm:text-2xl font-sans leading-relaxed">
                Un piso no es un revestimiento: es la superficie sobre la que sucede todo. Si ese punto está mal, todo lo demás también.
              </p>
            </motion.div>

            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[1px] w-24 bg-copper origin-left"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-editorial italic text-graphite">
                Por eso no empezamos por el material. Empezamos por el método.
              </p>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/2] w-full"
          >
            <Image
              src={conceptoImg}
              alt="Laser level establishing reference level"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Subtle shadow/gradient inside image border for a bit of depth */}
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(30,30,32,0.1)] pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
