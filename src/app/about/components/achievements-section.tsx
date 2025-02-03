"use client";

import { motion } from "framer-motion";
import { Droplet, Tractor } from "lucide-react";

export function AchievementsSection() {
  return (
    <motion.section
      className="mb-12"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold text-green-700 mb-4">
        Key Achievements
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <Droplet className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">2.5 Million</h3>
          <p className="text-gray-600">
            Truckloads of silt removed from Khadakwasla Dam
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <Droplet className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Increased Capacity</h3>
          <p className="text-gray-600">
            Significant increase in Khadakwasla Dam&apos;s water storage
            capacity
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <Tractor className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Agricultural Support</h3>
          <p className="text-gray-600">
            Free distribution of nutrient-rich silt to local farmers
          </p>
        </div>
      </div>
    </motion.section>
  );
}
