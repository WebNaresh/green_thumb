"use client"

import { motion } from "framer-motion"
import { Globe } from "lucide-react"

export function PhilosophySection() {
  return (
    <motion.section
      className="mb-12"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Philosophy</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
        <Globe className="h-16 w-16 text-green-500 flex-shrink-0" />
        <div>
          <h3 className="text-xl font-semibold mb-2">Act Locally, Think Globally</h3>
          <p className="text-gray-700">We believe in community-driven solutions for global environmental challenges.</p>
        </div>
      </div>
    </motion.section>
  )
}

