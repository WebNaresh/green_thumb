"use client";

import { motion } from "framer-motion";
import { Droplet, Sprout, Bird, Users, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Droplet,
    title: "Water Security",
    desc: "Restoring capacity for clean drinking water to millions in Pune.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Sprout,
    title: "Agriculture",
    desc: "Providing nutrient-rich silt free of cost to thousands of farmers.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Bird,
    title: "Biodiversity",
    desc: "Planting native trees to protect the catchment area's wildlife.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Creating a replicable model of citizen-led environmental action.",
    color: "bg-purple-100 text-purple-600",
  },
];

export function ImpactSection() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute right-0 top-0 w-96 h-96 bg-green-200 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-green-600 uppercase mb-3">
            Why It Matters
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tangible Change on Ground
          </h3>
          <p className="text-lg text-gray-600">
            Our work goes beyond just digging silt. It is about revitalizing an entire ecosystem that sustains life in Pune.
          </p>
        </div>

        {/* Main Content Split */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Pillars */}
          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className={`w-12 h-12 rounded-lg ${pillar.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{pillar.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}

            <div className="sm:col-span-2 bg-green-600 rounded-xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-green-200">
              <div>
                <p className="text-green-100 text-sm font-medium mb-1">Key Milestone</p>
                <p className="text-3xl font-bold">2.5 Million Truckloads</p>
                <p className="text-green-50 text-sm opacity-90">of Silt Removed & Distributed</p>
              </div>
              <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                <Droplet className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/about/about3.jpg" // Keep the nice before/after image if available
                alt="Khadakwasla Dam Transformation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded mb-3 inline-block">Visual Evidence</span>
                <h4 className="text-2xl font-bold mb-2">Khadakwasla Reborn</h4>
                <p className="text-gray-200 text-sm mb-4">
                  Comparing the water levels and green cover over the last decade shows undeniable progress.
                </p>

              </div>
            </div>

            {/* Float Card */}
            <div className="absolute -left-6 top-10 bg-white p-4 rounded-lg shadow-lg max-w-[200px] hidden md:block animate-float">
              <p className="font-bold text-gray-900 text-sm mb-1">Did you know?</p>
              <p className="text-xs text-gray-500">Silt is rich in nutrients and helps farmers reduce fertilizer costs by 50%!</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
