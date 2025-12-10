"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-green-900">
      <Image
        src="/img/suresh_patil_1.png"
        alt="Colonel Suresh Patil"
        fill
        className="object-cover opacity-40 mix-blend-overlay"
      />
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-soft-light"></div>

      <div className="absolute inset-0 bg-gradient-to-t from-bg-green-900 via-transparent to-transparent z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center text-white max-w-4xl px-4"
      >
        <span className="inline-block py-1 px-4 rounded-full bg-green-500/20 text-green-300 text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-green-500/30 backdrop-blur-sm">
          The Visionary
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
          Colonel Suresh Patil
        </h1>
        <p className="text-xl md:text-2xl text-green-100 font-light max-w-2xl mx-auto leading-relaxed">
          Founder of Green Thumb Foundation & The "Water Man" of Pune
        </p>
      </motion.div>
    </section>
  );
}
