"use client";

import { motion } from "framer-motion";
import { Eye, Globe, Heart } from "lucide-react";
import Image from "next/image";

export function VisionSection() {
  return (
    <section className="py-16 relative" id="vision-section">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row gap-12 items-stretch">
          {/* Left: Image Card */}
          <motion.div
            className="w-full md:w-1/2 relative min-h-[400px] rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/about/about2.jpg"
              alt="Vision for Green Future"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-green-900/30 mix-blend-multiply" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
              <p className="text-green-800 font-serif italic text-lg text-center">
                "We don't inherit the earth from our ancestors, we borrow it from our children."
              </p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                A Vision for a <span className="text-green-600">Thriving Planet</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a world where communities are not just passive observers but active guardians of their environment. Our goal is to create a sustainable ecosystem where water is abundant, and nature serves all.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Eye, title: "Visualize", text: "A clean, water-secure future." },
                { icon: Globe, title: "Mobilize", text: "Communities for massive action." },
                { icon: Heart, title: "Vitalize", text: "Ecosystems for long-term health." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-green-50 p-4 rounded-xl text-center hover:bg-green-100 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                >
                  <item.icon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
