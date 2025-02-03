"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export function RecentActivitiesSection() {
  return (
    <motion.section
      className="mb-12"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold text-green-700 mb-4">
        Recent Activities
      </h2>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
        <div className="flex items-center">
          <AlertTriangle className="h-6 w-6 text-yellow-400 mr-2" />
          <h3 className="text-lg font-semibold text-yellow-700">
            Environmental Advocacy
          </h3>
        </div>
        <p className="mt-2 text-gray-700">
          In October 2023, Green Thumb Foundation opposed a proposed
          28-kilometer water tunnel project from Khadakwasla Dam to Phursungi.
          We raised concerns about the potential environmental impact and
          advocated for desilting as a more cost-effective and eco-friendly
          solution to address water management issues.
        </p>
      </div>
    </motion.section>
  );
}
