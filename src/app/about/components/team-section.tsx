"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function TeamSection() {
  return (
    <motion.section
      className="mb-12"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Team</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-gray-700 mb-4">
          Our dedicated team of environmental experts, community organizers, and passionate volunteers work tirelessly
          to bring our vision to life.
        </p>
        <Button className="bg-green-600 hover:bg-green-700">Meet Our Team</Button>
      </div>
    </motion.section>
  )
}

