"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <Image
        src="/img/suresh_patil_1.png"
        alt="Colonel Suresh Patil"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Colonel Suresh Patil
        </h1>
        <p className="text-xl md:text-2xl">
          Visionary Conservationist & Founder of Green Thumb Foundation
        </p>
      </motion.div>
    </section>
  );
}
