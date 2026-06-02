'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import matImg from '@/src/assets/images/materiales_1780354949434.png';

export function Materials() {
  return (
    <section className="bg-graphite py-32 w-full text-bone overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-none grid grid-cols-2 grid-rows-2 gap-[2px] bg-copper/20"
          >
            {/* Split the image across the grid conceptually, or use a grid of images if we had multiple. Since we only have one image, we'll place it as a full cover, but simulate the grid requested */}
            <div className="absolute inset-0 z-0">
               <Image
                src={matImg}
                alt="Premium surface samples"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Subtle overlay grid lines */}
            <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-evenly">
              <div className="w-full h-px bg-graphite" />
              <div className="w-full h-px bg-graphite" />
            </div>
            <div className="absolute inset-0 pointer-events-none z-10 flex flex-row justify-evenly">
              <div className="w-px h-full bg-graphite" />
              <div className="w-px h-full bg-graphite" />
            </div>
          </motion.div>

          <div className="order-1 lg:order-2 space-y-8 lg:pl-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight leading-[0.95]"
            >
              El protocolo es el mismo.<br />Lo que cambia es lo que la obra necesita.
            </motion.h2>

            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] w-16 bg-copper"
            />

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl font-sans text-bone/80 leading-relaxed"
            >
              SPC, vinílicos, laminados, maderas, decks y revestimientos. No importa la superficie: cada una pasa por el mismo método.
            </motion.p>
          </div>

        </div>

      </div>
    </section>
  );
}
