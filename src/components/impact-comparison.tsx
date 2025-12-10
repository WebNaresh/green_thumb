"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertTriangle, Calendar, Clock, Droplets, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const timelineItems = [
  {
    icon: Calendar,
    title: "Working Season",
    period: "January - May",
    description: "Optimal dry conditions for silt removal",
    bgColor: "bg-green-100",
    textColor: "text-green-900",
    iconColor: "text-green-700",
    borderColor: "border-green-200",
  },
  {
    icon: Droplets,
    title: "Monsoon Period",
    period: "June - December",
    description: "Operations halt due to heavy rains",
    bgColor: "bg-red-50",
    textColor: "text-red-900",
    iconColor: "text-red-700",
    borderColor: "border-red-200",
  },
  {
    icon: Clock,
    title: "Critical Window",
    period: "Act Now",
    description: "Every delayed day is lost capacity",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-900",
    iconColor: "text-yellow-700",
    borderColor: "border-yellow-200",
  },
];

export function ImpactComparison() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-20 bg-white overflow-hidden relative"
      id="impact-section"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-green-600 uppercase mb-3">
              Why Your Support Matters Now
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Race Against the Rain
            </h3>
            <p className="text-lg text-gray-600">
              We have a limited window to clear the silt before the monsoons fill the dam.
              Once the rains start, our opportunity to desilt closes for the year.
            </p>
          </motion.div>
        </div>

        {/* Timeline Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl border ${item.borderColor} ${item.bgColor} transition-transform hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm text-2xl`}>
                <item.icon className={`h-6 w-6 ${item.iconColor}`} />
              </div>
              <h4 className={`text-xl font-bold ${item.textColor} mb-1`}>{item.title}</h4>
              <p className={`text-sm font-semibold uppercase tracking-wider ${item.iconColor} mb-2 opacity-80`}>{item.period}</p>
              <p className={`${item.textColor} opacity-90`}>{item.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Visual Impact Equation */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">The Power of Your Donation</h3>
              <p className="text-gray-600 mt-2">A simple equation for a sustainable future.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              {/* Left Side: Truck */}
              <div className="group text-center">
                <div className="relative w-64 h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-white transform transition-transform group-hover:scale-105">
                  <Image
                    src="/img/truck.png"
                    alt="Truck with Silt"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-white text-xs font-bold uppercase backdrop-blur-sm">
                    1 Truck Load of Silt
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center justify-center text-green-600">
                <ArrowRight className="h-12 w-12 hidden md:block animate-pulse" />
                <ArrowRight className="h-12 w-12 md:hidden rotate-90 animate-pulse my-4" />
                <span className="text-sm font-bold uppercase tracking-widest mt-2">Equals</span>
              </div>

              {/* Right Side: Tank */}
              <div className="group text-center">
                <div className="relative w-64 h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-white transform transition-transform group-hover:scale-105">
                  <Image
                    src="/img/water_tank.png"
                    alt="Water Tank"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-blue-600/80 p-2 text-white text-xs font-bold uppercase backdrop-blur-sm">
                    1 Tank of Water Saved
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-100">
              <p className="text-xl text-gray-800 leading-relaxed">
                For every truckload of silt we remove, we reclaim enough storage capacity for <span className="font-bold text-blue-600">one full water tank</span>. This water serves Pune throughout the dry summer months.
              </p>
            </div>

            <div className="mt-10 flex justify-center gap-4">
              <Link href="/donate">
                <Button className="h-12 px-8 rounded-full bg-green-600 hover:bg-green-700 text-white text-lg shadow-lg hover:shadow-green-500/30 transition-all">
                  Donate 1 Truck Load
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
