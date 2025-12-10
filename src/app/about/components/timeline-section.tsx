"use client";

import { motion } from "framer-motion";
import { Flag, Truck, Users, ShieldAlert } from "lucide-react";

export function TimelineSection() {
  const milestones = [
    {
      year: "1996",
      title: "Foundation Laid",
      description: "Green Thumb was established by Col. Suresh Patil with a vision to protect the fragile ecosystems of Pune's water bodies.",
      icon: Flag,
      color: "bg-blue-500",
    },
    {
      year: "2012",
      title: "Mission Khadakwasla Begins",
      description: "Initiated the monumental task of desilting the Khadakwasla Dam, realizing that silt was choking the city's lifeline.",
      icon: Truck,
      color: "bg-yellow-500",
    },
    {
      year: "2018",
      title: "A People's Movement",
      description: "The initiative grew into a mass movement, with thousands of volunteers and local farmers joining hands to reclaim water storage.",
      icon: Users,
      color: "bg-green-500",
    },
    {
      year: "2023",
      title: "Stand for Nature",
      description: "Opposed the 28km water tunnel project, advocating for sustainable desilting over expensive and damaging infrastructure.",
      icon: ShieldAlert,
      color: "bg-red-500",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="journey">
      {/* Central Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block" />

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-green-600 font-bold tracking-wider uppercase text-sm">Our Legacy</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">A Journey of Resilience</h2>
        </motion.div>

        <div className="space-y-12 relative z-10">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Content Side */}
              <div className="flex-1 w-full text-center md:text-left">
                <div className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <div className={`absolute top-0 w-full h-1 ${milestone.color} left-0 opacity-80`} />
                  <span className={`text-5xl font-bold text-gray-100 absolute -bottom-4 ${index % 2 === 0 ? "-right-4" : "-left-4"} group-hover:text-green-50 transition-colors`}>{milestone.year}</span>

                  <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse md:justify-start"}`}>
                    <h3 className="text-xl font-bold text-gray-800">{milestone.title}</h3>
                  </div>
                  <p className="text-gray-600 relative z-10">{milestone.description}</p>
                </div>
              </div>

              {/* Icon Center */}
              <div className="relative shrink-0 z-10">
                <div className={`w-12 h-12 rounded-full ${milestone.color} flex items-center justify-center text-white shadow-lg border-4 border-white`}>
                  <milestone.icon className="w-5 h-5" />
                </div>
              </div>

              {/* Empty Side for Balance */}
              <div className="flex-1 w-full hidden md:block text-center ">
                <span className={`text-sm font-bold text-gray-400 block py-8 ${index % 2 !== 0 ? "text-left" : "text-right"}`}>{milestone.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
