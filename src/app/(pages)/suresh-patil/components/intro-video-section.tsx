"use client";

import { motion } from "framer-motion";

export function IntroVideoSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-2">
        <div className="w-12 h-1 bg-green-600 rounded-full" />
        <h2 className="text-2xl font-bold text-gray-900">Featured Story</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-black border border-gray-200"
      >
        <iframe
          src="https://www.youtube.com/embed/2W8e3KJ1OHE"
          title="Introduction to Colonel Suresh Patil's Work"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </motion.div>

      <p className="text-gray-600 leading-relaxed text-lg">
        Colonel Suresh Patil&apos;s journey from commanding regiments to commanding excavators for desilting is nothing short of legendary.
        Watch how a retired army officer became the sentinel of Pune&apos;s water security.
      </p>
    </div>
  );
}
