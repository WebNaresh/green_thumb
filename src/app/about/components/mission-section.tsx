"use client";

import { motion } from "framer-motion";
import { Target, ArrowRight } from "lucide-react";
import Image from "next/image";

export function MissionSection() {
  return (
    <motion.section
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold uppercase tracking-wider">
            <Target className="w-4 h-4" />
            <span>Our Core Mission</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Protecting Our <span className="text-green-600">Water Sovereignty</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Green Thumb Foundation is driven by a singular purpose: to restore the ecological balance of our water bodies. We focus on
            <strong> rejuvenating dams, desilting reservoirs, and mobilizing communities</strong> to take ownership of their natural resources.
          </p>

          <div className="pl-6 border-l-4 border-green-500">
            <p className="text-xl text-gray-800 italic font-serif">
              "We are not just cleaning a dam; we are reclaiming the future for our farmers and citizens."
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            {/* Stats or small badges */}
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-green-700">25+</span>
              <span className="text-sm text-gray-500">Years Active</span>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-green-700">Catchment</span>
              <span className="text-sm text-gray-500">Protection Focus</span>
            </div>
          </div>
        </div>

        {/* Right Content - Visual */}
        <div className="relative">
          <div className="absolute top-0 right-0 w-full h-full bg-green-50 rounded-3xl transform translate-x-6 translate-y-6 -z-10"></div>
          <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
            {/* Simulating a 'News' or 'Impact' snapshot */}
            <div className="aspect-[4/3] relative rounded-xl overflow-hidden mb-4">
              {/* Replace with actual image related to silt removal if possible */}
              <div className="absolute inset-0 bg-gray-200">
                <Image
                  src="/img/hero.png" // Fallback to hero or specific image
                  alt="Excavators removing silt from Khadakwasla dam"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                <p className="text-white font-bold text-lg">70,000 truckloads of silt removed</p>
                <p className="text-green-300 text-sm">A historic milestone in conservation</p>
              </div>
            </div>
            <div className="flex justify-between items-center px-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Project Snapshot</span>
              <ArrowRight className="w-5 h-5 text-green-500" />
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
