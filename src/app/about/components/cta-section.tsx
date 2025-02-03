"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <motion.section
      className="text-center"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold text-green-700 mb-4">Join Our Mission</h2>
      <p className="text-lg text-gray-700 mb-6">
        Together, we can make a lasting impact on our environment and communities.
      </p>
      <Button className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">Get Involved</Button>
    </motion.section>
  )
}

