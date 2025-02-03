"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import Image from "next/image";

export function MissionSection() {
  return (
    <motion.section
      className="mb-12 relative overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-green-500 transform -skew-y-6"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">
          Our Mission
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-green-500 mr-3" />
              <h3 className="text-xl font-semibold text-green-700">
                Sustainable Environmental Protection
              </h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Green Thumb Foundation is committed to environmental protection
              through sustainable practices, with a focus on dam rejuvenation,
              desilting, afforestation, and community engagement. Based in Pune,
              we strive to address critical environmental challenges and promote
              ecological balance.
            </p>
          </motion.div>

          <motion.div
            className="relative rounded-xl overflow-hidden shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/about/about1.png"
              alt="Green Thumb Foundation team working on environmental project"
              width={600}
              height={400}
              layout="responsive"
              className="rounded-xl"
            />
            <div className="absolute inset-0 bg-green-800 bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold text-center px-4">
                Our team in action, working towards a greener future
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
