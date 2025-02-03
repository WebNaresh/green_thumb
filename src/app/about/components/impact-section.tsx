"use client";

import { motion } from "framer-motion";
import { BarChart, Droplet, Recycle, Sprout, Users } from "lucide-react";
import Image from "next/image";

const impactItems = [
  {
    icon: Droplet,
    title: "Increased Water Capacity",
    description:
      "Significantly increased water storage capacity of Khadakwasla Dam",
  },
  {
    icon: Sprout,
    title: "Agricultural Improvement",
    description:
      "Improved agricultural yields through distribution of nutrient-rich silt",
  },
  {
    icon: Recycle,
    title: "Enhanced Biodiversity",
    description:
      "Enhanced biodiversity in the dam's catchment area through afforestation",
  },
  {
    icon: Users,
    title: "Replicable Model",
    description:
      "Developed a replicable model for addressing water scarcity issues",
  },
  {
    icon: BarChart,
    title: "Raised Awareness",
    description: "Raised awareness about sustainable environmental practices",
  },
];

export function ImpactSection() {
  return (
    <motion.section
      className="py-16 bg-gradient-to-b from-green-50 to-white"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">
          Our Impact
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/about/about3.jpg"
              alt="Before and after images of Khadakwasla Dam"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-xl font-semibold mb-2">
                Khadakwasla Dam Transformation
              </h3>
              <p className="text-sm">
                Witness the remarkable change in water levels and surrounding
                vegetation
              </p>
            </div>
          </motion.div>
          <div>
            <ul className="space-y-6">
              {impactItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-green-100 p-3 rounded-full">
                    <item.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-700">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        <motion.div
          className="mt-12 bg-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            Key Achievement
          </h3>
          <p className="text-gray-700 text-lg">
            Our efforts have led to the removal of approximately{" "}
            <span className="font-bold text-green-600">
              2.5 million truckloads of silt
            </span>{" "}
            from the Khadakwasla Dam, significantly increasing its water storage
            capacity and benefiting both the environment and local communities.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
