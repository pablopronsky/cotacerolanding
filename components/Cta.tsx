'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useState } from 'react';
import ctaBg from '@/src/assets/images/cta_bg_1780355021748.png';

export function Cta() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send data to backend here.
  };

  return (
    <section id="contacto" className="relative py-32 w-full text-bone overflow-hidden flex items-center justify-center">
      {/* Background Image with blur & dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={ctaBg}
          alt="Dark architectural background"
          fill
          className="object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-graphite/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 w-full">
        
        <div className="text-center mb-16 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight"
          >
            Tu obra empieza en cota cero.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl font-sans text-bone/80 max-w-xl mx-auto"
          >
            Agendá un relevamiento sin cargo y empezá por donde se debe empezar.
          </motion.p>
        </div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-graphite-medium/40 border border-copper p-8 text-center"
          >
            <h3 className="font-editorial text-3xl italic text-copper mb-2">Solicitud recibida</h3>
            <p className="font-sans text-bone/80">Nos contactaremos a la brevedad para coordinar el relevamiento.</p>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input 
                required
                type="text" 
                placeholder="Nombre" 
                className="w-full bg-transparent border-b border-bone/30 pb-3 text-bone placeholder-bone/40 focus:outline-none focus:border-copper transition-colors font-sans"
              />
              <input 
                required
                type="text" 
                placeholder="WhatsApp o mail" 
                className="w-full bg-transparent border-b border-bone/30 pb-3 text-bone placeholder-bone/40 focus:outline-none focus:border-copper transition-colors font-sans"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <select 
                required
                defaultValue=""
                className="w-full bg-transparent border-b border-bone/30 pb-3 text-bone/60 focus:text-bone focus:outline-none focus:border-copper transition-colors font-sans appearance-none rounded-none"
              >
                <option value="" disabled>Tipo de obra</option>
                <option value="vivienda" className="bg-graphite text-bone">Vivienda</option>
                <option value="comercial" className="bg-graphite text-bone">Comercial</option>
                <option value="obra-nueva" className="bg-graphite text-bone">Obra nueva</option>
              </select>
              <input 
                required
                type="text" 
                placeholder="m² aproximados" 
                className="w-full bg-transparent border-b border-bone/30 pb-3 text-bone placeholder-bone/40 focus:outline-none focus:border-copper transition-colors font-sans"
              />
            </div>
            <div>
              <input 
                required
                type="text" 
                placeholder="Zona (ej: City Bell, Gonnet)" 
                className="w-full bg-transparent border-b border-bone/30 pb-3 text-bone placeholder-bone/40 focus:outline-none focus:border-copper transition-colors font-sans"
              />
            </div>
            
            <div className="pt-8 text-center">
              <button 
                type="submit"
                className="w-full sm:w-auto min-w-[240px] inline-flex items-center justify-center bg-copper text-bone px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-copper-light transition-colors duration-300"
              >
                Quiero mi relevamiento
              </button>
              <p className="font-sans text-bone/50 text-sm mt-4">
                Te contactamos en menos de 24 hs hábiles.
              </p>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
