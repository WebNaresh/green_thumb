"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, Droplet, Leaf, Users } from "lucide-react";

const workItems = [
  {
    icon: Droplet,
    title: "Khadakwasla Restoration",
    description:
      "Spearheaded the massive desilting project, removing millions of cubic meters of silt and restoring the dam's lifeline capacity.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Leaf,
    title: "Afforestation Drives",
    description:
      "Led campaigns planting over 100,000 trees in the catchment area, creating green lungs for the city and preventing erosion.",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: Users,
    title: "People's Movement",
    description:
      "Transformed a personal mission into a mass movement, mobilizing thousands of citizens, students, and corporates.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Award,
    title: "Policy & Advocacy",
    description:
      "Actively engaging with government bodies to shape sustainable water management policies for future generations.",
    color: "bg-amber-50 text-amber-600"
  },
];

export function WorkSection() {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-1 bg-green-600 rounded-full" />
        <h2 className="text-2xl font-bold text-gray-900">Key Initiatives</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {workItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
