"use client";

import { motion } from "framer-motion";
import { Droplet, Leaf, Users } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  {
    icon: Droplet,
    value: "2.5M",
    label: "Liters of Water Saved",
  },
  {
    icon: Leaf,
    value: "1.2K",
    label: "Trees Planted",
  },
  {
    icon: Users,
    value: "500+",
    label: "Volunteers Engaged",
  },
];

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("stats-section");
    if (element) {
      observer.observe(element);
      return () => observer.unobserve(element);
    }
  }, []);

  return (
    <section
      className="py-16 bg-gradient-to-b from-white to-green-50"
      id="stats-section"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600">
            Measurable change for a sustainable future
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-700 mb-4">
            Every number represents a step towards a healthier environment and
            stronger communities.
          </p>
          <a
            href="#"
            className="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
          >
            Learn More About Our Projects
          </a>
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
  stat: {
    icon: React.ComponentType<{ className: string }>;
    label: string;
    value: string;
  };
  isVisible: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform"
    >
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-green-100 rounded-full">
          <stat.icon className="w-8 h-8 text-green-600" />
        </div>
      </div>
      <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</h3>
      <p className="text-gray-600">{stat.label}</p>
    </motion.div>
  );
}
