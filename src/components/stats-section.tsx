"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Droplet, Leaf, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    icon: Droplet,
    value: 250000000,
    label: "Liters of Water Saved",
    description: "Restoring vital capacity to the Khadakwasla reservoir.",
    color: "from-blue-400 to-cyan-300",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Leaf,
    value: 2500000,
    label: "Trees Planted",
    description: "Creating green lungs for Pune and surrounding areas.",
    color: "from-green-400 to-emerald-300",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    icon: Users,
    value: 500,
    label: "Active Volunteers",
    description: "A growing army of eco-warriors dedicated to change.",
    color: "from-yellow-400 to-orange-300",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
  },
];

export function StatsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      className="py-24 bg-[#0a2f1c] relative overflow-hidden" // Deep forest green
      id="stats-section"
      ref={ref}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[url('/img/noise.png')]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-green-400 uppercase mb-3">
            Our Measurable Impact
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real Numbers, Real Change
          </h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every liter saved and every tree planted is a step towards securing Pune&apos;s future.
            Here is what we have achieved together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              isVisible={inView}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-4xl w-full text-center">
            <h4 className="text-2xl font-bold text-white mb-4">Be Part of the Next Milestone</h4>
            <p className="text-gray-300 mb-8">
              Our work is far from over. Join thousands of others in making a tangible difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 font-bold rounded-full px-8">
                <Link href="/donate">Donate to Impact</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8">
                <Link href="/project">
                  See Our Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  isVisible,
  index,
}: {
  stat: any;
  isVisible: boolean;
  index: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = stat.value;
      const duration = 2500;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative group rounded-2xl p-8 ${stat.bg} backdrop-blur-sm border ${stat.border} hover:border-opacity-50 transition-all duration-300`}
    >
      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${stat.color} p-0.5 mb-6 opacity-80 group-hover:opacity-100 transition-opacity`}>
        <div className="w-full h-full bg-[#0a2f1c] rounded-full flex items-center justify-center">
          <stat.icon className={`w-7 h-7 text-transparent bg-clip-text bg-gradient-to-br ${stat.color}`} color="white" />
        </div>
      </div>

      <div className="space-y-2">
        <h4 className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
          {new Intl.NumberFormat('en-US', { notation: "compact", maximumFractionDigits: 1 }).format(count)}
          {stat.value > 1000 && <span className="text-2xl ml-1">+</span>}
        </h4>
        <p className="text-xl font-bold text-white">{stat.label}</p>
        <p className="text-gray-400 text-sm leading-relaxed pt-2">{stat.description}</p>
      </div>
    </motion.div>
  );
}
