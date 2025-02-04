"use client";

import { motion } from "framer-motion";

export function IntroVideoSection() {
  return (
    <section className="py-12 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-green-800 mb-8 text-center"
        >
          Introduction to Colonel Suresh Patil's Work
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl"
        >
          <iframe
            src="https://www.youtube.com/embed/2W8e3KJ1OHE"
            title="Introduction to Colonel Suresh Patil's Work"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-gray-700"
        >
          This video provides an overview of Colonel Suresh Patil's remarkable
          journey and his impactful work in environmental conservation.
        </motion.p>
      </div>
    </section>
  );
}
