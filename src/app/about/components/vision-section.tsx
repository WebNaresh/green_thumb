"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function VisionSection() {
  return (
    <section className="py-16 bg-white flex justify-center" id="vision-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Vision for a Greener Future
          </h2>
          <p className="text-xl text-gray-600">
            At Green Thumb, we believe in the power of collective action to
            create a sustainable world. Our vision is to inspire and empower
            communities to take charge of their environment and work towards a
            greener, healthier planet.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              &quot;Together, we can make a difference&quot;
            </h3>
            <p className="text-gray-600">
              Our mission is to bring people together to protect and restore
              natural ecosystems, promote sustainable practices, and ensure a
              healthy environment for future generations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Image
              src="/img/vision.jpg"
              alt="Vision"
              width={500}
              height={500}
              className="w-full h-64 object-cover object-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
