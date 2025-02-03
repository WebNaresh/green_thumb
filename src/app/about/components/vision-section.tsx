"use client";

import { motion } from "framer-motion";
import { Eye, Leaf, Users } from "lucide-react";
import Image from "next/image";

export function VisionSection() {
  return (
    <section
      className="py-16 bg-gradient-to-b from-white to-green-50"
      id="vision-section"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Our Vision for a Greener Future
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Green Thumb, we believe in the power of collective action to
            create a sustainable world. Our vision is to inspire and empower
            communities to take charge of their environment and work towards a
            greener, healthier planet.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Eye className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                &quot;Together, we can make a difference&quot;
              </h3>
              <p className="text-gray-600">
                Our mission is to bring people together to protect and restore
                natural ecosystems, promote sustainable practices, and ensure a
                healthy environment for future generations.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-green-100 p-4 rounded-lg"
              >
                <Leaf className="h-6 w-6 text-green-600 mb-2" />
                <h4 className="font-semibold text-green-800 mb-2">
                  Ecosystem Restoration
                </h4>
                <p className="text-sm text-gray-700">
                  Reviving and protecting natural habitats
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-green-100 p-4 rounded-lg"
              >
                <Users className="h-6 w-6 text-green-600 mb-2" />
                <h4 className="font-semibold text-green-800 mb-2">
                  Community Engagement
                </h4>
                <p className="text-sm text-gray-700">
                  Empowering local communities for environmental action
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-green-200 rounded-lg transform rotate-3"></div>
            <Image
              src="/about/about2.jpg"
              alt="Vision for a greener future"
              width={800}
              height={600}
              className="rounded-lg shadow-xl relative z-10"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg"
            >
              <p className="text-green-800 font-semibold">
                Envisioning a world where nature and humanity thrive in harmony
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
