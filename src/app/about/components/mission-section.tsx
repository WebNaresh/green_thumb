"use client"

import { motion } from "framer-motion"

export function MissionSection() {
  return (
    <motion.section
      className="mb-12"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Mission</h2>
      <p className="text-lg text-gray-700 bg-white p-6 rounded-lg shadow-lg">
        Green Thumb Foundation is committed to environmental protection through sustainable practices like dam
        rejuvenation, afforestation, and community engagement.
      </p>
    </motion.section>
  )
}

